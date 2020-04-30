import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { IgxImageTilesReadyEventArgs } from "./igx-image-tiles-ready-event-args";
import { IgxGeographicShapeSeriesBaseComponent } from "./igx-geographic-shape-series-base-component";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicTileSeries } from "./GeographicTileSeries";

/**
 * Series class used for displaying a tile set, and using shapes to define the areas that should be rendered.
*/
export const IgxGeographicTileSeriesComponent_PROVIDERS = [{provide: IgxGeographicShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxGeographicTileSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicTileSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicTileSeriesComponent)}];
@Component({
  selector: 'igx-geographic-tile-series',
  template: ``,
  providers: [{provide: IgxGeographicShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxGeographicTileSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicTileSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicTileSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicTileSeriesComponent extends IgxGeographicShapeSeriesBaseComponent
{

protected createImplementation() : GeographicTileSeries
{
	return new GeographicTileSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicTileSeries {
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
	 * Removes all cached tile Imagery from the
	
	*/
	public clearTileCache() {
		this.i.clearTileCache();
	}
	private _imageTilesReady: EventEmitter<{ sender: any, args: IgxImageTilesReadyEventArgs}> = null;
	/**
	 * This event is fired whenever the image tiles transition from a loading state (e.g. some are fading in) to a loaded state.
	*/
	@Output()
	get imageTilesReady(): EventEmitter<{ sender: any, args: IgxImageTilesReadyEventArgs}> {
		if (this._imageTilesReady == null) {
			this._imageTilesReady = new EventEmitter<{sender: any, args: IgxImageTilesReadyEventArgs}>();
			this.i.imageTilesReady = delegateCombine(this.i.imageTilesReady, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxImageTilesReadyEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeImageTilesReady) {
	                        (this as any).beforeImageTilesReady(this, outerArgs);
	                    }
					this._imageTilesReady.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._imageTilesReady;
	}
}
