/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, typeCast, Type, markType, PointUtil } from "./type";
import { IRenderer, IRenderer_$type } from "./IRenderer";
import { LinearGradientBrush } from "./LinearGradientBrush";
import { GradientStop } from "./GradientStop";
import { Rectangle } from "./Rectangle";
import { Brush } from "./Brush";
import { FrameworkElement } from "./FrameworkElement";
import { Shape } from "./Shape";
import { Path } from "./Path";
import { PenLineJoin } from "./PenLineJoin";
import { Geometry } from "./Geometry";
import { GeometryType } from "./GeometryType";
import { GeometryGroup } from "./GeometryGroup";
import { List$1 } from "./List$1";
import { PathGeometry } from "./PathGeometry";
import { LineGeometry } from "./LineGeometry";
import { RectangleGeometry } from "./RectangleGeometry";
import { EllipseGeometry } from "./EllipseGeometry";
import { ArcSegment } from "./ArcSegment";
import { Size } from "./Size";
import { PathFigureCollection } from "./PathFigureCollection";
import { PathFigure } from "./PathFigure";
import { PathSegmentCollection } from "./PathSegmentCollection";
import { PathSegment } from "./PathSegment";
import { PathSegmentType } from "./PathSegmentType";
import { LineSegment } from "./LineSegment";
import { PolyLineSegment } from "./PolyLineSegment";
import { BezierSegment } from "./BezierSegment";
import { PolyBezierSegment } from "./PolyBezierSegment";
import { PointCollection } from "./PointCollection";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { Rect } from "./Rect";
import { TextBlock } from "./TextBlock";
import { Polygon } from "./Polygon";
import { Polyline } from "./Polyline";
import { DataTemplateRenderInfo } from "./DataTemplateRenderInfo";
import { ContentControl } from "./ContentControl";
import { DataTemplate } from "./DataTemplate";
import { Transform } from "./Transform";
import { TransformGroup } from "./TransformGroup";
import { TranslateTransform } from "./TranslateTransform";
import { RotateTransform } from "./RotateTransform";
import { ScaleTransform } from "./ScaleTransform";
import { Line } from "./Line";
import { FontInfo } from "./FontInfo";
import { Style } from "./Style";
import { Visibility } from "./Visibility";
import { SweepDirection } from "./SweepDirection";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class CanvasViewRenderer extends Base implements IRenderer {
	static $t: Type = markType(CanvasViewRenderer, 'CanvasViewRenderer', (<any>Base).$type, [IRenderer_$type]);
	private _context: CanvasRenderingContext2D = null;
	getUnderlyingContext(): any {
		return this._context;
	}
	get data(): any {
		return this._context;
	}
	set data(value: any) {
		this._context = <CanvasRenderingContext2D>value;
	}
	createGradient1(brush: LinearGradientBrush, minX: number, minY: number, maxX: number, maxY: number, lineWidth: number, isStroke: boolean): CanvasGradient {
		return CanvasViewRenderer.createGradient(this._context, brush, minX, minY, maxX, maxY, lineWidth, isStroke);
	}
	static createGradient(context: CanvasRenderingContext2D, brush: LinearGradientBrush, minX: number, minY: number, maxX: number, maxY: number, lineWidth: number, isStroke: boolean): CanvasGradient {
		let gradient: CanvasGradient;
		if (brush.useCustomDirection) {
			let _minX: number, _minY: number, _maxX: number, _maxY: number, ratio: number;
			ratio = maxX - minX;
			_minX = minX + brush.startX * ratio;
			_maxX = minX + brush.endX * ratio;
			ratio = maxY - minY;
			_minY = minY + brush.startY * ratio;
			_maxY = minY + brush.endY * ratio;
			if (isStroke) {
				let halfWidth = lineWidth / 2;
				_minX -= halfWidth;
				_maxX += halfWidth;
				_minY -= halfWidth;
				_maxY += halfWidth;
			}
			gradient = context.createLinearGradient(_minX, _minY, _maxX, _maxY);
		} else {
			if (isStroke) {
				let halfWidth1 = lineWidth / 2;
				minX -= halfWidth1;
				maxX += halfWidth1;
				minY -= halfWidth1;
				maxY += halfWidth1;
			}
			gradient = context.createLinearGradient(minX, minY, minX, maxY);
		}
		for (let i = 0; i < brush.gradientStops.length; i++) {
			let stop = brush.gradientStops[i];
			gradient.addColorStop(stop.offset, stop._fill);
		}
		return gradient;
	}
	renderRectangle(rectangle: Rectangle): void {
		if (rectangle._visibility != Visibility.Visible) {
			return;
		}
		let left: number = <number>rectangle.canvasLeft;
		let top: number = <number>rectangle.canvasTop;
		let width: number = <number>rectangle.width;
		let height: number = <number>rectangle.height;
		let radiusX: number = <number>rectangle.radiusX;
		let radiusY: number = <number>rectangle.radiusY;
		this._context.beginPath();
		this._context.globalAlpha = <number>(rectangle._opacity * this._globalAlpha);
		if (radiusX > 0 || radiusY > 0) {
			if (radiusX > width / 2) {
				radiusX = <number>(width / 2);
			}
			if (radiusY > height / 2) {
				radiusY = <number>(height / 2);
			}
			let radius: number = Math.min(radiusX, radiusY);
			this._context.beginPath();
			this._context.moveTo(left + radius, top);
			this._context.lineTo(left + width - radius, top);
			this._context.arc(left + width - radius, top + radius, radius, <number>(3 / 2 * Math.PI), 0, false);
			this._context.lineTo(left + width, top + height - radius);
			this._context.arc(left + width - radius, top + height - radius, radius, 0, <number>(Math.PI / 2), false);
			this._context.lineTo(left + radius, top + height);
			this._context.arc(left + radius, top + height - radius, radius, <number>(Math.PI / 2), <number>Math.PI, false);
			this._context.lineTo(left, top + radius);
			this._context.arc(left + radius, top + radius, radius, <number>Math.PI, <number>(3 / 2 * Math.PI), false);
			this._context.closePath();
		} else {
			this._context.rect(left, top, width, height);
		}
		let fill: Brush = rectangle._fill;
		let stroke: Brush = rectangle._stroke;
		if (fill != null) {
			if (fill.isGradient && top == top && left == left) {
				this._context.fillStyle = this.createGradient1(<LinearGradientBrush>fill, left, top, left + width, top + height, <number>rectangle.strokeThickness, false);
			} else {
				this._context.fillStyle = fill._fill;
			}
			this._context.fill();
		}
		if (stroke != null) {
			if (stroke.isGradient && top == top && left == left) {
				this._context.strokeStyle = this.createGradient1(<LinearGradientBrush>stroke, left, top, left + width, top + height, <number>rectangle.strokeThickness, true);
			} else {
				this._context.strokeStyle = stroke._fill;
			}
			this._context.lineWidth = <number>rectangle.strokeThickness;
			this._context.stroke();
		}
		this._context.globalAlpha = 1;
	}
	private _minX: number = 0;
	private _maxX: number = 0;
	private _minY: number = 0;
	private _maxY: number = 0;
	private _trackBounds: boolean = false;
	private _validBounds: boolean = false;
	renderPath(path: Path): void {
		if (path._visibility != Visibility.Visible) {
			return;
		}
		this._context.beginPath();
		if (path._opacity < 1 || this._globalAlpha < 1) {
			this._context.globalAlpha = <number>(path._opacity * this._globalAlpha);
		}
		let fill = path._fill;
		let stroke = path._stroke;
		this._trackBounds = (fill != null && fill.isGradient) || (stroke != null && stroke.isGradient);
		if (this._trackBounds) {
			this._maxX = -1.7976931348623157E+308;
			this._maxY = -1.7976931348623157E+308;
			this._minX = 1.7976931348623157E+308;
			this._minY = 1.7976931348623157E+308;
			this._validBounds = false;
		}
		switch (path.strokeLineJoin) {
			case PenLineJoin.Miter:
			this._context.lineJoin = "miter";
			break;

			case PenLineJoin.Bevel:
			this._context.lineJoin = "bevel";
			break;

			case PenLineJoin.Round:
			this._context.lineJoin = "round";
			break;

		}

		this.renderGeometry(path.data);
		if (fill != null) {
			if (fill.isGradient && this._validBounds) {
				this._context.fillStyle = this.createGradient1(<LinearGradientBrush>fill, this._minX, this._minY, this._maxX, this._maxY, <number>path.strokeThickness, false);
			} else {
				this._context.fillStyle = path._fill._fill;
			}
			this._context.fill();
		}
		if (stroke != null) {
			if (stroke.isGradient && this._validBounds) {
				this._context.strokeStyle = this.createGradient1(<LinearGradientBrush>stroke, this._minX, this._minY, this._maxX, this._maxY, <number>path.strokeThickness, true);
			} else {
				this._context.strokeStyle = path._stroke._fill;
			}
			this._context.lineWidth = <number>path.strokeThickness;
			if (path.strokeThickness > 0) {
				this._context.stroke();
			}
		}
		if (path._opacity < 1 || this._globalAlpha < 1) {
			this._context.globalAlpha = 1;
		}
	}
	renderGeometry(geometry: Geometry): void {
		if (geometry == null) {
			return;
		}
		let type = geometry.type;
		switch (type) {
			case GeometryType.Group:
			for (let i: number = 0; i < (<GeometryGroup>geometry).children.count; i++) {
				this.renderGeometry((<GeometryGroup>geometry).children._inner[i]);
			}
			break;

			case GeometryType.Path:
			this.renderPathGeometry(<PathGeometry>geometry);
			break;

			case GeometryType.Line:
			this.renderLineGeometry(<LineGeometry>geometry);
			break;

			case GeometryType.Rectangle:
			this.renderRectangleGeometry(<RectangleGeometry>geometry);
			break;

			case GeometryType.Ellipse:
			this.renderEllipseGeometry(<EllipseGeometry>geometry);
			break;

		}

	}
	private renderEllipseGeometry(ellipseGeometry: EllipseGeometry): void {
		this._context.moveTo(<number>ellipseGeometry.center.x, <number>(ellipseGeometry.center.y - ellipseGeometry.radiusY));
		this._lastSegmentPoint = <Point>{ $type: Point_$type, x: ellipseGeometry.center.x, y: ellipseGeometry.center.y - ellipseGeometry.radiusY };
		let a1: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: ellipseGeometry.center.x, y: ellipseGeometry.center.y + ellipseGeometry.radiusY };
			$ret.isLargeArc = false;
			$ret.size = new Size(1, ellipseGeometry.radiusX, ellipseGeometry.radiusY);
			return $ret;
		})());
		let a2: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: ellipseGeometry.center.x, y: ellipseGeometry.center.y - ellipseGeometry.radiusY };
			$ret.isLargeArc = false;
			$ret.size = new Size(1, ellipseGeometry.radiusX, ellipseGeometry.radiusY);
			return $ret;
		})());
		let oldTrack = this._trackBounds;
		this._trackBounds = false;
		this.renderArcSegment(a1);
		this.renderArcSegment(a2);
		this._trackBounds = oldTrack;
		if (!this._trackBounds) {
			return;
		}
		let minX = ellipseGeometry.center.x - ellipseGeometry.radiusX;
		let maxX = ellipseGeometry.center.y + ellipseGeometry.radiusX;
		let minY = ellipseGeometry.center.x - ellipseGeometry.radiusY;
		let maxY = ellipseGeometry.center.y + ellipseGeometry.radiusY;
		let currMaxX = this._maxX;
		let currMaxY = this._maxY;
		let currMinX = this._minX;
		let currMinY = this._minY;
		this._minX = minX < currMinX ? minX : currMinX;
		this._minY = minY < currMinY ? minY : currMinY;
		this._maxX = maxX > currMaxX ? maxX : currMaxX;
		this._maxY = maxY > currMaxY ? maxY : currMaxY;
		this._validBounds = true;
	}
	private renderPathGeometry(pathGeometry: PathGeometry): void {
		let figures = pathGeometry.figures;
		let count = figures.count;
		for (let i = 0; i < count; i++) {
			this.renderFigure(figures._inner[i]);
		}
	}
	private renderFigure(figure: PathFigure): void {
		let p: Point = figure == null ? null : figure._startPoint;
		if (PointUtil.equals(p, null)) {
			return;
		}
		let x = p.x;
		let y = p.y;
		this._context.moveTo(<number>x, <number>y);
		if (this._trackBounds) {
			let currMaxX = this._maxX;
			let currMaxY = this._maxY;
			let currMinX = this._minX;
			let currMinY = this._minY;
			this._minX = x < currMinX ? x : currMinX;
			this._minY = y < currMinY ? y : currMinY;
			this._maxX = x > currMaxX ? x : currMaxX;
			this._maxY = y > currMaxY ? y : currMaxY;
			this._validBounds = true;
		}
		this._lastSegmentPoint = p;
		let segments = figure._segments;
		let count = segments.count;
		for (let i: number = 0; i < count; i++) {
			this.renderSegment(segments._inner[i]);
		}
		if (figure._isClosed) {
			this._context.closePath();
		}
	}
	private renderSegment(segment: PathSegment): void {
		let type = segment.type;
		switch (type) {
			case PathSegmentType.Line:
			this.renderLineSegment(<LineSegment>segment);
			break;

			case PathSegmentType.PolyLine:
			this.renderPolyLineSegment(<PolyLineSegment>segment);
			break;

			case PathSegmentType.Arc:
			this.renderArcSegment(<ArcSegment>segment);
			break;

			case PathSegmentType.Bezier:
			this.renderBezierSegment(<BezierSegment>segment);
			break;

			case PathSegmentType.PolyBezier:
			this.renderPolyBezierSegment(<PolyBezierSegment>segment);
			break;

		}

	}
	private _lastSegmentPoint: Point = null;
	private updateBoundsFromBezier(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void {
		let delta = 1 / 50;
		let oneMinusT: number;
		let oneMinusT2: number;
		let oneMinusT3: number;
		let t2: number;
		let t3: number;
		let currX: number;
		let currY: number;
		let currMinX: number = this._minX;
		let currMinY: number = this._minY;
		let currMaxX: number = this._maxX;
		let currMaxY: number = this._maxY;
		for (let t = 0; t <= 1; t += delta) {
			oneMinusT = 1 - t;
			oneMinusT2 = oneMinusT * oneMinusT;
			oneMinusT3 = oneMinusT2 * oneMinusT;
			t2 = t * t;
			t3 = t2 * t;
			currX = oneMinusT3 * x0 + 3 * oneMinusT2 * t * x1 + 3 * oneMinusT * t2 * x2 + t3 * x3;
			currY = oneMinusT3 * y0 + 3 * oneMinusT2 * t * y1 + 3 * oneMinusT * t2 * y2 + t3 * y3;
			currMinX = currX < currMinX ? currX : currMinX;
			currMinY = currY < currMinY ? currY : currMinY;
			currMaxX = currX > currMaxX ? currX : currMaxX;
			currMaxY = currY > currMaxY ? currY : currMaxY;
		}
		this._minX = currMinX;
		this._minY = currMinY;
		this._maxX = currMaxX;
		this._maxY = currMaxY;
		this._validBounds = true;
	}
	private renderBezierSegment(segment: BezierSegment): void {
		this._context.bezierCurveTo(<number>segment.point1.x, <number>segment.point1.y, <number>segment.point2.x, <number>segment.point2.y, <number>segment.point3.x, <number>segment.point3.y);
		if (this._trackBounds) {
			this.updateBoundsFromBezier(<number>this._lastSegmentPoint.x, <number>this._lastSegmentPoint.y, <number>segment.point1.x, <number>segment.point1.y, <number>segment.point2.x, <number>segment.point2.y, <number>segment.point3.x, <number>segment.point3.y);
		}
	}
	private renderPolyBezierSegment(arcSegment: PolyBezierSegment): void {
		let i: number = 0;
		let pointsCount = arcSegment.points.count;
		let points = arcSegment.points;
		let p1: Point = this._lastSegmentPoint;
		let p2: Point = this._lastSegmentPoint;
		let p3: Point = this._lastSegmentPoint;
		let trackBounds: boolean = this._trackBounds;
		while (i < pointsCount) {
			if (i + 1 < pointsCount && i + 2 < pointsCount) {
				p1 = points._inner[i];
				p2 = points._inner[i + 1];
				p3 = points._inner[i + 2];
				this._context.bezierCurveTo(<number>p1.x, <number>p1.y, <number>p2.x, <number>p2.y, <number>p3.x, <number>p3.y);
				if (trackBounds) {
					this.updateBoundsFromBezier(<number>this._lastSegmentPoint.x, <number>this._lastSegmentPoint.y, <number>p1.x, <number>p1.y, <number>p2.x, <number>p2.y, <number>p3.x, <number>p3.y);
					this._lastSegmentPoint = p3;
				}
			}
			i = i + 3;
		}
		this._lastSegmentPoint = p3;
	}
	private updateBoundsFromArc(center: Point, startAngle: number, endAngle: number, radius: number, isCounter: boolean): void {
		let points: List$1<Point> = new List$1<Point>(Point_$type, 0);
		points.add(center);
		points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(startAngle) * radius, y: center.y + Math.sin(startAngle) * radius });
		points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(endAngle) * radius, y: center.y + Math.sin(endAngle) * radius });
		let threeSixty = Math.PI * 2;
		let ninety = Math.PI / 2;
		let oneEighty = Math.PI;
		let twoSeventy = Math.PI * 3 / 2;
		while (startAngle < 0) {
			startAngle += threeSixty;
		}
		while (startAngle > threeSixty) {
			startAngle -= threeSixty;
		}
		while (endAngle < 0) {
			endAngle += threeSixty;
		}
		while (endAngle > threeSixty) {
			endAngle -= threeSixty;
		}
		if (isCounter) {
			if ((0 > endAngle && 0 < startAngle) || (threeSixty > endAngle && threeSixty < startAngle) || (startAngle < endAngle)) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(0) * radius, y: center.y + Math.sin(0) * radius });
			}
			if (ninety > endAngle && ninety < startAngle) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(ninety) * radius, y: center.y + Math.sin(ninety) * radius });
			}
			if (oneEighty > endAngle && oneEighty < startAngle) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(oneEighty) * radius, y: center.y + Math.sin(oneEighty) * radius });
			}
			if (twoSeventy > endAngle && twoSeventy < startAngle) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(twoSeventy) * radius, y: center.y + Math.sin(twoSeventy) * radius });
			}
		} else {
			if ((0 > startAngle && 0 < endAngle) || (threeSixty > startAngle && threeSixty < endAngle) || (endAngle < startAngle)) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(0) * radius, y: center.y + Math.sin(0) * radius });
			}
			if (ninety > startAngle && ninety < endAngle) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(ninety) * radius, y: center.y + Math.sin(ninety) * radius });
			}
			if (oneEighty > startAngle && oneEighty < endAngle) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(oneEighty) * radius, y: center.y + Math.sin(oneEighty) * radius });
			}
			if (twoSeventy > startAngle && twoSeventy < endAngle) {
				points.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(twoSeventy) * radius, y: center.y + Math.sin(twoSeventy) * radius });
			}
		}
		let minX: number = 1.7976931348623157E+308;
		let minY: number = 1.7976931348623157E+308;
		let maxX: number = -1.7976931348623157E+308;
		let maxY: number = -1.7976931348623157E+308;
		for (let i = 0; i < points.count; i++) {
			let point = points._inner[i];
			minX = Math.min(minX, point.x);
			minY = Math.min(minY, point.y);
			maxX = Math.max(maxX, point.x);
			maxY = Math.max(maxY, point.y);
		}
		this._minX = Math.min(this._minX, minX);
		this._minY = Math.min(this._minY, minY);
		this._maxX = Math.max(this._maxX, maxX);
		this._maxY = Math.max(this._maxY, maxY);
		this._validBounds = true;
	}
	private renderArcSegment(arcSegment: ArcSegment): void {
		let startPoint: Point = this._lastSegmentPoint;
		let endPoint: Point = arcSegment.point;
		if (arcSegment.size.width != arcSegment.size.height) {
			this._context.save();
			this._context.scale(arcSegment.size.width / arcSegment.size.height, 1);
			startPoint = <Point>{ $type: Point_$type, x: startPoint.x * (arcSegment.size.height / arcSegment.size.width), y: startPoint.y };
			endPoint = <Point>{ $type: Point_$type, x: endPoint.x * (arcSegment.size.height / arcSegment.size.width), y: endPoint.y };
		}
		let isCounter: boolean = arcSegment.sweepDirection == SweepDirection.Counterclockwise;
		let center: Point = CoreGeometryUtil.getCenterFromArcSegment(startPoint, endPoint, arcSegment.size.height, isCounter, arcSegment.isLargeArc);
		let startAngle: number = Math.atan2(startPoint.y - center.y, startPoint.x - center.x);
		let endAngle: number = Math.atan2(endPoint.y - center.y, endPoint.x - center.x);
		let lessThan180: boolean = (Math.abs(endAngle - startAngle) < Math.PI);
		if (arcSegment.isLargeArc == lessThan180) {
			if (startAngle < endAngle) {
				startAngle += 2 * Math.PI;
			} else {
				endAngle += 2 * Math.PI;
			}
		}
		if (!isNaN_(center.x) && !isNaN_(center.y) && !isNaN_(arcSegment.size.height) && !isNaN_(startAngle) && !isNaN_(endAngle)) {
			this._context.arc(<number>center.x, <number>center.y, <number>arcSegment.size.height, <number>startAngle, <number>endAngle, isCounter);
			if (this._trackBounds) {
				this.updateBoundsFromArc(center, startAngle, endAngle, arcSegment.size.height, isCounter);
			}
		}
		this._lastSegmentPoint = arcSegment.point;
		if (arcSegment.size.width != arcSegment.size.height) {
			this._context.restore();
		}
	}
	private renderLineSegment(lineSegment: LineSegment): void {
		let x: number = <number>lineSegment.point.x;
		let y: number = <number>lineSegment.point.y;
		this._context.lineTo(x, y);
		this._lastSegmentPoint = lineSegment.point;
		if (this._trackBounds) {
			let currMaxX = this._maxX;
			let currMaxY = this._maxY;
			let currMinX = this._minX;
			let currMinY = this._minY;
			this._minX = x < currMinX ? x : currMinX;
			this._minY = y < currMinY ? y : currMinY;
			this._maxX = x > currMaxX ? x : currMaxX;
			this._maxY = y > currMaxY ? y : currMaxY;
			this._validBounds = true;
		}
	}
	private renderPolyLineSegment(polyLineSegment: PolyLineSegment): void {
		let points = polyLineSegment._points;
		let count = points.count;
		if (this._trackBounds) {
			let currMinX: number = this._minX;
			let currMinY: number = this._minY;
			let currMaxX: number = this._maxX;
			let currMaxY: number = this._maxY;
			let x: number;
			let y: number;
			for (let i: number = 0; i < count; i++) {
				x = points._inner[i].x;
				y = points._inner[i].y;
				this._context.lineTo(<number>x, <number>y);
				currMinX = x < currMinX ? x : currMinX;
				currMinY = y < currMinY ? y : currMinY;
				currMaxX = x > currMaxX ? x : currMaxX;
				currMaxY = y > currMaxY ? y : currMaxY;
			}
			this._minX = currMinX;
			this._minY = currMinY;
			this._maxX = currMaxX;
			this._maxY = currMaxY;
			this._validBounds = true;
		} else {
			for (let i1: number = 0; i1 < count; i1++) {
				this._context.lineTo(<number>points._inner[i1].x, <number>points._inner[i1].y);
			}
		}
		this._lastSegmentPoint = polyLineSegment._points._inner[count - 1];
	}
	private renderRectangleGeometry(rectangleGeometry: RectangleGeometry): void {
		this._context.rect(<number>rectangleGeometry.rect.left, <number>rectangleGeometry.rect.top, <number>rectangleGeometry.rect.width, <number>rectangleGeometry.rect.height);
		if (this._trackBounds) {
			let rect = rectangleGeometry.rect;
			let currMinX: number = this._minX;
			let currMinY: number = this._minY;
			let currMaxX: number = this._maxX;
			let currMaxY: number = this._maxY;
			let minX: number = rect.left;
			let maxX: number = rect.right;
			let minY: number = rect.top;
			let maxY: number = rect.bottom;
			this._minX = minX < currMinX ? minX : currMinX;
			this._minY = minY < currMinY ? minY : currMinY;
			this._maxX = maxX > currMaxX ? maxX : currMaxX;
			this._maxY = maxY > currMaxY ? maxY : currMaxY;
			this._validBounds = true;
		}
	}
	private renderLineGeometry(lineGeometry: LineGeometry): void {
		this._context.moveTo(<number>lineGeometry.startPoint.x, <number>lineGeometry.startPoint.y);
		this._context.lineTo(<number>lineGeometry.endPoint.x, <number>lineGeometry.endPoint.y);
		if (this._trackBounds) {
			let p1 = lineGeometry.startPoint;
			let p2 = lineGeometry.endPoint;
			let currMinX: number = this._minX;
			let currMinY: number = this._minY;
			let currMaxX: number = this._maxX;
			let currMaxY: number = this._maxY;
			let minX: number = p1.x < p2.x ? p1.x : p2.x;
			let maxX: number = p1.x > p2.x ? p1.x : p2.x;
			let minY: number = p1.y < p2.y ? p1.y : p2.y;
			let maxY: number = p1.y > p2.y ? p1.y : p2.y;
			this._minX = minX < currMinX ? minX : currMinX;
			this._minY = minY < currMinY ? minY : currMinY;
			this._maxX = maxX > currMaxX ? maxX : currMaxX;
			this._maxY = maxY > currMaxY ? maxY : currMaxY;
			this._validBounds = true;
		}
	}
	private _defaultAlign: string = "left";
	renderTextBlock(tb: TextBlock): void {
		if (tb._visibility == Visibility.Visible && tb.text != null) {
			if (tb._opacity < 1 || this._globalAlpha < 1) {
				this._context.globalAlpha = <number>(tb._opacity * this._globalAlpha);
			}
			let def_ = this._defaultAlign;
			let con_ = this._context;
			con_.textAlign = <any>def_;
			this._context.fillStyle = tb.fill != null ? tb.fill._fill : null;
			this._context.textBaseline = "top";
			this._context.fillText(tb.text, <number>tb.canvasLeft, <number>tb.canvasTop);
			if (tb._opacity < 1 || this._globalAlpha < 1) {
				this._context.globalAlpha = 1;
			}
		}
	}
	renderTextBlockInRect(tb: TextBlock, rect: Rect, lineHeight: number): void {
		if (tb._visibility == Visibility.Visible) {
			if (tb._opacity < 1 || this._globalAlpha < 1) {
				this._context.globalAlpha = <number>(tb._opacity * this._globalAlpha);
			}
			let x = rect.left + rect.width / 2;
			let words = tb.text.split(' ');
			this._context.fillStyle = tb.fill._fill;
			this._context.textBaseline = "top";
			this._context.textAlign = "center";
			let maxWidth = rect.width;
			let maxHeight = rect.height;
			let currentY: number = <number>rect.top;
			let line = "";
			for (let i: number = 0; i < words.length; i++) {
				let currentLine = line + words[i];
				let textMetrics = this._context.measureText(currentLine);
				if (textMetrics.width > maxWidth) {
					if (line != null) {
						this._context.fillText(line, <number>x, currentY);
					}
					line = "";
					currentY = currentY + <number>lineHeight;
				}
				line = line + words[i] + " ";
			}
			if (line != null) {
				this._context.fillText(line, <number>x, currentY);
			}
			if (tb._opacity < 1 || this._globalAlpha < 1) {
				this._context.globalAlpha = 1;
			}
		}
	}
	renderPolygon(polygon: Polygon): void {
		if (polygon.points == null || polygon.points.count < 1) {
			return;
		}
		this._context.beginPath();
		this._context.globalAlpha = <number>(polygon._opacity * this._globalAlpha);
		let points = polygon.points;
		let startPoint = points._inner[0];
		let fill = polygon._fill;
		let stroke = polygon._stroke;
		this._trackBounds = (fill != null && fill.isGradient) || (stroke != null && stroke.isGradient);
		if (this._trackBounds) {
			let minX = 1.7976931348623157E+308;
			let maxX = -1.7976931348623157E+308;
			let minY = 1.7976931348623157E+308;
			let maxY = -1.7976931348623157E+308;
			let x = startPoint.x;
			let y = startPoint.y;
			minX = x < minX ? x : minX;
			minY = y < minY ? y : minY;
			maxX = x > maxX ? x : maxX;
			maxY = y > maxY ? y : maxY;
			this._context.moveTo(<number>x, <number>y);
			for (let i: number = 1; i < points.count; i++) {
				x = points._inner[i].x;
				y = points._inner[i].y;
				this._context.lineTo(<number>x, <number>y);
				minX = x < minX ? x : minX;
				minY = y < minY ? y : minY;
				maxX = x > maxX ? x : maxX;
				maxY = y > maxY ? y : maxY;
			}
			this._context.closePath();
			this._minX = minX;
			this._minY = minY;
			this._maxX = maxX;
			this._maxY = maxY;
		} else {
			this._context.moveTo(<number>startPoint.x, <number>startPoint.y);
			for (let i1: number = 1; i1 < points.count; i1++) {
				this._context.lineTo(<number>points._inner[i1].x, <number>points._inner[i1].y);
			}
			this._context.closePath();
		}
		if (fill != null) {
			if (fill.isGradient) {
				this._context.fillStyle = this.createGradient1(<LinearGradientBrush>fill, this._minX, this._minY, this._maxX, this._maxY, <number>polygon.strokeThickness, false);
			} else {
				this._context.fillStyle = fill._fill;
			}
			this._context.fill();
		}
		if (stroke != null) {
			if (stroke.isGradient) {
				this._context.strokeStyle = this.createGradient1(<LinearGradientBrush>stroke, this._minX, this._minY, this._maxX, this._maxY, <number>polygon.strokeThickness, true);
			} else {
				this._context.strokeStyle = stroke._fill;
			}
			this._context.lineWidth = <number>polygon.strokeThickness;
			this._context.stroke();
		}
		this._context.globalAlpha = 1;
	}
	renderPolyline(polyline: Polyline): void {
		if (polyline.points == null || polyline.points.count < 1) {
			return;
		}
		this._context.beginPath();
		this._context.globalAlpha = <number>(polyline._opacity * this._globalAlpha);
		let points = polyline.points;
		let startPoint = points._inner[0];
		let fill = polyline._fill;
		let stroke = polyline._stroke;
		this._trackBounds = (fill != null && fill.isGradient) || (stroke != null && stroke.isGradient);
		if (this._trackBounds) {
			let minX: number = 1.7976931348623157E+308;
			let maxX: number = -1.7976931348623157E+308;
			let minY: number = 1.7976931348623157E+308;
			let maxY: number = -1.7976931348623157E+308;
			let x = startPoint.x;
			let y = startPoint.y;
			minX = x < minX ? x : minX;
			minY = y < minY ? y : minY;
			maxX = x > maxX ? x : maxX;
			maxY = y > maxY ? y : maxY;
			this._context.moveTo(<number>x, <number>y);
			for (let i: number = 1; i < points.count; i++) {
				x = points._inner[i].x;
				y = points._inner[i].y;
				this._context.lineTo(<number>x, <number>y);
				minX = x < minX ? x : minX;
				minY = y < minY ? y : minY;
				maxX = x > maxX ? x : maxX;
				maxY = y > maxY ? y : maxY;
			}
			this._minX = minX;
			this._minY = minY;
			this._maxX = maxX;
			this._maxY = maxY;
		} else {
			this._context.moveTo(<number>startPoint.x, <number>startPoint.y);
			for (let i1: number = 1; i1 < points.count; i1++) {
				this._context.lineTo(<number>points._inner[i1].x, <number>points._inner[i1].y);
			}
		}
		if (fill != null) {
			if (fill.isGradient) {
				this._context.fillStyle = this.createGradient1(<LinearGradientBrush>fill, this._minX, this._minY, this._maxX, this._maxY, <number>polyline.strokeThickness, false);
			} else {
				this._context.fillStyle = fill._fill;
			}
			this._context.fill();
		}
		if (stroke != null) {
			if (stroke.isGradient) {
				this._context.strokeStyle = this.createGradient1(<LinearGradientBrush>stroke, this._minX, this._minY, this._maxX, this._maxY, <number>polyline.strokeThickness, true);
			} else {
				this._context.strokeStyle = stroke._fill;
			}
			this._context.lineWidth = <number>polyline.strokeThickness;
			this._context.stroke();
		}
		this._context.globalAlpha = 1;
	}
	renderContentControl(renderInfo: DataTemplateRenderInfo, marker: ContentControl): void {
		if (marker._visibility == Visibility.Collapsed) {
			return;
		}
		if ((marker._opacity != 1 || this._globalAlpha != 1) && !renderInfo.isHitTestRender) {
			this._context.globalAlpha = <number>(marker._opacity * this._globalAlpha);
		}
		let template = marker.contentTemplate;
		if (template != null && template.render != null) {
			renderInfo.context = this._context;
			renderInfo.xPosition = marker.canvasLeft;
			renderInfo.yPosition = marker.canvasTop;
			renderInfo.data = marker.content;
			template.render(renderInfo);
		}
		this._context.globalAlpha = 1;
	}
	applyTransform(transform: Transform): void {
		if (typeCast<TransformGroup>((<any>TransformGroup).$type, transform) !== null) {
			let tg = <TransformGroup>transform;
			for (let i: number = tg.children.count - 1; i >= 0; i--) {
				let tran = tg.children._inner[i];
				this.applyTransform(tran);
			}
		} else if (typeCast<TranslateTransform>((<any>TranslateTransform).$type, transform) !== null) {
			let trans = <TranslateTransform>transform;
			this._context.translate(trans.x, trans.y);
		} else if (typeCast<RotateTransform>((<any>RotateTransform).$type, transform) !== null) {
			let rot = <RotateTransform>transform;
			let angle = rot.angle * Math.PI / 180;
			let x: number = Math.cos(angle);
			let y: number = Math.sin(angle);
			let offsetX: number = rot.centerX * (1 - x) + rot.centerY * y;
			let offsetY: number = rot.centerY * (1 - x) - rot.centerX * y;
			this._context.transform(x, y, y * -1, x, offsetX, offsetY);
		} else if (typeCast<ScaleTransform>((<any>ScaleTransform).$type, transform) !== null) {
			let scale = <ScaleTransform>transform;
			this._context.transform(scale.scaleX, 0, 0, scale.scaleY, scale.centerX - scale.scaleX * scale.centerX, scale.centerY - scale.scaleY * scale.centerY);
		}
	}
	renderLine(line: Line): void {
		if (line._visibility != Visibility.Visible) {
			return;
		}
		this._context.beginPath();
		this._context.globalAlpha = <number>(line._opacity * this._globalAlpha);
		this._context.moveTo(<number>line.x1, <number>line.y1);
		this._context.lineTo(<number>line.x2, <number>line.y2);
		if (this._trackBounds) {
			this._minX = 1.7976931348623157E+308;
			this._maxX = -1.7976931348623157E+308;
			this._minY = 1.7976931348623157E+308;
			this._maxY = -1.7976931348623157E+308;
			let currMinX: number = this._minX;
			let currMinY: number = this._minY;
			let currMaxX: number = this._maxX;
			let currMaxY: number = this._maxY;
			let minX: number = line.x1 < line.x2 ? line.x1 : line.x2;
			let maxX: number = line.x1 > line.x2 ? line.x1 : line.x2;
			let minY: number = line.y1 < line.y2 ? line.y1 : line.y2;
			let maxY: number = line.y1 > line.y2 ? line.y1 : line.y2;
			this._minX = minX < currMinX ? minX : currMinX;
			this._minY = minY < currMinY ? minY : currMinY;
			this._maxX = maxX > currMaxX ? maxX : currMaxX;
			this._maxY = maxY > currMaxY ? maxY : currMaxY;
		}
		let fill = line._fill;
		let stroke = line._stroke;
		if (fill != null) {
			if (fill.isGradient) {
				this._context.fillStyle = this.createGradient1(<LinearGradientBrush>fill, this._minX, this._minY, this._maxX, this._maxX, <number>line.strokeThickness, false);
			} else {
				this._context.fillStyle = fill._fill;
			}
			this._context.fill();
		}
		if (stroke != null) {
			if (stroke.isGradient) {
				this._context.strokeStyle = this.createGradient1(<LinearGradientBrush>stroke, this._minX, this._minY, this._maxX, this._maxX, <number>line.strokeThickness, true);
			} else {
				this._context.strokeStyle = line._stroke._fill;
			}
			this._context.lineWidth = <number>line.strokeThickness;
			this._context.stroke();
		}
		this._context.globalAlpha = 1;
	}
	setRectangleClip(rect: Rect): void {
		this._context.beginPath();
		this._context.rect(<number>rect.left, <number>rect.top, <number>rect.width, <number>rect.height);
		this._context.clip();
	}
	save(): void {
		this._context.save();
	}
	restore(): void {
		this._context.restore();
	}
	scale(x: number, y: number): void {
		this._context.scale(x, y);
	}
	translate(x: number, y: number): void {
		this._context.translate(x, y);
	}
	clearRectangle(left: number, top: number, width: number, height: number): void {
		this._context.clearRect(left, top, width, height);
	}
	drawImage(image: any, opacity: number, left: number, top: number, width: number, height: number): void {
		if (opacity != 1) {
			this._context.globalAlpha = <number>(opacity * this._globalAlpha);
		}
		this._context.drawImage(<HTMLCanvasElement>image, left, top, width, height);
		if (opacity != 1) {
			this._context.globalAlpha = <number>1;
		}
	}
	drawImage1(image: any, opacity: number, sourceLeft: number, sourceTop: number, sourceWidth: number, sourceHeight: number, left: number, top: number, width: number, height: number): void {
		if (opacity != 1) {
			this._context.globalAlpha = <number>(opacity * this._globalAlpha);
		}
		this._context.drawImage(<HTMLCanvasElement>image, sourceLeft, sourceTop, sourceWidth, sourceHeight, left, top, width, height);
		if (opacity != 1) {
			this._context.globalAlpha = <number>1;
		}
	}
	getPixelAt(x: number, y: number): number[] {
		let data = this._context.getImageData(x, y, 1, 1);
		let ret: number[] = <number[]>new Array(4);
		ret[0] = data.data[0];
		ret[1] = data.data[1];
		ret[2] = data.data[2];
		ret[3] = data.data[3];
		return ret;
	}
	getFont(): string {
		return this._context.font;
	}
	getFontInfo(): FontInfo {
		return this._fontInfo;
	}
	setFont(font: string): void {
		if (this._context.font != font) {
			this._context.font = font;
		}
	}
	private _fontInfo: FontInfo = null;
	setFontInfo(font: FontInfo): void {
		this._fontInfo = font;
		let fontString: string = font != null ? font.fontString : null;
		if (this._context.font != fontString) {
			this._context.font = fontString;
		}
	}
	measureTextWidth(text: string): number {
		let metrics = this._context.measureText(text);
		return metrics.width;
	}
	private _globalAlpha: number = 1;
	setOpacity(p: number): void {
		this._globalAlpha = p;
	}
	applyStyle(shape_: Shape, style_: Style): void {
		if (style_ == null) {
			return;
		}
		let fillColor_: string = null;
		let strokeColor_: string = null;
		let strokeThickness_: number = NaN;
		let opacity_: number = NaN;
		let s_: any = style_;
		if (s_.fill) { fillColor_ = <string>s_.fill };
		if (s_.stroke) { strokeColor_ = <string>s_.stroke };
		if (s_.strokeThickness) { strokeThickness_ = <number>s_.strokeThickness };
		if (s_.opacity) { opacity_ = <number>s_.opacity };
		if (fillColor_ != null) {
			shape_._fill = ((() => {
				let $ret = new Brush();
				$ret.fill = fillColor_;
				return $ret;
			})());
		}
		if (strokeColor_ != null) {
			shape_._stroke = ((() => {
				let $ret = new Brush();
				$ret.fill = strokeColor_;
				return $ret;
			})());
		}
		if (<any>strokeThickness_ != undefined && !isNaN_(strokeThickness_)) {
			shape_.strokeThickness = strokeThickness_;
		}
		if (!isNaN_(opacity_)) {
			shape_._opacity = opacity_;
		}
	}
	enableDropShadow(color: string, blur: number, offsetX: number, offsetY: number): void {
		this._context.shadowColor = color;
		this._context.shadowBlur = blur;
		this._context.shadowOffsetX = offsetX;
		this._context.shadowOffsetY = offsetY;
	}
	disableDropShadow(): void {
		this._context.shadowColor = "rgba(0,0,0,0)";
		this._context.shadowBlur = 0;
		this._context.shadowOffsetX = 0;
		this._context.shadowOffsetY = 0;
	}
}


