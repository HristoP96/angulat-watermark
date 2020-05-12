import { Type, OnDestroy, EventEmitter, Output, TemplateRef, AfterViewInit, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import { GridMode } from './GridMode';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { Visibility } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { PointUtil, IEnumerable, TypeRegistrar } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Series } from './Series';
import { Rect } from 'igniteui-core/Rect';
import { DataTemplate } from 'igniteui-core/DataTemplate';
import { BrushCollection } from 'igniteui-core/BrushCollection';
import { FinancialChart } from './FinancialChart';
import { FinancialChartType, FinancialChartType_$type } from './FinancialChartType';
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from './CategoryTransitionInMode';
import { TransitionInSpeedType, TransitionInSpeedType_$type } from './TransitionInSpeedType';
import { fromBrushCollection, toBrushCollection, brushToString, stringToBrush, ensureEnum, ensureBool, initializePropertiesFromCss, NamePatcher, toSpinal } from "igniteui-core/componentUtil";
import { IgCollection } from 'igniteui-core/IgCollection';
import { IgxDomainChartComponent } from './igx-domain-chart-component';
import { IgxXYChartComponent } from './igx-xy-chart-component';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { DataSeriesType } from 'igniteui-core/DataSeriesType';
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { IgxNumericYAxisComponent } from './igx-numeric-y-axis-component';
import { FinancialChartVolumeType, FinancialChartVolumeType_$type } from './FinancialChartVolumeType';
import { FinancialChartXAxisMode, FinancialChartXAxisMode_$type } from './FinancialChartXAxisMode';
import { FinancialChartYAxisMode, FinancialChartYAxisMode_$type } from './FinancialChartYAxisMode';
import { HorizontalAlignment, HorizontalAlignment_$type } from 'igniteui-core/HorizontalAlignment';
import { AxisLabelsLocation, AxisLabelsLocation_$type } from './AxisLabelsLocation';
import { FinancialChartZoomSliderType, FinancialChartZoomSliderType_$type } from './FinancialChartZoomSliderType';
import { IgxFinancialChartDefaultTemplatesComponent } from './igx-financial-chart-default-templates-component';
import { IgxTemplateContentComponent } from 'igniteui-core/igx-template-content-component';
import { delegateCombine } from 'igniteui-core/type';
import { IgxFinancialIndicatorTypeCollection } from './igx-financial-indicator-type-collection';
import { FinancialIndicatorTypeCollection as FinancialIndicatorTypeCollection_internal } from './FinancialIndicatorTypeCollection';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { FinancialIndicatorType, FinancialIndicatorType_$type } from './FinancialIndicatorType';
import { IgxFinancialOverlayTypeCollection } from './igx-financial-overlay-type-collection';
import { FinancialOverlayTypeCollection as FinancialOverlayTypeCollection_internal } from './FinancialOverlayTypeCollection';
import { FinancialOverlayType, FinancialOverlayType_$type } from './FinancialOverlayType';
import { IgxIndicatorDisplayTypeCollection } from './igx-indicator-display-type-collection';
import { IndicatorDisplayTypeCollection as IndicatorDisplayTypeCollection_internal } from './IndicatorDisplayTypeCollection';
import { IndicatorDisplayType, IndicatorDisplayType_$type } from './IndicatorDisplayType';
import { IgxFinancialChartRangeSelectorOptionCollection } from './igx-financial-chart-range-selector-option-collection';
import { FinancialChartRangeSelectorOptionCollection as FinancialChartRangeSelectorOptionCollection_internal } from './FinancialChartRangeSelectorOptionCollection';
import { FinancialChartRangeSelectorOption, FinancialChartRangeSelectorOption_$type } from './FinancialChartRangeSelectorOption';
import { IgxFinancialChartCustomIndicatorArgs } from './igx-financial-chart-custom-indicator-args';
import { CustomIndicatorNameCollection as CustomIndicatorNameCollection_internal } from './CustomIndicatorNameCollection';
import { IgxCustomIndicatorNameCollection } from './igx-custom-indicator-name-collection';
import { String_$type } from 'igniteui-core/type';
import { IgxFinancialLegendComponent } from './igx-financial-legend-component.js';

export const IgxFinancialChartComponent_PROVIDERS = [];

