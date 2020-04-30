/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, OnDestroy, EventEmitter, Output, ComponentRef, AfterViewInit, TemplateRef, Injector, ComponentFactoryResolver, Component, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { IgxSeriesComponent } from 'igniteui-charts/igx-series-component';
import { GridMode, GridMode_$type } from 'igniteui-charts/GridMode';
import { IgxSeriesViewerComponent } from 'igniteui-charts/igx-series-viewer-component';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { Visibility, Visibility_$type } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { PointUtil, IEnumerable, TypeRegistrar } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Series } from 'igniteui-charts/Series';
import { Rect } from 'igniteui-core/Rect';
import { DataTemplate } from 'igniteui-core/DataTemplate';
import { BrushCollection } from 'igniteui-core/BrushCollection';
import { XamGeographicMap } from './XamGeographicMap';
import { CollectionAdapter, brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, fromBrushCollection, toBrushCollection, ensureBool, ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { DataChartStylingDefaults } from 'igniteui-charts/DataChartStylingDefaults';
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { delegateCombine } from 'igniteui-core/type';
import { IgxSeriesCollection } from 'igniteui-charts/igx-series-collection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { IgxImageTilesReadyEventArgs } from './igx-image-tiles-ready-event-args';



import { IgxNumericXAxisComponent } from 'igniteui-charts/igx-numeric-x-axis-component';
import { IgxNumericYAxisComponent } from 'igniteui-charts/igx-numeric-y-axis-component';
import { IgxGeographicMapImagery } from './igx-geographic-map-imagery';

export const IgxGeographicMapComponent_PROVIDERS = [{ provide: IgxSeriesViewerComponent, useExisting: forwardRef(() => IgxGeographicMapComponent) }];


/**
 * Represents the Infragistics IgxGeographicMapComponent control.
*/
@Component({
	selector: 'igx-geographic-map',
	template: `<ng-container #dynamicContent></ng-container>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: IgxSeriesViewerComponent, useExisting: forwardRef(() => IgxGeographicMapComponent) }],
    host: { 'class': 'igx-geographic-map ig-geographic-map' },
    styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxGeographicMapComponent extends IgxSeriesViewerComponent implements AfterContentInit, OnDestroy {
	
	@ContentChildren(IgxSeriesComponent) contentSeries: QueryList<IgxSeriesComponent>;

	@ViewChild("dynamicContent", {read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._chart.notifyContainerResized();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._chart.notifyContainerResized();
    }
    get width(): string {
        return this._width;
    }

    /**
	 * Gets or sets the legend used for the current chart.
	*/
    get legend(): any {
        if (this.i.legend != null)
            return (<any>this.i.legend).externalObject;
    }
    @Input()
    set legend(v: any) {
        if (v != undefined && v != null)
            this.i.legend = v.i;
    }

	/**
	 * The series actually present in the chart. Do not directly modify this array.
	 * This array's contents can be modified by causing Angular to reproject the child content.
	 * Or adding and removing series from the manual series collection on the series property.
	 */
	actualSeries: IgxSeriesComponent[] = [];

    private _container: any;

	private _series: IgxSeriesCollection = null;
	/**
	 * A collection or manually added series for the chart.
	*/
	get series() : IgxSeriesCollection {
		if (this._series === null) {
			let coll = new IgxSeriesCollection();
			let inner: SyncableObservableCollection$2<IgxSeriesComponent, Series> = (<any>coll)._innerColl;
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

	constructor(
		private _renderer: Renderer2, 
        private _elRef: ViewContainerRef,
		private _ngZone: NgZone, 
		private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector) {
			
		super();
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._zoneRunner = (act: () => void) => this._ngZone.run(act);
		
        this._container = _renderer.createElement("div");
        _renderer.appendChild(_elRef.element.nativeElement, this._container);
		_renderer.setStyle(this._container, "display", "block");
		_renderer.setStyle(this._container, "width", "100%");
		_renderer.setStyle(this._container, "height", "100%");
        var root: any;
		root = this._container;
		if (this._container.nativeElement != null) {
			root = this._container.nativeElement;
		}
		var ren: AngularRenderer = new AngularRenderer(
            root, this._renderer, window.document, 
            this._ngZone, 
            true, 
			DataChartStylingDefaults);
		this._wrapper = ren;
		var chart = this.i;
		this._chart = chart;
		chart.provideContainer(ren);
        ren.addSizeWatcher(() => {
            this._chart.notifyContainerResized();
        });
	}

    ngOnDestroy() {
        this._chart.destroy();
        this._wrapper.destroy();
    }

	private _wrapper: AngularRenderer;

	protected createImplementation() {
		return new XamGeographicMap();
	}

	private _chart: any;

    private _dataSource: any = null;
    @Input()
	set dataSource(value: any) {
		this._dataSource = value;
		this.bindData();
	}
	get dataSource(): any {
		return this._dataSource;
	}

	bindData() {

		if (this.actualSeries && this.actualSeries.length > 0) {
			var currSeries = this.actualSeries;
			for (var i = 0; i < currSeries.length; i++) {
				currSeries[i].provideData(this._dataSource);
			}
		}
	}

    private _seriesAdapter: CollectionAdapter<IgxSeriesComponent, Series> = null;	

	ngAfterContentInit() {
		if (TypeRegistrar.isRegistered("IgxDataChartDefaultTooltipsComponent")) {
			let c = TypeRegistrar.get("IgxDataChartDefaultTooltipsComponent");
			let cf = this._componentFactoryResolver.resolveComponentFactory(c);
			
			let cr = this._dynamicContent.createComponent(cf);
			//let cr = cf.create(this._injector);
            this._defaultTooltips = cr;
			(<any>cr.instance).onContentReady.subscribe(() => {
				this._onDefaultTooltipsReady(cr);
			});
			//this._container.appendChild(cr.location.nativeElement);
        }

		this._seriesAdapter = new CollectionAdapter<IgxSeriesComponent, Series>(
			this.contentSeries,
			this.i.series,
			this.actualSeries,
			(c) => c.i,
			(i) => { 
                (<any>i).owner = this;
                (<any>i)._provideRenderer(this._dataSource);
				i.provideData(this._dataSource); 
				//i.bindAxes(this.axes);
				this._ensureDefaultTooltip(i);
                this._ensureTooltipCreated(i);
            },
			(i) => { (<any>i)._provideRenderer(null); i.provideData(null); }
		);	
		
		this.i.notifyContainerResized();
	}

    private _ensureTooltipCreated(series: any) {
        (<any>series)._ensureTooltipCreated(
			() => this.createTooltip(),
			(ele) => {
				let wrapper = new AngularWrapper(
					ele,
					this._renderer,
					this._ngZone
				);
				(<any>wrapper).updateToolTip = (<any>ele).updateToolTip;
				(<any>wrapper).hideToolTip = (<any>ele).hideToolTip;
				return wrapper;
			});
    }

    private _defaultTooltips: ComponentRef<any> = null;
	private _ensureDefaultTooltip(series: IgxSeriesComponent) {
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
					this._ensureDefaultTooltip(currSeries[i])
				}
			}
		}
	}

    private createTooltip(): ComponentRef<any> {
		if (!TypeRegistrar.isRegistered("IgxTooltipContainerComponent")) {
			return null;
		}
		let t = TypeRegistrar.get("IgxTooltipContainerComponent");
		let cf = this._componentFactoryResolver.resolveComponentFactory(t);
		//let cr = cf.create(this._injector);
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
                if (ele.parentElement != self._container) {
                    if (ele.parentElement != null) {
                        ele.parentElement.removeChild(ele);
                    }

                    self._container.appendChild(ele);
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

	/**
	 * An imagery to display behind all series, inside the viewport of the IgxGeographicMapComponent control.
	*/
    get backgroundContent(): IgxGeographicMapImagery {
        if (this.i.backgroundContent != null) {
            return (<any>this.i.backgroundContent).externalObject;
        } else {
            return null;
        }
    }
    set backgroundContent(v: IgxGeographicMapImagery) {
        if (v != undefined && v != null) {
            this.i.backgroundContent = v.i;
        } else {
            this.i.backgroundContent = null;
        }
    }

    	/**
	                             * @hidden 
	                             */
	public get i() : XamGeographicMap {
		return this._implementation;
	}

		/**
	 * Gets or sets zoomability of the current control
	*/
	get zoomable() : boolean {
		return (this.i.zoomable as boolean);
	}
	@Input()
	set zoomable(v: boolean) {
		this.i.zoomable = ensureBool(v);
	}
	/**
	 * Gets or sets the world bounding rectangle.
	*/
	get worldRect() : IgRect {
		return fromRect(this.i.worldRect);
	}
	@Input()
	set worldRect(v: IgRect) {
		this.i.worldRect = toRect(v);
	}
	/**
	 * Gets the actual value of the WorldRect.
	*/
	get actualWorldRect() : IgRect {
		return fromRect(this.i.actualWorldRect);
	}
	@Input()
	set actualWorldRect(v: IgRect) {
		this.i.actualWorldRect = toRect(v);
	}
	/**
	 * The X-axis for this IgxGeographicMap.Component
	 * Under normal circumstances, this property should not be set in application code.  By default, it will be set to a numeric axis with a spherical mercator scaler.
	*/
	get xAxis() : IgxNumericXAxisComponent {
	                                        if (this.i.xAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.xAxis as any).externalObject) {
	                                            let e = IgxNumericXAxisComponent._createFromInternal(this.i.xAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.xAxis;
	                                            }
	                                            (this.i.xAxis as any).externalObject = e;
	                                        }
		return (this.i.xAxis as any).externalObject;
	}
	@Input()
	set xAxis(v: IgxNumericXAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.xAxis = null : this.i.xAxis = v.i;
	}
	/**
	 * The Y-axis for this IgxGeographicMap.Component
	 * Under normal circumstances, this property should not be set in application code.  By default, it will be set to a numeric axis with a spherical mercator scaler.
	*/
	get yAxis() : IgxNumericYAxisComponent {
	                                        if (this.i.yAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.yAxis as any).externalObject) {
	                                            let e = IgxNumericYAxisComponent._createFromInternal(this.i.yAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.yAxis;
	                                            }
	                                            (this.i.yAxis as any).externalObject = e;
	                                        }
		return (this.i.yAxis as any).externalObject;
	}
	@Input()
	set yAxis(v: IgxNumericYAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.yAxis = null : this.i.yAxis = v.i;
	}
	/**
	 * Indicates if this SeriesViewer is a map.
	*/
	get isMap() : boolean {
		return (this.i.isMap as boolean);
	}
	/**
	 * A number between 0 and 1 determining the scale of the horizontal/vertical zoom.
	 * This property is effectively a shortcut to the Width/Height of the WindowRect property.
	*/
	get windowScale() : number {
		return (this.i.windowScale as number);
	}
	@Input()
	set windowScale(v: number) {
		this.i.windowScale = +v;
	}
	/**
	 * A number between 0 and 1 determining the scale of the horizontal/vertical zoom.
	 * This property is effectively a shortcut to the Width/Height of the ActualWindowRect property.
	*/
	get actualWindowScale() : number {
		return (this.i.actualWindowScale as number);
	}
	@Input()
	set actualWindowScale(v: number) {
		this.i.actualWindowScale = +v;
	}
	/**
	 * Gets whether or not the control is ready for zooming
	*/
	get zoomIsReady() : boolean {
		return (this.i.zoomIsReady as boolean);
	}

    	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.xAxis && (this.xAxis as any)._styling) {
	    (this.xAxis as any)._styling(container, component, this);
	}
	if (this.yAxis && (this.yAxis as any)._styling) {
	    (this.yAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }

		/**
	 * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
	
	* @param geographic  * The geographic area.
	*/
	public getZoomRectFromGeoRect(geographic: IgRect) : IgRect {
		let iv = this.i.getZoomRectFromGeoRect(toRect(geographic));
		return fromRect(iv);
	}
	/**
	 * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
	
	* @param geographic  * The geographic area.
	*/
	public getZoomFromGeographicRect(geographic: IgRect) : IgRect {
		let iv = this.i.getZoomFromGeographicRect(toRect(geographic));
		return fromRect(iv);
	}
	public getZoomFromGeographicPoints(northWest: IgPoint, southEast: IgPoint) : IgRect {
		let iv = this.i.getZoomFromGeographicPoints(toPoint(northWest), toPoint(southEast));
		return fromRect(iv);
	}
	/**
	 * Given a WindowRect and the current plot area, get the geographic region represented by that WindowRect.
	
	* @param windowRect  * The zoom area.
	*/
	public getGeographicFromZoom(windowRect: IgRect) : IgRect {
		let iv = this.i.getGeographicFromZoom(toRect(windowRect));
		return fromRect(iv);
	}
	/**
	 * Convert a pixel-based coordinate to a geographic coordinate.
	
	* @param pixelCoordinate  * A pixel-based coordinate
	*/
	public getGeographicPoint(pixelCoordinate: IgPoint) : IgPoint {
		let iv = this.i.getGeographicPoint(toPoint(pixelCoordinate));
		return fromPoint(iv);
	}
	/**
	 * Convert a geographic coordinate to a pixel-based coordinate.
	
	* @param geographicCoordinate  * A geographic coordinate
	*/
	public getPixelPoint(geographicCoordinate: IgPoint) : IgPoint {
		let iv = this.i.getPixelPoint(toPoint(geographicCoordinate));
		return fromPoint(iv);
	}
	/**
	 * Convert a geographic coordinate to a pixel-based coordinate.
	
	* @param geographicCoordinate  * A geographic coordinate
	*/
	public getWindowPoint(geographicCoordinate: IgPoint) : IgPoint {
		let iv = this.i.getWindowPoint(toPoint(geographicCoordinate));
		return fromPoint(iv);
	}
	/**
	 * Removes all cached tile images from the map imagery assigned to the map's background content.
	
	*/
	public clearTileCache() {
		this.i.clearTileCache();
	}
	/**
	 * Notifies the chart that the CSS styles in effect have been updated.
	
	*/
	public styleUpdated() {
		this.i.styleUpdated();
	}
	/**
	 * Gets actual window scale for horizontal dimension of the control
	
	*/
	public getActualWindowScaleHorizontal() : number {
		let iv = this.i.getActualWindowScaleHorizontal();
		return (iv);
	}
	/**
	 * Gets actual window scale for vertical dimension of the control
	
	*/
	public getActualWindowScaleVertical() : number {
		let iv = this.i.getActualWindowScaleVertical();
		return (iv);
	}
	/**
	 * Calls for a deferred refresh to the GeographicMap's background.
	
	*/
	public deferredRefresh() {
		this.i.deferredRefresh();
	}
	/**
	 * Returns the chart visuals expressed as a ChartVisualData object.
	
	*/
	public exportVisualData() : any {
		let iv = this.i.exportVisualData();
		return (iv);
	}
	/**
	 * Zoom in to the geographic region specified, when possible (may need to wait for map to be initialized).
	
	* @param geographic  * The geographic region to zoom to.
	*/
	public zoomToGeographic(geographic: IgRect) {
		this.i.zoomToGeographic(toRect(geographic));
	}

    	private _imageTilesReady: EventEmitter<{ sender: any, args: IgxImageTilesReadyEventArgs}> = null;
	/**
	 * This event is fired whenever the image tiles transition from a loading state (e.g. some are fading in) to a loaded state.
	*/
	@Output()
	get imageTilesReady(): EventEmitter<{ sender: any, args: IgxImageTilesReadyEventArgs}> {
		if (this._imageTilesReady == null) {
			this._imageTilesReady = new EventEmitter<{sender: any, args: IgxImageTilesReadyEventArgs}>();
			this.i.imageTilesReady = delegateCombine(this.i.imageTilesReady, (o, e) => {
				let outerArgs = new IgxImageTilesReadyEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeImageTilesReady) {
	                            (this as any).beforeImageTilesReady(this, outerArgs);
	                        }
					    this._imageTilesReady.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._imageTilesReady;
	}
}
