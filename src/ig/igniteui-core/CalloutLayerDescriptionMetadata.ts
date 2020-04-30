/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutStyleUpdatingEventArgsDescriptionMetadata } from "./CalloutStyleUpdatingEventArgsDescriptionMetadata";
import { CalloutContentUpdatingEventArgsDescriptionMetadata } from "./CalloutContentUpdatingEventArgsDescriptionMetadata";
import { CalloutLabelUpdatingEventArgsDescriptionMetadata } from "./CalloutLabelUpdatingEventArgsDescriptionMetadata";
import { CalloutSeriesSelectingEventArgsDescriptionMetadata } from "./CalloutSeriesSelectingEventArgsDescriptionMetadata";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { CalloutLayerDescription } from "./CalloutLayerDescription";

/**
 * @hidden 
 */
export class CalloutLayerDescriptionMetadata extends Base {
	static $t: Type = markType(CalloutLayerDescriptionMetadata, 'CalloutLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CalloutLayerDescriptionMetadata._metadata == null) {
			CalloutLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CalloutLayerDescriptionMetadata.fillMetadata(context, CalloutLayerDescriptionMetadata._metadata);
			CalloutStyleUpdatingEventArgsDescriptionMetadata.register(context);
			CalloutContentUpdatingEventArgsDescriptionMetadata.register(context);
			CalloutLabelUpdatingEventArgsDescriptionMetadata.register(context);
			CalloutSeriesSelectingEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("LabelMemberPath", "String");
		metadata.item("XMemberPath", "String");
		metadata.item("YMemberPath", "String");
		metadata.item("KeyMemberPath", "String");
		metadata.item("IsCalloutOffsettingEnabled", "Boolean");
		metadata.item("ContentMemberPath", "String");
		metadata.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
		metadata.item("CollisionChannel", "String");
		metadata.item("IsAutoCalloutBehaviorEnabled", "Boolean");
		metadata.item("UseValueForAutoCalloutLabels", "Boolean");
		metadata.item("IsCustomCalloutStyleEnabled", "Boolean");
		metadata.item("AutoCalloutLabelPrecision", "Number:int");
		metadata.item("CalloutTextColor", "Brush");
		metadata.item("CalloutBackground", "Brush");
		metadata.item("CalloutInterpolatedValuePrecision", "Number:int");
		metadata.item("CalloutOutline", "Brush");
		metadata.item("CalloutLeaderBrush", "Brush");
		metadata.item("CalloutPaddingLeft", "Number:double");
		metadata.item("CalloutPaddingTop", "Number:double");
		metadata.item("CalloutPaddingRight", "Number:double");
		metadata.item("CalloutPaddingBottom", "Number:double");
		metadata.item("CalloutCollisionMode", "ExportedType:string:CalloutCollisionMode");
		metadata.item("CalloutPositionPadding", "Number:double");
		metadata.item("CalloutStrokeThickness", "Number:double");
		metadata.item("TextStyle", "String");
		metadata.item("CalloutStyleUpdatingRef", "EventRef::calloutStyleUpdating");
		metadata.item("CalloutContentUpdatingRef", "EventRef::calloutContentUpdating");
		metadata.item("CalloutLabelUpdatingRef", "EventRef::calloutLabelUpdating");
		metadata.item("CalloutSeriesSelectingRef", "EventRef::calloutSeriesSelecting");
	}
	static register(context: TypeDescriptionContext): void {
		CalloutLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CalloutLayer", () => new CalloutLayerDescription());
		context.register("CalloutLayer", CalloutLayerDescriptionMetadata._metadata);
	}
}