/**
 * Represents a chart with an ordinal X-axis and a numeric Y-axis.
* 
* **Ignite UI for Angular Financial Chart** - [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/FinancialChart.html)
* 
* The Ignite UI Financial Chart is a lightweight, highly performant chart. It can be easily configured to display category data using an extremely simple and intuitive API. It offers multiple ways for the user to visualize data, including several display modes for price and volume, and many financial indicators.
* 
* ```html
* <igx-financial-chart [dataSource]="data"
* 					 width="850px" height="600px">
* </igx-financial-chart>
* ```
*/
@Component({
    selector: 'igx-financial-chart',
    template: `
    <ng-template #financialChartTemplate>
        <div class='financialChartMainGrid'>
		    <div class='financialChartToolbar'></div>
            <div class='financialChartLegend'></div>
		    <div class='financialChartPrice'></div>
		    <div class='financialChartIndicators'></div>
		    <div class='financialChartVolume'></div>
		    <div class='financialChartZoomSlider'></div>
	    </div>
    </ng-template>

    <ng-container #dynamicContent></ng-container>
    <igx-financial-chart-default-templates #defaultTemplates></igx-financial-chart-default-templates>
    <igx-template-content #toolbarContent style="display: none"></igx-template-content>
	<igx-template-content
		style="width: 100%; height: 100%"
		#mainContent [template]="chartTemplate ? chartTemplate : financialChartTemplate"></igx-template-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxFinancialChartComponent_PROVIDERS,
    styles: [`
		:host {
			display: block;
		}
        .financialChartToolbar {
            grid-row: 1;
            -ms-grid-row: 1;
        }
        .financialChartPrice {
            grid-row: 3;
            -ms-grid-row: 3;
        }
        .financialChartPrice, .financialChartPrice > div {
            min-height: 100px;
        }
        .financialChartIndicators {
            grid-row: 4;
            -ms-grid-row: 4;
        }
        .financialChartVolume {
            grid-row: 5;
            -ms-grid-row: 5;
        }
        .financialChartZoomSlider {
            grid-row: 6;
            -ms-grid-row: 6;
        }
		.financialChartMainGrid {
			height: 100%;
			width: 100%;
			display: grid;
			display: -ms-grid;
			-ms-grid-columns: 100%;
		}
        .financialChartLegend {
	        grid-row: 2;
	        -ms-grid-row: 2;
        }
	`],
    host: {
        '(document:click)': 'onDocumentClick($event)',
        class: "ig-financial-chart igx-financial-chart"
    }
})
export class IgxFinancialChartComponent extends IgxXYChartComponent implements AfterViewInit, OnDestroy {
    container: Element;

    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;
    @ViewChild(IgxFinancialChartDefaultTemplatesComponent, { static: true }) _defaultTemplates: IgxFinancialChartDefaultTemplatesComponent;
    @ViewChildren(IgxTemplateContentComponent) _templates: QueryList<IgxTemplateContentComponent>;
    @ViewChild('toolbarContent', { read: ElementRef, static: true }) _toolbarElement: ElementRef;
    @ViewChild('mainContent', { read: ElementRef, static: true }) _mainElement: ElementRef;

    private _height: string;
    private _width: string;
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

    @Input()
    public rangeSelectorTemplate: TemplateRef<any>;

    @Input()
    public chartTypePickerTemplate: TemplateRef<any>;

    @Input()
    public indicatorMenuTemplate: TemplateRef<any>;

    @Input()
    public toolbarTemplate: TemplateRef<any>;

    @Input()
    chartTemplate: TemplateRef<any>;

    private _wrapper: AngularRenderer = null;

    constructor(private renderer: Renderer2,
        private _elRef: ViewContainerRef,
        private ngZone: NgZone,
        private injector: Injector,
        private componentFactoryResolver: ComponentFactoryResolver) {
        super();

        this._zoneRunner = (act: () => void) => ngZone.run(act);
        this.container = renderer.createElement("div");
        renderer.appendChild(_elRef.element.nativeElement, this.container);
        renderer.setStyle(this.container, "display", "block");
        renderer.setStyle(this.container, "width", "100%");
        renderer.setStyle(this.container, "height", "100%");
        var root: any;
        root = this.container;
        if (this.container != null) {
            root = this.container;
        }
        var ren: AngularRenderer = new AngularRenderer(
            root, this.renderer, window.document,
            this.ngZone, true,
            DataChartStylingDefaults);
        this._wrapper = ren;
        var chart = this.i;
        this._chart = <FinancialChart>chart;

        if ((<any>chart).xAxis) {
            this.rewrapAxis((<any>chart).xAxis)
        }
        if ((<any>chart).yAxis) {
            this.rewrapAxis((<any>chart).yAxis)
        }
        if ((<any>chart).volumeAxis) {
            this.rewrapAxis((<any>chart).volumeAxis)
        }
        if ((<any>chart).volumeXAxis) {
            this.rewrapAxis((<any>chart).volumeXAxis)
        }
        if ((<any>chart).indicatorAxis) {
            this.rewrapAxis((<any>chart).indicatorAxis)
        }
        if ((<any>chart).indicatorXAxis) {
            this.rewrapAxis((<any>chart).indicatorXAxis)
        }
        if ((<any>chart).zoomSliderAxis) {
            this.rewrapAxis((<any>chart).zoomSliderAxis)
        }
        if ((<any>chart).zoomSliderXAxis) {
            this.rewrapAxis((<any>chart).zoomSliderXAxis)
        }
        chart.provideContainer(ren);
        this.bindData();

        chart.notifyResized();
        ren.addSizeWatcher(() => {
            this._checkToolbarSize();
            this._chart.notifyResized();
        });

        // supports angular themes or custom properties set in CSS 
        this._styling(_elRef.element.nativeElement, this);
    }

    private _checkToolbarSize() {
        if (this._toolbarElement) {
            let start = this._toolbarElement.nativeElement;
            if (start.children.length == 1) {
                start = start.children[0];
            }
            let toolbarRoot: HTMLElement = start.querySelector(".financialChartToolbar");
            let rootRect = toolbarRoot.getBoundingClientRect();

            let hideRemaining = false;
            for (let i = 0; i < toolbarRoot.children.length; i++) {
                let child: Element = toolbarRoot.children[i];

                if (child.nodeType == Node.ELEMENT_NODE) {
                    if (!hideRemaining) {
                        (<HTMLElement>child).style.display = "";
                    }
                    let childRect = child.getBoundingClientRect();

                    if (hideRemaining ||
                        childRect.left + childRect.width >
                        rootRect.left + rootRect.width) {
                        (<HTMLElement>child).style.display = "none";
                        hideRemaining = true;
                    } else {
                        (<HTMLElement>child).style.display = "";
                    }
                }
            }
        }
    }

    ngOnDestroy() {
        this._chart.destroy();
        this._wrapper.destroy();
    }

    public onDocumentClick(ev: Event) {
        this._chart.onDocumentClick(ev);
    }

    private rewrapAxis(axis: any) {
        let axisName = axis.$type.name;
        let componentName = "Igx" + axisName + "Component";
        if (TypeRegistrar.isRegistered(componentName)) {
            let x = TypeRegistrar.create(componentName);
            (<any>x)._implementation = axis;
            axis.externalObject = x;
        }
        else {
            throw new Error("Axis type not loaded: " + componentName);
        }
    }

    protected createImplementation() {
        return new FinancialChart();
    }

    public get i(): FinancialChart {
        return this._implementation;
    }

    protected createSeriesComponent(type: string): any {
        if (TypeRegistrar.isRegistered(type)) {
            let s = TypeRegistrar.create(type);
            (<any>s).owner = this;
            return s;
        } else {
            //we shouldn't get here, hopefully.
            throw Error("series type not loaded: " + type);
        }
    }

    protected createIndicator(typeName: string) {
        return this.createSeriesComponent("Igx" + typeName + "Component");
    }

    protected createOverlay(typeName: string) {
        return this.createSeriesComponent("Igx" + typeName + "Component");
    }

    protected createSeries(type: DataSeriesType): any {
        switch (type) {
            case DataSeriesType.Area:
                return this.createSeriesComponent('IgxAreaSeriesComponent');
            case DataSeriesType.Column:
                return this.createSeriesComponent('IgxColumnSeriesComponent');
            case DataSeriesType.Line:
                return this.createSeriesComponent('IgxLineSeriesComponent');
            case DataSeriesType.FinancialPrice:
                return this.createSeriesComponent('IgxFinancialPriceSeriesComponent');
            case DataSeriesType.ItemToolTipLayer:
                return this.createSeriesComponent('IgxItemToolTipLayerComponent');
            case DataSeriesType.CategoryToolTipLayer:
                return this.createSeriesComponent('IgxCategoryToolTipLayerComponent');
            case DataSeriesType.CrosshairLayer:
                return this.createSeriesComponent('IgxCrosshairLayerComponent');
            case DataSeriesType.FinalValueLayer:
                return this.createSeriesComponent('IgxFinalValueLayerComponent');
            case DataSeriesType.CalloutLayer:
                return this.createSeriesComponent('IgxCalloutLayerComponent');

            default:
                return this.createSeriesComponent('IgxColumnSeriesComponent');
        }
    }

    protected createXAxis(type: FinancialChartXAxisMode): any {
        switch (type) {
            case FinancialChartXAxisMode.Ordinal:
                if (TypeRegistrar.isRegistered("IgxOrdinalTimeXAxisComponent")) {
                    return TypeRegistrar.create("IgxOrdinalTimeXAxisComponent");
                }
                else if (TypeRegistrar.isRegistered("IgxTimeXAxisComponent")) {
                    return TypeRegistrar.create("IgxTimeXAxisComponent");
                }
                else {
                    throw new Error("not valid axes components loaded");
                }
            case FinancialChartXAxisMode.Time:
                if (TypeRegistrar.isRegistered("IgxTimeXAxisComponent")) {
                    return TypeRegistrar.create("IgxTimeXAxisComponent");
                }
                else if (TypeRegistrar.isRegistered("IgxOrdinalTimeXAxisComponent")) {
                    return TypeRegistrar.create("IgxOrdinalTimeXAxisComponent");
                }
                else {
                    throw new Error("not valid axes components loaded");
                }
        }
    }

    protected createYAxis(type: FinancialChartYAxisMode): any {
        switch (type) {
            case FinancialChartYAxisMode.Numeric:
                if (TypeRegistrar.isRegistered("IgxNumericYAxisComponent")) {
                    return TypeRegistrar.create("IgxNumericYAxisComponent");
                }
                else if (TypeRegistrar.isRegistered("IgxPercentChangeYAxisComponent")) {
                    return TypeRegistrar.create("IgxPercentChangeYAxisComponent");
                }
                else {
                    throw new Error("not valid axes components loaded");
                }
            case FinancialChartYAxisMode.PercentChange:
                if (TypeRegistrar.isRegistered("IgxPercentChangeYAxisComponent")) {
                    return TypeRegistrar.create("IgxPercentChangeYAxisComponent");
                }
                else if (TypeRegistrar.isRegistered("IgxNumericYAxisComponent")) {
                    return TypeRegistrar.create("IgxNumericYAxisComponent");
                }
                else {
                    throw new Error("not valid axes components loaded");
                }
        }
    }

    protected createTimeAxisBreakCollection(): any {
        return TypeRegistrar.isRegistered("IgxTimeAxisBreakCollection") ? TypeRegistrar.create("IgxTimeAxisBreakCollection") : null;
    }

	private _chart: FinancialChart;

    private _dataSource: Array<any> = null;
    @Input()
	set dataSource(value: Array<any>) {
		this._dataSource = value;
		this.bindData();
	}
	get dataSource(): Array<any> {
		return this._dataSource;
	}

	bindData() {
        if (this._chart != null && this._chart !== undefined) {
            this._chart.itemsSource = <IEnumerable><any>this._dataSource;
        }
	}

	private _defaultTooltips: ComponentRef<any> = null;
	ngAfterViewInit() {
		if (TypeRegistrar.isRegistered("IgxDataChartDefaultTooltipsComponent")) {
			let c = TypeRegistrar.get("IgxDataChartDefaultTooltipsComponent");
			let cf = this.componentFactoryResolver.resolveComponentFactory(c);
			//let cr = cf.create(this.injector);
			let cr = this._dynamicContent.createComponent(cf);
			this._defaultTooltips = cr;
			(<any>cr.instance).onContentReady.subscribe(() => {
				this._onDefaultTooltipsReady(cr);
			});
			this.container.appendChild(cr.location.nativeElement);
		}
		const watermark = this.renderer.createElement("igc-trial-watermark")
		watermark.setAttribute("theming", true);
        let context = this._chart.getContext();

        let toolbarContext = context.vm.toolbar;
        toolbarContext.vm.financialChartIndicatorMenu.template = this.indicatorMenuTemplate ? this.indicatorMenuTemplate : this._defaultTemplates.financialChartIndicatorMenuTemplate;
        toolbarContext.vm.financialChartIndicatorMenu.vm.notifyChanged = () => { toolbarArea.context = toolbarContext; };
        toolbarContext.vm.financialChartTypePicker.template = this.chartTypePickerTemplate ? this.chartTypePickerTemplate : this._defaultTemplates.financialChartTypePickerTemplate;
        toolbarContext.vm.financialChartTypePicker.vm.notifyChanged = () => { toolbarArea.context = toolbarContext; };
        toolbarContext.vm.financialChartRangeSelector.template = this.rangeSelectorTemplate ? this.rangeSelectorTemplate : this._defaultTemplates.financialChartRangeSelectorTemplate;
        toolbarContext.vm.financialChartRangeSelector.vm.notifyChanged = () => { toolbarArea.context = toolbarContext; };
        toolbarContext.template = this.toolbarTemplate ? this.toolbarTemplate : this._defaultTemplates.financialChartToolbarTemplate;

		let toolContainer = toolbarContext.container.rootWrapper.getNativeElement();
		let toolbarArea = this._templates.toArray()[0];
		let mainArea = this._templates.toArray()[1];
        toolbarArea.context = toolbarContext;
        toolbarArea.template = toolbarContext.template;
		let ele = this._toolbarElement.nativeElement;
        ele.style.width = "100%";
		ele.style.height = "100%";
		if (ele.parentElement != null) {
			ele.parentElement.removeChild(ele);
		}
		toolContainer.appendChild(ele);
	    this.renderer.setStyle(ele, "display", "")

        let legendContainer = context.legendContainer.rootWrapper.getNativeElement();

		let mainContainer = context.container.rootWrapper.getNativeElement();
        let indicatorContainer = context.indicatorsContainer.rootWrapper.getNativeElement();
        let volumeContainer = context.volumeContainer.rootWrapper.getNativeElement();
        let zoomSliderContainer = context.zoomContainer.rootWrapper.getNativeElement();
		
		var main = mainArea.viewContainer.element.nativeElement;
		
		let templateMain = main.querySelector(".financialChartPrice");
        let templateToolbar = main.querySelector(".financialChartToolbar");
        let templateLegend = main.querySelector(".financialChartLegend");
        let templateIndicator = main.querySelector(".financialChartIndicators");
        let templateVolume = main.querySelector(".financialChartVolume");
		let templateZoomSlider = main.querySelector(".financialChartZoomSlider");
		
		let grid = main.querySelector(".financialChartMainGrid");
		let gridWrapper = new AngularWrapper(grid, this.renderer, this.ngZone);
		mainContainer.appendChild(watermark)
		templateMain.appendChild(mainContainer);
        templateToolbar.appendChild(toolContainer);
        templateLegend.appendChild(legendContainer);
        templateIndicator.appendChild(indicatorContainer);
        templateVolume.appendChild(volumeContainer);
		templateZoomSlider.appendChild(zoomSliderContainer);
		
		this._mainElement.nativeElement.parentElement.removeChild(this._mainElement.nativeElement);
		this.container.appendChild(this._mainElement.nativeElement);
		this._chart.provideGrid(gridWrapper);

		this._checkToolbarSize();


	}

    private _createZoomSlider(hostEle: Element, onReady: (w) => void) {
        if (!TypeRegistrar.isRegistered("IgxZoomSliderComponent")) {
            //shouldn't happen.
			throw new Error("zoom slider component isn't loaded");
		}
        let t = TypeRegistrar.get("IgxZoomSliderComponent");
        let cf = this.componentFactoryResolver.resolveComponentFactory(t);
        let cr = this._dynamicContent.createComponent(cf);
		let ele: HTMLElement = cr.location.nativeElement;
		ele.style.width = "100%";
		ele.style.height = "100%";
        (<any>cr.instance).width = "100%";
        (<any>cr.instance).height = "100%";
    
        if (ele.parentElement !== null) {
            ele.parentElement.removeChild(ele);
        }
        hostEle.appendChild(ele);

        onReady(cr.instance);
    }

    private createTooltip(): ComponentRef<any> {
		if (!TypeRegistrar.isRegistered("IgxTooltipContainerComponent")) {
			return null;
		}
		let t = TypeRegistrar.get("IgxTooltipContainerComponent");
		let cf = this.componentFactoryResolver.resolveComponentFactory(t);
		//let cr = cf.create(this.injector);
		let cr = this._dynamicContent.createComponent(cf);
		let ele: Element = cr.location.nativeElement;
		let self = this;

        (<any>ele).updateToolTip = function (c, isSubContent?: boolean) {
            if (c.externalObject) {
                c = c.externalObject;
            } else {
                let ext = new IgxDataContext();
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
		(<any>ele).hideToolTip = function () {
			(<any>ele).style.display = "none"
		};
		(<any>ele).style.display = "none"

		return cr;
	}

    private _ensureTooltipCreated(series: any) {
        (<any>series)._ensureTooltipCreated(
			() => this.createTooltip(),
			(ele) => {
				let wrapper = new AngularWrapper(
					ele,
					this.renderer,
					this.ngZone
				);
				(<any>wrapper).updateToolTip = (<any>ele).updateToolTip;
				(<any>wrapper).hideToolTip = (<any>ele).hideToolTip;
				return wrapper;
			});
    }

    // private _createXAxis(): any {
    //     let x = new IgxCategoryXAxisComponent();
    //     return x.i;
    // }

    // private _createYAxis(): any {
    //     let y = new IgxNumericYAxisComponent();
    //     return y.i;
    // }
    
    private _ensureDefaultTooltip(series: any) {
        if (this._defaultTooltips == null) {
			return;
		}
        this._defaultTooltips.instance["ensureDefaultTooltip"](series);
	}

    private _onDefaultTooltipsReady(cr: ComponentRef<any>) {
		if (this.i.dataChart) {
			var currSeries = this.i.dataChart.series;
			for (var i = 0; i < currSeries.count; i++) {
				if ((<any>currSeries.item(i)).externalObject.showDefaultTooltip) {
					this._ensureDefaultTooltip((<any>currSeries.item(i)).externalObject);
				}
			}
		}
	}

    protected onImplementationCreated() {
        super.onImplementationCreated();
    }

    private _xAxisBreaks: IgCollection<any, any> = null;

	/**
	 * TimeAxisBreaks to apply to this chart when in time axis mode, representing spans of time to omit, such as weekends.
	*/
    get xAxisBreaks(): IgCollection<any, any> {
        if (this._xAxisBreaks === null) {
            if (!TypeRegistrar.isRegistered("IgxTimeAxisBreakCollection")) {
                return null;
            }

            let coll = TypeRegistrar.create("IgxTimeAxisBreakCollection");
            let innerColl = this.i.xAxisBreaks;
            if (!innerColl) {
                innerColl = TypeRegistrar.create("TimeAxisBreakCollection");
            }
            this._xAxisBreaks = (<any>coll)._fromInner(innerColl);

        }
        return this._xAxisBreaks;
    }
    @Input()
    set xAxisBreaks(v: IgCollection<any, any>) {
        if (this._xAxisBreaks !== null) {
            (<any>this._xAxisBreaks)._setSyncTarget(null);
            this._xAxisBreaks = null;
        }

        if (!TypeRegistrar.isRegistered("IgxTimeAxisBreakCollection")) {
            return;
        }
        let coll = TypeRegistrar.create("IgxTimeAxisBreakCollection");
        let t = TypeRegistrar.get("TimeAxisBreak");
        this._xAxisBreaks = (<any>coll)._fromOuter(v);
        let syncColl = new SyncableObservableCollection$1<any>((t as any).$type);
        let innerColl = this.i.xAxisBreaks;
        if (!innerColl) {
            innerColl = TypeRegistrar.create("TimeAxisBreakCollection");
        }
        (<any>syncColl)._inner = innerColl;
        syncColl.clear();
        (<any>this._xAxisBreaks)._setSyncTarget(syncColl);

    }

		get leftMargin() : number {
		return (this.i.leftMargin as number);
	}
	@Input()
	set leftMargin(v: number) {
		this.i.leftMargin = +v;
	}
	get isHorizontalZoomEnabled() : boolean {
		return (this.i.isHorizontalZoomEnabled as boolean);
	}
	@Input()
	set isHorizontalZoomEnabled(v: boolean) {
		this.i.isHorizontalZoomEnabled = ensureBool(v);
	}
	get toolbarHeight() : number {
		return (this.i.toolbarHeight as number);
	}
	@Input()
	set toolbarHeight(v: number) {
		this.i.toolbarHeight = +v;
	}
	/**
	 * Gets or sets whether the Y-axis should use a logarithmic scale instead of a linear one.
	 * Since log(-1) is imaginary and log(0) is undefined, it is recommended to enable this property only when the Y-axis minimum is greater than zero.
	*/
	get yAxisIsLogarithmic() : boolean {
		return (this.i.yAxisIsLogarithmic as boolean);
	}
	@Input()
	set yAxisIsLogarithmic(v: boolean) {
		this.i.yAxisIsLogarithmic = ensureBool(v);
	}
	/**
	 * Gets or sets the base value to use in the log function when mapping the position of data items along the Y-axis.
	 * This property is effective only when YAxisIsLogarithmic is true.
	*/
	get yAxisLogarithmBase() : number {
		return (this.i.yAxisLogarithmBase as number);
	}
	@Input()
	set yAxisLogarithmBase(v: number) {
		this.i.yAxisLogarithmBase = +v;
	}
	/**
	 * Gets or sets the distance between each label and grid line along the Y-axis.
	* 
	* The `yAxisInterval` determines how often to show a label, tickmark, and/or gridline along the y-axis.  Set this property to a number less than the numeric range of the y-axis.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     yAxisInterval="10">
	* </igx-financial-chart>
	* ```
	*/
	get yAxisInterval() : number {
		return (this.i.yAxisInterval as number);
	}
	@Input()
	set yAxisInterval(v: number) {
		this.i.yAxisInterval = +v;
	}
	/**
	 * Gets or sets the data value corresponding to the minimum value of the Y-axis.
	* 
	* The `yAxisMinimumValue` determines starting value of labels, tickmarks, and gridlines on the y-axis.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     yAxisMinimumValue="10">
	* </igx-financial-chart>
	* ```
	*/
	get yAxisMinimumValue() : number {
		return (this.i.yAxisMinimumValue as number);
	}
	@Input()
	set yAxisMinimumValue(v: number) {
		this.i.yAxisMinimumValue = +v;
	}
	/**
	 * Gets or sets the data value corresponding to the maximum value of the Y-axis.
	* 
	* The `yAxisMaximumValue` determines ending value of labels, tickmarks, and gridlines on the y-axis.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     yAxisMaximumValue="100">
	* </igx-financial-chart>
	* ```
	*/
	get yAxisMaximumValue() : number {
		return (this.i.yAxisMaximumValue as number);
	}
	@Input()
	set yAxisMaximumValue(v: number) {
		this.i.yAxisMaximumValue = +v;
	}
	/**
	 * Gets or sets the frequency of displayed minor lines along the Y-axis.
	* 
	* The `yAxisMinorInterval` determines how often to show minor gridline along the y-axis.  Set this property to a number less than the `yAxisInterval` and the numeric range of the y-axis.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     yAxisMinorInterval="5">
	* </igx-financial-chart>
	* ```
	*/
	get yAxisMinorInterval() : number {
		return (this.i.yAxisMinorInterval as number);
	}
	@Input()
	set yAxisMinorInterval(v: number) {
		this.i.yAxisMinorInterval = +v;
	}
	/**
	 * Gets the current minimum value for the Y-axis.
	*/
	get yAxisActualMinimum() : number {
		return (this.i.yAxisActualMinimum as number);
	}
	/**
	 * Gets the current maximum value for the Y-axis.
	*/
	get yAxisActualMaximum() : number {
		return (this.i.yAxisActualMaximum as number);
	}
	/**
	 * The type of series to display in the volume pane.
	* 
	* Use the `volumeType` property to set a type of all series that will be rendered in the volume pane, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     volumeType="Column">
	* </igx-financial-chart>
	* ```
	*/
	get volumeType() : FinancialChartVolumeType {
		return this.i.volumeType;
	}
	@Input()
	set volumeType(v: FinancialChartVolumeType) {
		this.i.volumeType = ensureEnum<FinancialChartVolumeType>(FinancialChartVolumeType_$type, v);
	}
	/**
	 * The scaling mode of the X-axis.
	* 
	* Use the `xAxisMode` property to plot data items without any breaks in data range (Ordinal mode) or with breaks in data range (Time mode) such as weekends/holidays. Note that the Ordinal axis mode is less expensive to use in the financial chart than the Time axis mode.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     xAxisMode="Time">
	* </igx-financial-chart>
	* ```
	*/
	get xAxisMode() : FinancialChartXAxisMode {
		return this.i.xAxisMode;
	}
	@Input()
	set xAxisMode(v: FinancialChartXAxisMode) {
		this.i.xAxisMode = ensureEnum<FinancialChartXAxisMode>(FinancialChartXAxisMode_$type, v);
	}
	/**
	 * The scaling mode of the Y-axis.
	* 
	* Use the `yAxisMode` property to plot data items using their actual values (Numeric) or using percent changes from the first data point (PercentChange), e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     yAxisMode="PercentChange">
	* </igx-financial-chart>
	* ```
	*/
	get yAxisMode() : FinancialChartYAxisMode {
		return this.i.yAxisMode;
	}
	@Input()
	set yAxisMode(v: FinancialChartYAxisMode) {
		this.i.yAxisMode = ensureEnum<FinancialChartYAxisMode>(FinancialChartYAxisMode_$type, v);
	}
	/**
	 * A boolean property controlling the visibility of the toolbar.
	*/
	get isToolbarVisible() : boolean {
		return (this.i.isToolbarVisible as boolean);
	}
	@Input()
	set isToolbarVisible(v: boolean) {
		this.i.isToolbarVisible = ensureBool(v);
	}
	/**
	 * The type of price series to display in the main chart.
	* 
	* Use the `chartType` property to set a type of series that will be used to render prices in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     chartType="Candle">
	* </igx-financial-chart>
	* ```
	*/
	get chartType() : FinancialChartType {
		return this.i.chartType;
	}
	@Input()
	set chartType(v: FinancialChartType) {
		this.i.chartType = ensureEnum<FinancialChartType>(FinancialChartType_$type, v);
	}
	/**
	 * Gets or sets Horizontal alignment of Y-axis labels.
	*/
	get yAxisLabelHorizontalAlignment() : HorizontalAlignment {
		return this.i.yAxisLabelHorizontalAlignment;
	}
	@Input()
	set yAxisLabelHorizontalAlignment(v: HorizontalAlignment) {
		this.i.yAxisLabelHorizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * A boolean indicating whether the chart should automatically zoom in vertically on the currently visible range of data.
	 * When this property is set to true, panning and zooming along the X-axis will result in a corresponding zoom on the Y-axis, so that the visible range of data fills the zoom window as fully as possible.
	*/
	get isWindowSyncedToVisibleRange() : boolean {
		return (this.i.isWindowSyncedToVisibleRange as boolean);
	}
	@Input()
	set isWindowSyncedToVisibleRange(v: boolean) {
		this.i.isWindowSyncedToVisibleRange = ensureBool(v);
	}
	private _indicatorTypes: IgxFinancialIndicatorTypeCollection = null;
	                                
	/**
	 * A collection indicating what financial indicator types to display on the Financial Chart.
	* 
	* Use the `indicatorTypes` property to set types of indicators that will be rendered below the price pane in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="MoneyFlowIndex, AverageTrueRange">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorTypes() : IgxFinancialIndicatorTypeCollection {
	                                        if (this._indicatorTypes === null) {
	                                            let coll = new IgxFinancialIndicatorTypeCollection();
	                                            let innerColl = this.i.indicatorTypes;
			if (!innerColl) {
	                                            	innerColl = new FinancialIndicatorTypeCollection_internal(0);
			}
	                                            this._indicatorTypes = (coll as any)._fromInner(innerColl);
	                                            this.i.indicatorTypes = innerColl;
	
	                                        }
		return this._indicatorTypes;
	}
	@Input()
	set indicatorTypes(v: IgxFinancialIndicatorTypeCollection) {
	                                        if (this._indicatorTypes !== null) {
	                                            (this._indicatorTypes as any)._setSyncTarget(null);
	                                            this._indicatorTypes = null;
	                                        }
	                                        let coll = new IgxFinancialIndicatorTypeCollection();
	                                        this._indicatorTypes = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<FinancialIndicatorType>(FinancialIndicatorType_$type);
	                                        let innerColl = this.i.indicatorTypes;
		if (!innerColl) {
	                                        	innerColl = new FinancialIndicatorTypeCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._indicatorTypes as any)._setSyncTarget(syncColl);
	                                        this.i.indicatorTypes = innerColl;
	
	}
	private _overlayTypes: IgxFinancialOverlayTypeCollection = null;
	                                
	/**
	 * A collection indicating what financial overlay types to display on the Financial Chart.
	* 
	* Use the `overlayTypes` property to set types of overlays that will be rendered behind price series in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     overlayTypes="BollingerBands">
	* </igx-financial-chart>
	* ```
	*/
	get overlayTypes() : IgxFinancialOverlayTypeCollection {
	                                        if (this._overlayTypes === null) {
	                                            let coll = new IgxFinancialOverlayTypeCollection();
	                                            let innerColl = this.i.overlayTypes;
			if (!innerColl) {
	                                            	innerColl = new FinancialOverlayTypeCollection_internal(0);
			}
	                                            this._overlayTypes = (coll as any)._fromInner(innerColl);
	                                            this.i.overlayTypes = innerColl;
	
	                                        }
		return this._overlayTypes;
	}
	@Input()
	set overlayTypes(v: IgxFinancialOverlayTypeCollection) {
	                                        if (this._overlayTypes !== null) {
	                                            (this._overlayTypes as any)._setSyncTarget(null);
	                                            this._overlayTypes = null;
	                                        }
	                                        let coll = new IgxFinancialOverlayTypeCollection();
	                                        this._overlayTypes = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<FinancialOverlayType>(FinancialOverlayType_$type);
	                                        let innerColl = this.i.overlayTypes;
		if (!innerColl) {
	                                        	innerColl = new FinancialOverlayTypeCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._overlayTypes as any)._setSyncTarget(syncColl);
	                                        this.i.overlayTypes = innerColl;
	
	}
	/**
	 * Gets or sets whether the large numbers on the Y-axis labels are abbreviated.
	*/
	get yAxisAbbreviateLargeNumbers() : boolean {
		return (this.i.yAxisAbbreviateLargeNumbers as boolean);
	}
	@Input()
	set yAxisAbbreviateLargeNumbers(v: boolean) {
		this.i.yAxisAbbreviateLargeNumbers = ensureBool(v);
	}
	/**
	 * Gets or sets the rendering resolution for all series in this chart.
	 * Where n = Resolution, for every n horizontal pixels, combine all items into a single datapoint.  When Resolution = 0, all datapoints will be rendered as graphical objects.  Charts with a higher resolution will have faster performance.
	*/
	get resolution() : number {
		return (this.i.resolution as number);
	}
	@Input()
	set resolution(v: number) {
		this.i.resolution = +v;
	}
	/**
	 * Gets or sets the location of Y-axis labels, relative to the plot area.
	*/
	get yAxisLabelLocation() : AxisLabelsLocation {
		return this.i.yAxisLabelLocation;
	}
	@Input()
	set yAxisLabelLocation(v: AxisLabelsLocation) {
		this.i.yAxisLabelLocation = ensureEnum<AxisLabelsLocation>(AxisLabelsLocation_$type, v);
	}
	/**
	 * Gets or sets type of series to display in the zoom slider pane.
	* 
	* Use the `zoomSliderType` property to set a type of all series that will be rendered in the zoom pane, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     zoomSliderType="Candle">
	* </igx-financial-chart>
	* ```
	*/
	get zoomSliderType() : FinancialChartZoomSliderType {
		return this.i.zoomSliderType;
	}
	@Input()
	set zoomSliderType(v: FinancialChartZoomSliderType) {
		this.i.zoomSliderType = ensureEnum<FinancialChartZoomSliderType>(FinancialChartZoomSliderType_$type, v);
	}
	/**
	 * Gets or sets the palette used for coloring negative items of Waterfall chart type.
	* 
	* Use the `negativeBrushes` property to set a collection of brushes that will be used to render fill area of negative elements in the price pane, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     negativeBrushes="Red, Orange">
	* </igx-financial-chart>
	* ```
	*/
	get negativeBrushes() : string[] {
		return fromBrushCollection(this.i.negativeBrushes);
	}
	@Input()
	set negativeBrushes(v: string[]) {
		this.i.negativeBrushes = toBrushCollection(v);
	}
	/**
	 * Brushes to use for drawing negative elements, when using a chart type with contextual coloring, such as Waterfall.
	* 
	* Use the `negativeOutlines` property to set a collection of brushes that will be used to render outline of negative elements in the price pane, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     negativeOutlines="Red, Orange">
	* </igx-financial-chart>
	* ```
	*/
	get negativeOutlines() : string[] {
		return fromBrushCollection(this.i.negativeOutlines);
	}
	@Input()
	set negativeOutlines(v: string[]) {
		this.i.negativeOutlines = toBrushCollection(v);
	}
	/**
	 * Brushes to use for filling financial overlays.
	* 
	* Use the `overlayBrushes` property to set a collection of brushes that will be used to render fill area of overlays in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     overlayTypes="BollingerBands"
	*     overlayBrushes="Green">
	* </igx-financial-chart>
	* ```
	*/
	get overlayBrushes() : string[] {
		return fromBrushCollection(this.i.overlayBrushes);
	}
	@Input()
	set overlayBrushes(v: string[]) {
		this.i.overlayBrushes = toBrushCollection(v);
	}
	/**
	 * Brushes to use for outlining financial overlays.
	* 
	* Use the `overlayOutlines` property to set a collection of brushes that will be used to render outlines of overlays in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     overlayTypes="BollingerBands"
	*     overlayOutlines="Green">
	* </igx-financial-chart>
	* ```
	*/
	get overlayOutlines() : string[] {
		return fromBrushCollection(this.i.overlayOutlines);
	}
	@Input()
	set overlayOutlines(v: string[]) {
		this.i.overlayOutlines = toBrushCollection(v);
	}
	/**
	 * Brushes to use for outlining volume series in the volume pane.
	* 
	* Use the `volumeOutlines` property to set a collection of brushes that will be used to render outline of multiple series in the volume pane of the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     volumeOutlines="Green, Blue">
	* </igx-financial-chart>
	* ```
	*/
	get volumeOutlines() : string[] {
		return fromBrushCollection(this.i.volumeOutlines);
	}
	@Input()
	set volumeOutlines(v: string[]) {
		this.i.volumeOutlines = toBrushCollection(v);
	}
	/**
	 * Brushes to use for filling volume series in the volume pane.
	* 
	* Use the `volumeBrushes` property to set a collection of brushes that will be used to render fill area of multiple series in the volume pane of the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     volumeBrushes="Green, Blue">
	* </igx-financial-chart>
	* ```
	*/
	get volumeBrushes() : string[] {
		return fromBrushCollection(this.i.volumeBrushes);
	}
	@Input()
	set volumeBrushes(v: string[]) {
		this.i.volumeBrushes = toBrushCollection(v);
	}
	/**
	 * Brushes to use for negative elements in financial indicators.
	* 
	* Use the `indicatorNegativeBrushes` property to set a collection of brushes that will be used to render negative elements of indicators in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="MoneyFlowIndex, AverageTrueRange"
	*     indicatorNegativeBrushes="Red, Orange">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorNegativeBrushes() : string[] {
		return fromBrushCollection(this.i.indicatorNegativeBrushes);
	}
	@Input()
	set indicatorNegativeBrushes(v: string[]) {
		this.i.indicatorNegativeBrushes = toBrushCollection(v);
	}
	/**
	 * Brushes to use for financial indicators.
	* 
	* Use the `indicatorBrushes` property to set a collection of brushes that will be used to render positive elements of indicators in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="MoneyFlowIndex, AverageTrueRange"
	*     indicatorBrushes="Green, Blue">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorBrushes() : string[] {
		return fromBrushCollection(this.i.indicatorBrushes);
	}
	@Input()
	set indicatorBrushes(v: string[]) {
		this.i.indicatorBrushes = toBrushCollection(v);
	}
	/**
	 * The outline thickness of volume series in the volume pane.
	* 
	* Use the `volumeThickness` property to set a number that will be used to render outline thickness of all series in the volume pane, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     volumeThickness="2.5">
	* </igx-financial-chart>
	* ```
	*/
	get volumeThickness() : number {
		return (this.i.volumeThickness as number);
	}
	@Input()
	set volumeThickness(v: number) {
		this.i.volumeThickness = +v;
	}
	/**
	 * The outline thickness of financial overlays.
	* 
	* Use the `overlayThickness` property to set a number that will be used to render outline thickness of all overlays in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     overlayTypes="BollingerBands"
	*     overlayThickness="2.5">
	* </igx-financial-chart>
	* ```
	*/
	get overlayThickness() : number {
		return (this.i.overlayThickness as number);
	}
	@Input()
	set overlayThickness(v: number) {
		this.i.overlayThickness = +v;
	}
	/**
	 * The outline or stroke thickness of financial indicators.
	* 
	* Use the `indicatorThickness` property to set a number that will be used to render outline thickness of all indicators in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="MoneyFlowIndex, AverageTrueRange"
	*     indicatorThickness="2.5">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorThickness() : number {
		return (this.i.indicatorThickness as number);
	}
	@Input()
	set indicatorThickness(v: number) {
		this.i.indicatorThickness = +v;
	}
	private _indicatorDisplayTypes: IgxIndicatorDisplayTypeCollection = null;
	                                
	/**
	 * The display types of financial indicators.
	* 
	* Use the `indicatorDisplayTypes` property to set display types that will determine whether render all indicators as area, lines, or columns in the Financial Chart control, e.g.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="MoneyFlowIndex, AverageTrueRange"
	*     indicatorDisplayTypes="Line, Line">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorDisplayTypes() : IgxIndicatorDisplayTypeCollection {
	                                        if (this._indicatorDisplayTypes === null) {
	                                            let coll = new IgxIndicatorDisplayTypeCollection();
	                                            let innerColl = this.i.indicatorDisplayTypes;
			if (!innerColl) {
	                                            	innerColl = new IndicatorDisplayTypeCollection_internal();
			}
	                                            this._indicatorDisplayTypes = (coll as any)._fromInner(innerColl);
	                                            this.i.indicatorDisplayTypes = innerColl;
	
	                                        }
		return this._indicatorDisplayTypes;
	}
	@Input()
	set indicatorDisplayTypes(v: IgxIndicatorDisplayTypeCollection) {
	                                        if (this._indicatorDisplayTypes !== null) {
	                                            (this._indicatorDisplayTypes as any)._setSyncTarget(null);
	                                            this._indicatorDisplayTypes = null;
	                                        }
	                                        let coll = new IgxIndicatorDisplayTypeCollection();
	                                        this._indicatorDisplayTypes = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<IndicatorDisplayType>(IndicatorDisplayType_$type);
	                                        let innerColl = this.i.indicatorDisplayTypes;
		if (!innerColl) {
	                                        	innerColl = new IndicatorDisplayTypeCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._indicatorDisplayTypes as any)._setSyncTarget(syncColl);
	                                        this.i.indicatorDisplayTypes = innerColl;
	
	}
	/**
	 * The period of financial indicators, where applicable.
	* 
	* The `indicatorPeriod` property applies to only the `BollingerBands` overlay as well as to these indicators types: `AverageDirectionalIndex`, `AverageTrueRange`, `BollingerBandWidth`, `ChaikinVolatility`, `CommodityChannelIndex`, `DetrendedPriceOscillator`, `FastStochasticOscillator`, `ForceIndex`, `FullStochasticOscillator`, `MoneyFlowIndex`, `IgxPriceChannelOverlayComponent`, `RateOfChangeAndMomentum`, `RelativeStrengthIndex`, `SlowStochasticOscillator`, `StandardDeviation`, `StochRSI`, `TRIX`, `WilliamsPercentR`
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="AverageTrueRange"
	*     indicatorPeriod="8">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorPeriod() : number {
		return (this.i.indicatorPeriod as number);
	}
	@Input()
	set indicatorPeriod(v: number) {
		this.i.indicatorPeriod = +v;
	}
	/**
	 * The multiplier of financial indicators, where applicable.
	* 
	* The `indicatorMultiplier` property applies to only to BollingerBandWidth indicator type.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="BollingerBandWidth"
	*     indicatorMultiplier="8">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorMultiplier() : number {
		return (this.i.indicatorMultiplier as number);
	}
	@Input()
	set indicatorMultiplier(v: number) {
		this.i.indicatorMultiplier = +v;
	}
	/**
	 * The smoothing period of financial indicators, where applicable.
	* 
	* The `indicatorSmoothingPeriod` property applies to only to `FullStochasticOscillator` indicator type.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="FullStochasticOscillator"
	*     indicatorSmoothingPeriod="8">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorSmoothingPeriod() : number {
		return (this.i.indicatorSmoothingPeriod as number);
	}
	@Input()
	set indicatorSmoothingPeriod(v: number) {
		this.i.indicatorSmoothingPeriod = +v;
	}
	/**
	 * The short period of financial indicators, where applicable.
	* 
	* The `indicatorShortPeriod` property applies only to these indicator types:
	* 
	* -   AbsoluteVolumeOscillator,
	* -   ChaikinOscillator,
	* -   MovingAverageConvergenceDivergence,
	* -   PercentagePriceOscillator,
	* -   PercentageVolumeOscillator,
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="ChaikinOscillator"
	*     indicatorShortPeriod="8">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorShortPeriod() : number {
		return (this.i.indicatorShortPeriod as number);
	}
	@Input()
	set indicatorShortPeriod(v: number) {
		this.i.indicatorShortPeriod = +v;
	}
	/**
	 * The long period of financial indicators, where applicable.
	* 
	* The `indicatorLongPeriod` property applies only to these indicator types:
	* 
	* -   AbsoluteVolumeOscillator,
	* -   ChaikinOscillator,
	* -   MovingAverageConvergenceDivergence,
	* -   PercentagePriceOscillator,
	* -   PercentageVolumeOscillator,
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="ChaikinOscillator"
	*     indicatorLongPeriod="8">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorLongPeriod() : number {
		return (this.i.indicatorLongPeriod as number);
	}
	@Input()
	set indicatorLongPeriod(v: number) {
		this.i.indicatorLongPeriod = +v;
	}
	/**
	 * The signal period of financial indicators, where applicable.
	* 
	* The `indicatorSignalPeriod` property applies to only to MovingAverageConvergenceDivergence indicator type.
	* 
	* ```html
	* <igx-financial-chart
	*     [dataSource]="data"
	*     indicatorTypes="MovingAverageConvergenceDivergence"
	*     indicatorSignalPeriod="8">
	* </igx-financial-chart>
	* ```
	*/
	get indicatorSignalPeriod() : number {
		return (this.i.indicatorSignalPeriod as number);
	}
	@Input()
	set indicatorSignalPeriod(v: number) {
		this.i.indicatorSignalPeriod = +v;
	}
	private _rangeSelectorOptions: IgxFinancialChartRangeSelectorOptionCollection = null;
	                                
	/**
	 * A FinancialChartRangeSelectorOptionCollection containing the available range selector options on the toolbar.
	*/
	get rangeSelectorOptions() : IgxFinancialChartRangeSelectorOptionCollection {
	                                        if (this._rangeSelectorOptions === null) {
	                                            let coll = new IgxFinancialChartRangeSelectorOptionCollection();
	                                            let innerColl = this.i.rangeSelectorOptions;
			if (!innerColl) {
	                                            	innerColl = new FinancialChartRangeSelectorOptionCollection_internal(0);
			}
	                                            this._rangeSelectorOptions = (coll as any)._fromInner(innerColl);
	                                            this.i.rangeSelectorOptions = innerColl;
	
	                                        }
		return this._rangeSelectorOptions;
	}
	@Input()
	set rangeSelectorOptions(v: IgxFinancialChartRangeSelectorOptionCollection) {
	                                        if (this._rangeSelectorOptions !== null) {
	                                            (this._rangeSelectorOptions as any)._setSyncTarget(null);
	                                            this._rangeSelectorOptions = null;
	                                        }
	                                        let coll = new IgxFinancialChartRangeSelectorOptionCollection();
	                                        this._rangeSelectorOptions = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<FinancialChartRangeSelectorOption>(FinancialChartRangeSelectorOption_$type);
	                                        let innerColl = this.i.rangeSelectorOptions;
		if (!innerColl) {
	                                        	innerColl = new FinancialChartRangeSelectorOptionCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._rangeSelectorOptions as any)._setSyncTarget(syncColl);
	                                        this.i.rangeSelectorOptions = innerColl;
	
	}
	private _customIndicatorNames: IgxCustomIndicatorNameCollection = null;
	                                
	/**
	 * The names of custom indicators to add to the chart.
	 * When CustomIndicatorNames is set, the ApplyCustomIndicators event will be raised for each custom indicator name.
	*/
	get customIndicatorNames() : IgxCustomIndicatorNameCollection {
	                                        if (this._customIndicatorNames === null) {
	                                            let coll = new IgxCustomIndicatorNameCollection();
	                                            let innerColl = this.i.customIndicatorNames;
			if (!innerColl) {
	                                            	innerColl = new CustomIndicatorNameCollection_internal(0);
			}
	                                            this._customIndicatorNames = (coll as any)._fromInner(innerColl);
	                                            this.i.customIndicatorNames = innerColl;
	
	                                        }
		return this._customIndicatorNames;
	}
	@Input()
	set customIndicatorNames(v: IgxCustomIndicatorNameCollection) {
	                                        if (this._customIndicatorNames !== null) {
	                                            (this._customIndicatorNames as any)._setSyncTarget(null);
	                                            this._customIndicatorNames = null;
	                                        }
	                                        let coll = new IgxCustomIndicatorNameCollection();
	                                        this._customIndicatorNames = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<String>(String_$type);
	                                        let innerColl = this.i.customIndicatorNames;
		if (!innerColl) {
	                                        	innerColl = new CustomIndicatorNameCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._customIndicatorNames as any)._setSyncTarget(syncColl);
	                                        this.i.customIndicatorNames = innerColl;
	
	}
	get isVerticalZoomEnabled() : boolean {
		return (this.i.isVerticalZoomEnabled as boolean);
	}
	@Input()
	set isVerticalZoomEnabled(v: boolean) {
		this.i.isVerticalZoomEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets stroke brush of major gridlines on x-axis of the zoom slider pane
	*/
	get zoomSliderXAxisMajorStroke() : string {
		return brushToString(this.i.zoomSliderXAxisMajorStroke);
	}
	@Input()
	set zoomSliderXAxisMajorStroke(v: string) {
		this.i.zoomSliderXAxisMajorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets thickness of major gridlines on x-axis of the zoom slider pane
	*/
	get zoomSliderXAxisMajorStrokeThickness() : number {
		return (this.i.zoomSliderXAxisMajorStrokeThickness as number);
	}
	@Input()
	set zoomSliderXAxisMajorStrokeThickness(v: number) {
		this.i.zoomSliderXAxisMajorStrokeThickness = +v;
	}
	/**
	 * Gets or sets weather or not a legend is visible between toolbar and chart's plot area
	*/
	get isLegendVisible() : boolean {
		return (this.i.isLegendVisible as boolean);
	}
	@Input()
	set isLegendVisible(v: boolean) {
		this.i.isLegendVisible = ensureBool(v);
	}
	/**
	 * Gets or sets minimum value on x-axis
	*/
	get xAxisMinimumValue() : Date {
		return (this.i.xAxisMinimumValue as Date);
	}
	@Input()
	set xAxisMinimumValue(v: Date) {
		this.i.xAxisMinimumValue = v;
	}
	/**
	 * Gets or sets maximum value on x-axis
	*/
	get xAxisMaximumValue() : Date {
		return (this.i.xAxisMaximumValue as Date);
	}
	@Input()
	set xAxisMaximumValue(v: Date) {
		this.i.xAxisMaximumValue = v;
	}

    

		/**
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	public notifyInsertItem(source_: any, index: number, newItem: any) {
		this.i.notifyInsertItem(source_, index, newItem);
	}
	public notifyRemoveItem(source_: any, index: number, oldItem: any) {
		this.i.notifyRemoveItem(source_, index, oldItem);
	}
	public notifyClearItems(source_: any) {
		this.i.notifyClearItems(source_);
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Returns visuals as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}

    	private _applyCustomIndicators: EventEmitter<{ sender: any, args: IgxFinancialChartCustomIndicatorArgs}> = null;
	/**
	 * Event raised by the chart when custom indicator data is needed from the application.
	 * During series rendering, event will be raised once for each value in the CustomIndicatorNames collection.
	*/
	@Output()
	get applyCustomIndicators(): EventEmitter<{ sender: any, args: IgxFinancialChartCustomIndicatorArgs}> {
		if (this._applyCustomIndicators == null) {
			this._applyCustomIndicators = new EventEmitter<{sender: any, args: IgxFinancialChartCustomIndicatorArgs}>();
			this.i.applyCustomIndicators = delegateCombine(this.i.applyCustomIndicators, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFinancialChartCustomIndicatorArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeApplyCustomIndicators) {
	                        (this as any).beforeApplyCustomIndicators(this, outerArgs);
	                    }
					this._applyCustomIndicators.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._applyCustomIndicators;
	}

    
}
