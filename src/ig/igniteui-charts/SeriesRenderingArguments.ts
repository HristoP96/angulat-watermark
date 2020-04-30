/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Series } from "./Series";

/**
 * @hidden 
 */
export class SeriesRenderingArguments extends Base {
	static $t: Type = markType(SeriesRenderingArguments, 'SeriesRenderingArguments');
	constructor(series: Series, viewport: Rect, window: Rect, animate: boolean, skipPrepare: boolean) {
		super();
		this.transitionDuration = series.transitionDuration;
		this.container = series;
		this.viewport = viewport;
		this.window = window;
		this.animate = animate;
		this.skipPrepare = skipPrepare;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _window: Rect = null;
	get window(): Rect {
		return this._window;
	}
	set window(value: Rect) {
		this._window = value;
	}
	private _transitionDuration: number = 0;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		this._transitionDuration = value;
	}
	private _animate: boolean = false;
	get animate(): boolean {
		return this._animate;
	}
	set animate(value: boolean) {
		this._animate = value;
	}
	private _container: FrameworkElement = null;
	get container(): FrameworkElement {
		return this._container;
	}
	set container(value: FrameworkElement) {
		this._container = value;
	}
	private _skipPrepare: boolean = false;
	get skipPrepare(): boolean {
		return this._skipPrepare;
	}
	set skipPrepare(value: boolean) {
		this._skipPrepare = value;
	}
}


