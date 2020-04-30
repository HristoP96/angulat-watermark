/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { RefValueChangedTarget } from "./RefValueChangedTarget";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";

/**
 * @hidden 
 */
export class DescriptionRef extends Base {
	static $t: Type = markType(DescriptionRef, 'DescriptionRef');
	constructor(name: string) {
		super();
		this._name = name;
		this.valueChangedTargets = new List$1<RefValueChangedTarget>((<any>RefValueChangedTarget).$type, 0);
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	get refCount(): number {
		return this.valueChangedTargets.count;
	}
	private _valueChangedTargets: List$1<RefValueChangedTarget> = null;
	private get valueChangedTargets(): List$1<RefValueChangedTarget> {
		return this._valueChangedTargets;
	}
	private set valueChangedTargets(value: List$1<RefValueChangedTarget>) {
		this._valueChangedTargets = value;
	}
	registerValueChanged(target: any, property: string, handler: (sender: any, args: DescriptionRefValueChangedEventArgs) => void): void {
		this.valueChangedTargets.add(((() => {
			let $ret = new RefValueChangedTarget();
			$ret.target = target;
			$ret.propertyName = property;
			$ret.handler = handler;
			return $ret;
		})()));
	}
	unregisterValueChanged(target: any, property: string): void {
		for (let i = this.valueChangedTargets.count - 1; i >= 0; i--) {
			if (this.valueChangedTargets._inner[i].target == target && this.valueChangedTargets._inner[i].propertyName == property) {
				this.valueChangedTargets.removeAt(i);
			}
		}
	}
	unregisterAll(): void {
		this.valueChangedTargets.clear();
	}
	unregisterAllValueChanged(target: any): void {
		for (let i = this.valueChangedTargets.count - 1; i >= 0; i--) {
			if (this.valueChangedTargets._inner[i].target == target) {
				this.valueChangedTargets.removeAt(i);
			}
		}
	}
	notifyChanged(oldValue: any, newValue: any): void {
		for (let i = 0; i < this.valueChangedTargets.count; i++) {
			this.valueChangedTargets._inner[i].handler(this, ((() => {
				let $ret = new DescriptionRefValueChangedEventArgs();
				$ret.oldValue = oldValue;
				$ret.newValue = newValue;
				return $ret;
			})()));
		}
	}
}


