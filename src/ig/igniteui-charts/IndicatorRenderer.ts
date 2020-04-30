/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, IEnumerable, IEnumerable_$type, ICollection$1, ICollection$1_$type, NotSupportedException, fromEnum, Number_$type, Point_$type, typeCast, toEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { PathFigure } from "igniteui-core/PathFigure";
import { List$1 } from "igniteui-core/List$1";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { Rect } from "igniteui-core/Rect";
import { Path } from "igniteui-core/Path";
import { Clipper } from "igniteui-core/Clipper";
import { PathFigureCollection } from "igniteui-core/PathFigureCollection";
import { DelegateClipper } from "./DelegateClipper";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Pool$1 } from "igniteui-core/Pool$1";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { Flattener } from "igniteui-core/Flattener";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { Geometry } from "igniteui-core/Geometry";
import { Thread } from "igniteui-core/culture";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class IndicatorRenderer extends Base {
	static $t: Type = markType(IndicatorRenderer, 'IndicatorRenderer');
	private static output(segments: List$1<number>, x0: (arg1: number) => number, y0: (arg1: number) => number, resolution: number): PathFigure {
		let pathFigure: PathFigure = new PathFigure();
		let flattenedPoints: IEnumerable$1<Point> = IndicatorRenderer.flatten(segments, x0, y0, resolution);
		for (let currentPoint of fromEnum<Point>(flattenedPoints)) {
			pathFigure._segments.add(((() => {
				let $ret = new LineSegment(1);
				$ret.point = currentPoint;
				return $ret;
			})()));
		}
		pathFigure._startPoint = (<LineSegment>pathFigure._segments._inner[0]).point;
		return pathFigure;
	}
	static rasterizeLine(count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, colorByGradient: boolean, windowRect: Rect, viewportRect: Rect, positivePath0: Path, negativePath0: Path, bucketSize: number, resolution: number, clipper: Clipper): void {
		let positiveFigures0: PathFigureCollection = (<PathGeometry>positivePath0.data).figures;
		let negativeFigures0: PathFigureCollection = (<PathGeometry>negativePath0.data).figures;
		if (count > 1) {
			let spoof: DelegateClipper = new DelegateClipper(x0, y0, count, clipper);
			x0 = spoof.x;
			y0 = spoof.y;
			count = spoof.count;
		}
		if (bucketSize == 1) {
			let currentSegment: List$1<number> = new List$1<number>(Number_$type, 0);
			let currentFigures0: PathFigureCollection = positiveFigures0;
			let currentType: number = 0;
			currentSegment.add(0);
			for (let i: number = 0, j: number = 1; j < count; i = j++) {
				let type: number = currentType;
				let valueDelegateResult: number = y0(j) - y0(i);
				if (colorByGradient && !isNaN_(valueDelegateResult)) {
					type = <number>Math.sign(valueDelegateResult);
				}
				if (type != 0 && type != currentType) {
					currentFigures0.add(IndicatorRenderer.output(currentSegment, x0, y0, resolution));
					currentType = type;
					currentFigures0 = currentType == 1 ? negativeFigures0 : positiveFigures0;
					currentSegment.clear();
					currentSegment.add(i);
				}
				currentSegment.add(j);
			}
			currentFigures0.add(IndicatorRenderer.output(currentSegment, x0, y0, resolution));
		} else {
			let currentSegment1: List$1<number> = new List$1<number>(Number_$type, 0);
			let currentFigures01: PathFigureCollection = positiveFigures0;
			let currentType1: number = 0;
			currentSegment1.add(0);
			for (let i1: number = 0, j1: number = 1; j1 < count; i1 = j1++) {
				let type1: number = currentType1;
				let valueDelegateResult1: number = y0(j1) - y0(i1);
				if (colorByGradient && !isNaN_(valueDelegateResult1)) {
					type1 = <number>Math.sign(valueDelegateResult1);
				}
				if (type1 != 0 && type1 != currentType1) {
					if (currentSegment1.count > 0) {
						currentFigures01.add(IndicatorRenderer.output(currentSegment1, x0, y0, resolution));
					}
					currentType1 = type1;
					currentFigures01 = currentType1 == 1 ? negativeFigures0 : positiveFigures0;
					currentSegment1.clear();
					currentSegment1.add(i1);
				}
				currentSegment1.add(j1);
			}
			if (currentSegment1.count > 0) {
				currentFigures01.add(IndicatorRenderer.output(currentSegment1, x0, y0, resolution));
			}
		}
	}
	static rasterizeArea(count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, colorByGradient: boolean, windowRect: Rect, viewportRect: Rect, positivePath0: Path, positivePath01: Path, negativePath0: Path, negativePath01: Path, worldZero: number, bucketSize: number, resolution: number, clipper: Clipper): void {
		let positivePoints0: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		let positivePoints01: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		let negativePoints0: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		let negativePoints01: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		if (count <= 1) {
			clipper = null;
		}
		worldZero = Math.max(viewportRect.top, Math.min(viewportRect.bottom, worldZero));
		if (bucketSize == 1) {
			let currentSegment: List$1<number> = new List$1<number>(Number_$type, 0);
			let currentFigures0: List$1<List$1<Point>> = positivePoints0;
			let currentFigures01: List$1<List$1<Point>> = positivePoints01;
			let currentType: number = 0;
			currentSegment.add(0);
			for (let i: number = 0, j: number = 1; j < count; i = j++) {
				let type: number = currentType;
				let valueDelegateResult: number = y0(j) - y0(i);
				if (colorByGradient && !isNaN_(valueDelegateResult)) {
					type = <number>Math.sign(valueDelegateResult);
				}
				if (type != 0 && type != currentType) {
					if (currentSegment.count > 0) {
						let figure0: List$1<Point> = new List$1<Point>(Point_$type, 1, IndicatorRenderer.flatten(currentSegment, x0, y0, resolution));
						let figure01: List$1<Point> = new List$1<Point>(Point_$type, 1, figure0);
						figure01.add(<Point>{ $type: Point_$type, x: figure0._inner[figure0.count - 1].x, y: worldZero });
						figure01.add(<Point>{ $type: Point_$type, x: figure0._inner[0].x, y: worldZero });
						currentFigures0.add(figure0);
						currentFigures01.add(figure01);
					}
					currentType = type;
					currentFigures0 = currentType == 1 ? negativePoints0 : positivePoints0;
					currentFigures01 = currentType == 1 ? negativePoints01 : positivePoints01;
					currentSegment.clear();
					currentSegment.add(i);
				}
				currentSegment.add(j);
			}
			let finalFigure0: List$1<Point> = new List$1<Point>(Point_$type, 1, IndicatorRenderer.flatten(currentSegment, x0, y0, resolution));
			let finalFigure01: List$1<Point> = new List$1<Point>(Point_$type, 1, finalFigure0);
			finalFigure01.add(<Point>{ $type: Point_$type, x: finalFigure0._inner[finalFigure0.count - 1].x, y: worldZero });
			finalFigure01.add(<Point>{ $type: Point_$type, x: finalFigure0._inner[0].x, y: worldZero });
			currentFigures0.add(finalFigure0);
			currentFigures01.add(finalFigure01);
		} else {
			let currentSegment1: List$1<number> = new List$1<number>(Number_$type, 0);
			let currentFigures02: List$1<List$1<Point>> = positivePoints0;
			let currentFigures011: List$1<List$1<Point>> = positivePoints01;
			let currentType1: number = 0;
			currentSegment1.add(0);
			for (let i1: number = 0, j1: number = 1; j1 < count; i1 = j1++) {
				let type1: number = currentType1;
				let valueDelegateResult1: number = y0(j1) - y0(i1);
				if (colorByGradient && !isNaN_(valueDelegateResult1)) {
					type1 = <number>Math.sign(valueDelegateResult1);
				}
				if (type1 != 0 && type1 != currentType1) {
					if (currentSegment1.count > 0) {
						let figure02: List$1<Point> = new List$1<Point>(Point_$type, 1, IndicatorRenderer.flatten(currentSegment1, x0, y0, resolution));
						let figure011: List$1<Point> = new List$1<Point>(Point_$type, 1, figure02);
						figure011.add(<Point>{ $type: Point_$type, x: figure02._inner[figure02.count - 1].x, y: worldZero });
						figure011.add(<Point>{ $type: Point_$type, x: figure02._inner[0].x, y: worldZero });
						currentFigures02.add(figure02);
						currentFigures011.add(figure011);
					}
					currentType1 = type1;
					currentFigures02 = currentType1 == 1 ? negativePoints0 : positivePoints0;
					currentFigures011 = currentType1 == 1 ? negativePoints01 : positivePoints01;
					currentSegment1.clear();
					currentSegment1.add(i1);
				}
				currentSegment1.add(j1);
			}
			let finalFigure02: List$1<Point> = new List$1<Point>(Point_$type, 1, IndicatorRenderer.flatten(currentSegment1, x0, y0, resolution));
			let finalFigure011: List$1<Point> = new List$1<Point>(Point_$type, 1, finalFigure02);
			finalFigure011.add(<Point>{ $type: Point_$type, x: finalFigure02._inner[finalFigure02.count - 1].x, y: worldZero });
			finalFigure011.add(<Point>{ $type: Point_$type, x: finalFigure02._inner[0].x, y: worldZero });
			currentFigures02.add(finalFigure02);
			currentFigures011.add(finalFigure011);
		}
		if (clipper != null) {
			positivePoints0 = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 1, IndicatorRenderer.enumerableSelect$2<List$1<Point>, List$1<Point>>((<any>List$1).$type.specialize(Point_$type), (<any>List$1).$type.specialize(Point_$type), positivePoints0, (points: List$1<Point>) => IndicatorRenderer.clipPoints(clipper, points, false)));
			positivePoints01 = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 1, IndicatorRenderer.enumerableSelect$2<List$1<Point>, List$1<Point>>((<any>List$1).$type.specialize(Point_$type), (<any>List$1).$type.specialize(Point_$type), positivePoints01, (points: List$1<Point>) => IndicatorRenderer.clipPoints(clipper, points, true)));
			negativePoints0 = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 1, IndicatorRenderer.enumerableSelect$2<List$1<Point>, List$1<Point>>((<any>List$1).$type.specialize(Point_$type), (<any>List$1).$type.specialize(Point_$type), negativePoints0, (points: List$1<Point>) => IndicatorRenderer.clipPoints(clipper, points, false)));
			negativePoints01 = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 1, IndicatorRenderer.enumerableSelect$2<List$1<Point>, List$1<Point>>((<any>List$1).$type.specialize(Point_$type), (<any>List$1).$type.specialize(Point_$type), negativePoints01, (points: List$1<Point>) => IndicatorRenderer.clipPoints(clipper, points, true)));
		}
		let positiveFigures0: PathFigureCollection = (<PathGeometry>positivePath0.data).figures;
		let positiveFigures01: PathFigureCollection = (<PathGeometry>positivePath01.data).figures;
		let negativeFigures0: PathFigureCollection = (<PathGeometry>negativePath0.data).figures;
		let negativeFigures01: PathFigureCollection = (<PathGeometry>negativePath01.data).figures;
		IndicatorRenderer.populate(positiveFigures0, positivePoints0);
		IndicatorRenderer.populate(positiveFigures01, positivePoints01);
		IndicatorRenderer.populate(negativeFigures0, negativePoints0);
		IndicatorRenderer.populate(negativeFigures01, negativePoints01);
	}
	static rasterizeColumns(count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, colorByGradient: boolean, viewportRect: Rect, worldZero: number, Columns: Pool$1<LineGeometry>, positiveColumns: Path, negativeColumns: Path): void {
		let positiveGeometryGroup: GeometryGroup = typeCast<GeometryGroup>((<any>GeometryGroup).$type, positiveColumns.data);
		let negativeGeometryGroup: GeometryGroup = typeCast<GeometryGroup>((<any>GeometryGroup).$type, negativeColumns.data);
		let originalY0: (arg1: number) => number = y0;
		let originalX0: (arg1: number) => number = x0;
		let clipToViewportX: (arg1: number) => number = (value: number) => Math.max(viewportRect.left, Math.min(viewportRect.right, value));
		let clipToViewportY: (arg1: number) => number = (value: number) => Math.max(viewportRect.top, Math.min(viewportRect.bottom, value));
		x0 = (ii: number) => clipToViewportX(originalX0(ii));
		y0 = (ii: number) => clipToViewportY(originalY0(ii));
		worldZero = clipToViewportY(worldZero);
		for (let i: number = 0; i < count; ++i) {
			let column: LineGeometry = Columns.item(i);
			column.startPoint = <Point>{ $type: Point_$type, x: x0(i), y: worldZero };
			column.endPoint = <Point>{ $type: Point_$type, x: x0(i), y: y0(i) };
			let pos: boolean = false;
			if (i > 0) {
				if (y0(i) <= y0(i - 1)) {
					pos = true;
				}
			} else {
				if (count > 1) {
					if (y0(i + 1) <= y0(i)) {
						pos = true;
					}
				}
			}
			if (pos) {
				positiveGeometryGroup.children.add(column);
			} else {
				negativeGeometryGroup.children.add(column);
			}
		}
		Columns.count = count;
	}
	private static *_flatten(segments: List$1<number>, x0: (arg1: number) => number, y0: (arg1: number) => number, resolution: number): IterableIterator<any> {
		let flattenedIndices: IList$1<number> = Flattener.flatten(new List$1<number>(Number_$type, 0), segments, x0, y0, 0, segments.count - 1, resolution);
		for (let j: number = 0; j < flattenedIndices.count; j++) {
			let k: number = flattenedIndices.item(j);
			yield <Point>{ $type: Point_$type, x: x0(k), y: y0(k) };
		}
	}
	private static flatten(segments: List$1<number>, x0: (arg1: number) => number, y0: (arg1: number) => number, resolution: number): IEnumerable$1<Point> {
		return toEnum(() => IndicatorRenderer._flatten(segments, x0, y0, resolution));
	}
	private static populate(target: PathFigureCollection, points: List$1<List$1<Point>>): void {
		for (let figurePoints of fromEnum<List$1<Point>>(points)) {
			if (figurePoints.count == 0) {
				continue;
			}
			let fig: PathFigure = ((() => {
				let $ret = new PathFigure();
				$ret.startPoint = figurePoints._inner[0];
				return $ret;
			})());
			for (let segmentPoint of fromEnum<Point>(figurePoints)) {
				fig._segments.add(((() => {
					let $ret = new LineSegment(1);
					$ret.point = segmentPoint;
					return $ret;
				})()));
			}
			target.add(fig);
		}
	}
	private static clipPoints(clipper: Clipper, points: List$1<Point>, isClosed: boolean): List$1<Point> {
		let isClosedStored: boolean = clipper.isClosed;
		clipper.isClosed = isClosed;
		let result: List$1<Point> = new List$1<Point>(Point_$type, 0);
		clipper.target = result;
		clipper.bulkAdd(points, false);
		clipper.target = null;
		clipper.isClosed = isClosedStored;
		return result;
	}
	private static *_enumerableSelect$2<TSource, TResult>($tSource: Type, $tResult: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => TResult): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			yield selector(item);
		}
	}
	private static enumerableSelect$2<TSource, TResult>($tSource: Type, $tResult: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => TResult): IEnumerable$1<TResult> {
		return toEnum(() => IndicatorRenderer._enumerableSelect$2<TSource, TResult>($tSource, $tResult, source, selector));
	}
}


