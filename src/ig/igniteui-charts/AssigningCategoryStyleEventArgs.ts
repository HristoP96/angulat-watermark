/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AssigningCategoryStyleEventArgsBase } from "./AssigningCategoryStyleEventArgsBase";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { PenLineCap } from "igniteui-core/PenLineCap";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AssigningCategoryStyleEventArgs extends AssigningCategoryStyleEventArgsBase {
	static $t: Type = markType(AssigningCategoryStyleEventArgs, 'AssigningCategoryStyleEventArgs', (<any>AssigningCategoryStyleEventArgsBase).$type);
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
	private _strokeDashCap: PenLineCap = <PenLineCap>0;
	get strokeDashCap(): PenLineCap {
		return this._strokeDashCap;
	}
	set strokeDashCap(value: PenLineCap) {
		this._strokeDashCap = value;
	}
	private _radiusX: number = 0;
	get radiusX(): number {
		return this._radiusX;
	}
	set radiusX(value: number) {
		this._radiusX = value;
	}
	private _radiusY: number = 0;
	get radiusY(): number {
		return this._radiusY;
	}
	set radiusY(value: number) {
		this._radiusY = value;
	}
}


