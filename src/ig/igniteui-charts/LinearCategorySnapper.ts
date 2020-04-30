/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Snapper } from "./Snapper";
import { CategoryMode } from "./CategoryMode";
import { Base, Type, markType } from "igniteui-core/type";
import { truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class LinearCategorySnapper extends Snapper {
	static $t: Type = markType(LinearCategorySnapper, 'LinearCategorySnapper', (<any>Snapper).$type);
	constructor(initNumber: number, visibleMinimum: number, visibleMaximum: number, pixels: number, resolution: number);
	constructor(initNumber: number, visibleMinimum: number, visibleMaximum: number, pixels: number, interval: number, categoryMode: CategoryMode, resolution: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let visibleMinimum: number = <number>_rest[0];
				let visibleMaximum: number = <number>_rest[1];
				let pixels: number = <number>_rest[2];
				let resolution: number = <number>_rest[3];
				let $outerArgs = <any[]>[ visibleMinimum, visibleMaximum, pixels, NaN, CategoryMode.Mode0, resolution ];
				{
					let visibleMinimum: number = <number>$outerArgs[0];
					let visibleMaximum: number = <number>$outerArgs[1];
					let pixels: number = <number>$outerArgs[2];
					let interval: number = <number>$outerArgs[3];
					let categoryMode: CategoryMode = <CategoryMode>$outerArgs[4];
					let resolution: number = <number>$outerArgs[5];
					if (resolution > 0) {
						this.resolution = resolution;
						this.customResolution = true;
					}
					this.interval = interval;
					this.minorCount = 0;
					let ticks: number = Math.min(10, <number>truncate((pixels / this.resolution)));
					if (ticks > 0) {
						let newTicks = this.adjustTicks(visibleMinimum, visibleMaximum, ticks);
						if (this.customResolution && newTicks > ticks) {
							this.interval = interval;
							newTicks = this.adjustTicks(visibleMinimum, visibleMaximum, ticks - 1);
						}
						ticks = newTicks;
						if (pixels / ticks > this.resolution * 10) {
							this.minorCount = 10;
						} else {
							if (pixels / ticks > this.resolution * 5) {
								this.minorCount = 5;
							} else {
								if (pixels / ticks > this.resolution * 2) {
									this.minorCount = 2;
								}
							}
						}
					}
				}
			}
			break;

			case 1:
			{
				let visibleMinimum: number = <number>_rest[0];
				let visibleMaximum: number = <number>_rest[1];
				let pixels: number = <number>_rest[2];
				let interval: number = <number>_rest[3];
				let categoryMode: CategoryMode = <CategoryMode>_rest[4];
				let resolution: number = <number>_rest[5];
				if (resolution > 0) {
					this.resolution = resolution;
					this.customResolution = true;
				}
				this.interval = interval;
				this.minorCount = 0;
				let ticks: number = Math.min(10, <number>truncate((pixels / this.resolution)));
				if (ticks > 0) {
					let newTicks = this.adjustTicks(visibleMinimum, visibleMaximum, ticks);
					if (this.customResolution && newTicks > ticks) {
						this.interval = interval;
						newTicks = this.adjustTicks(visibleMinimum, visibleMaximum, ticks - 1);
					}
					ticks = newTicks;
					if (pixels / ticks > this.resolution * 10) {
						this.minorCount = 10;
					} else {
						if (pixels / ticks > this.resolution * 5) {
							this.minorCount = 5;
						} else {
							if (pixels / ticks > this.resolution * 2) {
								this.minorCount = 2;
							}
						}
					}
				}
			}
			break;

		}

	}
	private adjustTicks(visibleMinimum: number, visibleMaximum: number, ticks: number): number {
		let range: number = Snapper.nicenum(visibleMaximum - visibleMinimum, false);
		if (isNaN_(this.interval)) {
			this.interval = Snapper.nicenum(range / (ticks - 1), true);
		}
		if (this.interval < 1) {
			this.interval = 1;
		}
		let graphmin: number = Math.floor(visibleMinimum / this.interval) * this.interval;
		let graphmax: number = Math.ceil(visibleMaximum / this.interval) * this.interval;
		let newTicks = <number>truncate(Math.round((graphmax - graphmin) / this.interval));
		return newTicks;
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
	}
	private _minorCount: number = 0;
	get minorCount(): number {
		return this._minorCount;
	}
	set minorCount(value: number) {
		this._minorCount = value;
	}
}


