/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogOpeningEventArgsDescriptionMetadata } from "./GridFilterDialogOpeningEventArgsDescriptionMetadata";
import { GridFilterDialogFilterChangeEventArgsDescriptionMetadata } from "./GridFilterDialogFilterChangeEventArgsDescriptionMetadata";
import { LiveGridFilterDialogDescription } from "./LiveGridFilterDialogDescription";

/**
 * @hidden 
 */
export class LiveGridFilterDialogDescriptionMetadata extends Base {
	static $t: Type = markType(LiveGridFilterDialogDescriptionMetadata, 'LiveGridFilterDialogDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LiveGridFilterDialogDescriptionMetadata._metadata == null) {
			LiveGridFilterDialogDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LiveGridFilterDialogDescriptionMetadata.fillMetadata(context, LiveGridFilterDialogDescriptionMetadata._metadata);
			GridFilterDialogOpeningEventArgsDescriptionMetadata.register(context);
			GridFilterDialogFilterChangeEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("IsAnimationEnabled", "Boolean");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("DialogOpeningRef", "EventRef::dialogOpening");
		metadata.item("FilterChangingRef", "EventRef::filterChanging");
		metadata.item("FilterChangedRef", "EventRef::filterChanged");
	}
	static register(context: TypeDescriptionContext): void {
		LiveGridFilterDialogDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LiveGridFilterDialog", () => new LiveGridFilterDialogDescription());
		context.register("LiveGridFilterDialog", LiveGridFilterDialogDescriptionMetadata._metadata);
	}
}


