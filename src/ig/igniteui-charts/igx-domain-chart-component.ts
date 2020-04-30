import { Component, TemplateRef, EventEmitter, Output, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IChartLegend } from 'igniteui-core/IChartLegend';
import { HorizontalAlignment, HorizontalAlignment_$type } from 'igniteui-core/HorizontalAlignment';
import { UnknownValuePlotting, UnknownValuePlotting_$type } from 'igniteui-core/UnknownValuePlotting';
import { TrendLineType, TrendLineType_$type } from 'igniteui-core/TrendLineType';
import { IgxChartSeriesEventArgs } from './igx-chart-series-event-args';
import { DomainChart } from "./DomainChart";
import { brushToString, stringToBrush, toBrushCollection, fromBrushCollection, fromRect, toRect, ensureBool, ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { typeGetValue, EnumUtil, IEnumerable } from "igniteui-core/type";
import { delegateCombine } from 'igniteui-core/type';
import { IgxDomainChartSeriesPointerEventArgs } from './igx-domain-chart-series-pointer-event-args';
import { MarkerTypeCollection as MarkerTypeCollection_internal } from './MarkerTypeCollection';
import { IgxMarkerTypeCollection } from './igx-marker-type-collection';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { ToolTipType, ToolTipType_$type } from 'igniteui-charts/ToolTipType';
import { CrosshairsDisplayMode, CrosshairsDisplayMode_$type } from 'igniteui-charts/CrosshairsDisplayMode';
import { IgxCalloutStyleUpdatingEventArgs } from 'igniteui-charts/igx-callout-style-updating-event-args';

export const IgxDomainChartComponent_PROVIDERS = [];
export abstract class IgxDomainChartComponent implements OnInit
{
    protected createImplementation() : DomainChart
    {
	    return null;
    }
    ngOnInit() {
    }
	protected _implementation: any;
	public get i() : DomainChart {
		return this._implementation;
	}
	protected onImplementationCreated() {
		
	}
	constructor() {
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }

		this._implementation = this.createImplementation();
		(<any>this._implementation).externalObject = this;
		this.onImplementationCreated();
	}

    /**
	* Sets or gets the template reference to use for tooltips for all the series.
	* 
	* 
	*/
	get tooltipTemplate() : TemplateRef<any> {
		return <any>this.i.tooltipTemplate;
	}
	
	@Input()
	set tooltipTemplate(v: TemplateRef<any>) {
		this.i.tooltipTemplate = v;
	}

    /**
	* Sets or gets the template references to use for tooltips for all the series, in order.
	* 
	* 
	*/
	get tooltipTemplates() : TemplateRef<any>[] {
        let ret: TemplateRef<any>[] = [];
        if (this.i.tooltipTemplates) {
            for (let ii = 0; ii < this.i.tooltipTemplates.count; ii++) {
                ret.push(this.i.tooltipTemplates.item(ii));
            }
        }
		return ret;
	}
	
	@Input()
	set tooltipTemplates(v: TemplateRef<any>[]) {
		this.i.tooltipTemplates.clear();
        if (v) {
            for (let ii = 0; ii < v.length; ii++) {
                this.i.tooltipTemplates.add(v[ii]);
            }
        }
	}

    get legend(): any {
        if (this.i.legend != null)
            return (<any>this.i.legend).externalObject;
    }
    @Input()
    set legend(v: any) {
        if (v != undefined && v != null)
            this.i.legend = v.i;
    }

    private _calloutsDataSource: Array<any> = null;
    @Input()
    set calloutsDataSource(value: Array<any>) {
        this._calloutsDataSource = value;
        this.bindCalloutsData();
    }
    get calloutsDataSource(): Array<any> {
        return this._calloutsDataSource;
    }

    bindCalloutsData() {
        if (this.i != null && this.i !== undefined) {
            this.i.calloutsItemsSource = <IEnumerable><any>this._calloutsDataSource;
        }
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
	 * Gets or sets the left margin of chart title
	* 
	*  Use `titleLeftMargin` property for the left margin of chart title.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data" 
	* 	titleLeftMargin= 10>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.titleLeftMargin = 10;
	* ```
	*/
	get titleLeftMargin() : number {
		return (this.i.titleLeftMargin as number);
	}
	@Input()
	set titleLeftMargin(v: number) {
		this.i.titleLeftMargin = +v;
	}
	/**
	 * Gets or sets the right margin of chart title
	* 
	*  Use `titleLeftMargin` property for the right margin of chart title.
	* 
	* ```html
	* <igx-category-chart 
	* 		yAxisMinimumValue="0"
	* 		[dataSource]="data"               
	* 		titleRightMargin= 10>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.titleRightMargin = 10;
	* ```
	*/
	get titleRightMargin() : number {
		return (this.i.titleRightMargin as number);
	}
	@Input()
	set titleRightMargin(v: number) {
		this.i.titleRightMargin = +v;
	}
	/**
	 * Gets or sets the top margin of chart title
	* 
	*  Use `titleTopMargin` property for the top margin of chart title.
	* 
	* ```html
	* <igx-category-chart 
	*      yAxisMinimumValue="0" 
	*      [dataSource]="data"       
	*      title="Countries"   
	*      titleTopMargin=10 >
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.titleTopMargin = 10;
	* ```
	*/
	get titleTopMargin() : number {
		return (this.i.titleTopMargin as number);
	}
	@Input()
	set titleTopMargin(v: number) {
		this.i.titleTopMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin of chart title
	* 
	*  Use `titleBottomMargin` property for the bottom margin of chart title.
	* 
	* ```html
	* <igx-category-chart 
	*    yAxisMinimumValue="0"
	*    [dataSource]="data"    
	*    titleBottomMargin= 10 >
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.titleBottomMargin = 5;
	* ```
	*/
	get titleBottomMargin() : number {
		return (this.i.titleBottomMargin as number);
	}
	@Input()
	set titleBottomMargin(v: number) {
		this.i.titleBottomMargin = +v;
	}
	/**
	 * Gets or sets the left margin of chart subtitle
	* 
	* Use `subtitleLeftMargin` property for the left margin of chart subtitle.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"         
	*     subtitleLeftMargin= 20>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.subtitleLeftMargin = 20 ;
	* ```
	*/
	get subtitleLeftMargin() : number {
		return (this.i.subtitleLeftMargin as number);
	}
	@Input()
	set subtitleLeftMargin(v: number) {
		this.i.subtitleLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin of chart subtitle
	* 
	* Use `subtitleTopMargin` property for the top margin of chart subtitle.
	* 
	* ```html
	*    <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"
	*       subtitle= "This is a subtitle"           
	*       subtitleTopMargin=10>
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.subtitleTopMargin = 10;
	* ```
	*/
	get subtitleTopMargin() : number {
		return (this.i.subtitleTopMargin as number);
	}
	@Input()
	set subtitleTopMargin(v: number) {
		this.i.subtitleTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin of chart subtitle
	* 
	* Use `subtitleRightMargin` property for the right margin of chart subtitle.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     subtitleRightMargin= 10>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.subtitleRightMargin = 20 ;
	* ```
	*/
	get subtitleRightMargin() : number {
		return (this.i.subtitleRightMargin as number);
	}
	@Input()
	set subtitleRightMargin(v: number) {
		this.i.subtitleRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin of chart subtitle
	* 
	* Use `subtitleBottomMargin` property for the bottom margin of chart subtitle.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"
	* 	subtitleBottomMargin=10>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.subtitleBottomMargin = 10 ;
	* ```
	*/
	get subtitleBottomMargin() : number {
		return (this.i.subtitleBottomMargin as number);
	}
	@Input()
	set subtitleBottomMargin(v: number) {
		this.i.subtitleBottomMargin = +v;
	}
	/**
	 * Gets or sets color of chart subtitle
	* 
	* Use `subtitleTextColor` property to color the subtitle.
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"
	*       subtitle= "This is a subtitle"     
	*       subtitleTextColor= 'blue'>
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.subtitleTextColor = "#ff0000" ;
	* ```
	*/
	get subtitleTextColor() : string {
		return brushToString(this.i.subtitleTextColor);
	}
	@Input()
	set subtitleTextColor(v: string) {
		this.i.subtitleTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets color of chart title
	* 
	*  Use `titleTextColor` property to color the chart title
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"            
	*       titleTextColor= "red">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.titleTextColor="red" ;
	* ```
	*/
	get titleTextColor() : string {
		return brushToString(this.i.titleTextColor);
	}
	@Input()
	set titleTextColor(v: string) {
		this.i.titleTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the left margin of the chart content.
	* 
	* Use the 'leftMargin' property for the left margin of the chart content.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"      
	*       leftMargin=20>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.leftMargin = 20;
	* ```
	*/
	get leftMargin() : number {
		return (this.i.leftMargin as number);
	}
	@Input()
	set leftMargin(v: number) {
		this.i.leftMargin = +v;
	}
	/**
	 * Gets or sets the top margin of the chart content.
	* 
	* Use `topMargin` property for the margin of the chart content.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0" 
	*     [dataSource]="data"       
	*     topMargin= 20>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.topMargin=20;
	* ```
	*/
	get topMargin() : number {
		return (this.i.topMargin as number);
	}
	@Input()
	set topMargin(v: number) {
		this.i.topMargin = +v;
	}
	/**
	 * Gets or sets the right margin of the chart content.
	* 
	* Use `rightMargin` property for the right margin of the chart content.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"          
	*     rightMargin=20>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*   this.chart.rightMargin = 20 ;
	* ```
	*/
	get rightMargin() : number {
		return (this.i.rightMargin as number);
	}
	@Input()
	set rightMargin(v: number) {
		this.i.rightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin around the chart content.
	* 
	* Use the `bottomMargin` property for the bottom margin around the chart content.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data" 
	*       bottomMargin= 20>
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.bottomMargin=20;
	* ```
	*/
	get bottomMargin() : number {
		return (this.i.bottomMargin as number);
	}
	@Input()
	set bottomMargin(v: number) {
		this.i.bottomMargin = +v;
	}
	/**
	 * Gets or sets the duration used for animating series plots when the data is changing
	* 
	* Use the `transitionDuration` property to animating between data values.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0" 
	*     [dataSource]="data"       
	*     transitionDuration="500">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.transitionDuratio= 500;
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
	 * Gets or sets the easing function used for animating series plots when the data is changing.
	 * This can be set to one of the known values "linear" or "cubic," or it can be set to an easing function which takes a single numeric parameter and returns a number.
	* 
	* The 'transitionInEasingFunction' property used for easing function for animating series plots when the chart is loading into view.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0" 
	*     [dataSource]="data"       
	*     transitionInEasingFunction= "cubic">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.transitionInEasingFunction=  this.cubicFunc;
	* 
	* cubicFunc(time: number) : number
	*   {
	*     return time;
	*   }
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
	 * Gets or sets CSS font property for the chart subtitle
	* 
	* Use `subtitleTextStyle` property for the CSS font of the chart subtitle.
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"
	*       subtitle= "This is a subtitle"          
	*       subtitleTextStyle ="16pt Verdona">
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.subtitleTextStyle= "16pt Verdona";
	* ```
	*/
	get subtitleTextStyle() : string {
		return (this.i.subtitleTextStyle as string);
	}
	@Input()
	set subtitleTextStyle(v: string) {
		this.i.subtitleTextStyle = v;
	}
	/**
	 * Gets or sets CSS font property for the chart title
	* 
	* Use `titleTextStyle` property for the CSS font property of the chart title
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"          
	*       titleTextStyle= "24pt Verdona">
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleTextStyle = "24pt Verdona";
	* ```
	*/
	get titleTextStyle() : string {
		return (this.i.titleTextStyle as string);
	}
	@Input()
	set titleTextStyle(v: string) {
		this.i.titleTextStyle = v;
	}
	/**
	 * Gets or sets a set of property paths that should be included for consideration by the category chart, leaving the remainder excluded. If null, all properties will be considered.
	* 
	* The `includedProperties` property used to include the properties for the consideration of the category chart.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0" 
	*     [dataSource]="data" 
	*     includedProperties="ProductName,Cost" >
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.includedProperties = ["ProductName", "Cost"];
	* ```
	*/
	get includedProperties() : string[] {
		return this.i.includedProperties as string[];
	}
	@Input()
	set includedProperties(v: string[]) {
		this.i.includedProperties = v;
	}
	/**
	 * Gets or sets a set of property paths that should be excluded from consideration by the category chart.
	* 
	* The `excludedProperties` property used for the property paths that should be excluded from consideration by the category chart.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     excludedProperties="ID">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.excludedProperties = ["ID", "Discount"];
	* ```
	*/
	get excludedProperties() : string[] {
		return this.i.excludedProperties as string[];
	}
	@Input()
	set excludedProperties(v: string[]) {
		this.i.excludedProperties = v;
	}
	/**
	 * Gets or sets the palette of brushes to use for coloring the chart series.
	 * The value provided should be an array of CSS color strings or JavaScript objects defining gradients. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection
	* 
	* Use the `brushes` property to  set the brushes.
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"      
	*       Brushes="#ff0000, #cc0000, #aa0000">
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.brushes = ["#ff0000","#00ff00"];
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
	 * Gets or sets the palette of brushes to use for outlines on the chart series.
	 * The value provided should be an array of CSS color strings or JavaScript objects defining gradients. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection
	* 
	*  Use the `outlines` property to sets the palette of brushes to use for outlines on the chart series
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     outlines="#ff0000, #cc0000, #aa0000">
	* </igx-category-chart>
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
	 * Gets or sets whether the chart can be horizontally zoomed through user interactions.
	* 
	* Use the `isHorizontalZoomEnabled` property to allow chart horizontally zoomed .
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"      
	*       isHorizontalZoomEnabled=true>
	*   </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.isHorizontalZoomEnabled = true;
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
	 * Gets or sets whether the chart can be vertically zoomed through user interactions.
	* 
	* Use the `isVerticalZoomEnabled` property to allow chart zoom vertically.
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0"
	*       [dataSource]="data"          
	*       isVerticalZoomEnabled=true>
	*     </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.isVerticalZoomEnabled = true;
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
	 * Gets or sets whether the chart can highlight series through user interactions.
	 * This property applies to Category Chart and Financial Chart controls.
	*/
	get isSeriesHighlightingEnabled() : boolean {
		return (this.i.isSeriesHighlightingEnabled as boolean);
	}
	@Input()
	set isSeriesHighlightingEnabled(v: boolean) {
		this.i.isSeriesHighlightingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the rectangle representing the current scroll and zoom state of the chart.
	 * WindowRect is expressed as a Rectangle with coordinates and sizes between 0 and 1.
	* 
	* Use `windowRect` property representing the current scroll and zoom state of the chart.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"       
	*       WindowRect=[0,0,1,1]>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.windowRect =[0,0,1,1]; 
	* ```
	*/
	get windowRect() : IgRect {
		return fromRect(this.i.windowRect);
	}
	@Input()
	set windowRect(v: IgRect) {
		this.i.windowRect = toRect(v);
	}
	/**
	 * Gets a rectangle representing the bounds of the plot area.
	* 
	* `viewport` property representing the bounds of the plot area.
	* 
	* ```ts
	* let viewport:Rect =  this.chart.viewport;
	* ```
	*/
	get viewport() : IgRect {
		return fromRect(this.i.viewport);
	}
	/**
	 * Gets or sets text to display above the plot area.
	* 
	* Use the `chartTitle` property to display the text above the plot area.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"             
	*     title="This is a Title">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.title= "This is a Title";
	* ```
	*/
	get chartTitle() : string {
		return (this.i.title as string);
	}
	@Input()
	set chartTitle(v: string) {
		this.i.title = v;
	}
	/**
	 * Gets or sets text to display below the Title, above the plot area.
	* 
	* Use the `subtitle` property to display the text below  and above the plot area.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     subtitle= "This is a subtitle">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.subtitle ="CategoryChart Subtitle" ;
	* ```
	*/
	get subtitle() : string {
		return (this.i.subtitle as string);
	}
	@Input()
	set subtitle(v: string) {
		this.i.subtitle = v;
	}
	/**
	 * Gets or sets horizontal alignment which determines the title position, relative to the left and right edges of the control.
	* 
	* Use the `titleAlignment` property for the horizontal alignment of the title.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"          
	*     titleAlignment= "center">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.titleAlignment = HorizontalAlignment.Center;
	* ```
	*/
	get titleAlignment() : HorizontalAlignment {
		return this.i.titleAlignment;
	}
	@Input()
	set titleAlignment(v: HorizontalAlignment) {
		this.i.titleAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets horizontal alignment which determines the subtitle position, relative to the left and right edges of the control.
	* 
	* Use the `subtitleAlignment` property to Gets or sets horizontal alignment.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     subtitleAlignment= "center">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.subtitleAlignment = HorizontalAlignment.Right;
	* ```
	*/
	get subtitleAlignment() : HorizontalAlignment {
		return this.i.subtitleAlignment;
	}
	@Input()
	set subtitleAlignment(v: HorizontalAlignment) {
		this.i.subtitleAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the behavior that determines how unknown values will be plotted on the chart.
	 * Null and Double.NaN are two examples of unknown values.
	* 
	* Use the `unknownValuePlotting` property to determines the behavior that how unknown values will be plotted on the chart.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"       
	*       unknownValuePlotting= "dontPlot">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.unknownValuePlotting =UnknownValuePlotting.DontPlot;
	* ```
	*/
	get unknownValuePlotting() : UnknownValuePlotting {
		return this.i.unknownValuePlotting;
	}
	@Input()
	set unknownValuePlotting(v: UnknownValuePlotting) {
		this.i.unknownValuePlotting = ensureEnum<UnknownValuePlotting>(UnknownValuePlotting_$type, v);
	}
	/**
	 * Gets or sets the rendering resolution for all series in this chart.
	 * Where n = Resolution, for every n horizontal pixels, combine all items into a single datapoint.  When Resolution = 0, all datapoints will be rendered as graphical objects.  Charts with a higher resolution will have faster performance.
	* 
	* Use the `resolution` property if the callouts should be display.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     resolution= 2>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*   this.chart.resolution = 2 ;
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
	 * Gets or sets the thickness for all series in this chart. Depending on the ChartType, this can be the main brush used, or just the outline.
	* 
	* Use the `thickness` property for the thickness of all the series in this chart. 
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"          
	*     thickness=5>
	* </igx-category-chart>
	* ```
	*/
	get thickness() : number {
		return (this.i.thickness as number);
	}
	@Input()
	set thickness(v: number) {
		this.i.thickness = +v;
	}
	private _markerTypes: IgxMarkerTypeCollection = null;
	                                
	/**
	 * Gets or sets the marker shapes used for indicating location of data points in this chart.
	 * This property applies only to these chart types: point, line, spline, bubble, and polygon
	*/
	get markerTypes() : IgxMarkerTypeCollection {
	                                        if (this._markerTypes === null) {
	                                            let coll = new IgxMarkerTypeCollection();
	                                            let innerColl = this.i.markerTypes;
			if (!innerColl) {
	                                            	innerColl = new MarkerTypeCollection_internal();
			}
	                                            this._markerTypes = (coll as any)._fromInner(innerColl);
	                                            this.i.markerTypes = innerColl;
	
	                                        }
		return this._markerTypes;
	}
	@Input()
	set markerTypes(v: IgxMarkerTypeCollection) {
	                                        if (this._markerTypes !== null) {
	                                            (this._markerTypes as any)._setSyncTarget(null);
	                                            this._markerTypes = null;
	                                        }
	                                        let coll = new IgxMarkerTypeCollection();
	                                        this._markerTypes = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<MarkerType>(MarkerType_$type);
	                                        let innerColl = this.i.markerTypes;
		if (!innerColl) {
	                                        	innerColl = new MarkerTypeCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._markerTypes as any)._setSyncTarget(syncColl);
	                                        this.i.markerTypes = innerColl;
	
	}
	/**
	 * Gets or sets the palette of brushes used for rendering fill area of data point markers.
	 * This property applies only to these chart types: point, line, spline, bubble, and polygon
	* 
	* `markerBrushes` property used for rendering fill area of data point markers.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     markerBrushes="#ff0000, #cc0000, #aa0000">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.markerBrushes=[ "#ff0000", "#ffff00", "#00ffff" ];
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
	 * Gets or sets the palette of brushes used for rendering outlines of data point markers.
	 * This property applies only to these chart types: point, line, spline, bubble, and polygon
	* 
	* `markerOutlines` property used for rendering outlines of data point markers.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     markerOutlines="#ff0000, #cc0000, #aa0000">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.markerOutlines= ["#ff0000", "#ffff00", "#00ffff"] ;
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
	 * Gets or sets the maximum number of markers displyed in the plot area of the chart.
	* 
	* `markerMaxCount` property used to display maximum number of markers in the plot area of the chart.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0"
	*     [dataSource]="data"      
	*     markerMaxCount=100 >
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.markerMaxCount = 100 ;
	* ```
	*/
	get markerMaxCount() : number {
		return (this.i.markerMaxCount as number);
	}
	@Input()
	set markerMaxCount(v: number) {
		this.i.markerMaxCount = +v;
	}
	/**
	 * Gets or sets whether the series animations should be allowed when a range change has been detected on an axis.
	*/
	get animateSeriesWhenAxisRangeChanges() : boolean {
		return (this.i.animateSeriesWhenAxisRangeChanges as boolean);
	}
	@Input()
	set animateSeriesWhenAxisRangeChanges(v: boolean) {
		this.i.animateSeriesWhenAxisRangeChanges = ensureBool(v);
	}
	/**
	 * Gets or sets the palette of brushes to used for coloring trend lines in this chart.
	 * The value provided should be an array of CSS color strings or JavaScript objects defining gradients. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection
	* 
	* Use the `trendLineBrushes` property for coloring trend lines in the chart. 
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0" 
	*     [dataSource]="data"       
	*     trendLineBrushes="#ff0000,#aa0000">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.trendLineBrushes=["#ff0000", "#ffff00", "#00ffff"]	;
	* ```
	*/
	get trendLineBrushes() : string[] {
		return fromBrushCollection(this.i.trendLineBrushes);
	}
	@Input()
	set trendLineBrushes(v: string[]) {
		this.i.trendLineBrushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets the formula used for calculating trend lines in this chart.
	 * This property applies only to these chart types: point, line, spline, and bubble
	* 
	* Use the `trendLineType` property for calculating trend lines.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"       
	*       trendLineType= "cubicFit">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.trendLineType = TrendLineType.CubicFit;
	* ```
	*/
	get trendLineType() : TrendLineType {
		return this.i.trendLineType;
	}
	@Input()
	set trendLineType(v: TrendLineType) {
		this.i.trendLineType = ensureEnum<TrendLineType>(TrendLineType_$type, v);
	}
	/**
	 * Gets or sets the thickness of the trend lines in this chart.
	 * This property applies only to these chart types: point, line, spline, and bubble
	* 
	* Use the `trendLineThickness` property for the thickness of the trend lines in the chart.
	* 
	* ```html
	* <igx-category-chart 
	*     yAxisMinimumValue="0" 
	*     [dataSource]="data"       
	*     trendLineThickness= 2>
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.trendLineThickness=2;
	* ```
	*/
	get trendLineThickness() : number {
		return (this.i.trendLineThickness as number);
	}
	@Input()
	set trendLineThickness(v: number) {
		this.i.trendLineThickness = +v;
	}
	/**
	 * Gets or sets a value indicating whether grid and tick lines are aligned to device pixels.
	* 
	* Use `alignsGridLinesToPixels` propert to indicat whether grid and tick lines are aligned to device pixels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     AlignsGridLinesToPixels="true">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  this.chart.alignsGridLinesToPixels= true;
	* ```
	*/
	get alignsGridLinesToPixels() : boolean {
		return (this.i.alignsGridLinesToPixels as boolean);
	}
	@Input()
	set alignsGridLinesToPixels(v: boolean) {
		this.i.alignsGridLinesToPixels = ensureBool(v);
	}
	get trendLinePeriod() : number {
		return (this.i.trendLinePeriod as number);
	}
	@Input()
	set trendLinePeriod(v: number) {
		this.i.trendLinePeriod = +v;
	}
	/**
	 * Gets or sets the style of tooltip to be displayed.
	*/
	get toolTipType() : ToolTipType {
		return this.i.toolTipType;
	}
	@Input()
	set toolTipType(v: ToolTipType) {
		this.i.toolTipType = ensureEnum<ToolTipType>(ToolTipType_$type, v);
	}
	/**
	 * Gets or sets the crosshairs to be displayed.
	*/
	get crosshairsDisplayMode() : CrosshairsDisplayMode {
		return this.i.crosshairsDisplayMode;
	}
	@Input()
	set crosshairsDisplayMode(v: CrosshairsDisplayMode) {
		this.i.crosshairsDisplayMode = ensureEnum<CrosshairsDisplayMode>(CrosshairsDisplayMode_$type, v);
	}
	/**
	 * Gets or sets whether crosshairs will snap to the nearest data point.
	*/
	get crosshairsSnapToData() : boolean {
		return (this.i.crosshairsSnapToData as boolean);
	}
	@Input()
	set crosshairsSnapToData(v: boolean) {
		this.i.crosshairsSnapToData = ensureBool(v);
	}
	/**
	 * Gets or sets whether annotations are shown along the axis for crosshair values
	*/
	get crosshairsAnnotationEnabled() : boolean {
		return (this.i.crosshairsAnnotationEnabled as boolean);
	}
	@Input()
	set crosshairsAnnotationEnabled(v: boolean) {
		this.i.crosshairsAnnotationEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether annotations for the final value of each series is displayed on the axis.
	*/
	get finalValueAnnotationsVisible() : boolean {
		return (this.i.finalValueAnnotationsVisible as boolean);
	}
	@Input()
	set finalValueAnnotationsVisible(v: boolean) {
		this.i.finalValueAnnotationsVisible = ensureBool(v);
	}
	/**
	 * Gets or sets if callouts should be displayed.
	*/
	get calloutsVisible() : boolean {
		return (this.i.calloutsVisible as boolean);
	}
	@Input()
	set calloutsVisible(v: boolean) {
		this.i.calloutsVisible = ensureBool(v);
	}
	/**
	 * Gets or sets if event annotations should be displayed.
	*/
	get calloutStyleUpdatingEventEnabled() : boolean {
		return (this.i.calloutStyleUpdatingEventEnabled as boolean);
	}
	@Input()
	set calloutStyleUpdatingEventEnabled(v: boolean) {
		this.i.calloutStyleUpdatingEventEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the member path of the X data for the callouts.
	*/
	get calloutsXMemberPath() : string {
		return (this.i.calloutsXMemberPath as string);
	}
	@Input()
	set calloutsXMemberPath(v: string) {
		this.i.calloutsXMemberPath = v;
	}
	/**
	 * Gets or sets the member path of the Y data for the callouts.
	*/
	get calloutsYMemberPath() : string {
		return (this.i.calloutsYMemberPath as string);
	}
	@Input()
	set calloutsYMemberPath(v: string) {
		this.i.calloutsYMemberPath = v;
	}
	/**
	 * Gets or sets the member path of the label data for the callouts.
	*/
	get calloutsLabelMemberPath() : string {
		return (this.i.calloutsLabelMemberPath as string);
	}
	@Input()
	set calloutsLabelMemberPath(v: string) {
		this.i.calloutsLabelMemberPath = v;
	}
	/**
	 * Gets or sets the member path of the content data for the callouts.
	*/
	get calloutsContentMemberPath() : string {
		return (this.i.calloutsContentMemberPath as string);
	}
	@Input()
	set calloutsContentMemberPath(v: string) {
		this.i.calloutsContentMemberPath = v;
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
	        genericPrefix = toSpinal("DomainChartComponent");
		
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
	 * Provides a container for this control
	
	* 
	* `provideContainer` method provide container for the control.
	* 
	* ```ts
	*     this.chart.provideContainer("Container");
	* ```
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	/**
	 * Destroy this control
	
	* 
	* Use the `destroy` property to destroy the chart.
	* 
	* ```ts
	* this.chart.destroy();
	* ```
	*/
	public destroy() {
		this.i.destroy();
	}
	/**
	 * Called when the control has been resized.
	
	* 
	* `notifyResized` method Called when the control has been resized. 
	* 
	* ```ts
	* this.chart.notifyResized();
	* ```
	*/
	public notifyResized() {
		this.i.notifyResized();
	}
	public notifyVisualPropertiesChanged() {
		this.i.notifyVisualPropertiesChanged();
	}
	/**
	 * Forces any pending refresh to the chart to be finished.
	
	* 
	* Method `flush` used to Forces any pending deferred work to render on the chart before continuing.
	* 
	* ```ts
	* this.chart.flush();
	* ```
	*/
	public flush() {
		this.i.flush();
	}
	/**
	 * Hides the active main tooltip, if displayed.
	
	* 
	* Use the `hideToolTip` method to hide the active tooltip. 
	* 
	* ```ts
	* this.chart.hideToolTip();
	* ```
	*/
	public hideToolTip() {
		this.i.hideToolTip();
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Used to manually notify the chart that the data source has reset or cleared its items.
	
	* 
	* Use `notifyClearItems` method to notifies the chart that the items have been cleared from an associated data source. 
	* 
	* ```ts
	* this.chart.notifyClearItems(this.data);
	* ```
	*/
	public notifyClearItems(source_: any) {
		this.i.notifyClearItems(source_);
	}
	public notifyInsertItem(source_: any, index: number, newItem: any) {
		this.i.notifyInsertItem(source_, index, newItem);
	}
	public notifyRemoveItem(source_: any, index: number, oldItem: any) {
		this.i.notifyRemoveItem(source_, index, oldItem);
	}

    	private _seriesAdded: EventEmitter<{ sender: any, args: IgxChartSeriesEventArgs}> = null;
	/**
	 * Event raised when a series is initialized and added to this chart.
	* 
	* `SeriesAdded` event raised when a series is initialized and added to this chart.
	* 
	* ```html
	*  <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*       (seriesAdded)="CategoryChart_SeriesAdded()"          
	*      >
	* </igx-category-chart>
	* ```
	*/
	@Output()
	get seriesAdded(): EventEmitter<{ sender: any, args: IgxChartSeriesEventArgs}> {
		if (this._seriesAdded == null) {
			this._seriesAdded = new EventEmitter<{sender: any, args: IgxChartSeriesEventArgs}>();
			this.i.seriesAdded = delegateCombine(this.i.seriesAdded, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxChartSeriesEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesAdded) {
	                        (this as any).beforeSeriesAdded(this, outerArgs);
	                    }
					this._seriesAdded.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesAdded;
	}
	private _seriesRemoved: EventEmitter<{ sender: any, args: IgxChartSeriesEventArgs}> = null;
	/**
	 * Event raised when a series is removed from this chart.
	* 
	* `SeriesRemoved` event raised when a series is removed from this chart.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*       (seriesRemoved)="CategoryChart_seriesRemoved()">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  CategoryChart_seriesRemoved(sender: any , aregs: ChartSeriesEventArgs) 
	*   {
	* 
	*   }
	* ```
	*/
	@Output()
	get seriesRemoved(): EventEmitter<{ sender: any, args: IgxChartSeriesEventArgs}> {
		if (this._seriesRemoved == null) {
			this._seriesRemoved = new EventEmitter<{sender: any, args: IgxChartSeriesEventArgs}>();
			this.i.seriesRemoved = delegateCombine(this.i.seriesRemoved, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxChartSeriesEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesRemoved) {
	                        (this as any).beforeSeriesRemoved(this, outerArgs);
	                    }
					this._seriesRemoved.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesRemoved;
	}
	private _seriesPointerEnter: EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> = null;
	/**
	 * Occurs when the pointer enters a Series.
	* 
	* `SeriesPointerEnter` event raised when the pointer enters a Series.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*       (seriesPointerEnter)="CategoryChart_seriesPointerEnter()" >
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* CategoryChart_seriesPointerEnter(sender: any , aregs: ChartSeriesEventArgs) 
	*   {
	* 
	*   }
	* ```
	*/
	@Output()
	get seriesPointerEnter(): EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> {
		if (this._seriesPointerEnter == null) {
			this._seriesPointerEnter = new EventEmitter<{sender: any, args: IgxDomainChartSeriesPointerEventArgs}>();
			this.i.seriesPointerEnter = delegateCombine(this.i.seriesPointerEnter, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxDomainChartSeriesPointerEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesPointerEnter) {
	                        (this as any).beforeSeriesPointerEnter(this, outerArgs);
	                    }
					this._seriesPointerEnter.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesPointerEnter;
	}
	private _seriesPointerLeave: EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> = null;
	/**
	 * Occurs when the pointer leaves a Series.
	* 
	* `SeriesPointerLeave` event raised when the pointer leaves a Series.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*       (seriesPointerLeave)= "CategoryChart_seriesPointerLeave()" >
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* CategoryChart_seriesPointerLeave(sender: any , aregs: ChartSeriesEventArgs) 
	*   {
	* 
	*   }
	* ```
	*/
	@Output()
	get seriesPointerLeave(): EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> {
		if (this._seriesPointerLeave == null) {
			this._seriesPointerLeave = new EventEmitter<{sender: any, args: IgxDomainChartSeriesPointerEventArgs}>();
			this.i.seriesPointerLeave = delegateCombine(this.i.seriesPointerLeave, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxDomainChartSeriesPointerEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesPointerLeave) {
	                        (this as any).beforeSeriesPointerLeave(this, outerArgs);
	                    }
					this._seriesPointerLeave.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesPointerLeave;
	}
	private _seriesPointerMove: EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> = null;
	/**
	 * Occurs when the pointer moves over a Series.
	* 
	* `SeriesPointerMove` event raised when the pointer moves over a Series.
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*        (seriesPointerMove)="CategoryChart_seriesPointerMove()">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	*  CategoryChart_seriesPointerMove(sender: any , aregs: ChartSeriesEventArgs) 
	*   {
	* 
	*   }
	* ```
	*/
	@Output()
	get seriesPointerMove(): EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> {
		if (this._seriesPointerMove == null) {
			this._seriesPointerMove = new EventEmitter<{sender: any, args: IgxDomainChartSeriesPointerEventArgs}>();
			this.i.seriesPointerMove = delegateCombine(this.i.seriesPointerMove, (o, e) => {
				let outerArgs = new IgxDomainChartSeriesPointerEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeSeriesPointerMove) {
	                            (this as any).beforeSeriesPointerMove(this, outerArgs);
	                        }
					    this._seriesPointerMove.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._seriesPointerMove;
	}
	private _seriesPointerDown: EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> = null;
	/**
	 * Occurs when the pointer is pressed down over a Series.
	* 
	* `SeriesPointerDown` event raised when the pointer is pressed down over a Series
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*       (seriesPointerDown)="CategoryChart_seriesPointerDown()" >
	* </igx-category-chart>
	* ```
	*/
	@Output()
	get seriesPointerDown(): EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> {
		if (this._seriesPointerDown == null) {
			this._seriesPointerDown = new EventEmitter<{sender: any, args: IgxDomainChartSeriesPointerEventArgs}>();
			this.i.seriesPointerDown = delegateCombine(this.i.seriesPointerDown, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxDomainChartSeriesPointerEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesPointerDown) {
	                        (this as any).beforeSeriesPointerDown(this, outerArgs);
	                    }
					this._seriesPointerDown.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesPointerDown;
	}
	private _seriesPointerUp: EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> = null;
	/**
	 * Occurs when the pointer is released over a Series.
	* 
	* `SeriesPointerUp` event raised when the pointer is released over a Series.
	* 
	* ```ts
	*  CategoryChart_seriesPointerUp(sender: any , aregs: ChartSeriesEventArgs) 
	*   {
	* 
	*   }
	* ```
	* 
	* ```html
	* <igx-category-chart 
	*       yAxisMinimumValue="0" 
	*       [dataSource]="data"  
	*       (seriesPointerUp)="CategoryChart_seriesPointerUp()" >
	* </igx-category-chart>
	* ```
	*/
	@Output()
	get seriesPointerUp(): EventEmitter<{ sender: any, args: IgxDomainChartSeriesPointerEventArgs}> {
		if (this._seriesPointerUp == null) {
			this._seriesPointerUp = new EventEmitter<{sender: any, args: IgxDomainChartSeriesPointerEventArgs}>();
			this.i.seriesPointerUp = delegateCombine(this.i.seriesPointerUp, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxDomainChartSeriesPointerEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesPointerUp) {
	                        (this as any).beforeSeriesPointerUp(this, outerArgs);
	                    }
					this._seriesPointerUp.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesPointerUp;
	}
	private _calloutStyleUpdating: EventEmitter<{ sender: any, args: IgxCalloutStyleUpdatingEventArgs}> = null;
	/**
	 * Occurs when the style of a callout is updated.
	*/
	@Output()
	get calloutStyleUpdating(): EventEmitter<{ sender: any, args: IgxCalloutStyleUpdatingEventArgs}> {
		if (this._calloutStyleUpdating == null) {
			this._calloutStyleUpdating = new EventEmitter<{sender: any, args: IgxCalloutStyleUpdatingEventArgs}>();
			this.i.calloutStyleUpdating = delegateCombine(this.i.calloutStyleUpdating, (o, e) => {
				let outerArgs = new IgxCalloutStyleUpdatingEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeCalloutStyleUpdating) {
	                            (this as any).beforeCalloutStyleUpdating(this, outerArgs);
	                        }
					    this._calloutStyleUpdating.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._calloutStyleUpdating;
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
