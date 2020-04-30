/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Type, String_$type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class SupportingCalculation$1<TCalculationStrategy> extends Base {
	static $t: Type = markType(SupportingCalculation$1, 'SupportingCalculation$1');
	protected $tCalculationStrategy: Type = null;
	constructor($tCalculationStrategy: Type, initNumber: number, strategy: TCalculationStrategy);
	constructor($tCalculationStrategy: Type, initNumber: number, strategy: TCalculationStrategy, basedOn: IList$1<string>);
	constructor($tCalculationStrategy: Type, initNumber: number, ..._rest: any[]);
	constructor($tCalculationStrategy: Type, initNumber: number, ..._rest: any[]) {
		super();
		this.$tCalculationStrategy = $tCalculationStrategy;
		this.$type = this.$type.specialize(this.$tCalculationStrategy);
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let strategy: TCalculationStrategy = <TCalculationStrategy>_rest[0];
				this._strategy = strategy;
				this._basedOn = new List$1<string>(String_$type, 0);
			}
			break;

			case 1:
			{
				let strategy: TCalculationStrategy = <TCalculationStrategy>_rest[0];
				let basedOn: IList$1<string> = <IList$1<string>>_rest[1];
				this._strategy = strategy;
				this._basedOn = new List$1<string>(String_$type, 1, basedOn);
			}
			break;

		}

	}
	private _strategy: TCalculationStrategy = null;
	private _basedOn: List$1<string> = null;
	get strategy(): TCalculationStrategy {
		return this._strategy;
	}
	get basedOn(): IList$1<string> {
		return this._basedOn;
	}
}


