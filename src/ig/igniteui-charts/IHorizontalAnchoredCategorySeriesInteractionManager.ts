/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Rect } from "igniteui-core/Rect";
import { Series } from "./Series";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, Type } from "igniteui-core/type";
import { NumericAxisBase } from "./NumericAxisBase";

/**
 * @hidden 
 */
export interface IHorizontalAnchoredCategorySeriesInteractionManager { 
	getSeriesValueMarkerBoundingBox(series: Series, markers: List$1<Point>, world: Point, getMarkerBoundingBox: (arg1: number) => Rect): Rect;
testAreaOver(target: Series, valueAxis: NumericAxisBase, position: Point, snapPosition: Point, isFinger: boolean): boolean;
getHighStrokeSegments(target: Series, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, position: Point): Point[][];
getLowStrokeSegments(target: Series, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, position: Point): Point[][];
}

/**
 * @hidden 
 */
export let IHorizontalAnchoredCategorySeriesInteractionManager_$type = new Type(null, 'IHorizontalAnchoredCategorySeriesInteractionManager');


