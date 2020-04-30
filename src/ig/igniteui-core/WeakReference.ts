/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class WeakReference extends Base {
	static $t: Type = markType(WeakReference, 'WeakReference');
	private _target: any = null;
	constructor(target: any) {
		super();
		this._target = target;
	}
	protected get_isAlive(): boolean {
		return true;
	}
	get isAlive(): boolean {
		return this.get_isAlive();
	}
	protected get_target(): any {
		return this._target;
	}
	protected set_target(value: any): void {
		this._target = value;
	}
	get target(): any {
		return this.get_target();
	}
	set target(value: any) {
		this.set_target(value);
	}
}


