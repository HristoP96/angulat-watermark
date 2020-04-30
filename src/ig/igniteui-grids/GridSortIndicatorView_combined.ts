/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox, EnumUtil, runOn, delegateCombine } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { List$1 } from "igniteui-core/List$1";
import { Path } from "igniteui-core/Path";
import { SortIndicatorStyle, SortIndicatorStyle_$type } from "./SortIndicatorStyle";
import { Brush } from "igniteui-core/Brush";
import { UIElement } from "igniteui-core/UIElement";
import { Shape } from "igniteui-core/Shape";
import { TransformGroup } from "igniteui-core/TransformGroup";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { Transform } from "igniteui-core/Transform";
import { RotateTransform } from "igniteui-core/RotateTransform";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Color } from "igniteui-core/Color";
import { truncate, isNaN_ } from "igniteui-core/number";
import { ColumnSortDirection, ColumnSortDirection_$type } from "./ColumnSortDirection";
import { EasingFunctions } from "igniteui-core/EasingFunctions";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathSegment } from "igniteui-core/PathSegment";
import { Geometry } from "igniteui-core/Geometry";
import { SortIndicatorRenderCompletedEventArgs } from "./SortIndicatorRenderCompletedEventArgs";
import { PenLineJoin } from "igniteui-core/PenLineJoin";

/**
 * @hidden 
 */
export class GridSortIndicatorView extends Base {
	static $t: Type = markType(GridSortIndicatorView, 'GridSortIndicatorView');
	constructor(model: GridSortIndicator) {
		super();
		this.model = model;
	}
	private _model: GridSortIndicator = null;
	get model(): GridSortIndicator {
		return this._model;
	}
	set model(value: GridSortIndicator) {
		this._model = value;
	}
	private _indicators: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private _currentArrowWidth: number = 0;
	private get currentArrowWidth(): number {
		return this._currentArrowWidth;
	}
	private set currentArrowWidth(value: number) {
		this._currentArrowWidth = value;
	}
	private _currentArrowHeight: number = 0;
	private get currentArrowHeight(): number {
		return this._currentArrowHeight;
	}
	private set currentArrowHeight(value: number) {
		this._currentArrowHeight = value;
	}
	private _currentSortStyle: SortIndicatorStyle = <SortIndicatorStyle>0;
	render(): void {
		if (this.canvas == null || this.context == null) {
			return;
		}
		if (this.currentArrowWidth != this.currentWidth || this.currentArrowHeight != this.currentHeight || this._currentSortStyle != this.model.sortIndicatorStyle) {
			this._indicators.clear();
			switch (this.model.sortIndicatorStyle) {
				case SortIndicatorStyle.Default:
				this.makeArrow();
				break;

				case SortIndicatorStyle.FadingUpDownArrows:
				this.makeDoubleArrow();
				break;

				case SortIndicatorStyle.FadingSimpleUpDownArrows:
				this.makeSimpleDoubleArrow();
				break;

			}

			this.currentArrowWidth = this.currentWidth;
			this.currentArrowHeight = this.currentHeight;
			this._currentSortStyle = this.model.sortIndicatorStyle;
		}
		switch (this.model.sortIndicatorStyle) {
			case SortIndicatorStyle.Default:
			this.updateArrow();
			break;

			case SortIndicatorStyle.FadingUpDownArrows:
			this.updateDoubleArrow();
			break;

			case SortIndicatorStyle.FadingSimpleUpDownArrows:
			this.updateSimpleDoubleArrow();
			break;

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
		this.context.scale(this.model.getDesiredScale(), this.model.getDesiredScale());
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
		this.model.onRenderCompleted();
	}
	scheduleRender(): void {
		this.render();
	}
	private makeArrow(): void {
		this.model.makeArrow(this.currentWidth, this.currentHeight, this._indicators);
	}
	private updateArrow(): void {
		if (this._indicators.count != 1) {
			return;
		}
		this._indicators._inner[0]._opacity = this.model.currentOpacity;
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
	private makeDoubleArrow(): void {
		this.model.makeDoubleArrow(this.currentWidth, this.currentHeight, this._indicators);
	}
	private updateDoubleArrow(): void {
		if (this._indicators.count != 4) {
			return;
		}
		this._indicators._inner[0]._opacity = this.model.currentOpacity;
		this._indicators._inner[1]._opacity = this.model.currentOpacity;
		this._indicators._inner[2]._opacity = this.model.secondaryOpacity;
		this._indicators._inner[3]._opacity = this.model.secondaryOpacity;
	}
	private makeSimpleDoubleArrow(): void {
		this.model.makeStackedDoubleArrow(this.currentWidth, this.currentHeight, this._indicators);
	}
	private updateSimpleDoubleArrow(): void {
		this._indicators._inner[0]._opacity = this.model.currentOpacity;
		this._indicators._inner[1]._opacity = this.model.secondaryOpacity;
	}
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
	private _canvasWidth: number = 0;
	private _canvasHeight: number = 0;
	private _currentPixelRatio: number = 1;
	onContainerProvided(container: any): void {
		if (container == null) {
			this.canvas = null;
			this.container = null;
			this.context = null;
			return;
		}
		this._currentPixelRatio = (isNaN_(this.model.pixelScalingRatio) ? this.model.actualPixelScalingRatio : this.model.pixelScalingRatio);
		let cont = <DomRenderer><any>container;
		this.container = cont;
		this.model.opacityAnimator.provideRenderer(this.container);
		this.model.angleAnimator.provideRenderer(this.container);
		this.container.rootWrapper.addClass("ui-radialgauge-container");
		let pixelScale = this._currentPixelRatio;
		let containerWidth = Math.round(<number>cont.rootWrapper.width());
		let containerHeight = Math.round(<number>cont.rootWrapper.height());
		let pixelWidth = containerWidth * pixelScale;
		let pixelHeight = containerHeight * pixelScale;
		this.container.rootWrapper.setStyleProperty("position", "relative");
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
	onSizeChanged(width: number, height: number): void {
		if (isNaN_(this.model.pixelScalingRatio)) {
			this.model.actualPixelScalingRatio = window.devicePixelRatio;
			this._currentPixelRatio = this.model.actualPixelScalingRatio;
		}
		this.currentWidth = width;
		this.currentHeight = height;
		this.render();
	}
	getDefaultIndicatorStroke(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(138, 0, 0, 0);
			return $ret;
		})());
	}
}

