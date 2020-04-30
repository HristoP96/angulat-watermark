/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { DataContext } from "igniteui-core/DataContext";

/**
 * @hidden 
 */
export class CategoryTooltipSeriesInfo extends Base {
	static $t: Type = markType(CategoryTooltipSeriesInfo, 'CategoryTooltipSeriesInfo');
	private _position: Point = null;
	get position(): Point {
		return this._position;
	}
	set position(value: Point) {
		this._position = value;
	}
	private _dataContexts: List$1<DataContext> = null;
	get dataContexts(): List$1<DataContext> {
		return this._dataContexts;
	}
	set dataContexts(value: List$1<DataContext>) {
		this._dataContexts = value;
	}
	private _tooltipObjects: List$1<any> = null;
	get tooltipObjects(): List$1<any> {
		return this._tooltipObjects;
	}
	set tooltipObjects(value: List$1<any>) {
		this._tooltipObjects = value;
	}
}


