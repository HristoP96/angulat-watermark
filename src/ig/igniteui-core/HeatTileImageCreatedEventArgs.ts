/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class HeatTileImageCreatedEventArgs extends TileImageCreatedEventArgs {
	static $t: Type = markType(HeatTileImageCreatedEventArgs, 'HeatTileImageCreatedEventArgs', (<any>TileImageCreatedEventArgs).$type);
	private _globalMinimumValue: number = 0;
	get globalMinimumValue(): number {
		return this._globalMinimumValue;
	}
	set globalMinimumValue(value: number) {
		this._globalMinimumValue = value;
	}
	private _globalMaximumValue: number = 0;
	get globalMaximumValue(): number {
		return this._globalMaximumValue;
	}
	set globalMaximumValue(value: number) {
		this._globalMaximumValue = value;
	}
	private _globalMaximumValueLongitude: number = 0;
	get globalMaximumValueLongitude(): number {
		return this._globalMaximumValueLongitude;
	}
	set globalMaximumValueLongitude(value: number) {
		this._globalMaximumValueLongitude = value;
	}
	private _globalMaximumValueLatitude: number = 0;
	get globalMaximumValueLatitude(): number {
		return this._globalMaximumValueLatitude;
	}
	set globalMaximumValueLatitude(value: number) {
		this._globalMaximumValueLatitude = value;
	}
	private _globalMinimumValueLongitude: number = 0;
	get globalMinimumValueLongitude(): number {
		return this._globalMinimumValueLongitude;
	}
	set globalMinimumValueLongitude(value: number) {
		this._globalMinimumValueLongitude = value;
	}
	private _globalMinimumValueLatitude: number = 0;
	get globalMinimumValueLatitude(): number {
		return this._globalMinimumValueLatitude;
	}
	set globalMinimumValueLatitude(value: number) {
		this._globalMinimumValueLatitude = value;
	}
}


