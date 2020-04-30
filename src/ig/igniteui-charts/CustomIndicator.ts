/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { CustomIndicatorStrategy } from "./CustomIndicatorStrategy";
import { Type, Base, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, fromEnum, markType } from "igniteui-core/type";
import { FinancialEventArgs } from "./FinancialEventArgs";
import { FinancialIndicator } from "./FinancialIndicator";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { FinancialSeries } from "./FinancialSeries";
import { Axis } from "./Axis";

/**
 * @hidden 
 */
export class CustomIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(CustomIndicator, 'CustomIndicator', (<any>StrategyBasedIndicator).$type);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new CustomIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>CustomIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	protected basedOn(position: number, count: number): IList$1<string> {
		let dataSource: FinancialCalculationDataSource = this.provideDataSource(position, count);
		let supportingCalculations: FinancialCalculationSupportingCalculations = this.provideSupportingCalculations(dataSource);
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		if (this._basedOnColumns != null) {
			let args: FinancialEventArgs = new FinancialEventArgs(dataSource.calculateFrom, dataSource.calculateCount, dataSource, supportingCalculations, this);
			this._basedOnColumns(this, args);
			if (args.basedOn != null) {
				for (let propertyName of fromEnum<string>(args.basedOn)) {
					list.add(propertyName);
				}
			}
		}
		return list;
	}
	private _indicator: (sender: any, e: FinancialEventArgs) => void = null;
	get indicator(): (sender: any, e: FinancialEventArgs) => void {
		return this._indicator;
	}
	set indicator(value: (sender: any, e: FinancialEventArgs) => void) {
		this._indicator = value;
		this.fullIndicatorRefresh();
	}
	private _basedOnColumns: (sender: any, e: FinancialEventArgs) => void = null;
	get basedOnColumns(): (sender: any, e: FinancialEventArgs) => void {
		return this._basedOnColumns;
	}
	set basedOnColumns(value: (sender: any, e: FinancialEventArgs) => void) {
		this._basedOnColumns = value;
	}
	protected indicatorOverride(position: number, count: number): boolean {
		super.indicatorOverride(position, count);
		if (this._indicator != null) {
			let dataSource: FinancialCalculationDataSource = this.provideDataSource(position, count);
			if (count == 0) {
				return false;
			}
			if (!this.validateBasedOn(this.basedOn(position, count))) {
				return false;
			}
			this._indicator(this, new FinancialEventArgs(position, count, dataSource, this.provideSupportingCalculations(dataSource), this));
			if (this.updateRange(dataSource) && this.yAxis != null) {
				this.yAxis.updateRange();
			}
			return true;
		}
		return false;
	}
}


