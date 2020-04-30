/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { CalculatedColumnDescription } from "./CalculatedColumnDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FinancialCalculationDataSourceDescription extends Description {
	static $t: Type = markType(FinancialCalculationDataSourceDescription, 'FinancialCalculationDataSourceDescription', (<any>Description).$type);
	protected get_type(): string {
		return "FinancialCalculationDataSource";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _typicalColumn: CalculatedColumnDescription = null;
	get typicalColumn(): CalculatedColumnDescription {
		return this._typicalColumn;
	}
	set typicalColumn(value: CalculatedColumnDescription) {
		this._typicalColumn = value;
		this.markDirty("TypicalColumn");
	}
	private _trueRange: CalculatedColumnDescription = null;
	get trueRange(): CalculatedColumnDescription {
		return this._trueRange;
	}
	set trueRange(value: CalculatedColumnDescription) {
		this._trueRange = value;
		this.markDirty("TrueRange");
	}
	private _trueLow: CalculatedColumnDescription = null;
	get trueLow(): CalculatedColumnDescription {
		return this._trueLow;
	}
	set trueLow(value: CalculatedColumnDescription) {
		this._trueLow = value;
		this.markDirty("TrueLow");
	}
	private _period: number = 0;
	get period(): number {
		return this._period;
	}
	set period(value: number) {
		this._period = value;
		this.markDirty("Period");
	}
	private _shortPeriod: number = 0;
	get shortPeriod(): number {
		return this._shortPeriod;
	}
	set shortPeriod(value: number) {
		this._shortPeriod = value;
		this.markDirty("ShortPeriod");
	}
	private _longPeriod: number = 0;
	get longPeriod(): number {
		return this._longPeriod;
	}
	set longPeriod(value: number) {
		this._longPeriod = value;
		this.markDirty("LongPeriod");
	}
	private _count: number = 0;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
		this.markDirty("Count");
	}
	private _calculateFrom: number = 0;
	get calculateFrom(): number {
		return this._calculateFrom;
	}
	set calculateFrom(value: number) {
		this._calculateFrom = value;
		this.markDirty("CalculateFrom");
	}
	private _calculateCount: number = 0;
	get calculateCount(): number {
		return this._calculateCount;
	}
	set calculateCount(value: number) {
		this._calculateCount = value;
		this.markDirty("CalculateCount");
	}
	private _multiplier: number = 0;
	get multiplier(): number {
		return this._multiplier;
	}
	set multiplier(value: number) {
		this._multiplier = value;
		this.markDirty("Multiplier");
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
	private _specifiesRange: boolean = false;
	get specifiesRange(): boolean {
		return this._specifiesRange;
	}
	set specifiesRange(value: boolean) {
		this._specifiesRange = value;
		this.markDirty("SpecifiesRange");
	}
}


