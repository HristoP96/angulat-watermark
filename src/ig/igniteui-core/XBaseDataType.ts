/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Enum for XBase field data types.
 */
export enum XBaseDataType {
	/**
	 * Character data type.
	 */
	Character = 0,
	/**
	 * Number data type.
	 */
	Number = 1,
	/**
	 * Logical data type.
	 */
	Logical = 2,
	/**
	 * Date data type.
	 */
	Date = 3,
	/**
	 * Memo data type.
	 */
	Memo = 4,
	/**
	 * Floating point data type.
	 */
	FloatingPoint = 5,
	/**
	 * Binary data type.
	 */
	Binary = 6,
	/**
	 * General data type.
	 */
	General = 7,
	/**
	 * Picture data type.
	 */
	Picture = 8,
	/**
	 * Currency data type.
	 */
	Currency = 9,
	/**
	 * DateTime data type.
	 */
	DateTime = 10,
	/**
	 * Integer data type.
	 */
	Integer = 11,
	/**
	 * VariField data type.
	 */
	VariField = 12,
	/**
	 * Variant data type.
	 */
	Variant = 13,
	/**
	 * Timestamp data type.
	 */
	Timestamp = 14,
	/**
	 * Double data type.
	 */
	double1 = 15,
	/**
	 * Auto increment data type.
	 */
	AutoIncrement = 16
}

/**
 * @hidden 
 */
export let XBaseDataType_$type = markEnum('XBaseDataType', 'Character,0|Number,1|Logical,2|Date,3|Memo,4|FloatingPoint,5|Binary,6|General,7|Picture,8|Currency,9|DateTime,10|Integer,11|VariField,12|Variant,13|Timestamp,14|Double:double1,15|AutoIncrement,16');


