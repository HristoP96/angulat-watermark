/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class ScalerParams extends Base {
	static $t: Type = markType(ScalerParams, 'ScalerParams');
	constructor(initNumber: number, window: Rect, viewport: Rect, inverted: boolean, effectiveViewport: Rect);
	constructor(initNumber: number, window: Rect, viewport: Rect, inverted: boolean);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let window: Rect = <Rect>_rest[0];
				let viewport: Rect = <Rect>_rest[1];
				let inverted: boolean = <boolean>_rest[2];
				let effectiveViewport: Rect = <Rect>_rest[3];
				this.windowRect = window;
				this.viewportRect = viewport;
				this.effectiveViewportRect = effectiveViewport;
				this.isInverted = inverted;
				this.referenceValue = NaN;
			}
			break;

			case 1:
			{
				let window: Rect = <Rect>_rest[0];
				let viewport: Rect = <Rect>_rest[1];
				let inverted: boolean = <boolean>_rest[2];
				let $outerArgs = <any[]>[ window, viewport, inverted, Rect.empty ];
				{
					let window: Rect = <Rect>$outerArgs[0];
					let viewport: Rect = <Rect>$outerArgs[1];
					let inverted: boolean = <boolean>$outerArgs[2];
					let effectiveViewport: Rect = <Rect>$outerArgs[3];
					this.windowRect = window;
					this.viewportRect = viewport;
					this.effectiveViewportRect = effectiveViewport;
					this.isInverted = inverted;
					this.referenceValue = NaN;
				}
			}
			break;

		}

	}
	windowRect: Rect = null;
	viewportRect: Rect = null;
	effectiveViewportRect: Rect = null;
	isInverted: boolean = false;
	private _referenceValue: number = 0;
	get referenceValue(): number {
		return this._referenceValue;
	}
	set referenceValue(value: number) {
		this._referenceValue = value;
	}
}


