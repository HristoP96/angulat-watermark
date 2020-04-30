/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FrameworkElement } from "./FrameworkElement";
import { Brush } from "./Brush";
import { DoubleCollection } from "./DoubleCollection";
import { PenLineJoin } from "./PenLineJoin";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Shape extends FrameworkElement {
	static $t: Type = markType(Shape, 'Shape', (<any>FrameworkElement).$type);
	constructor() {
		super();
	}
	_fill: Brush = null;
	get fill(): Brush {
		return this._fill;
	}
	set fill(value: Brush) {
		this._fill = value;
	}
	_stroke: Brush = null;
	get stroke(): Brush {
		return this._stroke;
	}
	set stroke(value: Brush) {
		this._stroke = value;
	}
	private _isHitTestVisible: boolean = false;
	get isHitTestVisible(): boolean {
		return this._isHitTestVisible;
	}
	set isHitTestVisible(value: boolean) {
		this._isHitTestVisible = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	private _strokeDashArray: DoubleCollection = null;
	get strokeDashArray(): DoubleCollection {
		return this._strokeDashArray;
	}
	set strokeDashArray(value: DoubleCollection) {
		this._strokeDashArray = value;
	}
	private _strokeDashCap: number = 0;
	get strokeDashCap(): number {
		return this._strokeDashCap;
	}
	set strokeDashCap(value: number) {
		this._strokeDashCap = value;
	}
	private _strokeLineJoin: PenLineJoin = <PenLineJoin>0;
	get strokeLineJoin(): PenLineJoin {
		return this._strokeLineJoin;
	}
	set strokeLineJoin(value: PenLineJoin) {
		this._strokeLineJoin = value;
	}
}


