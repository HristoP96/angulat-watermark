/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterBase } from "./ScatterBase";
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Base, Type, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Point_$type, typeCast, Number_$type, enumGetBox, EnumUtil, markType, PointUtil } from "igniteui-core/type";
import { OwnedPoint } from "./OwnedPoint";
import { ScatterFrame } from "./ScatterFrame";
import { Control } from "igniteui-core/Control";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { SeriesView } from "./SeriesView";
import { ScatterLineSeriesView } from "./ScatterLineSeriesView";
import { MarkerSeries } from "./MarkerSeries";
import { Path } from "igniteui-core/Path";
import { Series } from "./Series";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { ScatterBaseView } from "./ScatterBaseView";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { Clipper } from "igniteui-core/Clipper";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { ScatterAxisInfoCache } from "./ScatterAxisInfoCache";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Axis } from "./Axis";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { RectUtil } from "igniteui-core/RectUtil";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathFigure } from "igniteui-core/PathFigure";
import { PathFigureCollection } from "igniteui-core/PathFigureCollection";
import { PathSegment } from "igniteui-core/PathSegment";
import { Flattener } from "igniteui-core/Flattener";
import { PointCollection } from "igniteui-core/PointCollection";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { boxArray$1, arrayShallowClone } from "igniteui-core/array";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ScatterLineSeries extends ScatterBase {
	static $t: Type = markType(ScatterLineSeries, 'ScatterLineSeries', (<any>ScatterBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>ScatterLineSeries).$type;
		this.previousFrame = new ScatterFrame();
		this.transitionFrame = new ScatterFrame();
		this.currentFrame = new ScatterFrame();
		let getMinValue: (arg1: OwnedPoint, arg2: ScatterFrame, arg3: ScatterFrame) => OwnedPoint = (maxPoint: OwnedPoint, minFrame: ScatterFrame, maxFrame: ScatterFrame) => {
			let index: number = this.fastItemsSource.indexOf(maxPoint.ownerItem);
			if (index == -1 || index == 0) {
				return maxPoint;
			}
			let prev: any = this.fastItemsSource.item(index - 1);
			let prevPoint: OwnedPoint;
			if (!((() => { let $ret = minFrame.cachedPoints.tryGetValue(prev, prevPoint); prevPoint = $ret.p1; return $ret.ret; })())) {
				return maxPoint;
			}
			return prevPoint;
		};
		this.previousFrame.getNewMinValue = getMinValue;
		this.transitionFrame.getNewMinValue = getMinValue;
		this.currentFrame.getNewMinValue = getMinValue;
	}
	protected createView(): SeriesView {
		return new ScatterLineSeriesView(this);
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		if (this.testScatterStrokeOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	private testScatterStrokeOver(position: Point, isFinger: boolean): boolean {
		let scatterLineView: ScatterLineSeriesView = <ScatterLineSeriesView>this.view;
		let path = scatterLineView.polyline;
		return this.testNearStroke(position, isFinger, <PathGeometry>path.data);
	}
	prepareFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		super.prepareFrame(frame, view);
		frame.points.clear();
		frame.linePoints.clear();
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let measure: number = this.resolution * this.resolution;
		let count: number = 0;
		if (this.xColumn != null) {
			count = this.xColumn.count;
		}
		if (this.yColumn != null) {
			count = Math.min(this.yColumn.count, count);
		}
		let px: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.xAxisIsInverted, effectiveViewportRect);
		let py: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.yAxisIsInverted, effectiveViewportRect);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		let xValues: number[] = <number[]>arrayShallowClone(this.xColumn.asArray());
		let yValues: number[] = <number[]>arrayShallowClone(this.yColumn.asArray());
		this.xAxis.getScaledValueList(boxArray$1<number>(xValues), 0, xValues.length, px);
		this.yAxis.getScaledValueList(boxArray$1<number>(yValues), 0, yValues.length, py);
		let top: number = viewportRect.top - 10;
		let bottom: number = viewportRect.bottom + 10;
		let left: number = viewportRect.left - 10;
		let right: number = viewportRect.right + 10;
		let clipper: Clipper = ((() => {
			let $ret = new Clipper(1, left, bottom, right, top, false);
			$ret.target = frame.points;
			return $ret;
		})());
		for (let i: number = 0; i < count; ) {
			let j: number = i;
			++i;
			if (count > this.maximumMarkers) {
				while (i < count) {
					let x: number = xValues[i] - xValues[j];
					let y: number = yValues[i] - yValues[j];
					let d = x * x + y * y;
					if (d >= measure) {
						break;
					}
					++i;
				}
				clipper.add(this.centroid(xValues, yValues, j, i - 1));
			} else {
				let newPoint: OwnedPoint = new OwnedPoint();
				newPoint.point = <Point>{ $type: Point_$type, x: xValues[j], y: yValues[j] };
				newPoint.ownerItem = this.fastItemsSource.item(j);
				if (!frame.linePoints.containsKey(newPoint.ownerItem)) {
					frame.linePoints.addItem(newPoint.ownerItem, newPoint);
				}
			}
		}
		if (count > this.maximumMarkers) {
			clipper.target = null;
		}
	}
	private centroid(X: number[], Y: number[], a: number, b: number): Point {
		if (a == b) {
			return <Point>{ $type: Point_$type, x: X[a], y: Y[a] };
		}
		let cx: number = 0;
		let cy: number = 0;
		let weight: number = <number>(b - a + 1);
		for (let i: number = a; i <= b; ++i) {
			cx += X[i];
			cy += Y[i];
		}
		return <Point>{ $type: Point_$type, x: cx / weight, y: cy / weight };
	}
	renderFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		view.clearRendering(false);
		super.renderFrame(frame, view);
		let clipRect: Rect = new Rect(0, view.viewport.left, view.viewport.top, view.viewport.width, view.viewport.height);
		clipRect = RectUtil.inflateBy(clipRect, this.thickness, this.thickness);
		this.prepLinePoints1(frame, new Clipper(0, clipRect, false));
		let scatterLineView: ScatterLineSeriesView = typeCast<ScatterLineSeriesView>((<any>ScatterLineSeriesView).$type, view);
		this.polylineSegments1(scatterLineView.polyline, frame.points.count, (j: number) => frame.points._inner[j].x, (j: number) => frame.points._inner[j].y, this.unknownValuePlotting, this.resolution);
	}
	private polylineSegments1(polylines: Path, count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, unknownValuePlotting: UnknownValuePlotting, resolution: number): void {
		let polylineData: PathGeometry = new PathGeometry();
		polylines.data = polylineData;
		polylineData.figures = new PathFigureCollection();
		let polylineSegments: List$1<PolyLineSegment> = new List$1<PolyLineSegment>((<any>PolyLineSegment).$type, 0);
		let currentLineStartIndex: number = 0;
		for (let i: number = 0; i < count; i++) {
			if (isNaN_(x0(i)) || isNaN_(y0(i))) {
				let pointsInCurrentLine: number = i - currentLineStartIndex;
				if (pointsInCurrentLine > 0) {
					if (unknownValuePlotting == UnknownValuePlotting.DontPlot || polylineSegments.count == 0) {
						let currentPolylineSegment: PolyLineSegment = new PolyLineSegment();
						polylineSegments.add(currentPolylineSegment);
					}
					this.polylineSegments(polylineSegments._inner[polylineSegments.count - 1]._points, currentLineStartIndex, i - 1, x0, y0, resolution);
				}
				currentLineStartIndex = i + 1;
			}
		}
		if (unknownValuePlotting == UnknownValuePlotting.DontPlot || polylineSegments.count == 0) {
			let lastPolylineSegment: PolyLineSegment = new PolyLineSegment();
			polylineSegments.add(lastPolylineSegment);
		}
		this.polylineSegments(polylineSegments._inner[polylineSegments.count - 1]._points, currentLineStartIndex, count - 1, x0, y0, resolution);
		for (let current: number = 0; current < polylineSegments.count; current++) {
			let polylineSegment: PolyLineSegment = polylineSegments._inner[current];
			if (polylineSegment._points.count > 0) {
				let polylineFigure: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = polylineSegment._points._inner[0];
					return $ret;
				})());
				polylineFigure._segments.add(polylineSegment);
				polylineData.figures.add(polylineFigure);
			}
		}
	}
	private static readonly fLATTENER_CHUNKING: number = 512;
	private flattenHelper(result: IList$1<number>, X: (arg1: number) => number, Y: (arg1: number) => number, b: number, e: number, E: number): IList$1<number> {
		let indices: List$1<number> = new List$1<number>(Number_$type, 0);
		let start: number = b;
		let end: number = e;
		let toFlatten: number = end - start + 1;
		while (toFlatten > 0) {
			if (toFlatten <= ScatterLineSeries.fLATTENER_CHUNKING) {
				Flattener.flatten2(indices, X, Y, start, end, E);
				start = end + 1;
			} else {
				let currentEnd: number = start + ScatterLineSeries.fLATTENER_CHUNKING - 1;
				Flattener.flatten2(indices, X, Y, start, currentEnd, E);
				start = currentEnd + 1;
			}
			toFlatten = end - start + 1;
		}
		return indices;
	}
	private polylineSegments(polylinePoints: PointCollection, startIndex: number, endIndex: number, x0: (arg1: number) => number, y0: (arg1: number) => number, resolution: number): void {
		if (endIndex > -1) {
			let res: number = this.resolution;
			let indices: IList$1<number> = this.flattenHelper(new List$1<number>(Number_$type, 0), x0, y0, startIndex, endIndex, res);
			let index: number;
			for (let i: number = 0; i < indices.count; i++) {
				index = indices.item(i);
				polylinePoints.add(<Point>{ $type: Point_$type, x: x0(index), y: y0(index) });
			}
		}
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(ScatterLineSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>ScatterLineSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterLineSeries>sender).raisePropertyChanged(ScatterLineSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(ScatterLineSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(ScatterLineSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case ScatterLineSeries.unknownValuePlottingPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
}


