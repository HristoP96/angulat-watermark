/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { LeastSquaresFit } from "igniteui-core/LeastSquaresFit";
import { NotImplementedException } from "igniteui-core/NotImplementedException";
import { Rect } from "igniteui-core/Rect";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class TrendFitCalculator extends Base {
	static $t: Type = markType(TrendFitCalculator, 'TrendFitCalculator');
	static calculateFit(trend: List$1<Point>, trendLineType: TrendLineType, trendResolutionParams: TrendResolutionParams, trendCoefficients: number[], count: number, GetUnscaledX: (arg1: number) => number, GetUnscaledY: (arg1: number) => number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, xmin: number, xmax: number): number[] {
		if (trendCoefficients == null) {
			switch (trendLineType) {
				case TrendLineType.LinearFit:
				trendCoefficients = LeastSquaresFit.linearFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.QuadraticFit:
				trendCoefficients = LeastSquaresFit.quadraticFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.CubicFit:
				trendCoefficients = LeastSquaresFit.cubicFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.QuarticFit:
				trendCoefficients = LeastSquaresFit.quarticFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.QuinticFit:
				trendCoefficients = LeastSquaresFit.quinticFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.ExponentialFit:
				trendCoefficients = LeastSquaresFit.exponentialFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.LogarithmicFit:
				trendCoefficients = LeastSquaresFit.logarithmicFit(count, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.PowerLawFit:
				trendCoefficients = LeastSquaresFit.powerLawFit(count, GetUnscaledX, GetUnscaledY);
				break;

				default: throw new NotImplementedException(0);
			}

		}
		if (trendCoefficients == null) {
			return null;
		}
		for (let i: number = 0; i < trendResolutionParams.viewport.width; i += 2) {
			let p: number = i / (trendResolutionParams.viewport.width - 1);
			let xi: number = xmin + p * (xmax - xmin);
			let yi: number = NaN;
			switch (trendLineType) {
				case TrendLineType.LinearFit:
				yi = LeastSquaresFit.linearEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.QuadraticFit:
				yi = LeastSquaresFit.quadraticEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.CubicFit:
				yi = LeastSquaresFit.cubicEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.QuarticFit:
				yi = LeastSquaresFit.quarticEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.QuinticFit:
				yi = LeastSquaresFit.quinticEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.ExponentialFit:
				yi = LeastSquaresFit.exponentialEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.LogarithmicFit:
				yi = LeastSquaresFit.logarithmicEvaluate(trendCoefficients, xi);
				break;

				case TrendLineType.PowerLawFit:
				yi = LeastSquaresFit.powerLawEvaluate(trendCoefficients, xi);
				break;

				default: throw new NotImplementedException(0);
			}

			xi = GetScaledXValue(xi);
			yi = GetScaledYValue(yi);
			if (!isNaN_(yi) && !isInfinity(yi)) {
				trend.add(<Point>{ $type: Point_$type, x: xi + trendResolutionParams.offset, y: yi });
			}
		}
		return trendCoefficients;
	}
}


