/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { CategoryMode } from "./CategoryMode";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CategoryAxisRenderingParameters extends AxisRenderingParametersBase {
	static $t: Type = markType(CategoryAxisRenderingParameters, 'CategoryAxisRenderingParameters', (<any>AxisRenderingParametersBase).$type);
	private _count: number = 0;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
	}
	private _categoryMode: CategoryMode = <CategoryMode>0;
	get categoryMode(): CategoryMode {
		return this._categoryMode;
	}
	set categoryMode(value: CategoryMode) {
		this._categoryMode = value;
	}
	private _wrapAround: boolean = false;
	get wrapAround(): boolean {
		return this._wrapAround;
	}
	set wrapAround(value: boolean) {
		this._wrapAround = value;
	}
	private _mode2GroupCount: number = 0;
	get mode2GroupCount(): number {
		return this._mode2GroupCount;
	}
	set mode2GroupCount(value: number) {
		this._mode2GroupCount = value;
	}
	private _isInverted: boolean = false;
	get isInverted(): boolean {
		return this._isInverted;
	}
	set isInverted(value: boolean) {
		this._isInverted = value;
	}
}


