/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ContourValueResolver } from "./ContourValueResolver";
import { IEnumerable$1, IEnumerable$1_$type, Base, Type, markType } from "igniteui-core/type";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { CustomContourValueResolverEventArgs } from "./CustomContourValueResolverEventArgs";

/**
 * @hidden 
 */
export class CustomContourValueResolver extends ContourValueResolver {
	static $t: Type = markType(CustomContourValueResolver, 'CustomContourValueResolver', (<any>ContourValueResolver).$type);
	constructor() {
		super();
	}
	getContourValues(valueColumn: IFastItemColumn$1<number>): IEnumerable$1<number> {
		let args = new CustomContourValueResolverEventArgs(valueColumn);
		this.onGetCustomContourValues(args);
		if (args.contourValuesEnumerable != null) {
			return args.contourValuesEnumerable;
		}
		return <IEnumerable$1<number>><any><number[]>[];
	}
	getCustomContourValues: (sender: any, e: CustomContourValueResolverEventArgs) => void = null;
	private onGetCustomContourValues(e: CustomContourValueResolverEventArgs): void {
		if (this.getCustomContourValues != null) {
			this.getCustomContourValues(this, e);
		}
	}
}


