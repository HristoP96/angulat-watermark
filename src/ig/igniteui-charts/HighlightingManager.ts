/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Boolean_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { IHighlightingManager, IHighlightingManager_$type } from "./IHighlightingManager";
import { List$1 } from "igniteui-core/List$1";
import { Series } from "./Series";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { HighlightingInfo } from "./HighlightingInfo";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { Axis } from "./Axis";
import { HighlightingState } from "./HighlightingState";

/**
 * @hidden 
 */
export class HighlightingManager extends Base implements IHighlightingManager {
	static $t: Type = markType(HighlightingManager, 'HighlightingManager', (<any>Base).$type, [IHighlightingManager_$type]);
	constructor() {
		super();
		this.dirtySeries = new List$1<Series>((<any>Series).$type, 0);
	}
	private _activeHighlights: Dictionary$2<HighlightingInfo, HighlightingInfo> = new Dictionary$2<HighlightingInfo, HighlightingInfo>((<any>HighlightingInfo).$type, (<any>HighlightingInfo).$type, 0);
	private _allHighlights: List$1<HighlightingInfo> = new List$1<HighlightingInfo>((<any>HighlightingInfo).$type, 0);
	startHighlight(info: HighlightingInfo): void {
		if (info == null) {
			return;
		}
		this.inProgress = true;
		if (!this._activeHighlights.containsKey(info)) {
			info.state = HighlightingState.inward;
			this._activeHighlights.item(info, info);
			this._allHighlights.add(info);
		}
		if (info.state == HighlightingState.outward) {
			info.state = HighlightingState.inward;
		}
	}
	private _extraFlow: number = 0;
	private _extraMarkerFlow: number = 0;
	endHighlight(info: HighlightingInfo): void {
		if (info == null) {
			return;
		}
		if (!this._activeHighlights.containsKey(info)) {
			return;
		}
		if (info.state == HighlightingState.inward) {
			if (info.progress < 0.05) {
				if (info.isMarker) {
					this._extraMarkerFlow = this._extraMarkerFlow + info.progress;
				} else {
					this._extraFlow = this._extraFlow + info.progress;
				}
				this._activeHighlights.removeItem(info);
				this._allHighlights.remove(info);
				return;
			}
			info.state = HighlightingState.outward;
		}
		if (info.state == HighlightingState.Static) {
			info.state = HighlightingState.outward;
			info.progress = 1;
		}
	}
	clear(): void {
		this._allHighlights.clear();
		this._activeHighlights.clear();
	}
	getHighlightingInfo(owner: Series, itemsSource: IFastItemsSource, indexAxis: Axis, startIndex: number, endIndex: number, isMarker: boolean): HighlightingInfo {
		for (let i = 0; i < this._allHighlights.count; i++) {
			let info = this._allHighlights._inner[i];
			let start = info.startIndex;
			let end = info.endIndex;
			if (startIndex >= start && endIndex <= end && info.isMarker == isMarker && owner == info.series && (info.state == HighlightingState.inward || info.state == HighlightingState.Static)) {
				return info;
			}
		}
		for (let i1 = 0; i1 < this._allHighlights.count; i1++) {
			let info1 = this._allHighlights._inner[i1];
			let start1 = info1.startIndex;
			let end1 = info1.endIndex;
			if (startIndex >= start1 && endIndex <= end1 && info1.isMarker == isMarker && owner == info1.series && (info1.state == HighlightingState.outward)) {
				return info1;
			}
		}
		return null;
	}
	private _lastProgress: number = 0;
	private _dirtySeries: List$1<Series> = null;
	get dirtySeries(): List$1<Series> {
		return this._dirtySeries;
	}
	set dirtySeries(value: List$1<Series>) {
		this._dirtySeries = value;
	}
	private _dirtySeriesMap: Dictionary$2<Series, boolean> = new Dictionary$2<Series, boolean>((<any>Series).$type, Boolean_$type, 0);
	tick(progress: number): boolean {
		this._dirtySeriesMap.clear();
		this.dirtySeries.clear();
		let deltaProgress: number = 0;
		if (this._lastProgress > progress) {
			deltaProgress = (1 - this._lastProgress) + progress;
		} else {
			deltaProgress = progress - this._lastProgress;
		}
		this._lastProgress = progress;
		let stillRunning: boolean = false;
		let toRemove: List$1<HighlightingInfo> = new List$1<HighlightingInfo>((<any>HighlightingInfo).$type, 0);
		this.maxHighlightingProgress = 0;
		this.sumHighlightingProgress = 0;
		this.maxMarkerHighlightingProgress = 0;
		this.sumMarkerHighlightingProgress = 0;
		let inMarkerExists: boolean = false;
		let inExists: boolean = false;
		let totalIn: number = 0;
		let totalOut: number = 0;
		let totalMarkerIn: number = 0;
		let totalMarkerOut: number = 0;
		let numOut: number = 0;
		let numMarkerOut: number = 0;
		for (let i = 0; i < this._allHighlights.count; i++) {
			let item = this._allHighlights._inner[i];
			if (item.state == HighlightingState.inward) {
				if (item.isMarker) {
					inMarkerExists = true;
					totalMarkerIn = totalMarkerIn + Math.min(1 - item.progress, deltaProgress);
				} else {
					inExists = true;
					totalIn = totalIn + Math.min(1 - item.progress, deltaProgress);
				}
			}
			if (item.state == HighlightingState.outward) {
				if (item.isMarker) {
					totalMarkerOut = totalMarkerOut + Math.min(item.progress, deltaProgress);
					numMarkerOut++;
				} else {
					totalOut = totalOut + Math.min(item.progress, deltaProgress);
					numOut++;
				}
			}
		}
		totalOut = totalOut + this._extraFlow;
		this._extraFlow = 0;
		totalMarkerOut = totalMarkerOut + this._extraMarkerFlow;
		this._extraMarkerFlow = 0;
		let perOutRatio: number = 1;
		let perOutMarkerRatio: number = 1;
		if (inExists && totalOut > totalIn) {
			let diff = totalOut - totalIn;
			perOutRatio = totalIn / totalOut;
		}
		if (inMarkerExists && totalMarkerOut > totalMarkerIn) {
			let diff1 = totalMarkerOut - totalMarkerIn;
			perOutMarkerRatio = totalMarkerIn / totalMarkerOut;
		}
		let changeProgress: number;
		for (let i1 = 0; i1 < this._allHighlights.count; i1++) {
			let item1 = this._allHighlights._inner[i1];
			changeProgress = deltaProgress;
			if (item1.state == HighlightingState.outward) {
				changeProgress = Math.min(changeProgress, item1.progress);
				if (item1.isMarker) {
					changeProgress = changeProgress * perOutMarkerRatio;
				} else {
					changeProgress = changeProgress * perOutRatio;
				}
				item1.progress = item1.progress - changeProgress;
			} else {
				item1.progress = item1.progress + changeProgress;
			}
			if (item1.state == HighlightingState.Static) {
				item1.progress = 1;
			}
			if (item1.progress > 1) {
				item1.progress = 1;
			}
			if (item1.progress < 0) {
				item1.progress = 0;
			}
			if (item1.isMarker) {
				this.maxMarkerHighlightingProgress = Math.max(item1.progress, this.maxMarkerHighlightingProgress);
				this.sumMarkerHighlightingProgress = this.sumMarkerHighlightingProgress + item1.progress;
			} else {
				this.maxHighlightingProgress = Math.max(item1.progress, this.maxHighlightingProgress);
				this.sumHighlightingProgress = this.sumHighlightingProgress + item1.progress;
			}
			if (item1.state != HighlightingState.outward && item1.progress != 1) {
				stillRunning = true;
			}
			if (item1.state == HighlightingState.outward && item1.progress != 0) {
				stillRunning = true;
			}
			if (item1.progress == 1 && item1.state == HighlightingState.inward) {
				item1.state = HighlightingState.Static;
			}
			if (item1.progress == 0 && item1.state == HighlightingState.outward) {
				toRemove.add(item1);
			}
			if (!this._dirtySeriesMap.containsKey(item1.series)) {
				this._dirtySeriesMap.addItem(item1.series, true);
				this.dirtySeries.add(item1.series);
			}
		}
		for (let item2 of fromEnum<HighlightingInfo>(toRemove)) {
			this._activeHighlights.removeItem(item2);
			this._allHighlights.remove(item2);
		}
		if (this._activeHighlights.count == 0) {
			this.inProgress = false;
			this.maxHighlightingProgress = 0;
			this.sumHighlightingProgress = 0;
			this.maxMarkerHighlightingProgress = 0;
			this.sumMarkerHighlightingProgress = 0;
		}
		if (!stillRunning) {
			this._lastProgress = 0;
		}
		return stillRunning;
	}
	private _inProgress: boolean = false;
	get inProgress(): boolean {
		return this._inProgress;
	}
	set inProgress(value: boolean) {
		this._inProgress = value;
	}
	private _maxHighlightingProgress: number = 0;
	get maxHighlightingProgress(): number {
		return this._maxHighlightingProgress;
	}
	set maxHighlightingProgress(value: number) {
		this._maxHighlightingProgress = value;
	}
	private _sumHighlightingProgress: number = 0;
	get sumHighlightingProgress(): number {
		return this._sumHighlightingProgress;
	}
	set sumHighlightingProgress(value: number) {
		this._sumHighlightingProgress = value;
	}
	private _maxMarkerHighlightingProgress: number = 0;
	get maxMarkerHighlightingProgress(): number {
		return this._maxMarkerHighlightingProgress;
	}
	set maxMarkerHighlightingProgress(value: number) {
		this._maxMarkerHighlightingProgress = value;
	}
	private _sumMarkerHighlightingProgress: number = 0;
	get sumMarkerHighlightingProgress(): number {
		return this._sumMarkerHighlightingProgress;
	}
	set sumMarkerHighlightingProgress(value: number) {
		this._sumMarkerHighlightingProgress = value;
	}
}


