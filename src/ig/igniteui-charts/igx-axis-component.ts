/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, Output, EventEmitter, Component, AfterContentInit, OnInit, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef } from '@angular/core';
import { AngularRenderer } from 'igniteui-core/angular-renderer';
import { Visibility, Visibility_$type } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { HorizontalAlignment, HorizontalAlignment_$type } from 'igniteui-core/HorizontalAlignment';
import { VerticalAlignment, VerticalAlignment_$type } from 'igniteui-core/VerticalAlignment';
import { AxisExtentType } from './AxisExtentType';
import { PointUtil, IEnumerable } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Series } from './Series';
import { Rect } from 'igniteui-core/Rect';
import { Axis } from './Axis';
import { AxisLabelsLocation, AxisLabelsLocation_$type } from './AxisLabelsLocation';
import { AxisLabelSettings } from './AxisLabelSettings';
import { TitleSettings } from './TitleSettings';
import { AxisTitlePosition, AxisTitlePosition_$type } from './AxisTitlePosition';
import { ensureEnum, brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { delegateCombine } from 'igniteui-core/type';
import { IgxRenderRequestedEventArgs} from './igx-render-requested-event-args';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxAxisRangeChangedEventArgs } from './igx-axis-range-changed-event-args';
import { IgxAxisAnnotationCollection } from './igx-axis-annotation-collection';
import { AxisAnnotationCollection as AxisAnnotationCollection_internal } from './AxisAnnotationCollection';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { IAxisAnnotation, IAxisAnnotation_$type } from './IAxisAnnotation';



export const IgxAxisComponent_PROVIDERS = [];

/**
 * Represents the base class from which all axis types are derived.
* 
* The `IgxAxisComponent` is an array of axis objects.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
* 		#yAxis>
*     </igx-numeric-y-axis>  
* </igx-data-chart>
* ```
*/
export abstract class IgxAxisComponent implements OnInit {
	protected _implementation: any;
	public get i(): Axis {
		return this._implementation;
	}
	private onImplementationCreated() {

	}

	constructor() {
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
		this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
		this.onImplementationCreated();
	}

	get axisInternal(): Axis {
		return this.i;
	}

	protected createImplementation(): Axis {
		return null;
	}

	ngOnInit() {
	}

    @Input()
	set name(value: string) {
		//console.log("setting axis name: " + value);
		this.i.name = value;
		//console.log("checking axis anme: " + this.i.name)
	}
	
	get name(): string {
		//console.log("getting axis anme: " + this.i.name)
		return this.i.name;
	}

	provideData(data: any) {

	}

    private _renderer: AngularRenderer = null;
    private _provideRenderer(renderer: AngularRenderer) {
        this._renderer = renderer;
        this._zoneRunner = (act: () => void) => (<any>renderer)._ngZone.run(act);
    }

