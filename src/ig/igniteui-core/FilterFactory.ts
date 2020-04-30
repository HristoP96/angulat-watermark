/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { FilterExpression } from "./FilterExpression";
import { IFilterExpression } from "./IFilterExpression";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
import { FilterExpressionOperatorType } from "./FilterExpressionOperatorType";
import { FilterExpressionFunctionType } from "./FilterExpressionFunctionType";

/**
 * @hidden 
 */
export class FilterFactory extends Base {
	static $t: Type = markType(FilterFactory, 'FilterFactory');
	private static _instance: FilterFactory = null;
	static get instance(): FilterFactory {
		if (FilterFactory._instance == null) {
			FilterFactory._instance = new FilterFactory();
		}
		return FilterFactory._instance;
	}
	static build(callback: (b: FilterFactory) => FilterExpression): FilterExpression {
		let instance = FilterFactory.instance;
		return callback(instance);
	}
	property(propertyName: string): FilterExpression {
		return FilterExpression.property(propertyName);
	}
	literal(value: any): FilterExpression {
		return FilterExpression.literal(value);
	}
	group(expression: IFilterExpression): FilterExpression {
		return FilterExpression.operation(expression, FilterExpressionOperatorType.Grouping, null);
	}
	and(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.And, right);
	}
	or(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Or, right);
	}
	not(expression: IFilterExpression): FilterExpression {
		return FilterExpression.operation(expression, FilterExpressionOperatorType.Not, null);
	}
	add(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Add, right);
	}
	divide(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Divide, right);
	}
	equal(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Equal, right);
	}
	greaterThan(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.GreaterThan, right);
	}
	greaterThanOrEqual(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.GreaterThanOrEqual, right);
	}
	lessThan(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.LessThan, right);
	}
	lessThanOrEqual(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.LessThanOrEqual, right);
	}
	modulus(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Modulo, right);
	}
	multiply(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Multiply, right);
	}
	notEqual(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.NotEqual, right);
	}
	subtract(left: IFilterExpression, right: IFilterExpression): FilterExpression {
		return FilterExpression.operation(left, FilterExpressionOperatorType.Subtract, right);
	}
	ceiling(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Ceiling, expression);
	}
	concat(expression: IFilterExpression, toAppend: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Concat, expression, toAppend);
	}
	concat1(expression: IFilterExpression, toAppend: string): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Concat, expression, FilterExpression.literal(toAppend));
	}
	contains(wholeString: IFilterExpression, subString: IFilterExpression | string): FilterExpression {
		if (typeof subString === 'string') {
			subString = FilterExpression.literal(subString);
		}
		return FilterExpression.func(FilterExpressionFunctionType.Contains, wholeString, <IFilterExpression><any>subString);
	}
	day(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Day, expression);
	}
	endsWith(wholeString: IFilterExpression, subString: IFilterExpression | string): FilterExpression {
		if (typeof subString === 'string') {
			subString = FilterExpression.literal(subString);
		}
		return FilterExpression.func(FilterExpressionFunctionType.EndsWith, wholeString, <IFilterExpression><any>subString);
	}
	floor(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Floor, expression);
	}
	hour(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Hour, expression);
	}
	indexOf(target: IFilterExpression, toFind: IFilterExpression | string): FilterExpression {
		if (typeof toFind === 'string') {
			toFind = FilterExpression.literal(toFind);
		}
		return FilterExpression.func(FilterExpressionFunctionType.IndexOf, target, <IFilterExpression><any>toFind);
	}
	length(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Length1, expression);
	}
	minute(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Minute, expression);
	}
	month(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Month, expression);
	}
	replace(target: IFilterExpression, toFind: IFilterExpression | string, replacement: IFilterExpression | string): FilterExpression {
		if (typeof toFind === 'string') {
			toFind = FilterExpression.literal(toFind);
		}
		if (typeof replacement === 'string') {
			replacement = FilterExpression.literal(replacement);
		}
		return FilterExpression.func(FilterExpressionFunctionType.Replace, target, <IFilterExpression><any>toFind, <IFilterExpression><any>replacement);
	}
	round(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Round, expression);
	}
	second(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Second, expression);
	}
	startsWith(wholeString: IFilterExpression, subString: IFilterExpression | string): FilterExpression {
		if (typeof subString === 'string') {
			subString = FilterExpression.literal(subString);
		}
		return FilterExpression.func(FilterExpressionFunctionType.StartsWith, wholeString, <IFilterExpression><any>subString);
	}
	substring(expression: IFilterExpression, startIndex: IFilterExpression | number, length: IFilterExpression | number = null): FilterExpression {
		if (typeof startIndex === 'number') {
			startIndex = FilterExpression.literal(startIndex);
		}
		if (length != null && typeof length === 'number') {
			length = FilterExpression.literal(length);
		}
		if (length != null) {
			return FilterExpression.func(FilterExpressionFunctionType.Substring, expression, <IFilterExpression><any>startIndex, <IFilterExpression><any>length);
		} else {
			return FilterExpression.func(FilterExpressionFunctionType.Substring, expression, <IFilterExpression><any>startIndex);
		}
	}
	toLower(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.ToLower, expression);
	}
	toUpper(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.ToUpper, expression);
	}
	trim(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Trim, expression);
	}
	year(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Year, expression);
	}
	date(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Date, expression);
	}
	time(expression: IFilterExpression): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Time, expression);
	}
	now(): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Year);
	}
	isOf(expression: IFilterExpression, type: DataSourceSchemaPropertyType): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Year, expression);
	}
	cast(expression: IFilterExpression, type: DataSourceSchemaPropertyType): FilterExpression {
		return FilterExpression.func(FilterExpressionFunctionType.Cast, expression);
	}
}


