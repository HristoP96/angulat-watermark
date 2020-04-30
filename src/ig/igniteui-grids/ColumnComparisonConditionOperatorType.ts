/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Identifies the operator type of a column comparison condition.
 */
export enum ColumnComparisonConditionOperatorType {
	Contains = 0,
	DoesNotContain = 1,
	DoesNotEndWith = 2,
	DoesNotStartWith = 3,
	EndsWith = 4,
	Equals = 5,
	GreaterThan = 6,
	GreaterThanOrEqualTo = 7,
	LessThan = 8,
	LessThanOrEqualTo = 9,
	NotEquals = 10,
	StartsWith = 11,
	IsNotNull = 12,
	IsNull = 13
}

/**
 * @hidden 
 */
export let ColumnComparisonConditionOperatorType_$type = markEnum('ColumnComparisonConditionOperatorType', 'Contains,0|DoesNotContain,1|DoesNotEndWith,2|DoesNotStartWith,3|EndsWith,4|Equals,5|GreaterThan,6|GreaterThanOrEqualTo,7|LessThan,8|LessThanOrEqualTo,9|NotEquals,10|StartsWith,11|IsNotNull,12|IsNull,13');


