/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export const enum GridEffectMainIntent {
	Default = 0,
	Position = 1,
	Opacity = 2,
	Virtualization = 3,
	Dimensions = 4,
	Selection = 5,
	DataChange = 6,
	ColumnPropertyChange = 7,
	Activation = 8
}

/**
 * @hidden 
 */
export let GridEffectMainIntent_$type = markEnum('GridEffectMainIntent', 'Default,0|Position,1|Opacity,2|Virtualization,3|Dimensions,4|Selection,5|DataChange,6|ColumnPropertyChange,7|Activation,8');


