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
import { TriangulationDataSourceDescription } from "./TriangulationDataSourceDescription";

/**
 * @hidden 
 */
export class TriangulationDataSourceDescriptionMetadata extends Base {
	static $t: Type = markType(TriangulationDataSourceDescriptionMetadata, 'TriangulationDataSourceDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TriangulationDataSourceDescriptionMetadata._metadata == null) {
			TriangulationDataSourceDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TriangulationDataSourceDescriptionMetadata.fillMetadata(context, TriangulationDataSourceDescriptionMetadata._metadata);
			AsyncCompletedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ImportCompletedRef", "EventRef::importCompleted");
	}
	static register(context: TypeDescriptionContext): void {
		TriangulationDataSourceDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TriangulationDataSource", () => new TriangulationDataSourceDescription());
		context.register("TriangulationDataSource", TriangulationDataSourceDescriptionMetadata._metadata);
	}
}


