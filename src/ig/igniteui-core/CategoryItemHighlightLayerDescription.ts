/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CategoryItemHighlightLayerDescription extends AnnotationLayerDescription {
	static $t: Type = markType(CategoryItemHighlightLayerDescription, 'CategoryItemHighlightLayerDescription', (<any>AnnotationLayerDescription).$type);
	protected get_type(): string {
		return "CategoryItemHighlightLayer";
	}
	constructor() {
		super();
	}
	private _targetSeriesRef: string = null;
	get targetSeriesRef(): string {
		return this._targetSeriesRef;
	}
	set targetSeriesRef(value: string) {
		this._targetSeriesRef = value;
		this.markDirty("TargetSeriesRef");
	}
	private _useInterpolation: boolean = false;
	get useInterpolation(): boolean {
		return this._useInterpolation;
	}
	set useInterpolation(value: boolean) {
		this._useInterpolation = value;
		this.markDirty("UseInterpolation");
	}
	private _highlightType: string = null;
	get highlightType(): string {
		return this._highlightType;
	}
	set highlightType(value: string) {
		this._highlightType = value;
		this.markDirty("HighlightType");
	}
	private _markerTemplateRef: string = null;
	get markerTemplateRef(): string {
		return this._markerTemplateRef;
	}
	set markerTemplateRef(value: string) {
		this._markerTemplateRef = value;
		this.markDirty("MarkerTemplateRef");
	}
	private _bandHighlightWidth: number = 0;
	get bandHighlightWidth(): number {
		return this._bandHighlightWidth;
	}
	set bandHighlightWidth(value: number) {
		this._bandHighlightWidth = value;
		this.markDirty("BandHighlightWidth");
	}
	private _skipUnknownValues: boolean = false;
	get skipUnknownValues(): boolean {
		return this._skipUnknownValues;
	}
	set skipUnknownValues(value: boolean) {
		this._skipUnknownValues = value;
		this.markDirty("SkipUnknownValues");
	}
}


