import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHighlightingInfo } from "./igx-highlighting-info";
import { AssigningCategoryStyleEventArgsBase as AssigningCategoryStyleEventArgsBase_internal } from "./AssigningCategoryStyleEventArgsBase";
import { brushToString, stringToBrush, ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents event arguments base class for the AssigningCategoryStyleEventArgsBase
*/
export abstract class IgxAssigningCategoryStyleEventArgsBase
{

protected createImplementation() : AssigningCategoryStyleEventArgsBase_internal
{
	return null;
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : AssigningCategoryStyleEventArgsBase_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
	this._implementation = this.createImplementation();
	(<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * Gets the start index
	*/
	get startIndex() : number {
		return (this.i.startIndex as number);
	}
	set startIndex(v: number) {
		this.i.startIndex = +v;
	}
	/**
	 * Gets the end index
	*/
	get endIndex() : number {
		return (this.i.endIndex as number);
	}
	set endIndex(v: number) {
		this.i.endIndex = +v;
	}
	/**
	 * Gets the start date
	*/
	get startDate() : Date {
		return (this.i.startDate as Date);
	}
	set startDate(v: Date) {
		this.i.startDate = v;
	}
	/**
	 * Gets the end date
	*/
	get endDate() : Date {
		return (this.i.endDate as Date);
	}
	set endDate(v: Date) {
		this.i.endDate = v;
	}
	/**
	 * Gets a function that will return the items associated with this event.
	*/
	get getItems() : (orderedStartIndex: number, orderedEndIndex: number) => any[] {
		return this.i.getItems;
	}
	set getItems(v: (orderedStartIndex: number, orderedEndIndex: number) => any[]) {
		this.i.getItems = v;
	}
	/**
	 * Gets or sets fill brush to use for the current item.
	*/
	get fill() : string {
		return brushToString(this.i.fill);
	}
	set fill(v: string) {
		this.i.fill = stringToBrush(v);
	}
	/**
	 * Gets or sets stroke to use for the current item.
	*/
	get stroke() : string {
		return brushToString(this.i.stroke);
	}
	set stroke(v: string) {
		this.i.stroke = stringToBrush(v);
	}
	/**
	 * Gets or sets opacity to use for the current item.
	*/
	get opacity() : number {
		return (this.i.opacity as number);
	}
	set opacity(v: number) {
		this.i.opacity = +v;
	}
	/**
	 * Gets or sets highlighting info
	*/
	get highlightingInfo() : IgxHighlightingInfo {
	                                        if (this.i.highlightingInfo == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.highlightingInfo as any).externalObject) {
	                                            let e = new IgxHighlightingInfo();
	                                            (e as any)._implementation = this.i.highlightingInfo;
	                                            (this.i.highlightingInfo as any).externalObject = e;
	                                        }
		return (this.i.highlightingInfo as any).externalObject;
	}
	set highlightingInfo(v: IgxHighlightingInfo) {
		v == null ? this.i.highlightingInfo = null : this.i.highlightingInfo = v.i;
	}
	/**
	 * Gets the max highlighting progress from all series.
	*/
	get maxAllSeriesHighlightingProgress() : number {
		return (this.i.maxAllSeriesHighlightingProgress as number);
	}
	set maxAllSeriesHighlightingProgress(v: number) {
		this.i.maxAllSeriesHighlightingProgress = +v;
	}
	/**
	 * Gets the sum of highlighting progress from all series.
	*/
	get sumAllSeriesHighlightingProgress() : number {
		return (this.i.sumAllSeriesHighlightingProgress as number);
	}
	set sumAllSeriesHighlightingProgress(v: number) {
		this.i.sumAllSeriesHighlightingProgress = +v;
	}
	/**
	 * Gets or sets if highlighting was handled by this event handler, and whether internal highlighting logic should be skipped.
	*/
	get highlightingHandled() : boolean {
		return (this.i.highlightingHandled as boolean);
	}
	set highlightingHandled(v: boolean) {
		this.i.highlightingHandled = ensureBool(v);
	}
	/**
	 * Gets if this event has a valid date range
	*/
	get hasDateRange() : boolean {
		return (this.i.hasDateRange as boolean);
	}
	set hasDateRange(v: boolean) {
		this.i.hasDateRange = ensureBool(v);
	}
	/**
	 * Gets if the current shape is identified as a negative shape if this series supports discrete negative shapes.
	*/
	get isNegativeShape() : boolean {
		return (this.i.isNegativeShape as boolean);
	}
	set isNegativeShape(v: boolean) {
		this.i.isNegativeShape = ensureBool(v);
	}
	/**
	 * Gets if the current event is being raised for the thumbnail image.
	*/
	get isThumbnail() : boolean {
		return (this.i.isThumbnail as boolean);
	}
	set isThumbnail(v: boolean) {
		this.i.isThumbnail = ensureBool(v);
	}
}
