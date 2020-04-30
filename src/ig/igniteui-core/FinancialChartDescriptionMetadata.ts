/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialChartCustomIndicatorArgsDescriptionMetadata } from "./FinancialChartCustomIndicatorArgsDescriptionMetadata";
import { XYChartDescriptionMetadata } from "./XYChartDescriptionMetadata";
import { FinancialChartDescription } from "./FinancialChartDescription";

/**
 * @hidden 
 */
export class FinancialChartDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialChartDescriptionMetadata, 'FinancialChartDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamFinancialChart");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("LegendRef", "(w:Legend)DataRef:String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialChartDescriptionMetadata._metadata == null) {
			FinancialChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialChartDescriptionMetadata.fillMetadata(context, FinancialChartDescriptionMetadata._metadata);
			FinancialChartCustomIndicatorArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		XYChartDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("LeftMargin", "Number:double");
		metadata.item("IsHorizontalZoomEnabled", "Boolean");
		metadata.item("ToolbarHeight", "Number:double");
		metadata.item("YAxisIsLogarithmic", "Boolean");
		metadata.item("YAxisLogarithmBase", "Number:int");
		metadata.item("YAxisInterval", "Number:double");
		metadata.item("YAxisMinimumValue", "Number:double");
		metadata.item("YAxisMaximumValue", "Number:double");
		metadata.item("YAxisMinorInterval", "Number:double");
		metadata.item("VolumeType", "ExportedType:string:FinancialChartVolumeType");
		metadata.item("XAxisMode", "ExportedType:string:FinancialChartXAxisMode");
		metadata.item("YAxisMode", "ExportedType:string:FinancialChartYAxisMode");
		metadata.item("IsToolbarVisible", "Boolean");
		metadata.item("ChartType", "ExportedType:string:FinancialChartType");
		metadata.item("YAxisLabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("IsWindowSyncedToVisibleRange", "Boolean");
		metadata.item("IndicatorTypes", "Collection:string:FinancialIndicatorTypeCollection:FinancialIndicatorType");
		metadata.item("OverlayTypes", "Collection:string:FinancialOverlayTypeCollection:FinancialOverlayType");
		metadata.item("YAxisAbbreviateLargeNumbers", "Boolean");
		metadata.item("Resolution", "Number:double");
		metadata.item("YAxisLabelLocation", "ExportedType:string:AxisLabelsLocation");
		metadata.item("ZoomSliderType", "ExportedType:string:FinancialChartZoomSliderType");
		metadata.item("NegativeBrushes", "BrushCollection:string");
		metadata.item("NegativeOutlines", "BrushCollection:string");
		metadata.item("OverlayBrushes", "BrushCollection:string");
		metadata.item("OverlayOutlines", "BrushCollection:string");
		metadata.item("VolumeOutlines", "BrushCollection:string");
		metadata.item("VolumeBrushes", "BrushCollection:string");
		metadata.item("IndicatorNegativeBrushes", "BrushCollection:string");
		metadata.item("IndicatorBrushes", "BrushCollection:string");
		metadata.item("VolumeThickness", "Number:double");
		metadata.item("OverlayThickness", "Number:double");
		metadata.item("IndicatorThickness", "Number:double");
		metadata.item("IndicatorDisplayTypes", "Collection:string:IndicatorDisplayTypeCollection:IndicatorDisplayType");
		metadata.item("IndicatorPeriod", "Number:int");
		metadata.item("IndicatorMultiplier", "Number:double");
		metadata.item("IndicatorSmoothingPeriod", "Number:int");
		metadata.item("IndicatorShortPeriod", "Number:int");
		metadata.item("IndicatorLongPeriod", "Number:int");
		metadata.item("IndicatorSignalPeriod", "Number:int");
		metadata.item("RangeSelectorOptions", "Collection:string:FinancialChartRangeSelectorOptionCollection:FinancialChartRangeSelectorOption");
		metadata.item("CustomIndicatorNames", "Collection:String:CustomIndicatorNameCollection:String");
		metadata.item("IsVerticalZoomEnabled", "Boolean");
		metadata.item("ZoomSliderXAxisMajorStroke", "Brush");
		metadata.item("ZoomSliderXAxisMajorStrokeThickness", "Number:double");
		metadata.item("IsLegendVisible", "Boolean");
		metadata.item("XAxisMinimumValue", "Date");
		metadata.item("XAxisMaximumValue", "Date");
		metadata.item("ApplyCustomIndicatorsRef", "EventRef::applyCustomIndicators");
		FinancialChartDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		FinancialChartDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinancialChart", () => new FinancialChartDescription());
		context.register("FinancialChart", FinancialChartDescriptionMetadata._metadata);
	}
}


