/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList, IList_$type, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, String_$type, Number_$type, typeCast, Array_$type, Boolean_$type, Type, markType } from "./type";
import { ISupportsDataChangeNotifications, ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
import { ISummaryResult } from "./ISummaryResult";
import { List$1 } from "./List$1";
import { IDataSource } from "./IDataSource";
import { DataSourcePropertiesComparer } from "./DataSourcePropertiesComparer";
import { IComparer$1 } from "./IComparer$1";
import { ISupportsExpansionChangeNotifications } from "./ISupportsExpansionChangeNotifications";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { SummaryDescriptionCollection } from "./SummaryDescriptionCollection";
import { DataSourceSummaryScope } from "./DataSourceSummaryScope";
import { DataSourceSectionHeaderDisplayMode } from "./DataSourceSectionHeaderDisplayMode";
import { SectionData } from "./SectionData";
import { SectionMap } from "./SectionMap";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { Dictionary$2 } from "./Dictionary$2";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { SummaryDescription } from "./SummaryDescription";
import { SortDescription } from "./SortDescription";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { SummaryCalculator } from "./SummaryCalculator";
import { DataSourceRowType } from "./DataSourceRowType";
import { SummaryGroup } from "./SummaryGroup";
import { RemovedShiftedRowInfo } from "./RemovedShiftedRowInfo";

/**
 * @hidden 
 */
export class RearrangedListView extends Base implements ISupportsDataChangeNotifications {
	static $t: Type = markType(RearrangedListView, 'RearrangedListView', (<any>Base).$type, [ISupportsDataChangeNotifications_$type]);
	private _source: IDataSourceSupportsIndexedAccess = null;
	private _view: List$1<any> = null;
	private _sectionMap: SectionMap = new SectionMap();
	private _summaryResults: ISummaryResult[] = null;
	private _previousHeaderCache: DataSourceSpecialRow[] = null;
	private _previousSectionsCache: SectionData[] = null;
	private _previousSummaryCalculators: SummaryCalculator[][] = null;
	private _rootSummaryCalculators: SummaryCalculator[] = null;
	private _summaryRowCount: number = 0;
	private _rootSummaryRowCount: number = 0;
	get rootSummaryRowCount(): number {
		return this._rootSummaryRowCount;
	}
	get rootSummaryResults(): ISummaryResult[] {
		return this._summaryResults;
	}
	get view(): IList {
		return this._view;
	}
	private _includeSummaryRowsInSection: boolean = false;
	get includeSummaryRowsInSection(): boolean {
		return this._includeSummaryRowsInSection;
	}
	set includeSummaryRowsInSection(value: boolean) {
		this._includeSummaryRowsInSection = value;
	}
	private _isSectionSummaryRowsAtBottom: boolean = false;
	get isSectionSummaryRowsAtBottom(): boolean {
		return this._isSectionSummaryRowsAtBottom;
	}
	set isSectionSummaryRowsAtBottom(value: boolean) {
		this._isSectionSummaryRowsAtBottom = value;
	}
	get isSectionCollapsable(): boolean {
		if (!this.dataSource.isSectionContentVisible) {
			return true;
		}
		return this.dataSource.isSectionCollapsable;
	}
	constructor(sourceList: IDataSourceSupportsIndexedAccess) {
		super();
		this._source = sourceList;
	}
	getSection(index: number): SectionData {
		return this._sectionMap.getSection(index);
	}
	getLastSection(): SectionData {
		return this._sectionMap.getLastSection();
	}
	private _primaryKeyComparer: DataSourcePropertiesComparer = null;
	get primaryKeyComparer(): DataSourcePropertiesComparer {
		return this._primaryKeyComparer;
	}
	set primaryKeyComparer(value: DataSourcePropertiesComparer) {
		this._primaryKeyComparer = value;
	}
	private _sortComparer: IComparer$1<any> = null;
	get sortComparer(): IComparer$1<any> {
		return this._sortComparer;
	}
	set sortComparer(value: IComparer$1<any>) {
		this._sortComparer = value;
	}
	private _groupComparer: IComparer$1<any> = null;
	get groupComparer(): IComparer$1<any> {
		return this._groupComparer;
	}
	set groupComparer(value: IComparer$1<any>) {
		this._groupComparer = value;
	}
	private _filter: (item: any) => boolean = null;
	get filter(): (item: any) => boolean {
		return this._filter;
	}
	set filter(value: (item: any) => boolean) {
		this._filter = value;
	}
	private _updateNotifier: ISupportsDataChangeNotifications = null;
	get updateNotifier(): ISupportsDataChangeNotifications {
		return this._updateNotifier;
	}
	set updateNotifier(value: ISupportsDataChangeNotifications) {
		this._updateNotifier = value;
	}
	private _expansionNotifier: ISupportsExpansionChangeNotifications = null;
	get expansionNotifier(): ISupportsExpansionChangeNotifications {
		return this._expansionNotifier;
	}
	set expansionNotifier(value: ISupportsExpansionChangeNotifications) {
		this._expansionNotifier = value;
	}
	private _dataSource: IDataSource = null;
	get dataSource(): IDataSource {
		return this._dataSource;
	}
	set dataSource(value: IDataSource) {
		this._dataSource = value;
	}
	private _groupDescriptions: SortDescriptionCollection = null;
	get groupDescriptions(): SortDescriptionCollection {
		return this._groupDescriptions;
	}
	set groupDescriptions(value: SortDescriptionCollection) {
		this._groupDescriptions = value;
	}
	private _sortDescriptions: SortDescriptionCollection = null;
	get sortDescriptions(): SortDescriptionCollection {
		return this._sortDescriptions;
	}
	set sortDescriptions(value: SortDescriptionCollection) {
		this._sortDescriptions = value;
	}
	private _summaryDescriptions: SummaryDescriptionCollection = null;
	get summaryDescriptions(): SummaryDescriptionCollection {
		return this._summaryDescriptions;
	}
	set summaryDescriptions(value: SummaryDescriptionCollection) {
		this._summaryDescriptions = value;
	}
	private _isGrouping: boolean = false;
	get isGrouping(): boolean {
		return this._isGrouping;
	}
	set isGrouping(value: boolean) {
		this._isGrouping = value;
	}
	private _summaryScope: DataSourceSummaryScope = DataSourceSummaryScope.Both;
	get summaryScope(): DataSourceSummaryScope {
		return this._summaryScope;
	}
	set summaryScope(value: DataSourceSummaryScope) {
		this._summaryScope = value;
	}
	private _sectionHeaderDisplayMode: DataSourceSectionHeaderDisplayMode = <DataSourceSectionHeaderDisplayMode>0;
	get sectionHeaderDisplayMode(): DataSourceSectionHeaderDisplayMode {
		return this._sectionHeaderDisplayMode;
	}
	set sectionHeaderDisplayMode(value: DataSourceSectionHeaderDisplayMode) {
		this._sectionHeaderDisplayMode = value;
	}
	private get isSectionExpandedDefault(): boolean {
		if (!this.dataSource.isSectionContentVisible) {
			return false;
		}
		if (this.isSectionCollapsable) {
			return this.dataSource.isSectionExpandedDefault;
		}
		return true;
	}
	refresh(): void {
		if (<any>this._view == <any><any>this._source || this._view == null) {
			this._view = new List$1<any>((<any>Base).$type, 0);
		}
		this._view.clear();
		if (!this.isSectionCollapsable) {
			this._expansionStates.clear();
		}
		if (this._source == null) {
			return;
		}
		let sourceCount = this._source.actualCount;
		this._summaryRowCount = this.getSummaryRowCount();
		this.beginSummaries(null);
		let needsAggregation = this.summaryDescriptions.all.count > 0 && this.summaryScope != DataSourceSummaryScope.Sections && this.summaryScope != DataSourceSummaryScope.None;
		if (this._filter == null) {
			for (let i: number = 0; i < sourceCount; i++) {
				let item = this._source.getItemAtIndex(i);
				this._view.add1(item);
				if (needsAggregation) {
					this.aggregateItem(null, item);
				}
			}
		} else {
			for (let i1: number = 0; i1 < sourceCount; i1++) {
				let item1 = this._source.getItemAtIndex(i1);
				if (this._filter(item1)) {
					this._view.add1(item1);
					if (needsAggregation) {
						this.aggregateItem(null, item1);
					}
				}
			}
		}
		this.endSummaries(null);
		if (this._sortComparer != null) {
			this._view.sort1(this._sortComparer);
		}
		this._hasSections = false;
		this._sectionMap.clear();
		if (this.groupDescriptions != null && this.groupDescriptions.all.count > 0) {
			this._hasSections = true;
			this.insertVirtualRows();
		} else {
			this._sectionMap.sections.add(((() => {
				let $ret = new SectionData();
				$ret.sectionIndex = 0;
				$ret.sectionKeyNames = null;
				$ret.sectionKeyValues = null;
				$ret.sectionStartIndex = 0;
				$ret.sectionEndIndex = this._view.count;
				$ret.headerStates = <boolean[]>new Array(0);
				$ret.rowCount = <number[]>new Array(1);
				return $ret;
			})()));
		}
		if (needsAggregation) {
			this.injectRootSummaryRows(this._summaryResults);
		}
		let primaryKeyComparer = this.primaryKeyComparer;
		let pinnedItems: List$1<any> = new List$1<any>((<any>Base).$type, 0);
		if (this._pinnedKeys.count > 0 && this.shouldEmitShiftedRows) {
			if (!this._hasSections) {
				let section = this._sectionMap.sections._inner[0];
				for (let i2 = 0; i2 < this._pinnedKeys.count; i2++) {
					let itemIndex = this.dataSource.indexOfKey(this._pinnedKeys._inner[i2]);
					if (itemIndex != -1) {
						this.injectSortedShiftedRow1(section, this._view._inner[itemIndex], i2);
					}
				}
			} else {
				for (let i3 = 0; i3 < this._pinnedKeys.count; i3++) {
					let itemIndex1 = this.dataSource.indexOfKey(this._pinnedKeys._inner[i3]);
					if (itemIndex1 != -1) {
						let section1 = this._sectionMap.getSection(itemIndex1);
						this.injectSortedShiftedRow1(section1, this._view._inner[itemIndex1], i3);
					}
				}
			}
		}
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyClearItems();
		}
	}
	private getFirstOrLastItemInSection(section: SectionData, first: boolean): any {
		let item: any = null;
		if (section.isSectionContentVisible) {
			if (first) {
				let itemIndex = section.sectionStartIndex + section.getHeaderCount() + section.summaryTopCount + section.pinnedCount;
				item = this._view._inner[itemIndex];
			} else {
				let itemIndex1 = section.sectionEndIndex - section.footerCount - section.summaryBottomCount;
				item = this._view._inner[itemIndex1];
			}
		}
		return item;
	}
	get sections(): List$1<SectionData> {
		return this._sectionMap.sections;
	}
	private _shouldEmitSectionHeaders: boolean = false;
	get shouldEmitSectionHeaders(): boolean {
		return this._shouldEmitSectionHeaders;
	}
	set shouldEmitSectionHeaders(value: boolean) {
		this._shouldEmitSectionHeaders = value;
	}
	private _shouldEmitSectionFooters: boolean = false;
	get shouldEmitSectionFooters(): boolean {
		return this._shouldEmitSectionFooters;
	}
	set shouldEmitSectionFooters(value: boolean) {
		this._shouldEmitSectionFooters = value;
	}
	private _shouldEmitShiftedRows: boolean = false;
	get shouldEmitShiftedRows(): boolean {
		return this._shouldEmitShiftedRows;
	}
	set shouldEmitShiftedRows(value: boolean) {
		this._shouldEmitShiftedRows = value;
	}
	private _hasSections: boolean = false;
	private insertVirtualRows(): void {
		if (this._view.count == 0) {
			return;
		}
		let groupNames: string[] = this.getGroupNames();
		let sectionNames: string[] = this.getSectionNames();
		let levelCount: number = this.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split ? sectionNames.length : 1;
		if (this._previousSectionsCache == null || this._previousSectionsCache.length != sectionNames.length) {
			this._previousHeaderCache = <DataSourceSpecialRow[]>new Array(levelCount);
			this._previousSectionsCache = <SectionData[]>new Array(levelCount);
		}
		this._previousSummaryCalculators = <SummaryCalculator[][]>new Array(levelCount);
		for (let i: number = 0; i < levelCount; i++) {
			this._previousSummaryCalculators[i] = <SummaryCalculator[]>new Array(this.summaryDescriptions.all.count);
		}
		let ignoreSectionSummaries: boolean = this.summaryScope == DataSourceSummaryScope.None || this.summaryScope == DataSourceSummaryScope.Root;
		let previousItem: any = null;
		let groupStartItem: any = null;
		for (let i1 = 0; i1 < this._view.count; i1++) {
			let currentItem = this._view._inner[i1];
			if (currentItem == null) {
				continue;
			}
			if (previousItem == null) {
				let section = this.startSection(i1, currentItem, sectionNames);
				i1 += this.injectHeaders(section, i1, groupNames, sectionNames, true);
				if (this.shouldEmitSectionHeaders && !section.isSectionContentVisible) {
					this._view.removeAt(i1);
					i1--;
				}
				this.buildSectionHierarchy(section, true, ignoreSectionSummaries);
				this._sectionMap.incrementRowCount(section, 1);
				this.aggregateItem(section, currentItem);
				groupStartItem = currentItem;
			} else {
				if (this.groupComparer.compare(previousItem, currentItem) != 0) {
					let lastSection = this._sectionMap.sections._inner[this._sectionMap.sections.count - 1];
					if (lastSection.isSectionVisible) {
						i1 += this.injectFooters(i1, groupStartItem, groupNames, sectionNames);
					}
					this.endSection(i1 - 1, groupStartItem, groupNames);
					if (!lastSection.isSectionVisible) {
						this._sectionMap.removeSection(lastSection.sectionIndex);
					}
					let section1 = this.startSection(i1, currentItem, sectionNames);
					this.buildSectionHierarchy(section1, false, ignoreSectionSummaries);
					let numHeaders = this.injectHeaders(section1, i1, groupNames, sectionNames, true);
					i1 += numHeaders;
					section1.isSectionVisible = this._sectionMap.isVisible(section1);
					if (section1.isSectionVisible) {
						if (this.shouldEmitSectionHeaders && !section1.isSectionContentVisible) {
							this._view.removeAt(i1);
							i1--;
						}
					} else {
						this._view.removeRange(section1.sectionStartIndex, numHeaders);
						i1 -= numHeaders;
						this._view.removeAt(i1);
						i1--;
					}
					this._sectionMap.incrementRowCount(section1, 1);
					this.aggregateItem(section1, currentItem);
					groupStartItem = currentItem;
				} else {
					let section2 = this._sectionMap.sections._inner[this._sectionMap.sections.count - 1];
					if (this.shouldEmitSectionHeaders && !section2.isSectionContentVisible) {
						this._view.removeAt(i1);
						i1--;
					}
					this._sectionMap.incrementRowCount(section2, 1);
					this.aggregateItem(section2, currentItem);
				}
			}
			if (i1 == this._view.count - 1) {
				let lastSection1 = this._sectionMap.sections._inner[this._sectionMap.sections.count - 1];
				if (lastSection1.isSectionVisible) {
					i1 += this.injectFooters(i1 + 1, groupStartItem, groupNames, sectionNames);
				}
				this.endSection(i1, groupStartItem, groupNames);
				if (!lastSection1.isSectionVisible) {
					this._sectionMap.removeSection(lastSection1.sectionIndex);
				}
			}
			previousItem = currentItem;
		}
		if (!ignoreSectionSummaries) {
			if (this.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split) {
				for (let level: number = 0; level < sectionNames.length; level++) {
					for (let i2: number = 0; i2 < this.summaryDescriptions.all.count; i2++) {
						this._previousSectionsCache[level].summaryResults2[level][i2] = this._previousSummaryCalculators[level][i2].endCalculation();
						this._previousSectionsCache[level].summaryResults2[level][i2].summaryIndex = i2;
					}
					for (let i3 = 0; i3 < this._previousSectionsCache[level].summaryLocations.length; i3++) {
						if (this._previousSectionsCache[level].summaryLocations[i3] == -1) {
							this._previousSectionsCache[level].summaryLocations[i3] = this._sectionMap.sections._inner[this._sectionMap.sections.count - 1].sectionEndIndex + 1;
						}
					}
				}
			} else {
				for (let i4: number = 0; i4 < this.summaryDescriptions.all.count; i4++) {
					this._previousSectionsCache[0].summaryResults2[0][i4] = this._previousSummaryCalculators[0][i4].endCalculation();
					this._previousSectionsCache[0].summaryResults2[0][i4].summaryIndex = i4;
				}
				this._previousSectionsCache[0].summaryLocations[0] = this._sectionMap.sections._inner[this._sectionMap.sections.count - 1].sectionEndIndex + 1;
			}
		}
		this.injectSectionSummaries();
		for (let i5: number = 0; i5 < this._previousSectionsCache.length; i5++) {
			this._previousHeaderCache[i5] = null;
			this._previousSectionsCache[i5] = null;
		}
		this._previousSummaryCalculators = null;
	}
	private buildSectionHierarchy(currentSection: SectionData, initial: boolean, ignoreSummaries: boolean): void {
		if (initial) {
			for (let j: number = 0; j < this._previousSectionsCache.length; j++) {
				this._previousSectionsCache[j] = currentSection;
				if (!ignoreSummaries) {
					for (let k: number = 0; k < this.summaryDescriptions.all.count; k++) {
						let summary = this.summaryDescriptions.all.item(k);
						this._previousSummaryCalculators[j][k] = summary.getCalculator();
						this._previousSummaryCalculators[j][k].beginCalculation(this.dataSource, summary.propertyName);
					}
				}
			}
		}
		if (this.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split) {
			let previousSectionEnded: boolean = false;
			let totalDepth: number = currentSection.sectionKeyNames.length;
			for (let i: number = 0; i < totalDepth; i++) {
				if (previousSectionEnded) {
					if (!ignoreSummaries) {
						for (let j1: number = 0; j1 < this.summaryDescriptions.all.count; j1++) {
							this._previousSectionsCache[i].summaryResults2[i][j1] = this._previousSummaryCalculators[i][j1].endCalculation();
							this._previousSectionsCache[i].summaryResults2[i][j1].summaryIndex = j1;
							this._previousSummaryCalculators[i][j1].beginCalculation(this.dataSource, this.summaryDescriptions.all.item(j1).propertyName);
						}
						this._previousSectionsCache[i].summaryLocations[i] = currentSection.sectionStartIndex;
					}
					this._previousSectionsCache[i] = currentSection;
					continue;
				}
				let isSectionDifferent = false;
				if (this._previousSectionsCache[i].sectionKeyValues[i] == null) {
					isSectionDifferent = currentSection.sectionKeyValues[i] != null;
				} else {
					isSectionDifferent = !Base.equalsStatic(this._previousSectionsCache[i].sectionKeyValues[i], currentSection.sectionKeyValues[i]);
				}
				if (isSectionDifferent) {
					if (!ignoreSummaries) {
						for (let j2: number = 0; j2 < this.summaryDescriptions.all.count; j2++) {
							this._previousSectionsCache[i].summaryResults2[i][j2] = this._previousSummaryCalculators[i][j2].endCalculation();
							this._previousSectionsCache[i].summaryResults2[i][j2].summaryIndex = j2;
							this._previousSummaryCalculators[i][j2].beginCalculation(this.dataSource, this.summaryDescriptions.all.item(j2).propertyName);
						}
						this._previousSectionsCache[i].summaryLocations[i] = currentSection.sectionStartIndex;
					}
					this._previousSectionsCache[i] = currentSection;
					if (i - 1 > -1) {
						let parentLevel = i - 1;
						while (parentLevel >= 0 && this._previousSectionsCache[parentLevel].isRemoved) {
							parentLevel = parentLevel - 1;
						}
						currentSection.parentSection = this._previousSectionsCache[parentLevel].sectionIndex;
					}
					previousSectionEnded = true;
				}
			}
		} else {
			let isNewSection: boolean = false;
			for (let i1: number = 0; i1 < currentSection.sectionKeyNames.length; i1++) {
				if (this._previousSectionsCache[0].sectionKeyValues[i1] == null) {
					if (this._previousSectionsCache[0].sectionKeyValues[i1] != currentSection.sectionKeyValues[i1]) {
						isNewSection = true;
						break;
					}
					continue;
				}
				if (!Base.equalsStatic(this._previousSectionsCache[0].sectionKeyValues[i1], currentSection.sectionKeyValues[i1])) {
					isNewSection = true;
					break;
				}
			}
			if (isNewSection) {
				if (!ignoreSummaries) {
					for (let j3: number = 0; j3 < this.summaryDescriptions.all.count; j3++) {
						this._previousSectionsCache[0].summaryResults2[0][j3] = this._previousSummaryCalculators[0][j3].endCalculation();
						this._previousSectionsCache[0].summaryResults2[0][j3].summaryIndex = j3;
						this._previousSummaryCalculators[0][j3].beginCalculation(this.dataSource, this.summaryDescriptions.all.item(j3).propertyName);
					}
					this._previousSectionsCache[0].summaryLocations[0] = currentSection.sectionStartIndex;
				}
				this._previousSectionsCache[0] = currentSection;
			}
		}
	}
	getSummaryRowCount(): number {
		let maxDuplicates: number = 0;
		let tracker: Dictionary$2<string, number> = new Dictionary$2<string, number>(String_$type, Number_$type, 0);
		for (let i = 0; i < this.summaryDescriptions.all.count; i++) {
			let propertyName = this.summaryDescriptions.all.item(i).propertyName;
			if (!tracker.containsKey(propertyName)) {
				tracker.addItem(propertyName, 1);
			} else {
				tracker.item(propertyName, tracker.item(propertyName) + 1);
			}
			if (tracker.item(propertyName) > maxDuplicates) {
				maxDuplicates = tracker.item(propertyName);
			}
		}
		return maxDuplicates;
	}
	private injectHeaders(section: SectionData, i: number, groupNames: string[], sectionNames: string[], useCache: boolean): number {
		let numHeadersInGroup = 0;
		if (this.shouldEmitSectionHeaders) {
			let item = this._view._inner[i];
			if (this.dataSource.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Combined) {
				if (this.injectHeader(i, 0, item, groupNames, sectionNames, useCache)) {
					this._sectionMap.incrementFirstRowDisplacement();
					numHeadersInGroup++;
					if (section != null) {
						let key = this.combineSectionKeysAndValues(section);
						section.headerExpansionKeys[0] = key;
						section.headerStates[0] = this.getSectionExpansionState(key);
						section.headerOffsets[0] = i - section.sectionStartIndex;
					}
				}
			} else if (this.dataSource.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split) {
				for (let level: number = 0, offset: number = 0; level < sectionNames.length; level++) {
					let location: number = i + offset;
					if (this.injectHeader(location, level, item, groupNames, <string[]>[ sectionNames[level] ], useCache)) {
						numHeadersInGroup++;
						this._sectionMap.incrementFirstRowDisplacement();
						if (section != null) {
							let key1 = this.combineSectionKeysAndValues1(section, level);
							section.headerExpansionKeys[level] = key1;
							section.headerStates[level] = this.getSectionExpansionState(key1);
							section.headerOffsets[level] = location - section.sectionStartIndex;
							if (!section.headerStates[level]) {
								break;
							}
						} else if (!this.isSectionExpandedDefault) {
							break;
						}
						offset++;
					}
				}
			}
		}
		return numHeadersInGroup;
	}
	private injectHeader(i: number, level: number, currRepresentative: any, groupNames: string[], sectionNames: string[], useCache: boolean): boolean {
		let header: DataSourceSpecialRow = new DataSourceSpecialRow();
		header.level = level;
		for (let j = 0; j < groupNames.length; j++) {
			header.setValue(groupNames[j], this.dataSource.getItemProperty(currRepresentative, groupNames[j]));
			if (j < sectionNames.length) {
				header.setSectionValue(sectionNames[j], this.dataSource.getItemProperty(currRepresentative, sectionNames[j]));
			}
		}
		header.rowType = DataSourceRowType.SectionHeader;
		header.summaryResults = <ISummaryResult[]>new Array(this.summaryDescriptions.all.count);
		if (useCache && this._previousHeaderCache != null) {
			if (this._previousHeaderCache[level] != null) {
				if (this._previousHeaderCache[level].isHeaderSame(header)) {
					return false;
				} else {
					this._previousHeaderCache[level] = header;
					for (let j1 = level + 1; j1 < this._previousHeaderCache.length; j1++) {
						this._previousHeaderCache[j1] = null;
					}
				}
			} else {
				this._previousHeaderCache[level] = header;
			}
		}
		this._view.insert1(i, header);
		return true;
	}
	private injectFooters(i: number, item: any, groupNames: string[], sectionNames: string[]): number {
		let numFootersInGroup = 0;
		if (this.shouldEmitSectionFooters) {
			if (this.dataSource.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Combined) {
				this.injectFooter(i, 0, item, groupNames, sectionNames);
				numFootersInGroup++;
			} else if (this.dataSource.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split) {
				for (let j = sectionNames.length - 1; j >= 0; j--) {
					if (this._sectionMap.sections._inner[this._sectionMap.sections.count - 1].headerStates[j]) {
						this.injectFooter(i, j, item, groupNames, <string[]>[ sectionNames[j] ]);
						i++;
						numFootersInGroup++;
					}
				}
			}
		}
		return numFootersInGroup;
	}
	private injectFooter(i: number, level: number, currRepresentative: any, groupNames: string[], sectionNames: string[]): void {
		let footer: DataSourceSpecialRow = new DataSourceSpecialRow();
		footer.level = level;
		for (let j = 0; j < groupNames.length; j++) {
			footer.setValue(groupNames[j], this.dataSource.getItemProperty(currRepresentative, groupNames[j]));
			if (j < sectionNames.length) {
				footer.setSectionValue(sectionNames[j], this.dataSource.getItemProperty(currRepresentative, sectionNames[j]));
			}
		}
		footer.rowType = DataSourceRowType.SectionFooter;
		this._view.insert1(i, footer);
	}
	private injectSummaryRow(section: SectionData, i: number, summaryResults: ISummaryResult[]): DataSourceSpecialRow {
		let summaryRow = this.injectSummaryRow1(i, 0, summaryResults, DataSourceRowType.SummaryRowSection);
		if (this.isSectionSummaryRowsAtBottom) {
			section.summaryBottomCount++;
		} else {
			section.summaryTopCount++;
		}
		section.sectionEndIndex++;
		this._sectionMap.offsetSucceedingSections(section, 1, 1);
		return summaryRow;
	}
	private injectSummaryRow1(i: number, level: number, summaryResults: ISummaryResult[], rowType: DataSourceRowType): DataSourceSpecialRow {
		let summaryRow = ((() => {
			let $ret = new DataSourceSpecialRow();
			$ret.level = level;
			$ret.rowType = rowType;
			$ret.summaryResults = summaryResults;
			return $ret;
		})());
		this._view.insert1(i, summaryRow);
		return summaryRow;
	}
	private injectShiftedRowAtEnd(section: SectionData, targetRow: any, offset: boolean): number {
		let headerCount = section.getHeaderCount();
		let insertLocation = section.sectionStartIndex + section.summaryTopCount + section.pinnedCount;
		if (this.shouldEmitSectionHeaders) {
			insertLocation += headerCount;
		}
		this.injectShiftedRowAtLocation1(insertLocation, section.headerStates.length, targetRow);
		section.pinnedCount++;
		section.sectionEndIndex++;
		section.firstRowDisplacement++;
		if (offset) {
			this._sectionMap.offsetSucceedingSections(section, 1, 1);
		}
		return insertLocation;
	}
	private injectShiftedRowAtLocation(section: SectionData, location: number, targetRow: any): number {
		let headerCount = section.getHeaderCount();
		if (this.shouldEmitSectionHeaders) {
			location += headerCount;
		}
		this.injectShiftedRowAtLocation1(location, section.headerStates.length, targetRow);
		section.pinnedCount++;
		section.sectionEndIndex++;
		section.firstRowDisplacement++;
		this._sectionMap.offsetSucceedingSections(section, 1, 1);
		return location;
	}
	private injectShiftedRowAtLocation1(location: number, level: number, targetRow: any): number {
		let special: DataSourceSpecialRow = new DataSourceSpecialRow();
		special.rowType = DataSourceRowType.ShiftedRow;
		special.targetRow = targetRow;
		special.level = level;
		this._view.insert1(location, special);
		return location + 1;
	}
	private injectSortedShiftedRow(section: SectionData, targetRow: any): number {
		let newPinnedIndex = -1;
		for (let i = 0; i < this._pinnedKeys.count; i++) {
			if (this.primaryKeyComparer.compareToKey(targetRow, this._pinnedKeys._inner[i]) == 0) {
				newPinnedIndex = i;
				break;
			}
		}
		return this.injectSortedShiftedRow1(section, targetRow, newPinnedIndex);
	}
	private injectSortedShiftedRow1(section: SectionData, targetRow: any, pinnedKeyIndex: number): number {
		let injectionLocation = -1;
		if (pinnedKeyIndex != -1) {
			let sectionStart = section.sectionStartIndex;
			let endOfPinnedArea = sectionStart + section.pinnedCount;
			let inserted = false;
			for (let i = sectionStart; i < endOfPinnedArea; i++) {
				let adjI = this.shouldEmitSectionHeaders ? i + 1 : i;
				let pinnedRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[adjI]);
				if (this._sortComparer != null) {
					let result = this._sortComparer.compare(targetRow, pinnedRow.targetRow);
					if (result == 0 || result < 0) {
						injectionLocation = this.injectShiftedRowAtLocation(section, i, targetRow);
						inserted = true;
						break;
					}
				} else {
					let pinnedRowIndex = -1;
					for (let j = 0; j < this._pinnedKeys.count; j++) {
						if (this.primaryKeyComparer.compareToKey(pinnedRow.targetRow, this._pinnedKeys._inner[j]) == 0) {
							pinnedRowIndex = j;
							break;
						}
					}
					if (pinnedRowIndex > pinnedKeyIndex) {
						injectionLocation = this.injectShiftedRowAtLocation(section, i, targetRow);
						inserted = true;
						break;
					}
				}
			}
			if (!inserted) {
				injectionLocation = this.injectShiftedRowAtEnd(section, targetRow, true);
				inserted = true;
			}
		}
		return injectionLocation;
	}
	private injectRootSummaryRows(summaryResults: ISummaryResult[]): void {
		let summaryRows: List$1<Dictionary$2<string, ISummaryResult>> = SectionData.getSummaryRowsFromResults(summaryResults);
		this._rootSummaryRowCount = summaryRows.count;
		for (let i = 0; i < summaryRows.count; i++) {
			let results: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows._inner[i].count);
			summaryRows._inner[i].values.copyTo(results, 0);
			this.injectSummaryRow1(this._view.count, 0, results, DataSourceRowType.SummaryRowRoot);
		}
	}
	private injectSectionSummaries(): void {
		if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Sections) {
			for (let i = 0; i < this._sectionMap.sections.count; i++) {
				let section = this._sectionMap.sections._inner[i];
				if (this.includeSummaryRowsInSection) {
					if (this.isSectionSummaryRowsAtBottom) {
						this.injectSectionSummariesBottom(section, false);
					} else {
						this.injectSectionSummariesTop(section, false);
					}
				} else {
					for (let j = 0; j < section.summaryResults2.length; j++) {
						let specialRow: DataSourceSpecialRow = <DataSourceSpecialRow>this._view._inner[section.sectionStartIndex + section.headerOffsets[j]];
						if (specialRow != null) {
							specialRow.summaryResults = section.summaryResults2[j];
						}
						if (!section.headerStates[j]) {
							break;
						}
					}
				}
			}
		}
	}
	private injectSectionSummariesTop(section: SectionData, notify: boolean): void {
		let offset = 0;
		let representative = this.getFirstOrLastItemInSection(section, !this.isSectionSummaryRowsAtBottom);
		for (let i = 0; i < section.summaryResults2.length; i++) {
			if (section.headerExpansionKeys[i] == null || !section.headerStates[i]) {
				continue;
			}
			let summaryRows: List$1<Dictionary$2<string, ISummaryResult>> = SectionData.getSummaryRowsFromResults(section.summaryResults2[i]);
			if (this.shouldEmitSectionHeaders) {
				offset += 1;
			}
			section.summaryGroups[i] = new SummaryGroup();
			section.summaryGroups[i].summaries = <DataSourceSpecialRow[]>new Array(this._summaryRowCount);
			for (let j = 0; j < summaryRows.count; j++) {
				let results: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows._inner[j].count);
				summaryRows._inner[j].values.copyTo(results, 0);
				let insertLocation = section.sectionStartIndex + offset + j;
				let summaryRow = this.injectSummaryRow1(insertLocation, i + 1, results, DataSourceRowType.SummaryRowSection);
				section.setSummaryRow(summaryRow, j);
				for (let k = i + 1; k < section.headerOffsets.length; k++) {
					section.headerOffsets[k]++;
				}
				section.sectionEndIndex++;
				section.summaryTopCount++;
				this._sectionMap.offsetSucceedingSectionsFromNewSection(section, 1, 1);
				if (representative != null) {
					let groupNames = this.getGroupNames();
					for (let k1 = 0; k1 < groupNames.length; k1++) {
						summaryRow.setValue(groupNames[k1], this.dataSource.getItemProperty(representative, groupNames[k1]));
					}
				}
				if (notify && this.updateNotifier != null) {
					this.updateNotifier.notifyInsertItem(insertLocation, summaryRow);
				}
			}
			offset += summaryRows.count;
		}
	}
	private injectSectionSummariesBottomAtLevel(section: SectionData, level: number, notify: boolean): number {
		let summaryLocation = section.summaryLocations[level];
		let summaryRows = SectionData.getSummaryRowsFromResults(section.summaryResults2[level]);
		for (let j = 0; j < summaryRows.count; j++) {
			let results: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows._inner[j].count);
			summaryRows._inner[j].values.copyTo(results, 0);
			let sectionAtSummary = this._sectionMap.getSection(summaryLocation - 1);
			let summaryRow = this.injectSummaryRow1(summaryLocation + j, level + 1, results, DataSourceRowType.SummaryRowSection);
			section.setSummaryRow(summaryRow, j);
			sectionAtSummary.sectionEndIndex++;
			sectionAtSummary.summaryBottomCount++;
			this._sectionMap.offsetSucceedingSections(sectionAtSummary, 1, 1);
			let representative: any = null;
			let representativeRowType: DataSourceRowType = DataSourceRowType.Normal;
			for (let k = summaryLocation + j - 1; k >= 0; k--) {
				let rowType = this.dataSource.getRowType(k);
				if (rowType == DataSourceRowType.Normal || rowType == DataSourceRowType.SectionHeader) {
					representative = this._view._inner[k];
					representativeRowType = rowType;
					break;
				}
			}
			if (representative != null) {
				let groupNames = this.getGroupNames();
				if (representativeRowType == DataSourceRowType.SectionHeader) {
					let sectionHeader = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, representative);
					for (let k1 = 0; k1 < groupNames.length; k1++) {
						summaryRow.setValue(groupNames[k1], sectionHeader.getValue(groupNames[k1]));
					}
				} else {
					for (let k2 = 0; k2 < groupNames.length; k2++) {
						summaryRow.setValue(groupNames[k2], this.dataSource.getItemProperty(representative, groupNames[k2]));
					}
				}
			}
			if (notify && this.updateNotifier != null) {
				this.updateNotifier.notifyInsertItem(summaryLocation + j, summaryRow);
			}
		}
		return summaryRows.count;
	}
	private injectSectionSummariesBottom(section: SectionData, notify: boolean): void {
		for (let i = 0; i < section.summaryResults2.length; i++) {
			if (!section.headerStates[i]) {
				break;
			}
			if (section.summaryLocations[i] == -1) {
				continue;
			}
			section.summaryGroups[i] = new SummaryGroup();
			section.summaryGroups[i].summaries = <DataSourceSpecialRow[]>new Array(this._summaryRowCount);
			let summaryRowCount = this.injectSectionSummariesBottomAtLevel(section, i, notify);
		}
	}
	private getGroupNames(): string[] {
		let groupNames: string[] = <string[]>new Array(this.groupDescriptions.all.count + this.sortDescriptions.all.count);
		let insert: number = 0;
		for (let i = 0; i < this.groupDescriptions.all.count; i++) {
			groupNames[insert] = this.groupDescriptions.all.item(i).propertyName;
			insert++;
		}
		for (let i1 = 0; i1 < this.sortDescriptions.all.count; i1++) {
			groupNames[insert] = this.sortDescriptions.all.item(i1).propertyName;
			insert++;
		}
		return groupNames;
	}
	private getSectionNames(): string[] {
		let groupNames: string[] = <string[]>new Array(this.groupDescriptions.all.count);
		let insert: number = 0;
		for (let i = 0; i < this.groupDescriptions.all.count; i++) {
			groupNames[insert] = this.groupDescriptions.all.item(i).propertyName;
			insert++;
		}
		return groupNames;
	}
	private endSection(i: number, currRepresentative: any, groupNames: string[]): void {
		this._sectionMap.endSection(i);
	}
	private startSection(i: number, currRepresentative: any, groupNames: string[]): SectionData {
		return this._sectionMap.startSection(i, this.dataSource, currRepresentative, groupNames, this.dataSource.sectionHeaderDisplayMode, this.isSectionExpandedDefault);
	}
	setPinnedKeys(pinnedKeys: List$1<any[]>): void {
		this._pinnedKeys = new List$1<any[]>(Array_$type, 0);
		for (let i = 0; i < pinnedKeys.count; i++) {
			this._pinnedKeys.add(pinnedKeys._inner[i]);
		}
	}
	private onClearItems(): void {
		this._view.clear();
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyClearItems();
		}
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		if (this._sortComparer != null) {
			this.removeOldFromSorted(oldItem);
			this.addNewToSorted(newItem);
		} else {
			this.removeOldFromUnsorted(index, oldItem);
			this.addNewToUnsorted(index, newItem);
		}
	}
	private addNewToUnsorted(index: number, newItem: any): void {
		if (!this.shouldShow(newItem)) {
			return;
		}
		let viewIndex: number = this.findUnsortedViewIndexForSourceIndex(index);
		this.onInsertItem(viewIndex, newItem);
	}
	private onInsertItem(newIndex: number, newItem: any): void {
		this.insertAndAdjustSectionData(newIndex, newItem);
		this.updateSectionsOnInsert(newIndex, newItem);
		this.updateSummariesOnInsert(newIndex, newItem);
	}
	private insertAndAdjustSectionData(newIndex: number, newItem: any): void {
		if (this._hasSections) {
			let section = this._sectionMap.getSection(newIndex);
			if (section == null) {
				section = this._sectionMap.getLastSection();
			}
			let headerCount = section.getHeaderCount();
			let belongsToSection: boolean = true;
			if (newIndex >= section.sectionStartIndex && newIndex <= section.sectionStartIndex + (headerCount - 1) + section.summaryTopCount + section.pinnedCount) {
				if (!this.belongsInSection(section, newItem, this._view._inner[section.sectionStartIndex])) {
					section = this._sectionMap.getSection(section.sectionStartIndex - 1);
					if (section == null) {
						section = this._sectionMap.getFirstSection();
						section.sectionStartIndex++;
					}
					belongsToSection = false;
				} else {
					newIndex = section.sectionStartIndex + headerCount + section.summaryTopCount + section.pinnedCount;
				}
			}
			if (belongsToSection && !section.isSectionContentVisible) {
				return;
			}
			section.sectionEndIndex++;
			this._sectionMap.offsetSucceedingSections(section, 1, 0);
			if (this.belongsInSection(section, newItem, this._view._inner[section.sectionStartIndex])) {
				if (!section.isSectionContentVisible) {
					section.sectionEndIndex--;
					this._sectionMap.offsetSucceedingSections(section, -1, 0);
					return;
				}
				if (newIndex >= section.sectionEndIndex - section.footerCount - section.summaryBottomCount && newIndex <= section.sectionEndIndex) {
					newIndex = section.sectionEndIndex - section.footerCount - section.summaryBottomCount;
				}
			}
		}
		this._view.insert1(newIndex, newItem);
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyInsertItem(newIndex, newItem);
		}
	}
	private updateSectionsOnInsert(newIndex: number, newItem: any): void {
		let section: SectionData = null;
		if (this._hasSections) {
			section = this._sectionMap.getSection(newIndex);
		} else {
			section = this._sectionMap.sections._inner[0];
		}
		if (section == null) {
			if (this._hasSections && newIndex == 0) {
				section = this._sectionMap.getFirstSection();
			} else {
				section = this._sectionMap.getLastSection();
			}
		}
		if (this.belongsInSection(section, newItem, this._view._inner[section.sectionStartIndex])) {
			this._sectionMap.incrementRowCount(section, 1);
			if (this.shouldEmitShiftedRows && section.isSectionContentVisible) {
				let insertLocation = this.injectSortedShiftedRow(section, newItem);
				if (insertLocation != -1 && this.updateNotifier != null) {
					this.updateNotifier.notifyInsertItem(insertLocation, this._view._inner[insertLocation]);
				}
			}
		} else {
			let previousSection = this._sectionMap.getSection(newIndex - 1);
			if (previousSection != null && this.belongsInSection(previousSection, newItem, this._view._inner[previousSection.sectionStartIndex])) {
				this._sectionMap.incrementRowCount(previousSection, 1);
				if (this.shouldEmitShiftedRows && previousSection.isSectionContentVisible) {
					let insertLocation1 = this.injectSortedShiftedRow(previousSection, newItem);
					if (insertLocation1 != -1 && this.updateNotifier != null) {
						this.updateNotifier.notifyInsertItem(insertLocation1, this._view._inner[insertLocation1]);
					}
				}
			} else {
				let insertBefore: boolean = false;
				if (newIndex <= section.sectionStartIndex) {
					insertBefore = true;
				}
				let totalRowCount: number = 0;
				let header: any = null;
				let footer: any = null;
				let groupNames: string[] = this.getGroupNames();
				let sectionNames: string[] = this.getSectionNames();
				let sectionData = this._sectionMap.generateSection(this.dataSource, newItem, sectionNames, this.sectionHeaderDisplayMode, this.isSectionExpandedDefault);
				sectionData.sectionStartIndex = newIndex;
				sectionData.sectionEndIndex = newIndex;
				sectionData.sectionIndex = insertBefore ? section.sectionIndex : section.sectionIndex + 1;
				this._sectionMap.updateHierarchyForInsertedSection(sectionData, insertBefore);
				for (let i = 0; i < section.sectionKeyValues.length; i++) {
					if (Base.equalsStatic(section.sectionKeyValues[i], sectionData.sectionKeyValues[i]) && !section.headerStates[i]) {
						this._sectionMap.incrementRowCount(section, 1);
						return;
					}
				}
				this._sectionMap.insertSection(sectionData.sectionIndex, sectionData);
				if (this.shouldEmitSectionHeaders) {
					let numHeaders = this.injectHeaders(sectionData, newIndex, groupNames, sectionNames, false);
					sectionData.sectionEndIndex += numHeaders;
					totalRowCount += numHeaders;
					header = this._view._inner[newIndex];
					if (!insertBefore) {
						section.sectionEndIndex--;
					}
				}
				if (sectionData.isSectionContentVisible) {
					if (this.shouldEmitShiftedRows) {
						for (let i1 = 0; i1 < this._pinnedKeys.count; i1++) {
							if (this.primaryKeyComparer.compareToKey(newItem, this._pinnedKeys._inner[i1]) == 0) {
								this.injectShiftedRowAtEnd(sectionData, newItem, false);
								totalRowCount++;
								break;
							}
						}
					}
				} else {
					this._view.removeAt(newIndex + totalRowCount);
					sectionData.sectionEndIndex--;
					totalRowCount--;
				}
				if (this.shouldEmitSectionFooters) {
					let numFooters = this.injectFooters(newIndex + (totalRowCount - 1), newItem, groupNames, sectionNames);
					if (numFooters > 1) {
						sectionData.sectionEndIndex += numFooters;
					}
					totalRowCount += numFooters;
					footer = this._view._inner[newIndex + (totalRowCount - 1)];
				}
				this._sectionMap.offsetSucceedingSectionsFromNewSection(sectionData, totalRowCount, totalRowCount);
				this.removeDuplicateHeaders(sectionData);
				if (sectionData.isSectionContentVisible) {
					this._sectionMap.incrementRowCount(sectionData, 1);
				}
				if (this.updateNotifier != null) {
					if (header != null) {
						this.updateNotifier.notifyInsertItem(newIndex, header);
					}
					if (footer != null) {
						this.updateNotifier.notifyInsertItem(newIndex + (totalRowCount - 1), footer);
					}
				}
			}
		}
	}
	private updateSummaryRowRepresentative(summaryRow: DataSourceSpecialRow): void {
		let summaryRowIndex = this._view.indexOf1(summaryRow);
		if (summaryRowIndex >= 0) {
			let row = this._view._inner[summaryRowIndex - 1];
			let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, row);
			let groupNames = this.getGroupNames();
			for (let j = 0; j < groupNames.length; j++) {
				if (specialRow == null) {
					summaryRow.setValue(groupNames[j], this.dataSource.getItemProperty(row, groupNames[j]));
				} else {
					summaryRow.setValue(groupNames[j], specialRow.getValue(groupNames[j]));
				}
			}
		}
	}
	private removeDuplicateHeaders(section: SectionData): void {
		let skip = false;
		let belongsToSection = false;
		if (section.sectionIndex > 0) {
			let aboveSection = this._sectionMap.sections._inner[section.sectionIndex - 1];
			let numShiftedSummaryRows = 0;
			for (let i: number = 0, offset: number = 0; i < section.sectionKeyNames.length; i++ , offset++) {
				if (!skip && Base.equalsStatic(aboveSection.sectionKeyValues[i], section.sectionKeyValues[i])) {
					this._view.removeAt(section.sectionStartIndex + offset);
					section.sectionEndIndex--;
					this._sectionMap.offsetSucceedingSections(section, -1, -1);
					if (this.includeSummaryRowsInSection && (this.summaryScope == DataSourceSummaryScope.Sections || this.summaryScope == DataSourceSummaryScope.Both)) {
						for (let j = 0; j < this._summaryRowCount; j++) {
							let rowAbove = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[section.sectionStartIndex - 1]);
							if (rowAbove != null && rowAbove.rowType == DataSourceRowType.SummaryRowSection && rowAbove.level == i + 1) {
								this._view.removeAt(section.sectionStartIndex - 1);
								aboveSection.sectionEndIndex--;
								this._sectionMap.offsetSucceedingSections(aboveSection, -1, -1);
								this._view.insert1(section.sectionEndIndex + 1, rowAbove);
								numShiftedSummaryRows++;
								this.updateSummaryRowRepresentative(rowAbove);
							}
						}
					}
					section.headerExpansionKeys[i] = null;
					section.headerOffsets[i] = 0;
					section.headerStates[i] = true;
					if (aboveSection.headerExpansionKeys[i] != null) {
						section.parentSection = aboveSection.sectionIndex;
					}
					offset--;
					belongsToSection = true;
				} else {
					skip = true;
					section.headerOffsets[i] = offset;
					if (numShiftedSummaryRows > 0) {
						section.sectionEndIndex += numShiftedSummaryRows;
						this._sectionMap.offsetSucceedingSections(section, numShiftedSummaryRows, numShiftedSummaryRows);
						section.summaryLocations[i] = section.sectionEndIndex - (numShiftedSummaryRows - 1);
					} else {
						section.summaryLocations[i] = section.sectionEndIndex + 1;
					}
				}
			}
			if (section.parentSection == -1 && belongsToSection) {
				section.parentSection = aboveSection.parentSection;
			}
		}
		if (section.sectionIndex < this._sectionMap.sections.count - 1) {
			skip = false;
			belongsToSection = false;
			let belowSection = this._sectionMap.sections._inner[section.sectionIndex + 1];
			for (let i1: number = 0, offset1: number = 0; i1 < section.sectionKeyNames.length; i1++ , offset1++) {
				if (!skip && Base.equalsStatic(belowSection.sectionKeyValues[i1], section.sectionKeyValues[i1])) {
					if (belowSection.headerExpansionKeys[i1] != null) {
						this._view.removeAt(belowSection.sectionStartIndex + offset1);
						belowSection.sectionEndIndex--;
						this._sectionMap.offsetSucceedingSections(belowSection, -1, -1);
						section.shiftSummaryLocationsFromLevel(i1, -1);
						section.summaryResults2[i1] = belowSection.summaryResults2[i1];
						section.rowCount[i1] = belowSection.rowCount[i1];
						if (this.includeSummaryRowsInSection && (this.summaryScope == DataSourceSummaryScope.Sections || this.summaryScope == DataSourceSummaryScope.Both)) {
							let summary = belowSection.summaryGroups[i1].summaries[0];
							let summaryIndex = this._view.indexOf1(summary);
							section.summaryLocations[i1] = summaryIndex;
							let sectionAt = this._sectionMap.getSection(summaryIndex);
							let summaryRowCount = belowSection.summaryGroups[i1].summaries.length;
							for (let j1 = 0; j1 < summaryRowCount; j1++) {
								belowSection.summaryGroups[i1].summaries[j1] = null;
								this._view.removeAt(summaryIndex);
								sectionAt.sectionEndIndex--;
								if (this.isSectionSummaryRowsAtBottom) {
									sectionAt.summaryBottomCount--;
								} else {
									sectionAt.summaryTopCount--;
								}
							}
							this._sectionMap.offsetSucceedingSections(sectionAt, -summaryRowCount, -summaryRowCount);
							section.shiftSummaryLocationsFromLevel(i1, -summaryRowCount);
						}
						belowSection.summaryLocations[i1] = -1;
						belowSection.rowCount[i1] = 0;
						belowSection.summaryResults2[i1] = null;
						belowSection.summaryGroups[i1] = null;
						belowSection.headerExpansionKeys[i1] = null;
						belowSection.headerOffsets[i1] = 0;
						belowSection.headerStates[i1] = true;
						belongsToSection = true;
					}
					offset1--;
				} else {
					skip = true;
					belowSection.headerOffsets[i1] = offset1;
					if (section.headerExpansionKeys[i1] != null && section.summaryLocations[i1] == -1) {
						section.summaryLocations[i1] = section.sectionEndIndex + 1;
					}
				}
			}
		}
	}
	private belongsInSection(section: SectionData, newItem: any, existingItem: any): boolean {
		if (this.groupDescriptions.all.count == 0) {
			return true;
		}
		if (this.groupComparer.compare(newItem, existingItem) == 0) {
			return true;
		}
		return false;
	}
	private getSectionValues(sectionNames: string[], newItem: any): any[] {
		let values: any[] = <any[]>new Array(sectionNames.length);
		for (let i = 0; i < values.length; i++) {
			values[i] = this.dataSource.getItemProperty(newItem, sectionNames[i]);
		}
		return values;
	}
	private itemsAreEqual(item1: any, item2: any): boolean {
		if (item1 == null && item2 == null) {
			return true;
		}
		if (item1 == null && item2 != null) {
			return false;
		}
		if (item1 != null && item2 == null) {
			return false;
		}
		return Base.equalsStatic(item1, item2);
	}
	private findUnsortedViewIndexForSourceIndex(index: number): number {
		if (this.groupDescriptions.all.count == 0 && this._pinnedKeys.count == 0 && this._filter == null && this._source.actualCount == this._view.count) {
			return index;
		}
		let sourceIndex: number = 0;
		let viewIndex: number = 0;
		let viewCount: number = this._view.count;
		while (sourceIndex < index && viewIndex < viewCount) {
			while (viewIndex < viewCount) {
				let viewItem = this._view._inner[viewIndex];
				let viewIsSpecial: boolean = false;
				let viewItem_ = viewItem;
				if (<boolean>(viewItem_.$$isSpecialRow !== undefined)) {
					viewIsSpecial = true;
				}
				if (!viewIsSpecial) {
					break;
				}
				viewIndex++;
			}
			let sourceItem = this._source.getItemAtIndex(sourceIndex);
			if (this.itemsAreEqual(sourceItem, this._view._inner[viewIndex])) {
				viewIndex++;
				sourceIndex++;
			} else {
				sourceIndex++;
			}
		}
		return viewIndex;
	}
	private removeOldFromUnsorted(index: number, oldItem: any): void {
		let viewIndex = this.findUnsortedViewIndexForSourceIndex(index);
		if (viewIndex < this._view.count) {
			if (this.itemsAreEqual(oldItem, this._view._inner[viewIndex])) {
				this.onRemoveItem(viewIndex, oldItem);
			}
		}
	}
	private onRemoveItem(oldIndex: number, oldItem: any): void {
		this._view.removeAt(oldIndex);
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyRemoveItem(oldIndex, oldItem);
		}
		let section = this.updateSectionsOnRemoval(oldIndex, oldItem);
		this.updateSummariesOnRemoval(oldIndex, oldItem, section);
	}
	private updateSectionsOnRemoval(oldIndex: number, oldItem: any): SectionData {
		let section: SectionData = null;
		if (this._hasSections) {
			section = this._sectionMap.getSection(oldIndex);
		} else {
			section = this._sectionMap.sections._inner[0];
		}
		if (section != null) {
			this._sectionMap.incrementRowCount(section, -1);
			if (section.isSectionContentVisible) {
				section.sectionEndIndex--;
				this._sectionMap.offsetSucceedingSections(section, -1, 0);
				if (this.shouldEmitShiftedRows) {
					for (let i = 0; i < section.pinnedCount; i++) {
						let skip = 0;
						if (this.shouldEmitSectionHeaders) {
							skip = 1;
						}
						skip += section.summaryTopCount;
						let item = this._view._inner[section.sectionStartIndex + i + skip];
						let specialItem: DataSourceSpecialRow = null;
						let item_ = item;
						if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
							specialItem = (<DataSourceSpecialRow>item);
						}
						if (specialItem != null) {
							if (specialItem.targetRow == oldItem) {
								this._view.removeAt(section.sectionStartIndex + i + skip);
								section.sectionEndIndex--;
								section.pinnedCount--;
								section.firstRowDisplacement--;
								this._sectionMap.offsetSucceedingSections(section, -1, -1);
								if (this.updateNotifier != null) {
									this.updateNotifier.notifyRemoveItem(section.sectionStartIndex + i + skip, specialItem);
								}
							}
						}
					}
				}
			}
			if (this._hasSections && !section.hasRows() && this.containsOnlySpecial(section)) {
				let specialRemoved: number = 0;
				if (this._sectionMap.hasChildren(section)) {
					let sectionLevel = section.getLevel();
					let adjustedLevel = sectionLevel;
					let numLevels = this.groupDescriptions.all.count;
					let sectionNames = this.getSectionNames();
					let child = this._sectionMap.sections._inner[section.sectionIndex + 1];
					for (let i1 = 0; i1 < section.sectionKeyValues.length; i1++) {
						if (!Base.equalsStatic(section.sectionKeyValues[i1], child.sectionKeyValues[i1])) {
							adjustedLevel = i1;
							break;
						}
					}
					if (this.shouldEmitSectionHeaders) {
						if (section.headerStates[adjustedLevel - 1]) {
							for (let i2 = adjustedLevel; i2 < numLevels; i2++) {
								if (section.summaryGroups[i2] != null) {
									for (let j = 0; j < section.summaryGroups[i2].summaries.length; j++) {
										let summaryRow = section.summaryGroups[i2].summaries[j];
										if (summaryRow != null) {
											let summaryIndex = this._view.indexOf1(summaryRow);
											if (summaryIndex >= 0) {
												this._view.removeAt(summaryIndex);
												section.sectionEndIndex--;
												specialRemoved++;
												if (this.updateNotifier != null) {
													this.updateNotifier.notifyRemoveItem(summaryIndex, summaryRow);
												}
												if (!this.isSectionSummaryRowsAtBottom) {
													for (let k = i2 + 1; k < section.headerOffsets.length; k++) {
														section.headerOffsets[k]--;
													}
												}
											}
										}
									}
								}
								let headerIndex = section.sectionStartIndex + section.headerOffsets[i2];
								let header = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[headerIndex]);
								if (header != null && header.rowType == DataSourceRowType.SectionHeader) {
									section.headerExpansionKeys[i2] = null;
									this._view.removeAt(headerIndex);
									section.sectionEndIndex--;
									specialRemoved++;
									if (this.updateNotifier != null) {
										this.updateNotifier.notifyRemoveItem(headerIndex, header);
									}
									for (let k1 = i2 + 1; k1 < section.headerOffsets.length; k1++) {
										section.headerOffsets[k1]--;
									}
								}
								if (!section.headerStates[i2]) {
									break;
								}
							}
						}
					}
					section.syncSection = child;
					for (let i3 = 0; i3 < adjustedLevel; i3++) {
						if (this.includeSummaryRowsInSection && !this.isSectionSummaryRowsAtBottom && (this.summaryScope == DataSourceSummaryScope.Sections || this.summaryScope == DataSourceSummaryScope.Both)) {
							child.sectionStartIndex -= this.shouldEmitSectionHeaders ? this._summaryRowCount + 1 : this._summaryRowCount;
						} else if (this.shouldEmitSectionHeaders) {
							child.sectionStartIndex--;
						}
					}
					child.rowCount[sectionLevel] = section.rowCount[sectionLevel];
					child.headerExpansionKeys[sectionLevel] = section.headerExpansionKeys[sectionLevel];
					child.headerStates[sectionLevel] = section.headerStates[sectionLevel];
					child.parentSection = section.parentSection;
					for (let i4 = sectionLevel; i4 < numLevels; i4++) {
						child.summaryGroups[i4] = section.summaryGroups[i4];
					}
					child.headerOffsets[sectionLevel] = section.headerOffsets[sectionLevel];
					for (let i5: number = sectionLevel, offset: number = section.headerOffsets[sectionLevel]; i5 < numLevels; i5++) {
						child.headerOffsets[i5] = offset;
						if (this.shouldEmitSectionHeaders) {
							offset++;
						}
						if (!this.isSectionSummaryRowsAtBottom) {
							if (child.summaryGroups[i5] != null) {
								offset += child.summaryGroups[i5].summaries.length;
							}
						}
						let headerIndex1 = child.sectionStartIndex - specialRemoved + child.headerOffsets[i5];
						let headerRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[headerIndex1]);
						if (headerRow != null && headerRow.rowType == DataSourceRowType.SectionHeader) {
							for (let j1 = 0; j1 < child.sectionKeyValues.length; j1++) {
								headerRow.setValue(child.sectionKeyNames[j1], child.sectionKeyValues[j1]);
							}
						}
					}
				} else {
					if (this.shouldEmitSectionHeaders) {
						for (let i6 = section.sectionStartIndex; i6 <= section.sectionEndIndex; i6++) {
							let header1 = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[i6]);
							if (header1 != null && header1.rowType == DataSourceRowType.SectionHeader) {
								this._view.removeAt(i6);
								section.sectionEndIndex--;
								specialRemoved++;
								i6--;
								if (this.updateNotifier != null) {
									this.updateNotifier.notifyRemoveItem(i6, header1);
								}
							}
						}
					}
					for (let i7 = 0; i7 < section.summaryGroups.length; i7++) {
						if (section.summaryGroups[i7] == null) {
							continue;
						}
						for (let j2 = 0; j2 < section.summaryGroups[i7].summaries.length; j2++) {
							let summaryRow1 = section.summaryGroups[i7].summaries[j2];
							if (summaryRow1 != null) {
								let summaryIndex1 = this._view.indexOf1(summaryRow1);
								this._view.removeAt(summaryIndex1);
								section.sectionEndIndex--;
								specialRemoved++;
								if (this.updateNotifier != null) {
									this.updateNotifier.notifyRemoveItem(summaryIndex1, summaryRow1);
								}
							}
						}
					}
					if (section.parentSection >= 0) {
						let remainingRows = section.sectionEndIndex - section.sectionStartIndex + 1;
						if (remainingRows > 0) {
							let row = this._view._inner[section.sectionStartIndex - 1];
							let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, row);
							let groupNames = this.getGroupNames();
							for (let i8 = 0; i8 < remainingRows; i8++) {
								let index = section.sectionStartIndex + i8;
								let summaryRow2 = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[index]);
								if (summaryRow2 != null) {
									for (let j3 = 0; j3 < groupNames.length; j3++) {
										if (specialRow == null) {
											summaryRow2.setValue(groupNames[j3], this.dataSource.getItemProperty(row, groupNames[j3]));
										} else {
											summaryRow2.setValue(groupNames[j3], specialRow.getValue(groupNames[j3]));
										}
									}
								}
							}
							let previousSection = this._sectionMap.sections._inner[section.sectionIndex - 1];
							previousSection.sectionEndIndex += remainingRows;
						}
					}
				}
				if (this.shouldEmitSectionFooters) {
					for (let i9 = 0; i9 < section.headerExpansionKeys.length; i9++) {
						if (!section.headerStates[i9]) {
							break;
						}
						if (section.headerExpansionKeys[i9] != null) {
							let footer = this._view._inner[section.sectionEndIndex];
							this._view.removeAt(section.sectionEndIndex);
							if (this.updateNotifier != null) {
								this.updateNotifier.notifyRemoveItem(section.sectionEndIndex, footer);
							}
							specialRemoved++;
							section.sectionEndIndex--;
						}
					}
				}
				this._sectionMap.removeSection(section.sectionIndex);
				this._sectionMap.offsetSucceedingFromRemovedSection(section, -specialRemoved, -specialRemoved);
				section.isRemoved = true;
			}
		}
		return section;
	}
	private containsOnlySpecial(section: SectionData): boolean {
		for (let i = section.sectionStartIndex; i <= section.sectionEndIndex; i++) {
			if (this.dataSource.getRowType(i) == DataSourceRowType.Normal) {
				return false;
			}
		}
		return true;
	}
	private addNewToSorted(newItem: any): void {
		if (this.shouldShow(newItem)) {
			let newIndex: number = this._view.binarySearch1(newItem, this._sortComparer);
			if (newIndex < 0) {
				newIndex = ~newIndex;
			}
			this.onInsertItem(newIndex, newItem);
		}
	}
	private _pinnedKeys: List$1<any[]> = new List$1<any[]>(Array_$type, 0);
	pinRow(key: any[]): void {
		this._pinnedKeys.add(key);
		let index = this.dataSource.indexOfKey(key);
		let item = this.dataSource.getItemAtIndex(index);
		if (index == -1) {
			return;
		}
		if (this.shouldEmitShiftedRows) {
			let section = this._sectionMap.getSection(index);
			let inserted = this.injectSortedShiftedRow(section, this._view._inner[index]);
			if (this.updateNotifier != null) {
				this.updateNotifier.notifyInsertItem(inserted, this._view._inner[inserted]);
			}
		}
	}
	unpinRow(key: any[]): void {
		if (this._pinnedKeys.remove(key)) {
			let index = this.dataSource.indexOfKey(key);
			let item = this.dataSource.getItemAtIndex(index);
			if (index == -1) {
				return;
			}
			let section = this._sectionMap.getSection(index);
			let startIndex = section.sectionStartIndex;
			if (this.shouldEmitSectionHeaders) {
				startIndex += section.getHeaderCount();
			}
			if (this.shouldEmitShiftedRows) {
				let removedInfo = this.removeShiftedRow(startIndex, this._view._inner[index], section.pinnedCount, this.getGroupNames());
				if (removedInfo != null) {
					section.sectionEndIndex--;
					section.pinnedCount--;
					section.firstRowDisplacement--;
					this._sectionMap.offsetSucceedingSections(section, -1, -1);
					if (this.updateNotifier != null) {
						this.updateNotifier.notifyRemoveItem(removedInfo.index, removedInfo.item);
					}
				}
			}
		}
	}
	private removeShiftedRow(pinnedStart: number, actualItem: any, pinnedCount: number, groupNames: string[]): RemovedShiftedRowInfo {
		for (let i = pinnedStart + (pinnedCount - 1); i >= pinnedStart; i--) {
			if (typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[i]) !== null) {
				let special = <DataSourceSpecialRow>this._view._inner[i];
				if (special.rowType == DataSourceRowType.ShiftedRow) {
					let target = special.targetRow;
					if (target == actualItem) {
						this._view.removeAt(i);
						return ((() => {
							let $ret = new RemovedShiftedRowInfo();
							$ret.item = special;
							$ret.index = i;
							return $ret;
						})());
					}
				}
			}
		}
		return null;
	}
	private removeOldFromSorted(oldItem: any): void {
		let oldIndex: number = this._view.binarySearch1(oldItem, this._sortComparer);
		if (oldIndex < 0) {
			oldIndex = ~oldIndex;
		}
		if (oldIndex >= 0) {
			let count = this._view.count;
			let dist = 0;
			while (dist < count) {
				let prev = oldIndex - dist;
				let next = oldIndex + dist;
				if (prev < 0 && next > count - 1) {
					break;
				}
				if (prev >= 0 && prev < count) {
					if (this._view._inner[prev] != null && Base.equalsStatic(this._view._inner[prev], oldItem)) {
						oldIndex = prev;
						break;
					}
				}
				if (next < count) {
					if (this._view._inner[next] != null && Base.equalsStatic(this._view._inner[next], oldItem)) {
						oldIndex = next;
						break;
					}
				}
				dist++;
			}
			if (oldIndex < 0 || oldIndex > count - 1) {
				return;
			}
			let removeItem = this._view._inner[oldIndex];
			if (removeItem == null && oldItem == null) {
				this._view.removeAt(oldIndex);
				this._updateNotifier.notifyRemoveItem(oldIndex, oldItem);
				let section = this.updateSectionsOnRemoval(oldIndex, oldItem);
				this.updateSummaries(oldIndex, oldItem, false, section);
				return;
			}
			if (removeItem == null) {
				return;
			}
			if (Base.equalsStatic(removeItem, oldItem)) {
				this._view.removeAt(oldIndex);
				this._updateNotifier.notifyRemoveItem(oldIndex, oldItem);
				let section1 = this.updateSectionsOnRemoval(oldIndex, oldItem);
				this.updateSummaries(oldIndex, oldItem, false, section1);
			} else {
				if (oldIndex - 1 >= 0) {
					let section2 = this._sectionMap.getSection(oldIndex - 1);
					if (section2 != null && !section2.isSectionContentVisible) {
						oldIndex = oldIndex - 1;
					}
				}
				this.updateSectionsOnRemoval(oldIndex, oldItem);
			}
		} else {
			let count1 = this._view.count;
			for (let i = 0; i < count1; i++) {
				let removeItem1 = this._view._inner[i];
				if (removeItem1 == null && oldItem == null) {
					this._view.removeAt(i);
					break;
				}
				if (removeItem1 == null) {
					continue;
				}
				if (Base.equalsStatic(removeItem1, oldItem)) {
					this._view.removeAt(i);
					this._updateNotifier.notifyRemoveItem(i, oldItem);
					let section3 = this.updateSectionsOnRemoval(i, oldItem);
					this.updateSummariesOnRemoval(i, oldItem, section3);
					break;
				}
			}
		}
	}
	private shouldShow(item: any): boolean {
		if (this._filter == null) {
			return true;
		}
		return this._filter(item);
	}
	notifyClearItems(): void {
	}
	notifyInsertItem(index: number, newItem: any): void {
		if (this._sortComparer != null) {
			this.addNewToSorted(newItem);
		} else {
			this.addNewToUnsorted(index, newItem);
		}
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		if (this._sortComparer != null) {
			this.removeOldFromSorted(oldItem);
		} else {
			this.removeOldFromUnsorted(index, oldItem);
		}
	}
	private _expansionStates: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
	setIsRowExpandedAtIndex(rowIndex: number, state: boolean): void {
		let section = this._sectionMap.getSection(rowIndex);
		if (section == null) {
			section = this._sectionMap.getLastSection();
		}
		for (let i: number = 0, offset: number = 0; i < section.headerExpansionKeys.length; i++) {
			if (section.headerExpansionKeys[i] != null) {
				if (rowIndex == section.sectionStartIndex + section.headerOffsets[i]) {
					let key = section.headerExpansionKeys[i];
					if (this._expansionStates.containsKey(key)) {
						if (this._expansionStates.item(key) != state) {
							let oldState = this._expansionStates.item(key);
							if (state == this.isSectionExpandedDefault) {
								this._expansionStates.removeItem(key);
							} else {
								this._expansionStates.item(key, state);
							}
							this.dataSource.queueAutoRefresh();
							if (this.expansionNotifier != null) {
								this.expansionNotifier.notifyRowExpansionChanged(rowIndex, oldState, state);
							}
						}
					} else if (state != this.isSectionExpandedDefault) {
						this._expansionStates.addItem(key, state);
						this.dataSource.queueAutoRefresh();
						if (this.expansionNotifier != null) {
							this.expansionNotifier.notifyRowExpansionChanged(rowIndex, this.isSectionExpandedDefault, state);
						}
					}
				}
				offset++;
			}
		}
	}
	getExpansionStateForRow(rowIndex: number): boolean {
		let section = this._sectionMap.getSection(rowIndex);
		if (section == null) {
			section = this._sectionMap.getLastSection();
		}
		for (let i: number = 0, offset: number = 0; i < section.headerExpansionKeys.length; i++) {
			if (section.headerExpansionKeys[i] != null) {
				if (rowIndex == section.sectionStartIndex + section.headerOffsets[i]) {
					return section.headerStates[i];
				}
				offset++;
			}
		}
		return true;
	}
	private getSectionExpansionState(sectionKey: string): boolean {
		if (!this.isSectionCollapsable) {
			return true;
		}
		return this._expansionStates.containsKey(sectionKey) ? this._expansionStates.item(sectionKey) : this.isSectionExpandedDefault;
	}
	private combineSectionKeysAndValues(section: SectionData): string {
		let key: string = "";
		for (let i = 0; i < section.sectionKeyNames.length; i++) {
			key += section.sectionKeyNames[i] + ":" + section.sectionKeyValues[i];
		}
		return key;
	}
	private combineSectionKeysAndValues1(section: SectionData, level: number): string {
		if (this.dataSource.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Combined) {
			return this.combineSectionKeysAndValues(section);
		}
		let key: string = "";
		for (let i = 0; i < level + 1; i++) {
			key += section.sectionKeyNames[i] + ":" + section.sectionKeyValues[i] + ":";
		}
		return key;
	}
	private beginSummaries(section: SectionData): void {
		if (this.summaryScope == DataSourceSummaryScope.None || (section != null && this.summaryScope == DataSourceSummaryScope.Root) || (section == null && this.summaryScope == DataSourceSummaryScope.Sections)) {
			return;
		}
		if (section == null && (this._summaryResults == null || this._summaryResults.length != this.summaryDescriptions.all.count)) {
			this._summaryResults = <ISummaryResult[]>new Array(this.summaryDescriptions.all.count);
		}
		if (section != null) {
			let headerCount = section.getHeaderCount();
			for (let i = headerCount - 1; i >= 0; i--) {
				for (let j = 0; j < this.summaryDescriptions.all.count; j++) {
					let summary = this.summaryDescriptions.all.item(j);
					this._previousSummaryCalculators[i][j].beginCalculation(this.dataSource, summary.propertyName);
				}
			}
		} else {
			if (this._rootSummaryCalculators == null || this._rootSummaryCalculators.length != this.summaryDescriptions.all.count) {
				this._rootSummaryCalculators = <SummaryCalculator[]>new Array(this.summaryDescriptions.all.count);
			}
			for (let i1 = 0; i1 < this.summaryDescriptions.all.count; i1++) {
				let summary1 = this.summaryDescriptions.all.item(i1);
				if (this._rootSummaryCalculators[i1] == null || this._rootSummaryCalculators[i1].operand != summary1.operand) {
					this._rootSummaryCalculators[i1] = summary1.getCalculator();
				}
				this._rootSummaryCalculators[i1].beginCalculation(this.dataSource, summary1.propertyName);
			}
		}
	}
	private endSummaries(section: SectionData): void {
		if (this.summaryScope == DataSourceSummaryScope.None || (section != null && this.summaryScope == DataSourceSummaryScope.Root) || (section == null && this.summaryScope == DataSourceSummaryScope.Sections)) {
			return;
		}
		if (section != null) {
			let headerCount = section.getHeaderCount();
			for (let i = headerCount - 1; i >= 0; i--) {
				let specialRow: DataSourceSpecialRow = <DataSourceSpecialRow>this._view._inner[section.sectionStartIndex + i];
				for (let j = 0; j < this.summaryDescriptions.all.count; j++) {
					let summary = this.summaryDescriptions.all.item(j);
					let summaryResult = this._previousSummaryCalculators[i][j].endCalculation();
					summaryResult.summaryIndex = j;
					if (specialRow != null) {
						specialRow.summaryResults[i] = summaryResult;
					}
				}
			}
		} else {
			for (let i1 = 0; i1 < this.summaryDescriptions.all.count; i1++) {
				let summaryResult1 = this._rootSummaryCalculators[i1].endCalculation();
				summaryResult1.summaryIndex = i1;
				this._summaryResults[i1] = summaryResult1;
			}
		}
	}
	private aggregateItem(section: SectionData, item: any): void {
		if (this.summaryScope == DataSourceSummaryScope.None || (section != null && this.summaryScope == DataSourceSummaryScope.Root) || (section == null && this.summaryScope == DataSourceSummaryScope.Sections)) {
			return;
		}
		if (item != null) {
			if (section != null) {
				for (let i = 0; i < this._previousSummaryCalculators.length; i++) {
					if (this._previousSummaryCalculators[i] != null) {
						for (let j = 0; j < this._previousSummaryCalculators[i].length; j++) {
							if (this._previousSummaryCalculators[i][j] != null) {
								this._previousSummaryCalculators[i][j].aggregate(item);
							}
						}
					}
				}
			} else {
				for (let i1 = 0; i1 < this.summaryDescriptions.all.count; i1++) {
					this._rootSummaryCalculators[i1].aggregate(item);
				}
			}
		}
	}
	private updateSectionSummaryOnInsert(section: SectionData, calculator: SummaryCalculator, newItem: any, level: number, summaryIndex: number): void {
		let previousResult: ISummaryResult = section.summaryResults2[level][summaryIndex];
		let updatedResult = calculator.itemAdded(newItem, previousResult, section.rowCount[level]);
		section.updateSummary(level, summaryIndex, updatedResult);
		if (this.shouldEmitSectionHeaders) {
			if (section.headerExpansionKeys[level] != null) {
				let header = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[section.sectionStartIndex + section.headerOffsets[level]]);
				if (header != null) {
					header.summaryResults[summaryIndex] = section.summaryResults2[level][summaryIndex];
				}
			}
		}
	}
	private updateSectionSummary(section: SectionData, calculator: SummaryCalculator, item: any, level: number, summaryIndex: number, insert: boolean): void {
		let previousResult: ISummaryResult = section.summaryResults2[level][summaryIndex];
		let sectionRowCount: number = section.rowCount[level];
		let updatedResult = insert ? calculator.itemAdded(item, previousResult, sectionRowCount) : calculator.itemRemoved(item, previousResult, sectionRowCount);
		section.updateSummary(level, summaryIndex, updatedResult);
		if (this.shouldEmitSectionHeaders) {
			if (!section.isRemoved && section.headerExpansionKeys[level] != null) {
				let header = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[section.sectionStartIndex + section.headerOffsets[level]]);
				if (header != null) {
					header.summaryResults[summaryIndex] = section.summaryResults2[level][summaryIndex];
				}
			}
		}
	}
	private updateSummaries(index: number, item: any, insert: boolean, section: SectionData): void {
		if (this.summaryDescriptions.all.count == 0) {
			return;
		}
		if (section == null) {
			section = this.getSection(index);
			if (section == null) {
				section = this._sectionMap.getLastSection();
			}
		}
		let summariesRequireRefresh: boolean = false;
		let rootSummaryRowsNeedUpdate: boolean = false;
		let sectionSummaryRowsNeedUpdate: boolean = false;
		for (let i = 0; i < this.summaryDescriptions.all.count; i++) {
			let summary = this.summaryDescriptions.all.item(i);
			if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Root) {
				let updatedSummaryResult: ISummaryResult = null;
				if (insert) {
					updatedSummaryResult = this._rootSummaryCalculators[i].itemAdded(item, this._summaryResults[i], this._source.actualCount);
				} else {
					updatedSummaryResult = this._rootSummaryCalculators[i].itemRemoved(item, this._summaryResults[i], this._source.actualCount);
				}
				updatedSummaryResult.summaryIndex = i;
				this._summaryResults[i] = updatedSummaryResult;
				if (this._rootSummaryCalculators[i].isSummaryDirty) {
					summariesRequireRefresh = true;
				} else {
					rootSummaryRowsNeedUpdate = true;
				}
			}
			if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Sections) {
				if (section != null && section.summaryResults2 != null) {
					let calculator = summary.getCalculator();
					calculator.dataSource = this.dataSource;
					calculator.propertyName = summary.propertyName;
					calculator.propertyType = this.dataSource.resolveSchemaPropertyType(summary.propertyName);
					let sectionNames = this.getSectionNames();
					let level = section.getLevel();
					for (let j = level; j < sectionNames.length; j++) {
						this.updateSectionSummary(section, calculator, item, j, i, insert);
						if (calculator.isSummaryDirty) {
							summariesRequireRefresh = true;
						}
						sectionSummaryRowsNeedUpdate = true;
					}
					let parentSectionIndex = section.parentSection;
					while (parentSectionIndex != -1) {
						let parent = this._sectionMap.sections._inner[parentSectionIndex];
						let parentLevel = parent.getLevel();
						for (let j1 = parentLevel; j1 < level; j1++) {
							this.updateSectionSummary(parent, calculator, item, j1, i, insert);
							if (calculator.isSummaryDirty) {
								summariesRequireRefresh = true;
							}
						}
						parentSectionIndex = parent.parentSection;
						level = level - 1;
					}
				}
			}
		}
		if (summariesRequireRefresh) {
			this.dataSource.queueAutoRefresh();
		} else {
			if (rootSummaryRowsNeedUpdate) {
				let summaryRows = SectionData.getSummaryRowsFromResults(this._summaryResults);
				this.updateRootSummaryResult(summaryRows);
			}
			if (sectionSummaryRowsNeedUpdate) {
				this.updateSectionSummaryResult(section, null);
				let parentSectionIndex1 = section.parentSection;
				while (parentSectionIndex1 != -1) {
					let parent1 = this._sectionMap.sections._inner[parentSectionIndex1];
					this.updateSectionSummaryResult(parent1, null);
					parentSectionIndex1 = parent1.parentSection;
				}
			}
		}
	}
	private updateSummariesOnInsert(newIndex: number, newItem: any): void {
		if (this.summaryDescriptions.all.count == 0) {
			return;
		}
		let section = this.getSection(newIndex);
		if (section == null) {
			section = this._sectionMap.getLastSection();
		}
		let sectionHeaderRow: DataSourceSpecialRow = null;
		if (section != null) {
			sectionHeaderRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[section.sectionStartIndex]);
		}
		let summariesRequireRefresh: boolean = false;
		let rootSummaryRowsNeedUpdate: boolean = false;
		let sectionSummaryRowsNeedUpdate: boolean = false;
		for (let i = 0; i < this.summaryDescriptions.all.count; i++) {
			let summary = this.summaryDescriptions.all.item(i);
			if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Root) {
				let updatedSummaryResult = this._rootSummaryCalculators[i].itemAdded(newItem, this._summaryResults[i], this._source.actualCount);
				updatedSummaryResult.summaryIndex = i;
				this._summaryResults[i] = updatedSummaryResult;
				if (this._rootSummaryCalculators[i].isSummaryDirty) {
					summariesRequireRefresh = true;
				} else {
					rootSummaryRowsNeedUpdate = true;
				}
			}
			if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Sections) {
				if (section != null && section.summaryResults2 != null) {
					let calculator = summary.getCalculator();
					calculator.dataSource = this.dataSource;
					calculator.propertyName = summary.propertyName;
					calculator.propertyType = this.dataSource.resolveSchemaPropertyType(summary.propertyName);
					let sectionNames = this.getSectionNames();
					let level = section.getLevel();
					for (let j = level; j < sectionNames.length; j++) {
						this.updateSectionSummaryOnInsert(section, calculator, newItem, j, i);
						if (calculator.isSummaryDirty) {
							summariesRequireRefresh = true;
						}
						sectionSummaryRowsNeedUpdate = true;
					}
					let parentSectionIndex = section.parentSection;
					while (parentSectionIndex != -1) {
						let parent = this._sectionMap.sections._inner[parentSectionIndex];
						let parentLevel = parent.getLevel();
						for (let j1 = parentLevel; j1 < level; j1++) {
							this.updateSectionSummaryOnInsert(parent, calculator, newItem, j1, i);
							if (calculator.isSummaryDirty) {
								summariesRequireRefresh = true;
							}
						}
						parentSectionIndex = parent.parentSection;
						level = level - 1;
					}
				}
			}
		}
		if (summariesRequireRefresh) {
			this.dataSource.queueAutoRefresh();
		} else {
			if (rootSummaryRowsNeedUpdate) {
				let summaryRows = SectionData.getSummaryRowsFromResults(this._summaryResults);
				this.updateRootSummaryResult(summaryRows);
			}
			if (sectionSummaryRowsNeedUpdate) {
				this.updateSectionSummaryResult(section, null);
				let parentSectionIndex1 = section.parentSection;
				while (parentSectionIndex1 != -1) {
					let parent1 = this._sectionMap.sections._inner[parentSectionIndex1];
					this.updateSectionSummaryResult(parent1, null);
					parentSectionIndex1 = parent1.parentSection;
				}
			}
		}
	}
	private updateSummariesOnRemoval(oldIndex: number, oldItem: any, section: SectionData): void {
		if (this.summaryDescriptions.all.count == 0) {
			return;
		}
		let sectionHeaderRow: DataSourceSpecialRow = null;
		if (section != null) {
			sectionHeaderRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[section.sectionStartIndex]);
		}
		let summariesRequireRefresh: boolean = false;
		let rootSummaryRowsNeedUpdate: boolean = false;
		let sectionSummaryRowsNeedUpdate: boolean = false;
		for (let i = 0; i < this.summaryDescriptions.all.count; i++) {
			let summary = this.summaryDescriptions.all.item(i);
			if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Root) {
				let updatedSummaryResult = this._rootSummaryCalculators[i].itemRemoved(oldItem, this._summaryResults[i], this.dataSource.actualCount);
				updatedSummaryResult.summaryIndex = i;
				this._summaryResults[i] = updatedSummaryResult;
				if (this._rootSummaryCalculators[i].isSummaryDirty) {
					summariesRequireRefresh = true;
				} else {
					rootSummaryRowsNeedUpdate = true;
				}
			}
			if (this.summaryScope == DataSourceSummaryScope.Both || this.summaryScope == DataSourceSummaryScope.Sections) {
				if (section != null && section.summaryResults2 != null) {
					let calculator = summary.getCalculator();
					calculator.dataSource = this.dataSource;
					calculator.propertyName = summary.propertyName;
					calculator.propertyType = this.dataSource.resolveSchemaPropertyType(summary.propertyName);
					let sectionNames = this.getSectionNames();
					let level = section.getLevel();
					for (let j = level; j < sectionNames.length; j++) {
						this.updateSectionSummary(section, calculator, oldItem, j, i, false);
						if (calculator.isSummaryDirty) {
							summariesRequireRefresh = true;
						}
						sectionSummaryRowsNeedUpdate = true;
					}
					let parentSectionIndex = section.parentSection;
					while (parentSectionIndex != -1) {
						let parent = this._sectionMap.sections._inner[parentSectionIndex];
						let parentLevel = parent.getLevel();
						for (let j1 = parentLevel; j1 < level; j1++) {
							this.updateSectionSummary(parent, calculator, oldItem, j1, i, false);
							if (calculator.isSummaryDirty) {
								summariesRequireRefresh = true;
							}
						}
						parentSectionIndex = parent.parentSection;
						level = level - 1;
					}
				}
			}
		}
		if (summariesRequireRefresh) {
			this.dataSource.queueAutoRefresh();
		} else {
			if (rootSummaryRowsNeedUpdate) {
				let summaryRows = SectionData.getSummaryRowsFromResults(this._summaryResults);
				this.updateRootSummaryResult(summaryRows);
			}
			if (sectionSummaryRowsNeedUpdate) {
				this.updateSectionSummaryResult(section, null);
				let parentSectionIndex1 = section.parentSection;
				while (parentSectionIndex1 != -1) {
					let parent1 = this._sectionMap.sections._inner[parentSectionIndex1];
					this.updateSectionSummaryResult(parent1, null);
					parentSectionIndex1 = parent1.parentSection;
				}
			}
		}
	}
	private updateSectionSummaryResult(section: SectionData, sectionSummaryRows: List$1<Dictionary$2<string, ISummaryResult>>): void {
		if (this.summaryScope == DataSourceSummaryScope.Sections || this.summaryScope == DataSourceSummaryScope.Both) {
			if (this.includeSummaryRowsInSection) {
				if (!section.isRemoved && !section.hasSummaries()) {
					if (this.isSectionSummaryRowsAtBottom) {
						this.injectSectionSummariesBottom(section, true);
					} else {
						this.injectSectionSummariesTop(section, true);
					}
				} else {
					section.syncSummaryRows((row: DataSourceSpecialRow) => {
						if (this.updateNotifier != null) {
							let rowIndex = this._view.indexOf1(row);
							this.updateNotifier.notifySetItem(rowIndex, row, row);
						}
					});
				}
			} else {
				for (let j = 0; j < section.summaryResults2.length; j++) {
					let index = section.sectionStartIndex + section.headerOffsets[j];
					let headerRow: DataSourceSpecialRow = <DataSourceSpecialRow>this._view._inner[index];
					if (headerRow != null) {
						headerRow.summaryResults = section.summaryResults2[j];
						if (this.updateNotifier != null) {
							this.updateNotifier.notifySetItem(index, headerRow, headerRow);
						}
					}
				}
			}
		}
	}
	private updateRootSummaryResult(summaryRows: List$1<Dictionary$2<string, ISummaryResult>>): void {
		for (let i = 0; i < summaryRows.count; i++) {
			let updatedResults: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows._inner[i].count);
			summaryRows._inner[i].values.copyTo(updatedResults, 0);
			let updatedIndex = this._view.count - summaryRows.count + i;
			let summaryRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._view._inner[updatedIndex]);
			summaryRow.summaryResults = updatedResults;
			if (this.updateNotifier != null) {
				this.updateNotifier.notifySetItem(updatedIndex, summaryRow, summaryRow);
			}
		}
	}
}


