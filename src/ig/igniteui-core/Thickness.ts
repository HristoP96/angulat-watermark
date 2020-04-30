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
export class Thickness extends Base {
	static $t: Type = markType(Thickness, 'Thickness');
	constructor(initNumber: number, uniformLength: number);
	constructor(initNumber: number, left: number, top: number, right: number, bottom: number);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let uniformLength: number = <number>_rest[0];
				this.bottom = this.left = this.right = this.top = uniformLength;
			}
			break;

			case 1:
			{
				let left: number = <number>_rest[0];
				let top: number = <number>_rest[1];
				let right: number = <number>_rest[2];
				let bottom: number = <number>_rest[3];
				this.left = left;
				this.top = top;
				this.right = right;
				this.bottom = bottom;
			}
			break;

			case 2:
			{
				this.bottom = NaN;
				this.left = NaN;
				this.right = NaN;
				this.top = NaN;
			}
			break;

		}

	}
	private _bottom: number = 0;
	get bottom(): number {
		return this._bottom;
	}
	set bottom(value: number) {
		this._bottom = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _right: number = 0;
	get right(): number {
		return this._right;
	}
	set right(value: number) {
		this._right = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	equals(thickness: Thickness): boolean {
		return this.bottom == thickness.bottom && this.top == thickness.top && this.left == thickness.left && this.right == thickness.right;
	}
	toString(): string {
		let marginsInfo = this.left.toString() + "," + this.top.toString() + "," + this.right.toString() + "," + this.bottom.toString();
		return marginsInfo;
	}
}


