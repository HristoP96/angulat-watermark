/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { Base, Type, markType } from "igniteui-core/type";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategoryToolTipLayerFrame extends Frame {
	static $t: Type = markType(CategoryToolTipLayerFrame, 'CategoryToolTipLayerFrame', (<any>Frame).$type);
	private _y: number = 0;
	get tooltipYCoord(): number {
		return this._y;
	}
	set tooltipYCoord(value: number) {
		this._y = value;
	}
	private _tooltipXCoord: number = 0;
	get tooltipXCoord(): number {
		return this._tooltipXCoord;
	}
	set tooltipXCoord(value: number) {
		this._tooltipXCoord = value;
	}
	private _pointerPositionYCoord: number = 0;
	get pointerPositionYCoord(): number {
		return this._pointerPositionYCoord;
	}
	set pointerPositionYCoord(value: number) {
		this._pointerPositionYCoord = value;
	}
	private _pointerPositionXCoord: number = 0;
	get pointerPositionXCoord(): number {
		return this._pointerPositionXCoord;
	}
	set pointerPositionXCoord(value: number) {
		this._pointerPositionXCoord = value;
	}
	private _tooltipWidth: number = 0;
	get tooltipWidth(): number {
		return this._tooltipWidth;
	}
	set tooltipWidth(value: number) {
		this._tooltipWidth = value;
	}
	private _tooltipHeight: number = 0;
	get tooltipHeight(): number {
		return this._tooltipHeight;
	}
	set tooltipHeight(value: number) {
		this._tooltipHeight = value;
	}
	constructor() {
		super();
		this.tooltipXCoord = NaN;
		this.tooltipYCoord = NaN;
		this.pointerPositionXCoord = NaN;
		this.pointerPositionYCoord = NaN;
		this.tooltipWidth = NaN;
		this.tooltipHeight = NaN;
	}
	interpolate2(p: number, min: Frame, max: Frame): void {
		let mn: CategoryToolTipLayerFrame = <CategoryToolTipLayerFrame>min;
		let mx: CategoryToolTipLayerFrame = <CategoryToolTipLayerFrame>max;
		if (isNaN_(mn.tooltipXCoord)) {
			this.tooltipXCoord = mx.tooltipXCoord;
		} else {
			this.tooltipXCoord = mn.tooltipXCoord + (mx.tooltipXCoord - mn.tooltipXCoord) * p;
		}
		if (isNaN_(mn.tooltipYCoord)) {
			this.tooltipYCoord = mx.tooltipYCoord;
		} else {
			this.tooltipYCoord = mn.tooltipYCoord + (mx.tooltipYCoord - mn.tooltipYCoord) * p;
		}
		if (isNaN_(mn.pointerPositionXCoord)) {
			this.pointerPositionXCoord = mx.pointerPositionXCoord;
		} else {
			this.pointerPositionXCoord = mn.pointerPositionXCoord + (mx.pointerPositionXCoord - mn.pointerPositionXCoord) * p;
		}
		if (isNaN_(mn.pointerPositionYCoord)) {
			this.pointerPositionYCoord = mx.pointerPositionYCoord;
		} else {
			this.pointerPositionYCoord = mn.pointerPositionYCoord + (mx.pointerPositionYCoord - mn.pointerPositionYCoord) * p;
		}
		if (isNaN_(mn.tooltipWidth)) {
			this.tooltipWidth = mx.tooltipWidth;
		} else {
			this.tooltipWidth = mn.tooltipWidth + (mx.tooltipWidth - mn.tooltipWidth) * p;
		}
		if (isNaN_(mn.tooltipHeight)) {
			this.tooltipHeight = mx.tooltipXCoord;
		} else {
			this.tooltipHeight = mn.tooltipHeight + (mx.tooltipHeight - mn.tooltipHeight) * p;
		}
	}
}


