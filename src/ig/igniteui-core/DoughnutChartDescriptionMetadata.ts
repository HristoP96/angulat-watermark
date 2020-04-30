/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SliceClickEventArgsDescriptionMetadata } from "./SliceClickEventArgsDescriptionMetadata";
import { HoleDimensionsChangedEventArgsDescriptionMetadata } from "./HoleDimensionsChangedEventArgsDescriptionMetadata";
import { DoughnutChartDescription } from "./DoughnutChartDescription";

/**
 * @hidden 
 */
export class DoughnutChartDescriptionMetadata extends Base {
	static $t: Type = markType(DoughnutChartDescriptionMetadata, 'DoughnutChartDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamDoughnutChart");
		metadata.item("Series", "Collection:RingSeriesBase:RingSeriesCollection:RingSeriesBase");
		metadata.item("Background", "(wf:BackColor/ColorTransform)Brush");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DoughnutChartDescriptionMetadata._metadata == null) {
			DoughnutChartDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DoughnutChartDescriptionMetadata.fillMetadata(context, DoughnutChartDescriptionMetadata._metadata);
			SliceClickEventArgsDescriptionMetadata.register(context);
			HoleDimensionsChangedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("AllowSliceSelection", "Boolean");
		metadata.item("IsSurfaceInteractionDisabled", "Boolean");
		metadata.item("AllowSliceExplosion", "Boolean");
		metadata.item("InnerExtent", "Number:double");
		metadata.item("SelectedSliceFill", "(w:SelectedStyle.Fill,wf:SelectedSliceFill)String");
		metadata.item("SelectedSliceStroke", "(w:SelectedStyle.Stroke,wf:SelectedSliceStroke)String");
		metadata.item("SelectedSliceStrokeThickness", "(w:SelectedStyle.StrokeThickness,wf:SelectedSliceStrokeThickness)Number:double");
		metadata.item("SelectedSliceOpacity", "(w:SelectedStyle.Opacity,wf:SelectedSliceOpacity)Number:double");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("SliceClickRef", "EventRef::sliceClick");
		metadata.item("HoleDimensionsChangedRef", "EventRef::holeDimensionsChanged");
		DoughnutChartDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		DoughnutChartDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DoughnutChart", () => new DoughnutChartDescription());
		context.register("DoughnutChart", DoughnutChartDescriptionMetadata._metadata);
	}
}


