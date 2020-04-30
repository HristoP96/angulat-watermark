/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { OwnedPoint } from "./OwnedPoint";
import { Frame } from "./Frame";
import { DictInterpolator$3 } from "./DictInterpolator$3";

/**
 * @hidden 
 */
export class ScatterFrame extends ScatterFrameBase$1<ScatterFrame> {
	static $t: Type = markType(ScatterFrame, 'ScatterFrame', (<any>ScatterFrameBase$1).$type.specialize(-1)).initSelfReferences();
	constructor() {
		super((<any>ScatterFrame).$type);
		this.linePoints = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 0);
	}
	private _linePoints: Dictionary$2<any, OwnedPoint> = null;
	get linePoints(): Dictionary$2<any, OwnedPoint> {
		return this._linePoints;
	}
	set linePoints(value: Dictionary$2<any, OwnedPoint>) {
		this._linePoints = value;
	}
	protected interpolateOverride(p: number, minFrame: Frame, maxFrame: Frame): void {
		super.interpolateOverride(p, minFrame, maxFrame);
		let min: ScatterFrame = typeCast<ScatterFrame>((<any>ScatterFrame).$type, minFrame);
		let max: ScatterFrame = typeCast<ScatterFrame>((<any>ScatterFrame).$type, maxFrame);
		if (min == null || max == null) {
			return;
		}
		this.ownedPointDictInterpolator.interpolate(this.linePoints, p, min.linePoints, max.linePoints, min, max);
	}
}


