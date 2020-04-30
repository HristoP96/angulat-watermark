/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, Point, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, fromEnum, Number_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { PointCollection } from "igniteui-core/PointCollection";
import { Path } from "igniteui-core/Path";
import { List$1 } from "igniteui-core/List$1";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { Clipper } from "igniteui-core/Clipper";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathFigure } from "igniteui-core/PathFigure";
import { PathFigureCollection } from "igniteui-core/PathFigureCollection";
import { PathSegment } from "igniteui-core/PathSegment";
import { FastFlattener } from "igniteui-core/FastFlattener";
import { ArrayAccessHelper } from "igniteui-core/ArrayAccessHelper";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategoryLineRasterizer extends Base {
	static $t: Type = markType(CategoryLineRasterizer, 'CategoryLineRasterizer');
	private _isSortingAxis: boolean = false;
	get isSortingAxis(): boolean {
		return this._isSortingAxis;
	}
	set isSortingAxis(value: boolean) {
		this._isSortingAxis = value;
	}
	private _flattenedLinePoints: PointCollection = new PointCollection(0);
	get flattenedLinePoints(): PointCollection {
		return this._flattenedLinePoints;
	}
	set flattenedLinePoints(value: PointCollection) {
		this._flattenedLinePoints = value;
	}
	rasterizePolylinePaths(polylines0: Path, polygons01: Path, polylines1: Path, count: number, buckets: List$1<number[]>, useX0AsX1: boolean, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper, bucketSize: number, resolution: number): void {
		let polylineData0: PathGeometry = new PathGeometry();
		let polygonData01: PathGeometry = new PathGeometry();
		let polylineData1: PathGeometry = new PathGeometry();
		polylines0.data = polylineData0;
		polygons01.data = polygonData01;
		polylines1.data = polylineData1;
		polylineData0.figures = new PathFigureCollection();
		polygonData01.figures = new PathFigureCollection();
		polylineData1.figures = new PathFigureCollection();
		let polylineSegments0: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let polylineSegments1: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let polygonSegments0: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let polygonSegments1: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		if (unknownValuePlotting == UnknownValuePlotting.LinearInterpolate || unknownValuePlotting == UnknownValuePlotting.DontPlot) {
			let incrementalClipper: Clipper = unknownValuePlotting == UnknownValuePlotting.DontPlot ? clipper : null;
			let currentLineStartIndex: number = 0;
			for (let i: number = 0; i < count; i++) {
				if (isNaN_(buckets._inner[i][1])) {
					let pointsInCurrentLine: number = i - currentLineStartIndex;
					let addPoints: boolean = (unknownValuePlotting == UnknownValuePlotting.LinearInterpolate && pointsInCurrentLine > 0) || (unknownValuePlotting == UnknownValuePlotting.DontPlot && pointsInCurrentLine > 1);
					if (addPoints) {
						if (unknownValuePlotting == UnknownValuePlotting.DontPlot || polylineSegments0.count == 0) {
							let currentPolylineSegment0: PolyLineSegment = new PolyLineSegment();
							let currentPolylineSegment1: PolyLineSegment = new PolyLineSegment();
							let currentPolygonSegment0: PolyLineSegment = new PolyLineSegment();
							let currentPolygonSegment1: PolyLineSegment = new PolyLineSegment();
							polylineSegments0.add(currentPolylineSegment0);
							polylineSegments1.add(currentPolylineSegment1);
							polygonSegments0.add(currentPolygonSegment0);
							polygonSegments1.add(currentPolygonSegment1);
						}
						this.rasterizePolyline1(polylineSegments0._inner[polylineSegments0.count - 1]._points, polylineSegments1._inner[polylineSegments1.count - 1]._points, polygonSegments0._inner[polygonSegments0.count - 1]._points, polygonSegments1._inner[polygonSegments1.count - 1]._points, currentLineStartIndex, i - 1, buckets, useX0AsX1, incrementalClipper, bucketSize, resolution);
					}
					currentLineStartIndex = i + 1;
				}
			}
			if (unknownValuePlotting == UnknownValuePlotting.DontPlot || polylineSegments0.count == 0) {
				let lastPolylineSegment0: PolyLineSegment = new PolyLineSegment();
				let lastPolygonSegment0: PolyLineSegment = new PolyLineSegment();
				let lastPolygonSegment1: PolyLineSegment = new PolyLineSegment();
				let lastPolylineSegment1: PolyLineSegment = new PolyLineSegment();
				polylineSegments0.add(lastPolylineSegment0);
				polylineSegments1.add(lastPolylineSegment1);
				polygonSegments0.add(lastPolygonSegment0);
				polygonSegments1.add(lastPolygonSegment1);
			}
			this.rasterizePolyline1(polylineSegments0._inner[polylineSegments0.count - 1]._points, polylineSegments1._inner[polylineSegments1.count - 1]._points, polygonSegments0._inner[polygonSegments0.count - 1]._points, polygonSegments1._inner[polygonSegments1.count - 1]._points, currentLineStartIndex, count - 1, buckets, useX0AsX1, incrementalClipper, bucketSize, resolution);
			if (incrementalClipper == null && polylineSegments0.count == 1 && clipper != null) {
				this.clipSegment(polylineSegments0._inner[0], clipper);
				if (polylineSegments1.count == 1) {
					this.clipSegment(polylineSegments1._inner[0], clipper);
				}
			}
		} else {
			polylineSegments0.add(new PolyLineSegment());
			polylineSegments1.add(new PolyLineSegment());
			polygonSegments0.add(new PolyLineSegment());
			polygonSegments1.add(new PolyLineSegment());
			this.rasterizePolyline(polylineSegments0._inner[0]._points, polylineSegments1._inner[0]._points, polygonSegments0._inner[0]._points, polygonSegments1._inner[0]._points, count, buckets, useX0AsX1, clipper, bucketSize, resolution);
		}
		for (let current: number = 0; current < polylineSegments0.count; current++) {
			let polylineSegment0: PolyLineSegment = polylineSegments0._inner[current];
			let polylineSegment1: PolyLineSegment = polylineSegments1._inner[current];
			let polygonSegment0: PolyLineSegment = polygonSegments0._inner[current];
			let polygonSegment1: PolyLineSegment = polygonSegments1._inner[current];
			if (polylineSegment0._points.count > 0) {
				let polylineFigure0: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polylineSegment0._points._inner[0];
					return $ret;
				})());
				polylineFigure0._segments.add(polylineSegment0);
				polylineData0.figures.add(polylineFigure0);
			}
			if (polylineSegment1._points.count > 0) {
				let polylineFigure1: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polylineSegment1._points._inner[0];
					return $ret;
				})());
				polylineFigure1._segments.add(polylineSegment1);
				polylineData1.figures.add(polylineFigure1);
			}
			if (polygonSegment0._points.count > 0 && polygonSegment1._points.count > 0) {
				let polygonSegment01: PolyLineSegment = new PolyLineSegment();
				if (clipper != null) {
					let temp: boolean = clipper.isClosed;
					clipper.isClosed = true;
					clipper.target = polygonSegment01._points;
					clipper.bulkAdd(polygonSegment0._points, false);
					clipper.bulkAdd(polygonSegment1._points, true);
					clipper.target = null;
					clipper.isClosed = temp;
				} else {
					for (let p of fromEnum<Point>(polygonSegment0._points)) {
						polygonSegment01._points.add(p);
					}
					for (let i1 = polygonSegment1._points.count - 1; i1 >= 0; i1--) {
						polygonSegment01._points.add(polygonSegment1._points._inner[i1]);
					}
				}
				if (polygonSegment01._points.count > 0) {
					let polygonFigure01: PathFigure = ((() => {
						let $ret = new PathFigure();
						$ret.startPoint = polygonSegment01._points._inner[0];
						return $ret;
					})());
					polygonFigure01._segments.add(polygonSegment01);
					polygonData01.figures.add(polygonFigure01);
				}
			}
		}
	}
	private clipSegment(segment: PolyLineSegment, clipper: Clipper): void {
		let points: PointCollection = segment._points;
		clipper.target = segment._points = new PointCollection(0);
		clipper.bulkAdd(points, false);
		clipper.target = null;
	}
	rasterizePolyline(polylinePoints0: PointCollection, polylinePoints1: PointCollection, polygonPoints0: PointCollection, polygonPoints1: PointCollection, count: number, buckets: List$1<number[]>, useX0AsX1: boolean, clipper: Clipper, bucketSize: number, resolution: number): void {
		this.rasterizePolyline1(polylinePoints0, polylinePoints1, polygonPoints0, polygonPoints1, 0, count - 1, buckets, useX0AsX1, clipper, bucketSize, resolution);
	}
	private flattenPoints(points: PointCollection, startIndex: number, endIndex: number, buckets: List$1<number[]>, point0: boolean, useX0AsX1: boolean, resolution: number): void {
		let flattened = FastFlattener.chunkedFastFlatten(new List$1<number>(Number_$type, 0), buckets, point0, useX0AsX1, startIndex, endIndex, resolution);
		let flattenedArray = ArrayAccessHelper.asIntArray(flattened);
		let bucketsArray = ArrayAccessHelper.asBucketArray(buckets);
		let useFlattenedArray = flattenedArray != null;
		let useBucketsArray = bucketsArray != null;
		let j: number = 0;
		let flattenedCount: number = flattened.count;
		let bucket: number[];
		let x: number;
		let y: number;
		if (point0) {
			for (let i: number = 0; i < flattenedCount; i++) {
				j = useFlattenedArray ? flattenedArray[i] : flattened.item(i);
				bucket = useBucketsArray ? bucketsArray[j] : buckets._inner[j];
				x = bucket[0];
				y = bucket[1];
				let pointToAdd: Point = <Point>{ $type: Point_$type, x: x, y: y };
				points.add(pointToAdd);
			}
		} else if (useX0AsX1) {
			for (let i1: number = 0; i1 < flattenedCount; i1++) {
				j = useFlattenedArray ? flattenedArray[i1] : flattened.item(i1);
				bucket = useBucketsArray ? bucketsArray[j] : buckets._inner[j];
				x = bucket[0];
				y = bucket[2];
				let pointToAdd1: Point = <Point>{ $type: Point_$type, x: x, y: y };
				points.add(pointToAdd1);
			}
		} else {
			for (let i2: number = 0; i2 < flattenedCount; i2++) {
				j = useFlattenedArray ? flattenedArray[i2] : flattened.item(i2);
				bucket = useBucketsArray ? bucketsArray[j] : buckets._inner[j];
				x = bucket[2];
				y = bucket[3];
				let pointToAdd2: Point = <Point>{ $type: Point_$type, x: x, y: y };
				points.add(pointToAdd2);
			}
		}
	}
	private clipPoints(points: PointCollection, pointsToClip: PointCollection, clipper: Clipper, resolution: number): void {
		clipper.target = points;
		clipper.bulkAdd(pointsToClip, false);
		clipper.target = null;
	}
	private clipPoints1(points: PointCollection, pointsToClip: PointCollection, clipper: Clipper, resolution: number, closed: boolean): void {
		let isClosedStored: boolean = clipper.isClosed;
		clipper.isClosed = closed;
		this.clipPoints(points, pointsToClip, clipper, resolution);
		clipper.isClosed = isClosedStored;
	}
	rasterizePolyline1(polylinePoints0: PointCollection, polylinePoints1: PointCollection, polygonPoints0: PointCollection, polygonPoints1: PointCollection, startIndex: number, endIndex: number, buckets: List$1<number[]>, useX0AsX1: boolean, clipper: Clipper, bucketSize: number, resolution: number): void {
		if (endIndex > -1) {
			if (bucketSize == 1 && !this.isSortingAxis) {
				let polylinePoints0_new: PointCollection = new PointCollection(0);
				this.flattenPoints(polylinePoints0_new, startIndex, endIndex, buckets, true, useX0AsX1, resolution);
				if (clipper != null) {
					this.clipPoints(polylinePoints0, polylinePoints0_new, clipper, resolution);
				} else {
					this.populatePointCollectionFrom(polylinePoints0, polylinePoints0_new);
				}
			} else {
				let polylinePoints0_new1: PointCollection = new PointCollection(0);
				let polylinePoints1_new: PointCollection = new PointCollection(0);
				this.flattenPoints(polylinePoints0_new1, startIndex, endIndex, buckets, true, useX0AsX1, resolution);
				this.flattenPoints(polylinePoints1_new, startIndex, endIndex, buckets, false, useX0AsX1, resolution);
				this.populatePointCollectionFrom(polygonPoints0, polylinePoints0_new1);
				this.populatePointCollectionFrom(polygonPoints1, polylinePoints1_new);
				if (clipper != null) {
					this.clipPoints(polylinePoints0, polylinePoints0_new1, clipper, resolution);
					this.clipPoints(polylinePoints1, polylinePoints1_new, clipper, resolution);
				} else {
					this.populatePointCollectionFrom(polylinePoints0, polylinePoints0_new1);
					this.populatePointCollectionFrom(polylinePoints1, polylinePoints1_new);
				}
			}
		}
	}
	rasterizePolygonPaths(polygons0: Path, polylines0: Path, polygons01: Path, polylines1: Path, count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting): void {
		this.rasterizePolygonPaths1(polygons0, polylines0, polygons01, polylines1, count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting, null);
	}
	rasterizePolygonPaths1(polygons0: Path, polylines0: Path, polygons01: Path, polylines1: Path, count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper): void {
		let polygonData0: PathGeometry = new PathGeometry();
		let polylineData0: PathGeometry = new PathGeometry();
		let polygonData01: PathGeometry = new PathGeometry();
		let polylineData1: PathGeometry = new PathGeometry();
		polygons0.data = polygonData0;
		polylines0.data = polylineData0;
		polygons01.data = polygonData01;
		polylines1.data = polylineData1;
		polygonData0.figures = new PathFigureCollection();
		polylineData0.figures = new PathFigureCollection();
		polygonData01.figures = new PathFigureCollection();
		polylineData1.figures = new PathFigureCollection();
		let polygonSegments0: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let polylineSegments0: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let polygonSegments01: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let polylineSegments1: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		if (unknownValuePlotting == UnknownValuePlotting.LinearInterpolate || unknownValuePlotting == UnknownValuePlotting.DontPlot) {
			let incrementalClipper: Clipper = unknownValuePlotting == UnknownValuePlotting.DontPlot ? clipper : null;
			let currentLineStartIndex: number = 0;
			for (let i: number = 0; i < count; i++) {
				if (isNaN_(buckets._inner[i][1])) {
					let pointsInCurrentLine: number = i - currentLineStartIndex;
					let addPoints: boolean = (unknownValuePlotting == UnknownValuePlotting.LinearInterpolate && pointsInCurrentLine > 0) || (unknownValuePlotting == UnknownValuePlotting.DontPlot && pointsInCurrentLine > 1);
					if (addPoints) {
						if (unknownValuePlotting == UnknownValuePlotting.DontPlot || polylineSegments0.count == 0) {
							let currentPolygonSegment0: PolyLineSegment = new PolyLineSegment();
							let currentPolylineSegment0: PolyLineSegment = new PolyLineSegment();
							let currentPolygonSegment01: PolyLineSegment = new PolyLineSegment();
							let currentPolylineSegment1: PolyLineSegment = new PolyLineSegment();
							polygonSegments0.add(currentPolygonSegment0);
							polylineSegments0.add(currentPolylineSegment0);
							polygonSegments01.add(currentPolygonSegment01);
							polylineSegments1.add(currentPolylineSegment1);
						}
						let polygonSegmentPoints0: PointCollection;
						let polylineSegmentPoints0: PointCollection;
						let polygonSegmentPoints01: PointCollection;
						let polylineSegmentPoints1: PointCollection;
						if (clipper != null && unknownValuePlotting == UnknownValuePlotting.DontPlot) {
							polygonSegmentPoints0 = new PointCollection(0);
							polylineSegmentPoints0 = new PointCollection(0);
							polygonSegmentPoints01 = new PointCollection(0);
							polylineSegmentPoints1 = new PointCollection(0);
						} else {
							polygonSegmentPoints0 = polygonSegments0._inner[polygonSegments0.count - 1]._points;
							polylineSegmentPoints0 = polylineSegments0._inner[polylineSegments0.count - 1]._points;
							polygonSegmentPoints01 = polygonSegments01._inner[polygonSegments01.count - 1]._points;
							polylineSegmentPoints1 = polylineSegments1._inner[polylineSegments1.count - 1]._points;
						}
						this.rasterizePolygon(polygonSegmentPoints0, polylineSegmentPoints0, polygonSegmentPoints01, polylineSegmentPoints1, currentLineStartIndex, i - 1, buckets, useX0AsX1, null, bucketSize, resolution);
						if (unknownValuePlotting == UnknownValuePlotting.DontPlot) {
							terminatePolygon(polygonSegmentPoints0, polylineSegmentPoints0, polygonSegmentPoints01, polylineSegmentPoints1, false);
							if (clipper != null) {
								this.clipPoints1(polygonSegments0._inner[polygonSegments0.count - 1]._points, polygonSegmentPoints0, clipper, resolution, true);
								this.clipPoints1(polylineSegments0._inner[polylineSegments0.count - 1]._points, polylineSegmentPoints0, clipper, resolution, false);
								this.clipPoints1(polygonSegments01._inner[polygonSegments01.count - 1]._points, polygonSegmentPoints01, clipper, resolution, true);
								this.clipPoints1(polylineSegments1._inner[polylineSegments1.count - 1]._points, polylineSegmentPoints1, clipper, resolution, false);
							}
						}
					}
					currentLineStartIndex = i + 1;
				}
			}
			if (unknownValuePlotting == UnknownValuePlotting.DontPlot || polylineSegments0.count == 0) {
				let lastPolygonSegment0: PolyLineSegment = new PolyLineSegment();
				let lastPolylineSegment0: PolyLineSegment = new PolyLineSegment();
				let lastPolygonSegment01: PolyLineSegment = new PolyLineSegment();
				let lastPolylineSegment1: PolyLineSegment = new PolyLineSegment();
				polygonSegments0.add(lastPolygonSegment0);
				polylineSegments0.add(lastPolylineSegment0);
				polygonSegments01.add(lastPolygonSegment01);
				polylineSegments1.add(lastPolylineSegment1);
			}
			let lastPolygonSegmentPoints0: PointCollection;
			let lastPolylineSegmentPoints0: PointCollection;
			let lastPolygonSegmentPoints01: PointCollection;
			let lastPolylineSegmentPoints1: PointCollection;
			if (clipper != null) {
				lastPolygonSegmentPoints0 = new PointCollection(0);
				this.populatePointCollectionFrom(lastPolygonSegmentPoints0, polygonSegments0._inner[polygonSegments0.count - 1]._points);
				lastPolylineSegmentPoints0 = new PointCollection(0);
				this.populatePointCollectionFrom(lastPolylineSegmentPoints0, polylineSegments0._inner[polylineSegments0.count - 1]._points);
				lastPolygonSegmentPoints01 = new PointCollection(0);
				this.populatePointCollectionFrom(lastPolygonSegmentPoints01, polygonSegments01._inner[polygonSegments01.count - 1]._points);
				lastPolylineSegmentPoints1 = new PointCollection(0);
				this.populatePointCollectionFrom(lastPolylineSegmentPoints1, polylineSegments1._inner[polylineSegments1.count - 1]._points);
				polygonSegments0._inner[polygonSegments0.count - 1]._points.clear();
				polylineSegments0._inner[polylineSegments0.count - 1]._points.clear();
				polygonSegments01._inner[polygonSegments01.count - 1]._points.clear();
				polylineSegments1._inner[polylineSegments1.count - 1]._points.clear();
			} else {
				lastPolygonSegmentPoints0 = polygonSegments0._inner[polygonSegments0.count - 1]._points;
				lastPolylineSegmentPoints0 = polylineSegments0._inner[polylineSegments0.count - 1]._points;
				lastPolygonSegmentPoints01 = polygonSegments01._inner[polygonSegments01.count - 1]._points;
				lastPolylineSegmentPoints1 = polylineSegments1._inner[polylineSegments1.count - 1]._points;
			}
			this.rasterizePolygon(lastPolygonSegmentPoints0, lastPolylineSegmentPoints0, lastPolygonSegmentPoints01, lastPolylineSegmentPoints1, currentLineStartIndex, count - 1, buckets, useX0AsX1, null, bucketSize, resolution);
			terminatePolygon(lastPolygonSegmentPoints0, lastPolylineSegmentPoints0, lastPolygonSegmentPoints01, lastPolylineSegmentPoints1, true);
			if (clipper != null) {
				this.clipPoints1(polygonSegments0._inner[polygonSegments0.count - 1]._points, lastPolygonSegmentPoints0, clipper, resolution, true);
				this.clipPoints1(polylineSegments0._inner[polylineSegments0.count - 1]._points, lastPolylineSegmentPoints0, clipper, resolution, false);
				this.clipPoints1(polygonSegments01._inner[polygonSegments01.count - 1]._points, lastPolygonSegmentPoints01, clipper, resolution, true);
				this.clipPoints1(polylineSegments1._inner[polylineSegments1.count - 1]._points, lastPolylineSegmentPoints1, clipper, resolution, false);
			}
		} else {
			polygonSegments0.add(new PolyLineSegment());
			polylineSegments0.add(new PolyLineSegment());
			polygonSegments01.add(new PolyLineSegment());
			polylineSegments1.add(new PolyLineSegment());
			this.rasterizePolygon1(polygonSegments0._inner[0]._points, polylineSegments0._inner[0]._points, polygonSegments01._inner[0]._points, polylineSegments1._inner[0]._points, 0, count - 1, buckets, useX0AsX1, bucketSize, resolution);
			terminatePolygon(polygonSegments0._inner[0]._points, polylineSegments0._inner[0]._points, polygonSegments01._inner[0]._points, polylineSegments1._inner[0]._points, true);
		}
		for (let current: number = 0; current < polylineSegments0.count; current++) {
			let polygonSegment0: PolyLineSegment = polygonSegments0._inner[current];
			let polylineSegment0: PolyLineSegment = polylineSegments0._inner[current];
			let polygonSegment01: PolyLineSegment = polygonSegments01._inner[current];
			let polylineSegment1: PolyLineSegment = polylineSegments1._inner[current];
			if (polygonSegment0._points.count > 0) {
				let polygonFigure0: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polygonSegment0._points._inner[0];
					return $ret;
				})());
				polygonFigure0._segments.add(polygonSegment0);
				polygonData0.figures.add(polygonFigure0);
			}
			if (polylineSegment0._points.count > 0) {
				let polylineFigure0: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polylineSegment0._points._inner[0];
					return $ret;
				})());
				polylineFigure0._segments.add(polylineSegment0);
				polylineData0.figures.add(polylineFigure0);
			}
			if (polygonSegment01._points.count > 0) {
				let polygonFigure01: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polygonSegment01._points._inner[0];
					return $ret;
				})());
				polygonFigure01._segments.add(polygonSegment01);
				polygonData01.figures.add(polygonFigure01);
			}
			if (polylineSegment1._points.count > 0) {
				let polylineFigure1: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polylineSegment1._points._inner[0];
					return $ret;
				})());
				polylineFigure1._segments.add(polylineSegment1);
				polylineData1.figures.add(polylineFigure1);
			}
		}
	}
	rasterizePolygon1(polygonPoints0: PointCollection, polylinePoints0: PointCollection, polygonPoints01: PointCollection, polylinePoints1: PointCollection, startIndex: number, endIndex: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number): void {
		this.rasterizePolygon(polygonPoints0, polylinePoints0, polygonPoints01, polylinePoints1, startIndex, endIndex, buckets, useX0AsX1, null, bucketSize, resolution);
	}
	rasterizePolygon(polygonPoints0: PointCollection, polylinePoints0: PointCollection, polygonPoints01: PointCollection, polylinePoints1: PointCollection, startIndex: number, endIndex: number, buckets: List$1<number[]>, useX0AsX1: boolean, clipper: Clipper, bucketSize: number, resolution: number): void {
		this.flattenedLinePoints.clear();
		if (bucketSize == 1 && !this.isSortingAxis) {
			let indexes = FastFlattener.chunkedFastFlatten(new List$1<number>(Number_$type, 0), buckets, true, useX0AsX1, startIndex, endIndex, resolution);
			let indexCount = indexes.count;
			let index: number = 0;
			let bucket: number[];
			let x0: number;
			let y0: number;
			let flattenedPoints: PointCollection = new PointCollection(0);
			for (let i = 0; i < indexCount; i++) {
				index = indexes.item(i);
				bucket = buckets._inner[index];
				x0 = bucket[0];
				y0 = bucket[1];
				flattenedPoints.add(<Point>{ $type: Point_$type, x: x0, y: y0 });
			}
			if (clipper != null) {
				this.clipPoints1(polygonPoints0, flattenedPoints, clipper, resolution, true);
				this.clipPoints1(polylinePoints1, flattenedPoints, clipper, resolution, false);
				this.clipPoints1(this.flattenedLinePoints, flattenedPoints, clipper, resolution, false);
			} else {
				this.populatePointCollectionFrom(polygonPoints0, flattenedPoints);
				this.populatePointCollectionFrom(polylinePoints1, flattenedPoints);
				this.populatePointCollectionFrom(this.flattenedLinePoints, flattenedPoints);
			}
		} else {
			let indexes1 = FastFlattener.chunkedFastFlatten(new List$1<number>(Number_$type, 0), buckets, true, useX0AsX1, startIndex, endIndex, resolution);
			let indexes2 = FastFlattener.chunkedFastFlatten(new List$1<number>(Number_$type, 0), buckets, false, useX0AsX1, startIndex, endIndex, resolution);
			let indexCount1 = indexes1.count;
			let index2Count = indexes2.count;
			let index1: number = 0;
			let bucket1: number[];
			let x01: number;
			let y01: number;
			let flattenedPoints0: PointCollection = new PointCollection(0);
			let flattenedPoints01: PointCollection = new PointCollection(0);
			for (let i1 = 0; i1 < indexCount1; i1++) {
				index1 = indexes1.item(i1);
				bucket1 = buckets._inner[index1];
				x01 = bucket1[0];
				y01 = bucket1[1];
				flattenedPoints0.add(<Point>{ $type: Point_$type, x: x01, y: y01 });
				flattenedPoints01.add(<Point>{ $type: Point_$type, x: x01, y: y01 });
			}
			let flattenedPoints1: PointCollection = new PointCollection(0);
			let x1: number;
			let y1: number;
			for (let i2 = index2Count - 1; i2 >= 0; i2--) {
				index1 = indexes2.item(i2);
				bucket1 = buckets._inner[index1];
				if (useX0AsX1) {
					x1 = bucket1[0];
					y1 = bucket1[2];
				} else {
					x1 = bucket1[2];
					y1 = bucket1[3];
				}
				flattenedPoints1.add(<Point>{ $type: Point_$type, x: x1, y: y1 });
				flattenedPoints01.add(<Point>{ $type: Point_$type, x: x1, y: y1 });
			}
			if (clipper != null) {
				this.clipPoints1(polygonPoints0, flattenedPoints0, clipper, resolution, true);
				this.clipPoints1(polylinePoints0, flattenedPoints0, clipper, resolution, false);
				this.clipPoints1(polylinePoints1, flattenedPoints1, clipper, resolution, false);
				this.clipPoints1(polygonPoints01, flattenedPoints01, clipper, resolution, true);
			} else {
				this.populatePointCollectionFrom(polygonPoints0, flattenedPoints0);
				this.populatePointCollectionFrom(polylinePoints0, flattenedPoints0);
				this.populatePointCollectionFrom(polylinePoints1, flattenedPoints1);
				this.populatePointCollectionFrom(polygonPoints01, flattenedPoints01);
			}
		}
	}
	private populatePointCollectionFrom(target: PointCollection, source: PointCollection): void {
		let sourceCount = source.count;
		for (let i = 0; i < sourceCount; i++) {
			target.add(source._inner[i]);
		}
	}
}


