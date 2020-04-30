/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { LinearGraphTooltipDataContext } from "./LinearGraphTooltipDataContext";

/**
 * @hidden 
 */
export class ToolTipInfo extends Base {
	static $t: Type = markType(ToolTipInfo, 'ToolTipInfo');
	private _type: string = null;
	get type(): string {
		return this._type;
	}
	set type(value: string) {
		this._type = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _point: Point = null;
	get point(): Point {
		return this._point;
	}
	set point(value: Point) {
		this._point = value;
	}
	private _dataContext: LinearGraphTooltipDataContext = null;
	get dataContext(): LinearGraphTooltipDataContext {
		return this._dataContext;
	}
	set dataContext(value: LinearGraphTooltipDataContext) {
		this._dataContext = value;
	}
}


