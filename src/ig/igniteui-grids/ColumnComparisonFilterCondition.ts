/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { ColumnComparisonConditionOperatorType, ColumnComparisonConditionOperatorType_$type } from "./ColumnComparisonConditionOperatorType";
import { Base, typeCast, Date_$type, Type, markType } from "igniteui-core/type";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";
import { List$1 } from "igniteui-core/List$1";
import { IFilterExpression } from "igniteui-core/IFilterExpression";
import { FilterExpression } from "igniteui-core/FilterExpression";
import { FilterFactory } from "igniteui-core/FilterFactory";
import { dateTryParse } from "igniteui-core/dateExtended";

/**
 * @hidden 
 */
export class ColumnComparisonFilterCondition extends ColumnFilterCondition {
	static $t: Type = markType(ColumnComparisonFilterCondition, 'ColumnComparisonFilterCondition', (<any>ColumnFilterCondition).$type);
	constructor() {
		super();
		this.isCaseSensitive = true;
	}
	static getApplicableOperators(columnType: DataSourceSchemaPropertyType): ColumnComparisonConditionOperatorType[] {
		let ret: List$1<ColumnComparisonConditionOperatorType> = new List$1<ColumnComparisonConditionOperatorType>(ColumnComparisonConditionOperatorType_$type, 0);
		switch (columnType) {
			case DataSourceSchemaPropertyType.ObjectValue: break;
			case DataSourceSchemaPropertyType.BooleanValue: break;
			case DataSourceSchemaPropertyType.ByteValue:

			case DataSourceSchemaPropertyType.DecimalValue:

			case DataSourceSchemaPropertyType.DoubleValue:

			case DataSourceSchemaPropertyType.IntValue:

			case DataSourceSchemaPropertyType.LongValue:

			case DataSourceSchemaPropertyType.DateTimeValue:
			ret.add(ColumnComparisonConditionOperatorType.GreaterThan);
			ret.add(ColumnComparisonConditionOperatorType.GreaterThanOrEqualTo);
			ret.add(ColumnComparisonConditionOperatorType.LessThan);
			ret.add(ColumnComparisonConditionOperatorType.LessThanOrEqualTo);
			break;

			case DataSourceSchemaPropertyType.StringValue:
			ret.add(ColumnComparisonConditionOperatorType.StartsWith);
			ret.add(ColumnComparisonConditionOperatorType.DoesNotStartWith);
			ret.add(ColumnComparisonConditionOperatorType.EndsWith);
			ret.add(ColumnComparisonConditionOperatorType.DoesNotEndWith);
			ret.add(ColumnComparisonConditionOperatorType.Contains);
			ret.add(ColumnComparisonConditionOperatorType.DoesNotContain);
			ret.add(ColumnComparisonConditionOperatorType.GreaterThan);
			ret.add(ColumnComparisonConditionOperatorType.GreaterThanOrEqualTo);
			ret.add(ColumnComparisonConditionOperatorType.LessThan);
			ret.add(ColumnComparisonConditionOperatorType.LessThanOrEqualTo);
			break;

		}

		ret.add(ColumnComparisonConditionOperatorType.Equals);
		ret.add(ColumnComparisonConditionOperatorType.NotEquals);
		ret.add(ColumnComparisonConditionOperatorType.IsNotNull);
		ret.add(ColumnComparisonConditionOperatorType.IsNull);
		return ret.toArray();
	}
	equals(other: any): boolean {
		if (other == null) {
			return false;
		}
		if (!(typeCast<ColumnComparisonFilterCondition>((<any>ColumnComparisonFilterCondition).$type, other) !== null)) {
			return false;
		}
		let oth = <ColumnComparisonFilterCondition>other;
		if (oth.operator != this.operator) {
			return false;
		}
		if (!Base.equalsStatic(oth.value, this.value)) {
			return false;
		}
		if (!Base.equalsStatic(oth.isCaseSensitive, this.isCaseSensitive)) {
			return false;
		}
		return true;
	}
	private _operator: ColumnComparisonConditionOperatorType = <ColumnComparisonConditionOperatorType>0;
	get operator(): ColumnComparisonConditionOperatorType {
		return this._operator;
	}
	set operator(value: ColumnComparisonConditionOperatorType) {
		this._operator = value;
	}
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		this._value = value;
	}
	private _isCaseSensitive: boolean = false;
	get isCaseSensitive(): boolean {
		return this._isCaseSensitive;
	}
	set isCaseSensitive(value: boolean) {
		this._isCaseSensitive = value;
	}
	resolveFilter(columnName: string, columnType: DataSourceSchemaPropertyType): IFilterExpression {
		switch (this.operator) {
			case ColumnComparisonConditionOperatorType.Contains:
			{
				if (columnType != DataSourceSchemaPropertyType.StringValue || this.value == null) {
					return null;
				}
				let prop = FilterFactory.instance.property(columnName);
				let val = FilterFactory.instance.literal(this.value);
				if (!this.isCaseSensitive) {
					prop = prop.toLower();
					val = val.toLower();
				}
				return prop.contains(val);
			}

			case ColumnComparisonConditionOperatorType.DoesNotContain:
			{
				if (columnType != DataSourceSchemaPropertyType.StringValue || this.value == null) {
					return null;
				}
				let prop1 = FilterFactory.instance.property(columnName);
				let val1 = FilterFactory.instance.literal(this.value);
				if (!this.isCaseSensitive) {
					prop1 = prop1.toLower();
					val1 = val1.toLower();
				}
				return prop1.contains(val1).not();
			}

			case ColumnComparisonConditionOperatorType.DoesNotEndWith:
			{
				if (columnType != DataSourceSchemaPropertyType.StringValue || this.value == null) {
					return null;
				}
				let prop2 = FilterFactory.instance.property(columnName);
				let val2 = FilterFactory.instance.literal(this.value);
				if (!this.isCaseSensitive) {
					prop2 = prop2.toLower();
					val2 = val2.toLower();
				}
				return prop2.endsWith(val2).not();
			}

			case ColumnComparisonConditionOperatorType.DoesNotStartWith:
			{
				if (columnType != DataSourceSchemaPropertyType.StringValue || this.value == null) {
					return null;
				}
				let prop3 = FilterFactory.instance.property(columnName);
				let val3 = FilterFactory.instance.literal(this.value);
				if (!this.isCaseSensitive) {
					prop3 = prop3.toLower();
					val3 = val3.toLower();
				}
				return prop3.startsWith(val3).not();
			}

			case ColumnComparisonConditionOperatorType.EndsWith:
			{
				if (columnType != DataSourceSchemaPropertyType.StringValue || this.value == null) {
					return null;
				}
				let prop4 = FilterFactory.instance.property(columnName);
				let val4 = FilterFactory.instance.literal(this.value);
				if (!this.isCaseSensitive) {
					prop4 = prop4.toLower();
					val4 = val4.toLower();
				}
				return prop4.endsWith(val4);
			}

			case ColumnComparisonConditionOperatorType.Equals:
			{
				let prop5 = FilterFactory.instance.property(columnName);
				let val5 = FilterFactory.instance.literal(this.coerceComparisonValue(this.value, columnType));
				if (columnType == DataSourceSchemaPropertyType.StringValue && !this.isCaseSensitive) {
					prop5 = prop5.toLower();
					val5 = val5.toLower();
				}
				return prop5.isEqualTo(val5);
			}

			case ColumnComparisonConditionOperatorType.GreaterThan:
			{
				let prop6 = FilterFactory.instance.property(columnName);
				let val6 = FilterFactory.instance.literal(this.coerceComparisonValue(this.value, columnType));
				if (columnType == DataSourceSchemaPropertyType.StringValue && !this.isCaseSensitive) {
					prop6 = prop6.toLower();
					val6 = val6.toLower();
				}
				return prop6.isGreaterThan(val6);
			}

			case ColumnComparisonConditionOperatorType.GreaterThanOrEqualTo:
			{
				let prop7 = FilterFactory.instance.property(columnName);
				let val7 = FilterFactory.instance.literal(this.coerceComparisonValue(this.value, columnType));
				if (columnType == DataSourceSchemaPropertyType.StringValue && !this.isCaseSensitive) {
					prop7 = prop7.toLower();
					val7 = val7.toLower();
				}
				return prop7.isGreaterThanOrEqualTo(val7);
			}

			case ColumnComparisonConditionOperatorType.LessThan:
			{
				let prop8 = FilterFactory.instance.property(columnName);
				let val8 = FilterFactory.instance.literal(this.coerceComparisonValue(this.value, columnType));
				if (columnType == DataSourceSchemaPropertyType.StringValue && !this.isCaseSensitive) {
					prop8 = prop8.toLower();
					val8 = val8.toLower();
				}
				return prop8.isLessThan(val8);
			}

			case ColumnComparisonConditionOperatorType.LessThanOrEqualTo:
			{
				let prop9 = FilterFactory.instance.property(columnName);
				let val9 = FilterFactory.instance.literal(this.coerceComparisonValue(this.value, columnType));
				if (columnType == DataSourceSchemaPropertyType.StringValue && !this.isCaseSensitive) {
					prop9 = prop9.toLower();
					val9 = val9.toLower();
				}
				return prop9.isLessThanOrEqualTo(val9);
			}

			case ColumnComparisonConditionOperatorType.NotEquals:
			{
				let prop10 = FilterFactory.instance.property(columnName);
				let val10 = FilterFactory.instance.literal(this.coerceComparisonValue(this.value, columnType));
				if (columnType == DataSourceSchemaPropertyType.StringValue && !this.isCaseSensitive) {
					prop10 = prop10.toLower();
					val10 = val10.toLower();
				}
				return prop10.isNotEqualTo(val10);
			}

			case ColumnComparisonConditionOperatorType.StartsWith:
			{
				if (columnType != DataSourceSchemaPropertyType.StringValue || this.value == null) {
					return null;
				}
				let prop11 = FilterFactory.instance.property(columnName);
				let val11 = FilterFactory.instance.literal(this.value);
				if (!this.isCaseSensitive) {
					prop11 = prop11.toLower();
					val11 = val11.toLower();
				}
				return prop11.startsWith(val11);
			}

			case ColumnComparisonConditionOperatorType.IsNotNull:
			{
				let prop12 = FilterFactory.instance.property(columnName);
				let val12 = FilterFactory.instance.literal(null);
				return prop12.isNotEqualTo(val12);
			}

			case ColumnComparisonConditionOperatorType.IsNull:
			{
				let prop13 = FilterFactory.instance.property(columnName);
				let val13 = FilterFactory.instance.literal(null);
				return prop13.isEqualTo(val13);
			}

		}

		return null;
	}
	static getOperandNumber(op: ColumnComparisonConditionOperatorType): number {
		if (op == ColumnComparisonConditionOperatorType.IsNotNull || op == ColumnComparisonConditionOperatorType.IsNull) {
			return 0;
		} else {
			return 1;
		}
	}
	static getOperandNumbers(applicableOperators: ColumnComparisonConditionOperatorType[]): number[] {
		let operandNumbers: number[] = <number[]>new Array(applicableOperators.length);
		for (let i = 0; i < applicableOperators.length; i++) {
			operandNumbers[i] = ColumnComparisonFilterCondition.getOperandNumber(applicableOperators[i]);
		}
		return operandNumbers;
	}
	private coerceComparisonValue(value_: any, columnType: DataSourceSchemaPropertyType): any {
		switch (columnType) {
			case DataSourceSchemaPropertyType.BooleanValue: return <boolean>(!!value_);
			case DataSourceSchemaPropertyType.ByteValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.DateTimeValue:
			if (typeCast<Date>(Date_$type, value_) !== null) {
				return value_;
			}
			if (typeof value_ === 'string') {
				let val: Date;
				if (((() => { let $ret = dateTryParse(<string>value_, val); val = $ret.p1; return $ret.ret; })())) {
					return val;
				} else {
					return null;
				}
			}
			return <Date>(new Date(+value_));

			case DataSourceSchemaPropertyType.DecimalValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.DoubleValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.IntValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.LongValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.ObjectValue: return value_;
			case DataSourceSchemaPropertyType.ShortValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.SingleValue: return <number>(+value_);
			case DataSourceSchemaPropertyType.StringValue: return value_ != null ? value_.toString() : value_;
		}

		return value_;
	}
}


