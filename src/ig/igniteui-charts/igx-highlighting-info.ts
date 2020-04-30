import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { HighlightingState, HighlightingState_$type } from "./HighlightingState";
import { IgxSeriesComponent } from "./igx-series-component";
import { HighlightingInfo as HighlightingInfo_internal } from "./HighlightingInfo";
import { ensureEnum, ensureBool } from "igniteui-core/componentUtil";

/**
 * Contains contextual information about a highlighting.
*/
export class IgxHighlightingInfo
{

protected createImplementation() : HighlightingInfo_internal
{
	return new HighlightingInfo_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : HighlightingInfo_internal {
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
	 * The index of the first highlighted item.
	* 
	* You can use `startIndex` to get or set the first highlighted item for the series.
	* 
	* ```html
	* <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis" 
	*         valueMemberPath="value" 
	*         isHighlightingEnabled="true" isCustomCategoryStyleAllowed="true" (assigningCategoryStyle)="assigningSeries($event)"   >
	* </igx-column-series>
	* ```
	*/
	get startIndex() : number {
		return (this.i.startIndex as number);
	}
	set startIndex(v: number) {
		this.i.startIndex = +v;
	}
	/**
	 * The index of the last highlighted item.
	* 
	* You can use the `endIndex` to get or set the last highlighted item for the series.
	* 
	* ```html
	* <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis" 
	*         valueMemberPath="value" 
	*         isHighlightingEnabled="true" isCustomCategoryStyleAllowed="true"  (assigningCategoryStyle)="assigningSeries($event)"   >
	*       </igx-column-series>
	* ```
	*/
	get endIndex() : number {
		return (this.i.endIndex as number);
	}
	set endIndex(v: number) {
		this.i.endIndex = +v;
	}
	/**
	 * The state of the highlighting.
	* 
	* You can use the `state` to get or set the transitioning state of the highlighting, between In, Out, or Static.
	*/
	get state() : HighlightingState {
		return this.i.state;
	}
	set state(v: HighlightingState) {
		this.i.state = ensureEnum<HighlightingState>(HighlightingState_$type, v);
	}
	/**
	 * A number between 0 and 1 representing the progress of the highlighting.
	* 
	* You can use the `progress` property to set a number between 0 and 1 representing the progress of the highlighting.  
	* 
	* ```html
	* <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis" 
	*         valueMemberPath="value" 
	*         isHighlightingEnabled="true" isCustomCategoryStyleAllowed="true"  (assigningCategoryStyle)="assigningSeries($event)"   >
	*       </igx-column-series>
	* ```
	*/
	get progress() : number {
		return (this.i.progress as number);
	}
	set progress(v: number) {
		this.i.progress = +v;
	}
	/**
	 * True if this HighlightingInfo represents a marker highlighting.
	* 
	* You can set the `isMarker` to True if the HighlightingInfo represents a marker highlighting. Otherwise set to false.
	* 
	* ```html
	* <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis" 
	*         valueMemberPath="value" 
	*         isHighlightingEnabled="true" isCustomCategoryStyleAllowed="true"  (assigningCategoryStyle)="assigningSeries($event)"   >
	*       </igx-column-series>
	* ```
	*/
	get isMarker() : boolean {
		return (this.i.isMarker as boolean);
	}
	set isMarker(v: boolean) {
		this.i.isMarker = ensureBool(v);
	}
	/**
	 * The series in context.
	* 
	* You can use the `series` property to get the series in context.
	* 
	* ```html
	* <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis" 
	*         valueMemberPath="value" 
	*         isHighlightingEnabled="true" isCustomCategoryStyleAllowed="true"  (assigningCategoryStyle)="assigningSeries($event)"   >
	*       </igx-column-series>
	* ```
	*/
	get series() : IgxSeriesComponent {
	                                        if (this.i.series == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.series as any).externalObject) {
	                                            let e = IgxSeriesComponent._createFromInternal(this.i.series);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.series;
	                                            }
	                                            (this.i.series as any).externalObject = e;
	                                        }
		return (this.i.series as any).externalObject;
	}
	set series(v: IgxSeriesComponent) {
		v == null ? this.i.series = null : this.i.series = v.i;
	}
}
