/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { DataTemplatePassInfo } from "./DataTemplatePassInfo";

/**
 * @hidden 
 */
export class DataTemplateMeasureInfo extends Base {
	static $t: Type = markType(DataTemplateMeasureInfo, 'DataTemplateMeasureInfo');
	renderContext: any = null;
	context: any = null;
	width: number = 0;
	height: number = 0;
	isConstant: boolean = false;
	data: any = null;
	passInfo: DataTemplatePassInfo = null;
	renderOffsetX: number = 0;
	renderOffsetY: number = 0;
}


