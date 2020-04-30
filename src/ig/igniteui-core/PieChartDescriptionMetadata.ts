/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { PieChartBaseDescriptionMetadata } from "./PieChartBaseDescriptionMetadata";
import { PieChartDescription } from "./PieChartDescription";

/**
 * @hidden 
 */
export class PieChartDescriptionMetadata extends Base {
	static $t: Type = markType(PieChartDescriptionMetadata, 'PieChartDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamPieChart");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
		metadata.item("LegendRef", "(w:Legend)DataRef:String");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PieChartDescriptionMetadata._metadata == null) {
			PieChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PieChartDescriptionMetadata.fillMetadata(context, PieChartDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		PieChartBaseDescriptionMetadata.fillMetadata(context, metadata);
		PieChartDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		PieChartDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PieChart", () => new PieChartDescription());
		context.register("PieChart", PieChartDescriptionMetadata._metadata);
	}
}


