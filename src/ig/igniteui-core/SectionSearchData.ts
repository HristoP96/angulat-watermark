/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { SectionData } from "./SectionData";

/**
 * @hidden 
 */
export class SectionSearchData extends Base {
	static $t: Type = markType(SectionSearchData, 'SectionSearchData');
	private _lastFoundSection: SectionData[] = null;
	get lastFoundSection(): SectionData[] {
		return this._lastFoundSection;
	}
	set lastFoundSection(value: SectionData[]) {
		this._lastFoundSection = value;
	}
	private _lastFoundSectionBufferIndex: number = 0;
	get lastFoundSectionBufferIndex(): number {
		return this._lastFoundSectionBufferIndex;
	}
	set lastFoundSectionBufferIndex(value: number) {
		this._lastFoundSectionBufferIndex = value;
	}
	private _lastFoundSectionIndex: number[] = null;
	get lastFoundSectionIndex(): number[] {
		return this._lastFoundSectionIndex;
	}
	set lastFoundSectionIndex(value: number[]) {
		this._lastFoundSectionIndex = value;
	}
}


