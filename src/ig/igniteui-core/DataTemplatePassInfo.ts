/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DataTemplatePassInfo extends Base {
	static $t: Type = markType(DataTemplatePassInfo, 'DataTemplatePassInfo');
	renderContext: any = null;
	context: any = null;
	viewportTop: number = 0;
	viewportLeft: number = 0;
	viewportWidth: number = 0;
	viewportHeight: number = 0;
	isHitTestRender: boolean = false;
	passID: string = null;
}


