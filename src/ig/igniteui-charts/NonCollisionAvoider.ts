/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, callStaticConstructors, Type, markType } from "igniteui-core/type";
import { IDetectsCollisions, IDetectsCollisions_$type } from "./IDetectsCollisions";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class NonCollisionAvoider extends Base implements IDetectsCollisions {
	static $t: Type = markType(NonCollisionAvoider, 'NonCollisionAvoider', (<any>Base).$type, [IDetectsCollisions_$type]);
	static staticInit(): void {
		NonCollisionAvoider.instance = new NonCollisionAvoider();
	}
	constructor() {
		super();
	}
	private static _instance: NonCollisionAvoider = null;
	static get instance(): NonCollisionAvoider {
		return NonCollisionAvoider._instance;
	}
	static set instance(value: NonCollisionAvoider) {
		NonCollisionAvoider._instance = value;
	}
	clear(): void {
	}
	tryAdd(rc: Rect): boolean {
		return true;
	}
}


(function(v) { callStaticConstructors(); })(true);
