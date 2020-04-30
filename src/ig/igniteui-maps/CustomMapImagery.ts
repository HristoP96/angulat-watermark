/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImagery } from "./GeographicMapImagery";
import { CustomMapTileSource } from "igniteui-core/CustomMapTileSource";
import { Base, runOn, delegateCombine, Type, markType } from "igniteui-core/type";
import { GetTileImageUriArgs } from "igniteui-core/GetTileImageUriArgs";

/**
 * @hidden 
 */
export class CustomMapImagery extends GeographicMapImagery {
	static $t: Type = markType(CustomMapImagery, 'CustomMapImagery', (<any>GeographicMapImagery).$type);
	constructor(tileSource: CustomMapTileSource) {
		super(tileSource);
		tileSource.getTileImageUri = delegateCombine(tileSource.getTileImageUri, runOn(this, this.tileSource_GetTileImageUri));
	}
	private tileSource_GetTileImageUri(sender: any, e: GetTileImageUriArgs): void {
		this.onGetTileImageUri(e);
	}
	protected onGetTileImageUri(e: GetTileImageUriArgs): void {
		if (this.getTileImageUri != null) {
			this.getTileImageUri(this, e);
		}
	}
	getTileImageUri: (sender: any, e: GetTileImageUriArgs) => void = null;
}


