/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IList$1, IList$1_$type, Point, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IFlattener { 
	flatten(points: IList$1<Point>, resolution: number): IList$1<Point>;
}

/**
 * @hidden 
 */
export let IFlattener_$type = new Type(null, 'IFlattener');


