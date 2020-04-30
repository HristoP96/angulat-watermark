/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineFragmentBaseDescriptionMetadata } from "./SplineFragmentBaseDescriptionMetadata";
import { SplineAreaFragmentDescription } from "./SplineAreaFragmentDescription";

/**
 * @hidden 
 */
export class SplineAreaFragmentDescriptionMetadata extends Base {
	static $t: Type = markType(SplineAreaFragmentDescriptionMetadata, 'SplineAreaFragmentDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SplineAreaFragmentDescriptionMetadata._metadata == null) {
			SplineAreaFragmentDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SplineAreaFragmentDescriptionMetadata.fillMetadata(context, SplineAreaFragmentDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SplineFragmentBaseDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		SplineAreaFragmentDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SplineAreaFragment", () => new SplineAreaFragmentDescription());
		context.register("SplineAreaFragment", SplineAreaFragmentDescriptionMetadata._metadata);
	}
}


