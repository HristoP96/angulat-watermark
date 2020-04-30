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
import { PercentagePriceOscillatorIndicatorDescription } from "./PercentagePriceOscillatorIndicatorDescription";

/**
 * @hidden 
 */
export class PercentagePriceOscillatorIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(PercentagePriceOscillatorIndicatorDescriptionMetadata, 'PercentagePriceOscillatorIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PercentagePriceOscillatorIndicatorDescriptionMetadata._metadata == null) {
			PercentagePriceOscillatorIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PercentagePriceOscillatorIndicatorDescriptionMetadata.fillMetadata(context, PercentagePriceOscillatorIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ShortPeriod", "Number:int");
		metadata.item("LongPeriod", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		PercentagePriceOscillatorIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PercentagePriceOscillatorIndicator", () => new PercentagePriceOscillatorIndicatorDescription());
		context.register("PercentagePriceOscillatorIndicator", PercentagePriceOscillatorIndicatorDescriptionMetadata._metadata);
	}
}


