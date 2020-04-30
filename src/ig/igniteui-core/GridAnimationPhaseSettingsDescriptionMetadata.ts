/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GridAnimationPhaseSettingsDescription } from "./GridAnimationPhaseSettingsDescription";

/**
 * @hidden 
 */
export class GridAnimationPhaseSettingsDescriptionMetadata extends Base {
	static $t: Type = markType(GridAnimationPhaseSettingsDescriptionMetadata, 'GridAnimationPhaseSettingsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridAnimationPhaseSettingsDescriptionMetadata._metadata == null) {
			GridAnimationPhaseSettingsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridAnimationPhaseSettingsDescriptionMetadata.fillMetadata(context, GridAnimationPhaseSettingsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("DurationMilliseconds", "Number:int");
		metadata.item("HoldInitialMilliseconds", "Number:int");
		metadata.item("PerItemDelayMilliseconds", "Number:int");
		metadata.item("SubItemDurationMilliseconds", "Number:int");
		metadata.item("DesiredSubItemDurationMilliseconds", "Number:int");
		metadata.item("ShouldItemsFinishSimultaneously", "Boolean");
		metadata.item("EasingFunctionType", "ExportedType:string:GridEasingFunctionType");
	}
	static register(context: TypeDescriptionContext): void {
		GridAnimationPhaseSettingsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridAnimationPhaseSettings", () => new GridAnimationPhaseSettingsDescription());
		context.register("GridAnimationPhaseSettings", GridAnimationPhaseSettingsDescriptionMetadata._metadata);
	}
}


