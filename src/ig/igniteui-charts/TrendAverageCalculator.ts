/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, fromEnum, Point_$type, Type, markType, getEnumerator, PointUtil } from "igniteui-core/type";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendCalculators } from "igniteui-core/TrendCalculators";
import { NotImplementedException } from "igniteui-core/NotImplementedException";

/**
 * @hidden 
 */
export class TrendAverageCalculator extends Base {
	static $t: Type = markType(TrendAverageCalculator, 'TrendAverageCalculator');
	private static getAverage(trendLineType: TrendLineType, sourceColumn: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		let average: IEnumerable$1<number>;
		switch (trendLineType) {
			case TrendLineType.SimpleAverage:

			case TrendLineType.ExponentialAverage:

			case TrendLineType.ModifiedAverage:

			case TrendLineType.WeightedAverage:
			if (period < 1) {
				period = 1;
			}
			break;

		}

		switch (trendLineType) {
			case TrendLineType.SimpleAverage:
			average = TrendCalculators.sMA(sourceColumn, period);
			break;

			case TrendLineType.ExponentialAverage:
			average = TrendCalculators.eMA(sourceColumn, period);
			break;

			case TrendLineType.ModifiedAverage:
			average = TrendCalculators.mMA(sourceColumn, period);
			break;

			case TrendLineType.CumulativeAverage:
			average = TrendCalculators.cMA(sourceColumn);
			break;

			case TrendLineType.WeightedAverage:
			average = TrendCalculators.wMA(sourceColumn, period);
			break;

			default: throw new NotImplementedException(0);
		}

		return average;
	}
	static calculateSingleValueAverage(trendLineType: TrendLineType, trendColumn: IList$1<number>, valueColumn: IList$1<number>, period: number): void {
		if (trendColumn.count == 0) {
			let average: IEnumerable$1<number> = TrendAverageCalculator.getAverage(trendLineType, valueColumn, period);
			for (let d of fromEnum<number>(average)) {
				trendColumn.add(d);
			}
		}
	}
	static calculateXYAverage(trendLineType: TrendLineType, trendColumn: IList$1<Point>, XColumn: IEnumerable$1<number>, YColumn: IEnumerable$1<number>, period: number): void {
		if (trendColumn.count == 0) {
			let xAverage: IEnumerator$1<number> = getEnumerator(TrendAverageCalculator.getAverage(trendLineType, XColumn, period));
			let yAverage: IEnumerator$1<number> = getEnumerator(TrendAverageCalculator.getAverage(trendLineType, YColumn, period));
			while (xAverage.moveNext() && yAverage.moveNext()) {
				trendColumn.add(<Point>{ $type: Point_$type, x: xAverage.current, y: yAverage.current });
			}
		}
	}
}


