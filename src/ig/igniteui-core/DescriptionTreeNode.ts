/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class DescriptionTreeNode extends Base {
	static $t: Type = markType(DescriptionTreeNode, 'DescriptionTreeNode');
	private static nextId: number = 0;
	private _id: number = 0;
	get id(): number {
		return this._id;
	}
	set id(value: number) {
		this._id = value;
	}
	constructor() {
		super();
		this.id = DescriptionTreeNode.nextId;
		DescriptionTreeNode.nextId++;
		if (DescriptionTreeNode.nextId >= 0x7FFFFFFFFFFFFFFF) {
			DescriptionTreeNode.nextId = 0;
		}
	}
	private _items: List$1<DescriptionPropertyValue> = new List$1<DescriptionPropertyValue>((<any>DescriptionPropertyValue).$type, 0);
	private _map: Dictionary$2<string, DescriptionPropertyValue> = new Dictionary$2<string, DescriptionPropertyValue>(String_$type, (<any>DescriptionPropertyValue).$type, 0);
	private _type: string = null;
	get type(): string {
		return this._type;
	}
	set type(value: string) {
		this._type = value;
	}
	add(propertyName: string, value: any): void {
		let p: DescriptionPropertyValue = new DescriptionPropertyValue();
		p.propertyName = propertyName;
		p.value = value;
		this._map.addItem(propertyName.toLowerCase(), p);
		this._items.add(p);
	}
	get(propertyName: string): DescriptionPropertyValue {
		return this._map.item(propertyName.toLowerCase());
	}
	has(propertyName: string): boolean {
		return this._map.containsKey(propertyName.toLowerCase());
	}
	remove(propertyName: string): void {
		if (this._map.containsKey(propertyName.toLowerCase())) {
			let item = this._map.item(propertyName.toLowerCase());
			this._map.removeItem(propertyName.toLowerCase());
			this._items.remove(item);
		}
	}
	clear(): void {
		this._map.clear();
		this._items.clear();
	}
	items(): List$1<DescriptionPropertyValue> {
		return this._items;
	}
}


