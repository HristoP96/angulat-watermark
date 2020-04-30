/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, BaseError, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable$1, IEnumerable$1_$type, toNullable, Point_$type, typeCast, fromEnum, Type, markType, PointUtil } from "./type";
import { ColorData } from "./ColorData";
import { Brush } from "./Brush";
import { Color } from "./Color";
import { BrushAppearanceData } from "./BrushAppearanceData";
import { LinearGradientBrushAppearanceData } from "./LinearGradientBrushAppearanceData";
import { LinearGradientBrush } from "./LinearGradientBrush";
import { GradientStop } from "./GradientStop";
import { GradientStopAppearanceData } from "./GradientStopAppearanceData";
import { SolidBrushAppearanceData } from "./SolidBrushAppearanceData";
import { List$1 } from "./List$1";
import { FrameworkElement } from "./FrameworkElement";
import { GeometryData } from "./GeometryData";
import { Path } from "./Path";
import { Line } from "./Line";
import { LineGeometry } from "./LineGeometry";
import { Geometry } from "./Geometry";
import { GeometryGroup } from "./GeometryGroup";
import { PathGeometry } from "./PathGeometry";
import { RectangleGeometry } from "./RectangleGeometry";
import { EllipseGeometry } from "./EllipseGeometry";
import { EllipseGeometryData } from "./EllipseGeometryData";
import { RectangleGeometryData } from "./RectangleGeometryData";
import { Rect } from "./Rect";
import { LineGeometryData } from "./LineGeometryData";
import { PathGeometryData } from "./PathGeometryData";
import { PathFigure } from "./PathFigure";
import { PathFigureData } from "./PathFigureData";
import { PrimitiveAppearanceData } from "./PrimitiveAppearanceData";
import { Shape } from "./Shape";
import { LabelAppearanceData } from "./LabelAppearanceData";
import { FontInfo } from "./FontInfo";
import { TextBlock } from "./TextBlock";
import { Transform } from "./Transform";
import { RotateTransform } from "./RotateTransform";
import { TransformGroup } from "./TransformGroup";
import { UIElement } from "./UIElement";
import { StringBuilder } from "./StringBuilder";
import { IVisualData } from "./IVisualData";
import { Visibility } from "./Visibility";
import { isNaN_ } from "./number";
import { stringIsNullOrEmpty } from "./string";

/**
 * @hidden 
 */
