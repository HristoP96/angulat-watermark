/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DataContextDescription } from "./DataContextDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PieSliceDataContextDescription extends DataContextDescription {
	static $t: Type = markType(PieSliceDataContextDescription, 'PieSliceDataContextDescription', (<any>DataContextDescription).$type);
	protected get_type(): string {
		return "PieSliceDataContext";
	}
	constructor() {
		super();
	}
	private _percentValue: number = 0;
	get percentValue(): number {
		return this._percentValue;
	}
	set percentValue(value: number) {
		this._percentValue = value;
		this.markDirty("PercentValue");
	}
	private _isOthersSlice: boolean = false;
	get isOthersSlice(): boolean {
		return this._isOthersSlice;
	}
	set isOthersSlice(value: boolean) {
		this._isOthersSlice = value;
		this.markDirty("IsOthersSlice");
	}
}


