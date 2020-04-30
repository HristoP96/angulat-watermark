/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ICollection$1, ICollection$1_$type, String_$type, Type, markType } from "./type";
import { ISummaryResult, ISummaryResult_$type } from "./ISummaryResult";
import { SummaryGroup } from "./SummaryGroup";
import { DataSourceSectionHeaderDisplayMode } from "./DataSourceSectionHeaderDisplayMode";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceRowType } from "./DataSourceRowType";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";

/**
 * @hidden 
 */
export class SectionData extends Base {
	static $t: Type = markType(SectionData, 'SectionData');
	private _isRemoved: boolean = false;
	get isRemoved(): boolean {
		return this._isRemoved;
	}
	set isRemoved(value: boolean) {
		this._isRemoved = value;
	}
	private _sectionIndex: number = 0;
	get sectionIndex(): number {
		return this._sectionIndex;
	}
	set sectionIndex(value: number) {
		this._sectionIndex = value;
	}
	private _sectionStartIndex: number = 0;
	get sectionStartIndex(): number {
		return this._sectionStartIndex;
	}
	set sectionStartIndex(value: number) {
		this._sectionStartIndex = value;
	}
	private _sectionEndIndex: number = 0;
	get sectionEndIndex(): number {
		return this._sectionEndIndex;
	}
	set sectionEndIndex(value: number) {
		this._sectionEndIndex = value;
	}
	private _sectionKeyNames: string[] = null;
	get sectionKeyNames(): string[] {
		return this._sectionKeyNames;
	}
	set sectionKeyNames(value: string[]) {
		this._sectionKeyNames = value;
	}
	private _sectionKeyValues: any[] = null;
	get sectionKeyValues(): any[] {
		return this._sectionKeyValues;
	}
	set sectionKeyValues(value: any[]) {
		this._sectionKeyValues = value;
	}
	private _summaryResults: ISummaryResult[] = null;
	get summaryResults(): ISummaryResult[] {
		return this._summaryResults;
	}
	set summaryResults(value: ISummaryResult[]) {
		this._summaryResults = value;
	}
	private _summaryResults2: ISummaryResult[][] = null;
	get summaryResults2(): ISummaryResult[][] {
		return this._summaryResults2;
	}
	set summaryResults2(value: ISummaryResult[][]) {
		this._summaryResults2 = value;
	}
	private _summaryLocations: number[] = null;
	get summaryLocations(): number[] {
		return this._summaryLocations;
	}
	set summaryLocations(value: number[]) {
		this._summaryLocations = value;
	}
	private _summaryGroups: SummaryGroup[] = null;
	get summaryGroups(): SummaryGroup[] {
		return this._summaryGroups;
	}
	set summaryGroups(value: SummaryGroup[]) {
		this._summaryGroups = value;
	}
	private _pinnedCount: number = 0;
	get pinnedCount(): number {
		return this._pinnedCount;
	}
	set pinnedCount(value: number) {
		this._pinnedCount = value;
	}
	private _summaryTopCount: number = 0;
	get summaryTopCount(): number {
		return this._summaryTopCount;
	}
	set summaryTopCount(value: number) {
		this._summaryTopCount = value;
	}
	private _summaryBottomCount: number = 0;
	get summaryBottomCount(): number {
		return this._summaryBottomCount;
	}
	set summaryBottomCount(value: number) {
		this._summaryBottomCount = value;
	}
	private _firstRowDisplacement: number = 0;
	get firstRowDisplacement(): number {
		return this._firstRowDisplacement;
	}
	set firstRowDisplacement(value: number) {
		this._firstRowDisplacement = value;
	}
	private _rowCount: number[] = null;
	get rowCount(): number[] {
		return this._rowCount;
	}
	set rowCount(value: number[]) {
		this._rowCount = value;
	}
	private _footerCount: number = 0;
	get footerCount(): number {
		return this._footerCount;
	}
	set footerCount(value: number) {
		this._footerCount = value;
	}
	private _headerOffsets: number[] = null;
	get headerOffsets(): number[] {
		return this._headerOffsets;
	}
	set headerOffsets(value: number[]) {
		this._headerOffsets = value;
	}
	private _parentSection: number = -1;
	get parentSection(): number {
		return this._parentSection;
	}
	set parentSection(value: number) {
		this._parentSection = value;
	}
	get realSectionStartIndex(): number {
		return this.sectionStartIndex + this.headerStates.length - this.firstRowDisplacement;
	}
	get realSectionEndIndex(): number {
		return this.realSectionStartIndex + this.rowCount[this.getLevel()] - 1;
	}
	private _headerStates: boolean[] = null;
	get headerStates(): boolean[] {
		return this._headerStates;
	}
	set headerStates(value: boolean[]) {
		this._headerStates = value;
	}
	private _headerExpansionKeys: string[] = null;
	get headerExpansionKeys(): string[] {
		return this._headerExpansionKeys;
	}
	set headerExpansionKeys(value: string[]) {
		this._headerExpansionKeys = value;
	}
	get isSectionContentVisible(): boolean {
		if (!this.isSectionVisible) {
			return false;
		}
		for (let i = 0; i < this.headerStates.length; i++) {
			if (!this.headerStates[i]) {
				return false;
			}
		}
		return true;
	}
	private _isSectionVisible: boolean = true;
	get isSectionVisible(): boolean {
		return this._isSectionVisible;
	}
	set isSectionVisible(value: boolean) {
		this._isSectionVisible = value;
	}
	private _syncSection: SectionData = null;
	get syncSection(): SectionData {
		return this._syncSection;
	}
	set syncSection(value: SectionData) {
		this._syncSection = value;
	}
	initializeExpandedStates(sectionHeaderDisplayMode: DataSourceSectionHeaderDisplayMode, defaultState: boolean): void {
		this.initializeExpandedStates1(sectionHeaderDisplayMode, defaultState, this.sectionKeyNames.length);
	}
	initializeExpandedStates1(sectionHeaderDisplayMode: DataSourceSectionHeaderDisplayMode, defaultState: boolean, numHeaders: number): void {
		switch (sectionHeaderDisplayMode) {
			case DataSourceSectionHeaderDisplayMode.Combined:
			this.headerStates = <boolean[]>new Array(1);
			this.headerExpansionKeys = <string[]>new Array(1);
			break;

			case DataSourceSectionHeaderDisplayMode.Split:
			this.headerStates = <boolean[]>new Array(numHeaders);
			this.headerExpansionKeys = <string[]>new Array(numHeaders);
			break;

		}

		for (let i = 0; i < this.headerStates.length; i++) {
			this.headerStates[i] = defaultState;
		}
	}
	static getSummaryRowsFromResults(summaryResults: ISummaryResult[]): List$1<Dictionary$2<string, ISummaryResult>> {
		let summaryTracker: List$1<Dictionary$2<string, ISummaryResult>> = new List$1<Dictionary$2<string, ISummaryResult>>((<any>Dictionary$2).$type.specialize(String_$type, ISummaryResult_$type), 0);
		if (summaryResults != null) {
			for (let i = 0; i < summaryResults.length; i++) {
				if (summaryResults[i] == null) {
					continue;
				}
				if (summaryTracker.count == 0) {
					summaryTracker.add(new Dictionary$2<string, ISummaryResult>(String_$type, ISummaryResult_$type, 0));
				}
				for (let j = 0; j < summaryTracker.count; j++) {
					if (!summaryTracker._inner[j].containsKey(summaryResults[i].propertyName)) {
						summaryTracker._inner[j].addItem(summaryResults[i].propertyName, summaryResults[i]);
						break;
					} else if (j == summaryTracker.count - 1) {
						summaryTracker.add(new Dictionary$2<string, ISummaryResult>(String_$type, ISummaryResult_$type, 0));
					}
				}
			}
		}
		return summaryTracker;
	}
	getRowType(rowIndex: number): DataSourceRowType {
		if (rowIndex >= this.sectionStartIndex && rowIndex < this.sectionStartIndex + this.headerStates.length) {
			return DataSourceRowType.SectionHeader;
		}
		if (rowIndex >= this.sectionStartIndex + this.headerStates.length && rowIndex < this.sectionStartIndex + this.headerStates.length + this.summaryTopCount) {
			return DataSourceRowType.SummaryRowSection;
		}
		if (rowIndex > this.sectionEndIndex - this.footerCount - this.summaryBottomCount && rowIndex <= this.sectionEndIndex - this.footerCount) {
			return DataSourceRowType.SummaryRowSection;
		}
		if (rowIndex > this.sectionEndIndex - this.footerCount && rowIndex <= this.sectionEndIndex) {
			return DataSourceRowType.SectionFooter;
		}
		return DataSourceRowType.Normal;
	}
	getSummaryRowIndex(rowIndex: number): number {
		let summaryRowIndex: number = -1;
		if (rowIndex >= this.sectionStartIndex + this.headerStates.length && rowIndex < this.sectionStartIndex + this.headerStates.length + this.summaryTopCount) {
			summaryRowIndex = rowIndex - (this.sectionStartIndex + this.headerStates.length);
		}
		if (rowIndex > this.sectionEndIndex - this.footerCount - this.summaryBottomCount && rowIndex <= this.sectionEndIndex - this.footerCount) {
			summaryRowIndex = rowIndex - (this.sectionEndIndex - this.footerCount - this.summaryBottomCount + 1);
		}
		return summaryRowIndex;
	}
	getHeaderCount(): number {
		let count: number = 0;
		if (this.headerExpansionKeys != null) {
			for (let i = 0; i < this.headerExpansionKeys.length; i++) {
				if (this.headerExpansionKeys[i] != null) {
					count++;
				}
			}
		}
		return count;
	}
	getLevel(): number {
		if (this.headerExpansionKeys != null) {
			for (let i = 0; i < this.headerExpansionKeys.length; i++) {
				if (this.headerExpansionKeys[i] != null) {
					return i;
				}
			}
		}
		return 0;
	}
	hasRows(): boolean {
		return this.rowCount[this.rowCount.length - 1] > 0;
	}
	syncSummaryRows(notifier: (arg1: DataSourceSpecialRow) => void): void {
		for (let i = 0; i < this.summaryGroups.length; i++) {
			if (this.summaryGroups[i] == null) {
				continue;
			}
			let summaryResults = this.summaryResults2[i];
			let summaryRows = SectionData.getSummaryRowsFromResults(summaryResults);
			for (let j = 0; j < summaryRows.count; j++) {
				let results: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows._inner[j].count);
				summaryRows._inner[j].values.copyTo(results, 0);
				this.summaryGroups[i].summaries[j].summaryResults = results;
				if (notifier != null) {
					notifier(this.summaryGroups[i].summaries[j]);
				}
			}
		}
	}
	setSummaryRow(row: DataSourceSpecialRow, position: number): void {
		if (row == null || row.rowType != DataSourceRowType.SummaryRowSection) {
			return;
		}
		if (position < 0 && position >= this.summaryGroups[row.level - 1].summaries.length) {
			return;
		}
		this.summaryGroups[row.level - 1].summaries[position] = row;
	}
	hasSummaries(): boolean {
		for (let i = 0; i < this.summaryGroups.length; i++) {
			if (this.summaryGroups[i] != null) {
				for (let j = 0; j < this.summaryGroups[i].summaries.length; j++) {
					if (this.summaryGroups[i].summaries[j] != null) {
						return true;
					}
				}
			}
		}
		return false;
	}
	updateSummary(level: number, summaryIndex: number, result: ISummaryResult): void {
		result.summaryIndex = summaryIndex;
		this.summaryResults2[level][summaryIndex] = result;
		if (this.isRemoved && this.syncSection != null) {
			this.syncSection.summaryResults2[level][summaryIndex] = result;
		}
	}
	shiftSummaryLocationsFromLevel(level: number, amount: number): void {
		for (let j = level - 1; j >= 0; j--) {
			if (this.summaryLocations[j] != -1) {
				this.summaryLocations[j] += amount;
			}
		}
	}
}


