/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, fromEnum, Type, markType } from "./type";
import { DataSourceRowType } from "./DataSourceRowType";
import { ISummaryResult, ISummaryResult_$type } from "./ISummaryResult";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { KeyValuePair$2 } from "./KeyValuePair$2";
import { stringIsNullOrWhiteSpace } from "./string";

/**
 * @hidden 
 */
export class DataSourceSpecialRow extends Base {
	static $t: Type = markType(DataSourceSpecialRow, 'DataSourceSpecialRow');
	$$isSpecialRow: boolean = true;
	private _values: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	private _sectionValues: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	private _rowType: DataSourceRowType = <DataSourceRowType>0;
	get rowType(): DataSourceRowType {
		return this._rowType;
	}
	set rowType(value: DataSourceRowType) {
		this._rowType = value;
	}
	private _targetRow: any = null;
	get targetRow(): any {
		return this._targetRow;
	}
	set targetRow(value: any) {
		this._targetRow = value;
	}
	private _level: number = 0;
	get level(): number {
		return this._level;
	}
	set level(value: number) {
		this._level = value;
	}
	private _summaryResults: ISummaryResult[] = null;
	get summaryResults(): ISummaryResult[] {
		return this._summaryResults;
	}
	set summaryResults(value: ISummaryResult[]) {
		this._summaryResults = value;
	}
	getValue(name: string): any {
		if (name == "SectionInformation") {
			return this._sectionValues;
		}
		let outValue: any = null;
		if (((() => { let $ret = this._values.tryGetValue(name, outValue); outValue = $ret.p1; return $ret.ret; })())) {
			return outValue;
		}
		outValue = this.getSummaryValue(name);
		return outValue;
	}
	getSectionValue(name: string): any {
		if (name == "SectionInformation") {
			return this._sectionValues;
		}
		let outValue: any = null;
		if (((() => { let $ret = this._sectionValues.tryGetValue(name, outValue); outValue = $ret.p1; return $ret.ret; })())) {
			return outValue;
		}
		outValue = this.getSummaryValue(name);
		return outValue;
	}
	setValue(name: string, value: any): void {
		this._values.item(name, value);
	}
	setSectionValue(name: string, value: any): void {
		this._sectionValues.item(name, value);
	}
	getSectionKeys(): string[] {
		let keys: string[] = <string[]>new Array(this._sectionValues.count);
		let i: number = 0;
		for (let key of fromEnum<string>(this._sectionValues.keys)) {
			keys[i] = key;
			i++;
		}
		return keys;
	}
	getSummaryValue(propertyName: string): any {
		if (this.summaryResults != null) {
			for (let i = 0; i < this.summaryResults.length; i++) {
				if (this.summaryResults[i] != null && this.summaryResults[i].propertyName == propertyName) {
					return this.summaryResults[i].value;
				}
			}
		}
		return null;
	}
	getSummaryResults(propertyName: string): ISummaryResult[] {
		if (stringIsNullOrWhiteSpace(propertyName)) {
			return this.summaryResults;
		}
		let summaries = new List$1<ISummaryResult>(ISummaryResult_$type, 0);
		for (let i = 0; i < this.summaryResults.length; i++) {
			if (this.summaryResults[i] != null && this.summaryResults[i].propertyName == propertyName) {
				summaries.add(this.summaryResults[i]);
			}
		}
		return summaries.toArray();
	}
	isHeaderSame(header: DataSourceSpecialRow): boolean {
		if (header.rowType != DataSourceRowType.SectionHeader) {
			return false;
		}
		if (header._sectionValues.count != this._sectionValues.count) {
			return false;
		}
		for (let sv of fromEnum<KeyValuePair$2<string, any>>(header._sectionValues)) {
			if (!this._sectionValues.containsKey(sv.key)) {
				return false;
			}
			if (this._sectionValues.item(sv.key) == null) {
				if (this._sectionValues.item(sv.key) != sv.value) {
					return false;
				}
				continue;
			}
			if (!Base.equalsStatic(this._sectionValues.item(sv.key), sv.value)) {
				return false;
			}
		}
		return true;
	}
}


