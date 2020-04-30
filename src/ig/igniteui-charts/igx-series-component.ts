/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, EventEmitter, Output, ComponentRef, TemplateRef, Component, AfterContentInit, OnInit, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { Visibility, Visibility_$type } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TransitionInSpeedType, TransitionInSpeedType_$type } from './TransitionInSpeedType';
import { SeriesHitTestMode, SeriesHitTestMode_$type } from './SeriesHitTestMode';
import { IgxAxisComponent } from './igx-axis-component';
import { PointUtil, IEnumerable } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Series } from './Series';
import { Rect } from 'igniteui-core/Rect';
import { DataTemplate } from 'igniteui-core/DataTemplate';
import { brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, stringToColor, colorToString, ensureEnum, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { IgxRenderRequestedEventArgs } from './igx-render-requested-event-args';
import { delegateCombine, TypeRegistrar } from 'igniteui-core/type';

export const IgxSeriesComponent_PROVIDERS = [];

/**
 * Represents the base class for all IgxDataChartComponent series.
*/
export class IgxSeriesComponent implements OnInit {
	protected _implementation: any;
	public get i(): Series {
		return this._implementation;
	}
	private onImplementationCreated() {

	}
	protected createImplementation(): Series {
		return null;
	}
	constructor() {
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
		this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
		this.onImplementationCreated();
	}

	get seriesInternal(): any {
		return this.i;
	}

	ngOnInit() {
	}

    @Input()
	set name(value: string) {
		this.i.name = value;
	}
	get name(): string {
		return this.i.name;
	}

    private _chartLevelData: any = null;
	provideData(data: any[]) {
		this._chartLevelData= data;
		this.updateDataSource();
    }

    protected onUpdateDataSource(dataSource: any): any {
        return dataSource;
    }

	private updateDataSource() {
		if (this._dataSource == null) {
			this.i.itemsSource = this.onUpdateDataSource(this._chartLevelData);
		} else {
			this.i.itemsSource = this.onUpdateDataSource(this._dataSource);
		}
	}

	private _dataSource: any = null;
    @Input()
	set dataSource(value: any) {
		this._dataSource = value;
		this.updateDataSource();
		//console.log("setting axis data source: " + value)
	}
	get dataSource(): any {
        if (this._dataSource != null) {
		    return this._dataSource;
        }
        return this.i.itemsSource;      
    }

	bindAxes(axes: IgxAxisComponent[]) {

	}

    private _tooltipTemplate: TemplateRef<any> = null;
	private _tooltipContent: ComponentRef<any> = null;
	@Input()
	set tooltipTemplate(value: TemplateRef<any>) {
		this._tooltipTemplate = value;
		if (value == null) {
			if (this._tooltipContent !== null) {
				this._tooltipContent.destroy();
				this._tooltipContent = null;
			}
		}
		if (this._tooltipContent != null) {
			this._tooltipContent.instance.template = this._tooltipTemplate;
		} else {
            if ((<any>this).owner != null) {
                (<any>this).owner._ensureTooltipCreated(this);
            }
        }
	}
	get tooltipTemplate(): TemplateRef<any> {
		return this._tooltipTemplate;
	}

	private _tooltipContainerTemplate: TemplateRef<any> = null;
	@Input()
	set tooltipContainerTemplate(value: TemplateRef<any>) {
		this._tooltipContainerTemplate = value;
		if (this._tooltipContent != null) {
			this._tooltipContent.instance.containerTemplate = this._tooltipContainerTemplate;
		}
	}
	get tooltipContainerTemplate(): TemplateRef<any> {
		return this._tooltipContainerTemplate;
	}

	private _ensureTooltipCreated(
		createTooltip: () => ComponentRef<any>,
		createWrapper: (Element) => AngularWrapper) {
        if (this._tooltipTemplate == null) {
            this.i.toolTip = null;
        }
		if (this._tooltipContent == null && this._tooltipTemplate != null) {
			let tooltip = createTooltip();
			if (tooltip == null) {
				return;
			}
			this._tooltipContent = tooltip;
            (<any>tooltip.instance).template = this._tooltipTemplate;
			this.i.toolTip = createWrapper(tooltip.location.nativeElement);	
		}
    }

	private _ensureTooltipDestroyed() {
		if (this._tooltipContent !== null) {
			this._tooltipContent.destroy();
			this._tooltipContent = null;
		}
	}

    private _renderer: AngularRenderer = null;
    private _provideRenderer(renderer: AngularRenderer) {
        this._renderer = renderer;
        this._zoneRunner = (act: () => void) => {
            if (renderer !== null) {
                (<any>renderer)._ngZone.run(act);
            } else {
                act();
            }
        }
    }

    static _createFromInternal(internal: any): IgxSeriesComponent {
        if (!internal) {
            return null;
        }
        if (!internal.$type) {
            return null;
        }
        let name = internal.$type.name;
        let externalName = "Igx" + name + "Component";
        if (!TypeRegistrar.isRegistered(externalName)) {
            return null;
        }
        return TypeRegistrar.create(externalName);
    }

		/**
	 * Gets whether the series is an annotation layer.
	* 
	* ```ts
	* let isAnnotationLayer: boolean = this.series.isAnnotationLayer;
	* ```
	*/
	get isAnnotationLayer() : boolean {
		return (this.i.isAnnotationLayer as boolean);
	}
	/**
	 * Gets whether the current series is oriented vertically.
	* 
	* ```ts
	* let isVertical: boolean = this.series.isVertical;
	* ```
	*/
	get isVertical() : boolean {
		return (this.i.isVertical as boolean);
	}
	/**
	 * Gets whether the current series is a stack fragment.
	* 
	* ```ts
	* let isFragment: boolean = this.series.isFragment;
	* ```
	*/
	get isFragment() : boolean {
		return (this.i.isFragment as boolean);
	}
	/**
	 * Gets whether the current series shows an area or line shape.
	* 
	* ```ts
	* let isAreaorLine: boolean = this.series.isAreaorLine;
	* ```
	*/
	get isAreaOrLine() : boolean {
		return (this.i.isAreaOrLine as boolean);
	}
	/**
	 * Gets whether the current series is a polar type series.
	* 
	* ```ts
	* let isPolar: boolean = this.series.isPolar;
	* ```
	*/
	get isPolar() : boolean {
		return (this.i.isPolar as boolean);
	}
	/**
	 * Gets whether the current series is a scatter type series.
	* 
	* ```ts
	* let isScatter: boolean = this.series.isScatter;
	* ```
	*/
	get isScatter() : boolean {
		return (this.i.isScatter as boolean);
	}
	/**
	 * Gets whether the current series is a radial type series.
	* 
	* ```ts
	* let isRadial: boolean = this.series.isRadial;
	* ```
	*/
	get isRadial() : boolean {
		return (this.i.isRadial as boolean);
	}
	/**
	 * Gets whether the current series is a stacked type series.
	* 
	* ```ts
	* let isStacked: boolean = this.series.isStacked;
	* ```
	*/
	get isStacked() : boolean {
		return (this.i.isStacked as boolean);
	}
	/**
	 * Gets whether the current series is a financial type series.
	* 
	* ```ts
	* let isFinancial: boolean = this.series.isFinancial;
	* ```
	*/
	get isFinancial() : boolean {
		return (this.i.isFinancial as boolean);
	}
	/**
	 * Gets whether the current series is a range type series.
	* 
	* ```ts
	* let isRange: boolean = this.series.isRange;
	* ```
	*/
	get isRange() : boolean {
		return (this.i.isRange as boolean);
	}
	/**
	 * Gets whether the current series is a category type series.
	* 
	* ```ts
	* let isCategory: boolean = this.series.isCategory;
	* ```
	*/
	get isCategory() : boolean {
		return (this.i.isCategory as boolean);
	}
	/**
	 * Gets whether the current seires is a geogrpahic series.
	* 
	* ```ts
	* let isGeographic: boolean = this.series.isGeographic;
	* ```
	*/
	get isGeographic() : boolean {
		return (this.i.isGeographic as boolean);
	}
	/**
	 * Gets whether the current series is a shape type series.
	*/
	get isShape() : boolean {
		return (this.i.isShape as boolean);
	}
	/**
	 * Gets whether the series is a value overlay.
	*/
	get isValueOverlay() : boolean {
		return (this.i.isValueOverlay as boolean);
	}
	/**
	 * Gets whether the default crosshair behavior should be disabled if this series is present.
	* 
	* `isDefaultCrosshairBehaviorDisabled` defaults to true for annotation layers. When not using annotaion layers, you can show crosshairs by setting the chart's `CrosshairVisibility` to true. 
	* 
	* ```ts
	* let isDefaultCrosshairBehaviorDisabled: boolean = this.series.isDefaultCrosshairBehaviorDisabled;
	* ```
	*/
	get isDefaultCrosshairBehaviorDisabled() : boolean {
		return (this.i.isDefaultCrosshairBehaviorDisabled as boolean);
	}
	/**
	 * Gets whether the default tooltip behavior should be disabled if this series is present.
	* 
	* ```ts
	*  let isDefaultTooltipBehaviorDisabled: boolean = this.series.isDefaultTooltipBehaviorDisabled;
	* ```
	*/
	get isDefaultTooltipBehaviorDisabled() : boolean {
		return (this.i.isDefaultTooltipBehaviorDisabled as boolean);
	}
	/**
	 * Returns whether the current series supports visual markers.
	* 
	* ```ts
	* let hasMarkers: boolean = this.series.hasMarkers;
	* ```
	*/
	get hasMarkers() : boolean {
		return (this.i.hasMarkers as boolean);
	}
	/**
	 * Gets if the series uses an index, which can be used to auto-assign it a color.
	* 
	* ```ts
	* let isIndexed: boolean = this.series.isIndexed;
	* ```
	*/
	get isIndexed() : boolean {
		return (this.i.isIndexed as boolean);
	}
	/**
	 * Gets if the series should appear in any legends.
	* 
	* ```ts
	* let isUsableInLegend: boolean = this.series.isUsableInLegend;
	* ```
	*/
	get isUsableInLegend() : boolean {
		return (this.i.isUsableInLegend as boolean);
	}
	/**
	 * Gets or sets the legend item visibility for the current series object.
	* 
	* The `LegendItemVisibilty` can be used to exclude only certain `IgxSeriesComponent` from the `IgxLegendComponent`.
	*/
	get legendItemVisibility() : Visibility {
		return this.i.legendItemVisibility;
	}
	@Input()
	set legendItemVisibility(v: Visibility) {
		this.i.legendItemVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the LegendItemBadgeTemplate property.
	 * The legend item badge is created according to the LegendItemBadgeTemplate on-demand by 
	 * the series object itself.
	*/
	get legendItemBadgeTemplate() : IgDataTemplate {
		return (this.i.legendItemBadgeTemplate as IgDataTemplate);
	}
	@Input()
	set legendItemBadgeTemplate(v: IgDataTemplate) {
		this.i.legendItemBadgeTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the LegendItemTemplate property.
	 * The legend item control content is created according to the LegendItemTemplate on-demand by 
	 * the series object itself.
	*/
	get legendItemTemplate() : IgDataTemplate {
		return (this.i.legendItemTemplate as IgDataTemplate);
	}
	@Input()
	set legendItemTemplate(v: IgDataTemplate) {
		this.i.legendItemTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the DiscreteLegendItemTemplate property.
	 * The legend item control content is created according to the DiscreteLegendItemTemplate on-demand by 
	 * the series object itself.
	*/
	get discreteLegendItemTemplate() : IgDataTemplate {
		return (this.i.discreteLegendItemTemplate as IgDataTemplate);
	}
	@Input()
	set discreteLegendItemTemplate(v: IgDataTemplate) {
		this.i.discreteLegendItemTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the easing function used to morph the current series.
	* 
	* The `TransitioninDuration` and `transitionEasingFunction` can be used to play animation when data is added or removed from a `IgxSeriesComponent`. To play an initial animation see `transitionInDuration`.
	* 
	* ```ts
	* this.series.transitionEasingFunction =  EasingFunctions.cubicEase;
	* ```
	*/
	get transitionEasingFunction() : (time: number) => number {
		return this.i.transitionEasingFunction;
	}
	@Input()
	set transitionEasingFunction(v: (time: number) => number) {
		this.i.transitionEasingFunction = v;
	}
	/**
	 * Gets or sets the EasingFunction used to morph the current series during the initial transition.
	* 
	* The `transitionInEasingFunction` can be used with `IsTransitionInEnabled` to cofigure the animation when a new datasource is loaded.
	* 
	* ```ts
	* this.series.transitionInEasingFunction =  EasingFunctions.cubicEase;
	* ```
	*/
	get transitionInEasingFunction() : (time: number) => number {
		return this.i.transitionInEasingFunction;
	}
	@Input()
	set transitionInEasingFunction(v: (time: number) => number) {
		this.i.transitionInEasingFunction = v;
	}
	/**
	 * Gets or sets the duration of the current series's morph.
	* 
	* The `transitionDuration` can be used to play animation when data is added or removed from a `IgxSeriesComponent`. To play an initial animation see `transitionInDuration`.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     animateSeriesWhenAxisRangeChanges=true>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         transitionInMode="accordionFromBottom"
	*         isTransitionInEnabled=true
	*         transitionInSpeedType="indexScaled"    
	*         transitionDuration=500    
	*         transitionInDuration=500>
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.transitionDuration = 500;
	* ```
	*/
	get transitionDuration() : number {
		return (this.i.transitionDuration as number);
	}
	@Input()
	set transitionDuration(v: number) {
		this.i.transitionDuration = +v;
	}
	/**
	 * Gets or sets the current series object's rendering resolution.
	* 
	* Setting the `resolution` on a Series to a higher value can help with performance, but it will lower the graphical fidelity of the line. As such, it can be increased up until the fidelity is unacceptable.
	* 
	* ```html
	*  <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         resolution=1.5>
	*     </igx-line-series>
	* </igx-data-chart> 
	* ```
	* 
	* ```ts
	* this.series.resolution = 1.5;
	* ```
	*/
	get resolution() : number {
		return (this.i.resolution as number);
	}
	@Input()
	set resolution(v: number) {
		this.i.resolution = +v;
	}
	/**
	 * Gets or sets the Title property.
	 * The legend item control is created according to the Title on-demand by 
	 * the series object itself.
	* 
	* The `IgxSeriesComponent` `title` may be used in tooltips and legends.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         showDefaultTooltip="true"
	*         title="InStock Items">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.title = "InStock Items";
	* ```
	*/
	get title() : any {
		return this.i.title as any;
	}
	@Input()
	set title(v: any) {
		this.i.title = v;
	}
	/**
	 * Gets or sets the brush to use for the series.
	* 
	* The `brush` along with the `outline` and `Negative Brush` can be used to affect the visuals of the `IgxSeriesComponent`.
	* 
	* ```html
	* <igx-data-chart #chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-area-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         brush="red">
	*     </igx-area-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.brush = "red";
	* ```
	*/
	get brush() : string {
		return brushToString(this.i.brush);
	}
	@Input()
	set brush(v: string) {
		this.i.brush = stringToBrush(v);
	}
	/**
	 * Gets the effective brush for the current series object.
	* 
	* ```ts
	* let actualBrush: string = series.actualBrush;
	* ```
	*/
	get actualBrush() : string {
		return brushToString(this.i.actualBrush);
	}
	@Input()
	set actualBrush(v: string) {
		this.i.actualBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the outline of the series.
	 * Some series types, such as LineSeries, do not display outlines.  Therefore, this property does not affect some charts.
	* 
	* The `outline` along with the `brush` and `NegativeBrush` can be used to affect the visuals of the `IgxSeriesComponent`.
	* 
	* ```html
	* <igx-data-chart #chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-area-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         outline="red">
	*     </igx-area-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.brush = "red";
	* ```
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	@Input()
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets the effective outline for the current series object.
	* 
	* ```ts
	* let actualOutline: string = series.ActualOutline;
	* ```
	*/
	get actualOutline() : string {
		return brushToString(this.i.actualOutline);
	}
	@Input()
	set actualOutline(v: string) {
		this.i.actualOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the width of the current series object's line thickness.
	* 
	* Depending on the `IgxSeriesComponent` type, this can be the main brush used, or just the outline. For example, when using a `IgxLineSeriesComponent` it will affect the thickness of the lines drawn, whereas when using a `IgxColumnSeriesComponent` it will affect the outer border thickness of the columns.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         thickness=5>
	*     </igx-line-series>
	* </igx-data-chart> 
	* ```
	* 
	* ```ts
	* this.series.thickness=5;
	* ```
	*/
	get thickness() : number {
		return (this.i.thickness as number);
	}
	@Input()
	set thickness(v: number) {
		this.i.thickness = +v;
	}
	/**
	 * Gets or sets whether highlighting should be enabled for this series, if this type of series supports highlighting.
	* 
	* ```html
	* <igx-data-chart #chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isHighlightEnabled="true">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.isHighlightingEnabled = true;
	* ```
	*/
	get isHighlightingEnabled() : boolean {
		return (this.i.isHighlightingEnabled as boolean);
	}
	@Input()
	set isHighlightingEnabled(v: boolean) {
		this.i.isHighlightingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether drop shadow should be enabled for this series.
	* 
	* `isDropShadowEnabled` is used to decide whether drop shadow should be enabled for this series.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isDropShadowEnabled=true>
	*     </igx-line-series>
	*     </igx-data-chart> 
	* ```
	* 
	* ```ts
	* this.series.isDropShadowEnabled = true;
	* ```
	*/
	get isDropShadowEnabled() : boolean {
		return (this.i.isDropShadowEnabled as boolean);
	}
	@Input()
	set isDropShadowEnabled(v: boolean) {
		this.i.isDropShadowEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the shadow blur.
	 * This property is ignored when Series.UseSingleShadow is set to true.
	* 
	* `shadowBlur` can be set in conjection with `isDropShadowEnabled` to further define the drop shadow effect.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isDropShadowEnabled="true"
	*         shadowBlur="7"
	*         shadowColor="blue">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.shadowBlur = 7;
	* ```
	*/
	get shadowBlur() : number {
		return (this.i.shadowBlur as number);
	}
	@Input()
	set shadowBlur(v: number) {
		this.i.shadowBlur = +v;
	}
	/**
	 * Gets or sets the drop shadow color.
	* 
	* `shadowColor` can be set in conjection with `isDropShadowEnabled` to further define the drop shadow effect.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isDropShadowEnabled="true"
	*         shadowBlur="7"
	*         shadowColor="blue">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.shadowColor = "blue";
	* ```
	*/
	get shadowColor() : string {
		return colorToString(this.i.shadowColor);
	}
	@Input()
	set shadowColor(v: string) {
		this.i.shadowColor = stringToColor(v);
	}
	/**
	 * Gets or sets whether drop shadow is applied to the whole series visual or to each of the individual shapes forming the series.
	 * When this property is set to true, no Series.ShadowBlur is applied.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isDropShadowEnabled=true
	*         markerType="circle"
	*         useSingleShadow=true>
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.useSingleShadow = true;
	* ```
	*/
	get useSingleShadow() : boolean {
		return (this.i.useSingleShadow as boolean);
	}
	@Input()
	set useSingleShadow(v: boolean) {
		this.i.useSingleShadow = ensureBool(v);
	}
	/**
	 * Gets or sets the drop shadow x-offset.
	* 
	* `shadowOffsetX` can be set in conjection with `isDropShadowEnabled` to further define the drop shadow effect.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isDropShadowEnabled="true"
	*         shadowOffsetX="10"
	*         shadowOffsetY="10">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.shadowOffsetX = 10;
	* ```
	*/
	get shadowOffsetX() : number {
		return (this.i.shadowOffsetX as number);
	}
	@Input()
	set shadowOffsetX(v: number) {
		this.i.shadowOffsetX = +v;
	}
	/**
	 * Gets or sets the drop shadow y-offset.
	* 
	* `shadowOffsetY` can be set in conjection with `isDropShadowEnabled` to further define the drop shadow effect.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isDropShadowEnabled="true"
	*         shadowOffsetX="10"
	*         shadowOffsetY="10">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.shadowOffsetY = 10;
	* ```
	*/
	get shadowOffsetY() : number {
		return (this.i.shadowOffsetY as number);
	}
	@Input()
	set shadowOffsetY(v: number) {
		this.i.shadowOffsetY = +v;
	}
	/**
	 * Gets or sets the opacity applied to the area fill visual.
	 * This property only applies to series that have area visual.
	* 
	* ```html
	* <igx-data-chart #chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-area-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         areaFillOpacity=.5>
	*     </igx-area-series>
	* </igx-data-chart>  
	* ```
	*/
	get areaFillOpacity() : number {
		return (this.i.areaFillOpacity as number);
	}
	@Input()
	set areaFillOpacity(v: number) {
		this.i.areaFillOpacity = +v;
	}
	/**
	 * Gets the actual opacity applied to the area fill visual.
	* 
	* ```ts
	* let actualFillOpacity: number = series.actualAreaFillOpacity;
	* ```
	*/
	get actualAreaFillOpacity() : number {
		return (this.i.actualAreaFillOpacity as number);
	}
	@Input()
	set actualAreaFillOpacity(v: number) {
		this.i.actualAreaFillOpacity = +v;
	}
	/**
	 * Gets if the default tooltip has been selected for display.
	* 
	* To use the default tooltip set `showDefaultTooltip` to true.
	* 
	* ```ts
	* let isDefaultToolTipSelected: boolean = this.series.isDefaultToolTipSelected;
	* ```
	*/
	get isDefaultToolTipSelected() : boolean {
		return (this.i.isDefaultToolTipSelected as boolean);
	}
	@Input()
	set isDefaultToolTipSelected(v: boolean) {
		this.i.isDefaultToolTipSelected = ensureBool(v);
	}
	/**
	 * Gets or sets whether default tooltip will be shown.
	* 
	* The default tooltips display all the information relevant to the particular series item (series title, data values, axis values etc.) and are styled to match the series' style. When using default tooltips, you should also set the series `title`.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         showDefaultTooltip="true"
	*         title="InStock Items">
	*     </igx-column-series>
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.showDefaultTooltip ="true";
	* ```
	*/
	get showDefaultTooltip() : boolean {
		return (this.i.showDefaultTooltip as boolean);
	}
	@Input()
	set showDefaultTooltip(v: boolean) {
		this.i.showDefaultTooltip = ensureBool(v);
	}
	/**
	 * Gets or sets the duration of the current series's transition in morph.
	* 
	* The `transitionInDuration` can be used with `IsTransitionInEnabled` to cofigure the animation when a new datasource is loaded.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         transitionInMode="accordionFromBottom"
	*         isTransitionInEnabled=true
	*         transitionInSpeedType="indexScaled"    
	*         transitionDuration=500    
	*         transitionInDuration=500>
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.transitionDuration = 500;
	* ```
	*/
	get transitionInDuration() : number {
		return (this.i.transitionInDuration as number);
	}
	@Input()
	set transitionInDuration(v: number) {
		this.i.transitionInDuration = +v;
	}
	/**
	 * Gets or sets the duration of the current series's transition in morph.
	* 
	* The `transitionInSpeedType` can be used with `IsTransitionInEnabled` to cofigure the animation when a new datasource is loaded.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         transitionInMode="accordionFromBottom"
	*         isTransitionInEnabled=true
	*         transitionInSpeedType="indexScaled"  
	*         transitionInDuration=500>
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.transitionInSpeedType = TransitionInSpeedType.IndexScaled;
	* ```
	*/
	get transitionInSpeedType() : TransitionInSpeedType {
		return this.i.transitionInSpeedType;
	}
	@Input()
	set transitionInSpeedType(v: TransitionInSpeedType) {
		this.i.transitionInSpeedType = ensureEnum<TransitionInSpeedType>(TransitionInSpeedType_$type, v);
	}
	/**
	 * Gets or sets the whether the chart reacts to mouse move events.
	*/
	get mouseOverEnabled() : boolean {
		return (this.i.mouseOverEnabled as boolean);
	}
	@Input()
	set mouseOverEnabled(v: boolean) {
		this.i.mouseOverEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the coercion methods to use when loading data from data sources.
	 * Should be specified before setting any member paths, if being used. Setting it later 
	 * will not cause data to be reimported into the chart.
	* 
	* ```html
	*  <igx-data-chart
	*       [dataSource]="data"      
	*      >
	*       <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis       
	*         #yAxis>
	*       </igx-numeric-y-axis>     
	*       <igx-line-series
	*       [xAxis]="xAxis"
	*       [yAxis]="yAxis"     
	*       valueMemberPath="value">
	*      </igx-line-series>
	*        <igx-line-series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         [coercionMethods]= cMethods
	*         valueMemberPath="value!ValueCoercion">
	*        </igx-line-series>        
	*     </igx-data-chart> 
	* ```
	* 
	* &lt;-- position: content member-->
	* 
	* ```ts
	* cMethods: any = {
	*     ValueCoercion: function(value:number): number {return value+2;}
	*  }
	* ```
	*/
	get coercionMethods() : any {
		return this.i.coercionMethods as any;
	}
	@Input()
	set coercionMethods(v: any) {
		this.i.coercionMethods = v;
	}
	/**
	 * Gets or sets whether the series should expect that properties in its items source may be functions that need to be
	 * evaluated to yield their value. This defaults to false, as there will be a subtle performance impact to using this feature.
	 * This value must be set before assigning an item's source to take effect.
	* 
	* `expectFunctions` is used to decide whether the series should expect that its data source members need to be called as functions to get their values.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*     #yAxis>
	*     </igx-numeric-y-axis>      
	*     <igx-line-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     expectFunctions=true
	*     valueMemberPath="MyFunction">
	*     </igx-line-series>        
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.expectFunctions=true;
	* ```
	*/
	get expectFunctions() : boolean {
		return (this.i.expectFunctions as boolean);
	}
	@Input()
	set expectFunctions(v: boolean) {
		this.i.expectFunctions = ensureBool(v);
	}
	/**
	 * Method of hit testing to use when pointing to items in this series.
	* 
	* The `hitTestMode` can be set to either:
	* 
	* -   `Auto`: automatically decide the appropriate hit test mode for the series.
	* -   `ColorEncoded`: use a color encoded off screen buffer for hit testing. Should always be O(1) time for determining a hit series. This increases frame render time and memory usage, however. Consider using this if hit testing time is degrading performance.
	* -   `Computational`: use a computational based approach to determine whether the series has been hit. This uses loose bounding boxes, in some cases, and can range in time complexity between O(1) and O(log n) to find a hit. This decreases frame render time compared to color encoded
	* 
	* ```ts
	* this.series.hitTestMode = SeriesHitTestMode.Computational;
	* ```
	*/
	get hitTestMode() : SeriesHitTestMode {
		return this.i.hitTestMode;
	}
	@Input()
	set hitTestMode(v: SeriesHitTestMode) {
		this.i.hitTestMode = ensureEnum<SeriesHitTestMode>(SeriesHitTestMode_$type, v);
	}
	/**
	 * Resolved method of hit testing to use when pointing to items in the chart.
	* 
	* ```ts
	* let hitTestMode: SeriesHitTestMode = this.series.actualHitTestMode;
	* ```
	*/
	get actualHitTestMode() : SeriesHitTestMode {
		return this.i.actualHitTestMode;
	}
	@Input()
	set actualHitTestMode(v: SeriesHitTestMode) {
		this.i.actualHitTestMode = ensureEnum<SeriesHitTestMode>(SeriesHitTestMode_$type, v);
	}
	/**
	 * Overridden by derived series classes to indicate when negative colors are supported or not.
	*/
	get isNegativeColorSupported() : boolean {
		return (this.i.isNegativeColorSupported as boolean);
	}
	/**
	 * Overridden by derived series classes to indicate when markerless display is preferred or not.
	*/
	get isMarkerlessDisplayPreferred() : boolean {
		return (this.i.isMarkerlessDisplayPreferred as boolean);
	}
	/**
	 * The final value of this series.
	*/
	get finalValue() : number {
		return (this.i.finalValue as number);
	}
	@Input()
	set finalValue(v: number) {
		this.i.finalValue = +v;
	}
	/**
	 * The percent change from the beginning to the end of this series.
	*/
	get percentChange() : number {
		return (this.i.percentChange as number);
	}
	@Input()
	set percentChange(v: number) {
		this.i.percentChange = +v;
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
	        genericPrefix = toSpinal("SeriesComponent");
		
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
	 * Gets the brush for tooltip labels.
	
	*/
	public resolveTooltipBrush() : string {
		let iv = this.i.resolveTooltipBrush();
		return (iv);
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Gets the precise item index, if possible, based on the closeness to the previous or next whole integer. If the series cannot provide this information, GetExactItemIndex will return the same integer value as GetItemIndex.
	
	* @param world  * The world position for which to return the index.
	* 
	* ```ts
	* let index: number = this.series.getExactItemIndex({x:.5,y:.5});
	* ```
	*/
	public getExactItemIndex(world: IgPoint) : number {
		let iv = this.i.getExactItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the item item index associated with the specified world position
	
	* 
	* ```ts
	* let index: number = this.series.getItemIndex({x:.5,y:.5});
	* ```
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	* 
	* ```ts
	* let item: number = this.series.getItem({x:.5,y:.5});
	* ```
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	public getPreviousOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getPreviousOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getNextOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getNextOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	/**
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	* 
	* ```ts
	* let box: IgxRect = this.series.getSeriesValueBoundingBox({x:.8,y:.8});
	* ```
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	/**
	 * If possible, will return the best available value marker bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinates for which to get a value marker bounding box for
	* 
	* ```ts
	* let box: IgxRect = this.series.getSeriesValueMarkerBoundingBox({x:.8,y:.8});
	* ```
	*/
	public getSeriesValueMarkerBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueMarkerBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	public getSeriesHighValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesHighValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesHighValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesHighValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesLowValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesLowValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesLowValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesLowValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesValuePositionFromSeriesPixel(mouse: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesValuePositionFromSeriesPixel(toPoint(mouse), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesValueFromSeriesPixel(mouse: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValueFromSeriesPixel(toPoint(mouse), useInterpolation, skipUnknowns);
		return (iv);
	}
	/**
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	* 
	* ```ts
	* let span: number = this.series.getItemSpan();
	* ```
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
	/**
	 * Hides any internal tooltips presented by the series, if any.
	
	*/
	public hideToolTips() {
		this.i.hideToolTips();
	}
	/**
	 * Converts a point from coordinates within the series plot area to a world position within axis space.
	
	* @param seriesPoint  * The pixel location within the plot area of the series.
	* 
	* ```ts
	* this.series.toWorldPosition({x:500,y:500});
	* ```
	*/
	public toWorldPosition(seriesPoint: IgPoint) : IgPoint {
		let iv = this.i.toWorldPosition(toPoint(seriesPoint));
		return fromPoint(iv);
	}
	/**
	 * Converts a point from world coordinates to coordinates within the viewport of the series.
	
	* @param world  * The world position from which to convert.
	* 
	* ```ts
	* let pt: IgxPoint = this.series.fromWorldPosition({x:.5,y:.5});
	* ```
	*/
	public fromWorldPosition(world: IgPoint) : IgPoint {
		let iv = this.i.fromWorldPosition(toPoint(world));
		return fromPoint(iv);
	}
	/**
	 * Requests that the provided item should be brought into view if possible.
	
	* @param item  * The item to attempt to bring into view.
	* 
	* ```ts
	* this.series.scrollIntoView(dataItem);
	* ```
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
	/**
	 * Renders the series.
	
	* @param animate  * True if the change should be animated.
	* 
	* ```ts
	* this.series.renderSeries(true);
	* ```
	*/
	public renderSeries(animate: boolean) {
		this.i.renderSeries(animate);
	}
	/**
	 * Gets the effective viewport, adjusted to account for margins and other factors.
	
	*/
	public getEffectiveViewport() : IgRect {
		let iv = this.i.getEffectiveViewport();
		return fromRect(iv);
	}
	/**
	 * Removes all alternate views of this series.
	
	*/
	public removeAllAlternateViews() {
		this.i.removeAllAlternateViews();
	}
	/**
	 * Removes an alternate view of this series.
	
	* @param viewIdentifier  * The string identifier for the view to remove.
	*/
	public removeAlternateView(viewIdentifier: string) {
		this.i.removeAlternateView(viewIdentifier);
	}
	/**
	 * Replays the assigned transition in animation, if any.
	
	* 
	* ```ts
	* this.series.replayTransitionIn();
	* ```
	*/
	public replayTransitionIn() {
		this.i.replayTransitionIn();
	}
	/**
	 * Call to null out the axes of the series;
	
	*/
	public removeAxes() {
		this.i.removeAxes();
	}
	/**
	 * Simulates a pointer hover over the series surface.
	
	* @param point  * The pointer position relative to the series viewport over which to hover.
	* 
	* When tooltips are enabled, `simulateHover` can be used to automatically display the tooltip over a particular series item.
	* 
	* ```ts
	* this.series.simulateHover({x:250,y:250});
	* ```
	*/
	public simulateHover(point: IgPoint) {
		this.i.simulateHover(toPoint(point));
	}
	/**
	 * Called when this series' Style is updated.
	
	*/
	public styleUpdated() {
		this.i.styleUpdated();
	}
	public setNegativeColors(negativeBrush: string, negativeOutline: string) {
		this.i.setNegativeColors(stringToBrush(negativeBrush), stringToBrush(negativeOutline));
	}
	/**
	 * Moves the cursor point to the provided world position. Some series may react to the current cursor position.
	
	* @param point  * The cursor point, in world coordinates.
	* 
	* `moveCursorPoint` can be used on annotation layers to programitically show the annotation at the given point.
	* 
	* ```ts
	* this.crosshair.moveCursorPoint({x:.5,y:.5});
	* ```
	*/
	public moveCursorPoint(point: IgPoint) {
		this.i.moveCursorPoint(toPoint(point));
	}

    	private _renderRequested: EventEmitter<{ sender: any, args: IgxRenderRequestedEventArgs}> = null;
	/**
	 * This event is raised every time a render has been requested from a series.
	*/
	@Output()
	get renderRequested(): EventEmitter<{ sender: any, args: IgxRenderRequestedEventArgs}> {
		if (this._renderRequested == null) {
			this._renderRequested = new EventEmitter<{sender: any, args: IgxRenderRequestedEventArgs}>();
			this.i.renderRequested = delegateCombine(this.i.renderRequested, (o, e) => {
				let outerArgs = new IgxRenderRequestedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeRenderRequested) {
	                            (this as any).beforeRenderRequested(this, outerArgs);
	                        }
					    this._renderRequested.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._renderRequested;
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
