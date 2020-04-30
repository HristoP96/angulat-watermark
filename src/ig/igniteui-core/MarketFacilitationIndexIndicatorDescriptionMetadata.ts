/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ItemwiseStrategyBasedIndicatorDescriptionMetadata } from "./ItemwiseStrategyBasedIndicatorDescriptionMetadata";
import { MarketFacilitationIndexIndicatorDescription } from "./MarketFacilitationIndexIndicatorDescription";

/**
 * @hidden 
 */
export class MarketFacilitationIndexIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(MarketFacilitationIndexIndicatorDescriptionMetadata, 'MarketFacilitationIndexIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (MarketFacilitationIndexIndicatorDescriptionMetadata._metadata == null) {
			MarketFacilitationIndexIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			MarketFacilitationIndexIndicatorDescriptionMetadata.fillMetadata(context, MarketFacilitationIndexIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ItemwiseStrategyBasedIndicatorDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		MarketFacilitationIndexIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("MarketFacilitationIndexIndicator", () => new MarketFacilitationIndexIndicatorDescription());
		context.register("MarketFacilitationIndexIndicator", MarketFacilitationIndexIndicatorDescriptionMetadata._metadata);
	}
}


