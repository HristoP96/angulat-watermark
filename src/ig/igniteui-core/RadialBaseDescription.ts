/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class RadialBaseDescription extends MarkerSeriesDescription {
	static $t: Type = markType(RadialBaseDescription, 'RadialBaseDescription', (<any>MarkerSeriesDescription).$type);
	protected get_type(): string {
		return "RadialBase";
	}
	constructor() {
		super();
	}
	private _angleAxisRef: string = null;
	get angleAxisRef(): string {
		return this._angleAxisRef;
	}
	set angleAxisRef(value: string) {
		this._angleAxisRef = value;
		this.markDirty("AngleAxisRef");
	}
	private _valueAxisRef: string = null;
	get valueAxisRef(): string {
		return this._valueAxisRef;
	}
	set valueAxisRef(value: string) {
		this._valueAxisRef = value;
		this.markDirty("ValueAxisRef");
	}
	private _clipSeriesToBounds: boolean = false;
	get clipSeriesToBounds(): boolean {
		return this._clipSeriesToBounds;
	}
	set clipSeriesToBounds(value: boolean) {
		this._clipSeriesToBounds = value;
		this.markDirty("ClipSeriesToBounds");
	}
}


