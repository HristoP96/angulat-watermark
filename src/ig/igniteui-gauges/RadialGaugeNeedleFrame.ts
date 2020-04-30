/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { MorphSegment } from "./MorphSegment";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { List$1 } from "igniteui-core/List$1";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class RadialGaugeNeedleFrame extends Base {
	static $t: Type = markType(RadialGaugeNeedleFrame, 'RadialGaugeNeedleFrame');
	constructor() {
		super();
		this.baseToFeature = new MorphSegment();
		this.baseFeature = new MorphSegment();
		this.featureToCap = new MorphSegment();
		this.cap = new MorphSegment();
		this.capToFeature = new MorphSegment();
		this.pointFeature = new MorphSegment();
		this.featureToPoint = new MorphSegment();
		this.point = new MorphSegment();
		this.pointToFeatureUnderside = new MorphSegment();
		this.pointFeatureUnderside = new MorphSegment();
		this.featureToCapUnderside = new MorphSegment();
		this.capUnderside = new MorphSegment();
		this.capToFeatureUnderside = new MorphSegment();
		this.baseFeatureUnderside = new MorphSegment();
		this.featureToBaseUnderside = new MorphSegment();
		this.base = new MorphSegment();
		this.cutout = new MorphSegment();
		this.cutoutUnderside = new MorphSegment();
		this.circleOverlay = new MorphSegment();
		this.circleOverlayUnderside = new MorphSegment();
		this.circleUnderlay = new MorphSegment();
		this.circleUnderlayUnderside = new MorphSegment();
		this.circleOverlayCutout = new MorphSegment();
		this.circleOverlayCutoutUnderside = new MorphSegment();
		this.circleUnderlayCutout = new MorphSegment();
		this.circleUnderlayCutoutUnderside = new MorphSegment();
	}
	private _needleStartExtent: number = 0;
	get needleStartExtent(): number {
		return this._needleStartExtent;
	}
	set needleStartExtent(value: number) {
		this._needleStartExtent = value;
	}
	private _needleEndExtent: number = 0;
	get needleEndExtent(): number {
		return this._needleEndExtent;
	}
	set needleEndExtent(value: number) {
		this._needleEndExtent = value;
	}
	private _needleWidth: number = 0;
	get needleWidth(): number {
		return this._needleWidth;
	}
	set needleWidth(value: number) {
		this._needleWidth = value;
	}
	private _needleAngle: number = 0;
	get needleAngle(): number {
		return this._needleAngle;
	}
	set needleAngle(value: number) {
		this._needleAngle = value;
	}
	private _needleBrush: Brush = null;
	get needleBrush(): Brush {
		return this._needleBrush;
	}
	set needleBrush(value: Brush) {
		this._needleBrush = value;
	}
	private _needleOutline: Brush = null;
	get needleOutline(): Brush {
		return this._needleOutline;
	}
	set needleOutline(value: Brush) {
		this._needleOutline = value;
	}
	private _capStrokeThickness: number = 0;
	get capStrokeThickness(): number {
		return this._capStrokeThickness;
	}
	set capStrokeThickness(value: number) {
		this._capStrokeThickness = value;
	}
	private _needleStrokeThickness: number = 0;
	get needleStrokeThickness(): number {
		return this._needleStrokeThickness;
	}
	set needleStrokeThickness(value: number) {
		this._needleStrokeThickness = value;
	}
	private _capOutline: Brush = null;
	get capOutline(): Brush {
		return this._capOutline;
	}
	set capOutline(value: Brush) {
		this._capOutline = value;
	}
	private _capBrush: Brush = null;
	get capBrush(): Brush {
		return this._capBrush;
	}
	set capBrush(value: Brush) {
		this._capBrush = value;
	}
	private _baseToFeature: MorphSegment = null;
	get baseToFeature(): MorphSegment {
		return this._baseToFeature;
	}
	set baseToFeature(value: MorphSegment) {
		this._baseToFeature = value;
	}
	private _baseFeature: MorphSegment = null;
	get baseFeature(): MorphSegment {
		return this._baseFeature;
	}
	set baseFeature(value: MorphSegment) {
		this._baseFeature = value;
	}
	private _featureToCap: MorphSegment = null;
	get featureToCap(): MorphSegment {
		return this._featureToCap;
	}
	set featureToCap(value: MorphSegment) {
		this._featureToCap = value;
	}
	private _cap: MorphSegment = null;
	get cap(): MorphSegment {
		return this._cap;
	}
	set cap(value: MorphSegment) {
		this._cap = value;
	}
	private _capToFeature: MorphSegment = null;
	get capToFeature(): MorphSegment {
		return this._capToFeature;
	}
	set capToFeature(value: MorphSegment) {
		this._capToFeature = value;
	}
	private _pointFeature: MorphSegment = null;
	get pointFeature(): MorphSegment {
		return this._pointFeature;
	}
	set pointFeature(value: MorphSegment) {
		this._pointFeature = value;
	}
	private _featureToPoint: MorphSegment = null;
	get featureToPoint(): MorphSegment {
		return this._featureToPoint;
	}
	set featureToPoint(value: MorphSegment) {
		this._featureToPoint = value;
	}
	private _point: MorphSegment = null;
	get point(): MorphSegment {
		return this._point;
	}
	set point(value: MorphSegment) {
		this._point = value;
	}
	private _pointToFeatureUnderside: MorphSegment = null;
	get pointToFeatureUnderside(): MorphSegment {
		return this._pointToFeatureUnderside;
	}
	set pointToFeatureUnderside(value: MorphSegment) {
		this._pointToFeatureUnderside = value;
	}
	private _pointFeatureUnderside: MorphSegment = null;
	get pointFeatureUnderside(): MorphSegment {
		return this._pointFeatureUnderside;
	}
	set pointFeatureUnderside(value: MorphSegment) {
		this._pointFeatureUnderside = value;
	}
	private _featureToCapUnderside: MorphSegment = null;
	get featureToCapUnderside(): MorphSegment {
		return this._featureToCapUnderside;
	}
	set featureToCapUnderside(value: MorphSegment) {
		this._featureToCapUnderside = value;
	}
	private _capUnderside: MorphSegment = null;
	get capUnderside(): MorphSegment {
		return this._capUnderside;
	}
	set capUnderside(value: MorphSegment) {
		this._capUnderside = value;
	}
	private _capToFeatureUnderside: MorphSegment = null;
	get capToFeatureUnderside(): MorphSegment {
		return this._capToFeatureUnderside;
	}
	set capToFeatureUnderside(value: MorphSegment) {
		this._capToFeatureUnderside = value;
	}
	private _baseFeatureUnderside: MorphSegment = null;
	get baseFeatureUnderside(): MorphSegment {
		return this._baseFeatureUnderside;
	}
	set baseFeatureUnderside(value: MorphSegment) {
		this._baseFeatureUnderside = value;
	}
	private _featureToBaseUnderside: MorphSegment = null;
	get featureToBaseUnderside(): MorphSegment {
		return this._featureToBaseUnderside;
	}
	set featureToBaseUnderside(value: MorphSegment) {
		this._featureToBaseUnderside = value;
	}
	private _base: MorphSegment = null;
	get base(): MorphSegment {
		return this._base;
	}
	set base(value: MorphSegment) {
		this._base = value;
	}
	private _cutout: MorphSegment = null;
	get cutout(): MorphSegment {
		return this._cutout;
	}
	set cutout(value: MorphSegment) {
		this._cutout = value;
	}
	private _cutoutUnderside: MorphSegment = null;
	get cutoutUnderside(): MorphSegment {
		return this._cutoutUnderside;
	}
	set cutoutUnderside(value: MorphSegment) {
		this._cutoutUnderside = value;
	}
	private _circleOverlay: MorphSegment = null;
	get circleOverlay(): MorphSegment {
		return this._circleOverlay;
	}
	set circleOverlay(value: MorphSegment) {
		this._circleOverlay = value;
	}
	private _circleOverlayUnderside: MorphSegment = null;
	get circleOverlayUnderside(): MorphSegment {
		return this._circleOverlayUnderside;
	}
	set circleOverlayUnderside(value: MorphSegment) {
		this._circleOverlayUnderside = value;
	}
	private _circleUnderlay: MorphSegment = null;
	get circleUnderlay(): MorphSegment {
		return this._circleUnderlay;
	}
	set circleUnderlay(value: MorphSegment) {
		this._circleUnderlay = value;
	}
	private _circleUnderlayUnderside: MorphSegment = null;
	get circleUnderlayUnderside(): MorphSegment {
		return this._circleUnderlayUnderside;
	}
	set circleUnderlayUnderside(value: MorphSegment) {
		this._circleUnderlayUnderside = value;
	}
	private _circleOverlayCutout: MorphSegment = null;
	get circleOverlayCutout(): MorphSegment {
		return this._circleOverlayCutout;
	}
	set circleOverlayCutout(value: MorphSegment) {
		this._circleOverlayCutout = value;
	}
	private _circleOverlayCutoutUnderside: MorphSegment = null;
	get circleOverlayCutoutUnderside(): MorphSegment {
		return this._circleOverlayCutoutUnderside;
	}
	set circleOverlayCutoutUnderside(value: MorphSegment) {
		this._circleOverlayCutoutUnderside = value;
	}
	private _circleUnderlayCutout: MorphSegment = null;
	get circleUnderlayCutout(): MorphSegment {
		return this._circleUnderlayCutout;
	}
	set circleUnderlayCutout(value: MorphSegment) {
		this._circleUnderlayCutout = value;
	}
	private _circleUnderlayCutoutUnderside: MorphSegment = null;
	get circleUnderlayCutoutUnderside(): MorphSegment {
		return this._circleUnderlayCutoutUnderside;
	}
	set circleUnderlayCutoutUnderside(value: MorphSegment) {
		this._circleUnderlayCutoutUnderside = value;
	}
	interpolate(p: number, previous: RadialGaugeNeedleFrame, next: RadialGaugeNeedleFrame): void {
		this.needleStartExtent = previous.needleStartExtent + (next.needleStartExtent - previous.needleStartExtent) * p;
		this.needleEndExtent = previous.needleEndExtent + (next.needleEndExtent - previous.needleEndExtent) * p;
		this.needleWidth = previous.needleWidth + (next.needleWidth - previous.needleWidth) * p;
		this.needleAngle = previous.needleAngle + (next.needleAngle - previous.needleAngle) * p;
		this.needleBrush = BrushUtil.getInterpolation(previous.needleBrush, p, next.needleBrush, InterpolationMode.RGB);
		this.needleOutline = BrushUtil.getInterpolation(previous.needleOutline, p, next.needleOutline, InterpolationMode.RGB);
		this.needleStrokeThickness = previous.needleStrokeThickness + (next.needleStrokeThickness - previous.needleStrokeThickness) * p;
		this.capStrokeThickness = previous.capStrokeThickness + (next.capStrokeThickness - previous.capStrokeThickness) * p;
		this.capBrush = BrushUtil.getInterpolation(previous.capBrush, p, next.capBrush, InterpolationMode.RGB);
		this.capOutline = BrushUtil.getInterpolation(previous.capOutline, p, next.capOutline, InterpolationMode.RGB);
		this.baseToFeature.interpolateSegment(p, previous.baseToFeature, next.baseToFeature);
		this.baseFeature.interpolateSegment(p, previous.baseFeature, next.baseFeature);
		this.featureToCap.interpolateSegment(p, previous.featureToCap, next.featureToCap);
		this.cap.interpolateSegment(p, previous.cap, next.cap);
		this.capToFeature.interpolateSegment(p, previous.capToFeature, next.capToFeature);
		this.pointFeature.interpolateSegment(p, previous.pointFeature, next.pointFeature);
		this.featureToPoint.interpolateSegment(p, previous.featureToPoint, next.featureToPoint);
		this.point.interpolateSegment(p, previous.point, next.point);
		this.pointToFeatureUnderside.interpolateSegment(p, previous.pointToFeatureUnderside, next.pointToFeatureUnderside);
		this.pointFeatureUnderside.interpolateSegment(p, previous.pointFeatureUnderside, next.pointFeatureUnderside);
		this.featureToCapUnderside.interpolateSegment(p, previous.featureToCapUnderside, next.featureToCapUnderside);
		this.capUnderside.interpolateSegment(p, previous.capUnderside, next.capUnderside);
		this.capToFeatureUnderside.interpolateSegment(p, previous.capToFeatureUnderside, next.capToFeatureUnderside);
		this.baseFeatureUnderside.interpolateSegment(p, previous.baseFeatureUnderside, next.baseFeatureUnderside);
		this.featureToBaseUnderside.interpolateSegment(p, previous.featureToBaseUnderside, next.featureToBaseUnderside);
		this.base.interpolateSegment(p, previous.base, next.base);
		this.cutout.interpolateSegment(p, previous.cutout, next.cutout);
		this.cutoutUnderside.interpolateSegment(p, previous.cutoutUnderside, next.cutoutUnderside);
		this.circleOverlay.interpolateSegment(p, previous.circleOverlay, next.circleOverlay);
		this.circleOverlayUnderside.interpolateSegment(p, previous.circleOverlayUnderside, next.circleOverlayUnderside);
		this.circleUnderlay.interpolateSegment(p, previous.circleUnderlay, next.circleUnderlay);
		this.circleUnderlayUnderside.interpolateSegment(p, previous.circleUnderlayUnderside, next.circleUnderlayUnderside);
		this.circleOverlayCutout.interpolateSegment(p, previous.circleOverlayCutout, next.circleOverlayCutout);
		this.circleOverlayCutoutUnderside.interpolateSegment(p, previous.circleOverlayCutoutUnderside, next.circleOverlayCutoutUnderside);
		this.circleUnderlayCutout.interpolateSegment(p, previous.circleUnderlayCutout, next.circleUnderlayCutout);
		this.circleUnderlayCutoutUnderside.interpolateSegment(p, previous.circleUnderlayCutoutUnderside, next.circleUnderlayCutoutUnderside);
	}
	getPathGeometry(radius: number, centerX: number, centerY: number): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let lastPoint: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		lastPoint = this.baseToFeature.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.baseFeature.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.featureToCap.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.cap.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.capToFeature.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.pointFeature.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.featureToPoint.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.point.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.pointToFeatureUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.pointFeatureUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.featureToCapUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.capUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.capToFeatureUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.baseFeatureUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.featureToBaseUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
		lastPoint = this.base.renderSegment(lastPoint, pf, radius, centerX, centerY);
		pf._isClosed = true;
		pg.figures.add(pf);
		let cutoutFigure: PathFigure = new PathFigure();
		if (this.cutout.segmentPoints.count > 0 || this.cutoutUnderside.segmentPoints.count > 0) {
			lastPoint = this.cutout.renderSegment(lastPoint, cutoutFigure, radius, centerX, centerY);
			lastPoint = this.cutoutUnderside.renderSegment(lastPoint, cutoutFigure, radius, centerX, centerY);
			cutoutFigure._isClosed = true;
			pg.figures.add(cutoutFigure);
		}
		return pg;
	}
	getUnderlayPathGeometry(radius: number, centerX: number, centerY: number): PathGeometry {
		let ret: PathGeometry = new PathGeometry();
		let lastPoint: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		let pf: PathFigure = new PathFigure();
		if (this.circleUnderlay.segmentPoints.count > 0 || this.circleUnderlayUnderside.segmentPoints.count > 0) {
			lastPoint = this.circleUnderlay.renderSegment(lastPoint, pf, radius, centerX, centerY);
			lastPoint = this.circleUnderlayUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
			pf._isClosed = true;
			ret.figures.add(pf);
		}
		let cutoutFigure: PathFigure = new PathFigure();
		if (this.circleUnderlayCutout.segmentPoints.count > 0 || this.circleUnderlayCutoutUnderside.segmentPoints.count > 0) {
			lastPoint = this.circleUnderlayCutout.renderSegment(lastPoint, cutoutFigure, radius, centerX, centerY);
			lastPoint = this.circleUnderlayCutoutUnderside.renderSegment(lastPoint, cutoutFigure, radius, centerX, centerY);
			cutoutFigure._isClosed = true;
			ret.figures.add(cutoutFigure);
		}
		return ret;
	}
	getOverlayPathGeometry(radius: number, centerX: number, centerY: number): PathGeometry {
		let ret: PathGeometry = new PathGeometry();
		let lastPoint: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		let pf: PathFigure = new PathFigure();
		if (this.circleOverlay.segmentPoints.count > 0 || this.circleOverlayUnderside.segmentPoints.count > 0) {
			lastPoint = this.circleOverlay.renderSegment(lastPoint, pf, radius, centerX, centerY);
			lastPoint = this.circleOverlayUnderside.renderSegment(lastPoint, pf, radius, centerX, centerY);
			pf._isClosed = true;
			ret.figures.add(pf);
		}
		let cutoutFigure: PathFigure = new PathFigure();
		if (this.circleOverlayCutout.segmentPoints.count > 0 || this.circleOverlayCutoutUnderside.segmentPoints.count > 0) {
			lastPoint = this.circleOverlayCutout.renderSegment(lastPoint, cutoutFigure, radius, centerX, centerY);
			lastPoint = this.circleOverlayCutoutUnderside.renderSegment(lastPoint, cutoutFigure, radius, centerX, centerY);
			cutoutFigure._isClosed = true;
			ret.figures.add(cutoutFigure);
		}
		return ret;
	}
}


