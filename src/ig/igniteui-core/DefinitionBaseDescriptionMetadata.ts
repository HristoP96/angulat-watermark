/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DataBindingEventArgsDescriptionMetadata } from "./DataBindingEventArgsDescriptionMetadata";
import { CellStyleRequestedEventArgsDescriptionMetadata } from "./CellStyleRequestedEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class DefinitionBaseDescriptionMetadata extends Base {
	static $t: Type = markType(DefinitionBaseDescriptionMetadata, 'DefinitionBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DefinitionBaseDescriptionMetadata._metadata == null) {
			DefinitionBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DefinitionBaseDescriptionMetadata.fillMetadata(context, DefinitionBaseDescriptionMetadata._metadata);
			DataBindingEventArgsDescriptionMetadata.register(context);
			CellStyleRequestedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Background", "Brush");
		metadata.item("Border", "Brush");
		metadata.item("ActivationBorder", "Brush");
		metadata.item("ActualBorder", "Brush");
		metadata.item("BorderLeftWidth", "Number:int");
		metadata.item("BorderTopWidth", "Number:int");
		metadata.item("BorderRightWidth", "Number:int");
		metadata.item("BorderBottomWidth", "Number:int");
		metadata.item("ActivationBorderLeftWidth", "Number:int");
		metadata.item("ActivationBorderTopWidth", "Number:int");
		metadata.item("ActivationBorderRightWidth", "Number:int");
		metadata.item("ActivationBorderBottomWidth", "Number:int");
		metadata.item("ActualBackground", "Brush");
		metadata.item("ActualActivationBorder", "Brush");
		metadata.item("StickyRowBackground", "Brush");
		metadata.item("ActualStickyRowBackground", "Brush");
		metadata.item("PinnedRowBackground", "Brush");
		metadata.item("ActualPinnedRowBackground", "Brush");
		metadata.item("LastStickyRowBackground", "Brush");
		metadata.item("ActualLastStickyRowBackground", "Brush");
		metadata.item("ContentOpacity", "Number:double");
		metadata.item("HorizontalAlignment", "ExportedType:string:CellContentHorizontalAlignment");
		metadata.item("VerticalAlignment", "ExportedType:string:CellContentVerticalAlignment");
		metadata.item("LineBreakMode", "ExportedType:string:TextCellLineBreakMode");
		metadata.item("ActualLineBreakMode", "ExportedType:string:TextCellLineBreakMode");
		metadata.item("TextColor", "Brush");
		metadata.item("ActualTextColor", "Brush");
		metadata.item("PinnedRowOpacity", "Number:double");
		metadata.item("ActualPinnedRowOpacity", "Number:double");
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:textStyle/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:textStyle/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontFamily/FontStyleTransform,web:textStyle/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontFamily/FontWeightTransform,web:textStyle/FontWeightTransform)String");
		metadata.item("DataBindingRef", "EventRef::dataBinding");
		metadata.item("DataBoundRef", "EventRef::dataBound");
		metadata.item("CellStyleKeyRequestedRef", "EventRef::cellStyleKeyRequested");
	}
	static register(context: TypeDescriptionContext): void {
		DefinitionBaseDescriptionMetadata.ensureMetadata(context);
		context.register("DefinitionBase", DefinitionBaseDescriptionMetadata._metadata);
	}
}


