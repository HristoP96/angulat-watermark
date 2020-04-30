/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { FinancialCalculationDataSourceDescription } from "./FinancialCalculationDataSourceDescription";
import { FinancialCalculationSupportingCalculationsDescription } from "./FinancialCalculationSupportingCalculationsDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FinancialEventArgsDescription extends Description {
	static $t: Type = markType(FinancialEventArgsDescription, 'FinancialEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "FinancialEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _position: number = 0;
	get position(): number {
		return this._position;
	}
	set position(value: number) {
		this._position = value;
		this.markDirty("Position");
	}
	private _count: number = 0;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
		this.markDirty("Count");
	}
	private _dataSource: FinancialCalculationDataSourceDescription = null;
	get dataSource(): FinancialCalculationDataSourceDescription {
		return this._dataSource;
	}
	set dataSource(value: FinancialCalculationDataSourceDescription) {
		this._dataSource = value;
		this.markDirty("DataSource");
	}
	private _supportingCalculations: FinancialCalculationSupportingCalculationsDescription = null;
	get supportingCalculations(): FinancialCalculationSupportingCalculationsDescription {
		return this._supportingCalculations;
	}
	set supportingCalculations(value: FinancialCalculationSupportingCalculationsDescription) {
		this._supportingCalculations = value;
		this.markDirty("SupportingCalculations");
	}
}


