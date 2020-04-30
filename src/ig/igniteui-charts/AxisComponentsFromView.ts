/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Path } from "igniteui-core/Path";

/**
 * @hidden 
 */
export class AxisComponentsFromView extends Base {
	static $t: Type = markType(AxisComponentsFromView, 'AxisComponentsFromView');
	private _axisLines: Path = null;
	get axisLines(): Path {
		return this._axisLines;
	}
	set axisLines(value: Path) {
		this._axisLines = value;
	}
	private _majorLines: Path = null;
	get majorLines(): Path {
		return this._majorLines;
	}
	set majorLines(value: Path) {
		this._majorLines = value;
	}
	private _strips: Path = null;
	get strips(): Path {
		return this._strips;
	}
	set strips(value: Path) {
		this._strips = value;
	}
	private _minorLines: Path = null;
	get minorLines(): Path {
		return this._minorLines;
	}
	set minorLines(value: Path) {
		this._minorLines = value;
	}
}


