/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ChartSeriesEventArgsDescriptionMetadata } from "./ChartSeriesEventArgsDescriptionMetadata";
import { DomainChartSeriesPointerEventArgsDescriptionMetadata } from "./DomainChartSeriesPointerEventArgsDescriptionMetadata";
import { CalloutStyleUpdatingEventArgsDescriptionMetadata } from "./CalloutStyleUpdatingEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class DomainChartDescriptionMetadata extends Base {
	static $t: Type = markType(DomainChartDescriptionMetadata, 'DomainChartDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DomainChartDescriptionMetadata._metadata == null) {
			DomainChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DomainChartDescriptionMetadata.fillMetadata(context, DomainChartDescriptionMetadata._metadata);
			ChartSeriesEventArgsDescriptionMetadata.register(context);
			DomainChartSeriesPointerEventArgsDescriptionMetadata.register(context);
			CalloutStyleUpdatingEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("TitleLeftMargin", "Number:double");
		metadata.item("TitleRightMargin", "Number:double");
		metadata.item("TitleTopMargin", "Number:double");
		metadata.item("TitleBottomMargin", "Number:double");
		metadata.item("SubtitleLeftMargin", "Number:double");
		metadata.item("SubtitleTopMargin", "Number:double");
		metadata.item("SubtitleRightMargin", "Number:double");
		metadata.item("SubtitleBottomMargin", "Number:double");
		metadata.item("SubtitleTextColor", "Brush");
		metadata.item("TitleTextColor", "Brush");
		metadata.item("LeftMargin", "Number:double");
		metadata.item("TopMargin", "Number:double");
		metadata.item("RightMargin", "Number:double");
		metadata.item("BottomMargin", "Number:double");
		metadata.item("TransitionDuration", "Number:int");
		metadata.item("TransitionEasingFunctionRef", "(w:TransitionEasingFunction,wf:TransitionEasingFunction)MethodRef");
		metadata.item("SubtitleTextStyle", "String");
		metadata.item("TitleTextStyle", "String");
		metadata.item("DataSourceRef", "(w:ItemsSource,wf:DataSource)DataRef::object");
		metadata.item("IncludedProperties", "Array:string");
		metadata.item("ExcludedProperties", "Array:string");
		metadata.item("Brushes", "BrushCollection:string");
		metadata.item("Outlines", "BrushCollection:string");
		metadata.item("LegendRef", "(w:Legend,wf:Legend)DataRef::object");
		metadata.item("IsHorizontalZoomEnabled", "Boolean");
		metadata.item("IsVerticalZoomEnabled", "Boolean");
		metadata.item("IsSeriesHighlightingEnabled", "Boolean");
		metadata.item("WindowRect", "Rect");
		metadata.item("ChartTitle", "(w:Title,wf:Title)String");
		metadata.item("Subtitle", "String");
		metadata.item("TitleAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("SubtitleAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
		metadata.item("Resolution", "Number:double");
		metadata.item("Thickness", "Number:double");
		metadata.item("MarkerTypes", "Collection:string:MarkerTypeCollection:MarkerType");
		metadata.item("MarkerBrushes", "BrushCollection:string");
		metadata.item("MarkerOutlines", "BrushCollection:string");
		metadata.item("MarkerMaxCount", "Number:int");
		metadata.item("AnimateSeriesWhenAxisRangeChanges", "Boolean");
		metadata.item("TrendLineBrushes", "BrushCollection:string");
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("AlignsGridLinesToPixels", "Boolean");
		metadata.item("TrendLinePeriod", "Number:int");
		metadata.item("ToolTipType", "ExportedType:string:ToolTipType");
		metadata.item("CrosshairsDisplayMode", "ExportedType:string:CrosshairsDisplayMode");
		metadata.item("CrosshairsSnapToData", "Boolean");
		metadata.item("CrosshairsAnnotationEnabled", "Boolean");
		metadata.item("FinalValueAnnotationsVisible", "Boolean");
		metadata.item("CalloutsVisible", "Boolean");
		metadata.item("CalloutStyleUpdatingEventEnabled", "Boolean");
		metadata.item("CalloutsXMemberPath", "String");
		metadata.item("CalloutsYMemberPath", "String");
		metadata.item("CalloutsLabelMemberPath", "String");
		metadata.item("CalloutsContentMemberPath", "String");
		metadata.item("SeriesAddedRef", "EventRef::seriesAdded");
		metadata.item("SeriesRemovedRef", "EventRef::seriesRemoved");
		metadata.item("SeriesPointerEnterRef", "EventRef::seriesPointerEnter");
		metadata.item("SeriesPointerLeaveRef", "EventRef::seriesPointerLeave");
		metadata.item("SeriesPointerMoveRef", "EventRef::seriesPointerMove");
		metadata.item("SeriesPointerDownRef", "EventRef::seriesPointerDown");
		metadata.item("SeriesPointerUpRef", "EventRef::seriesPointerUp");
		metadata.item("CalloutStyleUpdatingRef", "EventRef::calloutStyleUpdating");
	}
	static register(context: TypeDescriptionContext): void {
		DomainChartDescriptionMetadata.ensureMetadata(context);
		context.register("DomainChart", DomainChartDescriptionMetadata._metadata);
	}
}


