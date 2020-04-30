/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ITileZoomTileInfo, ITileZoomTileInfo_$type } from "./ITileZoomTileInfo";

/**
 * @hidden 
 */
export class TileZoomTileInfo extends Base implements ITileZoomTileInfo {
	static $t: Type = markType(TileZoomTileInfo, 'TileZoomTileInfo', (<any>Base).$type, [ITileZoomTileInfo_$type]);
	private _zoomLevel: number = 0;
	get zoomLevel(): number {
		return this._zoomLevel;
	}
	set zoomLevel(value: number) {
		this._zoomLevel = value;
	}
	private _xPosition: number = 0;
	get xPosition(): number {
		return this._xPosition;
	}
	set xPosition(value: number) {
		this._xPosition = value;
	}
	private _yPosition: number = 0;
	get yPosition(): number {
		return this._yPosition;
	}
	set yPosition(value: number) {
		this._yPosition = value;
	}
	toString(): string {
		return this.zoomLevel + "_" + this.xPosition + "_" + this.yPosition;
	}
}


