/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StackedColumnSeriesDescription } from "./StackedColumnSeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Stacked100ColumnSeriesDescription extends StackedColumnSeriesDescription {
	static $t: Type = markType(Stacked100ColumnSeriesDescription, 'Stacked100ColumnSeriesDescription', (<any>StackedColumnSeriesDescription).$type);
	protected get_type(): string {
		return "Stacked100ColumnSeries";
	}
	constructor() {
		super();
	}
}


