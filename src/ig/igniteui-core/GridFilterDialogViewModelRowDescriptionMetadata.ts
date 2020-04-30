/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelRowDescription } from "./GridFilterDialogViewModelRowDescription";

/**
 * @hidden 
 */
export class GridFilterDialogViewModelRowDescriptionMetadata extends Base {
	static $t: Type = markType(GridFilterDialogViewModelRowDescriptionMetadata, 'GridFilterDialogViewModelRowDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridFilterDialogViewModelRowDescriptionMetadata._metadata == null) {
			GridFilterDialogViewModelRowDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridFilterDialogViewModelRowDescriptionMetadata.fillMetadata(context, GridFilterDialogViewModelRowDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Operators", "Array:string");
		metadata.item("CurrentOperator", "String");
		metadata.item("OperandNumber", "Array:int");
		metadata.item("Operand1Ref", "(w:Operand1,wf:Operand1)DataRef");
		metadata.item("Operand2Ref", "(w:Operand2,wf:Operand2)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		GridFilterDialogViewModelRowDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridFilterDialogViewModelRow", () => new GridFilterDialogViewModelRowDescription());
		context.register("GridFilterDialogViewModelRow", GridFilterDialogViewModelRowDescriptionMetadata._metadata);
	}
}


