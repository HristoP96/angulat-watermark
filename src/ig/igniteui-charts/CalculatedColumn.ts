/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, Number_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class CalculatedColumn extends Base implements IEnumerable$1<number> {
	static $t: Type = markType(CalculatedColumn, 'CalculatedColumn', (<any>Base).$type, [IEnumerable$1_$type.specialize(Number_$type)]);
	constructor(initNumber: number, valuesProvider: IEnumerable$1<number>, ...basedOn: string[]);
	constructor(initNumber: number, valuesProvider: IEnumerable$1<number>, basedOn: IList$1<string>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let valuesProvider: IEnumerable$1<number> = <IEnumerable$1<number>>_rest[0];
				let basedOn: string[] = <string[]>[];
				for (let _i = 1; _i < _rest.length; _i++) {
					basedOn[_i - 1] = <string>_rest[_i];
				}
				this._valuesProvider = valuesProvider;
				this._basedOn = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>basedOn);
			}
			break;

			case 1:
			{
				let valuesProvider: IEnumerable$1<number> = <IEnumerable$1<number>>_rest[0];
				let basedOn: IList$1<string> = <IList$1<string>>_rest[1];
				this._valuesProvider = valuesProvider;
				this._basedOn = new List$1<string>(String_$type, 1, basedOn);
			}
			break;

		}

	}
	private _valuesProvider: IEnumerable$1<number> = null;
	private _basedOn: List$1<string> = null;
	get basedOn(): IList$1<string> {
		return this._basedOn;
	}
	getEnumerator(): IEnumerator$1<number> {
		return getEnumerator(this._valuesProvider);
	}
	getEnumeratorObject(): IEnumerator {
		return getEnumerator(this._valuesProvider);
	}
}


