/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, Delegate_$type, fromEnum, runOn, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent, DomPortal, DomPortal_$type } from "igniteui-core/dom";
import { List$1 } from "igniteui-core/List$1";
import { Ripple } from "./Ripple";
import { KeyFrameAnimationFactory } from "igniteui-core/KeyFrameAnimationFactory";
import { AnimationKeyFrameEffect } from "igniteui-core/AnimationKeyFrameEffect";
import { AnimationKeyFrameEffectTiming } from "igniteui-core/AnimationKeyFrameEffectTiming";
import { Brush } from "igniteui-core/Brush";
import { FontInfo } from "igniteui-core/FontInfo";
import { AnimationKeyFrameEffectTargetType } from "igniteui-core/AnimationKeyFrameEffectTargetType";
import { CheckboxLabelPosition, CheckboxLabelPosition_$type } from "./CheckboxLabelPosition";
import { IKeyFrameAnimation } from "igniteui-core/IKeyFrameAnimation";
import { CornerRadius } from "igniteui-core/CornerRadius";
import { NativeUI } from "igniteui-core/NativeUI";
import { Thickness } from "igniteui-core/Thickness";
import { CheckboxChangeEventArgs } from "./CheckboxChangeEventArgs";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { AnimationKeyFrameProperty } from "igniteui-core/AnimationKeyFrameProperty";
import { Task } from "igniteui-core/Task";
import { KeyFrameEffectEasing } from "igniteui-core/KeyFrameEffectEasing";
import { UIElementPropertyId } from "igniteui-core/UIElementPropertyId";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CheckboxView extends Base {
	static $t: Type = markType(CheckboxView, 'CheckboxView');
	constructor() {
		super();
	}
	private _model: Checkbox = null;
	get model(): Checkbox {
		return this._model;
	}
	set model(value: Checkbox) {
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
		this.container.rootWrapper.setStyleProperty("display", "flex");
		this.container.rootWrapper.setStyleProperty("flex-direction", "row");
		this.container.rootWrapper.setStyleProperty("flex-wrap", "no-wrap");
		this.container.rootWrapper.setStyleProperty("align-items", "center");
		let nativeBox = this.container.createElement("input");
		this._nativeBox = nativeBox;
		this._nativeBox.addClass("ig-native-checkbox");
		this._nativeBox.setStyleProperty("position", "absolute");
		this._nativeBox.setStyleProperty("width", "1px");
		this._nativeBox.setStyleProperty("height", "1px");
		this._nativeBox.setStyleProperty("margin", "-1px");
		this._nativeBox.setStyleProperty("border", "none");
		this._nativeBox.setStyleProperty("clip", "rect(0, 0, 0, 0)");
		this._nativeBox.setStyleProperty("outline", "0");
		this._nativeBox.setStyleProperty("pointer-events", "none");
		this._nativeBox.setStyleProperty("overflow", "hidden");
		this._nativeBox.setStyleProperty("-webkit-appearance", "none");
		this._nativeBox.setStyleProperty("-moz-appearance", "none");
		this._nativeBox.setStyleProperty("appearance", "none");
		this._nativeBox.setAttribute("type", "checkbox");
		this._nativeBox.setAttribute("id", this.model.inputId);
		this.updateNativeBox();
		this._events.add(nativeBox.listen("change", runOn(this, this._nativeChange)));
		this._events.add(nativeBox.listen("click", runOn(this, this._nativeClick)));
		this._events.add(nativeBox.listen("focus", runOn(this, this._nativeFocus)));
		this._events.add(nativeBox.listen("blur", runOn(this, this._nativeBlur)));
		this.container.append(nativeBox);
		let actualBox = this.container.createElement("div");
		actualBox.addClass("ig-checkbox-box");
		actualBox.setStyleProperty("width", "1.25em");
		actualBox.setStyleProperty("height", "1.25em");
		actualBox.setStyleProperty("position", "relative");
		this._actualBox = actualBox;
		this.container.append(actualBox);
		let label = this.container.createElement("label");
		label.setAttribute("for", this.model.inputId);
		label.addClass("ig-checkbox-composite");
		label.setStyleProperty("box-sizing", "border-box");
		label.setStyleProperty("position", "relative");
		label.setStyleProperty("display", "inline-block");
		label.setStyleProperty("cursor", "pointer");
		label.setStyleProperty("width", "1.25em");
		label.setStyleProperty("height", "1.25em");
		label.setStyleProperty("min-width", "1.25em");
		label.setStyleProperty("border-width", "0.125rem");
		label.setStyleProperty("border-style", "solid");
		label.setStyleProperty("border-color", "rgba(0,0,0,0.54)");
		label.setStyleProperty("border-top-color", "rgba(0, 0, 0, 0.54)");
		label.setStyleProperty("border-right-color", "rgba(0, 0, 0, 0.54)");
		label.setStyleProperty("border-bottom-color", "rgba(0, 0, 0, 0.54)");
		label.setStyleProperty("border-left-color", "rgba(0, 0, 0, 0.54)");
		label.setStyleProperty("border-radius", "2px");
		label.setStyleProperty("-webkit-tap-highlight-color", "transparent");
		label.setStyleProperty("overflow", "hidden");
		this._label = label;
		this._actualBox.append(label);
		let checkShape = this.container.createElementNS("svg", "http://www.w3.org/2000/svg");
		checkShape.setAttribute("viewBox", "0 0 24 24");
		checkShape.addClass("ig-checkbox-mark");
		checkShape.setStyleProperty("position", "absolute");
		checkShape.setStyleProperty("top", "0");
		checkShape.setStyleProperty("left", "0");
		checkShape.setStyleProperty("right", "0");
		checkShape.setStyleProperty("bottom", "0");
		checkShape.setStyleProperty("stroke", "#fff");
		checkShape.setStyleProperty("stroke-linecap", "square");
		checkShape.setStyleProperty("stroke-width", "3");
		checkShape.setStyleProperty("stroke-dasharray", "24");
		checkShape.setStyleProperty("stroke-dashoffset", "24");
		checkShape.setStyleProperty("fill", "none");
		checkShape.setStyleProperty("opacity", "0");
		checkShape.setStyleProperty("z-index", "1");
		this._checkShape = checkShape;
		label.append(checkShape);
		let checkPath = this.container.createElementNS("path", "http://www.w3.org/2000/svg");
		checkPath.setAttribute("d", "M4.1,12.7 9,17.6 20.3,6.3");
		checkShape.append(checkPath);
		let rippleTarget = this.container.createElement("div");
		let sub = this.container.getSubRenderer(rippleTarget);
		rippleTarget.setStyleProperty("position", "absolute");
		rippleTarget.setStyleProperty("width", "3em");
		rippleTarget.setStyleProperty("height", "3em");
		rippleTarget.setStyleProperty("right", "calc(50% - 1.5em)");
		rippleTarget.setStyleProperty("top", "calc(50% - 1.5em)");
		rippleTarget.setStyleProperty("border-radius", "24px");
		rippleTarget.setStyleProperty("overflow", "hidden");
		let ripple = new Ripple();
		ripple.provideContainer(sub);
		ripple.eventSource = actualBox;
		ripple.isCentered = true;
		ripple.isHoverEnabled = true;
		this._ripple = ripple;
		actualBox.append(rippleTarget);
		let labelContainer = this.container.createElement("span");
		labelContainer.addClass("ig-checkbox-label");
		labelContainer.setStyleProperty("font-family", "'Titillium Web', Verdana");
		labelContainer.setStyleProperty("font-weight", "400");
		labelContainer.setStyleProperty("font-size", "1rem");
		labelContainer.setStyleProperty("letter-spacing", ".00937rem");
		labelContainer.setStyleProperty("text-transform", "none");
		labelContainer.setStyleProperty("line-height", "1.5rem");
		labelContainer.setStyleProperty("margin-left", "8px");
		labelContainer.setStyleProperty("margin-top", "0");
		labelContainer.setStyleProperty("margin-bottom", "0");
		labelContainer.setStyleProperty("cursor", "pointer");
		labelContainer.setStyleProperty("role", "label");
		this._containerLabel = labelContainer;
		this._events.add(labelContainer.listen("click", runOn(this, this._labelClick)));
		this.container.append(labelContainer);
		this.container.getPortal(labelContainer, "ChildContent", (p: DomPortal) => {
		}, true);
		this.model.onViewReady();
	}
	private _labelClick(arg1: NormalizedEvent): void {
		this.model.toggle();
	}
	updateNativeBox(): void {
		if (this.ready()) {
			let checkboxInputId = this.model.inputId;
			this._nativeBox.setAttribute("name", this.model.name);
			this._nativeBox.setProperty("value", this.model.value);
			if (this.model.hasTabIndex) {
				this._nativeBox.setAttribute("tabindex", this.model.tabIndex.toString());
			}
			this._nativeBox.setProperty("disabled", this.model.disabled);
			this._nativeBox.setProperty("indeterminate", this.model.indeterminate);
			this._nativeBox.setProperty("checked", this.model.checked);
			this._nativeBox.setProperty("required", this.model.required);
			if (this.model.indeterminate) {
				this._nativeBox.setAttribute("aria-checked", "mixed");
			} else {
				this._nativeBox.setAttribute("aria-checked", this.model.checked ? "true" : "false");
			}
			this._nativeBox.setAttribute("aria-labelledby", this.model.ariaLabelledBy);
			this._nativeBox.setAttribute("aria-label", this.model.ariaLabel);
		}
	}
	onInputIdChanged(): void {
		if (this.ready()) {
			let checkboxInputId = this.model.inputId;
			this._nativeBox.setAttribute("id", checkboxInputId);
			this._label.setAttribute("for", checkboxInputId);
		}
	}
	private _nativeBlur(arg1: NormalizedEvent): void {
		this.model.focused = false;
	}
	private _nativeFocus(arg1: NormalizedEvent): void {
		this.model.focused = true;
	}
	private _nativeClick(arg1: NormalizedEvent): void {
		arg1.stopPropagation();
		if (this.isIE()) {
			let native_ = this._nativeBox.getNativeElement();
			native_.blur();
		}
		this.model.toggle();
	}
	private isIE(): boolean {
		return false;
	}
	private _nativeChange(arg1: NormalizedEvent): void {
		arg1.stopPropagation();
	}
	ensureAnimationFactory(): void {
		if (KeyFrameAnimationFactory.renderer == null) {
			KeyFrameAnimationFactory.renderer = this.container;
		}
	}
	createCheckBackgroundEffect(timing: AnimationKeyFrameEffectTiming): AnimationKeyFrameEffect {
		return new AnimationKeyFrameEffect(0, this._label, AnimationKeyFrameEffectTargetType.NativeView, null, timing);
	}
	createCheckMarkEffect(timing: AnimationKeyFrameEffectTiming): AnimationKeyFrameEffect {
		return new AnimationKeyFrameEffect(0, this._checkShape, AnimationKeyFrameEffectTargetType.NativeView, null, timing);
	}
	private eventProxy_OnMouseEnter(point: Point): void {
	}
	private _attached: boolean = true;
	private _nativeBox: DomWrapper = null;
	private _actualBox: DomWrapper = null;
	private _label: DomWrapper = null;
	get box(): any {
		return this._label;
	}
	private _checkShape: DomWrapper = null;
	get checkShape(): any {
		return this._checkShape;
	}
	private _ripple: Ripple = null;
	private _containerLabel: DomWrapper = null;
	onAttachedToUI(): void {
		this._attached = true;
		this._events.add(this._nativeBox.listen("change", runOn(this, this._nativeChange)));
		this._events.add(this._nativeBox.listen("click", runOn(this, this._nativeClick)));
		this._events.add(this._nativeBox.listen("focus", runOn(this, this._nativeFocus)));
		this._events.add(this._nativeBox.listen("blur", runOn(this, this._nativeBlur)));
		this._events.add(this._containerLabel.listen("click", runOn(this, this._labelClick)));
	}
	onDetachedFromUI(): void {
		this._attached = false;
		for (let act of fromEnum<() => void>(this._events)) {
			act();
		}
		this._events.clear();
	}
	refreshDefaultValues(): void {
		let model_: any = this.model;
		if (model_.externalObject && model_.externalObject.refreshDefaults) { model_.externalObject.refreshDefaults(); };
	}
	updateRippleColors(rippleColor: Brush, hoverColor: Brush): void {
		this._ripple.rippleColor = rippleColor;
		this._ripple.hoverColor = hoverColor;
	}
}

