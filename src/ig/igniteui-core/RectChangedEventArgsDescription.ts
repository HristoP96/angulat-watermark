/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class RectChangedEventArgsDescription extends Description {
	static $t: Type = markType(RectChangedEventArgsDescription, 'RectChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "RectChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _oldRect: RectDescription = null;
	get oldRect(): RectDescription {
		return this._oldRect;
	}
	set oldRect(value: RectDescription) {
		this._oldRect = value;
		this.markDirty("OldRect");
	}
	private _newRect: RectDescription = null;
	get newRect(): RectDescription {
		return this._newRect;
	}
	set newRect(value: RectDescription) {
		this._newRect = value;
		this.markDirty("NewRect");
	}
}


