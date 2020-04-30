/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Thickness } from "igniteui-core/Thickness";
import { RowPath } from "./RowPath";

/**
 * @hidden 
 */
export class CalculationParameters extends Base {
	static $t: Type = markType(CalculationParameters, 'CalculationParameters');
	top: number = 0;
	bottom: number = 0;
	left: number = 0;
	right: number = 0;
	topRow: RowPath = null;
	bottomRow: RowPath = null;
	leftColumn: number = 0;
	rightColumn: number = 0;
	leftColumnOffset: number = 0;
	rightColumnOffset: number = 0;
	adjustedLeft: number = 0;
	adjustedRight: number = 0;
	adjustedMaxWidth: number = 0;
	isViewDirty: boolean = false;
	private _inset: Thickness = null;
	get inset(): Thickness {
		return this._inset;
	}
	set inset(value: Thickness) {
		this._inset = value;
	}
}


