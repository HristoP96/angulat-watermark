/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { TileInfoResponseModel } from "./TileInfoResponseModel";

/**
 * @hidden 
 */
export class MapServerResponseModel extends Base {
	static $t: Type = markType(MapServerResponseModel, 'MapServerResponseModel');
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _tileInfo: TileInfoResponseModel = null;
	get tileInfo(): TileInfoResponseModel {
		return this._tileInfo;
	}
	set tileInfo(value: TileInfoResponseModel) {
		this._tileInfo = value;
	}
}


