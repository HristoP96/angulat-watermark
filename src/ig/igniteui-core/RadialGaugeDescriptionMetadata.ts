/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatRadialGaugeLabelEventArgsDescriptionMetadata } from "./FormatRadialGaugeLabelEventArgsDescriptionMetadata";
import { AlignRadialGaugeLabelEventArgsDescriptionMetadata } from "./AlignRadialGaugeLabelEventArgsDescriptionMetadata";
import { RadialGaugeDescription } from "./RadialGaugeDescription";

/**
 * @hidden 
 */
export class RadialGaugeDescriptionMetadata extends Base {
	static $t: Type = markType(RadialGaugeDescriptionMetadata, 'RadialGaugeDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:TextStyle/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:TextStyle/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontStyle/FontStyleTransform,web:TextStyle/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontStyle/FontWeightTransform,web:TextStyle/FontWeightTransform)String");
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Gauges.XamLinearGauge");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("LegendRef", "(w:Legend)DataRef:String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RadialGaugeDescriptionMetadata._metadata == null) {
			RadialGaugeDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RadialGaugeDescriptionMetadata.fillMetadata(context, RadialGaugeDescriptionMetadata._metadata);
			FormatRadialGaugeLabelEventArgsDescriptionMetadata.register(context);
			AlignRadialGaugeLabelEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("RangeBrushes", "BrushCollection:string");
		metadata.item("RangeOutlines", "BrushCollection:string");
		metadata.item("MinimumValue", "Number:double");
		metadata.item("ActualMinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("ActualMaximumValue", "Number:double");
		metadata.item("Interval", "Number:double");
		metadata.item("CenterX", "Number:double");
		metadata.item("CenterY", "Number:double");
		metadata.item("Value", "Number:double");
		metadata.item("ScaleStartAngle", "Number:double");
		metadata.item("ScaleEndAngle", "Number:double");
		metadata.item("ScaleSweepDirection", "ExportedType:string:SweepDirection");
		metadata.item("TransitionDuration", "Number:int");
		metadata.item("TransitionEasingFunctionRef", "(w:TransitionEasingFunction,wf:TransitionEasingFunction)MethodRef");
		metadata.item("NeedleBrush", "Brush");
		metadata.item("NeedleOutline", "Brush");
		metadata.item("NeedleStartExtent", "Number:double");
		metadata.item("NeedleEndExtent", "Number:double");
		metadata.item("NeedleShape", "ExportedType:string:RadialGaugeNeedleShape");
		metadata.item("NeedleStartWidthRatio", "Number:double");
		metadata.item("NeedleEndWidthRatio", "Number:double");
		metadata.item("NeedleBaseFeatureWidthRatio", "Number:double");
		metadata.item("NeedleBaseFeatureExtent", "Number:double");
		metadata.item("NeedlePointFeatureWidthRatio", "Number:double");
		metadata.item("NeedlePointFeatureExtent", "Number:double");
		metadata.item("NeedlePivotWidthRatio", "Number:double");
		metadata.item("NeedlePivotInnerWidthRatio", "Number:double");
		metadata.item("NeedlePivotShape", "ExportedType:string:RadialGaugePivotShape");
		metadata.item("ScaleStartExtent", "Number:double");
		metadata.item("NeedlePivotBrush", "Brush");
		metadata.item("NeedlePivotOutline", "Brush");
		metadata.item("NeedleStrokeThickness", "Number:double");
		metadata.item("NeedlePivotStrokeThickness", "Number:double");
		metadata.item("ScaleEndExtent", "Number:double");
		metadata.item("LabelExtent", "Number:double");
		metadata.item("LabelInterval", "Number:double");
		metadata.item("TickStartExtent", "Number:double");
		metadata.item("TickEndExtent", "Number:double");
		metadata.item("TickStrokeThickness", "Number:double");
		metadata.item("TickBrush", "Brush");
		metadata.item("FontBrush", "Brush");
		metadata.item("MinorTickStartExtent", "Number:double");
		metadata.item("MinorTickEndExtent", "Number:double");
		metadata.item("MinorTickStrokeThickness", "Number:double");
		metadata.item("MinorTickBrush", "Brush");
		metadata.item("MinorTickCount", "Number:double");
		metadata.item("ScaleBrush", "Brush");
		metadata.item("BackingBrush", "Brush");
		metadata.item("BackingOutline", "Brush");
		metadata.item("BackingStrokeThickness", "Number:double");
		metadata.item("BackingOuterExtent", "Number:double");
		metadata.item("BackingOversweep", "Number:double");
		metadata.item("ScaleOversweep", "Number:double");
		metadata.item("ScaleOversweepShape", "ExportedType:string:RadialGaugeScaleOversweepShape");
		metadata.item("BackingCornerRadius", "Number:double");
		metadata.item("BackingInnerExtent", "Number:double");
		metadata.item("BackingShape", "ExportedType:string:RadialGaugeBackingShape");
		metadata.item("Ranges", "Collection:RadialGaugeRange:RadialGaugeRangeCollection:RadialGaugeRange");
		metadata.item("RadiusMultiplier", "Number:double");
		metadata.item("DuplicateLabelOmissionStrategy", "ExportedType:string:RadialGaugeDuplicateLabelOmissionStrategy");
		metadata.item("IsNeedleDraggingEnabled", "Boolean");
		metadata.item("IsNeedleDraggingConstrained", "Boolean");
		metadata.item("Font", "String");
		metadata.item("TransitionProgress", "Number:double");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("FormatLabelRef", "EventRef::formatLabel");
		metadata.item("AlignLabelRef", "EventRef::alignLabel");
		RadialGaugeDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		RadialGaugeDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RadialGauge", () => new RadialGaugeDescription());
		context.register("RadialGauge", RadialGaugeDescriptionMetadata._metadata);
	}
}


