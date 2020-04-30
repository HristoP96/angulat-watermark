/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Point, Base, Type, markType } from "./type";
import { UIElement } from "./UIElement";

/**
 * @hidden 
 */
export class MouseEventArgs extends EventArgs {
	static $t: Type = markType(MouseEventArgs, 'MouseEventArgs', (<any>EventArgs).$type);
	private _position: Point = null;
	get position(): Point {
		return this._position;
	}
	set position(value: Point) {
		this._position = value;
	}
	private _originalSource: any = null;
	get originalSource(): any {
		return this._originalSource;
	}
	set originalSource(value: any) {
		this._originalSource = value;
	}
	getPosition(relativeTo: UIElement): Point {
		return this.position;
	}
}


