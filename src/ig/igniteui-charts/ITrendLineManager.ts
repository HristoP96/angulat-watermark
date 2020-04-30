/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TrendLineManagerType } from "./TrendLineManagerType";
import { Polyline } from "igniteui-core/Polyline";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, Type } from "igniteui-core/type";
import { Clipper } from "igniteui-core/Clipper";
import { Canvas } from "igniteui-core/Canvas";
import { Series } from "./Series";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";

/**
 * @hidden 
 */
export interface ITrendLineManager { 
	readonly managerType: TrendLineManagerType;
readonly trendPolyline: Polyline;
rasterizeTrendLine(trendPoints: List$1<Point>): void;
rasterizeTrendLine1(trendPoints: List$1<Point>, clipper: Clipper): void;
attachPolyLine(rootCanvas: Canvas, owner: Series): void;
detach(): void;
clearPoints(): void;
reset(): void;
dataUpdated(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void;
propertyUpdated(sender: any, propertyName: string, oldValue: any, newValue: any): boolean;
}

/**
 * @hidden 
 */
export let ITrendLineManager_$type = new Type(null, 'ITrendLineManager');


