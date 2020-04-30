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
export class TileImageCreatedEventArgs extends EventArgs {
	static $t: Type = markType(TileImageCreatedEventArgs, 'TileImageCreatedEventArgs', (<any>EventArgs).$type);
	private _imageData: number[] = null;
	get imageData(): number[] {
		return this._imageData;
	}
	set imageData(value: number[]) {
		this._imageData = value;
	}
	private _image: any = null;
	get image(): any {
		return this._image;
	}
	set image(value: any) {
		this._image = value;
	}
	private _z: number = 0;
	get z(): number {
		return this._z;
	}
	set z(value: number) {
		this._z = value;
	}
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		this._x = value;
	}
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		this._y = value;
	}
	private _url: string = null;
	get url(): string {
		return this._url;
	}
	set url(value: string) {
		this._url = value;
	}
}


