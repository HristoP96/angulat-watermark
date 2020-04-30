/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Point, Number_$type, runOn, typeGetValue, Point_$type, Type, markType, PointUtil } from "./type";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IPageCandidatesSink } from "./IPageCandidatesSink";
import { SectionMap } from "./SectionMap";
import { List$1 } from "./List$1";
import { DataSourceVelocityTracker } from "./DataSourceVelocityTracker";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
import { truncate } from "./number";

/**
 * @hidden 
 */
export class PagePredictionEngine extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(PagePredictionEngine, 'PagePredictionEngine', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	static readonly executionContextPropertyName: string = "ExecutionContext";
	private _executionContext: IDataSourceExecutionContext = null;
	get executionContext(): IDataSourceExecutionContext {
		return this._executionContext;
	}
	set executionContext(value: IDataSourceExecutionContext) {
		let oldValue = this._executionContext;
		this._executionContext = value;
		if (oldValue != this._executionContext) {
			this.onPropertyUpdated(PagePredictionEngine.executionContextPropertyName, oldValue, this._executionContext);
		}
	}
	static readonly firstVisibleIndexRequestedPropertyName: string = "FirstVisibleIndexRequested";
	private _firstVisibleIndexRequested: number = 0;
	get firstVisibleIndexRequested(): number {
		return this._firstVisibleIndexRequested;
	}
	set firstVisibleIndexRequested(value: number) {
		let oldValue = this._firstVisibleIndexRequested;
		this._firstVisibleIndexRequested = value;
		if (oldValue != this._firstVisibleIndexRequested) {
			this.onPropertyUpdated(PagePredictionEngine.firstVisibleIndexRequestedPropertyName, oldValue, this._firstVisibleIndexRequested);
		}
	}
	static readonly lastVisibleIndexRequestedPropertyName: string = "LastVisibleIndexRequested";
	private _lastVisibleIndexRequested: number = 0;
	get lastVisibleIndexRequested(): number {
		return this._lastVisibleIndexRequested;
	}
	set lastVisibleIndexRequested(value: number) {
		let oldValue = this._lastVisibleIndexRequested;
		this._lastVisibleIndexRequested = value;
		if (oldValue != this._lastVisibleIndexRequested) {
			this.onPropertyUpdated(PagePredictionEngine.lastVisibleIndexRequestedPropertyName, oldValue, this._lastVisibleIndexRequested);
		}
	}
	static readonly pageSizePropertyName: string = "PageSize";
	private _pageSize: number = -1;
	get pageSize(): number {
		return this._pageSize;
	}
	set pageSize(value: number) {
		let oldValue = this._pageSize;
		this._pageSize = value;
		if (oldValue != this._pageSize) {
			this.onPropertyUpdated(PagePredictionEngine.pageSizePropertyName, oldValue, this._pageSize);
		}
	}
	static readonly fullCountPropertyName: string = "FullCount";
	private _fullCount: number = -1;
	get fullCount(): number {
		return this._fullCount;
	}
	set fullCount(value: number) {
		let oldValue = this._fullCount;
		this._fullCount = value;
		if (oldValue != this._fullCount) {
			this.onPropertyUpdated(PagePredictionEngine.fullCountPropertyName, oldValue, this._fullCount);
		}
	}
	static readonly pageVisibilityDisplayThresholdMillisecondsPropertyName: string = "PageVisibilityDisplayThresholdMilliseconds";
	private _pageVisibilityDisplayThresholdMilliseconds: number = 500;
	get pageVisibilityDisplayThresholdMilliseconds(): number {
		return this._pageVisibilityDisplayThresholdMilliseconds;
	}
	set pageVisibilityDisplayThresholdMilliseconds(value: number) {
		let oldValue = this._pageVisibilityDisplayThresholdMilliseconds;
		this._pageVisibilityDisplayThresholdMilliseconds = value;
		if (oldValue != this._pageVisibilityDisplayThresholdMilliseconds) {
			this.onPropertyUpdated(PagePredictionEngine.pageVisibilityDisplayThresholdMillisecondsPropertyName, oldValue, this._pageVisibilityDisplayThresholdMilliseconds);
		}
	}
	static readonly fetchAheadMillisecondsPropertyName: string = "FetchAheadMilliseconds";
	private _fetchAheadMilliseconds: number = 1000;
	get fetchAheadMilliseconds(): number {
		return this._fetchAheadMilliseconds;
	}
	set fetchAheadMilliseconds(value: number) {
		let oldValue = this._fetchAheadMilliseconds;
		this._fetchAheadMilliseconds = value;
		if (oldValue != this._fetchAheadMilliseconds) {
			this.onPropertyUpdated(PagePredictionEngine.fetchAheadMillisecondsPropertyName, oldValue, this._fetchAheadMilliseconds);
		}
	}
	static readonly maximumPageCandidatesPropertyName: string = "MaximumPageCandidates";
	private _maximumPageCandidates: number = 8;
	get maximumPageCandidates(): number {
		return this._maximumPageCandidates;
	}
	set maximumPageCandidates(value: number) {
		let oldValue = this._maximumPageCandidates;
		this._maximumPageCandidates = value;
		if (oldValue != this._maximumPageCandidates) {
			this.onPropertyUpdated(PagePredictionEngine.maximumPageCandidatesPropertyName, oldValue, this._maximumPageCandidates);
		}
	}
	static readonly pageCandidatesSinkPropertyName: string = "PageCandidatesSink";
	private _pageCandidatesSink: IPageCandidatesSink = null;
	get pageCandidatesSink(): IPageCandidatesSink {
		return this._pageCandidatesSink;
	}
	set pageCandidatesSink(value: IPageCandidatesSink) {
		let oldValue = this._pageCandidatesSink;
		this._pageCandidatesSink = value;
		if (oldValue != this._pageCandidatesSink) {
			this.onPropertyUpdated(PagePredictionEngine.pageCandidatesSinkPropertyName, oldValue, this._pageCandidatesSink);
		}
	}
	private _sectionMap: SectionMap = null;
	get sectionMap(): SectionMap {
		return this._sectionMap;
	}
	set sectionMap(value: SectionMap) {
		this._sectionMap = value;
	}
	private _maxPage: number = 0;
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case PagePredictionEngine.firstVisibleIndexRequestedPropertyName:

			case PagePredictionEngine.lastVisibleIndexRequestedPropertyName:
			this.onDesiredVisibleRangeChanged();
			break;

			case PagePredictionEngine.executionContextPropertyName:
			this.onExecutionContextChanged();
			break;

			case PagePredictionEngine.fullCountPropertyName:
			this.resetState();
			break;

			case PagePredictionEngine.pageSizePropertyName:
			this.resetState();
			break;

		}

	}
	private resetState(): void {
		this._velocityTracker.clear();
		this._currentVelocity = 0;
		let toRemove = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._candidates.valueList.count; i++) {
			if (this._candidates.removedList._inner[i]) {
				continue;
			}
			toRemove.add(this._candidates.valueList._inner[i]);
		}
		for (let i1 = 0; i1 < toRemove.count; i1++) {
			this.removeCandidate(toRemove._inner[i1]);
		}
		if (this.fullCount > 0 && this.pageSize > 0) {
			this._maxPage = <number>truncate(Math.ceil(<number>this.fullCount / <number>this.pageSize));
		}
	}
	private onExecutionContextChanged(): void {
		this.enqueueUpdate();
	}
	private _updateEnqueued: boolean = false;
	enqueueUpdate(): void {
		if (this._updateEnqueued) {
			return;
		}
		if (this.executionContext != null) {
			this._updateEnqueued = true;
			this.executionContext.enqueueAction(runOn(this, this.normalUpdate));
		}
	}
	private normalUpdate(): void {
		this._updateEnqueued = false;
		this.update();
	}
	private update(): void {
		if (this._fullCount == -1 || this._pageSize == -1) {
			return;
		}
		this.enqueueTopPosition();
		this.updateCurrentVelocity();
		this.updatePageCandidates();
		if (this._currentVelocity != 0) {
			this.enqueueSpeedCheck();
		}
	}
	private speedCheckUpdate(): void {
		this._speedCheckEnqueued = false;
		this.update();
	}
	private _speedCheckEnqueued: boolean = false;
	private enqueueSpeedCheck(): void {
		if (this._speedCheckEnqueued) {
			return;
		}
		if (this.executionContext != null) {
			this._speedCheckEnqueued = true;
			this.executionContext.executeDelayed(runOn(this, this.speedCheckUpdate), 0);
		}
	}
	private _candidates: FastIterationDictionary$2<any, number> = new FastIterationDictionary$2<any, number>((<any>Base).$type, Number_$type, 0);
	private _toRemove: List$1<number> = new List$1<number>(Number_$type, 0);
	private updatePageCandidates(): void {
		let firstPage: number = this.getFirstVisiblePage();
		let lastPage: number = this.getLastVisiblePage();
		let notDone: boolean = true;
		let currentPage: number;
		for (let i = firstPage; i <= lastPage; i++) {
			currentPage = i;
			notDone = this.evaluatePage(currentPage, DataSourcePageRequestPriority.High);
		}
		if (this._currentVelocity > 0) {
			currentPage = lastPage;
			while (notDone) {
				currentPage++;
				notDone = this.evaluatePage(currentPage, DataSourcePageRequestPriority.Normal);
			}
		} else if (this._currentVelocity < 0) {
			currentPage = firstPage;
			while (notDone) {
				currentPage--;
				notDone = this.evaluatePage(currentPage, DataSourcePageRequestPriority.Normal);
			}
		}
		this.reEvaluateCandidates();
	}
	private _toConsider: List$1<number> = new List$1<number>(Number_$type, 0);
	private reEvaluateCandidates(): void {
		this._toConsider.clear();
		let keyList = this._candidates.keyList;
		let keyCount = this._candidates.keyList.count;
		let removeList = this._candidates.removedList;
		for (let i = 0; i < keyCount; i++) {
			if (removeList._inner[i]) {
				continue;
			}
			let pageIndex = typeGetValue(keyList._inner[i]);
			this._toConsider.add(pageIndex);
		}
		for (let i1 = 0; i1 < this._toConsider.count; i1++) {
			this.evaluatePage(this._toConsider._inner[i1], DataSourcePageRequestPriority.Normal);
		}
	}
	private evaluatePage(currentPage: number, priority: DataSourcePageRequestPriority): boolean {
		if (currentPage < 0 || currentPage > this._maxPage) {
			return false;
		}
		if (this.pageWillBeVisibleTooShortATime(currentPage)) {
			this.removeCandidate(currentPage);
			return false;
		}
		if (this.pageWontBeVisibleWithinTimeFrame(currentPage, this.fetchAheadMilliseconds)) {
			this.removeCandidate(currentPage);
			return false;
		}
		if (this.tooManyPageCandidates()) {
			this.removeCandidate(currentPage);
			return false;
		}
		this.addCandidate(currentPage, priority);
		return true;
	}
	private addCandidate(currentPage: number, priority: DataSourcePageRequestPriority): void {
		if (!this._candidates.containsKey(currentPage)) {
			if (this._pageCandidatesSink != null) {
				if (this._pageCandidatesSink.addCandidate(currentPage, priority)) {
					this._candidates.add(currentPage, currentPage);
				}
			}
		}
	}
	removeCandidate(currentPage: number): void {
		if (this._candidates.containsKey(currentPage)) {
			this._candidates.remove(currentPage);
			if (this._pageCandidatesSink != null) {
				this._pageCandidatesSink.removeCandidate(currentPage);
			}
		}
	}
	private tooManyPageCandidates(): boolean {
		return this._candidates.count >= this.maximumPageCandidates;
	}
	private pageWontBeVisibleWithinTimeFrame(currentPage: number, fetchAheadMilliseconds: number): boolean {
		let fetchAheadSeconds: number = <number>fetchAheadMilliseconds / 1000;
		let visibilityDistance: number = fetchAheadSeconds * this._currentVelocity;
		if (this.pageIsVisible(currentPage)) {
			return false;
		}
		if (visibilityDistance > 0) {
			let threshold: number = visibilityDistance + this.lastVisibleIndexRequested;
			if (threshold >= (currentPage * this.pageSize)) {
				return false;
			}
		} else {
			let threshold1: number = this.firstVisibleIndexRequested + visibilityDistance;
			if (threshold1 <= ((currentPage * this.pageSize) + this.pageSize)) {
				return false;
			}
		}
		return true;
	}
	private pageIsVisible(currentPage: number): boolean {
		let pageStart = currentPage * this.pageSize;
		let pageEnd = pageStart + this.pageSize;
		if (this.lastVisibleIndexRequested < pageStart || this.firstVisibleIndexRequested > pageEnd) {
			return false;
		}
		return true;
	}
	private pageWillBeVisibleTooShortATime(currentPage: number): boolean {
		let visibilitySeconds: number = <number>this.pageVisibilityDisplayThresholdMilliseconds / 1000;
		let visibilityDistance: number = visibilitySeconds * this._currentVelocity;
		if (visibilityDistance > 0) {
			let threshold: number = visibilityDistance + this.firstVisibleIndexRequested;
			if (threshold > (currentPage * this.pageSize) + this.pageSize) {
				return true;
			}
		} else {
			let threshold1: number = this.lastVisibleIndexRequested + visibilityDistance;
			if (threshold1 < (currentPage * this.pageSize)) {
				return true;
			}
		}
		return false;
	}
	private getFirstVisiblePage(): number {
		return <number>truncate(Math.floor(<number>this.firstVisibleIndexRequested / <number>this.pageSize));
	}
	private getLastVisiblePage(): number {
		return <number>truncate(Math.floor(<number>this.lastVisibleIndexRequested / <number>this.pageSize));
	}
	private updateCurrentVelocity(): void {
		this._currentVelocity = this._velocityTracker.getVelocity().y;
	}
	private _velocityTracker: DataSourceVelocityTracker = new DataSourceVelocityTracker();
	private _currentVelocity: number = 0;
	private enqueueTopPosition(): void {
		this._velocityTracker.trackPoint(<Point>{ $type: Point_$type, x: 0, y: this.firstVisibleIndexRequested });
	}
	protected onDesiredVisibleRangeChanged(): void {
		if (this.executionContext != null) {
			this.executionContext.enqueueAction(runOn(this, this.update));
		}
	}
}


