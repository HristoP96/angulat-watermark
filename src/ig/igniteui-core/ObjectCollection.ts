/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Base, IEnumerable$1, IEnumerable$1_$type, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ObjectCollection extends ObservableCollection$1<any> {
	static $t: Type = markType(ObjectCollection, 'ObjectCollection', (<any>ObservableCollection$1).$type.specialize((<any>Base).$type));
	constructor(initNumber: number);
	constructor(initNumber: number, source: IEnumerable$1<any>);
	constructor(initNumber: number, capacity: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super((<any>Base).$type, 0);
			}
			break;

			case 1:
			{
				let source: IEnumerable$1<any> = <IEnumerable$1<any>>_rest[0];
				super((<any>Base).$type, 1, source);
			}
			break;

			case 2:
			{
				let capacity: number = <number>_rest[0];
				super((<any>Base).$type, 2, capacity);
			}
			break;

		}

	}
}


