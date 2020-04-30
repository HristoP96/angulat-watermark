/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "./type";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { ISmartPlaceable } from "./ISmartPlaceable";
import { SmartPosition } from "./SmartPosition";
import { RectUtil } from "./RectUtil";
import { MathUtil } from "./MathUtil";

/**
 * @hidden 
 */
export class SmartPlacer extends Base {
	static $t: Type = markType(SmartPlacer, 'SmartPlacer');
	constructor() {
		super();
		this.bounds = Rect.empty;
		this.overlap = 0.3;
		this.fade = 2;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	private _overlap: number = 0;
	get overlap(): number {
		return this._overlap;
	}
	set overlap(value: number) {
		this._overlap = value;
	}
	private _fade: number = 0;
	get fade(): number {
		return this._fade;
	}
	set fade(value: number) {
		this._fade = value;
	}
	place(smartPlaceable: ISmartPlaceable): void {
		if (smartPlaceable == null) {
			return;
		}
		let minScore: number = 1.7976931348623157E+308;
		let minBounds: Rect = Rect.empty;
		let minPosition: SmartPosition = SmartPosition.CenterBottom;
		let hasMinPosition: boolean = false;
		let $t = smartPlaceable.getSmartPositions();
		for (let i = 0; i < $t.length; i++) {
			let position = $t[i];
			let bounds: Rect = smartPlaceable.getSmartBounds(position);
			if (this.bounds.isEmpty || this.bounds.containsRect(bounds)) {
				let score: number = 0;
				for (let rect of fromEnum<Rect>(this.placed)) {
					score += RectUtil.intersectionArea(bounds, rect);
				}
				if (score == 0) {
					minScore = score;
					minPosition = position;
					minBounds = bounds;
					hasMinPosition = true;
					break;
				}
				if (score < minScore) {
					minScore = score;
					minPosition = position;
					minBounds = bounds;
					hasMinPosition = true;
				}
			}
		}
		let overlap: number = 0;
		if (hasMinPosition) {
			overlap = minScore / RectUtil.getArea(minBounds);
		}
		if (!hasMinPosition || overlap > this.overlap) {
			smartPlaceable.opacity = 0;
		} else {
			if (minScore > 0) {
				smartPlaceable.opacity = Math.pow(1 - MathUtil.clamp(0, overlap, 1), this.fade);
			} else {
				smartPlaceable.opacity = 1;
			}
			smartPlaceable.smartPosition = minPosition;
			this.placed.add(minBounds);
		}
	}
	private placed: List$1<Rect> = new List$1<Rect>((<any>Rect).$type, 0);
}


