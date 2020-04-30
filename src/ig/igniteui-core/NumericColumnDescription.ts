/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnDescription } from "./ColumnDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class NumericColumnDescription extends ColumnDescription {
	static $t: Type = markType(NumericColumnDescription, 'NumericColumnDescription', (<any>ColumnDescription).$type);
	protected get_type(): string {
		return "NumericColumn";
	}
	constructor() {
		super();
	}
	private _negativePrefix: string = null;
	get negativePrefix(): string {
		return this._negativePrefix;
	}
	set negativePrefix(value: string) {
		this._negativePrefix = value;
		this.markDirty("NegativePrefix");
	}
	private _positivePrefix: string = null;
	get positivePrefix(): string {
		return this._positivePrefix;
	}
	set positivePrefix(value: string) {
		this._positivePrefix = value;
		this.markDirty("PositivePrefix");
	}
	private _negativeSuffix: string = null;
	get negativeSuffix(): string {
		return this._negativeSuffix;
	}
	set negativeSuffix(value: string) {
		this._negativeSuffix = value;
		this.markDirty("NegativeSuffix");
	}
	private _positiveSuffix: string = null;
	get positiveSuffix(): string {
		return this._positiveSuffix;
	}
	set positiveSuffix(value: string) {
		this._positiveSuffix = value;
		this.markDirty("PositiveSuffix");
	}
	private _maxFractionDigits: number = 0;
	get maxFractionDigits(): number {
		return this._maxFractionDigits;
	}
	set maxFractionDigits(value: number) {
		this._maxFractionDigits = value;
		this.markDirty("MaxFractionDigits");
	}
	private _minFractionDigits: number = 0;
	get minFractionDigits(): number {
		return this._minFractionDigits;
	}
	set minFractionDigits(value: number) {
		this._minFractionDigits = value;
		this.markDirty("MinFractionDigits");
	}
	private _minIntegerDigits: number = 0;
	get minIntegerDigits(): number {
		return this._minIntegerDigits;
	}
	set minIntegerDigits(value: number) {
		this._minIntegerDigits = value;
		this.markDirty("MinIntegerDigits");
	}
	private _showGroupingSeparator: boolean = false;
	get showGroupingSeparator(): boolean {
		return this._showGroupingSeparator;
	}
	set showGroupingSeparator(value: boolean) {
		this._showGroupingSeparator = value;
		this.markDirty("ShowGroupingSeparator");
	}
	private _formatOverrideRef: string = null;
	get formatOverrideRef(): string {
		return this._formatOverrideRef;
	}
	set formatOverrideRef(value: string) {
		this._formatOverrideRef = value;
		this.markDirty("FormatOverrideRef");
	}
}


