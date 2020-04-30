import { Type, OnDestroy, EventEmitter, Output, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy } from "@angular/core";
import { GridMode } from "./GridMode";
import { AngularRenderer, AngularWrapper } from "igniteui-core/angular-renderer";
import { Visibility } from "igniteui-core/Visibility";
import { IgRect } from "igniteui-core/IgRect"
import { IgSize } from "igniteui-core/IgSize"
import { IgPoint } from "igniteui-core/IgPoint"
import { IgDataTemplate } from "igniteui-core/IgDataTemplate"
import { PointUtil, IEnumerable, TypeRegistrar } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { CategoryChart } from "./CategoryChart";
import { CategoryChartType, CategoryChartType_$type } from "./CategoryChartType";
import { CategorySeriesMarkerCollisionAvoidance, CategorySeriesMarkerCollisionAvoidance_$type } from "./CategorySeriesMarkerCollisionAvoidance";
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from "./CategoryTransitionInMode";
import { TransitionInSpeedType, TransitionInSpeedType_$type } from "./TransitionInSpeedType";
// tslint:disable: max-line-length
import { fromBrushCollection, toBrushCollection, ensureEnum, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { IgxDomainChartComponent } from "./igx-domain-chart-component";
import { IgxXYChartComponent } from "./igx-xy-chart-component";
import { DataChartStylingDefaults } from "./DataChartStylingDefaults";
import { DataSeriesType } from "igniteui-core/DataSeriesType";
import { IgxDataContext } from "igniteui-core/igx-data-context";
import { IgxCategoryXAxisComponent } from "./igx-category-x-axis-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { delegateCombine } from "igniteui-core/type";

export const IgxCategoryChartComponent_PROVIDERS = [];

/**
 * Represents a chart with an ordinal X-axis and a numeric Y-axis.
*
* **Ignite UI for Angular Category Chart** - [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/CategoryChart.html)
*
* The Ignite UI Category Chart is a lightweight, highly performant chart. It can be easily configured to display category data using an extremely simple and intuitive API. All you need to do is provide your data to the chart and it will take care of everything else.
*
* Example:
*
* ```html
* <igx-category-chart
*     [dataSource]="data"    >
* </igx-category-chart>
* ```
*/
@Component({
	selector: "igx-category-chart",
	template: `<ng-container #dynamicContent></ng-container>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: IgxCategoryChartComponent_PROVIDERS,
	host: { class: "ig-category-chart igx-category-chart" },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxCategoryChartComponent extends IgxXYChartComponent implements AfterContentInit, OnDestroy {
	@Input()
	set height(value: string) {
		this._height = value;
		this.renderer.setStyle(this._elRef.element.nativeElement, "height", value);
		this._chart.notifyResized();
	}
	get height(): string {
		return this._height;
	}

	@Input()
	set width(value: string) {
		this._width = value;
		this.renderer.setStyle(this._elRef.element.nativeElement, "width", value);
		this._chart.notifyResized();
	}
	get width(): string {
		return this._width;
	}

	constructor(private renderer: Renderer2,
		           private _elRef: ViewContainerRef,
		           private ngZone: NgZone,
		           private injector: Injector,
		           private componentFactoryResolver: ComponentFactoryResolver) {
		super();

		if ((this as any)._styling) {
			NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
		}
		this._zoneRunner = (act: () => void) => ngZone.run(act);
		this.container = renderer.createElement("div");
		renderer.appendChild(_elRef.element.nativeElement, this.container);
		renderer.setStyle(this.container, "display", "block");
		renderer.setStyle(this.container, "width", "100%");
		renderer.setStyle(this.container, "height", "100%");
		let root: any;
		root = this.container;
		if (this.container != null) {
			root = this.container;
		}
		let ren: AngularRenderer = new AngularRenderer(
			root, this.renderer, window.document,
			this.ngZone, true,
			DataChartStylingDefaults);
		this._wrapper = ren;
		let chart = this.i;
		this._chart = <CategoryChart>chart;
		if ((<any>chart).xAxis) {
			const x = new IgxCategoryXAxisComponent();
			(<any>x)._provideRenderer(ren);
			(<any>x)._implementation = (<any>chart).xAxis;
			(<any>chart).xAxis.externalObject = x;
		}
		if ((<any>chart).yAxis) {
			const y = new IgxNumericYAxisComponent();
			(<any>y)._provideRenderer(ren);
			(<any>y)._implementation = (<any>chart).yAxis;
			(<any>chart).yAxis.externalObject = y;
		}
		chart.provideContainer(ren);
		this.bindData();

		chart.notifyResized();
		ren.addSizeWatcher(() => {
			this._chart.notifyResized();
		});
	}

	public get i(): CategoryChart {
		return this._implementation;
	}
	@Input()
	set dataSource(value: Array<any>) {
		this._dataSource = value;
		this.bindData();
	}
	get dataSource(): Array<any> {
		return this._dataSource;
	}

	/**
 * Gets or sets the duration used for animating series plots when the chart is loading into view
*
* `transitionInDuration` controls the length of time taken by the transition-in animation.  Try setting it to 2 seconds:
*
* ```html
* <igx-category-chart
*     [dataSource]="data"
*     isTransitionInEnabled="true"
*     transitionInDuration="2000">
* </igx-category-chart>
* ```
*/
	get transitionInDuration(): number {
		return (this.i.transitionInDuration as number);
	}
	@Input()
	set transitionInDuration(v: number) {
		this.i.transitionInDuration = +v;
	}
	/**
	 * Gets or sets the easing function used for animating series plots when the chart is loading into view
	 * This can be set to one of the known values "linear" or "cubic," or it can be set to an easing function which takes a single numeric parameter and returns a number.
	*/
	get transitionInEasingFunction(): (time: number) => number {
		return this.i.transitionInEasingFunction;
	}
	@Input()
	set transitionInEasingFunction(v: (time: number) => number) {
		this.i.transitionInEasingFunction = v;
	}
	/**
	 * Gets or sets the type of chart series to generate from the data.
	*
	* The `chartType` property determines the type of data series to display.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     chartType="stepArea">
	* </igx-category-chart>
	* ```
	*/
	get chartType(): CategoryChartType {
		return this.i.chartType;
	}
	@Input()
	set chartType(v: CategoryChartType) {
		this.i.chartType = ensureEnum<CategoryChartType>(CategoryChartType_$type, v);
	}
	/**
	 * Gets or sets the behavior for markers in each series which are placed too close together for the current view, resulting in a collision.
	*
	* `markerCollisionAvoidance` controls the technique the chart uses to avoid overlapping markers.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     markerCollisionAvoidance="none">
	* </igx-category-chart>
	* ```
	*/
	get markerCollisionAvoidance(): CategorySeriesMarkerCollisionAvoidance {
		return this.i.markerCollisionAvoidance;
	}
	@Input()
	set markerCollisionAvoidance(v: CategorySeriesMarkerCollisionAvoidance) {
		this.i.markerCollisionAvoidance = ensureEnum<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, v);
	}
	/**
	 * Gets or sets whether animation of series plots is enabled when the chart is loading into view
	*
	* Set `isTransitionInEnabled` to true if you want your chart series to animate into position when the chart is loading into view.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     isTransitionInEnabled="true">
	* </igx-category-chart>
	* ```
	*/
	get isTransitionInEnabled(): boolean {
		return (this.i.isTransitionInEnabled as boolean);
	}
	@Input()
	set isTransitionInEnabled(v: boolean) {
		this.i.isTransitionInEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the method that determines how to animate series plots when the chart is loading into view
	*
	* `transitionInMode` controls the direction of the transition-in animation.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     isTransitionInEnabled="true"
	*     transitionInMode="accordionfromRight">
	* </igx-category-chart>
	* ```
	*/
	get transitionInMode(): CategoryTransitionInMode {
		return this.i.transitionInMode;
	}
	@Input()
	set transitionInMode(v: CategoryTransitionInMode) {
		this.i.transitionInMode = ensureEnum<CategoryTransitionInMode>(CategoryTransitionInMode_$type, v);
	}
	/**
	 * Gets or sets the arrival speed used for animating series plots when the chart is loading into view
	*
	* `transitionInSpeedType` controls the speed of the transition-in animation.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     isTransitionInEnabled="true"
	*     transitionInSpeedType="indexScaled">
	* </igx-category-chart>
	* ```
	*/
	get transitionInSpeedType(): TransitionInSpeedType {
		return this.i.transitionInSpeedType;
	}
	@Input()
	set transitionInSpeedType(v: TransitionInSpeedType) {
		this.i.transitionInSpeedType = ensureEnum<TransitionInSpeedType>(TransitionInSpeedType_$type, v);
	}
	/**
	 * Gets or sets the frequency of displayed labels along the X-axis.
	 * Gets or sets the set value is a factor that determines which labels will be hidden. For example, an interval of 2 will display every other label.
	*
	* `xAxisInterval` determines how often to show a label, tickmark, and/or gridline along the x-axis.  Set this property to _n_ to display a label every _nth_ item.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     xAxisInterval="3">
	* </igx-category-chart>
	* ```
	*/
	get xAxisInterval(): number {
		return (this.i.xAxisInterval as number);
	}
	@Input()
	set xAxisInterval(v: number) {
		this.i.xAxisInterval = +v;
	}
	/**
	 * Gets or sets the frequency of displayed minor lines along the X-axis.
	 * Gets or sets the set value is a factor that determines how the minor lines will be displayed.
	*
	* `xAxisMinorInterval` determines how often to show a minor gridline along the x-axis.  This property is relevant only when the displayed series is a type with grouping, like column series.
	*
	* `xAxisMinorInterval` is expressed as a number between 0 and 1, representing the frequency of the interval.  To display minor gridlines representing 10ths of an item width, set `xAxisMinorInterval` to 0.1.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     xAxisMinorInterval="0.1"
	*     xAxisMinorStroke="green"
	*     xAxisMinorStrokeThickness="1">
	* </igx-category-chart>
	* ```
	*/
	get xAxisMinorInterval(): number {
		return (this.i.xAxisMinorInterval as number);
	}
	@Input()
	set xAxisMinorInterval(v: number) {
		this.i.xAxisMinorInterval = +v;
	}
	/**
	 * Gets or sets the amount of space between adjacent categories for the X-axis.
	 * The gap is silently clamped to the range [0, 1] when used.
	*
	* Use the `xAxisGap` property to configure the spacing between items on the x-axis.  This property is relevant only when the displayed series is a type with item spacing, like column series.
	*
	* An `xAxisGap` of 0 allocates no space between items.  An `xAxisGap` of 1 allocates a space between items equal to the width of one item.
	*
	* To set the item spacing to 75% the width of one item, set the `xAxisGap` to 0.75, as in this code:
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     xAxisGap="0.75">
	* </igx-category-chart>
	* ```
	*/
	get xAxisGap(): number {
		return (this.i.xAxisGap as number);
	}
	@Input()
	set xAxisGap(v: number) {
		this.i.xAxisGap = +v;
	}
	/**
	 * Gets or sets the amount of overlap between adjacent categories for the X-axis.
	 * Gets or sets the overlap is silently clamped to the range [-1, 1] when used.
	*
	* Use the `xAxisOverlap` property to configure the spacing between items on the x-axis.  This property is relevant only when the displayed series is a type with item spacing, like column series.
	*
	* An `xAxisOverlap` of 0 places grouped items adjacent to each other.  An `xAxisOverlap` of 1 places grouped items in the same axis space, completely overlapping.  An `xAxisOverlap` of -1 places a space between grouped items equal to the width of one item.
	*
	* To place grouped items with 75% overlap, set the `xAxisOverlap` to 0.75, as in this code:
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     xAxisOverlap="0.75">
	* </igx-category-chart>
	* ```
	*/
	get xAxisOverlap(): number {
		return (this.i.xAxisOverlap as number);
	}
	@Input()
	set xAxisOverlap(v: number) {
		this.i.xAxisOverlap = +v;
	}
	/**
	 * Gets or sets the distance between each label and grid line along the Y-axis.
	*
	* `yAxisInterval` determines how often to show a label, tickmark, and/or gridline along the y-axis.  Set this property to a number less than the numeric range of the y-axis.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisInterval="10">
	* </igx-category-chart>
	* ```
	*/
	get yAxisInterval(): number {
		return (this.i.yAxisInterval as number);
	}
	@Input()
	set yAxisInterval(v: number) {
		this.i.yAxisInterval = +v;
	}
	/**
	 * Gets or sets whether the Y-axis should use a logarithmic scale instead of a linear one.
	 * Since log(-1) is imaginary and log(0) is undefined, it is recommended to enable this property only when the Y-axis minimum is greater than zero.
	*
	* Set `yAxisIsLogarithmic` to true if you want the y-axis to be a logarithmic scale.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisIsLogarithmic="true">
	* </igx-category-chart>
	* ```
	*/
	get yAxisIsLogarithmic(): boolean {
		return (this.i.yAxisIsLogarithmic as boolean);
	}
	@Input()
	set yAxisIsLogarithmic(v: boolean) {
		this.i.yAxisIsLogarithmic = ensureBool(v);
	}
	/**
	 * Gets or sets the base value to use in the log function when mapping the position of data items along the Y-axis.
	 * This property is effective only when YAxisIsLogarithmic is true.
	*
	* When `yAxisIsLogarithmic` is true, `yAxisLogarithmBase` sets the logarithm base of the y-axis scale.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisIsLogarithmic="true"
	*     yAxisLogarithmBase="2">
	* </igx-category-chart>
	* ```
	*/
	get yAxisLogarithmBase(): number {
		return (this.i.yAxisLogarithmBase as number);
	}
	@Input()
	set yAxisLogarithmBase(v: number) {
		this.i.yAxisLogarithmBase = +v;
	}
	/**
	 * Gets or sets the data value corresponding to the minimum value of the Y-axis.
	*
	* `yAxisMaximumValue` determines the minimum of the y-axis.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisMinimumValue="42">
	* </igx-category-chart>
	* ```
	*/
	get yAxisMinimumValue(): number {
		return (this.i.yAxisMinimumValue as number);
	}
	@Input()
	set yAxisMinimumValue(v: number) {
		this.i.yAxisMinimumValue = +v;
	}
	/**
	 * Gets or sets the data value corresponding to the maximum value of the Y-axis.
	*
	* `yAxisMaximumValue` determines the maximum of the y-axis.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisMaximumValue="42">
	* </igx-category-chart>
	* ```
	*/
	get yAxisMaximumValue(): number {
		return (this.i.yAxisMaximumValue as number);
	}
	@Input()
	set yAxisMaximumValue(v: number) {
		this.i.yAxisMaximumValue = +v;
	}
	/**
	 * Gets or sets the frequency of displayed minor lines along the Y-axis.
	*
	* `yAxisMinorInterval` determines how often to show a minor gridline along the y-axis.  Set this property to a number less than the y-axis interval.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisMinorInterval="2"
	*     yAxisMinorStroke="green"
	*     yAxisMinorStrokeThickness="1">
	* </igx-category-chart>
	* ```
	*/
	get yAxisMinorInterval(): number {
		return (this.i.yAxisMinorInterval as number);
	}
	@Input()
	set yAxisMinorInterval(v: number) {
		this.i.yAxisMinorInterval = +v;
	}
	/**
	 * Gets the current minimum value for the X-axis.
	*/
	get xAxisActualMinimum(): number {
		return (this.i.xAxisActualMinimum as number);
	}
	/**
	 * Gets the current maximum value for the X-axis.
	*/
	get xAxisActualMaximum(): number {
		return (this.i.xAxisActualMaximum as number);
	}
	/**
	 * Gets the current minimum value for the Y-axis.
	*/
	get yAxisActualMinimum(): number {
		return (this.i.yAxisActualMinimum as number);
	}
	/**
	 * Gets the current maximum value for the Y-axis.
	*/
	get yAxisActualMaximum(): number {
		return (this.i.yAxisActualMaximum as number);
	}
	/**
	 * Gets or sets the palette used for coloring negative items of Waterfall chart type.
	*
	* `negativeBrushes` controls the brushes used by the chart for negative data, when the `chartType` is one that supports negative brushes.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     chartType="waterfall"
	*     negativeBrushes="#ff0000, #cc0000, #aa0000">
	* </igx-category-chart>
	* ```
	*/
	get negativeBrushes(): string[] {
		return fromBrushCollection(this.i.negativeBrushes);
	}
	@Input()
	set negativeBrushes(v: string[]) {
		this.i.negativeBrushes = toBrushCollection(v);
	}
	/**
	 * Brushes to use for drawing negative elements, when using a chart type with contextual coloring, such as Waterfall.
	*
	* `negativeOutlines` controls the outlines used by the chart for negative data, when the `chartType` is one that supports negative brushes.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     chartType="waterfall"
	*     negativeOutlines="#0000ff, #0000cc, #0000aa">
	* </igx-category-chart>
	* ```
	*/
	get negativeOutlines(): string[] {
		return fromBrushCollection(this.i.negativeOutlines);
	}
	@Input()
	set negativeOutlines(v: string[]) {
		this.i.negativeOutlines = toBrushCollection(v);
	}
	/**
	 * Gets or sets whether the large numbers on the Y-axis labels are abbreviated.
	*
	* To abbreviate on the y-axis using formats like "1K" or "1M," set `yAxisAbbreviateLargeNumbers` to true.
	*
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisAbbreviateLargeNumbers="true">
	* </igx-category-chart>
	* ```
	*/
	get yAxisAbbreviateLargeNumbers(): boolean {
		return (this.i.yAxisAbbreviateLargeNumbers as boolean);
	}
	@Input()
	set yAxisAbbreviateLargeNumbers(v: boolean) {
		this.i.yAxisAbbreviateLargeNumbers = ensureBool(v);
	}
	/**
	 * Gets or sets whether the category should be highlighted when hovered
	*/
	get isCategoryHighlightingEnabled(): boolean {
		return (this.i.isCategoryHighlightingEnabled as boolean);
	}
	@Input()
	set isCategoryHighlightingEnabled(v: boolean) {
		this.i.isCategoryHighlightingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether the item should be highlighted when hovered
	*/
	get isItemHighlightingEnabled(): boolean {
		return (this.i.isItemHighlightingEnabled as boolean);
	}
	@Input()
	set isItemHighlightingEnabled(v: boolean) {
		this.i.isItemHighlightingEnabled = ensureBool(v);
	}
	container: Element;

	@ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

	private _height: string;
	private _width: string;

	private _wrapper: AngularRenderer;

	private _chart: CategoryChart;

	private _dataSource: Array<any> = null;

	private _defaultTooltips: ComponentRef<any> = null;

	ngOnDestroy() {
		this._chart.destroy();
		this._wrapper.destroy();
	}

	protected createImplementation() {
		return new CategoryChart();
	}

	protected createSeriesComponent(type: string): any {
		if (TypeRegistrar.isRegistered(type)) {
			const s = TypeRegistrar.create(type);
			(<any>s).owner = this;
			(<any>s)._provideRenderer(this.renderer);
			return s;
		} else {
			// we shouldn't get here, hopefully.
			throw Error("series type not loaded: " + type);
		}
	}

	protected createSeries(type: DataSeriesType): any {
		switch (type) {
			case DataSeriesType.Area:
				return this.createSeriesComponent("IgxAreaSeriesComponent");
			case DataSeriesType.Column:
				return this.createSeriesComponent("IgxColumnSeriesComponent");
			case DataSeriesType.Line:
				return this.createSeriesComponent("IgxLineSeriesComponent");
			case DataSeriesType.Point:
				return this.createSeriesComponent("IgxPointSeriesComponent");
			case DataSeriesType.Spline:
				return this.createSeriesComponent("IgxSplineSeriesComponent");
			case DataSeriesType.SplineArea:
				return this.createSeriesComponent("IgxSplineAreaSeriesComponent");
			case DataSeriesType.StepArea:
				return this.createSeriesComponent("IgxStepAreaSeriesComponent");
			case DataSeriesType.StepLine:
				return this.createSeriesComponent("IgxStepLineSeriesComponent");
			case DataSeriesType.Waterfall:
				return this.createSeriesComponent("IgxWaterfallSeriesComponent");
			case DataSeriesType.ItemToolTipLayer:
				return this.createSeriesComponent("IgxItemToolTipLayerComponent");
			case DataSeriesType.CategoryToolTipLayer:
				return this.createSeriesComponent("IgxCategoryToolTipLayerComponent");
			case DataSeriesType.CrosshairLayer:
				return this.createSeriesComponent("IgxCrosshairLayerComponent");
			case DataSeriesType.FinalValueLayer:
				return this.createSeriesComponent("IgxFinalValueLayerComponent");
			case DataSeriesType.CalloutLayer:
				return this.createSeriesComponent("IgxCalloutLayerComponent");
			case DataSeriesType.CategoryHighlightLayer:
				return this.createSeriesComponent("IgxCategoryHighlightLayerComponent");
			case DataSeriesType.CategoryItemHighlightLayer:
				return this.createSeriesComponent("IgxCategoryItemHighlightLayerComponent");
			default:
				return this.createSeriesComponent("IgxColumnSeriesComponent");
		}
	}

	bindData() {
		if (this._chart != null && this._chart !== undefined) {
			this._chart.itemsSource = <IEnumerable><any>this._dataSource;
		}
	}
	ngAfterContentInit() {
		if (TypeRegistrar.isRegistered("IgxDataChartDefaultTooltipsComponent")) {
			const c = TypeRegistrar.get("IgxDataChartDefaultTooltipsComponent");
			const cf = this.componentFactoryResolver.resolveComponentFactory(c);
			// let cr = cf.create(this.injector);
			const cr = this._dynamicContent.createComponent(cf);
			this._defaultTooltips = cr;
			(<any>cr.instance).onContentReady.subscribe(() => {
				this._onDefaultTooltipsReady(cr);
			});
			this.container.appendChild(cr.location.nativeElement);
		}

		this._styling(this.container, this);

		// tslint:disable-next-line: quotemark
		const watermark = this.renderer.createElement('trial-watermark');
		this.container.appendChild(watermark);
	}

	private createTooltip(): ComponentRef<any> {
		if (!TypeRegistrar.isRegistered("IgxTooltipContainerComponent")) {
			return null;
		}
		const t = TypeRegistrar.get("IgxTooltipContainerComponent");
		const cf = this.componentFactoryResolver.resolveComponentFactory(t);
		// let cr = cf.create(this.injector);
		const cr = this._dynamicContent.createComponent(cf);
		const ele: Element = cr.location.nativeElement;
		const self = this;

		(<any>ele).updateToolTip = function(c, isSubContent?: boolean) {
			if (c.externalObject) {
				c = c.externalObject;
			} else {
				const ext = new IgxDataContext();
				(<any>ext)._implementation = c;
				c = ext;
			}

			if (!isSubContent) {
				if (ele.parentElement != self.container) {
					if (ele.parentElement != null) {
						ele.parentElement.removeChild(ele);
					}

					self.container.appendChild(ele);
				}
			} else {
				c.isSubContent = true;
			}
			(<any>cr.instance).context = c;
			(<any>ele).style.display = "block";

			return true;
		};
		(<any>ele).hideToolTip = function() {
			(<any>ele).style.display = "none"
		};
		(<any>ele).style.display = "none"

		return cr;
	}

	private _ensureTooltipCreated(series: any) {
		(<any>series)._ensureTooltipCreated(
			() => this.createTooltip(),
			(ele) => {
				const wrapper = new AngularWrapper(
					ele,
					this.renderer,
					this.ngZone
				);
				(<any>wrapper).updateToolTip = (<any>ele).updateToolTip;
				(<any>wrapper).hideToolTip = (<any>ele).hideToolTip;
				return wrapper;
			});
	}

	private _createXAxis(): any {
		const x = new IgxCategoryXAxisComponent();
		(<any>x)._provideRenderer(this.renderer);
		return x.i;
	}

	private _createYAxis(): any {
		const y = new IgxNumericYAxisComponent();
		(<any>y).provideRenderer(this.renderer);
		return y.i;
	}

	private _ensureDefaultTooltip(series: any) {
		if (this._defaultTooltips == null) {
			return;
		}
		this._defaultTooltips.instance.ensureDefaultTooltip(series);
	}

	private _onDefaultTooltipsReady(cr: ComponentRef<any>) {
		if (this.i.dataChart) {
			let currSeries = this.i.dataChart.series;
			for (let i = 0; i < currSeries.count; i++) {
				if ((<any>currSeries.item(i)).externalObject.showDefaultTooltip) {
					this._ensureDefaultTooltip((<any>currSeries.item(i)).externalObject);
				}
			}
		}
	}



	/**
 * Export serialized visual data.

*/
	public exportSerializedVisualData(): string {
		const iv = this.i.exportSerializedVisualData();
		return (iv);
	}



	// @@ZoneRunner
}
