/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { ColumnFilterConditionCollection } from "./ColumnFilterConditionCollection";
import { List$1 } from "igniteui-core/List$1";
import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { IFilterExpression } from "igniteui-core/IFilterExpression";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";
import { FilterFactory } from "igniteui-core/FilterFactory";

/**
 * @hidden 
 */
export class ColumnFilterConditionGroup extends ColumnFilterCondition {
	static $t: Type = markType(ColumnFilterConditionGroup, 'ColumnFilterConditionGroup', (<any>ColumnFilterCondition).$type);
	isGroup(): boolean {
		return true;
	}
	constructor() {
		super();
		this._conditions = new ColumnFilterConditionCollection();
		this.usesOrOperator = false;
	}
	equals(other: any): boolean {
		if (other == null) {
			return false;
		}
		if (!(typeCast<ColumnFilterConditionGroup>((<any>ColumnFilterConditionGroup).$type, other) !== null)) {
			return false;
		}
		let oth = <ColumnFilterConditionGroup>other;
		if (oth.count != this.count) {
			return false;
		}
		for (let i = 0; i < this.count; i++) {
			if (!Base.equalsStatic(this.item(i), oth.item(i))) {
				return false;
			}
		}
		return true;
	}
	get count(): number {
		return this._conditions.count;
	}
	private _usesOrOperator: boolean = false;
	get usesOrOperator(): boolean {
		return this._usesOrOperator;
	}
	set usesOrOperator(value: boolean) {
		this._usesOrOperator = value;
	}
	private _conditions: ColumnFilterConditionCollection = null;
	add(condition: ColumnFilterCondition): void {
		this._conditions.add(condition);
	}
	remove(condition: ColumnFilterCondition): void {
		this._conditions.remove(condition);
	}
	removeAt(index: number): void {
		this._conditions.removeAt(index);
	}
	item(index: number, value?: ColumnFilterCondition): ColumnFilterCondition {
		if (arguments.length === 2) {
			this._conditions._inner[index] = value;
			return value;
		} else {
			return this._conditions._inner[index];
		}
	}
	clear(): void {
		this._conditions.clear();
	}
	toArray(): ColumnFilterCondition[] {
		let ret: ColumnFilterCondition[] = <ColumnFilterCondition[]>new Array(this._conditions.count);
		for (let i = 0; i < this._conditions.count; i++) {
			ret[i] = this._conditions._inner[i];
		}
		return ret;
	}
	resolveFilter(columnName: string, columnType: DataSourceSchemaPropertyType): IFilterExpression {
		if (this._conditions.count == 0) {
			return null;
		}
		let currExpr = this._conditions._inner[this._conditions.count - 1].resolveFilter(columnName, columnType);
		for (let i = this._conditions.count - 2; i >= 0; i--) {
			if (this.usesOrOperator) {
				currExpr = FilterFactory.instance.or(this._conditions._inner[i].resolveFilter(columnName, columnType), currExpr);
			} else {
				currExpr = FilterFactory.instance.and(this._conditions._inner[i].resolveFilter(columnName, columnType), currExpr);
			}
		}
		return currExpr;
	}
}


