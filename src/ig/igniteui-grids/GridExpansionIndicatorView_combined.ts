/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, delegateCombine } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { List$1 } from "igniteui-core/List$1";
import { Path } from "igniteui-core/Path";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { TransformGroup } from "igniteui-core/TransformGroup";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { Transform } from "igniteui-core/Transform";
import { RotateTransform } from "igniteui-core/RotateTransform";
import { UIElement } from "igniteui-core/UIElement";
import { Shape } from "igniteui-core/Shape";
import { truncate, isNaN_ } from "igniteui-core/number";
import { EasingFunctions } from "igniteui-core/EasingFunctions";
import { Geometry } from "igniteui-core/Geometry";
import { PenLineJoin } from "igniteui-core/PenLineJoin";

/**
 * @hidden 
 */
export class GridExpansionIndicatorView extends Base {
	static $t: Type = markType(GridExpansionIndicatorView, 'GridExpansionIndicatorView');
	private _determineRatio: (e: Event) => void = null;
	private _currentPixelRatio: number = 1;
	private _canvasWidth: number = 0;
	private _canvasHeight: number = 0;
	private _indicators: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private _canvas: DomWrapper = null;
	get canvas(): DomWrapper {
		return this._canvas;
	}
	set canvas(value: DomWrapper) {
		this._canvas = value;
	}
	private _context: RenderingContext = null;
	private get context(): RenderingContext {
		return this._context;
	}
	private set context(value: RenderingContext) {
		this._context = value;
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	private _currentWidth: number = 0;
	private get currentWidth(): number {
		return this._currentWidth;
	}
	private set currentWidth(value: number) {
		this._currentWidth = value;
	}
	private _currentHeight: number = 0;
	private get currentHeight(): number {
		return this._currentHeight;
	}
	private set currentHeight(value: number) {
		this._currentHeight = value;
	}
	private _currentIndicatorWidth: number = 0;
	private get currentIndicatorWidth(): number {
		return this._currentIndicatorWidth;
	}
	private set currentIndicatorWidth(value: number) {
		this._currentIndicatorWidth = value;
	}
	private _currentIndicatorHeight: number = 0;
	private get currentIndicatorHeight(): number {
		return this._currentIndicatorHeight;
	}
	private set currentIndicatorHeight(value: number) {
		this._currentIndicatorHeight = value;
	}
	private _model: GridExpansionIndicator = null;
	get model(): GridExpansionIndicator {
		return this._model;
	}
	set model(value: GridExpansionIndicator) {
		this._model = value;
	}
	constructor(model: GridExpansionIndicator) {
		super();
		this.model = model;
	}
	onContainerProvided(container: any): void {
		if (container == null) {
			this.canvas = null;
			this.container = null;
			this.context = null;
			if (this._determineRatio != null) {
				window.removeEventListener("resize", this._determineRatio, false);
				this._determineRatio = null;
			}
			return;
		}
		this._currentPixelRatio = (isNaN_(this.model.pixelScalingRatio) ? this.model.actualPixelScalingRatio : this.model.pixelScalingRatio);
		let cont = <DomRenderer><any>container;
		this.container = cont;
		this.model.angleAnimator.provideRenderer(this.container);
		this.container.rootWrapper.addClass("ui-expansion-indicator-container");
		let pixelScale = this._currentPixelRatio;
		let containerWidth = Math.round(<number>cont.rootWrapper.width());
		let containerHeight = Math.round(<number>cont.rootWrapper.height());
		let pixelWidth = containerWidth * pixelScale;
		let pixelHeight = containerHeight * pixelScale;
		let canv = this.container.createElement("canvas");
		canv.setStyleProperty("position", "absolute");
		this.container.append(canv);
		this._canvasWidth = <number>truncate(Math.round(pixelWidth));
		this._canvasHeight = <number>truncate(Math.round(pixelHeight));
		canv.setAttribute("width", pixelWidth.toString());
		canv.setAttribute("height", pixelHeight.toString());
		canv.setStyleProperty("width", containerWidth.toString() + "px");
		canv.setStyleProperty("height", containerHeight.toString() + "px");
		this.currentWidth = containerWidth;
		this.currentHeight = containerHeight;
		this.canvas = canv;
		let context = this.container.get2DCanvasContext(this.canvas);
		this.context = new RenderingContext(new CanvasViewRenderer(), context);
		if (isNaN_(this.model.pixelScalingRatio)) {
			this.model.actualPixelScalingRatio = window.devicePixelRatio;
			this._currentPixelRatio = this.model.actualPixelScalingRatio;
		}
		this.render();
	}
	onSizeChanged(width: number, height: number): void {
		this.currentWidth = width;
		this.currentHeight = height;
		this.render();
	}
	getDefaultIndicatorStroke(): Brush {
		if (this.model.iconColor != null) {
			return this.model.iconColor;
		}
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(138, 0, 0, 0);
			return $ret;
		})());
	}
	scheduleRender(): void {
		this.render();
	}
	private makeIcon(): void {
		this._indicators.clear();
		this.model.makeIcon(this.currentWidth, this.currentHeight, this._indicators);
	}
	private render(): void {
		if (this.canvas == null || this.context == null) {
			return;
		}
		if (this.currentIndicatorWidth != this.currentWidth || this.currentIndicatorHeight != this.currentHeight) {
			this.makeIcon();
			this.currentIndicatorWidth = this.currentWidth;
			this.currentIndicatorHeight = this.currentHeight;
		}
		if (this._indicators.count > 0) {
			let center = <Point>{ $type: Point_$type, x: this.currentWidth / 2, y: this.currentHeight / 2 };
			let tg: TransformGroup = new TransformGroup();
			tg.children.add(((() => {
				let $ret = new TranslateTransform();
				$ret.x = -center.x;
				$ret.y = -center.y;
				return $ret;
			})()));
			tg.children.add(((() => {
				let $ret = new RotateTransform();
				$ret.angle = this.model.currentAngle;
				return $ret;
			})()));
			tg.children.add(((() => {
				let $ret = new TranslateTransform();
				$ret.x = center.x;
				$ret.y = center.y;
				return $ret;
			})()));
			this._indicators._inner[0].renderTransform = tg;
		}
		let pixelWidth = Math.round(this.currentWidth * this._currentPixelRatio);
		let pixelHeight = Math.round(this.currentHeight * this._currentPixelRatio);
		if (this._canvasWidth != pixelWidth || this._canvasHeight != pixelHeight) {
			this.canvas.setAttribute("width", pixelWidth.toString());
			this.canvas.setAttribute("height", pixelHeight.toString());
			this.canvas.setStyleProperty("width", this.currentWidth.toString() + "px");
			this.canvas.setStyleProperty("height", this.currentHeight.toString() + "px");
			this.canvas.setStyleProperty("top", "0px");
			this.canvas.setStyleProperty("left", "0px");
			this._canvasWidth = <number>truncate(Math.round(pixelWidth));
			this._canvasHeight = <number>truncate(Math.round(pixelHeight));
		}
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.save();
			this.context.scale(this._currentPixelRatio, this._currentPixelRatio);
		}
		this.context.clearRectangle(0, 0, this.currentWidth, this.currentHeight);
		this.context.save();
		for (let i = 0; i < this._indicators.count; i++) {
			this.context.applyTransform(this._indicators._inner[i].renderTransform);
			let indicatorBrush = this.getDefaultIndicatorStroke();
			if (this.model.iconColor != null) {
				indicatorBrush = this.model.iconColor;
			}
			this._indicators._inner[i]._stroke = indicatorBrush;
			this.context.renderPath(this._indicators._inner[i]);
		}
		this.context.restore();
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.restore();
		}
	}
}

