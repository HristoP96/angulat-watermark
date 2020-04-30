/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Brush } from "igniteui-core/Brush";
import { XYChart } from "./XYChart";
import { IndicatorPane } from "./IndicatorPane";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, DomWrapperPosition } from "igniteui-core/dom";
import { DomainChart } from "./DomainChart";
import { Base, BaseError, EventArgs, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList, IList_$type, runOn, delegateRemove, delegateCombine, typeCast, fromEnum, EnumUtil, Number_$type, IEnumerable$1, String_$type, enumGetBox, Type, markType, TypeRegistrar, ICollection, ICollection_$type, IEnumerable, IEnumerable_$type, fromEn } from "igniteui-core/type";
import { IZoomSlider } from "igniteui-core/IZoomSlider";
import { List$1 } from "igniteui-core/List$1";
import { DataSeriesType, DataSeriesType_$type } from "igniteui-core/DataSeriesType";
import { IDataSeriesAdapterRule, IDataSeriesAdapterRule_$type } from "igniteui-core/IDataSeriesAdapterRule";
import { SimpleFinancialPriceSeriesRule } from "igniteui-core/SimpleFinancialPriceSeriesRule";
import { SubCollectionsRule } from "igniteui-core/SubCollectionsRule";
import { IHorizontalAnchoredCategorySeriesProxy } from "./IHorizontalAnchoredCategorySeriesProxy";
import { IFinancialPriceSeriesProxy } from "./IFinancialPriceSeriesProxy";
import { IIndicatorProxy } from "./IIndicatorProxy";
import { IOverlayProxy } from "./IOverlayProxy";
import { XamDataChart } from "./XamDataChart";
import { NumericAxisBase } from "./NumericAxisBase";
import { FinancialChartVolumeType, FinancialChartVolumeType_$type } from "./FinancialChartVolumeType";
import { FinancialChartXAxisMode, FinancialChartXAxisMode_$type } from "./FinancialChartXAxisMode";
import { FinancialChartYAxisMode, FinancialChartYAxisMode_$type } from "./FinancialChartYAxisMode";
import { FinancialChartType, FinancialChartType_$type } from "./FinancialChartType";
import { HorizontalAlignment } from "igniteui-core/HorizontalAlignment";
import { FinancialIndicatorTypeCollection } from "./FinancialIndicatorTypeCollection";
import { FinancialOverlayTypeCollection } from "./FinancialOverlayTypeCollection";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { NumericYAxis } from "./NumericYAxis";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { FinancialChartZoomSliderType, FinancialChartZoomSliderType_$type } from "./FinancialChartZoomSliderType";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { IndicatorDisplayTypeCollection } from "./IndicatorDisplayTypeCollection";
import { FinancialChartRangeSelectorOptionCollection } from "./FinancialChartRangeSelectorOptionCollection";
import { CustomIndicatorNameCollection } from "./CustomIndicatorNameCollection";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { TemplatedHtmlControl } from "./TemplatedHtmlControl";
import { FinancialChartContext } from "./FinancialChartContext";
import { FinancialChartToolbarContext } from "./FinancialChartToolbarContext";
import { FinancialChartViewModel } from "./FinancialChartViewModel";
import { FinancialChartToolbarViewModel } from "./FinancialChartToolbarViewModel";
import { SeriesViewer } from "./SeriesViewer";
import { RectChangedEventArgs } from "igniteui-core/RectChangedEventArgs";
import { DefaultPaletteInfo } from "./DefaultPaletteInfo";
import { SeriesViewerView } from "./SeriesViewerView";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { Axis } from "./Axis";
import { DataSeries } from "igniteui-core/DataSeries";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { MarkerSeries } from "./MarkerSeries";
import { TitleSettings } from "./TitleSettings";
import { SyncSettings } from "./SyncSettings";
import { SyncManager } from "./SyncManager";
import { DataSeriesAdapterImplementation } from "igniteui-core/DataSeriesAdapterImplementation";
import { FinancialOverlayType, FinancialOverlayType_$type } from "./FinancialOverlayType";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { FinancialIndicatorType, FinancialIndicatorType_$type } from "./FinancialIndicatorType";
import { IndicatorDisplayType, IndicatorDisplayType_$type } from "./IndicatorDisplayType";
import { ITimeRangeSelectorAxis, ITimeRangeSelectorAxis_$type } from "./ITimeRangeSelectorAxis";
import { FinancialChartVisualData } from "./FinancialChartVisualData";
import { FinancialChartCustomIndicatorArgs } from "./FinancialChartCustomIndicatorArgs";
import { FinancialChartRangeSelectorOption } from "./FinancialChartRangeSelectorOption";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { ScalerParams } from "./ScalerParams";
import { AxisRange } from "./AxisRange";
import { IAnnotationLayerProxy } from "./IAnnotationLayerProxy";
import { ITimeXAxis } from "./ITimeXAxis";
import { DataSeriesAxisType } from "igniteui-core/DataSeriesAxisType";
import { DataSeriesIntent } from "igniteui-core/DataSeriesIntent";
import { CategoryMode } from "./CategoryMode";
import { PriceDisplayType } from "./PriceDisplayType";
import { InteractionState } from "igniteui-core/InteractionState";
import { Visibility } from "igniteui-core/Visibility";
import { stringReplace, stringJoin, stringIsNullOrEmpty } from "igniteui-core/string";
import { timeSpanFromDays } from "igniteui-core/timespan";
import { dateMaxValue, dateMinValue } from "igniteui-core/date";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { FinancialChartTypePicker } from "./FinancialChartTypePicker";
import { FinancialChartIndicatorMenu } from "./FinancialChartIndicatorMenu";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { FinancialChartDropDownControl } from "./FinancialChartDropDownControl";
import { FinancialChartIndicatorMenuContext } from "./FinancialChartIndicatorMenuContext";
import { FinancialChartIndicatorMenuViewModel } from "./FinancialChartIndicatorMenuViewModel";
import { FinancialChartTypePickerContext } from "./FinancialChartTypePickerContext";
import { FinancialChartRangeSelectorContext } from "./FinancialChartRangeSelectorContext";
import { FinancialChartToolbarVisualData } from "./FinancialChartToolbarVisualData";
import { FinancialChartRangeSelectorViewModel } from "./FinancialChartRangeSelectorViewModel";
import { FinancialChartRangeSelectorView } from "./FinancialChartRangeSelectorView";
import { FinancialChartRangeSelectorVisualData } from "./FinancialChartRangeSelectorVisualData";

/**
 * @hidden 
 */
