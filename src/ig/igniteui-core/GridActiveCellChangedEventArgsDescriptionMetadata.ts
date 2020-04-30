/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GridCellPositionDescriptionMetadata } from "./GridCellPositionDescriptionMetadata";
import { GridActiveCellChangedEventArgsDescription } from "./GridActiveCellChangedEventArgsDescription";

/**
 * @hidden 
 */
export class GridActiveCellChangedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GridActiveCellChangedEventArgsDescriptionMetadata, 'GridActiveCellChangedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridActiveCellChangedEventArgsDescriptionMetadata._metadata == null) {
			GridActiveCellChangedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridActiveCellChangedEventArgsDescriptionMetadata.fillMetadata(context, GridActiveCellChangedEventArgsDescriptionMetadata._metadata);
			GridCellPositionDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("NewActiveCell", "ExportedType:GridCellPosition");
		metadata.item("OldActiveCell", "ExportedType:GridCellPosition");
	}
	static register(context: TypeDescriptionContext): void {
		GridActiveCellChangedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridActiveCellChangedEventArgs", () => new GridActiveCellChangedEventArgsDescription());
		context.register("GridActiveCellChangedEventArgs", GridActiveCellChangedEventArgsDescriptionMetadata._metadata);
	}
}


