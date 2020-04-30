/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { HighlightingInfoDescription } from "./HighlightingInfoDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class AssigningCategoryStyleEventArgsBaseDescription extends Description {
	static $t: Type = markType(AssigningCategoryStyleEventArgsBaseDescription, 'AssigningCategoryStyleEventArgsBaseDescription', (<any>Description).$type);
	protected get_type(): string {
		return "AssigningCategoryStyleEventArgsBase";
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
	private _startDate: Date = new Date();
	get startDate(): Date {
		return this._startDate;
	}
	set startDate(value: Date) {
		this._startDate = value;
		this.markDirty("StartDate");
	}
	private _endDate: Date = new Date();
	get endDate(): Date {
		return this._endDate;
	}
	set endDate(value: Date) {
		this._endDate = value;
		this.markDirty("EndDate");
	}
	private _getItemsRef: string = null;
	get getItemsRef(): string {
		return this._getItemsRef;
	}
	set getItemsRef(value: string) {
		this._getItemsRef = value;
		this.markDirty("GetItemsRef");
	}
	private _fill: string = null;
	get fill(): string {
		return this._fill;
	}
	set fill(value: string) {
		this._fill = value;
		this.markDirty("Fill");
	}
	private _stroke: string = null;
	get stroke(): string {
		return this._stroke;
	}
	set stroke(value: string) {
		this._stroke = value;
		this.markDirty("Stroke");
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
		this.markDirty("Opacity");
	}
	private _highlightingInfo: HighlightingInfoDescription = null;
	get highlightingInfo(): HighlightingInfoDescription {
		return this._highlightingInfo;
	}
	set highlightingInfo(value: HighlightingInfoDescription) {
		this._highlightingInfo = value;
		this.markDirty("HighlightingInfo");
	}
	private _maxAllSeriesHighlightingProgress: number = 0;
	get maxAllSeriesHighlightingProgress(): number {
		return this._maxAllSeriesHighlightingProgress;
	}
	set maxAllSeriesHighlightingProgress(value: number) {
		this._maxAllSeriesHighlightingProgress = value;
		this.markDirty("MaxAllSeriesHighlightingProgress");
	}
	private _sumAllSeriesHighlightingProgress: number = 0;
	get sumAllSeriesHighlightingProgress(): number {
		return this._sumAllSeriesHighlightingProgress;
	}
	set sumAllSeriesHighlightingProgress(value: number) {
		this._sumAllSeriesHighlightingProgress = value;
		this.markDirty("SumAllSeriesHighlightingProgress");
	}
	private _highlightingHandled: boolean = false;
	get highlightingHandled(): boolean {
		return this._highlightingHandled;
	}
	set highlightingHandled(value: boolean) {
		this._highlightingHandled = value;
		this.markDirty("HighlightingHandled");
	}
	private _hasDateRange: boolean = false;
	get hasDateRange(): boolean {
		return this._hasDateRange;
	}
	set hasDateRange(value: boolean) {
		this._hasDateRange = value;
		this.markDirty("HasDateRange");
	}
	private _isNegativeShape: boolean = false;
	get isNegativeShape(): boolean {
		return this._isNegativeShape;
	}
	set isNegativeShape(value: boolean) {
		this._isNegativeShape = value;
		this.markDirty("IsNegativeShape");
	}
	private _isThumbnail: boolean = false;
	get isThumbnail(): boolean {
		return this._isThumbnail;
	}
	set isThumbnail(value: boolean) {
		this._isThumbnail = value;
		this.markDirty("IsThumbnail");
	}
}


