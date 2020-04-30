/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialOverlayDescriptionMetadata } from "./FinancialOverlayDescriptionMetadata";
import { PriceChannelOverlayDescription } from "./PriceChannelOverlayDescription";

/**
 * @hidden 
 */
export class PriceChannelOverlayDescriptionMetadata extends Base {
	static $t: Type = markType(PriceChannelOverlayDescriptionMetadata, 'PriceChannelOverlayDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PriceChannelOverlayDescriptionMetadata._metadata == null) {
			PriceChannelOverlayDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PriceChannelOverlayDescriptionMetadata.fillMetadata(context, PriceChannelOverlayDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FinancialOverlayDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Period", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		PriceChannelOverlayDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PriceChannelOverlay", () => new PriceChannelOverlayDescription());
		context.register("PriceChannelOverlay", PriceChannelOverlayDescriptionMetadata._metadata);
	}
}


