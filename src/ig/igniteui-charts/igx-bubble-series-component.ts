import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSizeScaleComponent } from "./igx-size-scale-component";
import { IgxBrushScaleComponent } from "./igx-brush-scale-component";
import { IgxScatterBaseComponent } from "./igx-scatter-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { BubbleSeries } from "./BubbleSeries";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent bubble series.
*/
export const IgxBubbleSeriesComponent_PROVIDERS = [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxBubbleSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxBubbleSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBubbleSeriesComponent)}];
@Component({
  selector: 'igx-bubble-series',
  template: ``,
  providers: [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxBubbleSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxBubbleSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBubbleSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxBubbleSeriesComponent extends IgxScatterBaseComponent
{

protected createImplementation() : BubbleSeries
{
	return new BubbleSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : BubbleSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the radius mapping property for the current series object.
	*/
	get radiusMemberPath() : string {
		return (this.i.radiusMemberPath as string);
	}
	@Input()
	set radiusMemberPath(v: string) {
		this.i.radiusMemberPath = v;
	}
	/**
	 * Gets or sets the radius size scale for the bubbles.
	*/
	get radiusScale() : IgxSizeScaleComponent {
	                                        if (this.i.radiusScale == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.radiusScale as any).externalObject) {
	                                            let e = IgxSizeScaleComponent._createFromInternal(this.i.radiusScale);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.radiusScale;
	                                            }
	                                            (this.i.radiusScale as any).externalObject = e;
	                                        }
		return (this.i.radiusScale as any).externalObject;
	}
	@Input()
	set radiusScale(v: IgxSizeScaleComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.radiusScale = null : this.i.radiusScale = v.i;
	}
	/**
	 * Gets or sets the Label mapping property for the current series object.
	*/
	get labelMemberPath() : string {
		return (this.i.labelMemberPath as string);
	}
	@Input()
	set labelMemberPath(v: string) {
		this.i.labelMemberPath = v;
	}
	/**
	 * Gets or sets the fill mapping property for the current series object.
	*/
	get fillMemberPath() : string {
		return (this.i.fillMemberPath as string);
	}
	@Input()
	set fillMemberPath(v: string) {
		this.i.fillMemberPath = v;
	}
	/**
	 * Gets or sets the brush scale for the marker brush.
	*/
	get fillScale() : IgxBrushScaleComponent {
	                                        if (this.i.fillScale == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.fillScale as any).externalObject) {
	                                            let e = IgxBrushScaleComponent._createFromInternal(this.i.fillScale);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.fillScale;
	                                            }
	                                            (this.i.fillScale as any).externalObject = e;
	                                        }
		return (this.i.fillScale as any).externalObject;
	}
	@Input()
	set fillScale(v: IgxBrushScaleComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.fillScale = null : this.i.fillScale = v.i;
	}
	/**
	 * Overridden by derived series classes to indicate when markerless display is preferred or not.
	*/
	get isMarkerlessDisplayPreferred() : boolean {
		return (this.i.isMarkerlessDisplayPreferred as boolean);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.radiusScale && (this.radiusScale as any)._styling) {
	    (this.radiusScale as any)._styling(container, component, this);
	}
	if (this.fillScale && (this.fillScale as any)._styling) {
	    (this.fillScale as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
}
