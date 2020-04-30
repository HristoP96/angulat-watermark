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
import { SlowStochasticOscillatorIndicatorDescription } from "./SlowStochasticOscillatorIndicatorDescription";

/**
 * @hidden 
 */
export class SlowStochasticOscillatorIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(SlowStochasticOscillatorIndicatorDescriptionMetadata, 'SlowStochasticOscillatorIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SlowStochasticOscillatorIndicatorDescriptionMetadata._metadata == null) {
			SlowStochasticOscillatorIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SlowStochasticOscillatorIndicatorDescriptionMetadata.fillMetadata(context, SlowStochasticOscillatorIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Period", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		SlowStochasticOscillatorIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SlowStochasticOscillatorIndicator", () => new SlowStochasticOscillatorIndicatorDescription());
		context.register("SlowStochasticOscillatorIndicator", SlowStochasticOscillatorIndicatorDescriptionMetadata._metadata);
	}
}


