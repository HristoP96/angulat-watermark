/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatLinearGraphLabelEventArgsDescriptionMetadata } from "./FormatLinearGraphLabelEventArgsDescriptionMetadata";
import { AlignLinearGraphLabelEventArgsDescriptionMetadata } from "./AlignLinearGraphLabelEventArgsDescriptionMetadata";
import { BulletGraphDescription } from "./BulletGraphDescription";

/**
 * @hidden 
 */
export class BulletGraphDescriptionMetadata extends Base {
	static $t: Type = markType(BulletGraphDescriptionMetadata, 'BulletGraphDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:TextStyle/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:TextStyle/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontStyle/FontStyleTransform,web:TextStyle/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontStyle/FontWeightTransform,web:TextStyle/FontWeightTransform)String");
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Gauges.XamBulletGraph");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("LegendRef", "(w:Legend)DataRef:String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (BulletGraphDescriptionMetadata._metadata == null) {
			BulletGraphDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			BulletGraphDescriptionMetadata.fillMetadata(context, BulletGraphDescriptionMetadata._metadata);
			FormatLinearGraphLabelEventArgsDescriptionMetadata.register(context);
			AlignLinearGraphLabelEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("TransitionProgress", "Number:double");
		metadata.item("Orientation", "ExportedType:string:LinearScaleOrientation");
		metadata.item("ScaleBackgroundBrush", "Brush");
		metadata.item("ScaleBackgroundOutline", "Brush");
		metadata.item("ScaleBackgroundThickness", "Number:double");
		metadata.item("Ranges", "Collection:LinearGraphRange:LinearGraphRangeCollection:LinearGraphRange");
		metadata.item("RangeBrushes", "BrushCollection:string");
		metadata.item("RangeOutlines", "BrushCollection:string");
		metadata.item("MinimumValue", "Number:double");
		metadata.item("ActualMinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("ActualMaximumValue", "Number:double");
		metadata.item("TargetValue", "Number:double");
		metadata.item("TargetValueName", "String");
		metadata.item("Value", "Number:double");
		metadata.item("ValueName", "String");
		metadata.item("RangeInnerExtent", "Number:double");
		metadata.item("RangeOuterExtent", "Number:double");
		metadata.item("ValueInnerExtent", "Number:double");
		metadata.item("ValueOuterExtent", "Number:double");
		metadata.item("Interval", "Number:double");
		metadata.item("TicksPostInitial", "Number:double");
		metadata.item("TicksPreTerminal", "Number:double");
		metadata.item("LabelInterval", "Number:double");
		metadata.item("LabelExtent", "Number:double");
		metadata.item("LabelsPostInitial", "Number:double");
		metadata.item("LabelsPreTerminal", "Number:double");
		metadata.item("MinorTickCount", "Number:double");
		metadata.item("TickStartExtent", "Number:double");
		metadata.item("TickEndExtent", "Number:double");
		metadata.item("TickStrokeThickness", "Number:double");
		metadata.item("TickBrush", "Brush");
		metadata.item("FontBrush", "Brush");
		metadata.item("ValueBrush", "Brush");
		metadata.item("ValueOutline", "Brush");
		metadata.item("ValueStrokeThickness", "Number:double");
		metadata.item("MinorTickStartExtent", "Number:double");
		metadata.item("MinorTickEndExtent", "Number:double");
		metadata.item("MinorTickStrokeThickness", "Number:double");
		metadata.item("MinorTickBrush", "Brush");
		metadata.item("IsScaleInverted", "Boolean");
		metadata.item("BackingBrush", "Brush");
		metadata.item("BackingOutline", "Brush");
		metadata.item("BackingStrokeThickness", "Number:double");
		metadata.item("BackingInnerExtent", "Number:double");
		metadata.item("BackingOuterExtent", "Number:double");
		metadata.item("ScaleStartExtent", "Number:double");
		metadata.item("ScaleEndExtent", "Number:double");
		metadata.item("TargetValueBrush", "Brush");
		metadata.item("TargetValueBreadth", "Number:double");
		metadata.item("TargetValueInnerExtent", "Number:double");
		metadata.item("TargetValueOuterExtent", "Number:double");
		metadata.item("TargetValueOutline", "Brush");
		metadata.item("TargetValueStrokeThickness", "Number:double");
		metadata.item("TransitionDuration", "Number:int");
		metadata.item("ShowToolTipTimeout", "Number:int");
		metadata.item("ShowToolTip", "Boolean");
		metadata.item("Font", "String");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("FormatLabelRef", "EventRef::formatLabel");
		metadata.item("AlignLabelRef", "EventRef::alignLabel");
		BulletGraphDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		BulletGraphDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("BulletGraph", () => new BulletGraphDescription());
		context.register("BulletGraph", BulletGraphDescriptionMetadata._metadata);
	}
}


