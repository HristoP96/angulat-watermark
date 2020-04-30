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
import { AccumulationDistributionIndicatorDescription } from "./AccumulationDistributionIndicatorDescription";

/**
 * @hidden 
 */
export class AccumulationDistributionIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(AccumulationDistributionIndicatorDescriptionMetadata, 'AccumulationDistributionIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AccumulationDistributionIndicatorDescriptionMetadata._metadata == null) {
			AccumulationDistributionIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AccumulationDistributionIndicatorDescriptionMetadata.fillMetadata(context, AccumulationDistributionIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		AccumulationDistributionIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("AccumulationDistributionIndicator", () => new AccumulationDistributionIndicatorDescription());
		context.register("AccumulationDistributionIndicator", AccumulationDistributionIndicatorDescriptionMetadata._metadata);
	}
}


