/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, Type, fromEnum, typeCast, markType } from "igniteui-core/type";
import { ITrendLineManager, ITrendLineManager_$type } from "./ITrendLineManager";
import { TrendLineManagerType } from "./TrendLineManagerType";
import { List$1 } from "igniteui-core/List$1";
import { Polyline } from "igniteui-core/Polyline";
import { Shape } from "igniteui-core/Shape";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { Clipper } from "igniteui-core/Clipper";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { Flattener } from "igniteui-core/Flattener";
import { Canvas } from "igniteui-core/Canvas";
import { Series } from "./Series";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Panel } from "igniteui-core/Panel";
import { UIElement } from "igniteui-core/UIElement";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export abstract class TrendLineManagerBase$1<TTrendColumn> extends Base implements ITrendLineManager {
	static $t: Type = markType(TrendLineManagerBase$1, 'TrendLineManagerBase$1', (<any>Base).$type, [ITrendLineManager_$type]);
	protected $tTrendColumn: Type = null;
	abstract get managerType(): TrendLineManagerType;
	private _trendColumn: List$1<TTrendColumn> = null;
	get trendColumn(): List$1<TTrendColumn> {
		return this._trendColumn;
	}
	set trendColumn(value: List$1<TTrendColumn>) {
		this._trendColumn = value;
	}
	private _trendCoefficients: number[] = null;
	protected get trendCoefficients(): number[] {
		return this._trendCoefficients;
	}
	protected set trendCoefficients(value: number[]) {
		this._trendCoefficients = value;
	}
	constructor($tTrendColumn: Type) {
		super();
		this.$tTrendColumn = $tTrendColumn;
		this.$type = this.$type.specialize(this.$tTrendColumn);
		this.trendColumn = new List$1<TTrendColumn>(this.$tTrendColumn, 0);
	}
	get trendPolyline(): Polyline {
		return this._trendPolyline;
	}
	private readonly _trendPolyline: Polyline = ((() => {
		let $ret = new Polyline();
		$ret.isHitTestVisible = false;
		return $ret;
	})());
	rasterizeTrendLine(trendPoints: List$1<Point>): void {
		this.rasterizeTrendLine1(trendPoints, null);
	}
	protected isFit(type: TrendLineType): boolean {
		return type == TrendLineType.LinearFit || type == TrendLineType.QuadraticFit || type == TrendLineType.CubicFit || type == TrendLineType.QuarticFit || type == TrendLineType.QuinticFit || type == TrendLineType.LogarithmicFit || type == TrendLineType.ExponentialFit || type == TrendLineType.PowerLawFit;
	}
	protected isAverage(type: TrendLineType): boolean {
		return type == TrendLineType.SimpleAverage || type == TrendLineType.ExponentialAverage || type == TrendLineType.ModifiedAverage || type == TrendLineType.CumulativeAverage || type == TrendLineType.WeightedAverage;
	}
	rasterizeTrendLine1(trendPoints: List$1<Point>, clipper: Clipper): void {
		this.trendPolyline.points.clear();
		if (clipper != null) {
			clipper.target = this.trendPolyline.points;
		}
		if (trendPoints != null) {
			for (let point of fromEnum<Point>(trendPoints)) {
				if (!isNaN_(point.x) && !isNaN_(point.y)) {
					if (clipper != null) {
						clipper.add(point);
					} else {
						this.trendPolyline.points.add(point);
					}
				}
			}
		}
		this.trendPolyline.isHitTestVisible = this.trendPolyline.points.count > 0;
	}
	protected flattenTrendLine(trend: IList$1<Point>, trendResolutionParams: TrendResolutionParams, flattenedPoints: List$1<Point>): void {
		this.flattenTrendLine1(trend, trendResolutionParams, flattenedPoints, null);
	}
	protected flattenTrendLine1(trend: IList$1<Point>, trendResolutionParams: TrendResolutionParams, flattenedPoints: List$1<Point>, clipper: Clipper): void {
		if (clipper != null) {
			clipper.target = flattenedPoints;
		}
		for (let i of fromEnum<number>(Flattener.flatten3(trend.count, (i: number) => trend.item(i).x, (i: number) => trend.item(i).y, trendResolutionParams.resolution))) {
			if (clipper != null) {
				clipper.add(trend.item(i));
			} else {
				flattenedPoints.add(trend.item(i));
			}
		}
	}
	attachPolyLine(rootCanvas: Canvas, owner: Series): void {
		if (rootCanvas == null || owner == null) {
			return;
		}
		if (this.trendPolyline.parent != null) {
			this.detach();
		}
		rootCanvas.children.add(this.trendPolyline);
	}
	detach(): void {
		if (this.trendPolyline == null) {
			return;
		}
		let parent: Panel = typeCast<Panel>((<any>Panel).$type, this.trendPolyline.parent);
		if (parent != null) {
			parent.children.remove(this.trendPolyline);
		}
	}
	clearPoints(): void {
		this.trendPolyline.points.clear();
	}
	reset(): void {
		this.trendCoefficients = null;
		this.trendColumn.clear();
	}
	dataUpdated(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		switch (action) {
			case FastItemsSourceEventAction.Change:

			case FastItemsSourceEventAction.Replace:

			case FastItemsSourceEventAction.Insert:

			case FastItemsSourceEventAction.Remove:

			case FastItemsSourceEventAction.Reset:
			this.reset();
			break;

		}

	}
	propertyUpdated(sender: any, propertyName: string, oldValue: any, newValue: any): boolean {
		let requiresRender: boolean = false;
		switch (propertyName) {
			case TrendLineManagerBase$1.trendLineTypePropertyName:

			case TrendLineManagerBase$1.trendLinePeriodPropertyName:
			this.reset();
			requiresRender = true;
			break;

			case TrendLineManagerBase$1.trendLineThicknessPropertyName:
			requiresRender = true;
			break;

			case Series.fastItemsSourcePropertyName:
			requiresRender = true;
			this.reset();
			break;

		}

		return requiresRender;
	}
	static readonly trendLineDashArrayPropertyName: string = "TrendLineDashArray";
	static readonly trendLineTypePropertyName: string = "TrendLineType";
	static readonly trendLinePeriodPropertyName: string = "TrendLinePeriod";
	static readonly trendLineBrushPropertyName: string = "TrendLineBrush";
	static readonly trendLineActualBrushPropertyName: string = "ActualTrendLineBrush";
	static readonly trendLineThicknessPropertyName: string = "TrendLineThickness";
	static readonly trendLineDashCapPropertyName: string = "TrendLineDashCap";
	static readonly trendLineZIndexPropertyName: string = "TrendLineZIndex";
}


