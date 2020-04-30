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
export class Activator extends Base {
	static $t: Type = markType(Activator, 'Activator');
	static createInstance(type: Type): any {
		return null;
	}
	static createInstance1(type: Type, ...args: any[]): any {
		return null;
	}
	static createInstance$1<T>($t: Type): T {
		return Type.getDefaultValue<T>($t);
	}
}


