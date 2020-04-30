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
export class TriangulationStatusEventArgsDescription extends Description {
	static $t: Type = markType(TriangulationStatusEventArgsDescription, 'TriangulationStatusEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "TriangulationStatusEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _currentStatus: number = 0;
	get currentStatus(): number {
		return this._currentStatus;
	}
	set currentStatus(value: number) {
		this._currentStatus = value;
		this.markDirty("CurrentStatus");
	}
}


