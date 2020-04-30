/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { Series } from "./Series";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";

/**
 * @hidden 
 */
export class Stacked100DataPreparer extends Base {
	static $t: Type = markType(Stacked100DataPreparer, 'Stacked100DataPreparer');
	static prepareData(target: StackedSeriesBase): void {
		if (target.fastItemsSource == null) {
			return;
		}
		let min: number = Number.POSITIVE_INFINITY;
		let max: number = Number.NEGATIVE_INFINITY;
		for (let i: number = 0; i < target.fastItemsSource.count; i++) {
			let total: number = Math.abs(target.lows[i]) + target.highs[i];
			if (total == 0) {
				min = Math.min(min, 0);
				max = Math.max(max, 0);
				continue;
			}
			min = Math.min(min, target.lows[i] / total * 100);
			max = Math.max(max, target.highs[i] / total * 100);
		}
		target.minimum = min;
		target.maximum = max;
	}
}


