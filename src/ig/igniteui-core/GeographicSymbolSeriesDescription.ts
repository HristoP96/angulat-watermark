/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapSeriesHostDescription } from "./GeographicMapSeriesHostDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeographicSymbolSeriesDescription extends GeographicMapSeriesHostDescription {
	static $t: Type = markType(GeographicSymbolSeriesDescription, 'GeographicSymbolSeriesDescription', (<any>GeographicMapSeriesHostDescription).$type);
	protected get_type(): string {
		return "GeographicSymbolSeries";
	}
	constructor() {
		super();
	}
	private _latitudeMemberPath: string = null;
	get latitudeMemberPath(): string {
		return this._latitudeMemberPath;
	}
	set latitudeMemberPath(value: string) {
		this._latitudeMemberPath = value;
		this.markDirty("LatitudeMemberPath");
	}
	private _longitudeMemberPath: string = null;
	get longitudeMemberPath(): string {
		return this._longitudeMemberPath;
	}
	set longitudeMemberPath(value: string) {
		this._longitudeMemberPath = value;
		this.markDirty("LongitudeMemberPath");
	}
	private _markerType: string = null;
	get markerType(): string {
		return this._markerType;
	}
	set markerType(value: string) {
		this._markerType = value;
		this.markDirty("MarkerType");
	}
	private _markerCollisionAvoidance: string = null;
	get markerCollisionAvoidance(): string {
		return this._markerCollisionAvoidance;
	}
	set markerCollisionAvoidance(value: string) {
		this._markerCollisionAvoidance = value;
		this.markDirty("MarkerCollisionAvoidance");
	}
	private _markerTemplateRef: string = null;
	get markerTemplateRef(): string {
		return this._markerTemplateRef;
	}
	set markerTemplateRef(value: string) {
		this._markerTemplateRef = value;
		this.markDirty("MarkerTemplateRef");
	}
	private _markerBrush: string = null;
	get markerBrush(): string {
		return this._markerBrush;
	}
	set markerBrush(value: string) {
		this._markerBrush = value;
		this.markDirty("MarkerBrush");
	}
	private _markerOutline: string = null;
	get markerOutline(): string {
		return this._markerOutline;
	}
	set markerOutline(value: string) {
		this._markerOutline = value;
		this.markDirty("MarkerOutline");
	}
	private _maximumMarkers: number = 0;
	get maximumMarkers(): number {
		return this._maximumMarkers;
	}
	set maximumMarkers(value: number) {
		this._maximumMarkers = value;
		this.markDirty("MaximumMarkers");
	}
}


