/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "./type";
import { Brush } from "./Brush";
import { BrushCollection } from "./BrushCollection";
import { List$1 } from "./List$1";
import { MathUtil } from "./MathUtil";
import { InterpolationMode } from "./InterpolationMode";
import { Color } from "./Color";
import { ColorUtil } from "./ColorUtil";
import { truncate, isNaN_ } from "./number";

/**
 * @hidden 
 */
export class BrushCollectionUtil extends Base {
	static $t: Type = markType(BrushCollectionUtil, 'BrushCollectionUtil');
	static getInterpolatedBrush(target: BrushCollection, index: number): Brush {
		if (isNaN_(index)) {
			return null;
		}
		index = MathUtil.clamp(index, 0, target.count - 1);
		let i: number = <number>truncate(Math.floor(index));
		if (i == index) {
			return target.item(i);
		}
		return BrushCollectionUtil.interpolateBrushes(index - i, target.item(i), target.item(i + 1), target.interpolationMode);
	}
	private static interpolateBrushes(p: number, minBrush: Brush, maxBrush: Brush, InterpolationMode: InterpolationMode): Brush {
		let minFill: Color = minBrush.color;
		let maxFill: Color = maxBrush.color;
		let interp: Color = ColorUtil.getInterpolation(minFill, p, maxFill, InterpolationMode);
		let b: Brush = new Brush();
		b.color = interp;
		return b;
	}
	static from(colors: IList$1<Color>): BrushCollection {
		let brushes = new BrushCollection();
		for (let color of fromEnum<Color>(colors)) {
			let brush = ColorUtil.toBrush(color);
			if (brush != null) {
				brushes.add(brush);
			}
		}
		return brushes;
	}
}


