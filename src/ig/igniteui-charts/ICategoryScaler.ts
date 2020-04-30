/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IScaler, IScaler_$type } from "./IScaler";
import { CategoryMode } from "./CategoryMode";
import { Rect } from "igniteui-core/Rect";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface ICategoryScaler extends IScaler { 
	readonly categoryMode: CategoryMode;
getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number;
getGroupCenter(mode2Index: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number;
readonly isVertical: boolean;
getSeriesOffset(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, seriesIndex: number, categoryMode: number): number;
}

/**
 * @hidden 
 */
export let ICategoryScaler_$type = new Type(null, 'ICategoryScaler', null, [IScaler_$type]);


