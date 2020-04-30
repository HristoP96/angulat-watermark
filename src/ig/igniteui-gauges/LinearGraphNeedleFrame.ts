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
export class LinearGraphNeedleFrame extends Base {
	static $t: Type = markType(LinearGraphNeedleFrame, 'LinearGraphNeedleFrame');
	constructor() {
		super();
		this.innerBase = new MorphSegment();
		this.innerPoint = new MorphSegment();
		this.feature = new MorphSegment();
		this.outerPoint = new MorphSegment();
		this.outerBase = new MorphSegment();
		this.outerPointUnderside = new MorphSegment();
		this.featureUnderside = new MorphSegment();
		this.innerPointUnderside = new MorphSegment();
		this.cutout = new MorphSegment();
		this.cutoutUnderside = new MorphSegment();
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
	private _needleValue: number = 0;
	get needleValue(): number {
		return this._needleValue;
	}
	set needleValue(value: number) {
		this._needleValue = value;
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
	private _needleStrokeThickness: number = 0;
	get needleStrokeThickness(): number {
		return this._needleStrokeThickness;
	}
	set needleStrokeThickness(value: number) {
		this._needleStrokeThickness = value;
	}
	private _innerBase: MorphSegment = null;
	get innerBase(): MorphSegment {
		return this._innerBase;
	}
	set innerBase(value: MorphSegment) {
		this._innerBase = value;
	}
	private _innerPoint: MorphSegment = null;
	get innerPoint(): MorphSegment {
		return this._innerPoint;
	}
	set innerPoint(value: MorphSegment) {
		this._innerPoint = value;
	}
	private _feature: MorphSegment = null;
	get feature(): MorphSegment {
		return this._feature;
	}
	set feature(value: MorphSegment) {
		this._feature = value;
	}
	private _outerPoint: MorphSegment = null;
	get outerPoint(): MorphSegment {
		return this._outerPoint;
	}
	set outerPoint(value: MorphSegment) {
		this._outerPoint = value;
	}
	private _outerBase: MorphSegment = null;
	get outerBase(): MorphSegment {
		return this._outerBase;
	}
	set outerBase(value: MorphSegment) {
		this._outerBase = value;
	}
	private _outerPointUnderside: MorphSegment = null;
	get outerPointUnderside(): MorphSegment {
		return this._outerPointUnderside;
	}
	set outerPointUnderside(value: MorphSegment) {
		this._outerPointUnderside = value;
	}
	private _featureUnderside: MorphSegment = null;
	get featureUnderside(): MorphSegment {
		return this._featureUnderside;
	}
	set featureUnderside(value: MorphSegment) {
		this._featureUnderside = value;
	}
	private _innerPointUnderside: MorphSegment = null;
	get innerPointUnderside(): MorphSegment {
		return this._innerPointUnderside;
	}
	set innerPointUnderside(value: MorphSegment) {
		this._innerPointUnderside = value;
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
	static interpolate(p: number, q: number, min: LinearGraphNeedleFrame, max: LinearGraphNeedleFrame): LinearGraphNeedleFrame {
		let ret: LinearGraphNeedleFrame = new LinearGraphNeedleFrame();
		ret.needleStartExtent = min.needleStartExtent + (max.needleStartExtent - min.needleStartExtent) * p;
		ret.needleEndExtent = min.needleEndExtent + (max.needleEndExtent - min.needleEndExtent) * p;
		ret.needleWidth = min.needleWidth + (max.needleWidth - min.needleWidth) * p;
		ret.needleAngle = min.needleAngle + (max.needleAngle - min.needleAngle) * p;
		ret.needleValue = min.needleValue + (max.needleValue - min.needleValue) * p;
		ret.needleBrush = BrushUtil.getInterpolation(min.needleBrush, p, max.needleBrush, InterpolationMode.RGB);
		ret.needleOutline = BrushUtil.getInterpolation(min.needleOutline, p, max.needleOutline, InterpolationMode.RGB);
		ret.needleStrokeThickness = min.needleStrokeThickness + (max.needleStrokeThickness - min.needleStrokeThickness) * p;
		ret.innerBase.interpolateSegment(p, min.innerBase, max.innerBase);
		ret.innerPoint.interpolateSegment(p, min.innerPoint, max.innerPoint);
		ret.feature.interpolateSegment(p, min.feature, max.feature);
		ret.outerPoint.interpolateSegment(p, min.outerPoint, max.outerPoint);
		ret.outerBase.interpolateSegment(p, min.outerBase, max.outerBase);
		ret.outerPointUnderside.interpolateSegment(p, min.outerPointUnderside, max.outerPointUnderside);
		ret.featureUnderside.interpolateSegment(p, min.featureUnderside, max.featureUnderside);
		ret.innerPointUnderside.interpolateSegment(p, min.innerPointUnderside, max.innerPointUnderside);
		ret.cutout.interpolateSegment(p, min.cutout, max.cutout);
		ret.cutoutUnderside.interpolateSegment(p, min.cutoutUnderside, max.cutoutUnderside);
		return ret;
	}
	getPathGeometry(width: number, centerX: number, centerY: number): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let lastPoint: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		lastPoint = this.outerBase.renderSegment(lastPoint, pf, width, centerX, centerY);
		lastPoint = this.outerPoint.renderSegment(lastPoint, pf, width, centerX, centerY);
		lastPoint = this.feature.renderSegment(lastPoint, pf, width, centerX, centerY);
		lastPoint = this.innerPoint.renderSegment(lastPoint, pf, width, centerX, centerY);
		lastPoint = this.innerBase.renderSegment(lastPoint, pf, width, centerX, centerY);
		lastPoint = this.innerPointUnderside.renderSegment(lastPoint, pf, width, centerX, centerY);
		lastPoint = this.featureUnderside.renderSegment(lastPoint, pf, width, centerX, centerY);
		pf._isClosed = true;
		pg.figures.add(pf);
		let cutoutFigure: PathFigure = new PathFigure();
		if (this.cutout.segmentPoints.count > 0 || this.cutoutUnderside.segmentPoints.count > 0) {
			lastPoint = this.cutout.renderSegment(lastPoint, cutoutFigure, width, centerX, centerY);
			lastPoint = this.cutoutUnderside.renderSegment(lastPoint, cutoutFigure, width, centerX, centerY);
			cutoutFigure._isClosed = true;
			pg.figures.add(cutoutFigure);
		}
		return pg;
	}
}


