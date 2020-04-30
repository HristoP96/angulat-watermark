/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { ChartCursorEventArgsDescription } from "./ChartCursorEventArgsDescription";
import { ChartMouseEventArgsDescription } from "./ChartMouseEventArgsDescription";
import { DataChartMouseButtonEventArgsDescription } from "./DataChartMouseButtonEventArgsDescription";
import { RectChangedEventArgsDescriptionMetadata } from "./RectChangedEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class ChartCursorEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(ChartCursorEventArgsDescriptionMetadata, 'ChartCursorEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ChartCursorEventArgsDescriptionMetadata._metadata == null) {
			ChartCursorEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ChartCursorEventArgsDescriptionMetadata.fillMetadata(context, ChartCursorEventArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
			SeriesViewerDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("Series", "ExportedType:Series");
		metadata.item("SeriesViewer", "ExportedType:SeriesViewer");
	}
	static register(context: TypeDescriptionContext): void {
		ChartCursorEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ChartCursorEventArgs", () => new ChartCursorEventArgsDescription());
		context.register("ChartCursorEventArgs", ChartCursorEventArgsDescriptionMetadata._metadata);
	}
}

/**
 * @hidden 
 */
export class ChartMouseEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(ChartMouseEventArgsDescriptionMetadata, 'ChartMouseEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ChartMouseEventArgsDescriptionMetadata._metadata == null) {
			ChartMouseEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ChartMouseEventArgsDescriptionMetadata.fillMetadata(context, ChartMouseEventArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
			SeriesViewerDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("Series", "ExportedType:Series");
		metadata.item("Chart", "ExportedType:SeriesViewer");
	}
	static register(context: TypeDescriptionContext): void {
		ChartMouseEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ChartMouseEventArgs", () => new ChartMouseEventArgsDescription());
		context.register("ChartMouseEventArgs", ChartMouseEventArgsDescriptionMetadata._metadata);
	}
}

/**
 * @hidden 
 */
export class DataChartMouseButtonEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(DataChartMouseButtonEventArgsDescriptionMetadata, 'DataChartMouseButtonEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DataChartMouseButtonEventArgsDescriptionMetadata._metadata == null) {
			DataChartMouseButtonEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DataChartMouseButtonEventArgsDescriptionMetadata.fillMetadata(context, DataChartMouseButtonEventArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
			SeriesViewerDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Handled", "Boolean");
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("Series", "ExportedType:Series");
		metadata.item("Chart", "ExportedType:SeriesViewer");
	}
	static register(context: TypeDescriptionContext): void {
		DataChartMouseButtonEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DataChartMouseButtonEventArgs", () => new DataChartMouseButtonEventArgsDescription());
		context.register("DataChartMouseButtonEventArgs", DataChartMouseButtonEventArgsDescriptionMetadata._metadata);
	}
}

/**
 * @hidden 
 */