export class FinancialChart extends XYChart {
	static $t: Type = markType(FinancialChart, 'FinancialChart', (<any>XYChart).$type);
	protected propertyUpdatedOverridePlatform(propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverridePlatform(propertyName, oldValue, newValue);
		switch (propertyName) {
			case FinancialChart.toolbarTemplatePropertyName:

			case FinancialChart.rangeSelectorTemplatePropertyName:
			this.toolbar = new FinancialChartToolbar(this, this.toolbarTemplate);
			break;

			case FinancialChart.toolbarPropertyName:
			let oldToolbar: FinancialChartToolbar = <FinancialChartToolbar>oldValue;
			if (oldToolbar != null) {
				oldToolbar.chartTypeChanged = delegateRemove(oldToolbar.chartTypeChanged, runOn(this, this.handleToolbarChartTypeChanged));
				oldToolbar.trendLineTypeChanged = delegateRemove(oldToolbar.trendLineTypeChanged, runOn(this, this.handleToolbarTrendLineTypeChanged));
				oldToolbar.volumeTypeChanged = delegateRemove(oldToolbar.volumeTypeChanged, runOn(this, this.handleToolbarVolumeTypeChanged));
				oldToolbar.provideContainer(null);
			}
			if (this.toolbar != null) {
				this.toolbar.volumeType = this.volumeType;
				this.toolbar.trendLineType = this.trendLineType;
				this.toolbar.chartType = this.chartType;
				this.toolbar.isToolbarVisible = this.isToolbarVisible;
				if (this.toolbarRenderer != null) {
					this.toolbar.provideContainer(this.toolbarRenderer);
				}
				let $t = this.toolbar;
				$t.chartTypeChanged = delegateCombine($t.chartTypeChanged, runOn(this, this.handleToolbarChartTypeChanged));
				;
				let $t1 = this.toolbar;
				$t1.trendLineTypeChanged = delegateCombine($t1.trendLineTypeChanged, runOn(this, this.handleToolbarTrendLineTypeChanged));
				let $t2 = this.toolbar;
				$t2.volumeTypeChanged = delegateCombine($t2.volumeTypeChanged, runOn(this, this.handleToolbarVolumeTypeChanged));
			}
			break;

			case FinancialChart.chartTypePropertyName:
			if (this.toolbar != null) {
				this.toolbar.chartType = this.chartType;
			}
			break;

			case FinancialChart.volumeTypePropertyName:
			if (this.toolbar != null) {
				this.toolbar.volumeType = this.volumeType;
			}
			break;

			case DomainChart.trendLineTypePropertyName:
			if (this.toolbar != null) {
				this.toolbar.trendLineType = this.trendLineType;
			}
			break;

			case FinancialChart.isToolbarVisiblePropertyName:
			if (this.toolbar == null) {
				break;
			}
			this.toolbar.isToolbarVisible = this.isToolbarVisible;
			this.setGridRows();
			break;

		}

	}
	private handleToolbarVolumeTypeChanged(sender: any, e: EventArgs): void {
		this.volumeType = this.toolbar.volumeType;
	}
	private handleToolbarTrendLineTypeChanged(sender: any, e: EventArgs): void {
		this.trendLineType = this.toolbar.trendLineType;
	}
	private handleToolbarChartTypeChanged(sender: any, e: EventArgs): void {
		this.chartType = this.toolbar.chartType;
	}
	private platformCtor(): void {
		this.indicatorPane = new IndicatorPane();
		this.financialChartLegend = <IChartLegend><any>TypeRegistrar.create("FinancialLegend");
	}
	private _indicatorPane: IndicatorPane = null;
	private get indicatorPane(): IndicatorPane {
		return this._indicatorPane;
	}
	private set indicatorPane(value: IndicatorPane) {
		this._indicatorPane = value;
	}
	provideGrid(grid: DomWrapper): void {
		this.gridDiv = grid;
		this.updateZoomSlider();
		this.setGridRows();
		if (this.toolbar != null) {
			this.toolbar.findContainers(grid);
		}
	}
	onDocumentClick(e: Event): void {
		if (this.toolbar != null) {
			this.toolbar.onDocumentClick(e);
		}
	}
	private _gridDiv: DomWrapper = null;
	private get gridDiv(): DomWrapper {
		return this._gridDiv;
	}
	private set gridDiv(value: DomWrapper) {
		this._gridDiv = value;
	}
	private _volumeRenderer: DomRenderer = null;
	private get volumeRenderer(): DomRenderer {
		return this._volumeRenderer;
	}
	private set volumeRenderer(value: DomRenderer) {
		this._volumeRenderer = value;
	}
	private _indicatorRenderer: DomRenderer = null;
	private get indicatorRenderer(): DomRenderer {
		return this._indicatorRenderer;
	}
	private set indicatorRenderer(value: DomRenderer) {
		this._indicatorRenderer = value;
	}
	private _toolbarRenderer: DomRenderer = null;
	private get toolbarRenderer(): DomRenderer {
		return this._toolbarRenderer;
	}
	private set toolbarRenderer(value: DomRenderer) {
		this._toolbarRenderer = value;
	}
	private _zoomSliderRenderer: DomRenderer = null;
	private get zoomSliderRenderer(): DomRenderer {
		return this._zoomSliderRenderer;
	}
	private set zoomSliderRenderer(value: DomRenderer) {
		this._zoomSliderRenderer = value;
	}
	private _legendRenderer: DomRenderer = null;
	private get legendRenderer(): DomRenderer {
		return this._legendRenderer;
	}
	private set legendRenderer(value: DomRenderer) {
		this._legendRenderer = value;
	}
	getContext(): FinancialChartContext {
		let toolbar = this.toolbar.getContext();
		let context: FinancialChartContext = new FinancialChartContext();
		context.vm = new FinancialChartViewModel();
		context.vm.toolbar = toolbar;
		context.container = this.container;
		context.toolbarContainer = this.toolbarRenderer;
		context.legendContainer = this.legendRenderer;
		context.indicatorsContainer = this.indicatorRenderer;
		context.volumeContainer = this.volumeRenderer;
		context.zoomContainer = this.zoomSliderRenderer;
		return context;
	}
	private static readonly defaultTemplate: string = "";
	provideContainer(container: any): void {
		let renderer: DomRenderer = <DomRenderer><any>container;
		if (renderer != null) {
			let className: string = "financialChartMainGrid";
			let toolbarDiv: DomWrapper = renderer.createElement("div");
			toolbarDiv.setStyleProperty("width", "100%");
			toolbarDiv.setStyleProperty("height", "100%");
			if (this.toolbar == null) {
				this.toolbar = new FinancialChartToolbar(this, this.toolbarTemplate);
			}
			this.toolbar.viewModel.isIndicatorMenuVisible = this.hasIndicatorProxy && this.hasOverlayProxy;
			this.toolbarRenderer = renderer.getSubRenderer(toolbarDiv);
			this.toolbar.provideContainer(this.toolbarRenderer);
			let mainDiv: DomWrapper = renderer.createElement("div");
			mainDiv.setStyleProperty("width", "100%");
			mainDiv.setStyleProperty("height", "100%");
			let legendDiv: DomWrapper = renderer.createElement("div");
			legendDiv.setStyleProperty("width", "100%");
			legendDiv.setStyleProperty("height", "100%");
			this.legendRenderer = renderer.getSubRenderer(legendDiv);
			let indicatorDiv: DomWrapper = renderer.createElement("div");
			indicatorDiv.setStyleProperty("width", "100%");
			indicatorDiv.setStyleProperty("height", "100%");
			this.indicatorRenderer = renderer.getSubRenderer(indicatorDiv);
			let volumeDiv: DomWrapper = renderer.createElement("div");
			volumeDiv.setStyleProperty("width", "100%");
			volumeDiv.setStyleProperty("height", "100%");
			this.volumeRenderer = renderer.getSubRenderer(volumeDiv);
			let zoomSliderDiv: DomWrapper = renderer.createElement("div");
			zoomSliderDiv.setStyleProperty("width", "100%");
			zoomSliderDiv.setStyleProperty("height", "100%");
			this.zoomSliderRenderer = renderer.getSubRenderer(zoomSliderDiv);
			container = renderer.getSubRenderer(mainDiv);
		} else {
			this.toolbarRenderer = null;
			if (this.toolbar != null) {
				this.toolbar.provideContainer(null);
			}
			if (this.zoomSlider != null) {
				this.zoomSlider.provideContainer(null);
				this.zoomSlider = null;
			}
			if (this.financialChartLegend != null) {
				this.financialChartLegend.provideContainer(null);
			}
		}
		super.provideContainer(container);
		if (renderer != null) {
			if (this.volumeChart != null) {
				this.volumeChart.provideContainer(this.volumeRenderer);
			}
			if (this.indicatorPane != null) {
				this.indicatorPane.provideContainer(this.indicatorRenderer);
			}
			if (this.zoomSliderChart != null) {
				this.zoomSliderChart.provideContainer(this.zoomSliderRenderer);
				if (container != null) {
					this.createZoomSlider();
				} else {
					this.zoomSlider = null;
				}
			}
			if (this.financialChartLegend != null) {
				this.financialChartLegend.provideContainer(this.legendRenderer);
			}
			this.setGridRows();
		}
	}
	private subChartUpdatedPlatform(oldChart: XamDataChart, newChart: XamDataChart, renderer: DomRenderer): void {
		if (oldChart != null) {
			oldChart.provideContainer(null);
		}
		if (newChart != null) {
			newChart.provideContainer(renderer);
		}
		this.setGridRows();
	}
	private zoomSliderChartUpdatedPlatform(oldChart: XamDataChart, newChart: XamDataChart): void {
		this.subChartUpdatedPlatform(oldChart, newChart, this.zoomSliderRenderer);
		if (newChart == null) {
			return;
		}
		this.createZoomSlider();
	}
	private createZoomSlider(): void {
		if (this.zoomSliderRenderer == null) {
			return;
		}
		if (this.zoomSlider != null) {
			this.zoomSlider.provideContainer(null);
		}
		this.zoomSlider = <IZoomSlider><any>TypeRegistrar.create("ZoomSlider");
		this.zoomSlider.provideContainer(this.zoomSliderRenderer);
		let $t = this.zoomSlider;
		$t.windowRectChanged = delegateCombine($t.windowRectChanged, (oo: any, ee: RectChangedEventArgs) => {
			if (this.dataChart != null) {
				this.dataChart.windowRect = new Rect(0, this.zoomSlider.windowRect.left, this.dataChart.actualWindowRect.top, this.zoomSlider.windowRect.width, this.dataChart.actualWindowRect.height);
			}
		});
		this.ensureZoomSliderSyled();
	}
	private volumeChartUpdatedPlatform(oldChart: XamDataChart, newChart: XamDataChart): void {
		this.subChartUpdatedPlatform(oldChart, newChart, this.volumeRenderer);
	}
	setGridRows(): void {
		if (this.gridDiv == null) {
			return;
		}
		let rows: string[] = <string[]>new Array(6);
		rows[0] = (this.isToolbarVisible ? this.toolbarHeight : 0) + "px";
		rows[1] = this.isLegendVisible ? "min-content" : "0px";
		rows[2] = "auto";
		rows[3] = this.indicatorCharts == null || this.indicatorCharts.count == 0 ? "0px" : this.indicatorCharts.count * 150 + "px";
		rows[4] = this.volumeChart == null ? "0px" : "100px";
		rows[5] = this.zoomSliderChart == null ? "0px" : "100px";
		if (this.zoomSlider != null) {
			if (rows[5] == "0px") {
				this.zoomSlider.hide();
			} else {
				this.zoomSlider.show();
			}
		}
		this.gridDiv.setStyleProperty("-ms-grid-rows", stringReplace(stringJoin(" ", ...rows), "auto", "1fr"));
		this.gridDiv.setStyleProperty("grid-template-rows", stringJoin(" ", ...rows));
		if (this.container == null) {
			return;
		}
		if (this.dataChart != null) {
			this.dataChart.notifyContainerResized();
		}
		if (this.indicatorPane != null) {
			this.indicatorPane.notifyContainerResized();
		}
		if (this.volumeChart != null) {
			this.volumeChart.notifyContainerResized();
		}
		if (this.zoomSliderChart != null) {
			this.zoomSliderChart.notifyContainerResized();
		}
		if (this.zoomSlider != null) {
			this.zoomSlider.notifySizeChanged();
		}
	}
	protected initializeDefaultsOverride(): void {
		super.initializeDefaultsOverride();
		this.yAxisLabelLocation = AxisLabelsLocation.OutsideRight;
		this.yAxisLabelHorizontalAlignment = HorizontalAlignment.Left;
		this.resolution = NaN;
		this.leftMargin = 30;
		this.isHorizontalZoomEnabled = true;
		this.isVerticalZoomEnabled = false;
		if (this.dataChart != null) {
			let palette = this.dataChart.view.viewManager.getDefaultPalette();
			this.negativeBrushes = palette.negativeBrushes;
			this.negativeOutlines = palette.negativeOutlines;
			this.indicatorNegativeBrushes = palette.negativeBrushes;
			this.zoomSliderXAxisMajorStroke = this.dataChart.defaultAxisMajorStroke;
		}
		let overlayBrushes: BrushCollection = new BrushCollection();
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(116, 70, 185, .3)";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(159, 179, 40, .3)";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(46, 156, 166, .3)";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(63, 81, 181, .3)";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(154, 154, 154, .3)";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(67, 156, 71, .3)";
			return $ret;
		})()));
		this.overlayBrushes = overlayBrushes;
		let overlayOutlines: BrushCollection = new BrushCollection();
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "#7446B9";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "#9FB328";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "#2E9CA6";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "#3F51B5";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "#9A9A9A";
			return $ret;
		})()));
		overlayBrushes.add(((() => {
			let $ret = new Brush();
			$ret.fill = "#439C47";
			return $ret;
		})()));
		this.overlayOutlines = overlayOutlines;
	}
	private refreshIndicatorChartLayout(): void {
		if (this.indicatorPane != null) {
			this.indicatorPane.indicatorCharts = null;
			this.indicatorPane.indicatorCharts = this.indicatorCharts;
		}
		this.setGridRows();
	}
	private refreshZoomSliderLayout(): void {
		this.setGridRows();
	}
	private updateIndicatorsPlatform(): void {
		this.refreshIndicatorChartLayout();
	}
	private configureZoomSliderSize(): void {
		if (this.zoomSlider == null || this.zoomSliderChart == null || this.dataChart == null || this.dataChart.series.count == 0) {
			return;
		}
		let width: number = (<DomRenderer><any>this.container).rootWrapper.width();
		let right: number = this.dataChart.viewportRect.left + this.dataChart.viewportRect.width;
		let insetLeft = this.dataChart.viewportRect.left;
		let insetRight = width - right;
		this.zoomSlider.startInset = insetLeft - this.zoomSlider.trackStartInset;
		this.zoomSlider.endInset = insetRight - this.zoomSlider.trackEndInset;
		if (this.zoomSlider.endInset < 0) {
			let inset = this.zoomSlider.endInset;
			this.zoomSlider.endInset = 0;
			this.dataChart.rightMargin += (inset * -1);
		}
		if (this.zoomSlider.startInset < 0) {
			let inset1 = this.zoomSlider.startInset;
			this.zoomSlider.startInset = 0;
			this.dataChart.leftMargin += (inset1 * -1);
		}
		this.zoomSliderChart.leftMargin = insetLeft;
		this.zoomSliderChart.rightMargin = insetRight;
		this.zoomSliderChart.bottomMargin = this.zoomSlider.barExtent;
	}
	private onDataChartGridAreaRectChangedPlatform(): void {
		this.configureZoomSliderSize();
	}
	protected initializeChartOverridePlatform(dataChart: XamDataChart): void {
		super.initializeChartOverridePlatform(dataChart);
		if (dataChart != null) {
			dataChart.autoMarginWidth = 0;
		}
	}
	private getLocation(chart: XamDataChart): Point {
		return chart.getContainerOffsets();
	}
	private getLegendBounds(): Rect {
		return this.legendRenderer == null ? null : this.getBounds1(this.legendRenderer.rootWrapper);
	}
	private getBounds(element: TemplatedHtmlControl): Rect {
		if (element == null || element.renderer == null) {
			return null;
		}
		return this.getBounds1(element.renderer.rootWrapper);
	}
	private getBounds1(element: DomWrapper): Rect {
		if (element == null) {
			return null;
		}
		let offset: DomWrapperPosition = element.getOffset();
		return new Rect(0, offset.left, offset.top, element.width(), element.height());
	}
	getRight(): number {
		if (this.gridDiv == null) {
			return NaN;
		}
		let offset: DomWrapperPosition = this.gridDiv.getOffset();
		return this.gridDiv.width() + (offset == null ? 0 : offset.left);
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		super.notifyInsertItem(source_, index, newItem);
		if (this.zoomSliderChart != null) {
			this.zoomSliderChart.notifyInsertItem(source_, index, newItem);
		}
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		super.notifyRemoveItem(source_, index, oldItem);
		if (this.zoomSliderChart != null) {
			this.zoomSliderChart.notifyRemoveItem(source_, index, oldItem);
		}
	}
	notifyClearItems(source_: any): void {
		super.notifyClearItems(source_);
		if (this.zoomSliderChart != null) {
			this.zoomSliderChart.notifyClearItems(source_);
		}
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		super.notifySetItem(source_, index, oldItem, newItem);
		if (this.zoomSliderChart != null) {
			this.zoomSliderChart.notifySetItem(source_, index, oldItem, newItem);
		}
	}
	protected initializeSeriesOverridePlatform(series: Series, index: number): void {
		super.initializeSeriesOverridePlatform(series, index);
		if (this.isOverlay(series)) {
			series.toolTip = null;
		}
	}
	private static readonly toolbarPropertyName: string = "Toolbar";
	private _toolbar: FinancialChartToolbar = null;
	private get toolbar(): FinancialChartToolbar {
		return this._toolbar;
	}
	private set toolbar(value: FinancialChartToolbar) {
		let oldValue: FinancialChartToolbar = this.toolbar;
		if (value != oldValue) {
			this._toolbar = value;
			this.onPropertyUpdated(FinancialChart.toolbarPropertyName, oldValue, this.toolbar);
		}
	}
	private static readonly rangeSelectorTemplatePropertyName: string = "RangeSelectorTemplate";
	private _rangeSelectorTemplate: any = null;
	get rangeSelectorTemplate(): any {
		return this._rangeSelectorTemplate;
	}
	set rangeSelectorTemplate(value: any) {
		let oldValue: any = this.rangeSelectorTemplate;
		if (value != oldValue) {
			this._rangeSelectorTemplate = value;
			this.onPropertyUpdated(FinancialChart.rangeSelectorTemplatePropertyName, oldValue, this.rangeSelectorTemplate);
		}
	}
	private static readonly toolbarTemplatePropertyName: string = "ToolbarTemplate";
	private _toolbarTemplate: any = null;
	get toolbarTemplate(): any {
		return this._toolbarTemplate;
	}
	set toolbarTemplate(value: any) {
		let oldValue: any = this.toolbarTemplate;
		if (value != oldValue) {
			this._toolbarTemplate = value;
			this.onPropertyUpdated(FinancialChart.toolbarTemplatePropertyName, oldValue, this.toolbarTemplate);
		}
	}
	private static readonly chartTypePickerTemplatePropertyName: string = "ChartTypePickerTemplate";
	private _chartTypePickerTemplate: any = null;
	get chartTypePickerTemplate(): any {
		return this._chartTypePickerTemplate;
	}
	set chartTypePickerTemplate(value: any) {
		let oldValue: any = this.chartTypePickerTemplate;
		if (value != oldValue) {
			this._chartTypePickerTemplate = value;
			this.onPropertyUpdated(FinancialChart.chartTypePickerTemplatePropertyName, oldValue, this.chartTypePickerTemplate);
		}
	}
	private static readonly trendLineTypePickerTemplatePropertyName: string = "TrendLineTypePickerTemplate";
	private _trendLineTypePickerTemplate: any = null;
	get trendLineTypePickerTemplate(): any {
		return this._trendLineTypePickerTemplate;
	}
	set trendLineTypePickerTemplate(value: any) {
		let oldValue: any = this.trendLineTypePickerTemplate;
		if (value != oldValue) {
			this._trendLineTypePickerTemplate = value;
			this.onPropertyUpdated(FinancialChart.trendLineTypePickerTemplatePropertyName, oldValue, this.trendLineTypePickerTemplate);
		}
	}
	private static readonly volumeTypePickerTemplatePropertyName: string = "VolumeTypePickerTemplate";
	private _volumeTypePickerTemplate: any = null;
	get volumeTypePickerTemplate(): any {
		return this._volumeTypePickerTemplate;
	}
	set volumeTypePickerTemplate(value: any) {
		let oldValue: any = this.volumeTypePickerTemplate;
		if (value != oldValue) {
			this._volumeTypePickerTemplate = value;
			this.onPropertyUpdated(FinancialChart.volumeTypePickerTemplatePropertyName, oldValue, this.volumeTypePickerTemplate);
		}
	}
	private static readonly indicatorMenuTemplatePropertyName: string = "IndicatorMenuTemplate";
	private _indicatorMenuTemplate: any = null;
	get indicatorMenuTemplate(): any {
		return this._indicatorMenuTemplate;
	}
	set indicatorMenuTemplate(value: any) {
		let oldValue: any = this.indicatorMenuTemplate;
		if (value != oldValue) {
			this._indicatorMenuTemplate = value;
			this.onPropertyUpdated(FinancialChart.indicatorMenuTemplatePropertyName, oldValue, this.indicatorMenuTemplate);
		}
	}
	private static readonly overlayPickerTemplatePropertyName: string = "OverlayPickerTemplate";
	private _overlayPickerTemplate: any = null;
	get overlayPickerTemplate(): any {
		return this._overlayPickerTemplate;
	}
	set overlayPickerTemplate(value: any) {
		let oldValue: any = this.overlayPickerTemplate;
		if (value != oldValue) {
			this._overlayPickerTemplate = value;
			this.onPropertyUpdated(FinancialChart.overlayPickerTemplatePropertyName, oldValue, this.overlayPickerTemplate);
		}
	}
	private static readonly zoomSliderPropertyName: string = "ZoomSlider";
	private _zoomSlider: IZoomSlider = null;
	get zoomSlider(): IZoomSlider {
		return this._zoomSlider;
	}
	set zoomSlider(value: IZoomSlider) {
		let oldValue: IZoomSlider = this.zoomSlider;
		if (value != oldValue) {
			this._zoomSlider = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderPropertyName, oldValue, this.zoomSlider);
		}
	}
	protected get_leftMargin(): number {
		return super.get_leftMargin();
	}
	protected set_leftMargin(value: number): void {
		super.set_leftMargin(value);
	}
	protected get_isHorizontalZoomEnabled(): boolean {
		return super.get_isHorizontalZoomEnabled();
	}
	protected set_isHorizontalZoomEnabled(value: boolean): void {
		super.set_isHorizontalZoomEnabled(value);
	}
	private static readonly toolbarHeightPropertyName: string = "ToolbarHeight";
	private _toolbarHeight: number = 40;
	get toolbarHeight(): number {
		return this._toolbarHeight;
	}
	set toolbarHeight(value: number) {
		let oldValue: number = this.toolbarHeight;
		if (value != oldValue) {
			this._toolbarHeight = value;
			this.onPropertyUpdated(FinancialChart.toolbarHeightPropertyName, oldValue, this.toolbarHeight);
		}
	}
	constructor() {
		super();
		this.ensureAxesInitialized();
		this._xAxisBreaks = new ObservableCollection$1<any>((<any>Base).$type, 0);
		if (this.xAxisBreaks != null) {
			let $t = this.xAxisBreaks;
			$t.collectionChanged = delegateCombine($t.collectionChanged, (oo: any, ee: NotifyCollectionChangedEventArgs) => this.updateBreaks());
		}
		this.platformCtor();
	}
	protected getXAxis(): Axis {
		return this.xAxis;
	}
	protected getYAxis(): Axis {
		return this.yAxis;
	}
	onAttachedToUI(): void {
		super.onAttachedToUI();
		if (this.zoomSlider != null) {
			this.zoomSlider.onAttachedToUI();
		}
	}
	onDetachedFromUI(): void {
		super.onDetachedFromUI();
		if (this.zoomSlider != null) {
			this.zoomSlider.onDetachedFromUI();
		}
	}
	protected getSeriesType(ds: DataSeries): DataSeriesType {
		return DataSeriesType.FinancialPrice;
	}
	protected get_supportedDataSeries(): List$1<DataSeriesType> {
		return ((() => {
			let $ret = new List$1<DataSeriesType>(DataSeriesType_$type, 0);
			$ret.add(DataSeriesType.FinancialPrice);
			return $ret;
		})());
	}
	protected get supportedDataSeries(): List$1<DataSeriesType> {
		return this.get_supportedDataSeries();
	}
	protected get_supportedDataRules(): List$1<IDataSeriesAdapterRule> {
		return ((() => {
			let $ret = new List$1<IDataSeriesAdapterRule>(IDataSeriesAdapterRule_$type, 0);
			$ret.add(new SimpleFinancialPriceSeriesRule());
			$ret.add(new SubCollectionsRule());
			return $ret;
		})());
	}
	protected get supportedDataRules(): List$1<IDataSeriesAdapterRule> {
		return this.get_supportedDataRules();
	}
	private createTimeAxis(mode: FinancialChartXAxisMode): CategoryAxisBase {
		return this.getXAxisFromExternalChart(mode);
	}
	private createYAxis(mode: FinancialChartYAxisMode): NumericYAxis {
		return this.getYAxisFromExternalChart(mode);
	}
	private createDefaultTimeAxis(name: string): CategoryAxisBase {
		let axis = this.createTimeAxis(FinancialChartXAxisMode.Ordinal);
		axis.name = name;
		return axis;
	}
	protected createAxes(): void {
		this.xAxis = this.createDefaultTimeAxis("xAxis");
		this.yAxis = this.createYAxis(FinancialChartYAxisMode.Numeric);
		this.yAxis.name = "yAxis";
		this.volumeAxis = this.createYAxis(FinancialChartYAxisMode.Numeric);
		this.volumeAxis.name = "volumeAxis";
		this.volumeXAxis = this.createDefaultTimeAxis("volumeXAxis");
		this.indicatorAxes = new List$1<NumericYAxis>((<any>NumericYAxis).$type, 0);
		this.indicatorXAxes = new List$1<CategoryAxisBase>((<any>CategoryAxisBase).$type, 0);
		this.indicatorAxis = this.createYAxis(FinancialChartYAxisMode.Numeric);
		this.indicatorAxis.name = "indicatorAxis";
		this.indicatorXAxis = this.createDefaultTimeAxis("indicatorXAxis_0");
		this.indicatorAxes.add(this.indicatorAxis);
		this.indicatorXAxes.add(this.indicatorXAxis);
		if (this.xAxis.labelSettings == null) {
			this.xAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.yAxis.labelSettings == null) {
			this.yAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.volumeAxis.labelSettings == null) {
			this.volumeAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.volumeXAxis.labelSettings == null) {
			this.volumeAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.indicatorAxis.labelSettings == null) {
			this.indicatorAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.indicatorXAxis.labelSettings == null) {
			this.indicatorXAxis.labelSettings = new AxisLabelSettings();
		}
		this.zoomSliderAxis = this.createYAxis(FinancialChartYAxisMode.Numeric);
		this.zoomSliderAxis.name = "zoomSliderAxis";
		this.zoomSliderXAxis = this.createDefaultTimeAxis("zoomSliderXAxis");
		if (this.zoomSliderAxis.labelSettings == null) {
			this.zoomSliderAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.zoomSliderXAxis.labelSettings == null) {
			this.zoomSliderXAxis.labelSettings = new AxisLabelSettings();
		}
	}
	protected applyMarkers(series: Series, index: number): void {
		let marco: MarkerSeries = typeCast<MarkerSeries>((<any>MarkerSeries).$type, series);
		if (marco != null) {
			marco.markerType = this.resolveMarkerType(series, index);
		}
	}
	protected repopulateAxisBasedOn(ds: DataSeries): void {
		if (ds.suggestedSecondaryAxis == DataSeriesAxisType.Logarithmic) {
			this.yAxis.isLogarithmic = true;
			this.yAxis.logarithmBase = 10;
		}
	}
	protected resetAxes(): void {
		this.yAxis.isLogarithmic = this.yAxisIsLogarithmic;
		this.yAxis.logarithmBase = this.yAxisLogarithmBase;
	}
	private resolveChartType(ds: DataSeries): FinancialChartType {
		let type: FinancialChartType;
		if (this.chartType == FinancialChartType.Auto) {
			if (ds == null || ds.index > 0 || stringIsNullOrEmpty(ds.getMemberPathFor(DataSeriesIntent.HighSeriesValue))) {
				type = FinancialChartType.Line;
			} else {
				type = FinancialChartType.Candle;
			}
		} else {
			type = this.chartType;
		}
		type = this.fallbackType(type);
		return type;
	}
	private fallbackType(type: FinancialChartType): FinancialChartType {
		if ((type == FinancialChartType.Bar || type == FinancialChartType.Candle)) {
			if (TypeRegistrar.isRegistered("FinancialPriceSeries")) {
				return type;
			}
			type = FinancialChartType.Line;
		}
		if (type == FinancialChartType.Line) {
			if (TypeRegistrar.isRegistered("LineSeries")) {
				return type;
			}
			type = FinancialChartType.Column;
		}
		if (type == FinancialChartType.Column) {
			if (TypeRegistrar.isRegistered("ColumnSeries")) {
				return type;
			}
		}
		return type;
	}
	private fallbackSliderType(type: FinancialChartZoomSliderType): FinancialChartZoomSliderType {
		if ((type == FinancialChartZoomSliderType.Bar || type == FinancialChartZoomSliderType.Candle)) {
			if (TypeRegistrar.isRegistered("FinancialPriceSeries")) {
				return type;
			}
			type = FinancialChartZoomSliderType.Line;
		}
		if (type == FinancialChartZoomSliderType.Line) {
			if (TypeRegistrar.isRegistered("LineSeries")) {
				return type;
			}
			type = FinancialChartZoomSliderType.Area;
		}
		if (type == FinancialChartZoomSliderType.Area) {
			if (TypeRegistrar.isRegistered("AreaSeries")) {
				return type;
			}
			type = FinancialChartZoomSliderType.Column;
		}
		if (type == FinancialChartZoomSliderType.Column) {
			if (TypeRegistrar.isRegistered("ColumnSeries")) {
				return type;
			}
		}
		return type;
	}
	private fallbackVolumeType(type: FinancialChartVolumeType): FinancialChartVolumeType {
		if (type == FinancialChartVolumeType.Line) {
			if (TypeRegistrar.isRegistered("LineSeries")) {
				return type;
			}
			type = FinancialChartVolumeType.Area;
		}
		if (type == FinancialChartVolumeType.Area) {
			if (TypeRegistrar.isRegistered("AreaSeries")) {
				return type;
			}
			type = FinancialChartVolumeType.Column;
		}
		if (type == FinancialChartVolumeType.Column) {
			if (TypeRegistrar.isRegistered("ColumnSeries")) {
				return type;
			}
		}
		return type;
	}
	private getValueMemberPath(ds: DataSeries): string {
		let valueMemberPath: string = ds.getMemberPathFor(DataSeriesIntent.CloseSeriesValue);
		if (stringIsNullOrEmpty(valueMemberPath)) {
			valueMemberPath = ds.getMemberPathFor(DataSeriesIntent.OpenSeriesValue);
		}
		return valueMemberPath;
	}
	private getXAxisFromExternalChart(axisType_: FinancialChartXAxisMode): CategoryAxisBase {
		if (<boolean>((<any>this).externalObject)) {
			return <CategoryAxisBase>((<any>this).externalObject.createXAxis(axisType_).i);
		} else {
			let xAxis: CategoryAxisBase;
			switch (axisType_) {
				case FinancialChartXAxisMode.Ordinal:
				if (TypeRegistrar.isRegistered("OrdinalTimeXAxis")) {
					xAxis = <CategoryAxisBase>TypeRegistrar.create("OrdinalTimeXAxis");
				} else if (TypeRegistrar.isRegistered("TimeXAxis")) {
					xAxis = <CategoryAxisBase>TypeRegistrar.create("TimeXAxis");
				} else {
					throw new BaseError(1, "no valid axes loaded");
				}
				return xAxis;

				case FinancialChartXAxisMode.Time:
				if (TypeRegistrar.isRegistered("TimeXAxis")) {
					xAxis = <CategoryAxisBase>TypeRegistrar.create("TimeXAxis");
				} else if (TypeRegistrar.isRegistered("OrdinalTimeXAxis")) {
					xAxis = <CategoryAxisBase>TypeRegistrar.create("OrdinalTimeXAxis");
				} else {
					throw new BaseError(1, "no valid axes loaded");
				}
				return xAxis;

			}

			return null;
		}
	}
	private getYAxisFromExternalChart(axisType_: FinancialChartYAxisMode): NumericYAxis {
		if (<boolean>((<any>this).externalObject)) {
			return <NumericYAxis>((<any>this).externalObject.createYAxis(axisType_).i);
		} else {
			let yAxis: NumericYAxis;
			switch (axisType_) {
				case FinancialChartYAxisMode.Numeric:
				if (TypeRegistrar.isRegistered("NumericYAxis")) {
					yAxis = <NumericYAxis>TypeRegistrar.create("NumericYAxis");
				} else if (TypeRegistrar.isRegistered("PercentChangeYAxis")) {
					yAxis = <NumericYAxis>TypeRegistrar.create("PercentChangeYAxis");
				} else {
					throw new BaseError(1, "no valid axes loaded");
				}
				return yAxis;

				case FinancialChartYAxisMode.PercentChange:
				if (TypeRegistrar.isRegistered("PercentChangeYAxis")) {
					yAxis = <NumericYAxis>TypeRegistrar.create("PercentChangeYAxis");
				} else if (TypeRegistrar.isRegistered("NumericYAxis")) {
					yAxis = <NumericYAxis>TypeRegistrar.create("NumericYAxis");
				} else {
					throw new BaseError(1, "no valid axes loaded");
				}
				return yAxis;

			}

			return null;
		}
	}
	private createColumnSeries(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.Column);
	}
	private createLineSeries(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.Line);
	}
	private createAreaSeries(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.Area);
	}
	private createPriceSeries(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.FinancialPrice);
	}
	private get hasCategoryProxy(): boolean {
		return (TypeRegistrar.isRegistered("HorizontalAnchoredCategorySeriesProxy"));
	}
	private _categoryProxy: IHorizontalAnchoredCategorySeriesProxy = null;
	private get categoryProxy(): IHorizontalAnchoredCategorySeriesProxy {
		if (TypeRegistrar.isRegistered("HorizontalAnchoredCategorySeriesProxy")) {
			return <IHorizontalAnchoredCategorySeriesProxy><any>TypeRegistrar.create("HorizontalAnchoredCategorySeriesProxy");
		} else {
			throw new BaseError(1, "horizontal series module is not loaded, but is required.");
		}
	}
	private get hasPriceProxy(): boolean {
		return (TypeRegistrar.isRegistered("FinancialPriceSeriesProxy"));
	}
	private _priceProxy: IFinancialPriceSeriesProxy = null;
	private get priceProxy(): IFinancialPriceSeriesProxy {
		if (TypeRegistrar.isRegistered("FinancialPriceSeriesProxy")) {
			return <IFinancialPriceSeriesProxy><any>TypeRegistrar.create("FinancialPriceSeriesProxy");
		} else {
			throw new BaseError(1, "financial series module is not loaded, but is required.");
		}
	}
	private get hasIndicatorProxy(): boolean {
		return (TypeRegistrar.isRegistered("IndicatorProxy"));
	}
	private _indicatorProxy: IIndicatorProxy = null;
	private get indicatorProxy(): IIndicatorProxy {
		if (TypeRegistrar.isRegistered("IndicatorProxy")) {
			return <IIndicatorProxy><any>TypeRegistrar.create("IndicatorProxy");
		} else {
			throw new BaseError(1, "financial series module is not loaded, but is required.");
		}
	}
	private get hasOverlayProxy(): boolean {
		return (TypeRegistrar.isRegistered("OverlayProxy"));
	}
	private _overlayProxy: IOverlayProxy = null;
	private get overlayProxy(): IOverlayProxy {
		if (TypeRegistrar.isRegistered("OverlayProxy")) {
			return <IOverlayProxy><any>TypeRegistrar.create("OverlayProxy");
		} else {
			throw new BaseError(1, "overlay series module is not loaded, but is required.");
		}
	}
	protected createSeries(ds: DataSeries, resolvedSeries: DataSeriesType): Series {
		let valueMemberPath: string = this.getValueMemberPath(ds);
		switch (this.resolveChartType(ds)) {
			case FinancialChartType.Column:
			let series = this.createColumnSeries();
			this.categoryProxy.setValueMemberPath(series, valueMemberPath);
			this.categoryProxy.setXAxis(series, this.xAxis);
			this.categoryProxy.setYAxis(series, this.yAxis);
			this.categoryProxy.setCategoryMode(series, CategoryMode.Mode1);
			return series;

			case FinancialChartType.Line:
			let lineSeries = this.createLineSeries();
			this.categoryProxy.setValueMemberPath(lineSeries, valueMemberPath);
			this.categoryProxy.setXAxis(lineSeries, this.xAxis);
			this.categoryProxy.setYAxis(lineSeries, this.yAxis);
			this.categoryProxy.setCategoryMode(lineSeries, CategoryMode.Mode1);
			return lineSeries;

			default:

			case FinancialChartType.Bar:

			case FinancialChartType.Candle:
			let priceSeries = this.createPriceSeries();
			this.priceProxy.setOpenMemberPath(priceSeries, ds.getMemberPathFor(DataSeriesIntent.OpenSeriesValue));
			this.priceProxy.setHighMemberPath(priceSeries, ds.getMemberPathFor(DataSeriesIntent.HighSeriesValue));
			this.priceProxy.setLowMemberPath(priceSeries, ds.getMemberPathFor(DataSeriesIntent.LowSeriesValue));
			this.priceProxy.setCloseMemberPath(priceSeries, ds.getMemberPathFor(DataSeriesIntent.CloseSeriesValue));
			this.priceProxy.setVolumeMemberPath(priceSeries, ds.getMemberPathFor(DataSeriesIntent.VolumeSeriesValue));
			this.priceProxy.setXAxis(priceSeries, this.xAxis);
			this.priceProxy.setYAxis(priceSeries, this.yAxis);
			this.priceProxy.setDisplayType(priceSeries, this.chartType == FinancialChartType.Bar ? PriceDisplayType.OHLC : PriceDisplayType.Candlestick);
			this.priceProxy.setCategoryMode(priceSeries, CategoryMode.Mode1);
			return priceSeries;

		}

	}
	protected repopulateSeriesFromDataAdapter(): void {
		super.repopulateSeriesFromDataAdapter();
		this.initializeXAxisItemsSourceAndLabel(this.xAxis);
		this.updateRangeSelector(false);
		if (this.volumeType != FinancialChartVolumeType.None && this.volumeChart != null) {
			this.populateVolumeChartData();
		}
		this.initializeXAxisItemsSourceAndLabel(this.volumeXAxis);
		this.initializeXAxisItemsSourceAndLabel(this.indicatorXAxis);
		this.updateIndicators();
		this.updateOverlays();
		if (this.zoomSliderType != FinancialChartZoomSliderType.None) {
			this.populateZoomSliderChartData();
			this.initializeXAxisItemsSourceAndLabel(this.zoomSliderXAxis);
		}
	}
	protected onXAxis1(action: (arg1: Axis) => void, propertyName: string): void {
		super.onXAxis1(action, propertyName);
		action(this.volumeXAxis);
		if (this.indicatorXAxes != null) {
			for (let ax of fromEnum<CategoryAxisBase>(this.indicatorXAxes)) {
				action(ax);
			}
		}
		let affectsZoomSlider: boolean = true;
		switch (propertyName) {
			case XYChart.xAxisMajorStrokePropertyName:

			case XYChart.xAxisMajorStrokeThicknessPropertyName:
			affectsZoomSlider = false;
			break;

		}

		if (affectsZoomSlider) {
			action(this.zoomSliderXAxis);
		}
	}
	protected onYAxis1(action: (arg1: Axis) => void, subCharts: boolean): void {
		super.onYAxis1(action, subCharts);
		if (subCharts) {
			action(this.volumeAxis);
			if (this.indicatorAxes != null) {
				for (let ax of fromEnum<NumericYAxis>(this.indicatorAxes)) {
					action(ax);
				}
			}
			action(this.zoomSliderAxis);
		}
	}
	protected onXAxisTitle(action: (arg1: TitleSettings) => void): void {
		super.onXAxisTitle(action);
		this.applyTitleSetting(this.volumeXAxis, action);
		this.applyTitleSetting(this.indicatorXAxis, action);
		this.applyTitleSetting(this.zoomSliderXAxis, action);
	}
	protected onYAxisTitle(action: (arg1: TitleSettings) => void): void {
		super.onYAxisTitle(action);
		this.applyTitleSetting(this.volumeAxis, action);
		this.applyTitleSetting(this.indicatorAxis, action);
		this.applyTitleSetting(this.zoomSliderAxis, action);
	}
	protected onYAxisLabel(action: (arg1: AxisLabelSettings) => void): void {
		super.onYAxisLabel(action);
		this.applyLabelSetting(this.volumeAxis, action);
		this.applyLabelSetting(this.indicatorAxis, action);
		this.applyLabelSetting(this.zoomSliderAxis, action);
	}
	protected onXAxisLabel(action: (arg1: AxisLabelSettings) => void): void {
		super.onXAxisLabel(action);
		this.applyLabelSetting(this.volumeXAxis, action);
		this.applyLabelSetting(this.indicatorXAxis, action);
		this.applyLabelSetting(this.zoomSliderXAxis, action);
	}
	protected initializeChartOverride(dataChart: XamDataChart): void {
		super.initializeChartOverride(dataChart);
		if (dataChart == null) {
			return;
		}
		if (dataChart == this.zoomSliderChart) {
			dataChart.isHorizontalZoomEnabled = dataChart.isVerticalZoomEnabled = false;
			dataChart.legend = null;
			if (this.dataChart != null) {
				dataChart.brushes = this.dataChart.brushes;
				dataChart.outlines = this.dataChart.outlines;
			}
		} else {
			SyncManager.setSyncSettings(dataChart, ((() => {
				let $ret = new SyncSettings();
				$ret.syncChannel = this.syncChannelId();
				$ret.synchronizeHorizontally = true;
				$ret.synchronizeVertically = false;
				return $ret;
			})()));
			SyncManager.ensureSyncChannel(dataChart);
		}
		dataChart.defaultInteraction = InteractionState.DragPan;
	}
	private static _syncChannelInstanceCounter: number = 0;
	private static get syncChannelInstanceCounter(): number {
		return FinancialChart._syncChannelInstanceCounter;
	}
	private static set syncChannelInstanceCounter(value: number) {
		FinancialChart._syncChannelInstanceCounter = value;
	}
	private _syncChannelId: string = null;
	private syncChannelId(): string {
		if (this._syncChannelId == null) {
			FinancialChart.syncChannelInstanceCounter++;
			this._syncChannelId = FinancialChart.syncChannelInstanceCounter.toString();
		}
		return this._syncChannelId;
	}
	private handleDataChartGridAreaRectChanged(sender: any, e: RectChangedEventArgs): void {
		this.applyMinExtentToVerticalAxes();
		this.onDataChartGridAreaRectChangedPlatform();
	}
	private applyMinExtentToVerticalAxes(): void {
		if (this.yAxis.hasUserExtent()) {
			return;
		}
		let maxExtent: number = this.yAxis.labelPanel.actualExtent;
		if (this.volumeType != FinancialChartVolumeType.None) {
			maxExtent = Math.max(maxExtent, this.volumeAxis.labelPanel.actualExtent);
		}
		for (let indicatorAxis of fromEnum<NumericYAxis>(this.indicatorAxes)) {
			maxExtent = Math.max(maxExtent, indicatorAxis.labelPanel.actualExtent);
		}
		this.applyMinExtentToVerticalAxes1(maxExtent);
	}
	private applyMinExtentToVerticalAxes1(minExtent: number): void {
		if (this.yAxis.hasUserExtent()) {
			return;
		}
		this.yAxis.minExtent = this.volumeAxis.minExtent = minExtent;
		for (let indicatorAxis of fromEnum<NumericYAxis>(this.indicatorAxes)) {
			indicatorAxis.minExtent = minExtent;
		}
		this.zoomSliderAxis.minExtent = this.yAxis.minExtent;
	}
	private forEachIndicatorSeries(action: (arg1: Series, arg2: number) => void): void {
		if (this.indicatorCharts == null) {
			return;
		}
		for (let ii: number = 0; ii < this.indicatorCharts.count; ii++) {
			let indicatorChart: XamDataChart = this.indicatorCharts._inner[ii];
			for (let ss: number = 0; ss < indicatorChart.series.count; ss++) {
				action(<Series>indicatorChart.series._inner[ss], ii);
			}
		}
	}
	private forEachVolumeSeries(action: (arg1: Series, arg2: number) => void): void {
		if (this.volumeChart == null) {
			return;
		}
		for (let ii: number = 0; ii < this.volumeChart.series.count; ii++) {
			action(this.volumeChart.series._inner[ii], ii);
		}
	}
	private forEachOverlaySeries(action: (arg1: Series, arg2: number) => void): void {
		if (this.dataChart == null) {
			return;
		}
		for (let ii: number = 0; ii < this.dataChart.series.count; ii++) {
			let series: Series = this.dataChart.series._inner[ii];
			if (!this.isOverlay(series)) {
				continue;
			}
			action(series, ii);
		}
	}
	private forEachPriceSeries(action: (arg1: Series, arg2: number) => void, includeZoomSliderSeries: boolean): void {
		if (this.dataChart == null) {
			return;
		}
		for (let ii: number = 0; ii < this.dataChart.series.count; ii++) {
			let series: Series = this.dataChart.series._inner[ii];
			if (this.isOverlay(series)) {
				continue;
			}
			let index: number = this.adjustSeriesIndex(series, ii);
			action(series, index);
		}
		if (includeZoomSliderSeries) {
			this.forEachZoomSliderSeries(action);
		}
	}
	private forEachZoomSliderSeries(action: (arg1: Series, arg2: number) => void): void {
		if (this.zoomSliderChart == null) {
			return;
		}
		for (let ii: number = 0; ii < this.zoomSliderChart.series.count; ii++) {
			action(this.zoomSliderChart.series._inner[ii], ii);
		}
	}
	private adjustSeriesIndex(series: Series, index: number): number {
		if (series.chart != this.dataChart) {
			return index;
		}
		let priceSeriesCount: number = this.dataAdapter == null || this.dataAdapter.dataSeries == null ? 0 : this.dataAdapter.dataSeries.count;
		let overlayTypesCount: number = this.overlayTypes == null ? 0 : this.overlayTypes.count;
		return index - (priceSeriesCount * overlayTypesCount);
	}
	protected forEachSeries1(action: (arg1: Series, arg2: number) => void): void {
		super.forEachSeries1(action);
		this.forEachVolumeSeries(action);
		this.forEachIndicatorSeries(action);
		this.forEachZoomSliderSeries(action);
	}
	private static readonly volumeChartPropertyName: string = "VolumeChart";
	private _volumeChart: XamDataChart = null;
	private get volumeChart(): XamDataChart {
		return this._volumeChart;
	}
	private set volumeChart(value: XamDataChart) {
		let oldValue: XamDataChart = this.volumeChart;
		if (value != oldValue) {
			this._volumeChart = value;
			this.onPropertyUpdated(FinancialChart.volumeChartPropertyName, oldValue, this.volumeChart);
		}
	}
	private populateVolumeChartData(): void {
		if (this.dataChart == null) {
			return;
		}
		this.volumeChart.series.clear();
		let volumeSeriesToAdd: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
		let dataSeriesIndex: number = -1;
		for (let ii: number = 0; ii < this.dataChart.series.count; ii++) {
			let priceSeries: Series = this.dataChart.series._inner[ii];
			if (this.isOverlay(priceSeries) || priceSeries.isAnnotationLayer) {
				continue;
			}
			dataSeriesIndex++;
			let volumeSeries: Series;
			let volType = this.volumeType;
			volType = this.fallbackVolumeType(volType);
			switch (volType) {
				case FinancialChartVolumeType.Line:
				volumeSeries = this.createLineSeries();
				break;

				case FinancialChartVolumeType.Area:
				volumeSeries = this.createAreaSeries();
				break;

				default:

				case FinancialChartVolumeType.Column:
				volumeSeries = this.createColumnSeries();
				break;

			}

			this.categoryProxy.setCategoryMode(volumeSeries, CategoryMode.Mode1);
			volumeSeries.name = "volumeSeries_" + dataSeriesIndex;
			volumeSeries.itemsSource = priceSeries.itemsSource;
			this.categoryProxy.setXAxis(volumeSeries, this.volumeXAxis);
			this.categoryProxy.setYAxis(volumeSeries, this.volumeAxis);
			this.categoryProxy.setValueMemberPath(volumeSeries, this.dataAdapter != null && this.dataAdapter.dataSeries != null && this.dataAdapter.dataSeries.count > dataSeriesIndex ? this.dataAdapter.dataSeries._inner[dataSeriesIndex].getMemberPathFor(DataSeriesIntent.VolumeSeriesValue) : null);
			volumeSeries.title = priceSeries.title + " Volume";
			volumeSeries.brush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.volumeBrushes, dataSeriesIndex);
			volumeSeries.outline = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.volumeOutlines, dataSeriesIndex);
			volumeSeries.thickness = this.volumeThickness;
			volumeSeriesToAdd.add(volumeSeries);
		}
		let annotationLayersToAdd = this.getAnnotationLayers("volume", false);
		if (annotationLayersToAdd != null) {
			volumeSeriesToAdd.addRange(annotationLayersToAdd);
		}
		for (let ii1: number = 0; ii1 < volumeSeriesToAdd.count; ii1++) {
			let volumeSeries1: Series = volumeSeriesToAdd._inner[ii1];
			this.volumeChart.series.add(volumeSeries1);
			this.initializeSeries(volumeSeries1, ii1);
		}
	}
	private isCategory(series: Series): boolean {
		if (!this.hasCategoryProxy) {
			return false;
		}
		return this.categoryProxy.matchesType(series);
	}
	private isPrice(series: Series): boolean {
		if (!this.hasPriceProxy) {
			return false;
		}
		return this.priceProxy.matchesType(series);
	}
	private isIndicator(series: Series): boolean {
		if (!this.hasIndicatorProxy) {
			return false;
		}
		return this.indicatorProxy.matchesType(series);
	}
	private isOverlay(series: Series): boolean {
		if (!this.hasOverlayProxy) {
			return false;
		}
		return this.overlayProxy.matchesType(series);
	}
	private populateIndicatorChartData(): void {
		if (this.dataChart == null) {
			return;
		}
		let counter: number = 0;
		let indicatorTypesCount: number = this.indicatorTypes == null ? 0 : this.indicatorTypes.count;
		let customCount: number = this.customIndicatorNames == null ? 0 : this.customIndicatorNames.count;
		let count: number = indicatorTypesCount + customCount;
		for (let ii: number = 0; ii < count; ii++) {
			let indicatorSeriesToAdd: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
			let indicatorChart: XamDataChart = this.indicatorCharts._inner[ii];
			let custom: boolean = ii >= indicatorTypesCount;
			let title: string = custom ? this.customIndicatorNames._inner[ii - indicatorTypesCount] : EnumUtil.getName<FinancialIndicatorType>(FinancialIndicatorType_$type, this.indicatorTypes._inner[ii]);
			let dataSeriesIndex: number = -1;
			for (let jj: number = 0; jj < this.dataChart.series.count; jj++) {
				let ss: Series = this.dataChart.series._inner[jj];
				if (this.isOverlay(ss) || ss.isAnnotationLayer) {
					continue;
				}
				dataSeriesIndex++;
				let indicator: Series;
				if (custom) {
					let kustom: Series = <Series>this.getIndicatorFromExternalChart("Custom");
					this.indicatorProxy.handleCustomIndicatorEvent(kustom, runOn(this, this.handleCustomIndicatorEvent));
					indicator = kustom;
				} else {
					indicator = this.seriesFromIndicatorType(this.indicatorTypes._inner[ii]);
				}
				if (indicator == null) {
					continue;
				}
				indicator.name = "indicator_" + counter++;
				this.indicatorProxy.setXAxis(indicator, this.indicatorXAxes._inner[ii]);
				this.indicatorProxy.setYAxis(indicator, this.indicatorAxes._inner[ii]);
				indicator.itemsSource = ss.itemsSource;
				this.indicatorProxy.setOpenMemberPath(indicator, this.dataAdapter.dataSeries._inner[dataSeriesIndex].getMemberPathFor(DataSeriesIntent.OpenSeriesValue));
				this.indicatorProxy.setHighMemberPath(indicator, this.dataAdapter.dataSeries._inner[dataSeriesIndex].getMemberPathFor(DataSeriesIntent.HighSeriesValue));
				this.indicatorProxy.setLowMemberPath(indicator, this.dataAdapter.dataSeries._inner[dataSeriesIndex].getMemberPathFor(DataSeriesIntent.LowSeriesValue));
				this.indicatorProxy.setCloseMemberPath(indicator, this.dataAdapter.dataSeries._inner[dataSeriesIndex].getMemberPathFor(DataSeriesIntent.CloseSeriesValue));
				this.indicatorProxy.setVolumeMemberPath(indicator, this.dataAdapter.dataSeries._inner[dataSeriesIndex].getMemberPathFor(DataSeriesIntent.VolumeSeriesValue));
				indicator.title = ss.title + " " + title;
				indicator.brush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.indicatorBrushes, ii);
				indicator.thickness = this.indicatorThickness;
				if (this.isIndicator(indicator)) {
					this.indicatorProxy.setNegativeBrush(indicator, ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.indicatorNegativeBrushes, ii));
					this.indicatorProxy.setDisplayType(indicator, ArrayExtension.getModulus$1<IndicatorDisplayType>(IndicatorDisplayType_$type, this.indicatorDisplayTypes, ii));
				}
				if (this.indicatorPeriod != -2147483648 && this.isIndicator(indicator)) {
					this.indicatorProxy.setPeriodOverride(indicator, this.indicatorPeriod);
				}
				if (this.isIndicator(indicator)) {
					this.indicatorProxy.setSmoothingPeriod(indicator, this.indicatorSmoothingPeriod);
				}
				if (this.isIndicator(indicator)) {
					this.indicatorProxy.setSignalPeriod(indicator, this.indicatorSignalPeriod);
				}
				if (this.isIndicator(indicator)) {
					this.indicatorProxy.setShortPeriod(indicator, this.indicatorShortPeriod);
					this.indicatorProxy.setLongPeriod(indicator, this.indicatorLongPeriod);
				}
				this.initializeSeries(indicator, ii);
				indicatorSeriesToAdd.add(indicator);
			}
			let annotationLayersToAdd = this.getAnnotationLayers(title, false);
			for (let kk: number = 0; kk < indicatorSeriesToAdd.count; kk++) {
				let indicator1: Series = indicatorSeriesToAdd._inner[kk];
				indicatorChart.series.add(indicator1);
			}
			if (annotationLayersToAdd != null) {
				for (let kk1: number = 0; kk1 < annotationLayersToAdd.count; kk1++) {
					let indicator2: Series = annotationLayersToAdd._inner[kk1];
					indicatorChart.series.add(indicator2);
					this.initializeSeries(indicator2, kk1);
				}
			}
		}
	}
	private getIndicatorFromExternalChart(indicatorName_: string): Series {
		return <Series>((<any>this).externalObject.createIndicator(indicatorName_+ 'Indicator').i);
	}
	private seriesFromIndicatorType(indicatorType: FinancialIndicatorType): Series {
		return this.getIndicatorFromExternalChart(EnumUtil.getName<FinancialIndicatorType>(FinancialIndicatorType_$type, indicatorType));
	}
	private updateRangeSelector(updateSelection: boolean): void {
		if (this.toolbar == null) {
			return;
		}
		let timeXAxis: ITimeRangeSelectorAxis = <ITimeRangeSelectorAxis><any>this.xAxis;
		if (timeXAxis.actualMinimumValue > timeXAxis.actualMaximumValue) {
			return;
		}
		this.toolbar.rangeStart = timeXAxis.actualMinimumValue;
		this.toolbar.rangeEnd = timeXAxis.actualMaximumValue;
		if (updateSelection) {
			this.toolbar.selectionStart = timeXAxis.visibleMinimum;
			this.toolbar.selectionEnd = timeXAxis.visibleMaximum;
		}
		this.toolbar.updateRangeSelectorUI();
	}
	exportVisualData(): any {
		let visualData = ((() => {
			let $ret = new FinancialChartVisualData();
			$ret.mainChart = super.exportVisualData();
			$ret.volumeChart = this.volumeChart == null ? null : this.volumeChart.exportVisualData();
			$ret.toolbar = this.toolbar == null ? null : this.toolbar.exportVisualData();
			$ret.zoomChart = this.zoomSliderChart == null ? null : this.zoomSliderChart.exportVisualData();
			return $ret;
		})());
		if (this.indicatorCharts != null) {
			visualData.indicatorCharts = new List$1<any>((<any>Base).$type, 0);
			for (let chart of fromEnum<XamDataChart>(this.indicatorCharts)) {
				visualData.indicatorCharts.add1(chart.exportVisualData());
			}
		}
		if (this.dataChart != null) {
			visualData.mainChartLeft = this.getLocation(this.dataChart).x;
			visualData.mainChartTop = this.getLocation(this.dataChart).y;
		}
		if (this.volumeChart != null) {
			visualData.volumeChartLeft = this.getLocation(this.volumeChart).x;
			visualData.volumeChartTop = this.getLocation(this.volumeChart).y;
		}
		if (this.zoomSliderChart != null) {
			visualData.zoomChartLeft = this.getLocation(this.zoomSliderChart).x;
			visualData.zoomChartTop = this.getLocation(this.zoomSliderChart).y;
		}
		if (this.toolbar != null) {
			let toolbarBounds: Rect = this.getBounds(this.toolbar);
			visualData.toolbarLeft = toolbarBounds.left;
			visualData.toolbarTop = toolbarBounds.top;
			visualData.toolbarWidth = toolbarBounds.width;
			visualData.toolbarHeight = toolbarBounds.height;
		}
		if (this.indicatorCharts != null) {
			visualData.indicatorChartLefts = new List$1<number>(Number_$type, 0);
			visualData.indicatorChartTops = new List$1<number>(Number_$type, 0);
			for (let indicatorChart of fromEnum<XamDataChart>(this.indicatorCharts)) {
				visualData.indicatorChartLefts.add(this.getLocation(indicatorChart).x);
				visualData.indicatorChartTops.add(this.getLocation(indicatorChart).y);
			}
		}
		let legendBounds: Rect = this.getLegendBounds();
		visualData.legendLeft = legendBounds.left;
		visualData.legendTop = legendBounds.top;
		visualData.legendWidth = legendBounds.width;
		visualData.legendHeight = legendBounds.height;
		visualData.legend = this.financialChartLegend == null ? null : (<any>this.financialChartLegend).exportVisualData();
		return visualData;
	}
	exportSerializedVisualData(): string {
		let vd: FinancialChartVisualData = <FinancialChartVisualData>this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	private getOverlayFromExternalChart(overlayName_: string): Series {
		return <Series>((<any>this).externalObject.createOverlay(overlayName_ + 'Overlay').i);
	}
	private updateOverlays(): void {
		if (this.dataChart == null) {
			return;
		}
		let toRemove: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
		for (let ss of fromEnum<Series>(this.dataChart.series)) {
			if (this.isOverlay(ss)) {
				toRemove.add(ss);
			}
		}
		for (let ss1 of fromEnum<Series>(toRemove)) {
			this.dataChart.series.remove(ss1);
		}
		if (this.overlayTypes == null) {
			return;
		}
		let toAdd: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
		let dataSeriesIndex: number = -1;
		for (let ii: number = 0; ii < this.dataChart.series.count; ii++) {
			let ss2: Series = this.dataChart.series._inner[ii];
			if (this.isOverlay(ss2) || ss2.isAnnotationLayer) {
				continue;
			}
			dataSeriesIndex++;
			for (let jj: number = 0; jj < this.overlayTypes.count; jj++) {
				let overlayType: FinancialOverlayType = this.overlayTypes._inner[jj];
				let overlay: Series;
				switch (overlayType) {
					case FinancialOverlayType.PriceChannel:
					overlay = this.getOverlayFromExternalChart(EnumUtil.getName<FinancialOverlayType>(FinancialOverlayType_$type, overlayType));
					break;

					default:

					case FinancialOverlayType.BollingerBands:
					overlay = this.getOverlayFromExternalChart(EnumUtil.getName<FinancialOverlayType>(FinancialOverlayType_$type, overlayType));
					break;

				}

				overlay.name = ss2.name + "_" + EnumUtil.getName<FinancialOverlayType>(FinancialOverlayType_$type, overlayType);
				this.overlayProxy.setXAxis(overlay, this.xAxis);
				this.overlayProxy.setYAxis(overlay, this.yAxis);
				overlay.itemsSource = ss2.itemsSource;
				let overlayIndex: number = dataSeriesIndex * this.overlayTypes.count + jj;
				overlay.brush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.overlayBrushes, overlayIndex);
				overlay.outline = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.overlayOutlines, overlayIndex);
				overlay.thickness = this.overlayThickness;
				overlay.title = ss2.title + " " + EnumUtil.getName<FinancialOverlayType>(FinancialOverlayType_$type, overlayType);
				let financial: Series = ss2;
				if (financial == null) {
					continue;
				}
				let dataSeries: DataSeries = this.dataAdapter.dataSeries._inner[dataSeriesIndex];
				this.overlayProxy.setOpenMemberPath(overlay, dataSeries.getMemberPathFor(DataSeriesIntent.OpenSeriesValue));
				this.overlayProxy.setHighMemberPath(overlay, dataSeries.getMemberPathFor(DataSeriesIntent.HighSeriesValue));
				this.overlayProxy.setLowMemberPath(overlay, dataSeries.getMemberPathFor(DataSeriesIntent.LowSeriesValue));
				this.overlayProxy.setCloseMemberPath(overlay, dataSeries.getMemberPathFor(DataSeriesIntent.CloseSeriesValue));
				this.overlayProxy.setVolumeMemberPath(overlay, dataSeries.getMemberPathFor(DataSeriesIntent.VolumeSeriesValue));
				toAdd.add(overlay);
			}
		}
		let existingSeries: Series[] = <Series[]>new Array(this.dataChart.series.count);
		this.dataChart.series.copyTo(existingSeries, 0);
		this.dataChart.skipDataCleanup = true;
		this.dataChart.series.clear();
		this.dataChart.skipDataCleanup = false;
		for (let i = 0; i < existingSeries.length; i++) {
			existingSeries[i].index = -1;
		}
		toAdd.addRange(<IEnumerable$1<Series>><any>existingSeries);
		for (let ii1: number = 0; ii1 < toAdd.count; ii1++) {
			let ss3: Series = toAdd._inner[ii1];
			this.dataChart.series.add(ss3);
			this.initializeSeries(ss3, ii1);
		}
	}
	private _updatingIndicators: boolean = false;
	private get updatingIndicators(): boolean {
		return this._updatingIndicators;
	}
	private set updatingIndicators(value: boolean) {
		this._updatingIndicators = value;
	}
	private updateIndicators(): void {
		if (this.updatingIndicators) {
			return;
		}
		this.updatingIndicators = true;
		if (this.indicatorCharts != null) {
			let indicatorCharts: List$1<XamDataChart> = this.indicatorCharts;
			this.indicatorCharts = null;
			for (let indicatorChart of fromEnum<XamDataChart>(indicatorCharts)) {
				this.killSubChart(indicatorChart);
			}
		}
		if ((this.indicatorTypes == null || this.indicatorTypes.count == 0) && (this.customIndicatorNames == null || this.customIndicatorNames.count == 0)) {
			this.indicatorCharts = null;
			if (this.indicatorAxes != null) {
				this.indicatorAxes.clear();
			}
			if (this.indicatorXAxes != null) {
				this.indicatorXAxes.clear();
			}
			this.refreshIndicatorChartLayout();
			this.updateIndicatorsPlatform();
			this.updatingIndicators = false;
			return;
		}
		if (this.indicatorCharts == null) {
			this.indicatorCharts = new List$1<XamDataChart>((<any>XamDataChart).$type, 0);
		}
		this.indicatorCharts.clear();
		this.indicatorAxes.clear();
		this.indicatorXAxes.clear();
		let indicatorTypesCount: number = this.indicatorTypes == null ? 0 : this.indicatorTypes.count;
		let customCount: number = this.customIndicatorNames == null ? 0 : this.customIndicatorNames.count;
		let count: number = indicatorTypesCount + customCount;
		for (let ii: number = 0; ii < count; ii++) {
			let indicatorChart1: XamDataChart = new XamDataChart();
			this.indicatorCharts.add(indicatorChart1);
			this.initializeSubChart(indicatorChart1);
			let custom: boolean = ii >= indicatorTypesCount;
			indicatorChart1.title = custom ? this.customIndicatorNames._inner[ii - indicatorTypesCount] : EnumUtil.getName<FinancialIndicatorType>(FinancialIndicatorType_$type, this.indicatorTypes._inner[ii]);
			if (this.indicatorAxis != null) {
				let indicatorAxis: NumericYAxis;
				let indicatorXAxis: CategoryAxisBase;
				if (ii == 0) {
					indicatorAxis = this.indicatorAxis;
					indicatorXAxis = this.indicatorXAxis;
				} else {
					indicatorAxis = new NumericYAxis();
					if (!this.indicatorXAxis.isDateTime) {
						indicatorXAxis = this.createTimeAxis(FinancialChartXAxisMode.Ordinal);
					} else {
						indicatorXAxis = this.createTimeAxis(FinancialChartXAxisMode.Time);
					}
				}
				indicatorXAxis.name = "indicatorXAxis_" + ii;
				indicatorAxis.name = "indicatorAxis_" + ii;
				indicatorChart1.axes.add(indicatorAxis);
				indicatorChart1.axes.add(indicatorXAxis);
				this.indicatorAxes.add(indicatorAxis);
				this.indicatorXAxes.add(indicatorXAxis);
				if (this.areAxesInitialized) {
					this.initializeYAxis(indicatorAxis);
				}
				if (this.areAxesInitialized) {
					this.initializeXAxis(indicatorXAxis);
				}
			}
		}
		this.populateIndicatorChartData();
		this.refreshIndicatorChartLayout();
		if (this.toolbar != null) {
			this.toolbar.indicatorTypes = this.indicatorTypes;
		}
		this.collapseXAxisLabels();
		this.updateIndicatorsPlatform();
		this.updatingIndicators = false;
	}
	protected initializeAxesOverride(): void {
		super.initializeAxesOverride();
		this.initializeXAxis(this.xAxis);
		this.initializeXAxis(this.volumeXAxis);
		if (this.indicatorXAxes != null) {
			for (let ax of fromEnum<CategoryAxisBase>(this.indicatorXAxes)) {
				this.initializeXAxis(ax);
			}
		}
		this.initializeYAxis(this.yAxis);
		this.initializeYAxis(this.volumeAxis);
		if (this.indicatorAxes != null) {
			for (let ax1 of fromEnum<NumericYAxis>(this.indicatorAxes)) {
				this.initializeYAxis(ax1);
			}
		}
		this.initializeXAxis(this.zoomSliderXAxis);
		this.initializeYAxis(this.zoomSliderAxis);
	}
	protected get_isVerticalZoomAllowed(): boolean {
		return !this.isWindowSyncedToVisibleRange;
	}
	protected get zoomSliderReady(): boolean {
		return <boolean>((<any>this).externalObject._dynamicContent);
	}
	private zoomSliderChartUpdated(oldChart: XamDataChart, newChart: XamDataChart): void {
		this.subChartUpdated(oldChart, newChart);
		this.collapseXAxisLabels();
		if (this.zoomSliderChart != null) {
			this.zoomSliderChart.axes.add(this.zoomSliderAxis);
			this.zoomSliderChart.axes.add(this.zoomSliderXAxis);
		}
		this.populateZoomSliderChartData();
		this.zoomSliderXAxis.itemsSource = this.xAxis.itemsSource;
		this.refreshZoomSliderLayout();
		this.zoomSliderChartUpdatedPlatform(oldChart, newChart);
	}
	private populateZoomSliderChartData(): void {
		if (this.dataChart == null || this.zoomSliderChart == null) {
			return;
		}
		this.zoomSliderChart.series.clear();
		let zoomSliderSeriesToAdd: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
		for (let ii: number = 0; ii < this.dataChart.series.count; ii++) {
			let priceSeries: Series = this.dataChart.series._inner[ii];
			if (this.isOverlay(priceSeries) || priceSeries.isAnnotationLayer) {
				continue;
			}
			let zoomSliderSeries: Series;
			let sliderType = this.zoomSliderType;
			sliderType = this.fallbackSliderType(sliderType);
			let priceSeriesIndex: number = this.adjustSeriesIndex(priceSeries, ii);
			if (sliderType == FinancialChartZoomSliderType.Auto) {
				switch (this.resolveChartType(this.dataAdapter != null && this.dataAdapter.dataSeries != null && this.dataAdapter.dataSeries.count > priceSeriesIndex ? this.dataAdapter.dataSeries._inner[priceSeriesIndex] : null)) {
					case FinancialChartType.Bar:
					sliderType = FinancialChartZoomSliderType.Bar;
					break;

					case FinancialChartType.Candle:
					sliderType = FinancialChartZoomSliderType.Candle;
					break;

					case FinancialChartType.Column:
					sliderType = FinancialChartZoomSliderType.Column;
					break;

					case FinancialChartType.Line:
					sliderType = FinancialChartZoomSliderType.Line;
					break;

				}

			}
			switch (sliderType) {
				case FinancialChartZoomSliderType.Bar:
				zoomSliderSeries = this.createPriceSeries();
				this.priceProxy.setDisplayType(zoomSliderSeries, PriceDisplayType.OHLC);
				break;

				case FinancialChartZoomSliderType.Candle:
				zoomSliderSeries = this.createPriceSeries();
				this.priceProxy.setDisplayType(zoomSliderSeries, PriceDisplayType.Candlestick);
				break;

				case FinancialChartZoomSliderType.Line:
				zoomSliderSeries = this.createLineSeries();
				break;

				case FinancialChartZoomSliderType.Area:
				zoomSliderSeries = this.createAreaSeries();
				break;

				default:

				case FinancialChartZoomSliderType.Column:
				zoomSliderSeries = this.createColumnSeries();
				break;

			}

			let dataSeries: DataSeries = this.dataAdapter != null && this.dataAdapter.dataSeries != null && this.dataAdapter.dataSeries.count > priceSeriesIndex ? this.dataAdapter.dataSeries._inner[priceSeriesIndex] : null;
			if (zoomSliderSeries.isCategory && !zoomSliderSeries.isFinancial) {
				this.categoryProxy.setCategoryMode(zoomSliderSeries, CategoryMode.Mode1);
				this.categoryProxy.setXAxis(zoomSliderSeries, this.zoomSliderXAxis);
				this.categoryProxy.setYAxis(zoomSliderSeries, this.zoomSliderAxis);
				this.categoryProxy.setValueMemberPath(zoomSliderSeries, dataSeries == null ? null : this.getValueMemberPath(dataSeries));
			} else if (zoomSliderSeries.isFinancial) {
				this.priceProxy.setCategoryMode(zoomSliderSeries, CategoryMode.Mode1);
				this.priceProxy.setXAxis(zoomSliderSeries, this.zoomSliderXAxis);
				this.priceProxy.setYAxis(zoomSliderSeries, this.zoomSliderAxis);
				if (dataSeries != null) {
					this.priceProxy.setOpenMemberPath(zoomSliderSeries, dataSeries.getMemberPathFor(DataSeriesIntent.OpenSeriesValue));
					this.priceProxy.setHighMemberPath(zoomSliderSeries, dataSeries.getMemberPathFor(DataSeriesIntent.HighSeriesValue));
					this.priceProxy.setLowMemberPath(zoomSliderSeries, dataSeries.getMemberPathFor(DataSeriesIntent.LowSeriesValue));
					this.priceProxy.setCloseMemberPath(zoomSliderSeries, dataSeries.getMemberPathFor(DataSeriesIntent.CloseSeriesValue));
					this.priceProxy.setVolumeMemberPath(zoomSliderSeries, dataSeries.getMemberPathFor(DataSeriesIntent.VolumeSeriesValue));
				}
			}
			zoomSliderSeries.name = "zoomSliderSeries_" + priceSeriesIndex;
			zoomSliderSeries.itemsSource = priceSeries.itemsSource;
			zoomSliderSeries.title = priceSeries.title;
			zoomSliderSeriesToAdd.add(zoomSliderSeries);
		}
		for (let ii1: number = 0; ii1 < zoomSliderSeriesToAdd.count; ii1++) {
			let zoomSliderSeries1: Series = zoomSliderSeriesToAdd._inner[ii1];
			this.zoomSliderChart.series.add(zoomSliderSeries1);
			this.initializeSeries(zoomSliderSeries1, ii1);
		}
	}
	protected onDataChart2(action: (arg1: XamDataChart) => void, subCharts: boolean, propertyName: string): void {
		super.onDataChart2(action, subCharts, propertyName);
		if (action == null || !subCharts) {
			return;
		}
		let affectsIndicators: boolean = true;
		let affectsVolume: boolean = true;
		switch (propertyName) {
			case DomainChart.brushesPropertyName:

			case DomainChart.outlinesPropertyName:
			affectsIndicators = affectsVolume = false;
			break;

		}

		if (this.indicatorCharts != null && affectsIndicators) {
			for (let indicatorChart of fromEnum<XamDataChart>(this.indicatorCharts)) {
				action(indicatorChart);
			}
		}
		if (this.volumeChart != null && affectsVolume) {
			action(this.volumeChart);
		}
		if (this.zoomSliderChart != null) {
			action(this.zoomSliderChart);
		}
	}
	private handleCustomIndicatorEvent(sender: any, e: EventArgs): void {
		let args: EventArgs = e;
		let series: Series = <Series>sender;
		let index: number = -1;
		if (this.indicatorCharts != null) {
			index = this.indicatorCharts.indexOf(series.chart);
		}
		index -= this.indicatorTypes == null ? 0 : this.indicatorTypes.count;
		if (this.applyCustomIndicators != null) {
			this.applyCustomIndicators(this, new FinancialChartCustomIndicatorArgs(args, series, index));
		}
	}
	private subChartXAxisUpdated(subChart: XamDataChart, oldXAxis: Axis, newXAxis: Axis): void {
		if (subChart != null) {
			if (oldXAxis != null) {
				subChart.axes.remove(oldXAxis);
			}
			subChart.axes.add(newXAxis);
		}
		if (this.areAxesInitialized) {
			this.initializeXAxis(newXAxis);
		}
	}
	private get zoomSliderLoaded(): boolean {
		return TypeRegistrar.isRegistered("IgxZoomSliderComponent");
	}
	private handleCustomIndicatorNamesCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.updateIndicators();
	}
	private isRangeSelectorOptionInTimeRange(option: FinancialChartRangeSelectorOption, range: number): boolean {
		if (range <= (0)) {
			return false;
		}
		switch (option) {
			case FinancialChartRangeSelectorOption.All: return true;
			case FinancialChartRangeSelectorOption.OneYear:

			case FinancialChartRangeSelectorOption.YearToDate: return range >= timeSpanFromDays(365);
			case FinancialChartRangeSelectorOption.SixMonths: return range >= timeSpanFromDays(180);
			case FinancialChartRangeSelectorOption.ThreeMonths: return range >= timeSpanFromDays(90);
			case FinancialChartRangeSelectorOption.OneMonth: return range >= timeSpanFromDays(30);
		}

		return false;
	}
	private refreshActualRangeSelectorOptions(): void {
		let options: FinancialChartRangeSelectorOptionCollection = this.rangeSelectorOptions != null ? this.rangeSelectorOptions : new FinancialChartRangeSelectorOptionCollection(1, <IEnumerable$1<FinancialChartRangeSelectorOption>><any>[ FinancialChartRangeSelectorOption.All, FinancialChartRangeSelectorOption.OneYear, FinancialChartRangeSelectorOption.YearToDate, FinancialChartRangeSelectorOption.SixMonths, FinancialChartRangeSelectorOption.ThreeMonths, FinancialChartRangeSelectorOption.OneMonth ]);
		let actualOptions: FinancialChartRangeSelectorOptionCollection = new FinancialChartRangeSelectorOptionCollection(0);
		let timeAxis: ITimeRangeSelectorAxis = <ITimeRangeSelectorAxis><any>this.xAxis;
		let range: number = +(timeAxis.actualMaximumValue) - +(timeAxis.actualMinimumValue);
		for (let option of fromEnum<FinancialChartRangeSelectorOption>(options)) {
			if (this.isRangeSelectorOptionInTimeRange(option, range)) {
				actualOptions.add(option);
			}
		}
		this.actualRangeSelectorOptions = actualOptions;
		if (this.toolbar != null) {
			this.toolbar.rangeSelectorOptions = this.actualRangeSelectorOptions;
		}
	}
	private handleRangeSelectorOptionsCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.refreshActualRangeSelectorOptions();
	}
	private handleToolbarOverlayTypesChanged(sender: any, e: EventArgs): void {
		this.overlayTypes = this.toolbar.overlayTypes;
	}
	private handleToolbarIndicatorTypesChanged(sender: any, e: EventArgs): void {
		this.indicatorTypes = this.toolbar.indicatorTypes;
	}
	private handleIndicatorTypesCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.updateIndicators();
	}
	private handleOverlayTypesCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.updateOverlays();
	}
	private handleYAxisRangeChanged(sender: any, e: AxisRangeChangedEventArgs): void {
		let axis = <Axis>sender;
		if (axis.chart == null) {
			return;
		}
		if (this.isWindowSyncedToVisibleRange) {
			this.queueSyncWindowRectVerticalToVisibleRange(axis.chart);
		}
	}
	private killSubChart(oldChart: XamDataChart): void {
		SyncManager.suspendSyncChannel(oldChart);
		oldChart.axes.clear();
		oldChart.series.clear();
		oldChart.gridAreaRectChanged = delegateRemove(oldChart.gridAreaRectChanged, runOn(this, this.handleDataChartGridAreaRectChanged));
		oldChart.provideContainer(null);
		if (this.volumeChart == null && this.indicatorCharts == null) {
			this.yAxis.minExtent = this.volumeAxis.minExtent = this.indicatorAxis.minExtent = 0;
			this.xAxis.labelSettings.visibility = this.xAxisLabelVisibility;
		}
	}
	private initializeSubChart(newChart: XamDataChart): void {
		let sync: boolean = newChart != this.zoomSliderChart;
		if (sync) {
			if (this.dataChart != null) {
				newChart.windowRect = new Rect(0, this.dataChart.actualWindowRect.x, newChart.windowRect.y, this.dataChart.actualWindowRect.width, newChart.windowRect.height);
			}
			let syncSettings: SyncSettings = ((() => {
				let $ret = new SyncSettings();
				$ret.syncChannel = "one";
				$ret.synchronizeHorizontally = true;
				$ret.synchronizeVertically = false;
				return $ret;
			})());
			SyncManager.setSyncSettings(newChart, syncSettings);
			SyncManager.ensureSyncChannel(newChart);
		}
		newChart.gridAreaRectChanged = delegateCombine(newChart.gridAreaRectChanged, runOn(this, this.handleDataChartGridAreaRectChanged));
		this.initializeChart(newChart);
	}
	private collapseXAxisLabels(): void {
		if (this.indicatorCharts != null || this.volumeChart != null) {
			this.applyLabelSetting(this.xAxis, (labels: AxisLabelSettings) => labels.visibility = Visibility.Collapsed);
		}
		for (let ii: number = 0; ii < this.indicatorXAxes.count; ii++) {
			let indicatorXAxis: Axis = this.indicatorXAxes._inner[ii];
			let hideLabels: boolean = ii < this.indicatorXAxes.count - 1 || this.volumeChart != null;
			this.applyLabelSetting(indicatorXAxis, (labels: AxisLabelSettings) => labels.visibility = hideLabels ? Visibility.Collapsed : Visibility.Visible);
		}
	}
	private subChartUpdated(oldChart: XamDataChart, newChart: XamDataChart): void {
		if (oldChart != null) {
			this.killSubChart(oldChart);
		}
		if (newChart != null) {
			this.initializeSubChart(newChart);
		}
	}
	private volumeChartUpdated(oldChart: XamDataChart, newChart: XamDataChart): void {
		this.subChartUpdated(oldChart, newChart);
		this.collapseXAxisLabels();
		if (this.volumeChart != null) {
			if (this.volumeAxis != null) {
				this.volumeChart.axes.add(this.volumeAxis);
				this.volumeChart.axes.add(this.volumeXAxis);
			}
			this.populateVolumeChartData();
			this.volumeXAxis.itemsSource = this.xAxis.itemsSource;
		}
		this.volumeChartUpdatedPlatform(oldChart, newChart);
	}
	private handleRangeSelectorRangeChanged(sender: any, e: EventArgs): void {
		this.updateWindowRectFromRangeSelector();
	}
	private updateWindowRectFromRangeSelector(): void {
		if (this.toolbar == null || +(this.toolbar.selectionStart) == +(dateMaxValue()) || +(this.toolbar.selectionEnd) == +(dateMinValue()) || this.dataChart == null) {
			return;
		}
		let timeXAxis: ITimeRangeSelectorAxis = <ITimeRangeSelectorAxis><any>this.xAxis;
		let selectionWindow: Rect = timeXAxis.getWindowRectForSelection(this.toolbar.selectionStart, this.toolbar.selectionEnd);
		if (selectionWindow.width == 0 || isNaN_(selectionWindow.width) || isInfinity(selectionWindow.width)) {
			return;
		}
		this.suspendWindowRectHandling = true;
		this.dataChart.windowRect = new Rect(0, selectionWindow.left, this.dataChart.windowRect.top, selectionWindow.width, this.dataChart.windowRect.height);
		if (this.zoomSlider != null) {
			this.zoomSlider.windowRect = this.dataChart.actualWindowRect;
		}
		if (this.isWindowSyncedToVisibleRange) {
			this.queueSyncWindowRectVerticalToVisibleRange(this.dataChart);
		}
		this.suspendWindowRectHandling = false;
	}
	private _suspendWindowRectHandling: boolean = false;
	private get suspendWindowRectHandling(): boolean {
		return this._suspendWindowRectHandling;
	}
	private set suspendWindowRectHandling(value: boolean) {
		this._suspendWindowRectHandling = value;
	}
	private handleXAxisVisibleRangeChanged(sender: any, e: EventArgs): void {
		this.refreshActualRangeSelectorOptions();
		this.updateRangeSelector(!this.suspendWindowRectHandling);
	}
	private handleActualWindowRectChanged(sender: any, e: RectChangedEventArgs): void {
		if (!this.suspendWindowRectHandling) {
			if (this.isWindowSyncedToVisibleRange) {
				this.queueSyncWindowRectVerticalToVisibleRange(<XamDataChart>sender);
			}
			let unused: boolean = false;
			let $ret = this.queueWork(() => this.updateRangeSelector(true), unused);
			unused = $ret.p1;
			if (this.zoomSlider != null) {
				this.zoomSlider.windowRect = this.dataChart.actualWindowRect;
			}
		}
	}
	private syncWindowRectVerticalToVisibleRange1(chart: XamDataChart, yAxis: Axis, widthOverride: number, leftOverride: number): void {
		if (chart == null || yAxis == null) {
			return;
		}
		if (widthOverride != -1) {
			this.suspendWindowRectHandling = true;
			chart.windowRect = new Rect(0, leftOverride, chart.actualWindowRect.top, widthOverride, chart.actualWindowRect.height);
			this.suspendWindowRectHandling = false;
		}
		let top: number = 1.7976931348623157E+308;
		let bottom: number = -1.7976931348623157E+308;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, chart.effectiveViewport);
		for (let ss of fromEnum<Series>(chart.series)) {
			yParams.referenceValue = ss.getReferenceValue();
			let seriesVisibleRange: AxisRange = ss.getVisibleRange();
			let rangeInvalid: boolean = seriesVisibleRange == null || seriesVisibleRange.minimum == 1.7976931348623157E+308 || isNaN_(seriesVisibleRange.minimum);
			if (rangeInvalid) {
				continue;
			}
			let seriesBottom: number = yAxis.getScaledValue(seriesVisibleRange.minimum, yParams);
			let seriesTop: number = yAxis.getScaledValue(seriesVisibleRange.maximum, yParams);
			bottom = Math.max(bottom, seriesBottom);
			top = Math.min(top, seriesTop);
		}
		let width = chart.actualWindowRect.width;
		if (widthOverride != -1) {
			width = widthOverride;
		}
		let left = chart.actualWindowRect.left;
		if (leftOverride != -1) {
			left = leftOverride;
		}
		if (top == 1.7976931348623157E+308 || bottom == -1.7976931348623157E+308 || isNaN_(top) || isNaN_(bottom)) {
			return;
		}
		this.suspendWindowRectHandling = true;
		let newRect = new Rect(0, left, top, width, bottom - top);
		chart.windowRect = newRect;
		this.suspendWindowRectHandling = false;
	}
	private syncWindowRectVerticalToVisibleRange(changingChart: XamDataChart): void {
		if (changingChart == null) {
			return;
		}
		if (changingChart == this.dataChart) {
			this.syncWindowRectVerticalToVisibleRange1(this.dataChart, this.yAxis, -1, -1);
			if (this.volumeChart != null) {
				this.syncWindowRectVerticalToVisibleRange1(this.volumeChart, this.volumeAxis, this.dataChart.actualWindowRect.width, this.dataChart.actualWindowRect.left);
			}
		} else if (changingChart == this.volumeChart) {
			this.syncWindowRectVerticalToVisibleRange1(this.volumeChart, this.volumeAxis, -1, -1);
			this.syncWindowRectVerticalToVisibleRange1(this.dataChart, this.yAxis, this.volumeChart.actualWindowRect.width, this.volumeChart.actualWindowRect.left);
		}
	}
	private queueSyncWindowRectVerticalToVisibleRange(chart: XamDataChart): void {
		this.queueSingleInvoke(() => this.syncWindowRectVerticalToVisibleRange(chart));
	}
	private handleSeriesDataUpdated(sender: any, e: EventArgs): void {
		if (this.isWindowSyncedToVisibleRange) {
			this.queueSyncWindowRectVerticalToVisibleRange(<XamDataChart>sender);
		}
	}
	private _zoomSliderStyled: boolean = false;
	private get zoomSliderStyled(): boolean {
		return this._zoomSliderStyled;
	}
	private set zoomSliderStyled(value: boolean) {
		this._zoomSliderStyled = value;
	}
	private updateZoomSlider(): void {
		if (!this.zoomSliderReady) {
			return;
		}
		this.ensureZoomSliderSyled();
		if (this.zoomSliderType == FinancialChartZoomSliderType.None) {
			this.zoomSliderChart = null;
		} else if (this.zoomSliderChart == null) {
			this.zoomSliderChart = ((() => {
				let $ret = new XamDataChart();
				$ret.name = "ZoomSliderChart";
				return $ret;
			})());
		} else {
			this.populateZoomSliderChartData();
		}
	}
	private ensureZoomSliderSyled(): void {
		let container_ = this.zoomSliderRenderer.rootWrapper.getNativeElement();
		let containerParent_ = container_.parentElement;
		if (this.zoomSlider != null && containerParent_ != null && !this.zoomSliderStyled) {
			this.zoomSliderStyled = true;
			if (TypeRegistrar.isRegistered("IgxZoomSliderComponent")) {
				let z_ = this.zoomSlider;
				let f_ = (this as any).externalObject;
				let sliderComponent_ = TypeRegistrar.get("IgxZoomSliderComponent");
				let sliderInstance_ = TypeRegistrar.create("IgxZoomSliderComponent");
				(sliderInstance_ as any)._implementation = z_;
				(sliderComponent_ as any)._staticStyling(container_, sliderInstance_, f_);
			}
		}
	}
	private updateBreaks(): void {
		if (this.xAxisMode != FinancialChartXAxisMode.Time) {
			return;
		}
		this.onXAxis((axis: Axis) => {
			let breaks: IList;
			breaks = (<ITimeXAxis><any>axis).breaks;
			breaks.clear();
			if (this.xAxisBreaks == null) {
				return;
			}
			for (let brk of fromEnum<any>(this.xAxisBreaks)) {
				breaks.add(brk);
			}
		});
	}
	protected setCalloutMemberPaths(callout: Series, targetSeries: Series, dataSeries: DataSeries): void {
		super.setCalloutMemberPaths(callout, targetSeries, dataSeries);
		if (this.dataAdapter.dataSeries.count > 0) {
			if (this.xAxisMode == FinancialChartXAxisMode.Time && stringIsNullOrEmpty(this.calloutsXMemberPath)) {
				this.annotationLayerProxy.setXMemberPath(callout, dataSeries.getMemberPathFor(DataSeriesIntent.AxisDateValue));
			}
			if (stringIsNullOrEmpty(this.calloutsYMemberPath)) {
				this.annotationLayerProxy.setYMemberPath(callout, this.getValueMemberPath(dataSeries));
			}
			if (stringIsNullOrEmpty(this.calloutsLabelMemberPath)) {
				this.annotationLayerProxy.setLabelMemberPath(callout, this.getValueMemberPath(dataSeries));
			}
			if (stringIsNullOrEmpty(this.calloutsContentMemberPath)) {
				this.annotationLayerProxy.setContentMemberPath(callout, this.getValueMemberPath(dataSeries));
			}
		}
	}
	protected initializeXAxis(xAxis: Axis): void {
		super.initializeXAxis(xAxis);
		let categoryXAxis: CategoryAxisBase = <CategoryAxisBase>xAxis;
		this.initializeXAxisItemsSourceAndLabel(categoryXAxis);
		if (xAxis.chart != null) {
			for (let ss of fromEnum<Series>(xAxis.chart.series)) {
				if (this.isCategory(ss)) {
					this.categoryProxy.setXAxis(ss, categoryXAxis);
				} else if (this.isPrice(ss)) {
					this.priceProxy.setXAxis(ss, categoryXAxis);
				} else if (this.isIndicator(ss)) {
					this.indicatorProxy.setXAxis(ss, categoryXAxis);
				} else if (this.isOverlay(ss)) {
					this.overlayProxy.setXAxis(ss, categoryXAxis);
				}
			}
		}
		let isZoomSliderAxis: boolean = xAxis == this.zoomSliderXAxis;
		if (isZoomSliderAxis) {
			xAxis.majorStroke = this.zoomSliderXAxisMajorStroke;
			xAxis.majorStrokeThickness = this.zoomSliderXAxisMajorStrokeThickness;
			this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.visibility = Visibility.Collapsed);
		}
		let timeX: ITimeRangeSelectorAxis = <ITimeRangeSelectorAxis><any>xAxis;
		timeX.minimumValue = this.xAxisMinimumValue;
		timeX.maximumValue = this.xAxisMaximumValue;
	}
	protected initializeYAxis(yAxis: Axis): void {
		super.initializeYAxis(yAxis);
		if (yAxis.chart != null && yAxis == this.yAxis) {
			for (let ss of fromEnum<Series>(yAxis.chart.series)) {
				if (this.isCategory(ss)) {
					this.categoryProxy.setYAxis(ss, this.yAxis);
				} else if (this.isPrice(ss)) {
					this.priceProxy.setYAxis(ss, this.yAxis);
				} else if (this.isIndicator(ss)) {
					this.indicatorProxy.setYAxis(ss, this.yAxis);
				} else if (this.isOverlay(ss)) {
					this.overlayProxy.setYAxis(ss, this.yAxis);
				}
			}
		}
		(<NumericYAxis>yAxis).abbreviateLargeNumbers = this.yAxisAbbreviateLargeNumbers;
		(<NumericYAxis>yAxis).minimumValue = this.yAxisMinimumValue;
		(<NumericYAxis>yAxis).maximumValue = this.yAxisMaximumValue;
		if (yAxis == this.yAxis) {
			(<NumericYAxis>yAxis).interval = this.yAxisInterval;
		}
		let isZoomSliderAxis: boolean = yAxis == this.zoomSliderAxis;
		if (isZoomSliderAxis) {
			this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.visibility = Visibility.Collapsed);
		}
	}
	private initializeXAxisItemsSourceAndLabel(xAxis: CategoryAxisBase): void {
		xAxis.itemsSource = this.dataChart != null && this.dataChart.series.count > 0 ? this.dataChart.series._inner[0].itemsSource : null;
		xAxis.label = XYChart.getXAxisLabel(xAxis, this.dataAdapter.dataSeries);
		if (this.dataAdapter.dataSeries.count > 0) {
			let dateTimeMemberPath: string = this.dataAdapter.dataSeries._inner[0].getMemberPathFor(DataSeriesIntent.AxisDateValue);
			xAxis.provideDateTimeMemberPath(dateTimeMemberPath);
		}
	}
	protected initializeSeries(series: Series, index: number): void {
		super.initializeSeries(series, index);
		if (series == null) {
			return;
		}
		let isMain: boolean = this.dataChart != null && this.dataChart.series.contains(series);
		if (isMain && series.isNegativeColorSupported) {
			series.setNegativeColors(this.negativeBrushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeBrushes, index) : null, this.negativeOutlines != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeOutlines, index) : null);
		}
		let isZoomSlider: boolean = this.zoomSliderChart == series.chart;
		let isIndicator: boolean = this.isIndicator(series);
		if (this.isOverlay(series)) {
			series.brush = this.overlayBrushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.overlayBrushes, index) : null;
			series.outline = this.overlayOutlines != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.overlayOutlines, index) : null;
			series.thickness = this.overlayThickness;
		} else if (isIndicator) {
			series.brush = this.indicatorBrushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.indicatorBrushes, index) : null;
			series.thickness = this.indicatorThickness;
		} else if (!series.isAnnotationLayer && (isMain || isZoomSlider)) {
			series.brush = this.brushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.brushes, index) : null;
			series.outline = this.outlines != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.outlines, index) : null;
		}
		let isVolume: boolean = this.volumeChart != null && this.volumeChart == series.chart;
		if (isVolume) {
			series.thickness = this.volumeThickness;
		}
		series.legend = isZoomSlider || isVolume || isIndicator || !series.isUsableInLegend ? null : this.legend != null ? this.legend : this.isLegendVisible ? this.financialChartLegend : null;
	}
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyUpdated(propertyName, oldValue, newValue);
		switch (propertyName) {
			case FinancialChart.yAxisIsLogarithmicPropertyName:
			this.yAxis.isLogarithmic = this.yAxisIsLogarithmic;
			if (this.volumeAxis != null) {
				this.volumeAxis.isLogarithmic = this.yAxisIsLogarithmic;
			}
			if (this.zoomSliderAxis != null) {
				this.zoomSliderAxis.isLogarithmic = this.yAxisIsLogarithmic;
			}
			break;

			case FinancialChart.yAxisLogarithmBasePropertyName:
			this.yAxis.logarithmBase = this.yAxisLogarithmBase;
			if (this.volumeAxis != null) {
				this.volumeAxis.logarithmBase = this.yAxisLogarithmBase;
			}
			if (this.zoomSliderAxis != null) {
				this.zoomSliderAxis.logarithmBase = this.yAxisLogarithmBase;
			}
			break;

			case FinancialChart.volumeTypePropertyName:
			let oldVolumeType: FinancialChartVolumeType = EnumUtil.getEnumValue<FinancialChartVolumeType>(FinancialChartVolumeType_$type, oldValue);
			if (this.volumeType == FinancialChartVolumeType.None) {
				this.volumeChart = null;
			} else if (this.volumeChart == null) {
				this.volumeChart = ((() => {
					let $ret = new XamDataChart();
					$ret.name = "VolumeChart";
					return $ret;
				})());
			} else {
				this.populateVolumeChartData();
			}
			break;

			case FinancialChart.volumeChartPropertyName:
			this.volumeChartUpdated(typeCast<XamDataChart>((<any>XamDataChart).$type, oldValue), typeCast<XamDataChart>((<any>XamDataChart).$type, newValue));
			break;

			case DomainChart.dataChartPropertyName:
			if (typeCast<XamDataChart>((<any>XamDataChart).$type, oldValue) !== null) {
				let oldChart: XamDataChart = <XamDataChart>oldValue;
				oldChart.gridAreaRectChanged = delegateRemove(oldChart.gridAreaRectChanged, runOn(this, this.handleDataChartGridAreaRectChanged));
				oldChart.actualWindowRectChanged = delegateRemove(oldChart.actualWindowRectChanged, runOn(this, this.handleActualWindowRectChanged));
				oldChart.seriesDataUpdated = delegateRemove(oldChart.seriesDataUpdated, runOn(this, this.handleSeriesDataUpdated));
			}
			if (this.dataChart != null) {
				let $t = this.dataChart;
				$t.gridAreaRectChanged = delegateCombine($t.gridAreaRectChanged, runOn(this, this.handleDataChartGridAreaRectChanged));
				let $t1 = this.dataChart;
				$t1.actualWindowRectChanged = delegateCombine($t1.actualWindowRectChanged, runOn(this, this.handleActualWindowRectChanged));
				let $t2 = this.dataChart;
				$t2.seriesDataUpdated = delegateCombine($t2.seriesDataUpdated, runOn(this, this.handleSeriesDataUpdated));
			}
			this.updateZoomSlider();
			break;

			case FinancialChart.xAxisModePropertyName:
			this.xAxis = this.createTimeAxis(this.xAxisMode);
			this.xAxis.name = "xAxis";
			this.volumeXAxis = this.createTimeAxis(this.xAxisMode);
			this.volumeXAxis.name = "volumeXAxis";
			this.indicatorXAxis = this.createTimeAxis(this.xAxisMode);
			this.indicatorXAxis.name = "indicatorXAxis_0";
			this.zoomSliderXAxis = this.createTimeAxis(this.xAxisMode);
			this.zoomSliderXAxis.name = "zoomSliderXAxis";
			this.applyLabelSetting(this.zoomSliderXAxis, (settings: AxisLabelSettings) => settings.visibility = Visibility.Collapsed);
			this.collapseXAxisLabels();
			if (this.xAxisMode == FinancialChartXAxisMode.Time) {
				this.updateBreaks();
			}
			break;

			case FinancialChart.yAxisModePropertyName:
			this.yAxis = this.createYAxis(this.yAxisMode);
			this.yAxis.name = "yAxis";
			this.zoomSliderAxis = this.createYAxis(this.yAxisMode);
			this.zoomSliderAxis.name = "zoomSliderAxis";
			this.volumeAxis = this.createYAxis(this.yAxisMode);
			this.volumeAxis.name = "volumeAxis";
			break;

			case FinancialChart.toolbarPropertyName:
			let oldToolbar: FinancialChartToolbar = typeCast<FinancialChartToolbar>((<any>FinancialChartToolbar).$type, oldValue);
			if (oldToolbar != null) {
				oldToolbar.rangeChanged = delegateRemove(oldToolbar.rangeChanged, runOn(this, this.handleRangeSelectorRangeChanged));
				oldToolbar.indicatorTypesChanged = delegateRemove(oldToolbar.indicatorTypesChanged, runOn(this, this.handleToolbarIndicatorTypesChanged));
				oldToolbar.overlayTypesChanged = delegateRemove(oldToolbar.overlayTypesChanged, runOn(this, this.handleToolbarOverlayTypesChanged));
			}
			if (this.toolbar != null) {
				this.toolbar.indicatorTypes = this.indicatorTypes;
				this.toolbar.overlayTypes = this.overlayTypes;
				this.toolbar.rangeSelectorOptions = this.actualRangeSelectorOptions;
				this.updateRangeSelector(true);
				let $t3 = this.toolbar;
				$t3.rangeChanged = delegateCombine($t3.rangeChanged, runOn(this, this.handleRangeSelectorRangeChanged));
				let $t4 = this.toolbar;
				$t4.indicatorTypesChanged = delegateCombine($t4.indicatorTypesChanged, runOn(this, this.handleToolbarIndicatorTypesChanged));
				let $t5 = this.toolbar;
				$t5.overlayTypesChanged = delegateCombine($t5.overlayTypesChanged, runOn(this, this.handleToolbarOverlayTypesChanged));
			}
			break;

			case FinancialChart.xAxisPropertyName:
			let oldAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, oldValue);
			if (oldAxis != null) {
				if (this.dataChart != null) {
					this.dataChart.axes.remove(oldAxis);
				}
			}
			let oldTimeAxis: ITimeRangeSelectorAxis = typeCast<ITimeRangeSelectorAxis>(ITimeRangeSelectorAxis_$type, oldValue);
			if (oldTimeAxis != null) {
				oldTimeAxis.visibleRangeChanged = delegateRemove(oldTimeAxis.visibleRangeChanged, runOn(this, this.handleXAxisVisibleRangeChanged));
			}
			if (this.dataChart != null) {
				this.dataChart.axes.add(this.xAxis);
			}
			if (this.areAxesInitialized) {
				this.initializeXAxis(this.xAxis);
				this.flush();
			}
			this.updateRangeSelector(false);
			this.updateWindowRectFromRangeSelector();
			this.refreshActualRangeSelectorOptions();
			let $t6 = (<ITimeRangeSelectorAxis><any>this.xAxis);
			$t6.visibleRangeChanged = delegateCombine($t6.visibleRangeChanged, runOn(this, this.handleXAxisVisibleRangeChanged));
			break;

			case FinancialChart.chartTypePropertyName:
			this.repopulateSeriesFromDataAdapter();
			break;

			case FinancialChart.volumeXAxisPropertyName:
			this.subChartXAxisUpdated(this.volumeChart, typeCast<Axis>((<any>Axis).$type, oldValue), this.volumeXAxis);
			break;

			case FinancialChart.zoomSliderXAxisPropertyName:
			this.subChartXAxisUpdated(this.zoomSliderChart, typeCast<Axis>((<any>Axis).$type, oldValue), this.zoomSliderXAxis);
			break;

			case FinancialChart.indicatorXAxisPropertyName:
			this.updateIndicators();
			break;

			case FinancialChart.yAxisPropertyName:
			let oldY: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, oldValue);
			if (oldY != null) {
				if (this.dataChart != null) {
					this.dataChart.axes.remove(oldY);
				}
			}
			if (this.dataChart != null) {
				this.dataChart.axes.add(this.yAxis);
			}
			if (this.areAxesInitialized) {
				this.initializeYAxis(this.yAxis);
				this.initializeYAxis(this.yAxis);
			}
			let $t7 = this.yAxis;
			$t7.rangeChanged = delegateCombine($t7.rangeChanged, runOn(this, this.handleYAxisRangeChanged));
			break;

			case FinancialChart.volumeAxisPropertyName:
			let oldVolumeAxis: Axis = typeCast<Axis>((<any>Axis).$type, oldValue);
			if (this.volumeChart != null && oldVolumeAxis != null) {
				this.volumeChart.axes.remove(oldVolumeAxis);
			}
			if (this.volumeChart != null && this.volumeAxis != null) {
				this.volumeChart.axes.add(this.volumeAxis);
				this.populateVolumeChartData();
			}
			if (this.areAxesInitialized) {
				this.initializeYAxis(this.volumeAxis);
			}
			let $t8 = this.volumeAxis;
			$t8.rangeChanged = delegateCombine($t8.rangeChanged, runOn(this, this.handleYAxisRangeChanged));
			break;

			case FinancialChart.indicatorAxisPropertyName:
			if (this.indicatorCharts != null) {
				for (let ii: number = 0; ii < this.indicatorCharts.count; ii++) {
					let indicatorChart: XamDataChart = this.indicatorCharts._inner[ii];
					let numericAxes: List$1<Axis> = new List$1<Axis>((<any>Axis).$type, 0);
					for (let ax of fromEnum<Axis>(indicatorChart.axes)) {
						if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, ax) !== null) {
							numericAxes.add(ax);
						}
					}
					for (let ax1 of fromEnum<Axis>(numericAxes)) {
						indicatorChart.axes.remove(ax1);
					}
					let indicatorAxis: Axis = null;
					if (ii == 0) {
						indicatorAxis = this.indicatorAxis;
					} else if (this.yAxisMode == FinancialChartYAxisMode.PercentChange) {
						indicatorAxis = this.createYAxis(this.yAxisMode);
					} else if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.indicatorAxis) !== null) {
						indicatorAxis = new NumericYAxis();
					}
					if (indicatorAxis != null) {
						indicatorChart.axes.add(indicatorAxis);
					}
					if (this.areAxesInitialized) {
						this.initializeYAxis(indicatorAxis);
					}
				}
			}
			break;

			case FinancialChart.isWindowSyncedToVisibleRangePropertyName:
			if (this.dataChart != null) {
				this.dataChart.isVerticalZoomEnabled = this.isVerticalZoomEnabled && this.isVerticalZoomAllowed;
			}
			if (this.volumeChart != null) {
				this.volumeChart.isVerticalZoomEnabled = this.isVerticalZoomEnabled && this.isVerticalZoomAllowed;
			}
			if (this.isWindowSyncedToVisibleRange) {
				this.syncWindowRectVerticalToVisibleRange(this.dataChart);
			} else {
				this.volumeChart.windowScaleVertical = 1;
			}
			break;

			case FinancialChart.indicatorTypesPropertyName:
			let oldIndicatorTypes = typeCast<ObservableCollection$1<FinancialIndicatorType>>((<any>ObservableCollection$1).$type.specialize(FinancialIndicatorType_$type), oldValue);
			if (oldIndicatorTypes != null) {
				oldIndicatorTypes.collectionChanged = delegateRemove(oldIndicatorTypes.collectionChanged, runOn(this, this.handleIndicatorTypesCollectionChanged));
			}
			let newIndicatorTypes = typeCast<ObservableCollection$1<FinancialIndicatorType>>((<any>ObservableCollection$1).$type.specialize(FinancialIndicatorType_$type), newValue);
			if (newIndicatorTypes != null) {
				newIndicatorTypes.collectionChanged = delegateCombine(newIndicatorTypes.collectionChanged, runOn(this, this.handleIndicatorTypesCollectionChanged));
			}
			this.updateIndicators();
			break;

			case FinancialChart.overlayTypesPropertyName:
			let oldOverlayTypes = typeCast<ObservableCollection$1<FinancialOverlayType>>((<any>ObservableCollection$1).$type.specialize(FinancialOverlayType_$type), oldValue);
			if (oldOverlayTypes != null) {
				oldOverlayTypes.collectionChanged = delegateRemove(oldOverlayTypes.collectionChanged, runOn(this, this.handleOverlayTypesCollectionChanged));
			}
			let newOverlayTypes = typeCast<ObservableCollection$1<FinancialOverlayType>>((<any>ObservableCollection$1).$type.specialize(FinancialOverlayType_$type), newValue);
			if (newOverlayTypes != null) {
				newOverlayTypes.collectionChanged = delegateCombine(newOverlayTypes.collectionChanged, runOn(this, this.handleOverlayTypesCollectionChanged));
			}
			this.updateOverlays();
			break;

			case FinancialChart.yAxisAbbreviateLargeNumbersPropertyName:
			this.onYAxis((axis: Axis) => (<NumericYAxis>axis).abbreviateLargeNumbers = this.yAxisAbbreviateLargeNumbers);
			break;

			case FinancialChart.yAxisMinimumValuePropertyName:
			this.onYAxis1((axis: Axis) => (<NumericYAxis>axis).minimumValue = this.yAxisMinimumValue, false);
			break;

			case FinancialChart.yAxisMaximumValuePropertyName:
			this.onYAxis1((axis: Axis) => (<NumericYAxis>axis).maximumValue = this.yAxisMaximumValue, false);
			break;

			case FinancialChart.yAxisIntervalPropertyName:
			this.onYAxis1((axis: Axis) => (<NumericYAxis>axis).interval = this.yAxisInterval, false);
			break;

			case FinancialChart.zoomSliderTypePropertyName:
			this.updateZoomSlider();
			break;

			case FinancialChart.zoomSliderChartPropertyName:
			if (!this.zoomSliderLoaded) {
				return;
			}
			this.zoomSliderChartUpdated(typeCast<XamDataChart>((<any>XamDataChart).$type, oldValue), typeCast<XamDataChart>((<any>XamDataChart).$type, newValue));
			break;

			case FinancialChart.negativeBrushesPropertyName:

			case FinancialChart.negativeOutlinesPropertyName:
			this.forEachPriceSeries((series: Series, index: number) => {
				if (series.isNegativeColorSupported) {
					series.setNegativeColors(this.negativeBrushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeBrushes, index) : null, this.negativeOutlines != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeOutlines, index) : null);
				}
			}, true);
			break;

			case FinancialChart.overlayBrushesPropertyName:
			this.forEachSeries1((series: Series, index: number) => {
				if (!(this.isOverlay(series))) {
					return;
				}
				series.brush = this.overlayBrushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.overlayBrushes, index) : null;
			});
			break;

			case FinancialChart.overlayOutlinesPropertyName:
			this.forEachSeries1((series: Series, index: number) => {
				if (!(this.isOverlay(series))) {
					return;
				}
				series.outline = this.overlayOutlines != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.overlayOutlines, index) : null;
			});
			break;

			case FinancialChart.overlayThicknessPropertyName:
			this.forEachSeries1((series: Series, index: number) => {
				if (!(this.isOverlay(series))) {
					return;
				}
				series.thickness = this.overlayThickness;
			});
			break;

			case FinancialChart.volumeBrushesPropertyName:
			this.forEachVolumeSeries((series: Series, index: number) => series.brush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.volumeBrushes, index));
			break;

			case FinancialChart.volumeOutlinesPropertyName:
			this.forEachVolumeSeries((series: Series, index: number) => series.outline = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.volumeOutlines, index));
			break;

			case FinancialChart.volumeThicknessPropertyName:
			this.forEachVolumeSeries((series: Series, index: number) => series.thickness = this.volumeThickness);
			break;

			case FinancialChart.indicatorNegativeBrushesPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => this.indicatorProxy.setNegativeBrush(series, ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.indicatorNegativeBrushes, index)));
			break;

			case FinancialChart.indicatorBrushesPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => series.brush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.indicatorBrushes, index));
			break;

			case FinancialChart.indicatorThicknessPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => series.thickness = this.indicatorThickness);
			break;

			case FinancialChart.indicatorDisplayTypesPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => this.indicatorProxy.setDisplayType(series, ArrayExtension.getModulus$1<IndicatorDisplayType>(IndicatorDisplayType_$type, this.indicatorDisplayTypes, index)));
			break;

			case FinancialChart.indicatorPeriodPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => {
				if (this.indicatorPeriod == -2147483648 || !(this.isIndicator(series))) {
					return;
				}
				this.indicatorProxy.setPeriodOverride(series, this.indicatorPeriod);
			});
			break;

			case FinancialChart.indicatorMultiplierPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => {
				if (!(this.isOverlay(series))) {
					return;
				}
				this.overlayProxy.setMultiplier(series, this.indicatorMultiplier);
			});
			break;

			case FinancialChart.indicatorSmoothingPeriodPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => {
				if (!(this.isIndicator(series))) {
					return;
				}
				this.indicatorProxy.setSmoothingPeriod(series, this.indicatorSmoothingPeriod);
			});
			break;

			case FinancialChart.indicatorShortPeriodPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => {
				if (!(this.isIndicator(series))) {
					return;
				}
				this.indicatorProxy.setShortPeriod(series, this.indicatorShortPeriod);
			});
			break;

			case FinancialChart.indicatorLongPeriodPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => {
				if (!(this.isIndicator(series))) {
					return;
				}
				this.indicatorProxy.setLongPeriod(series, this.indicatorLongPeriod);
			});
			break;

			case FinancialChart.indicatorSignalPeriodPropertyName:
			this.forEachIndicatorSeries((series: Series, index: number) => {
				if (!(this.isIndicator(series))) {
					return;
				}
				this.indicatorProxy.setSignalPeriod(series, this.indicatorSignalPeriod);
			});
			break;

			case FinancialChart.rangeSelectorOptionsPropertyName:
			let oldOptions: FinancialChartRangeSelectorOptionCollection = typeCast<FinancialChartRangeSelectorOptionCollection>((<any>FinancialChartRangeSelectorOptionCollection).$type, oldValue);
			if (oldOptions != null) {
				oldOptions.collectionChanged = delegateRemove(oldOptions.collectionChanged, runOn(this, this.handleRangeSelectorOptionsCollectionChanged));
			}
			if (this.rangeSelectorOptions != null) {
				let $t9 = this.rangeSelectorOptions;
				$t9.collectionChanged = delegateCombine($t9.collectionChanged, runOn(this, this.handleRangeSelectorOptionsCollectionChanged));
			}
			this.refreshActualRangeSelectorOptions();
			break;

			case FinancialChart.customIndicatorNamesPropertyName:
			let oldCustomIndicatorNames: ObservableCollection$1<string> = typeCast<ObservableCollection$1<string>>((<any>ObservableCollection$1).$type.specialize(String_$type), oldValue);
			if (oldCustomIndicatorNames != null) {
				oldCustomIndicatorNames.collectionChanged = delegateRemove(oldCustomIndicatorNames.collectionChanged, runOn(this, this.handleCustomIndicatorNamesCollectionChanged));
			}
			if (this.customIndicatorNames != null) {
				let $t10 = this.customIndicatorNames;
				$t10.collectionChanged = delegateCombine($t10.collectionChanged, runOn(this, this.handleCustomIndicatorNamesCollectionChanged));
			}
			this.updateIndicators();
			break;

			case DomainChart.legendPropertyName:
			if (this.zoomSliderChart != null) {
				this.zoomSliderChart.legend = null;
			}
			break;

			case DomainChart.brushesPropertyName:
			this.forEachPriceSeries((series: Series, index: number) => series.brush = this.brushes != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.brushes, index) : null, true);
			break;

			case DomainChart.outlinesPropertyName:
			this.forEachPriceSeries((series: Series, index: number) => series.outline = this.outlines != null ? ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.outlines, index) : null, true);
			break;

			case XYChart.xAxisLabelVisibilityPropertyName:
			if (this.xAxisLabelVisibility == Visibility.Visible && this.zoomSliderXAxis != null) {
				this.applyLabelSetting(this.zoomSliderXAxis, (settings: AxisLabelSettings) => settings.visibility = Visibility.Collapsed);
			}
			this.collapseXAxisLabels();
			break;

			case XYChart.yAxisLabelVisibilityPropertyName:
			if (this.yAxisLabelVisibility != Visibility.Visible || this.zoomSliderAxis == null) {
				break;
			}
			this.applyLabelSetting(this.zoomSliderAxis, (settings: AxisLabelSettings) => settings.visibility = Visibility.Collapsed);
			break;

			case FinancialChart.zoomSliderXAxisMajorStrokePropertyName:
			this.zoomSliderXAxis.majorStroke = this.zoomSliderXAxisMajorStroke;
			break;

			case FinancialChart.zoomSliderXAxisMajorStrokeThicknessPropertyName:
			this.zoomSliderXAxis.majorStrokeThickness = this.zoomSliderXAxisMajorStrokeThickness;
			break;

			case FinancialChart.financialChartLegendPropertyName:

			case FinancialChart.isLegendVisiblePropertyName:
			let legendVisible: boolean = this.isLegendVisible && this.legend == null;
			{
				let setLegend: (arg1: Series, arg2: number) => void = (series: Series, index: number) => {
					if (series.isUsableInLegend) {
						series.legend = legendVisible ? this.financialChartLegend : null;
					}
				};
				this.forEachPriceSeries(setLegend, false);
				this.forEachOverlaySeries(setLegend);
			}
			break;

			case FinancialChart.zoomSliderAxisPropertyName:
			let oldZoomSliderAxis: Axis = typeCast<Axis>((<any>Axis).$type, oldValue);
			if (oldZoomSliderAxis != null && this.zoomSliderChart != null) {
				this.zoomSliderChart.axes.remove(oldZoomSliderAxis);
			}
			if (this.zoomSliderAxis != null) {
				if (this.zoomSliderChart != null) {
					this.zoomSliderChart.axes.add(this.zoomSliderAxis);
					this.populateZoomSliderChartData();
					this.zoomSliderXAxis.itemsSource = this.xAxis.itemsSource;
				}
				if (this.areAxesInitialized) {
					this.initializeYAxis(this.zoomSliderAxis);
				}
				this.applyLabelSetting(this.zoomSliderAxis, (settings: AxisLabelSettings) => settings.visibility = Visibility.Collapsed);
			}
			break;

			case FinancialChart.xAxisMinimumValuePropertyName:
			this.onXAxis((axis: Axis) => {
				let xAxis: ITimeRangeSelectorAxis = typeCast<ITimeRangeSelectorAxis>(ITimeRangeSelectorAxis_$type, axis);
				if (xAxis != null) {
					xAxis.minimumValue = this.xAxisMinimumValue;
				}
			});
			break;

			case FinancialChart.xAxisMaximumValuePropertyName:
			this.onXAxis((axis: Axis) => {
				let xAxis: ITimeRangeSelectorAxis = typeCast<ITimeRangeSelectorAxis>(ITimeRangeSelectorAxis_$type, axis);
				if (xAxis != null) {
					xAxis.maximumValue = this.xAxisMaximumValue;
				}
			});
			break;

		}

	}
	private static readonly yAxisIsLogarithmicPropertyName: string = "YAxisIsLogarithmic";
	private _yAxisIsLogarithmic: boolean = false;
	get yAxisIsLogarithmic(): boolean {
		return this._yAxisIsLogarithmic;
	}
	set yAxisIsLogarithmic(value: boolean) {
		let oldValue: boolean = this.yAxisIsLogarithmic;
		if (value != oldValue) {
			this._yAxisIsLogarithmic = value;
			this.onPropertyUpdated(FinancialChart.yAxisIsLogarithmicPropertyName, oldValue, this.yAxisIsLogarithmic);
		}
	}
	private static readonly yAxisLogarithmBasePropertyName: string = "YAxisLogarithmBase";
	private _yAxisLogarithmBase: number = 10;
	get yAxisLogarithmBase(): number {
		return this._yAxisLogarithmBase;
	}
	set yAxisLogarithmBase(value: number) {
		let oldValue: number = this.yAxisLogarithmBase;
		if (value != oldValue) {
			this._yAxisLogarithmBase = value;
			this.onPropertyUpdated(FinancialChart.yAxisLogarithmBasePropertyName, oldValue, this.yAxisLogarithmBase);
		}
	}
	private static readonly yAxisIntervalPropertyName: string = "YAxisInterval";
	private _yAxisInterval: number = NaN;
	get yAxisInterval(): number {
		return this._yAxisInterval;
	}
	set yAxisInterval(value: number) {
		let oldValue: number = this.yAxisInterval;
		if (value != oldValue) {
			this._yAxisInterval = value;
			this.onPropertyUpdated(FinancialChart.yAxisIntervalPropertyName, oldValue, this.yAxisInterval);
		}
	}
	private static readonly yAxisMinimumValuePropertyName: string = "YAxisMinimumValue";
	private _yAxisMinimumValue: number = NaN;
	get yAxisMinimumValue(): number {
		return this._yAxisMinimumValue;
	}
	set yAxisMinimumValue(value: number) {
		let oldValue: number = this.yAxisMinimumValue;
		if (value != oldValue) {
			this._yAxisMinimumValue = value;
			this.onPropertyUpdated(FinancialChart.yAxisMinimumValuePropertyName, oldValue, this.yAxisMinimumValue);
		}
	}
	private static readonly yAxisMaximumValuePropertyName: string = "YAxisMaximumValue";
	private _yAxisMaximumValue: number = NaN;
	get yAxisMaximumValue(): number {
		return this._yAxisMaximumValue;
	}
	set yAxisMaximumValue(value: number) {
		let oldValue: number = this.yAxisMaximumValue;
		if (value != oldValue) {
			this._yAxisMaximumValue = value;
			this.onPropertyUpdated(FinancialChart.yAxisMaximumValuePropertyName, oldValue, this.yAxisMaximumValue);
		}
	}
	private static readonly yAxisMinorIntervalPropertyName: string = "YAxisMinorInterval";
	private _yAxisMinorInterval: number = 0;
	get yAxisMinorInterval(): number {
		return this._yAxisMinorInterval;
	}
	set yAxisMinorInterval(value: number) {
		let oldValue: number = this.yAxisMinorInterval;
		if (value != oldValue) {
			this._yAxisMinorInterval = value;
			this.onPropertyUpdated(FinancialChart.yAxisMinorIntervalPropertyName, oldValue, this.yAxisMinorInterval);
		}
	}
	get yAxisActualMinimum(): number {
		return this.yAxis.actualMinimumValue;
	}
	get yAxisActualMaximum(): number {
		return this.yAxis.actualMaximumValue;
	}
	private static readonly volumeTypePropertyName: string = "VolumeType";
	private _volumeType: FinancialChartVolumeType = <FinancialChartVolumeType>0;
	get volumeType(): FinancialChartVolumeType {
		return this._volumeType;
	}
	set volumeType(value: FinancialChartVolumeType) {
		let oldValue: FinancialChartVolumeType = this.volumeType;
		if (value != oldValue) {
			this._volumeType = value;
			this.onPropertyUpdated(FinancialChart.volumeTypePropertyName, enumGetBox<FinancialChartVolumeType>(FinancialChartVolumeType_$type, oldValue), enumGetBox<FinancialChartVolumeType>(FinancialChartVolumeType_$type, this.volumeType));
		}
	}
	private static readonly xAxisModePropertyName: string = "XAxisMode";
	private _xAxisMode: FinancialChartXAxisMode = <FinancialChartXAxisMode>0;
	get xAxisMode(): FinancialChartXAxisMode {
		return this._xAxisMode;
	}
	set xAxisMode(value: FinancialChartXAxisMode) {
		let oldValue: FinancialChartXAxisMode = this.xAxisMode;
		if (value != oldValue) {
			this._xAxisMode = value;
			this.onPropertyUpdated(FinancialChart.xAxisModePropertyName, enumGetBox<FinancialChartXAxisMode>(FinancialChartXAxisMode_$type, oldValue), enumGetBox<FinancialChartXAxisMode>(FinancialChartXAxisMode_$type, this.xAxisMode));
		}
	}
	private static readonly yAxisModePropertyName: string = "YAxisMode";
	private _yAxisMode: FinancialChartYAxisMode = <FinancialChartYAxisMode>0;
	get yAxisMode(): FinancialChartYAxisMode {
		return this._yAxisMode;
	}
	set yAxisMode(value: FinancialChartYAxisMode) {
		let oldValue: FinancialChartYAxisMode = this.yAxisMode;
		if (value != oldValue) {
			this._yAxisMode = value;
			this.onPropertyUpdated(FinancialChart.yAxisModePropertyName, enumGetBox<FinancialChartYAxisMode>(FinancialChartYAxisMode_$type, oldValue), enumGetBox<FinancialChartYAxisMode>(FinancialChartYAxisMode_$type, this.yAxisMode));
		}
	}
	private static readonly isToolbarVisiblePropertyName: string = "IsToolbarVisible";
	private _isToolbarVisible: boolean = true;
	get isToolbarVisible(): boolean {
		return this._isToolbarVisible;
	}
	set isToolbarVisible(value: boolean) {
		let oldValue: boolean = this.isToolbarVisible;
		if (value != oldValue) {
			this._isToolbarVisible = value;
			this.onPropertyUpdated(FinancialChart.isToolbarVisiblePropertyName, oldValue, this.isToolbarVisible);
		}
	}
	private static readonly chartTypePropertyName: string = "ChartType";
	private _chartType: FinancialChartType = <FinancialChartType>0;
	get chartType(): FinancialChartType {
		return this._chartType;
	}
	set chartType(value: FinancialChartType) {
		let oldValue: FinancialChartType = this.chartType;
		if (value != oldValue) {
			this._chartType = value;
			this.onPropertyUpdated(FinancialChart.chartTypePropertyName, enumGetBox<FinancialChartType>(FinancialChartType_$type, oldValue), enumGetBox<FinancialChartType>(FinancialChartType_$type, this.chartType));
		}
	}
	protected get_yAxisLabelHorizontalAlignment(): HorizontalAlignment {
		return super.get_yAxisLabelHorizontalAlignment();
	}
	protected set_yAxisLabelHorizontalAlignment(value: HorizontalAlignment): void {
		super.set_yAxisLabelHorizontalAlignment(value);
	}
	private static readonly isWindowSyncedToVisibleRangePropertyName: string = "IsWindowSyncedToVisibleRange";
	private _isWindowSyncedToVisibleRange: boolean = false;
	get isWindowSyncedToVisibleRange(): boolean {
		return this._isWindowSyncedToVisibleRange;
	}
	set isWindowSyncedToVisibleRange(value: boolean) {
		let oldValue: boolean = this.isWindowSyncedToVisibleRange;
		if (value != oldValue) {
			this._isWindowSyncedToVisibleRange = value;
			this.onPropertyUpdated(FinancialChart.isWindowSyncedToVisibleRangePropertyName, oldValue, this.isWindowSyncedToVisibleRange);
		}
	}
	private static readonly indicatorTypesPropertyName: string = "IndicatorTypes";
	private _indicatorTypes: FinancialIndicatorTypeCollection = null;
	get indicatorTypes(): FinancialIndicatorTypeCollection {
		return this._indicatorTypes;
	}
	set indicatorTypes(value: FinancialIndicatorTypeCollection) {
		let oldValue: FinancialIndicatorTypeCollection = this.indicatorTypes;
		if (value != oldValue) {
			this._indicatorTypes = value;
			this.onPropertyUpdated(FinancialChart.indicatorTypesPropertyName, oldValue, this.indicatorTypes);
		}
	}
	private static readonly overlayTypesPropertyName: string = "OverlayTypes";
	private _overlayTypes: FinancialOverlayTypeCollection = null;
	get overlayTypes(): FinancialOverlayTypeCollection {
		return this._overlayTypes;
	}
	set overlayTypes(value: FinancialOverlayTypeCollection) {
		let oldValue: FinancialOverlayTypeCollection = this.overlayTypes;
		if (value != oldValue) {
			this._overlayTypes = value;
			this.onPropertyUpdated(FinancialChart.overlayTypesPropertyName, oldValue, this.overlayTypes);
		}
	}
	private static readonly indicatorChartsPropertyName: string = "IndicatorCharts";
	private _indicatorCharts: List$1<XamDataChart> = null;
	private get indicatorCharts(): List$1<XamDataChart> {
		return this._indicatorCharts;
	}
	private set indicatorCharts(value: List$1<XamDataChart>) {
		let oldValue: List$1<XamDataChart> = this.indicatorCharts;
		if (value != oldValue) {
			this._indicatorCharts = value;
			this.onPropertyUpdated(FinancialChart.indicatorChartsPropertyName, oldValue, this.indicatorCharts);
		}
	}
	private static readonly yAxisAbbreviateLargeNumbersPropertyName: string = "YAxisAbbreviateLargeNumbers";
	private _yAxisAbbreviateLargeNumbers: boolean = true;
	get yAxisAbbreviateLargeNumbers(): boolean {
		return this._yAxisAbbreviateLargeNumbers;
	}
	set yAxisAbbreviateLargeNumbers(value: boolean) {
		let oldValue: boolean = this.yAxisAbbreviateLargeNumbers;
		if (value != oldValue) {
			this._yAxisAbbreviateLargeNumbers = value;
			this.onPropertyUpdated(FinancialChart.yAxisAbbreviateLargeNumbersPropertyName, oldValue, this.yAxisAbbreviateLargeNumbers);
		}
	}
	protected get_resolution(): number {
		return super.get_resolution();
	}
	protected set_resolution(value: number): void {
		super.set_resolution(value);
	}
	protected get_yAxisLabelLocation(): AxisLabelsLocation {
		return super.get_yAxisLabelLocation();
	}
	protected set_yAxisLabelLocation(value: AxisLabelsLocation): void {
		super.set_yAxisLabelLocation(value);
	}
	private static readonly zoomSliderChartPropertyName: string = "ZoomSliderChart";
	private _zoomSliderChart: XamDataChart = null;
	get zoomSliderChart(): XamDataChart {
		return this._zoomSliderChart;
	}
	set zoomSliderChart(value: XamDataChart) {
		let oldValue: XamDataChart = this.zoomSliderChart;
		if (value != oldValue) {
			this._zoomSliderChart = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderChartPropertyName, oldValue, this.zoomSliderChart);
		}
	}
	private static readonly zoomSliderAxisPropertyName: string = "ZoomSliderAxis";
	private _zoomSliderAxis: NumericYAxis;
	private get zoomSliderAxis(): NumericYAxis {
		return this._zoomSliderAxis;
	}
	private set zoomSliderAxis(value: NumericYAxis) {
		let oldValue: NumericYAxis = this.zoomSliderAxis;
		if (value != oldValue) {
			this._zoomSliderAxis = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderAxisPropertyName, oldValue, this.zoomSliderAxis);
		}
	}
	private static readonly zoomSliderXAxisPropertyName: string = "ZoomSliderXAxis";
	private _zoomSliderXAxis: CategoryAxisBase;
	private get zoomSliderXAxis(): CategoryAxisBase {
		return this._zoomSliderXAxis;
	}
	private set zoomSliderXAxis(value: CategoryAxisBase) {
		let oldValue: CategoryAxisBase = this.zoomSliderXAxis;
		if (value != oldValue) {
			this._zoomSliderXAxis = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderXAxisPropertyName, oldValue, this.zoomSliderXAxis);
		}
	}
	private static readonly zoomSliderTypePropertyName: string = "ZoomSliderType";
	private _zoomSliderType: FinancialChartZoomSliderType = FinancialChartZoomSliderType.Auto;
	get zoomSliderType(): FinancialChartZoomSliderType {
		return this._zoomSliderType;
	}
	set zoomSliderType(value: FinancialChartZoomSliderType) {
		let oldValue: FinancialChartZoomSliderType = this.zoomSliderType;
		if (value != oldValue) {
			this._zoomSliderType = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderTypePropertyName, enumGetBox<FinancialChartZoomSliderType>(FinancialChartZoomSliderType_$type, oldValue), enumGetBox<FinancialChartZoomSliderType>(FinancialChartZoomSliderType_$type, this.zoomSliderType));
		}
	}
	private static readonly negativeBrushesPropertyName: string = "NegativeBrushes";
	private _negativeBrushes: BrushCollection = null;
	get negativeBrushes(): BrushCollection {
		return this._negativeBrushes;
	}
	set negativeBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.negativeBrushes;
		if (value != oldValue) {
			this._negativeBrushes = value;
			this.onPropertyUpdated(FinancialChart.negativeBrushesPropertyName, oldValue, this.negativeBrushes);
		}
	}
	private static readonly negativeOutlinesPropertyName: string = "NegativeOutlines";
	private _negativeOutlines: BrushCollection = null;
	get negativeOutlines(): BrushCollection {
		return this._negativeOutlines;
	}
	set negativeOutlines(value: BrushCollection) {
		let oldValue: BrushCollection = this.negativeOutlines;
		if (value != oldValue) {
			this._negativeOutlines = value;
			this.onPropertyUpdated(FinancialChart.negativeOutlinesPropertyName, oldValue, this.negativeOutlines);
		}
	}
	private static readonly overlayBrushesPropertyName: string = "OverlayBrushes";
	private _overlayBrushes: BrushCollection = null;
	get overlayBrushes(): BrushCollection {
		return this._overlayBrushes;
	}
	set overlayBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.overlayBrushes;
		if (value != oldValue) {
			this._overlayBrushes = value;
			this.onPropertyUpdated(FinancialChart.overlayBrushesPropertyName, oldValue, this.overlayBrushes);
		}
	}
	private static readonly overlayOutlinesPropertyName: string = "OverlayOutlines";
	private _overlayOutlines: BrushCollection = null;
	get overlayOutlines(): BrushCollection {
		return this._overlayOutlines;
	}
	set overlayOutlines(value: BrushCollection) {
		let oldValue: BrushCollection = this.overlayOutlines;
		if (value != oldValue) {
			this._overlayOutlines = value;
			this.onPropertyUpdated(FinancialChart.overlayOutlinesPropertyName, oldValue, this.overlayOutlines);
		}
	}
	private static readonly volumeOutlinesPropertyName: string = "VolumeOutlines";
	private _volumeOutlines: BrushCollection = null;
	get volumeOutlines(): BrushCollection {
		return this._volumeOutlines;
	}
	set volumeOutlines(value: BrushCollection) {
		let oldValue: BrushCollection = this.volumeOutlines;
		if (value != oldValue) {
			this._volumeOutlines = value;
			this.onPropertyUpdated(FinancialChart.volumeOutlinesPropertyName, oldValue, this.volumeOutlines);
		}
	}
	private static readonly volumeBrushesPropertyName: string = "VolumeBrushes";
	private _volumeBrushes: BrushCollection = null;
	get volumeBrushes(): BrushCollection {
		return this._volumeBrushes;
	}
	set volumeBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.volumeBrushes;
		if (value != oldValue) {
			this._volumeBrushes = value;
			this.onPropertyUpdated(FinancialChart.volumeBrushesPropertyName, oldValue, this.volumeBrushes);
		}
	}
	private static readonly indicatorNegativeBrushesPropertyName: string = "IndicatorNegativeBrushes";
	private _indicatorNegativeBrushes: BrushCollection = null;
	get indicatorNegativeBrushes(): BrushCollection {
		return this._indicatorNegativeBrushes;
	}
	set indicatorNegativeBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.indicatorNegativeBrushes;
		if (value != oldValue) {
			this._indicatorNegativeBrushes = value;
			this.onPropertyUpdated(FinancialChart.indicatorNegativeBrushesPropertyName, oldValue, this.indicatorNegativeBrushes);
		}
	}
	private static readonly indicatorBrushesPropertyName: string = "IndicatorBrushes";
	private _indicatorBrushes: BrushCollection = null;
	get indicatorBrushes(): BrushCollection {
		return this._indicatorBrushes;
	}
	set indicatorBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.indicatorBrushes;
		if (value != oldValue) {
			this._indicatorBrushes = value;
			this.onPropertyUpdated(FinancialChart.indicatorBrushesPropertyName, oldValue, this.indicatorBrushes);
		}
	}
	private static readonly volumeThicknessPropertyName: string = "VolumeThickness";
	private _volumeThickness: number = 1;
	get volumeThickness(): number {
		return this._volumeThickness;
	}
	set volumeThickness(value: number) {
		let oldValue: number = this.volumeThickness;
		if (value != oldValue) {
			this._volumeThickness = value;
			this.onPropertyUpdated(FinancialChart.volumeThicknessPropertyName, oldValue, this.volumeThickness);
		}
	}
	private static readonly overlayThicknessPropertyName: string = "OverlayThickness";
	private _overlayThickness: number = 1;
	get overlayThickness(): number {
		return this._overlayThickness;
	}
	set overlayThickness(value: number) {
		let oldValue: number = this.overlayThickness;
		if (value != oldValue) {
			this._overlayThickness = value;
			this.onPropertyUpdated(FinancialChart.overlayThicknessPropertyName, oldValue, this.overlayThickness);
		}
	}
	private static readonly indicatorThicknessPropertyName: string = "IndicatorThickness";
	private _indicatorThickness: number = 1;
	get indicatorThickness(): number {
		return this._indicatorThickness;
	}
	set indicatorThickness(value: number) {
		let oldValue: number = this.indicatorThickness;
		if (value != oldValue) {
			this._indicatorThickness = value;
			this.onPropertyUpdated(FinancialChart.indicatorThicknessPropertyName, oldValue, this.indicatorThickness);
		}
	}
	private static readonly indicatorDisplayTypesPropertyName: string = "IndicatorDisplayTypes";
	private _indicatorDisplayTypes: IndicatorDisplayTypeCollection = null;
	get indicatorDisplayTypes(): IndicatorDisplayTypeCollection {
		return this._indicatorDisplayTypes;
	}
	set indicatorDisplayTypes(value: IndicatorDisplayTypeCollection) {
		let oldValue: IndicatorDisplayTypeCollection = this.indicatorDisplayTypes;
		if (value != oldValue) {
			this._indicatorDisplayTypes = value;
			this.onPropertyUpdated(FinancialChart.indicatorDisplayTypesPropertyName, oldValue, this.indicatorDisplayTypes);
		}
	}
	private static readonly indicatorPeriodPropertyName: string = "IndicatorPeriod";
	private _indicatorPeriod: number = -2147483648;
	get indicatorPeriod(): number {
		return this._indicatorPeriod;
	}
	set indicatorPeriod(value: number) {
		let oldValue: number = this.indicatorPeriod;
		if (value != oldValue) {
			this._indicatorPeriod = value;
			this.onPropertyUpdated(FinancialChart.indicatorPeriodPropertyName, oldValue, this.indicatorPeriod);
		}
	}
	private static readonly indicatorMultiplierPropertyName: string = "IndicatorMultiplier";
	private _indicatorMultiplier: number = 2;
	get indicatorMultiplier(): number {
		return this._indicatorMultiplier;
	}
	set indicatorMultiplier(value: number) {
		let oldValue: number = this.indicatorMultiplier;
		if (value != oldValue) {
			this._indicatorMultiplier = value;
			this.onPropertyUpdated(FinancialChart.indicatorMultiplierPropertyName, oldValue, this.indicatorMultiplier);
		}
	}
	private static readonly indicatorSmoothingPeriodPropertyName: string = "IndicatorSmoothingPeriod";
	private _indicatorSmoothingPeriod: number = 3;
	get indicatorSmoothingPeriod(): number {
		return this._indicatorSmoothingPeriod;
	}
	set indicatorSmoothingPeriod(value: number) {
		let oldValue: number = this.indicatorSmoothingPeriod;
		if (value != oldValue) {
			this._indicatorSmoothingPeriod = value;
			this.onPropertyUpdated(FinancialChart.indicatorSmoothingPeriodPropertyName, oldValue, this.indicatorSmoothingPeriod);
		}
	}
	private static readonly indicatorShortPeriodPropertyName: string = "IndicatorShortPeriod";
	private _indicatorShortPeriod: number = 10;
	get indicatorShortPeriod(): number {
		return this._indicatorShortPeriod;
	}
	set indicatorShortPeriod(value: number) {
		let oldValue: number = this.indicatorShortPeriod;
		if (value != oldValue) {
			this._indicatorShortPeriod = value;
			this.onPropertyUpdated(FinancialChart.indicatorShortPeriodPropertyName, oldValue, this.indicatorShortPeriod);
		}
	}
	private static readonly indicatorLongPeriodPropertyName: string = "IndicatorLongPeriod";
	private _indicatorLongPeriod: number = 30;
	get indicatorLongPeriod(): number {
		return this._indicatorLongPeriod;
	}
	set indicatorLongPeriod(value: number) {
		let oldValue: number = this.indicatorLongPeriod;
		if (value != oldValue) {
			this._indicatorLongPeriod = value;
			this.onPropertyUpdated(FinancialChart.indicatorLongPeriodPropertyName, oldValue, this.indicatorLongPeriod);
		}
	}
	private static readonly indicatorSignalPeriodPropertyName: string = "IndicatorSignalPeriod";
	private _indicatorSignalPeriod: number = 9;
	get indicatorSignalPeriod(): number {
		return this._indicatorSignalPeriod;
	}
	set indicatorSignalPeriod(value: number) {
		let oldValue: number = this.indicatorSignalPeriod;
		if (value != oldValue) {
			this._indicatorSignalPeriod = value;
			this.onPropertyUpdated(FinancialChart.indicatorSignalPeriodPropertyName, oldValue, this.indicatorSignalPeriod);
		}
	}
	private static readonly rangeSelectorOptionsPropertyName: string = "RangeSelectorOptions";
	private _rangeSelectorOptions: FinancialChartRangeSelectorOptionCollection = null;
	get rangeSelectorOptions(): FinancialChartRangeSelectorOptionCollection {
		return this._rangeSelectorOptions;
	}
	set rangeSelectorOptions(value: FinancialChartRangeSelectorOptionCollection) {
		let oldValue: FinancialChartRangeSelectorOptionCollection = this.rangeSelectorOptions;
		if (value != oldValue) {
			this._rangeSelectorOptions = value;
			this.onPropertyUpdated(FinancialChart.rangeSelectorOptionsPropertyName, oldValue, this.rangeSelectorOptions);
		}
	}
	private _actualRangeSelectorOptions: FinancialChartRangeSelectorOptionCollection = null;
	get actualRangeSelectorOptions(): FinancialChartRangeSelectorOptionCollection {
		return this._actualRangeSelectorOptions;
	}
	set actualRangeSelectorOptions(value: FinancialChartRangeSelectorOptionCollection) {
		this._actualRangeSelectorOptions = value;
	}
	private static readonly customIndicatorNamesPropertyName: string = "CustomIndicatorNames";
	private _customIndicatorNames: CustomIndicatorNameCollection = null;
	get customIndicatorNames(): CustomIndicatorNameCollection {
		return this._customIndicatorNames;
	}
	set customIndicatorNames(value: CustomIndicatorNameCollection) {
		let oldValue = this._customIndicatorNames;
		if (value != oldValue) {
			this._customIndicatorNames = value;
			this.onPropertyUpdated(FinancialChart.customIndicatorNamesPropertyName, oldValue, this.customIndicatorNames);
		}
	}
	applyCustomIndicators: (sender: any, e: FinancialChartCustomIndicatorArgs) => void = null;
	protected get_isVerticalZoomEnabled(): boolean {
		return super.get_isVerticalZoomEnabled();
	}
	protected set_isVerticalZoomEnabled(value: boolean): void {
		super.set_isVerticalZoomEnabled(value);
	}
	private static readonly zoomSliderXAxisMajorStrokePropertyName: string = "ZoomSliderXAxisMajorStroke";
	private _zoomSliderXAxisMajorStroke: Brush = null;
	get zoomSliderXAxisMajorStroke(): Brush {
		return this._zoomSliderXAxisMajorStroke;
	}
	set zoomSliderXAxisMajorStroke(value: Brush) {
		let oldValue: Brush = this.zoomSliderXAxisMajorStroke;
		if (value != oldValue) {
			this._zoomSliderXAxisMajorStroke = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderXAxisMajorStrokePropertyName, oldValue, this.zoomSliderXAxisMajorStroke);
		}
	}
	private static readonly zoomSliderXAxisMajorStrokeThicknessPropertyName: string = "ZoomSliderXAxisMajorStrokeThickness";
	private _zoomSliderXAxisMajorStrokeThickness: number = 1;
	get zoomSliderXAxisMajorStrokeThickness(): number {
		return this._zoomSliderXAxisMajorStrokeThickness;
	}
	set zoomSliderXAxisMajorStrokeThickness(value: number) {
		let oldValue: number = this.zoomSliderXAxisMajorStrokeThickness;
		if (value != oldValue) {
			this._zoomSliderXAxisMajorStrokeThickness = value;
			this.onPropertyUpdated(FinancialChart.zoomSliderXAxisMajorStrokeThicknessPropertyName, oldValue, this.zoomSliderXAxisMajorStrokeThickness);
		}
	}
	private static readonly isLegendVisiblePropertyName: string = "IsLegendVisible";
	private _isLegendVisible: boolean = false;
	get isLegendVisible(): boolean {
		return this._isLegendVisible;
	}
	set isLegendVisible(value: boolean) {
		let oldValue: boolean = this.isLegendVisible;
		if (value != oldValue) {
			this._isLegendVisible = value;
			this.onPropertyUpdated(FinancialChart.isLegendVisiblePropertyName, oldValue, this.isLegendVisible);
		}
	}
	private static readonly financialChartLegendPropertyName: string = "FinancialChartLegend";
	private _financialChartLegend: IChartLegend = null;
	get financialChartLegend(): IChartLegend {
		return this._financialChartLegend;
	}
	set financialChartLegend(value: IChartLegend) {
		let oldValue: IChartLegend = this.financialChartLegend;
		if (value != oldValue) {
			this._financialChartLegend = value;
			this.onPropertyUpdated(FinancialChart.financialChartLegendPropertyName, oldValue, this.financialChartLegend);
		}
	}
	private static readonly xAxisPropertyName: string = "XAxis";
	private _xAxis: CategoryAxisBase;
	private get xAxis(): CategoryAxisBase {
		return this._xAxis;
	}
	private set xAxis(value: CategoryAxisBase) {
		let oldValue: CategoryAxisBase = this.xAxis;
		if (value != oldValue) {
			this._xAxis = value;
			this.onPropertyUpdated(FinancialChart.xAxisPropertyName, oldValue, this.xAxis);
		}
	}
	private static readonly yAxisPropertyName: string = "YAxis";
	private _yAxis: NumericYAxis;
	private get yAxis(): NumericYAxis {
		return this._yAxis;
	}
	private set yAxis(value: NumericYAxis) {
		let oldValue: NumericYAxis = this.yAxis;
		if (value != oldValue) {
			this._yAxis = value;
			this.onPropertyUpdated(FinancialChart.yAxisPropertyName, oldValue, this.yAxis);
		}
	}
	private static readonly volumeAxisPropertyName: string = "VolumeAxis";
	private _volumeAxis: NumericYAxis;
	private get volumeAxis(): NumericYAxis {
		return this._volumeAxis;
	}
	private set volumeAxis(value: NumericYAxis) {
		let oldValue: NumericYAxis = this.volumeAxis;
		if (value != oldValue) {
			this._volumeAxis = value;
			this.onPropertyUpdated(FinancialChart.volumeAxisPropertyName, oldValue, this.volumeAxis);
		}
	}
	private static readonly volumeXAxisPropertyName: string = "VolumeXAxis";
	private _volumeXAxis: CategoryAxisBase;
	private get volumeXAxis(): CategoryAxisBase {
		return this._volumeXAxis;
	}
	private set volumeXAxis(value: CategoryAxisBase) {
		let oldValue: CategoryAxisBase = this.volumeXAxis;
		if (value != oldValue) {
			this._volumeXAxis = value;
			this.onPropertyUpdated(FinancialChart.volumeXAxisPropertyName, oldValue, this.volumeXAxis);
		}
	}
	private static readonly indicatorAxisPropertyName: string = "IndicatorAxis";
	private _indicatorAxis: NumericYAxis;
	private get indicatorAxis(): NumericYAxis {
		return this._indicatorAxis;
	}
	private set indicatorAxis(value: NumericYAxis) {
		let oldValue: NumericYAxis = this.indicatorAxis;
		if (value != oldValue) {
			this._indicatorAxis = value;
			this.onPropertyUpdated(FinancialChart.indicatorAxisPropertyName, oldValue, this.indicatorAxis);
		}
	}
	private static readonly indicatorXAxisPropertyName: string = "IndicatorXAxis";
	private _indicatorXAxis: CategoryAxisBase;
	private get indicatorXAxis(): CategoryAxisBase {
		return this._indicatorXAxis;
	}
	private set indicatorXAxis(value: CategoryAxisBase) {
		let oldValue: CategoryAxisBase = this.indicatorXAxis;
		if (value != oldValue) {
			this._indicatorXAxis = value;
			this.onPropertyUpdated(FinancialChart.indicatorXAxisPropertyName, oldValue, this.indicatorXAxis);
		}
	}
	private static readonly indicatorAxesPropertyName: string = "IndicatorAxes";
	private _indicatorAxes: List$1<NumericYAxis>;
	private get indicatorAxes(): List$1<NumericYAxis> {
		return this._indicatorAxes;
	}
	private set indicatorAxes(value: List$1<NumericYAxis>) {
		let oldValue: List$1<NumericYAxis> = this.indicatorAxes;
		if (value != oldValue) {
			this._indicatorAxes = value;
			this.onPropertyUpdated(FinancialChart.indicatorAxesPropertyName, oldValue, this.indicatorAxes);
		}
	}
	private static readonly indicatorXAxesPropertyName: string = "IndicatorXAxes";
	private _indicatorXAxes: List$1<CategoryAxisBase>;
	private get indicatorXAxes(): List$1<CategoryAxisBase> {
		return this._indicatorXAxes;
	}
	private set indicatorXAxes(value: List$1<CategoryAxisBase>) {
		let oldValue: List$1<CategoryAxisBase> = this.indicatorXAxes;
		if (value != oldValue) {
			this._indicatorXAxes = value;
			this.onPropertyUpdated(FinancialChart.indicatorXAxesPropertyName, oldValue, this.indicatorXAxes);
		}
	}
	private static readonly xAxisMinimumValuePropertyName: string = "XAxisMinimumValue";
	private _xAxisMinimumValue: Date = dateMinValue();
	get xAxisMinimumValue(): Date {
		return this._xAxisMinimumValue;
	}
	set xAxisMinimumValue(value: Date) {
		let oldValue: Date = this.xAxisMinimumValue;
		if (+value != +oldValue) {
			this._xAxisMinimumValue = value;
			this.onPropertyUpdated(FinancialChart.xAxisMinimumValuePropertyName, oldValue, this.xAxisMinimumValue);
		}
	}
	private static readonly xAxisMaximumValuePropertyName: string = "XAxisMaximumValue";
	private _xAxisMaximumValue: Date = dateMaxValue();
	get xAxisMaximumValue(): Date {
		return this._xAxisMaximumValue;
	}
	set xAxisMaximumValue(value: Date) {
		let oldValue: Date = this.xAxisMaximumValue;
		if (+value != +oldValue) {
			this._xAxisMaximumValue = value;
			this.onPropertyUpdated(FinancialChart.xAxisMaximumValuePropertyName, oldValue, this.xAxisMaximumValue);
		}
	}
	private _xAxisBreaks: ObservableCollection$1<any> = null;
	get xAxisBreaks(): ObservableCollection$1<any> {
		return this._xAxisBreaks;
	}
}

