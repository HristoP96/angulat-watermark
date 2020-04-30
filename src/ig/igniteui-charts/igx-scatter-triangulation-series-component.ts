import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxNumericXAxisComponent } from "./igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxTriangulationStatusEventArgs } from "igniteui-core/igx-triangulation-status-event-args";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterTriangulationSeries } from "./ScatterTriangulationSeries";
import { IEnumerable } from "igniteui-core/type";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Base class for series which triangulate XY data prior to rendering.
*/
export const IgxScatterTriangulationSeriesComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterTriangulationSeriesComponent)}];
export abstract class IgxScatterTriangulationSeriesComponent extends IgxSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : ScatterTriangulationSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The name of the property from which to extract the X-coordinate for each item in the ItemsSource.
	*/
	get xMemberPath() : string {
		return (this.i.xMemberPath as string);
	}
	@Input()
	set xMemberPath(v: string) {
		this.i.xMemberPath = v;
	}
	/**
	 * The name of the property from which to extract the Y-coordinate for each item in the ItemsSource.
	*/
	get yMemberPath() : string {
		return (this.i.yMemberPath as string);
	}
	@Input()
	set yMemberPath(v: string) {
		this.i.yMemberPath = v;
	}
	/**
	 * The X-Axis for this series.
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
	 * The Y-Axis for this series.
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
	 * The source of triangulation data.
	 * This property is optional.  If it is left as null, the triangulation will be created based on the items in the ItemsSource.  Triangulation is a demanding operation, so the runtime performance will be better when specifying a TriangulationSource, especially when a large number of data items are present.
	*/
	get trianglesSource() : any[] {
		return (this.i.trianglesSource as any) as any[];
	}
	@Input()
	set trianglesSource(v: any[]) {
		this.i.trianglesSource = (v as any) as IEnumerable;
	}
	/**
	 * The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource.
	*/
	get triangleVertexMemberPath1() : string {
		return (this.i.triangleVertexMemberPath1 as string);
	}
	@Input()
	set triangleVertexMemberPath1(v: string) {
		this.i.triangleVertexMemberPath1 = v;
	}
	/**
	 * The name of the property of the TrianglesSource items which, for each triangle, contains the index of the second vertex point in the ItemsSource.
	*/
	get triangleVertexMemberPath2() : string {
		return (this.i.triangleVertexMemberPath2 as string);
	}
	@Input()
	set triangleVertexMemberPath2(v: string) {
		this.i.triangleVertexMemberPath2 = v;
	}
	/**
	 * The name of the property of the TrianglesSource items which, for each triangle, contains the index of the third vertex point in the ItemsSource.
	*/
	get triangleVertexMemberPath3() : string {
		return (this.i.triangleVertexMemberPath3 as string);
	}
	@Input()
	set triangleVertexMemberPath3(v: string) {
		this.i.triangleVertexMemberPath3 = v;
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
	private _triangulationStatusChanged: EventEmitter<{ sender: any, args: IgxTriangulationStatusEventArgs}> = null;
	/**
	 * Raised when the status of an ongoing Triangulation has changed.
	*/
	@Output()
	get triangulationStatusChanged(): EventEmitter<{ sender: any, args: IgxTriangulationStatusEventArgs}> {
		if (this._triangulationStatusChanged == null) {
			this._triangulationStatusChanged = new EventEmitter<{sender: any, args: IgxTriangulationStatusEventArgs}>();
			this.i.triangulationStatusChanged = delegateCombine(this.i.triangulationStatusChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxTriangulationStatusEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeTriangulationStatusChanged) {
	                        (this as any).beforeTriangulationStatusChanged(this, outerArgs);
	                    }
					this._triangulationStatusChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._triangulationStatusChanged;
	}
}
