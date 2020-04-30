/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { Base, IEnumerable$1, IEnumerable$1_$type, IList$1, IList$1_$type, Delegate_$type, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ColumnSupportingCalculation extends SupportingCalculation$1<(source: IEnumerable$1<number>, period: number) => IEnumerable$1<number>> {
	static $t: Type = markType(ColumnSupportingCalculation, 'ColumnSupportingCalculation', (<any>SupportingCalculation$1).$type.specialize(Delegate_$type));
	constructor(initNumber: number, strategy: (source: IEnumerable$1<number>, period: number) => IEnumerable$1<number>);
	constructor(initNumber: number, strategy: (source: IEnumerable$1<number>, period: number) => IEnumerable$1<number>, basedOn: IList$1<string>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let strategy: (source: IEnumerable$1<number>, period: number) => IEnumerable$1<number> = <(source: IEnumerable$1<number>, period: number) => IEnumerable$1<number>>_rest[0];
				super(Delegate_$type, 0, strategy);
			}
			break;

			case 1:
			{
				let strategy: (source: IEnumerable$1<number>, period: number) => IEnumerable$1<number> = <(source: IEnumerable$1<number>, period: number) => IEnumerable$1<number>>_rest[0];
				let basedOn: IList$1<string> = <IList$1<string>>_rest[1];
				super(Delegate_$type, 1, strategy, basedOn);
			}
			break;

		}

	}
}


