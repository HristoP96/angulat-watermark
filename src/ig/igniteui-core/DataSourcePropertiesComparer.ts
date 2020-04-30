/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IComparable, IComparable_$type, String_$type, typeGetValue, Type, markType } from "./type";
import { IComparer$1, IComparer$1_$type } from "./IComparer$1";
import { ListSortDirection } from "./ListSortDirection";
import { IDataSource } from "./IDataSource";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceSchemaPropertyType, DataSourceSchemaPropertyType_$type } from "./DataSourceSchemaPropertyType";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { DataSourceRowType } from "./DataSourceRowType";
import { boolCompare } from "./bool";
import { dateMinValue } from "./date";
import { CompareUtil } from "./compareUtil";
import { stringCompare } from "./string";

/**
 * @hidden 
 */
export class DataSourcePropertiesComparer extends Base implements IComparer$1<any> {
	static $t: Type = markType(DataSourcePropertiesComparer, 'DataSourcePropertiesComparer', (<any>Base).$type, [IComparer$1_$type.specialize((<any>Base).$type)]);
	private _dataSource: IDataSource = null;
	private _properties: string[] = null;
	private _directions: ListSortDirection[] = null;
	private _propertiesCount: number = 0;
	private _schema: IDataSourceSchema = null;
	private _schemaTypes: DataSourceSchemaPropertyType[] = null;
	private _schemaComparables: boolean[] = null;
	constructor(properties: string[], directions: ListSortDirection[], comparables: boolean[], dataSource: IDataSource) {
		super();
		this._properties = properties;
		if (this._properties != null) {
			this._propertiesCount = this._properties.length;
		}
		this._directions = directions;
		this._dataSource = dataSource;
		this._schema = dataSource.actualSchema;
		if (this._properties != null) {
			this._schemaTypes = <DataSourceSchemaPropertyType[]>new Array(this._propertiesCount);
		}
		this._schemaComparables = comparables;
		if (this._schemaComparables == null) {
			this._schemaComparables = <boolean[]>new Array(this._propertiesCount);
		}
		let typeMap: Dictionary$2<string, DataSourceSchemaPropertyType> = new Dictionary$2<string, DataSourceSchemaPropertyType>(String_$type, DataSourceSchemaPropertyType_$type, 0);
		for (let i = 0; i < this._schema.propertyNames.length; i++) {
			typeMap.item(this._schema.propertyNames[i], this._schema.propertyTypes[i]);
		}
		if (this._properties != null) {
			for (let i1 = 0; i1 < this._properties.length; i1++) {
				if (typeMap.containsKey(this._properties[i1])) {
					this._schemaTypes[i1] = typeMap.item(this._properties[i1]);
				} else {
					this._schemaTypes[i1] = dataSource.resolveSchemaPropertyType(this._properties[i1]);
				}
			}
		}
	}
	compare(x: any, y: any): number {
		if (this._properties == null) {
			if (x == y) {
				return 0;
			}
			return -1;
		}
		let xValue: any = null;
		let yValue: any = null;
		let xSpecial: DataSourceSpecialRow = null;
		let ySpecial: DataSourceSpecialRow = null;
		let x_ = x;
		if (<boolean>(x_ != null && x_.$$isSpecialRow !== undefined)) {
			xSpecial = <DataSourceSpecialRow>x_;
		}
		let y_ = y;
		if (<boolean>(y_ != null && y_.$$isSpecialRow !== undefined)) {
			ySpecial = <DataSourceSpecialRow>y_;
		}
		let currProperty: string = null;
		let currIsDescending: boolean = false;
		let count = this._propertiesCount;
		for (let i = 0; i < count; i++) {
			currProperty = this._properties[i];
			currIsDescending = this._directions[i] == ListSortDirection.Descending;
			if (xSpecial != null && xSpecial.rowType == DataSourceRowType.SummaryRowRoot) {
				return 1;
			}
			if (xSpecial != null) {
				xValue = xSpecial.getValue(currProperty);
			} else {
				xValue = this._dataSource.getItemProperty(x, currProperty);
			}
			if (ySpecial != null) {
				yValue = ySpecial.getValue(currProperty);
			} else {
				yValue = this._dataSource.getItemProperty(y, currProperty);
			}
			let result = this.compareValues(xValue, yValue, currIsDescending, this._schemaTypes[i], this._schemaComparables[i]);
			if (i == count - 1) {
				if (xSpecial != null && xSpecial.rowType == DataSourceRowType.SummaryRowSection && result == 0) {
					if (this._dataSource.isSectionSummaryRowsAtBottom) {
						result = currIsDescending ? -1 : 1;
					} else {
						result = currIsDescending ? 1 : -1;
					}
				}
			}
			if (result != 0) {
				return result;
			}
		}
		return 0;
	}
	compareKeys(key1: any[], key2: any[]): number {
		if (this._properties == null) {
			for (let i = 0; i < key1.length; i++) {
				if (key1[i] != key2[i]) {
					return -1;
				}
			}
			return 0;
		}
		let xValue: any = null;
		let yValue: any = null;
		let currIsDescending: boolean = false;
		let count = this._propertiesCount;
		for (let i1 = 0; i1 < count; i1++) {
			currIsDescending = this._directions[i1] == ListSortDirection.Descending;
			xValue = key1[i1];
			yValue = key2[i1];
			let result = this.compareValues(xValue, yValue, currIsDescending, this._schemaTypes[i1], this._schemaComparables[i1]);
			if (result != 0) {
				return result;
			}
		}
		return 0;
	}
	compareToKey(x: any, key: any[]): number {
		if (this._properties == null) {
			if (key.length == 1) {
				if (x == key[0]) {
					return 0;
				}
			}
			return -1;
		}
		let xValue: any = null;
		let yValue: any = null;
		let currProperty: string = null;
		let currIsDescending: boolean = false;
		let count = this._propertiesCount;
		for (let i = 0; i < count; i++) {
			currProperty = this._properties[i];
			currIsDescending = this._directions[i] == ListSortDirection.Descending;
			xValue = this._dataSource.getItemProperty(x, currProperty);
			yValue = key[i];
			let result = this.compareValues(xValue, yValue, currIsDescending, this._schemaTypes[i], this._schemaComparables[i]);
			if (result != 0) {
				return result;
			}
		}
		return 0;
	}
	private compareValues(xValue: any, yValue: any, currIsDescending: boolean, schemaType: DataSourceSchemaPropertyType, isComparable: boolean): number {
		if (currIsDescending) {
			let swap = xValue;
			xValue = yValue;
			yValue = swap;
		}
		let result: number = 0;
		switch (schemaType) {
			case DataSourceSchemaPropertyType.BooleanValue:
			xValue = xValue == null ? false : xValue;
			yValue = yValue == null ? false : yValue;
			result = boolCompare((<boolean>xValue), <boolean>yValue);
			break;

			case DataSourceSchemaPropertyType.DateTimeValue:
			xValue = xValue == null ? dateMinValue() : xValue;
			yValue = yValue == null ? dateMinValue() : yValue;
			let xVal_: any = xValue;
			let yVal_: any = yValue;
			xVal_ = +xVal_;
			yVal_ = +yVal_;
			let xVal: number = typeGetValue(xVal_);
			let yVal: number = typeGetValue(yVal_);
			result = Base.compareSimple(xVal, yVal);
			break;

			case DataSourceSchemaPropertyType.DoubleValue:
			xValue = xValue == null ? -1.7976931348623157E+308 : xValue;
			yValue = yValue == null ? -1.7976931348623157E+308 : yValue;
			result = Base.compareSimple((<number>xValue), <number>yValue);
			break;

			case DataSourceSchemaPropertyType.ByteValue:
			xValue = xValue == null ? 0 : xValue;
			yValue = yValue == null ? 0 : yValue;
			result = Base.compareSimple((<number>xValue), <number>yValue);
			break;

			case DataSourceSchemaPropertyType.DecimalValue:
			xValue = xValue == null ? -7.9228162514264338E+28 : xValue;
			yValue = yValue == null ? -7.9228162514264338E+28 : yValue;
			result = Base.compareSimple((<number>xValue), <number>yValue);
			break;

			case DataSourceSchemaPropertyType.SingleValue:
			xValue = xValue == null ? -3.4028230607370965E+38 : xValue;
			yValue = yValue == null ? -3.4028230607370965E+38 : yValue;
			result = Base.compareSimple((<number>yValue), <number>yValue);
			break;

			case DataSourceSchemaPropertyType.IntValue:
			xValue = xValue == null ? -2147483648 : xValue;
			yValue = yValue == null ? -2147483648 : yValue;
			result = Base.compareSimple((typeGetValue(xValue)), typeGetValue(yValue));
			break;

			case DataSourceSchemaPropertyType.LongValue:
			xValue = xValue == null ? -9.2233720368547758E+18 : xValue;
			yValue = yValue == null ? -9.2233720368547758E+18 : yValue;
			result = Base.compareSimple((typeGetValue(xValue)), typeGetValue(yValue));
			break;

			case DataSourceSchemaPropertyType.ObjectValue:
			if (isComparable) {
				let xComparable = <IComparable><any>xValue;
				let yComparable = <IComparable><any>yValue;
				if (xComparable != null) {
					result = CompareUtil.compareToObject(xComparable, yComparable);
				} else if (yComparable != null) {
					result = -1;
				} else {
					result = 0;
				}
			} else {
				xValue = xValue == null ? "" : xValue;
				yValue = yValue == null ? "" : yValue;
				result = stringCompare(xValue.toString(), yValue.toString());
			}
			break;

			case DataSourceSchemaPropertyType.ShortValue:
			xValue = xValue == null ? -32768 : xValue;
			yValue = yValue == null ? -32768 : yValue;
			result = Base.compareSimple((typeGetValue(xValue)), typeGetValue(yValue));
			break;

			case DataSourceSchemaPropertyType.StringValue:
			xValue = xValue == null ? "" : xValue;
			yValue = yValue == null ? "" : yValue;
			result = stringCompare(<string>xValue, <string>yValue);
			break;

		}

		return result;
	}
}