/**
 * @hidden 
 */
export class FinancialChartToolbar extends TemplatedHtmlControl {
	static $t: Type = markType(FinancialChartToolbar, 'FinancialChartToolbar', (<any>TemplatedHtmlControl).$type);
	private static readonly defaultTemplate: string = "";
	findContainers(grid: DomWrapper): void {
		let tool = grid.querySelectorAll(".financialChartToolbarArea");
		if (tool != null && tool.length > 0) {
			this.rootElement = tool[0];
			if (!this.isToolbarVisible) {
				this.rootElement.hide();
			}
		}
		let indicatorMenuDiv = grid.querySelectorAll(".financialChartIndicatorMenu");
		if (indicatorMenuDiv != null && indicatorMenuDiv.length > 0) {
			this.indicatorMenu.rootElement = indicatorMenuDiv[0];
		}
		let rangeSelectorDiv = grid.querySelectorAll(".financialChartRangeSelector");
		if (rangeSelectorDiv != null && rangeSelectorDiv.length > 0) {
			this.rangeSelector.rootElement = rangeSelectorDiv[0];
		}
		let pickerDiv = grid.querySelectorAll(".financialChartTypePicker");
		if (pickerDiv != null && pickerDiv.length > 0) {
			this.chartTypePicker.rootElement = pickerDiv[0];
		}
	}
	onDocumentClick(e: Event): void {
		this.indicatorMenu.onDocumentClick(e);
		this.chartTypePicker.onDocumentClick(e);
	}
	private _chart: FinancialChart = null;
	private get chart(): FinancialChart {
		return this._chart;
	}
	private set chart(value: FinancialChart) {
		this._chart = value;
	}
	constructor(chart: FinancialChart, template: any) {
		super("financialChartToolbar", template, FinancialChartToolbar.defaultTemplate);
		this.chart = chart;
		this.viewModel = new FinancialChartToolbarViewModel();
		this.rangeSelector = new FinancialChartRangeSelector(chart != null ? chart.rangeSelectorTemplate : null);
		this.chartTypePicker = new FinancialChartTypePicker(chart != null ? chart.chartTypePickerTemplate : null);
		this.indicatorMenu = new FinancialChartIndicatorMenu(1, chart != null ? chart.indicatorMenuTemplate : null);
	}
	private static readonly rangeSelectorPropertyName: string = "RangeSelector";
	private _rangeSelector: FinancialChartRangeSelector = null;
	get rangeSelector(): FinancialChartRangeSelector {
		return this._rangeSelector;
	}
	set rangeSelector(value: FinancialChartRangeSelector) {
		let oldValue: FinancialChartRangeSelector = this.rangeSelector;
		if (value != oldValue) {
			this._rangeSelector = value;
			this.onPropertyUpdated(FinancialChartToolbar.rangeSelectorPropertyName, oldValue, this.rangeSelector);
		}
	}
	private static readonly chartTypePickerPropertyName: string = "ChartTypePicker";
	private _chartTypePicker: FinancialChartTypePicker = null;
	get chartTypePicker(): FinancialChartTypePicker {
		return this._chartTypePicker;
	}
	set chartTypePicker(value: FinancialChartTypePicker) {
		let oldValue: FinancialChartTypePicker = this.chartTypePicker;
		if (value != oldValue) {
			this._chartTypePicker = value;
			this.onPropertyUpdated(FinancialChartToolbar.chartTypePickerPropertyName, oldValue, this.chartTypePicker);
		}
	}
	private static readonly indicatorMenuPropertyName: string = "IndicatorMenu";
	private _indicatorMenu: FinancialChartIndicatorMenu = null;
	get indicatorMenu(): FinancialChartIndicatorMenu {
		return this._indicatorMenu;
	}
	set indicatorMenu(value: FinancialChartIndicatorMenu) {
		let oldValue: FinancialChartIndicatorMenu = this.indicatorMenu;
		if (value != oldValue) {
			this._indicatorMenu = value;
			this.onPropertyUpdated(FinancialChartToolbar.indicatorMenuPropertyName, oldValue, this.indicatorMenu);
		}
	}
	private onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case FinancialChartToolbar.rangeStartPropertyName:
			if (this.rangeSelector != null) {
				this.rangeSelector.rangeStart = this.rangeStart;
			}
			break;

