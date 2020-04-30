/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";
import { FastItemsSourceEventAction } from "./FastItemsSourceEventAction";

/**
 * @hidden 
 */
export class FastItemsSourceEventArgs extends EventArgs {
	static $t: Type = markType(FastItemsSourceEventArgs, 'FastItemsSourceEventArgs', (<any>EventArgs).$type);
	constructor(initNumber: number, action: FastItemsSourceEventAction, position: number, count: number);
	constructor(initNumber: number, position: number, propertyName: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let action: FastItemsSourceEventAction = <FastItemsSourceEventAction>_rest[0];
				let position: number = <number>_rest[1];
				let count: number = <number>_rest[2];
				super();
				this._action = <FastItemsSourceEventAction>0;
				this._position = 0;
				this._count = 0;
				this._propertyName = null;
				this.action = action;
				this.position = position;
				this.count = count;
				this.propertyName = null;
			}
			break;

			case 1:
			{
				let position: number = <number>_rest[0];
				let propertyName: string = <string>_rest[1];
				super();
				this._action = <FastItemsSourceEventAction>0;
				this._position = 0;
				this._count = 0;
				this._propertyName = null;
				this.action = FastItemsSourceEventAction.Change;
				this.position = position;
				this.count = 1;
				this.propertyName = propertyName;
			}
			break;

		}

	}
	private _action: FastItemsSourceEventAction;
	get action(): FastItemsSourceEventAction {
		return this._action;
	}
	set action(value: FastItemsSourceEventAction) {
		this._action = value;
	}
	private _position: number;
	get position(): number {
		return this._position;
	}
	set position(value: number) {
		this._position = value;
	}
	private _count: number;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
	}
	private _propertyName: string;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
}


