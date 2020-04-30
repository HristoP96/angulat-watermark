/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata } from "./ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata";
import { RectChangedEventArgsDescriptionMetadata } from "./RectChangedEventArgsDescriptionMetadata";
import { ZoomSliderDescription } from "./ZoomSliderDescription";

/**
 * @hidden 
 */
export class ZoomSliderDescriptionMetadata extends Base {
	static $t: Type = markType(ZoomSliderDescriptionMetadata, 'ZoomSliderDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Navigation.XamZoomSlider");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ZoomSliderDescriptionMetadata._metadata == null) {
			ZoomSliderDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ZoomSliderDescriptionMetadata.fillMetadata(context, ZoomSliderDescriptionMetadata._metadata);
			ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.register(context);
			RectChangedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("PanTransitionDuration", "Number:int");
		metadata.item("MaxZoomWidth", "Number:double");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("WindowRect", "Rect");
		metadata.item("MinZoomWidth", "Number:double");
		metadata.item("StartInset", "Number:double");
		metadata.item("EndInset", "Number:double");
		metadata.item("TrackStartInset", "Number:double");
		metadata.item("TrackEndInset", "Number:double");
		metadata.item("BarExtent", "Number:double");
		metadata.item("Orientation", "ExportedType:string:ZoomSliderOrientation");
		metadata.item("LowerThumbBrush", "Brush");
		metadata.item("LowerThumbStrokeThickness", "Number:double");
		metadata.item("HigherThumbStrokeThickness", "Number:double");
		metadata.item("HigherThumbBrush", "Brush");
		metadata.item("LowerThumbOutline", "Brush");
		metadata.item("HigherThumbOutline", "Brush");
		metadata.item("LowerThumbRidgesBrush", "Brush");
		metadata.item("HigherThumbRidgesBrush", "Brush");
		metadata.item("LowerThumbWidth", "Number:double");
		metadata.item("HigherThumbWidth", "Number:double");
		metadata.item("LowerThumbHeight", "Number:double");
		metadata.item("HigherThumbHeight", "Number:double");
		metadata.item("LowerShadeBrush", "Brush");
		metadata.item("LowerShadeOutline", "Brush");
		metadata.item("LowerShadeStrokeThickness", "Number:double");
		metadata.item("HigherShadeBrush", "Brush");
		metadata.item("HigherShadeOutline", "Brush");
		metadata.item("HigherShadeStrokeThickness", "Number:double");
		metadata.item("BarBrush", "Brush");
		metadata.item("BarOutline", "Brush");
		metadata.item("BarStrokeThickness", "Number:double");
		metadata.item("RangeThumbBrush", "Brush");
		metadata.item("RangeThumbOutline", "Brush");
		metadata.item("RangeThumbStrokeThickness", "Number:double");
		metadata.item("RangeThumbRidgesBrush", "Brush");
		metadata.item("LowerCalloutBrush", "Brush");
		metadata.item("LowerCalloutTextColor", "Brush");
		metadata.item("LowerCalloutOutline", "Brush");
		metadata.item("LowerCalloutStrokeThickness", "Number:double");
		metadata.item("HigherCalloutBrush", "Brush");
		metadata.item("HigherCalloutTextColor", "Brush");
		metadata.item("HigherCalloutOutline", "Brush");
		metadata.item("HigherCalloutStrokeThickness", "Number:double");
		metadata.item("AreThumbCalloutsEnabled", "Boolean");
		metadata.item("ThumbCalloutFontFamily", "(w:ThumbCalloutFontFamily/FontFamilyTransform,wf:ThumbCalloutFontFamily,web:thumbCalloutTextStyle/FontFamilyTransform)String");
		metadata.item("ThumbCalloutFontSize", "(w:ThumbCalloutFontSize,wf:ThumbCalloutFontSize,web:thumbCalloutTextStyle/FontSizeTransform)Number:double");
		metadata.item("ThumbCalloutFontStyle", "(w:ThumbCalloutFontStyle/FontStyleTransform,wf:ThumbCalloutFontFamily/FontStyleTransform,web:thumbCalloutTextStyle/FontStyleTransform)String");
		metadata.item("ThumbCalloutFontWeight", "(w:ThumbCalloutFontWeight/FontWeightTransform,wf:ThumbCalloutFontFamily/FontWeightTransform,web:thumbCalloutTextStyle/FontWeightTransform)String");
		metadata.item("ResolvingAxisValueRef", "EventRef::resolvingAxisValue");
		metadata.item("WindowRectChangedRef", "EventRef::windowRectChanged");
		ZoomSliderDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		ZoomSliderDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ZoomSlider", () => new ZoomSliderDescription());
		context.register("ZoomSlider", ZoomSliderDescriptionMetadata._metadata);
	}
}