    static _createFromInternal(internal: any): IgxAxisComponent {
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
	 * Gets or sets if the current axis is of category axis type
	*/
	get isCategory() : boolean {
		return (this.i.isCategory as boolean);
	}
	/**
	 * Gets or sets if the current axis is of numeric axis type
	* 
	*     Gets or sets if the current axis is of numeric axis type  
	*/
	get isNumeric() : boolean {
		return (this.i.isNumeric as boolean);
	}
	/**
	 * Gets if the current axis is of angular axis type
	*/
	get isAngular() : boolean {
		return (this.i.isAngular as boolean);
	}
	/**
	 * Gets or sets if the current axis is of radial axis type
	*/
	get isRadial() : boolean {
		return (this.i.isRadial as boolean);
	}
	/**
	 * Gets if the current axis is a vertical axis.
	*/
	get isVertical() : boolean {
		return (this.i.isVertical as boolean);
	}
	/**
	 * Gets or sets if the current axis is sorting data items
	*/
	get isSorting() : boolean {
		return (this.i.isSorting as boolean);
	}
	/**
	 * Gets or sets if the current axis is of date time axis type
	*/
	get isDateTime() : boolean {
		return (this.i.isDateTime as boolean);
	}
	/**
	 * Gets or sets if the axis is a piecewise scaling function.
	*/
	get isPiecewise() : boolean {
		return (this.i.isPiecewise as boolean);
	}
	/**
	 * Gets if the current axis is of category date time axis type
	*/
	get isCategoryDateTime() : boolean {
		return (this.i.isCategoryDateTime as boolean);
	}
	/**
	 * Gets if the current axis is a continuous rather than a discrete scale
	*/
	get isContinuous() : boolean {
		return (this.i.isContinuous as boolean);
	}
	/**
	 * Sets or gets a function which takes an object that produces a formatted label for displaying in the chart.
	* 
	* The `formatLabel` function takes an object that produces a formatted label for displaying in the chart.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data" >
	*     <igx-category-x-axis 
	* 		name="xAxis"
	* 		FormatLabel="xAxis_FormatLabel" />
	* </igx-data-chart>
	* ```
	*/
	get formatLabel() : (item: any) => string {
		return this.i.formatLabel;
	}
	@Input()
	set formatLabel(v: (item: any) => string) {
		this.i.formatLabel = v;
	}
	/**
	 * Gets or sets the Title property.
	* 
	* Use `title` property to display the title of the component.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get title() : string {
		return (this.i.title as string);
	}
	@Input()
	set title(v: string) {
		this.i.title = v;
	}
	/**
	 * Gets or sets the Stroke property.
	 * Null is treated as auto. The axis stroke will be displayed or not based on the axis type and series used with it.
	* 
	* Use `stroke` property to set the stroke of the chart.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		stroke="blue"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get stroke() : string {
		return brushToString(this.i.stroke);
	}
	@Input()
	set stroke(v: string) {
		this.i.stroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the effective stroke used for the axis.
	*/
	get actualStroke() : string {
		return brushToString(this.i.actualStroke);
	}
	@Input()
	set actualStroke(v: string) {
		this.i.actualStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the StrokeThickness property.
	* 
	* Use `strokeThickness` property for the thickness of the stroke.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		strokeThickness= 5
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	@Input()
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
	}
	/**
	 * Gets or sets the Strip property.
	* 
	* Use `strip` property to set the strip of the chart.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		 strip= "grey"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get strip() : string {
		return brushToString(this.i.strip);
	}
	@Input()
	set strip(v: string) {
		this.i.strip = stringToBrush(v);
	}
	/**
	 * Gets or sets the MajorStroke property.
	 * Null is treated as auto. Major lines will be displayed or not based on the axis type and series used with it.
	* 
	* Gets or sets the `majorStroke` using this property.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 	   majorStroke="black"
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get majorStroke() : string {
		return brushToString(this.i.majorStroke);
	}
	@Input()
	set majorStroke(v: string) {
		this.i.majorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the ActualMajorStroke property.
	* 
	* The `actualMajorStroke` property is used for ActualMajorStroke of the axis.
	*/
	get actualMajorStroke() : string {
		return brushToString(this.i.actualMajorStroke);
	}
	@Input()
	set actualMajorStroke(v: string) {
		this.i.actualMajorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the MajorStrokeThickness property.
	* 
	* Gets or sets the `majorStrokeThickness` using this property.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 	  majorStrokeThickness="1"
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get majorStrokeThickness() : number {
		return (this.i.majorStrokeThickness as number);
	}
	@Input()
	set majorStrokeThickness(v: number) {
		this.i.majorStrokeThickness = +v;
	}
	/**
	 * Gets or sets the MinorStroke property.
	* 
	* Gets or sets the minorStroke thickness using `minorStrokeThickness` property.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 	 minorStrokeThickness="1"
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get minorStroke() : string {
		return brushToString(this.i.minorStroke);
	}
	@Input()
	set minorStroke(v: string) {
		this.i.minorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the ActualMinorStroke property.
	* 
	* The `actualMinorStroke` property is used for ActualMinorStroke of the axis.
	*/
	get actualMinorStroke() : string {
		return brushToString(this.i.actualMinorStroke);
	}
	@Input()
	set actualMinorStroke(v: string) {
		this.i.actualMinorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the MinorStrokeThickness property.
	*/
	get minorStrokeThickness() : number {
		return (this.i.minorStrokeThickness as number);
	}
	@Input()
	set minorStrokeThickness(v: number) {
		this.i.minorStrokeThickness = +v;
	}
	/**
	 * Gets or sets the TickStroke property.
	* 
	* Use `tickStroke` property for the color of the tickmarks.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		tickStroke="black"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get tickStroke() : string {
		return brushToString(this.i.tickStroke);
	}
	@Input()
	set tickStroke(v: string) {
		this.i.tickStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the TickStrokeThickness property.
	* 
	* Use `tickStrokeThickness` property for thickness of the stroke tickmarks.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		tickStrokeThicknes="2"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get tickStrokeThickness() : number {
		return (this.i.tickStrokeThickness as number);
	}
	@Input()
	set tickStrokeThickness(v: number) {
		this.i.tickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the TickLength property.
	* 
	* Use `tickLength` property for The length of the tickmarks to display for this axis.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		tickLength="5"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get tickLength() : number {
		return (this.i.tickLength as number);
	}
	@Input()
	set tickLength(v: number) {
		this.i.tickLength = +v;
	}
	/**
	 * Gets or sets the IsDisabled property. If true, the axis will not be rendered.
	* 
	* The `isDisabled` property is used to decide if the axis will not be rendered.
	*/
	get isDisabled() : boolean {
		return (this.i.isDisabled as boolean);
	}
	@Input()
	set isDisabled(v: boolean) {
		this.i.isDisabled = ensureBool(v);
	}
	/**
	 * Gets or sets the IsInverted property.
	* 
	* Gets or sets the `isInverted` property.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		isInverted= true
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get isInverted() : boolean {
		return (this.i.isInverted as boolean);
	}
	@Input()
	set isInverted(v: boolean) {
		this.i.isInverted = ensureBool(v);
	}
	/**
	 * Gets or sets whether to use more advanced heuristics when determining the initial number of labels to render, before resolving collisions, etc.
	* 
	* Use `useEnhancedIntervalManagement` property to gets/sets whether to use more advanced heuristics when determining the initial number of labels to render, 
	* before resolving collisions, etc.
	*/
	get useEnhancedIntervalManagement() : boolean {
		return (this.i.useEnhancedIntervalManagement as boolean);
	}
	@Input()
	set useEnhancedIntervalManagement(v: boolean) {
		this.i.useEnhancedIntervalManagement = ensureBool(v);
	}
	/**
	 * Gets or sets the mininum desired characters to be displayed for horizontal axes when using advanced label heuristics. -1 will attempt to adjust the interval to precisely fit the horizontal labels.
	* 
	* The `enhancedIntervalMinimumCharacters` property is used to set the mininum desired characters to be displayed for horizontal axes when using advanced label heuristics. 
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		enhancedIntervalMinimumCharacters=5
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*   
	* </igx-data-chart>
	* ```
	*/
	get enhancedIntervalMinimumCharacters() : number {
		return (this.i.enhancedIntervalMinimumCharacters as number);
	}
	@Input()
	set enhancedIntervalMinimumCharacters(v: number) {
		this.i.enhancedIntervalMinimumCharacters = +v;
	}
	/**
	 * Gets or sets the text style to use for axis labels.
	* 
	* The `labelTextStyle` property Overrides the style of the text used for the axis labels.
	*/
	get labelTextStyle() : string {
		return this.i.labelSettings ? (this.i.labelSettings.textStyle as string) : null;
	}
	@Input()
	set labelTextStyle(v: string) {
		this.ensureLabelSettings();
	                                        this.i.labelSettings.textStyle = v;
	}
	/**
	 * The color of the {0}.
	* 
	* The `labelTextColor` property Overrides the color of the text used for the axis labels.
	*/
	get labelTextColor() : string {
		return brushToString(this.i.labelSettings ? this.i.labelSettings.textColor : null);
	}
	@Input()
	set labelTextColor(v: string) {
	                                        this.ensureLabelSettings();
	                                        this.i.labelSettings.textColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the location of the {0}.
	* 
	* The `Location` property is used for the location.
	*/
	get labelLocation() : AxisLabelsLocation {
	                                        return this.i.labelSettings ? this.i.labelSettings.location: <AxisLabelsLocation><any>0;					
	}
	@Input()
	set labelLocation(v: AxisLabelsLocation) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.location = ensureEnum<AxisLabelsLocation>(AxisLabelsLocation_$type, v);
	}
	/**
	 * Gets or sets the visibility of the {0}.
	* 
	* The `Visibility` property is used for the visibility of the axis.
	*/
	get labelVisibility() : Visibility {
	                                        return this.i.labelSettings ? this.i.labelSettings.visibility: <Visibility><any>0;					
	}
	@Input()
	set labelVisibility(v: Visibility) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.visibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets whether the first label is displayed when the zoom level is set to 1.
	* 
	* The `ShowFirstLabel` is used to check whether the first label is displayed when the zoom level is set to 1.
	*/
	get labelShowFirstLabel() : boolean {
		return this.i.labelSettings ? (this.i.labelSettings.showFirstLabel as boolean) : false;
	}
	@Input()
	set labelShowFirstLabel(v: boolean) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.showFirstLabel = ensureBool(v);
	}
	/**
	 * Gets or sets the angle of the {0}.
	* 
	* The `Angle` property is used to set the angle of the axis.
	*/
	get labelAngle() : number {
		return this.i.labelSettings ? (this.i.labelSettings.angle as number) : NaN;
	}
	@Input()
	set labelAngle(v: number) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.angle = +v;
	}
	/**
	 * Distance between the axis and the edge of the control.
	* 
	* The `Extent` property is used for the extent. 
	*/
	get labelExtent() : number {
		return this.i.labelSettings ? (this.i.labelSettings.extent as number) : NaN;
	}
	@Input()
	set labelExtent(v: number) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.extent = +v;
	}
	/**
	 * Margin applied to the left of the {0}.
	* 
	* The `labelLeftMargin` property is used for the left margin of the labels.
	*/
	get labelLeftMargin() : number {
		return this.i.labelSettings ? (this.i.labelSettings.leftMargin as number) : NaN;
	}
	@Input()
	set labelLeftMargin(v: number) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.leftMargin = +v;
	}
	/**
	 * Margin applied to the right of the {0}.
	* 
	* The `labelRightMargin` property is used for the right margin of the labels.
	*/
	get labelRightMargin() : number {
		return this.i.labelSettings ? (this.i.labelSettings.rightMargin as number) : NaN;
	}
	@Input()
	set labelRightMargin(v: number) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.rightMargin = +v;
	}
	/**
	 * Margin applied above the {0}.
	* 
	* The `labelTopMargin` property is used for the top margin of the labels.
	*/
	get labelTopMargin() : number {
		return this.i.labelSettings ? (this.i.labelSettings.topMargin as number) : NaN;
	}
	@Input()
	set labelTopMargin(v: number) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.topMargin = +v;
	}
	/**
	 * Margin applied below the {0}.
	* 
	* The `labelBottomMargin` is used to set the bottom margin of the labels.
	*/
	get labelBottomMargin() : number {
		return this.i.labelSettings ? (this.i.labelSettings.bottomMargin as number) : NaN;
	}
	@Input()
	set labelBottomMargin(v: number) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.bottomMargin = +v;
	}
	/**
	 * Gets or sets the horizontal alignment of the {0}.
	* 
	* The `HorizontalAlignment` property is used for the horizontal alignment.
	*/
	get labelHorizontalAlignment() : HorizontalAlignment {
	                                        return this.i.labelSettings ? this.i.labelSettings.horizontalAlignment: <HorizontalAlignment><any>0;					
	}
	@Input()
	set labelHorizontalAlignment(v: HorizontalAlignment) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.horizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the vertical alignment of the {0}.
	* 
	* The `VerticalAlignment` property is used for the vertical alignment of the axis.
	*/
	get labelVerticalAlignment() : VerticalAlignment {
	                                        return this.i.labelSettings ? this.i.labelSettings.verticalAlignment: <VerticalAlignment><any>0;					
	}
	@Input()
	set labelVerticalAlignment(v: VerticalAlignment) {
	                                        this.ensureLabelSettings();
		this.i.labelSettings.verticalAlignment = ensureEnum<VerticalAlignment>(VerticalAlignment_$type, v);
	}
	ensureLabelSettings() {
	if (this.i.labelSettings) {
	                                            return;
	                                        }
	                                        this.i.labelSettings = new AxisLabelSettings();
	this.i.labelSettings.location = this.i.getDefaultLabelSettingsLocation();
	this.i.labelSettings.angle = this.i.getDefaultLabelSettingsAngle();
	this.i.labelSettings.leftMargin = this.i.getDefaultLabelSettingsLeftMargin();
	this.i.labelSettings.rightMargin = this.i.getDefaultLabelSettingsRightMargin();
	this.i.labelSettings.topMargin = this.i.getDefaultLabelSettingsTopMargin();
	this.i.labelSettings.bottomMargin = this.i.getDefaultLabelSettingsBottomMargin();
	this.i.labelSettings.horizontalAlignment = this.i.getDefaultLabelSettingsHorizontalAlignment();
	this.i.labelSettings.verticalAlignment = this.i.getDefaultLabelSettingsVerticalAlignment();
	
	                                }
	/**
	 * Gets or sets the CrossingAxis property.
	* 
	* The `crossingAxis` property is used for CrossingAxis .
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		crossingAxis= "xAxis"
	* 		crossingValue= 700
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get crossingAxis() : IgxAxisComponent {
	                                        if (this.i.crossingAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.crossingAxis as any).externalObject) {
	                                            let e = IgxAxisComponent._createFromInternal(this.i.crossingAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.crossingAxis;
	                                            }
	                                            (this.i.crossingAxis as any).externalObject = e;
	                                        }
		return (this.i.crossingAxis as any).externalObject;
	}
	@Input()
	set crossingAxis(v: IgxAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.crossingAxis = null : this.i.crossingAxis = v.i;
	}
	/**
	 * Gets or sets the CrossingValue property.
	* 
	* The `crossingValue` property is used for CrossingValue of the axis.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		crossingAxis= "xAxis"
	* 		crossingValue= 700
	* 		#yAxis>
	*     </igx-numeric-y-axis>  
	* </igx-data-chart>
	* ```
	*/
	get crossingValue() : any {
		return this.i.crossingValue as any;
	}
	@Input()
	set crossingValue(v: any) {
		this.i.crossingValue = v;
	}
	/**
	 * Gets or sets the title position relative to the axis labels.
	*/
	get titlePosition() : AxisTitlePosition {
	                                        return this.i.titleSettings ? this.i.titleSettings.position: <AxisTitlePosition><any>0;					
	}
	@Input()
	set titlePosition(v: AxisTitlePosition) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.position = ensureEnum<AxisTitlePosition>(AxisTitlePosition_$type, v);
	}
	/**
	 * Gets or sets the text style to use for axis labels.
	* 
	* The `labelTextStyle` property Overrides the style of the text used for the axis labels.
	*/
	get titleTextStyle() : string {
		return this.i.titleSettings ? (this.i.titleSettings.textStyle as string) : null;
	}
	@Input()
	set titleTextStyle(v: string) {
		this.ensureTitleSettings();
	                                        this.i.titleSettings.textStyle = v;
	}
	/**
	 * The color of the {0}.
	* 
	* The `labelTextColor` property Overrides the color of the text used for the axis labels.
	*/
	get titleTextColor() : string {
		return brushToString(this.i.titleSettings ? this.i.titleSettings.textColor : null);
	}
	@Input()
	set titleTextColor(v: string) {
	                                        this.ensureTitleSettings();
	                                        this.i.titleSettings.textColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the location of the {0}.
	* 
	* The `Location` property is used for the location.
	*/
	get titleLocation() : AxisLabelsLocation {
	                                        return this.i.titleSettings ? this.i.titleSettings.location: <AxisLabelsLocation><any>0;					
	}
	@Input()
	set titleLocation(v: AxisLabelsLocation) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.location = ensureEnum<AxisLabelsLocation>(AxisLabelsLocation_$type, v);
	}
	/**
	 * Gets or sets the visibility of the {0}.
	* 
	* The `Visibility` property is used for the visibility of the axis.
	*/
	get titleVisibility() : Visibility {
	                                        return this.i.titleSettings ? this.i.titleSettings.visibility: <Visibility><any>0;					
	}
	@Input()
	set titleVisibility(v: Visibility) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.visibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets whether the first label is displayed when the zoom level is set to 1.
	* 
	* The `ShowFirstLabel` is used to check whether the first label is displayed when the zoom level is set to 1.
	*/
	get titleShowFirstLabel() : boolean {
		return this.i.titleSettings ? (this.i.titleSettings.showFirstLabel as boolean) : false;
	}
	@Input()
	set titleShowFirstLabel(v: boolean) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.showFirstLabel = ensureBool(v);
	}
	/**
	 * Gets or sets the angle of the {0}.
	* 
	* The `Angle` property is used to set the angle of the axis.
	*/
	get titleAngle() : number {
		return this.i.titleSettings ? (this.i.titleSettings.angle as number) : NaN;
	}
	@Input()
	set titleAngle(v: number) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.angle = +v;
	}
	/**
	 * Distance between the axis and the edge of the control.
	* 
	* The `Extent` property is used for the extent. 
	*/
	get titleExtent() : number {
		return this.i.titleSettings ? (this.i.titleSettings.extent as number) : NaN;
	}
	@Input()
	set titleExtent(v: number) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.extent = +v;
	}
	/**
	 * Margin applied to the left of the {0}.
	* 
	* The `labelLeftMargin` property is used for the left margin of the labels.
	*/
	get titleLeftMargin() : number {
		return this.i.titleSettings ? (this.i.titleSettings.leftMargin as number) : NaN;
	}
	@Input()
	set titleLeftMargin(v: number) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.leftMargin = +v;
	}
	/**
	 * Margin applied to the right of the {0}.
	* 
	* The `labelRightMargin` property is used for the right margin of the labels.
	*/
	get titleRightMargin() : number {
		return this.i.titleSettings ? (this.i.titleSettings.rightMargin as number) : NaN;
	}
	@Input()
	set titleRightMargin(v: number) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.rightMargin = +v;
	}
	/**
	 * Margin applied above the {0}.
	* 
	* The `labelTopMargin` property is used for the top margin of the labels.
	*/
	get titleTopMargin() : number {
		return this.i.titleSettings ? (this.i.titleSettings.topMargin as number) : NaN;
	}
	@Input()
	set titleTopMargin(v: number) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.topMargin = +v;
	}
	/**
	 * Margin applied below the {0}.
	* 
	* The `labelBottomMargin` is used to set the bottom margin of the labels.
	*/
	get titleBottomMargin() : number {
		return this.i.titleSettings ? (this.i.titleSettings.bottomMargin as number) : NaN;
	}
	@Input()
	set titleBottomMargin(v: number) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.bottomMargin = +v;
	}
	/**
	 * Gets or sets the horizontal alignment of the {0}.
	* 
	* The `HorizontalAlignment` property is used for the horizontal alignment.
	*/
	get titleHorizontalAlignment() : HorizontalAlignment {
	                                        return this.i.titleSettings ? this.i.titleSettings.horizontalAlignment: <HorizontalAlignment><any>0;					
	}
	@Input()
	set titleHorizontalAlignment(v: HorizontalAlignment) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.horizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the vertical alignment of the {0}.
	* 
	* The `VerticalAlignment` property is used for the vertical alignment of the axis.
	*/
	get titleVerticalAlignment() : VerticalAlignment {
	                                        return this.i.titleSettings ? this.i.titleSettings.verticalAlignment: <VerticalAlignment><any>0;					
	}
	@Input()
	set titleVerticalAlignment(v: VerticalAlignment) {
	                                        this.ensureTitleSettings();
		this.i.titleSettings.verticalAlignment = ensureEnum<VerticalAlignment>(VerticalAlignment_$type, v);
	}
	ensureTitleSettings() {
	if (this.i.titleSettings) {
	                                            return;
	                                        }
	                                        this.i.titleSettings = new TitleSettings();
	this.i.titleSettings.location = this.i.getDefaultTitleSettingsLocation();
	this.i.titleSettings.angle = this.i.getDefaultTitleSettingsAngle();
	this.i.titleSettings.leftMargin = this.i.getDefaultTitleSettingsLeftMargin();
	this.i.titleSettings.rightMargin = this.i.getDefaultTitleSettingsRightMargin();
	this.i.titleSettings.topMargin = this.i.getDefaultTitleSettingsTopMargin();
	this.i.titleSettings.bottomMargin = this.i.getDefaultTitleSettingsBottomMargin();
	this.i.titleSettings.horizontalAlignment = this.i.getDefaultTitleSettingsHorizontalAlignment();
	this.i.titleSettings.verticalAlignment = this.i.getDefaultTitleSettingsVerticalAlignment();
	
	                                }
	private _annotations: IgxAxisAnnotationCollection = null;
	                                
	/**
	 * Gets the current annotations for the axis.
	*/
	get annotations() : IgxAxisAnnotationCollection {
	                                        if (this._annotations === null) {
	                                            let coll = new IgxAxisAnnotationCollection();
	                                            let innerColl = this.i.annotations;
			if (!innerColl) {
	                                            	innerColl = new AxisAnnotationCollection_internal();
			}
	                                            this._annotations = (coll as any)._fromInner(innerColl);
	                                            
	                                        }
		return this._annotations;
	}
	@Input()
	set annotations(v: IgxAxisAnnotationCollection) {
	                                        if (this._annotations !== null) {
	                                            (this._annotations as any)._setSyncTarget(null);
	                                            this._annotations = null;
	                                        }
	                                        let coll = new IgxAxisAnnotationCollection();
	                                        this._annotations = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<IAxisAnnotation>(IAxisAnnotation_$type);
	                                        let innerColl = this.i.annotations;
		if (!innerColl) {
	                                        	innerColl = new AxisAnnotationCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._annotations as any)._setSyncTarget(syncColl);
	                                        
	}
	/**
	 * Gets or sets the coercion methods to use when loading data from data sources.
	 * Should be specified before setting any member paths, if being used. Setting it later 
	 * will not cause data to be re-imported into the chart.
	* 
	* The	`coercionMethods` methods is to use when loading data from data sources. Should be specified before setting any member paths, if being used. 
	* Setting it later will not cause data to be reimported into the chart.
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
	*/
	get expectFunctions() : boolean {
		return (this.i.expectFunctions as boolean);
	}
	@Input()
	set expectFunctions(v: boolean) {
		this.i.expectFunctions = ensureBool(v);
	}
	/**
	 * Gets or sets the axis label format string.
	* 
	* The `label` property is used for label mapping of the axis labels.
	*/
	get label() : any {
		return this.i.label as any;
	}
	@Input()
	set label(v: any) {
		this.i.label = v;
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
	        genericPrefix = toSpinal("AxisComponent");
		
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
	
	        if (this.crossingAxis && (this.crossingAxis as any)._styling) {
	    (this.crossingAxis as any)._styling(container, component, this);
	}
	
	
	        if ((this as any)._otherStyling) {
	            (this as any)._otherStyling(container, component, parent);
	        }
	        this._inStyling = false;
	}

		/**
	 * Renders the axis with no animation.
	
	*/
	public renderAxis() {
		this.i.renderAxis();
	}
	/**
	 * If using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
	
	*/
	public resetCachedEnhancedInterval() {
		this.i.resetCachedEnhancedInterval();
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Gets the label for a data item.
	
	* @param value  * The unscaled value to get a label for.
	*/
	public getValueLabel(value: number) : string {
		let iv = this.i.getValueLabel(value);
		return (iv);
	}
	/**
	 * Scales a value from axis space into screen space.
	
	* @param unscaledValue  * The unscaled axis value to scale.
	*/
	public scaleValue(unscaledValue: number) : number {
		let iv = this.i.scaleValue(unscaledValue);
		return (iv);
	}

    	private _rangeChanged: EventEmitter<{ sender: any, args: IgxAxisRangeChangedEventArgs}> = null;
	/**
	 * Occurs when the axis range changes.
	*/
	@Output()
	get rangeChanged(): EventEmitter<{ sender: any, args: IgxAxisRangeChangedEventArgs}> {
		if (this._rangeChanged == null) {
			this._rangeChanged = new EventEmitter<{sender: any, args: IgxAxisRangeChangedEventArgs}>();
			this.i.rangeChanged = delegateCombine(this.i.rangeChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxAxisRangeChangedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeRangeChanged) {
	                        (this as any).beforeRangeChanged(this, outerArgs);
	                    }
					this._rangeChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._rangeChanged;
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
				this._runInZone(() => {
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
