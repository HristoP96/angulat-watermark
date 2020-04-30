/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, runOn, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { ISchedulableRender, ISchedulableRender_$type } from "./ISchedulableRender";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { RenderingContext } from "./RenderingContext";

/**
 * @hidden 
 */
export class CanvasRenderScheduler extends Base {
	static $t: Type = markType(CanvasRenderScheduler, 'CanvasRenderScheduler');
	constructor() {
		super();
		this.targets = new List$1<ISchedulableRender>(ISchedulableRender_$type, 0);
		this.dependsOn = new List$1<CanvasRenderScheduler>((<any>CanvasRenderScheduler).$type, 0);
	}
	private _sortDirty: boolean = true;
	private _targets: List$1<ISchedulableRender> = null;
	protected get targets(): List$1<ISchedulableRender> {
		return this._targets;
	}
	protected set targets(value: List$1<ISchedulableRender>) {
		this._targets = value;
	}
	private _dependsOn: List$1<CanvasRenderScheduler> = null;
	get dependsOn(): List$1<CanvasRenderScheduler> {
		return this._dependsOn;
	}
	set dependsOn(value: List$1<CanvasRenderScheduler>) {
		this._dependsOn = value;
	}
	register(target: ISchedulableRender): void {
		this._sortDirty = true;
		this.targets.add(target);
	}
	unRegister(target: ISchedulableRender): void {
		this._sortDirty = true;
		this.targets.remove(target);
	}
	sortDirty(): void {
		this._sortDirty = true;
		this.schedule();
	}
	get isScheduled(): boolean {
		return this._scheduled;
	}
	private _scheduled: boolean = false;
	private _scheduledId: number = -1;
	private _renderer: DomRenderer = null;
	provideRenderer(renderer: DomRenderer): void {
		let oldValue = this._renderer;
		this._renderer = renderer;
		if (this._scheduled && this._renderer != null && oldValue == null) {
			this._renderer.setTimeout(runOn(this, this.refresh), 0);
		}
	}
	schedule(): void {
		if (!this._scheduled) {
			this._scheduled = true;
			if (this._renderer != null) {
				this._renderer.setTimeout(runOn(this, this.refresh), 0);
			} else {
				window.setTimeout(runOn(this, this.refresh), 0);
			}
		}
	}
	schedule1(context1: RenderingContext, context2: RenderingContext): void {
		this.schedule();
	}
	flush(): void {
		if (this._scheduledId != -1) {
			window.clearTimeout(this._scheduledId);
			this._scheduledId = -1;
		}
		if (this._scheduled) {
			this.refresh();
		}
	}
	refresh(): void {
		this._scheduledId = -1;
		if (this._scheduled) {
			this._scheduled = false;
			if (this.dependsOn.count > 0) {
				for (let i = 0; i < this.dependsOn.count; i++) {
					this.dependsOn._inner[i].flush();
				}
			}
			if (this._sortDirty) {
				this.sortTargets();
			}
			this.renderTargets();
		}
	}
	private renderTargets(): void {
		if (this.isDisabled) {
			return;
		}
		let first: boolean = true;
		for (let i: number = 0; i < this.targets.count; i++) {
			let target = this.targets._inner[i];
			target.preRender();
		}
		for (let i1: number = 0; i1 < this.targets.count; i1++) {
			let target1 = this.targets._inner[i1];
			target1.undirty(first);
			first = false;
		}
		for (let i2: number = 0; i2 < this.targets.count; i2++) {
			let target2 = this.targets._inner[i2];
			target2.postRender();
		}
	}
	private sortTargets(): void {
		this.targets.sort2((o1: ISchedulableRender, o2: ISchedulableRender) => {
			let t1 = <ISchedulableRender><any><any>o1;
			let t2 = <ISchedulableRender><any><any>o2;
			if (t1.index < t2.index) {
				return -1;
			}
			if (t1.index > t2.index) {
				return 1;
			}
			return 0;
		});
		this._sortDirty = false;
	}
	private _isDisabled: boolean = false;
	get isDisabled(): boolean {
		return this._isDisabled;
	}
	set isDisabled(value: boolean) {
		this._isDisabled = value;
	}
}


