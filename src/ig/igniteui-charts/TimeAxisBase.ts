/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FastItemDateTimeColumn } from "igniteui-core/FastItemDateTimeColumn";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { IDateTimeAxis, IDateTimeAxis_$type } from "./IDateTimeAxis";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Axis } from "./Axis";
import { List$1 } from "igniteui-core/List$1";
import { Base, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, typeCast, String_$type, Number_$type, Date_$type, Boolean_$type, fromEnum, runOn, delegateRemove, delegateCombine, markType, TypeRegistrar } from "igniteui-core/type";
import { AxisOrientation } from "./AxisOrientation";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { NumericScaler } from "./NumericScaler";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { CategoryMode } from "./CategoryMode";
import { SeriesViewer } from "./SeriesViewer";
import { SortedListView$1 } from "./SortedListView$1";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { Series } from "./Series";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { CoercionInfo } from "./CoercionInfo";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { HorizontalAxisLabelPanel } from "./HorizontalAxisLabelPanel";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathRenderingInfo } from "./PathRenderingInfo";
import { AxisView } from "./AxisView";
import { LabelPosition } from "./LabelPosition";
import { Pool$1 } from "igniteui-core/Pool$1";
import { TextBlock } from "igniteui-core/TextBlock";
import { Rectangle } from "igniteui-core/Rectangle";
import { Panel } from "igniteui-core/Panel";
import { UIElement } from "igniteui-core/UIElement";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { MathUtil } from "igniteui-core/MathUtil";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_ } from "igniteui-core/number";
import { dateMinValue, dateSubtract, dateAdd, dateMaxValue, dateFromTicks } from "igniteui-core/date";

/**
 * @hidden 
 */
