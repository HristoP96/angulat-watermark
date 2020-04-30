/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class CellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(CellInfoDescriptionMetadata, 'CellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CellInfoDescriptionMetadata._metadata == null) {
			CellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CellInfoDescriptionMetadata.fillMetadata(context, CellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("StyleKey", "String");
		metadata.item("DataRow", "Number:int");
		metadata.item("IsPositionDirty", "Boolean");
		metadata.item("IsSizeDirty", "Boolean");
		metadata.item("IsContentDirty", "Boolean");
		metadata.item("IsBorderDirty", "Boolean");
		metadata.item("IsLayerDirty", "Boolean");
		metadata.item("IsStateDirty", "Boolean");
		metadata.item("IsDataDirty", "Boolean");
		metadata.item("IsPlaceholdContentNeeded", "Boolean");
		metadata.item("ActionManager", "ExportedType");
		metadata.item("IsRowPinned", "Boolean");
		metadata.item("IsRowSticky", "Boolean");
		metadata.item("IsLastStickyRow", "Boolean");
		metadata.item("Indent", "Number:int");
		metadata.item("RowItemRef", "(w:RowItem,wf:RowItem)DataRef");
		metadata.item("X", "Number:double");
		metadata.item("Y", "Number:double");
		metadata.item("SnappedX", "Number:int");
		metadata.item("SnappedY", "Number:int");
		metadata.item("ContentOpacity", "Number:double");
		metadata.item("ActualContentOpacity", "Number:double");
		metadata.item("Opacity", "Number:double");
		metadata.item("ActualOpacity", "Number:double");
		metadata.item("Height", "Number:int");
		metadata.item("Width", "Number:int");
		metadata.item("IsSelected", "Boolean");
		metadata.item("SelectedStatus", "Number:double");
		metadata.item("ActivationStatus", "Number:double");
		metadata.item("HorizontalAlignment", "ExportedType:string:CellContentHorizontalAlignment");
		metadata.item("VerticalAlignment", "ExportedType:string:CellContentVerticalAlignment");
		metadata.item("Background", "Brush");
		metadata.item("Border", "Brush");
		metadata.item("ActualBackground", "Brush");
		metadata.item("ActualBorder", "Brush");
		metadata.item("ActivationBorder", "Brush");
		metadata.item("SelectedBackground", "Brush");
		metadata.item("SortIndicatorColor", "Brush");
		metadata.item("StickyRowBackground", "Brush");
		metadata.item("PinnedRowBackground", "Brush");
		metadata.item("LastStickyRowBackground", "Brush");
		metadata.item("PinnedRowOpacity", "Number:double");
		metadata.item("OriginalValueRef", "(w:OriginalValue,wf:OriginalValue)DataRef");
		metadata.item("RenderValue", "String");
		metadata.item("TextColor", "Brush");
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:font/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:font/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontFamily/FontStyleTransform,web:font/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontFamily/FontWeightTransform,web:font/FontWeightTransform)String");
		metadata.item("LineBreakMode", "ExportedType:string:TextCellLineBreakMode");
		metadata.item("VirtualizationPercentage", "Number:double");
		metadata.item("PaddingLeft", "Number:int");
		metadata.item("PaddingTop", "Number:int");
		metadata.item("PaddingRight", "Number:int");
		metadata.item("PaddingBottom", "Number:int");
		metadata.item("ActualPaddingLeft", "Number:int");
		metadata.item("ActualPaddingTop", "Number:int");
		metadata.item("ActualPaddingRight", "Number:int");
		metadata.item("ActualPaddingBottom", "Number:int");
		metadata.item("BorderLeftWidth", "Number:int");
		metadata.item("BorderTopWidth", "Number:int");
		metadata.item("BorderRightWidth", "Number:int");
		metadata.item("BorderBottomWidth", "Number:int");
		metadata.item("ActivationBorderLeftWidth", "Number:int");
		metadata.item("ActivationBorderTopWidth", "Number:int");
		metadata.item("ActivationBorderRightWidth", "Number:int");
		metadata.item("ActivationBorderBottomWidth", "Number:int");
		metadata.item("ActualBorderLeftWidth", "Number:int");
		metadata.item("ActualBorderTopWidth", "Number:int");
		metadata.item("ActualBorderRightWidth", "Number:int");
		metadata.item("ActualBorderBottomWidth", "Number:int");
		metadata.item("SortDirection", "ExportedType:string:ColumnSortDirection");
		metadata.item("IsExpanded", "Boolean");
		metadata.item("IsCollapsable", "Boolean");
		metadata.item("Pinned", "ExportedType:string:PinnedPositions");
	}
	static register(context: TypeDescriptionContext): void {
		CellInfoDescriptionMetadata.ensureMetadata(context);
		context.register("CellInfo", CellInfoDescriptionMetadata._metadata);
	}
}


