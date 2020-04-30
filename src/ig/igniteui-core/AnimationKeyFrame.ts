/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, Type, markType } from "./type";
import { AnimationKeyFrameProperty } from "./AnimationKeyFrameProperty";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { UIElementPropertyId, UIElementPropertyId_$type } from "./UIElementPropertyId";

/**
 * @hidden 
 */
export class AnimationKeyFrame extends Base {
	static $t: Type = markType(AnimationKeyFrame, 'AnimationKeyFrame');
	constructor(initNumber: number);
	constructor(initNumber: number, offset: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.offset = NaN;
			}
			break;

			case 1:
			{
				let offset: number = <number>_rest[0];
				this.offset = offset;
			}
			break;

		}

	}
	private _offset: number = 0;
	get offset(): number {
		return this._offset;
	}
	set offset(value: number) {
		this._offset = value;
	}
	private _properties: List$1<AnimationKeyFrameProperty> = new List$1<AnimationKeyFrameProperty>((<any>AnimationKeyFrameProperty).$type, 0);
	private _propertiesCache: AnimationKeyFrameProperty[] = null;
	private _propertiesMap: Dictionary$2<UIElementPropertyId, AnimationKeyFrameProperty> = null;
	get properties(): AnimationKeyFrameProperty[] {
		if (this._propertiesCache == null) {
			this._propertiesCache = this._properties.toArray();
		}
		return this._propertiesCache;
	}
	getProperty(id: UIElementPropertyId): AnimationKeyFrameProperty {
		if (this._propertiesMap == null) {
			this._propertiesMap = new Dictionary$2<UIElementPropertyId, AnimationKeyFrameProperty>(UIElementPropertyId_$type, (<any>AnimationKeyFrameProperty).$type, 0);
			for (let i = 0; i < this.properties.length; i++) {
				this._propertiesMap.item(this.properties[i].propertyId, this.properties[i]);
			}
		}
		if (this._propertiesMap.containsKey(id)) {
			return this._propertiesMap.item(id);
		}
		return null;
	}
	static create(): AnimationKeyFrame {
		return new AnimationKeyFrame(0);
	}
	static createWithOffset(offset: number): AnimationKeyFrame {
		let ret = new AnimationKeyFrame(0);
		ret.offset = offset;
		return ret;
	}
	static createWithOffsetAndProperties(offset: number, properties: AnimationKeyFrameProperty[]): AnimationKeyFrame {
		let ret = new AnimationKeyFrame(0);
		ret.offset = offset;
		ret._properties.addRange(<IEnumerable$1<AnimationKeyFrameProperty>><any>properties);
		return ret;
	}
	add(property: AnimationKeyFrameProperty): AnimationKeyFrame {
		this._properties.add(property);
		this._propertiesCache = null;
		this._propertiesMap = null;
		return this;
	}
}


