/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, IList$1, IList$1_$type, Base, Type, markType, typeCast, IEnumerable$1, IEnumerable$1_$type, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, NotSupportedException, ICollection$1, ICollection$1_$type, IEnumerable, IEnumerable_$type, Point_$type, String_$type, Boolean_$type, runOn, Number_$type, enumGetBox, EnumUtil, fromEnum, toEnum, Date_$type, PointUtil, Delegate_$type } from "igniteui-core/type";
import { IBucketizer, IBucketizer_$type } from "./IBucketizer";
import { ArgumentNullException } from "igniteui-core/ArgumentNullException";
import { IFastItemColumn$1, IFastItemColumn$1_$type } from "igniteui-core/IFastItemColumn$1";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { SeriesView } from "./SeriesView";
import { Axis } from "./Axis";
import { truncate, intDivide, isInfinity, isNaN_ } from "igniteui-core/number";
import { IHasCategoryAxis, IHasCategoryAxis_$type } from "./IHasCategoryAxis";
import { IHasCategoryModePreference, IHasCategoryModePreference_$type } from "./IHasCategoryModePreference";
import { Brush } from "igniteui-core/Brush";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { HighlightingInfo } from "./HighlightingInfo";
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from "./CategoryTransitionInMode";
import { CategoryTransitionSourceFramePreparer } from "./CategoryTransitionSourceFramePreparer";
import { CategoryFrame } from "./CategoryFrame";
import { CategoryMode, CategoryMode_$type } from "./CategoryMode";
import { ITimeRangeSelectorAxis, ITimeRangeSelectorAxis_$type } from "./ITimeRangeSelectorAxis";
import { FastReflectionHelper } from "igniteui-core/FastReflectionHelper";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { Control } from "igniteui-core/Control";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { SeriesViewer } from "./SeriesViewer";
import { AssigningCategoryStyleEventArgsBase } from "./AssigningCategoryStyleEventArgsBase";
import { IHighlightingManager } from "./IHighlightingManager";
import { FinancialValueList } from "./FinancialValueList";
import { Frame } from "./Frame";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { CategoryXAxis } from "./CategoryXAxis";
import { TransitionInSpeedType } from "./TransitionInSpeedType";
import { NumericAxisBase } from "./NumericAxisBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { Thread } from "igniteui-core/culture";
import { SafeSortedReadOnlyDoubleCollection } from "./SafeSortedReadOnlyDoubleCollection";
import { SafeReadOnlyDoubleCollection } from "./SafeReadOnlyDoubleCollection";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { SafeEnumerable } from "./SafeEnumerable";
import { CalculatedColumn } from "./CalculatedColumn";
import { TrendCalculators } from "igniteui-core/TrendCalculators";
import { ColumnSupportingCalculation } from "./ColumnSupportingCalculation";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { IDateTimeAxis, IDateTimeAxis_$type } from "./IDateTimeAxis";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { CategorySeries } from "./CategorySeries";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { dateToStringFormat } from "igniteui-core/dateExtended";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { SRProvider } from "igniteui-core/SRProvider";
import { Color } from "igniteui-core/Color";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class FinancialEventArgs extends EventArgs {
	static $t: Type = markType(FinancialEventArgs, 'FinancialEventArgs', (<any>EventArgs).$type);
	constructor(position: number, count: number, dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations, series: FinancialSeries) {
		super();
		this.position = position;
		this.count = count;
		this.dataSource = dataSource;
		this.supportingCalculations = supportingCalculations;
		if (dataSource != null) {
			dataSource.series = series;
		}
	}
	private _position: number = 0;
	get position(): number {
		return this._position;
	}
	set position(value: number) {
		this._position = value;
	}
	private _count: number = 0;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
	}
	private _dataSource: FinancialCalculationDataSource = null;
	get dataSource(): FinancialCalculationDataSource {
		return this._dataSource;
	}
	set dataSource(value: FinancialCalculationDataSource) {
		this._dataSource = value;
	}
	private _supportingCalculations: FinancialCalculationSupportingCalculations = null;
	get supportingCalculations(): FinancialCalculationSupportingCalculations {
		return this._supportingCalculations;
	}
	set supportingCalculations(value: FinancialCalculationSupportingCalculations) {
		this._supportingCalculations = value;
	}
	private _basedOn: IList$1<string> = null;
	get basedOn(): IList$1<string> {
		return this._basedOn;
	}
	set basedOn(value: IList$1<string>) {
		this._basedOn = value;
	}
}

/**
 * @hidden 
 */
export class FinancialBucketCalculator extends Base implements IBucketizer {
	static $t: Type = markType(FinancialBucketCalculator, 'FinancialBucketCalculator', (<any>Base).$type, [IBucketizer_$type]);
	private _view: FinancialSeriesView = null;
	protected get view(): FinancialSeriesView {
		return this._view;
	}
	protected set view(value: FinancialSeriesView) {
		this._view = value;
	}
	constructor(view: FinancialSeriesView) {
		super();
		if (view == null) {
			throw new ArgumentNullException(0, "view");
		}
		this.view = view;
		this.firstBucket = -1;
		this.lastBucket = this.lastBucket;
		this.bucketSize = 0;
	}
	getBucket(index: number): number[] {
		return null;
	}
	getBucketWithoutUnknowns(index: number): number[] {
		return this.getBucket(index);
	}
	getErrorBucket(index: number, column: IFastItemColumn$1<number>): number {
		return NaN;
	}
	private _firstBucket: number = 0;
	get firstBucket(): number {
		return this._firstBucket;
	}
	set firstBucket(value: number) {
		this._firstBucket = value;
	}
	private _lastBucket: number = 0;
	get lastBucket(): number {
		return this._lastBucket;
	}
	set lastBucket(value: number) {
		this._lastBucket = value;
	}
	private _bucketSize: number = 0;
	get bucketSize(): number {
		return this._bucketSize;
	}
	set bucketSize(value: number) {
		this._bucketSize = value;
	}
	getBucketInfo(firstBucket: number, lastBucket: number, bucketSize: number, resolution: number): { p0: number; p1: number; p2: number; p3: number; } {
		firstBucket = this.firstBucket;
		lastBucket = this.lastBucket;
		bucketSize = this.bucketSize;
		resolution = this.view.financialModel.resolution;
		return {
			p0: firstBucket,
			p1: lastBucket,
			p2: bucketSize,
			p3: resolution

		};
	}
	calculateBuckets(resolution: number): void {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.view.viewport;
		if (this.view.financialModel != null) {
			effectiveViewportRect = this.view.financialModel.getEffectiveViewport1(this.view);
		}
		if (windowRect.isEmpty || viewportRect.isEmpty || this.view.financialModel.xAxis == null) {
			this.bucketSize = 0;
			return;
		}
		let xIsInverted = (this.view.financialModel.xAxis != null) ? this.view.financialModel.xAxis.isInverted : false;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xIsInverted, effectiveViewportRect);
		let contentViewport = this.view.financialModel.getContentViewport(this.view);
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.view.financialModel.xAxis);
		if (sortingXAxis == null || sortingXAxis.sortedIndices == null) {
			let x0: number = Math.floor(this.view.financialModel.xAxis.getUnscaledValue(contentViewport.left, xParams));
			let x1: number = Math.ceil(this.view.financialModel.xAxis.getUnscaledValue(contentViewport.right, xParams));
			if (this.view.financialModel.xAxis.isInverted) {
				x1 = Math.ceil(this.view.financialModel.xAxis.getUnscaledValue(contentViewport.left, xParams));
				x0 = Math.floor(this.view.financialModel.xAxis.getUnscaledValue(contentViewport.right, xParams));
			}
			let c: number = Math.floor((x1 - x0 + 1) * resolution / contentViewport.width);
			this.bucketSize = <number>truncate(Math.max(1, c));
			this.firstBucket = <number>truncate(Math.floor(x0 / this.bucketSize));
			this.lastBucket = <number>truncate(Math.ceil(x1 / this.bucketSize));
		} else {
			this.firstBucket = sortingXAxis.getFirstVisibleIndex(windowRect, viewportRect, effectiveViewportRect, contentViewport);
			this.lastBucket = sortingXAxis.getLastVisibleIndex(windowRect, viewportRect, effectiveViewportRect, contentViewport);
			this.bucketSize = 1;
		}
	}
	cacheValues(): void {
	}
	unCacheValues(): void {
	}
}

/**
 * @hidden 
 */
