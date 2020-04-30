/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Transform } from "./Transform";
import { Matrix } from "./Matrix";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class MatrixTransform extends Transform {
	static $t: Type = markType(MatrixTransform, 'MatrixTransform', (<any>Transform).$type);
	private _matrix: Matrix = null;
	get matrix(): Matrix {
		return this._matrix;
	}
	set matrix(value: Matrix) {
		this._matrix = value;
	}
}


