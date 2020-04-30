/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { ShapefileRecordDescription } from "./ShapefileRecordDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ShapeFilterRecordEventArgsDescription extends Description {
	static $t: Type = markType(ShapeFilterRecordEventArgsDescription, 'ShapeFilterRecordEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ShapeFilterRecordEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _record: ShapefileRecordDescription = null;
	get record(): ShapefileRecordDescription {
		return this._record;
	}
	set record(value: ShapefileRecordDescription) {
		this._record = value;
		this.markDirty("Record");
	}
	private _shouldInclude: boolean = false;
	get shouldInclude(): boolean {
		return this._shouldInclude;
	}
	set shouldInclude(value: boolean) {
		this._shouldInclude = value;
		this.markDirty("ShouldInclude");
	}
}


