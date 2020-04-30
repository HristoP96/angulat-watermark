/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, Delegate_$type, fromEnum, runOn, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent, DomWrapperPosition } from "igniteui-core/dom";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { ScaleTransform } from "igniteui-core/ScaleTransform";
import { NativeUI } from "igniteui-core/NativeUI";
import { KeyFrameAnimationFactory } from "igniteui-core/KeyFrameAnimationFactory";
import { AnimationKeyFrameEffect } from "igniteui-core/AnimationKeyFrameEffect";
import { AnimationKeyFrameEffectTiming } from "igniteui-core/AnimationKeyFrameEffectTiming";
import { FontInfo } from "igniteui-core/FontInfo";
import { AnimationKeyFrameEffectTargetType } from "igniteui-core/AnimationKeyFrameEffectTargetType";
import { LinkedList$1 } from "igniteui-core/LinkedList$1";
import { IKeyFrameAnimation, IKeyFrameAnimation_$type } from "igniteui-core/IKeyFrameAnimation";
import { LinkedListNode$1 } from "igniteui-core/LinkedListNode$1";
import { Task } from "igniteui-core/Task";
import { AnimationKeyFrameProperty } from "igniteui-core/AnimationKeyFrameProperty";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { UIElementPropertyId } from "igniteui-core/UIElementPropertyId";
import { KeyFrameEffectEasing } from "igniteui-core/KeyFrameEffectEasing";

/**
 * @hidden 
 */
