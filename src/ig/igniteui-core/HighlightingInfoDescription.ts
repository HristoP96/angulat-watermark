/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { SeriesDescription } from "./SeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class HighlightingInfoDescription extends Description {
	static $t: Type = markType(HighlightingInfoDescription, 'HighlightingInfoDescription', (<any>Description).$type);
	protected get_type(): string {
		return "HighlightingInfo";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _startIndex: number = 0;
	get startIndex(): number {
		return this._startIndex;
	}
	set startIndex(value: number) {
		this._startIndex = value;
		this.markDirty("StartIndex");
	}
	private _endIndex: number = 0;
	get endIndex(): number {
		return this._endIndex;
	}
	set endIndex(value: number) {
		this._endIndex = value;
		this.markDirty("EndIndex");
	}
	private _state: string = null;
	get state(): string {
		return this._state;
	}
	set state(value: string) {
		this._state = value;
		this.markDirty("State");
	}
	private _progress: number = 0;
	get progress(): number {
		return this._progress;
	}
	set progress(value: number) {
		this._progress = value;
		this.markDirty("Progress");
	}
	private _isMarker: boolean = false;
	get isMarker(): boolean {
		return this._isMarker;
	}
	set isMarker(value: boolean) {
		this._isMarker = value;
		this.markDirty("IsMarker");
	}
	private _series: SeriesDescription = null;
	get series(): SeriesDescription {
		return this._series;
	}
	set series(value: SeriesDescription) {
		this._series = value;
		this.markDirty("Series");
	}
}


