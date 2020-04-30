/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, EnumUtil, Type, markType, PointUtil } from "igniteui-core/type";
import { IDataChartVisualDataManager, IDataChartVisualDataManager_$type } from "./IDataChartVisualDataManager";
import { XamDataChart } from "./XamDataChart";
import { ChartVisualData } from "./ChartVisualData";
import { List$1 } from "igniteui-core/List$1";
import { Axis } from "./Axis";
import { AxisVisualData } from "./AxisVisualData";
import { SeriesViewer } from "./SeriesViewer";
import { Series } from "./Series";
import { SeriesVisualData } from "./SeriesVisualData";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { SeriesViewerView } from "./SeriesViewerView";
import { RectData } from "igniteui-core/RectData";
import { Rect } from "igniteui-core/Rect";
import { TextBlock } from "igniteui-core/TextBlock";
import { VisualExportHelper } from "./VisualExportHelper";
import { FontInfo } from "igniteui-core/FontInfo";
import { Thickness } from "igniteui-core/Thickness";
import { ChartTitleVisualData } from "./ChartTitleVisualData";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { FontUtil } from "igniteui-core/FontUtil";

/**
 * @hidden 
 */
export class DataChartVisualDataManager extends Base implements IDataChartVisualDataManager {
	static $t: Type = markType(DataChartVisualDataManager, 'DataChartVisualDataManager', (<any>Base).$type, [IDataChartVisualDataManager_$type]);
	exportVisualData(xamDataChart: XamDataChart): any {
		let cvd = new ChartVisualData();
		for (let i = 0; i < xamDataChart.axes.count; i++) {
			let avd = xamDataChart.axes._inner[i].exportVisualData();
			cvd.axes.add1(avd);
		}
		for (let i1 = 0; i1 < xamDataChart.series.count; i1++) {
			let svd = xamDataChart.series._inner[i1].exportVisualData();
			cvd.series.add1(svd);
		}
		cvd.name = xamDataChart.name;
		this.exportChartTitleData(xamDataChart, cvd);
		this.exportChartViewData(xamDataChart, cvd);
		return cvd;
	}
	private exportChartViewData(xamDataChart: XamDataChart, cvd: ChartVisualData): void {
		let view = xamDataChart.view;
		cvd.width = view.containerWidth;
		cvd.height = view.containerHeight;
		cvd.contentArea = RectData.fromRect(view.getContentArea());
		cvd.centralArea = new RectData(view.actualLeftMargin, 0, view.containerWidth - (view.actualLeftMargin + view.actualRightMargin), view.containerHeight - (view.actualTopMargin + view.actualBottomMargin));
		cvd.plotArea = RectData.fromRect(xamDataChart.viewportRect);
	}
	exportTitleBounds(textBlock: TextBlock, model: SeriesViewer): Rect {
		let bounds = VisualExportHelper.getRotatedBounds(textBlock);
		return bounds;
	}
	private exportChartTitleData(xamDataChart: XamDataChart, visualData: ChartVisualData): void {
		let view = xamDataChart.view;
		let font: FontInfo = null;
		visualData.title = null;
		visualData.subtitle = null;
		let titleMargin = view.getTitleMargin();
		let titleContainerHeight = 0;
		let titleHeight = 0;
		if (view.titleText != null) {
			font = view.getTitleFont();
			let fontInfo = this.getFontInfoForText(view, view.titleText, font);
			let titleOrigin = <Point>{ $type: Point_$type, x: 0, y: 0 };
			titleHeight = view.titleText.actualHeight + titleMargin.bottom + titleMargin.top;
			let titleData = new ChartTitleVisualData();
			let contentArea = view.getContentArea();
			titleData.viewport = new RectData(contentArea.left, contentArea.top, contentArea.width, titleHeight);
			titleData.textPlotArea = RectData.fromRect(this.exportTitleBounds(view.titleText, xamDataChart));
			titleData.textPlotArea = new RectData(view.titleText.canvasLeft, view.titleText.canvasTop, view.titleText.actualWidth, view.titleText.actualHeight);
			titleContainerHeight = titleData.height;
			titleData.appearance = AppearanceHelper.fromTextElement(view.titleText, fontInfo);
			let margin = view.getTitleMargin();
			titleData.appearance.marginTop = margin.top;
			titleData.appearance.marginLeft = margin.left;
			titleData.appearance.marginRight = margin.right;
			titleData.appearance.marginBottom = margin.bottom;
			let alignment = view.getTitleAlignment();
			titleData.appearance.horizontalAlignment = EnumUtil.getName<HorizontalAlignment>(HorizontalAlignment_$type, alignment);
			visualData.title = titleData;
		}
		if (view.subTitleText != null) {
			font = view.getSubtitleFont();
			let fontInfo1 = this.getFontInfoForText(view, view.subTitleText, font);
			let subTitleOrigin = <Point>{ $type: Point_$type, x: 0, y: titleContainerHeight };
			let subTitleMargin = view.getSubtitleMargin();
			let subTitleHeight = view.subTitleText.actualHeight + subTitleMargin.bottom + subTitleMargin.top;
			let subTitleData = new ChartTitleVisualData();
			let contentArea1 = view.getContentArea();
			subTitleData.viewport = new RectData(contentArea1.left, contentArea1.top + titleHeight, contentArea1.width, subTitleHeight);
			subTitleData.textPlotArea = RectData.fromRect(this.exportTitleBounds(view.subTitleText, xamDataChart));
			subTitleData.appearance = AppearanceHelper.fromTextElement(view.subTitleText, fontInfo1);
			let margin1 = view.getSubtitleMargin();
			subTitleData.appearance.marginTop = margin1.top;
			subTitleData.appearance.marginLeft = margin1.left;
			subTitleData.appearance.marginRight = margin1.right;
			subTitleData.appearance.marginBottom = margin1.bottom;
			let alignment1 = view.getSubtitleAlignment();
			subTitleData.appearance.horizontalAlignment = EnumUtil.getName<HorizontalAlignment>(HorizontalAlignment_$type, alignment1);
			visualData.subtitle = subTitleData;
		}
	}
	private getFontInfoForText(view: SeriesViewerView, text: TextBlock, font: FontInfo): FontInfo {
		return FontUtil.getFontInfo(view.viewManager.container, text, font);
	}
}


