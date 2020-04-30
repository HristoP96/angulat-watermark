/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TileSeries } from "./TileSeries";
import { GeographicShapeSeriesBase } from "./GeographicShapeSeriesBase";
import { GeographicMapImagery } from "./GeographicMapImagery";
import { Base, Type, EventArgs, runOn, delegateRemove, delegateCombine, markType } from "igniteui-core/type";
import { Series } from "igniteui-charts/Series";
import { Control } from "igniteui-core/Control";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ImageTilesReadyEventArgs } from "./ImageTilesReadyEventArgs";

/**
 * @hidden 
 */
export class GeographicTileSeries extends GeographicShapeSeriesBase {
	static $t: Type = markType(GeographicTileSeries, 'GeographicTileSeries', (<any>GeographicShapeSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicTileSeries).$type;
	}
	static readonly tileImageryPropertyName: string = "TileImagery";
	get tileImagery(): GeographicMapImagery {
		return this._tileImagery;
	}
	set tileImagery(value: GeographicMapImagery) {
		let changed: boolean = value != this.tileImagery;
		if (changed) {
			let oldValue: any = this.tileImagery;
			this._tileImagery = value;
			this.raisePropertyChanged(GeographicTileSeries.tileImageryPropertyName, oldValue, value);
		}
	}
	private _tileImagery: GeographicMapImagery = null;
	clearTileCache(): void {
		if (this.tileImagery != null) {
			this.tileImagery.clearTileCache();
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case GeographicTileSeries.tileImageryPropertyName:
			if (this.hostedSeries != null) {
				(<TileSeries>this.hostedSeries).tileImagery = this.tileImagery;
			}
			break;

		}

	}
	private _tilesSoruce: TileSeries = null;
	protected onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		(<TileSeries>this.hostedSeries).tileImagery = this.tileImagery;
		if (this._tilesSoruce != null) {
			let $t = this._tilesSoruce;
			$t.imageTilesReady = delegateRemove($t.imageTilesReady, runOn(this, this._tilesSoruce_ImageTilesReady));
		}
		this._tilesSoruce = <TileSeries>this.hostedSeries;
		if (this._tilesSoruce != null) {
			let $t1 = this._tilesSoruce;
			$t1.imageTilesReady = delegateCombine($t1.imageTilesReady, runOn(this, this._tilesSoruce_ImageTilesReady));
		}
	}
	protected createSeries(): Series {
		return new TileSeries();
	}
	imageTilesReady: (sender: any, e: ImageTilesReadyEventArgs) => void = null;
	private _tilesSoruce_ImageTilesReady(sender: any, e: EventArgs): void {
		if (this.imageTilesReady != null) {
			this.imageTilesReady(this, new ImageTilesReadyEventArgs());
		}
	}
}