			case FinancialChartToolbar.rangeEndPropertyName:
			if (this.rangeSelector != null) {
				this.rangeSelector.rangeEnd = this.rangeEnd;
			}
			break;

			case FinancialChartToolbar.selectionStartPropertyName:
			if (this.rangeSelector != null) {
				this.rangeSelector.selectionStart = this.selectionStart;
			}
			break;

			case FinancialChartToolbar.selectionEndPropertyName:
			if (this.rangeSelector != null) {
				this.rangeSelector.selectionEnd = this.selectionEnd;
			}
			break;

			case FinancialChartToolbar.rangeSelectorPropertyName:
			let oldRangeSelector: FinancialChartRangeSelector = <FinancialChartRangeSelector>oldValue;
			if (oldRangeSelector != null) {
				oldRangeSelector.rangeChanged = delegateRemove(oldRangeSelector.rangeChanged, runOn(this, this.handleRangeSelectorRangeChanged));
			}
			if (this.rangeSelector != null) {
				this.rangeSelector.rangeStart = this.rangeStart;
				this.rangeSelector.rangeEnd = this.rangeEnd;
				this.rangeSelector.options = this.rangeSelectorOptions;
				this.rangeSelector.selectionStart = this.selectionStart;
				this.rangeSelector.selectionEnd = this.selectionEnd;
				let $t = this.rangeSelector;
				$t.rangeChanged = delegateCombine($t.rangeChanged, runOn(this, this.handleRangeSelectorRangeChanged));
			}
			break;

