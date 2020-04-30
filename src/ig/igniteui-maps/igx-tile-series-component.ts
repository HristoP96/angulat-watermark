import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { IgxShapeSeriesBaseComponent } from "igniteui-charts/igx-shape-series-base-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { TileSeries } from "./TileSeries";

/**
 * Represents a tile series class that can render imagery tiles
*/
export const IgxTileSeriesComponent_PROVIDERS = [{provide: IgxShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxTileSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxTileSeriesComponent)}];
@Component({
  selector: 'igx-tile-series',
  template: ``,
  providers: [{provide: IgxShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxTileSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxTileSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTileSeriesComponent extends IgxShapeSeriesBaseComponent
{

protected createImplementation() : TileSeries
{
	return new TileSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TileSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The MapImagery which is used to provide the tiles for display.
	*/
	get tileImagery() : IgxGeographicMapImagery {
	                                        if (this.i.tileImagery == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.tileImagery as any).externalObject;
	}
	@Input()
	set tileImagery(v: IgxGeographicMapImagery) {
		v == null ? this.i.tileImagery = null : this.i.tileImagery = v.i;
	}
	/**
	 * Defers rendering of the series
	
	*/
	public deferredRefresh() {
		this.i.deferredRefresh();
	}
}
