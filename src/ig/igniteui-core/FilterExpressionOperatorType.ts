/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Identifies the operator type of an operator filter expression.
 */
export enum FilterExpressionOperatorType {
	/**
	 * No operator type specified.
	 */
	None = 0,
	/**
	 * Determines if two expressions are equal.
	 */
	Equal = 1,
	/**
	 * Determines if two expressions are not equal.
	 */
	NotEqual = 2,
	/**
	 * Determines if an expression is greater than another.
	 */
	GreaterThan = 3,
	/**
	 * Determines if an expression is greater than or equal to another.
	 */
	GreaterThanOrEqual = 4,
	/**
	 * Determines if an expression is less than another.
	 */
	LessThan = 5,
	/**
	 * Determines if an expression is less than or equal to another.
	 */
	LessThanOrEqual = 6,
	/**
	 * Applies the And operator to two expressions.
	 */
	And = 7,
	/**
	 * Applies the Or operator to two expressions.
	 */
	Or = 8,
	/**
	 * Applies the Not operator to a single expression.
	 */
	Not = 9,
	/**
	 * Adds two expressions.
	 */
	Add = 10,
	/**
	 * Subtracts one expression from another.
	 */
	Subtract = 11,
	/**
	 * Multiplies two expressions.
	 */
	Multiply = 12,
	/**
	 * Divides one expression by another.
	 */
	Divide = 13,
	/**
	 * Performs the modulus of one expression by another.
	 */
	Modulo = 14,
	/**
	 * Groups an expression.
	 */
	Grouping = 15
}

/**
 * @hidden 
 */
export let FilterExpressionOperatorType_$type = markEnum('FilterExpressionOperatorType', 'None,0|Equal,1|NotEqual,2|GreaterThan,3|GreaterThanOrEqual,4|LessThan,5|LessThanOrEqual,6|And,7|Or,8|Not,9|Add,10|Subtract,11|Multiply,12|Divide,13|Modulo,14|Grouping,15');


