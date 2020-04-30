import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxTimeAxisLabelFormatCollection } from "./igx-time-axis-label-format-collection";
import { IgxCategoryXAxisComponent } from "./igx-category-x-axis-component";
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { OrdinalTimeXAxis } from "./OrdinalTimeXAxis";
import { TimeAxisLabelFormatCollection as TimeAxisLabelFormatCollection_internal } from "./TimeAxisLabelFormatCollection";
import { TimeAxisLabelFormat } from "./TimeAxisLabelFormat";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";

/**
 * A horizontal axis that uses an ordinal DateTime scale.
 * On an ordinal time axis, datapoints are aligned according to their order in the ItemsSource, like a category axis.
* 
* You can use the `IgxOrdinalTimeXAxisComponent` to display dates at equidistant.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data">
*     <igx-ordinal-time-x-axis
* 		dateTimeMemberPath="date"
* 		#xAxis>
*     </igx-ordinal-time-x-axis>
* </igx-data-chart>
* ```
* 
* ```ts
* let xAxis = new IgxOrdinalTimeXAxisComponent();
* xAxis.dataTimeMemberPath="date";
* this.chart.axes.add(xAxis);
* ```
* 
* ```ts
* this.series.xAxis = this.ordinalTimeXAxis;
* this.series.yAxis = this.numericYAxis;
* this.series.xAxisName = "xAxis";
* this.series.yAxisName = "YAxis";
* ```
*/
export const IgxOrdinalTimeXAxisComponent_PROVIDERS = [{provide: IgxCategoryXAxisComponent, useExisting: forwardRef(() => IgxOrdinalTimeXAxisComponent)}, {provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxOrdinalTimeXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxOrdinalTimeXAxisComponent)}];
@Component({
  selector: 'igx-ordinal-time-x-axis',
  template: ``,
  providers: [{provide: IgxCategoryXAxisComponent, useExisting: forwardRef(() => IgxOrdinalTimeXAxisComponent)}, {provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxOrdinalTimeXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxOrdinalTimeXAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxOrdinalTimeXAxisComponent extends IgxCategoryXAxisComponent
{

protected createImplementation() : OrdinalTimeXAxis
{
	return new OrdinalTimeXAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : OrdinalTimeXAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the DateTime mapping property for the axis.
	*/
	get dateTimeMemberPath() : string {
		return (this.i.dateTimeMemberPath as string);
	}
	@Input()
	set dateTimeMemberPath(v: string) {
		this.i.dateTimeMemberPath = v;
	}
	private _labelFormats: IgxTimeAxisLabelFormatCollection = null;
	                                
	/**
	 * A list of axis label formats to apply, which are selected according to the visible axis range.
	 * The label format selected will be the one with the largest range smaller than the visible range of the axis.
	* 
	* You can use the `labelFormats` for adjusting the labels depending on the range of the time shown by the chart.
	* 
	* ```ts
	* let labelFormat = new TimeAxisLabelFormat();
	* labelFormat.format = "hh:mm:ss";
	* labelFormat.range = 1000;
	* this.xAxis.labelFormats.add(labelFormat);
	* labelFormat = new TimeAxisLabelFormat();
	* labelFormat.format = "hh:mm";
	* labelFormat.range = 60 * 1000;
	* this.xAxis.labelFormats.add(labelFormat);
	* labelFormat = new TimeAxisLabelFormat();
	* labelFormat.format = "MMM-dd-yy";
	* labelFormat.range = 24 * 60 * 60 * 1000;
	* this.xAxis.labelFormats.add(labelFormat);
	* labelFormat = new TimeAxisLabelFormat();
	* labelFormat.format = "MMM yy";
	* labelFormat.range = 365.24 * 24 * 60 * 60 * 1000;
	* this.xAxis.labelFormats.add(labelFormat);
	* labelFormat = new TimeAxisLabelFormat();
	* labelFormat.format = "yyyy";
	* labelFormat.range = 5 * 365 * 24 * 60 * 60 * 1000;
	* this.xAxis.labelFormats.add(labelFormat);
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	* 	<igx-ordinal-time-x-axis
	* 		[labelFormats]="labelFormats"
	* 		dateTimeMemberPath="time"
	* 		#xAxis>
	*     </igx-ordinal-time-x-axis>
	* </igx-data-chart>
	* ```
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
	/**
	 * Sets the minimum DateTime value to be displayed on this axis.
	 * This property can be used to constrain the items displayed on the axis, within the range of DateTimes in the ItemsSource.  It will ignore any setting outside the actual range of data.
	*/
	get minimumValue() : Date {
		return (this.i.minimumValue as Date);
	}
	@Input()
	set minimumValue(v: Date) {
		this.i.minimumValue = v;
	}
	/**
	 * Sets the maximum DateTime value to be displayed on this axis.
	 * This property can be used to constrain the items displayed on the axis, within the range of DateTimes in the ItemsSource.  It will ignore any setting outside the actual range of data.
	*/
	get maximumValue() : Date {
		return (this.i.maximumValue as Date);
	}
	@Input()
	set maximumValue(v: Date) {
		this.i.maximumValue = v;
	}
	public getValueLabel(value: number) : string {
		let iv = this.i.getValueLabel(value);
		return (iv);
	}
}
