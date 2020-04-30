/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { Base, Type, markType } from "./type";
import { DomWrapper, DomWrapper_$type } from "./dom";
import { MatrixTransform } from "./MatrixTransform";
import { Matrix } from "./Matrix";
import { stringReplace } from "./string";

/**
 * @hidden 
 */
export class CssTransformPropertyAccessor extends UIElementPropertyAccessor {
	static $t: Type = markType(CssTransformPropertyAccessor, 'CssTransformPropertyAccessor', (<any>UIElementPropertyAccessor).$type);
	constructor(propertyName: string) {
		super();
		this.propertyName = propertyName;
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	getValue(target: any): any {
		let wrapper = <DomWrapper><any>target;
		let matrix = wrapper.getStyleProperty(this.propertyName);
		matrix = stringReplace(stringReplace(matrix, "matrix(", ""), ")", "");
		let matrixParts = matrix.split(',');
		if (matrixParts.length != 6) {
			let mi = new Matrix();
			mi.m12 = 0;
			mi.m11 = 1;
			mi.m21 = 0;
			mi.m22 = 1;
			mi.offsetX = 0;
			mi.offsetY = 0;
			return mi;
		}
		let a = parseFloat(matrixParts[0].trim());
		let b = parseFloat(matrixParts[1].trim());
		let c = parseFloat(matrixParts[2].trim());
		let d = parseFloat(matrixParts[3].trim());
		let tx = parseFloat(matrixParts[4].trim());
		let ty = parseFloat(matrixParts[5].trim());
		let t = new MatrixTransform();
		let m = new Matrix();
		m.m11 = a;
		m.m12 = b;
		m.m21 = c;
		m.m22 = d;
		m.offsetX = tx;
		m.offsetY = ty;
		return t;
	}
	setValue(target: any, value: any): void {
		let transform = <MatrixTransform>value;
		let wrapper = <DomWrapper><any>target;
		let m = transform.matrix;
		let mat = "matrix(" + m.m11 + ", " + m.m12 + ", " + m.m21 + ", " + m.m22 + ", " + m.offsetX + ", " + m.offsetY + ")";
		wrapper.setStyleProperty(this.propertyName, mat);
	}
}


