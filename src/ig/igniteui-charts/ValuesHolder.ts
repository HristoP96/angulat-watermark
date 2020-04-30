/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class ValuesHolder extends Base {
	static $t: Type = markType(ValuesHolder, 'ValuesHolder');
	abstract get count(): number;
	private _bucketY0: number = 0;
	get bucketY0(): number {
		return this._bucketY0;
	}
	set bucketY0(value: number) {
		this._bucketY0 = value;
	}
	private _bucketY1: number = 0;
	get bucketY1(): number {
		return this._bucketY1;
	}
	set bucketY1(value: number) {
		this._bucketY1 = value;
	}
	private _tempY0: number = 0;
	get tempY0(): number {
		return this._tempY0;
	}
	set tempY0(value: number) {
		this._tempY0 = value;
	}
	private _tempY1: number = 0;
	get tempY1(): number {
		return this._tempY1;
	}
	set tempY1(value: number) {
		this._tempY1 = value;
	}
}


