/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { stringStartsWith, stringEndsWith, stringContains, stringReplace } from "./string";

/**
 * @hidden 
 */
export class Matcher extends Base {
	static $t: Type = markType(Matcher, 'Matcher');
	protected _exp: RegExp = null;
	constructor(pattern: string) {
		super();
		let patt_ = Matcher.resolvePattern(pattern);
		this._exp = <RegExp>(new RegExp(patt_));
	}
	match(target: string): boolean {
		return this._exp.test(target);
	}
	static isPattern(pattern: string): boolean {
		return Matcher.resolvePattern(pattern) != null;
	}
	static resolvePattern(pattern: string): string {
		if (pattern == null) {
			return null;
		}
		if (stringStartsWith(pattern, "/") && stringEndsWith(pattern, "/")) {
			return pattern.substr(1, pattern.length - 2);
		}
		if (stringStartsWith(pattern, "Regex(") && stringEndsWith(pattern, ")")) {
			return pattern.substr(6, pattern.length - 7);
		}
		if (stringStartsWith(pattern, "RegExp(") && stringEndsWith(pattern, ")")) {
			return pattern.substr(7, pattern.length - 8);
		}
		if (stringContains(pattern, "*") || stringContains(pattern, "#") || stringContains(pattern, "?")) {
			pattern = stringReplace(pattern, ".", "\\.");
			pattern = stringReplace(pattern, "*", ".*");
			pattern = stringReplace(pattern, "#", "\\d+");
			pattern = stringReplace(pattern, "?", ".+");
			pattern = stringReplace(pattern, "[", "\\[");
			pattern = stringReplace(pattern, "]", "\\]");
			return "^" + pattern + "$";
		}
		return null;
	}
}


