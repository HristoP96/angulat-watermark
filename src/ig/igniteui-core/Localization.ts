/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, NotSupportedException } from "./type";
import { stringIsNullOrEmpty } from "./string";
import { stringFormat1 } from "./stringExtended";

/**
 * @hidden 
 */
export class Localization extends Base {
	static $t: Type = markType(Localization, 'Localization');
	static getStringOverride: (arg1: string, arg2: string) => string = null;
	private static _locales: any = null;
	static register(grouping: string, locale: {readonly [key: string] : string}): void {
		if (Localization._locales == null) {
			Localization._locales = {};
		}
		Localization._locales[grouping] = locale;
	}
	static getString(grouping: string, id: string, ...args: any[]): string {
		let resourceValue: string;
		if (Localization.getStringOverride != null) {
			resourceValue = Localization.getStringOverride(grouping, id);
		} else {
			let locale: any = null;
			if (Localization._locales != null) {
				locale = Localization._locales[grouping];
			}
			if (locale != null) {
				resourceValue = <string>(locale[id]);
			} else {
				throw new NotSupportedException(1, "string override must be specified for localization");
			}
		}
		if (stringIsNullOrEmpty(resourceValue)) {
			resourceValue = "";
		} else if (args != null && args.length > 0) {
			resourceValue = stringFormat1(resourceValue, ...args);
		}
		return resourceValue;
	}
}


