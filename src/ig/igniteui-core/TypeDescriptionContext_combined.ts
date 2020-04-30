/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, Enum, String_$type, Delegate_$type, EnumUtil, markType } from "./type";
import { TypeDescriptionPlatform } from "./TypeDescriptionPlatform";
import { Dictionary$2 } from "./Dictionary$2";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { TypeDescriptionWellKnownType, TypeDescriptionWellKnownType_$type } from "./TypeDescriptionWellKnownType";
import { Description } from "./Description";
import { stringReplace } from "./string";

/**
 * @hidden 
 */
export class TypeDescriptionContext extends Base {
	static $t: Type = markType(TypeDescriptionContext, 'TypeDescriptionContext');
	constructor(adapter: IComponentRendererAdapter, platform: TypeDescriptionPlatform) {
		super();
		this._adapter = adapter;
		this._platform = platform;
	}
	private _metadataStore: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	private _constructorStore: Dictionary$2<string, () => any> = new Dictionary$2<string, () => any>(String_$type, Delegate_$type, 0);
	private _adapter: IComponentRendererAdapter = null;
	private _platform: TypeDescriptionPlatform = <TypeDescriptionPlatform>0;
	register(typeName: string, metadata: Dictionary$2<string, string>): void {
		this._metadataStore.item(typeName, metadata);
	}
	registerDescriptionConstructor(typeName: string, construct: () => any): void {
		this._constructorStore.item(typeName, construct);
	}
	static toPascal(key_: string): string {
		if (key_ == null) {
			return null;
		}
		return key_.substr(0, 1).toUpperCase() + key_.substr(1);
	}
	static toCamel(key_: string): string {
		if (key_ == null) {
			return null;
		}
		return key_.substr(0, 1).toLowerCase() + key_.substr(1);
	}
	getMetadata(typeName: string, propertyName: string): TypeDescriptionMetadata {
		if (this._metadataStore.containsKey(typeName + "@@" + propertyName)) {
			return <TypeDescriptionMetadata>this._metadataStore.item(typeName + "@@" + propertyName);
		}
		if (this._metadataStore.containsKey(typeName)) {
			let metadata: TypeDescriptionMetadata = new TypeDescriptionMetadata();
			metadata.owningType = typeName;
			metadata.propertyName = propertyName;
			let metaStore = <Dictionary$2<string, string>>this._metadataStore.item(typeName);
			if (!metaStore.containsKey(propertyName)) {
				this._metadataStore.item(typeName + "@@" + propertyName, null);
				return null;
			}
			let meta = <string>metaStore.item(propertyName);
			let knownType: string = "Unknown";
			let specificType: string = null;
			let specificExternalType: string = null;
			let collectionElementType: string = null;
			let superMetaPars = meta.split(')');
			if (superMetaPars.length > 1) {
				let nameMap = superMetaPars[0];
				meta = superMetaPars[1];
				nameMap = stringReplace(nameMap, "(", "");
				let nameParts = nameMap.split(',');
				for (let i = 0; i < nameParts.length; i++) {
					let name = nameParts[i];
					let mappingParts = name.split(':');
					let plat = mappingParts[0];
					let platName = mappingParts[1];
					let platform: TypeDescriptionPlatform = TypeDescriptionPlatform.Angular;
					switch (plat) {
						case "web":
						metadata.addMapping(TypeDescriptionPlatform.Angular, platName);
						metadata.addMapping(TypeDescriptionPlatform.React, platName);
						metadata.addMapping(TypeDescriptionPlatform.WebComponents, platName);
						metadata.addMapping(TypeDescriptionPlatform.JQuery, platName);
						continue;

						case "w":
						platform = TypeDescriptionPlatform.WPF;
						break;

						case "a":
						platform = TypeDescriptionPlatform.Angular;
						break;

						case "r":
						platform = TypeDescriptionPlatform.React;
						break;

						case "j":
						platform = TypeDescriptionPlatform.JQuery;
						break;

						case "wc":
						platform = TypeDescriptionPlatform.WebComponents;
						break;

						case "xf":
						platform = TypeDescriptionPlatform.XamarinForms;
						break;

						case "xa":
						platform = TypeDescriptionPlatform.XamarinAndroid;
						break;

						case "xi":
						platform = TypeDescriptionPlatform.XamariniOS;
						break;

						case "wf":
						platform = TypeDescriptionPlatform.WindowsForms;
						break;

					}

					metadata.addMapping(platform, platName);
				}
			}
			let metaParts = meta.split(':');
			if (metaParts.length >= 4) {
				collectionElementType = metaParts[3];
			}
			if (metaParts.length >= 3) {
				specificType = metaParts[2];
			}
			if (metaParts.length >= 2) {
				specificExternalType = metaParts[1];
			}
			if (metaParts.length >= 1) {
				knownType = metaParts[0];
			}
			metadata.knownType = EnumUtil.getEnumValue<TypeDescriptionWellKnownType>(TypeDescriptionWellKnownType_$type, EnumUtil.parse(TypeDescriptionWellKnownType_$type, knownType, true));
			metadata.specificExternalType = specificExternalType;
			metadata.specificType = specificType;
			metadata.collectionElementType = collectionElementType;
			this._metadataStore.item(typeName + "@@" + propertyName, metadata);
			return metadata;
		}
		return null;
	}
	createDescriptionForType(type: string): any {
		if (this._constructorStore.containsKey(type)) {
			return this._constructorStore.item(type)();
		}
		return null;
	}
	setDescriptionProperty(desc: Description, key: string, value: any): void {
		if (TypeDescriptionMetadata.shouldCamelize(this._platform)) {
			key = TypeDescriptionContext.toCamel(key);
		} else {
			key = TypeDescriptionContext.toPascal(key);
		}
		this._adapter.setPropertyValue(desc, key, value, null);
	}
	createColorCollection(colors: any[]): any {
		return this._adapter.createColorCollection(colors);
	}
	createBrushCollection(brushes: any[]): any {
		return this._adapter.createBrushCollection(brushes);
	}
	createObject(type: string, container: any): any {
		return this._adapter.createObject(type, container, this);
	}
	coerceToEnum(type: string, newValue: string): any {
		return this._adapter.coerceToEnum(type, this, newValue);
	}
}

