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
export class BarTrendFitCalculator extends Base {
	static $t: Type = markType(BarTrendFitCalculator, 'BarTrendFitCalculator');
	static calculateFit(trend: List$1<Point>, trendLineType: TrendLineType, trendResolutionParams: TrendResolutionParams, trendCoefficients: number[], count: number, GetUnscaledX: (arg1: number) => number, GetUnscaledY: (arg1: number) => number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, ymin: number, ymax: number): number[] {
		if (trendCoefficients == null) {
			switch (trendLineType) {
				case TrendLineType.LinearFit:
				trendCoefficients = LeastSquaresFit.linearFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.QuadraticFit:
				trendCoefficients = LeastSquaresFit.quadraticFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.CubicFit:
				trendCoefficients = LeastSquaresFit.cubicFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.QuarticFit:
				trendCoefficients = LeastSquaresFit.quarticFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.QuinticFit:
				trendCoefficients = LeastSquaresFit.quinticFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.ExponentialFit:
				trendCoefficients = LeastSquaresFit.exponentialFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.LogarithmicFit:
				trendCoefficients = LeastSquaresFit.logarithmicFit(count, GetUnscaledY, GetUnscaledX);
				break;

				case TrendLineType.PowerLawFit:
				trendCoefficients = LeastSquaresFit.powerLawFit(count, GetUnscaledY, GetUnscaledX);
				break;

				default: throw new NotImplementedException(0);
			}

		}
		if (trendCoefficients == null) {
			return null;
		}
		for (let i: number = 0; i < trendResolutionParams.viewport.height; i += 2) {
			let p: number = i / (trendResolutionParams.viewport.height - 1);
			let yi: number = ymin + p * (ymax - ymin);
			let xi: number = NaN;
			switch (trendLineType) {
				case TrendLineType.LinearFit:
				xi = LeastSquaresFit.linearEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.QuadraticFit:
				xi = LeastSquaresFit.quadraticEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.CubicFit:
				xi = LeastSquaresFit.cubicEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.QuarticFit:
				xi = LeastSquaresFit.quarticEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.QuinticFit:
				xi = LeastSquaresFit.quinticEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.ExponentialFit:
				xi = LeastSquaresFit.exponentialEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.LogarithmicFit:
				xi = LeastSquaresFit.logarithmicEvaluate(trendCoefficients, yi);
				break;

				case TrendLineType.PowerLawFit:
				xi = LeastSquaresFit.powerLawEvaluate(trendCoefficients, yi);
				break;

				default: throw new NotImplementedException(0);
			}

			xi = GetScaledXValue(xi);
			yi = GetScaledYValue(yi);
			if (!isNaN_(xi) && !isInfinity(xi)) {
				trend.add(<Point>{ $type: Point_$type, x: xi, y: yi + trendResolutionParams.offset });
			}
		}
		return trendCoefficients;
	}
}


