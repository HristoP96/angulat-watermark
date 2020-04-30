/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GetTileImageUriArgs extends EventArgs {
	static $t: Type = markType(GetTileImageUriArgs, 'GetTileImageUriArgs', (<any>EventArgs).$type);
	constructor(tileLevel: number, tilePositionX: number, tilePositionY: number) {
		super();
		this.tileLevel = tileLevel;
		this.tilePositionX = tilePositionX;
		this.tilePositionY = tilePositionY;
	}
	private _tileLevel: number = 0;
	get tileLevel(): number {
		return this._tileLevel;
	}
	set tileLevel(value: number) {
		this._tileLevel = value;
	}
	private _tilePositionX: number = 0;
	get tilePositionX(): number {
		return this._tilePositionX;
	}
	set tilePositionX(value: number) {
		this._tilePositionX = value;
	}
	private _tilePositionY: number = 0;
	get tilePositionY(): number {
		return this._tilePositionY;
	}
	set tilePositionY(value: number) {
		this._tilePositionY = value;
	}
	private _tileImageUri: string = null;
	get tileImageUri(): string {
		return this._tileImageUri;
	}
	set tileImageUri(value: string) {
		this._tileImageUri = value;
	}
}


