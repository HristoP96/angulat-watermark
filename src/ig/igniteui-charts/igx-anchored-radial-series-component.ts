import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { IgxRadialBaseComponent } from "./igx-radial-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { AnchoredRadialSeries } from "./AnchoredRadialSeries";
import { ensureEnum, brushToString, stringToBrush, toPoint, fromPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all IgxDataChartComponent anchored radial category series.
*/
export const IgxAnchoredRadialSeriesComponent_PROVIDERS = [{provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxAnchoredRadialSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxAnchoredRadialSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAnchoredRadialSeriesComponent)}];
export abstract class IgxAnchoredRadialSeriesComponent extends IgxRadialBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : AnchoredRadialSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the item path that provides the values for the current series.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * Gets or sets the trend type for the current series object.
	*/
	get trendLineType() : TrendLineType {
		return this.i.trendLineType;
	}
	@Input()
	set trendLineType(v: TrendLineType) {
		this.i.trendLineType = ensureEnum<TrendLineType>(TrendLineType_$type, v);
	}
	/**
	 * Gets or sets the brush that specifies how to the current series
	 * object's Trend line is drawn.
	*/
	get trendLineBrush() : string {
		return brushToString(this.i.trendLineBrush);
	}
	@Input()
	set trendLineBrush(v: string) {
		this.i.trendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets the effective TrendLineBrush for this series.
	*/
	get actualTrendLineBrush() : string {
		return brushToString(this.i.actualTrendLineBrush);
	}
	@Input()
	set actualTrendLineBrush(v: string) {
		this.i.actualTrendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness of the current series object's trend line.
	*/
	get trendLineThickness() : number {
		return (this.i.trendLineThickness as number);
	}
	@Input()
	set trendLineThickness(v: number) {
		this.i.trendLineThickness = +v;
	}
	/**
	 * Gets or sets the trend line period for the current series.
	 * The typical, and initial, value for bollinger band periods is 20.
	*/
	get trendLinePeriod() : number {
		return (this.i.trendLinePeriod as number);
	}
	@Input()
	set trendLinePeriod(v: number) {
		this.i.trendLinePeriod = +v;
	}
	/**
	 * Sets or Gets the Z index of the trendline.
	*/
	get trendLineZIndex() : number {
		return (this.i.trendLineZIndex as number);
	}
	@Input()
	set trendLineZIndex(v: number) {
		this.i.trendLineZIndex = +v;
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
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
	 * Returns the offset value for this series if grouped on a category axis.
	
	*/
	public getOffsetValue() : number {
		let iv = this.i.getOffsetValue();
		return (iv);
	}
	/**
	 * Returns the width of the category grouping this series is in.
	
	*/
	public getCategoryWidth() : number {
		let iv = this.i.getCategoryWidth();
		return (iv);
	}
	/**
	 * Scrolls the specified item into the view.
	
	* @param item  * The item to scroll into view.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
}
