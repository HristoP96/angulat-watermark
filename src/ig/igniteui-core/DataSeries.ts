/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, typeCast, enumGetBox, fromEnum, Type, markType } from "./type";
import { DataSeriesAxisType } from "./DataSeriesAxisType";
import { DataSeriesType, DataSeriesType_$type } from "./DataSeriesType";
import { DataSeriesMarker } from "./DataSeriesMarker";
import { List$1 } from "./List$1";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { DataSeriesIntent } from "./DataSeriesIntent";
import { stringIsNullOrEmpty } from "./string";

/**
 * @hidden 
 */
export class DataSeries extends Base {
	static $t: Type = markType(DataSeries, 'DataSeries');
	constructor() {
		super();
		this._memberPathHints = new List$1<DataSeriesMemberPathHint>((<any>DataSeriesMemberPathHint).$type, 0);
		this.suggestedMarker = DataSeriesMarker.Automatic;
		this.index = -1;
		this.priority = -1;
	}
	private _memberPathHints: List$1<DataSeriesMemberPathHint> = null;
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _title: string = null;
	get title(): string {
		return this._title;
	}
	set title(value: string) {
		this._title = value;
	}
	private _data: any = null;
	get data(): any {
		return this._data;
	}
	set data(value: any) {
		this._data = value;
	}
	private _priority: number = 0;
	get priority(): number {
		return this._priority;
	}
	set priority(value: number) {
		this._priority = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _suggestedPrimaryAxis: DataSeriesAxisType = <DataSeriesAxisType>0;
	get suggestedPrimaryAxis(): DataSeriesAxisType {
		return this._suggestedPrimaryAxis;
	}
	set suggestedPrimaryAxis(value: DataSeriesAxisType) {
		this._suggestedPrimaryAxis = value;
	}
	private _suggestedSecondaryAxis: DataSeriesAxisType = <DataSeriesAxisType>0;
	get suggestedSecondaryAxis(): DataSeriesAxisType {
		return this._suggestedSecondaryAxis;
	}
	set suggestedSecondaryAxis(value: DataSeriesAxisType) {
		this._suggestedSecondaryAxis = value;
	}
	private _suggestedSeries: DataSeriesType = <DataSeriesType>0;
	get suggestedSeries(): DataSeriesType {
		return this._suggestedSeries;
	}
	set suggestedSeries(value: DataSeriesType) {
		this._suggestedSeries = value;
	}
	private _dataPath: string = null;
	get dataPath(): string {
		return this._dataPath;
	}
	set dataPath(value: string) {
		this._dataPath = value;
	}
	private _suggestedMarker: DataSeriesMarker = <DataSeriesMarker>0;
	get suggestedMarker(): DataSeriesMarker {
		return this._suggestedMarker;
	}
	set suggestedMarker(value: DataSeriesMarker) {
		this._suggestedMarker = value;
	}
	addMemberPathHint(hint: DataSeriesMemberPathHint): void {
		this._memberPathHints.add(hint);
	}
	addMemberPathHint1(hint: DataSeriesMemberPathHint, intent: DataSeriesIntent): void {
		let newHint = hint.clone();
		newHint.intent = intent;
		this._memberPathHints.add(newHint);
	}
	addMemberPathHint2(path: string, intent: DataSeriesIntent): void {
		let newHint = new DataSeriesMemberPathHint();
		newHint.intent = intent;
		newHint.path = path;
		this._memberPathHints.add(newHint);
	}
	removeMemberPathHint(hint: DataSeriesMemberPathHint): void {
		this._memberPathHints.remove(hint);
	}
	clearMemberPathHints(): void {
		this._memberPathHints.clear();
	}
	getMemberPathHintCount(): number {
		return this._memberPathHints.count;
	}
	getMemberPathHintAt(index: number): DataSeriesMemberPathHint {
		return this._memberPathHints._inner[index];
	}
	findMatchingHint(intent: DataSeriesIntent): DataSeriesMemberPathHint {
		for (let i = 0; i < this._memberPathHints.count; i++) {
			if (this._memberPathHints._inner[i].intent == intent) {
				return this._memberPathHints._inner[i];
			}
		}
		return null;
	}
	getMemberPathFor(intent: DataSeriesIntent): string {
		let hint = this.findMatchingHint(intent);
		if (hint == null) {
			return "";
		}
		return hint.path;
	}
	hasMatchingHint(intent: DataSeriesIntent): boolean {
		let hint = this.findMatchingHint(intent);
		if (hint == null) {
			return false;
		}
		if (stringIsNullOrEmpty(hint.path)) {
			return false;
		}
		return true;
	}
	getAllPathHints(): IList$1<DataSeriesMemberPathHint> {
		return this._memberPathHints;
	}
	equals(obj: any): boolean {
		let other = typeCast<DataSeries>((<any>DataSeries).$type, obj);
		if (other == null) {
			return false;
		}
		if (!Base.equalsStatic(this.name, other.name)) {
			return false;
		}
		if (!Base.equalsStatic(this.title, other.title)) {
			return false;
		}
		if (this.data != other.data) {
			return false;
		}
		if (this.priority != other.priority) {
			return false;
		}
		if (this.suggestedPrimaryAxis != other.suggestedPrimaryAxis) {
			return false;
		}
		if (this.suggestedSecondaryAxis != other.suggestedSecondaryAxis) {
			return false;
		}
		if (this.suggestedSeries != other.suggestedSeries) {
			return false;
		}
		if (this.suggestedMarker != other.suggestedMarker) {
			return false;
		}
		if (!Base.equalsStatic(this.dataPath, other.dataPath)) {
			return false;
		}
		let hints = this.getAllPathHints();
		let otherHints = other.getAllPathHints();
		if (hints.count != otherHints.count) {
			return false;
		}
		for (let i = 0; i < hints.count; i++) {
			if (!hints.item(i).equals(otherHints.item(i))) {
				return false;
			}
		}
		return true;
	}
	toString(): string {
		let str = enumGetBox<DataSeriesType>(DataSeriesType_$type, this.suggestedSeries) + " hints: ";
		for (let hint of fromEnum<DataSeriesMemberPathHint>(this._memberPathHints)) {
			str += " {" + hint.toString() + "}, ";
		}
		return str;
	}
}


