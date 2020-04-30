/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { ISectionInformation, ISectionInformation_$type } from "./ISectionInformation";
import { ISummaryResult } from "./ISummaryResult";

/**
 * @hidden 
 */
export class DefaultSectionInformation extends Base implements ISectionInformation {
	static $t: Type = markType(DefaultSectionInformation, 'DefaultSectionInformation', (<any>Base).$type, [ISectionInformation_$type]);
	constructor(startIndex: number, endIndex: number, groupKeyProperties: string[], groupKeyValues: any[], summaryResults: ISummaryResult[]) {
		super();
		this._startIndex = startIndex;
		this._endIndex = endIndex;
		this._groupKeyProperties = groupKeyProperties;
		this._groupKeyValues = groupKeyValues;
		this._summaryResults = summaryResults;
	}
	private _startIndex: number = 0;
	get startIndex(): number {
		return this._startIndex;
	}
	private _endIndex: number = 0;
	private _groupKeyProperties: string[] = null;
	private _groupKeyValues: any[] = null;
	private _summaryResults: ISummaryResult[] = null;
	get endIndex(): number {
		return this._endIndex;
	}
	get groupKeyValues(): any[] {
		return this._groupKeyValues;
	}
	get groupKeyProperties(): string[] {
		return this._groupKeyProperties;
	}
	get summaryResults(): ISummaryResult[] {
		return this._summaryResults;
	}
}


