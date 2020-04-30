/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterBase } from "./ScatterBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Type, Base, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Number_$type, Point_$type, typeCast, markType, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { ScatterFrame } from "./ScatterFrame";
import { SeriesView } from "./SeriesView";
import { ScatterSplineSeriesView } from "./ScatterSplineSeriesView";
import { Series } from "./Series";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { ScatterBaseView } from "./ScatterBaseView";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { Rect } from "igniteui-core/Rect";
import { Clipper } from "igniteui-core/Clipper";
import { OwnedPoint } from "./OwnedPoint";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { ScatterAxisInfoCache } from "./ScatterAxisInfoCache";
import { ScalerParams } from "./ScalerParams";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { Axis } from "./Axis";
import { Path } from "igniteui-core/Path";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Numeric } from "igniteui-core/Numeric";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class ScatterSplineSeries extends ScatterBase {
	static $t: Type = markType(ScatterSplineSeries, 'ScatterSplineSeries', (<any>ScatterBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>ScatterSplineSeries).$type;
		this.previousFrame = new ScatterFrame();
		this.transitionFrame = new ScatterFrame();
		this.currentFrame = new ScatterFrame();
	}
	protected createView(): SeriesView {
		return new ScatterSplineSeriesView(this);
	}
	get stiffness(): number {
		return <number>this.getValue(ScatterSplineSeries.stiffnessProperty);
	}
	set stiffness(value: number) {
		this.setValue(ScatterSplineSeries.stiffnessProperty, value);
	}
	static readonly stiffnessPropertyName: string = "Stiffness";
	static readonly stiffnessProperty: DependencyProperty = DependencyProperty.register(ScatterSplineSeries.stiffnessPropertyName, Number_$type, (<any>ScatterSplineSeries).$type, new PropertyMetadata(2, 0.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterSplineSeries>sender).raisePropertyChanged(ScatterSplineSeries.stiffnessPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case ScatterSplineSeries.stiffnessPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.ColorEncoded;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	prepareFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		super.prepareFrame(frame, view);
		frame.points.clear();
		frame.linePoints.clear();
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let measure: number = this.resolution * this.resolution;
		let count: number = Math.min(this.xColumn != null ? this.xColumn.count : 0, this.yColumn != null ? this.yColumn.count : 0);
		let px: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.xAxisIsInverted, effectiveViewportRect);
		let py: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.yAxisIsInverted, effectiveViewportRect);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		let X: (arg1: number) => number = (i: number) => this.axisInfoCache.xAxis.getScaledValue(this.xColumn.item(i), px);
		let Y: (arg1: number) => number = (i: number) => this.axisInfoCache.yAxis.getScaledValue(this.yColumn.item(i), py);
		let clipper: Clipper = ((() => {
			let $ret = new Clipper(0, viewportRect, false);
			$ret.target = frame.points;
			return $ret;
		})());
		for (let i: number = 0; i < count; ) {
			let j: number = i;
			++i;
			while (i < count && this.measure(X, Y, j, i) < measure) {
				++i;
			}
			if (count > this.maximumMarkers) {
				clipper.add(this.centroid(X, Y, j, i - 1));
			} else {
				let newPoint: OwnedPoint = new OwnedPoint();
				newPoint.point = <Point>{ $type: Point_$type, x: X(j), y: Y(j) };
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
	private centroid(X: (arg1: number) => number, Y: (arg1: number) => number, a: number, b: number): Point {
		if (a == b) {
			return <Point>{ $type: Point_$type, x: X(a), y: Y(a) };
		}
		let cx: number = 0;
		let cy: number = 0;
		let weight: number = <number>(b - a + 1);
		for (let i: number = a; i <= b; ++i) {
			cx += X(i);
			cy += Y(i);
		}
		return <Point>{ $type: Point_$type, x: cx / weight, y: cy / weight };
	}
	private measure(X: (arg1: number) => number, Y: (arg1: number) => number, a: number, b: number): number {
		let x: number = X(b) - X(a);
		let y: number = Y(b) - Y(a);
		return x * x + y * y;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let scatterSplineView: ScatterSplineSeriesView = typeCast<ScatterSplineSeriesView>((<any>ScatterSplineSeriesView).$type, view);
		scatterSplineView.clearRendering(false);
	}
	renderFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		this.clearRendering(false, view);
		super.renderFrame(frame, view);
		this.prepLinePoints(frame);
		let scatterSplineView: ScatterSplineSeriesView = typeCast<ScatterSplineSeriesView>((<any>ScatterSplineSeriesView).$type, view);
		scatterSplineView.polyline.data = new PathGeometry();
		(<PathGeometry>scatterSplineView.polyline.data).figures = Numeric.spline2D1(frame.points.count, (i: number) => frame.points._inner[i].x, (i: number) => frame.points._inner[i].y, this.stiffness);
	}
}


