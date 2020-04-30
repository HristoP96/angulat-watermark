/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GridGroupDescriptionsChangedEventArgsDescription } from "./GridGroupDescriptionsChangedEventArgsDescription";

/**
 * @hidden 
 */
export class GridGroupDescriptionsChangedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GridGroupDescriptionsChangedEventArgsDescriptionMetadata, 'GridGroupDescriptionsChangedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridGroupDescriptionsChangedEventArgsDescriptionMetadata._metadata == null) {
			GridGroupDescriptionsChangedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridGroupDescriptionsChangedEventArgsDescriptionMetadata.fillMetadata(context, GridGroupDescriptionsChangedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("GroupDescriptions", "Collection:ColumnGroupDescription:ColumnGroupDescriptionCollection:ColumnGroupDescription");
	}
	static register(context: TypeDescriptionContext): void {
		GridGroupDescriptionsChangedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridGroupDescriptionsChangedEventArgs", () => new GridGroupDescriptionsChangedEventArgsDescription());
		context.register("GridGroupDescriptionsChangedEventArgs", GridGroupDescriptionsChangedEventArgsDescriptionMetadata._metadata);
	}
}


