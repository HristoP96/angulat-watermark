/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SparklineDescription } from "./SparklineDescription";

/**
 * @hidden 
 */
export class SparklineDescriptionMetadata extends Base {
	static $t: Type = markType(SparklineDescriptionMetadata, 'SparklineDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SparklineDescriptionMetadata._metadata == null) {
			SparklineDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SparklineDescriptionMetadata.fillMetadata(context, SparklineDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Brush", "Brush");
		metadata.item("NegativeBrush", "Brush");
		metadata.item("MarkerBrush", "Brush");
		metadata.item("NegativeMarkerBrush", "Brush");
		metadata.item("FirstMarkerBrush", "Brush");
		metadata.item("LastMarkerBrush", "Brush");
		metadata.item("HighMarkerBrush", "Brush");
		metadata.item("LowMarkerBrush", "Brush");
		metadata.item("TrendLineBrush", "Brush");
		metadata.item("HorizontalAxisBrush", "Brush");
		metadata.item("VerticalAxisBrush", "Brush");
		metadata.item("NormalRangeFill", "Brush");
		metadata.item("HorizontalAxisVisibility", "ExportedType:string:Visibility");
		metadata.item("VerticalAxisVisibility", "ExportedType:string:Visibility");
		metadata.item("MarkerVisibility", "ExportedType:string:Visibility");
		metadata.item("NegativeMarkerVisibility", "ExportedType:string:Visibility");
		metadata.item("FirstMarkerVisibility", "ExportedType:string:Visibility");
		metadata.item("LastMarkerVisibility", "ExportedType:string:Visibility");
		metadata.item("LowMarkerVisibility", "ExportedType:string:Visibility");
		metadata.item("HighMarkerVisibility", "ExportedType:string:Visibility");
		metadata.item("NormalRangeVisibility", "ExportedType:string:Visibility");
		metadata.item("DisplayNormalRangeInFront", "Boolean");
		metadata.item("MarkerSize", "Number:double");
		metadata.item("FirstMarkerSize", "Number:double");
		metadata.item("LastMarkerSize", "Number:double");
		metadata.item("HighMarkerSize", "Number:double");
		metadata.item("LowMarkerSize", "Number:double");
		metadata.item("NegativeMarkerSize", "Number:double");
		metadata.item("LineThickness", "Number:double");
		metadata.item("Minimum", "Number:double");
		metadata.item("Maximum", "Number:double");
		metadata.item("SataSourceRef", "(w:ItemsSource,wf:DataSource)DataRef::object");
		metadata.item("ValueMemberPath", "String");
		metadata.item("LabelMemberPath", "String");
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLinePeriod", "Number:int");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("NormalRangeMinimum", "Number:double");
		metadata.item("NormalRangeMaximum", "Number:double");
		metadata.item("DisplayType", "ExportedType:string:SparklineDisplayType");
		metadata.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
		metadata.item("VerticalAxisLabelRef", "(w:VerticalAxisLabel,wf:VerticalAxisLabel)DataRef");
		metadata.item("HorizontalAxisLabelRef", "(w:HorizontalAxisLabel,wf:HorizontalAxisLabel)DataRef");
		metadata.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		SparklineDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		SparklineDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Sparkline", () => new SparklineDescription());
		context.register("Sparkline", SparklineDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamSparkline");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
}


