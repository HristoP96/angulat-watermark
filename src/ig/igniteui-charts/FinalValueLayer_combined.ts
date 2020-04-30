/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { FinalValueSelectionMode, FinalValueSelectionMode_$type } from "./FinalValueSelectionMode";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";
import { FinalValueLayerFrame } from "./FinalValueLayerFrame";
import { List$1 } from "igniteui-core/List$1";
import { Axis } from "./Axis";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Pool$1 } from "igniteui-core/Pool$1";
import { AxisAnnotation } from "./AxisAnnotation";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, enumGetBox, EnumUtil, typeGetValue, Number_$type, typeCast, fromEnum, Point_$type, markType, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { ContentInfo } from "./ContentInfo";
import { Frame } from "./Frame";
import { AxisAnnotationFrame } from "./AxisAnnotationFrame";
import { SeriesViewer } from "./SeriesViewer";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Rect } from "igniteui-core/Rect";
import { AxisAnnotationFrameManager } from "./AxisAnnotationFrameManager";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { IAxisAnnotation } from "./IAxisAnnotation";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { BrushUtil } from "igniteui-core/BrushUtil";

/**
 * @hidden 
 */
export class FinalValueLayer extends AnnotationLayer {
	static $t: Type = markType(FinalValueLayer, 'FinalValueLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		let previousFrame = new FinalValueLayerFrame();
		let currentFrame = new FinalValueLayerFrame();
		let transitionFrame = new FinalValueLayerFrame();
		let animationRate: number = this.transitionDuration / 1000;
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>FinalValueLayer).$type;
	}
	protected createView(): SeriesView {
		return new FinalValueLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.finalValueView = <FinalValueLayerView>view;
	}
	private _finalValueView: FinalValueLayerView;
	protected get finalValueView(): FinalValueLayerView {
		return this._finalValueView;
	}
	protected set finalValueView(value: FinalValueLayerView) {
		this._finalValueView = value;
	}
	get targetSeries(): Series {
		return <Series>this.getValue(FinalValueLayer.targetSeriesProperty);
	}
	set targetSeries(value: Series) {
		this.setValue(FinalValueLayer.targetSeriesProperty, value);
	}
	static readonly targetSeriesPropertyName: string = "TargetSeries";
	static readonly targetSeriesProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.targetSeriesPropertyName, (<any>Series).$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.targetSeriesPropertyName, e.oldValue, e.newValue)));
	get finalValueSelectionMode(): FinalValueSelectionMode {
		return EnumUtil.getEnumValue<FinalValueSelectionMode>(FinalValueSelectionMode_$type, this.getValue(FinalValueLayer.finalValueSelectionModeProperty));
	}
	set finalValueSelectionMode(value: FinalValueSelectionMode) {
		this.setValue(FinalValueLayer.finalValueSelectionModeProperty, enumGetBox<FinalValueSelectionMode>(FinalValueSelectionMode_$type, value));
	}
	static readonly finalValueSelectionModePropertyName: string = "FinalValueSelectionMode";
	static readonly finalValueSelectionModeProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.finalValueSelectionModePropertyName, FinalValueSelectionMode_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, enumGetBox<FinalValueSelectionMode>(FinalValueSelectionMode_$type, FinalValueSelectionMode.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.finalValueSelectionModePropertyName, e.oldValue, e.newValue)));
	get axisAnnotationTextColor(): Brush {
		return <Brush>this.getValue(FinalValueLayer.axisAnnotationTextColorProperty);
	}
	set axisAnnotationTextColor(value: Brush) {
		this.setValue(FinalValueLayer.axisAnnotationTextColorProperty, value);
	}
	static readonly axisAnnotationTextColorPropertyName: string = "AxisAnnotationTextColor";
	static readonly axisAnnotationTextColorProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationTextColorPropertyName, (<any>Brush).$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.axisAnnotationTextColorPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationBackground(): Brush {
		return <Brush>this.getValue(FinalValueLayer.axisAnnotationBackgroundProperty);
	}
	set axisAnnotationBackground(value: Brush) {
		this.setValue(FinalValueLayer.axisAnnotationBackgroundProperty, value);
	}
	static readonly axisAnnotationBackgroundPropertyName: string = "AxisAnnotationBackground";
	static readonly axisAnnotationBackgroundProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationBackgroundPropertyName, (<any>Brush).$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.axisAnnotationBackgroundPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationInterpolatedValuePrecision(): number {
		return typeGetValue(this.getValue(FinalValueLayer.axisAnnotationInterpolatedValuePrecisionProperty));
	}
	set axisAnnotationInterpolatedValuePrecision(value: number) {
		this.setValue(FinalValueLayer.axisAnnotationInterpolatedValuePrecisionProperty, value);
	}
	static readonly axisAnnotationInterpolatedValuePrecisionPropertyName: string = "AxisAnnotationInterpolatedValuePrecision";
	static readonly axisAnnotationInterpolatedValuePrecisionProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationInterpolatedValuePrecisionPropertyName, Number_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.axisAnnotationInterpolatedValuePrecisionPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationOutline(): Brush {
		return <Brush>this.getValue(FinalValueLayer.axisAnnotationOutlineProperty);
	}
	set axisAnnotationOutline(value: Brush) {
		this.setValue(FinalValueLayer.axisAnnotationOutlineProperty, value);
	}
	static readonly axisAnnotationOutlinePropertyName: string = "AxisAnnotationOutline";
	static readonly axisAnnotationOutlineProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationOutlinePropertyName, (<any>Brush).$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.axisAnnotationOutlinePropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPadding(): Thickness {
		return new Thickness(1, this.axisAnnotationPaddingLeft, this.axisAnnotationPaddingTop, this.axisAnnotationPaddingRight, this.axisAnnotationPaddingBottom);
	}
	static readonly axisAnnotationPaddingLeftPropertyName: string = "AxisAnnotationPaddingLeft";
	static readonly axisAnnotationPaddingLeftProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationPaddingLeftPropertyName, Number_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<FinalValueLayer>((<any>FinalValueLayer).$type, sender)).raisePropertyChanged(FinalValueLayer.axisAnnotationPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingLeft(): number {
		return <number>this.getValue(FinalValueLayer.axisAnnotationPaddingLeftProperty);
	}
	set axisAnnotationPaddingLeft(value: number) {
		this.setValue(FinalValueLayer.axisAnnotationPaddingLeftProperty, value);
	}
	static readonly axisAnnotationPaddingTopPropertyName: string = "AxisAnnotationPaddingTop";
	static readonly axisAnnotationPaddingTopProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationPaddingTopPropertyName, Number_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<FinalValueLayer>((<any>FinalValueLayer).$type, sender)).raisePropertyChanged(FinalValueLayer.axisAnnotationPaddingTopPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingTop(): number {
		return <number>this.getValue(FinalValueLayer.axisAnnotationPaddingTopProperty);
	}
	set axisAnnotationPaddingTop(value: number) {
		this.setValue(FinalValueLayer.axisAnnotationPaddingTopProperty, value);
	}
	static readonly axisAnnotationPaddingRightPropertyName: string = "AxisAnnotationPaddingRight";
	static readonly axisAnnotationPaddingRightProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationPaddingRightPropertyName, Number_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<FinalValueLayer>((<any>FinalValueLayer).$type, sender)).raisePropertyChanged(FinalValueLayer.axisAnnotationPaddingRightPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingRight(): number {
		return <number>this.getValue(FinalValueLayer.axisAnnotationPaddingRightProperty);
	}
	set axisAnnotationPaddingRight(value: number) {
		this.setValue(FinalValueLayer.axisAnnotationPaddingRightProperty, value);
	}
	static readonly axisAnnotationPaddingBottomPropertyName: string = "AxisAnnotationPaddingBottom";
	static readonly axisAnnotationPaddingBottomProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationPaddingBottomPropertyName, Number_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<FinalValueLayer>((<any>FinalValueLayer).$type, sender)).raisePropertyChanged(FinalValueLayer.axisAnnotationPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get axisAnnotationPaddingBottom(): number {
		return <number>this.getValue(FinalValueLayer.axisAnnotationPaddingBottomProperty);
	}
	set axisAnnotationPaddingBottom(value: number) {
		this.setValue(FinalValueLayer.axisAnnotationPaddingBottomProperty, value);
	}
	axisAnnotationFormatLabel: (item: any) => string = null;
	hasAxisAnnotationFormatLabel(): boolean {
		return this.axisAnnotationFormatLabel != null;
	}
	get axisAnnotationStrokeThickness(): number {
		return <number>this.getValue(FinalValueLayer.axisAnnotationStrokeThicknessProperty);
	}
	set axisAnnotationStrokeThickness(value: number) {
		this.setValue(FinalValueLayer.axisAnnotationStrokeThicknessProperty, value);
	}
	static readonly axisAnnotationStrokeThicknessPropertyName: string = "AxisAnnotationStrokeThickness";
	static readonly axisAnnotationStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(FinalValueLayer.axisAnnotationStrokeThicknessPropertyName, Number_$type, (<any>FinalValueLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinalValueLayer>sender).raisePropertyChanged(FinalValueLayer.axisAnnotationStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
		if (this.targetSeries == null || this.targetSeries == series) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <FinalValueLayerFrame>frame;
		f.xAxes.clear();
		f.yAxes.clear();
		f.xAxisValues.clear();
		f.yAxisValues.clear();
		f.xAxisValuePositions.clear();
		f.yAxisValuePositions.clear();
		f.xAxisAnnotationBackgrounds.clear();
		f.xAxisAnnotationOutlines.clear();
		f.xAxisAnnotationPaddingsLeft.clear();
		f.xAxisAnnotationPaddingsTop.clear();
		f.xAxisAnnotationPaddingsRight.clear();
		f.xAxisAnnotationPaddingsBottom.clear();
		f.xAxisAnnotationStrokeThicknesses.clear();
		f.xAxisAnnotationTextColors.clear();
		f.yAxisAnnotationBackgrounds.clear();
		f.yAxisAnnotationOutlines.clear();
		f.yAxisAnnotationPaddingsLeft.clear();
		f.yAxisAnnotationPaddingsTop.clear();
		f.yAxisAnnotationPaddingsRight.clear();
		f.yAxisAnnotationPaddingsBottom.clear();
		f.yAxisAnnotationStrokeThicknesses.clear();
		f.yAxisAnnotationTextColors.clear();
		if (this.isSeriesValid(this.targetSeries)) {
			this.prepareSeries(this.targetSeries, f);
		} else {
			for (let series of fromEnum<Series>(this.seriesViewer.series)) {
				if (this.isSeriesValid(series)) {
					this.prepareSeries(series, f);
				}
			}
		}
	}
	protected isSeriesValid(series: Series): boolean {
		if (!super.isSeriesValid(series)) {
			return false;
		}
		return true;
	}
	onBeforeContentRefresh(): void {
		super.onBeforeContentRefresh();
		if (!this.contentInfo.isDirty && !this.animationActive()) {
			return;
		}
		if (this.animationActive()) {
			this.updateAnnotations(<FinalValueLayerFrame>this.transitionFrame, false);
		} else {
			this.updateAnnotations(<FinalValueLayerFrame>this.currentFrame, false);
		}
	}
	private getFinalValuePosition(series: Series): Point {
		let x: number = NaN;
		let y: number = NaN;
		let displayMode: FinalValueSelectionMode = this.finalValueSelectionMode;
		if (displayMode == FinalValueSelectionMode.Auto) {
			displayMode = FinalValueSelectionMode.FinalVisible;
		}
		let interpolate: boolean = false;
		if (displayMode == FinalValueSelectionMode.FinalVisibleInterpolated) {
			interpolate = true;
		}
		if (series.isVertical) {
			let catAxis = series.getCategoryAxisIfPresent();
			if (catAxis != null) {
				if (displayMode == FinalValueSelectionMode.FinalVisible || displayMode == FinalValueSelectionMode.FinalVisibleInterpolated) {
					if (catAxis.isInverted) {
						y = series.toWorldPosition(<Point>{ $type: Point_$type, x: this.viewport.right, y: this.viewport.bottom }).y;
					} else {
						y = series.toWorldPosition(<Point>{ $type: Point_$type, x: this.viewport.right, y: this.viewport.top }).y;
					}
				} else {
					if (catAxis.isInverted) {
						y = 1;
					} else {
						y = 0;
					}
				}
			}
			return series.getSeriesValuePosition(<Point>{ $type: Point_$type, x: 0, y: y }, interpolate, true);
		} else {
			let catAxis1 = series.getCategoryAxisIfPresent();
			if (catAxis1 != null) {
				if (displayMode == FinalValueSelectionMode.FinalVisible || displayMode == FinalValueSelectionMode.FinalVisibleInterpolated) {
					if (catAxis1.isInverted) {
						x = series.toWorldPosition(<Point>{ $type: Point_$type, x: this.viewport.left, y: this.viewport.top }).x;
					} else {
						x = series.toWorldPosition(<Point>{ $type: Point_$type, x: this.viewport.right, y: this.viewport.top }).x;
					}
				} else {
					if (catAxis1.isInverted) {
						x = 0;
					} else {
						x = 1;
					}
				}
			}
			if (series.isFinancial) {
				return series.getSeriesValuePosition(<Point>{ $type: Point_$type, x: x, y: 0 }, interpolate, true);
			} else {
				return series.getSeriesValuePosition(<Point>{ $type: Point_$type, x: x, y: 0 }, interpolate, true);
			}
		}
	}
	private prepareSeries(series: Series, f: FinalValueLayerFrame): void {
		let pos = this.getFinalValuePosition(series);
		let toolPosition = this.toWorldPosition(pos);
		let brush = this.actualBrush;
		if (brush == null) {
			brush = this.brush;
		}
		if (brush == null) {
			brush = series.actualBrush;
			if (brush != null) {
				brush = this.finalValueView.getLightenedBrush(brush);
			}
		}
		AxisAnnotationFrameManager.prepare(f, pos, series, this.seriesViewer, this.getEffectiveViewport(), brush, this.axisAnnotationBackground, this.axisAnnotationTextColor, this.axisAnnotationOutline, this.axisAnnotationPadding, this.axisAnnotationStrokeThickness, this.axisAnnotationBackground, this.axisAnnotationTextColor, this.axisAnnotationOutline, this.axisAnnotationPadding, this.axisAnnotationStrokeThickness, series.isVertical, !series.isVertical);
	}
	private _annotatedAxes: List$1<Axis> = null;
	private _annotations: Dictionary$2<Axis, Pool$1<AxisAnnotation>> = null;
	protected updateAnnotations(frame: FinalValueLayerFrame, forceAxisUpdate: boolean): void {
		let modified: boolean = false;
		if (this._annotations == null) {
			modified = true;
			this._annotatedAxes = new List$1<Axis>((<any>Axis).$type, 0);
			this._annotations = new Dictionary$2<Axis, Pool$1<AxisAnnotation>>((<any>Axis).$type, (<any>Pool$1).$type.specialize((<any>AxisAnnotation).$type), 0);
		}
		AxisAnnotationFrameManager.updateAnnoations(this, frame, modified, this._annotations, this._annotatedAxes, forceAxisUpdate, this.axisAnnotationInterpolatedValuePrecision, this.axisAnnotationInterpolatedValuePrecision, this.axisAnnotationFormatLabel, this.axisAnnotationFormatLabel);
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		if (this.animationActive()) {
			this.updateAnnotations(<FinalValueLayerFrame>this.transitionFrame, true);
		} else {
			this.updateAnnotations(<FinalValueLayerFrame>this.currentFrame, false);
		}
	}
	protected requiresPrepare(): boolean {
		return true;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case FinalValueLayer.targetSeriesPropertyName:
			this.renderSeries(true);
			break;

			case FinalValueLayer.axisAnnotationBackgroundPropertyName:

			case FinalValueLayer.axisAnnotationOutlinePropertyName:

			case FinalValueLayer.axisAnnotationPaddingLeftPropertyName:

			case FinalValueLayer.axisAnnotationPaddingTopPropertyName:

			case FinalValueLayer.axisAnnotationPaddingRightPropertyName:

			case FinalValueLayer.axisAnnotationPaddingBottomPropertyName:

			case FinalValueLayer.axisAnnotationStrokeThicknessPropertyName:

			case FinalValueLayer.axisAnnotationTextColorPropertyName:

			case FinalValueLayer.finalValueSelectionModePropertyName:
			this.renderSeries(true);
			break;

			case Series.seriesViewerPropertyName:
			let oldAxis = this._annotatedAxes;
			let oldAnnotations = this._annotations;
			if (oldAnnotations != null) {
				for (let keypair of fromEnum<KeyValuePair$2<Axis, Pool$1<AxisAnnotation>>>(oldAnnotations)) {
					let pool = keypair.value;
					pool.doToAll((annotation: AxisAnnotation) => keypair.key.annotations.remove(annotation));
					pool.clear();
				}
				oldAxis.clear();
				oldAnnotations.clear();
			}
			break;

		}

	}
}

/**
 * @hidden 
 */
export class FinalValueLayerView extends AnnotationLayerView {
	static $t: Type = markType(FinalValueLayerView, 'FinalValueLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: FinalValueLayer) {
		super(model);
		this.finalModel = model;
	}
	private _finalModel: FinalValueLayer = null;
	protected get finalModel(): FinalValueLayer {
		return this._finalModel;
	}
	protected set finalModel(value: FinalValueLayer) {
		this._finalModel = value;
	}
	onInit(): void {
		super.onInit();
	}
	getLightenedBrush(brush: Brush): Brush {
		if (brush == null) {
			return brush;
		}
		return BrushUtil.getLightened(brush, 0.1);
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
	}
}


