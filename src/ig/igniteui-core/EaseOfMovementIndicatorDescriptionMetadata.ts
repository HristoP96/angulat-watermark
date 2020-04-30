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
import { EaseOfMovementIndicatorDescription } from "./EaseOfMovementIndicatorDescription";

/**
 * @hidden 
 */
export class EaseOfMovementIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(EaseOfMovementIndicatorDescriptionMetadata, 'EaseOfMovementIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (EaseOfMovementIndicatorDescriptionMetadata._metadata == null) {
			EaseOfMovementIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			EaseOfMovementIndicatorDescriptionMetadata.fillMetadata(context, EaseOfMovementIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		EaseOfMovementIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("EaseOfMovementIndicator", () => new EaseOfMovementIndicatorDescription());
		context.register("EaseOfMovementIndicator", EaseOfMovementIndicatorDescriptionMetadata._metadata);
	}
}