export abstract class TimeAxisBase extends CategoryAxisBase implements ISortingAxis, IDateTimeAxis {
	static $t: Type = markType(TimeAxisBase, 'TimeAxisBase', (<any>CategoryAxisBase).$type, [ISortingAxis_$type, IDateTimeAxis_$type]);
	constructor() {
		super();
		FastItemDateTimeColumn.register();
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let scaledValue: number = this.getScaledValueHelper(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, Rect.empty);
			scaledValue = (scaledValue - p.viewportRect.left) / p.viewportRect.width;
			scaledValue = p.viewportRect.left + p.viewportRect.width * (scaledValue - p.windowRect.left) / p.windowRect.width;
			return scaledValue;
		}
		return this.getScaledValueHelper(unscaledValue, p.windowRect, p.viewportRect, p.effectiveViewportRect);
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == this.dateTimeMemberPath) {
			return this.getItemValueByMemberPath(item, memberPathName, <string>this.dateTimeMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	private getScaledValueHelper(unscaledValue: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let scaledValue: number;
		if (+(this.actualMaximumValue) == +(this.actualMinimumValue)) {
			scaledValue = -1;
		} else {
			scaledValue = (unscaledValue - this.actualMinimumValue.getTime()) / (this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime());
		}
		let offset: number = 0;
		if (this.categoryMode == CategoryMode.Mode2) {
			offset = this.getGroupCenter(0, windowRect, viewportRect, effectiveViewportRect);
		}
		if (this.isInverted) {
			scaledValue = 1 - scaledValue;
			offset = -offset;
		}
		return viewportRect.left + viewportRect.width * (scaledValue - windowRect.left) / windowRect.width - offset;
	}
	private getScaledValueHelper1(unscaledValue: number, windowRect: Rect, viewportRect: Rect): number {
		let scaledValue: number;
		if (+(this.actualMaximumValue) == +(this.actualMinimumValue)) {
			scaledValue = -1;
		} else {
			scaledValue = (unscaledValue - this.actualMinimumValue.getTime()) / (this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime());
		}
		let offset: number = 0;
		if (this.isInverted) {
			scaledValue = 1 - scaledValue;
			offset = -offset;
		}
		return viewportRect.left + viewportRect.width * (scaledValue - windowRect.left) / windowRect.width - offset;
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let left: number = p.viewportRect.left;
			let width: number = p.viewportRect.width;
			if (this.categoryMode != CategoryMode.Mode0) {
				let categorySize: number = this.getCategorySize(p.windowRect, p.viewportRect, p.effectiveViewportRect);
				left += categorySize / 2;
				width -= categorySize;
			}
			let unscaledValue: number = p.windowRect.left + p.windowRect.width * (scaledValue - left) / this.width;
			unscaledValue = (unscaledValue * p.viewportRect.width) + p.viewportRect.left;
			unscaledValue = this.getUnscaledValue3(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, this.categoryMode);
			return unscaledValue;
		}
		return this.getUnscaledValue3(scaledValue, p.windowRect, p.viewportRect, this.categoryMode);
	}
	getUnscaledValue3(scaledValue: number, windowRect: Rect, viewportRect: Rect, categoryMode: CategoryMode): number {
		let unscaledValue: number = windowRect.left + windowRect.width * (scaledValue - viewportRect.left) / viewportRect.width;
		if (this.isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		return <number>truncate(Math.floor(this.actualMinimumValue.getTime() + unscaledValue * (this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime())));
	}
	ensureActualMinimumAndMaximum(): void {
		this.initializeActualMinimumAndMaximum();
	}
	initializeActualMinimumAndMaximum(): void {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		let newActualMinimum: Date = <Date>(new Date());
		let newActualMaximum: Date = <Date>(new Date());
		let valid: boolean = false;
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.dateTimeColumn != null) {
			let fastDateColumn = typeCast<FastItemDateTimeColumn>((<any>FastItemDateTimeColumn).$type, this.dateTimeColumn);
			if (fastDateColumn != null) {
				if (this.sortedDateTimeIndices == null) {
					this.populateSortedIndices();
				}
			} else {
				this.sortedDateTimeIndices = null;
			}
			if (this.dateTimeColumn.count > 0) {
				valid = true;
				let firstIndex: number = this.sortedDateTimeIndices == null ? 0 : this.sortedDateTimeIndices._inner[0];
				let lastIndex: number = this.sortedDateTimeIndices == null ? this.dateTimeColumn.count - 1 : this.sortedDateTimeIndices._inner[this.dateTimeColumn.count - 1];
				newActualMinimum = this.dateTimeColumn.item(firstIndex);
				newActualMaximum = this.dateTimeColumn.item(lastIndex);
				this.hasUserInterval = false;
				if (this.categoryMode == CategoryMode.Mode2) {
					let timeOffset: number = this.mode2TimeOffset(newActualMinimum, newActualMaximum);
					if (+newActualMinimum != +(dateMinValue())) {
						newActualMinimum = dateSubtract(+newActualMinimum, +timeOffset);
					}
					newActualMaximum = dateAdd(+newActualMaximum, +timeOffset);
				}
			}
		}
		if (this.minimumValueIsSet()) {
			valid = true;
			newActualMinimum = this.minimumValue;
		}
		if (this.maximumValueIsSet()) {
			valid = true;
			newActualMaximum = this.maximumValue;
		}
		let changing: boolean = +(this.actualMinimumValue) != +newActualMinimum || +(this.actualMaximumValue) != +newActualMaximum;
		if (valid && changing) {
			let oldActualMinimumValue: Date = this.actualMinimumValue;
			let oldActualMaximumValue: Date = this.actualMaximumValue;
			this.actualMinimumValue = newActualMinimum;
			this.actualMaximumValue = newActualMaximum;
			this.updateVisibleRange();
		}
	}
	protected updateVisibleRange(): void {
	}
	private static readonly dateTimeMemberPathPropertyName: string = "DateTimeMemberPath";
	static readonly dateTimeMemberPathProperty: DependencyProperty = DependencyProperty.register(TimeAxisBase.dateTimeMemberPathPropertyName, String_$type, (<any>TimeAxisBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<TimeAxisBase>sender).raisePropertyChanged(TimeAxisBase.dateTimeMemberPathPropertyName, e.oldValue, e.newValue)));
	get dateTimeMemberPath(): string {
		return <string>this.getValue(TimeAxisBase.dateTimeMemberPathProperty);
	}
	set dateTimeMemberPath(value: string) {
		this.setValue(TimeAxisBase.dateTimeMemberPathProperty, value);
	}
	get dateTimeColumn(): IFastItemColumn$1<Date> {
		return this._dateTimeColumn;
	}
	set dateTimeColumn(value: IFastItemColumn$1<Date>) {
		if (this._dateTimeColumn != value) {
			let oldDateTimeColumn: IFastItemColumn$1<Date> = this._dateTimeColumn;
			this._dateTimeColumn = value;
			this.raisePropertyChanged(TimeAxisBase.dateTimeColumnPropertyName, oldDateTimeColumn, this._dateTimeColumn);
		}
	}
	private _dateTimeColumn: IFastItemColumn$1<Date> = null;
	static readonly dateTimeColumnPropertyName: string = "DateTimeColumn";
	private _sorderDateTimeIndices: List$1<number> = null;
	protected get sortedDateTimeIndices(): List$1<number> {
		return this._sorderDateTimeIndices;
	}
	protected set sortedDateTimeIndices(value: List$1<number>) {
		this._sorderDateTimeIndices = value;
	}
	get sortedIndices(): List$1<number> {
		if (this.sortedDateTimeIndices == null) {
			let fastDateColumn: FastItemDateTimeColumn = typeCast<FastItemDateTimeColumn>((<any>FastItemDateTimeColumn).$type, this.dateTimeColumn);
			if (fastDateColumn != null) {
				this.populateSortedIndices();
			} else {
				this.sortedDateTimeIndices = null;
			}
		}
		return this.sortedDateTimeIndices;
	}
	protected populateSortedIndices(): void {
		if (this.isDataPreSorted) {
			this.sortedDateTimeIndices = new List$1<number>(Number_$type, 0);
			let sortedIndices = this.sortedDateTimeIndices;
			let count = this.dateTimeColumn.count;
			for (let i = 0; i < count; i++) {
				sortedIndices.add(i);
			}
		} else {
			let fastDateColumn: FastItemDateTimeColumn = typeCast<FastItemDateTimeColumn>((<any>FastItemDateTimeColumn).$type, this.dateTimeColumn);
			this.sortedDateTimeIndices = fastDateColumn.getSortedIndices();
		}
	}
	getFirstVisibleIndex(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): number {
		return this.firstVisibleIndex1(windowRect, viewportRect, effectiveViewportRect, contentViewport);
	}
	protected firstVisibleIndex1(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): number {
		if (viewportRect.isEmpty) {
			return -1;
		}
		let resolvedViewportRect: Rect = contentViewport;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let x0: number, x1: number;
		if (this.isInverted) {
			x1 = this.getUnscaledValue(resolvedViewportRect.left, xParams);
			x0 = this.getUnscaledValue(resolvedViewportRect.right, xParams);
		} else {
			x0 = this.getUnscaledValue(resolvedViewportRect.left, xParams);
			x1 = this.getUnscaledValue(resolvedViewportRect.right, xParams);
		}
		let retVal: number = Math.max(dateMinValue().getTime(), Math.min(dateMaxValue().getTime(), <number>truncate(x0)));
		return this.firstVisibleIndex(dateFromTicks(retVal));
	}
	protected firstVisibleIndex(fromDate: Date): number {
		if (this.dateTimeColumn == null || this.sortedDateTimeIndices.count != this.dateTimeColumn.count) {
			return -1;
		}
		for (let i: number = 0; i < this.sortedDateTimeIndices.count; i++) {
			let currentDateTime: Date = this.dateTimeColumn.item(this.sortedDateTimeIndices._inner[i]);
			if (currentDateTime >= fromDate) {
				return Math.max(i - 1, 0);
			}
		}
		return this.sortedDateTimeIndices.count - 1;
	}
	getLastVisibleIndex(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): number {
		return this.lastVisibleIndex1(windowRect, viewportRect, effectiveViewportRect, contentViewport);
	}
	protected lastVisibleIndex1(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): number {
		if (viewportRect.isEmpty) {
			return -1;
		}
		let resolvedViewportRect: Rect = contentViewport;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let x0: number, x1: number;
		if (this.isInverted) {
			x1 = this.getUnscaledValue(resolvedViewportRect.left, xParams);
			x0 = this.getUnscaledValue(resolvedViewportRect.right, xParams);
		} else {
			x0 = this.getUnscaledValue(resolvedViewportRect.left, xParams);
			x1 = this.getUnscaledValue(resolvedViewportRect.right, xParams);
		}
		let retVal: number = Math.max(dateMinValue().getTime(), Math.min(dateMaxValue().getTime(), <number>truncate(x1)));
		return this.lastVisibleIndex(dateFromTicks(retVal));
	}
	protected lastVisibleIndex(toDate: Date): number {
		if (this.dateTimeColumn == null || this.sortedDateTimeIndices.count != this.dateTimeColumn.count) {
			return -1;
		}
		for (let i: number = this.sortedDateTimeIndices.count - 1; i >= 0; i--) {
			let sortedIndex: number = this.sortedDateTimeIndices._inner[i];
			let currentDateTime: Date = this.dateTimeColumn.item(sortedIndex);
			if (currentDateTime < toDate) {
				return i == this.sortedDateTimeIndices.count - 1 ? i : i + 1;
			}
		}
		return 0;
	}
	getUnscaledValueAt(index: number): number {
		if (this.dateTimeColumn == null) {
			return NaN;
		}
		let date: Date = this._dateTimeColumn.item(index);
		let ticks: number = date.getTime();
		let ticksAsDouble: number = <number>ticks;
		return ticksAsDouble;
	}
	getExactUnsortedIndexClosestToUnscaledValue(unscaledValue: number): number {
		let sorting: ISortingAxis = this;
		if (sorting.sortedIndices == null) {
			return -1;
		}
		let view = new SortedListView$1<Date>(Date_$type, this.dateTimeColumn, sorting.sortedIndices);
		let ticks_ = unscaledValue;
		let target: Date = <Date>(new Date(ticks_));
		let res = this.getSearchResult(target, view);
		if (res >= 0 && res < sorting.sortedIndices.count && res - 1 >= 0 && res - 1 < sorting.sortedIndices.count) {
			let diff1_: number = target.getTime() - view.item(res - 1).getTime();
			let diff2_: number = view.item(res).getTime() - target.getTime();
			let prev = res - 1;
			let next = res;
			if (prev < 0 && next >= 0) {
				return next;
			}
			if (next > sorting.sortedIndices.count - 1 && prev < sorting.sortedIndices.count) {
				return prev;
			}
			if (prev < 0 && next < 0) {
				return -1;
			}
			if (prev > sorting.sortedIndices.count - 1 && next > sorting.sortedIndices.count - 1) {
				return -1;
			}
			let p = diff1_ / <number>(diff1_ + diff2_);
			if (isNaN_(p)) {
				p = 0;
			}
			return <number>prev + p;
		}
		if (res >= 0 && res < sorting.sortedIndices.count) {
			return res;
		}
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		if (res == sorting.sortedIndices.count && this.seriesViewer != null && this.getScaledValue(unscaledValue, new ScalerParams(0, this.seriesViewer.actualWindowRect, this.viewportRect, this.isInverted, effectiveViewportRect)) < (this.viewportRect.right + 2)) {
			return res - 1;
		}
		if (res == -1 && this.seriesViewer != null && Math.abs(this.getScaledValue(unscaledValue, new ScalerParams(0, this.seriesViewer.actualWindowRect, this.viewportRect, this.isInverted, effectiveViewportRect)) - this.viewportRect.left) < 2) {
			return 0;
		}
		return -1;
	}
	protected getSearchResult(target: Date, view: SortedListView$1<Date>): number {
		let sorting: ISortingAxis = this;
		if (this.dateTimeColumn == null || sorting.sortedIndices == null) {
			return -1;
		}
		let res: number = -1;
		let result = ArrayExtension.binarySearch$11<Date>(Date_$type, view, (item: Date) => {
			if (target < item) {
				return -1;
			}
			if (target > item) {
				return 1;
			}
			return 0;
		});
		if (result >= 0) {
			res = result;
		} else {
			res = ~result;
		}
		while (res >= 0 && res < view.count && res - 1 >= 0 && +(view.item(res)) == +(view.item(res - 1))) {
			res--;
		}
		return res;
	}
	getIndexClosestToUnscaledValue(unscaledValue: number): number {
		let sorting: ISortingAxis = this;
		if (sorting.sortedIndices == null || this.dateTimeColumn == null || sorting.sortedIndices.count != this.dateTimeColumn.count) {
			return -1;
		}
		let view = new SortedListView$1<Date>(Date_$type, this.dateTimeColumn, sorting.sortedIndices);
		let ticks_ = unscaledValue;
		let target: Date = <Date>(new Date(ticks_));
		let res = this.getSearchResult(target, view);
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		if (res >= 0 && res < sorting.sortedIndices.count && res - 1 >= 0 && res - 1 < sorting.sortedIndices.count) {
			let diff1: number = +target - +(view.item(res - 1));
			let diff2: number = +(view.item(res)) - +target;
			if (diff1 < diff2) {
				res = res - 1;
			}
		}
		if (res >= 0 && res < sorting.sortedIndices.count) {
			return sorting.sortedIndices._inner[res];
		}
		if (res == sorting.sortedIndices.count && this.seriesViewer != null && this.getScaledValue(unscaledValue, new ScalerParams(0, this.seriesViewer.actualWindowRect, this.viewportRect, this.isInverted, effectiveViewportRect)) < (this.viewportRect.right + 2)) {
			return res - 1;
		}
		if (res == -1 && this.seriesViewer != null && Math.abs(this.getScaledValue(unscaledValue, new ScalerParams(0, this.seriesViewer.actualWindowRect, this.viewportRect, this.isInverted, effectiveViewportRect)) - this.viewportRect.left) < 2) {
			return 0;
		}
		return -1;
	}
	notifyDataChanged(): void {
		this.sortedDateTimeIndices = null;
		this.renderAxis();
	}
	static readonly isDataPreSortedPropertyName: string = "IsDataPreSorted";
	static readonly isDataPreSortedProperty: DependencyProperty = DependencyProperty.register(TimeAxisBase.isDataPreSortedPropertyName, Boolean_$type, (<any>TimeAxisBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<TimeAxisBase>sender).raisePropertyChanged(TimeAxisBase.isDataPreSortedPropertyName, e.oldValue, e.newValue)));
	get isDataPreSorted(): boolean {
		return <boolean>this.getValue(TimeAxisBase.isDataPreSortedProperty);
	}
	set isDataPreSorted(value: boolean) {
		this.setValue(TimeAxisBase.isDataPreSortedProperty, value);
	}
	private _hasUserInterval: boolean = false;
	protected get_hasUserInterval(): boolean {
		return this._hasUserInterval;
	}
	protected set_hasUserInterval(value: boolean): void {
		this._hasUserInterval = value;
	}
	get hasUserInterval(): boolean {
		return this.get_hasUserInterval();
	}
	set hasUserInterval(value: boolean) {
		this.set_hasUserInterval(value);
	}
	provideDateTimeMemberPath(memberPath: string): void {
		super.provideDateTimeMemberPath(memberPath);
		this.dateTimeMemberPath = memberPath;
	}
	provideValidRangeMinimum(minimumValue: any): void {
		super.provideValidRangeMinimum(minimumValue);
		this.minimumValue = <Date>minimumValue;
	}
	provideValidRangeMaximum(maximumValue: any): void {
		super.provideValidRangeMinimum(maximumValue);
		this.maximumValue = <Date>maximumValue;
	}
	updateRangeOverride(): boolean {
		if (this.mustInvalidateLabels && this.useEnhancedIntervalManagement) {
			this.labelFontHeuristics = this.gatherLabelFontHeuristics();
		}
		let oldMin: number = this.actualMinimumValue.getTime();
		let oldMax: number = this.actualMaximumValue.getTime();
		this.initializeActualMinimumAndMaximum();
		let newMin: number = !this.minimumValueIsSet() ? this.actualMinimumValue.getTime() : this.minimumValue.getTime();
		let newMax: number = !this.maximumValueIsSet() ? this.actualMaximumValue.getTime() : this.maximumValue.getTime();
		let ea: AxisRangeChangedEventArgs = new AxisRangeChangedEventArgs(0, oldMin, newMin, oldMax, newMax);
		this.raiseRangeChanged(ea);
		return true;
	}
	protected minimumValueIsSet(): boolean {
		if (+(this.minimumValue) == +(dateMinValue())) {
			return false;
		}
		return <boolean>((<any>this.minimumValue) != null);
	}
	protected maximumValueIsSet(): boolean {
		if (+(this.maximumValue) == +(dateMaxValue())) {
			return false;
		}
		return <boolean>((<any>this.maximumValue) != null);
	}
	private static readonly actualMinimumValuePropertyName: string = "ActualMinimumValue";
	private _actualMinimumValue: Date = dateMaxValue();
	get actualMinimumValue(): Date {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: Date) {
		let changed: boolean = +(this._actualMinimumValue) != +value;
		if (changed) {
			let oldValue: any = this._actualMinimumValue;
			this._actualMinimumValue = value;
			this.raisePropertyChanged(TimeAxisBase.actualMinimumValuePropertyName, oldValue, value);
		}
	}
	static readonly actualMaximumValuePropertyName: string = "ActualMaximumValue";
	private _actualMaximumValue: Date = dateMinValue();
	resolveActualMinimumValue(): any {
		return this.actualMinimumValue;
	}
	get actualMaximumValue(): Date {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: Date) {
		let changed: boolean = +(this._actualMaximumValue) != +value;
		if (changed) {
			let oldValue: any = this._actualMaximumValue;
			this._actualMaximumValue = value;
			this.raisePropertyChanged(TimeAxisBase.actualMaximumValuePropertyName, oldValue, value);
		}
	}
	resolveActualMaximumValue(): any {
		return this.maximumValue;
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(TimeAxisBase.minimumValuePropertyName, Date_$type, (<any>TimeAxisBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<TimeAxisBase>sender).raisePropertyChanged(TimeAxisBase.minimumValuePropertyName, e.oldValue, e.newValue)));
	get minimumValue(): Date {
		return <Date>this.getValue(TimeAxisBase.minimumValueProperty);
	}
	set minimumValue(value: Date) {
		this.setValue(TimeAxisBase.minimumValueProperty, value);
	}
	static readonly maximumValuePropertyName: string = "MaximumValue";
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(TimeAxisBase.maximumValuePropertyName, Date_$type, (<any>TimeAxisBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<TimeAxisBase>sender).raisePropertyChanged(TimeAxisBase.maximumValuePropertyName, e.oldValue, e.newValue)));
	get maximumValue(): Date {
		return <Date>this.getValue(TimeAxisBase.maximumValueProperty);
	}
	set maximumValue(value: Date) {
		this.setValue(TimeAxisBase.maximumValueProperty, value);
	}
	private renderAxisAndSeries(animate: boolean): void {
		this.renderAxisOverride(animate);
		if (this.fastItemsSource == null) {
			return;
		}
		for (let currentSeries of fromEnum<Series>(this.directSeries())) {
			currentSeries.renderSeries(animate);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryAxisBase.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastItemsSource != null) {
				oldFastItemsSource.deregisterColumn(this.dateTimeColumn);
				this.dateTimeColumn = null;
				oldFastItemsSource.event = delegateRemove(oldFastItemsSource.event, runOn(this, this.fastItemsSource_Event));
			}
			let newFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue);
			if (newFastItemsSource != null) {
				this.sortedDateTimeIndices = null;
				this.dateTimeColumn = this.registerDateTimeColumn(this.dateTimeMemberPath);
				newFastItemsSource.event = delegateCombine(newFastItemsSource.event, runOn(this, this.fastItemsSource_Event));
			}
			this.renderAxisAndSeries(false);
			break;

			case TimeAxisBase.dateTimeMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.dateTimeColumn);
				this.dateTimeColumn = this.registerDateTimeColumn(this.dateTimeMemberPath);
				this.sortedDateTimeIndices = null;
			}
			break;

			case TimeAxisBase.minimumValuePropertyName:
			this.updateRange();
			this.renderAxisAndSeries(false);
			break;

			case TimeAxisBase.maximumValuePropertyName:
			this.updateRange();
			this.renderAxisAndSeries(false);
			break;

			case TimeAxisBase.dateTimeColumnPropertyName:
			this.initializeActualMinimumAndMaximum();
			break;

		}

	}
	private fastItemsSource_Event(sender: any, e: FastItemsSourceEventArgs): void {
		this.sortedDateTimeIndices = null;
	}
	protected registerDateTimeColumn(memberPath: string): IFastItemColumn$1<Date> {
		return TimeAxisBase.registerDateTimeColumn1(memberPath, this);
	}
	static registerDateTimeColumn1(memberPath: string, axis: CategoryAxisBase): IFastItemColumn$1<Date> {
		if (memberPath == null) {
			return axis.fastItemsSource.registerColumnDateTime(null, null, false);
		}
		let coercionMethod: (arg1: any) => any = null;
		let info = SeriesViewer.getCoercionMethod(memberPath, axis.coercionMethods);
		coercionMethod = info.coercionMethod;
		return axis.fastItemsSource.registerColumnDateTime(memberPath, coercionMethod, axis.expectFunctions);
	}
	createLabelPanel(): AxisLabelPanelBase {
		if (this.useSmartAxis) {
			return <AxisLabelPanelBase>(TypeRegistrar.create('HorizontalSmartAxisLabelPanel'));
		} else {
			return new HorizontalAxisLabelPanel();
		}
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Horizontal;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
		let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
		let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
		let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
		let axisLinesPathInfo: PathRenderingInfo = this.view.getAxisLinesPathInfo();
		let majorLinesPathInfo: PathRenderingInfo = this.view.getMajorLinesPathInfo();
		let minorLinesPathInfo: PathRenderingInfo = this.view.getMinorLinesPathInfo();
		this.updateLineVisibility();
		this.clearMarks(axisGeometry);
		this.clearMarks(stripsGeometry);
		this.clearMarks(majorGeometry);
		this.clearMarks(minorGeometry);
		this.labelDataContext.clear();
		this.labelPositions.clear();
		this.majorLinePositions.clear();
		this.labelPanel.axis = this;
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		this.labelPanel.windowRect = windowRect;
		this.labelPanel.viewportRect = viewportRect;
		if (windowRect.isEmpty || viewportRect.isEmpty) {
			this.textBlocks.count = 0;
			this.annotationTextBlocks.count = 0;
			this.annotationBackings.count = 0;
		}
		if (this.textBlocks.count == 0) {
			this.labelPanel.children.clear();
		}
		if (this.labelSettings != null) {
			this.labelSettings.registerAxis(this);
		}
		this.initializeActualMinimumAndMaximum();
	}
	protected get_isDateTime(): boolean {
		return true;
	}
	protected startCursor(): void {
	}
	protected resetCursor(): void {
	}
	StartTimeCursor(): void {
		this.startCursor();
	}
	ResetTimeCursor(): void {
		this.resetCursor();
	}
	getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		if (this.cachedItemsCount == 0) {
			return 0;
		}
		let resolvedViewportRect: Rect = this.getInitialSafeViewport(viewportRect, effectiveViewportRect);
		return resolvedViewportRect.width / (this.cachedItemsCount * windowRect.width);
	}
	getGroupCenter(groupIndex: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		return this.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * 0.5;
	}
	getGroupSize(windowRect: Rect, viewportRect: Rect, effectiveviewportRect: Rect): number {
		let gap: number = !isNaN_(this.gap) ? MathUtil.clamp(this.gap, 0, 1) : 0;
		let categorySpace: number = 1 - 0.5 * gap;
		let ret: number = this.getCategorySize(windowRect, viewportRect, effectiveviewportRect) * categorySpace;
		return ret;
	}
	protected get_isSorting(): boolean {
		return true;
	}
	protected mode2TimeOffset(min: Date, max: Date): number {
		return (0);
	}
	preferredCategoryMode(series: Series): CategoryMode {
		return this.isCategoryDateTime ? CategoryMode.Mode0 : CategoryMode.Mode1;
	}
}


