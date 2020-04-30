/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { IEnumerable$1, IEnumerable$1_$type, Base, EventArgs, Type, markType } from "igniteui-core/type";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";

/**
 * @hidden 
 */
export abstract class ContourValueResolver extends DependencyObject {
	static $t: Type = markType(ContourValueResolver, 'ContourValueResolver', (<any>DependencyObject).$type);
	abstract getContourValues(valueColumn: IFastItemColumn$1<number>): IEnumerable$1<number>;
	protected propertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		if (this.updated != null) {
			this.updated(this, EventArgs.empty);
		}
	}
	updated: (sender: any, e: EventArgs) => void = null;
}


