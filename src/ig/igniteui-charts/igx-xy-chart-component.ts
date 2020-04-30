import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { VerticalAlignment, VerticalAlignment_$type } from "igniteui-core/VerticalAlignment";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { AxisLabelsLocation, AxisLabelsLocation_$type } from "./AxisLabelsLocation";
import { IgxDomainChartComponent } from "./igx-domain-chart-component";
import { XYChart } from "./XYChart";
import { brushToString, stringToBrush, ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a base class for domain charts with X/Y axes
*/
export const IgxXYChartComponent_PROVIDERS = [{provide: IgxDomainChartComponent, useExisting: forwardRef(() => IgxXYChartComponent)}];
export abstract class IgxXYChartComponent extends IgxDomainChartComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : XYChart {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets function which takes an context object and returns a formatted label for the X-axis.
	* 
	* To customize the text of the x-axis label, set `xAxisFormatLabel` to a single-parameter function.  The argument passed to that function will be your data item.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     [xAxisFormatLabel]="formatX"
	*     xAxisExtent="250">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* formatX(item: any): string {
	*     return "[ " + item.label + "! ]";
	* }
	* ```
	*/
	get xAxisFormatLabel() : (item: any) => string {
		return this.i.xAxisFormatLabel;
	}
	@Input()
	set xAxisFormatLabel(v: (item: any) => string) {
		this.i.xAxisFormatLabel = v;
	}
	/**
	 * Gets or sets function which takes a context object and returns a formatted label for the Y-axis.
	* 
	* To customize the text of the y-axis label, set `yAxisFormatLabel` to a single-parameter function.  The argument passed to that function will be the numeric value corresponding to a position on the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     [yAxisFormatLabel]="formatY">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* formatY(value: any): string {
	*     return "[ " + value+ "! ]";
	* }
	* ```
	*/
	get yAxisFormatLabel() : (item: any) => string {
		return this.i.yAxisFormatLabel;
	}
	@Input()
	set yAxisFormatLabel(v: (item: any) => string) {
		this.i.yAxisFormatLabel = v;
	}
	/**
	 * Gets or sets the left margin of labels on the X-axis
	* 
	* Use the `xAxisLabelLeftMargin` property to apply a margin left of the x-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelLeftMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelLeftMargin ="100";
	* ```
	*/
	get xAxisLabelLeftMargin() : number {
		return (this.i.xAxisLabelLeftMargin as number);
	}
	@Input()
	set xAxisLabelLeftMargin(v: number) {
		this.i.xAxisLabelLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin of labels on the X-axis
	* 
	* Use the `xAxisLabelTopMargin` property to apply a margin above the x-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleTopMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleTopMargin="250";
	* ```
	*/
	get xAxisLabelTopMargin() : number {
		return (this.i.xAxisLabelTopMargin as number);
	}
	@Input()
	set xAxisLabelTopMargin(v: number) {
		this.i.xAxisLabelTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin of labels on the X-axis
	* 
	* Use the `xAxisLabelRightMargin` property to apply a margin right of the x-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelRightMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelRightMargin="100";
	* ```
	*/
	get xAxisLabelRightMargin() : number {
		return (this.i.xAxisLabelRightMargin as number);
	}
	@Input()
	set xAxisLabelRightMargin(v: number) {
		this.i.xAxisLabelRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin of labels on the X-axis
	* 
	* Use the `xAxisLabelBottomMargin` property to apply a margin below the x-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelBottomMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelBottomMargin ="100";
	* ```
	*/
	get xAxisLabelBottomMargin() : number {
		return (this.i.xAxisLabelBottomMargin as number);
	}
	@Input()
	set xAxisLabelBottomMargin(v: number) {
		this.i.xAxisLabelBottomMargin = +v;
	}
	/**
	 * Gets or sets the left margin of labels on the Y-axis
	* 
	* Use the `yAxisLabelLeftMargin` property to apply a margin left of the y-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelLeftMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart. yAxisLabelLeftMargin="250";
	* ```
	*/
	get yAxisLabelLeftMargin() : number {
		return (this.i.yAxisLabelLeftMargin as number);
	}
	@Input()
	set yAxisLabelLeftMargin(v: number) {
		this.i.yAxisLabelLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin of labels on the Y-axis
	* 
	* Use the `yAxisLabelTopMargin` property to apply a margin above the y-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelTopMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelTopMargin="250";
	* ```
	*/
	get yAxisLabelTopMargin() : number {
		return (this.i.yAxisLabelTopMargin as number);
	}
	@Input()
	set yAxisLabelTopMargin(v: number) {
		this.i.yAxisLabelTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin of labels on the Y-axis
	* 
	* Use the `yAxisLabelRightMargin` property to apply a margin right of the y-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelRightMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelRightMargin="250";
	* ```
	*/
	get yAxisLabelRightMargin() : number {
		return (this.i.yAxisLabelRightMargin as number);
	}
	@Input()
	set yAxisLabelRightMargin(v: number) {
		this.i.yAxisLabelRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin of labels on the Y-axis
	* 
	* Use the `yAxisLabelBottomMargin` property to apply a margin below the y-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelBottomMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelBottomMargin="250";
	* ```
	*/
	get yAxisLabelBottomMargin() : number {
		return (this.i.yAxisLabelBottomMargin as number);
	}
	@Input()
	set yAxisLabelBottomMargin(v: number) {
		this.i.yAxisLabelBottomMargin = +v;
	}
	/**
	 * Gets or sets color of labels on the X-axis
	* 
	* To change the color of x-axis labels, set the `xAxisLabelTextColor` property to a color string.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelTextColor="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelTextColor="green";
	* ```
	*/
	get xAxisLabelTextColor() : string {
		return brushToString(this.i.xAxisLabelTextColor);
	}
	@Input()
	set xAxisLabelTextColor(v: string) {
		this.i.xAxisLabelTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets color of labels on the Y-axis
	* 
	* To change the color of y-axis labels, set the `yAxisLabelTextColor` property to a color string.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelTextColor="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelTextColor="green";
	* ```
	*/
	get yAxisLabelTextColor() : string {
		return brushToString(this.i.yAxisLabelTextColor);
	}
	@Input()
	set yAxisLabelTextColor(v: string) {
		this.i.yAxisLabelTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the margin around a title on the X-axis
	* 
	* Use the `xAxisTitleMargin` property to set a margin around the y-axis title.
	*/
	get xAxisTitleMargin() : number {
		return (this.i.xAxisTitleMargin as number);
	}
	@Input()
	set xAxisTitleMargin(v: number) {
		this.i.xAxisTitleMargin = +v;
	}
	/**
	 * Gets or sets the margin around a title on the Y-axis
	* 
	* Use the `yAxisTitleMargin` property to set a margin around the y-axis title.
	*/
	get yAxisTitleMargin() : number {
		return (this.i.yAxisTitleMargin as number);
	}
	@Input()
	set yAxisTitleMargin(v: number) {
		this.i.yAxisTitleMargin = +v;
	}
	/**
	 * Gets or sets the left margin of a title on the X-axis
	* 
	* Use the `xAxisTitleLeftMargin` property to apply a margin left of the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleAlignment="left"
	*     xAxisTitleLeftMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleLeftMargin="150";
	* ```
	*/
	get xAxisTitleLeftMargin() : number {
		return (this.i.xAxisTitleLeftMargin as number);
	}
	@Input()
	set xAxisTitleLeftMargin(v: number) {
		this.i.xAxisTitleLeftMargin = +v;
	}
	/**
	 * Gets or sets the left margin of a title on the Y-axis
	* 
	* Use the `yAxisTitleLeftMargin` property to apply a margin left of the y-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleLeftMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleLeftMargin="150";
	* ```
	*/
	get yAxisTitleLeftMargin() : number {
		return (this.i.yAxisTitleLeftMargin as number);
	}
	@Input()
	set yAxisTitleLeftMargin(v: number) {
		this.i.yAxisTitleLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin of a title on the X-axis
	* 
	* Use the `xAxisTitleTopMargin` property to apply a margin above the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleTopMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleTopMargin="150";
	* ```
	*/
	get xAxisTitleTopMargin() : number {
		return (this.i.xAxisTitleTopMargin as number);
	}
	@Input()
	set xAxisTitleTopMargin(v: number) {
		this.i.xAxisTitleTopMargin = +v;
	}
	/**
	 * Gets or sets the top margin of a title on the Y-axis
	* 
	* Use the `yAxisTitleTopMargin` property to apply a margin above the y-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleAlignment="top"
	*     yAxisTitleTopMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleTopMargin="150";
	* ```
	*/
	get yAxisTitleTopMargin() : number {
		return (this.i.yAxisTitleTopMargin as number);
	}
	@Input()
	set yAxisTitleTopMargin(v: number) {
		this.i.yAxisTitleTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin of a title on the X-axis
	* 
	* Use the `xAxisTitleRightMargin` property to apply a margin right of the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleAlignment="right"
	*     xAxisTitleRightMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleRightMargin="100";
	* ```
	*/
	get xAxisTitleRightMargin() : number {
		return (this.i.xAxisTitleRightMargin as number);
	}
	@Input()
	set xAxisTitleRightMargin(v: number) {
		this.i.xAxisTitleRightMargin = +v;
	}
	/**
	 * Gets or sets the right margin of a title on the Y-axis
	* 
	* Use the `yAxisTitleRightMargin` property to apply a margin right of the y-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleRightMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleRightMargin="150";
	* ```
	*/
	get yAxisTitleRightMargin() : number {
		return (this.i.yAxisTitleRightMargin as number);
	}
	@Input()
	set yAxisTitleRightMargin(v: number) {
		this.i.yAxisTitleRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin of a title on the X-axis
	* 
	* Use the `xAxisTitleBottomMargin` property to apply a margin below the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleBottomMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleBottomMargin="150";
	* ```
	*/
	get xAxisTitleBottomMargin() : number {
		return (this.i.xAxisTitleBottomMargin as number);
	}
	@Input()
	set xAxisTitleBottomMargin(v: number) {
		this.i.xAxisTitleBottomMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin of a title on the Y-axis
	* 
	* Use the `yAxisTitleBottomMargin` property to apply a margin below the y-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleAlignment="bottom"
	*     yAxisTitleBottomMargin="100">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleBottomMargin="150";
	* ```
	*/
	get yAxisTitleBottomMargin() : number {
		return (this.i.yAxisTitleBottomMargin as number);
	}
	@Input()
	set yAxisTitleBottomMargin(v: number) {
		this.i.yAxisTitleBottomMargin = +v;
	}
	/**
	 * Gets or sets color of title on the X-axis
	* 
	* To change the color of the x-axis title, set the `xAxisTitleTextColor` property to a color string.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleTextColor="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleTextColor="green";
	* ```
	*/
	get xAxisTitleTextColor() : string {
		return brushToString(this.i.xAxisTitleTextColor);
	}
	@Input()
	set xAxisTitleTextColor(v: string) {
		this.i.xAxisTitleTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets color of title on the Y-axis
	* 
	* To change the color of the y-axis title, set the `yAxisTitleTextColor` property to a color string.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleTextColor="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleTextColor="green";
	* ```
	*/
	get yAxisTitleTextColor() : string {
		return brushToString(this.i.yAxisTitleTextColor);
	}
	@Input()
	set yAxisTitleTextColor(v: string) {
		this.i.yAxisTitleTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets CSS font property for labels on X-axis
	* 
	* To change the font of x-axis labels, set the `xAxisLabelTextStyle` property.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelTextStyle="italic 15px arial, sans-serif">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelTextStyle="italic 15px arial, sans-serif";
	* ```
	*/
	get xAxisLabelTextStyle() : string {
		return (this.i.xAxisLabelTextStyle as string);
	}
	@Input()
	set xAxisLabelTextStyle(v: string) {
		this.i.xAxisLabelTextStyle = v;
	}
	/**
	 * Gets or sets CSS font property for labels on Y-axis
	* 
	* To change the font of x-axis labels, set the `yAxisLabelTextStyle` property.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelTextStyle="italic 15px arial, sans-serif">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart. yAxisLabelTextStyle="italic 15px arial, sans-serif";
	* ```
	*/
	get yAxisLabelTextStyle() : string {
		return (this.i.yAxisLabelTextStyle as string);
	}
	@Input()
	set yAxisLabelTextStyle(v: string) {
		this.i.yAxisLabelTextStyle = v;
	}
	/**
	 * Gets or sets CSS font property for title on X-axis
	* 
	* To change the font of the x-axis title, set the `xAxisTitleTextStyle` property.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleTextStyle="italic 15px arial, sans-serif">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleTextStyle="italic 15px arial, sans-serif";
	* ```
	*/
	get xAxisTitleTextStyle() : string {
		return (this.i.xAxisTitleTextStyle as string);
	}
	@Input()
	set xAxisTitleTextStyle(v: string) {
		this.i.xAxisTitleTextStyle = v;
	}
	/**
	 * Gets or sets CSS font property for title on Y-axis
	* 
	* To change the font of the x-axis title, set the `yAxisTitleTextStyle` property.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="y axis"
	*     yAxisTitleTextStyle="italic 15px arial, sans-serif">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleTextStyle="italic 15px arial, sans-serif";
	* ```
	*/
	get yAxisTitleTextStyle() : string {
		return (this.i.yAxisTitleTextStyle as string);
	}
	@Input()
	set yAxisTitleTextStyle(v: string) {
		this.i.yAxisTitleTextStyle = v;
	}
	/**
	 * Gets or sets the format for labels along the X-axis.
	*/
	get xAxisLabel() : any {
		return this.i.xAxisLabel as any;
	}
	@Input()
	set xAxisLabel(v: any) {
		this.i.xAxisLabel = v;
	}
	/**
	 * Gets or sets the property or string from which the labels are derived.
	*/
	get yAxisLabel() : any {
		return this.i.yAxisLabel as any;
	}
	@Input()
	set yAxisLabel(v: any) {
		this.i.yAxisLabel = v;
	}
	/**
	 * Gets or sets the color to apply to major gridlines along the X-axis.
	* 
	* Set `xAxisMajorStroke` to control the color of major gridlines extending vertically from the x-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisMajorStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisMajorStroke="green";
	* ```
	*/
	get xAxisMajorStroke() : string {
		return brushToString(this.i.xAxisMajorStroke);
	}
	@Input()
	set xAxisMajorStroke(v: string) {
		this.i.xAxisMajorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to apply to major gridlines along the Y-axis.
	* 
	* Set `yAxisMajorStroke` to control the color of major gridlines extending horizontally from the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisMajorStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisMajorStroke="green";
	* ```
	*/
	get yAxisMajorStroke() : string {
		return brushToString(this.i.yAxisMajorStroke);
	}
	@Input()
	set yAxisMajorStroke(v: string) {
		this.i.yAxisMajorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness to apply to major gridlines along the X-axis.
	* 
	* Set `xAxisMajorStrokeThickness` to control the thickness of major gridlines extending vertically from the x-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisMajorStroke="green"
	*     xAxisMajorStrokeThickness="3">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisMajorStrokeThickness="3" ;
	* ```
	*/
	get xAxisMajorStrokeThickness() : number {
		return (this.i.xAxisMajorStrokeThickness as number);
	}
	@Input()
	set xAxisMajorStrokeThickness(v: number) {
		this.i.xAxisMajorStrokeThickness = +v;
	}
	/**
	 * Gets or sets the thickness to apply to major gridlines along the Y-axis.
	* 
	* Set `yAxisMajorStrokeThickness` to control the thickness of major gridlines extending horizontally from the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisMajorStrokeThickness="3">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisMajorStrokeThickness="2";
	* ```
	*/
	get yAxisMajorStrokeThickness() : number {
		return (this.i.yAxisMajorStrokeThickness as number);
	}
	@Input()
	set yAxisMajorStrokeThickness(v: number) {
		this.i.yAxisMajorStrokeThickness = +v;
	}
	/**
	 * Gets or sets the thickness to apply to minor gridlines along the X-axis.
	* 
	* Set `xAxisMinorStrokeThickness` to control the thickness of minor gridlines extending vertically from the x-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisMinorStroke="green"
	*     xAxisMinorStrokeThickness="3">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisMinorStrokeThickness="3";
	* ```
	*/
	get xAxisMinorStrokeThickness() : number {
		return (this.i.xAxisMinorStrokeThickness as number);
	}
	@Input()
	set xAxisMinorStrokeThickness(v: number) {
		this.i.xAxisMinorStrokeThickness = +v;
	}
	/**
	 * Gets or sets the thickness to apply to minor gridlines along the Y-axis.
	* 
	* Set `yAxisMinorStrokeThickness` to control the thickness of minor gridlines extending horizontally from the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisMinorStroke="green"
	*     yAxisMinorStrokeThickness="3">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisMinorStrokeThickness="3";
	* ```
	*/
	get yAxisMinorStrokeThickness() : number {
		return (this.i.yAxisMinorStrokeThickness as number);
	}
	@Input()
	set yAxisMinorStrokeThickness(v: number) {
		this.i.yAxisMinorStrokeThickness = +v;
	}
	/**
	 * Gets or sets the color to apply to stripes along the X-axis.
	* 
	* Set `xAxisStrip` to control the alternating color of stripes extending vertically from the x-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisStrip="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisStrip="green";
	* ```
	*/
	get xAxisStrip() : string {
		return brushToString(this.i.xAxisStrip);
	}
	@Input()
	set xAxisStrip(v: string) {
		this.i.xAxisStrip = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to apply to stripes along the Y-axis.
	* 
	* Set `yAxisStrip` to control the alternating color of stripes extending horizontally from the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisStrip="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisStrip="green";
	* ```
	*/
	get yAxisStrip() : string {
		return brushToString(this.i.yAxisStrip);
	}
	@Input()
	set yAxisStrip(v: string) {
		this.i.yAxisStrip = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to apply to the X-axis line.
	* 
	* Set `xAxisStroke` to control the color of the x-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisStroke="green"";
	* ```
	*/
	get xAxisStroke() : string {
		return brushToString(this.i.xAxisStroke);
	}
	@Input()
	set xAxisStroke(v: string) {
		this.i.xAxisStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to apply to the Y-axis line.
	* 
	* Set `yAxisStroke` to control the color of the y-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisStroke="green";
	* ```
	*/
	get yAxisStroke() : string {
		return brushToString(this.i.yAxisStroke);
	}
	@Input()
	set yAxisStroke(v: string) {
		this.i.yAxisStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness to apply to the X-axis line.
	* 
	* Set `xAxisStrokeThickness` to control the thickness of the x-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisStrokeThickness="3">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisStrokeThickness="2";
	* ```
	*/
	get xAxisStrokeThickness() : number {
		return (this.i.xAxisStrokeThickness as number);
	}
	@Input()
	set xAxisStrokeThickness(v: number) {
		this.i.xAxisStrokeThickness = +v;
	}
	/**
	 * Gets or sets the thickness to apply to the Y-axis line.
	* 
	* Set `yAxisStrokeThickness` to control the thickness of the y-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisStroke="green"
	*     yAxisStrokeThickness="3">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart. yAxisStrokeThickness="2";
	* ```
	*/
	get yAxisStrokeThickness() : number {
		return (this.i.yAxisStrokeThickness as number);
	}
	@Input()
	set yAxisStrokeThickness(v: number) {
		this.i.yAxisStrokeThickness = +v;
	}
	/**
	 * Gets or sets the length of tickmarks along the X-axis.
	* 
	* Set `xAxisTickLength` to control the length of tickmarks extending vertically from the x-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTickLength="23">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTickLength="25";
	* ```
	*/
	get xAxisTickLength() : number {
		return (this.i.xAxisTickLength as number);
	}
	@Input()
	set xAxisTickLength(v: number) {
		this.i.xAxisTickLength = +v;
	}
	/**
	 * Gets or sets the length of tickmarks along the Y-axis.
	* 
	* Set `yAxisTickLength` to control the length of tickmarks extending horizontally from the y-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTickLength="23">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTickLength="25";
	* ```
	*/
	get yAxisTickLength() : number {
		return (this.i.yAxisTickLength as number);
	}
	@Input()
	set yAxisTickLength(v: number) {
		this.i.yAxisTickLength = +v;
	}
	/**
	 * Gets or sets the color to apply to tickmarks along the X-axis.
	* 
	* Set `xAxisTickStroke` to control the color of tickmarks extending vertically from the x-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTickStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart. xAxisTickStroke="green";
	* ```
	*/
	get xAxisTickStroke() : string {
		return brushToString(this.i.xAxisTickStroke);
	}
	@Input()
	set xAxisTickStroke(v: string) {
		this.i.xAxisTickStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to apply to tickmarks along the Y-axis.
	* 
	* Set `yAxisTickStroke` to control the color of tickmarks extending horizontally from the y-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTickLength="5"
	*     yAxisTickStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTickStroke="green";
	* ```
	*/
	get yAxisTickStroke() : string {
		return brushToString(this.i.yAxisTickStroke);
	}
	@Input()
	set yAxisTickStroke(v: string) {
		this.i.yAxisTickStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness to apply to tickmarks along the X-axis.
	* 
	* Set `xAxisTickStrokeThickness` to control the thickness of tickmarks extending vertically from the x-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTickStrokeThickness="10">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTickStrokeThickness="20";
	* ```
	*/
	get xAxisTickStrokeThickness() : number {
		return (this.i.xAxisTickStrokeThickness as number);
	}
	@Input()
	set xAxisTickStrokeThickness(v: number) {
		this.i.xAxisTickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the thickness to apply to tickmarks along the Y-axis.
	* 
	* Set `yAxisTickStrokeThickness` to control the thickness of tickmarks extending vertically from the y-axis line.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTickLength="5"
	*     yAxisTickStrokeThickness="10">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTickStrokeThickness="25";
	* ```
	*/
	get yAxisTickStrokeThickness() : number {
		return (this.i.yAxisTickStrokeThickness as number);
	}
	@Input()
	set yAxisTickStrokeThickness(v: number) {
		this.i.yAxisTickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the Text to display below the X-axis.
	* 
	* Set `xAxisTitle` to display a label adjacent to the x-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart. xAxisTitle="x axis";
	* ```
	*/
	get xAxisTitle() : string {
		return (this.i.xAxisTitle as string);
	}
	@Input()
	set xAxisTitle(v: string) {
		this.i.xAxisTitle = v;
	}
	/**
	 * Gets or sets the Text to display to the left of the Y-axis.
	* 
	* Set `yAxisTitle` to display a label adjacent to the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitle="y axis";
	* ```
	*/
	get yAxisTitle() : string {
		return (this.i.yAxisTitle as string);
	}
	@Input()
	set yAxisTitle(v: string) {
		this.i.yAxisTitle = v;
	}
	/**
	 * Gets or sets the color to apply to minor gridlines along the X-axis.
	* 
	* Set `xAxisMinorStroke` to control the color of minor gridlines extending vertically from the x-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisMinorStroke="green">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisExtent="250";
	* ```
	*/
	get xAxisMinorStroke() : string {
		return brushToString(this.i.xAxisMinorStroke);
	}
	@Input()
	set xAxisMinorStroke(v: string) {
		this.i.xAxisMinorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to apply to minor gridlines along the Y-axis.
	* 
	* Set `yAxisMinorStroke` to control the color of minor gridlines extending horizontally from the y-axis.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisMinorStroke="green"
	*     yAxisMinorStrokeThickness="1">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisMinorStroke="green";
	* ```
	*/
	get yAxisMinorStroke() : string {
		return brushToString(this.i.yAxisMinorStroke);
	}
	@Input()
	set yAxisMinorStroke(v: string) {
		this.i.yAxisMinorStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the angle of rotation for labels along the X-axis.
	* 
	* To control the rotation of labels on the x-axis, set the `xAxisLabelAngle` property to a number of rotational degrees.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelAngle="45">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelAngle="45";
	* ```
	*/
	get xAxisLabelAngle() : number {
		return (this.i.xAxisLabelAngle as number);
	}
	@Input()
	set xAxisLabelAngle(v: number) {
		this.i.xAxisLabelAngle = +v;
	}
	/**
	 * Gets or sets the angle of rotation for labels along the Y-axis.
	* 
	* To control the rotation of labels on the y-axis, set the `yAxisLabelAngle` property to a number of rotational degrees.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelAngle="45">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelAngle="25";
	* ```
	*/
	get yAxisLabelAngle() : number {
		return (this.i.yAxisLabelAngle as number);
	}
	@Input()
	set yAxisLabelAngle(v: number) {
		this.i.yAxisLabelAngle = +v;
	}
	/**
	 * Gets or sets the distance between the X-axis and the bottom of the chart.
	* 
	* To allocate space between the x-axis and the edge of the chart, set the `xAxisExtent` property.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisExtent="250">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisExtent="250";
	* ```
	*/
	get xAxisExtent() : number {
		return (this.i.xAxisExtent as number);
	}
	@Input()
	set xAxisExtent(v: number) {
		this.i.xAxisExtent = +v;
	}
	/**
	 * Gets or sets the distance between the Y-axis and the left edge of the chart.
	* 
	* To allocate space between the x-axis and the edge of the chart, set the `xAxisExtent` property.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisExtent="250">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisExtent="250";
	* ```
	*/
	get yAxisExtent() : number {
		return (this.i.yAxisExtent as number);
	}
	@Input()
	set yAxisExtent(v: number) {
		this.i.yAxisExtent = +v;
	}
	/**
	 * Gets or sets the angle of rotation for the X-axis title.
	* 
	* Set `xAxisTitleAngle` to control the rotation of the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleAngle="45">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleAngle="50";
	* ```
	*/
	get xAxisTitleAngle() : number {
		return (this.i.xAxisTitleAngle as number);
	}
	@Input()
	set xAxisTitleAngle(v: number) {
		this.i.xAxisTitleAngle = +v;
	}
	/**
	 * Gets or sets the angle of rotation for the Y-axis title.
	* 
	* Set `yAxisTitleAngle` to control the rotation of the y-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleAngle="45">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleAngle="25";
	* ```
	*/
	get yAxisTitleAngle() : number {
		return (this.i.yAxisTitleAngle as number);
	}
	@Input()
	set yAxisTitleAngle(v: number) {
		this.i.yAxisTitleAngle = +v;
	}
	/**
	 * Gets or sets whether to invert the direction of the X-axis by placing the first data items on the right side of the chart.
	* 
	* To reverse the direction of items along the x-axis, set the `xAxisInverted` property to true.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisInverted="true">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.XAxisInverted="True";
	* ```
	*/
	get xAxisInverted() : boolean {
		return (this.i.xAxisInverted as boolean);
	}
	@Input()
	set xAxisInverted(v: boolean) {
		this.i.xAxisInverted = ensureBool(v);
	}
	/**
	 * Gets or sets whether to invert the direction of the Y-axis by placing the minimum numeric value at the top of the chart.
	* 
	* You can use `yAxisInverted` to invert the scale of the y axis like this:
	* 
	* ```html
	* <igx-category-chart
	*     [dataSource]="data"
	*     yAxisInverted="true"
	* >
	* 
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisInverted="true";
	* ```
	* 
	* The default value of `yAxisInverted` is false.
	*/
	get yAxisInverted() : boolean {
		return (this.i.yAxisInverted as boolean);
	}
	@Input()
	set yAxisInverted(v: boolean) {
		this.i.yAxisInverted = ensureBool(v);
	}
	/**
	 * Gets or sets Horizontal alignment of the X-axis title.
	* 
	* Set `xAxisTitleAlignment` to control the horizontal alignment of the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisTitle="x axis"
	*     xAxisTitleAlignment="right">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisTitleAlignment="right";
	* ```
	*/
	get xAxisTitleAlignment() : HorizontalAlignment {
		return this.i.xAxisTitleAlignment;
	}
	@Input()
	set xAxisTitleAlignment(v: HorizontalAlignment) {
		this.i.xAxisTitleAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets Vertical alignment of the Y-axis title.
	* 
	* Set `yAxisTitleAlignment` to control the vertical alignment of the x-axis title.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisTitle="y axis"
	*     yAxisTitleAlignment="bottom">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisTitleAlignment="bottom";
	* ```
	*/
	get yAxisTitleAlignment() : VerticalAlignment {
		return this.i.yAxisTitleAlignment;
	}
	@Input()
	set yAxisTitleAlignment(v: VerticalAlignment) {
		this.i.yAxisTitleAlignment = ensureEnum<VerticalAlignment>(VerticalAlignment_$type, v);
	}
	/**
	 * Gets or sets Horizontal alignment of X-axis labels.
	*/
	get xAxisLabelHorizontalAlignment() : HorizontalAlignment {
		return this.i.xAxisLabelHorizontalAlignment;
	}
	@Input()
	set xAxisLabelHorizontalAlignment(v: HorizontalAlignment) {
		this.i.xAxisLabelHorizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets Horizontal alignment of Y-axis labels.
	* 
	* Set the `yAxisLabelHorizontalAlignment` property to change the horizontal alignment of y-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisExtent="250"
	*     yAxisLabelHorizontalAlignment="left">
	* </igx-category-chart>
	* ```
	*/
	get yAxisLabelHorizontalAlignment() : HorizontalAlignment {
		return this.i.yAxisLabelHorizontalAlignment;
	}
	@Input()
	set yAxisLabelHorizontalAlignment(v: HorizontalAlignment) {
		this.i.yAxisLabelHorizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets Vertical alignment of X-axis labels.
	* 
	* Use the `xAxisLabelVerticalAlignment` property to change the vertical position of x-axis labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisExtent="250"
	*     xAxisLabelVerticalAlignment="bottom">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelVerticalAlignment="bottom";
	* ```
	*/
	get xAxisLabelVerticalAlignment() : VerticalAlignment {
		return this.i.xAxisLabelVerticalAlignment;
	}
	@Input()
	set xAxisLabelVerticalAlignment(v: VerticalAlignment) {
		this.i.xAxisLabelVerticalAlignment = ensureEnum<VerticalAlignment>(VerticalAlignment_$type, v);
	}
	/**
	 * Gets or sets Vertical alignment of Y-axis labels.
	*/
	get yAxisLabelVerticalAlignment() : VerticalAlignment {
		return this.i.yAxisLabelVerticalAlignment;
	}
	@Input()
	set yAxisLabelVerticalAlignment(v: VerticalAlignment) {
		this.i.yAxisLabelVerticalAlignment = ensureEnum<VerticalAlignment>(VerticalAlignment_$type, v);
	}
	/**
	 * Gets or sets Visibility of X-axis labels.
	* 
	* To hide the x-axis labels, set `xAxisLabelVisibility` to collapsed.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     xAxisLabelVisibility="collapsed">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.xAxisLabelVisibility="collapsed";
	* ```
	*/
	get xAxisLabelVisibility() : Visibility {
		return this.i.xAxisLabelVisibility;
	}
	@Input()
	set xAxisLabelVisibility(v: Visibility) {
		this.i.xAxisLabelVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets Visibility of Y-axis labels.
	* 
	* To hide the y-axis labels, set `yAxisLabelVisibility` to collapsed.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelVisibility="collapsed">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelVisibility="collapsed"";
	* ```
	*/
	get yAxisLabelVisibility() : Visibility {
		return this.i.yAxisLabelVisibility;
	}
	@Input()
	set yAxisLabelVisibility(v: Visibility) {
		this.i.yAxisLabelVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * The location of Y-axis labels, relative to the plot area.
	* 
	* Set the `yAxisLabelLocation` property to change the location of the y-axis and its labels.
	* 
	* ```html
	* <igx-category-chart 
	*     [dataSource]="data"
	*     yAxisLabelLocation="outsideRight">
	* </igx-category-chart>
	* ```
	* 
	* ```ts
	* this.chart.yAxisLabelLocation="outsideRight";
	* ```
	*/
	get yAxisLabelLocation() : AxisLabelsLocation {
		return this.i.yAxisLabelLocation;
	}
	@Input()
	set yAxisLabelLocation(v: AxisLabelsLocation) {
		this.i.yAxisLabelLocation = ensureEnum<AxisLabelsLocation>(AxisLabelsLocation_$type, v);
	}
	/**
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	/**
	 * Converts the given visual location to a data value.
	
	* @param unscaledValue  * The x-coordinate of the location to scale.
	*/
	public getScaledValueX(unscaledValue: number) : number {
		let iv = this.i.getScaledValueX(unscaledValue);
		return (iv);
	}
	/**
	 * Converts the given data value to a visual location.
	
	* @param scaledValue  * The data value to un-scale.
	*/
	public getUnscaledValueX(scaledValue: number) : number {
		let iv = this.i.getUnscaledValueX(scaledValue);
		return (iv);
	}
	/**
	 * Converts the given visual location to a data value.
	
	* @param unscaledValue  * The y-coordinate of the location to scale.
	*/
	public getScaledValueY(unscaledValue: number) : number {
		let iv = this.i.getScaledValueY(unscaledValue);
		return (iv);
	}
	/**
	 * Converts the given data value to a visual location.
	
	* @param scaledValue  * The data value to un-scale.
	*/
	public getUnscaledValueY(scaledValue: number) : number {
		let iv = this.i.getUnscaledValueY(scaledValue);
		return (iv);
	}
}
