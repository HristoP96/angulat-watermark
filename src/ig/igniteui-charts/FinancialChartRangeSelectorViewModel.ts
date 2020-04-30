/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FinancialChartRangeSelectorOptionCollection } from "./FinancialChartRangeSelectorOptionCollection";
import { List$1 } from "igniteui-core/List$1";
import { FinancialChartRangeSelectorOption } from "./FinancialChartRangeSelectorOption";
import { dateMaxValue, dateMinValue, dateAddYears, dateFromValues, dateAddMonths, dateFromTicks } from "igniteui-core/date";

/**
 * @hidden 
 */
export class FinancialChartRangeSelectorViewModel extends Base {
	static $t: Type = markType(FinancialChartRangeSelectorViewModel, 'FinancialChartRangeSelectorViewModel');
	private _notifyChanged: () => void = null;
	get notifyChanged(): () => void {
		return this._notifyChanged;
	}
	set notifyChanged(value: () => void) {
		this._notifyChanged = value;
	}
	private _options: FinancialChartRangeSelectorOptionCollection = null;
	get options(): FinancialChartRangeSelectorOptionCollection {
		return this._options;
	}
	set options(value: FinancialChartRangeSelectorOptionCollection) {
		this._options = value;
	}
	private _selectionStart: Date = dateMaxValue();
	get selectionStart(): Date {
		return this._selectionStart;
	}
	set selectionStart(value: Date) {
		this._selectionStart = value;
	}
	private _selectionEnd: Date = dateMinValue();
	get selectionEnd(): Date {
		return this._selectionEnd;
	}
	set selectionEnd(value: Date) {
		this._selectionEnd = value;
	}
	private _oneMonthChecked: boolean = false;
	get oneMonthChecked(): boolean {
		return this._oneMonthChecked;
	}
	set oneMonthChecked(value: boolean) {
		this._oneMonthChecked = value;
	}
	private _threeMonthsChecked: boolean = false;
	get threeMonthsChecked(): boolean {
		return this._threeMonthsChecked;
	}
	set threeMonthsChecked(value: boolean) {
		this._threeMonthsChecked = value;
	}
	private _sixMonthsChecked: boolean = false;
	get sixMonthsChecked(): boolean {
		return this._sixMonthsChecked;
	}
	set sixMonthsChecked(value: boolean) {
		this._sixMonthsChecked = value;
	}
	private _yearToDateChecked: boolean = false;
	get yearToDateChecked(): boolean {
		return this._yearToDateChecked;
	}
	set yearToDateChecked(value: boolean) {
		this._yearToDateChecked = value;
	}
	private _oneYearChecked: boolean = false;
	get oneYearChecked(): boolean {
		return this._oneYearChecked;
	}
	set oneYearChecked(value: boolean) {
		this._oneYearChecked = value;
	}
	private _allChecked: boolean = false;
	get allChecked(): boolean {
		return this._allChecked;
	}
	set allChecked(value: boolean) {
		this._allChecked = value;
	}
	private _oneMonthVisible: boolean = false;
	get oneMonthVisible(): boolean {
		return this._oneMonthVisible;
	}
	set oneMonthVisible(value: boolean) {
		this._oneMonthVisible = value;
	}
	private _threeMonthsVisible: boolean = false;
	get threeMonthsVisible(): boolean {
		return this._threeMonthsVisible;
	}
	set threeMonthsVisible(value: boolean) {
		this._threeMonthsVisible = value;
	}
	private _sixMonthsVisible: boolean = false;
	get sixMonthsVisible(): boolean {
		return this._sixMonthsVisible;
	}
	set sixMonthsVisible(value: boolean) {
		this._sixMonthsVisible = value;
	}
	private _yearToDateVisible: boolean = false;
	get yearToDateVisible(): boolean {
		return this._yearToDateVisible;
	}
	set yearToDateVisible(value: boolean) {
		this._yearToDateVisible = value;
	}
	private _oneYearVisible: boolean = false;
	get oneYearVisible(): boolean {
		return this._oneYearVisible;
	}
	set oneYearVisible(value: boolean) {
		this._oneYearVisible = value;
	}
	private _allVisible: boolean = false;
	get allVisible(): boolean {
		return this._allVisible;
	}
	set allVisible(value: boolean) {
		this._allVisible = value;
	}
	updateVisibleOptions(): void {
		if (this.options == null) {
			return;
		}
		this.oneMonthVisible = this.options.contains(FinancialChartRangeSelectorOption.OneMonth);
		this.threeMonthsVisible = this.options.contains(FinancialChartRangeSelectorOption.ThreeMonths);
		this.sixMonthsVisible = this.options.contains(FinancialChartRangeSelectorOption.SixMonths);
		this.yearToDateVisible = this.options.contains(FinancialChartRangeSelectorOption.YearToDate);
		this.oneYearVisible = this.options.contains(FinancialChartRangeSelectorOption.OneYear);
		this.allVisible = this.options.contains(FinancialChartRangeSelectorOption.All);
	}
	private _rangeStart: Date = dateMinValue();
	get rangeStart(): Date {
		return this._rangeStart;
	}
	set rangeStart(value: Date) {
		this._rangeStart = value;
	}
	private _rangeEnd: Date = dateMaxValue();
	get rangeEnd(): Date {
		return this._rangeEnd;
	}
	set rangeEnd(value: Date) {
		this._rangeEnd = value;
	}
	onPropertiesChanged(): boolean {
		let dirty: boolean = false;
		let isSelectionAtEnd: boolean = +(this.selectionEnd) == +(this.rangeEnd);
		if (this.allChecked != ((+(this.selectionStart) == +(this.rangeStart)) && isSelectionAtEnd)) {
			this.allChecked = (+(this.selectionStart) == +(this.rangeStart)) && isSelectionAtEnd;
			dirty = true;
		}
		if (this.oneYearChecked != ((+(this.selectionStart) == +(this.oneYearFromEnd)) && isSelectionAtEnd)) {
			this.oneYearChecked = (+(this.selectionStart) == +(this.oneYearFromEnd)) && isSelectionAtEnd;
			dirty = true;
		}
		if (this.yearToDateChecked != ((+(this.selectionStart) == +(this.firstDayOfEndYear)) && isSelectionAtEnd)) {
			this.yearToDateChecked = (+(this.selectionStart) == +(this.firstDayOfEndYear)) && isSelectionAtEnd;
			dirty = true;
		}
		if (this.sixMonthsChecked != ((+(this.selectionStart) == +(this.sixMonthsFromEnd)) && isSelectionAtEnd)) {
			this.sixMonthsChecked = (+(this.selectionStart) == +(this.sixMonthsFromEnd)) && isSelectionAtEnd;
			dirty = true;
		}
		if (this.threeMonthsChecked != ((+(this.selectionStart) == +(this.threeMonthsFromEnd)) && isSelectionAtEnd)) {
			this.threeMonthsChecked = (+(this.selectionStart) == +(this.threeMonthsFromEnd)) && isSelectionAtEnd;
			dirty = true;
		}
		if (this.oneMonthChecked != ((+(this.selectionStart) == +(this.oneMonthFromEnd)) && isSelectionAtEnd)) {
			this.oneMonthChecked = (+(this.selectionStart) == +(this.oneMonthFromEnd)) && isSelectionAtEnd;
			dirty = true;
		}
		if (dirty) {
			if (this.notifyChanged != null) {
				this.notifyChanged();
			}
		}
		return dirty;
	}
	get oneYearFromEnd(): Date {
		return dateAddYears(this.rangeEnd, -1);
	}
	get firstDayOfEndYear(): Date {
		return dateFromValues(this.rangeEnd.getFullYear(), 1, 1, 0, 0, 0, 0);
	}
	get sixMonthsFromEnd(): Date {
		return dateAddMonths(this.rangeEnd, -6);
	}
	get threeMonthsFromEnd(): Date {
		return dateAddMonths(this.rangeEnd, -3);
	}
	get oneMonthFromEnd(): Date {
		return dateAddMonths(this.rangeEnd, -1);
	}
	changeSelection(value: string): void {
		this.allChecked = false;
		this.oneMonthChecked = false;
		this.threeMonthsChecked = false;
		this.sixMonthsChecked = false;
		this.yearToDateChecked = false;
		this.oneYearChecked = false;
		if (value == "1m") {
			this.oneMonthChecked = true;
		} else if (value == "3m") {
			this.threeMonthsChecked = true;
		} else if (value == "6m") {
			this.sixMonthsChecked = true;
		} else if (value == "YTD") {
			this.yearToDateChecked = true;
		} else if (value == "1y") {
			this.oneYearChecked = true;
		} else if (value == "all") {
			this.allChecked = true;
		}
		this.onRadioButtonChanged();
	}
	onRadioButtonChanged(): void {
		let oldStart: Date = dateFromTicks(this.selectionStart.getTime());
		let oldEnd: Date = dateFromTicks(this.selectionEnd.getTime());
		this.selectionEnd = this.rangeEnd;
		if (this.oneMonthChecked) {
			this.selectionStart = this.oneMonthFromEnd;
		}
		if (this.threeMonthsChecked) {
			this.selectionStart = this.threeMonthsFromEnd;
		}
		if (this.sixMonthsChecked) {
			this.selectionStart = this.sixMonthsFromEnd;
		}
		if (this.yearToDateChecked) {
			this.selectionStart = this.firstDayOfEndYear;
		}
		if (this.oneYearChecked) {
			this.selectionStart = this.oneYearFromEnd;
		}
		if (this.allChecked) {
			this.selectionStart = this.rangeStart;
		}
		if (+(this.selectionStart) != +oldStart || +(this.selectionEnd) != +oldEnd) {
			this.onRangeChanged();
			if (this.notifyChanged != null) {
				this.notifyChanged();
			}
		}
	}
	private _onRangeChanged: () => void = null;
	get onRangeChanged(): () => void {
		return this._onRangeChanged;
	}
	set onRangeChanged(value: () => void) {
		this._onRangeChanged = value;
	}
}


