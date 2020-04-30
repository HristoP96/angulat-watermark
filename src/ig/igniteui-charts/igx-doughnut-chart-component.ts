import { Component, ChangeDetectionStrategy, AfterContentInit, OnDestroy, ViewChild, ViewContainerRef, Input, Inject, NgZone, ComponentFactoryResolver, Renderer2, Injector, ComponentRef, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { TypeRegistrar, IEnumerable, delegateCombine } from 'igniteui-core/type';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { XamDoughnutChart } from './XamDoughnutChart';
import { ensureBool, fromPoint, CollectionAdapter , toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { IgPoint } from 'igniteui-core/IgPoint';
import { Style } from 'igniteui-core/Style';
import { IgxSliceClickEventArgs } from 'igniteui-charts/igx-slice-click-event-args';
import { IgxHoleDimensionsChangedEventArgs } from 'igniteui-charts/igx-hole-dimensions-changed-event-args';
import { IgxRingSeriesBaseComponent } from 'igniteui-charts/igx-ring-series-base-component';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { RingSeriesBase } from 'igniteui-charts/Arc_combined';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { IgxRingSeriesCollection} from 'igniteui-charts/igx-ring-series-collection';
import { IgxPieSliceDataContext } from 'igniteui-charts/igx-pie-slice-data-context';


export const IgxDoughnutChartComponent_PROVIDERS = [];

/**
 * Represents concentric circles divided on arcs  depending on data.
*/
@Component({
	selector: 'igx-doughnut-chart',
	template: `<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxDoughnutChartComponent_PROVIDERS,
    host: { 'class': 'ig-doughnut-chart igx-doughnut-chart' },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxDoughnutChartComponent implements OnDestroy {
	container: Element;

    @ContentChildren(IgxRingSeriesBaseComponent) contentSeries: QueryList<IgxRingSeriesBaseComponent>;
	@ViewChild("dynamicContent", {read: ViewContainerRef, static: true}) _dynamicContent: ViewContainerRef;

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

	constructor(private renderer: Renderer2, 
		private _elRef: ViewContainerRef,
		 private ngZone: NgZone, 
		 private injector: Injector,
		 private componentFactoryResolver: ComponentFactoryResolver) {


        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();


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
        this._chart = <XamDoughnutChart>chart;

        this._seriesAdapter = new CollectionAdapter<IgxRingSeriesBaseComponent, RingSeriesBase>(
            [],
            this.i.series,
            this.actualSeries,
            (c) => c.i,
            (i) => {
                (<any>i).owner = this;
                // (<any>i)._provideRenderer(this._dataSource);
                if (this.container && this.container.parentElement) {
                    (i as any)._styling(this.container, this, this);
                }
                this._ensureDefaultTooltip(i);
                this._ensureTooltipCreated(i);
            },
            (i) => {
                //(<any>i)._provideRenderer(null);
            }
        );

        chart.provideContainer(ren);
        
        ren.addSizeWatcher(() => {
            this._chart.notifyResized();
        });
    }

    ngOnDestroy() {
        this._chart.destroy();
        this._wrapper.destroy();
    }

	private _wrapper: AngularRenderer;

    private onImplementationCreated() {

    }

	protected createImplementation() {
        return new XamDoughnutChart();
	}

    protected _implementation: any;
    public get i(): XamDoughnutChart {
		return this._implementation;
	}

    protected createSeriesComponent(type: string): any {
        if (TypeRegistrar.isRegistered(type)) {
            let s = TypeRegistrar.create(type);
            (<any>s).owner = this;
            (<any>s)._provideRenderer(this._wrapper);
            return s;
        } else {
            //we shouldn't get here, hopefully.
            throw Error("series type not loaded: " + type);
        }
    }

    private _chart: XamDoughnutChart;


    ngAfterContentInit() {
        if (TypeRegistrar.isRegistered("IgxDoughnutChartDefaultTooltipsComponent")) {
            let c = TypeRegistrar.get("IgxDoughnutChartDefaultTooltipsComponent");
         	let cf = this.componentFactoryResolver.resolveComponentFactory(c);

         	let cr = this._dynamicContent.createComponent(cf);
             this._defaultTooltips = cr;
         	(<any>cr.instance).onContentReady.subscribe(() => {
         		this._onDefaultTooltipsReady(cr);
         	});
        }

        this._seriesAdapter.updateQuery(this.contentSeries);

        this._styling(this.container, this);
        if (this.actualSeries && this.actualSeries.length > 0) {
            var currSeries = this.actualSeries;
            for (var i = 0; i < currSeries.length; i++) {
                (currSeries[i] as any)._styling(this.container, this, this);
            }
        }

        this.i.notifyResized();
    }


	/**
	 * The series actually present in the chart. Do not directly modify this array.
	 * This array's contents can be modified by causing Angular to reproject the child content.
	 * Or adding and removing series from the manual series collection on the series property.
	 */
    actualSeries: IgxRingSeriesBaseComponent[] = [];

    private _seriesAdapter: CollectionAdapter<IgxRingSeriesBaseComponent, RingSeriesBase> = null;
    private _series: IgxRingSeriesCollection = null;
	/**
	 * A collection or manually added series for the chart.
	*/
    get series(): IgxRingSeriesCollection {
        if (this._series === null) {
            let coll = new IgxRingSeriesCollection();
            let inner: SyncableObservableCollection$2<IgxRingSeriesBaseComponent, RingSeriesBase> = (<any>coll)._innerColl;
            inner.addListener((sender, e) => {
                switch (e.action) {
                    case NotifyCollectionChangedAction.Add:
                        this._seriesAdapter.addManualItem(e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Remove:
                        this._seriesAdapter.removeManualItemAt(e.oldStartingIndex);
                        break;
                    case NotifyCollectionChangedAction.Replace:
                        this._seriesAdapter.removeManualItemAt(e.oldStartingIndex);
                        this._seriesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Reset:
                        this._seriesAdapter.clearManualItems();
                        break;
                }
            });
            this._series = coll;
        }
        return this._series;
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

    private _defaultTooltips: ComponentRef<any> = null;
    private _ensureDefaultTooltip(series: IgxRingSeriesBaseComponent) {
        if (this._defaultTooltips == null) {
            return;
        }
        this._defaultTooltips.instance["ensureDefaultTooltip"](series);
    }

    private _onDefaultTooltipsReady(cr: ComponentRef<any>) {
        if (this.actualSeries && this.actualSeries.length > 0) {
            var currSeries = this.actualSeries;
            for (var i = 0; i < currSeries.length; i++) {
                if (currSeries[i].showDefaultTooltip) {
                    this._ensureDefaultTooltip(currSeries[i]);
                }
            }
        }
    }

    private createTooltip(): ComponentRef<any> {
        if (!TypeRegistrar.isRegistered("IgxTooltipContainerComponent")) {
            return null;
        }
        let t = TypeRegistrar.get("IgxTooltipContainerComponent");
        let cf = this.componentFactoryResolver.resolveComponentFactory(t);
        let cr = this._dynamicContent.createComponent(cf);
        let ele: Element = cr.location.nativeElement;
        let self = this;

        (<any>ele).updateToolTip = function (c) {
            if (c.externalObject) {
                c = c.externalObject;
            } else {
                let ext = new IgxPieSliceDataContext();
                (<any>ext)._implementation = c;
                c = ext;
            }

            if (ele.parentElement != self.container) {
                if (ele.parentElement != null) {
                    ele.parentElement.removeChild(ele);
                }

                self.container.appendChild(ele);
            }
            (<any>cr.instance).context = c;
            if (c.series.showDefaultTooltip) {
                var tooltipContainers = ele.getElementsByClassName("ui-tooltip-container");
                if (tooltipContainers.length > 0)
                    (<any>tooltipContainers[0]).style.borderColor = (<any>c).i.slice.background.fill;
            }
            (<any>ele).style.display = "block";

            return true;
        };
        (<any>ele).hideToolTip = function () {
            (<any>ele).style.display = "none"
        };
        (<any>ele).style.display = "none"

        return cr;
    }


		/**
	 * Gets or sets whether the slices can be selected.
	*/
	get allowSliceSelection() : boolean {
		return (this.i.allowSliceSelection as boolean);
	}
	@Input()
	set allowSliceSelection(v: boolean) {
		this.i.allowSliceSelection = ensureBool(v);
	}
	/**
	 * Gets or sets whether all surface interactions with the plot area should be disabled.
	*/
	get isSurfaceInteractionDisabled() : boolean {
		return (this.i.isSurfaceInteractionDisabled as boolean);
	}
	@Input()
	set isSurfaceInteractionDisabled(v: boolean) {
		this.i.isSurfaceInteractionDisabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether the slices can be exploded.
	*/
	get allowSliceExplosion() : boolean {
		return (this.i.allowSliceExplosion as boolean);
	}
	@Input()
	set allowSliceExplosion(v: boolean) {
		this.i.allowSliceExplosion = ensureBool(v);
	}
	/**
	 * Gets or sets the inner extent of the doughnut chart. It is percent from the outer ring's radius.
	*/
	get innerExtent() : number {
		return (this.i.innerExtent as number);
	}
	@Input()
	set innerExtent(v: number) {
		this.i.innerExtent = +v;
	}
	/**
	 * Gets or sets the fill brush.
	*/
	get selectedSliceFill() : string {
		return this.i.selectedStyle ? (this.i.selectedStyle.fill as string) : null;
	}
	@Input()
	set selectedSliceFill(v: string) {
		this.ensureSelectedStyle();
	                                        this.i.selectedStyle.fill = v;
	}
	/**
	 * Gets or sets the stroke brush.
	*/
	get selectedSliceStroke() : string {
		return this.i.selectedStyle ? (this.i.selectedStyle.stroke as string) : null;
	}
	@Input()
	set selectedSliceStroke(v: string) {
		this.ensureSelectedStyle();
	                                        this.i.selectedStyle.stroke = v;
	}
	/**
	 * Gets or sets the stroke thickness.
	*/
	get selectedSliceStrokeThickness() : number {
		return this.i.selectedStyle ? (this.i.selectedStyle.strokeThickness as number) : NaN;
	}
	@Input()
	set selectedSliceStrokeThickness(v: number) {
	                                        this.ensureSelectedStyle();
		this.i.selectedStyle.strokeThickness = +v;
	}
	/**
	 * Gets or sets the opacity.
	*/
	get selectedSliceOpacity() : number {
		return this.i.selectedStyle ? (this.i.selectedStyle.opacity as number) : NaN;
	}
	@Input()
	set selectedSliceOpacity(v: number) {
	                                        this.ensureSelectedStyle();
		this.i.selectedStyle.opacity = +v;
	}
	ensureSelectedStyle() {
	if (this.i.selectedStyle) {
	                                            return;
	                                        }
	                                        this.i.selectedStyle = new Style();
	
	                                }
	/**
	 * Gets or sets the scaling value used to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get pixelScalingRatio() : number {
		return (this.i.pixelScalingRatio as number);
	}
	@Input()
	set pixelScalingRatio(v: number) {
		this.i.pixelScalingRatio = +v;
	}
	/**
	 * Resolved pixel scaling ratio. Unless explicitly overridden by the IgxDoughnutChart.PixelScalingRatioComponent property,
	 * this one returns the default ratio enforced by device. High resolution devices will initialize this property
	 * to a higher value.
	*/
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
	}

    	
	protected __p: string = null;
	protected _hasUserValues: Set<string> = new Set<string>();
	protected get hasUserValues(): Set<string> {
	    return this._hasUserValues;
	}
	protected __m(propertyName: string) {
	    if (!this._inStyling) {
	        this._hasUserValues.add(propertyName);
	    }
	}
	
	protected _stylingContainer: any = null;
	protected _stylingParent: any = null;
	protected _inStyling: boolean = false;
	protected _styling(container: any, component: any, parent?: any) {
	        if (this._inStyling) {
	            return;
	        }
	        this._inStyling = true;
	        this._stylingContainer = container;
	        this._stylingParent = component;
		
	        let genericPrefix = "";
	        let typeName = (this.i as any).$type.name;
	        if (typeName.indexOf("Xam") === 0) {
	            typeName = typeName.substring(3);
	        }
	        genericPrefix = toSpinal("DoughnutChartComponent");
		
		let additionalPrefixes = [];
		
		let prefix = toSpinal(typeName);
		additionalPrefixes.push(prefix + "-");
	
	        let b = (this.i as any).$type.baseType;
	        while (b && b.name != "Object" && 
	            b.name != "Base" && 
	            b.name != "Control" && 
	            b.Name != "DependencyObject" &&
	            b.Name != "FrameworkElement") {
	            typeName = b.name;
	            if (typeName.indexOf("Xam") === 0) {
	                typeName = typeName.substring(3);
	            }
	            let basePrefix = toSpinal(typeName);
	            additionalPrefixes.push(basePrefix + "-");
	            b = b.baseType;
	        }
		
		if (parent) {
			let parentTypeName = (parent.i as any).$type.name;
	            if (parentTypeName.indexOf("Xam") === 0) {
	                parentTypeName = parentTypeName.substring(3);
	            }
	            let parentPrefix = toSpinal(parentTypeName);
	
			additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
			additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
		}
	
		initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);
	
	        
	
	        if ((this as any)._otherStyling) {
	            (this as any)._otherStyling(container, component, parent);
	        }
	        this._inStyling = false;
	}

		/**
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	/**
	 * Called when the control has been resized.
	
	*/
	public notifyResized() {
		this.i.notifyResized();
	}
	/**
	 * Gets the ID of the UI container.
	
	*/
	public getContainerID() : string {
		let iv = this.i.getContainerID();
		return (iv);
	}
	/**
	 * Gets the center coordinates of the doughnut chart's center presenter.
	
	*/
	public getCenterCoordinates() : IgPoint {
		let iv = this.i.getCenterCoordinates();
		return fromPoint(iv);
	}
	/**
	 * Gets the hole radius of the doughnut chart's center presenter.
	
	*/
	public getHoleRadius() : number {
		let iv = this.i.getHoleRadius();
		return (iv);
	}
	/**
	 * Use to force the doughnut chart to finish any deferred work before printing or evaluating its visual.
	 * This should only be called if the visual of the doughnut chart needs to be synchronously saved or evaluated. 
	 * Calling this method too often will hinder the performance of the doughnut chart.
	
	*/
	public flush() {
		this.i.flush();
	}
	/**
	 * Returns the chart visuals expressed as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}
	public notifyInsertItem(source_: any, index: number, newItem: any) {
		this.i.notifyInsertItem(source_, index, newItem);
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Used to manually notify the chart that the data source has reset or cleared its items.
	
	*/
	public notifyClearItems(source_: any) {
		this.i.notifyClearItems(source_);
	}
	public notifyRemoveItem(source_: any, index: number, oldItem: any) {
		this.i.notifyRemoveItem(source_, index, oldItem);
	}

    	private _sliceClick: EventEmitter<{ sender: any, args: IgxSliceClickEventArgs}> = null;
	/**
	 * Raised when the slice is clicked.
	*/
	@Output()
	get sliceClick(): EventEmitter<{ sender: any, args: IgxSliceClickEventArgs}> {
		if (this._sliceClick == null) {
			this._sliceClick = new EventEmitter<{sender: any, args: IgxSliceClickEventArgs}>();
			this.i.sliceClick = delegateCombine(this.i.sliceClick, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxSliceClickEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSliceClick) {
	                        (this as any).beforeSliceClick(this, outerArgs);
	                    }
					this._sliceClick.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._sliceClick;
	}
	private _holeDimensionsChanged: EventEmitter<{ sender: any, args: IgxHoleDimensionsChangedEventArgs}> = null;
	/**
	 * Raised when the dimensions (center point or radius) of the doughnut hole change.
	*/
	@Output()
	get holeDimensionsChanged(): EventEmitter<{ sender: any, args: IgxHoleDimensionsChangedEventArgs}> {
		if (this._holeDimensionsChanged == null) {
			this._holeDimensionsChanged = new EventEmitter<{sender: any, args: IgxHoleDimensionsChangedEventArgs}>();
			this.i.holeDimensionsChanged = delegateCombine(this.i.holeDimensionsChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxHoleDimensionsChangedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeHoleDimensionsChanged) {
	                        (this as any).beforeHoleDimensionsChanged(this, outerArgs);
	                    }
					this._holeDimensionsChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._holeDimensionsChanged;
	}

    	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
