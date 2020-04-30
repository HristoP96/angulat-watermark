/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatRadialGaugeLabelEventArgsDescriptionMetadata } from "./FormatRadialGaugeLabelEventArgsDescriptionMetadata";
import { AlignRadialGaugeLabelEventArgsDescription } from "./AlignRadialGaugeLabelEventArgsDescription";

/**
 * @hidden 
 */
export class AlignRadialGaugeLabelEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(AlignRadialGaugeLabelEventArgsDescriptionMetadata, 'AlignRadialGaugeLabelEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AlignRadialGaugeLabelEventArgsDescriptionMetadata._metadata == null) {
			AlignRadialGaugeLabelEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AlignRadialGaugeLabelEventArgsDescriptionMetadata.fillMetadata(context, AlignRadialGaugeLabelEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FormatRadialGaugeLabelEventArgsDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		AlignRadialGaugeLabelEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("AlignRadialGaugeLabelEventArgs", () => new AlignRadialGaugeLabelEventArgsDescription());
		context.register("AlignRadialGaugeLabelEventArgs", AlignRadialGaugeLabelEventArgsDescriptionMetadata._metadata);
	}
}


