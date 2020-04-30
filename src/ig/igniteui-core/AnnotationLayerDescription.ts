/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesDescription } from "./SeriesDescription";
import { Description } from "./Description";
import { PointDescription } from "./PointDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class AnnotationLayerDescription extends SeriesDescription {
	static $t: Type = markType(AnnotationLayerDescription, 'AnnotationLayerDescription', (<any>SeriesDescription).$type);
	protected get_type(): string {
		return "AnnotationLayer";
	}
	constructor() {
		super();
	}
	private _useIndex: boolean = false;
	get useIndex(): boolean {
		return this._useIndex;
	}
	set useIndex(value: boolean) {
		this._useIndex = value;
		this.markDirty("UseIndex");
	}
	private _useLegend: boolean = false;
	get useLegend(): boolean {
		return this._useLegend;
	}
	set useLegend(value: boolean) {
		this._useLegend = value;
		this.markDirty("UseLegend");
	}
	private _cursorPosition: PointDescription = null;
	get cursorPosition(): PointDescription {
		return this._cursorPosition;
	}
	set cursorPosition(value: PointDescription) {
		this._cursorPosition = value;
		this.markDirty("CursorPosition");
	}
	private _isDefaultCrosshairDisabled: boolean = false;
	get isDefaultCrosshairDisabled(): boolean {
		return this._isDefaultCrosshairDisabled;
	}
	set isDefaultCrosshairDisabled(value: boolean) {
		this._isDefaultCrosshairDisabled = value;
		this.markDirty("IsDefaultCrosshairDisabled");
	}
	private _shouldRenderAsOverlay: boolean = false;
	get shouldRenderAsOverlay(): boolean {
		return this._shouldRenderAsOverlay;
	}
	set shouldRenderAsOverlay(value: boolean) {
		this._shouldRenderAsOverlay = value;
		this.markDirty("ShouldRenderAsOverlay");
	}
}


