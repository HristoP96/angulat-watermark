/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { SectionData } from "./SectionData";
import { SectionDataStartIndexComparer } from "./SectionDataStartIndexComparer";
import { SectionDataUndisplacedStartIndexComparer } from "./SectionDataUndisplacedStartIndexComparer";
import { SectionSearchData } from "./SectionSearchData";
import { IComparer$1 } from "./IComparer$1";
import { IDataSource } from "./IDataSource";
import { DataSourceSectionHeaderDisplayMode } from "./DataSourceSectionHeaderDisplayMode";
import { ISummaryResult } from "./ISummaryResult";
import { SummaryDescriptionCollection } from "./SummaryDescriptionCollection";
import { SummaryDescription } from "./SummaryDescription";
import { SummaryGroup } from "./SummaryGroup";

/**
 * @hidden 
 */
export class SectionMap extends Base {
	static $t: Type = markType(SectionMap, 'SectionMap');
	constructor() {
		super();
	}
	private _searchTarget: SectionData = new SectionData();
	private _sectionComparer: SectionDataStartIndexComparer = new SectionDataStartIndexComparer();
	private _sectionUndisplacedComparer: SectionDataUndisplacedStartIndexComparer = new SectionDataUndisplacedStartIndexComparer();
	private _sectionInformation: List$1<SectionData> = new List$1<SectionData>((<any>SectionData).$type, 0);
	get sections(): List$1<SectionData> {
		return this._sectionInformation;
	}
	get fullCount(): number {
		return this._sectionInformation._inner[this._sectionInformation.count - 1].sectionEndIndex + 1;
	}
	get hasSections(): boolean {
		return this.sections.count > 0;
	}
	private checkIndex(searchIndex: number, testIndex: number, data: SectionSearchData): boolean {
		if (searchIndex >= 0 && searchIndex < this._sectionInformation.count) {
			let testSection = this._sectionInformation._inner[searchIndex];
			if (testIndex >= testSection.sectionStartIndex && testIndex <= testSection.sectionEndIndex) {
				data.lastFoundSectionBufferIndex++;
				if (data.lastFoundSectionBufferIndex >= data.lastFoundSection.length) {
					data.lastFoundSectionBufferIndex = 0;
				}
				data.lastFoundSectionIndex[data.lastFoundSectionBufferIndex] = searchIndex;
				data.lastFoundSection[data.lastFoundSectionBufferIndex] = testSection;
				return true;
			}
		}
		return false;
	}
	private checkRealIndex(searchIndex: number, testIndex: number, data: SectionSearchData): boolean {
		if (searchIndex >= 0 && searchIndex < this._sectionInformation.count) {
			let testSection = this._sectionInformation._inner[searchIndex];
			if (testIndex >= testSection.realSectionStartIndex && testIndex <= testSection.realSectionEndIndex) {
				data.lastFoundSectionBufferIndex++;
				if (data.lastFoundSectionBufferIndex >= data.lastFoundSection.length) {
					data.lastFoundSectionBufferIndex = 0;
				}
				data.lastFoundSectionIndex[data.lastFoundSectionBufferIndex] = searchIndex;
				data.lastFoundSection[data.lastFoundSectionBufferIndex] = testSection;
				return true;
			}
		}
		return false;
	}
	private _getSectionSearchData: SectionSearchData = new SectionSearchData();
	getSection(index: number): SectionData {
		return this.getSection1(index, this._sectionComparer, this._getSectionSearchData);
	}
	private getSection1(index: number, comparer: IComparer$1<SectionData>, data: SectionSearchData): SectionData {
		if (data.lastFoundSection == null) {
			data.lastFoundSection = <SectionData[]>new Array(5);
			data.lastFoundSectionIndex = <number[]>new Array(5);
			for (let i = 0; i < data.lastFoundSection.length; i++) {
				data.lastFoundSection[i] = null;
				data.lastFoundSectionIndex[i] = -1;
			}
		}
		if (data.lastFoundSection[data.lastFoundSectionBufferIndex] != null) {
			if (index >= data.lastFoundSection[data.lastFoundSectionBufferIndex].sectionStartIndex && index <= data.lastFoundSection[data.lastFoundSectionBufferIndex].sectionEndIndex) {
				return data.lastFoundSection[data.lastFoundSectionBufferIndex];
			}
			for (let i1 = 0; i1 < data.lastFoundSection.length; i1++) {
				if (data.lastFoundSection[i1] != null) {
					if (index >= data.lastFoundSection[i1].sectionStartIndex && index <= data.lastFoundSection[i1].sectionEndIndex) {
						data.lastFoundSectionBufferIndex = i1;
						return data.lastFoundSection[data.lastFoundSectionBufferIndex];
					}
				}
			}
			let searchIndex = data.lastFoundSectionIndex[data.lastFoundSectionBufferIndex] + 1;
			if (this.checkIndex(searchIndex, index, data)) {
				return data.lastFoundSection[data.lastFoundSectionBufferIndex];
			}
			searchIndex = data.lastFoundSectionIndex[data.lastFoundSectionBufferIndex] - 1;
			if (this.checkIndex(searchIndex, index, data)) {
				return data.lastFoundSection[data.lastFoundSectionBufferIndex];
			}
		}
		this._searchTarget.sectionStartIndex = index;
		let ind = this._sectionInformation.binarySearch1(this._searchTarget, comparer);
		if (ind < 0) {
			ind = ~ind;
			ind--;
		}
		if (this.checkIndex(ind, index, data)) {
			return data.lastFoundSection[data.lastFoundSectionBufferIndex];
		}
		if (this.checkIndex(ind + 1, index, data)) {
			return data.lastFoundSection[data.lastFoundSectionBufferIndex];
		}
		if (this.checkIndex(ind - 1, index, data)) {
			return data.lastFoundSection[data.lastFoundSectionBufferIndex];
		}
		return null;
	}
	private getSectionFromRealIndex1(index: number, comparer: IComparer$1<SectionData>, data: SectionSearchData): SectionData {
		if (data.lastFoundSection == null) {
			data.lastFoundSection = <SectionData[]>new Array(5);
			data.lastFoundSectionIndex = <number[]>new Array(5);
			for (let i = 0; i < data.lastFoundSection.length; i++) {
				data.lastFoundSection[i] = null;
				data.lastFoundSectionIndex[i] = -1;
			}
		}
		if (data.lastFoundSection[data.lastFoundSectionBufferIndex] != null) {
			let lastFoundSection = data.lastFoundSection[data.lastFoundSectionBufferIndex];
			if (index >= lastFoundSection.realSectionStartIndex && index <= lastFoundSection.realSectionEndIndex) {
				return lastFoundSection;
			}
			for (let i1 = 0; i1 < data.lastFoundSection.length; i1++) {
				if (data.lastFoundSection[i1] != null) {
					if (index >= data.lastFoundSection[i1].realSectionStartIndex && index <= data.lastFoundSection[i1].realSectionEndIndex) {
						data.lastFoundSectionBufferIndex = i1;
						return data.lastFoundSection[data.lastFoundSectionBufferIndex];
					}
				}
			}
			let searchIndex = data.lastFoundSectionIndex[data.lastFoundSectionBufferIndex] + 1;
			if (this.checkRealIndex(searchIndex, index, data)) {
				return data.lastFoundSection[data.lastFoundSectionBufferIndex];
			}
			searchIndex = data.lastFoundSectionIndex[data.lastFoundSectionBufferIndex] - 1;
			if (this.checkRealIndex(searchIndex, index, data)) {
				return data.lastFoundSection[data.lastFoundSectionBufferIndex];
			}
		}
		this._searchTarget.sectionStartIndex = index;
		let ind = this._sectionInformation.binarySearch1(this._searchTarget, comparer);
		if (ind < 0) {
			ind = ~ind;
			ind--;
		}
		if (this.checkRealIndex(ind, index, data)) {
			return data.lastFoundSection[data.lastFoundSectionBufferIndex];
		}
		if (this.checkRealIndex(ind + 1, index, data)) {
			return data.lastFoundSection[data.lastFoundSectionBufferIndex];
		}
		if (this.checkRealIndex(ind - 1, index, data)) {
			return data.lastFoundSection[data.lastFoundSectionBufferIndex];
		}
		return null;
	}
	clear(): void {
		this._sectionInformation.clear();
		this._getSectionSearchData.lastFoundSection = null;
		this._getSectionFromReadIndexSearchData.lastFoundSection = null;
	}
	offsetSucceedingSections(section: SectionData, offset: number, firstRowDisplacementOffset: number): void {
		for (let i = section.sectionIndex + 1; i < this._sectionInformation.count; i++) {
			let succeeding = this._sectionInformation._inner[i];
			succeeding.firstRowDisplacement += firstRowDisplacementOffset;
			succeeding.sectionStartIndex += offset;
			succeeding.sectionEndIndex += offset;
			for (let j = 0; j < succeeding.summaryLocations.length; j++) {
				if (succeeding.summaryLocations[j] != -1) {
					succeeding.summaryLocations[j] += offset;
				}
			}
		}
	}
	offsetSucceedingFromRemovedSection(section: SectionData, offset: number, firstRowDisplacementOffset: number): void {
		for (let i = section.sectionIndex; i < this._sectionInformation.count; i++) {
			let succeeding = this._sectionInformation._inner[i];
			succeeding.firstRowDisplacement += firstRowDisplacementOffset;
			succeeding.sectionStartIndex += offset;
			succeeding.sectionEndIndex += offset;
			succeeding.sectionIndex = i;
			for (let j = 0; j < succeeding.summaryLocations.length; j++) {
				if (succeeding.summaryLocations[j] != -1) {
					succeeding.summaryLocations[j] += offset;
				}
			}
		}
	}
	endSection(i: number): void {
		if (this._sectionInformation.count == 0) {
			return;
		}
		let section = this._sectionInformation._inner[this._sectionInformation.count - 1];
		section.sectionEndIndex = i;
	}
	startSection(i: number, dataSource: IDataSource, currRepresentative: any, groupNames: string[], groupingMode: DataSourceSectionHeaderDisplayMode, defaultExpansionState: boolean): SectionData {
		let section: SectionData = this.generateSection(dataSource, currRepresentative, groupNames, groupingMode, defaultExpansionState);
		section.sectionStartIndex = i;
		section.sectionIndex = this._sectionInformation.count;
		if (this._sectionInformation.count > 0) {
			section.firstRowDisplacement = this._sectionInformation._inner[this._sectionInformation.count - 1].firstRowDisplacement;
		}
		this._sectionInformation.add(section);
		return section;
	}
	generateSection(dataSource: IDataSource, currRepresentative: any, groupNames: string[], groupingMode: DataSourceSectionHeaderDisplayMode, defaultExpansionState: boolean): SectionData {
		let section: SectionData = new SectionData();
		section.sectionKeyNames = groupNames;
		section.rowCount = <number[]>new Array(groupNames.length);
		let values: any[] = <any[]>new Array(groupNames.length);
		for (let j = 0; j < values.length; j++) {
			section.rowCount[j] = 0;
			values[j] = dataSource.getItemProperty(currRepresentative, groupNames[j]);
		}
		section.sectionKeyValues = values;
		section.initializeExpandedStates(groupingMode, defaultExpansionState);
		let headerCount = groupingMode == DataSourceSectionHeaderDisplayMode.Split ? groupNames.length : 1;
		section.headerOffsets = <number[]>new Array(headerCount);
		section.summaryLocations = <number[]>new Array(headerCount);
		section.summaryResults2 = <ISummaryResult[][]>new Array(headerCount);
		for (let j1 = 0; j1 < headerCount; j1++) {
			section.summaryLocations[j1] = -1;
			section.summaryResults2[j1] = <ISummaryResult[]>new Array(dataSource.summaryDescriptions.all.count);
		}
		section.summaryGroups = <SummaryGroup[]>new Array(groupNames.length);
		return section;
	}
	offsetSucceedingSectionsFromNewSection(sectionData: SectionData, offset: number, firstRowDisplacementOffset: number): void {
		for (let i = sectionData.sectionIndex + 1; i < this._sectionInformation.count; i++) {
			this._sectionInformation._inner[i].sectionIndex = i;
			this._sectionInformation._inner[i].firstRowDisplacement += firstRowDisplacementOffset;
			this._sectionInformation._inner[i].sectionStartIndex += offset;
			this._sectionInformation._inner[i].sectionEndIndex += offset;
			for (let j = 0; j < this._sectionInformation._inner[i].summaryLocations.length; j++) {
				if (this._sectionInformation._inner[i].summaryLocations[j] != -1) {
					this._sectionInformation._inner[i].summaryLocations[j] += offset;
				}
			}
		}
	}
	insertSection(insertIndex: number, sectionData: SectionData): void {
		this._sectionInformation.insert(insertIndex, sectionData);
	}
	removeSection(sectionIndex: number): void {
		if (this._getSectionSearchData != null) {
			let searchData = this._getSectionSearchData;
			SectionMap.clearLastFoundSection(sectionIndex, searchData);
		}
		if (this._getSectionFromReadIndexSearchData != null) {
			let searchData1 = this._getSectionFromReadIndexSearchData;
			SectionMap.clearLastFoundSection(sectionIndex, searchData1);
		}
		this._sectionInformation._inner[sectionIndex].isRemoved = true;
		this._sectionInformation.removeAt(sectionIndex);
	}
	private static clearLastFoundSection(sectionIndex: number, searchData: SectionSearchData): void {
		if (searchData.lastFoundSection != null) {
			for (let i = 0; i < searchData.lastFoundSection.length; i++) {
				if (searchData.lastFoundSection[i] != null) {
					if (searchData.lastFoundSection[i].sectionIndex == sectionIndex) {
						searchData.lastFoundSection[i] = null;
					}
				}
			}
		}
	}
	getLastSection(): SectionData {
		return this._sectionInformation._inner[this._sectionInformation.count - 1];
	}
	getFirstSection(): SectionData {
		return this._sectionInformation._inner[0];
	}
	incrementFirstRowDisplacement(): void {
		this._sectionInformation._inner[this._sectionInformation.count - 1].firstRowDisplacement++;
	}
	private _getSectionFromReadIndexSearchData: SectionSearchData = new SectionSearchData();
	getSectionFromRealIndex(index: number): SectionData {
		return this.getSectionFromRealIndex1(index, this._sectionUndisplacedComparer, this._getSectionFromReadIndexSearchData);
	}
	hasChildren(section: SectionData): boolean {
		for (let i: number = 0; i < this.sections.count; i++) {
			if (i == section.sectionIndex) {
				continue;
			}
			if (this.sections._inner[i].parentSection == section.sectionIndex) {
				return true;
			}
		}
		return false;
	}
	incrementRowCount(section: SectionData, amount: number): void {
		if (section.sectionKeyNames == null) {
			section.rowCount[0] += amount;
			return;
		}
		if (section.parentSection == -1) {
			for (let level = 0; level < section.sectionKeyNames.length; level++) {
				section.rowCount[level] += amount;
			}
		} else {
			let sectionLevel = section.getLevel();
			for (let level1 = section.getLevel(); level1 < section.sectionKeyNames.length; level1++) {
				section.rowCount[level1] += amount;
			}
			let parentSectionIdx = section.parentSection;
			while (parentSectionIdx >= 0) {
				let parentSection = this.sections._inner[parentSectionIdx];
				let parentLevel = parentSection.getLevel();
				parentSection.rowCount[parentLevel] += amount;
				parentSectionIdx = parentSection.parentSection;
			}
		}
	}
	updateHierarchyForInsertedSection(section: SectionData, insertBefore: boolean): void {
		for (let i = 0; i < section.sectionIndex; i++) {
			let aboveSection = this._sectionInformation._inner[i];
			for (let j: number = 0; j < section.sectionKeyNames.length; j++) {
				if (aboveSection.headerExpansionKeys[j] != null && (aboveSection.sectionKeyValues[j] == section.sectionKeyValues[j] || Base.equalsStatic(aboveSection.sectionKeyValues[j], section.sectionKeyValues[j]))) {
					section.parentSection = i;
					section.headerExpansionKeys[j] = null;
				}
			}
		}
	}
	isVisible(section: SectionData): boolean {
		let level = section.getLevel();
		if (level == 0) {
			return true;
		}
		let parent = this._sectionInformation._inner[section.parentSection];
		for (let i = level - 1; i >= 0; i--) {
			if (!parent.headerStates[i]) {
				return false;
			}
		}
		return this.isVisible(parent);
	}
}