export abstract class FinancialSeries extends Series implements IHasCategoryAxis, IHasCategoryModePreference {
	static $t: Type = markType(FinancialSeries, 'FinancialSeries', (<any>Series).$type, [IHasCategoryAxis_$type, IHasCategoryModePreference_$type]);
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.financialView = <FinancialSeriesView>view;
	}
	private _financialView: FinancialSeriesView;
	get financialView(): FinancialSeriesView {
		return this._financialView;
	}
	set financialView(value: FinancialSeriesView) {
		this._financialView = value;
	}
	protected get_isFinancial(): boolean {
		return true;
	}
	getAxes(): Axis[] {
		return <Axis[]>[ this.xAxis, this.yAxis ];
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == FinancialSeries.openMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.openMemberPath);
		}
		if (resolved == FinancialSeries.highMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.highMemberPath);
		}
		if (resolved == FinancialSeries.lowMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.lowMemberPath);
		}
		if (resolved == FinancialSeries.closeMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.closeMemberPath);
		}
		if (resolved == FinancialSeries.volumeMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.volumeMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	protected getHighIndexInBucket(): number {
		return 2;
	}
	private getCloseIndexInBucket(): number {
		return 4;
	}
	getHighStrokeSegments(position: Point): Point[][] {
		let matching = this.getMatchingBuckets(this.xAxis, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), this.toWorldPosition(position), true);
		if (matching == null) {
			return null;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let ret: Point[][] = <Point[][]>new Array(1);
		let seg: Point[] = <Point[]>new Array(2);
		let highIndex: number = this.getHighIndexInBucket();
		seg[0] = <Point>{ $type: Point_$type, x: prevBucketValue[0], y: prevBucketValue[highIndex] };
		seg[1] = <Point>{ $type: Point_$type, x: nextBucketValue[0], y: nextBucketValue[highIndex] };
		ret[0] = seg;
		return ret;
	}
	getLowStrokeSegments(position: Point): Point[][] {
		let matching = this.getMatchingBuckets(this.xAxis, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), this.toWorldPosition(position), true);
		if (matching == null) {
			return null;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let ret: Point[][] = <Point[][]>new Array(1);
		let seg: Point[] = <Point[]>new Array(2);
		seg[0] = <Point>{ $type: Point_$type, x: prevBucketValue[0], y: prevBucketValue[1] };
		seg[1] = <Point>{ $type: Point_$type, x: nextBucketValue[0], y: nextBucketValue[1] };
		ret[0] = seg;
		return ret;
	}
	constructor() {
		super();
		this.renderManager = new CategorySeriesRenderManager();
		this.actualIsCustomCategoryStyleAllowed = false;
		this.sourceFramePreparer = new CategoryTransitionSourceFramePreparer();
		this.thumbnailFrame = new CategoryFrame(3);
		this.defaultStyleKey = (<any>FinancialSeries).$type;
		this.categoryMode = CategoryMode.Mode0;
	}
	get negativeBrush(): Brush {
		return <Brush>this.getValue(FinancialSeries.negativeBrushProperty);
	}
	set negativeBrush(value: Brush) {
		this.setValue(FinancialSeries.negativeBrushProperty, value);
	}
	resolveNegativeBrush(): Brush {
		return this.negativeBrush;
	}
	static readonly negativeBrushPropertyName: string = "NegativeBrush";
	static readonly negativeBrushProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.negativeBrushPropertyName, (<any>Brush).$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.negativeBrushPropertyName, e.oldValue, e.newValue)));
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	get xAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.getValue(FinancialSeries.xAxisProperty);
	}
	set xAxis(value: CategoryAxisBase) {
		this.setValue(FinancialSeries.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.xAxisPropertyName, (<any>CategoryAxisBase).$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(FinancialSeries.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(FinancialSeries.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.yAxisPropertyName, e.oldValue, e.newValue)));
	get openMemberPath(): string {
		return <string>this.getValue(FinancialSeries.openMemberPathProperty);
	}
	set openMemberPath(value: string) {
		this.setValue(FinancialSeries.openMemberPathProperty, value);
	}
	static readonly openMemberPathPropertyName: string = "OpenMemberPath";
	static readonly openMemberPathProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.openMemberPathPropertyName, String_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.openMemberPathPropertyName, e.oldValue, e.newValue)));
	get openColumn(): IFastItemColumn$1<number> {
		return this._openColumn;
	}
	set openColumn(value: IFastItemColumn$1<number>) {
		if (this._openColumn != value) {
			let oldOpenColumn: IFastItemColumn$1<number> = this._openColumn;
			this._openColumn = value;
			this.raisePropertyChanged(FinancialSeries.openColumnPropertyName, oldOpenColumn, this._openColumn);
		}
	}
	private _openColumn: IFastItemColumn$1<number> = null;
	static readonly openColumnPropertyName: string = "OpenColumn";
	get highMemberPath(): string {
		return <string>this.getValue(FinancialSeries.highMemberPathProperty);
	}
	set highMemberPath(value: string) {
		this.setValue(FinancialSeries.highMemberPathProperty, value);
	}
	static readonly highMemberPathPropertyName: string = "HighMemberPath";
	static readonly highMemberPathProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.highMemberPathPropertyName, String_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.highMemberPathPropertyName, e.oldValue, e.newValue)));
	get highColumn(): IFastItemColumn$1<number> {
		return this._highColumn;
	}
	set highColumn(value: IFastItemColumn$1<number>) {
		if (this._highColumn != value) {
			let oldHighColumn: IFastItemColumn$1<number> = this._highColumn;
			this._highColumn = value;
			this.raisePropertyChanged(FinancialSeries.highColumnPropertyName, oldHighColumn, this._highColumn);
		}
	}
	private _highColumn: IFastItemColumn$1<number> = null;
	static readonly highColumnPropertyName: string = "HighColumn";
	get lowMemberPath(): string {
		return <string>this.getValue(FinancialSeries.lowMemberPathProperty);
	}
	set lowMemberPath(value: string) {
		this.setValue(FinancialSeries.lowMemberPathProperty, value);
	}
	static readonly lowMemberPathPropertyName: string = "LowMemberPath";
	static readonly lowMemberPathProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.lowMemberPathPropertyName, String_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.lowMemberPathPropertyName, e.oldValue, e.newValue)));
	get lowColumn(): IFastItemColumn$1<number> {
		return this._lowColumn;
	}
	set lowColumn(value: IFastItemColumn$1<number>) {
		if (this._lowColumn != value) {
			let oldLowColumn: IFastItemColumn$1<number> = this._lowColumn;
			this._lowColumn = value;
			this.raisePropertyChanged(FinancialSeries.lowColumnPropertyName, oldLowColumn, this._lowColumn);
		}
	}
	private _lowColumn: IFastItemColumn$1<number> = null;
	static readonly lowColumnPropertyName: string = "LowColumn";
	get closeMemberPath(): string {
		return <string>this.getValue(FinancialSeries.closeMemberPathProperty);
	}
	set closeMemberPath(value: string) {
		this.setValue(FinancialSeries.closeMemberPathProperty, value);
	}
	static readonly closeMemberPathPropertyName: string = "CloseMemberPath";
	static readonly closeMemberPathProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.closeMemberPathPropertyName, String_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.closeMemberPathPropertyName, e.oldValue, e.newValue)));
	get closeColumn(): IFastItemColumn$1<number> {
		return this._closeColumn;
	}
	set closeColumn(value: IFastItemColumn$1<number>) {
		if (this._closeColumn != value) {
			let oldCloseColumn: IFastItemColumn$1<number> = this._closeColumn;
			this._closeColumn = value;
			this.raisePropertyChanged(FinancialSeries.closeColumnPropertyName, oldCloseColumn, this._closeColumn);
		}
	}
	private _closeColumn: IFastItemColumn$1<number> = null;
	static readonly closeColumnPropertyName: string = "CloseColumn";
	get volumeMemberPath(): string {
		return <string>this.getValue(FinancialSeries.volumeMemberPathProperty);
	}
	set volumeMemberPath(value: string) {
		this.setValue(FinancialSeries.volumeMemberPathProperty, value);
	}
	static readonly volumeMemberPathPropertyName: string = "VolumeMemberPath";
	static readonly volumeMemberPathProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.volumeMemberPathPropertyName, String_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.volumeMemberPathPropertyName, e.oldValue, e.newValue)));
	get volumeColumn(): IFastItemColumn$1<number> {
		return this._volumeColumn;
	}
	set volumeColumn(value: IFastItemColumn$1<number>) {
		if (this._volumeColumn != value) {
			let oldVolumeColumn: IFastItemColumn$1<number> = this._volumeColumn;
			this._volumeColumn = value;
			this.raisePropertyChanged(FinancialSeries.volumeColumnPropertyName, oldVolumeColumn, this._volumeColumn);
		}
	}
	private _volumeColumn: IFastItemColumn$1<number> = null;
	static readonly volumeColumnPropertyName: string = "VolumeColumn";
	get isCustomCategoryStyleAllowed(): boolean {
		return <boolean>this.getValue(FinancialSeries.isCustomCategoryStyleAllowedProperty);
	}
	set isCustomCategoryStyleAllowed(value: boolean) {
		this.setValue(FinancialSeries.isCustomCategoryStyleAllowedProperty, value);
	}
	static readonly isCustomCategoryStyleAllowedPropertyName: string = "IsCustomCategoryStyleAllowed";
	static readonly isCustomCategoryStyleAllowedProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.isCustomCategoryStyleAllowedPropertyName, Boolean_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.isCustomCategoryStyleAllowedPropertyName, e.oldValue, e.newValue)));
	private _actualIsCustomCategoryStyleAllowed: boolean = false;
	protected get actualIsCustomCategoryStyleAllowed(): boolean {
		return this._actualIsCustomCategoryStyleAllowed;
	}
	protected set actualIsCustomCategoryStyleAllowed(value: boolean) {
		this._actualIsCustomCategoryStyleAllowed = value;
	}
	assigningCategoryStyle: (sender: any, args: AssigningCategoryStyleEventArgs) => void = null;
	protected shouldOverrideCategoryStyle(): boolean {
		return (this.assigningCategoryStyle != null && this.actualIsCustomCategoryStyleAllowed) || this.isHighlightingEnabled;
	}
	protected raiseAssigningCategoryStyles(args: AssigningCategoryStyleEventArgs): void {
		if (this.assigningCategoryStyle != null && this.actualIsCustomCategoryStyleAllowed) {
			this.assigningCategoryStyle(this, args);
		}
	}
	protected renderManager: CategorySeriesRenderManager = null;
	protected performCategoryStyleOverride(buckets: List$1<number[]>, currentIndex: number, valueCount: number, categoryAxis: CategoryAxisBase, axisParams: ScalerParams, isThumbnail: boolean): void {
		let isHighlightingEnabled: boolean = this.actualIsHighlightingEnabled;
		this.renderManager.prePerformCategoryStyleOverride(buckets, currentIndex, valueCount, categoryAxis, axisParams, isThumbnail, isHighlightingEnabled);
		let args = this.renderManager.categoryOverrideArgs;
		let info: HighlightingInfo = null;
		let itemsSource = this.fastItemsSource;
		if (isHighlightingEnabled && this.seriesViewer != null) {
			info = this.seriesViewer.highlightingManager.getHighlightingInfo(this, itemsSource, categoryAxis, args.startIndex, args.endIndex, false);
			args.highlightingInfo = info;
		}
		args.isThumbnail = isThumbnail;
		this.raiseAssigningCategoryStyles(args);
		this.renderManager.postPerformCategoryStyleOverride(info, isThumbnail, isHighlightingEnabled);
	}
	getExactUnsortedItemIndex(world: Point): number {
		return this.getExactUnsortedItemIndexHelper(world, this.xAxis);
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), new FinancialValueList(this.openColumn, this.highColumn, this.lowColumn, this.closeColumn, this.volumeColumn));
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), new FinancialValueList(this.openColumn, this.highColumn, this.lowColumn, this.closeColumn, this.volumeColumn));
	}
	getDistanceToIndex(world: Point, index: number, axis: Axis, p: ScalerParams, offset: number): number {
		if (axis == null) {
			return Number.POSITIVE_INFINITY;
		}
		let count = this.xAxis.cachedItemsCount;
		return this.getDistanceToIndexHelper(world, index, this.xAxis, p, offset, count, runOn(this, this.getExactUnsortedItemIndex));
	}
	getOffsetValue(): number {
		return this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		return this.xAxis.getCategorySize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, null, null, null);
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		return this.getSeriesValueHelper(new FinancialValueList(this.openColumn, this.highColumn, this.lowColumn, this.closeColumn, this.volumeColumn), world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesHighValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		return this.getSeriesValueHelper(this.highColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesLowValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		return this.getSeriesValueHelper(this.lowColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesCloseValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		return this.getSeriesValueHelper(this.closeColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesOpenValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		return this.getSeriesValueHelper(this.openColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesVolumeValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		return this.getSeriesValueHelper(this.volumeColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesHighValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesHighValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.highColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.highColumn));
	}
	getSeriesLowValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesLowValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.lowColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.lowColumn));
	}
	getSeriesOpenValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesOpenValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.openColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.openColumn));
	}
	getSeriesCloseValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesCloseValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.closeColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.closeColumn));
	}
	getSeriesVolumeValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.getOffset(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesVolumeValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.volumeColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.volumeColumn));
	}
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.xAxis != null) {
			this.xAxis.renderAxis1(false);
		}
		if (this.yAxis != null) {
			this.yAxis.renderAxis1(false);
		}
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.financialView.bucketCalculator.calculateBuckets(this.resolution);
		this.renderSeries(false);
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		if (this.transitionInIsInProgress && this.transitionProgress < 0.05) {
			this.transitionInViable = true;
		}
		this.financialView.bucketCalculator.calculateBuckets(this.resolution);
		this.renderSeries(false);
	}
	protected columnToMapping: Dictionary$2<IFastItemColumn$1<number>, string> = new Dictionary$2<IFastItemColumn$1<number>, string>(IFastItemColumn$1_$type.specialize(Number_$type), String_$type, 0);
	protected mappingToColumnName: Dictionary$2<string, string> = new Dictionary$2<string, string>(String_$type, String_$type, 0);
	private registerColumn(itemsSource: IFastItemsSource, mapping: string, propertyName: string): IFastItemColumn$1<number> {
		let column: IFastItemColumn$1<number> = this.registerDoubleColumn(mapping);
		this.columnToMapping.addItem(column, mapping);
		this.mappingToColumnName.addItem(mapping, propertyName);
		return column;
	}
	private deRegisterColumn(itemsSource: IFastItemsSource, column: IFastItemColumn$1<number>): void {
		if (column == null) {
			return;
		}
		itemsSource.deregisterColumn(column);
		let mapping: string = this.columnToMapping.item(column);
		this.mappingToColumnName.removeItem(mapping);
		this.columnToMapping.removeItem(column);
	}
	private _ignoreColumnChanges: boolean = false;
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.syncLinkPropertyName:
			if (this.syncLink != null && this.seriesViewer != null) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case Series.seriesViewerPropertyName:
			if (oldValue != null && newValue == null) {
				if (this.xAxis != null) {
					this.xAxis.deregisterSeries(this);
				}
				if (this.yAxis != null) {
					this.yAxis.deregisterSeries(this);
				}
			}
			if (oldValue == null && newValue != null) {
				if (this.xAxis != null) {
					this.xAxis.registerSeries(this);
				}
				if (this.yAxis != null) {
					this.yAxis.registerSeries(this);
				}
			}
			this.financialView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			break;

			case Series.fastItemsSourcePropertyName:
			this._ignoreColumnChanges = true;
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				this.deRegisterColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue), this.openColumn);
				this.deRegisterColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue), this.highColumn);
				this.deRegisterColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue), this.lowColumn);
				this.deRegisterColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue), this.closeColumn);
				this.deRegisterColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue), this.volumeColumn);
				this.openColumn = null;
				this.highColumn = null;
				this.lowColumn = null;
				this.closeColumn = null;
				this.volumeColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				if (stringIsNullOrEmpty(this.openMemberPath) == false) {
					this.openColumn = this.registerColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue), this.openMemberPath, FinancialSeries.openColumnPropertyName);
				}
				if (stringIsNullOrEmpty(this.highMemberPath) == false) {
					this.highColumn = this.registerColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue), this.highMemberPath, FinancialSeries.highColumnPropertyName);
				}
				if (stringIsNullOrEmpty(this.lowMemberPath) == false) {
					this.lowColumn = this.registerColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue), this.lowMemberPath, FinancialSeries.lowColumnPropertyName);
				}
				if (stringIsNullOrEmpty(this.closeMemberPath) == false) {
					this.closeColumn = this.registerColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue), this.closeMemberPath, FinancialSeries.closeColumnPropertyName);
				}
				if (stringIsNullOrEmpty(this.volumeMemberPath) == false) {
					this.volumeColumn = this.registerColumn(typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue), this.volumeMemberPath, FinancialSeries.volumeColumnPropertyName);
				}
			}
			this._ignoreColumnChanges = false;
			if (this.yAxis != null && !this.yAxis.updateRange()) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case FinancialSeries.openMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.deRegisterColumn(this.fastItemsSource, this.openColumn);
				this.openColumn = this.registerColumn(this.fastItemsSource, this.openMemberPath, FinancialSeries.openColumnPropertyName);
			}
			break;

			case FinancialSeries.openColumnPropertyName:
			if (this.yAxis != null && !this.yAxis.updateRange() && !this._ignoreColumnChanges) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case FinancialSeries.highMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.deRegisterColumn(this.fastItemsSource, this.highColumn);
				this.highColumn = this.registerColumn(this.fastItemsSource, this.highMemberPath, FinancialSeries.highColumnPropertyName);
			}
			break;

			case FinancialSeries.highColumnPropertyName:
			if (this.yAxis != null && !this.yAxis.updateRange() && !this._ignoreColumnChanges) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case FinancialSeries.lowMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.deRegisterColumn(this.fastItemsSource, this.lowColumn);
				this.lowColumn = this.registerColumn(this.fastItemsSource, this.lowMemberPath, FinancialSeries.lowColumnPropertyName);
			}
			break;

			case FinancialSeries.lowColumnPropertyName:
			if (this.yAxis != null && !this.yAxis.updateRange() && !this._ignoreColumnChanges) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case FinancialSeries.closeMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.deRegisterColumn(this.fastItemsSource, this.closeColumn);
				this.closeColumn = this.registerColumn(this.fastItemsSource, this.closeMemberPath, FinancialSeries.closeColumnPropertyName);
			}
			break;

			case FinancialSeries.closeColumnPropertyName:
			if (this.yAxis != null && !this.yAxis.updateRange() && !this._ignoreColumnChanges) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			this.updateFinalValue();
			break;

			case FinancialSeries.volumeMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.deRegisterColumn(this.fastItemsSource, this.volumeColumn);
				this.volumeColumn = this.registerColumn(this.fastItemsSource, this.volumeMemberPath, FinancialSeries.volumeColumnPropertyName);
			}
			break;

			case FinancialSeries.volumeColumnPropertyName:
			if (this.yAxis != null && !this.yAxis.updateRange() && !this._ignoreColumnChanges) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case FinancialSeries.xAxisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			this.financialView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			this.timeXAxis = typeCast<ITimeRangeSelectorAxis>(ITimeRangeSelectorAxis_$type, this.xAxis);
			break;

			case FinancialSeries.yAxisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			this.financialView.bucketCalculator.calculateBuckets(this.resolution);
			if (this.yAxis != null) {
				this.yAxis.updateRange();
			}
			{
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.transitionProgressPropertyName:
			this.transitionFrame.interpolate2(<number>this.transitionProgress, this.previousFrame, this.currentFrame);
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.transitionProgress == 1) {
				this.currentFrame.clearSpeedModifiers();
				this.renderFrame(this.currentFrame, this.financialView);
				if (this.transitionInIsInProgress) {
					this.transitionInIsInProgress = false;
					this.clearSpeedModifiers();
					this.animator.intervalMilliseconds = <number>truncate(this.getTotalMilliseconds());
					this.animator.easingFunction = this.transitionEasingFunction;
				}
			} else {
				this.renderFrame(this.transitionFrame, this.financialView);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.raiseSeriesAnimating(this);
			}
			break;

			case FinancialSeries.negativeBrushPropertyName:
			this.renderSeries(false);
			break;

			case CategorySeries.isCustomCategoryStyleAllowedPropertyName:
			this.actualIsCustomCategoryStyleAllowed = this.getIsCustomCategoryStyleAllowed();
			this.renderSeries(false);
			break;

			case FinancialSeries.categoryModePropertyName:
			if (this.xAxis != null) {
				this.xAxis.spread(true);
			}
			break;

		}

	}
	canUseAsYAxis(axis: any): boolean {
		if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	canUseAsXAxis(axis: any): boolean {
		if (typeCast<CategoryXAxis>((<any>CategoryXAxis).$type, axis) !== null || (<Axis>axis).isDateTime) {
			return true;
		}
		return false;
	}
	protected getCategoryItemsHelper(orderedStartIndex: number, orderedEndIndex: number, axis: Axis): any[] {
		if (orderedEndIndex < orderedStartIndex || orderedStartIndex < 0 || orderedStartIndex > this.fastItemsSource.count || orderedEndIndex < 0 || orderedEndIndex > this.fastItemsSource.count || axis == null) {
			return null;
		}
		let ret: any[] = <any[]>new Array((orderedEndIndex - orderedStartIndex) + 1);
		let isSorting: boolean = axis.isSorting;
		let sortedIndices: List$1<number> = null;
		if (isSorting) {
			sortedIndices = (<ISortingAxis><any>axis).sortedIndices;
		}
		for (let i = orderedStartIndex; i <= orderedEndIndex; i++) {
			let ind = i;
			if (isSorting) {
				ind = sortedIndices._inner[ind];
			}
			ret[i - orderedStartIndex] = this.fastItemsSource.item(i);
		}
		return ret;
	}
	protected getBucketSize(view: SeriesView): number {
		return (<FinancialSeriesView>view).bucketCalculator.bucketSize;
	}
	protected getFirstBucket(view: SeriesView): number {
		return (<FinancialSeriesView>view).bucketCalculator.firstBucket;
	}
	getCategoryItems(orderedStartIndex: number, orderedEndIndex: number): any[] {
		return this.getCategoryItemsHelper(orderedStartIndex, orderedEndIndex, this.yAxis);
	}
	private _prevHighlightingInfo: HighlightingInfo = null;
	private get prevHighlightingInfo(): HighlightingInfo {
		return this._prevHighlightingInfo;
	}
	private set prevHighlightingInfo(value: HighlightingInfo) {
		this._prevHighlightingInfo = value;
	}
	protected get_hasIndividualElements(): boolean {
		return false;
	}
	protected get hasIndividualElements(): boolean {
		return this.get_hasIndividualElements();
	}
	protected get_isHighlightingSupported(): boolean {
		return true;
	}
	getHighlightingInfo(item: any, world: Point): HighlightingInfo {
		if (this.hasIndividualElements) {
			let info = this.getSpecificHighlightingInfo(item, world, this.prevHighlightingInfo);
			this.prevHighlightingInfo = info;
			return info;
		} else {
			let info1 = this.getFullSeriesInfo(item, world, this.prevHighlightingInfo);
			this.prevHighlightingInfo = info1;
			return info1;
		}
	}
	getSortingCategoryBucketIndex(world: Point): number {
		let current = this.currentFrame;
		if (this.animationActive()) {
			current = this.transitionFrame;
		}
		let viewportRect = this.view.viewport;
		let windowRect = this.view.windowRect;
		let indexAxis = this.xAxis;
		let screenPos: number = 0;
		if (indexAxis.isVertical) {
			let windowY: number = (world.y - windowRect.top) / windowRect.height;
			screenPos = windowY * viewportRect.height + viewportRect.top;
		} else {
			let windowX: number = (world.x - windowRect.left) / windowRect.width;
			screenPos = windowX * viewportRect.width + viewportRect.left;
		}
		let count = current.buckets.count;
		let i: number = 0;
		for (i = 0; i < count; i++) {
			let bucket = current.buckets._inner[i];
			let nextBucket: number[] = null;
			if (i < count - 1) {
				nextBucket = current.buckets._inner[i + 1];
			}
			if (bucket[0] <= screenPos && nextBucket == null || nextBucket[0] >= screenPos) {
				if (nextBucket != null) {
					if (Math.abs(bucket[0] - screenPos) < Math.abs(nextBucket[0] - screenPos)) {
						return i;
					} else {
						return i + 1;
					}
				} else {
					return i;
				}
			}
		}
		return i;
	}
	protected getSpecificHighlightingInfo(item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		let count = this.fastItemsSource.count;
		let firstBucket = this.financialView.bucketCalculator.firstBucket;
		let lastBucket = this.financialView.bucketCalculator.lastBucket;
		let bucketSize = this.financialView.bucketCalculator.bucketSize;
		let axis = this.xAxis;
		let bucketStart: number = -1;
		let bucketEnd: number = -1;
		if (axis.isSorting) {
			let current = this.currentFrame;
			if (this.animationActive()) {
				current = this.transitionFrame;
			}
			let bucket = this.getSortingCategoryBucketIndex(world);
			bucketStart = bucket;
			bucketEnd = bucket;
		} else {
			let index = this.getItemIndex(world);
			bucketStart = <number>truncate(Math.floor(<number>(intDivide(index, bucketSize)))) * bucketSize;
			bucketEnd = bucketStart + (bucketSize - 1);
		}
		if (prevValue != null && prevValue.startIndex == bucketStart && prevValue.endIndex == bucketEnd) {
			return prevValue;
		}
		let info = new HighlightingInfo();
		info.series = this;
		info.startIndex = bucketStart;
		info.endIndex = bucketEnd;
		return info;
	}
	protected getFullSeriesInfo(item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		let info = new HighlightingInfo();
		info.series = this;
		info.startIndex = 0;
		info.endIndex = this.fastItemsSource.count - 1;
		if (prevValue != null && prevValue.startIndex == info.startIndex && prevValue.endIndex == info.endIndex) {
			return prevValue;
		}
		return info;
	}
	protected getIsCustomCategoryStyleAllowed(): boolean {
		return this.isCustomCategoryStyleAllowed;
	}
	getExactItemIndex(world: Point): number {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let rowIndex: number = -1;
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.xAxis != null) {
			let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
			let contentViewport: Rect = this.getContentViewport(this.view);
			let left: number = this.xAxis.getUnscaledValue(contentViewport.left, p);
			let right: number = this.xAxis.getUnscaledValue(contentViewport.right, p);
			let windowX: number = (world.x - windowRect.left) / windowRect.width;
			let bucket: number = left + (windowX * (right - left));
			if (this.xAxis.categoryMode != CategoryMode.Mode0) {
				bucket -= 0.5;
			}
			rowIndex = bucket;
		}
		return rowIndex;
	}
	getItemIndex(world: Point): number {
		return <number>truncate(Math.round(this.getExactItemIndex(world)));
	}
	protected get_isPrimaryAxisSortingAxis(): boolean {
		return typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null;
	}
	getCategoryAxisIfPresent(): CategoryAxisBase {
		return this.xAxis;
	}
	getItemIndexSorted(world: Point): number {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		if (windowRect.isEmpty || viewportRect.isEmpty) {
			return -1;
		}
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
		let sorting: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis);
		let contentViewport: Rect = this.getContentViewport(this.view);
		let left: number = contentViewport.left;
		let right: number = contentViewport.right;
		let xx: number = this.fromWorldPosition(world).x;
		let axisValue: number = this.xAxis.getUnscaledValue(xx, xParams);
		let leftValue: number = this.xAxis.getUnscaledValue(left, xParams);
		let rightValue: number = this.xAxis.getUnscaledValue(right, xParams);
		axisValue = Math.max(leftValue, Math.min(rightValue, axisValue));
		let itemIndex: number = sorting.getIndexClosestToUnscaledValue(axisValue);
		return itemIndex;
	}
	getItem(world: Point): any {
		let index: number = 0;
		if (typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			index = this.getItemIndexSorted(world);
			if (index == -1) {
				return null;
			}
		} else {
			index = this.getItemIndex(world);
		}
		return index >= 0 && this.fastItemsSource != null && index < this.fastItemsSource.count ? this.fastItemsSource.item(index) : null;
	}
	previousFrame: CategoryFrame = null;
	transitionFrame: CategoryFrame = null;
	currentFrame: CategoryFrame = null;
	protected getOffset(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		if (this.xAxis == null) {
			return 0;
		}
		return this.xAxis.getOffset(windowRect, viewportRect, effectiveViewportRect, this.index);
	}
	get transitionInMode(): CategoryTransitionInMode {
		return EnumUtil.getEnumValue<CategoryTransitionInMode>(CategoryTransitionInMode_$type, this.getValue(FinancialSeries.transitionInModeProperty));
	}
	set transitionInMode(value: CategoryTransitionInMode) {
		this.setValue(FinancialSeries.transitionInModeProperty, enumGetBox<CategoryTransitionInMode>(CategoryTransitionInMode_$type, value));
	}
	static readonly transitionInModePropertyName: string = "TransitionInMode";
	static readonly transitionInModeProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.transitionInModePropertyName, CategoryTransitionInMode_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, enumGetBox<CategoryTransitionInMode>(CategoryTransitionInMode_$type, CategoryTransitionInMode.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.transitionInModePropertyName, e.oldValue, e.newValue)));
	get isTransitionInEnabled(): boolean {
		return <boolean>this.getValue(FinancialSeries.isTransitionInEnabledProperty);
	}
	set isTransitionInEnabled(value: boolean) {
		this.setValue(FinancialSeries.isTransitionInEnabledProperty, value);
	}
	static readonly isTransitionInEnabledPropertyName: string = "IsTransitionInEnabled";
	static readonly isTransitionInEnabledProperty: DependencyProperty = DependencyProperty.register(FinancialSeries.isTransitionInEnabledPropertyName, Boolean_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialSeries>sender).raisePropertyChanged(FinancialSeries.isTransitionInEnabledPropertyName, e.oldValue, e.newValue)));
	protected shouldTransitionIn(): boolean {
		return this.isTransitionInEnabled;
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.Expand;
	}
	protected getDefaultTransitionInSpeedType(): TransitionInSpeedType {
		return TransitionInSpeedType.IndexScaled;
	}
	renderFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		this.customClipRect = frame.customClip;
		view.onRenderFrame();
	}
	prepareFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		frame.clearFrame();
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		let financialView = <FinancialSeriesView>view;
		if (this.fastItemsSource == null || this.fastItemsSource.count == 0 || !view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.xAxis == null || this.yAxis == null || financialView.bucketCalculator.bucketSize < 1 || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null || this.yAxis.actualMinimumValue == this.yAxis.actualMaximumValue || this.xAxis.itemsSource == null || this.xAxis.cachedItemsCount < 1) {
			financialView.bucketCalculator.bucketSize = 0;
			isValid = false;
		}
		return isValid;
	}
	getViewInfo(viewportRect: Rect, windowRect: Rect): { p0: Rect; p1: Rect; } {
		windowRect = this.view.windowRect;
		viewportRect = this.view.viewport;
		return {
			p0: viewportRect,
			p1: windowRect

		};
	}
	private _sourceFramePreparer: CategoryTransitionSourceFramePreparer = null;
	get sourceFramePreparer(): CategoryTransitionSourceFramePreparer {
		return this._sourceFramePreparer;
	}
	set sourceFramePreparer(value: CategoryTransitionSourceFramePreparer) {
		this._sourceFramePreparer = value;
	}
	getWorldZeroValue(view: FinancialSeriesView): number {
		let value: number = 0;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.yAxis != null) {
			let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
			yParams.referenceValue = this.getReferenceValue();
			value = this.yAxis.getScaledValue(this.yAxis.referenceValue, yParams);
		}
		return value;
	}
	protected clearSpeedModifiers(): void {
		super.clearSpeedModifiers();
		this.previousFrame.clearSpeedModifiers();
		this.currentFrame.clearSpeedModifiers();
		this.transitionFrame.clearSpeedModifiers();
	}
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		this.financialView.bucketCalculator.calculateBuckets(this.resolution);
		if (this.clearAndAbortIfInvalid1(this.view)) {
			return;
		}
		if (this.skipPrepare) {
			if (this.animationActive()) {
				this.renderFrame(this.transitionFrame, this.financialView);
			} else {
				this.renderFrame(this.currentFrame, this.financialView);
			}
			return;
		}
		if (this.shouldAnimate(animate)) {
			let previous: CategoryFrame = this.previousFrame;
			if (this.animationActive()) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				this.previousFrame = this.transitionFrame;
				this.transitionFrame = previous;
			} else {
				this.previousFrame = this.currentFrame;
				this.currentFrame = previous;
			}
			this.prepareFrame(this.currentFrame, this.financialView);
			if (this.transitionInViableResolved) {
				this.animator.stop();
				this.animator.intervalMilliseconds = <number>truncate(this.getTotalTransitionInMilliseconds());
				this.animator.easingFunction = this.transitionInEasingFunction != null ? this.transitionInEasingFunction : this.transitionEasingFunction;
				this.sourceFramePreparer.prepareSourceFrame(this.previousFrame, this.currentFrame, this.isVertical, this.xAxis, this.yAxis, this.transitionInMode, this.getDefaultTransitionInMode(), this.transitionInSpeedType, this.getDefaultTransitionInSpeedType(), () => this.getWorldZeroValue(this.financialView), this.financialView.viewport);
			}
			this.checkTransitionInterrupted();
			this.startAnimation();
			if (this.transitionInViableResolved) {
				this.transitionInViable = false;
				this.transitionInIsInProgress = true;
			}
		} else {
			this.prepareFrame(this.currentFrame, this.financialView);
			this.renderFrame(this.currentFrame, this.financialView);
		}
	}
	typical: (sender: any, e: FinancialEventArgs) => void = null;
	typicalBasedOn: (sender: any, e: FinancialEventArgs) => void = null;
	protected validateBasedOn(basedOn: IList$1<string>): boolean {
		for (let col of fromEnum<string>(basedOn)) {
			switch (col) {
				case "HighColumn":
				if (this.highColumn == null) {
					return false;
				}
				break;

				case "LowColumn":
				if (this.lowColumn == null) {
					return false;
				}
				break;

				case "OpenColumn":
				if (this.openColumn == null) {
					return false;
				}
				break;

				case "CloseColumn":
				if (this.closeColumn == null) {
					return false;
				}
				break;

				case "VolumeColumn":
				if (this.volumeColumn == null) {
					return false;
				}
				break;

			}

		}
		return true;
	}
	get xAxisSortRequired(): boolean {
		return this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null;
	}
	protected hasTypical(): boolean {
		return this.typical != null;
	}
	protected callTypical(args: FinancialEventArgs): void {
		this.typical(this, args);
	}
	protected get typicalColumn(): IEnumerable$1<number> {
		return this.calculateTypicalColumn();
	}
	private *_calculateTypicalColumn(): IterableIterator<any> {
		let userSpecified: boolean = false;
		if (this.hasTypical()) {
			let dataSource: FinancialCalculationDataSource = this.provideDataSource(0, this.fastItemsSource.count);
			this.callTypical(new FinancialEventArgs(0, this.fastItemsSource.count, dataSource, this.provideSupportingCalculations(dataSource), this));
			if (dataSource.typicalColumn != null) {
				userSpecified = true;
				for (let value of fromEnum<number>(dataSource.typicalColumn)) {
					yield value;
				}
			}
		}
		if (!userSpecified) {
			if (this.xAxisSortRequired && (<ISortingAxis><any>this.xAxis).sortedIndices != null) {
				let count: number = this.fastItemsSource.count;
				let sorted: IList$1<number> = (<ISortingAxis><any>this.xAxis).sortedIndices;
				for (let i: number = 0; i < count; ++i) {
					yield (this.highColumn.item(sorted.item(i)) + this.lowColumn.item(sorted.item(i)) + this.closeColumn.item(sorted.item(i))) / 3;
				}
			} else {
				let count1: number = this.fastItemsSource.count;
				for (let i1: number = 0; i1 < count1; ++i1) {
					yield (this.highColumn.item(i1) + this.lowColumn.item(i1) + this.closeColumn.item(i1)) / 3;
				}
			}
		}
	}
	private calculateTypicalColumn(): IEnumerable$1<number> {
		return toEnum(() => this._calculateTypicalColumn());
	}
	protected get tR(): IEnumerable$1<number> {
		return this.calculateTR();
	}
	private *_calculateTR(): IterableIterator<any> {
		if (this.xAxisSortRequired && (<ISortingAxis><any>this.xAxis).sortedIndices != null) {
			let count: number = this.highColumn.count;
			let sorted: IList$1<number> = (<ISortingAxis><any>this.xAxis).sortedIndices;
			if (count > 0) {
				yield this.makeSafe(this.highColumn.item(sorted.item(0)) - this.lowColumn.item(sorted.item(0)));
			}
			for (let i: number = 1; i < count; ++i) {
				yield Math.max(this.makeSafe(this.highColumn.item(sorted.item(i)) - this.lowColumn.item(sorted.item(i))), Math.max(this.makeSafe(Math.abs(this.highColumn.item(sorted.item(i)) - this.closeColumn.item(sorted.item(i - 1)))), this.makeSafe(Math.abs(this.lowColumn.item(sorted.item(i)) - this.closeColumn.item(sorted.item(i - 1))))));
			}
		} else {
			let count1: number = this.highColumn.count;
			if (count1 > 0) {
				yield this.makeSafe(this.highColumn.item(0) - this.lowColumn.item(0));
			}
			for (let i1: number = 1; i1 < count1; ++i1) {
				yield Math.max(this.makeSafe(this.highColumn.item(i1) - this.lowColumn.item(i1)), Math.max(this.makeSafe(Math.abs(this.highColumn.item(i1) - this.closeColumn.item(i1 - 1))), this.makeSafe(Math.abs(this.lowColumn.item(i1) - this.closeColumn.item(i1 - 1)))));
			}
		}
	}
	private calculateTR(): IEnumerable$1<number> {
		return toEnum(() => this._calculateTR());
	}
	protected get tL(): IEnumerable$1<number> {
		return this.calculateTL();
	}
	private *_calculateTL(): IterableIterator<any> {
		if (this.xAxisSortRequired && (<ISortingAxis><any>this.xAxis).sortedIndices != null) {
			let count: number = this.lowColumn.count;
			let sorted: IList$1<number> = (<ISortingAxis><any>this.xAxis).sortedIndices;
			if (count > 0) {
				yield this.makeSafe(this.lowColumn.item(sorted.item(0)));
			}
			for (let i: number = 1; i < count; i++) {
				yield Math.min(this.makeSafe(this.lowColumn.item(sorted.item(i))), this.makeSafe(this.closeColumn.item(sorted.item(i - 1))));
			}
		} else {
			let count1: number = this.lowColumn.count;
			if (count1 > 0) {
				yield this.makeSafe(this.lowColumn.item(0));
			}
			for (let i1: number = 1; i1 < count1; i1++) {
				yield Math.min(this.makeSafe(this.lowColumn.item(i1)), this.makeSafe(this.closeColumn.item(i1 - 1)));
			}
		}
	}
	private calculateTL(): IEnumerable$1<number> {
		return toEnum(() => this._calculateTL());
	}
	makeReadOnlyAndEnsureSorted(column: IList$1<number>): IList$1<number> {
		if (column == null) {
			return null;
		}
		if (this.xAxisSortRequired && (<ISortingAxis><any>this.xAxis).sortedIndices != null) {
			return new SafeSortedReadOnlyDoubleCollection(0, column, (<ISortingAxis><any>this.xAxis).sortedIndices);
		}
		return new SafeReadOnlyDoubleCollection(0, column);
	}
	private _dontRenderTypical: boolean = false;
	protected getTypicalBasedOn(): IList$1<string> {
		let ret: IList$1<string> = new List$1<string>(String_$type, 0);
		ret.add("HighColumn");
		ret.add("LowColumn");
		ret.add("CloseColumn");
		if (this.typicalBasedOn != null && this.fastItemsSource != null && !this._dontRenderTypical) {
			this._dontRenderTypical = true;
			let dataSource: FinancialCalculationDataSource = this.provideDataSource(0, this.fastItemsSource.count);
			this._dontRenderTypical = false;
			let args: FinancialEventArgs = new FinancialEventArgs(0, this.fastItemsSource.count, dataSource, this.provideSupportingCalculations(dataSource), this);
			this.typicalBasedOn(this, args);
			if (args.basedOn != null && args.basedOn.count > 0) {
				return args.basedOn;
			}
		}
		return ret;
	}
	private _openArray: List$1<number> = null;
	getOpenColumnAsArray(): number[] {
		if (this.openColumn == null) {
			return null;
		}
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			if (this._openArray != null) {
				return <number[]><any>this._openArray.asArray();
			}
			let _arr: List$1<number> = new List$1<number>(Number_$type, 2, this.openColumn.count);
			let indices = (<ISortingAxis><any>this.xAxis).sortedIndices;
			let _colArr = <number[]>this.openColumn.asArray();
			for (let i = 0; i < indices.count; i++) {
				_arr.add(_colArr[indices._inner[i]]);
			}
			this._openArray = _arr;
			return <number[]><any>this._openArray.asArray();
		} else {
			return <number[]><any>this.openColumn.asArray();
		}
	}
	private _highArray: List$1<number> = null;
	getHighColumnAsArray(): number[] {
		if (this.highColumn == null) {
			return null;
		}
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			if (this._highArray != null) {
				return <number[]><any>this._highArray.asArray();
			}
			let _arr: List$1<number> = new List$1<number>(Number_$type, 2, this.highColumn.count);
			let indices = (<ISortingAxis><any>this.xAxis).sortedIndices;
			let _colArr = <number[]>this.highColumn.asArray();
			for (let i = 0; i < indices.count; i++) {
				_arr.add(_colArr[indices._inner[i]]);
			}
			this._highArray = _arr;
			return <number[]><any>this._highArray.asArray();
		} else {
			return <number[]><any>this.highColumn.asArray();
		}
	}
	private _lowArray: List$1<number> = null;
	getLowColumnAsArray(): number[] {
		if (this.lowColumn == null) {
			return null;
		}
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			if (this._lowArray != null) {
				return <number[]><any>this._lowArray.asArray();
			}
			let _arr: List$1<number> = new List$1<number>(Number_$type, 2, this.lowColumn.count);
			let indices = (<ISortingAxis><any>this.xAxis).sortedIndices;
			let _colArr = <number[]>this.lowColumn.asArray();
			for (let i = 0; i < indices.count; i++) {
				_arr.add(_colArr[indices._inner[i]]);
			}
			this._lowArray = _arr;
			return <number[]><any>this._lowArray.asArray();
		} else {
			return <number[]><any>this.lowColumn.asArray();
		}
	}
	private _closeArray: List$1<number> = null;
	getCloseColumnAsArray(): number[] {
		if (this.closeColumn == null) {
			return null;
		}
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			if (this._closeArray != null) {
				return <number[]><any>this._closeArray.asArray();
			}
			let _arr: List$1<number> = new List$1<number>(Number_$type, 2, this.closeColumn.count);
			let indices = (<ISortingAxis><any>this.xAxis).sortedIndices;
			let _colArr = <number[]>this.closeColumn.asArray();
			for (let i = 0; i < indices.count; i++) {
				_arr.add(_colArr[indices._inner[i]]);
			}
			this._closeArray = _arr;
			return <number[]><any>this._closeArray.asArray();
		} else {
			return <number[]><any>this.closeColumn.asArray();
		}
	}
	private _volumeArray: List$1<number> = null;
	getVolumeColumnAsArray(): number[] {
		if (this.volumeColumn == null) {
			return null;
		}
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			if (this._volumeArray != null) {
				return <number[]><any>this._volumeArray.asArray();
			}
			let _arr: List$1<number> = new List$1<number>(Number_$type, 2, this.volumeColumn.count);
			let indices = (<ISortingAxis><any>this.xAxis).sortedIndices;
			let _colArr = <number[]>this.volumeColumn.asArray();
			for (let i = 0; i < indices.count; i++) {
				_arr.add(_colArr[indices._inner[i]]);
			}
			this._volumeArray = _arr;
			return <number[]><any>this._volumeArray.asArray();
		} else {
			return <number[]><any>this.volumeColumn.asArray();
		}
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		if (this.xAxis == null || !(typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null)) {
			return;
		}
		let indices = (<ISortingAxis><any>this.xAxis).sortedIndices;
		switch (action) {
			case FastItemsSourceEventAction.Insert:
			for (let i = position; i < count; i++) {
				let index = indices._inner[i];
				if (this._openArray != null) {
					this._openArray.insert(i, this.openColumn.item(index));
				}
				if (this._highArray != null) {
					this._highArray.insert(i, this.highColumn.item(index));
				}
				if (this._lowArray != null) {
					this._lowArray.insert(i, this.lowColumn.item(index));
				}
				if (this._closeArray != null) {
					this._closeArray.insert(i, this.closeColumn.item(index));
				}
				if (this._volumeArray != null) {
					this._volumeArray.insert(i, this.volumeColumn.item(index));
				}
			}
			break;

			case FastItemsSourceEventAction.Remove:
			if (this._openArray != null) {
				this._openArray.removeRange(position, count);
			}
			if (this._highArray != null) {
				this._highArray.removeRange(position, count);
			}
			if (this._lowArray != null) {
				this._lowArray.removeRange(position, count);
			}
			if (this._closeArray != null) {
				this._closeArray.removeRange(position, count);
			}
			if (this._volumeArray != null) {
				this._volumeArray.removeRange(position, count);
			}
			break;

			case FastItemsSourceEventAction.Reset:
			if (this._openArray != null) {
				this._openArray = new List$1<number>(Number_$type, 0);
			}
			if (this._highArray != null) {
				this._highArray = new List$1<number>(Number_$type, 0);
			}
			if (this._lowArray != null) {
				this._lowArray = new List$1<number>(Number_$type, 0);
			}
			if (this._closeArray != null) {
				this._closeArray = new List$1<number>(Number_$type, 0);
			}
			if (this._volumeArray != null) {
				this._volumeArray = new List$1<number>(Number_$type, 0);
			}
			break;

			case FastItemsSourceEventAction.Change:

			case FastItemsSourceEventAction.Replace:
			for (let i1 = position; i1 < count; i1++) {
				let index1 = indices._inner[i1];
				if (this._openArray != null) {
					this._openArray._inner[i1] = this.openColumn.item(index1);
				}
				if (this._highArray != null) {
					this._highArray._inner[i1] = this.highColumn.item(index1);
				}
				if (this._lowArray != null) {
					this._lowArray._inner[i1] = this.lowColumn.item(index1);
				}
				if (this._closeArray != null) {
					this._closeArray._inner[i1] = this.closeColumn.item(index1);
				}
				if (this._volumeArray != null) {
					this._volumeArray._inner[i1] = this.volumeColumn.item(index1);
				}
			}
			break;

		}

		this.updateFinalValue();
		this.updatePercentChange();
	}
	protected provideDataSource(position: number, count: number): FinancialCalculationDataSource {
		let readOnlyOpenColumn: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.openColumn);
		let readOnlyCloseColumn: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.closeColumn);
		let readOnlyHighColumn: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.highColumn);
		let readOnlyLowColumn: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.lowColumn);
		let readOnlyVolumeColumn: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.volumeColumn);
		let dataSource: FinancialCalculationDataSource = ((() => {
			let $ret = new FinancialCalculationDataSource();
			$ret.typicalColumn = new CalculatedColumn(1, new SafeEnumerable(this.typicalColumn), this.getTypicalBasedOn());
			$ret.trueRange = new CalculatedColumn(1, new SafeEnumerable(this.tR), ((() => {
				let $ret = new List$1<string>(String_$type, 0);
				$ret.add("HighColumn");
				$ret.add("LowColumn");
				$ret.add("CloseColumn");
				return $ret;
			})()));
			$ret.trueLow = new CalculatedColumn(1, new SafeEnumerable(this.tL), ((() => {
				let $ret = new List$1<string>(String_$type, 0);
				$ret.add("LowColumn");
				$ret.add("CloseColumn");
				return $ret;
			})()));
			$ret.openColumn = readOnlyOpenColumn;
			$ret.closeColumn = readOnlyCloseColumn;
			$ret.highColumn = readOnlyHighColumn;
			$ret.lowColumn = readOnlyLowColumn;
			$ret.volumeColumn = readOnlyVolumeColumn;
			$ret.calculateFrom = position;
			$ret.calculateCount = count;
			$ret.minimumValue = NaN;
			$ret.maximumValue = NaN;
			$ret.count = this.fastItemsSource != null ? this.fastItemsSource.count : 0;
			return $ret;
		})());
		return dataSource;
	}
	makeSafe(value: number): number {
		if (isInfinity(value) || isNaN_(value)) {
			return 0;
		}
		return value;
	}
	protected provideSupportingCalculations(dataSource: FinancialCalculationDataSource): FinancialCalculationSupportingCalculations {
		return ((() => {
			let $ret = new FinancialCalculationSupportingCalculations();
			$ret.eMA = new ColumnSupportingCalculation(1, TrendCalculators.eMA, new List$1<string>(String_$type, 0));
			$ret.sMA = new ColumnSupportingCalculation(1, TrendCalculators.sMA, new List$1<string>(String_$type, 0));
			$ret.sTDEV = new ColumnSupportingCalculation(1, TrendCalculators.sTDEV, new List$1<string>(String_$type, 0));
			$ret.movingSum = new ColumnSupportingCalculation(1, TrendCalculators.movingSum, new List$1<string>(String_$type, 0));
			$ret.shortVolumeOscillatorAverage = new DataSourceSupportingCalculation(1, (ds1: FinancialCalculationDataSource) => TrendCalculators.eMA(ds1.volumeColumn, ds1.shortPeriod), ((() => {
				let $ret = new List$1<string>(String_$type, 0);
				$ret.add(FinancialSeries.volumeColumnPropertyName);
				return $ret;
			})()));
			$ret.longVolumeOscillatorAverage = new DataSourceSupportingCalculation(1, (ds2: FinancialCalculationDataSource) => TrendCalculators.eMA(ds2.volumeColumn, ds2.longPeriod), ((() => {
				let $ret = new List$1<string>(String_$type, 0);
				$ret.add(FinancialSeries.volumeColumnPropertyName);
				return $ret;
			})()));
			$ret.shortPriceOscillatorAverage = new DataSourceSupportingCalculation(1, (ds3: FinancialCalculationDataSource) => TrendCalculators.eMA(ds3.typicalColumn, ds3.shortPeriod), dataSource.typicalColumn.basedOn);
			$ret.longPriceOscillatorAverage = new DataSourceSupportingCalculation(1, (ds4: FinancialCalculationDataSource) => TrendCalculators.eMA(ds4.typicalColumn, ds4.longPeriod), dataSource.typicalColumn.basedOn);
			$ret.toEnumerableRange = Series.toEnumerableRange;
			$ret.toEnumerable = Series.toEnumerable;
			$ret.makeSafe = runOn(this, this.makeSafe);
			return $ret;
		})());
	}
	get categoryAxis(): CategoryAxisBase {
		return this.xAxis;
	}
	private _thumbnailFrame: CategoryFrame = null;
	private get thumbnailFrame(): CategoryFrame {
		return this._thumbnailFrame;
	}
	private set thumbnailFrame(value: CategoryFrame) {
		this._thumbnailFrame = value;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
		if (!this.thumbnailDirty) {
			this.view.prepSurface(surface);
			return;
		}
		let thumbnailView: FinancialSeriesView = typeCast<FinancialSeriesView>((<any>FinancialSeriesView).$type, this.thumbnailView);
		this.view.prepSurface(surface);
		thumbnailView.bucketCalculator.calculateBuckets(this.resolution);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView)) {
			return;
		}
		if (!this.skipThumbnailPrepare) {
			this.prepareFrame(this.thumbnailFrame, thumbnailView);
		}
		this.skipThumbnailPrepare = false;
		this.renderFrame(this.thumbnailFrame, thumbnailView);
		this.thumbnailDirty = false;
	}
	private _alternateFrame: CategoryFrame = null;
	private get alternateFrame(): CategoryFrame {
		return this._alternateFrame;
	}
	private set alternateFrame(value: CategoryFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let financialSeriesView: FinancialSeriesView = <FinancialSeriesView>view;
		financialSeriesView.bucketCalculator.calculateBuckets(this.resolution);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(financialSeriesView)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new CategoryFrame(3);
		}
		this.alternateFrame.clearFrame();
		this.prepareFrame(this.alternateFrame, financialSeriesView);
		this.renderFrame(this.alternateFrame, financialSeriesView);
	}
	getMatchingAxis(axis: Axis): Axis {
		if (this.xAxis == axis) {
			return this.yAxis;
		}
		if (this.yAxis == axis) {
			return this.xAxis;
		}
		return null;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		let dateAxis: IDateTimeAxis = typeCast<IDateTimeAxis>(IDateTimeAxis_$type, this.xAxis);
		return dateAxis != null ? dateAxis.preferredCategoryMode(this) : this.categoryMode;
	}
	private static readonly categoryModePropertyName: string = "CategoryMode";
	private _categoryMode: CategoryMode = <CategoryMode>0;
	get categoryMode(): CategoryMode {
		return this._categoryMode;
	}
	set categoryMode(value: CategoryMode) {
		let oldValue: CategoryMode = this.categoryMode;
		if (value != oldValue) {
			this._categoryMode = value;
			this.raisePropertyChanged(FinancialSeries.categoryModePropertyName, enumGetBox<CategoryMode>(CategoryMode_$type, oldValue), enumGetBox<CategoryMode>(CategoryMode_$type, this.categoryMode));
		}
	}
	protected get_isNegativeColorSupported(): boolean {
		return true;
	}
	setNegativeColors(negativeBrush: Brush, negativeOutline: Brush): void {
		super.setNegativeColors(negativeBrush, negativeOutline);
		this.negativeBrush = negativeBrush;
	}
	private updateFinalValue(): void {
		this.finalValue = this.closeColumn == null || this.closeColumn.count == 0 ? NaN : this.closeColumn.item(this.closeColumn.count - 1);
	}
	private _timeXAxis: ITimeRangeSelectorAxis = null;
	private get timeXAxis(): ITimeRangeSelectorAxis {
		return this._timeXAxis;
	}
	private set timeXAxis(value: ITimeRangeSelectorAxis) {
		this._timeXAxis = value;
	}
	private _itemTimeGetter: FastReflectionHelper = null;
	private get itemTimeGetter(): FastReflectionHelper {
		return this._itemTimeGetter;
	}
	private set itemTimeGetter(value: FastReflectionHelper) {
		this._itemTimeGetter = value;
	}
	getItemLabel(dataItem: any): any {
		if (this.timeXAxis != null && dataItem != null) {
			if (this.itemTimeGetter == null || this.itemTimeGetter.propertyName != this.timeXAxis.dateTimeMemberPath) {
				this.itemTimeGetter = new FastReflectionHelper(false, this.timeXAxis.dateTimeMemberPath);
			}
			let value: any = this.itemTimeGetter.getPropertyValue(dataItem);
			if (typeCast<Date>(Date_$type, value) !== null) {
				return dateToStringFormat((<Date>value), this.timeXAxis.itemLabelFormat());
			}
		}
		return super.getItemLabel(dataItem);
	}
}

