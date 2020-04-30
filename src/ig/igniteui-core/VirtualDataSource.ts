/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BaseDataSource } from "./BaseDataSource";
import { IPageCandidatesSink, IPageCandidatesSink_$type } from "./IPageCandidatesSink";
import { PagePredictionEngine } from "./PagePredictionEngine";
import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { IDataSourceVirtualDataProvider } from "./IDataSourceVirtualDataProvider";
import { IExternalDataSource } from "./IExternalDataSource";
import { IExternalVirtualDataSource } from "./IExternalVirtualDataSource";
import { LRUCache$2 } from "./LRUCache$2";
import { Base, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, runOn, Array_$type, Number_$type, typeCast, fromEnum, typeGetValue, String_$type, Boolean_$type, Type, markType } from "./type";
import { IDataSourcePage, IDataSourcePage_$type } from "./IDataSourcePage";
import { Dictionary$2 } from "./Dictionary$2";
import { SectionMap } from "./SectionMap";
import { DataSourceExecutionContext } from "./DataSourceExecutionContext";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { SectionData } from "./SectionData";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { ISummaryResult } from "./ISummaryResult";
import { ISectionInformation } from "./ISectionInformation";
import { List$1 } from "./List$1";
import { SummaryDescriptionCollection } from "./SummaryDescriptionCollection";
import { SummaryDescription } from "./SummaryDescription";
import { DataSourceSectionHeaderDisplayMode } from "./DataSourceSectionHeaderDisplayMode";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { SortDescription } from "./SortDescription";
import { IDataSourceUpdateNotifier } from "./IDataSourceUpdateNotifier";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { DataSourceRowType } from "./DataSourceRowType";
import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
import { LRUCacheItem$2 } from "./LRUCacheItem$2";
import { DataSourcePropertiesComparer } from "./DataSourcePropertiesComparer";
import { ListSortDirection } from "./ListSortDirection";
import { IDataSource } from "./IDataSource";
import { truncate, intDivide } from "./number";

/**
 * @hidden 
 */
