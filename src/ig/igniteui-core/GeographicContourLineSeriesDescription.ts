/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicXYTriangulatingSeriesDescription } from "./GeographicXYTriangulatingSeriesDescription";
import { Description } from "./Description";
import { ValueBrushScaleDescription } from "./ValueBrushScaleDescription";
import { ContourValueResolverDescription } from "./ContourValueResolverDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeographicContourLineSeriesDescription extends GeographicXYTriangulatingSeriesDescription {
	static $t: Type = markType(GeographicContourLineSeriesDescription, 'GeographicContourLineSeriesDescription', (<any>GeographicXYTriangulatingSeriesDescription).$type);
	protected get_type(): string {
		return "GeographicContourLineSeries";
	}
	constructor() {
		super();
	}
	private _valueMemberPath: string = null;
	get valueMemberPath(): string {
		return this._valueMemberPath;
	}
	set valueMemberPath(value: string) {
		this._valueMemberPath = value;
		this.markDirty("ValueMemberPath");
	}
	private _fillScale: ValueBrushScaleDescription = null;
	get fillScale(): ValueBrushScaleDescription {
		return this._fillScale;
	}
	set fillScale(value: ValueBrushScaleDescription) {
		this._fillScale = value;
		this.markDirty("FillScale");
	}
	private _valueResolver: ContourValueResolverDescription = null;
	get valueResolver(): ContourValueResolverDescription {
		return this._valueResolver;
	}
	set valueResolver(value: ContourValueResolverDescription) {
		this._valueResolver = value;
		this.markDirty("ValueResolver");
	}
	private _triangulationStatusChanged: string = null;
	get triangulationStatusChangedRef(): string {
		return this._triangulationStatusChanged;
	}
	set triangulationStatusChangedRef(value: string) {
		this._triangulationStatusChanged = value;
		this.markDirty("TriangulationStatusChangedRef");
	}
}