/**
 * @hidden 
 */
export class GridSortIndicator extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridSortIndicator, 'GridSortIndicator', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _sortDirection: ColumnSortDirection = ColumnSortDirection.None;
	static readonly sortDirectionPropertyName: string = "SortDirection";
	get sortDirection(): ColumnSortDirection {
		return this._sortDirection;
	}
	set sortDirection(value: ColumnSortDirection) {
		let oldValue = this._sortDirection;
		this._sortDirection = value;
		if (oldValue != this._sortDirection) {
			this.onPropertyChanged(GridSortIndicator.sortDirectionPropertyName, enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, oldValue), enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, this._sortDirection));
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
			this.onPropertyChanged(GridSortIndicator.iconColorPropertyName, oldValue, this._iconColor);
		}
	}
	private _isAnimationEnabled: boolean = true;
	static readonly isAnimationEnabledPropertyName: string = "IsAnimationEnabled";
	get isAnimationEnabled(): boolean {
		return this._isAnimationEnabled;
	}
	set isAnimationEnabled(value: boolean) {
		let oldValue = this._isAnimationEnabled;
		this._isAnimationEnabled = value;
		if (oldValue != this._isAnimationEnabled) {
			this.onPropertyChanged(GridSortIndicator.isAnimationEnabledPropertyName, oldValue, this._isAnimationEnabled);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _angleAnimator: DoubleAnimator = null;
	get angleAnimator(): DoubleAnimator {
		return this._angleAnimator;
	}
	private _opacityAnimator: DoubleAnimator = null;
	get opacityAnimator(): DoubleAnimator {
		return this._opacityAnimator;
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.onPropertyChanged(GridSortIndicator.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.onPropertyChanged(GridSortIndicator.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	private _sortIndicatorStyle: SortIndicatorStyle = SortIndicatorStyle.Default;
	static readonly sortIndicatorStylePropertyName: string = "SortIndicatorStyle";
	get sortIndicatorStyle(): SortIndicatorStyle {
		return this._sortIndicatorStyle;
	}
	set sortIndicatorStyle(value: SortIndicatorStyle) {
		let oldValue = this._sortIndicatorStyle;
		this._sortIndicatorStyle = value;
		if (oldValue != this._sortIndicatorStyle) {
			this.onPropertyChanged(GridSortIndicator.sortIndicatorStylePropertyName, enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, oldValue), enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, this._sortIndicatorStyle));
		}
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private _currentOpacity: number = 0;
	get currentOpacity(): number {
		return this._currentOpacity;
	}
	set currentOpacity(value: number) {
		this._currentOpacity = value;
	}
	private _currentAngle: number = 0;
	get currentAngle(): number {
		return this._currentAngle;
	}
	set currentAngle(value: number) {
		this._currentAngle = value;
	}
	private _secondaryOpacity: number = 0;
	get secondaryOpacity(): number {
		return this._secondaryOpacity;
	}
	set secondaryOpacity(value: number) {
		this._secondaryOpacity = value;
	}
	private _fromOpacity: number = 0;
	private get fromOpacity(): number {
		return this._fromOpacity;
	}
	private set fromOpacity(value: number) {
		this._fromOpacity = value;
	}
	private _fromAngle: number = 0;
	private get fromAngle(): number {
		return this._fromAngle;
	}
	private set fromAngle(value: number) {
		this._fromAngle = value;
	}
	private _toOpacity: number = 0;
	private get toOpacity(): number {
		return this._toOpacity;
	}
	private set toOpacity(value: number) {
		this._toOpacity = value;
	}
	private _toAngle: number = 0;
	private get toAngle(): number {
		return this._toAngle;
	}
	private set toAngle(value: number) {
		this._toAngle = value;
	}
	private _fromSecondaryOpacity: number = 0;
	private get fromSecondaryOpacity(): number {
		return this._fromSecondaryOpacity;
	}
	private set fromSecondaryOpacity(value: number) {
		this._fromSecondaryOpacity = value;
	}
	private _toSecondaryOpacity: number = 0;
	private get toSecondaryOpacity(): number {
		return this._toSecondaryOpacity;
	}
	private set toSecondaryOpacity(value: number) {
		this._toSecondaryOpacity = value;
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GridSortIndicator.pixelScalingRatioPropertyName:
			this.actualPixelScalingRatio = this.pixelScalingRatio;
			break;

			case GridSortIndicator.actualPixelScalingRatioPropertyName:
			this.view.scheduleRender();
			break;

			case GridSortIndicator.iconColorPropertyName:
			this.view.scheduleRender();
			break;

			case GridSortIndicator.sortIndicatorStylePropertyName:
			switch (this.sortIndicatorStyle) {
				case SortIndicatorStyle.Default:
				this.onSortDirectionChangedDefaultStyle(this.sortDirection, false);
				break;

				case SortIndicatorStyle.FadingUpDownArrows:

				case SortIndicatorStyle.FadingSimpleUpDownArrows:
				this.onSortDirectionChangedFadingUpDownArrowsStyle(this.sortDirection, false);
				break;

			}

			break;

			case GridSortIndicator.sortDirectionPropertyName:
			switch (this.sortIndicatorStyle) {
				case SortIndicatorStyle.Default:
				this.onSortDirectionChangedDefaultStyle(EnumUtil.getEnumValue<ColumnSortDirection>(ColumnSortDirection_$type, newValue), this.isAnimationEnabled);
				break;

				case SortIndicatorStyle.FadingUpDownArrows:

				case SortIndicatorStyle.FadingSimpleUpDownArrows:
				this.onSortDirectionChangedFadingUpDownArrowsStyle(EnumUtil.getEnumValue<ColumnSortDirection>(ColumnSortDirection_$type, newValue), this.isAnimationEnabled);
				break;

			}

			break;

		}

	}
	constructor() {
		super();
		this.currentOpacity = 0;
		this.secondaryOpacity = 0.5;
		this.currentAngle = 180;
		this.view = new GridSortIndicatorView(this);
		this._angleAnimator = new DoubleAnimator(0, 1, 400);
		this._opacityAnimator = new DoubleAnimator(0, 1, 400);
		this._angleAnimator.easingFunction = EasingFunctions.cubicEase;
		this._opacityAnimator.easingFunction = EasingFunctions.cubicEase;
		let $t = this._angleAnimator;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this._angleAnimator_PropertyChanged));
		let $t1 = this._opacityAnimator;
		$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this._opacityAnimator_PropertyChanged));
	}
	private _opacityAnimator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (this.sortIndicatorStyle) {
			case SortIndicatorStyle.Default:
			this.currentOpacity = this.fromOpacity + this._opacityAnimator.transitionProgress * (this.toOpacity - this.fromOpacity);
			break;

			case SortIndicatorStyle.FadingUpDownArrows:

			case SortIndicatorStyle.FadingSimpleUpDownArrows:
			this.currentOpacity = this.fromOpacity + this._opacityAnimator.transitionProgress * (this.toOpacity - this.fromOpacity);
			this.secondaryOpacity = this.fromSecondaryOpacity + this._opacityAnimator.transitionProgress * (this.toSecondaryOpacity - this.fromSecondaryOpacity);
			break;

		}

		this.view.scheduleRender();
	}
	private _angleAnimator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.currentAngle = this.fromAngle + this._angleAnimator.transitionProgress * (this.toAngle - this.fromAngle);
		this.view.scheduleRender();
	}
	private onSortDirectionChangedDefaultStyle(sortDirection: ColumnSortDirection, animate: boolean): void {
		this.fromOpacity = this.currentOpacity;
		this.fromAngle = this.currentAngle;
		if (this.isAnimationEnabled || this._angleAnimator.animationActive() || this._opacityAnimator.animationActive()) {
			this._angleAnimator.stop();
			this._opacityAnimator.stop();
		}
		if (sortDirection == ColumnSortDirection.None) {
			this.toOpacity = 0;
			this.toAngle = 180;
		} else {
			this.toOpacity = 1;
			if (sortDirection == ColumnSortDirection.Ascending) {
				this.toAngle = 180;
			} else {
				this.toAngle = 0;
			}
		}
		if (animate) {
			this._angleAnimator.start();
			this._opacityAnimator.start();
		} else {
			this.currentAngle = this.toAngle;
			this.currentOpacity = this.toOpacity;
			this.view.scheduleRender();
		}
	}
	private onSortDirectionChangedFadingUpDownArrowsStyle(sortDirection: ColumnSortDirection, animate: boolean): void {
		this.fromOpacity = this.currentOpacity;
		this.fromSecondaryOpacity = this.secondaryOpacity;
		if (this.isAnimationEnabled || this._opacityAnimator.animationActive()) {
			this._opacityAnimator.stop();
		}
		switch (sortDirection) {
			case ColumnSortDirection.None:
			this.toOpacity = 0.4;
			this.toSecondaryOpacity = 0.4;
			break;

			case ColumnSortDirection.Ascending:
			this.toOpacity = 1;
			this.toSecondaryOpacity = 0.2;
			break;

			case ColumnSortDirection.Descending:
			this.toOpacity = 0.2;
			this.toSecondaryOpacity = 1;
			break;

		}

		if (animate) {
			this._opacityAnimator.start();
		} else {
			this.currentOpacity = this.toOpacity;
			this.secondaryOpacity = this.toSecondaryOpacity;
			this.view.scheduleRender();
		}
	}
	getDesiredScale(): number {
		switch (this.sortIndicatorStyle) {
			case SortIndicatorStyle.Default: return 1;
			case SortIndicatorStyle.FadingUpDownArrows: return 0.71;
			case SortIndicatorStyle.FadingSimpleUpDownArrows: return 1;
		}

		return 1;
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	provideRenderer(container: any): void {
		this.opacityAnimator.provideRenderer(<DomRenderer><any>container);
		this.angleAnimator.provideRenderer(<DomRenderer><any>container);
	}
	getCanvas(): any {
		return this.view.canvas.getNativeElement();
	}
	notifySizeChanged(width: number, height: number): void {
		this.view.onSizeChanged(width, height);
	}
	makeArrow(currentWidth: number, currentHeight: number, indicators: List$1<Path>): void {
		let dim = Math.min(currentWidth, currentHeight);
		let center = <Point>{ $type: Point_$type, x: currentWidth / 2, y: currentHeight / 2 };
		let len = dim * 0.8;
		let halfLen = len / 2;
		let quarterLen = halfLen / 2;
		let pf: PathFigure = new PathFigure();
		pf._startPoint = <Point>{ $type: Point_$type, x: center.x, y: center.y - halfLen };
		let ls: LineSegment = new LineSegment(1);
		ls.point = <Point>{ $type: Point_$type, x: center.x, y: center.y + halfLen };
		pf._segments.add(ls);
		let pf2: PathFigure = new PathFigure();
		pf2._startPoint = <Point>{ $type: Point_$type, x: center.x - halfLen, y: (center.y + halfLen) - halfLen };
		let ls2: LineSegment = new LineSegment(1);
		ls2.point = <Point>{ $type: Point_$type, x: center.x, y: center.y + halfLen };
		let ls3: LineSegment = new LineSegment(1);
		ls3.point = <Point>{ $type: Point_$type, x: center.x + halfLen, y: (center.y + halfLen) - halfLen };
		pf2._segments.add(ls2);
		pf2._segments.add(ls3);
		let pg: PathGeometry = new PathGeometry();
		pg.figures.add(pf);
		pg.figures.add(pf2);
		let indicator: Path = new Path();
		indicator.data = pg;
		indicator._stroke = this.view.getDefaultIndicatorStroke();
		indicator.strokeThickness = 1;
		indicators.add(indicator);
	}
	makeDoubleArrow(currentWidth: number, currentHeight: number, indicators: List$1<Path>): void {
		let g1 = Geometry.parse("M3.792172, 7.800278 L7.983785, 3.635676 L12.148387, 7.800278L12.148387, 7.800278");
		let g2 = Geometry.parse("M7.97027972,4.10930186 L7.97027972,13.8116223 L7.97027972,4.10930186 Z");
		let g3 = Geometry.parse("M11.851613, 16.199722 L16.043224, 20.364325  L20.207829, 16.199722");
		let g4 = Geometry.parse("M16.043224,10.1883777 L16.043224,19.8906981 L16.043224,10.1883777 Z");
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g1;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g2;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g3;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g4;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
	}
	makeStackedDoubleArrow(currentWidth: number, currentHeight: number, indicators: List$1<Path>): void {
		let center = <Point>{ $type: Point_$type, x: currentWidth / 2, y: currentHeight / 2 };
		let startTopArrow = <Point>{ $type: Point_$type, x: center.x - 3.5, y: center.y - 1.5 };
		let startBottomArrow = <Point>{ $type: Point_$type, x: center.x - 3.5, y: center.y + 1.5 };
		let g1 = Geometry.parse("M" + startTopArrow.x.toString() + ", " + startTopArrow.y.toString() + " l 3.5,-3.5 3.5,3.5");
		let g2 = Geometry.parse("M" + startBottomArrow.x.toString() + ", " + startBottomArrow.y.toString() + " l 3.5,3.5 3.5,-3.5");
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g1;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
		indicators.add(((() => {
			let $ret = new Path();
			$ret.data = g2;
			$ret.strokeLineJoin = PenLineJoin.Round;
			$ret.stroke = this.view.getDefaultIndicatorStroke();
			$ret.strokeThickness = 2;
			return $ret;
		})()));
	}
	private _view: GridSortIndicatorView = null;
	protected get view(): GridSortIndicatorView {
		return this._view;
	}
	protected set view(value: GridSortIndicatorView) {
		this._view = value;
	}
	renderCompleted: (sender: any, args: SortIndicatorRenderCompletedEventArgs) => void = null;
	onRenderCompleted(): void {
		if (this.renderCompleted != null) {
			this.renderCompleted(this, new SortIndicatorRenderCompletedEventArgs());
		}
	}
}


