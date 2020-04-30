/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericAxisRenderer } from "./NumericAxisRenderer";
import { AxisLabelManager } from "./AxisLabelManager";
import { Base, Type, markType } from "igniteui-core/type";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";

/**
 * @hidden 
 */
export class PercentChangeAxisRenderer extends NumericAxisRenderer {
	static $t: Type = markType(PercentChangeAxisRenderer, 'PercentChangeAxisRenderer', (<any>NumericAxisRenderer).$type);
	constructor(labelManager: AxisLabelManager) {
		super(labelManager);
	}
	getLabel(renderingParams: AxisRenderingParametersBase, unscaledValue: number, index: number, interval: number): any {
		let result: any = super.getLabel(renderingParams, unscaledValue, index, interval);
		if (renderingParams.label == null) {
			result += "%";
		}
		return result;
	}
}


