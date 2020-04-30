/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType } from "./type";
import { Brush } from "./Brush";
import { LinearGradientBrush } from "./LinearGradientBrush";
import { Color } from "./Color";
import { GradientStop } from "./GradientStop";

/**
 * @hidden 
 */
export class BrushUtilCore extends Base {
	static $t: Type = markType(BrushUtilCore, 'BrushUtilCore');
	static isFullyTransparent(brush: Brush): boolean {
		let linearBrush = typeCast<LinearGradientBrush>((<any>LinearGradientBrush).$type, brush);
		if (linearBrush != null) {
			return BrushUtilCore.isFullyTransparent2(linearBrush);
		}
		if (brush.color.a == 0) {
			return true;
		}
		return false;
	}
	static isFullyTransparent2(brush: LinearGradientBrush): boolean {
		let $t = brush.gradientStops;
		for (let i = 0; i < $t.length; i++) {
			let stop = $t[i];
			if (!BrushUtilCore.isFullyTransparent1(stop)) {
				return false;
			}
		}
		return true;
	}
	static isFullyTransparent1(gradientStop: GradientStop): boolean {
		if (gradientStop.color.a == 0) {
			return true;
		}
		return false;
	}
}


