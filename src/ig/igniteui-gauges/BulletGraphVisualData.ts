/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearGraphVisualData } from "./LinearGraphVisualData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { BulletGraphTargetValueVisualData } from "./BulletGraphTargetValueVisualData";
import { ValueVisualData } from "./ValueVisualData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { ToolTipItemVisualData } from "./ToolTipItemVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class BulletGraphVisualData extends LinearGraphVisualData {
	static $t: Type = markType(BulletGraphVisualData, 'BulletGraphVisualData', (<any>LinearGraphVisualData).$type);
	private _targetValuePath: PrimitiveVisualData = null;
	get targetValuePath(): PrimitiveVisualData {
		return this._targetValuePath;
	}
	set targetValuePath(value: PrimitiveVisualData) {
		this._targetValuePath = value;
	}
	private _valuePath: PrimitiveVisualData = null;
	get valuePath(): PrimitiveVisualData {
		return this._valuePath;
	}
	set valuePath(value: PrimitiveVisualData) {
		this._valuePath = value;
	}
	private _scaleBackgroundPath: PrimitiveVisualData = null;
	get scaleBackgroundPath(): PrimitiveVisualData {
		return this._scaleBackgroundPath;
	}
	set scaleBackgroundPath(value: PrimitiveVisualData) {
		this._scaleBackgroundPath = value;
	}
	private _targetValue: BulletGraphTargetValueVisualData = null;
	get targetValue(): BulletGraphTargetValueVisualData {
		return this._targetValue;
	}
	set targetValue(value: BulletGraphTargetValueVisualData) {
		this._targetValue = value;
	}
	private _value: ValueVisualData = null;
	get value(): ValueVisualData {
		return this._value;
	}
	set value(value: ValueVisualData) {
		this._value = value;
	}
	scaleByViewport(): void {
		super.scaleByViewport();
		if (this.targetValuePath != null) {
			this.targetValuePath.scaleByViewport(this.viewport);
		}
		if (this.valuePath != null) {
			this.valuePath.scaleByViewport(this.viewport);
		}
		if (this.scaleBackgroundPath != null) {
			this.scaleBackgroundPath.scaleByViewport(this.viewport);
		}
	}
	serialize(): string {
		let baseSerialize: string = super.serialize();
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = baseSerialize.length == 0;
		if (this.targetValuePath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("targetValuePath: ");
			sb.appendLine1(this.targetValuePath.serialize());
		}
		if (this.targetValue != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("targetValue: ");
			sb.appendLine1(this.targetValue.serialize());
		}
		if (this.valuePath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("valuePath: ");
			sb.appendLine1(this.valuePath.serialize());
		}
		if (this.value != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("value: ");
			sb.appendLine1(this.value.serialize());
		}
		if (this.scaleBackgroundPath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("scaleBackgroundPath: ");
			sb.appendLine1(this.scaleBackgroundPath.serialize());
		}
		if (first) {
			return baseSerialize;
		}
		sb.append5("}");
		return baseSerialize.substr(0, baseSerialize.length - 1) + sb.toString();
	}
}


