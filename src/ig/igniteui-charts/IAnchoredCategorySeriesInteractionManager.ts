/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Axis } from "./Axis";
import { Base, Point, Type } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericAxisBase } from "./NumericAxisBase";
import { CategoryFrame } from "./CategoryFrame";

/**
 * @hidden 
 */
export interface IAnchoredCategorySeriesInteractionManager { 
	scrollIntoView(target: Series, valueColumn: IFastItemColumn$1<number>, xAxis: Axis, yAxis: Axis, offset: number, item: any): boolean;
getColumnShapeBoundingBox(target: Series, world: Point, xAxis: CategoryAxisBase, yAxis: NumericAxisBase, currentFrame: CategoryFrame, bucketSize: number, firstBucket: number, getBucketValue: (arg1: number[]) => number): Rect;
getItem(target: Series, world: Point, bucketSize: number, valueColumn: IFastItemColumn$1<number>, xAxis: Axis, yAxis: Axis, isNearestY: boolean, getItemBase: (arg1: Point) => any): any;
getDefaultTooltipTemplate(target: Series, valueMemberPath: string): string;
}

/**
 * @hidden 
 */
export let IAnchoredCategorySeriesInteractionManager_$type = new Type(null, 'IAnchoredCategorySeriesInteractionManager');


