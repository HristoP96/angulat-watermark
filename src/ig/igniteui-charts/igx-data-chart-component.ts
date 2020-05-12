/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, OnDestroy, EventEmitter, Output, ComponentRef, AfterViewInit, TemplateRef, Injector, ComponentFactoryResolver, Component, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { IgxAxisComponent } from './igx-axis-component';
import { IgxSeriesComponent } from './igx-series-component';
import { GridMode, GridMode_$type } from './GridMode';
import { IgxSeriesViewerComponent } from './igx-series-viewer-component';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { Visibility, Visibility_$type } from 'igniteui-core/Visibility';
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
import { XamDataChart } from './XamDataChart';
import { CollectionAdapter, brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, fromBrushCollection, toBrushCollection, ensureBool, ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { Axis } from './Axis';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { delegateCombine } from 'igniteui-core/type';
import { IgxSeriesCollection } from './igx-series-collection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { IgxAxisCollection } from './igx-axis-collection';
import { SyncLinkManager } from './SyncLinkManager';
import { SyncLink } from './SyncLink';

export const IgxDataChartComponent_PROVIDERS = [{ provide: IgxSeriesViewerComponent, useExisting: forwardRef(() => IgxDataChartComponent) }];


/**
 * Represents a chart area containing axes, series, an optional legend and other hosted content.
*/
@Component({
	selector: 'igx-data-chart',
	template: `<ng-container #dynamicContent></ng-container>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: IgxSeriesViewerComponent, useExisting: forwardRef(() => IgxDataChartComponent) }],
    host: { 'class': 'igx-data-chart ig-data-chart' },
    styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxDataChartComponent extends IgxSeriesViewerComponent implements AfterContentInit, OnDestroy {
	
	@ContentChildren(IgxAxisComponent) contentAxes: QueryList<IgxAxisComponent>;
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
	/**
	 * The axes actually present in the chart. Do not directly modify this array.
	 * This array's contents can be modified by causing Angular to reproject the child content.
	 * Or adding and removing axes from the manual axes collection on the axes property.
	 */
	actualAxes: IgxAxisComponent[] = [];
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
                        this._seriesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
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

    private _axes: IgxAxisCollection = null;
	/**
	 * A collection or manually added axes for the chart.
	*/
	get axes() : IgxAxisCollection {
		if (this._axes === null) {
			let coll = new IgxAxisCollection();
			let inner: SyncableObservableCollection$2<IgxAxisComponent, Axis> = (<any>coll)._innerColl;
			inner.addListener((sender, e) => {
				switch (e.action) {
					case NotifyCollectionChangedAction.Add:
                        this._axesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
						break;
					case NotifyCollectionChangedAction.Remove:
						this._axesAdapter.removeManualItemAt(e.oldStartingIndex);
						break;
					case NotifyCollectionChangedAction.Replace:
						this._axesAdapter.removeManualItemAt(e.oldStartingIndex);
						this._axesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
						break;
					case NotifyCollectionChangedAction.Reset:
						this._axesAdapter.clearManualItems();
						break;
				}
			});
			this._axes = coll; 
		}
		return this._axes;
	}

    private _root: Element = null;
	constructor(
		private _renderer: Renderer2, 
        private _elRef: ViewContainerRef,
		private _ngZone: NgZone, 
		private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector) {
			
		super();
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
        this._root = root;
		var ren: AngularRenderer = new AngularRenderer(
            root, this._renderer, window.document, 
            this._ngZone, 
            true, 
            DataChartStylingDefaults);
        
		this._wrapper = ren;
		var chart = this.i;
        this._chart = chart;

        this._axesAdapter = new CollectionAdapter<IgxAxisComponent, Axis>(
            [],
            this.i.axes,
            this.actualAxes,
            (c) => c.i,
            (i) => { 
                (<any>i)._provideRenderer(this._wrapper); 
                i.provideData(this._dataSource); 
                if (this._container && this._container.parentElement) {
                    (i as any)._styling(this._root, this, this);
                }
             },
            (i) => { (<any>i)._provideRenderer(null); i.provideData(null); }
        );

        this._seriesAdapter = new CollectionAdapter<IgxSeriesComponent, Series>(
            [],
            this.i.series,
            this.actualSeries,
            (c) => c.i,
            (i) => {
                (<any>i).owner = this;
                (<any>i)._provideRenderer(this._dataSource);
                i.provideData(this._dataSource);
                if (this._container && this._container.parentElement) {
                    (i as any)._styling(this._root, this, this);
                }
                i.bindAxes(this.actualAxes);
                this._ensureDefaultTooltip(i);
                this._ensureTooltipCreated(i);
            },
            (i) => { (<any>i)._provideRenderer(null); i.provideData(null); }
        );	

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
		return new XamDataChart();
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
		//console.log("binding data: " + this._dataSource);
		if (this.actualAxes && this.actualAxes.length > 0) {
			var currAxes = this.actualAxes;
			for (var i = 0; i < currAxes.length; i++) {
				currAxes[i].provideData(this._dataSource);
			}
		}

		if (this.actualSeries && this.actualSeries.length > 0) {
			var currSeries = this.actualSeries;
			for (var i = 0; i < currSeries.length; i++) {
				currSeries[i].provideData(this._dataSource);
			}
		}
	}

    private _axesAdapter: CollectionAdapter<IgxAxisComponent, Axis> = null;
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

			const watermark = this._renderer.createElement("igc-trial-watermark");
			watermark.setAttribute("theming", true);
            this._container.appendChild(watermark);
		}

        this._axesAdapter.updateQuery(this.contentAxes);
        this._seriesAdapter.updateQuery(this.contentSeries);

        if (this.actualAxes && this.actualAxes.length > 0) {
			var currAxes = this.actualAxes;
			for (var i = 0; i < currAxes.length; i++) {
				currAxes[i].provideData(this._dataSource);
			}
		}

		if (this.actualSeries && this.actualSeries.length > 0) {
			var currSeries = this.actualSeries;
			for (var i = 0; i < currSeries.length; i++) {
				currSeries[i].provideData(this._dataSource);
			}
        }

        this._styling(this._root, this);
		
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
	 * Gets or sets the channel with which to synchronize.
	* 
	* Synchronization is the coordination of zooming, panning and crosshairs events between multiple charts. Multiple chart controls can be synchronized horizontally (along X-Axis), vertically (along Y-Axis), or both. If you want to synchronize a set of charts, assign them the same name to the `syncChannel` and then specify whether or not synchronize chart horizontally and/or vertically.
	*/
    get syncChannel(): string {
        return this.i.syncChannel;
    }
    @Input()
    set syncChannel(v: string) {
        let newLink: SyncLink = null;
        if (v && v.length > 0) {
            newLink = SyncLinkManager.instance().getLink(v);
        }
        let oldLink = this.i.actualSyncLink;
        if (oldLink) {
            SyncLinkManager.instance().releaseLink(oldLink);
        }
        if (newLink) {
            this.i.actualSyncLink = newLink;
        } else {
            this.i.actualSyncLink = new SyncLink();
        }
        this.i.syncChannel = v;
    }
	/**
	 * Gets or sets the bool used to display the window preview shadow.
	* 
	* Synchronization is the coordination of zooming, panning and crosshairs events between multiple charts. Multiple chart controls can be synchronized horizontally (along X-Axis), vertically (along Y-Axis), or both. If you want to synchronize a set of charts, assign them the same name to the `syncChannel` and then specify whether or not synchronize chart horizontally and/or vertically.
	*/
    get synchronizeVertically(): boolean {
        return this.i.syncSettings ? <boolean>this.i.syncSettings.synchronizeVertically : false;
    }
    @Input()
    set synchronizeVertically(v: boolean) {
        this.i.syncSettings.synchronizeVertically = ensureBool(v);
    }
	/**
	 * Gets or sets the bool used to display the window preview shadow.
	* 
	* Synchronization is the coordination of zooming, panning and crosshairs events between multiple charts. Multiple chart controls can be synchronized horizontally (along X-Axis), vertically (along Y-Axis), or both. If you want to synchronize a set of charts, assign them the same name to the `syncChannel` and then specify whether or not synchronize chart horizontally and/or vertically.
	*/
    get synchronizeHorizontally(): boolean {
        return this.i.syncSettings ? <boolean>this.i.syncSettings.synchronizeHorizontally : false;
    }
    @Input()
    set synchronizeHorizontally(v: boolean) {
        this.i.syncSettings.synchronizeHorizontally = ensureBool(v);
    }

    	/**
	                             * @hidden 
	                             */
	public get i() : XamDataChart {
		return this._implementation;
	}

		/**
	 * Gets or sets whether to use a square aspect ratio for the chart. This is locked to true for polar and radial charts.
	* 
	* Set `isSquare` to true to constrain the chart to a square, using the minimum of its height and width.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     isSquare="true"
	*     width="800px"
	*     height="400px">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis
	*     majorStroke="green">
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	*  this.chart.isSquare="True";
	* ```
	*/
	get isSquare() : boolean {
		return (this.i.isSquare as boolean);
	}
	@Input()
	set isSquare(v: boolean) {
		this.i.isSquare = ensureBool(v);
	}
	/**
	 * A number between 0 and 1 determining the scale of the horizontal zoom.
	 * This property is effectively a shortcut to the Width of the WindowRect property.
	* 
	* To programmatically change the horizontal zoom level, set `windowScaleHorizontal` to a value between 0 and 1.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     windowScaleHorizontal="0.75">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.windowScaleHorizontal="0.75";
	* ```
	*/
	get windowScaleHorizontal() : number {
		return (this.i.windowScaleHorizontal as number);
	}
	@Input()
	set windowScaleHorizontal(v: number) {
		this.i.windowScaleHorizontal = +v;
	}
	/**
	 * A number between 0 and 1 determining the scale of the vertical zoom.
	 * This property is effectively a shortcut to the Height of the WindowRect property.
	* 
	* To programmatically change the vertical zoom level, set `windowScaleVertical` to a value between 0 and 1.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     windowScaleVertical="0.75">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.windowScaleVertical="0.75";
	* ```
	*/
	get windowScaleVertical() : number {
		return (this.i.windowScaleVertical as number);
	}
	@Input()
	set windowScaleVertical(v: number) {
		this.i.windowScaleVertical = +v;
	}
	/**
	 * A number between 0 and 1 determining the scale of the horizontal zoom.
	 * This property is effectively a shortcut to the Width of the ActualWindowRect property.
	*/
	get actualWindowScaleHorizontal() : number {
		return (this.i.actualWindowScaleHorizontal as number);
	}
	@Input()
	set actualWindowScaleHorizontal(v: number) {
		this.i.actualWindowScaleHorizontal = +v;
	}
	/**
	 * A number between 0 and 1 determining the scale of the vertical zoom.
	 * This property is effectively a shortcut to the Height of the ActualWindowRect property.
	*/
	get actualWindowScaleVertical() : number {
		return (this.i.actualWindowScaleVertical as number);
	}
	@Input()
	set actualWindowScaleVertical(v: number) {
		this.i.actualWindowScaleVertical = +v;
	}
	/**
	 * Gets or sets horizontal zoomability of the current control
	* 
	* Set `isHorizontalZoomEnabled` to enable or disable horizontal zooming. 
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     isHorizontalZoomEnabled="true">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.IsHorizontalZoomEnabled= true;
	* ```
	*/
	get isHorizontalZoomEnabled() : boolean {
		return (this.i.isHorizontalZoomEnabled as boolean);
	}
	@Input()
	set isHorizontalZoomEnabled(v: boolean) {
		this.i.isHorizontalZoomEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets vertical zoomability of the current control
	* 
	* Set `isVerticalZoomEnabled` to enable or disable vertical zooming.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     isVerticalZoomEnabled="true">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.isVerticalZoomEnabled="True";
	* ```
	*/
	get isVerticalZoomEnabled() : boolean {
		return (this.i.isVerticalZoomEnabled as boolean);
	}
	@Input()
	set isVerticalZoomEnabled(v: boolean) {
		this.i.isVerticalZoomEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets how grid lines are rendered in relation to series.
	* 
	*  Try setting the `gridMode` property to bring your grid lines in front of the data series.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     gridMode="beforeSeries">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis
	*     majorStroke="green">
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get gridMode() : GridMode {
		return this.i.gridMode;
	}
	@Input()
	set gridMode(v: GridMode) {
		this.i.gridMode = ensureEnum<GridMode>(GridMode_$type, v);
	}
	/**
	 * Gets or sets a value indicating whether grid and tick lines are aligned to device pixels.
	*/
	get alignsGridLinesToPixels() : boolean {
		return (this.i.alignsGridLinesToPixels as boolean);
	}
	@Input()
	set alignsGridLinesToPixels(v: boolean) {
		this.i.alignsGridLinesToPixels = ensureBool(v);
	}
	/**
	 * Gets or sets the palette of brushes to use for coloring the chart series.
	* 
	* `brushes` can be set declaratively to a list of color strings.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     brushes="red,green,blue">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.brushes="red" ;
	* ```
	*/
	get brushes() : string[] {
		return fromBrushCollection(this.i.brushes);
	}
	@Input()
	set brushes(v: string[]) {
		this.i.brushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets the MarkerBrushes property.
	 * The brushes property defines the palette from which automatically assigned series brushes are selected.
	* 
	* `markerBrushes` can be set declaratively to a list of color strings.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     markerBrushes="red,green,blue">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value"
	*     markerType="circle">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value"
	*     markerType="circle">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value"
	*     markerType="circle">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.markerBrushes="red,green,blue";
	* ```
	*/
	get markerBrushes() : string[] {
		return fromBrushCollection(this.i.markerBrushes);
	}
	@Input()
	set markerBrushes(v: string[]) {
		this.i.markerBrushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets the palette of brushes to use for outlines on the chart series.
	* 
	* `outlines` can be set declaratively to a list of color strings.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     outlines="red,green,blue">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.outlines="red,green,blue";
	* ```
	*/
	get outlines() : string[] {
		return fromBrushCollection(this.i.outlines);
	}
	@Input()
	set outlines(v: string[]) {
		this.i.outlines = toBrushCollection(v);
	}
	/**
	 * Gets or sets the MarkerOutlines property.
	 * The brushes property defines the palette from which automatically assigned series brushes are selected.
	* 
	* `markerOutlines` can be set declaratively to a list of color strings.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data"
	*     markerOutlines="red,green,blue">
	*   <igx-category-x-axis #xAxis
	*     label="label">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value"
	*     markerType="circle">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value"
	*     markerType="circle">
	*   </igx-column-series>
	*   <igx-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value"
	*     markerType="circle">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.markerOutlines="red,green,blue";
	* ```
	*/
	get markerOutlines() : string[] {
		return fromBrushCollection(this.i.markerOutlines);
	}
	@Input()
	set markerOutlines(v: string[]) {
		this.i.markerOutlines = toBrushCollection(v);
	}
	/**
	 * Gets or sets the DefaultAxisStroke property.
	 * The DefaultAxisStroke property defines the brush which is used by the axes when no Axis.Stroke is set.
	*/
	get defaultAxisStroke() : string {
		return brushToString(this.i.defaultAxisStroke);
	}
	@Input()
	set defaultAxisStroke(v: string) {
		this.i.defaultAxisStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the DefaultAxisMajorStroke property.
	 * The DefaultAxisMajorStroke property defines the brush which is used by the axes when no Axis.MajorStroke is set.
	*/
	get defaultAxisMajorStroke() : string {
		return brushToString(this.i.defaultAxisMajorStroke);
	}
	@Input()
	set defaultAxisMajorStroke(v: string) {
		this.i.defaultAxisMajorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the DefaultAxisMinorStroke property.
	 * The DefaultAxisMinorStroke property defines the brush which is used by the axes when no Axis.MinorStroke is set.
	*/
	get defaultAxisMinorStroke() : string {
		return brushToString(this.i.defaultAxisMinorStroke);
	}
	@Input()
	set defaultAxisMinorStroke(v: string) {
		this.i.defaultAxisMinorStroke = stringToBrush(v);
	}
	/**
	 * Margin applied to the left of the plot area.
	*/
	get plotAreaMarginLeft() : number {
		return (this.i.plotAreaMarginLeft as number);
	}
	@Input()
	set plotAreaMarginLeft(v: number) {
		this.i.plotAreaMarginLeft = +v;
	}
	/**
	 * Margin applied above the plot area.
	*/
	get plotAreaMarginTop() : number {
		return (this.i.plotAreaMarginTop as number);
	}
	@Input()
	set plotAreaMarginTop(v: number) {
		this.i.plotAreaMarginTop = +v;
	}
	/**
	 * Margin applied to the right of the plot area.
	*/
	get plotAreaMarginRight() : number {
		return (this.i.plotAreaMarginRight as number);
	}
	@Input()
	set plotAreaMarginRight(v: number) {
		this.i.plotAreaMarginRight = +v;
	}
	/**
	 * Margin applied below the plot area.
	*/
	get plotAreaMarginBottom() : number {
		return (this.i.plotAreaMarginBottom as number);
	}
	@Input()
	set plotAreaMarginBottom(v: number) {
		this.i.plotAreaMarginBottom = +v;
	}

    

		/**
	 * Notifies the chart that the CSS styles in effect have been updated.
	
	*/
	public styleUpdated() {
		this.i.styleUpdated();
	}
	/**
	 * Export serialized visual data.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}

    
}