/**
 * @hidden 
 */
export class FinancialCalculationSupportingCalculations extends Base {
	static $t: Type = markType(FinancialCalculationSupportingCalculations, 'FinancialCalculationSupportingCalculations');
	private _eMA: ColumnSupportingCalculation = null;
	get eMA(): ColumnSupportingCalculation {
		return this._eMA;
	}
	set eMA(value: ColumnSupportingCalculation) {
		this._eMA = value;
	}
	private _sMA: ColumnSupportingCalculation = null;
	get sMA(): ColumnSupportingCalculation {
		return this._sMA;
	}
	set sMA(value: ColumnSupportingCalculation) {
		this._sMA = value;
	}
	private _sTDEV: ColumnSupportingCalculation = null;
	get sTDEV(): ColumnSupportingCalculation {
		return this._sTDEV;
	}
	set sTDEV(value: ColumnSupportingCalculation) {
		this._sTDEV = value;
	}
	private _movingSum: ColumnSupportingCalculation = null;
	get movingSum(): ColumnSupportingCalculation {
		return this._movingSum;
	}
	set movingSum(value: ColumnSupportingCalculation) {
		this._movingSum = value;
	}
	private _shortVolumeOscillatorAverage: DataSourceSupportingCalculation = null;
	get shortVolumeOscillatorAverage(): DataSourceSupportingCalculation {
		return this._shortVolumeOscillatorAverage;
	}
	set shortVolumeOscillatorAverage(value: DataSourceSupportingCalculation) {
		this._shortVolumeOscillatorAverage = value;
	}
	private _longVolumeOscillatorAverage: DataSourceSupportingCalculation = null;
	get longVolumeOscillatorAverage(): DataSourceSupportingCalculation {
		return this._longVolumeOscillatorAverage;
	}
	set longVolumeOscillatorAverage(value: DataSourceSupportingCalculation) {
		this._longVolumeOscillatorAverage = value;
	}
	private _shortPriceOscillatorAverage: DataSourceSupportingCalculation = null;
	get shortPriceOscillatorAverage(): DataSourceSupportingCalculation {
		return this._shortPriceOscillatorAverage;
	}
	set shortPriceOscillatorAverage(value: DataSourceSupportingCalculation) {
		this._shortPriceOscillatorAverage = value;
	}
	private _longPriceOscillatorAverage: DataSourceSupportingCalculation = null;
	get longPriceOscillatorAverage(): DataSourceSupportingCalculation {
		return this._longPriceOscillatorAverage;
	}
	set longPriceOscillatorAverage(value: DataSourceSupportingCalculation) {
		this._longPriceOscillatorAverage = value;
	}
	private _toEnumerableRange: (arg1: (arg1: number) => number, arg2: number, arg3: number) => IEnumerable$1<number> = null;
	get toEnumerableRange(): (arg1: (arg1: number) => number, arg2: number, arg3: number) => IEnumerable$1<number> {
		return this._toEnumerableRange;
	}
	set toEnumerableRange(value: (arg1: (arg1: number) => number, arg2: number, arg3: number) => IEnumerable$1<number>) {
		this._toEnumerableRange = value;
	}
	private _toEnumerable: (arg1: (arg1: number) => number, arg2: number) => IEnumerable$1<number> = null;
	get toEnumerable(): (arg1: (arg1: number) => number, arg2: number) => IEnumerable$1<number> {
		return this._toEnumerable;
	}
	set toEnumerable(value: (arg1: (arg1: number) => number, arg2: number) => IEnumerable$1<number>) {
		this._toEnumerable = value;
	}
	private _makeSafe: (arg1: number) => number = null;
	get makeSafe(): (arg1: number) => number {
		return this._makeSafe;
	}
	set makeSafe(value: (arg1: number) => number) {
		this._makeSafe = value;
	}
}

