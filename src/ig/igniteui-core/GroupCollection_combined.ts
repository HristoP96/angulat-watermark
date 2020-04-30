/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ICollection, ICollection_$type, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, Type, markType, getEnumeratorObject } from "./type";
import { Group } from "./Group";
import { arrayCopyTo } from "./array";
import { Capture } from "./Capture";
import { RegexOptions } from "./RegexOptions";
import { StringBuilder } from "./StringBuilder";
import { netRegexToJS } from "./stringExtended";

/**
 * @hidden 
 */
export class GroupCollection extends Base implements ICollection, IEnumerable {
	static $t: Type = markType(GroupCollection, 'GroupCollection', (<any>Base).$type, [ICollection_$type, IEnumerable_$type]);
	private static emptyGroup: Group = new Group(false, -1, 0, "");
	private readonly match: Match = null;
	private readonly groups: Group[] = null;
	constructor(match: Match) {
		super();
		this.match = match;
		let r = this.match.result;
		let m = this.match.regex.netToJSGroupIndexMap;
		this.groups = <Group[]>new Array(<number>((<any>m).length));
		for (let i: number = 0; i < this.groups.length; i++) {
			let jsIndexes = <number[]>((<any>m)[i]);
			for (let j: number = 0; j < jsIndexes.length; j++) {
				let group = <string>((<any>r)[jsIndexes[j]]);
				if (group != null) {
					this.groups[i] = new Group(true, -1, group.length, group);
				}
			}
		}
	}
	get count(): number {
		return this.groups.length;
	}
	get isReadOnly(): boolean {
		return true;
	}
	get isSynchronized(): boolean {
		return false;
	}
	get syncRoot(): any {
		return null;
	}
	item(groupnum: number): Group {
		return this.groups[groupnum] || GroupCollection.emptyGroup;
	}
	item1(groupname: string): Group {
		return this.item(<number>(this.match.regex.nameToNetGroupIndexMap[groupname]));
	}
	copyTo(array: any[], arrayIndex: number): void {
		arrayCopyTo(this.groups, array, arrayIndex);
	}
	getEnumeratorObject(): IEnumerator {
		return getEnumeratorObject(this.groups);
	}
}

/**
 * @hidden 
 */
export class Match extends Group {
	static $t: Type = markType(Match, 'Match', (<any>Group).$type);
	readonly result: string[] = null;
	readonly regex: Regex = null;
	private readonly input: string = null;
	private _groups: GroupCollection = null;
	constructor(regex: Regex, input: string, result: string[]) {
		super(result != null, result == null ? 0 : <number>((<any>result).index), result == null ? 0 : result[0].length, result == null ? "" : result[0]);
		this.result = result;
		this.regex = regex;
		this.input = input;
	}
	static get empty(): Match {
		return new Match(null, null, null);
	}
	protected get_groups(): GroupCollection {
		if (this._groups == null) {
			this._groups = new GroupCollection(this);
		}
		return this._groups;
	}
	get groups(): GroupCollection {
		return this.get_groups();
	}
	nextMatch(): Match {
		if (this.success == false) {
			return this;
		}
		return this.regex.match1(this.input, this.index + this.length);
	}
}

/**
 * @hidden 
 */
export class Regex extends Base {
	static $t: Type = markType(Regex, 'Regex');
	private internal: any = null;
	nameToNetGroupIndexMap: any = null;
	netToJSGroupIndexMap: number[][] = null;
	private matchMustStartAtCurrentPosition: boolean = false;
	constructor(pattern: string, options: RegexOptions) {
		super();
		let flags = "g";
		if ((options & RegexOptions.IgnoreCase) != 0) {
			flags += "i";
		}
		if ((options & RegexOptions.Multiline) != 0) {
			flags += "m";
		}
		if ((options & RegexOptions.IgnorePatternWhitespace) != 0) {
			pattern = pattern.replace(/\s/g, "");
		}
		if ((options & RegexOptions.ExplicitCapture) != 0) {
			let idx = pattern.indexOf('(');
			while (idx >= 0 && idx < pattern.length) {
				let shouldSkip: boolean = (idx > 0 && pattern.charAt(idx - 1) == '\\') || (idx < pattern.length - 1 && pattern.charAt(idx + 1) == '?');
				if (!shouldSkip) {
					pattern = pattern.substr(0, idx) + "(?:" + pattern.substr(idx + 1);
				}
				idx = pattern.indexOf('(', idx + 1);
			}
		}
		let temp = <any>(netRegexToJS(pattern));
		this.nameToNetGroupIndexMap = temp.nameToNetGroupIndexMap;
		this.netToJSGroupIndexMap = <number[][]>(temp.netToJSGroupIndexMap);
		this.matchMustStartAtCurrentPosition = <boolean>(temp.matchMustStartAtCurrentPosition);
		this.internal = new RegExp(temp.pattern, flags);
	}
	static escape(str: string): string {
		for (let i: number = 0; i < str.length; i++) {
			if (Regex.isMetachar(str.charAt(i)) == false) {
				continue;
			}
			let builder = new StringBuilder(0);
			let ch: string = str.charAt(i);
			builder.append6(str, 0, i);
			do {
				builder.append1('\\');
				switch (ch) {
					case '\t':
					ch = 't';
					break;

					case '\n':
					ch = 'n';
					break;

					case '\f':
					ch = 'f';
					break;

					case '\r':
					ch = 'r';
					break;

				}

				builder.append1(ch);
				i++;
				let startIndex: number = i;
				while (i < str.length) {
					ch = str.charAt(i);
					if (Regex.isMetachar(ch)) {
						break;
					}
					i++;
				}
				builder.append6(str, startIndex, i - startIndex);
			} while (i < str.length);
			return builder.toString();
		}
		return str;
	}
	private static isMetachar(ch: string): boolean {
		switch (<number>ch.charCodeAt(0)) {
			case 9:

			case 10:

			case 12:

			case 13:

			case 32:

			case 35:

			case 36:

			case 40:

			case 41:

			case 42:

			case 43:

			case 46:

			case 63:

			case 91:

			case 92:

			case 94:

			case 123:

			case 124: return true;
			default: return false;
		}

	}
	match(input: string): Match {
		return this.match1(input, 0);
	}
	match1(input: string, startat: number): Match {
		this.internal.lastIndex = startat;
		let match = <string[]>(this.internal.exec(input));
		if (match != null && this.matchMustStartAtCurrentPosition && startat != <number>((<any>match).index)) {
			match = null;
		}
		return new Match(this, input, match);
	}
	replace(input: string, replacement: string): string {
		return <string>(input.replace(this.internal, replacement));
	}
	static replace1(input: string, pattern: string, replacement: string, options: RegexOptions): string {
		let regex = new Regex(pattern, options);
		return regex.replace(input, replacement);
	}
}


