/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DataBindingEventArgsDescription } from "./DataBindingEventArgsDescription";

/**
 * @hidden 
 */
export class DataBindingEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(DataBindingEventArgsDescriptionMetadata, 'DataBindingEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DataBindingEventArgsDescriptionMetadata._metadata == null) {
			DataBindingEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DataBindingEventArgsDescriptionMetadata.fillMetadata(context, DataBindingEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ResolvedValueRef", "(w:ResolvedValue,wf:ResolvedValue)DataRef");
		metadata.item("RowObjectRef", "(w:RowObject,wf:RowObject)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		DataBindingEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DataBindingEventArgs", () => new DataBindingEventArgsDescription());
		context.register("DataBindingEventArgs", DataBindingEventArgsDescriptionMetadata._metadata);
	}
}


