/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Delegate_$type, fromEnum, runOn, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent, DomPortal, DomPortal_$type } from "igniteui-core/dom";
import { List$1 } from "igniteui-core/List$1";
import { Ripple } from "./Ripple";
import { Brush } from "igniteui-core/Brush";
import { NativeUI } from "igniteui-core/NativeUI";
import { KeyFrameAnimationFactory } from "igniteui-core/KeyFrameAnimationFactory";
import { ElevationHelper } from "./ElevationHelper";
import { FontInfo } from "igniteui-core/FontInfo";
import { ButtonDisplayStyle, ButtonDisplayStyle_$type } from "./ButtonDisplayStyle";
import { CornerRadius } from "igniteui-core/CornerRadius";
import { AnimationKeyFrameEffectTiming } from "igniteui-core/AnimationKeyFrameEffectTiming";
import { ButtonClickEventArgs } from "./ButtonClickEventArgs";
import { Thickness } from "igniteui-core/Thickness";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { KeyFrameEffectEasing } from "igniteui-core/KeyFrameEffectEasing";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ButtonView extends Base {
	static $t: Type = markType(ButtonView, 'ButtonView');
	constructor() {
		super();
	}
	private _model: Button = null;
	get model(): Button {
		return this._model;
	}
	set model(value: Button) {
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
	get button(): any {
		return this._nativeButton;
	}
	get label(): any {
		return this._containerLabel;
	}
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
		let nativeButton = this.container.createElement("button");
		this._nativeButton = nativeButton;
		this._nativeButton.setStyleProperty("position", "relative");
		this._nativeButton.setStyleProperty("display", "inline-flex");
		this._nativeButton.setStyleProperty("align-items", "center");
		this._nativeButton.setStyleProperty("justify-content", "center");
		this.updateSize();
		this._nativeButton.setStyleProperty("border", "none");
		this._nativeButton.setStyleProperty("cursor", "pointer");
		this._nativeButton.setStyleProperty("user-select", "none");
		this._nativeButton.setStyleProperty("outline-style", "none");
		this._nativeButton.setStyleProperty("-webkit-tap-highlight-color", "transparent");
		this._nativeButton.setStyleProperty("overflow", "hidden");
		this._nativeButton.setStyleProperty("white-space", "no-wrap");
		this._nativeButton.setStyleProperty("color", "#000");
		this._nativeButton.setStyleProperty("background", this.model.actualBackgroundColor._fill);
		NativeUI.setBorderRadius(this._nativeButton, this.model.actualCornerRadius);
		this._nativeButton.setAttribute("id", this.model.inputId);
		this.updateNativeButton();
		this._events.add(nativeButton.listen("change", runOn(this, this._nativeChange)));
		this._events.add(nativeButton.listen("click", runOn(this, this._nativeClick)));
		this._events.add(nativeButton.listen("focus", runOn(this, this._nativeFocus)));
		this._events.add(nativeButton.listen("blur", runOn(this, this._nativeBlur)));
		this._events.add(nativeButton.listen("mouseenter", runOn(this, this._mouseEnter)));
		this._events.add(nativeButton.listen("mouseleave", runOn(this, this._mouseLeave)));
		this.container.append(nativeButton);
		let rippleTarget = this.container.createElement("div");
		let sub = this.container.getSubRenderer(rippleTarget);
		rippleTarget.setStyleProperty("position", "absolute");
		rippleTarget.setStyleProperty("width", "100%");
		rippleTarget.setStyleProperty("height", "100%");
		rippleTarget.setStyleProperty("overflow", "hidden");
		let ripple = new Ripple();
		ripple.provideContainer(sub);
		ripple.eventSource = nativeButton;
		ripple.isCentered = false;
		ripple.isHoverEnabled = true;
		this._ripple = ripple;
		this._nativeButton.append(rippleTarget);
		let subContentContainer = this.container.createElement("div");
		subContentContainer.addClass("ig-button-content");
		subContentContainer.setStyleProperty("font-family", "'Titillium Web', Verdana");
		subContentContainer.setStyleProperty("font-weight", "400");
		subContentContainer.setStyleProperty("font-size", ".875rem");
		subContentContainer.setStyleProperty("cursor", "pointer");
		this._containerLabel = subContentContainer;
		this._events.add(subContentContainer.listen("click", runOn(this, this._labelClick)));
		this._nativeButton.append(subContentContainer);
		this.container.getPortal(subContentContainer, "ChildContent", (p: DomPortal) => {
		}, true);
		this.model.onViewReady();
	}
	updateSize(): void {
		if (this.model.type == ButtonDisplayStyle.Icon) {
			this._nativeButton.setStyleProperty("min-width", "2.25rem");
			this._nativeButton.setStyleProperty("min-height", "2.25rem");
			this._nativeButton.setStyleProperty("padding", "0px");
			this._nativeButton.setStyleProperty("width", "2.25rem");
			this._nativeButton.setStyleProperty("height", "2.25rem");
		} else if (this.model.type == ButtonDisplayStyle.Fab) {
			this._nativeButton.setStyleProperty("min-width", "3.5rem");
			this._nativeButton.setStyleProperty("min-height", "3.5rem");
			this._nativeButton.setStyleProperty("padding", "0px");
			this._nativeButton.setStyleProperty("width", "3.5rem");
			this._nativeButton.setStyleProperty("height", "3.5rem");
		} else {
			this._nativeButton.setStyleProperty("min-width", "5.5rem");
			this._nativeButton.setStyleProperty("min-height", "2.25rem");
			this._nativeButton.setStyleProperty("padding", ".5625rem 1rem");
		}
		if (this.model.type == ButtonDisplayStyle.Outlined) {
			this._nativeButton.setStyleProperty("border-style", "solid");
		} else {
			this._nativeButton.setStyleProperty("border-style", "none");
		}
	}
	private _labelClick(arg1: NormalizedEvent): void {
	}
	updateNativeButton(): void {
		if (this.ready()) {
			let checkboxInputId = this.model.inputId;
			this._nativeButton.setAttribute("name", this.model.name);
			this._nativeButton.setProperty("value", this.model.value);
			if (this.model.hasTabIndex) {
				this._nativeButton.setAttribute("tabindex", this.model.tabIndex.toString());
			}
			this._nativeButton.setProperty("disabled", this.model.disabled);
			{
			}
			this._nativeButton.setAttribute("aria-label", this.model.ariaLabel);
		}
	}
	onInputIdChanged(): void {
		if (this.ready()) {
			let checkboxInputId = this.model.inputId;
			this._nativeButton.setAttribute("id", checkboxInputId);
		}
	}
	private _mouseEnter(arg1: NormalizedEvent): void {
		this.model.onMouseEnter();
	}
	private _mouseLeave(arg1: NormalizedEvent): void {
		this.model.onMouseLeave();
	}
	private _nativeBlur(arg1: NormalizedEvent): void {
		this.model.onBlurred();
	}
	private _nativeFocus(arg1: NormalizedEvent): void {
		this.model.onFocused();
	}
	private _nativeClick(arg1: NormalizedEvent): void {
		this.model.onClicked();
	}
	private isIE(): boolean {
		return false;
	}
	private _nativeChange(arg1: NormalizedEvent): void {
	}
	ensureAnimationFactory(): void {
		if (KeyFrameAnimationFactory.renderer == null) {
			KeyFrameAnimationFactory.renderer = this.container;
		}
	}
	private _attached: boolean = true;
	private _nativeButton: DomWrapper = null;
	private _checkShape: DomWrapper = null;
	private _ripple: Ripple = null;
	private _containerLabel: DomWrapper = null;
	onAttachedToUI(): void {
		this._attached = true;
		this._events.add(this._nativeButton.listen("change", runOn(this, this._nativeChange)));
		this._events.add(this._nativeButton.listen("click", runOn(this, this._nativeClick)));
		this._events.add(this._nativeButton.listen("focus", runOn(this, this._nativeFocus)));
		this._events.add(this._nativeButton.listen("blur", runOn(this, this._nativeBlur)));
		this._events.add(this._containerLabel.listen("click", runOn(this, this._labelClick)));
		this._events.add(this._nativeButton.listen("mouseenter", runOn(this, this._mouseEnter)));
		this._events.add(this._nativeButton.listen("mouseleave", runOn(this, this._mouseLeave)));
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
	updateShadowElevation(actualElevation: number): void {
		let shadow = ElevationHelper.getElevationShadow(actualElevation, this.model.actualUmbraShadowColor, this.model.actualPenumbraShadowColor, this.model.actualAmbientShadowColor);
		this._nativeButton.setStyleProperty("box-shadow", shadow);
	}
	updateTextStyle(textStyle: FontInfo): void {
		if (textStyle != null) {
			this._containerLabel.setStyleProperty("font", textStyle.fontString);
		}
	}
}

/**
 * @hidden 
 */
export class Button extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Button, 'Button', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		let view: ButtonView = new ButtonView();
		view.model = this;
		this.view = view;
		this.view.onInit();
	}
	private _view: ButtonView = null;
	get view(): ButtonView {
		return this._view;
	}
	set view(value: ButtonView) {
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
			case Button.borderColorPropertyName:

			case Button.restingElevationPropertyName:

			case Button.hoverElevationPropertyName:

			case Button.focusElevationPropertyName:

			case Button.rippleColorPropertyName:

			case Button.borderWidthPropertyName:

			case Button.backgroundColorPropertyName:

			case Button.hoverBackgroundColorPropertyName:

			case Button.textStylePropertyName:

			case Button.textColorPropertyName:

			case Button.hoverTextColorPropertyName:

			case Button.focusBackgroundColorPropertyName:

			case Button.raisedBorderColorPropertyName:

			case Button.raisedRestingElevationPropertyName:

			case Button.raisedFocusElevationPropertyName:

			case Button.raisedHoverElevationPropertyName:

			case Button.raisedRippleColorPropertyName:

			case Button.raisedBorderWidthPropertyName:

			case Button.raisedBackgroundColorPropertyName:

			case Button.raisedHoverBackgroundColorPropertyName:

			case Button.raisedCornerRadiusPropertyName:

			case Button.raisedFocusBackgroundColorPropertyName:

			case Button.raisedTextColorPropertyName:

			case Button.raisedHoverTextColorPropertyName:

			case Button.flatBorderColorPropertyName:

			case Button.flatRestingElevationPropertyName:

			case Button.flatFocusElevationPropertyName:

			case Button.flatHoverElevationPropertyName:

			case Button.flatRippleColorPropertyName:

			case Button.flatBorderWidthPropertyName:

			case Button.flatBackgroundColorPropertyName:

			case Button.flatHoverBackgroundColorPropertyName:

			case Button.flatCornerRadiusPropertyName:

			case Button.flatFocusBackgroundColorPropertyName:

			case Button.flatTextColorPropertyName:

			case Button.flatHoverTextColorPropertyName:

			case Button.outlinedRippleColorPropertyName:

			case Button.outlinedRestingElevationPropertyName:

			case Button.outlinedFocusElevationPropertyName:

			case Button.outlinedHoverElevationPropertyName:

			case Button.outlinedBorderColorPropertyName:

			case Button.outlinedBorderWidthPropertyName:

			case Button.outlinedBackgroundColorPropertyName:

			case Button.outlinedHoverBackgroundColorPropertyName:

			case Button.outlinedCornerRadiusPropertyName:

			case Button.outlinedFocusBackgroundColorPropertyName:

			case Button.outlinedTextColorPropertyName:

			case Button.outlinedHoverTextColorPropertyName:

			case Button.fabBorderColorPropertyName:

			case Button.fabRippleColorPropertyName:

			case Button.fabRestingElevationPropertyName:

			case Button.fabFocusElevationPropertyName:

			case Button.fabHoverElevationPropertyName:

			case Button.fabBorderWidthPropertyName:

			case Button.fabBackgroundColorPropertyName:

			case Button.fabHoverBackgroundColorPropertyName:

			case Button.fabCornerRadiusPropertyName:

			case Button.fabFocusBackgroundColorPropertyName:

			case Button.fabTextColorPropertyName:

			case Button.fabHoverTextColorPropertyName:

			case Button.iconRestingElevationPropertyName:

			case Button.iconFocusElevationPropertyName:

			case Button.iconHoverElevationPropertyName:

			case Button.iconBorderColorPropertyName:

			case Button.iconRippleColorPropertyName:

			case Button.iconBorderWidthPropertyName:

			case Button.iconBackgroundColorPropertyName:

			case Button.iconHoverBackgroundColorPropertyName:

			case Button.iconCornerRadiusPropertyName:

			case Button.iconFocusBackgroundColorPropertyName:

			case Button.iconTextColorPropertyName:

			case Button.iconHoverTextColorPropertyName:
			this.updateButtonTheme();
			break;

			case Button.actualBackgroundColorPropertyName:

			case Button.actualHoverBackgroundColorPropertyName:

			case Button.actualBorderColorPropertyName:

			case Button.actualBorderWidthPropertyName:

			case Button.actualCornerRadiusPropertyName:
			this.updateButton();
			break;

			case Button.typePropertyName:
			this.view.updateSize();
			this.updateButtonTheme();
			this.updateButton();
			break;

			case Button.inputIdPropertyName:
			this.view.onInputIdChanged();
			break;

		}

	}
	private combineRadius(radius: CornerRadius, defaultRadius: CornerRadius): CornerRadius {
		return new CornerRadius(1, !isNaN_(radius.topLeft) ? radius.topLeft : defaultRadius.topLeft, !isNaN_(radius.topRight) ? radius.topLeft : defaultRadius.topLeft, !isNaN_(radius.topLeft) ? radius.topLeft : defaultRadius.topLeft, !isNaN_(radius.topLeft) ? radius.topLeft : defaultRadius.topLeft);
	}
	private updateButtonTheme(): void {
		switch (this.type) {
			case ButtonDisplayStyle.Raised:
			this.actualRestingElevation = this.restingElevation >= 0 ? this.restingElevation : this.raisedRestingElevation >= 0 ? this.raisedRestingElevation : Button.defaultRaisedRestingElevation;
			this.actualHoverElevation = this.hoverElevation >= 0 ? this.hoverElevation : this.raisedHoverElevation >= 0 ? this.raisedHoverElevation : Button.defaultRaisedHoverElevation;
			this.actualFocusElevation = this.focusElevation >= 0 ? this.focusElevation : this.raisedFocusElevation >= 0 ? this.raisedFocusElevation : Button.defaultRaisedFocusElevation;
			this.actualBorderColor = this.borderColor != null ? this.borderColor : this.raisedBorderColor != null ? this.raisedBorderColor : Button.defaultRaisedBorderColor;
			this.actualBackgroundColor = this.backgroundColor != null ? this.backgroundColor : this.raisedBackgroundColor != null ? this.raisedBackgroundColor : Button.defaultRaisedBackgroundColor;
			this.actualHoverBackgroundColor = this.hoverBackgroundColor != null ? this.hoverBackgroundColor : this.raisedHoverBackgroundColor != null ? this.raisedHoverBackgroundColor : Button.defaultRaisedHoverBackgroundColor;
			this.actualCornerRadius = this.combineRadius(this.cornerRadius, this.combineRadius(this.raisedCornerRadius, Button.defaultRaisedCornerRadius));
			this.actualBorderWidth = !isNaN_(this.borderWidth) ? this.borderWidth : !isNaN_(this.raisedBorderWidth) ? this.raisedBorderWidth : Button.defaultRaisedBorderWidth;
			this.actualRippleColor = this.rippleColor != null ? this.rippleColor : this.raisedRippleColor != null ? this.raisedRippleColor : Button.defaultRaisedRippleColor;
			this.actualFocusBackgroundColor = this.focusBackgroundColor != null ? this.focusBackgroundColor : this.raisedFocusBackgroundColor != null ? this.raisedFocusBackgroundColor : Button.defaultRaisedFocusBackgroundColor;
			this.actualTextColor = this.textColor != null ? this.textColor : this.raisedTextColor != null ? this.raisedTextColor : Button.defaultRaisedTextColor;
			this.actualHoverTextColor = this.hoverTextColor != null ? this.hoverTextColor : this.raisedHoverTextColor != null ? this.raisedHoverTextColor : Button.defaultRaisedHoverTextColor;
			break;

			case ButtonDisplayStyle.Outlined:
			this.actualRestingElevation = this.restingElevation >= 0 ? this.restingElevation : this.outlinedRestingElevation >= 0 ? this.outlinedRestingElevation : Button.defaultOutlinedRestingElevation;
			this.actualHoverElevation = this.hoverElevation >= 0 ? this.hoverElevation : this.outlinedHoverElevation >= 0 ? this.outlinedHoverElevation : Button.defaultOutlinedHoverElevation;
			this.actualFocusElevation = this.focusElevation >= 0 ? this.focusElevation : this.outlinedFocusElevation >= 0 ? this.outlinedFocusElevation : Button.defaultOutlinedFocusElevation;
			this.actualBorderColor = this.borderColor != null ? this.borderColor : this.outlinedBorderColor != null ? this.outlinedBorderColor : Button.defaultOutlinedBorderColor;
			this.actualBackgroundColor = this.hoverBackgroundColor != null ? this.hoverBackgroundColor : this.backgroundColor != null ? this.backgroundColor : this.outlinedBackgroundColor != null ? this.outlinedBackgroundColor : Button.defaultOutlinedBackgroundColor;
			this.actualHoverBackgroundColor = this.outlinedHoverBackgroundColor != null ? this.outlinedHoverBackgroundColor : Button.defaultOutlinedHoverBackgroundColor;
			this.actualCornerRadius = this.combineRadius(this.cornerRadius, this.combineRadius(this.outlinedCornerRadius, Button.defaultOutlinedCornerRadius));
			this.actualBorderWidth = !isNaN_(this.borderWidth) ? this.borderWidth : !isNaN_(this.outlinedBorderWidth) ? this.outlinedBorderWidth : Button.defaultOutlinedBorderWidth;
			this.actualRippleColor = this.rippleColor != null ? this.rippleColor : this.outlinedRippleColor != null ? this.outlinedRippleColor : Button.defaultOutlinedRippleColor;
			this.actualFocusBackgroundColor = this.focusBackgroundColor != null ? this.focusBackgroundColor : this.outlinedFocusBackgroundColor != null ? this.outlinedFocusBackgroundColor : Button.defaultOutlinedFocusBackgroundColor;
			this.actualTextColor = this.textColor != null ? this.textColor : this.outlinedTextColor != null ? this.outlinedTextColor : Button.defaultOutlinedTextColor;
			this.actualHoverTextColor = this.hoverTextColor != null ? this.hoverTextColor : this.outlinedHoverTextColor != null ? this.outlinedHoverTextColor : Button.defaultOutlinedHoverTextColor;
			break;

			case ButtonDisplayStyle.Flat:
			this.actualRestingElevation = this.restingElevation >= 0 ? this.restingElevation : this.flatRestingElevation >= 0 ? this.flatRestingElevation : Button.defaultFlatRestingElevation;
			this.actualHoverElevation = this.hoverElevation >= 0 ? this.hoverElevation : this.flatHoverElevation >= 0 ? this.flatHoverElevation : Button.defaultFlatHoverElevation;
			this.actualFocusElevation = this.focusElevation >= 0 ? this.focusElevation : this.flatFocusElevation >= 0 ? this.flatFocusElevation : Button.defaultFlatFocusElevation;
			this.actualBorderColor = this.borderColor != null ? this.borderColor : this.flatBorderColor != null ? this.flatBorderColor : Button.defaultFlatBorderColor;
			this.actualBackgroundColor = this.backgroundColor != null ? this.backgroundColor : this.flatBackgroundColor != null ? this.flatBackgroundColor : Button.defaultFlatBackgroundColor;
			this.actualHoverBackgroundColor = this.hoverBackgroundColor != null ? this.hoverBackgroundColor : this.flatHoverBackgroundColor != null ? this.flatHoverBackgroundColor : Button.defaultFlatHoverBackgroundColor;
			this.actualCornerRadius = this.combineRadius(this.cornerRadius, this.combineRadius(this.flatCornerRadius, Button.defaultFlatCornerRadius));
			this.actualBorderWidth = !isNaN_(this.borderWidth) ? this.borderWidth : !isNaN_(this.flatBorderWidth) ? this.flatBorderWidth : Button.defaultFlatBorderWidth;
			this.actualRippleColor = this.rippleColor != null ? this.rippleColor : this.flatRippleColor != null ? this.flatRippleColor : Button.defaultFlatRippleColor;
			this.actualFocusBackgroundColor = this.focusBackgroundColor != null ? this.focusBackgroundColor : this.flatFocusBackgroundColor != null ? this.flatFocusBackgroundColor : Button.defaultFlatFocusBackgroundColor;
			this.actualTextColor = this.textColor != null ? this.textColor : this.flatTextColor != null ? this.flatTextColor : Button.defaultFlatTextColor;
			this.actualHoverTextColor = this.hoverTextColor != null ? this.hoverTextColor : this.flatHoverTextColor != null ? this.flatHoverTextColor : Button.defaultFlatHoverTextColor;
			break;

			case ButtonDisplayStyle.Icon:
			this.actualRestingElevation = this.restingElevation >= 0 ? this.restingElevation : this.iconRestingElevation >= 0 ? this.iconRestingElevation : Button.defaultIconRestingElevation;
			this.actualHoverElevation = this.hoverElevation >= 0 ? this.hoverElevation : this.iconHoverElevation >= 0 ? this.iconHoverElevation : Button.defaultIconHoverElevation;
			this.actualFocusElevation = this.focusElevation >= 0 ? this.focusElevation : this.iconFocusElevation >= 0 ? this.iconFocusElevation : Button.defaultIconFocusElevation;
			this.actualBorderColor = this.borderColor != null ? this.borderColor : this.iconBorderColor != null ? this.iconBorderColor : Button.defaultIconBorderColor;
			this.actualBackgroundColor = this.backgroundColor != null ? this.backgroundColor : this.iconBackgroundColor != null ? this.iconBackgroundColor : Button.defaultIconBackgroundColor;
			this.actualHoverBackgroundColor = this.hoverBackgroundColor != null ? this.hoverBackgroundColor : this.iconHoverBackgroundColor != null ? this.iconHoverBackgroundColor : Button.defaultIconHoverBackgroundColor;
			this.actualCornerRadius = this.combineRadius(this.cornerRadius, this.combineRadius(this.iconCornerRadius, Button.defaultIconCornerRadius));
			this.actualBorderWidth = !isNaN_(this.borderWidth) ? this.borderWidth : !isNaN_(this.iconBorderWidth) ? this.iconBorderWidth : Button.defaultIconBorderWidth;
			this.actualRippleColor = this.rippleColor != null ? this.rippleColor : this.iconRippleColor != null ? this.iconRippleColor : Button.defaultIconRippleColor;
			this.actualFocusBackgroundColor = this.focusBackgroundColor != null ? this.focusBackgroundColor : this.iconFocusBackgroundColor != null ? this.iconFocusBackgroundColor : Button.defaultIconFocusBackgroundColor;
			this.actualTextColor = this.textColor != null ? this.textColor : this.iconTextColor != null ? this.iconTextColor : Button.defaultIconTextColor;
			this.actualHoverTextColor = this.hoverTextColor != null ? this.hoverTextColor : this.iconHoverTextColor != null ? this.iconHoverTextColor : Button.defaultIconHoverTextColor;
			break;

			case ButtonDisplayStyle.Fab:
			this.actualRestingElevation = this.restingElevation >= 0 ? this.restingElevation : this.fabRestingElevation >= 0 ? this.fabRestingElevation : Button.defaultFabRestingElevation;
			this.actualHoverElevation = this.hoverElevation >= 0 ? this.hoverElevation : this.fabHoverElevation >= 0 ? this.fabHoverElevation : Button.defaultFabHoverElevation;
			this.actualFocusElevation = this.focusElevation >= 0 ? this.focusElevation : this.fabFocusElevation >= 0 ? this.fabFocusElevation : Button.defaultFabFocusElevation;
			this.actualBorderColor = this.borderColor != null ? this.borderColor : this.fabBorderColor != null ? this.fabBorderColor : Button.defaultFabBorderColor;
			this.actualBackgroundColor = this.backgroundColor != null ? this.backgroundColor : this.fabBackgroundColor != null ? this.fabBackgroundColor : Button.defaultFabBackgroundColor;
			this.actualHoverBackgroundColor = this.hoverBackgroundColor != null ? this.hoverBackgroundColor : this.fabHoverBackgroundColor != null ? this.fabHoverBackgroundColor : Button.defaultFabHoverBackgroundColor;
			this.actualCornerRadius = this.combineRadius(this.cornerRadius, this.combineRadius(this.fabCornerRadius, Button.defaultFabCornerRadius));
			this.actualBorderWidth = !isNaN_(this.borderWidth) ? this.borderWidth : !isNaN_(this.fabBorderWidth) ? this.fabBorderWidth : Button.defaultFabBorderWidth;
			this.actualRippleColor = this.rippleColor != null ? this.rippleColor : this.fabRippleColor != null ? this.fabRippleColor : Button.defaultRaisedRippleColor;
			this.actualFocusBackgroundColor = this.focusBackgroundColor != null ? this.focusBackgroundColor : this.fabFocusBackgroundColor != null ? this.fabFocusBackgroundColor : Button.defaultFabFocusBackgroundColor;
			this.actualTextColor = this.textColor != null ? this.textColor : this.fabTextColor != null ? this.fabTextColor : Button.defaultFabTextColor;
			this.actualHoverTextColor = this.hoverTextColor != null ? this.hoverTextColor : this.fabHoverTextColor != null ? this.fabHoverTextColor : Button.defaultFabHoverTextColor;
			break;

		}

	}
	onClicked(): void {
		if (this.clicked != null) {
			this.clicked(this, new ButtonClickEventArgs());
		}
	}
	onBlurred(): void {
		this.focused = false;
		this.updateButton();
	}
	onFocused(): void {
		this.focused = true;
		this.updateButton();
	}
	onMouseLeave(): void {
		this.isHover = false;
		this.updateButton();
	}
	onMouseEnter(): void {
		this.isHover = true;
		this.updateButton();
	}
	private updateButton(): void {
		let button = this.view.button;
		NativeUI.setBorderRadius(button, this.actualCornerRadius);
		NativeUI.setBorderColor(button, this.actualBorderColor);
		if (!isNaN_(this.actualBorderWidth)) {
			NativeUI.setBorderWidth(button, new Thickness(0, this.actualBorderWidth));
		}
		if (this.focused) {
			this.view.updateShadowElevation(this.actualFocusElevation);
		} else {
			if (this.isHover) {
				this.view.updateShadowElevation(this.actualHoverElevation);
			} else {
				this.view.updateShadowElevation(this.actualRestingElevation);
			}
		}
		if (this.focused) {
			NativeUI.setBackgroundColor(button, this.actualFocusBackgroundColor);
		} else {
			if (this.isHover) {
				NativeUI.setBackgroundColor(button, this.actualHoverBackgroundColor);
			} else {
				NativeUI.setBackgroundColor(button, this.actualBackgroundColor);
			}
		}
		this.view.updateRippleColors(this.actualRippleColor, BrushUtil.fromArgb(0, 0, 0, 0));
		if (this.textStyle != null) {
			this.view.updateTextStyle(this.textStyle);
		}
		NativeUI.setColor(this.view.label, this.actualTextColor);
	}
	private static defaultUmbraShadowColor: Brush = BrushUtil.fromArgb(66, 0, 0, 0);
	private static defaultPenumbraShadowColor: Brush = BrushUtil.fromArgb(30, 0, 0, 0);
	private static defaultAmbientShadowColor: Brush = BrushUtil.fromArgb(20, 0, 0, 0);
	private static defaultRaisedRestingElevation: number = 2;
	private static defaultRaisedHoverElevation: number = 4;
	private static defaultRaisedFocusElevation: number = 8;
	private static defaultRaisedBorderColor: Brush = BrushUtil.fromArgb(138, 0, 0, 0);
	private static defaultRaisedRippleColor: Brush = BrushUtil.fromArgb(255, 255, 255, 255);
	private static defaultRaisedCornerRadius: CornerRadius = new CornerRadius(0, 4);
	private static defaultRaisedBorderWidth: number = NaN;
	private static defaultRaisedBackgroundColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private static defaultRaisedTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultRaisedHoverTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultRaisedHoverBackgroundColor: Brush = BrushUtil.fromArgb(255, 220, 83, 145);
	private static defaultRaisedFocusBackgroundColor: Brush = BrushUtil.fromArgb(255, 220, 83, 145);
	private static defaultFlatRestingElevation: number = 0;
	private static defaultFlatHoverElevation: number = 0;
	private static defaultFlatFocusElevation: number = 0;
	private static defaultFlatBorderColor: Brush = BrushUtil.fromArgb(138, 0, 0, 0);
	private static defaultFlatRippleColor: Brush = null;
	private static defaultFlatCornerRadius: CornerRadius = new CornerRadius(0, 4);
	private static defaultFlatBorderWidth: number = NaN;
	private static defaultFlatBackgroundColor: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultFlatTextColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private static defaultFlatHoverTextColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private static defaultFlatHoverBackgroundColor: Brush = BrushUtil.fromArgb(13, 228, 28, 119);
	private static defaultFlatFocusBackgroundColor: Brush = BrushUtil.fromArgb(30, 228, 28, 119);
	private static defaultOutlinedRestingElevation: number = 0;
	private static defaultOutlinedHoverElevation: number = 0;
	private static defaultOutlinedFocusElevation: number = 0;
	private static defaultOutlinedBorderColor: Brush = BrushUtil.fromArgb(30, 0, 0, 0);
	private static defaultOutlinedRippleColor: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultOutlinedCornerRadius: CornerRadius = new CornerRadius(0, 4);
	private static defaultOutlinedBorderWidth: number = 1;
	private static defaultOutlinedBackgroundColor: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultOutlinedTextColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private static defaultOutlinedHoverTextColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private static defaultOutlinedHoverBackgroundColor: Brush = BrushUtil.fromArgb(13, 228, 28, 119);
	private static defaultOutlinedFocusBackgroundColor: Brush = BrushUtil.fromArgb(30, 228, 28, 119);
	private static defaultIconRestingElevation: number = 0;
	private static defaultIconHoverElevation: number = 0;
	private static defaultIconFocusElevation: number = 0;
	private static defaultIconBorderColor: Brush = BrushUtil.fromArgb(138, 0, 0, 0);
	private static defaultIconRippleColor: Brush = null;
	private static defaultIconCornerRadius: CornerRadius = new CornerRadius(0, 28);
	private static defaultIconBorderWidth: number = NaN;
	private static defaultIconBackgroundColor: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultIconTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultIconHoverTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultIconHoverBackgroundColor: Brush = BrushUtil.fromArgb(30, 0, 0, 0);
	private static defaultIconFocusBackgroundColor: Brush = BrushUtil.fromArgb(66, 0, 0, 0);
	private static defaultFabRestingElevation: number = 6;
	private static defaultFabHoverElevation: number = 12;
	private static defaultFabFocusElevation: number = 12;
	private static defaultFabBorderColor: Brush = BrushUtil.fromArgb(138, 0, 0, 0);
	private static defaultFabRippleColor: Brush = BrushUtil.fromArgb(255, 255, 255, 255);
	private static defaultFabCornerRadius: CornerRadius = new CornerRadius(0, 28);
	private static defaultFabBorderWidth: number = NaN;
	private static defaultFabBackgroundColor: Brush = BrushUtil.fromArgb(255, 228, 28, 119);
	private static defaultFabTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultFabHoverTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultFabHoverBackgroundColor: Brush = BrushUtil.fromArgb(255, 220, 83, 145);
	private static defaultFabFocusBackgroundColor: Brush = BrushUtil.fromArgb(255, 220, 83, 145);
	static readonly typePropertyName: string = "Type";
	private _type: ButtonDisplayStyle = ButtonDisplayStyle.Raised;
	get type(): ButtonDisplayStyle {
		return this._type;
	}
	set type(value: ButtonDisplayStyle) {
		let oldValue = this._type;
		this._type = value;
		if (oldValue != this._type) {
			this.onPropertyChanged(Button.typePropertyName, enumGetBox<ButtonDisplayStyle>(ButtonDisplayStyle_$type, oldValue), enumGetBox<ButtonDisplayStyle>(ButtonDisplayStyle_$type, value));
		}
	}
	static readonly actualBorderColorPropertyName: string = "ActualBorderColor";
	private _actualBorderColor: Brush = Button.defaultRaisedBorderColor;
	get actualBorderColor(): Brush {
		return this._actualBorderColor;
	}
	set actualBorderColor(value: Brush) {
		let oldValue = this._actualBorderColor;
		this._actualBorderColor = value;
		if (oldValue != this._actualBorderColor) {
			this.onPropertyChanged(Button.actualBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly actualUmbraShadowColorPropertyName: string = "ActualUmbraShadowColor";
	private _actualUmbraShadowColor: Brush = Button.defaultUmbraShadowColor;
	get actualUmbraShadowColor(): Brush {
		return this._actualUmbraShadowColor;
	}
	set actualUmbraShadowColor(value: Brush) {
		let oldValue = this._actualUmbraShadowColor;
		this._actualUmbraShadowColor = value;
		if (oldValue != this._actualUmbraShadowColor) {
			this.onPropertyChanged(Button.actualUmbraShadowColorPropertyName, oldValue, value);
		}
	}
	static readonly actualPenumbraShadowColorPropertyName: string = "ActualPenumbraShadowColor";
	private _actualPenumbraShadowColor: Brush = Button.defaultPenumbraShadowColor;
	get actualPenumbraShadowColor(): Brush {
		return this._actualPenumbraShadowColor;
	}
	set actualPenumbraShadowColor(value: Brush) {
		let oldValue = this._actualPenumbraShadowColor;
		this._actualPenumbraShadowColor = value;
		if (oldValue != this._actualPenumbraShadowColor) {
			this.onPropertyChanged(Button.actualPenumbraShadowColorPropertyName, oldValue, value);
		}
	}
	static readonly actualAmbientShadowColorPropertyName: string = "ActualAmbientShadowColor";
	private _actualAmbientShadowColor: Brush = Button.defaultAmbientShadowColor;
	get actualAmbientShadowColor(): Brush {
		return this._actualAmbientShadowColor;
	}
	set actualAmbientShadowColor(value: Brush) {
		let oldValue = this._actualAmbientShadowColor;
		this._actualAmbientShadowColor = value;
		if (oldValue != this._actualAmbientShadowColor) {
			this.onPropertyChanged(Button.actualAmbientShadowColorPropertyName, oldValue, value);
		}
	}
	static readonly actualRestingElevationPropertyName: string = "ActualRestingElevation";
	private _actualRestingElevation: number = Button.defaultRaisedRestingElevation;
	get actualRestingElevation(): number {
		return this._actualRestingElevation;
	}
	set actualRestingElevation(value: number) {
		let oldValue = this._actualRestingElevation;
		this._actualRestingElevation = value;
		if (oldValue != this._actualRestingElevation) {
			this.onPropertyChanged(Button.actualRestingElevationPropertyName, oldValue, value);
		}
	}
	static readonly actualFocusElevationPropertyName: string = "ActualFocusElevation";
	private _actualFocusElevation: number = Button.defaultRaisedFocusElevation;
	get actualFocusElevation(): number {
		return this._actualFocusElevation;
	}
	set actualFocusElevation(value: number) {
		let oldValue = this._actualFocusElevation;
		this._actualFocusElevation = value;
		if (oldValue != this._actualFocusElevation) {
			this.onPropertyChanged(Button.actualFocusElevationPropertyName, oldValue, value);
		}
	}
	static readonly actualHoverElevationPropertyName: string = "ActualHoverElevation";
	private _actualHoverElevation: number = Button.defaultRaisedHoverElevation;
	get actualHoverElevation(): number {
		return this._actualHoverElevation;
	}
	set actualHoverElevation(value: number) {
		let oldValue = this._actualHoverElevation;
		this._actualHoverElevation = value;
		if (oldValue != this._actualHoverElevation) {
			this.onPropertyChanged(Button.actualHoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly actualRippleColorPropertyName: string = "ActualRippleColor";
	private _actualRippleColor: Brush = Button.defaultRaisedRippleColor;
	get actualRippleColor(): Brush {
		return this._actualRippleColor;
	}
	set actualRippleColor(value: Brush) {
		let oldValue = this._actualRippleColor;
		this._actualRippleColor = value;
		if (oldValue != this._actualRippleColor) {
			this.onPropertyChanged(Button.actualRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly actualCornerRadiusPropertyName: string = "ActualCornerRadius";
	private _actualCornerRadius: CornerRadius = Button.defaultRaisedCornerRadius;
	get actualCornerRadius(): CornerRadius {
		return this._actualCornerRadius;
	}
	set actualCornerRadius(value: CornerRadius) {
		let oldValue = this._actualCornerRadius;
		this._actualCornerRadius = value;
		if (oldValue != this._actualCornerRadius) {
			this.onPropertyChanged(Button.actualCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly actualBackgroundColorPropertyName: string = "ActualBackgroundColor";
	private _actualBackgroundColor: Brush = Button.defaultRaisedBackgroundColor;
	get actualBackgroundColor(): Brush {
		return this._actualBackgroundColor;
	}
	set actualBackgroundColor(value: Brush) {
		let oldValue = this._actualBackgroundColor;
		this._actualBackgroundColor = value;
		if (oldValue != this._actualBackgroundColor) {
			this.onPropertyChanged(Button.actualBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly actualTextColorPropertyName: string = "ActualTextColor";
	private _actualTextColor: Brush = Button.defaultRaisedTextColor;
	get actualTextColor(): Brush {
		return this._actualTextColor;
	}
	set actualTextColor(value: Brush) {
		let oldValue = this._actualTextColor;
		this._actualTextColor = value;
		if (oldValue != this._actualTextColor) {
			this.onPropertyChanged(Button.actualTextColorPropertyName, oldValue, value);
		}
	}
	static readonly actualHoverTextColorPropertyName: string = "ActualHoverTextColor";
	private _actualHoverTextColor: Brush = Button.defaultRaisedHoverTextColor;
	get actualHoverTextColor(): Brush {
		return this._actualHoverTextColor;
	}
	set actualHoverTextColor(value: Brush) {
		let oldValue = this._actualHoverTextColor;
		this._actualHoverTextColor = value;
		if (oldValue != this._actualHoverTextColor) {
			this.onPropertyChanged(Button.actualHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly actualFocusBackgroundColorPropertyName: string = "ActualFocusBackgroundColor";
	private _actualFocusBackgroundColor: Brush = Button.defaultRaisedFocusBackgroundColor;
	get actualFocusBackgroundColor(): Brush {
		return this._actualFocusBackgroundColor;
	}
	set actualFocusBackgroundColor(value: Brush) {
		let oldValue = this._actualFocusBackgroundColor;
		this._actualFocusBackgroundColor = value;
		if (oldValue != this._actualFocusBackgroundColor) {
			this.onPropertyChanged(Button.actualFocusBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly actualHoverBackgroundColorPropertyName: string = "ActualHoverBackgroundColor";
	private _actualHoverBackgroundColor: Brush = Button.defaultRaisedHoverBackgroundColor;
	get actualHoverBackgroundColor(): Brush {
		return this._actualHoverBackgroundColor;
	}
	set actualHoverBackgroundColor(value: Brush) {
		let oldValue = this._actualHoverBackgroundColor;
		this._actualHoverBackgroundColor = value;
		if (oldValue != this._actualHoverBackgroundColor) {
			this.onPropertyChanged(Button.actualHoverBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly actualBorderWidthPropertyName: string = "ActualBorderWidth";
	private _actualBorderWidth: number = Button.defaultRaisedBorderWidth;
	get actualBorderWidth(): number {
		return this._actualBorderWidth;
	}
	set actualBorderWidth(value: number) {
		let oldValue = this._actualBorderWidth;
		this._actualBorderWidth = value;
		if (oldValue != this._actualBorderWidth) {
			this.onPropertyChanged(Button.actualBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly raisedBackgroundColorPropertyName: string = "RaisedBackgroundColor";
	private _raisedBackgroundColor: Brush = null;
	get raisedBackgroundColor(): Brush {
		return this._raisedBackgroundColor;
	}
	set raisedBackgroundColor(value: Brush) {
		let oldValue = this._raisedBackgroundColor;
		this._raisedBackgroundColor = value;
		if (oldValue != this._raisedBackgroundColor) {
			this.onPropertyChanged(Button.raisedBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly raisedHoverBackgroundColorPropertyName: string = "RaisedHoverBackgroundColor";
	private _raisedHoverBackgroundColor: Brush = null;
	get raisedHoverBackgroundColor(): Brush {
		return this._raisedHoverBackgroundColor;
	}
	set raisedHoverBackgroundColor(value: Brush) {
		let oldValue = this._raisedHoverBackgroundColor;
		this._raisedHoverBackgroundColor = value;
		if (oldValue != this._raisedHoverBackgroundColor) {
			this.onPropertyChanged(Button.raisedHoverBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly raisedBorderColorPropertyName: string = "RaisedBorderColor";
	private _raisedBorderColor: Brush = null;
	get raisedBorderColor(): Brush {
		return this._raisedBorderColor;
	}
	set raisedBorderColor(value: Brush) {
		let oldValue = this._raisedBorderColor;
		this._raisedBorderColor = value;
		if (oldValue != this._raisedBorderColor) {
			this.onPropertyChanged(Button.raisedBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly raisedRestingElevationPropertyName: string = "RaisedRestingElevation";
	private _raisedRestingElevation: number = -1;
	get raisedRestingElevation(): number {
		return this._raisedRestingElevation;
	}
	set raisedRestingElevation(value: number) {
		let oldValue = this._raisedRestingElevation;
		this._raisedRestingElevation = value;
		if (oldValue != this._raisedRestingElevation) {
			this.onPropertyChanged(Button.raisedRestingElevationPropertyName, oldValue, value);
		}
	}
	static readonly raisedHoverElevationPropertyName: string = "RaisedHoverElevation";
	private _raisedHoverElevation: number = -1;
	get raisedHoverElevation(): number {
		return this._raisedHoverElevation;
	}
	set raisedHoverElevation(value: number) {
		let oldValue = this._raisedHoverElevation;
		this._raisedHoverElevation = value;
		if (oldValue != this._raisedHoverElevation) {
			this.onPropertyChanged(Button.raisedHoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly raisedFocusElevationPropertyName: string = "RaisedFocusElevation";
	private _raisedFocusElevation: number = -1;
	get raisedFocusElevation(): number {
		return this._raisedFocusElevation;
	}
	set raisedFocusElevation(value: number) {
		let oldValue = this._raisedFocusElevation;
		this._raisedFocusElevation = value;
		if (oldValue != this._raisedFocusElevation) {
			this.onPropertyChanged(Button.raisedFocusElevationPropertyName, oldValue, value);
		}
	}
	static readonly raisedBorderWidthPropertyName: string = "RaisedBorderWidth";
	private _raisedBorderWidth: number = NaN;
	get raisedBorderWidth(): number {
		return this._raisedBorderWidth;
	}
	set raisedBorderWidth(value: number) {
		let oldValue = this._raisedBorderWidth;
		this._raisedBorderWidth = value;
		if (oldValue != this._raisedBorderWidth) {
			this.onPropertyChanged(Button.raisedBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly raisedCornerRadiusPropertyName: string = "RaisedCornerRadius";
	private _raisedCornerRadius: CornerRadius = new CornerRadius(1, NaN, NaN, NaN, NaN);
	get raisedCornerRadius(): CornerRadius {
		return this._raisedCornerRadius;
	}
	set raisedCornerRadius(value: CornerRadius) {
		let oldValue = this._raisedCornerRadius;
		this._raisedCornerRadius = value;
		{
			this.onPropertyChanged(Button.raisedCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly raisedRippleColorPropertyName: string = "RaisedRippleColor";
	private _raisedRippleColor: Brush = null;
	get raisedRippleColor(): Brush {
		return this._raisedRippleColor;
	}
	set raisedRippleColor(value: Brush) {
		let oldValue = this._raisedRippleColor;
		this._raisedRippleColor = value;
		if (oldValue != this._raisedRippleColor) {
			this.onPropertyChanged(Button.raisedRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly flatBackgroundColorPropertyName: string = "FlatBackgroundColor";
	private _flatBackgroundColor: Brush = null;
	get flatBackgroundColor(): Brush {
		return this._flatBackgroundColor;
	}
	set flatBackgroundColor(value: Brush) {
		let oldValue = this._flatBackgroundColor;
		this._flatBackgroundColor = value;
		if (oldValue != this._flatBackgroundColor) {
			this.onPropertyChanged(Button.flatBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly flatHoverBackgroundColorPropertyName: string = "FlatHoverBackgroundColor";
	private _flatHoverBackgroundColor: Brush = null;
	get flatHoverBackgroundColor(): Brush {
		return this._flatHoverBackgroundColor;
	}
	set flatHoverBackgroundColor(value: Brush) {
		let oldValue = this._flatHoverBackgroundColor;
		this._flatHoverBackgroundColor = value;
		if (oldValue != this._flatHoverBackgroundColor) {
			this.onPropertyChanged(Button.flatHoverBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly flatBorderColorPropertyName: string = "FlatBorderColor";
	private _flatBorderColor: Brush = null;
	get flatBorderColor(): Brush {
		return this._flatBorderColor;
	}
	set flatBorderColor(value: Brush) {
		let oldValue = this._flatBorderColor;
		this._flatBorderColor = value;
		if (oldValue != this._flatBorderColor) {
			this.onPropertyChanged(Button.flatBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly flatRestingElevationPropertyName: string = "FlatRestingElevation";
	private _flatRestingElevation: number = -1;
	get flatRestingElevation(): number {
		return this._flatRestingElevation;
	}
	set flatRestingElevation(value: number) {
		let oldValue = this._flatRestingElevation;
		this._flatRestingElevation = value;
		if (oldValue != this._flatRestingElevation) {
			this.onPropertyChanged(Button.flatRestingElevationPropertyName, oldValue, value);
		}
	}
	static readonly flatHoverElevationPropertyName: string = "FlatHoverElevation";
	private _flatHoverElevation: number = -1;
	get flatHoverElevation(): number {
		return this._flatHoverElevation;
	}
	set flatHoverElevation(value: number) {
		let oldValue = this._flatHoverElevation;
		this._flatHoverElevation = value;
		if (oldValue != this._flatHoverElevation) {
			this.onPropertyChanged(Button.flatHoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly flatFocusElevationPropertyName: string = "FlatFocusElevation";
	private _flatFocusElevation: number = -1;
	get flatFocusElevation(): number {
		return this._flatFocusElevation;
	}
	set flatFocusElevation(value: number) {
		let oldValue = this._flatFocusElevation;
		this._flatFocusElevation = value;
		if (oldValue != this._flatFocusElevation) {
			this.onPropertyChanged(Button.flatFocusElevationPropertyName, oldValue, value);
		}
	}
	static readonly flatRippleColorPropertyName: string = "FlatRippleColor";
	private _flatRippleColor: Brush = null;
	get flatRippleColor(): Brush {
		return this._flatRippleColor;
	}
	set flatRippleColor(value: Brush) {
		let oldValue = this._flatRippleColor;
		this._flatRippleColor = value;
		if (oldValue != this._flatRippleColor) {
			this.onPropertyChanged(Button.flatRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly flatTextColorPropertyName: string = "FlatTextColor";
	private _flatTextColor: Brush = null;
	get flatTextColor(): Brush {
		return this._flatTextColor;
	}
	set flatTextColor(value: Brush) {
		let oldValue = this._flatTextColor;
		this._flatTextColor = value;
		if (oldValue != this._flatTextColor) {
			this.onPropertyChanged(Button.flatTextColorPropertyName, oldValue, value);
		}
	}
	static readonly flatHoverTextColorPropertyName: string = "FlatHoverTextColor";
	private _flatHoverTextColor: Brush = null;
	get flatHoverTextColor(): Brush {
		return this._flatHoverTextColor;
	}
	set flatHoverTextColor(value: Brush) {
		let oldValue = this._flatHoverTextColor;
		this._flatHoverTextColor = value;
		if (oldValue != this._flatHoverTextColor) {
			this.onPropertyChanged(Button.flatHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly flatFocusBackgroundColorPropertyName: string = "FlatFocusBackgroundColor";
	private _flatFocusBackgroundColor: Brush = null;
	get flatFocusBackgroundColor(): Brush {
		return this._flatFocusBackgroundColor;
	}
	set flatFocusBackgroundColor(value: Brush) {
		let oldValue = this._flatFocusBackgroundColor;
		this._flatFocusBackgroundColor = value;
		if (oldValue != this._flatFocusBackgroundColor) {
			this.onPropertyChanged(Button.flatFocusBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly flatBorderWidthPropertyName: string = "FlatBorderWidth";
	private _flatBorderWidth: number = NaN;
	get flatBorderWidth(): number {
		return this._flatBorderWidth;
	}
	set flatBorderWidth(value: number) {
		let oldValue = this._flatBorderWidth;
		this._flatBorderWidth = value;
		if (oldValue != this._flatBorderWidth) {
			this.onPropertyChanged(Button.flatBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly flatCornerRadiusPropertyName: string = "FlatCornerRadius";
	private _flatCornerRadius: CornerRadius = new CornerRadius(1, NaN, NaN, NaN, NaN);
	get flatCornerRadius(): CornerRadius {
		return this._flatCornerRadius;
	}
	set flatCornerRadius(value: CornerRadius) {
		let oldValue = this._flatCornerRadius;
		this._flatCornerRadius = value;
		{
			this.onPropertyChanged(Button.flatCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly backgroundColorPropertyName: string = "BackgroundColor";
	private _backgroundColor: Brush = null;
	get backgroundColor(): Brush {
		return this._backgroundColor;
	}
	set backgroundColor(value: Brush) {
		let oldValue = this._backgroundColor;
		this._backgroundColor = value;
		if (oldValue != this._backgroundColor) {
			this.onPropertyChanged(Button.backgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly hoverBackgroundColorPropertyName: string = "HoverBackgroundColor";
	private _hoverBackgroundColor: Brush = null;
	get hoverBackgroundColor(): Brush {
		return this._hoverBackgroundColor;
	}
	set hoverBackgroundColor(value: Brush) {
		let oldValue = this._hoverBackgroundColor;
		this._hoverBackgroundColor = value;
		if (oldValue != this._hoverBackgroundColor) {
			this.onPropertyChanged(Button.hoverBackgroundColorPropertyName, oldValue, value);
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
			this.onPropertyChanged(Button.borderColorPropertyName, oldValue, value);
		}
	}
	static readonly restingElevationPropertyName: string = "RestingElevation";
	private _restingElevation: number = -1;
	get restingElevation(): number {
		return this._restingElevation;
	}
	set restingElevation(value: number) {
		let oldValue = this._restingElevation;
		this._restingElevation = value;
		if (oldValue != this._restingElevation) {
			this.onPropertyChanged(Button.restingElevationPropertyName, oldValue, value);
		}
	}
	static readonly hoverElevationPropertyName: string = "HoverElevation";
	private _hoverElevation: number = -1;
	get hoverElevation(): number {
		return this._hoverElevation;
	}
	set hoverElevation(value: number) {
		let oldValue = this._hoverElevation;
		this._hoverElevation = value;
		if (oldValue != this._hoverElevation) {
			this.onPropertyChanged(Button.hoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly focusElevationPropertyName: string = "FocusElevation";
	private _focusElevation: number = -1;
	get focusElevation(): number {
		return this._focusElevation;
	}
	set focusElevation(value: number) {
		let oldValue = this._focusElevation;
		this._focusElevation = value;
		if (oldValue != this._focusElevation) {
			this.onPropertyChanged(Button.focusElevationPropertyName, oldValue, value);
		}
	}
	static readonly textStylePropertyName: string = "TextStyle";
	private _textStyle: FontInfo = null;
	get textStyle(): FontInfo {
		return this._textStyle;
	}
	set textStyle(value: FontInfo) {
		let oldValue = this._textStyle;
		this._textStyle = value;
		if (oldValue != this._textStyle) {
			this.onPropertyChanged(Button.textStylePropertyName, oldValue, value);
		}
	}
	static readonly textColorPropertyName: string = "TextColor";
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue = this._textColor;
		this._textColor = value;
		if (oldValue != this._textColor) {
			this.onPropertyChanged(Button.textColorPropertyName, oldValue, value);
		}
	}
	static readonly hoverTextColorPropertyName: string = "HoverTextColor";
	private _hoverTextColor: Brush = null;
	get hoverTextColor(): Brush {
		return this._hoverTextColor;
	}
	set hoverTextColor(value: Brush) {
		let oldValue = this._hoverTextColor;
		this._hoverTextColor = value;
		if (oldValue != this._hoverTextColor) {
			this.onPropertyChanged(Button.hoverTextColorPropertyName, oldValue, value);
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
			this.onPropertyChanged(Button.rippleColorPropertyName, oldValue, value);
		}
	}
	static readonly raisedTextColorPropertyName: string = "RaisedTextColor";
	private _raisedTextColor: Brush = null;
	get raisedTextColor(): Brush {
		return this._raisedTextColor;
	}
	set raisedTextColor(value: Brush) {
		let oldValue = this._raisedTextColor;
		this._raisedTextColor = value;
		if (oldValue != this._raisedTextColor) {
			this.onPropertyChanged(Button.raisedTextColorPropertyName, oldValue, value);
		}
	}
	static readonly raisedHoverTextColorPropertyName: string = "RaisedHoverTextColor";
	private _raisedHoverTextColor: Brush = null;
	get raisedHoverTextColor(): Brush {
		return this._raisedHoverTextColor;
	}
	set raisedHoverTextColor(value: Brush) {
		let oldValue = this._raisedHoverTextColor;
		this._raisedHoverTextColor = value;
		if (oldValue != this._raisedHoverTextColor) {
			this.onPropertyChanged(Button.raisedHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly raisedFocusBackgroundColorPropertyName: string = "RaisedFocusBackgroundColor";
	private _raisedFocusBackgroundColor: Brush = null;
	get raisedFocusBackgroundColor(): Brush {
		return this._raisedFocusBackgroundColor;
	}
	set raisedFocusBackgroundColor(value: Brush) {
		let oldValue = this._raisedFocusBackgroundColor;
		this._raisedFocusBackgroundColor = value;
		if (oldValue != this._raisedFocusBackgroundColor) {
			this.onPropertyChanged(Button.raisedFocusBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly focusBackgroundColorPropertyName: string = "FocusBackgroundColor";
	private _focusBackgroundColor: Brush = null;
	get focusBackgroundColor(): Brush {
		return this._focusBackgroundColor;
	}
	set focusBackgroundColor(value: Brush) {
		let oldValue = this._focusBackgroundColor;
		this._focusBackgroundColor = value;
		if (oldValue != this._focusBackgroundColor) {
			this.onPropertyChanged(Button.focusBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly borderWidthPropertyName: string = "BorderWidth";
	private _borderWidth: number = NaN;
	get borderWidth(): number {
		return this._borderWidth;
	}
	set borderWidth(value: number) {
		let oldValue = this._borderWidth;
		this._borderWidth = value;
		if (oldValue != this._borderWidth) {
			this.onPropertyChanged(Button.borderWidthPropertyName, oldValue, value);
		}
	}
	static readonly cornerRadiusPropertyName: string = "CornerRadius";
	private _cornerRadius: CornerRadius = new CornerRadius(1, NaN, NaN, NaN, NaN);
	get cornerRadius(): CornerRadius {
		return this._cornerRadius;
	}
	set cornerRadius(value: CornerRadius) {
		let oldValue = this._cornerRadius;
		this._cornerRadius = value;
		{
			this.onPropertyChanged(Button.cornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly outlinedBackgroundColorPropertyName: string = "OutlinedBackgroundColor";
	private _outlinedBackgroundColor: Brush = null;
	get outlinedBackgroundColor(): Brush {
		return this._outlinedBackgroundColor;
	}
	set outlinedBackgroundColor(value: Brush) {
		let oldValue = this._outlinedBackgroundColor;
		this._outlinedBackgroundColor = value;
		if (oldValue != this._outlinedBackgroundColor) {
			this.onPropertyChanged(Button.outlinedBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly outlinedHoverBackgroundColorPropertyName: string = "OutlinedHoverBackgroundColor";
	private _outlinedHoverBackgroundColor: Brush = null;
	get outlinedHoverBackgroundColor(): Brush {
		return this._outlinedHoverBackgroundColor;
	}
	set outlinedHoverBackgroundColor(value: Brush) {
		let oldValue = this._outlinedHoverBackgroundColor;
		this._outlinedHoverBackgroundColor = value;
		if (oldValue != this._outlinedHoverBackgroundColor) {
			this.onPropertyChanged(Button.outlinedHoverBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly outlinedBorderColorPropertyName: string = "OutlinedBorderColor";
	private _outlinedBorderColor: Brush = null;
	get outlinedBorderColor(): Brush {
		return this._outlinedBorderColor;
	}
	set outlinedBorderColor(value: Brush) {
		let oldValue = this._outlinedBorderColor;
		this._outlinedBorderColor = value;
		if (oldValue != this._outlinedBorderColor) {
			this.onPropertyChanged(Button.outlinedBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly outlinedRestingElevationPropertyName: string = "OutlinedRestingElevation";
	private _outlinedRestingElevation: number = -1;
	get outlinedRestingElevation(): number {
		return this._outlinedRestingElevation;
	}
	set outlinedRestingElevation(value: number) {
		let oldValue = this._outlinedRestingElevation;
		this._outlinedRestingElevation = value;
		if (oldValue != this._outlinedRestingElevation) {
			this.onPropertyChanged(Button.outlinedRestingElevationPropertyName, oldValue, value);
		}
	}
	static readonly outlinedHoverElevationPropertyName: string = "OutlinedHoverElevation";
	private _outlinedHoverElevation: number = -1;
	get outlinedHoverElevation(): number {
		return this._outlinedHoverElevation;
	}
	set outlinedHoverElevation(value: number) {
		let oldValue = this._outlinedHoverElevation;
		this._outlinedHoverElevation = value;
		if (oldValue != this._outlinedHoverElevation) {
			this.onPropertyChanged(Button.outlinedHoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly outlinedFocusElevationPropertyName: string = "OutlinedFocusElevation";
	private _outlinedFocusElevation: number = -1;
	get outlinedFocusElevation(): number {
		return this._outlinedFocusElevation;
	}
	set outlinedFocusElevation(value: number) {
		let oldValue = this._outlinedFocusElevation;
		this._outlinedFocusElevation = value;
		if (oldValue != this._outlinedFocusElevation) {
			this.onPropertyChanged(Button.outlinedFocusElevationPropertyName, oldValue, value);
		}
	}
	static readonly outlinedBorderWidthPropertyName: string = "OutlinedBorderWidth";
	private _outlinedBorderWidth: number = NaN;
	get outlinedBorderWidth(): number {
		return this._outlinedBorderWidth;
	}
	set outlinedBorderWidth(value: number) {
		let oldValue = this._outlinedBorderWidth;
		this._outlinedBorderWidth = value;
		if (oldValue != this._outlinedBorderWidth) {
			this.onPropertyChanged(Button.outlinedBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly outlinedCornerRadiusPropertyName: string = "OutlinedCornerRadius";
	private _outlinedCornerRadius: CornerRadius = new CornerRadius(1, NaN, NaN, NaN, NaN);
	get outlinedCornerRadius(): CornerRadius {
		return this._outlinedCornerRadius;
	}
	set outlinedCornerRadius(value: CornerRadius) {
		let oldValue = this._outlinedCornerRadius;
		this._outlinedCornerRadius = value;
		{
			this.onPropertyChanged(Button.outlinedCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly outlinedRippleColorPropertyName: string = "OutlinedRippleColor";
	private _outlinedRippleColor: Brush = null;
	get outlinedRippleColor(): Brush {
		return this._outlinedRippleColor;
	}
	set outlinedRippleColor(value: Brush) {
		let oldValue = this._outlinedRippleColor;
		this._outlinedRippleColor = value;
		if (oldValue != this._outlinedRippleColor) {
			this.onPropertyChanged(Button.outlinedRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly outlinedTextColorPropertyName: string = "OutlinedTextColor";
	private _outlinedTextColor: Brush = null;
	get outlinedTextColor(): Brush {
		return this._outlinedTextColor;
	}
	set outlinedTextColor(value: Brush) {
		let oldValue = this._outlinedTextColor;
		this._outlinedTextColor = value;
		if (oldValue != this._outlinedTextColor) {
			this.onPropertyChanged(Button.outlinedTextColorPropertyName, oldValue, value);
		}
	}
	static readonly outlinedHoverTextColorPropertyName: string = "OutlinedHoverTextColor";
	private _outlinedHoverTextColor: Brush = null;
	get outlinedHoverTextColor(): Brush {
		return this._outlinedHoverTextColor;
	}
	set outlinedHoverTextColor(value: Brush) {
		let oldValue = this._outlinedHoverTextColor;
		this._outlinedHoverTextColor = value;
		if (oldValue != this._outlinedHoverTextColor) {
			this.onPropertyChanged(Button.outlinedHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly outlinedFocusBackgroundColorPropertyName: string = "OutlinedFocusBackgroundColor";
	private _outlinedFocusBackgroundColor: Brush = null;
	get outlinedFocusBackgroundColor(): Brush {
		return this._outlinedFocusBackgroundColor;
	}
	set outlinedFocusBackgroundColor(value: Brush) {
		let oldValue = this._outlinedFocusBackgroundColor;
		this._outlinedFocusBackgroundColor = value;
		if (oldValue != this._outlinedFocusBackgroundColor) {
			this.onPropertyChanged(Button.outlinedFocusBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly fabBackgroundColorPropertyName: string = "FabBackgroundColor";
	private _fabBackgroundColor: Brush = null;
	get fabBackgroundColor(): Brush {
		return this._fabBackgroundColor;
	}
	set fabBackgroundColor(value: Brush) {
		let oldValue = this._fabBackgroundColor;
		this._fabBackgroundColor = value;
		if (oldValue != this._fabBackgroundColor) {
			this.onPropertyChanged(Button.fabBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly fabHoverBackgroundColorPropertyName: string = "FabHoverBackgroundColor";
	private _hoverFabBackgroundColor: Brush = null;
	get fabHoverBackgroundColor(): Brush {
		return this._hoverFabBackgroundColor;
	}
	set fabHoverBackgroundColor(value: Brush) {
		let oldValue = this._hoverFabBackgroundColor;
		this._hoverFabBackgroundColor = value;
		if (oldValue != this._hoverFabBackgroundColor) {
			this.onPropertyChanged(Button.fabHoverBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly fabBorderColorPropertyName: string = "FabBorderColor";
	private _fabBorderColor: Brush = null;
	get fabBorderColor(): Brush {
		return this._fabBorderColor;
	}
	set fabBorderColor(value: Brush) {
		let oldValue = this._fabBorderColor;
		this._fabBorderColor = value;
		if (oldValue != this._fabBorderColor) {
			this.onPropertyChanged(Button.fabBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly fabRestingElevationPropertyName: string = "FabRestingElevation";
	private _fabRestingElevation: number = -1;
	get fabRestingElevation(): number {
		return this._fabRestingElevation;
	}
	set fabRestingElevation(value: number) {
		let oldValue = this._fabRestingElevation;
		this._fabRestingElevation = value;
		if (oldValue != this._fabRestingElevation) {
			this.onPropertyChanged(Button.fabRestingElevationPropertyName, oldValue, value);
		}
	}
	static readonly fabHoverElevationPropertyName: string = "FabHoverElevation";
	private _fabHoverElevation: number = -1;
	get fabHoverElevation(): number {
		return this._fabHoverElevation;
	}
	set fabHoverElevation(value: number) {
		let oldValue = this._fabHoverElevation;
		this._fabHoverElevation = value;
		if (oldValue != this._fabHoverElevation) {
			this.onPropertyChanged(Button.fabHoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly fabFocusElevationPropertyName: string = "FabFocusElevation";
	private _fabFocusElevation: number = -1;
	get fabFocusElevation(): number {
		return this._fabFocusElevation;
	}
	set fabFocusElevation(value: number) {
		let oldValue = this._fabFocusElevation;
		this._fabFocusElevation = value;
		if (oldValue != this._fabFocusElevation) {
			this.onPropertyChanged(Button.fabFocusElevationPropertyName, oldValue, value);
		}
	}
	static readonly fabBorderWidthPropertyName: string = "FabBorderWidth";
	private _fabBorderWidth: number = NaN;
	get fabBorderWidth(): number {
		return this._fabBorderWidth;
	}
	set fabBorderWidth(value: number) {
		let oldValue = this._fabBorderWidth;
		this._fabBorderWidth = value;
		if (oldValue != this._fabBorderWidth) {
			this.onPropertyChanged(Button.fabBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly fabCornerRadiusPropertyName: string = "FabCornerRadius";
	private _fabCornerRadius: CornerRadius = new CornerRadius(1, NaN, NaN, NaN, NaN);
	get fabCornerRadius(): CornerRadius {
		return this._fabCornerRadius;
	}
	set fabCornerRadius(value: CornerRadius) {
		let oldValue = this._fabCornerRadius;
		this._fabCornerRadius = value;
		{
			this.onPropertyChanged(Button.fabCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly fabRippleColorPropertyName: string = "FabRippleColor";
	private _fabRippleColor: Brush = null;
	get fabRippleColor(): Brush {
		return this._fabRippleColor;
	}
	set fabRippleColor(value: Brush) {
		let oldValue = this._fabRippleColor;
		this._fabRippleColor = value;
		if (oldValue != this._fabRippleColor) {
			this.onPropertyChanged(Button.fabRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly fabTextColorPropertyName: string = "FabTextColor";
	private _fabTextColor: Brush = null;
	get fabTextColor(): Brush {
		return this._fabTextColor;
	}
	set fabTextColor(value: Brush) {
		let oldValue = this._fabTextColor;
		this._fabTextColor = value;
		if (oldValue != this._fabTextColor) {
			this.onPropertyChanged(Button.fabTextColorPropertyName, oldValue, value);
		}
	}
	static readonly fabHoverTextColorPropertyName: string = "FabHoverTextColor";
	private _fabHoverTextColor: Brush = null;
	get fabHoverTextColor(): Brush {
		return this._fabHoverTextColor;
	}
	set fabHoverTextColor(value: Brush) {
		let oldValue = this._fabHoverTextColor;
		this._fabHoverTextColor = value;
		if (oldValue != this._fabHoverTextColor) {
			this.onPropertyChanged(Button.fabHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly fabFocusBackgroundColorPropertyName: string = "FabFocusBackgroundColor";
	private _fabFocusBackgroundColor: Brush = null;
	get fabFocusBackgroundColor(): Brush {
		return this._fabFocusBackgroundColor;
	}
	set fabFocusBackgroundColor(value: Brush) {
		let oldValue = this._fabFocusBackgroundColor;
		this._fabFocusBackgroundColor = value;
		if (oldValue != this._fabFocusBackgroundColor) {
			this.onPropertyChanged(Button.fabFocusBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly iconBackgroundColorPropertyName: string = "IconBackgroundColor";
	private _iconBackgroundColor: Brush = null;
	get iconBackgroundColor(): Brush {
		return this._iconBackgroundColor;
	}
	set iconBackgroundColor(value: Brush) {
		let oldValue = this._iconBackgroundColor;
		this._iconBackgroundColor = value;
		if (oldValue != this._iconBackgroundColor) {
			this.onPropertyChanged(Button.iconBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly iconHoverBackgroundColorPropertyName: string = "IconHoverBackgroundColor";
	private _iconHoverBackgroundColor: Brush = null;
	get iconHoverBackgroundColor(): Brush {
		return this._iconHoverBackgroundColor;
	}
	set iconHoverBackgroundColor(value: Brush) {
		let oldValue = this._iconHoverBackgroundColor;
		this._iconHoverBackgroundColor = value;
		if (oldValue != this._iconHoverBackgroundColor) {
			this.onPropertyChanged(Button.iconHoverBackgroundColorPropertyName, oldValue, value);
		}
	}
	static readonly iconBorderColorPropertyName: string = "IconBorderColor";
	private _iconBorderColor: Brush = null;
	get iconBorderColor(): Brush {
		return this._iconBorderColor;
	}
	set iconBorderColor(value: Brush) {
		let oldValue = this._iconBorderColor;
		this._iconBorderColor = value;
		if (oldValue != this._iconBorderColor) {
			this.onPropertyChanged(Button.iconBorderColorPropertyName, oldValue, value);
		}
	}
	static readonly iconRestingElevationPropertyName: string = "IconRestingElevation";
	private _iconRestingElevation: number = -1;
	get iconRestingElevation(): number {
		return this._iconRestingElevation;
	}
	set iconRestingElevation(value: number) {
		let oldValue = this._iconRestingElevation;
		this._iconRestingElevation = value;
		if (oldValue != this._iconRestingElevation) {
			this.onPropertyChanged(Button.iconRestingElevationPropertyName, oldValue, value);
		}
	}
	static readonly iconHoverElevationPropertyName: string = "IconHoverElevation";
	private _iconHoverElevation: number = -1;
	get iconHoverElevation(): number {
		return this._iconHoverElevation;
	}
	set iconHoverElevation(value: number) {
		let oldValue = this._iconHoverElevation;
		this._iconHoverElevation = value;
		if (oldValue != this._iconHoverElevation) {
			this.onPropertyChanged(Button.iconHoverElevationPropertyName, oldValue, value);
		}
	}
	static readonly iconFocusElevationPropertyName: string = "IconFocusElevation";
	private _iconFocusElevation: number = -1;
	get iconFocusElevation(): number {
		return this._iconFocusElevation;
	}
	set iconFocusElevation(value: number) {
		let oldValue = this._iconFocusElevation;
		this._iconFocusElevation = value;
		if (oldValue != this._iconFocusElevation) {
			this.onPropertyChanged(Button.iconFocusElevationPropertyName, oldValue, value);
		}
	}
	static readonly iconBorderWidthPropertyName: string = "IconBorderWidth";
	private _iconBorderWidth: number = NaN;
	get iconBorderWidth(): number {
		return this._iconBorderWidth;
	}
	set iconBorderWidth(value: number) {
		let oldValue = this._iconBorderWidth;
		this._iconBorderWidth = value;
		if (oldValue != this._iconBorderWidth) {
			this.onPropertyChanged(Button.iconBorderWidthPropertyName, oldValue, value);
		}
	}
	static readonly iconCornerRadiusPropertyName: string = "IconCornerRadius";
	private _iconCornerRadius: CornerRadius = new CornerRadius(1, NaN, NaN, NaN, NaN);
	get iconCornerRadius(): CornerRadius {
		return this._iconCornerRadius;
	}
	set iconCornerRadius(value: CornerRadius) {
		let oldValue = this._iconCornerRadius;
		this._iconCornerRadius = value;
		{
			this.onPropertyChanged(Button.iconCornerRadiusPropertyName, oldValue, value);
		}
	}
	static readonly iconRippleColorPropertyName: string = "IconRippleColor";
	private _iconRippleColor: Brush = null;
	get iconRippleColor(): Brush {
		return this._iconRippleColor;
	}
	set iconRippleColor(value: Brush) {
		let oldValue = this._iconRippleColor;
		this._iconRippleColor = value;
		if (oldValue != this._iconRippleColor) {
			this.onPropertyChanged(Button.iconRippleColorPropertyName, oldValue, value);
		}
	}
	static readonly iconTextColorPropertyName: string = "IconTextColor";
	private _iconTextColor: Brush = null;
	get iconTextColor(): Brush {
		return this._iconTextColor;
	}
	set iconTextColor(value: Brush) {
		let oldValue = this._iconTextColor;
		this._iconTextColor = value;
		if (oldValue != this._iconTextColor) {
			this.onPropertyChanged(Button.iconTextColorPropertyName, oldValue, value);
		}
	}
	static readonly iconHoverTextColorPropertyName: string = "IconHoverTextColor";
	private _iconHoverTextColor: Brush = null;
	get iconHoverTextColor(): Brush {
		return this._iconHoverTextColor;
	}
	set iconHoverTextColor(value: Brush) {
		let oldValue = this._iconHoverTextColor;
		this._iconHoverTextColor = value;
		if (oldValue != this._iconHoverTextColor) {
			this.onPropertyChanged(Button.iconHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly iconFocusBackgroundColorPropertyName: string = "IconFocusBackgroundColor";
	private _iconFocusBackgroundColor: Brush = null;
	get iconFocusBackgroundColor(): Brush {
		return this._iconFocusBackgroundColor;
	}
	set iconFocusBackgroundColor(value: Brush) {
		let oldValue = this._iconFocusBackgroundColor;
		this._iconFocusBackgroundColor = value;
		if (oldValue != this._iconFocusBackgroundColor) {
			this.onPropertyChanged(Button.iconFocusBackgroundColorPropertyName, oldValue, value);
		}
	}
	private static _nextInputId: number = 0;
	static readonly inputIdPropertyName: string = "InputId";
	private _inputId: string = "ig-native-button-" + Button._nextInputId++;
	get inputId(): string {
		return this._inputId;
	}
	set inputId(value: string) {
		let oldValue = this._inputId;
		this._inputId = value;
		if (oldValue != this._inputId) {
			this.onPropertyChanged(Button.inputIdPropertyName, oldValue, value);
		}
	}
	private static _nextId: number = 0;
	static readonly idPropertyName: string = "Id";
	private _id: string = "ig-button-" + Button._nextId++;
	get id(): string {
		return this._id;
	}
	set id(value: string) {
		let oldValue = this._id;
		this._id = value;
		if (oldValue != this._id) {
			this.onPropertyChanged(Button.idPropertyName, oldValue, value);
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
			this.onPropertyChanged(Button.valuePropertyName, oldValue, value);
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
			this.onPropertyChanged(Button.namePropertyName, oldName, value);
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
			this.onPropertyChanged(Button.tabIndexPropertyName, oldTabIndex, value);
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
			this.onPropertyChanged(Button.isFocusedPropertyName, oldFocused, value);
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
			this.onPropertyChanged(Button.ariaLabelPropertyName, oldAriaLabel, value);
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
			this.onPropertyChanged(Button.disableRipplePropertyName, oldDisableRipple, value);
		}
	}
	static readonly isHoverPropertyName: string = "IsHover";
	private _isHover: boolean = false;
	get isHover(): boolean {
		return this._isHover;
	}
	set isHover(value: boolean) {
		let oldIsChecked = this._isHover;
		this._isHover = value;
		if (oldIsChecked != this._isHover) {
			this.onPropertyChanged(Button.isHoverPropertyName, oldIsChecked, value);
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
			this.onPropertyChanged(Button.isDisabledPropertyName, oldIsDisabled, value);
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
			this.onPropertyChanged(Button.disableTransitionsPropertyName, oldDisableTransitions, value);
		}
	}
	onViewReady(): void {
		this.ensureAnimations();
		this.view.updateRippleColors(this.actualRippleColor, BrushUtil.fromArgb(0, 0, 0, 0));
	}
	private get checkAnimationTiming(): AnimationKeyFrameEffectTiming {
		let timing = new AnimationKeyFrameEffectTiming();
		timing.duration = 300;
		timing.easing = KeyFrameEffectEasing.CubicInOut;
		return timing;
	}
	private ensureAnimations(): void {
		this.view.ensureAnimationFactory();
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
	clicked: (sender: any, args: ButtonClickEventArgs) => void = null;
}


