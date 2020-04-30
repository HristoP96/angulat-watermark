/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ResponsivePhaseDescription extends Description {
	static $t: Type = markType(ResponsivePhaseDescription, 'ResponsivePhaseDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ResponsivePhase";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _name1: string = null;
	get name(): string {
		return this._name1;
	}
	set name(value: string) {
		this._name1 = value;
		this.markDirty("Name");
	}
	private _delayMilliseconds: number = 0;
	get delayMilliseconds(): number {
		return this._delayMilliseconds;
	}
	set delayMilliseconds(value: number) {
		this._delayMilliseconds = value;
		this.markDirty("DelayMilliseconds");
	}
}


