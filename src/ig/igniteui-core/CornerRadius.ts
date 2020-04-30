/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CornerRadius extends Base {
	static $t: Type = markType(CornerRadius, 'CornerRadius');
	constructor(initNumber: number, uniformRadius: number);
	constructor(initNumber: number, topLeft: number, topRight: number, bottomRight: number, bottomLeft: number);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let uniformRadius: number = <number>_rest[0];
				this.bottomLeft = this.bottomRight = this.topLeft = this.topRight = uniformRadius;
			}
			break;

			case 1:
			{
				let topLeft: number = <number>_rest[0];
				let topRight: number = <number>_rest[1];
				let bottomRight: number = <number>_rest[2];
				let bottomLeft: number = <number>_rest[3];
				this.topLeft = topLeft;
				this.topRight = topRight;
				this.bottomRight = bottomRight;
				this.bottomLeft = bottomLeft;
			}
			break;

			case 2:
			{
				this.bottomLeft = NaN;
				this.bottomRight = NaN;
				this.topLeft = NaN;
				this.topRight = NaN;
			}
			break;

		}

	}
	private _bottomRight: number = 0;
	get bottomRight(): number {
		return this._bottomRight;
	}
	set bottomRight(value: number) {
		this._bottomRight = value;
	}
	private _bottomLeft: number = 0;
	get bottomLeft(): number {
		return this._bottomLeft;
	}
	set bottomLeft(value: number) {
		this._bottomLeft = value;
	}
	private _topLeft: number = 0;
	get topLeft(): number {
		return this._topLeft;
	}
	set topLeft(value: number) {
		this._topLeft = value;
	}
	private _topRight: number = 0;
	get topRight(): number {
		return this._topRight;
	}
	set topRight(value: number) {
		this._topRight = value;
	}
}