export class RippleView extends Base {
	static $t: Type = markType(RippleView, 'RippleView');
	constructor() {
		super();
	}
	private _model: Ripple = null;
	get model(): Ripple {
		return this._model;
	}
	set model(value: Ripple) {
		this._model = value;
	}
	onInit(): void {
	}
	ready(): boolean {
		return true;
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	private _font: FontInfo = null;
	private _events: List$1<() => void> = new List$1<() => void>(Delegate_$type, 0);
	onContainerProvided(container: DomRenderer): void {
		if (container == null) {
			for (let act of fromEnum<() => void>(this._events)) {
				act();
			}
			this._events.clear();
		}
		this.container = container;
		this.model.onViewReady();
	}
	private _source: DomWrapper = null;
	onEventSourceChanged(): void {
		if (this.model.eventSource == null) {
			this._source = null;
			for (let act of fromEnum<() => void>(this._events)) {
				act();
			}
			this._events.clear();
		} else {
			let source = this.model.eventSource;
			let w = <DomWrapper><any><any>this.container.getWrapper(source);
			this._source = w;
			this._events.add(w.listen("click", runOn(this, this.eventSource_Clicked)));
			this._events.add(w.listen("mouseenter", runOn(this, this.eventSource_MouseEnter)));
			this._events.add(w.listen("mouseleave", runOn(this, this.eventSource_MouseLeave)));
		}
	}
	private eventSource_MouseLeave(arg1: NormalizedEvent): void {
		this.model.onLeave();
	}
	private eventSource_MouseEnter(arg1: NormalizedEvent): void {
		this.model.onEnter();
	}
	private eventSource_Clicked(arg1: NormalizedEvent): void {
		if (this._source == null) {
			return;
		}
		let offset = this.container.rootWrapper.getOffset();
		let x = arg1.pageX - offset.left;
		let y = arg1.pageY - offset.top;
		this.model.startRipple(x, y, this.container.rootWrapper.outerWidth(), this.container.rootWrapper.outerHeight());
	}
	updateHoverElement(): void {
		if (this.model.isHovered) {
			this.container.rootWrapper.setStyleProperty("background-color", this.model.actualHoverColor._fill);
		}
	}
	removeHoverColor(): void {
		this.container.rootWrapper.setStyleProperty("background-color", "transparent");
	}
	setHoverColor(): void {
		this.container.rootWrapper.setStyleProperty("background-color", this.model.actualHoverColor._fill);
	}
	createRippleElement(left: number, top: number, radius: number): any {
		let span = this.container.createElement("span");
		span.setStyleProperty("width", radius * 2 + "px");
		span.setStyleProperty("height", radius * 2 + "px");
		span.setStyleProperty("top", top + "px");
		span.setStyleProperty("left", left + "px");
		span.setStyleProperty("background-color", this.model.actualRippleColor._fill);
		span.setStyleProperty("position", "absolute");
		span.setStyleProperty("pointer-events", "none");
		span.setStyleProperty("border-radius", radius + "px");
		span.setStyleProperty("opacity", ".5");
		NativeUI.setTransform(span, ((() => {
			let $ret = new ScaleTransform();
			$ret.scaleX = 0.3;
			$ret.scaleY = 0.3;
			return $ret;
		})()));
		this.container.append(span);
		return span;
	}
	removeRippleElement(ele: any): void {
		let e = <DomWrapper><any>ele;
		e.remove();
	}
	ensureAnimationFactory(): void {
		if (KeyFrameAnimationFactory.renderer == null) {
			KeyFrameAnimationFactory.renderer = this.container;
		}
	}
	createRippleEffect(ele: any, timing: AnimationKeyFrameEffectTiming): AnimationKeyFrameEffect {
		return new AnimationKeyFrameEffect(0, ele, AnimationKeyFrameEffectTargetType.NativeView, null, timing);
	}
	private eventProxy_OnMouseEnter(point: Point): void {
	}
	private _attached: boolean = true;
	private _nativeBox: DomWrapper = null;
	private _actualBox: DomWrapper = null;
	private _label: DomWrapper = null;
	private _checkShape: DomWrapper = null;
	onAttachedToUI(): void {
		this._attached = true;
		this.onEventSourceChanged();
	}
	onDetachedFromUI(): void {
		this._attached = false;
		for (let act of fromEnum<() => void>(this._events)) {
			act();
		}
		this._events.clear();
	}
}

/**
 * @hidden 
 */
export class Ripple extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Ripple, 'Ripple', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		let view: RippleView = new RippleView();
		view.model = this;
		this.view = view;
		this.view.onInit();
	}
	private _view: RippleView = null;
	get view(): RippleView {
		return this._view;
	}
	set view(value: RippleView) {
		this._view = value;
	}
	destroy(): void {
		this.provideContainer(null);
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Ripple.rippleColorPropertyName:
			this.actualRippleColor = this.rippleColor != null ? this.rippleColor : Ripple.defaultRippleColor;
			break;

			case Ripple.hoverColorPropertyName:
			this.actualHoverColor = this.hoverColor != null ? this.hoverColor : Ripple.defaultHoverColor;
			break;

			case Ripple.eventSourcePropertyName:
			if (this.view.ready()) {
				this.view.onEventSourceChanged();
			}
			break;

			case Ripple.actualRippleColorPropertyName:
			this.updateRippleElement();
			break;

			case Ripple.actualHoverColorPropertyName:
			this.updateHoverElement();
			break;

		}

	}
	private updateHoverElement(): void {
		this.view.updateHoverElement();
	}
	private updateRippleElement(): void {
	}
	private _isHovered: boolean = false;
	get isHovered(): boolean {
		return this._isHovered;
	}
	set isHovered(value: boolean) {
		this._isHovered = value;
	}
	onEnter(): void {
		this.isHovered = true;
		if (this.isHoverEnabled) {
			this.view.setHoverColor();
		}
	}
	onLeave(): void {
		this.isHovered = false;
		if (this.isHoverEnabled) {
			this.view.removeHoverColor();
		}
	}
	static readonly eventSourcePropertyName: string = "EventSource";
	private _eventSource: any = null;
	get eventSource(): any {
		return this._eventSource;
	}
	set eventSource(value: any) {
		let oldValue = this._eventSource;
		this._eventSource = value;
		if (oldValue != this._eventSource) {
			this.onPropertyChanged(Ripple.eventSourcePropertyName, oldValue, value);
		}
	}
	static readonly rippleColorPropertyName: string = "RippleColor";
	private _rippleColor: Brush = null;
	get rippleColor(): Brush {
		return this._rippleColor;
	}
	set rippleColor(value: Brush) {
		let oldValue = this._rippleColor;
		this._rippleColor = value;
		if (oldValue != this._rippleColor) {
			this.onPropertyChanged(Ripple.rippleColorPropertyName, oldValue, value);
		}
	}
	static readonly hoverColorPropertyName: string = "HoverColor";
	private _hoverColor: Brush = null;
	get hoverColor(): Brush {
		return this._hoverColor;
	}
	set hoverColor(value: Brush) {
		let oldValue = this._hoverColor;
		this._hoverColor = value;
		if (oldValue != this._hoverColor) {
			this.onPropertyChanged(Ripple.hoverColorPropertyName, oldValue, value);
		}
	}
	static readonly actualHoverColorPropertyName: string = "ActualHoverColor";
	private static defaultHoverColor: Brush = BrushUtil.fromArgb(40, 0, 0, 0);
	private _actualHoverColor: Brush = Ripple.defaultHoverColor;
	get actualHoverColor(): Brush {
		return this._actualHoverColor;
	}
	set actualHoverColor(value: Brush) {
		let oldValue = this._actualHoverColor;
		this._actualHoverColor = value;
		if (oldValue != this._actualHoverColor) {
			this.onPropertyChanged(Ripple.actualHoverColorPropertyName, oldValue, value);
		}
	}
	static readonly actualRippleColorPropertyName: string = "ActualRippleColor";
	private _animationQueue: LinkedList$1<IKeyFrameAnimation> = new LinkedList$1<IKeyFrameAnimation>(IKeyFrameAnimation_$type);
	startRipple(x: number, y: number, width: number, height: number): void {
		if (this.isDisabled) {
			return;
		}
		let diameter = Math.max(width, height);
		let radius = diameter / 2;
		let left = x - radius;
		let top = y - radius;
		if (this.isCentered) {
			left = 0;
			top = 0;
		}
		let ele = this.view.createRippleElement(left, top, radius);
		let anim = this.createRippleAnimation(ele);
		this._animationQueue.addLast(anim);
		let node = this._animationQueue.last;
		anim.play();
		anim.finished.continueWith((t: Task) => {
			anim.commitStyles();
			this._animationQueue.remove(node);
			this.view.removeRippleElement(ele);
		});
	}
	private createRippleAnimation(ele: any): IKeyFrameAnimation {
		let timing = this.rippleAnimationTiming;
		let anim = KeyFrameAnimationFactory.instance.createAnimation(this.view.createRippleEffect(ele, timing).addFrame(new AnimationKeyFrameProperty(UIElementPropertyId.Opacity, 0.5), new AnimationKeyFrameProperty(UIElementPropertyId.Transform, ((() => {
			let $ret = new ScaleTransform();
			$ret.scaleX = 0.3;
			$ret.scaleY = 0.3;
			return $ret;
		})()))).addFrame(new AnimationKeyFrameProperty(UIElementPropertyId.Opacity, 0), new AnimationKeyFrameProperty(UIElementPropertyId.Transform, ((() => {
			let $ret = new ScaleTransform();
			$ret.scaleX = 2;
			$ret.scaleY = 2;
			return $ret;
		})()))));
		return anim;
	}
	private static defaultRippleColor: Brush = BrushUtil.fromArgb(189, 0, 0, 0);
	private _actualRippleColor: Brush = Ripple.defaultRippleColor;
	get actualRippleColor(): Brush {
		return this._actualRippleColor;
	}
	set actualRippleColor(value: Brush) {
		let oldValue = this._actualRippleColor;
		this._actualRippleColor = value;
		if (oldValue != this._actualRippleColor) {
			this.onPropertyChanged(Ripple.actualRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly rippleDurationPropertyName: string = "RippleDuration";
	private _rippleDuration: number = 600;
	get rippleDuration(): number {
		return this._rippleDuration;
	}
	set rippleDuration(value: number) {
		let oldValue = this._rippleDuration;
		this._rippleDuration = value;
		if (oldValue != this._rippleDuration) {
			this.onPropertyChanged(Ripple.rippleDurationPropertyName, oldValue, value);
		}
	}
	static readonly isDisabledPropertyName: string = "IsDisabled";
	private _isDisabled: boolean = false;
	get isDisabled(): boolean {
		return this._isDisabled;
	}
	set isDisabled(value: boolean) {
		let oldIsDisabled = this._isDisabled;
		this._isDisabled = value;
		if (oldIsDisabled != this._isDisabled) {
			this.onPropertyChanged(Ripple.isDisabledPropertyName, oldIsDisabled, value);
		}
	}
	static readonly isCenteredPropertyName: string = "IsCentered";
	private _isCentered: boolean = false;
	get isCentered(): boolean {
		return this._isCentered;
	}
	set isCentered(value: boolean) {
		let oldIsCentered = this._isCentered;
		this._isCentered = value;
		if (oldIsCentered != this._isCentered) {
			this.onPropertyChanged(Ripple.isCenteredPropertyName, oldIsCentered, value);
		}
	}
	static readonly isHoverEnabledPropertyName: string = "IsHoverEnabled";
	private _isHoverEnabled: boolean = false;
	get isHoverEnabled(): boolean {
		return this._isHoverEnabled;
	}
	set isHoverEnabled(value: boolean) {
		let oldIsHoverEnabled = this._isHoverEnabled;
		this._isHoverEnabled = value;
		if (oldIsHoverEnabled != this._isHoverEnabled) {
			this.onPropertyChanged(Ripple.isHoverEnabledPropertyName, oldIsHoverEnabled, value);
		}
	}
	onViewReady(): void {
		this.view.onEventSourceChanged();
	}
	private get rippleAnimationTiming(): AnimationKeyFrameEffectTiming {
		let timing = new AnimationKeyFrameEffectTiming();
		timing.duration = this.rippleDuration;
		timing.easing = KeyFrameEffectEasing.CubicInOut;
		return timing;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	protected isValid(): boolean {
		return this.view.ready();
	}
	provideContainer(container: DomRenderer): void {
		this.view.onContainerProvided(container);
	}
}


