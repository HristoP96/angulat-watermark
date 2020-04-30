/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, Type, Point, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, EnumUtil, fromEnum, markType, getInstanceType } from "igniteui-core/type";
import { IAxisVisualDataManager, IAxisVisualDataManager_$type } from "./IAxisVisualDataManager";
import { Rect } from "igniteui-core/Rect";
import { Axis } from "./Axis";
import { TextBlock } from "igniteui-core/TextBlock";
import { VisualExportHelper } from "./VisualExportHelper";
import { ChartTitleVisualData } from "./ChartTitleVisualData";
import { SeriesViewer } from "./SeriesViewer";
import { AxisView } from "./AxisView";
import { FontInfo } from "igniteui-core/FontInfo";
import { Thickness } from "igniteui-core/Thickness";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { VerticalAlignment, VerticalAlignment_$type } from "igniteui-core/VerticalAlignment";
import { AxisTitlePosition, AxisTitlePosition_$type } from "./AxisTitlePosition";
import { RectData } from "igniteui-core/RectData";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { AxisLabelPanelBaseView } from "./AxisLabelPanelBaseView";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { TitleSettings } from "./TitleSettings";
import { AxisVisualData } from "./AxisVisualData";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { List$1 } from "igniteui-core/List$1";
import { LabelPosition } from "./LabelPosition";
import { RectangleVisualData } from "igniteui-core/RectangleVisualData";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { AxisLabelVisualData } from "./AxisLabelVisualData";
import { Panel } from "igniteui-core/Panel";
import { UIElement } from "igniteui-core/UIElement";
import { GeometryData } from "igniteui-core/GeometryData";
import { SeriesViewerView } from "./SeriesViewerView";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { Path } from "igniteui-core/Path";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { Geometry } from "igniteui-core/Geometry";
import { PointData } from "igniteui-core/PointData";
import { Size } from "igniteui-core/Size";
import { SizeData } from "igniteui-core/SizeData";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { FontUtil } from "igniteui-core/FontUtil";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class AxisVisualDataManager extends Base implements IAxisVisualDataManager {
	static $t: Type = markType(AxisVisualDataManager, 'AxisVisualDataManager', (<any>Base).$type, [IAxisVisualDataManager_$type]);
	private sanitizeTypeName(name: string): string {
		return name;
	}
	private exportTitleBounds(axis: Axis, textBlock: TextBlock): Rect {
		let bounds = VisualExportHelper.getRotatedBounds(textBlock);
		return bounds;
	}
	private exportTitleVisualData(axis: Axis, model: SeriesViewer, axisType: string, titlePresenter: TextBlock): ChartTitleVisualData {
		let titleData = new ChartTitleVisualData();
		let view = axis.view;
		let titleParentViewport = view.exportLabelsPanelViewport();
		titleData.viewport = RectData.fromRect(titleParentViewport);
		let textBounds = this.exportTitleBounds(axis, titlePresenter);
		titleData.textPlotArea = RectData.fromRect(textBounds);
		let isTitleParentVisible = titlePresenter._visibility == Visibility.Visible && titlePresenter.parent != null;
		let font: FontInfo = axis.labelPanel.view.getAxisTitleFont();
		let margin = view.exportTitleMargin(titlePresenter);
		let fontInfo = this.getFontInfoForText(axis, titlePresenter, font);
		let titleAppearance = AppearanceHelper.fromTextElement(titlePresenter, fontInfo);
		titleAppearance.marginLeft = margin.left;
		titleAppearance.marginRight = margin.right;
		titleAppearance.marginTop = margin.top;
		titleAppearance.marginBottom = margin.bottom;
		titleAppearance.fontStretch = "Normal";
		titleAppearance.textWrapping = "Wrap";
		titleAppearance.visibility = isTitleParentVisible;
		if (axis.titleSettings != null) {
			titleAppearance.horizontalAlignment = EnumUtil.getName<HorizontalAlignment>(HorizontalAlignment_$type, axis.titleSettings.horizontalAlignment);
			titleAppearance.verticalAlignment = EnumUtil.getName<VerticalAlignment>(VerticalAlignment_$type, axis.titleSettings.verticalAlignment);
			titleAppearance.textPosition = EnumUtil.getName<AxisTitlePosition>(AxisTitlePosition_$type, axis.titleSettings.position);
		} else {
			titleAppearance.horizontalAlignment = EnumUtil.getName<HorizontalAlignment>(HorizontalAlignment_$type, TitleSettings.horizontalAlignmentPropertyDefaultValue);
			titleAppearance.verticalAlignment = EnumUtil.getName<VerticalAlignment>(VerticalAlignment_$type, TitleSettings.verticalAlignmentPropertyDefaultValue);
			titleAppearance.textPosition = EnumUtil.getName<AxisTitlePosition>(AxisTitlePosition_$type, TitleSettings.positionPropertyDefaultValue);
		}
		titleData.appearance = titleAppearance;
		return titleData;
	}
	exportVisualData(axis: Axis): any {
		let avd = new AxisVisualData();
		avd.viewport = RectData.fromRect(axis.viewportRect);
		avd.labelsViewport = RectData.fromRect(axis.view.exportLabelsPanelViewport());
		avd.type = this.sanitizeTypeName(getInstanceType(axis).typeName);
		avd.name = axis.name;
		let axisLine = new PathVisualData(1, "axisLine", axis.view.axisLines);
		avd.axisLine = axisLine;
		avd.tickMarks = new PathVisualData(1, "tickMarks", axis.labelPanel.view.ticks);
		if (!axis.labelPanel.children.contains(axis.labelPanel.view.ticks)) {
			(<PathVisualData>avd.tickMarks).data.clear();
		}
		avd.minorLines = new PathVisualData(1, "minorLines", axis.view.minorLines);
		avd.majorLines = new PathVisualData(1, "majorLines", axis.view.majorLines);
		avd.strips = new PathVisualData(1, "strips", axis.view.strips);
		if (axis.title != null) {
			let titleData = this.exportTitleVisualData(axis, axis.seriesViewer, avd.type, axis.titleTextBlock);
			avd.title = titleData;
		} else {
			avd.title = null;
		}
		let font: FontInfo = axis.seriesViewer.getFontInfo();
		if (axis.labelSettings != null && axis.labelSettings.textStyle != null) {
			font = axis.labelSettings.getFontInfo(axis.seriesViewer.view.viewManager.container);
		}
		let currentDeltaX: number, currentDeltaY: number, prevDeltaX: number, prevDeltaY: number;
		let marks = (<GeometryGroup>axis.labelPanel.view.ticks.data).children;
		for (let i: number = 1; i < marks.count; i++) {
			let currentLine = (<LineGeometry>marks._inner[i]);
			let previousLIne = (<LineGeometry>marks._inner[i - 1]);
			currentDeltaX = currentLine.startPoint.x - currentLine.endPoint.x;
			currentDeltaY = currentLine.startPoint.y - currentLine.endPoint.y;
			prevDeltaX = previousLIne.startPoint.x - previousLIne.endPoint.x;
			prevDeltaY = previousLIne.startPoint.y - previousLIne.endPoint.y;
			if (1 == i) {
				avd.tickMarksLength = Math.sqrt(Math.pow(currentDeltaX, 2) + Math.pow(currentDeltaY, 2));
			}
		}
		let labelPositions: List$1<LabelPosition> = axis.labelPanel.labelPositions;
		let textBlocks: IEnumerable$1<any> = axis.labelPanel.view.getLabels();
		for (let i1 = 0; i1 < labelPositions.count; i1++) {
			let labelPosition = axis.labelPanel.labelPositions._inner[i1];
			let labelContext = axis.labelPanel.labelDataContext._inner[i1];
			let newLabelData = ((() => {
				let $ret = new AxisLabelVisualData();
				$ret.labelPosition = labelPosition.value;
				$ret.labelValue = labelContext;
				$ret.panelPosition = PointData.fromPoint(axis.view.exportLabelsPanelPosition());
				return $ret;
			})());
			let tbs: List$1<TextBlock> = new List$1<TextBlock>((<any>TextBlock).$type, 0);
			for (let tb of fromEnum<any>(textBlocks)) {
				tbs.add(<TextBlock>tb);
			}
			if (i1 < tbs.count) {
				let fontInfo = this.getFontInfoForText(axis, tbs._inner[i1], font);
				newLabelData.appearance = AppearanceHelper.fromTextElement(<FrameworkElement>tbs._inner[i1], fontInfo);
				newLabelData.position = PointData.fromPoint(axis.view.exportLabelPosition(tbs._inner[i1]));
				newLabelData.size = SizeData.fromSize(new Size(1, tbs._inner[i1].actualWidth, tbs._inner[i1].actualHeight));
			}
			avd.labels.add(newLabelData);
		}
		let annotationBackings: List$1<RectangleVisualData> = null;
		for (let i2 = 0; i2 < axis.annotationBackings.active.count; i2++) {
			if (annotationBackings == null) {
				annotationBackings = new List$1<RectangleVisualData>((<any>RectangleVisualData).$type, 0);
			}
			let rvd: RectangleVisualData = new RectangleVisualData(1, "annotationBacking_" + i2, axis.annotationBackings.item(i2));
			rvd.appearance.canvasLeft = axis.annotationBackings.item(i2).canvasLeft;
			rvd.appearance.canvasTop = axis.annotationBackings.item(i2).canvasTop;
			annotationBackings.add(rvd);
		}
		avd.annotationBackings = annotationBackings;
		return avd;
	}
	private getFontInfoForText(axis: Axis, text: TextBlock, font: FontInfo): FontInfo {
		return FontUtil.getFontInfo(axis.seriesViewer.view.viewManager.container, text, <FontInfo>font);
	}
}


