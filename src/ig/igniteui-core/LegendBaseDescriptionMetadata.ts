/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseButtonEventArgsDescriptionMetadata } from "./LegendMouseButtonEventArgsDescriptionMetadata";
import { LegendMouseEventArgsDescriptionMetadata } from "./LegendMouseEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class LegendBaseDescriptionMetadata extends Base {
	static $t: Type = markType(LegendBaseDescriptionMetadata, 'LegendBaseDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LegendBaseDescriptionMetadata._metadata == null) {
			LegendBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LegendBaseDescriptionMetadata.fillMetadata(context, LegendBaseDescriptionMetadata._metadata);
			LegendMouseButtonEventArgsDescriptionMetadata.register(context);
			LegendMouseEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("LegendItemMouseLeftButtonDownRef", "EventRef::legendItemMouseLeftButtonDown");
		metadata.item("LegendItemMouseLeftButtonUpRef", "EventRef::legendItemMouseLeftButtonUp");
		metadata.item("LegendItemMouseEnterRef", "EventRef::legendItemMouseEnter");
		metadata.item("LegendItemMouseLeaveRef", "EventRef::legendItemMouseLeave");
		metadata.item("LegendItemMouseMoveRef", "EventRef::legendItemMouseMove");
		LegendBaseDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		LegendBaseDescriptionMetadata.ensureMetadata(context);
		context.register("LegendBase", LegendBaseDescriptionMetadata._metadata);
	}
}


