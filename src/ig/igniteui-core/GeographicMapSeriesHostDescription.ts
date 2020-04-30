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
export abstract class GeographicMapSeriesHostDescription extends SeriesDescription {
	static $t: Type = markType(GeographicMapSeriesHostDescription, 'GeographicMapSeriesHostDescription', (<any>SeriesDescription).$type);
	protected get_type(): string {
		return "GeographicMapSeriesHost";
	}
	constructor() {
		super();
	}
	private _visibleFromScale: number = 0;
	get visibleFromScale(): number {
		return this._visibleFromScale;
	}
	set visibleFromScale(value: number) {
		this._visibleFromScale = value;
		this.markDirty("VisibleFromScale");
	}
	private _coercionMethodsRef1: string = null;
	get coercionMethodsRef(): string {
		return this._coercionMethodsRef1;
	}
	set coercionMethodsRef(value: string) {
		this._coercionMethodsRef1 = value;
		this.markDirty("CoercionMethodsRef");
	}
}


