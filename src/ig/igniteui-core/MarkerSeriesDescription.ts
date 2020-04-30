/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesDescription } from "./SeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class MarkerSeriesDescription extends SeriesDescription {
	static $t: Type = markType(MarkerSeriesDescription, 'MarkerSeriesDescription', (<any>SeriesDescription).$type);
	protected get_type(): string {
		return "MarkerSeries";
	}
	constructor() {
		super();
	}
	private _markerType: string = null;
	get markerType(): string {
		return this._markerType;
	}
	set markerType(value: string) {
		this._markerType = value;
		this.markDirty("MarkerType");
	}
	private _markerTemplateRef: string = null;
	get markerTemplateRef(): string {
		return this._markerTemplateRef;
	}
	set markerTemplateRef(value: string) {
		this._markerTemplateRef = value;
		this.markDirty("MarkerTemplateRef");
	}
	private _actualMarkerTemplateRef: string = null;
	get actualMarkerTemplateRef(): string {
		return this._actualMarkerTemplateRef;
	}
	set actualMarkerTemplateRef(value: string) {
		this._actualMarkerTemplateRef = value;
		this.markDirty("ActualMarkerTemplateRef");
	}
	private _markerBrush: string = null;
	get markerBrush(): string {
		return this._markerBrush;
	}
	set markerBrush(value: string) {
		this._markerBrush = value;
		this.markDirty("MarkerBrush");
	}
	private _actualMarkerBrush: string = null;
	get actualMarkerBrush(): string {
		return this._actualMarkerBrush;
	}
	set actualMarkerBrush(value: string) {
		this._actualMarkerBrush = value;
		this.markDirty("ActualMarkerBrush");
	}
	private _markerOutline: string = null;
	get markerOutline(): string {
		return this._markerOutline;
	}
	set markerOutline(value: string) {
		this._markerOutline = value;
		this.markDirty("MarkerOutline");
	}
	private _actualMarkerOutline: string = null;
	get actualMarkerOutline(): string {
		return this._actualMarkerOutline;
	}
	set actualMarkerOutline(value: string) {
		this._actualMarkerOutline = value;
		this.markDirty("ActualMarkerOutline");
	}
}


