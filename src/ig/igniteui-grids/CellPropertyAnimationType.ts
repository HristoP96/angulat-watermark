/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how cell property animates are applied.
 */
export enum CellPropertyAnimationType {
	/**
	 * The property is animated as a double value.
	 */
	DoubleValue = 0,
	/**
	 * The property is animated as a number value.
	 */
	NumberValue = 1,
	/**
	 * The property is animated as a brush value.
	 */
	BrushValue = 2,
	/**
	 * The property is animated as a font value.
	 */
	FontValue = 3,
	/**
	 * The property is animated as a enum value.
	 */
	EnumValue = 4,
	/**
	 * The property is animated as a bool value.
	 */
	BoolValue = 5,
	/**
	 * The property is animated as an int value.
	 */
	IntValue = 6,
	/**
	 * The property is animated as a date value.
	 */
	DateValue = 7,
	/**
	 * The propety is animated as a string value.
	 */
	StringValue = 8,
	/**
	 * The property is animated as an object value.
	 */
	ObjectValue = 9,
	/**
	 * The property value is ignored and not propagated to live cells.
	 */
	IgnoredValue = 10,
	/**
	 * The property value is not animated.
	 */
	None = 11
}

/**
 * @hidden 
 */
export let CellPropertyAnimationType_$type = markEnum('CellPropertyAnimationType', 'DoubleValue,0|NumberValue,1|BrushValue,2|FontValue,3|EnumValue,4|BoolValue,5|IntValue,6|DateValue,7|StringValue,8|ObjectValue,9|IgnoredValue,10|None,11');


