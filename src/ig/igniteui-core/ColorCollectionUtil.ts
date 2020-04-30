/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Type, markType } from "./type";
import { Color } from "./Color";
import { ObservableColorCollection } from "./ObservableColorCollection";
import { List$1 } from "./List$1";
import { MathUtil } from "./MathUtil";
import { InterpolationMode } from "./InterpolationMode";
import { ColorUtil } from "./ColorUtil";
import { truncate } from "./number";

/**
 * @hidden 
 */
export class ColorCollectionUtil extends Base {
	static $t: Type = markType(ColorCollectionUtil, 'ColorCollectionUtil');
	static getInterpolatedColor(target: ObservableColorCollection, index: number): Color {
		index = MathUtil.clamp(index, 0, target.count - 1);
		let i: number = <number>truncate(Math.floor(index));
		if (i == index) {
			return target._inner[i];
		}
		return ColorCollectionUtil.interpolateColores(index - i, target._inner[i], target._inner[i + 1], target.interpolationMode);
	}
	private static interpolateColores(p: number, minColor: Color, maxColor: Color, InterpolationMode: InterpolationMode): Color {
		return ColorUtil.getInterpolation(minColor, p, maxColor, InterpolationMode);
	}
	static from(colors: IList$1<Color>): ObservableColorCollection {
		let collection = new ObservableColorCollection();
		collection.addRange(colors);
		return collection;
	}
}


