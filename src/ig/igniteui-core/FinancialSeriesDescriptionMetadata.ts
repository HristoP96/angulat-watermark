/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsDescriptionMetadata } from "./AssigningCategoryStyleEventArgsDescriptionMetadata";
import { FinancialEventArgsDescriptionMetadata } from "./FinancialEventArgsDescriptionMetadata";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class FinancialSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialSeriesDescriptionMetadata, 'FinancialSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialSeriesDescriptionMetadata._metadata == null) {
			FinancialSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialSeriesDescriptionMetadata.fillMetadata(context, FinancialSeriesDescriptionMetadata._metadata);
			AssigningCategoryStyleEventArgsDescriptionMetadata.register(context);
			FinancialEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("NegativeBrush", "Brush");
		metadata.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
		metadata.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
		metadata.item("OpenMemberPath", "String");
		metadata.item("HighMemberPath", "String");
		metadata.item("LowMemberPath", "String");
		metadata.item("CloseMemberPath", "String");
		metadata.item("VolumeMemberPath", "String");
		metadata.item("IsCustomCategoryStyleAllowed", "Boolean");
		metadata.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
		metadata.item("IsTransitionInEnabled", "Boolean");
		metadata.item("AssigningCategoryStyleRef", "EventRef::assigningCategoryStyle");
		metadata.item("TypicalRef", "EventRef::typical");
		metadata.item("TypicalBasedOnRef", "EventRef::typicalBasedOn");
	}
	static register(context: TypeDescriptionContext): void {
		FinancialSeriesDescriptionMetadata.ensureMetadata(context);
		context.register("FinancialSeries", FinancialSeriesDescriptionMetadata._metadata);
	}
}


