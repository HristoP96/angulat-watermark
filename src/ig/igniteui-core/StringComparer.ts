/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEqualityComparer, IEqualityComparer_$type, IEqualityComparer$1, IEqualityComparer$1_$type, typeCast, String_$type, Type, markType } from "./type";
import { IComparer, IComparer_$type } from "./IComparer";
import { IComparer$1, IComparer$1_$type } from "./IComparer$1";
import { StringComparison } from "./string";
import { CultureInfo } from "./culture";
import { stringCompare1 } from "./stringExtended";

/**
 * @hidden 
 */
export class StringComparer extends Base implements IComparer, IEqualityComparer, IComparer$1<string>, IEqualityComparer$1<string> {
	static $t: Type = markType(StringComparer, 'StringComparer', (<any>Base).$type, [IComparer_$type, IEqualityComparer_$type, IComparer$1_$type.specialize(String_$type), IEqualityComparer$1_$type.specialize(String_$type)]);
	private readonly _comparison: StringComparison = <StringComparison>0;
	constructor(initNumber: number);
	constructor(initNumber: number, comparison: StringComparison);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let comparison: StringComparison = <StringComparison>_rest[0];
				this._comparison = comparison;
			}
			break;

		}

	}
	static readonly currentCulture: StringComparer = new StringComparer(1, StringComparison.CurrentCulture);
	static readonly currentCultureIgnoreCase: StringComparer = new StringComparer(1, StringComparison.CurrentCultureIgnoreCase);
	static readonly invariantCulture: StringComparer = new StringComparer(1, StringComparison.InvariantCulture);
	static readonly invariantCultureIgnoreCase: StringComparer = new StringComparer(1, StringComparison.InvariantCultureIgnoreCase);
	static readonly ordinal: StringComparer = new StringComparer(1, StringComparison.Ordinal);
	static readonly ordinalIgnoreCase: StringComparer = new StringComparer(1, StringComparison.OrdinalIgnoreCase);
	compareObject(x: any, y: any): number {
		return stringCompare1(typeCast<string>(String_$type, x), typeCast<string>(String_$type, y), this._comparison);
	}
	compare(x: string, y: string): number {
		return stringCompare1(x, y, this._comparison);
	}
	static create(culture: CultureInfo, ignoreCase: boolean): StringComparer {
		if (culture.name == CultureInfo.invariantCulture.name) {
			return ignoreCase ? StringComparer.invariantCultureIgnoreCase : StringComparer.invariantCulture;
		}
		return ignoreCase ? StringComparer.currentCultureIgnoreCase : StringComparer.currentCulture;
	}
	equalsC(x: string, y: string): boolean {
		return this.compare(x, y) == 0;
	}
	getHashCodeC(obj: string): number {
		if (obj == null) {
			return 0;
		}
		switch (this._comparison) {
			case StringComparison.CurrentCulture:

			case StringComparison.InvariantCulture:

			case StringComparison.Ordinal: return Base.getHashCodeStatic(obj);
			case StringComparison.CurrentCultureIgnoreCase: return Base.getHashCodeStatic(obj.toLowerCase());
			case StringComparison.InvariantCultureIgnoreCase:

			case StringComparison.OrdinalIgnoreCase: return Base.getHashCodeStatic(obj.toLowerCase());
			default: return 0;
		}

	}
}


