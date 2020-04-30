/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { IHasCategoryModePreference, IHasCategoryModePreference_$type } from "./IHasCategoryModePreference";
import { IHasCategoryAxis } from "./IHasCategoryAxis";
import { Axis } from "./Axis";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Base, Type, Point, Number_$type, Point_$type, typeCast, Boolean_$type, Delegate_$type, typeGetValue, markType, PointUtil } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";
import { AxisAnnotationFrame } from "./AxisAnnotationFrame";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Pool$1 } from "igniteui-core/Pool$1";
import { AxisAnnotation } from "./AxisAnnotation";
import { Control } from "igniteui-core/Control";
import { AxisOrientation } from "./AxisOrientation";
import { SeriesView } from "./SeriesView";
import { Rect } from "igniteui-core/Rect";
import { NotImplementedException } from "igniteui-core/NotImplementedException";
import { AxisRange } from "./AxisRange";
import { NumericAxisBase } from "./NumericAxisBase";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { ScalerParams } from "./ScalerParams";
import { Geometry } from "igniteui-core/Geometry";
import { CategoryXAxis } from "./CategoryXAxis";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { SeriesViewer } from "./SeriesViewer";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { CategoryMode } from "./CategoryMode";
import { RenderSurface } from "./RenderSurface";
import { AxisAnnotationFrameManager } from "./AxisAnnotationFrameManager";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { stringFormat } from "igniteui-core/stringExtended";
import { Path } from "igniteui-core/Path";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class ValueOverlay extends Series implements IHasCategoryModePreference {
	static $t: Type = markType(ValueOverlay, 'ValueOverlay', (<any>Series).$type, [IHasCategoryModePreference_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>ValueOverlay).$type;
	}
	get axis(): Axis {
		return <Axis>this.getValue(ValueOverlay.axisProperty);
	}
	set axis(value: Axis) {
		this.setValue(ValueOverlay.axisProperty, value);
	}
	static readonly axisPropertyName: string = "Axis";
	static readonly axisProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisPropertyName, (<any>Axis).$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisPropertyName, e.oldValue, e.newValue)));
	get value(): number {
		return <number>this.getValue(ValueOverlay.valueProperty);
	}
	set value(value: number) {
		this.setValue(ValueOverlay.valueProperty, value);
	}
	private static readonly valuePropertyName: string = "Value";
	static readonly valueProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.valuePropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.valuePropertyName, e.oldValue, e.newValue)));
	previousValue: number = 0;
	transitionValue: number = 0;
	currentValue: number = 0;
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		return this.value;
	}
	getAngleTo(world: Point, center: Point): number {
		let radius: number = Math.sqrt(Math.pow(world.x - center.x, 2) + Math.pow(world.y - center.y, 2));
		let angle: number = Math.acos((world.x - center.x) / radius);
		if ((world.y - center.y) < 0) {
			angle = (2 * Math.PI) - angle;
		}
		return angle;
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		if (this.axis == null) {
			return <Point>{ $type: Point_$type, x: NaN, y: NaN };
		}
		let val = this.prepareValue();
		let xPos: number = NaN;
		let yPos: number = NaN;
		let angle: number = NaN;
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		let dist: number = NaN;
		switch (this.axis.orientation) {
			case AxisOrientation.Angular:
			dist = Math.sqrt(Math.pow(world.x - center.x, 2) + Math.pow(world.y - center.y, 2));
			angle = val;
			xPos = center.x + Math.cos(angle) * dist;
			yPos = center.y + Math.sin(angle) * dist;
			yPos = this.view.viewport.top + this.view.viewport.height * (yPos - this.view.windowRect.top) / this.view.windowRect.height;
			xPos = this.view.viewport.left + this.view.viewport.width * (xPos - this.view.windowRect.left) / this.view.windowRect.width;
			break;

			case AxisOrientation.Horizontal:
			xPos = val;
			yPos = world.y;
			yPos = this.view.viewport.top + this.view.viewport.height * (yPos - this.view.windowRect.top) / this.view.windowRect.height;
			break;

			case AxisOrientation.Vertical:
			yPos = val;
			xPos = world.x;
			xPos = this.view.viewport.left + this.view.viewport.width * (xPos - this.view.windowRect.left) / this.view.windowRect.width;
			break;

			case AxisOrientation.Radial:
			angle = this.getAngleTo(world, center);
			dist = val;
			xPos = center.x + Math.cos(angle) * dist;
			yPos = center.y + Math.sin(angle) * dist;
			yPos = this.view.viewport.top + this.view.viewport.height * (yPos - this.view.windowRect.top) / this.view.windowRect.height;
			xPos = this.view.viewport.left + this.view.viewport.width * (xPos - this.view.windowRect.left) / this.view.windowRect.width;
			break;

		}

		return <Point>{ $type: Point_$type, x: xPos, y: yPos };
	}
	getItemIndex(world: Point): number {
		throw new NotImplementedException(0);
	}
	getItem(world: Point): any {
		return this;
	}
	scrollIntoView(item: any): boolean {
		return false;
	}
	getRange(axis: Axis): AxisRange {
		let numericAxis: NumericAxisBase = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, axis);
		let rangeValue = this.value;
		if (isNaN_(rangeValue) || isInfinity(rangeValue)) {
			return null;
		}
		return new AxisRange(rangeValue, rangeValue);
	}
	renderSeriesOverride(animate: boolean): void {
		this.clearRendering(true, this.view);
		if (!this.shouldRenderOverlay()) {
			return;
		}
		if (this.shouldAnimate(animate)) {
			if (this.animationActive()) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				let temp: number = this.previousValue;
				this.previousValue = this.transitionValue;
				this.transitionValue = temp;
			} else {
				this.previousValue = this.currentValue;
			}
			this.currentValue = this.prepareValue();
			this.startAnimation();
		} else {
			this.currentValue = this.prepareValue();
			this.renderValue(this.currentValue, this.valueOverlayView);
		}
	}
	prepareValue(): number {
		let windowRect: Rect, viewportRect: Rect;
		let $ret = this.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.axis.isInverted, effectiveViewportRect);
		return this.axis.getScaledValue(this.value, sParams);
	}
	renderValue(scaledValue: number, view: ValueOverlayView): void {
		if (this.axis == null) {
			return;
		}
		let categoryAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.axis);
		if (categoryAxis != null && !categoryAxis.isDateTime) {
			if (this.value > categoryAxis.itemsCount - 1) {
				return;
			}
			if (categoryAxis.categoryMode == CategoryMode.Mode2) {
				let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
				let offset: number = 0.5 * categoryAxis.getCategorySize(view.windowRect, view.viewport, effectiveViewportRect);
				let isInverted: boolean = false;
				if (categoryAxis.isVertical && !categoryAxis.isInverted) {
					isInverted = true;
				}
				if (typeCast<CategoryXAxis>((<any>CategoryXAxis).$type, categoryAxis) !== null && categoryAxis.isInverted) {
					isInverted = true;
				}
				if (isInverted) {
					offset = -offset;
				}
				scaledValue += offset;
			}
		}
		let numericAxis: NumericAxisBase = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.axis);
		if (numericAxis != null) {
			if (this.value < numericAxis.actualMinimumValue || this.value > numericAxis.actualMaximumValue) {
				return;
			}
			if (numericAxis.isReallyLogarithmic && this.value < 0) {
				return;
			}
		}
		let overlayGeometry: Geometry;
		switch (this.axis.orientation) {
			case AxisOrientation.Angular:

			case AxisOrientation.Radial:
			overlayGeometry = this.axis.getOverlayGeometry(scaledValue, view.windowRect, view.viewport, this.getEffectiveViewport1(view), this.getContentViewport(view));
			break;

			default:
			overlayGeometry = this.axis.getOverlayGeometry(scaledValue, view.windowRect, view.viewport);
			break;

		}

		if (overlayGeometry != null) {
			view.setPathData(overlayGeometry);
		}
		if (this.isAxisAnnotationEnabled) {
			this.updateAnnotation(scaledValue, this.animationActive());
		}
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		isValid = super.validateSeries(viewportRect, windowRect, view);
		if (!view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.axis == null || this.axis.seriesViewer == null) {
			isValid = false;
		}
		return isValid;
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.renderSeries(false);
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		throw new NotImplementedException(0);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case ValueOverlay.axisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.transitionProgressPropertyName:
			this.transitionValue = this.previousValue + this.transitionProgress * (this.currentValue - this.previousValue);
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.transitionProgress == 1) {
				this.renderValue(this.currentValue, this.valueOverlayView);
			} else {
				this.renderValue(this.transitionValue, this.valueOverlayView);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.raiseSeriesAnimating(this);
			}
			break;

			case ValueOverlay.valuePropertyName:
			let numericAxis: NumericAxisBase = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.axis);
			if (numericAxis != null) {
				numericAxis.updateRange();
			}
			this.renderSeries(true);
			this.notifyThumbnailDataChanged();
			break;

			case ValueOverlay.isAxisAnnotationEnabledPropertyName:

			case ValueOverlay.axisAnnotationTextColorPropertyName:

			case ValueOverlay.axisAnnotationBackgroundPropertyName:

			case ValueOverlay.axisAnnotationInterpolatedValuePrecisionPropertyName:

			case ValueOverlay.axisAnnotationOutlinePropertyName:

			case ValueOverlay.axisAnnotationStrokeThicknessPropertyName:

			case ValueOverlay.axisAnnotationPaddingBottomPropertyName:

			case ValueOverlay.axisAnnotationPaddingLeftPropertyName:

			case ValueOverlay.axisAnnotationPaddingRightPropertyName:

			case ValueOverlay.axisAnnotationPaddingTopPropertyName:
			this.renderSeries(true);
			break;

		}

	}
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.axis != null) {
			this.axis.renderAxis1(false);
		}
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let overlayView = <ValueOverlayView>view;
		overlayView.clearRendering();
	}
	private shouldRenderOverlay(): boolean {
		if (this.axis == null || this.axis.seriesViewer == null || isNaN_(this.value) || this._visibility == Visibility.Collapsed) {
			return false;
		}
		let categoryAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.axis);
		if (categoryAxis != null && categoryAxis.itemsCount == 0) {
			return false;
		}
		return true;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	get categoryAxis(): CategoryAxisBase {
		return typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.axis);
	}
	protected createView(): SeriesView {
		return new ValueOverlayView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.valueOverlayView = typeCast<ValueOverlayView>((<any>ValueOverlayView).$type, view);
	}
	private _valueOverlayView: ValueOverlayView;
	private get valueOverlayView(): ValueOverlayView {
		return this._valueOverlayView;
	}
	private set valueOverlayView(value: ValueOverlayView) {
		this._valueOverlayView = value;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
		if (!this.thumbnailDirty) {
			this.view.prepSurface(surface);
			return;
		}
		this.view.prepSurface(surface);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView) || !this.shouldRenderOverlay()) {
			return;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let scaledValue: number = this.axis.getScaledValue(this.value, new ScalerParams(0, this.thumbnailView.windowRect, viewportRect, this.axis.isInverted, effectiveViewportRect));
		this.renderValue(scaledValue, typeCast<ValueOverlayView>((<any>ValueOverlayView).$type, this.thumbnailView));
		this.thumbnailDirty = false;
	}
	getOffsetValue(): number {
		return 0;
	}
	getCategoryWidth(): number {
		return 0;
	}
	get isAxisAnnotationEnabled(): boolean {
		return <boolean>this.getValue(ValueOverlay.isAxisAnnotationEnabledProperty);
	}
	set isAxisAnnotationEnabled(value: boolean) {
		this.setValue(ValueOverlay.isAxisAnnotationEnabledProperty, value);
	}
	static readonly isAxisAnnotationEnabledPropertyName: string = "IsAxisAnnotationEnabled";
	static readonly isAxisAnnotationEnabledProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.isAxisAnnotationEnabledPropertyName, Boolean_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.isAxisAnnotationEnabledPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationFormatLabel(): (item: any) => string {
		return <(item: any) => string>this.getValue(ValueOverlay.axisAnnotationFormatLabelProperty);
	}
	set axisAnnotationFormatLabel(value: (item: any) => string) {
		this.setValue(ValueOverlay.axisAnnotationFormatLabelProperty, value);
	}
	static readonly axisAnnotationFormatLabelPropertyName: string = "AxisAnnotationFormatLabel";
	static readonly axisAnnotationFormatLabelProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationFormatLabelPropertyName, Delegate_$type, (<any>ValueOverlay).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisAnnotationFormatLabelPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationTextColor(): Brush {
		return <Brush>this.getValue(ValueOverlay.axisAnnotationTextColorProperty);
	}
	set axisAnnotationTextColor(value: Brush) {
		this.setValue(ValueOverlay.axisAnnotationTextColorProperty, value);
	}
	static readonly axisAnnotationTextColorPropertyName: string = "AxisAnnotationTextColor";
	static readonly axisAnnotationTextColorProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationTextColorPropertyName, (<any>Brush).$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisAnnotationTextColorPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationBackground(): Brush {
		return <Brush>this.getValue(ValueOverlay.axisAnnotationBackgroundProperty);
	}
	set axisAnnotationBackground(value: Brush) {
		this.setValue(ValueOverlay.axisAnnotationBackgroundProperty, value);
	}
	static readonly axisAnnotationBackgroundPropertyName: string = "AxisAnnotationBackground";
	static readonly axisAnnotationBackgroundProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationBackgroundPropertyName, (<any>Brush).$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisAnnotationBackgroundPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationInterpolatedValuePrecision(): number {
		return typeGetValue(this.getValue(ValueOverlay.axisAnnotationInterpolatedValuePrecisionProperty));
	}
	set axisAnnotationInterpolatedValuePrecision(value: number) {
		this.setValue(ValueOverlay.axisAnnotationInterpolatedValuePrecisionProperty, value);
	}
	static readonly axisAnnotationInterpolatedValuePrecisionPropertyName: string = "AxisAnnotationInterpolatedValuePrecision";
	static readonly axisAnnotationInterpolatedValuePrecisionProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationInterpolatedValuePrecisionPropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisAnnotationInterpolatedValuePrecisionPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationOutline(): Brush {
		return <Brush>this.getValue(ValueOverlay.axisAnnotationOutlineProperty);
	}
	set axisAnnotationOutline(value: Brush) {
		this.setValue(ValueOverlay.axisAnnotationOutlineProperty, value);
	}
	static readonly axisAnnotationOutlinePropertyName: string = "AxisAnnotationOutline";
	static readonly axisAnnotationOutlineProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationOutlinePropertyName, (<any>Brush).$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisAnnotationOutlinePropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPadding(): Thickness {
		return new Thickness(1, this.axisAnnotationPaddingLeft, this.axisAnnotationPaddingTop, this.axisAnnotationPaddingRight, this.axisAnnotationPaddingBottom);
	}
	static readonly axisAnnotationPaddingLeftPropertyName: string = "AxisAnnotationPaddingLeft";
	static readonly axisAnnotationPaddingLeftProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationPaddingLeftPropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ValueOverlay>((<any>ValueOverlay).$type, sender)).raisePropertyChanged(ValueOverlay.axisAnnotationPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingLeft(): number {
		return <number>this.getValue(ValueOverlay.axisAnnotationPaddingLeftProperty);
	}
	set axisAnnotationPaddingLeft(value: number) {
		this.setValue(ValueOverlay.axisAnnotationPaddingLeftProperty, value);
	}
	static readonly axisAnnotationPaddingTopPropertyName: string = "AxisAnnotationPaddingTop";
	static readonly axisAnnotationPaddingTopProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationPaddingTopPropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ValueOverlay>((<any>ValueOverlay).$type, sender)).raisePropertyChanged(ValueOverlay.axisAnnotationPaddingTopPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingTop(): number {
		return <number>this.getValue(ValueOverlay.axisAnnotationPaddingTopProperty);
	}
	set axisAnnotationPaddingTop(value: number) {
		this.setValue(ValueOverlay.axisAnnotationPaddingTopProperty, value);
	}
	static readonly axisAnnotationPaddingRightPropertyName: string = "AxisAnnotationPaddingRight";
	static readonly axisAnnotationPaddingRightProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationPaddingRightPropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ValueOverlay>((<any>ValueOverlay).$type, sender)).raisePropertyChanged(ValueOverlay.axisAnnotationPaddingRightPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingRight(): number {
		return <number>this.getValue(ValueOverlay.axisAnnotationPaddingRightProperty);
	}
	set axisAnnotationPaddingRight(value: number) {
		this.setValue(ValueOverlay.axisAnnotationPaddingRightProperty, value);
	}
	static readonly axisAnnotationPaddingBottomPropertyName: string = "AxisAnnotationPaddingBottom";
	static readonly axisAnnotationPaddingBottomProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationPaddingBottomPropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ValueOverlay>((<any>ValueOverlay).$type, sender)).raisePropertyChanged(ValueOverlay.axisAnnotationPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingBottom(): number {
		return <number>this.getValue(ValueOverlay.axisAnnotationPaddingBottomProperty);
	}
	set axisAnnotationPaddingBottom(value: number) {
		this.setValue(ValueOverlay.axisAnnotationPaddingBottomProperty, value);
	}
	get axisAnnotationStrokeThickness(): number {
		return <number>this.getValue(ValueOverlay.axisAnnotationStrokeThicknessProperty);
	}
	set axisAnnotationStrokeThickness(value: number) {
		this.setValue(ValueOverlay.axisAnnotationStrokeThicknessProperty, value);
	}
	static readonly axisAnnotationStrokeThicknessPropertyName: string = "AxisAnnotationStrokeThickness";
	static readonly axisAnnotationStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(ValueOverlay.axisAnnotationStrokeThicknessPropertyName, Number_$type, (<any>ValueOverlay).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueOverlay>sender).raisePropertyChanged(ValueOverlay.axisAnnotationStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	getAxes(): Axis[] {
		return <Axis[]>[ this.axis ];
	}
	private _annotationFrame_1: AxisAnnotationFrame = null;
	private get _annotationFrame(): AxisAnnotationFrame {
		return this._annotationFrame_1;
	}
	private set _annotationFrame(value: AxisAnnotationFrame) {
		this._annotationFrame_1 = value;
	}
	private _annotatedAxes: List$1<Axis> = null;
	private _annotations: Dictionary$2<Axis, Pool$1<AxisAnnotation>> = null;
	protected updateAnnotation(value: number, forceAxisUpdate: boolean): void {
		if (isNaN_(value)) {
			return;
		}
		let modified: boolean = false;
		if (this._annotations == null) {
			modified = true;
			this._annotatedAxes = new List$1<Axis>((<any>Axis).$type, 0);
			this._annotations = new Dictionary$2<Axis, Pool$1<AxisAnnotation>>((<any>Axis).$type, (<any>Pool$1).$type.specialize((<any>AxisAnnotation).$type), 0);
		}
		this._annotationFrame = new AxisAnnotationFrame();
		let brush = this.actualBrush;
		if (brush == null) {
			brush = this.brush;
		}
		let isVertical: boolean = this.axis.isVertical;
		AxisAnnotationFrameManager.prepare(this._annotationFrame, <Point>{ $type: Point_$type, x: value, y: value }, this, this.seriesViewer, this.getEffectiveViewport(), brush, this.axisAnnotationBackground, this.axisAnnotationTextColor, this.axisAnnotationOutline, this.axisAnnotationPadding, this.axisAnnotationStrokeThickness, this.axisAnnotationBackground, this.axisAnnotationTextColor, this.axisAnnotationOutline, this.axisAnnotationPadding, this.axisAnnotationStrokeThickness, !this.axis.isVertical, this.axis.isVertical);
		AxisAnnotationFrameManager.updateAnnoations(this, this._annotationFrame, modified, this._annotations, this._annotatedAxes, forceAxisUpdate, this.axisAnnotationInterpolatedValuePrecision, this.axisAnnotationInterpolatedValuePrecision, this.axisAnnotationFormatLabel, this.axisAnnotationFormatLabel);
	}
	protected get_isValueOverlay(): boolean {
		return true;
	}
	getLabel(value: number): string {
		if (this.axis != null) {
			return this.axis.getValueLabel(value);
		}
		return null;
	}
	get labelResolved(): string {
		let val = this.getLabel(this.value);
		return val != null ? val : stringFormat("{0:0.##}", this.value);
	}
}

/**
 * @hidden 
 */
export class ValueOverlayView extends SeriesView {
	static $t: Type = markType(ValueOverlayView, 'ValueOverlayView', (<any>SeriesView).$type);
	constructor(model: ValueOverlay) {
		super(model);
		this.path = new Path();
	}
	private _path: Path = null;
	private get path(): Path {
		return this._path;
	}
	private set path(value: Path) {
		this._path = value;
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.path._stroke = this.model.actualBrush;
		this.path.strokeThickness = this.model.thickness;
		this.path.strokeDashArray = this.model.dashArray;
		this.path.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.path._stroke = hitBrush;
		this.path.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.path._stroke = hitBrush;
		this.path.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	setPathData(data: Geometry): void {
		this.path.data = data;
		this.makeDirty();
	}
	clearRendering(): void {
		this.path.data = null;
		this.makeDirty();
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.path);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.path, "ValueOverlayPath", <string[]>[]);
	}
}


