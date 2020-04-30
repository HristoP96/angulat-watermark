/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { ListSortDirection } from "./ListSortDirection";

/**
 * @hidden 
 */
export class SortDescription extends Base {
	static $t: Type = markType(SortDescription, 'SortDescription');
	private _sealed: boolean = false;
	constructor() {
		super();
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _direction: ListSortDirection = <ListSortDirection>0;
	get direction(): ListSortDirection {
		return this._direction;
	}
	set direction(value: ListSortDirection) {
		this._direction = value;
	}
	equals(other: any): boolean {
		let o: SortDescription = <SortDescription>other;
		if (o == null) {
			return super.equals(other);
		}
		return o.propertyName == this.propertyName && o.direction == this.direction;
	}
	getHashCode(): number {
		return Base.getHashCodeStatic(this.propertyName) * 17 + <number>this.direction;
	}
	seal(): void {
		this._sealed = true;
	}
	static create(propertyName: string, direction: ListSortDirection): SortDescription {
		let sortDesc = new SortDescription();
		sortDesc.propertyName = propertyName;
		sortDesc.direction = direction;
		return sortDesc;
	}
}


