/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TreemapNodeStyleDescription } from "./TreemapNodeStyleDescription";

/**
 * @hidden 
 */
export class TreemapNodeStyleDescriptionMetadata extends Base {
	static $t: Type = markType(TreemapNodeStyleDescriptionMetadata, 'TreemapNodeStyleDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TreemapNodeStyleDescriptionMetadata._metadata == null) {
			TreemapNodeStyleDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TreemapNodeStyleDescriptionMetadata.fillMetadata(context, TreemapNodeStyleDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("HeaderHoverBackground", "Brush");
		metadata.item("HeaderBackground", "Brush");
		metadata.item("HeaderTextColor", "Brush");
		metadata.item("Label", "String");
		metadata.item("TextColor", "Brush");
		metadata.item("HeaderHoverTextColor", "Brush");
		metadata.item("HeaderLabelLeftMargin", "Number:double");
		metadata.item("HeaderLabelTopMargin", "Number:double");
		metadata.item("HeaderLabelRightMargin", "Number:double");
		metadata.item("HeaderLabelBottomMargin", "Number:double");
		metadata.item("LabelLeftMargin", "Number:double");
		metadata.item("LabelTopMargin", "Number:double");
		metadata.item("LabelRightMargin", "Number:double");
		metadata.item("LabelBottomMargin", "Number:double");
		metadata.item("HeaderHeight", "Number:double");
		metadata.item("LabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
		metadata.item("LabelVerticalAlignment", "ExportedType:string:VerticalAlignment");
		metadata.item("Fill", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("StrokeThickness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		TreemapNodeStyleDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TreemapNodeStyle", () => new TreemapNodeStyleDescription());
		context.register("TreemapNodeStyle", TreemapNodeStyleDescriptionMetadata._metadata);
	}
}


