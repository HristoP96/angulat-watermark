/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type } from "igniteui-core/type";
import { Series } from "./Series";
import { List$1 } from "igniteui-core/List$1";
import { HighlightingInfo } from "./HighlightingInfo";
import { Marker } from "./Marker";

/**
 * @hidden 
 */
export interface ICategorySeriesInteractionManager { 
	getItem(target: Series, world: Point): any;
getItemIndexSorted(target: Series, world: Point): number;
getExactItemIndex(target: Series, world: Point): number;
getSortingCategoryBucketIndex(target: Series, buckets: List$1<number[]>, world: Point): number;
getSpecificMarkerHighlightingInfo(target: Series, markers: List$1<Marker>, buckets: List$1<number[]>, item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo;
getSpecificHighlightingInfo(target: Series, buckets: List$1<number[]>, firstBucket: number, lastBucket: number, bucketSize: number, item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo;
}

/**
 * @hidden 
 */
export let ICategorySeriesInteractionManager_$type = new Type(null, 'ICategorySeriesInteractionManager');


