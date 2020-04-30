/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DomainChartDescriptionMetadata } from "./DomainChartDescriptionMetadata";

/**
 * @hidden 
 */
export class XYChartDescriptionMetadata extends Base {
	static $t: Type = markType(XYChartDescriptionMetadata, 'XYChartDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (XYChartDescriptionMetadata._metadata == null) {
			XYChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			XYChartDescriptionMetadata.fillMetadata(context, XYChartDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		DomainChartDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("XAxisFormatLabelRef", "(w:XAxisFormatLabel,wf:XAxisFormatLabel)MethodRef");
		metadata.item("YAxisFormatLabelRef", "(w:YAxisFormatLabel,wf:YAxisFormatLabel)MethodRef");
		metadata.item("XAxisLabelLeftMargin", "Number:double");
		metadata.item("XAxisLabelTopMargin", "Number:double");
		metadata.item("XAxisLabelRightMargin", "Number:double");
		metadata.item("XAxisLabelBottomMargin", "Number:double");
		metadata.item("YAxisLabelLeftMargin", "Number:double");
		metadata.item("YAxisLabelTopMargin", "Number:double");
		metadata.item("YAxisLabelRightMargin", "Number:double");
		metadata.item("YAxisLabelBottomMargin", "Number:double");
		metadata.item("XAxisLabelTextColor", "Brush");
		metadata.item("YAxisLabelTextColor", "Brush");
		metadata.item("XAxisTitleMargin", "Number:double");
		metadata.item("YAxisTitleMargin", "Number:double");
		metadata.item("XAxisTitleLeftMargin", "Number:double");
		metadata.item("YAxisTitleLeftMargin", "Number:double");
		metadata.item("XAxisTitleTopMargin", "Number:double");
		metadata.item("YAxisTitleTopMargin", "Number:double");
		metadata.item("XAxisTitleRightMargin", "Number:double");
		metadata.item("YAxisTitleRightMargin", "Number:double");
		metadata.item("XAxisTitleBottomMargin", "Number:double");
		metadata.item("YAxisTitleBottomMargin", "Number:double");
		metadata.item("XAxisTitleTextColor", "Brush");
		metadata.item("YAxisTitleTextColor", "Brush");
		metadata.item("XAxisLabelTextStyle", "String");
		metadata.item("YAxisLabelTextStyle", "String");
		metadata.item("XAxisTitleTextStyle", "String");
		metadata.item("YAxisTitleTextStyle", "String");
		metadata.item("XAxisLabelRef", "(w:XAxisLabel,wf:XAxisLabel)DataRef");
		metadata.item("YAxisLabelRef", "(w:YAxisLabel,wf:YAxisLabel)DataRef");
		metadata.item("XAxisMajorStroke", "Brush");
		metadata.item("YAxisMajorStroke", "Brush");
		metadata.item("XAxisMajorStrokeThickness", "Number:double");
		metadata.item("YAxisMajorStrokeThickness", "Number:double");
		metadata.item("XAxisMinorStrokeThickness", "Number:double");
		metadata.item("YAxisMinorStrokeThickness", "Number:double");
		metadata.item("XAxisStrip", "Brush");
		metadata.item("YAxisStrip", "Brush");
		metadata.item("XAxisStroke", "Brush");
		metadata.item("YAxisStroke", "Brush");
		metadata.item("XAxisStrokeThickness", "Number:double");
		metadata.item("YAxisStrokeThickness", "Number:double");
		metadata.item("XAxisTickLength", "Number:double");
		metadata.item("YAxisTickLength", "Number:double");
		metadata.item("XAxisTickStroke", "Brush");
		metadata.item("YAxisTickStroke", "Brush");
		metadata.item("XAxisTickStrokeThickness", "Number:double");
		metadata.item("YAxisTickStrokeThickness", "Number:double");
		metadata.item("XAxisTitle", "String");
		metadata.item("YAxisTitle", "String");
		metadata.item("XAxisMinorStroke", "Brush");
		metadata.item("YAxisMinorStroke", "Brush");
		metadata.item("XAxisLabelAngle", "Number:double");
		metadata.item("YAxisLabelAngle", "Number:double");
		metadata.item("XAxisExtent", "Number:double");
		metadata.item("YAxisExtent", "Number:double");
		metadata.item("XAxisTitleAngle", "Number:double");
		metadata.item("YAxisTitleAngle", "Number:double");
		metadata.item("XAxisInverted", "Boolean");
		metadata.item("YAxisInverted", "Boolean");
		metadata.item("XAxisTitleAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("YAxisTitleAlignment", "ExportedType:string:VerticalAlignment");
		metadata.item("XAxisLabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("YAxisLabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("XAxisLabelVerticalAlignment", "ExportedType:string:VerticalAlignment");
		metadata.item("YAxisLabelVerticalAlignment", "ExportedType:string:VerticalAlignment");
		metadata.item("XAxisLabelVisibility", "ExportedType:string:Visibility");
		metadata.item("YAxisLabelVisibility", "ExportedType:string:Visibility");
		metadata.item("YAxisLabelLocation", "ExportedType:string:AxisLabelsLocation");
	}
	static register(context: TypeDescriptionContext): void {
		XYChartDescriptionMetadata.ensureMetadata(context);
		context.register("XYChart", XYChartDescriptionMetadata._metadata);
	}
}


