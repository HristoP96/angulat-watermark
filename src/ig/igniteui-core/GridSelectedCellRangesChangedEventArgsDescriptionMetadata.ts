/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GridSelectedCellRangesChangedEventArgsDescription } from "./GridSelectedCellRangesChangedEventArgsDescription";

/**
 * @hidden 
 */
export class GridSelectedCellRangesChangedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GridSelectedCellRangesChangedEventArgsDescriptionMetadata, 'GridSelectedCellRangesChangedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridSelectedCellRangesChangedEventArgsDescriptionMetadata._metadata == null) {
			GridSelectedCellRangesChangedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridSelectedCellRangesChangedEventArgsDescriptionMetadata.fillMetadata(context, GridSelectedCellRangesChangedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("AddedRanges", "Collection:CellRange:GridSelectedCellRangesCollection:CellRange");
		metadata.item("RemovedRanges", "Collection:CellRange:GridSelectedCellRangesCollection:CellRange");
		metadata.item("UpdatedRanges", "Collection:CellRange:GridSelectedCellRangesCollection:CellRange");
	}
	static register(context: TypeDescriptionContext): void {
		GridSelectedCellRangesChangedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridSelectedCellRangesChangedEventArgs", () => new GridSelectedCellRangesChangedEventArgsDescription());
		context.register("GridSelectedCellRangesChangedEventArgs", GridSelectedCellRangesChangedEventArgsDescriptionMetadata._metadata);
	}
}


