/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { FinancialOverlayType, FinancialOverlayType_$type } from "./FinancialOverlayType";
import { IEnumerable$1, IEnumerable$1_$type, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialOverlayTypeCollection extends ObservableCollection$1<FinancialOverlayType> {
	static $t: Type = markType(FinancialOverlayTypeCollection, 'FinancialOverlayTypeCollection', (<any>ObservableCollection$1).$type.specialize(FinancialOverlayType_$type));
	constructor(initNumber: number);
	constructor(initNumber: number, collection: IEnumerable$1<FinancialOverlayType>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(FinancialOverlayType_$type, 0);
			}
			break;

			case 1:
			{
				let collection: IEnumerable$1<FinancialOverlayType> = <IEnumerable$1<FinancialOverlayType>>_rest[0];
				super(FinancialOverlayType_$type, 1, collection);
			}
			break;

		}

	}
}


