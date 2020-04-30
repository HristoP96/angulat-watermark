/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LegendBaseViewManager } from "./LegendBaseViewManager";
import { LegendBaseView } from "./LegendBaseView";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialLegendViewManager extends LegendBaseViewManager {
	static $t: Type = markType(FinancialLegendViewManager, 'FinancialLegendViewManager', (<any>LegendBaseViewManager).$type);
	constructor(owner: LegendBaseView) {
		super(owner);
	}
	protected createList(): DomWrapper {
		if (this.container == null) {
			return null;
		}
		let result: DomWrapper = this.container.createElement("div");
		return result;
	}
	protected createItemContainer(): DomWrapper {
		if (this.container == null) {
			return null;
		}
		let result: DomWrapper = this.container.createElement("span");
		result.setStyleProperty("display", "inline-block");
		result.setStyleProperty("padding", "5px 2px 5px 2px");
		result.setStyleProperty("margin", "2px");
		return result;
	}
}


