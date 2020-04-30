/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FormatLinearGraphLabelEventArgs extends EventArgs {
	static $t: Type = markType(FormatLinearGraphLabelEventArgs, 'FormatLinearGraphLabelEventArgs', (<any>EventArgs).$type);
	actualMinimumValue: number = 0;
	actualMaximumValue: number = 0;
	value: number = 0;
	label: string = null;
}