/**
 * @hidden 
 */
export class DataSourceSupportingCalculation extends SupportingCalculation$1<(dataSource: FinancialCalculationDataSource) => IEnumerable$1<number>> {
	static $t: Type = markType(DataSourceSupportingCalculation, 'DataSourceSupportingCalculation', (<any>SupportingCalculation$1).$type.specialize(Delegate_$type));
	constructor(initNumber: number, strategy: (dataSource: FinancialCalculationDataSource) => IEnumerable$1<number>);
	constructor(initNumber: number, strategy: (dataSource: FinancialCalculationDataSource) => IEnumerable$1<number>, basedOn: IList$1<string>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let strategy: (dataSource: FinancialCalculationDataSource) => IEnumerable$1<number> = <(dataSource: FinancialCalculationDataSource) => IEnumerable$1<number>>_rest[0];
				super(Delegate_$type, 0, strategy);
			}
			break;

			case 1:
			{
				let strategy: (dataSource: FinancialCalculationDataSource) => IEnumerable$1<number> = <(dataSource: FinancialCalculationDataSource) => IEnumerable$1<number>>_rest[0];
				let basedOn: IList$1<string> = <IList$1<string>>_rest[1];
				super(Delegate_$type, 1, strategy, basedOn);
			}
			break;

		}

	}
}

