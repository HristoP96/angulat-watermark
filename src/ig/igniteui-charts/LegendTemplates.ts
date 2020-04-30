/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, typeCast, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataContext } from "igniteui-core/DataContext";
import { Series } from "./Series";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { DataTemplatePassInfo } from "igniteui-core/DataTemplatePassInfo";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { LegendItemHelper } from "igniteui-core/LegendItemHelper";
import { StandardLegendItems } from "igniteui-core/StandardLegendItems";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Line } from "igniteui-core/Line";
import { MarkerSeries } from "./MarkerSeries";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Shape } from "igniteui-core/Shape";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { Brush } from "igniteui-core/Brush";
import { Path } from "igniteui-core/Path";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { List$1 } from "igniteui-core/List$1";
import { PathSegment } from "igniteui-core/PathSegment";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { Size } from "igniteui-core/Size";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class LegendTemplates extends Base {
	static $t: Type = markType(LegendTemplates, 'LegendTemplates');
	static defaultLegendItemRender(info: DataTemplateRenderInfo): void {
		let cont: DataContext = <DataContext>info.data;
		let s: Series = <Series>cont.series;
		let template: DataTemplate = s.legendItemBadgeTemplate;
		if (template == null) {
			template = LegendTemplates.resolveLegendItemBadgeTemplate(s.defaultLegendItemBadgeTemplateType);
		}
		let title: any = s.title;
		if (title == null) {
			title = "Series Title";
		}
		LegendItemHelper.coreLegendItemRender1(info.context, info.xPosition, info.yPosition, info.availableWidth, info.availableHeight, info.data, title.toString(), template, info.passInfo, s.actualLegend != null && s.actualLegend.isFinancial, s.finalValue, s.percentChange);
	}
	private static readonly _default: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.defaultLegendItemRender;
		return $ret;
	})());
	private static readonly _discrete: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultDiscreteLegendItemMeasure;
		$ret.render = LegendTemplates.defaultDiscreteLegendItemRender;
		return $ret;
	})());
	static resolveLegendItemTemplate(type: StandardLegendItems): DataTemplate {
		switch (type) {
			case StandardLegendItems.Default: return LegendTemplates._default;
			case StandardLegendItems.Discrete: return LegendTemplates._discrete;
		}

		return LegendTemplates._default;
	}
	static defaultDiscreteLegendItemRender(info: DataTemplateRenderInfo): void {
		let cont: DataContext = <DataContext>info.data;
		let s: Series = <Series>cont.series;
		let template: DataTemplate = s.legendItemBadgeTemplate;
		if (template == null) {
			template = LegendTemplates.resolveLegendItemBadgeTemplate(s.defaultLegendItemBadgeTemplateType);
		}
		let title: any = cont.itemLabel;
		if (title == null) {
			title = "Series Item";
		}
		LegendItemHelper.coreLegendItemRender(info.context, info.xPosition, info.yPosition, info.availableWidth, info.availableHeight, info.data, title.toString(), template, info.passInfo);
	}
	static lineBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let s: Series = <Series>dc.series;
		if (dc.itemBrush != null) {
			dc.actualItemBrush = dc.itemBrush;
		} else {
			dc.actualItemBrush = s.actualBrush;
		}
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		let line: Line = new Line();
		line.x1 = 0;
		line.y1 = info.availableHeight / 2;
		line.x2 = info.availableWidth;
		line.y2 = info.availableHeight / 2;
		line.strokeThickness = s.thickness;
		line._stroke = dc.actualItemBrush;
		line.strokeDashArray = s.dashArray;
		renderCont.renderLine(line);
		let m: MarkerSeries = typeCast<MarkerSeries>((<any>MarkerSeries).$type, dc.series);
		if (m != null && m.actualMarkerTemplate != null && m.actualMarkerTemplate.render != null) {
			dc.outline = m.actualMarkerOutline;
			dc.thickness = MarkerSeries.markerThicknessDefault;
			LegendTemplates.renderMarkerTemplate(m.actualMarkerTemplate, info);
		}
	}
	private static renderMarkerTemplate(template: DataTemplate, info: DataTemplateRenderInfo): void {
		let measureInfo: DataTemplateMeasureInfo = new DataTemplateMeasureInfo();
		measureInfo.passInfo = info.passInfo;
		measureInfo.width = 11;
		measureInfo.height = 11;
		measureInfo.data = info.data;
		measureInfo.context = info.context;
		measureInfo.renderContext = info.renderContext;
		let dc = <DataContext>info.data;
		let oldActualFill = dc.actualItemBrush;
		let oldFill = dc.itemBrush;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			if (dc.itemBrush == null) {
				let ser = <Series>dc.series;
				dc.actualItemBrush = ser.getActualMarkerBrush();
			}
		}
		if (template.measure != null) {
			template.measure(measureInfo);
			if (isNaN_(measureInfo.width) || isInfinity(measureInfo.width) || measureInfo.width > 11) {
				measureInfo.width = 11;
			}
			if (isNaN_(measureInfo.height) || isInfinity(measureInfo.height) || measureInfo.height > 11) {
				measureInfo.height = 11;
			}
		}
		let renderInfo: DataTemplateRenderInfo = new DataTemplateRenderInfo();
		renderInfo.passInfo = info.passInfo;
		renderInfo.availableWidth = measureInfo.width;
		renderInfo.availableHeight = measureInfo.height;
		renderInfo.xPosition = info.availableWidth / 2;
		renderInfo.yPosition = info.availableHeight / 2;
		renderInfo.data = info.data;
		renderInfo.context = info.context;
		renderInfo.renderContext = info.renderContext;
		template.render(renderInfo);
		dc.itemBrush = oldFill;
		dc.actualItemBrush = oldActualFill;
	}
	static updateItemBrush(dc: DataContext): void {
		let s: Series = null;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			s = <Series>dc.series;
		}
		if (dc.itemBrush != null) {
			dc.actualItemBrush = dc.itemBrush;
		} else {
			if (s != null) {
				dc.actualItemBrush = s.actualBrush;
			} else {
				dc.actualItemBrush = dc.itemBrush;
			}
		}
	}
	static defaultLegendItemMeasure(info: DataTemplateMeasureInfo): void {
	}
	static defaultDiscreteLegendItemMeasure(info: DataTemplateMeasureInfo): void {
	}
	static legendItemBadgeMeasure(info: DataTemplateMeasureInfo): void {
	}
	static rectBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		LegendTemplates.updateItemBrush(dc);
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		let p: Path = new Path();
		let pg: PathGeometry = new PathGeometry();
		let f: PathFigure = new PathFigure();
		f._isFilled = true;
		let startingX = 0;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX = (<Series>dc.series).thickness / 2;
			p.strokeThickness = (<Series>dc.series).thickness;
			p._stroke = (<Series>dc.series).actualOutline;
			p.strokeDashArray = (<Series>dc.series).dashArray;
		}
		f._startPoint = <Point>{ $type: Point_$type, x: startingX, y: 5 };
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: startingX, y: 14 }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 11, y: 14 }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: 16, y: 9 };
			return $ret;
		})()));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 5, y: startingX }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: startingX, y: 5 };
			return $ret;
		})()));
		pg.figures.add(f);
		p.data = pg;
		p._fill = dc.actualItemBrush;
		renderCont.renderPath(p);
		let m: MarkerSeries = typeCast<MarkerSeries>((<any>MarkerSeries).$type, dc.series);
		if (m != null && m.actualMarkerTemplate != null && m.actualMarkerTemplate.render != null) {
			if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
				dc.outline = (<Series>dc.series).actualOutline;
			}
			LegendTemplates.renderMarkerTemplate(m.actualMarkerTemplate, info);
		}
	}
	static markerlessRectBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		LegendTemplates.updateItemBrush(dc);
		let p: Path = new Path();
		let pg: PathGeometry = new PathGeometry();
		let f: PathFigure = new PathFigure();
		let startingX = 0;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX = (<Series>dc.series).thickness / 2;
			p.strokeThickness = (<Series>dc.series).thickness;
			p._stroke = (<Series>dc.series).actualOutline;
			p.strokeDashArray = (<Series>dc.series).dashArray;
		}
		f._isFilled = true;
		f._startPoint = <Point>{ $type: Point_$type, x: startingX, y: 5 };
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: startingX, y: 14 }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 11, y: 14 }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: 16, y: 9 };
			return $ret;
		})()));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 5, y: startingX }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: startingX, y: 5 };
			return $ret;
		})()));
		pg.figures.add(f);
		p.data = pg;
		p._fill = dc.actualItemBrush;
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		renderCont.renderPath(p);
	}
	static markerlessLineBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let s: Series = <Series>dc.series;
		if (dc.itemBrush != null) {
			dc.actualItemBrush = dc.itemBrush;
		} else {
			dc.actualItemBrush = s.actualBrush;
		}
		let line: Line = new Line();
		line.x1 = 0;
		line.y1 = info.availableHeight / 2;
		line.x2 = info.availableWidth;
		line.y2 = info.availableHeight / 2;
		line.strokeThickness = s.thickness;
		line.strokeDashArray = s.dashArray;
		line._stroke = dc.actualItemBrush;
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		renderCont.renderLine(line);
	}
	static pointBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		LegendTemplates.updateItemBrush(dc);
		let m: MarkerSeries = typeCast<MarkerSeries>((<any>MarkerSeries).$type, dc.series);
		if (m != null && m.actualMarkerTemplate != null && m.actualMarkerTemplate.render != null) {
			if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
				dc.outline = (<Series>dc.series).getActualMarkerOutlineBrush();
			}
			LegendTemplates.renderMarkerTemplate(m.actualMarkerTemplate, info);
		}
	}
	static positiveNegativeBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let s: Series = <Series>dc.series;
		if (dc.itemBrush != null) {
			dc.actualItemBrush = dc.itemBrush;
		} else {
			dc.actualItemBrush = s.actualBrush;
		}
		let p: Path = new Path();
		let pg: PathGeometry = new PathGeometry();
		let f: PathFigure = new PathFigure();
		let startingX = 0;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX = (<Series>dc.series).thickness / 2;
			p.strokeThickness = (<Series>dc.series).thickness;
			p._stroke = (<Series>dc.series).actualOutline;
			p.strokeDashArray = (<Series>dc.series).dashArray;
		}
		f._isFilled = true;
		f._startPoint = <Point>{ $type: Point_$type, x: startingX, y: 5 };
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: startingX, y: 14 }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 5, y: startingX }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: startingX, y: 5 };
			return $ret;
		})()));
		pg.figures.add(f);
		p.data = pg;
		p._fill = dc.actualItemBrush;
		let p2: Path = new Path();
		let pg2: PathGeometry = new PathGeometry();
		let f2: PathFigure = new PathFigure();
		let startingX2 = 0;
		let negativeBrush: Brush = null;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX2 = (<Series>dc.series).thickness / 2;
			p2.strokeThickness = (<Series>dc.series).thickness;
			p2._stroke = (<Series>dc.series).actualOutline;
			negativeBrush = (<Series>dc.series).resolveNegativeBrush();
		}
		f2._isFilled = true;
		f2._startPoint = <Point>{ $type: Point_$type, x: startingX2, y: 14 };
		f2._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 11, y: 14 }));
		f2._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: 16, y: 9 };
			return $ret;
		})()));
		f2._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX2 }));
		pg2.figures.add(f2);
		p2.data = pg2;
		if (negativeBrush != null) {
			p2._fill = negativeBrush;
		}
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		renderCont.renderPath(p);
		renderCont.renderPath(p2);
		let m: MarkerSeries = typeCast<MarkerSeries>((<any>MarkerSeries).$type, dc.series);
		if (m != null && m.actualMarkerTemplate != null && m.actualMarkerTemplate.render != null) {
			if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
				dc.outline = (<Series>dc.series).actualOutline;
			}
			LegendTemplates.renderMarkerTemplate(m.actualMarkerTemplate, info);
		}
	}
	static financialBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let s: Series = <Series>dc.series;
		if (dc.itemBrush != null) {
			dc.actualItemBrush = dc.itemBrush;
		} else {
			dc.actualItemBrush = s.actualBrush;
		}
		let p: Path = new Path();
		let pg: PathGeometry = new PathGeometry();
		let startingX = 0;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX = (<Series>dc.series).thickness / 2;
			p.strokeThickness = (<Series>dc.series).thickness;
			p._stroke = (<Series>dc.series).actualOutline;
			p.strokeDashArray = (<Series>dc.series).dashArray;
		}
		let f: PathFigure = new PathFigure();
		f._isFilled = true;
		f._startPoint = <Point>{ $type: Point_$type, x: startingX, y: 5 };
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: startingX, y: 14 }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 5, y: startingX }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: startingX, y: 5 };
			return $ret;
		})()));
		pg.figures.add(f);
		p.data = pg;
		p._fill = dc.actualItemBrush;
		let p2: Path = new Path();
		let pg2: PathGeometry = new PathGeometry();
		let f2: PathFigure = new PathFigure();
		let startingX2 = 0;
		let negativeBrush: Brush = null;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			p2.strokeThickness = (<Series>dc.series).thickness;
			p2._stroke = (<Series>dc.series).actualOutline;
			p2.strokeDashArray = (<Series>dc.series).dashArray;
			negativeBrush = (<Series>dc.series).resolveNegativeBrush();
		}
		f2._isFilled = true;
		f2._startPoint = <Point>{ $type: Point_$type, x: startingX2, y: 14 };
		f2._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 11, y: 14 }));
		f2._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: 16, y: 9 };
			return $ret;
		})()));
		f2._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX2 }));
		pg2.figures.add(f2);
		p2.data = pg2;
		if (negativeBrush != null) {
			p2._fill = negativeBrush;
		}
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		renderCont.renderPath(p);
		renderCont.renderPath(p2);
	}
	static financialIndicatorBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let s: Series = <Series>dc.series;
		if (dc.itemBrush != null) {
			dc.actualItemBrush = dc.itemBrush;
		} else {
			dc.actualItemBrush = s.actualBrush;
		}
		let p: Path = new Path();
		let pg: PathGeometry = new PathGeometry();
		let f: PathFigure = new PathFigure();
		let startingX = 0;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX = (<Series>dc.series).thickness / 2;
			p.strokeThickness = (<Series>dc.series).thickness;
			p._stroke = (<Series>dc.series).actualOutline;
			p.strokeDashArray = (<Series>dc.series).dashArray;
		}
		f._isFilled = true;
		f._startPoint = <Point>{ $type: Point_$type, x: startingX, y: 5 };
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: startingX, y: 14 }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX }));
		f._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 5, y: startingX }));
		f._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: startingX, y: 5 };
			return $ret;
		})()));
		pg.figures.add(f);
		p.data = pg;
		p._fill = dc.actualItemBrush;
		let p2: Path = new Path();
		let pg2: PathGeometry = new PathGeometry();
		let f2: PathFigure = new PathFigure();
		let startingX2 = 0;
		let negativeBrush: Brush = null;
		if (typeCast<Series>((<any>Series).$type, dc.series) !== null) {
			startingX2 = (<Series>dc.series).thickness / 2;
			p2.strokeThickness = (<Series>dc.series).thickness;
			p2._stroke = (<Series>dc.series).actualOutline;
			p2.strokeDashArray = (<Series>dc.series).dashArray;
			negativeBrush = (<Series>dc.series).resolveNegativeBrush();
		}
		f2._isFilled = true;
		f2._startPoint = <Point>{ $type: Point_$type, x: startingX2, y: 14 };
		f2._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 11, y: 14 }));
		f2._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.size = new Size(1, 5, 5);
			$ret.isLargeArc = false;
			$ret.point = <Point>{ $type: Point_$type, x: 16, y: 9 };
			return $ret;
		})()));
		f2._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: startingX2 }));
		pg2.figures.add(f2);
		p2.data = pg2;
		if (negativeBrush != null) {
			p2._fill = negativeBrush;
		}
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		renderCont.renderPath(p);
		renderCont.renderPath(p2);
	}
	static scatterPolygonBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		LegendTemplates.updateItemBrush(dc);
		let series: Series = typeCast<Series>((<any>Series).$type, dc.series) !== null ? <Series>dc.series : null;
		if (series != null) {
			dc.outline = series.actualOutline;
		}
		let rectGeo: PathGeometry = new PathGeometry();
		let rectFig: PathFigure = ((() => {
			let $ret = new PathFigure();
			$ret.isClosed = true;
			$ret.isFilled = true;
			return $ret;
		})());
		rectFig._startPoint = <Point>{ $type: Point_$type, x: 0, y: 0 };
		rectFig._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: 0 }));
		rectFig._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 16, y: 16 }));
		rectFig._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 0, y: 16 }));
		rectFig._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: 0, y: 0 }));
		rectGeo.figures.add(rectFig);
		let rectPath: Path = ((() => {
			let $ret = new Path();
			$ret.data = rectGeo;
			$ret.fill = dc.actualItemBrush;
			return $ret;
		})());
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		renderCont.renderPath(rectPath);
		renderCont.renderLine(((() => {
			let $ret = new Line();
			$ret.x1 = 8;
			$ret.x2 = 8;
			$ret.y1 = 0;
			$ret.y2 = 16;
			$ret.stroke = dc.outline;
			$ret.strokeThickness = 2;
			return $ret;
		})()));
	}
	private static readonly _line: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.lineBadgeTemplate;
		return $ret;
	})());
	private static readonly _rect: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.rectBadgeTemplate;
		return $ret;
	})());
	private static readonly _point: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.pointBadgeTemplate;
		return $ret;
	})());
	private static readonly _financial: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.financialBadgeTemplate;
		return $ret;
	})());
	private static readonly _financialIndicator: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.financialIndicatorBadgeTemplate;
		return $ret;
	})());
	private static readonly _markerless: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.markerlessRectBadgeTemplate;
		return $ret;
	})());
	private static readonly _markerlessLine: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.markerlessLineBadgeTemplate;
		return $ret;
	})());
	private static readonly _positiveNegative: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.positiveNegativeBadgeTemplate;
		return $ret;
	})());
	private static readonly _scatterPolygon: DataTemplate = ((() => {
		let $ret = new DataTemplate();
		$ret.measure = LegendTemplates.defaultLegendItemMeasure;
		$ret.render = LegendTemplates.scatterPolygonBadgeTemplate;
		return $ret;
	})());
	static resolveLegendItemBadgeTemplate(type: StandardLegendBadges): DataTemplate {
		switch (type) {
			case StandardLegendBadges.Line: return LegendTemplates._line;
			case StandardLegendBadges.Rect: return LegendTemplates._rect;
			case StandardLegendBadges.Point: return LegendTemplates._point;
			case StandardLegendBadges.Financial: return LegendTemplates._financial;
			case StandardLegendBadges.FinancialIndicator: return LegendTemplates._financialIndicator;
			case StandardLegendBadges.MarkerlessRect: return LegendTemplates._markerless;
			case StandardLegendBadges.MarkerlessLine: return LegendTemplates._markerlessLine;
			case StandardLegendBadges.PositiveNegative: return LegendTemplates._positiveNegative;
			case StandardLegendBadges.ScatterPolygon: return LegendTemplates._scatterPolygon;
		}

		return LegendTemplates._rect;
	}
}


