/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, BaseError, String_$type, Delegate_$type, markType, TypeRegistrar } from "./type";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class DVContainer extends Base {
	static $t: Type = markType(DVContainer, 'DVContainer');
	private _factories: Dictionary$2<string, () => any> = new Dictionary$2<string, () => any>(String_$type, Delegate_$type, 0);
	private static _instance: DVContainer = null;
	static get instance(): DVContainer {
		if (DVContainer._instance == null) {
			DVContainer._instance = new DVContainer();
		}
		return DVContainer._instance;
	}
	constructor() {
		super();
	}
	registerFactory(interfaceType: Type, createInstance: () => any): void {
		this._factories.addItem(interfaceType.typeName, createInstance);
	}
	createInstance(interfaceType: Type, errorMessage: () => string): any {
		if (this._factories.containsKey(interfaceType.typeName)) {
			return this._factories.item(interfaceType.typeName)();
		}
		throw new BaseError(1, errorMessage());
	}
	registerIfLoaded(typeName_: string): void {
		if (TypeRegistrar.isRegistered(typeName_)) {
			TypeRegistrar.callRegister(typeName_);
		}
	}
	checkLoaded(typeName_: string): boolean {
		if (TypeRegistrar.isRegistered(typeName_)) {
			return true;
		}
		return false;
	}
}


