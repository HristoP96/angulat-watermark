/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Thickness } from "igniteui-core/Thickness";

/**
 * @hidden 
 */
export class LabelPosition extends Base {
	static $t: Type = markType(LabelPosition, 'LabelPosition');
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	private _isOverlay: boolean = false;
	get isOverlay(): boolean {
		return this._isOverlay;
	}
	set isOverlay(value: boolean) {
		this._isOverlay = value;
	}
	private _overlayPadding: Thickness = null;
	get overlayPadding(): Thickness {
		return this._overlayPadding;
	}
	set overlayPadding(value: Thickness) {
		this._overlayPadding = value;
	}
	private _resetOverlayExtent: boolean = false;
	get resetOverlayExtent(): boolean {
		return this._resetOverlayExtent;
	}
	set resetOverlayExtent(value: boolean) {
		this._resetOverlayExtent = value;
	}
	constructor(value: number) {
		super();
		this.value = value;
	}
}


