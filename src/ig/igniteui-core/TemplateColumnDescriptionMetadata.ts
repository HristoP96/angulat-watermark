/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellUpdatingEventArgsDescriptionMetadata } from "./TemplateCellUpdatingEventArgsDescriptionMetadata";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { TemplateColumnDescription } from "./TemplateColumnDescription";

/**
 * @hidden 
 */
export class TemplateColumnDescriptionMetadata extends Base {
	static $t: Type = markType(TemplateColumnDescriptionMetadata, 'TemplateColumnDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TemplateColumnDescriptionMetadata._metadata == null) {
			TemplateColumnDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TemplateColumnDescriptionMetadata.fillMetadata(context, TemplateColumnDescriptionMetadata._metadata);
			TemplateCellUpdatingEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("CellUpdatingRef", "EventRef::cellUpdating");
	}
	static register(context: TypeDescriptionContext): void {
		TemplateColumnDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TemplateColumn", () => new TemplateColumnDescription());
		context.register("TemplateColumn", TemplateColumnDescriptionMetadata._metadata);
	}
}