			case FinancialChartToolbar.chartTypePickerPropertyName:
			let oldPicker: FinancialChartTypePicker = <FinancialChartTypePicker>oldValue;
			if (oldPicker != null) {
				oldPicker.selectionChanged = delegateRemove(oldPicker.selectionChanged, runOn(this, this.handlePickerChanged));
			}
			if (this.chartTypePicker != null) {
				this.chartTypePicker.chartType = this.chartType;
				let $t1 = this.chartTypePicker;
				$t1.selectionChanged = delegateCombine($t1.selectionChanged, runOn(this, this.handlePickerChanged));
			}
			break;

			case FinancialChartToolbar.chartTypePropertyName:
			if (this.chartTypePicker != null) {
				this.chartTypePicker.chartType = this.chartType;
			}
			break;

			case FinancialChartToolbar.rangeSelectorOptionsPropertyName:
			if (this.rangeSelector != null) {
				this.rangeSelector.options = this.rangeSelectorOptions;
			}
			break;

			case FinancialChartToolbar.isToolbarVisiblePropertyName:
			if (this.rootElement == null) {
				break;
			}
			if (this.isToolbarVisible) {
				this.rootElement.show();
			} else {
				this.rootElement.hide();
			}
			break;

			case FinancialChartToolbar.indicatorMenuPropertyName:
			let oldMenu: FinancialChartIndicatorMenu = typeCast<FinancialChartIndicatorMenu>((<any>FinancialChartIndicatorMenu).$type, oldValue);
			if (oldMenu != null) {
				oldMenu.selectionChanged = delegateRemove(oldMenu.selectionChanged, runOn(this, this.handleIndicatorMenuSelectionChanged));
			}
			if (this.indicatorMenu != null) {
				let $t2 = this.indicatorMenu;
				$t2.selectionChanged = delegateCombine($t2.selectionChanged, runOn(this, this.handleIndicatorMenuSelectionChanged));
			}
			break;

