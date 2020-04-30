/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, runOn, delegateRemove, delegateCombine, Type, markType } from "igniteui-core/type";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";
import { SummaryOperand } from "igniteui-core/SummaryOperand";
import { MinSummaryCalculator } from "igniteui-core/MinSummaryCalculator";
import { MaxSummaryCalculator } from "igniteui-core/MaxSummaryCalculator";
import { SumSummaryCalculator } from "igniteui-core/SumSummaryCalculator";
import { AverageSummaryCalculator } from "igniteui-core/AverageSummaryCalculator";
import { CountSummaryCalculator } from "igniteui-core/CountSummaryCalculator";
import { SummaryCalculator } from "igniteui-core/SummaryCalculator";
import { SummaryDescription } from "igniteui-core/SummaryDescription";
import { ProvideCalculatorEventArgs } from "igniteui-core/ProvideCalculatorEventArgs";
import { FormatSummaryTextEventArgs } from "./FormatSummaryTextEventArgs";

/**
 * @hidden 
 */
export class ColumnSummaryDescription extends Base {
	static $t: Type = markType(ColumnSummaryDescription, 'ColumnSummaryDescription');
	constructor(initNumber: number);
	constructor(initNumber: number, propertyPath: string);
	constructor(initNumber: number, propertyPath: string, operand: SummaryOperand);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let propertyPath: string = <string>_rest[0];
				this.propertyPath = propertyPath;
				this.operand = SummaryOperand.Count;
			}
			break;

			case 2:
			{
				let propertyPath: string = <string>_rest[0];
				let operand: SummaryOperand = <SummaryOperand>_rest[1];
				this.propertyPath = propertyPath;
				this.operand = operand;
			}
			break;

		}

	}
	private _hasResolvedSchema: boolean = false;
	get hasResolvedSchema(): boolean {
		return this._hasResolvedSchema;
	}
	set hasResolvedSchema(value: boolean) {
		this._hasResolvedSchema = value;
	}
	private _resolvedPropertySchema: DataSourceSchemaPropertyType = <DataSourceSchemaPropertyType>0;
	get resolvedPropertySchema(): DataSourceSchemaPropertyType {
		return this._resolvedPropertySchema;
	}
	set resolvedPropertySchema(value: DataSourceSchemaPropertyType) {
		this._resolvedPropertySchema = value;
	}
	private _propertyPath: string = null;
	get propertyPath(): string {
		return this._propertyPath;
	}
	set propertyPath(value: string) {
		this._propertyPath = value;
	}
	private _operand: SummaryOperand = <SummaryOperand>0;
	get operand(): SummaryOperand {
		return this._operand;
	}
	set operand(value: SummaryOperand) {
		this._operand = value;
		switch (this._operand) {
			case SummaryOperand.Min:
			this.calculator = new MinSummaryCalculator();
			break;

			case SummaryOperand.Max:
			this.calculator = new MaxSummaryCalculator();
			break;

			case SummaryOperand.Sum:
			this.calculator = new SumSummaryCalculator();
			break;

			case SummaryOperand.Average:
			this.calculator = new AverageSummaryCalculator();
			break;

			case SummaryOperand.Count:
			this.calculator = new CountSummaryCalculator();
			break;

		}

	}
	private _calculator: SummaryCalculator = null;
	get calculator(): SummaryCalculator {
		return this._calculator;
	}
	set calculator(value: SummaryCalculator) {
		this._calculator = value;
	}
	private _calculatorDisplayName: string = null;
	get calculatorDisplayName(): string {
		return this._calculatorDisplayName;
	}
	set calculatorDisplayName(value: string) {
		this._calculatorDisplayName = value;
	}
	private _displayName: string = null;
	get displayName(): string {
		return this._displayName;
	}
	set displayName(value: string) {
		this._displayName = value;
	}
	private _formatOverride: any = null;
	get formatOverride(): any {
		return this._formatOverride;
	}
	set formatOverride(value: any) {
		this._formatOverride = value;
	}
	private _maxFractionDigits: number = 10;
	get maxFractionDigits(): number {
		return this._maxFractionDigits;
	}
	set maxFractionDigits(value: number) {
		this._maxFractionDigits = value;
	}
	equals(other: any): boolean {
		let o: ColumnSummaryDescription = <ColumnSummaryDescription>other;
		if (o == null) {
			return super.equals(other);
		}
		return o.propertyPath == this.propertyPath && o.operand == this.operand;
	}
	getHashCode(): number {
		return Base.getHashCodeStatic(this.propertyPath) * 17 + <number>this.operand;
	}
	formatText: (sender: any, e: FormatSummaryTextEventArgs) => void = null;
	userFormatValue(value: any, formattedValue: string, formattedText: string): FormatSummaryTextEventArgs {
		let args: FormatSummaryTextEventArgs = ((() => {
			let $ret = new FormatSummaryTextEventArgs();
			$ret.propertyPath = this.propertyPath;
			$ret.displayName = this.displayName;
			$ret.summaryResult = value;
			$ret.formattedResult = formattedValue;
			$ret.formattedText = formattedText;
			return $ret;
		})());
		if (this.formatText != null) {
			this.formatText(this, args);
		}
		return args;
	}
	provideCalculator: (sender: any, args: ProvideCalculatorEventArgs) => void = null;
	private _dataSourceSummaryDesc: SummaryDescription = null;
	get dataSourceSummaryDesc(): SummaryDescription {
		return this._dataSourceSummaryDesc;
	}
	set dataSourceSummaryDesc(value: SummaryDescription) {
		let oldValue = this._dataSourceSummaryDesc;
		if (oldValue != null) {
			oldValue.provideCalculator = delegateRemove(oldValue.provideCalculator, runOn(this, this.onProvideCalculator));
		}
		this._dataSourceSummaryDesc = value;
		if (this._dataSourceSummaryDesc != null) {
			let $t = this._dataSourceSummaryDesc;
			$t.provideCalculator = delegateCombine($t.provideCalculator, runOn(this, this.onProvideCalculator));
		}
	}
	private onProvideCalculator(sender: any, e: ProvideCalculatorEventArgs): void {
		if (this.provideCalculator != null) {
			this.provideCalculator(this, e);
			this.calculator = e.calculator;
		}
	}
}


