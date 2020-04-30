/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ShapefileRecordDescriptionMetadata } from "./ShapefileRecordDescriptionMetadata";
import { ShapeFilterRecordEventArgsDescription } from "./ShapeFilterRecordEventArgsDescription";

/**
 * @hidden 
 */
export class ShapeFilterRecordEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(ShapeFilterRecordEventArgsDescriptionMetadata, 'ShapeFilterRecordEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ShapeFilterRecordEventArgsDescriptionMetadata._metadata == null) {
			ShapeFilterRecordEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ShapeFilterRecordEventArgsDescriptionMetadata.fillMetadata(context, ShapeFilterRecordEventArgsDescriptionMetadata._metadata);
			ShapefileRecordDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Record", "ExportedType:ShapefileRecord");
		metadata.item("ShouldInclude", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		ShapeFilterRecordEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ShapeFilterRecordEventArgs", () => new ShapeFilterRecordEventArgsDescription());
		context.register("ShapeFilterRecordEventArgs", ShapeFilterRecordEventArgsDescriptionMetadata._metadata);
	}
}