			case FinancialChartToolbar.indicatorTypesPropertyName:
			if (this.indicatorTypesChanged != null) {
				this.indicatorTypesChanged(this, EventArgs.empty);
			}
			break;

			case FinancialChartToolbar.overlayTypesPropertyName:
			if (this.overlayTypesChanged != null) {
				this.overlayTypesChanged(this, EventArgs.empty);
			}
			break;

			case FinancialChartToolbar.trendLineTypePropertyName:
			if (this.trendLineTypeChanged != null) {
				this.trendLineTypeChanged(this, EventArgs.empty);
			}
			break;

			case FinancialChartToolbar.volumeTypePropertyName:
			if (this.volumeTypeChanged != null) {
				this.volumeTypeChanged(this, EventArgs.empty);
			}
			break;

		}

	}
	private handleIndicatorMenuSelectionChanged(sender: any, e: EventArgs): void {
		this.overlayTypes = this.indicatorMenu.overlayTypes;
		this.indicatorTypes = this.indicatorMenu.indicatorTypes;
		this.trendLineType = this.indicatorMenu.trendLineType;
		this.volumeType = this.indicatorMenu.volumeType;
	}
	private handlePickerChanged(sender: any, e: EventArgs): void {
		this.chartType = this.chartTypePicker.chartType;
		if (this.chartTypeChanged != null) {
			this.chartTypeChanged(this, e);
		}
	}
	private handleRangeSelectorRangeChanged(sender: any, e: EventArgs): void {
		this.selectionStart = this.rangeSelector.selectionStart;
		this.selectionEnd = this.rangeSelector.selectionEnd;
		if (this.rangeChanged != null) {
			this.rangeChanged(this, e);
		}
	}
	private _viewModel: FinancialChartToolbarViewModel = null;
	get viewModel(): FinancialChartToolbarViewModel {
		return this._viewModel;
	}
	set viewModel(value: FinancialChartToolbarViewModel) {
		this._viewModel = value;
	}
	getContext(): FinancialChartToolbarContext {
		let ret = new FinancialChartToolbarContext();
		ret.container = this.renderer;
		ret.vm = this.viewModel;
		ret.vm.financialChartIndicatorMenu = ((() => {
			let $ret = new FinancialChartIndicatorMenuContext();
			$ret.vm = <FinancialChartIndicatorMenuViewModel>this.indicatorMenu.viewModel;
			return $ret;
		})());
		ret.vm.financialChartTypePicker = ((() => {
			let $ret = new FinancialChartTypePickerContext();
			$ret.vm = this.chartTypePicker.viewModel;
			return $ret;
		})());
		ret.vm.financialChartRangeSelector = ((() => {
			let $ret = new FinancialChartRangeSelectorContext();
			$ret.vm = this.rangeSelector.viewModel;
			return $ret;
		})());
		return ret;
	}
	provideContainer(container: any): void {
		super.provideContainer(container);
		if (container == null) {
			return;
		}
		this.hideToolsExceedingWidth();
	}
	private hideToolsExceedingWidth(): void {
	}
	private static readonly selectionStartPropertyName: string = "SelectionStart";
	private _selectionStart: Date = dateMaxValue();
	get selectionStart(): Date {
		return this._selectionStart;
	}
	set selectionStart(value: Date) {
		let oldValue: Date = this.selectionStart;
		if (+value != +oldValue) {
			this._selectionStart = value;
			this.onPropertyUpdated(FinancialChartToolbar.selectionStartPropertyName, oldValue, this.selectionStart);
		}
	}
	private static readonly selectionEndPropertyName: string = "SelectionEnd";
	private _selectionEnd: Date = dateMinValue();
	get selectionEnd(): Date {
		return this._selectionEnd;
	}
	set selectionEnd(value: Date) {
		let oldValue: Date = this.selectionEnd;
		if (+value != +oldValue) {
			this._selectionEnd = value;
			this.onPropertyUpdated(FinancialChartToolbar.selectionEndPropertyName, oldValue, this.selectionEnd);
		}
	}
	private static readonly rangeStartPropertyName: string = "RangeStart";
	private _rangeStart: Date = dateMaxValue();
	get rangeStart(): Date {
		return this._rangeStart;
	}
	set rangeStart(value: Date) {
		let oldValue: Date = this.rangeStart;
		if (+value != +oldValue) {
			this._rangeStart = value;
			this.onPropertyUpdated(FinancialChartToolbar.rangeStartPropertyName, oldValue, this.rangeStart);
		}
	}
	private static readonly rangeEndPropertyName: string = "RangeEnd";
	private _rangeEnd: Date = dateMinValue();
	get rangeEnd(): Date {
		return this._rangeEnd;
	}
	set rangeEnd(value: Date) {
		let oldValue: Date = this.rangeEnd;
		if (+value != +oldValue) {
			this._rangeEnd = value;
			this.onPropertyUpdated(FinancialChartToolbar.rangeEndPropertyName, oldValue, this.rangeEnd);
		}
	}
	rangeChanged: (sender: any, e: EventArgs) => void = null;
	chartTypeChanged: (sender: any, e: EventArgs) => void = null;
	trendLineTypeChanged: (sender: any, e: EventArgs) => void = null;
	volumeTypeChanged: (sender: any, e: EventArgs) => void = null;
	indicatorTypesChanged: (sender: any, e: EventArgs) => void = null;
	overlayTypesChanged: (sender: any, e: EventArgs) => void = null;
	updateRangeSelectorUI(): void {
		if (this.rangeSelector != null) {
			this.rangeSelector.updateUI();
		}
	}
	private static readonly chartTypePropertyName: string = "ChartType";
	private _chartType: FinancialChartType = <FinancialChartType>0;
	get chartType(): FinancialChartType {
		return this._chartType;
	}
	set chartType(value: FinancialChartType) {
		let oldValue: FinancialChartType = this.chartType;
		if (value != oldValue) {
			this._chartType = value;
			this.onPropertyUpdated(FinancialChartToolbar.chartTypePropertyName, enumGetBox<FinancialChartType>(FinancialChartType_$type, oldValue), enumGetBox<FinancialChartType>(FinancialChartType_$type, this.chartType));
		}
	}
	private static readonly trendLineTypePropertyName: string = "TrendLineType";
	private _trendLineType: TrendLineType = <TrendLineType>0;
	get trendLineType(): TrendLineType {
		return this._trendLineType;
	}
	set trendLineType(value: TrendLineType) {
		let oldValue: TrendLineType = this.trendLineType;
		if (value != oldValue) {
			this._trendLineType = value;
			this.onPropertyUpdated(FinancialChartToolbar.trendLineTypePropertyName, enumGetBox<TrendLineType>(TrendLineType_$type, oldValue), enumGetBox<TrendLineType>(TrendLineType_$type, this.trendLineType));
		}
	}
	private static readonly volumeTypePropertyName: string = "VolumeType";
	private _volumeType: FinancialChartVolumeType = <FinancialChartVolumeType>0;
	get volumeType(): FinancialChartVolumeType {
		return this._volumeType;
	}
	set volumeType(value: FinancialChartVolumeType) {
		let oldValue: FinancialChartVolumeType = this.volumeType;
		if (value != oldValue) {
			this._volumeType = value;
			this.onPropertyUpdated(FinancialChartToolbar.volumeTypePropertyName, enumGetBox<FinancialChartVolumeType>(FinancialChartVolumeType_$type, oldValue), enumGetBox<FinancialChartVolumeType>(FinancialChartVolumeType_$type, this.volumeType));
		}
	}
	private static readonly indicatorTypesPropertyName: string = "IndicatorTypes";
	private _indicatorTypes: FinancialIndicatorTypeCollection = null;
	get indicatorTypes(): FinancialIndicatorTypeCollection {
		return this._indicatorTypes;
	}
	set indicatorTypes(value: FinancialIndicatorTypeCollection) {
		let oldValue: List$1<FinancialIndicatorType> = this.indicatorTypes;
		if (!FinancialChartToolbar.listsEqual(oldValue, value)) {
			this._indicatorTypes = value;
			this.onPropertyUpdated(FinancialChartToolbar.indicatorTypesPropertyName, oldValue, this.indicatorTypes);
		}
	}
	private static readonly overlayTypesPropertyName: string = "OverlayTypes";
	private _overlayTypes: FinancialOverlayTypeCollection = null;
	get overlayTypes(): FinancialOverlayTypeCollection {
		return this._overlayTypes;
	}
	set overlayTypes(value: FinancialOverlayTypeCollection) {
		let oldValue: List$1<FinancialOverlayType> = this.overlayTypes;
		if (!FinancialChartToolbar.listsEqual(oldValue, value)) {
			this._overlayTypes = value;
			this.onPropertyUpdated(FinancialChartToolbar.overlayTypesPropertyName, oldValue, this.overlayTypes);
		}
	}
	static listsEqual(one: IList, two: IList): boolean {
		if (one == two) {
			return true;
		}
		if ((one == null && two != null) || (one != null && two == null)) {
			return false;
		}
		if (one.count != two.count) {
			return false;
		}
		for (let fit of fromEn<any>(one)) {
			if (!two.contains(fit)) {
				return false;
			}
		}
		return true;
	}
	exportVisualData(): FinancialChartToolbarVisualData {
		return ((() => {
			let $ret = new FinancialChartToolbarVisualData();
			$ret.rangeSelector = this.rangeSelector == null ? null : this.rangeSelector.exportVisualData();
			return $ret;
		})());
	}
	private static readonly rangeSelectorOptionsPropertyName: string = "RangeSelectorOptions";
	private _rangeSelectorOptions: FinancialChartRangeSelectorOptionCollection = null;
	get rangeSelectorOptions(): FinancialChartRangeSelectorOptionCollection {
		return this._rangeSelectorOptions;
	}
	set rangeSelectorOptions(value: FinancialChartRangeSelectorOptionCollection) {
		let oldValue: FinancialChartRangeSelectorOptionCollection = this.rangeSelectorOptions;
		if (value != oldValue) {
			this._rangeSelectorOptions = value;
			this.onPropertyUpdated(FinancialChartToolbar.rangeSelectorOptionsPropertyName, oldValue, this.rangeSelectorOptions);
		}
	}
	private static readonly isToolbarVisiblePropertyName: string = "IsToolbarVisible";
	private _isToolbarVisible: boolean = false;
	get isToolbarVisible(): boolean {
		return this._isToolbarVisible;
	}
	set isToolbarVisible(value: boolean) {
		let oldValue: boolean = this.isToolbarVisible;
		if (value != oldValue) {
			this._isToolbarVisible = value;
			this.onPropertyUpdated(FinancialChartToolbar.isToolbarVisiblePropertyName, oldValue, this.isToolbarVisible);
		}
	}
}

