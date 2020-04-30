/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class DeviceUtils extends Base {
	static $t: Type = markType(DeviceUtils, 'DeviceUtils');
	static toPixelUnits(value: number): number {
		return value;
	}
	static toFontPixelUnits(value: number): number {
		return value;
	}
	static clampPixelScalingRatio(value: number): number {
		if (isNaN_(value)) {
			return NaN;
		}
		if (value <= 0) {
			return NaN;
		}
		return value;
	}
	static fromPixelUnits(value: number): number {
		return value * DeviceUtils.getDIPScalingRatio();
	}
	static fromFontPixelUnits(value: number): number {
		return value * DeviceUtils.getFontDIPScalingRatio();
	}
	static getDIPScalingRatio(): number {
		let val: number = DeviceUtils.toPixelUnits(2);
		return 2 / val;
	}
	static getFontDIPScalingRatio(): number {
		let val: number = DeviceUtils.toFontPixelUnits(2);
		return 2 / val;
	}
}


