/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesViewerDescriptionMetadata } from "./SeriesViewerDescriptionMetadata";
import { DataChartDescription } from "./DataChartDescription";

/**
 * @hidden 
 */
export class DataChartDescriptionMetadata extends Base {
	static $t: Type = markType(DataChartDescriptionMetadata, 'DataChartDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DataChartDescriptionMetadata._metadata == null) {
			DataChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DataChartDescriptionMetadata.fillMetadata(context, DataChartDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesViewerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("IsSquare", "Boolean");
		metadata.item("WindowScaleHorizontal", "Number:double");
		metadata.item("WindowScaleVertical", "Number:double");
		metadata.item("ActualWindowScaleHorizontal", "Number:double");
		metadata.item("ActualWindowScaleVertical", "Number:double");
		metadata.item("IsHorizontalZoomEnabled", "Boolean");
		metadata.item("IsVerticalZoomEnabled", "Boolean");
		metadata.item("GridMode", "ExportedType:string:GridMode");
		metadata.item("AlignsGridLinesToPixels", "Boolean");
		metadata.item("Brushes", "BrushCollection:string");
		metadata.item("MarkerBrushes", "BrushCollection:string");
		metadata.item("Outlines", "BrushCollection:string");
		metadata.item("MarkerOutlines", "BrushCollection:string");
		metadata.item("DefaultAxisStroke", "Brush");
		metadata.item("DefaultAxisMajorStroke", "Brush");
		metadata.item("DefaultAxisMinorStroke", "Brush");
		metadata.item("PlotAreaMarginLeft", "Number:double");
		metadata.item("PlotAreaMarginTop", "Number:double");
		metadata.item("PlotAreaMarginRight", "Number:double");
		metadata.item("PlotAreaMarginBottom", "Number:double");
		DataChartDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		DataChartDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DataChart", () => new DataChartDescription());
		context.register("DataChart", DataChartDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamDataChart");
		metadata.item("Axes", "Collection:Axis:AxisCollection:Axis");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
	}
}


