/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";

/**
 * @hidden 
 */
export class RefValueChangedTarget extends Base {
	static $t: Type = markType(RefValueChangedTarget, 'RefValueChangedTarget');
	private _target: any = null;
	get target(): any {
		return this._target;
	}
	set target(value: any) {
		this._target = value;
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _handler: (sender: any, args: DescriptionRefValueChangedEventArgs) => void = null;
	get handler(): (sender: any, args: DescriptionRefValueChangedEventArgs) => void {
		return this._handler;
	}
	set handler(value: (sender: any, args: DescriptionRefValueChangedEventArgs) => void) {
		this._handler = value;
	}
}


