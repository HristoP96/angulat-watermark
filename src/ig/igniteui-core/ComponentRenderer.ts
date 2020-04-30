/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, fromEnum, typeCast, Date_$type, Boolean_$type, Array_$type, String_$type, Delegate_$type, runOn, Type, markType } from "./type";
import { IComponentRendererAdapter } from "./IComponentRendererAdapter";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { TypeDescriptionPropretyTransforms } from "./TypeDescriptionPropretyTransforms";
import { TypeDescriptionCleanups } from "./TypeDescriptionCleanups";
import { Dictionary$2 } from "./Dictionary$2";
import { Description } from "./Description";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { ContainerState } from "./ContainerState";
import { Queue$1 } from "./Queue$1";
import { DescriptionTreeAction } from "./DescriptionTreeAction";
import { DescriptionRef } from "./DescriptionRef";
import { List$1 } from "./List$1";
import { TypeDescriptionPlatform } from "./TypeDescriptionPlatform";
import { DescriptionSerializerBuilder } from "./DescriptionSerializerBuilder";
import { DescriptionSerializer } from "./DescriptionSerializer";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
import { JsonDictionaryParser } from "./JsonDictionaryParser";
import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { DescriptionResult } from "./DescriptionResult";
import { JsonDictionaryValue } from "./JsonDictionaryValue";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { DescriptionTreeBuilder } from "./DescriptionTreeBuilder";
import { DescriptionTreeReconciler } from "./DescriptionTreeReconciler";
import { DescriptionTreeActionType } from "./DescriptionTreeActionType";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { TypeDescriptionWellKnownType } from "./TypeDescriptionWellKnownType";
import { NotImplementedException } from "./NotImplementedException";
import { SizeDescription } from "./SizeDescription";
import { RectDescription } from "./RectDescription";
import { PointDescription } from "./PointDescription";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";
import { ComponentRendererAdapter } from "./ComponentRendererAdapter";
import { stringIsNullOrEmpty, stringStartsWith } from "./string";

/**
 * @hidden 
 */
