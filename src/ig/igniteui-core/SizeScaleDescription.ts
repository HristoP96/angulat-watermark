/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SizeScaleDescription extends Description {
	static $t: Type = markType(SizeScaleDescription, 'SizeScaleDescription', (<any>Description).$type);
	protected get_type(): string {
		return "SizeScale";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
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
	private _isLogarithmic: boolean = false;
	get isLogarithmic(): boolean {
		return this._isLogarithmic;
	}
	set isLogarithmic(value: boolean) {
		this._isLogarithmic = value;
		this.markDirty("IsLogarithmic");
	}
	private _logarithmBase: number = 0;
	get logarithmBase(): number {
		return this._logarithmBase;
	}
	set logarithmBase(value: number) {
		this._logarithmBase = value;
		this.markDirty("LogarithmBase");
	}
	private _propertyUpdated: string = null;
	get propertyUpdatedRef(): string {
		return this._propertyUpdated;
	}
	set propertyUpdatedRef(value: string) {
		this._propertyUpdated = value;
		this.markDirty("PropertyUpdatedRef");
	}
}


