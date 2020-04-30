/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { CrosshairLayerDescriptionMetadata } from "./CrosshairLayerDescriptionMetadata";
import { CategoryToolTipLayerDescriptionMetadata } from "./CategoryToolTipLayerDescriptionMetadata";
import { ItemToolTipLayerDescriptionMetadata } from "./ItemToolTipLayerDescriptionMetadata";
import { CategoryItemHighlightLayerDescriptionMetadata } from "./CategoryItemHighlightLayerDescriptionMetadata";
import { CategoryHighlightLayerDescriptionMetadata } from "./CategoryHighlightLayerDescriptionMetadata";
import { FinalValueLayerDescriptionMetadata } from "./FinalValueLayerDescriptionMetadata";
import { CalloutLayerDescriptionMetadata } from "./CalloutLayerDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartAnnotationLayersDescriptionModule extends Base {
	static $t: Type = markType(DataChartAnnotationLayersDescriptionModule, 'DataChartAnnotationLayersDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		CrosshairLayerDescriptionMetadata.register(context);
		CategoryToolTipLayerDescriptionMetadata.register(context);
		ItemToolTipLayerDescriptionMetadata.register(context);
		CategoryItemHighlightLayerDescriptionMetadata.register(context);
		CategoryHighlightLayerDescriptionMetadata.register(context);
		FinalValueLayerDescriptionMetadata.register(context);
		CalloutLayerDescriptionMetadata.register(context);
	}
}


