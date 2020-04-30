/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class LegendBaseDescription extends Description {
	static $t: Type = markType(LegendBaseDescription, 'LegendBaseDescription', (<any>Description).$type);
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
	}
	protected get_type(): string {
		return "LegendBase";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _legendItemMouseLeftButtonDown: string = null;
	get legendItemMouseLeftButtonDownRef(): string {
		return this._legendItemMouseLeftButtonDown;
	}
	set legendItemMouseLeftButtonDownRef(value: string) {
		this._legendItemMouseLeftButtonDown = value;
		this.markDirty("LegendItemMouseLeftButtonDownRef");
	}
	private _legendItemMouseLeftButtonUp: string = null;
	get legendItemMouseLeftButtonUpRef(): string {
		return this._legendItemMouseLeftButtonUp;
	}
	set legendItemMouseLeftButtonUpRef(value: string) {
		this._legendItemMouseLeftButtonUp = value;
		this.markDirty("LegendItemMouseLeftButtonUpRef");
	}
	private _legendItemMouseEnter: string = null;
	get legendItemMouseEnterRef(): string {
		return this._legendItemMouseEnter;
	}
	set legendItemMouseEnterRef(value: string) {
		this._legendItemMouseEnter = value;
		this.markDirty("LegendItemMouseEnterRef");
	}
	private _legendItemMouseLeave: string = null;
	get legendItemMouseLeaveRef(): string {
		return this._legendItemMouseLeave;
	}
	set legendItemMouseLeaveRef(value: string) {
		this._legendItemMouseLeave = value;
		this.markDirty("LegendItemMouseLeaveRef");
	}
	private _legendItemMouseMove: string = null;
	get legendItemMouseMoveRef(): string {
		return this._legendItemMouseMove;
	}
	set legendItemMouseMoveRef(value: string) {
		this._legendItemMouseMove = value;
		this.markDirty("LegendItemMouseMoveRef");
	}
}


