/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FormatRadialGaugeLabelEventArgs } from "./FormatRadialGaugeLabelEventArgs";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AlignRadialGaugeLabelEventArgs extends FormatRadialGaugeLabelEventArgs {
	static $t: Type = markType(AlignRadialGaugeLabelEventArgs, 'AlignRadialGaugeLabelEventArgs', (<any>FormatRadialGaugeLabelEventArgs).$type);
	width: number = 0;
	height: number = 0;
	offsetX: number = 0;
	offsetY: number = 0;
}