/**
 * @hidden 
 */
export class FinancialChartRangeSelector extends TemplatedHtmlControl {
	static $t: Type = markType(FinancialChartRangeSelector, 'FinancialChartRangeSelector', (<any>TemplatedHtmlControl).$type);
	private static readonly defaultTemplate: string = "";
	private static _instanceCounter: number = 0;
	private static get instanceCounter(): number {
		return FinancialChartRangeSelector._instanceCounter;
	}
	private static set instanceCounter(value: number) {
		FinancialChartRangeSelector._instanceCounter = value;
	}
	private _viewModel: FinancialChartRangeSelectorViewModel = null;
	get viewModel(): FinancialChartRangeSelectorViewModel {
		return this._viewModel;
	}
	set viewModel(value: FinancialChartRangeSelectorViewModel) {
		this._viewModel = value;
	}
	get selectionStart(): Date {
		return this.viewModel.selectionStart;
	}
	set selectionStart(value: Date) {
		this.viewModel.selectionStart = value;
	}
	get selectionEnd(): Date {
		return this.viewModel.selectionEnd;
	}
	set selectionEnd(value: Date) {
		this.viewModel.selectionEnd = value;
	}
	get rangeStart(): Date {
		return this.viewModel.rangeStart;
	}
	set rangeStart(value: Date) {
		this.viewModel.rangeStart = value;
	}
	get rangeEnd(): Date {
		return this.viewModel.rangeEnd;
	}
	set rangeEnd(value: Date) {
		this.viewModel.rangeEnd = value;
	}
	updateUI(): void {
		if (this.viewModel.onPropertiesChanged()) {
			this.view.onPropertiesChanged(this.viewModel);
		}
	}
	constructor(template: any) {
		super("financialChartRangeSelector", template, FinancialChartRangeSelector.defaultTemplate);
		this.view = new FinancialChartRangeSelectorView();
		this.viewModel = new FinancialChartRangeSelectorViewModel();
		this.viewModel.onRangeChanged = runOn(this, this.onRangeChanged);
	}
	provideContainer(container: any): void {
		super.provideContainer(container);
		this.view.attach(this.renderer, this.viewModel);
	}
	private onRangeChanged(): void {
		if (this.rangeChanged != null) {
			this.rangeChanged(this, EventArgs.empty);
		}
	}
	rangeChanged: (sender: any, e: EventArgs) => void = null;
	exportVisualData(): FinancialChartRangeSelectorVisualData {
		return this.view.exportVisualData(this.rootElement);
	}
	get options(): FinancialChartRangeSelectorOptionCollection {
		return this.viewModel.options;
	}
	set options(value: FinancialChartRangeSelectorOptionCollection) {
		let changed: boolean = !FinancialChartToolbar.listsEqual(this.viewModel.options, value);
		if (changed) {
			this.viewModel.options = value;
			this.updateRadioButtonVisibility();
		}
	}
	private updateRadioButtonVisibility(): void {
		if (this.viewModel != null) {
			this.viewModel.updateVisibleOptions();
		}
		if (this.view != null) {
			this.view.updateRadioButtonVisibility(this.options);
		}
	}
	private _view: FinancialChartRangeSelectorView = null;
	private get view(): FinancialChartRangeSelectorView {
		return this._view;
	}
	private set view(value: FinancialChartRangeSelectorView) {
		this._view = value;
	}
}


