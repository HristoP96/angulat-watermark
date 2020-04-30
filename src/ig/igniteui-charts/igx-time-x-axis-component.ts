import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxTimeAxisBreakCollection } from "./igx-time-axis-break-collection";
import { IgxTimeAxisLabelFormatCollection } from "./igx-time-axis-label-format-collection";
import { IgxTimeAxisIntervalCollection } from "./igx-time-axis-interval-collection";
import { IgxTimeAxisBaseComponent } from "./igx-time-axis-base-component";
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { TimeXAxis } from "./TimeXAxis";
import { ensureBool } from "igniteui-core/componentUtil";
import { TimeAxisBreakCollection as TimeAxisBreakCollection_internal } from "./TimeAxisBreakCollection";
import { TimeAxisBreak } from "./TimeAxisBreak";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";
import { TimeAxisLabelFormatCollection as TimeAxisLabelFormatCollection_internal } from "./TimeAxisLabelFormatCollection";
import { TimeAxisLabelFormat } from "./TimeAxisLabelFormat";
import { TimeAxisIntervalCollection as TimeAxisIntervalCollection_internal } from "./TimeAxisIntervalCollection";
import { TimeAxisInterval } from "./TimeAxisInterval";

/**
 * A horizontal axis that uses a DateTime scale.
* 
* The `IgxTimeXAxisComponent` is a horizontal axis that uses a DateTime scale.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data">
*     <igx-time-x-axis
* 		dateTimeMemberPath="date"
* 		#xAxis>
*     </igx-time-x-axis>
* </igx-data-chart>
* ```
* 
* ```ts
* let xAxis = new IgxTimeXAxisComponent();
* xAxis.dataTimeMemberPath="date";
* this.chart.axes.add(xAxis);
* ```
*/
export const IgxTimeXAxisComponent_PROVIDERS = [{provide: IgxTimeAxisBaseComponent, useExisting: forwardRef(() => IgxTimeXAxisComponent)}, {provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxTimeXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxTimeXAxisComponent)}];
@Component({
  selector: 'igx-time-x-axis',
  template: ``,
  providers: [{provide: IgxTimeAxisBaseComponent, useExisting: forwardRef(() => IgxTimeXAxisComponent)}, {provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxTimeXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxTimeXAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTimeXAxisComponent extends IgxTimeAxisBaseComponent
{

protected createImplementation() : TimeXAxis
{
	return new TimeXAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TimeXAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	get isPiecewise() : boolean {
		return (this.i.isPiecewise as boolean);
	}
	private _breaks: IgxTimeAxisBreakCollection = null;
	                                
	/**
	 * TimeAxisBreaks to apply to this axis, representing spans of time to omit, such as weekends.
	* 
	* The `breaks` to apply to this axis, representing spans of time to omit, such as weekends.  
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	*/
	get breaks() : IgxTimeAxisBreakCollection {
	                                        if (this._breaks === null) {
	                                            let coll = new IgxTimeAxisBreakCollection();
	                                            let innerColl = this.i.breaks;
			if (!innerColl) {
	                                            	innerColl = new TimeAxisBreakCollection_internal();
			}
	                                            this._breaks = (coll as any)._fromInner(innerColl);
	                                            
	                                        }
		return this._breaks;
	}
	@Input()
	set breaks(v: IgxTimeAxisBreakCollection) {
	                                        if (this._breaks !== null) {
	                                            (this._breaks as any)._setSyncTarget(null);
	                                            this._breaks = null;
	                                        }
	                                        let coll = new IgxTimeAxisBreakCollection();
	                                        this._breaks = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<TimeAxisBreak>((TimeAxisBreak as any).$type);
	                                        let innerColl = this.i.breaks;
		if (!innerColl) {
	                                        	innerColl = new TimeAxisBreakCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._breaks as any)._setSyncTarget(syncColl);
	                                        
	}
	private _labelFormats: IgxTimeAxisLabelFormatCollection = null;
	                                
	/**
	 * A list of axis label formats to apply, which are selected according to the visible axis range.
	 * The label format selected will be the one with the largest range smaller than the visible range of the axis.
	*/
	get labelFormats() : IgxTimeAxisLabelFormatCollection {
	                                        if (this._labelFormats === null) {
	                                            let coll = new IgxTimeAxisLabelFormatCollection();
	                                            let innerColl = this.i.labelFormats;
			if (!innerColl) {
	                                            	innerColl = new TimeAxisLabelFormatCollection_internal();
			}
	                                            this._labelFormats = (coll as any)._fromInner(innerColl);
	                                            
	                                        }
		return this._labelFormats;
	}
	@Input()
	set labelFormats(v: IgxTimeAxisLabelFormatCollection) {
	                                        if (this._labelFormats !== null) {
	                                            (this._labelFormats as any)._setSyncTarget(null);
	                                            this._labelFormats = null;
	                                        }
	                                        let coll = new IgxTimeAxisLabelFormatCollection();
	                                        this._labelFormats = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<TimeAxisLabelFormat>((TimeAxisLabelFormat as any).$type);
	                                        let innerColl = this.i.labelFormats;
		if (!innerColl) {
	                                        	innerColl = new TimeAxisLabelFormatCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._labelFormats as any)._setSyncTarget(syncColl);
	                                        
	}
	private _intervals: IgxTimeAxisIntervalCollection = null;
	                                
	/**
	 * A list of axis label intervals to apply, which are selected according to the visible axis range.
	 * The interval selected will be the one with the largest range smaller than the visible range of the axis.
	*/
	get intervals() : IgxTimeAxisIntervalCollection {
	                                        if (this._intervals === null) {
	                                            let coll = new IgxTimeAxisIntervalCollection();
	                                            let innerColl = this.i.intervals;
			if (!innerColl) {
	                                            	innerColl = new TimeAxisIntervalCollection_internal();
			}
	                                            this._intervals = (coll as any)._fromInner(innerColl);
	                                            
	                                        }
		return this._intervals;
	}
	@Input()
	set intervals(v: IgxTimeAxisIntervalCollection) {
	                                        if (this._intervals !== null) {
	                                            (this._intervals as any)._setSyncTarget(null);
	                                            this._intervals = null;
	                                        }
	                                        let coll = new IgxTimeAxisIntervalCollection();
	                                        this._intervals = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<TimeAxisInterval>((TimeAxisInterval as any).$type);
	                                        let innerColl = this.i.intervals;
		if (!innerColl) {
	                                        	innerColl = new TimeAxisIntervalCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._intervals as any)._setSyncTarget(syncColl);
	                                        
	}
	/**
	 * Gets if the current axis is of category date time axis type
	*/
	get isCategoryDateTime() : boolean {
		return (this.i.isCategoryDateTime as boolean);
	}
	public getValueLabel(value: number) : string {
		let iv = this.i.getValueLabel(value);
		return (iv);
	}
	/**
	 * Gets the index of the data item with the value nearest the given value.
	
	* @param unscaledValue  * The value to find a value close to.
	*/
	public getIndexClosestToUnscaledValue(unscaledValue: number) : number {
		let iv = this.i.getIndexClosestToUnscaledValue(unscaledValue);
		return (iv);
	}
}
