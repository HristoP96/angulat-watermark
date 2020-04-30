/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteringEventArgsDescription } from "./ResponsiveStateEnteringEventArgsDescription";

/**
 * @hidden 
 */
export class ResponsiveStateEnteringEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(ResponsiveStateEnteringEventArgsDescriptionMetadata, 'ResponsiveStateEnteringEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ResponsiveStateEnteringEventArgsDescriptionMetadata._metadata == null) {
			ResponsiveStateEnteringEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ResponsiveStateEnteringEventArgsDescriptionMetadata.fillMetadata(context, ResponsiveStateEnteringEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
	}
	static register(context: TypeDescriptionContext): void {
		ResponsiveStateEnteringEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ResponsiveStateEnteringEventArgs", () => new ResponsiveStateEnteringEventArgsDescription());
		context.register("ResponsiveStateEnteringEventArgs", ResponsiveStateEnteringEventArgsDescriptionMetadata._metadata);
	}
}


