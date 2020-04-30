/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TouchGestureEventArgs extends Base {
	static $t: Type = markType(TouchGestureEventArgs, 'TouchGestureEventArgs');
	private _scaleDeltaX: number = 0;
	get scaleDeltaX(): number {
		return this._scaleDeltaX;
	}
	set scaleDeltaX(value: number) {
		this._scaleDeltaX = value;
	}
	private _scaleDeltaY: number = 0;
	get scaleDeltaY(): number {
		return this._scaleDeltaY;
	}
	set scaleDeltaY(value: number) {
		this._scaleDeltaY = value;
	}
	private _isoScaleDelta: number = 0;
	get isoScaleDelta(): number {
		return this._isoScaleDelta;
	}
	set isoScaleDelta(value: number) {
		this._isoScaleDelta = value;
	}
	private _translationDeltaX: number = 0;
	get translationDeltaX(): number {
		return this._translationDeltaX;
	}
	set translationDeltaX(value: number) {
		this._translationDeltaX = value;
	}
	private _translationDeltaY: number = 0;
	get translationDeltaY(): number {
		return this._translationDeltaY;
	}
	set translationDeltaY(value: number) {
		this._translationDeltaY = value;
	}
	private _centroidX: number = 0;
	get centroidX(): number {
		return this._centroidX;
	}
	set centroidX(value: number) {
		this._centroidX = value;
	}
	private _centroidY: number = 0;
	get centroidY(): number {
		return this._centroidY;
	}
	set centroidY(value: number) {
		this._centroidY = value;
	}
	private _velocityX: number = 0;
	get velocityX(): number {
		return this._velocityX;
	}
	set velocityX(value: number) {
		this._velocityX = value;
	}
	private _velocityY: number = 0;
	get velocityY(): number {
		return this._velocityY;
	}
	set velocityY(value: number) {
		this._velocityY = value;
	}
}


