/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataContext } from "igniteui-core/DataContext";
import { ILegendTemplateProvider } from "igniteui-core/ILegendTemplateProvider";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { DataTemplatePassInfo } from "igniteui-core/DataTemplatePassInfo";
import { LegendItemHelper } from "igniteui-core/LegendItemHelper";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Brush } from "igniteui-core/Brush";
import { Rectangle } from "igniteui-core/Rectangle";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";

/**
 * @hidden 
 */
export class PieLegendTemplates extends Base {
	static $t: Type = markType(PieLegendTemplates, 'PieLegendTemplates');
	static pieLegendItemRender(info: DataTemplateRenderInfo): void {
		let cont: DataContext = <DataContext>info.data;
		let s: ILegendTemplateProvider = <ILegendTemplateProvider><any>cont.series;
		let template: DataTemplate = s.legendItemBadgeTemplate;
		let title: any = cont.legendLabel != null ? cont.legendLabel : cont.itemLabel;
		if (title == null) {
			title = "Pie Item";
		}
		LegendItemHelper.coreLegendItemRender(info.context, info.xPosition, info.yPosition, info.availableWidth, info.availableHeight, info.data, title.toString(), template, info.passInfo);
	}
	static doughnutLegendItemRender(info: DataTemplateRenderInfo): void {
		let cont: DataContext = <DataContext>info.data;
		let s: ILegendTemplateProvider = <ILegendTemplateProvider><any>cont.series;
		let template: DataTemplate = s.legendItemBadgeTemplate;
		let title: any = cont.legendLabel != null ? cont.legendLabel : cont.itemLabel;
		if (title == null) {
			title = "Doughnut Item";
		}
		LegendItemHelper.coreLegendItemRender(info.context, info.xPosition, info.yPosition, info.availableWidth, info.availableHeight, info.data, title.toString(), template, info.passInfo);
	}
	static defaultLegendItemMeasure(info: DataTemplateMeasureInfo): void {
	}
	static legendItemBadgeMeasure(info: DataTemplateMeasureInfo): void {
	}
	static pieBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		let pieChart: ILegendTemplateProvider = <ILegendTemplateProvider><any>dc.series;
		let itemBrush = dc.itemBrush;
		let itemOutline = dc.outline;
		let thickness = dc.thickness;
		let rect: Rectangle = new Rectangle();
		rect.width = info.availableWidth - (thickness * 2) - 2;
		rect.height = info.availableHeight - (thickness * 2);
		rect.canvasLeft = thickness + 1;
		rect.canvasTop = thickness;
		rect.strokeThickness = thickness;
		rect._fill = itemBrush;
		rect._stroke = itemOutline;
		renderCont.renderRectangle(rect);
	}
	static doughnutBadgeTemplate(info: DataTemplateRenderInfo): void {
		let dc: DataContext = <DataContext>info.data;
		let cont: any = info.context;
		let renderCont: RenderingContext = new RenderingContext(new CanvasViewRenderer(), cont);
		let itemBrush: Brush = dc.itemBrush;
		let itemOutline: Brush = dc.outline;
		let thickness = dc.thickness;
		let rect: Rectangle = new Rectangle();
		rect.width = info.availableWidth - (thickness * 2) - 2;
		rect.height = info.availableHeight - (thickness * 2);
		rect.canvasLeft = thickness + 1;
		rect.canvasTop = thickness;
		rect.strokeThickness = thickness;
		rect._fill = itemBrush;
		rect._stroke = itemOutline;
		renderCont.renderRectangle(rect);
	}
}