export class SeriesViewerDescriptionMetadata extends Base {
	static $t: Type = markType(SeriesViewerDescriptionMetadata, 'SeriesViewerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SeriesViewerDescriptionMetadata._metadata == null) {
			SeriesViewerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SeriesViewerDescriptionMetadata.fillMetadata(context, SeriesViewerDescriptionMetadata._metadata);
			ChartCursorEventArgsDescriptionMetadata.register(context);
			DataChartMouseButtonEventArgsDescriptionMetadata.register(context);
			ChartMouseEventArgsDescriptionMetadata.register(context);
			RectChangedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("CrosshairPoint", "Point");
		metadata.item("AnimateSeriesWhenAxisRangeChanges", "Boolean");
		metadata.item("EffectiveViewport", "Rect");
		metadata.item("WindowRect", "Rect");
		metadata.item("UseTiledZooming", "Boolean");
		metadata.item("PreferHigherResolutionTiles", "Boolean");
		metadata.item("ZoomTileCacheSize", "Number:int");
		metadata.item("HighlightingTransitionDuration", "Number:int");
		metadata.item("IsPagePanningAllowed", "Boolean");
		metadata.item("ContentHitTestMode", "ExportedType:string:ChartHitTestMode");
		metadata.item("ActualContentHitTestMode", "ExportedType:string:ChartHitTestMode");
		metadata.item("IsSurfaceInteractionDisabled", "Boolean");
		metadata.item("WindowResponse", "ExportedType:string:WindowResponse");
		metadata.item("WindowRectMinWidth", "Number:double");
		metadata.item("CrosshairVisibility", "ExportedType:string:Visibility");
		metadata.item("PlotAreaBackground", "Brush");
		metadata.item("DefaultInteraction", "ExportedType:string:InteractionState");
		metadata.item("RightButtonDefaultInteraction", "ExportedType:string:InteractionState");
		metadata.item("DragModifier", "ExportedType:string:ModifierKeys");
		metadata.item("PanModifier", "ExportedType:string:ModifierKeys");
		metadata.item("PreviewRect", "Rect");
		metadata.item("WindowPositionHorizontal", "Number:double");
		metadata.item("WindowPositionVertical", "Number:double");
		metadata.item("ChartTitle", "(w:Title,wf:Title)String");
		metadata.item("TitleHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("SubtitleHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("TitleTextStyle", "String");
		metadata.item("SubtitleTextStyle", "String");
		metadata.item("TitleTextColor", "Brush");
		metadata.item("SubtitleTextColor", "Brush");
		metadata.item("TitleTopMargin", "Number:double");
		metadata.item("TitleLeftMargin", "Number:double");
		metadata.item("TitleRightMargin", "Number:double");
		metadata.item("TitleBottomMargin", "Number:double");
		metadata.item("SubtitleTopMargin", "Number:double");
		metadata.item("SubtitleLeftMargin", "Number:double");
		metadata.item("SubtitleRightMargin", "Number:double");
		metadata.item("SubtitleBottomMargin", "Number:double");
		metadata.item("Subtitle", "String");
		metadata.item("TopMargin", "Number:double");
		metadata.item("LeftMargin", "Number:double");
		metadata.item("RightMargin", "Number:double");
		metadata.item("BottomMargin", "Number:double");
		metadata.item("AutoMarginWidth", "Number:double");
		metadata.item("AutoMarginHeight", "Number:double");
		metadata.item("IsAntiAliasingEnabledDuringInteraction", "Boolean");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("InteractionPixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("ActualInteractionPixelScalingRatio", "Number:double");
		metadata.item("ActualWindowRect", "Rect");
		metadata.item("ActualWindowPositionHorizontal", "Number:double");
		metadata.item("ActualWindowPositionVertical", "Number:double");
		metadata.item("SeriesCursorMouseMoveRef", "EventRef::seriesCursorMouseMove");
		metadata.item("SeriesMouseLeftButtonDownRef", "EventRef::seriesMouseLeftButtonDown");
		metadata.item("SeriesMouseLeftButtonUpRef", "EventRef::seriesMouseLeftButtonUp");
		metadata.item("SeriesMouseMoveRef", "EventRef::seriesMouseMove");
		metadata.item("SeriesMouseEnterRef", "EventRef::seriesMouseEnter");
		metadata.item("SeriesMouseLeaveRef", "EventRef::seriesMouseLeave");
		metadata.item("WindowRectChangedRef", "EventRef::windowRectChanged");
		metadata.item("SizeChangedRef", "EventRef::sizeChanged");
		metadata.item("ActualWindowRectChangedRef", "EventRef::actualWindowRectChanged");
		metadata.item("GridAreaRectChangedRef", "EventRef::gridAreaRectChanged");
		SeriesViewerDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		SeriesViewerDescriptionMetadata.ensureMetadata(context);
		context.register("SeriesViewer", SeriesViewerDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Series", "Collection:Series:SeriesCollection:Series");
		metadata.item("LegendRef", "(w:Legend)DataRef:String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
		metadata.item("TitleFontFamily", "(w:TitleFontFamily/FontFamilyTransform,wf:TitleFontFamily,web:TitleTextStyle/FontFamilyTransform)String");
		metadata.item("TitleFontSize", "(w:TitleFontSize,wf:TitleFontSize,web:TitleTextStyle/FontSizeTransform)Number:double");
		metadata.item("TitleFontStyle", "(w:TitleFontStyle/FontStyleTransform,wf:TitleTextStyle/FontStyleTransform,web:TitleTextStyle/FontStyleTransform)String");
		metadata.item("TitleFontWeight", "(w:TitleFontWeight/FontWeightTransform,wf:TitleTextStyle/FontWeightTransform,web:TitleTextStyle/FontWeightTransform)String");
		metadata.item("SubtitleFontFamily", "(w:SubtitleFontFamily/FontFamilyTransform,wf:SubtitleFontFamily,web:SubtitleTextStyle/FontFamilyTransform)String");
		metadata.item("SubtitleFontSize", "(w:SubtitleFontSize,wf:SubtitleFontSize,web:SubtitleTextStyle/FontSizeTransform)Number:double");
		metadata.item("SubtitleFontStyle", "(w:SubtitleFontStyle/FontStyleTransform,wf:SubtitleTextStyle/FontStyleTransform,web:SubtitleTextStyle/FontStyleTransform)String");
		metadata.item("SubtitleFontWeight", "(w:SubtitleFontWeight/FontWeightTransform,wf:SubtitleTextStyle/FontWeightTransform,web:SubtitleTextStyle/FontWeightTransform)String");
	}
}


