/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { SizeDescription } from "./SizeDescription";
import { PointDescription } from "./PointDescription";
import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class RingDescription extends Description {
	static $t: Type = markType(RingDescription, 'RingDescription', (<any>Description).$type);
	protected get_type(): string {
		return "Ring";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
		this.markDirty("Index");
	}
	private _innerExtend: number = 0;
	get innerExtend(): number {
		return this._innerExtend;
	}
	set innerExtend(value: number) {
		this._innerExtend = value;
		this.markDirty("InnerExtend");
	}
	private _controlSize: SizeDescription = null;
	get controlSize(): SizeDescription {
		return this._controlSize;
	}
	set controlSize(value: SizeDescription) {
		this._controlSize = value;
		this.markDirty("ControlSize");
	}
	private _center: PointDescription = null;
	get center(): PointDescription {
		return this._center;
	}
	set center(value: PointDescription) {
		this._center = value;
		this.markDirty("Center");
	}
	private _ringSeries: RingSeriesBaseDescription = null;
	get ringSeries(): RingSeriesBaseDescription {
		return this._ringSeries;
	}
	set ringSeries(value: RingSeriesBaseDescription) {
		this._ringSeries = value;
		this.markDirty("RingSeries");
	}
	private _ringBreadth: number = 0;
	get ringBreadth(): number {
		return this._ringBreadth;
	}
	set ringBreadth(value: number) {
		this._ringBreadth = value;
		this.markDirty("RingBreadth");
	}
}


