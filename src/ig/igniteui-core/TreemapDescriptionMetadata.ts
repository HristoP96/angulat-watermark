/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TreemapNodeStylingEventArgsDescriptionMetadata } from "./TreemapNodeStylingEventArgsDescriptionMetadata";
import { TreemapNodePointerEventArgsDescriptionMetadata } from "./TreemapNodePointerEventArgsDescriptionMetadata";
import { TreemapDescription } from "./TreemapDescription";

/**
 * @hidden 
 */
export class TreemapDescriptionMetadata extends Base {
	static $t: Type = markType(TreemapDescriptionMetadata, 'TreemapDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TreemapDescriptionMetadata._metadata == null) {
			TreemapDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TreemapDescriptionMetadata.fillMetadata(context, TreemapDescriptionMetadata._metadata);
			TreemapNodeStylingEventArgsDescriptionMetadata.register(context);
			TreemapNodePointerEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ValueMemberPath", "String");
		metadata.item("RootTitle", "String");
		metadata.item("BreadcrumbSequence", "String");
		metadata.item("ParentIdMemberPath", "String");
		metadata.item("LabelMemberPath", "String");
		metadata.item("CustomValueMemberPath", "String");
		metadata.item("IdMemberPath", "String");
		metadata.item("DataSourceRef", "(w:ItemsSource,j:dataSource,wf:ItemsSource)DataRef::object");
		metadata.item("FillBrushes", "BrushCollection:string");
		metadata.item("FillScaleMode", "ExportedType:string:TreemapFillScaleMode");
		metadata.item("IsFillScaleLogarithmic", "Boolean");
		metadata.item("FillScaleLogarithmBase", "Number:int");
		metadata.item("FillScaleMinimumValue", "Number:double");
		metadata.item("FillScaleMaximumValue", "Number:double");
		metadata.item("LabelVerticalFitMode", "ExportedType:string:TreemapLabelVerticalFitMode");
		metadata.item("LabelHorizontalFitMode", "ExportedType:string:TreemapLabelHorizontalFitMode");
		metadata.item("OverlayHeaderHoverBackground", "Brush");
		metadata.item("HeaderHoverBackground", "Brush");
		metadata.item("HeaderBackground", "Brush");
		metadata.item("OverlayHeaderBackground", "Brush");
		metadata.item("HeaderTextColor", "Brush");
		metadata.item("HeaderDarkTextColor", "Brush");
		metadata.item("TextColor", "Brush");
		metadata.item("DarkTextColor", "Brush");
		metadata.item("HeaderHoverTextColor", "Brush");
		metadata.item("HeaderHoverDarkTextColor", "Brush");
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:textStyle/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:textStyle/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontFamily/FontStyleTransform,web:textStyle/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontFamily/FontWeightTransform,web:textStyle/FontWeightTransform)String");
		metadata.item("HeaderFontFamily", "(w:HeaderFontFamily/FontFamilyTransform,wf:HeaderFontFamily,web:headerTextStyle/FontFamilyTransform)String");
		metadata.item("HeaderFontSize", "(w:HeaderFontSize,wf:HeaderFontSize,web:headerTextStyle/FontSizeTransform)Number:double");
		metadata.item("HeaderFontStyle", "(w:HeaderFontStyle/FontStyleTransform,wf:HeaderFontFamily/FontStyleTransform,web:headerTextStyle/FontStyleTransform)String");
		metadata.item("HeaderFontWeight", "(w:HeaderFontWeight/FontWeightTransform,wf:HeaderFontFamily/FontWeightTransform,web:headerTextStyle/FontWeightTransform)String");
		metadata.item("HeaderDisplayMode", "ExportedType:string:TreemapHeaderDisplayMode");
		metadata.item("HeaderLabelLeftMargin", "Number:double");
		metadata.item("HeaderLabelTopMargin", "Number:double");
		metadata.item("HeaderLabelRightMargin", "Number:double");
		metadata.item("HeaderLabelBottomMargin", "Number:double");
		metadata.item("OverlayHeaderLabelLeftMargin", "Number:double");
		metadata.item("OverlayHeaderLabelTopMargin", "Number:double");
		metadata.item("OverlayHeaderLabelRightMargin", "Number:double");
		metadata.item("OverlayHeaderLabelBottomMargin", "Number:double");
		metadata.item("LabelLeftMargin", "Number:double");
		metadata.item("LabelTopMargin", "Number:double");
		metadata.item("LabelRightMargin", "Number:double");
		metadata.item("LabelBottomMargin", "Number:double");
		metadata.item("ParentNodeLeftMargin", "Number:double");
		metadata.item("ParentNodeTopMargin", "Number:double");
		metadata.item("ParentNodeRightMargin", "Number:double");
		metadata.item("ParentNodeBottomMargin", "Number:double");
		metadata.item("ParentNodeLeftPadding", "Number:double");
		metadata.item("ParentNodeTopPadding", "Number:double");
		metadata.item("ParentNodeRightPadding", "Number:double");
		metadata.item("ParentNodeBottomPadding", "Number:double");
		metadata.item("LabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("LabelVerticalAlignment", "ExportedType:string:VerticalAlignment");
		metadata.item("HeaderHeight", "Number:double");
		metadata.item("Outline", "Brush");
		metadata.item("StrokeThickness", "Number:double");
		metadata.item("LayoutOrientation", "ExportedType:string:TreemapOrientation");
		metadata.item("LayoutType", "ExportedType:string:TreemapLayoutType");
		metadata.item("MinimumDisplaySize", "Number:double");
		metadata.item("TransitionDuration", "Number:int");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("InteractionPixelScalingRatio", "Number:double");
		metadata.item("ActualInteractionPixelScalingRatio", "Number:double");
		metadata.item("FocusItemRef", "(w:FocusItem,wf:FocusItem)DataRef");
		metadata.item("NodeStylingRef", "EventRef::nodeStyling");
		metadata.item("NodePointerOverRef", "EventRef::nodePointerOver");
		metadata.item("NodePointerEnterRef", "EventRef::nodePointerEnter");
		metadata.item("NodePointerLeaveRef", "EventRef::nodePointerLeave");
		metadata.item("NodePointerPressedRef", "EventRef::nodePointerPressed");
		metadata.item("NodePointerReleasedRef", "EventRef::nodePointerReleased");
		TreemapDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		TreemapDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Treemap", () => new TreemapDescription());
		context.register("Treemap", TreemapDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamTreemap");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
}