/**
 * @hidden 
 */
export class GridExpansionIndicator extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridExpansionIndicator, 'GridExpansionIndicator', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _view: GridExpansionIndicatorView = null;
	protected get view(): GridExpansionIndicatorView {
		return this._view;
	}
	protected set view(value: GridExpansionIndicatorView) {
		this._view = value;
	}
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _isExpanded: boolean = false;
	static readonly isExpandedPropertyName: string = "IsExpanded";
	get isExpanded(): boolean {
		return this._isExpanded;
	}
	set isExpanded(value: boolean) {
		let oldValue = this._isExpanded;
		this._isExpanded = value;
		if (oldValue != this._isExpanded) {
			this.onPropertyChanged(GridExpansionIndicator.isExpandedPropertyName, oldValue, this._isExpanded);
		}
	}
	private _iconColor: Brush = null;
	static readonly iconColorPropertyName: string = "IconColor";
	get iconColor(): Brush {
		return this._iconColor;
	}
	set iconColor(value: Brush) {
		let oldValue = this._iconColor;
		this._iconColor = value;
		if (oldValue != this._iconColor) {
			this.onPropertyChanged(GridExpansionIndicator.iconColorPropertyName, oldValue, this._iconColor);
		}
	}
	private _isAnimationEnabled: boolean = false;
	static readonly isAnimationEnabledPropertyName: string = "IsAnimationEnabled";
	get isAnimationEnabled(): boolean {
		return this._isAnimationEnabled;
	}
	set isAnimationEnabled(value: boolean) {
		let oldValue = this._isAnimationEnabled;
		this._isAnimationEnabled = value;
		if (oldValue != this._isAnimationEnabled) {
			this.onPropertyChanged(GridExpansionIndicator.isAnimationEnabledPropertyName, oldValue, this._isAnimationEnabled);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _angleAnimator: DoubleAnimator = null;
	get angleAnimator(): DoubleAnimator {
		return this._angleAnimator;
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.onPropertyChanged(GridExpansionIndicator.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.onPropertyChanged(GridExpansionIndicator.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private _currentAngle: number = 0;
	get currentAngle(): number {
		return this._currentAngle;
	}
	set currentAngle(value: number) {
		this._currentAngle = value;
	}
	private _fromAngle: number = 0;
	private get fromAngle(): number {
		return this._fromAngle;
	}
	private set fromAngle(value: number) {
		this._fromAngle = value;
	}
	private _toAngle: number = 0;
	private get toAngle(): number {
		return this._toAngle;
	}
	private set toAngle(value: number) {
		this._toAngle = value;
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GridExpansionIndicator.pixelScalingRatioPropertyName:
			this.actualPixelScalingRatio = this.pixelScalingRatio;
			break;

			case GridExpansionIndicator.actualPixelScalingRatioPropertyName:
			this.view.scheduleRender();
			break;

			case GridExpansionIndicator.iconColorPropertyName:
			this.view.scheduleRender();
			break;

			case GridExpansionIndicator.isExpandedPropertyName:
			if (this.isAnimationEnabled || this._angleAnimator.animationActive()) {
				this._angleAnimator.stop();
			}
			this.fromAngle = this.currentAngle;
			this.toAngle = this.isExpanded ? 90 : 0;
			if (this.isAnimationEnabled) {
				this._angleAnimator.start();
			} else {
				this.currentAngle = this.toAngle;
				this.view.scheduleRender();
			}
			break;

		}

	}
	constructor() {
		super();
		this.currentAngle = 0;
		this.view = new GridExpansionIndicatorView(this);
		this._angleAnimator = new DoubleAnimator(0, 1, 400);
		this._angleAnimator.easingFunction = EasingFunctions.cubicEase;
		let $t = this._angleAnimator;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this._angleAnimator_PropertyChanged));
	}
	private _angleAnimator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.currentAngle = this.fromAngle + this._angleAnimator.transitionProgress * (this.toAngle - this.fromAngle);
		this.view.scheduleRender();
	}
	makeIcon(currentWidth: number, currentHeight: number, indicators: List$1<Path>): void {
		let g1 = Geometry.parse("M 10.18 6.343 l 5.64 5.675 -5.64 5.639");
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g1;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	provideRenderer(container: any): void {
		this.angleAnimator.provideRenderer(<DomRenderer><any>container);
	}
	getCanvas(): any {
		return this.view.canvas.getNativeElement();
	}
	notifySizeChanged(width: number, height: number): void {
		this.view.onSizeChanged(width, height);
	}
}


