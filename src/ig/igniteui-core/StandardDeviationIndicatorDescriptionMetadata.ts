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
import { StandardDeviationIndicatorDescription } from "./StandardDeviationIndicatorDescription";

/**
 * @hidden 
 */
export class StandardDeviationIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(StandardDeviationIndicatorDescriptionMetadata, 'StandardDeviationIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (StandardDeviationIndicatorDescriptionMetadata._metadata == null) {
			StandardDeviationIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			StandardDeviationIndicatorDescriptionMetadata.fillMetadata(context, StandardDeviationIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Period", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		StandardDeviationIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("StandardDeviationIndicator", () => new StandardDeviationIndicatorDescription());
		context.register("StandardDeviationIndicator", StandardDeviationIndicatorDescriptionMetadata._metadata);
	}
}


