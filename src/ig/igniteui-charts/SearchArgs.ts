/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SearchArgs extends Base {
	static $t: Type = markType(SearchArgs, 'SearchArgs');
	minX: number = 0;
	minY: number = 0;
	maxX: number = 0;
	maxY: number = 0;
	pixelSizeX: number = 0;
	pixelSizeY: number = 0;
	maxRenderDepth: number = 0;
}


