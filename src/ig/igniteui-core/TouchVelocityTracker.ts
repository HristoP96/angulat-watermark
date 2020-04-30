/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TouchHistoryItem } from "./TouchHistoryItem";
import { TouchVelocityReading } from "./TouchVelocityReading";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class TouchVelocityTracker extends Base {
	static $t: Type = markType(TouchVelocityTracker, 'TouchVelocityTracker');
	private static readonly touchHistoryLength: number = 5;
	private _history: TouchHistoryItem[] = <TouchHistoryItem[]>new Array(TouchVelocityTracker.touchHistoryLength);
	private _touchHistoryPosition: number = 0;
	trackPoint(x: number, y: number, time: number): void {
		if (isNaN_(x) || isNaN_(y)) {
			return;
		}
		let historyItem = ((() => {
			let $ret = new TouchHistoryItem();
			$ret.x = x;
			$ret.y = y;
			$ret.time = time;
			return $ret;
		})());
		this._history[this._touchHistoryPosition] = historyItem;
		this._touchHistoryPosition++;
		if (this._touchHistoryPosition > TouchVelocityTracker.touchHistoryLength - 1) {
			this._touchHistoryPosition = 0;
		}
	}
	clear(): void {
		this._touchHistoryPosition = 0;
		for (let i = 0; i < TouchVelocityTracker.touchHistoryLength; i++) {
			this._history[i] = null;
		}
	}
	static readonly minimumMovement: number = 5;
	getVelocity(time: number): TouchVelocityReading {
		let currentTime = time;
		let maxX = NaN;
		let minX = NaN;
		let maxY = NaN;
		let minY = NaN;
		let minTime: number = 0;
		let maxTime: number = 0;
		let first = true;
		for (let i = 0; i < TouchVelocityTracker.touchHistoryLength; i++) {
			if (this._history[i] == null) {
				continue;
			}
			let tooOld = (this._history[i].time - currentTime) > 300;
			if (tooOld) {
				continue;
			}
			if (first) {
				first = false;
				maxX = this._history[i].x;
				minX = this._history[i].x;
				maxY = this._history[i].y;
				minY = this._history[i].y;
				minTime = this._history[i].time;
				maxTime = this._history[i].time;
			} else {
				if (this._history[i].time < minTime) {
					minTime = this._history[i].time;
					minX = this._history[i].x;
					minY = this._history[i].y;
				}
				if (this._history[i].time > maxTime) {
					maxTime = this._history[i].time;
					maxX = this._history[i].x;
					maxY = this._history[i].y;
				}
			}
		}
		if (minTime == maxTime || isNaN_(maxX) || isNaN_(minX) || isNaN_(maxY) || isNaN_(minY)) {
			return ((() => {
				let $ret = new TouchVelocityReading();
				$ret.x = NaN;
				$ret.y = NaN;
				return $ret;
			})());
		}
		return ((() => {
			let $ret = new TouchVelocityReading();
			$ret.x = (maxX - minX) / ((maxTime - minTime) / 1000);
			$ret.y = (maxY - minY) / ((maxTime - minTime) / 1000);
			return $ret;
		})());
	}
}