/**
 * @hidden 
 */
export class Checkbox extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Checkbox, 'Checkbox', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this._labelId = this._id + "-label";
		this._ariaLabelledBy = this._labelId;
		let view: CheckboxView = new CheckboxView();
		view.model = this;
		this.view = view;
		this.view.onInit();
	}
	private _view: CheckboxView = null;
	get view(): CheckboxView {
		return this._view;
	}
	set view(value: CheckboxView) {
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
			case Checkbox.tickColorPropertyName:
			this.actualTickColor = this.tickColor != null ? this.tickColor : Checkbox.defaultTickColor;
			break;

			case Checkbox.borderColorPropertyName:
			this.actualBorderColor = this.borderColor != null ? this.borderColor : Checkbox.defaultBorderColor;
			break;

			case Checkbox.borderWidthPropertyName:
			this.actualBorderWidth = !isNaN_(this.borderWidth) ? this.borderWidth : Checkbox.defaultBorderWidth;
			break;

			case Checkbox.checkedBackgroundColorPropertyName:
			this.actualCheckedBackgroundColor = this.checkedBackgroundColor != null ? this.checkedBackgroundColor : Checkbox.defaultCheckedBackgroundColor;
			break;

			case Checkbox.uncheckedBackgroundColorPropertyName:
			this.actualUncheckedBackgroundColor = this.uncheckedBackgroundColor != null ? this.uncheckedBackgroundColor : Checkbox.defaultUncheckedBackgroundColor;
			break;

			case Checkbox.cornerRadiusPropertyName:
			this.actualCornerRadius = !isNaN_(this.cornerRadius) ? this.cornerRadius : Checkbox.defaultCornerRadius;
			break;

			case Checkbox.tickStrokeWidthPropertyName:
			this.actualTickStrokeWidth = !isNaN_(this.tickStrokeWidth) ? this.tickStrokeWidth : Checkbox.defaultTickStrokeWidth;
			break;

			case Checkbox.actualTickStrokeWidthPropertyName:

			case Checkbox.actualTickColorPropertyName:
			this.updateCheckmark();
			break;

			case Checkbox.actualCheckedBackgroundColorPropertyName:

			case Checkbox.actualUncheckedBackgroundColorPropertyName:

			case Checkbox.actualBorderColorPropertyName:

			case Checkbox.actualBorderWidthPropertyName:
			this._checkBackgroundAnimation = null;
			this._checkMarkAnimation = null;
			this.updateBox();
			break;

			case Checkbox.actualCornerRadiusPropertyName:
			this.updateBox();
			break;

			case Checkbox.inputIdPropertyName:
			this.view.onInputIdChanged();
			break;

		}

	}
	private updateBox(): void {
		let box = this.view.box;
		NativeUI.setBorderRadius(box, new CornerRadius(0, this.actualCornerRadius));
		NativeUI.setBorderColor(box, this.actualBorderColor);
		if (!isNaN_(this.actualBorderWidth)) {
			NativeUI.setBorderWidth(box, new Thickness(0, this.actualBorderWidth));
		}
		if (this.checked) {
			NativeUI.setBackgroundColor(box, this.actualCheckedBackgroundColor);
		} else {
			NativeUI.setBackgroundColor(box, this.actualUncheckedBackgroundColor);
		}
	}
	private updateCheckmark(): void {
		let checkShape = this.view.checkShape;
		NativeUI.setStroke(checkShape, this.actualTickColor);
		NativeUI.setStrokeWidth(checkShape, this.actualTickStrokeWidth);
	}
	private _refreshingDefaults: boolean = false;
	get refreshingDefaults(): boolean {
		return this._refreshingDefaults;
	}
	set refreshingDefaults(value: boolean) {
		this._refreshingDefaults = value;
	}
	static readonly uncheckedBackgroundColorPropertyName: string = "UncheckedBackgroundColor";
	private _uncheckedBackgroundColor: Brush = null;
	get uncheckedBackgroundColor(): Brush {
		return this._uncheckedBackgroundColor;
	}
	set uncheckedBackgroundColor(value: Brush) {
		let oldValue = this._uncheckedBackgroundColor;
		this._uncheckedBackgroundColor = value;
		if (oldValue != this._uncheckedBackgroundColor) {
			this.onPropertyChanged(Checkbox.uncheckedBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly actualUncheckedBackgroundColorPropertyName: string = "ActualUncheckedBackgroundColor";
	private static defaultUncheckedBackgroundColor: Brush = BrushUtil.fromArgb(255, 255, 255, 255);
	private _actualUncheckedBackgroundColor: Brush = Checkbox.defaultUncheckedBackgroundColor;
	get actualUncheckedBackgroundColor(): Brush {
		return this._actualUncheckedBackgroundColor;
	}
	set actualUncheckedBackgroundColor(value: Brush) {
		let oldValue = this._actualUncheckedBackgroundColor;
		this._actualUncheckedBackgroundColor = value;
		if (oldValue != this._actualUncheckedBackgroundColor) {
			this.onPropertyChanged(Checkbox.actualUncheckedBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly checkedBackgroundColorPropertyName: string = "CheckedBackgroundColor";
	private _checkedBackgroundColor: Brush = null;
	get checkedBackgroundColor(): Brush {
		return this._checkedBackgroundColor;
	}
	set checkedBackgroundColor(value: Brush) {
		let oldValue = this._checkedBackgroundColor;
		this._checkedBackgroundColor = value;
		if (oldValue != this._checkedBackgroundColor) {
			this.onPropertyChanged(Checkbox.checkedBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly tickColorPropertyName: string = "TickColor";
	private _tickColor: Brush = null;
	get tickColor(): Brush {
		return this._tickColor;
	}
	set tickColor(value: Brush) {
		let oldValue = this._tickColor;
		this._tickColor = value;
		if (oldValue != this._tickColor) {
			this.onPropertyChanged(Checkbox.tickColorPropertyName, oldValue, value);
		}
	}
	static readonly actualTickColorPropertyName: string = "ActualTickColor";
	private static defaultTickColor: Brush = BrushUtil.fromArgb(255, 255, 255, 255);
	private _actualTickColor: Brush = Checkbox.defaultTickColor;
	get actualTickColor(): Brush {
		return this._actualTickColor;
	}
	set actualTickColor(value: Brush) {
		let oldValue = this._actualTickColor;
		this._actualTickColor = value;
		if (oldValue != this._actualTickColor) {
			this.onPropertyChanged(Checkbox.actualTickColorPropertyName, oldValue, value);
		}
	}
	static readonly borderColorPropertyName: string = "BorderColor";
	private _borderColor: Brush = null;
	get borderColor(): Brush {
		return this._borderColor;
	}
	set borderColor(value: Brush) {
		let oldValue = this._borderColor;
		this._borderColor = value;
		if (oldValue != this._borderColor) {
			this.onPropertyChanged(Checkbox.borderColorPropertyName, oldValue, value);
		}
	}
	static readonly actualBorderColorPropertyName: string = "ActualBorderColor";
	private static defaultBorderColor: Brush = BrushUtil.fromArgb(138, 0, 0, 0);
	private _actualBorderColor: Brush = Checkbox.defaultBorderColor;
	get actualBorderColor(): Brush {
		return this._actualBorderColor;
	}
	set actualBorderColor(value: Brush) {
		let oldValue = this._actualBorderColor;
		this._actualBorderColor = value;
		if (oldValue != this._actualBorderColor) {
			this.onPropertyChanged(Checkbox.actualBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly borderWidthPropertyName: string = "BorderWidth";
	private _borderWidth: number = Checkbox.defaultBorderWidth;
	get borderWidth(): number {
		return this._borderWidth;
	}
	set borderWidth(value: number) {
		let oldValue = this._borderWidth;
		this._borderWidth = value;
		if (oldValue != this._borderWidth) {
			this.onPropertyChanged(Checkbox.borderWidthPropertyName, oldValue, value);
		}
	}
	static readonly actualBorderWidthPropertyName: string = "ActualBorderWidth";
	private static defaultBorderWidth: number = NaN;
	private _actualBorderWidth: number = Checkbox.defaultBorderWidth;
	get actualBorderWidth(): number {
		return this._actualBorderWidth;
	}
	set actualBorderWidth(value: number) {
		let oldValue = this._actualBorderWidth;
		this._actualBorderWidth = value;
		if (oldValue != this._actualBorderWidth) {
			this.onPropertyChanged(Checkbox.actualBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly cornerRadiusPropertyName: string = "CornerRadius";
	private _cornerRadius: number = NaN;
	get cornerRadius(): number {
		return this._cornerRadius;
	}
	set cornerRadius(value: number) {
		let oldValue = this._cornerRadius;
		this._cornerRadius = value;
		if (oldValue != this._cornerRadius) {
			this.onPropertyChanged(Checkbox.cornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly tickStrokeWidthPropertyName: string = "TickStrokeWidth";
	private _tickStrokeWidth: number = NaN;
	get tickStrokeWidth(): number {
		return this._tickStrokeWidth;
	}
	set tickStrokeWidth(value: number) {
		let oldValue = this._tickStrokeWidth;
		this._tickStrokeWidth = value;
		if (oldValue != this._tickStrokeWidth) {
			this.onPropertyChanged(Checkbox.tickStrokeWidthPropertyName, oldValue, value);
		}
	}
	static readonly actualTickStrokeWidthPropertyName: string = "ActualTickStrokeWidth";
	private static defaultTickStrokeWidth: number = 3;
	private _actualTickStrokeWidth: number = Checkbox.defaultTickStrokeWidth;
	get actualTickStrokeWidth(): number {
		return this._actualTickStrokeWidth;
	}
	set actualTickStrokeWidth(value: number) {
		let oldValue = this._actualTickStrokeWidth;
		this._actualTickStrokeWidth = value;
		if (oldValue != this._actualTickStrokeWidth) {
			this.onPropertyChanged(Checkbox.actualTickStrokeWidthPropertyName, oldValue, value);
		}
	}
	static readonly actualCornerRadiusPropertyName: string = "ActualCornerRadius";
	private static defaultCornerRadius: number = 2;
	private _actualCornerRadius: number = Checkbox.defaultCornerRadius;
	get actualCornerRadius(): number {
		return this._actualCornerRadius;
	}
	set actualCornerRadius(value: number) {
		let oldValue = this._actualCornerRadius;
		this._actualCornerRadius = value;
		if (oldValue != this._actualCornerRadius) {
			this.onPropertyChanged(Checkbox.actualCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly actualCheckedBackgroundColorPropertyName: string = "ActualCheckedBackgroundColor";
	private static defaultCheckedBackgroundColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private _actualCheckedBackgroundColor: Brush = Checkbox.defaultCheckedBackgroundColor;
	get actualCheckedBackgroundColor(): Brush {
		return this._actualCheckedBackgroundColor;
	}
	set actualCheckedBackgroundColor(value: Brush) {
		let oldValue = this._actualCheckedBackgroundColor;
		this._actualCheckedBackgroundColor = value;
		if (oldValue != this._actualCheckedBackgroundColor) {
			this.onPropertyChanged(Checkbox.actualCheckedBackgroundColorPropertyName, oldValue, value);
		}
	}
	private static _nextInputId: number = 0;
	static readonly inputIdPropertyName: string = "InputId";
	private _inputId: string = "ig-native-checkbox-" + Checkbox._nextInputId++;
	get inputId(): string {
		return this._inputId;
	}
	set inputId(value: string) {
		let oldValue = this._inputId;
		this._inputId = value;
		if (oldValue != this._inputId) {
			this.onPropertyChanged(Checkbox.inputIdPropertyName, oldValue, value);
		}
	}
	private static _nextId: number = 0;
	static readonly idPropertyName: string = "Id";
	private _id: string = "ig-checkbox-" + Checkbox._nextId++;
	get id(): string {
		return this._id;
	}
	set id(value: string) {
		let oldValue = this._id;
		this._id = value;
		if (oldValue != this._id) {
			this.onPropertyChanged(Checkbox.idPropertyName, oldValue, value);
		}
	}
	static readonly labelIdPropertyName: string = "LabelId";
	private _labelId: string = null;
	get labelId(): string {
		return this._labelId;
	}
	set labelId(value: string) {
		let oldValue = this._labelId;
		this._labelId = value;
		if (oldValue != this._labelId) {
			this.onPropertyChanged(Checkbox.labelIdPropertyName, oldValue, value);
		}
	}
	static readonly valuePropertyName: string = "Value";
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		let oldValue = this._value;
		this._value = value;
		if (oldValue != this._value) {
			this.onPropertyChanged(Checkbox.valuePropertyName, oldValue, value);
		}
	}
	static readonly namePropertyName: string = "Name";
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		let oldName = this._name;
		this._name = value;
		if (oldName != this._name) {
			this.onPropertyChanged(Checkbox.namePropertyName, oldName, value);
		}
	}
	static readonly tabIndexPropertyName: string = "TabIndex";
	private _tabIndex: number = 0;
	private _hasTabIndex: boolean = false;
	get hasTabIndex(): boolean {
		return this._hasTabIndex;
	}
	get tabIndex(): number {
		return this._tabIndex;
	}
	set tabIndex(value: number) {
		let oldTabIndex = this._tabIndex;
		this._tabIndex = value;
		this._hasTabIndex = true;
		if (oldTabIndex != this._tabIndex) {
			this.onPropertyChanged(Checkbox.tabIndexPropertyName, oldTabIndex, value);
		}
	}
	static readonly requiredPropertyName: string = "Required";
	private _required: number = 0;
	get required(): number {
		return this._required;
	}
	set required(value: number) {
		let oldRequired = this._required;
		this._required = value;
		if (oldRequired != this._required) {
			this.onPropertyChanged(Checkbox.requiredPropertyName, oldRequired, value);
		}
	}
	static readonly isFocusedPropertyName: string = "IsFocused";
	private _isFocused: boolean = false;
	get focused(): boolean {
		return this._isFocused;
	}
	set focused(value: boolean) {
		let oldFocused = this._isFocused;
		this._isFocused = value;
		if (oldFocused != this._isFocused) {
			this.onPropertyChanged(Checkbox.isFocusedPropertyName, oldFocused, value);
		}
	}
	static readonly ariaLabelledByPropertyName: string = "AriaLabelledBy";
	private _ariaLabelledBy: string = null;
	get ariaLabelledBy(): string {
		return this._ariaLabelledBy;
	}
	set ariaLabelledBy(value: string) {
		let oldAriaLabelledBy = this._ariaLabelledBy;
		this._ariaLabelledBy = value;
		if (oldAriaLabelledBy != this._ariaLabelledBy) {
			this.onPropertyChanged(Checkbox.ariaLabelledByPropertyName, oldAriaLabelledBy, value);
		}
	}
	static readonly ariaLabelPropertyName: string = "AriaLabel";
	private _ariaLabel: string = null;
	get ariaLabel(): string {
		return this._ariaLabel;
	}
	set ariaLabel(value: string) {
		let oldAriaLabel = this._ariaLabel;
		this._ariaLabel = value;
		if (oldAriaLabel != this._ariaLabel) {
			this.onPropertyChanged(Checkbox.ariaLabelPropertyName, oldAriaLabel, value);
		}
	}
	change: (sender: any, args: CheckboxChangeEventArgs) => void = null;
	static readonly labelPositionPropertyName: string = "LabelPosition";
	private _labelPosition: CheckboxLabelPosition = CheckboxLabelPosition.After;
	get labelPosition(): CheckboxLabelPosition {
		return this._labelPosition;
	}
	set labelPosition(value: CheckboxLabelPosition) {
		let oldLabelPosition = this._labelPosition;
		this._labelPosition = value;
		if (oldLabelPosition != this._labelPosition) {
			this.onPropertyChanged(Checkbox.labelPositionPropertyName, enumGetBox<CheckboxLabelPosition>(CheckboxLabelPosition_$type, oldLabelPosition), enumGetBox<CheckboxLabelPosition>(CheckboxLabelPosition_$type, value));
		}
	}
	static readonly disableRipplePropertyName: string = "DisableRipple";
	private _disableRipple: boolean = false;
	get disableRipple(): boolean {
		return this._disableRipple;
	}
	set disableRipple(value: boolean) {
		let oldDisableRipple = this._disableRipple;
		this._disableRipple = value;
		if (oldDisableRipple != this._disableRipple) {
			this.onPropertyChanged(Checkbox.disableRipplePropertyName, oldDisableRipple, value);
		}
	}
	static readonly isCheckedPropertyName: string = "IsChecked";
	private _isChecked: boolean = false;
	get checked(): boolean {
		return this._isChecked;
	}
	set checked(value: boolean) {
		let oldIsChecked = this._isChecked;
		this._isChecked = value;
		if (oldIsChecked != this._isChecked) {
			this.onPropertyChanged(Checkbox.isCheckedPropertyName, oldIsChecked, value);
		}
	}
	static readonly isIndeterminatePropertyName: string = "IsIndeterminate";
	private _isIndeterminate: boolean = false;
	get indeterminate(): boolean {
		return this._isIndeterminate;
	}
	set indeterminate(value: boolean) {
		let oldIsIndeterminate = this._isIndeterminate;
		this._isIndeterminate = value;
		if (oldIsIndeterminate != this._isIndeterminate) {
			this.onPropertyChanged(Checkbox.isIndeterminatePropertyName, oldIsIndeterminate, value);
		}
	}
	static readonly isDisabledPropertyName: string = "IsDisabled";
	private _isDisabled: boolean = false;
	get disabled(): boolean {
		return this._isDisabled;
	}
	set disabled(value: boolean) {
		let oldIsDisabled = this._isDisabled;
		this._isDisabled = value;
		if (oldIsDisabled != this._isDisabled) {
			this.onPropertyChanged(Checkbox.isDisabledPropertyName, oldIsDisabled, value);
		}
	}
	static readonly disableTransitionsPropertyName: string = "DisableTransitions";
	private _disableTransitions: boolean = false;
	get disableTransitions(): boolean {
		return this._disableTransitions;
	}
	set disableTransitions(value: boolean) {
		let oldDisableTransitions = this._disableTransitions;
		this._disableTransitions = value;
		if (oldDisableTransitions != this._disableTransitions) {
			this.onPropertyChanged(Checkbox.disableTransitionsPropertyName, oldDisableTransitions, value);
		}
	}
	onViewReady(): void {
		this.ensureAnimations();
		if (this.checked) {
			this.view.updateRippleColors(BrushUtil.modifyOpacity(this.actualCheckedBackgroundColor, 0.6), BrushUtil.modifyOpacity(this.actualCheckedBackgroundColor, 0.1));
		} else {
			this.view.updateRippleColors(BrushUtil.modifyOpacity(this.actualCheckedBackgroundColor, 0.6), BrushUtil.modifyOpacity(this.actualBorderColor, 0.1));
		}
	}
	private get checkAnimationTiming(): AnimationKeyFrameEffectTiming {
		let timing = new AnimationKeyFrameEffectTiming();
		timing.duration = 300;
		timing.easing = KeyFrameEffectEasing.CubicInOut;
		return timing;
	}
	private ensureAnimations(): void {
		this.view.ensureAnimationFactory();
		let refreshed: boolean = false;
		if (this._checkBackgroundAnimation == null) {
			if (!refreshed) {
				refreshed = true;
				this.view.refreshDefaultValues();
			}
			this._checkBackgroundAnimation = KeyFrameAnimationFactory.instance.createAnimation(this.view.createCheckBackgroundEffect(this.checkAnimationTiming).addFrame(new AnimationKeyFrameProperty(UIElementPropertyId.BackgroundColor, this.actualUncheckedBackgroundColor)).addFrame(new AnimationKeyFrameProperty(UIElementPropertyId.BackgroundColor, this.actualCheckedBackgroundColor)));
			this._checkMarkAnimation = KeyFrameAnimationFactory.instance.createAnimation(this.view.createCheckMarkEffect(this.checkAnimationTiming).addFrame(new AnimationKeyFrameProperty(UIElementPropertyId.StrokeDashOffset, 24), new AnimationKeyFrameProperty(UIElementPropertyId.Opacity, 0)).addFrame(new AnimationKeyFrameProperty(UIElementPropertyId.StrokeDashOffset, 0), new AnimationKeyFrameProperty(UIElementPropertyId.Opacity, 1)));
		}
	}
	toggle(): void {
		if (this.disabled) {
			return;
		}
		this.ensureAnimations();
		this.indeterminate = false;
		this.focused = false;
		this.checked = !this.checked;
		let direction = 1;
		if (!this.checked) {
			direction = -1;
		}
		if (this.checked) {
			this.view.updateRippleColors(BrushUtil.modifyOpacity(this.actualCheckedBackgroundColor, 0.6), BrushUtil.modifyOpacity(this.actualCheckedBackgroundColor, 0.1));
		} else {
			this.view.updateRippleColors(BrushUtil.modifyOpacity(this.actualCheckedBackgroundColor, 0.6), BrushUtil.modifyOpacity(this.actualBorderColor, 0.1));
		}
		if ((direction > 0 && this._checkBackgroundAnimation.playbackRate < 0) || (direction < 0 && this._checkBackgroundAnimation.playbackRate > 0)) {
			this._checkBackgroundAnimation.reverse();
			this._checkBackgroundAnimation.finished.continueWith((t: Task) => this._checkBackgroundAnimation.commitStyles());
			this._checkMarkAnimation.reverse();
			this._checkMarkAnimation.finished.continueWith((t: Task) => this._checkMarkAnimation.commitStyles());
		} else {
			this._checkBackgroundAnimation.play();
			this._checkBackgroundAnimation.finished.continueWith((t: Task) => this._checkBackgroundAnimation.commitStyles());
			this._checkMarkAnimation.play();
			this._checkMarkAnimation.finished.continueWith((t: Task) => this._checkMarkAnimation.commitStyles());
		}
		if (this.change != null) {
			let args = new CheckboxChangeEventArgs();
			args.isChecked = this.checked;
			this.change(this, args);
		}
	}
	private _checkBackgroundAnimation: IKeyFrameAnimation = null;
	private _checkMarkAnimation: IKeyFrameAnimation = null;
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