/**
 * @hidden 
 */
export class FinancialCalculationDataSource extends Base {
	static $t: Type = markType(FinancialCalculationDataSource, 'FinancialCalculationDataSource');
	private _openColumn: IList$1<number> = null;
	get openColumn(): IList$1<number> {
		return this._openColumn;
	}
	set openColumn(value: IList$1<number>) {
		this._openColumn = value;
	}
	private _closeColumn: IList$1<number> = null;
	get closeColumn(): IList$1<number> {
		return this._closeColumn;
	}
	set closeColumn(value: IList$1<number>) {
		this._closeColumn = value;
	}
	private _highColumn: IList$1<number> = null;
	get highColumn(): IList$1<number> {
		return this._highColumn;
	}
	set highColumn(value: IList$1<number>) {
		this._highColumn = value;
	}
	private _lowColumn: IList$1<number> = null;
	get lowColumn(): IList$1<number> {
		return this._lowColumn;
	}
	set lowColumn(value: IList$1<number>) {
		this._lowColumn = value;
	}
	private _volumeColumn: IList$1<number> = null;
	get volumeColumn(): IList$1<number> {
		return this._volumeColumn;
	}
	set volumeColumn(value: IList$1<number>) {
		this._volumeColumn = value;
	}
	private _indicatorColumn: IList$1<number> = null;
	get indicatorColumn(): IList$1<number> {
		return this._indicatorColumn;
	}
	set indicatorColumn(value: IList$1<number>) {
		this._indicatorColumn = value;
	}
	private _typicalColumn: CalculatedColumn = null;
	get typicalColumn(): CalculatedColumn {
		return this._typicalColumn;
	}
	set typicalColumn(value: CalculatedColumn) {
		this._typicalColumn = value;
	}
	private _trueRange: CalculatedColumn = null;
	get trueRange(): CalculatedColumn {
		return this._trueRange;
	}
	set trueRange(value: CalculatedColumn) {
		this._trueRange = value;
	}
	private _trueLow: CalculatedColumn = null;
	get trueLow(): CalculatedColumn {
		return this._trueLow;
	}
	set trueLow(value: CalculatedColumn) {
		this._trueLow = value;
	}
	private _period: number = 0;
	get period(): number {
		return this._period;
	}
	set period(value: number) {
		this._period = value;
	}
	private _shortPeriod: number = 0;
	get shortPeriod(): number {
		return this._shortPeriod;
	}
	set shortPeriod(value: number) {
		this._shortPeriod = value;
	}
	private _longPeriod: number = 0;
	get longPeriod(): number {
		return this._longPeriod;
	}
	set longPeriod(value: number) {
		this._longPeriod = value;
	}
	private _count: number = 0;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
	}
	private _calculateFrom: number = 0;
	get calculateFrom(): number {
		return this._calculateFrom;
	}
	set calculateFrom(value: number) {
		this._calculateFrom = value;
	}
	private _calculateCount: number = 0;
	get calculateCount(): number {
		return this._calculateCount;
	}
	set calculateCount(value: number) {
		this._calculateCount = value;
	}
	private _multiplier: number = 0;
	get multiplier(): number {
		return this._multiplier;
	}
	set multiplier(value: number) {
		this._multiplier = value;
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
	}
	private _specifiesRange: boolean = false;
	get specifiesRange(): boolean {
		return this._specifiesRange;
	}
	set specifiesRange(value: boolean) {
		this._specifiesRange = value;
	}
	private _series: FinancialSeries = null;
	get series(): FinancialSeries {
		return this._series;
	}
	set series(value: FinancialSeries) {
		this._series = value;
	}
}

