/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { KeyFrameAnimationTimeline } from "./KeyFrameAnimationTimeline";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { ITickProvider } from "./ITickProvider";
import { IExecutionContext } from "./IExecutionContext";
import { IKeyFrameAnimation } from "./IKeyFrameAnimation";
import { AnimationKeyFrameEffect } from "./AnimationKeyFrameEffect";
import { KeyFrameAnimationDirect } from "./KeyFrameAnimationDirect";
import { AnimationBrowserTickProvider } from "./AnimationBrowserTickProvider";
import { DOMExecutionContext } from "./DOMExecutionContext";

/**
 * @hidden 
 */
export abstract class KeyFrameAnimationFactory extends Base {
	static $t: Type = markType(KeyFrameAnimationFactory, 'KeyFrameAnimationFactory');
	private static _instance: KeyFrameAnimationFactory = null;
	static get instance(): KeyFrameAnimationFactory {
		if (KeyFrameAnimationFactory._instance == null) {
			KeyFrameAnimationFactory._instance = new PlatformKeyFrameAnimationFactory(KeyFrameAnimationFactory.renderer);
			KeyFrameAnimationFactory._instance.timeline = new KeyFrameAnimationTimeline(KeyFrameAnimationFactory._instance.tickProvider, KeyFrameAnimationFactory._instance.executionContext);
		}
		return KeyFrameAnimationFactory._instance;
	}
	private static _renderer: DomRenderer = null;
	static get renderer(): DomRenderer {
		return KeyFrameAnimationFactory._renderer;
	}
	static set renderer(value: DomRenderer) {
		KeyFrameAnimationFactory._renderer = value;
	}
	private _effect: AnimationKeyFrameEffect = null;
	createAnimation(effect: AnimationKeyFrameEffect): IKeyFrameAnimation {
		return new KeyFrameAnimationDirect(effect, this.timeline);
	}
	private _timeline: KeyFrameAnimationTimeline = null;
	get timeline(): KeyFrameAnimationTimeline {
		return this._timeline;
	}
	set timeline(value: KeyFrameAnimationTimeline) {
		this._timeline = value;
	}
	abstract get tickProvider(): ITickProvider;
	abstract get executionContext(): IExecutionContext;
}

/**
 * @hidden 
 */
export class PlatformKeyFrameAnimationFactory extends KeyFrameAnimationFactory {
	static $t: Type = markType(PlatformKeyFrameAnimationFactory, 'PlatformKeyFrameAnimationFactory', (<any>KeyFrameAnimationFactory).$type);
	constructor(renderer: DomRenderer) {
		super();
		this._tickProvider = new AnimationBrowserTickProvider(renderer);
		this._executionContext = new DOMExecutionContext(renderer);
	}
	private _tickProvider: ITickProvider = null;
	protected get_tickProvider(): ITickProvider {
		return this._tickProvider;
	}
	get tickProvider(): ITickProvider {
		return this.get_tickProvider();
	}
	private _executionContext: IExecutionContext = null;
	protected get_executionContext(): IExecutionContext {
		return this._executionContext;
	}
	get executionContext(): IExecutionContext {
		return this.get_executionContext();
	}
}