/**
 * @hidden 
 */
export interface IComponentRendererAdapter { 
	createObject(type: string, container: any, context: TypeDescriptionContext): any;
createColorCollection(colors: any[]): any;
createBrushCollection(brushes: any[]): any;
coerceToEnum(type: string, context: TypeDescriptionContext, value: string): any;
onUIThread(container: any, action: () => void): void;
setOrUpdateCollectionOnTarget(container: any, propertyName: string, propertyMetadata: TypeDescriptionMetadata, context: TypeDescriptionContext, target: any, value: any): void;
setPropertyValue(target: any, propertyName: string, value: any, oldValue: any): void;
getPropertyValue(target: any, propertyName: string): any;
clearContainer(container: any, context: TypeDescriptionContext, continueAction: (arg1: boolean) => void): void;
getRootObject(container: any): any;
clearCollection(target: any, propertyName: string, metadata: TypeDescriptionMetadata): void;
addItemToCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, newIndex: number, item: any): void;
resetPropertyOnTarget(container: any, propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any): void;
replaceItemInCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, newIndex: number, item: any): void;
removeItemFromCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, oldIndex: number): void;
replaceRootItem(container: any, type: string, context: TypeDescriptionContext, continueAction: (arg1: boolean) => void): void;
removeRootItem(container: any, context: TypeDescriptionContext, continueAction: (arg1: boolean) => void): void;
flushChanges(container: any): void;
}

/**
 * @hidden 
 */
export let IComponentRendererAdapter_$type = new Type(null, 'IComponentRendererAdapter');


