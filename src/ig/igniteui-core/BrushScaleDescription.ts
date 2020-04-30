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
export class BrushScaleDescription extends Description {
	static $t: Type = markType(BrushScaleDescription, 'BrushScaleDescription', (<any>Description).$type);
	protected get_type(): string {
		return "BrushScale";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _brushes: string[] = null;
	get brushes(): string[] {
		return this._brushes;
	}
	set brushes(value: string[]) {
		this._brushes = value;
		this.markDirty("Brushes");
	}
	private _propertyUpdated: string = null;
	get propertyUpdatedRef(): string {
		return this._propertyUpdated;
	}
	set propertyUpdatedRef(value: string) {
		this._propertyUpdated = value;
		this.markDirty("PropertyUpdatedRef");
	}
}


