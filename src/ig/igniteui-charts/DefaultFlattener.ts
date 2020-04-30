/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, ICollection$1, ICollection$1_$type, Number_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { IFlattener, IFlattener_$type } from "./IFlattener";
import { List$1 } from "igniteui-core/List$1";
import { Flattener } from "igniteui-core/Flattener";
import { FastFlattener } from "igniteui-core/FastFlattener";
import { RearrangedList$1 } from "igniteui-core/RearrangedList$1";

/**
 * @hidden 
 */
export class DefaultFlattener extends Base implements IFlattener {
	static $t: Type = markType(DefaultFlattener, 'DefaultFlattener', (<any>Base).$type, [IFlattener_$type]);
	private static readonly flattenerChunking: number = 512;
	private flattenHelper(result: IList$1<number>, X: (arg1: number) => number, Y: (arg1: number) => number, b: number, e: number, E: number): IList$1<number> {
		let indices: List$1<number> = new List$1<number>(Number_$type, 0);
		let start: number = b;
		let end: number = e;
		let toFlatten: number = end - start + 1;
		while (toFlatten > 0) {
			if (toFlatten <= DefaultFlattener.flattenerChunking) {
				Flattener.flatten2(indices, X, Y, start, end, E);
				start = end + 1;
			} else {
				let currentEnd: number = start + DefaultFlattener.flattenerChunking - 1;
				Flattener.flatten2(indices, X, Y, start, currentEnd, E);
				start = currentEnd + 1;
			}
			toFlatten = end - start + 1;
		}
		return indices;
	}
	private fastFlattenHelper(X: number[], Y: number[], b: number, e: number, E: number): List$1<number> {
		let indices: List$1<number> = new List$1<number>(Number_$type, 0);
		let start: number = b;
		let end: number = e;
		let toFlatten: number = end - start + 1;
		while (toFlatten > 0) {
			if (toFlatten <= DefaultFlattener.flattenerChunking) {
				FastFlattener.fastFlatten2(indices, X, Y, start, end, E);
				start = end + 1;
			} else {
				let currentEnd: number = start + DefaultFlattener.flattenerChunking - 1;
				FastFlattener.fastFlatten2(indices, X, Y, start, currentEnd, E);
				start = currentEnd + 1;
			}
			toFlatten = end - start + 1;
		}
		return indices;
	}
	flatten(points: IList$1<Point>, resolution: number): IList$1<Point> {
		let x: (arg1: number) => number = (i: number) => this.getX(points, i);
		let y: (arg1: number) => number = (i: number) => this.getY(points, i);
		return this.getFlattened(points, resolution, x, y);
	}
	fastFlatten(x: number[], y: number[], count: number, resolution: number): List$1<Point> {
		return this.getFastFlattened(x, y, count, resolution);
	}
	getFlattened(pointsList: IList$1<Point>, resolution: number, x: (arg1: number) => number, y: (arg1: number) => number): IList$1<Point> {
		let indices = this.flattenHelper(new List$1<number>(Number_$type, 0), x, y, 0, pointsList.count - 1, resolution);
		let reordered = new RearrangedList$1<Point>(Point_$type, pointsList, indices);
		return reordered;
	}
	getFastFlattened(x: number[], y: number[], count: number, resolution: number): List$1<Point> {
		let indices = this.fastFlattenHelper(x, y, 0, count - 1, resolution);
		let ret: List$1<Point> = new List$1<Point>(Point_$type, 0);
		for (let i = 0; i < indices.count; i++) {
			ret.add(<Point>{ $type: Point_$type, x: x[indices._inner[i]], y: y[indices._inner[i]] });
		}
		return ret;
	}
	private getX(list: IList$1<Point>, i: number): number {
		return list.item(i).x;
	}
	private getY(list: IList$1<Point>, i: number): number {
		return list.item(i).y;
	}
}


