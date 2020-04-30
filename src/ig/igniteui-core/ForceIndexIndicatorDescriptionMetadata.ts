/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { ForceIndexIndicatorDescription } from "./ForceIndexIndicatorDescription";

/**
 * @hidden 
 */
export class ForceIndexIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(ForceIndexIndicatorDescriptionMetadata, 'ForceIndexIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ForceIndexIndicatorDescriptionMetadata._metadata == null) {
			ForceIndexIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ForceIndexIndicatorDescriptionMetadata.fillMetadata(context, ForceIndexIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Period", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		ForceIndexIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ForceIndexIndicator", () => new ForceIndexIndicatorDescription());
		context.register("ForceIndexIndicator", ForceIndexIndicatorDescriptionMetadata._metadata);
	}
}


