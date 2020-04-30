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
import { AverageDirectionalIndexIndicatorDescription } from "./AverageDirectionalIndexIndicatorDescription";

/**
 * @hidden 
 */
export class AverageDirectionalIndexIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(AverageDirectionalIndexIndicatorDescriptionMetadata, 'AverageDirectionalIndexIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AverageDirectionalIndexIndicatorDescriptionMetadata._metadata == null) {
			AverageDirectionalIndexIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AverageDirectionalIndexIndicatorDescriptionMetadata.fillMetadata(context, AverageDirectionalIndexIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Period", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		AverageDirectionalIndexIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("AverageDirectionalIndexIndicator", () => new AverageDirectionalIndexIndicatorDescription());
		context.register("AverageDirectionalIndexIndicator", AverageDirectionalIndexIndicatorDescriptionMetadata._metadata);
	}
}


