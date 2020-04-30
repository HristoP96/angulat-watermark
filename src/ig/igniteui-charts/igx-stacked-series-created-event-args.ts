import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { IgxStyle } from "igniteui-core/igx-style";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { StackedSeriesCreatedEventArgs as StackedSeriesCreatedEventArgs_internal } from "./StackedSeriesCreatedEventArgs";
import { brushToString, stringToBrush, ensureEnum } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Provides data for IgxDataChartComponent stacked series.
*/
export class IgxStackedSeriesCreatedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : StackedSeriesCreatedEventArgs_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {									
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * Gets or sets the series brush.
	*/
	get brush() : string {
		return brushToString(this.i.brush);
	}
	set brush(v: string) {
		this.i.brush = stringToBrush(v);
	}
	/**
	 * Gets or sets the series legend item template.
	*/
	get legendItemTemplate() : IgDataTemplate {
		return (this.i.legendItemTemplate as IgDataTemplate);
	}
	set legendItemTemplate(v: IgDataTemplate) {
		this.i.legendItemTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the series legend item badge templae.
	*/
	get legendItemBadgeTemplate() : IgDataTemplate {
		return (this.i.legendItemBadgeTemplate as IgDataTemplate);
	}
	set legendItemBadgeTemplate(v: IgDataTemplate) {
		this.i.legendItemBadgeTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the visibility of the series legend.
	*/
	get legendItemVisibility() : Visibility {
		return this.i.legendItemVisibility;
	}
	set legendItemVisibility(v: Visibility) {
		this.i.legendItemVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the series outline brush.
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets the index of the series.
	*/
	get index() : number {
		return (this.i.index as number);
	}
	/**
	 * Gets or sets the series outline thickness.
	*/
	get thickness() : number {
		return (this.i.thickness as number);
	}
	set thickness(v: number) {
		this.i.thickness = +v;
	}
	/**
	 * Gets or sets the series title.
	*/
	get title() : any {
		return this.i.title as any;
	}
	set title(v: any) {
		this.i.title = v;
	}
	/**
	 * Gets or sets the series marker brush.
	*/
	get markerBrush() : string {
		return brushToString(this.i.markerBrush);
	}
	set markerBrush(v: string) {
		this.i.markerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the series marker outline.
	*/
	get markerOutline() : string {
		return brushToString(this.i.markerOutline);
	}
	set markerOutline(v: string) {
		this.i.markerOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the series marker style.
	*/
	get markerStyle() : IgxStyle {
	                                        if (this.i.markerStyle == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.markerStyle as any).externalObject) {
	                                            let e = new IgxStyle();
	                                            (e as any)._implementation = this.i.markerStyle;
	                                            (this.i.markerStyle as any).externalObject = e;
	                                        }
		return (this.i.markerStyle as any).externalObject;
	}
	set markerStyle(v: IgxStyle) {
		v == null ? this.i.markerStyle = null : this.i.markerStyle = v.i;
	}
	/**
	 * Gets or sets the series marker template.
	*/
	get markerTemplate() : IgDataTemplate {
		return (this.i.markerTemplate as IgDataTemplate);
	}
	set markerTemplate(v: IgDataTemplate) {
		this.i.markerTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the series marker type.
	*/
	get markerType() : MarkerType {
		return this.i.markerType;
	}
	set markerType(v: MarkerType) {
		this.i.markerType = ensureEnum<MarkerType>(MarkerType_$type, v);
	}
}
