/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { RenderRequestedEventArgsDescriptionMetadata } from "./RenderRequestedEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class SeriesDescriptionMetadata extends Base {
	static $t: Type = markType(SeriesDescriptionMetadata, 'SeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SeriesDescriptionMetadata._metadata == null) {
			SeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SeriesDescriptionMetadata.fillMetadata(context, SeriesDescriptionMetadata._metadata);
			RenderRequestedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("DataSourceRef", "(w:ItemsSource,wf:ItemsSource)DataRef::object");
		metadata.item("LegendItemVisibility", "ExportedType:string:Visibility");
		metadata.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
		metadata.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
		metadata.item("DiscreteLegendItemTemplateRef", "(w:DiscreteLegendItemTemplate,wf:DiscreteLegendItemTemplate)DataRef::object");
		metadata.item("TransitionEasingFunctionRef", "(w:TransitionEasingFunction,wf:TransitionEasingFunction)MethodRef");
		metadata.item("TransitionInEasingFunctionRef", "(w:TransitionInEasingFunction,wf:TransitionInEasingFunction)MethodRef");
		metadata.item("TransitionDuration", "Number:int");
		metadata.item("Resolution", "Number:double");
		metadata.item("Brush", "Brush");
		metadata.item("ActualBrush", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("ActualOutline", "Brush");
		metadata.item("Thickness", "Number:double");
		metadata.item("IsHighlightingEnabled", "Boolean");
		metadata.item("IsDropShadowEnabled", "Boolean");
		metadata.item("ShadowBlur", "Number:double");
		metadata.item("ShadowColor", "Color");
		metadata.item("UseSingleShadow", "Boolean");
		metadata.item("ShadowOffsetX", "Number:double");
		metadata.item("ShadowOffsetY", "Number:double");
		metadata.item("AreaFillOpacity", "Number:double");
		metadata.item("ActualAreaFillOpacity", "Number:double");
		metadata.item("IsDefaultToolTipSelected", "Boolean");
		metadata.item("ShowDefaultTooltip", "Boolean");
		metadata.item("TransitionInDuration", "Number:int");
		metadata.item("TransitionInSpeedType", "ExportedType:string:TransitionInSpeedType");
		metadata.item("MouseOverEnabled", "Boolean");
		metadata.item("CoercionMethodsRef", "(w:CoercionMethods,wf:CoercionMethods)DataRef");
		metadata.item("ExpectFunctions", "Boolean");
		metadata.item("HitTestMode", "ExportedType:string:SeriesHitTestMode");
		metadata.item("ActualHitTestMode", "ExportedType:string:SeriesHitTestMode");
		metadata.item("FinalValue", "Number:double");
		metadata.item("PercentChange", "Number:double");
		metadata.item("RenderRequestedRef", "EventRef::renderRequested");
		SeriesDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		SeriesDescriptionMetadata.ensureMetadata(context);
		context.register("Series", SeriesDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("DataSourceRef", "(w:ItemsSource)DataRef:String");
		metadata.item("Title", "String");
		metadata.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
	}
}


