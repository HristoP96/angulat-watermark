/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IOverlayProxy { 
	setXAxis(overlay: Series, xAxis: CategoryAxisBase): void;
setYAxis(overlay: Series, yAxis: NumericYAxis): void;
setOpenMemberPath(overlay: Series, v: string): void;
setHighMemberPath(overlay: Series, v: string): void;
setLowMemberPath(overlay: Series, v: string): void;
setCloseMemberPath(overlay: Series, v: string): void;
setVolumeMemberPath(overlay: Series, v: string): void;
matchesType(series: Series): boolean;
setMultiplier(series: Series, indicatorMultiplier: number): void;
}

/**
 * @hidden 
 */
export let IOverlayProxy_$type = new Type(null, 'IOverlayProxy');