/**
 * @hidden 
 */
export abstract class FinancialSeriesView extends SeriesView {
	static $t: Type = markType(FinancialSeriesView, 'FinancialSeriesView', (<any>SeriesView).$type);
	private _financialModel: FinancialSeries = null;
	get financialModel(): FinancialSeries {
		return this._financialModel;
	}
	set financialModel(value: FinancialSeries) {
		this._financialModel = value;
	}
	private _bucketCalculator: FinancialBucketCalculator = null;
	get bucketCalculator(): FinancialBucketCalculator {
		return this._bucketCalculator;
	}
	set bucketCalculator(value: FinancialBucketCalculator) {
		this._bucketCalculator = value;
	}
	private _frameVersion: number = 0;
	get frameVersion(): number {
		return this._frameVersion;
	}
	set frameVersion(value: number) {
		this._frameVersion = value;
	}
	checkFrameDirty(frame: CategoryFrame): boolean {
		if (this.frameVersion != frame.frameVersion) {
			return true;
		}
		return false;
	}
	updateFrameVersion(frame: CategoryFrame): void {
		this.frameVersion = frame.frameVersion;
	}
	constructor(model: FinancialSeries) {
		super(model);
		this.frameVersion = -1;
		this.financialModel = model;
		this.bucketCalculator = this.createBucketCalculator();
	}
	protected abstract createBucketCalculator(): FinancialBucketCalculator;
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Financial;
		}
	}
	getDefaultTooltipTemplate(): string {
		let tooltipString = "<div class='ui-chart-default-tooltip-content'>";
		if (this.financialModel.xAxis.isDateTime) {
			tooltipString += "<span>${itemLabel}</span><br/>";
		} else if (this.financialModel.xAxis.label != null) {
			tooltipString += "<span>${item." + this.financialModel.xAxis.label + "}</span><br/>";
		}
		tooltipString += "<span class='ui-priority-primary'";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipString += " style='color:" + labelColorString + "'";
		}
		let srProvider: SRProvider = new SRProvider(this.seriesViewerRenderer);
		let openString: string = srProvider.getString("financialSeries_Open");
		let highString: string = srProvider.getString("financialSeries_High");
		let lowString: string = srProvider.getString("financialSeries_Low");
		let closeString: string = srProvider.getString("financialSeries_Close");
		openString = stringIsNullOrEmpty(openString) ? "Open" : openString;
		highString = stringIsNullOrEmpty(highString) ? "High" : highString;
		lowString = stringIsNullOrEmpty(lowString) ? "Low" : lowString;
		closeString = stringIsNullOrEmpty(closeString) ? "Close" : closeString;
		tooltipString += ">" + this.financialModel.title + "</span><table><tr><td>" + openString + ":</td><td>" + "${item." + this.financialModel.openMemberPath + "}</td></tr><tr><td>" + highString + ":</td><td>" + "${item." + this.financialModel.highMemberPath + "}</td></tr><tr><td>" + lowString + ":</td><td>" + "${item." + this.financialModel.lowMemberPath + "}</td></tr><tr><td>" + closeString + ":</td><td>" + "${item." + this.financialModel.closeMemberPath + "}</td></tr>";
		if (!stringIsNullOrEmpty(this.financialModel.volumeMemberPath)) {
			let volumeString: string = srProvider.getString("financialSeries_Volume");
			volumeString = stringIsNullOrEmpty(volumeString) ? "Volume" : volumeString;
			tooltipString += "<tr><td>" + volumeString + ":</td><td>" + "${item." + this.financialModel.volumeMemberPath + "}</td></tr>";
		}
		tooltipString += "</table></div>";
		return tooltipString;
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 5;
		this.model.shadowOffsetX = 2;
		this.model.shadowOffsetY = 2;
	}
}


