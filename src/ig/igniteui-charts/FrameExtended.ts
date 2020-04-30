/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { InterpolationMode } from "igniteui-core/InterpolationMode";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export abstract class FrameExtended extends Base {
	static $t: Type = markType(FrameExtended, 'FrameExtended');
	private static interpolateBrushes(p: number, minBrush: Brush, maxBrush: Brush, InterpolationMode: InterpolationMode): Brush {
		let b: Brush = BrushUtil.getInterpolation(minBrush, p, maxBrush, InterpolationMode);
		return b;
	}
	static interpolate(ret: List$1<Brush>, p: number, min: List$1<Brush>, max: List$1<Brush>, interpolationMode: InterpolationMode): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let transparentBrush: Brush = ((() => {
			let $ret = new Brush();
			$ret.fill = "transparent";
			return $ret;
		})());
		let q: number = 1 - p;
		if (ret.count < count) {
			let newVals = <Brush[]>new Array(count - ret.count);
			for (let i = 0; i < count - ret.count; i++) {
				newVals[i] = new Brush();
			}
			ret.insertRange(ret.count, <IEnumerable$1<Brush>><any>newVals);
		}
		if (ret.count > count) {
			ret.removeRange(count, ret.count - count);
		}
		for (let i1: number = 0; i1 < Math.min(minCount, maxCount); ++i1) {
			ret._inner[i1] = FrameExtended.interpolateBrushes(p, min._inner[i1], max._inner[i1], interpolationMode);
		}
		if (minCount < maxCount) {
			let mn: Brush = minCount > 0 ? min._inner[minCount - 1] : transparentBrush;
			for (let i2: number = minCount; i2 < maxCount; ++i2) {
				ret._inner[i2] = FrameExtended.interpolateBrushes(p, mn, max._inner[i2], interpolationMode);
			}
		}
		if (minCount > maxCount) {
			let mx: Brush = maxCount > 0 ? max._inner[maxCount - 1] : transparentBrush;
			for (let i3: number = maxCount; i3 < minCount; ++i3) {
				ret._inner[i3] = FrameExtended.interpolateBrushes(p, min._inner[i3], mx, interpolationMode);
			}
		}
	}
}


