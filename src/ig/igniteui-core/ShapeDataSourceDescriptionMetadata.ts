/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AsyncCompletedEventArgsDescriptionMetadata } from "./AsyncCompletedEventArgsDescriptionMetadata";
import { ShapeFilterRecordEventArgsDescriptionMetadata } from "./ShapeFilterRecordEventArgsDescriptionMetadata";
import { ShapeDataSourceDescription } from "./ShapeDataSourceDescription";

/**
 * @hidden 
 */
export class ShapeDataSourceDescriptionMetadata extends Base {
	static $t: Type = markType(ShapeDataSourceDescriptionMetadata, 'ShapeDataSourceDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ShapeDataSourceDescriptionMetadata._metadata == null) {
			ShapeDataSourceDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ShapeDataSourceDescriptionMetadata.fillMetadata(context, ShapeDataSourceDescriptionMetadata._metadata);
			AsyncCompletedEventArgsDescriptionMetadata.register(context);
			ShapeFilterRecordEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("WorldRect", "Rect");
		metadata.item("ShapefileSource", "String");
		metadata.item("DatabaseSource", "String");
		metadata.item("ImportCompletedRef", "EventRef::importCompleted");
		metadata.item("FilterRef", "EventRef::filter");
	}
	static register(context: TypeDescriptionContext): void {
		ShapeDataSourceDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ShapeDataSource", () => new ShapeDataSourceDescription());
		context.register("ShapeDataSource", ShapeDataSourceDescriptionMetadata._metadata);
	}
}


