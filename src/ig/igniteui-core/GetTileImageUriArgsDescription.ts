/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GetTileImageUriArgsDescription extends Description {
	static $t: Type = markType(GetTileImageUriArgsDescription, 'GetTileImageUriArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GetTileImageUriArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _tileLevel: number = 0;
	get tileLevel(): number {
		return this._tileLevel;
	}
	set tileLevel(value: number) {
		this._tileLevel = value;
		this.markDirty("TileLevel");
	}
	private _tilePositionX: number = 0;
	get tilePositionX(): number {
		return this._tilePositionX;
	}
	set tilePositionX(value: number) {
		this._tilePositionX = value;
		this.markDirty("TilePositionX");
	}
	private _tilePositionY: number = 0;
	get tilePositionY(): number {
		return this._tilePositionY;
	}
	set tilePositionY(value: number) {
		this._tilePositionY = value;
		this.markDirty("TilePositionY");
	}
	private _tileImageUri: string = null;
	get tileImageUri(): string {
		return this._tileImageUri;
	}
	set tileImageUri(value: string) {
		this._tileImageUri = value;
		this.markDirty("TileImageUri");
	}
}


