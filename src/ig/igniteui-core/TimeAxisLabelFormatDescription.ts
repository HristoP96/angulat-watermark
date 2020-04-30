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
export class TimeAxisLabelFormatDescription extends Description {
	static $t: Type = markType(TimeAxisLabelFormatDescription, 'TimeAxisLabelFormatDescription', (<any>Description).$type);
	protected get_type(): string {
		return "TimeAxisLabelFormat";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _range: number = 0;
	get range(): number {
		return this._range;
	}
	set range(value: number) {
		this._range = value;
		this.markDirty("Range");
	}
	private _format: string = null;
	get format(): string {
		return this._format;
	}
	set format(value: string) {
		this._format = value;
		this.markDirty("Format");
	}
}


