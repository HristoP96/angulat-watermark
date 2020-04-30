/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface ISortingAxis { 
	readonly sortedIndices: List$1<number>;
getFirstVisibleIndex(windowRect: Rect, viewportRect: Rect, effectiveViewport: Rect, contentViewport: Rect): number;
getLastVisibleIndex(windowRect: Rect, viewportRect: Rect, effectiveViewport: Rect, contentViewport: Rect): number;
getUnscaledValueAt(index: number): number;
getIndexClosestToUnscaledValue(unscaledValue: number): number;
getExactUnsortedIndexClosestToUnscaledValue(unscaledValue: number): number;
notifyDataChanged(): void;
readonly isDateTime: boolean;
ensureActualMinimumAndMaximum(): void;
}

/**
 * @hidden 
 */
export let ISortingAxis_$type = new Type(null, 'ISortingAxis');


