/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TreemapNodeStyleDescription } from "./TreemapNodeStyleDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TreemapNodeStyleMappingDescription extends TreemapNodeStyleDescription {
	static $t: Type = markType(TreemapNodeStyleMappingDescription, 'TreemapNodeStyleMappingDescription', (<any>TreemapNodeStyleDescription).$type);
	protected get_type(): string {
		return "TreemapNodeStyleMapping";
	}
	constructor() {
		super();
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
	private _valueRef: string = null;
	get valueRef(): string {
		return this._valueRef;
	}
	set valueRef(value: string) {
		this._valueRef = value;
		this.markDirty("ValueRef");
	}
	private _mappingMode: string = null;
	get mappingMode(): string {
		return this._mappingMode;
	}
	set mappingMode(value: string) {
		this._mappingMode = value;
		this.markDirty("MappingMode");
	}
}


