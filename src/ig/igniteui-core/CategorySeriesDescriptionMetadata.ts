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
import { AssigningCategoryMarkerStyleEventArgsDescriptionMetadata } from "./AssigningCategoryMarkerStyleEventArgsDescriptionMetadata";
import { MarkerSeriesDescriptionMetadata } from "./MarkerSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class CategorySeriesDescriptionMetadata extends Base {
	static $t: Type = markType(CategorySeriesDescriptionMetadata, 'CategorySeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategorySeriesDescriptionMetadata._metadata == null) {
			CategorySeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategorySeriesDescriptionMetadata.fillMetadata(context, CategorySeriesDescriptionMetadata._metadata);
			AssigningCategoryStyleEventArgsDescriptionMetadata.register(context);
			AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		MarkerSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("IsCustomCategoryStyleAllowed", "Boolean");
		metadata.item("IsCustomCategoryMarkerStyleAllowed", "Boolean");
		metadata.item("UseHighMarkerFidelity", "Boolean");
		metadata.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
		metadata.item("IsTransitionInEnabled", "Boolean");
		metadata.item("AssigningCategoryStyleRef", "EventRef::assigningCategoryStyle");
		metadata.item("AssigningCategoryMarkerStyleRef", "EventRef::assigningCategoryMarkerStyle");
	}
	static register(context: TypeDescriptionContext): void {
		CategorySeriesDescriptionMetadata.ensureMetadata(context);
		context.register("CategorySeries", CategorySeriesDescriptionMetadata._metadata);
	}
}


