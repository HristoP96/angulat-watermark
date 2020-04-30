/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { XYChartDescriptionMetadata } from "./XYChartDescriptionMetadata";
import { CategoryChartDescription } from "./CategoryChartDescription";

/**
 * @hidden 
 */
export class CategoryChartDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryChartDescriptionMetadata, 'CategoryChartDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamCategoryChart");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("LegendRef", "(w:Legend)DataRef:String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryChartDescriptionMetadata._metadata == null) {
			CategoryChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryChartDescriptionMetadata.fillMetadata(context, CategoryChartDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		XYChartDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TransitionInDuration", "Number:int");
		metadata.item("TransitionInEasingFunctionRef", "(w:TransitionInEasingFunction,wf:TransitionInEasingFunction)MethodRef");
		metadata.item("ChartType", "ExportedType:string:CategoryChartType");
		metadata.item("MarkerCollisionAvoidance", "ExportedType:string:CategorySeriesMarkerCollisionAvoidance");
		metadata.item("IsTransitionInEnabled", "Boolean");
		metadata.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
		metadata.item("TransitionInSpeedType", "ExportedType:string:TransitionInSpeedType");
		metadata.item("XAxisInterval", "Number:double");
		metadata.item("XAxisMinorInterval", "Number:double");
		metadata.item("XAxisGap", "Number:double");
		metadata.item("XAxisOverlap", "Number:double");
		metadata.item("YAxisInterval", "Number:double");
		metadata.item("YAxisIsLogarithmic", "Boolean");
		metadata.item("YAxisLogarithmBase", "Number:int");
		metadata.item("YAxisMinimumValue", "Number:double");
		metadata.item("YAxisMaximumValue", "Number:double");
		metadata.item("YAxisMinorInterval", "Number:double");
		metadata.item("NegativeBrushes", "BrushCollection:string");
		metadata.item("NegativeOutlines", "BrushCollection:string");
		metadata.item("YAxisAbbreviateLargeNumbers", "Boolean");
		metadata.item("IsCategoryHighlightingEnabled", "Boolean");
		metadata.item("IsItemHighlightingEnabled", "Boolean");
		CategoryChartDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		CategoryChartDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryChart", () => new CategoryChartDescription());
		context.register("CategoryChart", CategoryChartDescriptionMetadata._metadata);
	}
}