export class AppearanceHelper extends Base {
	static $t: Type = markType(AppearanceHelper, 'AppearanceHelper');
	static fromBrush(b: Brush): ColorData {
		if (b == null) {
			return ColorData.fromColor(Color.fromArgb(<number>0, <number>0, <number>0, <number>0));
		}
		if (Color.l_op_Equality_Lifted(toNullable<Color>((<any>Color).$type, b.color), toNullable<Color>((<any>Color).$type, null))) {
			return ColorData.fromColor(Color.fromArgb(<number>0, <number>0, <number>0, <number>0));
		}
		return ColorData.fromColor(b.color);
	}
	static fromBrushExtended(b: Brush): BrushAppearanceData {
		if (b == null) {
			return null;
		}
		if (b.isGradient) {
			let linear = new LinearGradientBrushAppearanceData();
			let inLinear = <LinearGradientBrush>b;
			linear.startX = inLinear.startX;
			linear.startY = inLinear.startY;
			linear.endX = inLinear.endX;
			linear.endY = inLinear.endY;
			let $t = inLinear.gradientStops;
			for (let i = 0; i < $t.length; i++) {
				let stop = $t[i];
				let newStop = new GradientStopAppearanceData();
				newStop.colorValue = ColorData.fromColor(stop.color);
				newStop.offset = stop.offset;
				linear.stops.add(newStop);
			}
			return linear;
		} else if (b.isRadialGradient) {
			return null;
		} else {
			let solid: SolidBrushAppearanceData = new SolidBrushAppearanceData();
			solid.colorValue = ColorData.fromColor(b.color);
			return solid;
		}
	}
	static getCanvasLeft(visual: FrameworkElement): number {
		return visual.canvasLeft;
	}
	static getCanvasTop(visual: FrameworkElement): number {
		return visual.canvasTop;
	}
	static getCanvasZIndex(line: FrameworkElement): number {
		return line.canvasZIndex;
	}
	static fromPathData(path: Path): List$1<GeometryData> {
		return AppearanceHelper.fromGeometry(path.data);
	}
	static fromLineData(line: Line): List$1<GeometryData> {
		let lineGeometry: LineGeometry = new LineGeometry();
		lineGeometry.endPoint = <Point>{ $type: Point_$type, x: line.x2, y: line.y2 };
		lineGeometry.startPoint = <Point>{ $type: Point_$type, x: line.x1, y: line.y1 };
		return AppearanceHelper.fromGeometry(lineGeometry);
	}
	static fromGeometry(data: Geometry): List$1<GeometryData> {
		if (data == null) {
			return new List$1<GeometryData>((<any>GeometryData).$type, 0);
		}
		if (typeCast<GeometryGroup>((<any>GeometryGroup).$type, data) !== null) {
			let ret = new List$1<GeometryData>((<any>GeometryData).$type, 0);
			let group = <GeometryGroup>data;
			for (let i = 0; i < group.children.count; i++) {
				let items = AppearanceHelper.fromGeometry(group.children._inner[i]);
				for (let j = 0; j < items.count; j++) {
					ret.add(items._inner[j]);
				}
			}
			return ret;
		} else if (typeCast<PathGeometry>((<any>PathGeometry).$type, data) !== null) {
			return AppearanceHelper.fromPathGeometry(<PathGeometry>data);
		} else if (typeCast<LineGeometry>((<any>LineGeometry).$type, data) !== null) {
			return AppearanceHelper.fromLineGeometry(<LineGeometry>data);
		} else if (typeCast<RectangleGeometry>((<any>RectangleGeometry).$type, data) !== null) {
			return AppearanceHelper.fromRectangleGeometry(<RectangleGeometry>data);
		} else if (typeCast<EllipseGeometry>((<any>EllipseGeometry).$type, data) !== null) {
			return AppearanceHelper.fromEllipseGeometry(<EllipseGeometry>data);
		} else {
			throw new BaseError(1, "not supported");
		}
	}
	private static fromEllipseGeometry(ellipseGeometry: EllipseGeometry): List$1<GeometryData> {
		let ret = new List$1<GeometryData>((<any>GeometryData).$type, 0);
		let newData = new EllipseGeometryData();
		ret.add(newData);
		newData.centerX = ellipseGeometry.center.x;
		newData.centerY = ellipseGeometry.center.y;
		newData.radiusX = ellipseGeometry.radiusX;
		newData.radiusY = ellipseGeometry.radiusY;
		return ret;
	}
	private static fromRectangleGeometry(rectangleGeometry: RectangleGeometry): List$1<GeometryData> {
		let ret = new List$1<GeometryData>((<any>GeometryData).$type, 0);
		let newData = new RectangleGeometryData();
		ret.add(newData);
		newData.x = rectangleGeometry.rect.x;
		newData.y = rectangleGeometry.rect.y;
		newData.width = rectangleGeometry.rect.width;
		newData.height = rectangleGeometry.rect.height;
		return ret;
	}
	private static fromLineGeometry(lineGeometry: LineGeometry): List$1<GeometryData> {
		let ret = new List$1<GeometryData>((<any>GeometryData).$type, 0);
		let newData = new LineGeometryData();
		ret.add(newData);
		newData.x1 = lineGeometry.startPoint.x;
		newData.y1 = lineGeometry.startPoint.y;
		newData.x2 = lineGeometry.endPoint.x;
		newData.y2 = lineGeometry.endPoint.y;
		return ret;
	}
	private static fromPathGeometry(pathGeometry: PathGeometry): List$1<GeometryData> {
		let ret = new List$1<GeometryData>((<any>GeometryData).$type, 0);
		let newData = new PathGeometryData();
		ret.add(newData);
		for (let i = 0; i < pathGeometry.figures.count; i++) {
			let figure = pathGeometry.figures._inner[i];
			let f = new PathFigureData(1, figure);
			newData.figures.add(f);
		}
		return ret;
	}
	static getShapeAppearance(appearance: PrimitiveAppearanceData, path: Shape): void {
		appearance.stroke = AppearanceHelper.fromBrush(path._stroke);
		appearance.fill = AppearanceHelper.fromBrush(path._fill);
		appearance.strokeExtended = AppearanceHelper.fromBrushExtended(path._stroke);
		appearance.fillExtended = AppearanceHelper.fromBrushExtended(path._fill);
		appearance.strokeThickness = path.strokeThickness;
		appearance.dashArray = null;
		if (path.strokeDashArray != null) {
			appearance.dashArray = path.strokeDashArray.asArray();
		}
		appearance.dashCap = <number>path.strokeDashCap;
		appearance.isVisible = path._visibility == Visibility.Visible;
		appearance.opacity = path._opacity;
		appearance.canvasLeft = AppearanceHelper.getCanvasLeft(path);
		appearance.canvasTop = AppearanceHelper.getCanvasTop(path);
		appearance.canvaZIndex = AppearanceHelper.getCanvasZIndex(path);
	}
	static fromTextElement(frameworkElement: FrameworkElement, fontInfo: FontInfo): LabelAppearanceData {
		let lad = new LabelAppearanceData();
		let tb = <TextBlock>frameworkElement;
		lad.text = tb.text;
		lad.labelBrush = AppearanceHelper.fromBrush(tb.fill);
		lad.labelBrushExtended = AppearanceHelper.fromBrushExtended(tb.fill);
		lad.visibility = (tb._visibility == Visibility.Visible) ? true : false;
		lad.opacity = tb._opacity;
		if (fontInfo != null) {
			if (fontInfo.fontFamily != null) {
				lad.fontFamily = fontInfo.fontFamily;
			}
			if (!isNaN_(fontInfo.fontSize)) {
				lad.fontSize = fontInfo.fontSize;
			}
			lad.fontWeight = stringIsNullOrEmpty(fontInfo.fontWeight) ? "Normal" : fontInfo.fontWeight;
			lad.fontStyle = stringIsNullOrEmpty(fontInfo.fontStyle) ? "Normal" : fontInfo.fontStyle;
			if (fontInfo.fontStretch != null) {
				lad.fontStretch = fontInfo.fontStyle;
			}
		}
		let angle: number = 0;
		let xForm = tb.renderTransform;
		if (typeCast<RotateTransform>((<any>RotateTransform).$type, xForm) !== null) {
			let rt = typeCast<RotateTransform>((<any>RotateTransform).$type, xForm);
			angle = rt.angle;
		} else if (typeCast<TransformGroup>((<any>TransformGroup).$type, xForm) !== null) {
			let tg = typeCast<TransformGroup>((<any>TransformGroup).$type, xForm);
			for (let child of fromEnum<Transform>(tg.children)) {
				if (typeCast<RotateTransform>((<any>RotateTransform).$type, child) !== null) {
					let rt1 = typeCast<RotateTransform>((<any>RotateTransform).$type, child);
					angle = rt1.angle;
					break;
				}
			}
		}
		lad.angle = angle;
		return lad;
	}
	static serializeItems(sb: StringBuilder, name: string, items: IEnumerable$1<IVisualData>, isFirst: boolean): boolean {
		if (items != null) {
			if (!isFirst) {
				sb.append5(", ");
			}
			sb.append5(name);
			sb.append5(": [");
			let addedFirst: boolean = false;
			for (let item of fromEnum<IVisualData>(items)) {
				if (addedFirst) {
					sb.appendLine1(", ");
				} else {
					addedFirst = true;
				}
				sb.append5(item.serialize());
			}
			sb.appendLine1("]");
			return true;
		}
		return false;
	}
	static serializeItem(sb: StringBuilder, name: string, item: IVisualData, isFirst: boolean): boolean {
		if (item != null) {
			if (!isFirst) {
				sb.append5(", ");
			}
			sb.append5(name);
			sb.append5(": ");
			sb.appendLine1(item.serialize());
			return true;
		}
		return false;
	}
}


