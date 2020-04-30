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
import { BollingerBandWidthIndicatorDescription } from "./BollingerBandWidthIndicatorDescription";

/**
 * @hidden 
 */
export class BollingerBandWidthIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(BollingerBandWidthIndicatorDescriptionMetadata, 'BollingerBandWidthIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (BollingerBandWidthIndicatorDescriptionMetadata._metadata == null) {
			BollingerBandWidthIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			BollingerBandWidthIndicatorDescriptionMetadata.fillMetadata(context, BollingerBandWidthIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Period", "Number:int");
		metadata.item("Multiplier", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		BollingerBandWidthIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("BollingerBandWidthIndicator", () => new BollingerBandWidthIndicatorDescription());
		context.register("BollingerBandWidthIndicator", BollingerBandWidthIndicatorDescriptionMetadata._metadata);
	}
}


