/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, runOn, delegateCombine, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { IDraggerView, IDraggerView_$type } from "./IDraggerView";
import { IDragger } from "./IDragger";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { CanvasGestureDOMEventProxy } from "igniteui-core/CanvasGestureDOMEventProxy";
import { EventProxy } from "igniteui-core/EventProxy";
import { Rect } from "igniteui-core/Rect";
import { BaseDOMEventProxy } from "igniteui-core/BaseDOMEventProxy";

/**
 * @hidden 
 */
export class DraggerView extends Base implements IDraggerView {
	static $t: Type = markType(DraggerView, 'DraggerView', (<any>Base).$type, [IDraggerView_$type]);
	private _model: IDragger = null;
	get model(): IDragger {
		return this._model;
	}
	set model(value: IDragger) {
		this._model = value;
	}
	private _container: DomRenderer = null;
	protected get container(): DomRenderer {
		return this._container;
	}
	protected set container(value: DomRenderer) {
		this._container = value;
	}
	private _eventProxy: CanvasGestureDOMEventProxy = null;
	get eventProxy(): CanvasGestureDOMEventProxy {
		return this._eventProxy;
	}
	set eventProxy(value: CanvasGestureDOMEventProxy) {
		this._eventProxy = value;
	}
	constructor(model: IDragger) {
		super();
		this.model = model;
	}
	provideContainer(container: any): void {
		if (container == null) {
			if (this.container != null) {
				this.container = null;
			}
			if (this.eventProxy != null) {
				this.eventProxy.shouldInteract = null;
				this.eventProxy.destroy();
			}
			return;
		}
		this.container = <DomRenderer><any>container;
		let containerWidth = Math.round(<number>this.container.rootWrapper.width());
		let containerHeight = Math.round(<number>this.container.rootWrapper.height());
		this.eventProxy = new CanvasGestureDOMEventProxy(this.container.rootWrapper, this.container, true);
		this.eventProxy.deferCapture = true;
		let $t = this.eventProxy;
		$t.onMouseOver = delegateCombine($t.onMouseOver, runOn(this, this.eventProxy_OnMouseMoved));
		let $t1 = this.eventProxy;
		$t1.onMouseUp = delegateCombine($t1.onMouseUp, runOn(this, this.eventProxy_OnMouseUp));
		this.eventProxy.shouldInteract = runOn(this, this.eventProxy_ShouldInteract);
		this.model.viewportWidth = containerWidth;
		this.model.viewportHeight = containerHeight;
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.container.rootWrapper, "");
		}
	}
	onAttachedToUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.container.rootWrapper, "");
		}
	}
	private eventProxy_ShouldInteract(point: Point): boolean {
		return this.model.isDragActive;
	}
	private eventProxy_OnMouseMoved(point: Point, onMouseMove: boolean, isFinger: boolean): void {
		this.onMouseMove(point);
	}
	private eventProxy_OnMouseUp(point: Point): void {
		this.onMouseUp(point);
	}
	captureMouse(): void {
	}
	releaseMouse(): void {
	}
	transformPoint(x: number, y: number): Point {
		let boundingRect = BaseDOMEventProxy.getOffset(this.container.rootWrapper);
		let t = <Point>{ $type: Point_$type, x: x - boundingRect.x, y: y - boundingRect.y };
		return t;
	}
	private onMouseMove(point: Point): void {
		this.model.onMouseMove(point.x, point.y);
	}
	private onMouseUp(point: Point): void {
		this.model.onMouseUp(point.x, point.y);
	}
	onViewportSizeChanged(width: number, height: number): void {
		this.eventProxy.viewport = new Rect(0, 0, 0, width, height);
	}
}


