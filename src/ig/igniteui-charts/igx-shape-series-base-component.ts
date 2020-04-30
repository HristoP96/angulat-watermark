import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxNumericXAxisComponent } from "./igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxStyleShapeEventArgs } from "./igx-style-shape-event-args";
import { IgxSeriesComponent } from "./igx-series-component";
import { ShapeSeriesBase } from "./ShapeSeriesBase";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Series class for rendering polygons.
*/
export const IgxShapeSeriesBaseComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxShapeSeriesBaseComponent)}];
export abstract class IgxShapeSeriesBaseComponent extends IgxSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : ShapeSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The name of the property on ItemsSource items which, for each shape, contains a list of points to be converted to a polygon.
	 * To be consistent with the Shapefile technical description, it is expected that each list of points is defined as an IEnumerable of IEnumerable of Point, or in other words, a list of lists of points.
	*/
	get shapeMemberPath() : string {
		return (this.i.shapeMemberPath as string);
	}
	@Input()
	set shapeMemberPath(v: string) {
		this.i.shapeMemberPath = v;
	}
	/**
	 * Gets or sets the effective x-axis for the current ScatterBase object.
	*/
	get xAxis() : IgxNumericXAxisComponent {
	                                        if (this.i.xAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.xAxis as any).externalObject) {
	                                            let e = IgxNumericXAxisComponent._createFromInternal(this.i.xAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.xAxis;
	                                            }
	                                            (this.i.xAxis as any).externalObject = e;
	                                        }
		return (this.i.xAxis as any).externalObject;
	}
	@Input()
	set xAxis(v: IgxNumericXAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.xAxis = null : this.i.xAxis = v.i;
	}
	/**
	 * Gets or sets the effective y-axis for the current ScatterBase object.
	*/
	get yAxis() : IgxNumericYAxisComponent {
	                                        if (this.i.yAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.yAxis as any).externalObject) {
	                                            let e = IgxNumericYAxisComponent._createFromInternal(this.i.yAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.yAxis;
	                                            }
	                                            (this.i.yAxis as any).externalObject = e;
	                                        }
		return (this.i.yAxis as any).externalObject;
	}
	@Input()
	set yAxis(v: IgxNumericYAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.yAxis = null : this.i.yAxis = v.i;
	}
	/**
	 * The resolution at which to filter out shapes in the series.  For example, if the ShapeFilterResolution is set to 3, then elements with a bounding rectangle smaller than 3 X 3 pixels will be filtered out.
	 * In the case of ScatterPolylineSeries, the resolution is compared to either dimension, rather than both.  In other words, a polyline will not be filtered if its height or its width exceeds the value of this property.  Whereas with a ShapeSeries, both the height and the width must exceed the value of this property.
	*/
	get shapeFilterResolution() : number {
		return (this.i.shapeFilterResolution as number);
	}
	@Input()
	set shapeFilterResolution(v: number) {
		this.i.shapeFilterResolution = +v;
	}
	/**
	 * Gets whether or not this series is a shape series
	*/
	get isShape() : boolean {
		return (this.i.isShape as boolean);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.xAxis && (this.xAxis as any)._styling) {
	    (this.xAxis as any)._styling(container, component, this);
	}
	if (this.yAxis && (this.yAxis as any)._styling) {
	    (this.yAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Determine if object can be used as YAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsYAxis(axis: any) : boolean {
		let iv = this.i.canUseAsYAxis(axis);
		return (iv);
	}
	/**
	 * Determine if object can be used as XAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsXAxis(axis: any) : boolean {
		let iv = this.i.canUseAsXAxis(axis);
		return (iv);
	}
	private _styleShape: EventEmitter<{ sender: any, args: IgxStyleShapeEventArgs}> = null;
	/**
	 * Raised when tile's image URI should be provided
	*/
	@Output()
	get styleShape(): EventEmitter<{ sender: any, args: IgxStyleShapeEventArgs}> {
		if (this._styleShape == null) {
			this._styleShape = new EventEmitter<{sender: any, args: IgxStyleShapeEventArgs}>();
			this.i.styleShape = delegateCombine(this.i.styleShape, (o, e) => {
				let outerArgs = new IgxStyleShapeEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeStyleShape) {
	                            (this as any).beforeStyleShape(this, outerArgs);
	                        }
					    this._styleShape.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._styleShape;
	}
}
