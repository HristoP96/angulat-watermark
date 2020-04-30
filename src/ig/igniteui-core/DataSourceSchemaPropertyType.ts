/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Enumerates the available property types on a data source schema.
 */
export enum DataSourceSchemaPropertyType {
	/**
	 * The property is of type string.
	 */
	StringValue = 0,
	/**
	 * The property is of type integer.
	 */
	IntValue = 1,
	/**
	 * The property is of type boolean.
	 */
	BooleanValue = 2,
	/**
	 * The property is of type long.
	 */
	LongValue = 3,
	/**
	 * The property if of type short.
	 */
	ShortValue = 4,
	/**
	 * The property is of type double.
	 */
	DoubleValue = 5,
	/**
	 * The property is of type decimal.
	 */
	DecimalValue = 6,
	/**
	 * The property is of type single.
	 */
	SingleValue = 7,
	/**
	 * The property is of type datetime.
	 */
	DateTimeValue = 8,
	/**
	 * The property is of type datetimeoffset.
	 */
	DateTimeOffsetValue = 9,
	/**
	 * The property is of type byte.
	 */
	ByteValue = 10,
	/**
	 * The property is of type object.
	 */
	ObjectValue = 11
}

/**
 * @hidden 
 */
export let DataSourceSchemaPropertyType_$type = markEnum('DataSourceSchemaPropertyType', 'StringValue,0|IntValue,1|BooleanValue,2|LongValue,3|ShortValue,4|DoubleValue,5|DecimalValue,6|SingleValue,7|DateTimeValue,8|DateTimeOffsetValue,9|ByteValue,10|ObjectValue,11');


