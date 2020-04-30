/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Rect } from "igniteui-core/Rect";
import { Base, EventArgs, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface ITimeRangeSelectorAxis { 
	readonly actualMinimumValue: Date;
readonly actualMaximumValue: Date;
readonly visibleMinimum: Date;
readonly visibleMaximum: Date;
getWindowRectForSelection(selectionStart: Date, selectionEnd: Date): Rect;
visibleRangeChanged: (sender: any, e: EventArgs) => void;
readonly dateTimeMemberPath: string;
itemLabelFormat(): string;
minimumValue: Date;
maximumValue: Date;
}

/**
 * @hidden 
 */
export let ITimeRangeSelectorAxis_$type = new Type(null, 'ITimeRangeSelectorAxis');


