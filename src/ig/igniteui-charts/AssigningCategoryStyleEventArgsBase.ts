/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { HighlightingInfo } from "./HighlightingInfo";

/**
 * @hidden 
 */
export abstract class AssigningCategoryStyleEventArgsBase extends Base {
	static $t: Type = markType(AssigningCategoryStyleEventArgsBase, 'AssigningCategoryStyleEventArgsBase');
	private _startIndex: number = 0;
	get startIndex(): number {
		return this._startIndex;
	}
	set startIndex(value: number) {
		this._startIndex = value;
	}
	private _endIndex: number = 0;
	get endIndex(): number {
		return this._endIndex;
	}
	set endIndex(value: number) {
		this._endIndex = value;
	}
	private _startDate: Date = new Date();
	get startDate(): Date {
		return this._startDate;
	}
	set startDate(value: Date) {
		this._startDate = value;
	}
	private _endDate: Date = new Date();
	get endDate(): Date {
		return this._endDate;
	}
	set endDate(value: Date) {
		this._endDate = value;
	}
	private _getItems: (orderedStartIndex: number, orderedEndIndex: number) => any[] = null;
	get getItems(): (orderedStartIndex: number, orderedEndIndex: number) => any[] {
		return this._getItems;
	}
	set getItems(value: (orderedStartIndex: number, orderedEndIndex: number) => any[]) {
		this._getItems = value;
	}
	private _fill: Brush = null;
	get fill(): Brush {
		return this._fill;
	}
	set fill(value: Brush) {
		this._fill = value;
	}
	private _stroke: Brush = null;
	get stroke(): Brush {
		return this._stroke;
	}
	set stroke(value: Brush) {
		this._stroke = value;
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
	}
	private _highlightingInfo: HighlightingInfo = null;
	get highlightingInfo(): HighlightingInfo {
		return this._highlightingInfo;
	}
	set highlightingInfo(value: HighlightingInfo) {
		this._highlightingInfo = value;
	}
	private _maxAllSeriesHighlightingProgress: number = 0;
	get maxAllSeriesHighlightingProgress(): number {
		return this._maxAllSeriesHighlightingProgress;
	}
	set maxAllSeriesHighlightingProgress(value: number) {
		this._maxAllSeriesHighlightingProgress = value;
	}
	private _sumAllSeriesHighlightingProgress: number = 0;
	get sumAllSeriesHighlightingProgress(): number {
		return this._sumAllSeriesHighlightingProgress;
	}
	set sumAllSeriesHighlightingProgress(value: number) {
		this._sumAllSeriesHighlightingProgress = value;
	}
	private _highlightingHandled: boolean = false;
	get highlightingHandled(): boolean {
		return this._highlightingHandled;
	}
	set highlightingHandled(value: boolean) {
		this._highlightingHandled = value;
	}
	private _hasDateRange: boolean = false;
	get hasDateRange(): boolean {
		return this._hasDateRange;
	}
	set hasDateRange(value: boolean) {
		this._hasDateRange = value;
	}
	private _isNegativeShape: boolean = false;
	get isNegativeShape(): boolean {
		return this._isNegativeShape;
	}
	set isNegativeShape(value: boolean) {
		this._isNegativeShape = value;
	}
	private _isThumbnail: boolean = false;
	get isThumbnail(): boolean {
		return this._isThumbnail;
	}
	set isThumbnail(value: boolean) {
		this._isThumbnail = value;
	}
}


