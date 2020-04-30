/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, ICollection$1, ICollection$1_$type, IEnumerator, IEnumerator_$type, Point_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { List$1 } from "igniteui-core/List$1";
import { ReadOnlyCollection$1 } from "igniteui-core/ReadOnlyCollection$1";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class NaNSegmenter extends Base {
	static $t: Type = markType(NaNSegmenter, 'NaNSegmenter');
	static segments(points: IList$1<Point>, mode: UnknownValuePlotting): IList$1<IList$1<Point>> {
		let ret: IList$1<IList$1<Point>> = new List$1<IList$1<Point>>(IList$1_$type.specialize(Point_$type), 0);
		let pointEnumerator: IEnumerator$1<Point> = getEnumerator(points);
		let curr: IList$1<Point> = new List$1<Point>(Point_$type, 0);
		let header: boolean = true;
		while (pointEnumerator.moveNext()) {
			if (NaNSegmenter.shouldSkip(pointEnumerator.current)) {
				if (!header && mode == UnknownValuePlotting.DontPlot) {
					header = true;
					let toReturn: IList$1<Point> = curr;
					curr = new List$1<Point>(Point_$type, 0);
					ret.add(new ReadOnlyCollection$1<Point>(Point_$type, 1, toReturn));
				}
			} else {
				header = false;
				curr.add(pointEnumerator.current);
			}
		}
		ret.add(new ReadOnlyCollection$1<Point>(Point_$type, 1, curr));
		return ret;
	}
	static shouldSkip(p: Point): boolean {
		return (isNaN_(p.x) || isNaN_(p.y) || isInfinity(p.x) || isInfinity(p.y));
	}
	static shouldTake(p: Point): boolean {
		return !NaNSegmenter.shouldSkip(p);
	}
}