export class VirtualDataSource extends BaseDataSource implements IPageCandidatesSink {
	static $t: Type = markType(VirtualDataSource, 'VirtualDataSource', (<any>BaseDataSource).$type, [IPageCandidatesSink_$type]);
	constructor() {
		super();
		this.predictionEngine = new PagePredictionEngine();
		this.predictionEngine.pageCandidatesSink = this;
		this.predictionEngine.pageSize = this.actualPageSize;
		this.predictionEngine.sectionMap = this._sectionMap;
		this.executionContext = new DataSourceExecutionContext();
		this.predictionEngine.executionContext = this.executionContext;
	}
	private _schemaComparables1: boolean[] = null;
	private _expansionStateChanged: boolean = false;
	private _rootSummaryRowCount: number = 0;
	protected get_isSectionCollapsable(): boolean {
		if (!this.isSectionContentVisible) {
			return true;
		}
		return super.get_isSectionCollapsable();
	}
	protected set_isSectionCollapsable(value: boolean): void {
		super.set_isSectionCollapsable(value);
	}
	protected get_isSectionExpandedDefault(): boolean {
		if (!this.isSectionContentVisible) {
			return false;
		}
		if (this.isSectionCollapsable) {
			return super.get_isSectionExpandedDefault();
		}
		return true;
	}
	protected set_isSectionExpandedDefault(value: boolean): void {
		super.set_isSectionExpandedDefault(value);
	}
	private _predictionEngine: PagePredictionEngine = null;
	protected get predictionEngine(): PagePredictionEngine {
		return this._predictionEngine;
	}
	protected set predictionEngine(value: PagePredictionEngine) {
		this._predictionEngine = value;
	}
	protected get_actualBaseDataProvider(): IDataSourceDataProvider {
		return this.actualDataProvider;
	}
	protected get actualBaseDataProvider(): IDataSourceDataProvider {
		return this.get_actualBaseDataProvider();
	}
	private _dataProvider: IDataSourceVirtualDataProvider = null;
	static readonly dataProviderPropertyName: string = "DataProvider";
	get dataProvider(): IDataSourceVirtualDataProvider {
		return this._dataProvider;
	}
	set dataProvider(value: IDataSourceVirtualDataProvider) {
		let oldValue = this._dataProvider;
		this._dataProvider = value;
		if (oldValue != this._dataProvider) {
			this.onPropertyUpdated(VirtualDataSource.dataProviderPropertyName, oldValue, this._dataProvider);
		}
	}
	private _actualDataProvider: IDataSourceVirtualDataProvider = null;
	static readonly actualDataProviderPropertyName: string = "ActualDataProvider";
	get actualDataProvider(): IDataSourceVirtualDataProvider {
		if (this._actualDataProvider == null) {
			this.actualDataProvider = this.resolveDataProvider();
		}
		return this._actualDataProvider;
	}
	set actualDataProvider(value: IDataSourceVirtualDataProvider) {
		let oldValue = this._actualDataProvider;
		this._actualDataProvider = value;
		if (oldValue != this._actualDataProvider) {
			this.onPropertyUpdated(VirtualDataSource.actualDataProviderPropertyName, oldValue, this._actualDataProvider);
		}
	}
	static readonly pageSizeRequestedPropertyName: string = "PageSizeRequested";
	private _pageSizeRequested: number = 50;
	get pageSizeRequested(): number {
		return this._pageSizeRequested;
	}
	set pageSizeRequested(value: number) {
		let oldValue = this._pageSizeRequested;
		this._pageSizeRequested = value;
		if (oldValue != this._pageSizeRequested) {
			this.onPropertyUpdated(VirtualDataSource.pageSizeRequestedPropertyName, oldValue, this._pageSizeRequested);
		}
	}
	protected resetCache(): void {
		if (this.externalVirtualDataSource != null) {
			this.externalVirtualDataSource.resetCache();
		}
		this.resetCacheOverride();
	}
	protected resetCacheOverride(): void {
		this._actualPages.clear();
	}
	static readonly maxCachedPagesPropertyName: string = "MaxCachedPages";
	private _maxCachedPages: number = 200;
	get maxCachedPages(): number {
		return this._maxCachedPages;
	}
	set maxCachedPages(value: number) {
		let oldValue = this._maxCachedPages;
		this._maxCachedPages = value;
		if (oldValue != this._maxCachedPages) {
			this.onPropertyUpdated(VirtualDataSource.maxCachedPagesPropertyName, oldValue, this._maxCachedPages);
		}
	}
	protected actualPageSizePopulated: boolean = false;
	static readonly actualPageSizePropertyName: string = "ActualPageSize";
	private _actualPageSize: number = 50;
	get actualPageSize(): number {
		return this._actualPageSize;
	}
	set actualPageSize(value: number) {
		let oldValue = this._actualPageSize;
		this._actualPageSize = value;
		if (oldValue != this._actualPageSize) {
			this.onPropertyUpdated(VirtualDataSource.actualPageSizePropertyName, oldValue, this._actualPageSize);
		}
	}
	private _checkingExternal: boolean = false;
	protected get_isSortingSupported(): boolean {
		if (this.externalDataSource != null && !this._checkingExternal) {
			this._checkingExternal = true;
			let ret = this.externalDataSource.isSortingSupportedOverride;
			this._checkingExternal = false;
			return ret;
		}
		return false;
	}
	protected get_isFilteringSupported(): boolean {
		if (this.externalDataSource != null && !this._checkingExternal) {
			this._checkingExternal = true;
			let ret = this.externalDataSource.isFilteringSupportedOverride;
			this._checkingExternal = false;
			return ret;
		}
		return false;
	}
	protected get_isGroupingSupported(): boolean {
		if (this.externalDataSource != null && !this._checkingExternal) {
			this._checkingExternal = true;
			let ret = this.externalDataSource.isGroupingSupportedOverride;
			this._checkingExternal = false;
			return ret;
		}
		return false;
	}
	private _externalVirtualDataSource: IExternalVirtualDataSource = null;
	get externalVirtualDataSource(): IExternalVirtualDataSource {
		return this._externalVirtualDataSource;
	}
	set externalVirtualDataSource(value: IExternalVirtualDataSource) {
		this._externalVirtualDataSource = value;
		this.actualDataProvider = this.resolveDataProvider();
	}
	protected resolveDataProvider(): IDataSourceVirtualDataProvider {
		if (this.externalVirtualDataSource == null) {
			return null;
		}
		return this.externalVirtualDataSource.resolveDataProvider();
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, oldValue, newValue);
		switch (propertyName) {
			case VirtualDataSource.dataProviderPropertyName:
			this.actualDataProvider = this.dataProvider;
			this.queueAutoRefresh();
			break;

			case BaseDataSource.executionContextPropertyName:
			this.predictionEngine.executionContext = this.executionContext;
			break;

			case VirtualDataSource.actualDataProviderPropertyName:
			this.actualDataProvider.pageSizeRequested = this.pageSizeRequested;
			this.actualDataProvider.pageLoaded = runOn(this, this.dataProvider_PageLoaded);
			this.queueAutoRefresh();
			break;

			case VirtualDataSource.pageSizeRequestedPropertyName:
			this.actualPageSize = this.pageSizeRequested;
			if (this.actualDataProvider != null) {
				this.actualDataProvider.pageSizeRequested = this.pageSizeRequested;
			}
			this.queueAutoRefresh();
			break;

			case VirtualDataSource.actualPageSizePropertyName:
			this.predictionEngine.pageSize = this.actualPageSize;
			this.queueAutoRefresh();
			break;

			case BaseDataSource.firstVisibleIndexRequestedPropertyName:
			this.predictionEngine.firstVisibleIndexRequested = this.firstVisibleIndexRequested;
			break;

			case BaseDataSource.lastVisibleIndexRequestedPropertyName:
			this.predictionEngine.lastVisibleIndexRequested = this.lastVisibleIndexRequested;
			break;

			case BaseDataSource.actualCountPropertyName:
			if (this.actualDataProvider != null && !this._sectionMap.hasSections) {
				this.predictionEngine.fullCount = this.actualDataProvider.actualCount;
			} else {
				this.predictionEngine.fullCount = this.actualCount;
			}
			this.queueAutoRefresh();
			break;

			case VirtualDataSource.maxCachedPagesPropertyName:
			this._actualPages.maxItems = this.maxCachedPages;
			break;

		}

	}
	private getRealIndex(index: number): number {
		if (this.hasGroups && this._sectionMap.hasSections) {
			let section = this.getSection(index);
			if (section == null) {
				section = this._sectionMap.getLastSection();
			}
			return index - section.firstRowDisplacement;
		}
		return index;
	}
	private dataProvider_PageLoaded(page: IDataSourcePage, currentFullCount: number, actualPageSize: number): void {
		let executionContext = this.executionContext;
		if (executionContext != null) {
			executionContext.execute(() => this.receivePage(page, currentFullCount, actualPageSize));
		} else {
			this.receivePage(page, currentFullCount, actualPageSize);
		}
	}
	private receivePage(page: IDataSourcePage, currentFullCount: number, actualPageSize: number): void {
		if (page == null) {
			currentFullCount = this.resolveFullCount(currentFullCount);
			if (this.actualCount != currentFullCount) {
				this.actualCount = currentFullCount;
			}
			return;
		}
		if (actualPageSize != this.actualPageSize && !this.actualPageSizePopulated) {
			this.actualPageSize = actualPageSize;
		}
		this.actualPageSizePopulated = true;
		let pageIndex: number = page.pageIndex();
		this.decrementPageCount(pageIndex);
		this._actualPages.item(pageIndex, page);
		let schema = page.schema();
		if (schema != null) {
			this.actualSchema = schema;
		}
		let summaryInformation = page.getSummaryInformation();
		if (this._summaryResults == null && summaryInformation != null) {
			this._summaryResults = summaryInformation;
			for (let i = 0; i < this.summaryDescriptions.all.count; i++) {
				this._summaryResults[i].summaryIndex = i;
			}
			let rows = SectionData.getSummaryRowsFromResults(this._summaryResults);
			this._rootSummaryRowCount = rows.count;
		}
		let groupInformation = page.getGroupInformation();
		if (this._groupInformation == null && groupInformation != null) {
			this._groupInformation = groupInformation;
			this.populateSections();
			this._expansionStateChanged = false;
		}
		currentFullCount = this.resolveFullCount(currentFullCount);
		if (this.actualCount != currentFullCount) {
			this.actualCount = currentFullCount;
		}
		this.notifyPageContentChanged(page);
	}
	protected resolveFullCount(currentFullCount: number): number {
		if (this._groupInformation != null) {
			return this._sectionMap.fullCount + this._rootSummaryRowCount;
		}
		return currentFullCount + this._rootSummaryRowCount;
	}
	private populateSections(): void {
		let currPosition = 0;
		let currDisplacement = 0;
		let extra: number = 0;
		if (this.shouldEmitSectionHeaders) {
			switch (this.sectionHeaderDisplayMode) {
				case DataSourceSectionHeaderDisplayMode.Combined:
				extra++;
				break;

				case DataSourceSectionHeaderDisplayMode.Split:
				extra += this.groupDescriptions.all.count;
				break;

			}

		}
		if (this.shouldEmitSectionFooters) {
			extra++;
		}
		let shouldEmitHeaders = this.shouldEmitSectionHeaders;
		let shouldEmitFooters = this.shouldEmitSectionFooters;
		for (let i = 0; i < this._groupInformation.length; i++) {
			let data: SectionData = new SectionData();
			if (shouldEmitHeaders) {
				switch (this.sectionHeaderDisplayMode) {
					case DataSourceSectionHeaderDisplayMode.Combined:
					currDisplacement++;
					break;

					case DataSourceSectionHeaderDisplayMode.Split:
					currDisplacement += this.groupDescriptions.all.count;
					break;

				}

			}
			let groupCount = this._groupInformation[i].endIndex - this._groupInformation[i].startIndex;
			data.sectionStartIndex = currPosition;
			data.sectionIndex = i;
			data.rowCount = <number[]>[ groupCount + 1 ];
			data.sectionEndIndex = currPosition + groupCount;
			data.sectionEndIndex += extra;
			data.firstRowDisplacement = currDisplacement;
			data.sectionKeyNames = this._groupInformation[i].groupKeyProperties;
			data.sectionKeyValues = this._groupInformation[i].groupKeyValues;
			data.initializeExpandedStates(this.sectionHeaderDisplayMode, this.isSectionExpandedDefault);
			if (shouldEmitFooters) {
				data.footerCount = data.headerStates.length;
			}
			let summaryRowCount = 0;
			data.summaryResults = this._groupInformation[i].summaryResults;
			if (data.summaryResults != null) {
				for (let x = 0; x < data.summaryResults.length; x++) {
					data.summaryResults[x].summaryIndex = x;
				}
				summaryRowCount = SectionData.getSummaryRowsFromResults(data.summaryResults).count;
			}
			if (this.includeSummaryRowsInSection) {
				if (this.isSectionSummaryRowsAtBottom) {
					data.summaryBottomCount = summaryRowCount;
				} else {
					data.summaryTopCount = summaryRowCount;
					data.firstRowDisplacement += summaryRowCount;
				}
				currDisplacement += summaryRowCount;
				data.sectionEndIndex += summaryRowCount;
			}
			if (shouldEmitFooters) {
				currDisplacement++;
			}
			for (let j = 0; j < data.headerStates.length; j++) {
				let key = this.combineSectionKeysAndValues1(data, j);
				data.headerExpansionKeys[j] = key;
				if (this._expansionStates.containsKey(key)) {
					data.headerStates[j] = this._expansionStates.item(key);
				} else {
					data.headerStates[j] = this.isSectionExpandedDefault;
				}
				if (!data.headerStates[j]) {
					let remainingHeaders = data.headerStates.length - 1 - j;
					data.sectionEndIndex -= remainingHeaders;
					currDisplacement -= remainingHeaders;
					if (shouldEmitFooters) {
						currDisplacement--;
						data.footerCount--;
					}
					j += remainingHeaders;
				}
			}
			if (!data.isSectionContentVisible) {
				data.sectionEndIndex -= data.rowCount[0] + summaryRowCount;
				currDisplacement -= data.rowCount[0] + summaryRowCount;
			}
			currPosition = data.sectionEndIndex + 1;
			this._sectionMap.sections.add(data);
		}
	}
	private notifyPageContentChanged(page: IDataSourcePage): void {
		if (this.updateNotifier != null) {
			let startIndex: number = page.pageIndex() * this.actualPageSize;
			if (this.actualDataProvider != null) {
				if (startIndex > this.actualDataProvider.actualCount) {
					return;
				}
			}
			let displacedStart = this.getDisplacedIndex(startIndex);
			let displacedEnd = this.getDisplacedIndex(startIndex + page.count() - 1);
			if (displacedStart > 0 && this.getRowType(displacedStart - 1) == DataSourceRowType.SectionHeader) {
				displacedStart--;
			}
			if (this.actualCount == 0 && page.count() == 0) {
				this.onClearItems();
			} else {
				this.updateNotifier.rangeActualized(displacedStart, displacedEnd);
			}
		}
	}
	private getDisplacedIndex(startIndex: number): number {
		if (this.hasGroups && this._sectionMap.hasSections) {
			let section = this._sectionMap.getSectionFromRealIndex(startIndex);
			if (section == null) {
				section = this._sectionMap.getLastSection();
			}
			if (!section.isSectionContentVisible) {
				return section.sectionStartIndex;
			}
			return startIndex + section.firstRowDisplacement;
		}
		return startIndex;
	}
	private directlyExecute(callback: () => void): void {
		callback();
	}
	protected get_isVirtual(): boolean {
		return true;
	}
	private _actualPages: LRUCache$2<any, IDataSourcePage> = new LRUCache$2<any, IDataSourcePage>((<any>Base).$type, IDataSourcePage_$type, 0, 200);
	private _pageCandidates: Dictionary$2<any, number[]> = new Dictionary$2<any, number[]>((<any>Base).$type, Array_$type, 0);
	private _pageRequestCounts: Dictionary$2<number, number> = new Dictionary$2<number, number>(Number_$type, Number_$type, 0);
	private _dontQueueOnClear: boolean = false;
	private _groupInformation: ISectionInformation[] = null;
	private _summaryResults: ISummaryResult[] = null;
	isPlaceholderItem(index: number): boolean {
		let pageOffset = this.getPageOffset(index);
		let containingPage: number = pageOffset[0];
		if (!this._actualPages.containsKey(containingPage)) {
			if (pageOffset[1] == -1) {
				return false;
			}
			return true;
		}
		return false;
	}
	getItemAtIndex(index: number): any {
		if (index >= this.actualCount - this._rootSummaryRowCount) {
			return this.getVirtualItem(index);
		}
		let pageOffset = this.getPageOffset(index);
		let containingPage: number = pageOffset[0];
		if (!this._actualPages.containsKey(containingPage)) {
			if (pageOffset[1] == -1) {
				return this.getVirtualItem(index);
			}
			return null;
		}
		let page: IDataSourcePage = this._actualPages.item(containingPage);
		let itemIndex = pageOffset[1];
		if (itemIndex == -1) {
			return this.getVirtualItem(index);
		}
		return page.getItemAtIndex(itemIndex);
	}
	private getVirtualItem(index: number): any {
		if (index >= this.actualCount - this._rootSummaryRowCount) {
			let summary: DataSourceSpecialRow = new DataSourceSpecialRow();
			summary.rowType = DataSourceRowType.SummaryRowRoot;
			summary.level = 0;
			let summaryRowIndex = index - (this.actualCount - this._rootSummaryRowCount);
			let summaryRows = SectionData.getSummaryRowsFromResults(this._summaryResults);
			let results: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows._inner[summaryRowIndex].count);
			summaryRows._inner[summaryRowIndex].values.copyTo(results, 0);
			summary.summaryResults = results;
			return summary;
		}
		let section = this.getSection(index);
		if (section != null) {
			let rowType = section.getRowType(index);
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				let row: DataSourceSpecialRow = new DataSourceSpecialRow();
				row.rowType = rowType;
				row.summaryResults = section.summaryResults;
				for (let j = 0; j < this.groupDescriptions.all.count; j++) {
					row.setSectionValue(this.groupDescriptions.all.item(j).propertyName, section.sectionKeyValues[j]);
					row.setValue(this.groupDescriptions.all.item(j).propertyName, section.sectionKeyValues[j]);
				}
				row.level = rowType == DataSourceRowType.SectionHeader ? index - section.sectionStartIndex : (section.footerCount - 1) - (index - (section.sectionEndIndex - section.footerCount + 1));
				return row;
			} else if (rowType == DataSourceRowType.SummaryRowSection) {
				let summary1: DataSourceSpecialRow = new DataSourceSpecialRow();
				summary1.rowType = DataSourceRowType.SummaryRowSection;
				summary1.level = section.headerStates.length;
				let summaryRowIndex1 = section.getSummaryRowIndex(index);
				let summaryRows1 = SectionData.getSummaryRowsFromResults(section.summaryResults);
				let results1: ISummaryResult[] = <ISummaryResult[]>new Array(summaryRows1._inner[summaryRowIndex1].count);
				summaryRows1._inner[summaryRowIndex1].values.copyTo(results1, 0);
				summary1.summaryResults = results1;
				return summary1;
			}
		}
		return null;
	}
	private getPageOffset(index: number): number[] {
		if (this.hasGroups && this._sectionMap.hasSections) {
			let isVirtual: boolean = false;
			let section = this.getSection(index);
			if (section == null) {
				section = this._sectionMap.getLastSection();
				if (this._summaryResults.length > 0 && index > section.sectionEndIndex) {
					isVirtual = true;
				}
			}
			let sectionStart = section.sectionStartIndex;
			if (index >= sectionStart && index < sectionStart + section.headerStates.length && this.shouldEmitSectionHeaders) {
				isVirtual = true;
			}
			if (index - (sectionStart + section.headerStates.length - 1) <= section.pinnedCount + section.summaryTopCount) {
				isVirtual = true;
			}
			if (this.shouldEmitSectionFooters) {
				if (index <= section.sectionEndIndex && index >= section.sectionEndIndex - section.headerStates.length - section.summaryBottomCount) {
					isVirtual = true;
				}
			} else if (section.summaryBottomCount > 0) {
				if (index > section.sectionEndIndex - section.summaryBottomCount && index <= section.sectionEndIndex) {
					isVirtual = true;
				}
			}
			let realIndex = index - section.firstRowDisplacement;
			let pageIndex = <number>truncate(Math.floor(<number>realIndex / <number>this.actualPageSize));
			let pageOffset = realIndex % this.actualPageSize;
			if (isVirtual) {
				pageOffset = -1;
			}
			let ret = <number[]>new Array(2);
			ret[0] = pageIndex;
			ret[1] = pageOffset;
			return ret;
		} else {
			let pageIndex1 = <number>truncate(Math.floor(<number>index / <number>this.actualPageSize));
			let pageOffset1 = index % this.actualPageSize;
			let ret1 = <number[]>new Array(2);
			ret1[0] = pageIndex1;
			ret1[1] = pageOffset1;
			return ret1;
		}
	}
	private _sectionMap: SectionMap = new SectionMap();
	private getSection(index: number): SectionData {
		return this._sectionMap.getSection(index);
	}
	getItemPropertyAtIndex(index: number, valueName: string): any {
		if (index > (this.actualCount - 1) - this._rootSummaryRowCount) {
			return this.getVirtualItemValueAtIndex(index, valueName);
		}
		let pageOffset = this.getPageOffset(index);
		let containingPage: number = pageOffset[0];
		if (!this._actualPages.containsKey(containingPage)) {
			if (pageOffset[1] == -1) {
				return this.getVirtualItemValueAtIndex(index, valueName);
			}
			return null;
		}
		let page: IDataSourcePage = this._actualPages.item(containingPage);
		let valueIndex = pageOffset[1];
		if (valueIndex == -1) {
			return this.getVirtualItemValueAtIndex(index, valueName);
		}
		return page.getItemValueAtIndex(valueIndex, valueName);
	}
	private getVirtualItemValueAtIndex(index: number, valueName: string): any {
		let item = this.getVirtualItem(index);
		if (typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, item) !== null) {
			return (<DataSourceSpecialRow>item).getValue(valueName);
		}
		return null;
	}
	private incrementPageCount(page: number): void {
		if (!this._pageRequestCounts.containsKey(page)) {
			this._pageRequestCounts.addItem(page, 1);
		} else {
			this._pageRequestCounts.item(page, <number>this._pageRequestCounts.item(page) + 1);
		}
	}
	private decrementPageCount(page: number): void {
		if (this._pageRequestCounts.containsKey(page)) {
			this._pageRequestCounts.item(page, <number>this._pageRequestCounts.item(page) - 1);
			if (<number>this._pageRequestCounts.item(page) <= 0) {
				this._pageRequestCounts.removeItem(page);
				if (this.actualDataProvider != null) {
					this.actualDataProvider.removePageRequest(page);
				}
			}
		}
	}
	addCandidate(pageIndex: number, priority: DataSourcePageRequestPriority): boolean {
		let result = false;
		if (!this._pageCandidates.containsKey(pageIndex)) {
			let pages = new List$1<number>(Number_$type, 0);
			let realPages = this.transformPage(pageIndex);
			for (let i = 0; i < realPages.length; i++) {
				let realPage = realPages[i];
				if (!this._actualPages.containsKey(realPage)) {
					pages.add(realPage);
					this.incrementPageCount(realPage);
					let refCount: number = <number>this._pageRequestCounts.item(realPage);
					if (refCount == 1 && this.actualDataProvider != null) {
						this.actualDataProvider.addPageRequest(realPage, priority);
					}
					result = true;
				}
			}
			if (pages.count > 0) {
				this._pageCandidates.addItem(pageIndex, pages.toArray());
			}
		}
		return result;
	}
	removeCandidate(pageIndex: number): void {
		if (this._pageCandidates.containsKey(pageIndex)) {
			for (let i = 0; i < this._pageCandidates.item(pageIndex).length; i++) {
				let realPage = this._pageCandidates.item(pageIndex)[i];
				this.decrementPageCount(realPage);
			}
			this._pageCandidates.removeItem(pageIndex);
		}
	}
	transformPage(viewPageIndex: number): number[] {
		let pageIndexesToRequest = <number[]>[ viewPageIndex ];
		if (this.hasGroups && this._sectionMap.hasSections) {
			let startIndex: number = viewPageIndex * this.actualPageSize;
			let endIndex: number = startIndex + this.actualPageSize - 1;
			let section = this.getSection(startIndex);
			let pages = new List$1<number>(Number_$type, 0);
			for (let i = startIndex; i <= endIndex; i++) {
				if (section == null) {
					break;
				}
				if (i > section.sectionEndIndex) {
					if (section.sectionIndex < this._sectionMap.sections.count - 1) {
						section = this._sectionMap.sections._inner[section.sectionIndex + 1];
					} else {
						break;
					}
				}
				if (!section.isSectionContentVisible || (i >= section.sectionStartIndex && i <= section.sectionStartIndex + (section.headerStates.length - 1) + section.pinnedCount)) {
					continue;
				}
				let realIndex = i - section.firstRowDisplacement;
				let page = intDivide(realIndex, this.actualPageSize);
				if (!pages.contains(page)) {
					pages.add(page);
				}
			}
			pageIndexesToRequest = pages.toArray();
		}
		return pageIndexesToRequest;
	}
	getUnrealizedCount(): number {
		let realizedCount = this._actualPages.count * this.actualPageSize;
		let unrealizedCount = this.actualCount - realizedCount;
		return unrealizedCount;
	}
	onSetItemOverride(index: number, oldItem: any, newItem: any): void {
		super.onSetItemOverride(index, oldItem, newItem);
		let pageOffset = this.getPageOffset(index);
		let page: number = pageOffset[0];
		if (this._actualPages.containsKey(page)) {
			this._actualPages.remove(page);
		}
	}
	protected refreshInternalOverride(): void {
		super.refreshInternalOverride();
		this.actualPageSizePopulated = false;
		let hadItems = this.actualCount != 0;
		this._dontQueueOnClear = true;
		if (!this._expansionStateChanged) {
			this.resetCache();
			if (hadItems) {
				this.onClearItems();
			}
			this._groupInformation = null;
			this._summaryResults = null;
			this._rootSummaryRowCount = 0;
			this._sectionMap.clear();
		} else {
			this._expansionStateChanged = false;
			if (hadItems) {
				this.onClearItems();
			}
		}
		this.reRequestCandidates();
		this.predictionEngine.enqueueUpdate();
		this._dontQueueOnClear = false;
	}
	private reRequestCandidates(): void {
		if (this.actualDataProvider != null) {
			for (let viewCandidate of fromEnum<number[]>(this._pageCandidates.values)) {
				for (let i = 0; i < viewCandidate.length; i++) {
					let realPage = viewCandidate[i];
					this.actualDataProvider.addPageRequest(realPage, DataSourcePageRequestPriority.Normal);
				}
			}
		}
	}
	onClearItemsOverride(): void {
		super.onClearItemsOverride();
		if (!this._dontQueueOnClear) {
			this.queueAutoRefresh();
		}
	}
	onInsertItemOverride(index: number, newItem: any): void {
		super.onInsertItemOverride(index, newItem);
		this.queueAutoRefresh();
	}
	onRemoveItemOverride(index: number, oldItem: any): void {
		super.onRemoveItemOverride(index, oldItem);
		this.queueAutoRefresh();
	}
	protected get_isItemIndexLookupSupported(): boolean {
		return true;
	}
	protected get_isKeyIndexLookupSupported(): boolean {
		return true;
	}
	indexOfItem(item: any): number {
		let cache = this._actualPages.innerCache;
		let keyList = cache.keyList;
		let valueList = cache.valueList;
		let count = valueList.count;
		let removedList = cache.removedList;
		for (let i = 0; i < count; i++) {
			if (removedList._inner[i]) {
				continue;
			}
			let currPage = valueList._inner[i].value;
			let pageCount = currPage.count();
			for (let j = 0; j < pageCount; j++) {
				if (this.areEqual(currPage.getItemAtIndex(j), item)) {
					let key = typeGetValue(keyList._inner[i]);
					let pageStart = key * this.actualPageSize;
					return pageStart + j;
				}
			}
		}
		if (this.actualDataProvider != null && this.actualDataProvider.isItemIndexLookupSupported) {
			return this.actualDataProvider.indexOfItem(item);
		}
		return -1;
	}
	private areEqual(currItem: any, item: any): boolean {
		if (currItem == null && item == null) {
			return true;
		}
		if (currItem == null || item == null) {
			return false;
		}
		return Base.equalsStatic(currItem, item);
	}
	indexOfKey(key: any[]): number {
		let primaryKey = this.actualPrimaryKey;
		if (primaryKey == null || primaryKey.length < 1 || this.actualBaseDataProvider == null) {
			return -1;
		}
		this.ensureComparables(this.actualSchema);
		let comparer = this.getPrimaryKeyComparer();
		if (this.hasGroups && this.shouldEmitSectionHeaders && !this.isSectionContentVisible && this.isSectionHeaderNormalRow) {
			if (this._sectionMap.sections.count > 0) {
				for (let i = 0; i < this._sectionMap.sections.count; i++) {
					let section = this._sectionMap.sections._inner[i];
					let groupHeader = new DataSourceSpecialRow();
					for (let j = 0; j < section.sectionKeyNames.length; j++) {
						let propertyName = section.sectionKeyNames[j];
						let propertyValue = section.sectionKeyValues[j];
						groupHeader.setSectionValue(propertyName, propertyValue);
					}
					if (comparer.compareToKey(groupHeader, key) == 0) {
						return i;
					}
				}
			}
		}
		let cache = this._actualPages.innerCache;
		let keyList = cache.keyList;
		let valueList = cache.valueList;
		let count = valueList.count;
		let removedList = cache.removedList;
		for (let i1 = 0; i1 < count; i1++) {
			if (removedList._inner[i1]) {
				continue;
			}
			let currPage = valueList._inner[i1].value;
			let pageCount = currPage.count();
			for (let j1 = 0; j1 < pageCount; j1++) {
				if (comparer.compareToKey(currPage.getItemAtIndex(j1), key) == 0) {
					let pageKey = typeGetValue(keyList._inner[i1]);
					let pageStart = pageKey * this.actualPageSize;
					return pageStart + j1;
				}
			}
		}
		if (this.actualDataProvider != null && this.actualDataProvider.isKeyIndexLookupSupported) {
			return this.actualDataProvider.indexOfKey(key);
		}
		return -1;
	}
	private getPrimaryKeyComparer(): DataSourcePropertiesComparer {
		let directions: ListSortDirection[] = <ListSortDirection[]>new Array(this.actualPrimaryKey.length);
		for (let i = 0; i < directions.length; i++) {
			directions[i] = ListSortDirection.Ascending;
		}
		return new DataSourcePropertiesComparer(this.actualPrimaryKey, directions, this._schemaComparables1, this);
	}
	getStickyRowPriority(row: number): number {
		let rowType = this.getRowType(row);
		switch (rowType) {
			case DataSourceRowType.SectionHeader: return 100 - this.getRowLevel(row);
			case DataSourceRowType.SectionFooter: return 99 - this.getRowLevel(row);
			case DataSourceRowType.ShiftedRow:

			case DataSourceRowType.SummaryRowSection: return 2;
			case DataSourceRowType.SummaryRowRoot: return 3;
		}

		return 1;
	}
	unpinRow(key: any[]): void {
		super.unpinRow(key);
	}
	pinRow(key: any[]): void {
		super.pinRow(key);
	}
	isRowPinned(row: number): boolean {
		return super.isRowPinned(row);
	}
	private _pinnedRowsInOrder: number[] = null;
	private _lastStartSection: number = -1;
	private _lastEndSection: number = -1;
	private _lastStartSectionPinCount: number = -1;
	private _lastEndSectionPinCount: number = -1;
	private _lastStartSectionStartIndex: number = -1;
	private _lastEndSectionStartIndex: number = -1;
	private _lastStartSectionEndIndex: number = -1;
	private _lastEndSectionEndIndex: number = -1;
	private _lastStartSummaryTopCount: number = -1;
	private _lastStartSummaryBottomCount: number = -1;
	private _lastEndSummaryTopCount: number = -1;
	private _lastEndSummaryBottomCount: number = -1;
	private _lastRootSummaryCount: number = -1;
	getStickyRowsInRange(firstVisibleIndex: number, lastVisibleIndex: number): number[] {
		if ((this.groupDescriptions == null || this.groupDescriptions.all.count == 0) && (this.summaryDescriptions == null || this.summaryDescriptions.all.count == 0)) {
			return null;
		}
		let startSection = this.getSection(firstVisibleIndex);
		let endSection = this.getSection(lastVisibleIndex);
		if (this._sectionMap.sections.count > 0) {
			if (this._sectionMap.sections.count == 1) {
				startSection = this._sectionMap.sections._inner[0];
				endSection = this._sectionMap.sections._inner[0];
			} else {
				startSection = this._sectionMap.getSection(firstVisibleIndex);
				endSection = this._sectionMap.getSection(lastVisibleIndex);
				if (lastVisibleIndex >= this.actualCount - this._rootSummaryRowCount) {
					endSection = this._sectionMap.getLastSection();
				}
			}
		} else if (this._rootSummaryRowCount > 0) {
			let summaryRows: List$1<number> = new List$1<number>(Number_$type, 0);
			for (let i = this.actualCount - this._rootSummaryRowCount; i < this.actualCount; i++) {
				summaryRows.add(i);
			}
			return summaryRows.toArray();
		}
		if (startSection == null || endSection == null) {
			return null;
		}
		if (startSection.sectionIndex == this._lastStartSection && startSection.pinnedCount == this._lastStartSectionPinCount && startSection.sectionStartIndex == this._lastStartSectionStartIndex && startSection.sectionEndIndex == this._lastStartSectionEndIndex && startSection.summaryTopCount == this._lastStartSummaryTopCount && startSection.summaryBottomCount == this._lastStartSummaryBottomCount && endSection.sectionIndex == this._lastEndSection && endSection.pinnedCount == this._lastEndSectionPinCount && endSection.sectionStartIndex == this._lastEndSectionStartIndex && endSection.sectionEndIndex == this._lastEndSectionEndIndex && endSection.summaryTopCount == this._lastEndSummaryTopCount && endSection.summaryBottomCount == this._lastEndSummaryBottomCount && this._rootSummaryRowCount == this._lastRootSummaryCount) {
			return this._pinnedRowsInOrder;
		}
		this._lastStartSection = startSection.sectionIndex;
		this._lastEndSection = endSection.sectionIndex;
		this._lastStartSectionPinCount = startSection.pinnedCount;
		this._lastEndSectionPinCount = endSection.pinnedCount;
		this._lastStartSectionStartIndex = startSection.sectionStartIndex;
		this._lastEndSectionStartIndex = endSection.sectionStartIndex;
		this._lastStartSectionEndIndex = startSection.sectionEndIndex;
		this._lastEndSectionEndIndex = endSection.sectionEndIndex;
		this._lastEndSummaryTopCount = endSection.summaryTopCount;
		this._lastEndSummaryBottomCount = endSection.summaryBottomCount;
		this._lastStartSummaryTopCount = startSection.summaryTopCount;
		this._lastStartSummaryBottomCount = startSection.summaryBottomCount;
		this._lastRootSummaryCount = this._rootSummaryRowCount;
		let values: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1 = startSection.sectionIndex; i1 <= endSection.sectionIndex; i1++) {
			let section = this._sectionMap.sections._inner[i1];
			let sectionHeaderCount = section.headerStates.length;
			if (this.shouldEmitSectionHeaders && this.hasGroups) {
				for (let j = 0; j < section.headerStates.length; j++) {
					values.add(section.sectionStartIndex + j);
					if (!section.headerStates[j]) {
						break;
					}
				}
			}
			if (section.isSectionContentVisible) {
				for (let j1 = 0; j1 < section.summaryTopCount; j1++) {
					values.add(section.sectionStartIndex + j1 + sectionHeaderCount);
				}
				if (this.shouldEmitShiftedRows) {
					for (let j2 = 0; j2 < section.pinnedCount; j2++) {
						values.add(section.sectionStartIndex + j2 + sectionHeaderCount);
					}
				}
				for (let j3 = section.summaryBottomCount - 1; j3 >= 0; j3--) {
					if (this.shouldEmitSectionFooters) {
						values.add(section.sectionEndIndex - sectionHeaderCount - j3);
					} else {
						values.add(section.sectionEndIndex - j3);
					}
				}
			}
			if (this.shouldEmitSectionFooters && this.hasGroups) {
				for (let j4 = section.headerStates.length - 1; j4 >= 0; j4--) {
					if (!section.headerStates[j4]) {
						break;
					}
					values.add(section.sectionEndIndex - j4);
				}
			}
		}
		for (let i2 = this.actualCount - this._rootSummaryRowCount; i2 < this.actualCount; i2++) {
			values.add(i2);
		}
		this._pinnedRowsInOrder = values.toArray();
		return this._pinnedRowsInOrder;
	}
	isExclusivelySticky(row: number): boolean {
		return this.getRowType(row) == DataSourceRowType.SectionHeader || this.getRowType(row) == DataSourceRowType.SectionFooter;
	}
	getRowType(row: number): DataSourceRowType {
		if (row < 0) {
			return DataSourceRowType.Normal;
		}
		let item = this.getItemAtIndex(row);
		let item_ = item;
		if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
			return (<DataSourceSpecialRow>item).rowType;
		}
		return DataSourceRowType.Normal;
	}
	private _expansionStates: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
	getIsRowExpandedAtIndex(rowIndex: number): boolean {
		let section = this._sectionMap.getSection(rowIndex);
		if (section == null) {
			section = this._sectionMap.getLastSection();
		}
		for (let i = 0; i < section.headerStates.length; i++) {
			if (rowIndex == section.sectionStartIndex + i) {
				return section.headerStates[i];
			}
		}
		return super.getIsRowExpandedAtIndex(rowIndex);
	}
	setIsRowExpandedAtIndex(rowIndex: number, state: boolean): void {
		let section = this._sectionMap.getSection(rowIndex);
		if (section == null) {
			section = this._sectionMap.getLastSection();
		}
		for (let i = 0; i < section.headerStates.length; i++) {
			if (rowIndex == section.sectionStartIndex + i) {
				let rebuildMap = false;
				let key = section.headerExpansionKeys[i];
				if (this._expansionStates.containsKey(key) && this._expansionStates.item(key) != state) {
					let oldState = this._expansionStates.item(key);
					if (state == this.isSectionExpandedDefault) {
						this._expansionStates.removeItem(key);
					} else {
						this._expansionStates.item(key, state);
					}
					rebuildMap = true;
					this.onRowExpansionChanged(rowIndex, oldState, state);
				} else if (state != this.isSectionExpandedDefault) {
					this._expansionStates.addItem(key, state);
					rebuildMap = true;
					this.onRowExpansionChanged(rowIndex, this.isSectionExpandedDefault, state);
				}
				if (rebuildMap) {
					this._sectionMap.clear();
					this.populateSections();
					this._expansionStateChanged = true;
					if (this.actualCount != this._sectionMap.fullCount) {
						this.actualCount = this._sectionMap.fullCount + this._rootSummaryRowCount;
					} else {
						this.queueAutoRefresh();
					}
				}
				break;
			}
		}
	}
	getRowLevel(rowIndex: number): number {
		if (rowIndex < 0) {
			return 0;
		}
		let item = this.getItemAtIndex(rowIndex);
		let item_ = item;
		if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
			return (<DataSourceSpecialRow>item).level;
		}
		if (this.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split) {
			return this.groupDescriptions.all.count;
		} else if (this.groupDescriptions.all.count > 0) {
			return 1;
		}
		return 0;
	}
	getRootSummaryRowCount(): number {
		return this._rootSummaryRowCount;
	}
	private combineSectionKeysAndValues(section: SectionData): string {
		let key: string = "";
		for (let i = 0; i < section.sectionKeyNames.length; i++) {
			key += section.sectionKeyNames[i] + ":" + section.sectionKeyValues[i];
		}
		return key;
	}
	private combineSectionKeysAndValues1(section: SectionData, level: number): string {
		if (this.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Combined) {
			return this.combineSectionKeysAndValues(section);
		}
		let key: string = "";
		for (let i = 0; i < section.sectionKeyNames.length; i++) {
			key += section.sectionKeyNames[i] + ":" + section.sectionKeyValues[i] + ":";
		}
		key += level;
		return key;
	}
	getRootSummaryResults(): ISummaryResult[] {
		return this._summaryResults;
	}
	getSectionSummaryResults(sectionIndex: number): ISummaryResult[][] {
		if (this._sectionMap.hasSections && sectionIndex >= 0 && sectionIndex < this._sectionMap.sections.count) {
			if (this._sectionMap.sections._inner[sectionIndex].summaryResults != null) {
				let results = <ISummaryResult[][]>new Array(1);
				results[0] = this._sectionMap.sections._inner[sectionIndex].summaryResults;
				return results;
			}
		}
		return null;
	}
	clone(): IDataSource {
		return null;
	}
	cloneProperties(dataSource: IDataSource): void {
		super.cloneProperties(dataSource);
		let virtualDataSource = typeCast<VirtualDataSource>((<any>VirtualDataSource).$type, dataSource);
		if (virtualDataSource != null) {
			virtualDataSource.pageSizeRequested = this.pageSizeRequested;
			virtualDataSource.maxCachedPages = this.maxCachedPages;
		}
	}
}


