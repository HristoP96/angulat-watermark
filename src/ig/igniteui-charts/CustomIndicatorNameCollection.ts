/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { IEnumerable$1, IEnumerable$1_$type, Base, String_$type, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CustomIndicatorNameCollection extends ObservableCollection$1<string> {
	static $t: Type = markType(CustomIndicatorNameCollection, 'CustomIndicatorNameCollection', (<any>ObservableCollection$1).$type.specialize(String_$type));
	constructor(initNumber: number);
	constructor(initNumber: number, collection: IEnumerable$1<string>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(String_$type, 0);
			}
			break;

			case 1:
			{
				let collection: IEnumerable$1<string> = <IEnumerable$1<string>>_rest[0];
				super(String_$type, 1, collection);
			}
			break;

		}

	}
}


