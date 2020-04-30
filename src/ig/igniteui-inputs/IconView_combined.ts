/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Delegate_$type, fromEnum, runOn, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "igniteui-core/dom";
import { Path } from "igniteui-core/Path";
import { List$1 } from "igniteui-core/List$1";
import { FontInfo } from "igniteui-core/FontInfo";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { NativeUI } from "igniteui-core/NativeUI";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class IconView extends Base {
	static $t: Type = markType(IconView, 'IconView');
	constructor() {
		super();
	}
	private _model: Icon = null;
	get model(): Icon {
		return this._model;
	}
	set model(value: Icon) {
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
	get nativeIcon(): any {
		return this._nativeSVG;
	}
	get path(): Path {
		return null;
	}
	get useNativePath(): boolean {
		return true;
	}
	onContainerProvided(container: DomRenderer): void {
		if (container == null) {
			for (let act of fromEnum<() => void>(this._events)) {
				act();
			}
			this._events.clear();
		}
		this.container = container;
		container.rootWrapper.setStyleProperty("position", "relative");
		this.container.rootWrapper.setStyleProperty("display", "flex");
		this.container.rootWrapper.setStyleProperty("flex-direction", "row");
		this.container.rootWrapper.setStyleProperty("flex-wrap", "no-wrap");
		this.container.rootWrapper.setStyleProperty("align-items", "center");
		this.updateSize();
		let nativeSVG = this.container.createElementNS("svg", "http://www.w3.org/2000/svg");
		nativeSVG.setStyleProperty("position", "absolute");
		nativeSVG.setStyleProperty("top", "0");
		nativeSVG.setStyleProperty("left", "0");
		nativeSVG.setStyleProperty("right", "0");
		nativeSVG.setStyleProperty("bottom", "0");
		nativeSVG.setAttribute("viewBox", "0 0 24 24");
		this._nativeSVG = nativeSVG;
		let path = this.container.createElementNS("path", "http://www.w3.org/2000/svg");
		path.setAttribute("d", "");
		this._nativeSVG.append(path);
		if (this._svgPath != null) {
			path.setAttribute("d", this._svgPath);
		}
		this._path = path;
		this.container.append(this._nativeSVG);
		this.model.onViewReady();
	}
	private _svgPath: string = null;
	updateSVGPath(svgPath: string): void {
		if (this._svgPath != svgPath) {
			this._svgPath = svgPath;
			if (this._path != null) {
				this._path.setAttribute("d", this._svgPath);
			}
		}
	}
	updateSize(): void {
		this.container.rootWrapper.setStyleProperty("width", "1.5rem");
		this.container.rootWrapper.setStyleProperty("height", "1.5rem");
	}
	private _labelClick(arg1: NormalizedEvent): void {
	}
	onInputIdChanged(): void {
		if (this.ready()) {
		}
	}
	private _mouseEnter(arg1: NormalizedEvent): void {
		this.model.onMouseEnter();
	}
	private _mouseLeave(arg1: NormalizedEvent): void {
		this.model.onMouseLeave();
	}
	private _attached: boolean = true;
	private _nativeSVG: DomWrapper = null;
	private _path: DomWrapper = null;
	onAttachedToUI(): void {
		this._attached = true;
		this._events.add(this.container.rootWrapper.listen("mouseenter", runOn(this, this._mouseEnter)));
		this._events.add(this.container.rootWrapper.listen("mouseleave", runOn(this, this._mouseLeave)));
	}
	onDetachedFromUI(): void {
		this._attached = false;
		for (let act of fromEnum<() => void>(this._events)) {
			act();
		}
		this._events.clear();
	}
	updateTextStyle(textStyle: FontInfo): void {
		if (textStyle != null) {
			this.container.rootWrapper.setStyleProperty("font", textStyle.fontString);
		}
	}
}

/**
 * @hidden 
 */
export class Icon extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Icon, 'Icon', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		let view: IconView = new IconView();
		view.model = this;
		this.view = view;
		this.view.onInit();
	}
	private _view: IconView = null;
	get view(): IconView {
		return this._view;
	}
	set view(value: IconView) {
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
			case Icon.fillPropertyName:

			case Icon.strokePropertyName:

			case Icon.strokeThicknessPropertyName:

			case Icon.hoverFillPropertyName:

			case Icon.hoverStrokePropertyName:

			case Icon.hoverStrokeThicknessPropertyName:
			this.updateIconTheme();
			break;

			case Icon.actualFillPropertyName:

			case Icon.actualStrokePropertyName:

			case Icon.actualHoverFillPropertyName:

			case Icon.actualHoverStrokePropertyName:

			case Icon.actualStrokeThicknessPropertyName:

			case Icon.actualHoverStrokeThicknessPropertyName:

			case Icon.sVGPathPropertyName:
			this.updateIcon();
			break;

		}

	}
	private updateIconTheme(): void {
		this.actualFill = this.fill != null ? this.fill : Icon.defaultFill;
		this.actualHoverFill = this.hoverFill != null ? this.hoverFill : Icon.defaultHoverFill;
		this.actualStroke = this.stroke != null ? this.stroke : Icon.defaultStroke;
		this.actualHoverStroke = this.hoverStroke != null ? this.hoverStroke : Icon.defaultHoverStroke;
		this.actualStrokeThickness = !isNaN_(this.strokeThickness) ? this.strokeThickness : Icon.defaultStrokeThickness;
		this.actualHoverStrokeThickness = !isNaN_(this.hoverStrokeThickness) ? this.hoverStrokeThickness : Icon.defaultHoverStrokeThickness;
		this.actualTextColor = this.textColor != null ? this.textColor : Icon.defaultTextColor;
	}
	protected get isCanvas(): boolean {
		return this.svgPath != null && !this.view.useNativePath;
	}
	private updateIcon(): void {
		let button = this.view.nativeIcon;
		if (this.isCanvas) {
			let path: Path = this.view.path;
			if (this.isHover) {
				path._fill = this.actualHoverFill;
				path._stroke = this.actualHoverStroke;
				path.strokeThickness = this.actualHoverStrokeThickness;
			} else {
				path._fill = this.actualFill;
				path._stroke = this.actualStroke;
				path.strokeThickness = this.actualStrokeThickness;
			}
		} else {
			if (this.svgPath != null) {
				this.view.updateSVGPath(this.svgPath);
			}
			let icon = this.view.nativeIcon;
			if (this.isHover) {
				NativeUI.setFill(icon, this.actualHoverFill);
				NativeUI.setStroke(icon, this.actualHoverStroke);
				NativeUI.setStrokeWidth(icon, this.actualHoverStrokeThickness);
			} else {
				NativeUI.setFill(icon, this.actualFill);
				NativeUI.setStroke(icon, this.actualStroke);
				NativeUI.setStrokeWidth(icon, this.actualStrokeThickness);
			}
		}
		if (this.textStyle != null) {
			this.view.updateTextStyle(this.textStyle);
		}
		NativeUI.setColor(this.view.nativeIcon, this.actualTextColor);
	}
	private static defaultFill: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultTextColor: Brush = BrushUtil.fromArgb(255, 0, 0, 0);
	private static defaultStroke: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultHoverFill: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultHoverStroke: Brush = BrushUtil.fromArgb(0, 0, 0, 0);
	private static defaultStrokeThickness: number = 0;
	private static defaultHoverStrokeThickness: number = 0;
	static readonly actualFillPropertyName: string = "ActualFill";
	private _actualFill: Brush = Icon.defaultFill;
	get actualFill(): Brush {
		return this._actualFill;
	}
	set actualFill(value: Brush) {
		let oldValue = this._actualFill;
		this._actualFill = value;
		if (oldValue != this._actualFill) {
			this.onPropertyChanged(Icon.actualFillPropertyName, oldValue, value);
		}
	}
	static readonly actualTextColorPropertyName: string = "ActualTextColor";
	private _actualTextColor: Brush = Icon.defaultTextColor;
	get actualTextColor(): Brush {
		return this._actualTextColor;
	}
	set actualTextColor(value: Brush) {
		let oldValue = this._actualTextColor;
		this._actualTextColor = value;
		if (oldValue != this._actualTextColor) {
			this.onPropertyChanged(Icon.actualTextColorPropertyName, oldValue, value);
		}
	}
	static readonly actualHoverFillPropertyName: string = "ActualHoverFill";
	private _actualHoverFill: Brush = Icon.defaultHoverFill;
	get actualHoverFill(): Brush {
		return this._actualHoverFill;
	}
	set actualHoverFill(value: Brush) {
		let oldValue = this._actualHoverFill;
		this._actualHoverFill = value;
		if (oldValue != this._actualHoverFill) {
			this.onPropertyChanged(Icon.actualHoverFillPropertyName, oldValue, value);
		}
	}
	static readonly actualHoverStrokePropertyName: string = "ActualHoverStroke";
	private _actualHoverStroke: Brush = Icon.defaultHoverStroke;
	get actualHoverStroke(): Brush {
		return this._actualHoverStroke;
	}
	set actualHoverStroke(value: Brush) {
		let oldValue = this._actualHoverStroke;
		this._actualHoverStroke = value;
		if (oldValue != this._actualHoverStroke) {
			this.onPropertyChanged(Icon.actualHoverStrokePropertyName, oldValue, value);
		}
	}
	static readonly actualStrokePropertyName: string = "ActualStroke";
	private _actualStroke: Brush = Icon.defaultStroke;
	get actualStroke(): Brush {
		return this._actualStroke;
	}
	set actualStroke(value: Brush) {
		let oldValue = this._actualStroke;
		this._actualStroke = value;
		if (oldValue != this._actualStroke) {
			this.onPropertyChanged(Icon.actualStrokePropertyName, oldValue, value);
		}
	}
	static readonly actualHoverStrokeThicknessPropertyName: string = "ActualHoverStrokeThickness";
	private _actualHoverStrokeThickness: number = Icon.defaultHoverStrokeThickness;
	get actualHoverStrokeThickness(): number {
		return this._actualHoverStrokeThickness;
	}
	set actualHoverStrokeThickness(value: number) {
		let oldValue = this._actualHoverStrokeThickness;
		this._actualHoverStrokeThickness = value;
		if (oldValue != this._actualHoverStrokeThickness) {
			this.onPropertyChanged(Icon.actualHoverStrokeThicknessPropertyName, oldValue, value);
		}
	}
	static readonly actualStrokeThicknessPropertyName: string = "ActualStrokeThickness";
	private _actualStrokeThickness: number = Icon.defaultStrokeThickness;
	get actualStrokeThickness(): number {
		return this._actualStrokeThickness;
	}
	set actualStrokeThickness(value: number) {
		let oldValue = this._actualStrokeThickness;
		this._actualStrokeThickness = value;
		if (oldValue != this._actualStrokeThickness) {
			this.onPropertyChanged(Icon.actualStrokeThicknessPropertyName, oldValue, value);
		}
	}
	static readonly fillPropertyName: string = "Fill";
	private _fill: Brush = Icon.defaultFill;
	get fill(): Brush {
		return this._fill;
	}
	set fill(value: Brush) {
		let oldValue = this._fill;
		this._fill = value;
		if (oldValue != this._fill) {
			this.onPropertyChanged(Icon.fillPropertyName, oldValue, value);
		}
	}
	static readonly textColorPropertyName: string = "TextColor";
	private _textColor: Brush = Icon.defaultTextColor;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue = this._textColor;
		this._textColor = value;
		if (oldValue != this._textColor) {
			this.onPropertyChanged(Icon.textColorPropertyName, oldValue, value);
		}
	}
	static readonly sVGPathPropertyName: string = "SVGPath";
	private _svgPath: string = null;
	get svgPath(): string {
		return this._svgPath;
	}
	set svgPath(value: string) {
		let oldValue = this._svgPath;
		this._svgPath = value;
		if (oldValue != this._svgPath) {
			this.onPropertyChanged(Icon.sVGPathPropertyName, oldValue, value);
		}
	}
	static readonly hoverFillPropertyName: string = "HoverFill";
	private _hoverFill: Brush = Icon.defaultHoverFill;
	get hoverFill(): Brush {
		return this._hoverFill;
	}
	set hoverFill(value: Brush) {
		let oldValue = this._hoverFill;
		this._hoverFill = value;
		if (oldValue != this._hoverFill) {
			this.onPropertyChanged(Icon.hoverFillPropertyName, oldValue, value);
		}
	}
	static readonly hoverStrokePropertyName: string = "HoverStroke";
	private _hoverStroke: Brush = Icon.defaultHoverStroke;
	get hoverStroke(): Brush {
		return this._hoverStroke;
	}
	set hoverStroke(value: Brush) {
		let oldValue = this._hoverStroke;
		this._hoverStroke = value;
		if (oldValue != this._hoverStroke) {
			this.onPropertyChanged(Icon.hoverStrokePropertyName, oldValue, value);
		}
	}
	static readonly strokePropertyName: string = "Stroke";
	private _stroke: Brush = Icon.defaultStroke;
	get stroke(): Brush {
		return this._stroke;
	}
	set stroke(value: Brush) {
		let oldValue = this._stroke;
		this._stroke = value;
		if (oldValue != this._stroke) {
			this.onPropertyChanged(Icon.strokePropertyName, oldValue, value);
		}
	}
	static readonly hoverStrokeThicknessPropertyName: string = "HoverStrokeThickness";
	private _hoverStrokeThickness: number = Icon.defaultHoverStrokeThickness;
	get hoverStrokeThickness(): number {
		return this._hoverStrokeThickness;
	}
	set hoverStrokeThickness(value: number) {
		let oldValue = this._hoverStrokeThickness;
		this._hoverStrokeThickness = value;
		if (oldValue != this._hoverStrokeThickness) {
			this.onPropertyChanged(Icon.hoverStrokeThicknessPropertyName, oldValue, value);
		}
	}
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	private _strokeThickness: number = Icon.defaultStrokeThickness;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		let oldValue = this._strokeThickness;
		this._strokeThickness = value;
		if (oldValue != this._strokeThickness) {
			this.onPropertyChanged(Icon.strokeThicknessPropertyName, oldValue, value);
		}
	}
	onMouseEnter(): void {
		this.isHover = true;
	}
	onMouseLeave(): void {
		this.isHover = false;
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
			this.onPropertyChanged(Icon.textStylePropertyName, oldValue, value);
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
			this.onPropertyChanged(Icon.hoverTextColorPropertyName, oldValue, value);
		}
	}
	private static _nextId: number = 0;
	static readonly idPropertyName: string = "Id";
	private _id: string = "ig-icon-" + Icon._nextId++;
	get id(): string {
		return this._id;
	}
	set id(value: string) {
		let oldValue = this._id;
		this._id = value;
		if (oldValue != this._id) {
			this.onPropertyChanged(Icon.idPropertyName, oldValue, value);
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
			this.onPropertyChanged(Icon.tabIndexPropertyName, oldTabIndex, value);
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
			this.onPropertyChanged(Icon.ariaLabelPropertyName, oldAriaLabel, value);
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
			this.onPropertyChanged(Icon.isHoverPropertyName, oldIsChecked, value);
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
			this.onPropertyChanged(Icon.isDisabledPropertyName, oldIsDisabled, value);
		}
	}
	onViewReady(): void {
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


