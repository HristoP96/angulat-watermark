/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, Type, markType } from "./type";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { dateNow } from "./date";

/**
 * @hidden 
 */
export class DoubleAnimator extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(DoubleAnimator, 'DoubleAnimator', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	protected get_needsFlush(): boolean {
		return this.transitionProgress == 0;
	}
	get needsFlush(): boolean {
		return this.get_needsFlush();
	}
	provideRenderer(renderer: DomRenderer): void {
		if (renderer == null) {
			this.createDefaultRequestAnimationFrameBinding();
		} else if (renderer.supportsAnimation()) {
			this.requestAnimationFrame = renderer.getRequestAnimationFrame();
		}
	}
	flush(): void {
		this.update(true);
	}
	private _transitionProgress: number = 0;
	get transitionProgress(): number {
		return this._transitionProgress;
	}
	set transitionProgress(value: number) {
		this._transitionProgress = value;
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs("TransitionProgress"));
		}
	}
	private _intervalMilliseconds: number = 0;
	get intervalMilliseconds(): number {
		return this._intervalMilliseconds;
	}
	set intervalMilliseconds(value: number) {
		this._intervalMilliseconds = value;
	}
	private _easingFunction: (time: number) => number = null;
	get easingFunction(): (time: number) => number {
		return this._easingFunction;
	}
	set easingFunction(value: (time: number) => number) {
		this._easingFunction = value;
	}
	private _from: number = 0;
	private _to: number = 0;
	protected get from(): number {
		return this._from;
	}
	protected set from(value: number) {
		this._from = value;
	}
	protected get to(): number {
		return this._to;
	}
	protected set to(value: number) {
		this._to = value;
	}
	constructor(from: number, to: number, intervalMilliseconds: number) {
		super();
		this._from = from;
		this._to = to;
		this._intervalMilliseconds = intervalMilliseconds;
		this.createDefaultRequestAnimationFrameBinding();
	}
	private createDefaultRequestAnimationFrameBinding(): void {
		this.requestAnimationFrame = <(arg1: () => void) => void>(window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            (<any>window).mozRequestAnimationFrame ||
            (<any>window).oRequestAnimationFrame ||
            (<any>window).msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            });
	}
	private _requestAnimationFrame: (arg1: () => void) => void = null;
	private get requestAnimationFrame(): (arg1: () => void) => void {
		return this._requestAnimationFrame;
	}
	private set requestAnimationFrame(value: (arg1: () => void) => void) {
		this._requestAnimationFrame = value;
	}
	private _active: boolean = false;
	protected get active(): boolean {
		return this._active;
	}
	protected set active(value: boolean) {
		this._active = value;
	}
	start(): void {
		this._transitionProgress = 0;
		this._lastRender = 0;
		this._startTime = dateNow();
		if (!this._active) {
			this._active = true;
			this.requestAnimationFrame(runOn(this, this.tick));
		}
	}
	stop(): void {
		this._active = false;
		this._transitionProgress = 0;
		this._lastRender = 0;
	}
	private _startTime: Date = new Date();
	private _lastRender: number = 0;
	tick(): void {
		this.update(false);
	}
	private update(flush: boolean): void {
		if (!this._active) {
			this.stop();
			return;
		}
		let currentTime: Date = dateNow();
		let ellapsedMilliseconds = currentTime.getTime() - this._startTime.getTime();
		if (ellapsedMilliseconds > this._intervalMilliseconds) {
			ellapsedMilliseconds = this._intervalMilliseconds;
		}
		if ((ellapsedMilliseconds - this._lastRender < 16 && ellapsedMilliseconds != this._intervalMilliseconds) && !flush) {
			this.requestAnimationFrame(runOn(this, this.tick));
			return;
		}
		this._lastRender = ellapsedMilliseconds;
		let p: number = (<number>ellapsedMilliseconds / <number>this._intervalMilliseconds);
		if (this._easingFunction != null) {
			p = this._easingFunction(p);
		}
		let interpolatedValue: number = this._from + ((this._to - this._from) * p);
		if (!flush) {
			if (ellapsedMilliseconds == this._intervalMilliseconds) {
				this.stop();
			} else {
				this.requestAnimationFrame(runOn(this, this.tick));
			}
		}
		this.transitionProgress = interpolatedValue;
	}
	getElapsedMilliseconds(): number {
		return this._active ? dateNow().getTime() - this._startTime.getTime() : 0;
	}
	animationActive(): boolean {
		return this._active;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


