import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { NumericScaleMode, NumericScaleMode_$type } from "./NumericScaleMode";
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { StraightNumericAxisBase } from "./StraightNumericAxisBase";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Defines a set of basic methods and properties used to create a StraightNumeric axis.
*/
export const IgxStraightNumericAxisBaseComponent_PROVIDERS = [{provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxStraightNumericAxisBaseComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxStraightNumericAxisBaseComponent)}];
export abstract class IgxStraightNumericAxisBaseComponent extends IgxNumericAxisBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : StraightNumericAxisBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the axis scale mode.
	* 
	* `scaleMode` can be used on numeric axes to allow scaling data values using built-in scalers. The available scalers are linear or logarithmic.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis
	*         scaleMode="logarithmic">
	*     </igx-numeric-y-axis>
	*     <igx-line-series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart> 
	* ```
	* 
	* ```ts
	* this.yAxis.scaleMode = NumericScaleMode.Logarithmic;
	* ```
	*/
	get scaleMode() : NumericScaleMode {
		return this.i.scaleMode;
	}
	@Input()
	set scaleMode(v: NumericScaleMode) {
		this.i.scaleMode = ensureEnum<NumericScaleMode>(NumericScaleMode_$type, v);
	}
}
