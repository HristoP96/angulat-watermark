/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Binding } from "./Binding";
import { DictionaryUtil } from "./dictionary";
import { UnsetValue } from "./UnsetValue";

/**
 * @hidden 
 */
export class DependencyObject extends Base {
	static $t: Type = markType(DependencyObject, 'DependencyObject');
	constructor() {
		super();
		this.localValues = DictionaryUtil.dictionaryCreate();
		this.bindings = DictionaryUtil.dictionaryCreate();
	}
	private localValues: Map<string, any> = null;
	private bindings: Map<string, any> = null;
	getValue(dp: DependencyProperty): any {
		if (this.localValues.has(dp.name)) {
			return this.localValues.get(dp.name);
		}
		return dp.propertyMetadata.defaultValue;
	}
	setValue(dp_: DependencyProperty, value: any): void {
		if (dp_.hasCallback) {
			let oldValue_: any = null;
			if (this.localValues.has(dp_._name)) { oldValue_ = this.localValues.get(dp_._name); };
			this.localValues.set(dp_._name, value);
			dp_.propertyMetadata.propertyChangedCallback(this, new DependencyPropertyChangedEventArgs(dp_, value, oldValue_));
		} else {
			this.localValues.set(dp_._name, value);
		}
	}
	clearValue(dp: DependencyProperty): void {
		this.localValues.delete(dp._name);
	}
	readLocalValue(dp: DependencyProperty): any {
		if (this.localValues.has(dp._name)) {
			return this.localValues.get(dp.name);
		}
		return DependencyProperty.unsetValue;
	}
	setBinding(dp: DependencyProperty, binding: Binding): void {
		if (dp == null) {
			return;
		}
		this.bindings.set(dp.name, binding);
	}
	getValueAlt(dp: DependencyProperty): any {
		return this.getValue(dp);
	}
	setValueAlt(dp_: DependencyProperty, value: any): void {
		this.setValue(dp_, value);
	}
}

/**
 * @hidden 
 */
export class DependencyProperty extends Base {
	static $t: Type = markType(DependencyProperty, 'DependencyProperty');
	readonly _name: string = null;
	private readonly _propertyType: Type = null;
	private readonly _propertyMetadata: PropertyMetadata = null;
	static readonly unsetValue: any = new UnsetValue();
	readonly _hasCallback: boolean = false;
	get hasCallback(): boolean {
		return this._hasCallback;
	}
	constructor(name: string, propertyType: Type, propertyMetadata: PropertyMetadata) {
		super();
		this._name = name;
		this._propertyType = propertyType;
		this._propertyMetadata = propertyMetadata;
		if (this._propertyMetadata != null && this._propertyMetadata.propertyChangedCallback != null) {
			this._hasCallback = true;
		} else {
			this._hasCallback = false;
		}
	}
	get propertyMetadata(): PropertyMetadata {
		return this._propertyMetadata;
	}
	get propertyType(): Type {
		return this._propertyType;
	}
	get name(): string {
		return this._name;
	}
	static register(name: string, propertyType: Type, ownerType: Type, propertyMetadata: PropertyMetadata): DependencyProperty {
		return DependencyPropertiesCollection.instance.register(name, propertyType, ownerType, propertyMetadata);
	}
	static queryRegisteredProperty(name: string, ownerType: Type): DependencyProperty {
		if (ownerType == null) {
			return null;
		}
		let dp: DependencyProperty = <DependencyProperty>DependencyPropertiesCollection.instance.getProperty(ownerType.typeName + name);
		if (dp != null) {
			return dp;
		}
		return DependencyProperty.queryRegisteredProperty(name, ownerType.baseType);
	}
	static registerAlt(name: string, propertyType: Type, ownerType: Type, propertyMetadata: PropertyMetadata): DependencyProperty {
		return DependencyProperty.register(name, propertyType, ownerType, propertyMetadata);
	}
}

/**
 * @hidden 
 */
export class DependencyPropertiesCollection extends Base {
	static $t: Type = markType(DependencyPropertiesCollection, 'DependencyPropertiesCollection');
	private _dependencyProperties: Map<string, any> = null;
	private static _instance: DependencyPropertiesCollection = null;
	static get instance(): DependencyPropertiesCollection {
		if (DependencyPropertiesCollection._instance == null) {
			DependencyPropertiesCollection._instance = new DependencyPropertiesCollection();
		}
		return DependencyPropertiesCollection._instance;
	}
	constructor() {
		super();
		if (this._dependencyProperties == null) {
			this._dependencyProperties = DictionaryUtil.dictionaryCreate();
		}
	}
	getProperty(key: string): DependencyProperty {
		return <DependencyProperty>this._dependencyProperties.get(key);
	}
	register(name: string, propertyType: Type, ownerType: Type, propertyMetadata: PropertyMetadata): DependencyProperty {
		let dependencyProperty: DependencyProperty = new DependencyProperty(name, propertyType, propertyMetadata);
		this._dependencyProperties.set(ownerType.typeName + name, dependencyProperty);
		return dependencyProperty;
	}
}

/**
 * @hidden 
 */
export class DependencyPropertyChangedEventArgs extends Base {
	static $t: Type = markType(DependencyPropertyChangedEventArgs, 'DependencyPropertyChangedEventArgs');
	private _newValue: any = null;
	private _oldValue: any = null;
	constructor(dp: DependencyProperty, newValue: any, oldValue: any) {
		super();
		this._newValue = newValue;
		this._oldValue = oldValue;
		this._property = dp;
	}
	private _property: DependencyProperty = null;
	get property(): DependencyProperty {
		return this._property;
	}
	set property(value: DependencyProperty) {
		this._property = value;
	}
	get newValue(): any {
		return this._newValue;
	}
	get oldValue(): any {
		return this._oldValue;
	}
}

/**
 * @hidden 
 */
export class PropertyMetadata extends Base {
	static $t: Type = markType(PropertyMetadata, 'PropertyMetadata');
	private _defaultValue: any = null;
	get defaultValue(): any {
		return this._defaultValue;
	}
	set defaultValue(value: any) {
		this._defaultValue = value;
	}
	private _propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void = null;
	get propertyChangedCallback(): (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void {
		return this._propertyChangedCallback;
	}
	set propertyChangedCallback(value: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void) {
		this._propertyChangedCallback = value;
	}
	constructor(initNumber: number, defaultValue: any);
	constructor(initNumber: number, propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void);
	constructor(initNumber: number, defaultValue: any, propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let defaultValue: any = <any>_rest[0];
				this.defaultValue = defaultValue;
				this.propertyChangedCallback = null;
			}
			break;

			case 1:
			{
				let propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void = <(d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void>_rest[0];
				this.defaultValue = null;
				this.propertyChangedCallback = propertyChangedCallback;
			}
			break;

			case 2:
			{
				let defaultValue: any = <any>_rest[0];
				let propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void = <(d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void>_rest[1];
				this.defaultValue = defaultValue;
				this.propertyChangedCallback = propertyChangedCallback;
			}
			break;

		}

	}
	static createWithCallback(propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void): PropertyMetadata {
		return new PropertyMetadata(1, propertyChangedCallback);
	}
	static createWithDefaultAndCallback(defaultValue: any, propertyChangedCallback: (d: DependencyObject, e: DependencyPropertyChangedEventArgs) => void): PropertyMetadata {
		return new PropertyMetadata(2, defaultValue, propertyChangedCallback);
	}
}


