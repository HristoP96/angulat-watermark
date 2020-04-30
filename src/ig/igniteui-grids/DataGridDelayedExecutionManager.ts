/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IDelayedExecutionManager, IDelayedExecutionManager_$type } from "./IDelayedExecutionManager";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";

/**
 * @hidden 
 */
export class DataGridDelayedExecutionManager extends Base implements IDelayedExecutionManager {
	static $t: Type = markType(DataGridDelayedExecutionManager, 'DataGridDelayedExecutionManager', (<any>Base).$type, [IDelayedExecutionManager_$type]);
	private _domRenderer: DomRenderer = null;
	constructor(renderer: DomRenderer) {
		super();
		this._domRenderer = renderer;
	}
	cancelPending(id: number): void {
		this._domRenderer.clearTimeout(id);
	}
	executeIn(action: () => void, delayInMS: number): number {
		return this._domRenderer.setTimeout(() => action(), delayInMS);
	}
}


