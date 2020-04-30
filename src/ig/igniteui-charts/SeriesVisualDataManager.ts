/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, fromEnum, typeCast, markType, getInstanceType } from "igniteui-core/type";
import { ISeriesVisualDataManager, ISeriesVisualDataManager_$type } from "./ISeriesVisualDataManager";
import { StackedSeriesVisualData } from "./StackedSeriesVisualData";
import { SeriesVisualData } from "./SeriesVisualData";
import { List$1 } from "igniteui-core/List$1";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { MarkerVisualData } from "./MarkerVisualData";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { RectData } from "igniteui-core/RectData";
import { MarkerSeries } from "./MarkerSeries";
import { Marker } from "./Marker";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { DataContext } from "igniteui-core/DataContext";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Color } from "igniteui-core/Color";
import { ColorData } from "igniteui-core/ColorData";
import { ContentControl } from "igniteui-core/ContentControl";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { SeriesViewer } from "./SeriesViewer";
import { Path } from "igniteui-core/Path";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { Polygon } from "igniteui-core/Polygon";
import { PolygonVisualData } from "igniteui-core/PolygonVisualData";
import { Polyline } from "igniteui-core/Polyline";
import { PolyLineVisualData } from "igniteui-core/PolyLineVisualData";
import { Rectangle } from "igniteui-core/Rectangle";
import { RectangleVisualData } from "igniteui-core/RectangleVisualData";
import { PointerTooltipVisualData } from "./PointerTooltipVisualData";
import { TextBlock } from "igniteui-core/TextBlock";
import { FontInfo } from "igniteui-core/FontInfo";
import { Line } from "igniteui-core/Line";
import { CalloutVisualData } from "./CalloutVisualData";
import { LineVisualData } from "igniteui-core/LineVisualData";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class SeriesVisualDataManager extends Base implements ISeriesVisualDataManager {
	static $t: Type = markType(SeriesVisualDataManager, 'SeriesVisualDataManager', (<any>Base).$type, [ISeriesVisualDataManager_$type]);
	addSubSeriesVisualData(visualData: any, fragmentVisualData: any): void {
		let svd = <StackedSeriesVisualData>visualData;
		let fvd = <SeriesVisualData>fragmentVisualData;
		svd.fragmentSeries.add(fvd);
	}
	copyVisualData(target: any, source: any): void {
		let targetVisualData = <SeriesVisualData>target;
		let sourceVisualData = <SeriesVisualData>source;
		for (let shape of fromEnum<PrimitiveVisualData>(sourceVisualData.shapes)) {
			targetVisualData.shapes.add(shape);
		}
		for (let marker of fromEnum<MarkerVisualData>(sourceVisualData.markerShapes)) {
			targetVisualData.markerShapes.add(marker);
		}
		targetVisualData.pixels = sourceVisualData.pixels;
		targetVisualData.pixelWidth = sourceVisualData.pixelWidth;
	}
	createFragmentVisualData(series: Series, viewport: Rect, typeName: string, name: string): any {
		let fragmentVisualData: SeriesVisualData = new SeriesVisualData();
		fragmentVisualData.viewport = RectData.fromRect(viewport);
		fragmentVisualData.type = typeName;
		fragmentVisualData.name = name;
		return fragmentVisualData;
	}
	exportMarkerVisualData(series: MarkerSeries, visualData: any): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		series.markerView.doToAllMarkers((m: Marker) => {
			let mvd = this.getMarkerVisualData(series, m, series.cachedActualMarkerTemplate);
			svd.markerShapes.add(typeCast<MarkerVisualData>((<any>MarkerVisualData).$type, mvd));
		});
	}
	getMarkerVisualData(series: Series, m: Marker, markerTemplate: DataTemplate): any {
		let mvd = new MarkerVisualData();
		let appearance = new PrimitiveAppearanceData();
		mvd.x = m.canvasLeft;
		mvd.y = m.canvasTop;
		mvd.bounds = new RectData(m.canvasLeft - (m.actualWidth / 2), m.canvasTop - (m.actualHeight / 2), m.actualWidth, m.actualHeight);
		appearance.fill = ColorData.fromColor(Color.fromArgb(0, 0, 0, 0));
		appearance.stroke = ColorData.fromColor(Color.fromArgb(0, 0, 0, 0));
		mvd.index = -1;
		mvd.contentTemplate = m.contentTemplate;
		if (m.content != null && typeCast<DataContext>((<any>DataContext).$type, m.content) !== null && m._visibility == Visibility.Visible) {
			let dataContext = <DataContext>m.content;
			appearance.fill = AppearanceHelper.fromBrush(dataContext.actualItemBrush);
			appearance.fillExtended = AppearanceHelper.fromBrushExtended(dataContext.actualItemBrush);
			appearance.stroke = AppearanceHelper.fromBrush(dataContext.outline);
			appearance.strokeExtended = AppearanceHelper.fromBrushExtended(dataContext.outline);
			appearance.strokeThickness = series.thickness;
			if (dataContext.item != null) {
				mvd.index = series.fastItemsSource.indexOf(dataContext.item);
			}
		}
		appearance.isVisible = m._visibility == Visibility.Visible;
		mvd.isVisible = m._visibility == Visibility.Visible;
		mvd.markerAppearance = appearance;
		mvd.markerType = this.getMarkerType(series, markerTemplate);
		return mvd;
	}
	getMarkerType(series: Series, markerTemplate: DataTemplate): string {
		if (markerTemplate == series.seriesViewer.circleMarkerTemplate) {
			return "Circle";
		} else if (markerTemplate == series.seriesViewer.diamondMarkerTemplate) {
			return "Diamond";
		} else if (markerTemplate == series.seriesViewer.hexagonMarkerTemplate) {
			return "Hexagon";
		} else if (markerTemplate == series.seriesViewer.hexagramMarkerTemplate) {
			return "Hexagram";
		} else if (markerTemplate == series.seriesViewer.pentagonMarkerTemplate) {
			return "Pentagon";
		} else if (markerTemplate == series.seriesViewer.pentagramMarkerTemplate) {
			return "Pentagram";
		} else if (markerTemplate == series.seriesViewer.pyramidMarkerTemplate) {
			return "Pyramid";
		} else if (markerTemplate == series.seriesViewer.squareMarkerTemplate) {
			return "Square";
		} else if (markerTemplate == series.seriesViewer.tetragramMarkerTemplate) {
			return "Tetragram";
		} else if (markerTemplate == series.seriesViewer.triangleMarkerTemplate) {
			return "Triangle";
		} else {
			return "None";
		}
	}
	exportMarkerVisualDataFromMarker(series: Series, visualData: any, m: ContentControl): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		let mvd: MarkerVisualData = new MarkerVisualData();
		let appearance: PrimitiveAppearanceData = new PrimitiveAppearanceData();
		mvd.x = m.canvasLeft;
		mvd.y = m.canvasTop;
		mvd.bounds = new RectData(m.canvasLeft - (m.actualWidth / 2), m.canvasTop - (m.actualHeight / 2), m.actualWidth, m.actualHeight);
		mvd.index = -1;
		mvd.contentTemplate = m.contentTemplate;
		if (typeCast<DataContext>((<any>DataContext).$type, m.content) !== null) {
			let dataContext = <DataContext>m.content;
			appearance.fill = AppearanceHelper.fromBrush(dataContext.actualItemBrush);
			appearance.stroke = AppearanceHelper.fromBrush(dataContext.outline);
		}
		mvd.isVisible = m._visibility == Visibility.Visible;
		mvd.markerAppearance = appearance;
		if (m.contentTemplate == series.seriesViewer.circleMarkerTemplate) {
			mvd.markerType = "Circle";
		} else if (m.contentTemplate == series.seriesViewer.diamondMarkerTemplate) {
			mvd.markerType = "Diamond";
		} else if (m.contentTemplate == series.seriesViewer.hexagonMarkerTemplate) {
			mvd.markerType = "Hexagon";
		} else if (m.contentTemplate == series.seriesViewer.hexagramMarkerTemplate) {
			mvd.markerType = "Hexagram";
		} else if (m.contentTemplate == series.seriesViewer.pentagonMarkerTemplate) {
			mvd.markerType = "Pentagon";
		} else if (m.contentTemplate == series.seriesViewer.pentagramMarkerTemplate) {
			mvd.markerType = "Pentagram";
		} else if (m.contentTemplate == series.seriesViewer.pyramidMarkerTemplate) {
			mvd.markerType = "Pyramid";
		} else if (m.contentTemplate == series.seriesViewer.squareMarkerTemplate) {
			mvd.markerType = "Square";
		} else if (m.contentTemplate == series.seriesViewer.tetragramMarkerTemplate) {
			mvd.markerType = "Tetragram";
		} else if (m.contentTemplate == series.seriesViewer.triangleMarkerTemplate) {
			mvd.markerType = "Triangle";
		} else {
			mvd.markerType = "None";
		}
		svd.markerShapes.add(mvd);
	}
	exportPathData(visualData: any, path: Path, name: string, tags: string[]): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		let lineData = new PathVisualData(1, name, path);
		if (tags != null) {
			for (let i = 0; i < tags.length; i++) {
				lineData.tags.add(tags[i]);
			}
		}
		svd.shapes.add(lineData);
	}
	exportPolygonData(visualData: any, polygon: Polygon, name: string, tags: string[]): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		let lineData = new PolygonVisualData(1, name, polygon);
		if (tags != null) {
			for (let i = 0; i < tags.length; i++) {
				lineData.tags.add(tags[i]);
			}
		}
		svd.shapes.add(lineData);
	}
	exportPolylineData(visualData: any, polyline: Polyline, name: string, tags: string[]): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		let lineData = new PolyLineVisualData(1, name, polyline);
		if (tags != null) {
			for (let i = 0; i < tags.length; i++) {
				lineData.tags.add(tags[i]);
			}
		}
		svd.shapes.add(lineData);
	}
	exportRectangleData(visualData: any, rectangle: Rectangle, name: string, tags: string[]): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		let rectData = new RectangleVisualData(1, name, rectangle);
		if (tags != null) {
			for (let i = 0; i < tags.length; i++) {
				rectData.tags.add(tags[i]);
			}
		}
		svd.shapes.add(rectData);
	}
	exportStackedVisualData(series: Series, viewport: Rect): any {
		let svd: StackedSeriesVisualData = new StackedSeriesVisualData();
		svd.viewport = RectData.fromRect(viewport);
		svd.type = getInstanceType(series).typeName;
		svd.name = series.name;
		return svd;
	}
	exportTrendlineData(series: Series, visualData: any, trendPolyline: Polyline): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		let trendShape = new PolyLineVisualData(1, "trendLine", trendPolyline);
		trendShape.tags.add("Trend");
		svd.shapes.add(trendShape);
	}
	exportVisualData(series: Series, viewport: Rect): any {
		let svd: SeriesVisualData = new SeriesVisualData();
		svd.viewport = RectData.fromRect(viewport);
		svd.type = this.sanitizeTypeName(getInstanceType(series).typeName);
		svd.name = series.name;
		svd.opacity = series._opacity;
		return svd;
	}
	exportSeriesPixelsData(visualData: any, pixels: number[], imageWidth: number, imageHeight: number): void {
		let svd: SeriesVisualData = <SeriesVisualData>visualData;
		svd.pixels = pixels;
		svd.pixelWidth = imageWidth;
		svd.pixelHeight = imageHeight;
	}
	private sanitizeTypeName(name: string): string {
		return name;
	}
	addPointerTooltipData(visualData: any, tooltipVisualData: any, offsetX: number, offsetY: number, categoryNames: List$1<string>): void {
		if (tooltipVisualData == null) {
			return;
		}
		let svd = <SeriesVisualData>visualData;
		let vd = <PointerTooltipVisualData>tooltipVisualData;
		vd.offsetX = offsetX;
		vd.offsetY = offsetY;
		vd.categoryNames = categoryNames;
		svd.pointerTooltips.add(vd);
	}
	exportPointerTooltipData(pointerShape: Polygon, pointerOutlineShape: Polyline, lastRectangle: Rectangle, viewport: Rect): any {
		let vd = new PointerTooltipVisualData();
		vd.pointerFillShape = new PolygonVisualData(1, "fillShape", pointerShape);
		vd.pointerOutlineShape = new PolyLineVisualData(1, "outlineShape", pointerOutlineShape);
		vd.boxShape = new RectangleVisualData(1, "boxShape", lastRectangle);
		vd.viewport = RectData.fromRect(viewport);
		return vd;
	}
	exportCalloutData(left: number, top: number, marginLeft: number, marginTop: number, svd: any, calloutBackgrond: Rectangle, calloutText: TextBlock, font: FontInfo, calloutLeaderLine: Line, name: string, tags: string[]): void {
		let cd = new CalloutVisualData();
		cd.left = left;
		cd.top = top;
		cd.marginLeft = marginLeft;
		cd.marginTop = marginTop;
		cd.background = new RectangleVisualData(1, "calloutBackground", calloutBackgrond);
		cd.text = AppearanceHelper.fromTextElement(calloutText, font);
		cd.line = new LineVisualData(1, "calloutLeaderLine", calloutLeaderLine);
		(<SeriesVisualData>svd).calloutShapes.add(cd);
	}
}


