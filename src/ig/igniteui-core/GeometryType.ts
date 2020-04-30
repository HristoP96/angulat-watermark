/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

export enum GeometryType {
	Group = 0,
	Line = 1,
	Rectangle = 2,
	Ellipse = 3,
	Path = 4
}

/**
 * @hidden 
 */
export let GeometryType_$type = markEnum('GeometryType', 'Group,0|Line,1|Rectangle,2|Ellipse,3|Path,4');


