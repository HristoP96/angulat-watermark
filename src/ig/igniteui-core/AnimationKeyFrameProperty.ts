/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { UIElementPropertyId } from "./UIElementPropertyId";
import { Matrix } from "./Matrix";
import { MatrixTransform } from "./MatrixTransform";
import { TransformMatrixHelpler } from "./TransformMatrixHelpler";

/**
 * @hidden 
 */
export class AnimationKeyFrameProperty extends Base {
	static $t: Type = markType(AnimationKeyFrameProperty, 'AnimationKeyFrameProperty');
	constructor(id: UIElementPropertyId, value: any) {
		super();
		this.propertyId = id;
		this.value = value;
	}
	private _propertyId: UIElementPropertyId = <UIElementPropertyId>0;
	get propertyId(): UIElementPropertyId {
		return this._propertyId;
	}
	set propertyId(value: UIElementPropertyId) {
		this._propertyId = value;
	}
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		let val = this.checkCoercions(value);
		this._value = val;
	}
	private checkCoercions(value: any): any {
		if (this.propertyId == UIElementPropertyId.Unset) {
			return value;
		}
		switch (this.propertyId) {
			case UIElementPropertyId.Transform:
			let m = TransformMatrixHelpler.coerceToMatrix(value);
			let mt = new MatrixTransform();
			mt.matrix = m;
			return mt;

		}

		return value;
	}
}


