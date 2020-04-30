/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSeriesCreatedEventArgsDescriptionMetadata } from "./StackedSeriesCreatedEventArgsDescriptionMetadata";
import { CategorySeriesDescriptionMetadata } from "./CategorySeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class StackedSeriesBaseDescriptionMetadata extends Base {
	static $t: Type = markType(StackedSeriesBaseDescriptionMetadata, 'StackedSeriesBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (StackedSeriesBaseDescriptionMetadata._metadata == null) {
			StackedSeriesBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			StackedSeriesBaseDescriptionMetadata.fillMetadata(context, StackedSeriesBaseDescriptionMetadata._metadata);
			StackedSeriesCreatedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("AutoGenerateSeries", "Boolean");
		metadata.item("ReverseLegendOrder", "Boolean");
		metadata.item("SeriesCreatedRef", "EventRef::seriesCreated");
		StackedSeriesBaseDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		StackedSeriesBaseDescriptionMetadata.ensureMetadata(context);
		context.register("StackedSeriesBase", StackedSeriesBaseDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Series", "Collection:StackedFragmentSeries:StackedSeriesCollection:StackedFragmentSeries");
	}
}


