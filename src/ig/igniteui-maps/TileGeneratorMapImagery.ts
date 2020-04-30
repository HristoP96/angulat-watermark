/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImagery } from "./GeographicMapImagery";
import { ITileGenerator, ITileGenerator_$type } from "igniteui-core/ITileGenerator";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { TileGeneratorTileSource } from "igniteui-core/TileGeneratorTileSource";
import { Base, Type, runOn, delegateCombine, markType } from "igniteui-core/type";
import { DownloadingMultiScaleImageEventArgs } from "igniteui-core/DownloadingMultiScaleImageEventArgs";
import { CancellingMultiScaleImageEventArgs } from "igniteui-core/CancellingMultiScaleImageEventArgs";
import { TileImageCreatedEventArgs } from "igniteui-core/TileImageCreatedEventArgs";
import { TileImageZoomChangingEventArgs } from "igniteui-core/TileImageZoomChangingEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { IMapRenderDeferralHandler } from "igniteui-core/IMapRenderDeferralHandler";
import { stringReplace } from "igniteui-core/string";

/**
 * @hidden 
 */
export class TileGeneratorMapImagery extends GeographicMapImagery {
	static $t: Type = markType(TileGeneratorMapImagery, 'TileGeneratorMapImagery', (<any>GeographicMapImagery).$type);
	constructor() {
		super(new TileGeneratorTileSource());
		this.downloadingImage = delegateCombine(this.downloadingImage, runOn(this, this.tileGeneratorMapImagery_DownloadingImage));
		this.cancellingImage = delegateCombine(this.cancellingImage, runOn(this, this.tileGeneratorMapImagery_CancellingImage));
	}
	private tileGeneratorMapImagery_CancellingImage(sender: any, args: CancellingMultiScaleImageEventArgs): void {
		let parts = args.uri.toString().split('/');
		let z = parseInt(stringReplace(parts[3], "/", ""));
		let x = parseInt(stringReplace(parts[4], "/", ""));
		let y = parseInt(stringReplace(stringReplace(parts[5], "/", ""), ".png", ""));
		if (this.tileGenerator != null) {
			this.tileGenerator.cancelTile(z, x, y);
		}
	}
	private tileGeneratorMapImagery_DownloadingImage(sender: any, args: DownloadingMultiScaleImageEventArgs): void {
		let parts = args.uri.toString().split('/');
		let z = parseInt(stringReplace(parts[3], "/", ""));
		let x = parseInt(stringReplace(parts[4], "/", ""));
		let y = parseInt(stringReplace(stringReplace(parts[5], "/", ""), ".png", ""));
		args.uri = null;
		let img_ = args.image;
		if (this.tileGenerator != null) {
			this.tileGenerator.getTile(z, x, y, (o: any, e: TileImageCreatedEventArgs) => this.deferralHandler.deferAction(() => img_.src = e.url), (o: any, e: TileImageCreatedEventArgs) => {
			}, (o: any, e: TileImageZoomChangingEventArgs) => {
			}, img_);
		}
	}
	static readonly tileGeneratorPropertyName: string = "TileGenerator";
	static readonly tileGeneratorProperty: DependencyProperty = DependencyProperty.register(TileGeneratorMapImagery.tileGeneratorPropertyName, ITileGenerator_$type, (<any>TileGeneratorMapImagery).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<TileGeneratorMapImagery>o).onPropertyUpdated(TileGeneratorMapImagery.tileGeneratorPropertyName, e.oldValue, e.newValue)));
	get tileGenerator(): ITileGenerator {
		return <ITileGenerator><any>this.getValue(TileGeneratorMapImagery.tileGeneratorProperty);
	}
	set tileGenerator(value: ITileGenerator) {
		this.setValue(TileGeneratorMapImagery.tileGeneratorProperty, value);
	}
}


