/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, NotSupportedException, typeCast, typeGetValue, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Description } from "./Description";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { DescriptionSerializerBuilder } from "./DescriptionSerializerBuilder";
import { DescriptionTreeBuilder } from "./DescriptionTreeBuilder";
import { DescriptionResult } from "./DescriptionResult";
import { JsonDictionaryParser } from "./JsonDictionaryParser";
import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { TypeDescriptionWellKnownType } from "./TypeDescriptionWellKnownType";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { JsonDictionaryValue } from "./JsonDictionaryValue";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { JsonDictionaryValueType } from "./JsonDictionaryValueType";
import { List$1 } from "./List$1";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { NotImplementedException } from "./NotImplementedException";
import { stringEndsWith, stringStartsWith, stringReplace } from "./string";

/**
 * @hidden 
 */
export class DescriptionSerializer extends Base {
	static $t: Type = markType(DescriptionSerializer, 'DescriptionSerializer');
	constructor() {
		super();
	}
	serialize(context: TypeDescriptionContext, desc: Description): string {
		let tree = DescriptionTreeBuilder.createTree(context, desc);
		let builder = new DescriptionSerializerBuilder();
		this.serializeHelper(context, tree, builder);
		return builder.toString();
	}
	serializeTree(context: TypeDescriptionContext, tree: DescriptionTreeNode, builder: DescriptionSerializerBuilder): void {
		this.serializeHelper(context, tree, builder);
	}
	deserialize(context: TypeDescriptionContext, json: string): DescriptionResult {
		let parser = new JsonDictionaryParser();
		let item = parser.parse(json);
		return this.deserializeItem(context, item, false);
	}
	private _transformMemberPaths: boolean = false;
	deserializeItem(context: TypeDescriptionContext, item: JsonDictionaryItem, transformMemberPaths: boolean): DescriptionResult {
		if (!(typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, item) !== null)) {
			throw new NotSupportedException(1, "expected an object at the root of the json");
		}
		let obj = <JsonDictionaryObject>item;
		if (transformMemberPaths) {
			this._transformMemberPaths = true;
		}
		let ret = this.convertObjToDescription(context, obj);
		this._transformMemberPaths = false;
		return ret;
	}
	private convertObjToDescription(context: TypeDescriptionContext, obj: JsonDictionaryObject, wellKnownType: TypeDescriptionWellKnownType = TypeDescriptionWellKnownType.ExportedType): DescriptionResult {
		if (!obj.containsKey("type")) {
			throw new NotSupportedException(1, "expected type to be defined for the json object");
		}
		let res: DescriptionResult = new DescriptionResult();
		let type = <string>(<JsonDictionaryValue>obj.item("type")).value;
		let desc = <Description>context.createDescriptionForType(type);
		res.result = desc;
		if (desc == null) {
			res.addWarning("couldn't find registered description for type: " + type);
			return res;
		}
		let keys = obj.getKeys();
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			let meta = context.getMetadata(type, TypeDescriptionContext.toPascal(key));
			if (meta == null) {
				if (TypeDescriptionContext.toPascal(key) == "Name") {
					let t = "string";
					let v = <JsonDictionaryValue>obj.item(key);
					let val = this.convertDescriptionValue(res, context, v, t);
					desc.name = <string>val;
				}
				continue;
			}
			let value = obj.item(key);
			if (typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, value) !== null) {
				let o = <JsonDictionaryObject>value;
				let subDesc = this.convertObjToDescription(context, o, meta.knownType);
				res.addWarnings(subDesc);
				context.setDescriptionProperty(desc, key, subDesc.result);
			} else if (typeCast<JsonDictionaryArray>((<any>JsonDictionaryArray).$type, value) !== null) {
				let a = <JsonDictionaryArray>value;
				let eleType: string = "string";
				if (meta.knownType == TypeDescriptionWellKnownType.Array) {
					eleType = meta.specificExternalType;
				}
				if (meta.knownType == TypeDescriptionWellKnownType.Collection) {
					eleType = meta.collectionElementType;
				}
				let subArr = this.convertArrayToDescriptionArray(res, context, a, eleType);
				context.setDescriptionProperty(desc, key, subArr);
			} else {
				let t1 = meta.specificExternalType;
				if (t1 == null) {
					t1 = "String";
				}
				let v1 = <JsonDictionaryValue>value;
				let val1 = this.convertDescriptionValue(res, context, v1, t1);
				if (this._transformMemberPaths) {
					if (stringEndsWith(meta.propertyName, "MemberPath") || (type != null && stringEndsWith(type, "Axis") && meta.propertyName.toLowerCase() == "label")) {
						let valStr = val1.toString();
						if (stringStartsWith(valStr, "{")) {
							if (!stringStartsWith(valStr, "{[")) {
								valStr = valStr.substr(1, valStr.length - 2);
								valStr = "{[" + valStr + "]}";
								val1 = valStr;
							}
						} else {
							if (!stringStartsWith(valStr, "[")) {
								valStr = "[" + valStr + "]";
								val1 = valStr;
							}
						}
					}
				}
				context.setDescriptionProperty(desc, key, val1);
			}
		}
		return res;
	}
	private convertArrayToDescriptionArray(res: DescriptionResult, context: TypeDescriptionContext, a: JsonDictionaryArray, eleType: string): any[] {
		let ret = <any[]>new Array(a.items.length);
		for (let i = 0; i < a.items.length; i++) {
			let value = a.items[i];
			if (typeCast<JsonDictionaryObject>((<any>JsonDictionaryObject).$type, value) !== null) {
				let o = <JsonDictionaryObject>value;
				let subDesc = this.convertObjToDescription(context, o);
				res.addWarnings(subDesc);
				ret[i] = subDesc.result;
			} else if (typeCast<JsonDictionaryArray>((<any>JsonDictionaryArray).$type, value) !== null) {
				let sa = <JsonDictionaryArray>value;
				let subArr = this.convertArrayToDescriptionArray(res, context, sa, eleType);
				ret[i] = subArr;
			} else {
				let v = <JsonDictionaryValue>value;
				let val = this.convertDescriptionValue(res, context, v, eleType);
				ret[i] = val;
			}
		}
		return ret;
	}
	private convertDescriptionValue(res: DescriptionResult, context: TypeDescriptionContext, v: JsonDictionaryValue, targetType: string): any {
		switch (v.type) {
			case JsonDictionaryValueType.BooleanValue: return v.value;
			case JsonDictionaryValueType.NullValue: return v.value;
			case JsonDictionaryValueType.NumberValue: switch (targetType.toLowerCase()) {
				case "int": return typeGetValue(v.value);
				case "double": return <number>v.value;
				case "timespan": return <number>v.value;
				case "short": return typeGetValue(v.value);
				case "long": return typeGetValue(v.value);
				case "float": return <number>v.value;
				case "byte": return typeGetValue(v.value);
				default:
				res.addWarning("unexpected target type for number: " + targetType);
				return v.value;

			}

			case JsonDictionaryValueType.StringValue:
			if (targetType.toLowerCase() == "datetime") {
				let val_: string = <string>v.value;
				let d: Date = <Date>(new Date(val_));
				return d;
			}
			return v.value;

			default:
			res.addWarning("unexpected value type");
			return v.value;

		}

	}
	private serializeHelper(context: TypeDescriptionContext, tree: DescriptionTreeNode, builder: DescriptionSerializerBuilder): void {
		builder.appendLine("{");
		builder.increaseTabLevel();
		builder.appendLine("\"type\": \"" + tree.type + "\",");
		let items = tree.items();
		for (let i = 0; i < items.count; i++) {
			let item = items._inner[i];
			this.serializeItem(context, tree, item, builder);
		}
		builder.decreaseTabLevel();
		builder.appendLine("}");
	}
	private camelize(val: string): string {
		if (val == null) {
			return null;
		}
		return val.substr(0, 1).toLowerCase() + val.substr(1);
	}
	private serializeItem(context: TypeDescriptionContext, owner: DescriptionTreeNode, item: DescriptionPropertyValue, builder: DescriptionSerializerBuilder): void {
		if (item.propertyName.toLowerCase() == "type") {
			return;
		}
		builder.append("\"" + this.camelize(item.propertyName) + "\": ");
		this.serializeValue(context, owner, item, item.value, builder);
		builder.appendLine(",");
	}
	private serializeValue(context: TypeDescriptionContext, owner: DescriptionTreeNode, item: DescriptionPropertyValue, value: any, builder: DescriptionSerializerBuilder): void {
		let knownType = TypeDescriptionWellKnownType.string1;
		if (item.metadata != null) {
			knownType = item.metadata.knownType;
		}
		switch (knownType) {
			case TypeDescriptionWellKnownType.BrushCollection:

			case TypeDescriptionWellKnownType.ColorCollection:

			case TypeDescriptionWellKnownType.Array:
			{
				builder.append("[");
				let arr = <any[]>item.value;
				let t = item.metadata.specificType;
				if (item.metadata.knownType == TypeDescriptionWellKnownType.BrushCollection || item.metadata.knownType == TypeDescriptionWellKnownType.ColorCollection) {
					t = "String";
				}
				for (let i = 0; i < arr.length; i++) {
					if (i > 0) {
						builder.append(", ");
					}
					let itemT = t;
					if (typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, arr[i]) !== null) {
						this.serializeHelper(context, <DescriptionTreeNode>arr[i], builder);
					} else {
						this.serializePrimitiveValue(context, t, arr[i], builder);
					}
				}
				builder.append("]");
			}
			break;

			case TypeDescriptionWellKnownType.boolean1:
			this.serializePrimitiveValue(context, "Boolean", value, builder);
			break;

			case TypeDescriptionWellKnownType.Collection:
			{
				builder.append("[");
				let arr1 = <any[]>item.value;
				let t1 = item.metadata.collectionElementType;
				for (let i1 = 0; i1 < arr1.length; i1++) {
					if (i1 > 0) {
						builder.append(", ");
					}
					let itemT1 = t1;
					if (typeCast<DescriptionTreeNode>((<any>DescriptionTreeNode).$type, arr1[i1]) !== null) {
						this.serializeHelper(context, <DescriptionTreeNode>arr1[i1], builder);
					} else {
						this.serializePrimitiveValue(context, t1, arr1[i1], builder);
					}
				}
				builder.append("]");
			}
			break;

			case TypeDescriptionWellKnownType.Brush:

			case TypeDescriptionWellKnownType.MethodRef:

			case TypeDescriptionWellKnownType.EventRef:

			case TypeDescriptionWellKnownType.DataRef:

			case TypeDescriptionWellKnownType.Color:

			case TypeDescriptionWellKnownType.string1:
			this.serializePrimitiveValue(context, "String", value, builder);
			break;

			case TypeDescriptionWellKnownType.Date:
			this.serializePrimitiveValue(context, "DateTime", value, builder);
			break;

			case TypeDescriptionWellKnownType.ExportedType:
			if (item.metadata.specificExternalType.toLowerCase() == "string") {
				this.serializePrimitiveValue(context, "String", value, builder);
			} else {
				this.serializeHelper(context, <DescriptionTreeNode>value, builder);
			}
			break;

			case TypeDescriptionWellKnownType.Number:
			this.serializePrimitiveValue(context, "Double", value, builder);
			break;

			case TypeDescriptionWellKnownType.Rect:

			case TypeDescriptionWellKnownType.Size:

			case TypeDescriptionWellKnownType.Point:
			this.serializeHelper(context, <DescriptionTreeNode>value, builder);
			break;

			case TypeDescriptionWellKnownType.TimeSpan:
			this.serializePrimitiveValue(context, "TimeSpan", value, builder);
			break;

			case TypeDescriptionWellKnownType.Unknown:

			case TypeDescriptionWellKnownType.Void:

			case TypeDescriptionWellKnownType.DataTemplate:

			case TypeDescriptionWellKnownType.IList: throw new NotImplementedException(0);
		}

	}
	private serializePrimitiveValue(context: TypeDescriptionContext, t: string, v: any, builder: DescriptionSerializerBuilder): void {
		switch (t.toLowerCase()) {
			case "string":
			if (v == null) {
				builder.append("null");
			} else {
				builder.append("\"" + stringReplace((<string>v), "\"", "\\\"") + "\"");
			}
			break;

			case "number":

			case "double":
			builder.append(v.toString());
			break;

			case "int":
			builder.append(v.toString());
			break;

			case "float":
			builder.append(v.toString());
			break;

			case "long":
			builder.append(v.toString());
			break;

			case "decimal":
			builder.append(v.toString());
			break;

			case "timespan":
			builder.append(v.toString());
			break;

			case "boolean":
			builder.append(v.toString().toLowerCase());
			break;

			case "datetime":
			let v_ = v;
			builder.append("\"" + <string>(v_.toJSON()) + "\"");
			break;

		}

	}
}