export class ComponentRenderer extends Base {
	static $t: Type = markType(ComponentRenderer, 'ComponentRenderer');
	private _adapter: IComponentRendererAdapter = null;
	get adapter(): IComponentRendererAdapter {
		return this._adapter;
	}
	set adapter(value: IComponentRendererAdapter) {
		this._adapter = value;
	}
	private _context: TypeDescriptionContext = null;
	get context(): TypeDescriptionContext {
		return this._context;
	}
	set context(value: TypeDescriptionContext) {
		this._context = value;
	}
	private _transformer: TypeDescriptionPropretyTransforms = null;
	get transformer(): TypeDescriptionPropretyTransforms {
		return this._transformer;
	}
	set transformer(value: TypeDescriptionPropretyTransforms) {
		this._transformer = value;
	}
	private _cleanupMethods: TypeDescriptionCleanups = null;
	get cleanupMethods(): TypeDescriptionCleanups {
		return this._cleanupMethods;
	}
	set cleanupMethods(value: TypeDescriptionCleanups) {
		this._cleanupMethods = value;
	}
	private static platform: TypeDescriptionPlatform = TypeDescriptionPlatform.Angular;
	constructor() {
		super();
		let componentRendererAdapter = this.createAdapter();
		this.adapter = componentRendererAdapter;
		this.context = new TypeDescriptionContext(componentRendererAdapter, ComponentRenderer.platform);
		this.transformer = new TypeDescriptionPropretyTransforms();
		this.cleanupMethods = new TypeDescriptionCleanups();
	}
	private createAdapter(): IComponentRendererAdapter {
		return <IComponentRendererAdapter><any>(new ComponentRendererAdapter());
	}
	toJson(getContainerName: (arg1: any) => string): string {
		let ret: DescriptionSerializerBuilder = new DescriptionSerializerBuilder();
		let ser: DescriptionSerializer = new DescriptionSerializer();
		ret.appendLine("{");
		ret.increaseTabLevel();
		ret.appendLine("\"descriptions\": {");
		ret.increaseTabLevel();
		let first: boolean = true;
		for (let key of fromEnum<any>(this._currentDescription.keys)) {
			if (first) {
				first = false;
			} else {
				ret.appendLine(",");
			}
			let container = key;
			let tree = this._currentDescription.item(key);
			let containerName: string = "root";
			containerName = getContainerName(container);
			if (stringIsNullOrEmpty(containerName)) {
				containerName = "root";
			}
			ret.append("\"" + containerName + "\"");
			ret.append(": ");
			ser.serializeTree(this.context, tree, ret);
		}
		ret.appendLine("");
		ret.decreaseTabLevel();
		ret.append("}");
		if (this._userValues.count > 0) {
			ret.append(",");
		}
		ret.appendLine("");
		if (this._userValues.count > 0) {
			first = true;
			ret.appendLine("refs: {");
			ret.increaseTabLevel();
			for (let key1 of fromEnum<string>(this._userValues.keys)) {
				if (!this.canSerializeRef(key1, this._userValues.item(key1))) {
					continue;
				}
				if (first) {
					first = false;
				} else {
					ret.appendLine(",");
				}
				this.serializeRef(ret, key1, this._userValues.item(key1));
			}
			ret.appendLine("");
			ret.decreaseTabLevel();
			ret.appendLine("}");
		}
		ret.decreaseTabLevel();
		ret.appendLine("}");
		return ret.toString();
	}
	private serializeRef(sb: DescriptionSerializerBuilder, key: string, v: any): void {
		sb.append("\"" + key + "\": ");
		this.serializeRefValue(sb, v);
	}
	private serializeRefValue(sb: DescriptionSerializerBuilder, v: any): void {
		if (this.isPrimitiveValue(v)) {
			if (typeof v === 'string') {
				sb.append(v == null ? "null" : "\"" + v.toString() + "\"");
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeof v === 'number') {
				sb.append(v == null ? "null" : v.toString());
			} else if (typeCast<Date>(Date_$type, v) !== null) {
				let v_ = v;
				sb.append("\"" + <string>(v_.toJSON()) + "\"");
			} else if (typeCast<boolean>(Boolean_$type, v) !== null) {
				sb.append(v == null ? "null" : v.toString().toLowerCase());
			} else {
				sb.append("null");
			}
		} else {
			if (v == null) {
				sb.append("null");
				return;
			}
			if (this.isCollection(v)) {
				sb.appendLine("[");
				sb.increaseTabLevel();
				let lds: DataSourceLocalDataProvider = new DataSourceLocalDataProvider();
				lds.dataSource = <IEnumerable><any><any>v;
				for (let i = 0; i < lds.actualCount; i++) {
					if (i > 0) {
						sb.appendLine(",");
					}
					this.serializeDSItem(sb, lds, i);
				}
				sb.appendLine("");
				sb.decreaseTabLevel();
				sb.append("]");
			} else {
				let arr = <any[]>[ v ];
				let lds1: DataSourceLocalDataProvider = new DataSourceLocalDataProvider();
				lds1.dataSource = <IEnumerable><any><any>arr;
				this.serializeDSItem(sb, lds1, 0);
			}
		}
	}
	private isPrimitiveValue(v: any): boolean {
		if (typeof v === 'string') {
			return true;
		}
		if (typeof v === 'number' || typeof v === 'number' || typeof v === 'number' || typeof v === 'number' || typeof v === 'number' || typeof v === 'number' || typeof v === 'number') {
			return true;
		}
		if (typeCast<Date>(Date_$type, v) !== null) {
			return true;
		}
		if (typeCast<boolean>(Boolean_$type, v) !== null) {
			return true;
		}
		return false;
	}
	private isCollection(v: any): boolean {
		if (typeCast<any[]>(Array_$type, v) !== null) {
			return true;
		}
		if (typeCast<IEnumerable>(IEnumerable_$type, v) !== null) {
			return true;
		}
		return false;
	}
	private serializeDSItem(sb: DescriptionSerializerBuilder, lds: DataSourceLocalDataProvider, index: number): void {
		sb.appendLine("{");
		sb.increaseTabLevel();
		let s = lds.actualSchema;
		for (let i = 0; i < s.propertyNames.length; i++) {
			if (i > 0) {
				sb.appendLine(",");
			}
			let propName = s.propertyNames[i];
			if (stringStartsWith(propName, "[")) {
				propName = propName.substr(1, propName.length - 2);
			}
			sb.append("\"" + propName + "\"");
			sb.append(": ");
			let v = lds.getItemValue(lds.getItemAtIndex(index), s.propertyNames[i]);
			switch (s.propertyTypes[i]) {
				case DataSourceSchemaPropertyType.StringValue:
				sb.append(v == null ? "null" : "\"" + v.toString() + "\"");
				break;

				case DataSourceSchemaPropertyType.BooleanValue:
				sb.append(v == null ? "null" : "\"" + v.toString() + "\"");
				break;

				case DataSourceSchemaPropertyType.ByteValue:

				case DataSourceSchemaPropertyType.DecimalValue:

				case DataSourceSchemaPropertyType.DoubleValue:

				case DataSourceSchemaPropertyType.IntValue:

				case DataSourceSchemaPropertyType.LongValue:

				case DataSourceSchemaPropertyType.ShortValue:

				case DataSourceSchemaPropertyType.SingleValue:
				sb.append(v == null ? "null" : v.toString());
				break;

				case DataSourceSchemaPropertyType.DateTimeValue:
				let v_ = v;
				sb.append("\"" + <string>(v_.toJSON()) + "\"");
				break;

				case DataSourceSchemaPropertyType.ObjectValue:
				this.serializeRefValue(sb, v);
				break;

			}

		}
		sb.decreaseTabLevel();
		sb.appendLine("}");
	}
	private canSerializeRef(key: string, v: any): boolean {
		if (v == null) {
			return true;
		}
		let v_ = v;
		if (<boolean>(typeof v_ === 'function')) {
			return false;
		}
		return true;
	}
	loadJson(json: string, getContainer: (arg1: string) => any): void {
		let par: JsonDictionaryParser = new JsonDictionaryParser();
		let dict = par.parse(json);
		let ser: DescriptionSerializer = new DescriptionSerializer();
		let lastContainer: any = null;
		if (typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, dict) !== null) {
			let obj = <JsonDictionaryObject>dict;
			if (obj.containsKey("descriptions")) {
				let descriptions = obj.item("descriptions");
				if (typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, descriptions) !== null) {
					let descObj = <JsonDictionaryObject>descriptions;
					let keys = descObj.getKeys();
					for (let i = 0; i < keys.length; i++) {
						let key = keys[i];
						let item = descObj.item(key);
						let cont = getContainer(key);
						if (cont == null) {
							continue;
						}
						lastContainer = cont;
						let transformMemberPaths: boolean = false;
						let d = ser.deserializeItem(this.context, item, transformMemberPaths);
						if (d.result == null) {
							continue;
						}
						this.render(d.result, cont);
					}
				}
			}
			if (obj.containsKey("refs") && lastContainer != null) {
				let refs = obj.item("refs");
				if (typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, refs) !== null) {
					let refsObj = <JsonDictionaryObject>refs;
					let keys1 = refsObj.getKeys();
					for (let i1 = 0; i1 < keys1.length; i1++) {
						let key1 = keys1[i1];
						let item1 = refsObj.item(key1);
						if (typeCast<JsonDictionaryValue>((<any>JsonDictionaryValue).$type, item1) !== null) {
							let val = <JsonDictionaryValue>item1;
							this.provideRefValue(lastContainer, key1, val.value);
						} else if (typeCast<JsonDictionaryArray>((<any>JsonDictionaryArray).$type, item1) !== null) {
							let valArr = <JsonDictionaryArray>item1;
							let array: any[] = this.convertJSonArrayToObjectArray(valArr);
							this.provideRefValue(lastContainer, key1, array);
						} else {
							let itemObj = this.convertJsonObjectToObject(<JsonDictionaryObject>item1);
							this.provideRefValue(lastContainer, key1, itemObj);
						}
					}
				}
			}
		}
	}
	private convertJSonArrayToObjectArray(valArr: JsonDictionaryArray): any[] {
		let array = <any[]>new Array(valArr.items.length);
		for (let j = 0; j < valArr.items.length; j++) {
			let itemObj = this.convertJsonObjectToObject(<JsonDictionaryObject>valArr.items[j]);
			array[j] = itemObj;
		}
		return array;
	}
	private convertJsonObjectToObject(item: JsonDictionaryObject): any {
		let obj = {};
		let dict_ = obj;
		let keys = item.getKeys();
		for (let i = 0; i < keys.length; i++) {
			let key_ = keys[i];
			if (typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, item.item(key_)) !== null) {
				let val_ = this.convertJsonObjectToObject(<JsonDictionaryObject>item.item(key_));
				dict_[key_] = val_;
			} else if (typeCast<JsonDictionaryArray>((<any>JsonDictionaryArray).$type, item.item(key_)) !== null) {
				let val_ = this.convertJSonArrayToObjectArray(<JsonDictionaryArray>item.item(key_));
				dict_[key_] = val_;
			} else {
				let val_ = (<JsonDictionaryValue>item.item(key_)).value;
				dict_[key_] = val_;
			}
		}
		return dict_;
	}
	private _pendingDescription: Dictionary$2<any, Description> = new Dictionary$2<any, Description>((<any>Base).$type, (<any>Description).$type, 0);
	private _currentDescription: Dictionary$2<any, DescriptionTreeNode> = new Dictionary$2<any, DescriptionTreeNode>((<any>Base).$type, (<any>DescriptionTreeNode).$type, 0);
	private _states: Dictionary$2<any, ContainerState> = new Dictionary$2<any, ContainerState>((<any>Base).$type, (<any>ContainerState).$type, 0);
	private _queuedActions: Dictionary$2<any, Queue$1<Queue$1<DescriptionTreeAction>>> = new Dictionary$2<any, Queue$1<Queue$1<DescriptionTreeAction>>>((<any>Base).$type, (<any>Queue$1).$type.specialize((<any>Queue$1).$type.specialize((<any>DescriptionTreeAction).$type)), 0);
	private _actionsRunning: Dictionary$2<any, boolean> = new Dictionary$2<any, boolean>((<any>Base).$type, Boolean_$type, 0);
	private _refs: Dictionary$2<string, DescriptionRef> = new Dictionary$2<string, DescriptionRef>(String_$type, (<any>DescriptionRef).$type, 0);
	private _systemValues: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	private _userValues: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	render(description: Description, container: any): void {
		if (!this._states.containsKey(container)) {
			this._states.item(container, new ContainerState());
			this._states.item(container).container = container;
		}
		this._pendingDescription.item(container, description);
		this.onUIThread(container, () => this.renderCore(container));
	}
	private onUIThread(c: any, p: () => void): void {
		this.adapter.onUIThread(c, p);
	}
	private renderCore(container: any): void {
		if (this._pendingDescription.containsKey(container)) {
			let desc = this._pendingDescription.item(container);
			this._pendingDescription.removeItem(container);
			let newTree = DescriptionTreeBuilder.createTree(this.context, desc);
			let oldTree: DescriptionTreeNode = null;
			if (this._currentDescription.containsKey(container)) {
				oldTree = this._currentDescription.item(container);
			}
			let diff = DescriptionTreeReconciler.diffTrees(oldTree, newTree);
			this._currentDescription.item(container, newTree);
			this.renderDiff(container, diff);
		}
	}
	provideRefValue(container: any, refName: string, value: any): void {
		this.onUIThread(container, () => {
			if (!this._states.containsKey(container)) {
				this._states.addItem(container, ((() => {
					let $ret = new ContainerState();
					$ret.container = container;
					return $ret;
				})()));
			}
			let state: ContainerState = this._states.item(container);
			this.provideRefValueCore(refName, value, true);
		});
	}
	removeRefValue(container: any, refName: string): void {
		this.onUIThread(container, () => {
			if (!this._states.containsKey(container)) {
				this._states.addItem(container, ((() => {
					let $ret = new ContainerState();
					$ret.container = container;
					return $ret;
				})()));
			}
			let state: ContainerState = this._states.item(container);
			this.removeRefValueCore(refName, true);
		});
	}
	clearRefValues(container: any): void {
		this.onUIThread(container, () => {
			if (!this._states.containsKey(container)) {
				this._states.addItem(container, ((() => {
					let $ret = new ContainerState();
					$ret.container = container;
					return $ret;
				})()));
			}
			let state: ContainerState = this._states.item(container);
			this.clearUserRefValues();
		});
	}
	private renderDiff(container: any, diff: List$1<DescriptionTreeAction>): void {
		let state: ContainerState = this._states.item(container);
		this.processActions(container, state, diff);
	}
	private resumeActions(container: any, state: ContainerState): void {
		this.doActions(container, state, true);
	}
	private tryActions(container: any, state: ContainerState): void {
		this.doActions(container, state, false);
	}
	private doActions(container: any, state: ContainerState, fromSleep: boolean): void {
		if (!fromSleep) {
			if (this._actionsRunning.containsKey(container) && this._actionsRunning.item(container)) {
				return;
			}
		}
		this._actionsRunning.item(container, true);
		let cont: boolean = true;
		while (cont && this._queuedActions.item(container).count > 0) {
			while (this._queuedActions.item(container).count > 0 && this._queuedActions.item(container).peek().count < 1) {
				this._queuedActions.item(container).dequeue();
			}
			if (this._queuedActions.item(container).count < 1) {
				break;
			}
			let currQueue = this._queuedActions.item(container).peek();
			while (currQueue.count > 0) {
				let curr = currQueue.dequeue();
				cont = this.processAction(container, state, curr);
				if (!cont) {
					break;
				}
			}
		}
		if (cont) {
			this._actionsRunning.item(container, false);
		}
	}
	private processActions(container: any, state: ContainerState, actions: List$1<DescriptionTreeAction>): void {
		let actionQueue: Queue$1<DescriptionTreeAction> = new Queue$1<DescriptionTreeAction>((<any>DescriptionTreeAction).$type);
		for (let i = 0; i < actions.count; i++) {
			actionQueue.enqueue(actions._inner[i]);
		}
		if (!this._queuedActions.containsKey(container)) {
			this._queuedActions.addItem(container, new Queue$1<Queue$1<DescriptionTreeAction>>((<any>Queue$1).$type.specialize((<any>DescriptionTreeAction).$type)));
		}
		this._queuedActions.item(container).enqueue(actionQueue);
		this.tryActions(container, state);
	}
	private processActionsImmediate(container: any, state: ContainerState, actions: List$1<DescriptionTreeAction>): void {
		for (let i = 0; i < actions.count; i++) {
			this.processAction(container, state, actions._inner[i]);
		}
	}
	private processAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		switch (action.actionType) {
			case DescriptionTreeActionType.ClearItems: return this.processClearItemsAction(container, state, action);
			case DescriptionTreeActionType.InsertItem: return this.processInsertItemAction(container, state, action);
			case DescriptionTreeActionType.RemoveItem: return this.processRemoveItemAction(container, state, action);
			case DescriptionTreeActionType.ReplaceItem: return this.processReplaceItemAction(container, state, action);
			case DescriptionTreeActionType.ResetProperty: return this.processResetPropertyAction(container, state, action);
			case DescriptionTreeActionType.UpdateProperty: return this.processUpdatePropertyAction(container, state, action);
		}

		return true;
	}
	private processUpdatePropertyAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		let target = this.getTarget(container, state, action);
		this.updatePropertyOnTarget(container, state, action, target);
		return true;
	}
	private updatePropertyOnTarget(container: any, state: ContainerState, action: DescriptionTreeAction, target: any): boolean {
		let value = this.getCoercedValue(action, container, state);
		value = this.transformer.transform(ComponentRenderer.platform, value, action);
		if (action.propertyMetadata != null && action.propertyMetadata.knownType == TypeDescriptionWellKnownType.Collection) {
			this.setOrUpdateCollectionOnTarget(container, state, action.getPlatformPropertyName(ComponentRenderer.platform), action.propertyMetadata, value, target);
		} else {
			this.setPropertyOnTarget(container, state, action.getPlatformPropertyName(ComponentRenderer.platform), value, action.oldValue, target);
		}
		return true;
	}
	private setOrUpdateCollectionOnTarget(container: any, state: ContainerState, propertyName: string, propertyMetadata: TypeDescriptionMetadata, value: any, target: any): boolean {
		if (this._updatingHandlers.containsKey(propertyName)) {
			for (let h of fromEnum<(propertyName: string, target: any, newValue: any) => void>(this._updatingHandlers.item(propertyName))) {
				h(propertyName, target, value);
			}
		}
		this.adapter.setOrUpdateCollectionOnTarget(container, propertyName, propertyMetadata, this.context, target, value);
		return true;
	}
	private getCoercedValue(action: DescriptionTreeAction, container: any, state: ContainerState): any {
		if (action.propertyMetadata == null) {
			return action.newValue;
		}
		switch (action.propertyMetadata.knownType) {
			case TypeDescriptionWellKnownType.Array: return this.coerceToArray(action, container, state);
			case TypeDescriptionWellKnownType.boolean1: return this.coerceToBoolean(action);
			case TypeDescriptionWellKnownType.Brush: return this.coerceToBrush(action);
			case TypeDescriptionWellKnownType.BrushCollection: return this.coerceToBrushCollection(action);
			case TypeDescriptionWellKnownType.Collection: return this.coerceToArray(action, container, state);
			case TypeDescriptionWellKnownType.Color: return this.coerceToColor(action);
			case TypeDescriptionWellKnownType.ColorCollection: return this.coerceToColorCollection(action);
			case TypeDescriptionWellKnownType.DataRef: return this.setUpDataRef(action, state);
			case TypeDescriptionWellKnownType.DataTemplate: return null;
			case TypeDescriptionWellKnownType.Date: return this.coerceToDate(action);
			case TypeDescriptionWellKnownType.EventRef: return this.setUpEventRef(action, state);
			case TypeDescriptionWellKnownType.ExportedType: return this.coerceToExportedType(action, container, state);
			case TypeDescriptionWellKnownType.IList: return null;
			case TypeDescriptionWellKnownType.MethodRef: return this.setUpMethodRef(action, state);
			case TypeDescriptionWellKnownType.Number: return this.coerceToNumber(action);
			case TypeDescriptionWellKnownType.Point: return this.coerceToPoint(action);
			case TypeDescriptionWellKnownType.Rect: return this.coerceToRect(action);
			case TypeDescriptionWellKnownType.Size: return this.coerceToSize(action);
			case TypeDescriptionWellKnownType.string1: return this.coerceToString(action);
			case TypeDescriptionWellKnownType.TimeSpan: return this.coerceToTimeSpan(action);
			case TypeDescriptionWellKnownType.Unknown: return this.coerceUnknown(action);
			case TypeDescriptionWellKnownType.Void: return null;
		}

		return null;
	}
	private coerceUnknown(action: DescriptionTreeAction): any {
		throw new NotImplementedException(0);
	}
	private coerceToTimeSpan(action: DescriptionTreeAction): any {
		return action.newValue;
	}
	private coerceToString(action: DescriptionTreeAction): any {
		return action.newValue != null ? action.newValue.toString() : null;
	}
	private coerceToSize(action: DescriptionTreeAction): any {
		let size = <SizeDescription>action.newValue;
		let width_ = size.width;
		let height_ = size.height;
		let s = { width: width_, height: height_ };
		return s;
	}
	private coerceToRect(action: DescriptionTreeAction): any {
		let rect = <RectDescription>action.newValue;
		let top_ = rect.top;
		let left_ = rect.left;
		let width_ = rect.width;
		let height_ = rect.height;
		let r = { left: left_, top: top_, width: width_, height: height_ };
		return r;
	}
	private coerceToPoint(action: DescriptionTreeAction): any {
		let point = <PointDescription>action.newValue;
		let x_ = point.x;
		let y_ = point.y;
		let p = { x: x_, y: y_ };
		return p;
	}
	private coerceToNumber(action: DescriptionTreeAction): any {
		return action.newValue;
	}
	createRef(name: string): DescriptionRef {
		if (this._refs.containsKey(name)) {
			let existing = this._refs.item(name);
			return existing;
		}
		let r = new DescriptionRef(name);
		this._refs.addItem(name, r);
		return r;
	}
	private setUpMethodRef(action: DescriptionTreeAction, state: ContainerState): any {
		return action.newValue == null ? null : this.createRef(<string>action.newValue);
	}
	private coerceToExportedType(action: DescriptionTreeAction, container: any, state: ContainerState): any {
		let t = action.propertyMetadata.specificType;
		if (t == null) {
			t = action.propertyMetadata.specificExternalType;
		}
		if (typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, action.newValue) !== null) {
			let node = <DescriptionTreeNode>action.newValue;
			if (node.has("Type")) {
				t = <string>node.get("Type").value;
			}
		}
		let obj = this.createObject(t, action.newValue, container, state);
		return obj;
	}
	private setUpEventRef(action: DescriptionTreeAction, state: ContainerState): any {
		return action.newValue == null ? null : this.createRef(<string>action.newValue);
	}
	private coerceToDate(action: DescriptionTreeAction): any {
		return <Date>action.newValue;
	}
	private setUpDataRef(action: DescriptionTreeAction, state: ContainerState): any {
		return action.newValue == null ? null : this.createRef(<string>action.newValue);
	}
	private toColor(color: string): any {
		return color;
	}
	private coerceToColorCollection(action: DescriptionTreeAction): any {
		let arr = <any[]>action.newValue;
		if (arr == null) {
			return null;
		}
		let colors: any[] = <any[]>new Array(arr.length);
		for (let i = 0; i < arr.length; i++) {
			colors[i] = this.toColor(<string>arr[i]);
		}
		return colors;
	}
	private coerceToColor(action: DescriptionTreeAction): any {
		return this.toColor(<string>action.newValue);
	}
	private coerceToBrushCollection(action: DescriptionTreeAction): any {
		let arr = <any[]>action.newValue;
		if (arr == null) {
			return null;
		}
		let colors: any[] = <any[]>new Array(arr.length);
		for (let i = 0; i < arr.length; i++) {
			colors[i] = this.toBrush(<string>arr[i]);
		}
		return colors;
	}
	private toBrush(v: string): any {
		return v;
	}
	private coerceToBrush(action: DescriptionTreeAction): any {
		return this.toBrush(<string>action.newValue);
	}
	private coerceToBoolean(action: DescriptionTreeAction): any {
		return <boolean>action.newValue;
	}
	private _updatingHandlers: Dictionary$2<string, List$1<(propertyName: string, target: any, newValue: any) => void>> = new Dictionary$2<string, List$1<(propertyName: string, target: any, newValue: any) => void>>(String_$type, (<any>List$1).$type.specialize(Delegate_$type), 0);
	addPropertyUpdatingListener(propertyName: string, handler: (propertyName: string, target: any, newValue: any) => void): void {
		if (!this._updatingHandlers.containsKey(propertyName)) {
			this._updatingHandlers.addItem(propertyName, new List$1<(propertyName: string, target: any, newValue: any) => void>(Delegate_$type, 0));
		}
		this._updatingHandlers.item(propertyName).add(handler);
	}
	removePropertyUpdatingListener(propertyName: string, handler: (propertyName: string, target: any, newValue: any) => void): void {
		if (this._updatingHandlers.containsKey(propertyName)) {
			this._updatingHandlers.item(propertyName).remove(handler);
			if (this._updatingHandlers.item(propertyName).count == 0) {
				this._updatingHandlers.removeItem(propertyName);
			}
		}
	}
	private coerceToArray(action: DescriptionTreeAction, container: any, state: ContainerState): any {
		if (action.newValue == null) {
			return null;
		}
		let arr: any[] = <any[]>action.newValue;
		let list: List$1<any> = new List$1<any>((<any>Base).$type, 0);
		let t = action.propertyMetadata.specificType;
		if (t == null) {
			t = action.propertyMetadata.specificExternalType;
		}
		if (action.propertyMetadata.knownType == TypeDescriptionWellKnownType.Collection) {
			t = action.propertyMetadata.collectionElementType;
			if (t == null) {
				t = action.propertyMetadata.specificExternalType;
			}
		}
		for (let i = 0; i < arr.length; i++) {
			let itemT = t;
			if (typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, arr[i]) !== null) {
				let node = <DescriptionTreeNode>arr[i];
				if (node.has("Type")) {
					itemT = <string>node.get("Type").value;
				}
			}
			let item = this.createObject(itemT, arr[i], container, state);
			list.add1(item);
		}
		return list.toArray();
	}
	private setPropertyOnTarget(container: any, state: ContainerState, propertyName: string, value: any, oldValue: any, target: any): void {
		if (typeCast<DescriptionRef>((<any>DescriptionRef).$type, value) !== null) {
			let r = <DescriptionRef>value;
			let refUnchanged: boolean = false;
			if (oldValue != null && typeof oldValue === 'string') {
				if (this.hasRef(<string>oldValue)) {
					let oldRef = this.getRef(<string>oldValue);
					if (Base.equalsStatic(oldRef, value)) {
						refUnchanged = true;
					} else {
						oldRef.unregisterValueChanged(target, propertyName);
					}
				}
			}
			if (this.hasRefValue(<DescriptionRef>value)) {
				value = this.getRefValue(<DescriptionRef>value);
				this.setPropertyValue(target, propertyName, value, oldValue);
			}
			let ev: (sender: any, args: DescriptionRefValueChangedEventArgs) => void = null;
			ev = (rf: any, args: DescriptionRefValueChangedEventArgs) => {
				let v = this.getRefValue(<DescriptionRef>rf);
				this.setPropertyValue(target, propertyName, v, oldValue);
			};
			if (!refUnchanged) {
				r.registerValueChanged(target, propertyName, ev);
			}
			return;
		}
		this.setPropertyValue(target, propertyName, value, oldValue);
	}
	provideRefValueCore(name: string, value: any, isUserValue: boolean): void {
		let oldValue: any = null;
		if (isUserValue) {
			if (this._userValues.containsKey(name)) {
				oldValue = this._userValues.item(name);
			}
			this._userValues.item(name, value);
		} else {
			if (this._systemValues.containsKey(name)) {
				oldValue = this._systemValues.item(name);
			}
			this._systemValues.item(name, value);
		}
		if (this._refs.containsKey(name)) {
			this._refs.item(name).notifyChanged(oldValue, value);
		}
	}
	removeRefValueCore(name: string, isUserValue: boolean): void {
		let oldValue: any = null;
		if (isUserValue) {
			if (this._userValues.containsKey(name)) {
				oldValue = this._userValues.item(name);
			}
			this._userValues.removeItem(name);
		} else {
			if (this._systemValues.containsKey(name)) {
				oldValue = this._systemValues.item(name);
			}
			this._systemValues.removeItem(name);
		}
		if (this._refs.containsKey(name)) {
			this._refs.item(name).notifyChanged(oldValue, this.getRefValue(this._refs.item(name)));
			if (this._refs.item(name).refCount <= 0) {
				this._refs.item(name).unregisterAll();
				this._refs.removeItem(name);
			}
		}
	}
	clearUserRefValues(): void {
		let keys = new List$1<string>(String_$type, 0);
		for (let key of fromEnum<string>(this._userValues.keys)) {
			keys.add(key);
		}
		for (let key1 of fromEnum<string>(keys)) {
			this.removeRefValueCore(key1, true);
		}
	}
	hasRefValue(r: DescriptionRef): boolean {
		return this._userValues.containsKey(r.name) || this._systemValues.containsKey(r.name);
	}
	getRefValue(r: DescriptionRef): any {
		if (this._userValues.containsKey(r.name)) {
			return this._userValues.item(r.name);
		}
		if (this._systemValues.containsKey(r.name)) {
			return this._systemValues.item(r.name);
		}
		return null;
	}
	hasRef(refName: string): boolean {
		return this._refs.containsKey(refName);
	}
	getRef(refName: string): DescriptionRef {
		return this._refs.item(refName);
	}
	private getTarget(container: any, state: ContainerState, action: DescriptionTreeAction): any {
		return state.getComponent(action.targetNode.id);
	}
	private processResetPropertyAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		let target = this.getTarget(container, state, action);
		this.resetPropertyOnTarget(container, state, action, target);
		return true;
	}
	private resetPropertyOnTarget(container: any, state: ContainerState, action: DescriptionTreeAction, target: any): boolean {
		this.adapter.resetPropertyOnTarget(container, action.getPlatformPropertyName(ComponentRenderer.platform), action.propertyMetadata, target);
		return true;
	}
	private processReplaceItemAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		if (action.targetNode == null) {
			return this.replaceRootItem(container, state, action);
		} else {
			let target = this.getTarget(container, state, action);
			this.replaceItemInCollection(container, state, action, target);
		}
		return true;
	}
	private replaceItemInCollection(container: any, state: ContainerState, action: DescriptionTreeAction, target: any): void {
		let propertyName = action.getPlatformPropertyName(ComponentRenderer.platform);
		let item = this.createObject(action.propertyMetadata.collectionElementType, action.newValue, container, state);
		this.adapter.replaceItemInCollection(propertyName, action.propertyMetadata, target, action.newIndex, item);
		if (action.oldValue != null && typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, action.oldValue) !== null) {
			let id = (<DescriptionTreeNode>action.oldValue).id;
			if (id >= 0) {
				let subTarget = state.getComponent(id);
				if (subTarget != null) {
					this.destroyObject(container, subTarget, state);
				}
			}
		}
	}
	private replaceRootItem(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		let current = this.adapter.getRootObject(container);
		if (current != null) {
			this.destroyObject(container, current, state);
		}
		if (!(typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, action.newValue) !== null)) {
			throw new NotImplementedException(0);
		}
		let node = <DescriptionTreeNode>action.newValue;
		let finished: boolean = false;
		this.adapter.replaceRootItem(container, node.type, this.context, (resumeRequired: boolean) => {
			let obj = this.adapter.getRootObject(container);
			state.addComponent(node.id, obj, node, runOn(this, this.provideRefValueCore));
			let actions = this.toActions(node);
			this.processActionsImmediate(container, state, actions);
			finished = true;
			if (resumeRequired) {
				this.resumeActions(container, state);
			}
		});
		return finished;
	}
	private destroyObject(container: any, current: any, state: ContainerState): void {
		let id = this.getComponentId(container, current, state);
		for (let r of fromEnum<DescriptionRef>(this._refs.values)) {
			r.unregisterAllValueChanged(current);
		}
		if (id != -1) {
			state.removeComponent(id, runOn(this, this.removeRefValueCore));
		}
		this.cleanupMethods.cleanup(ComponentRenderer.platform, current);
	}
	private getComponentId(container: any, current: any, state: ContainerState): number {
		return state.getComponentId(current);
	}
	private processRemoveItemAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		if (action.targetNode == null) {
			return this.removeRootItem(container, state, action);
		} else {
			let target = this.getTarget(container, state, action);
			this.removeItemFromCollection(container, state, action, target);
		}
		return true;
	}
	private removeItemFromCollection(container: any, state: ContainerState, action: DescriptionTreeAction, target: any): void {
		let propertyName = action.getPlatformPropertyName(ComponentRenderer.platform);
		this.adapter.removeItemFromCollection(propertyName, action.propertyMetadata, target, action.oldIndex);
		if (action.oldValue != null && typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, action.oldValue) !== null) {
			let id = (<DescriptionTreeNode>action.oldValue).id;
			if (id >= 0) {
				let subTarget = state.getComponent(id);
				if (subTarget != null) {
					this.destroyObject(container, subTarget, state);
				}
			}
		}
	}
	private removeRootItem(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		let current = this.adapter.getRootObject(container);
		if (current != null) {
			this.destroyObject(container, current, state);
		}
		let finished: boolean = false;
		this.adapter.removeRootItem(container, this.context, (resumeRequired: boolean) => {
			finished = true;
			if (resumeRequired) {
				this.resumeActions(container, state);
			}
		});
		return finished;
	}
	private processInsertItemAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		if (action.targetNode == null) {
			return this.addRootItem(container, state, action);
		} else {
			let target = this.getTarget(container, state, action);
			this.addItemToCollection(container, state, action, target);
		}
		return true;
	}
	private addRootItem(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		if (!(typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, action.newValue) !== null)) {
			throw new NotImplementedException(0);
		}
		let node = <DescriptionTreeNode>action.newValue;
		let finished: boolean = false;
		this.adapter.replaceRootItem(container, node.type, this.context, (resumeRequired: boolean) => {
			let obj = this.adapter.getRootObject(container);
			state.addComponent(node.id, obj, node, runOn(this, this.provideRefValueCore));
			let actions = this.toActions(node);
			this.processActionsImmediate(container, state, actions);
			finished = true;
			if (resumeRequired) {
				this.resumeActions(container, state);
			}
		});
		return finished;
	}
	private addItemToCollection(container: any, state: ContainerState, action: DescriptionTreeAction, target: any): void {
		let propertyName = action.getPlatformPropertyName(ComponentRenderer.platform);
		let eType = action.propertyMetadata.collectionElementType;
		if (typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, action.newValue) !== null) {
			let node = <DescriptionTreeNode>action.newValue;
			if (node.has("Type")) {
				eType = <string>node.get("Type").value;
			}
		}
		let item = this.createObject(eType, action.newValue, container, state);
		this.adapter.addItemToCollection(propertyName, action.propertyMetadata, target, action.newIndex, item);
	}
	private createObject(type: string, newValue: any, container: any, state: ContainerState): any {
		if (this.isPrimitiveType(type)) {
			return newValue;
		}
		let obj = this.context.createObject(type, container);
		if (newValue == null) {
			return obj;
		}
		if (typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, newValue) !== null) {
			let node = <DescriptionTreeNode>newValue;
			state.addComponent(node.id, obj, node, runOn(this, this.provideRefValueCore));
			let actions = this.toActions(node);
			this.processActionsImmediate(container, state, actions);
		}
		if (typeof newValue === 'string' && type.toLowerCase() != "string") {
			return this.coerceToEnum(type, <string>newValue);
		}
		return obj;
	}
	private isPrimitiveType(type: string): boolean {
		return type == "int" || type == "Int32" || type == "short" || type == "Int16" || type == "double" || type == "Double" || type == "float" || type == "Float" || type == "Single" || type == "single" || type == "DateTime" || type == "decimal" || type == "Decimal" || type == "long" || type == "Int64" || type == "byte" || type == "bool" || type == "string" || type == "String";
	}
	private coerceToEnum(type: string, newValue: string): any {
		return this.context.coerceToEnum(type, newValue);
	}
	private toActions(newValue: DescriptionTreeNode): List$1<DescriptionTreeAction> {
		let items = newValue.items();
		let ret = new List$1<DescriptionTreeAction>((<any>DescriptionTreeAction).$type, 0);
		for (let i = 0; i < items.count; i++) {
			let act = new DescriptionTreeAction();
			act.actionType = DescriptionTreeActionType.UpdateProperty;
			act.propertyName = items._inner[i].propertyName;
			act.propertyMetadata = items._inner[i].metadata;
			act.targetNode = newValue;
			act.newValue = items._inner[i].value;
			ret.add(act);
		}
		return ret;
	}
	private processClearItemsAction(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		if (action.targetNode == null) {
			return this.clearRootItems(container, state, action);
		} else {
			let target = this.getTarget(container, state, action);
			this.clearCollection(container, state, action, target);
		}
		return true;
	}
	private clearCollection(container: any, state: ContainerState, action: DescriptionTreeAction, target: any): void {
		let propertyName = action.getPlatformPropertyName(ComponentRenderer.platform);
		this.adapter.clearCollection(target, propertyName, action.propertyMetadata);
		if (action.oldValue != null && typeCast<any[]>(Array_$type, action.oldValue) !== null) {
			let arr = <any[]>action.oldValue;
			for (let i = 0; i < arr.length; i++) {
				let item = arr[i];
				if (item != null && typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, item) !== null) {
					let id = (<DescriptionTreeNode>item).id;
					if (id >= 0) {
						let subTarget = state.getComponent(id);
						if (subTarget != null) {
							this.destroyObject(container, subTarget, state);
						}
					}
				}
			}
		}
	}
	private setPropertyValue(target: any, propertyName: string, value: any, oldValue: any): void {
		if (this._updatingHandlers.containsKey(propertyName)) {
			for (let h of fromEnum<(propertyName: string, target: any, newValue: any) => void>(this._updatingHandlers.item(propertyName))) {
				h(propertyName, target, value);
			}
		}
		this.adapter.setPropertyValue(target, propertyName, value, oldValue);
	}
	private getPropertyValue(target: any, propertyName: string): any {
		return this.adapter.getPropertyValue(target, propertyName);
	}
	private clearRootItems(container: any, state: ContainerState, action: DescriptionTreeAction): boolean {
		return this.clearContainer(container, state);
	}
	private clearContainer(container: any, state: ContainerState): boolean {
		let current = this.adapter.getRootObject(container);
		if (current != null) {
			this.destroyObject(container, current, state);
		}
		let finished: boolean = false;
		this.adapter.clearContainer(container, this.context, (resumeRequired: boolean) => {
			finished = true;
			if (resumeRequired) {
				this.resumeActions(container, state);
			}
		});
		return finished;
	}
}


