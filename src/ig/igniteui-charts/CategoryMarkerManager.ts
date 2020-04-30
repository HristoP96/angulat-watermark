/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { MarkerSeries } from "./MarkerSeries";
import { List$1 } from "igniteui-core/List$1";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Marker } from "./Marker";
import { FrameworkElement } from "igniteui-core/FrameworkElement";

/**
 * @hidden 
 */
export class CategoryMarkerManager extends Base {
	static $t: Type = markType(CategoryMarkerManager, 'CategoryMarkerManager');
	static rasterizeMarkers(series: MarkerSeries, markerLocations: List$1<Point>, markers: Pool$1<Marker>, lightweight: boolean): void {
		let hasMarkers: boolean = series.shouldDisplayMarkers();
		if (markers == null) {
			return;
		}
		if (hasMarkers) {
			for (let i: number = 0; i < markerLocations.count; ++i) {
				CategoryMarkerManager.positionMarker(markers, i, markerLocations, lightweight);
			}
			markers.count = markerLocations.count;
		}
	}
	private static positionMarker(markers: Pool$1<Marker>, i: number, markerLocations: List$1<Point>, lightweight: boolean): void {
		markers.item(i).canvasLeft = markerLocations._inner[i].x;
		markers.item(i).canvasTop = markerLocations._inner[i].y;
	}
}


