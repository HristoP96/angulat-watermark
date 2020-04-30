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
export class CellActionManagerDescriptionMetadata extends Base {
	static $t: Type = markType(CellActionManagerDescriptionMetadata, 'CellActionManagerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CellActionManagerDescriptionMetadata._metadata == null) {
			CellActionManagerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CellActionManagerDescriptionMetadata.fillMetadata(context, CellActionManagerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("IsLeaveActionDesired", "Boolean");
		metadata.item("IsControlPressed", "Boolean");
		metadata.item("IsShiftPressed", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		CellActionManagerDescriptionMetadata.ensureMetadata(context);
		context.register("CellActionManager", CellActionManagerDescriptionMetadata._metadata);
	}
}


