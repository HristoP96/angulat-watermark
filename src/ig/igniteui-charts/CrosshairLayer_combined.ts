/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { Brush } from "igniteui-core/Brush";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Series } from "./Series";
import { Thickness } from "igniteui-core/Thickness";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { CrosshairLayerFrame } from "./CrosshairLayerFrame";
import { List$1 } from "igniteui-core/List$1";
import { Axis } from "./Axis";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Pool$1 } from "igniteui-core/Pool$1";
import { AxisAnnotation } from "./AxisAnnotation";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, Boolean_$type, typeGetValue, Number_$type, typeCast, enumGetBox, EnumUtil, fromEnum, Point_$type, markType, PointUtil, runOn } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { ContentInfo } from "./ContentInfo";
import { Frame } from "./Frame";
import { AxisAnnotationFrameManager } from "./AxisAnnotationFrameManager";
import { SeriesViewer } from "./SeriesViewer";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { Path } from "igniteui-core/Path";
import { Shape } from "igniteui-core/Shape";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { Rect } from "igniteui-core/Rect";
import { PathSegment } from "igniteui-core/PathSegment";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { UIElement } from "igniteui-core/UIElement";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class CrosshairLayer extends AnnotationLayer {
	static $t: Type = markType(CrosshairLayer, 'CrosshairLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		let previousFrame = new CrosshairLayerFrame();
		let currentFrame = new CrosshairLayerFrame();
		let transitionFrame = new CrosshairLayerFrame();
		let animationRate: number = this.transitionDuration / 1000;
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>CrosshairLayer).$type;
	}
	protected createView(): SeriesView {
		return new CrosshairLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.crosshairView = <CrosshairLayerView>view;
	}
	private _crosshairView: CrosshairLayerView;
	protected get crosshairView(): CrosshairLayerView {
		return this._crosshairView;
	}
	protected set crosshairView(value: CrosshairLayerView) {
		this._crosshairView = value;
	}
	get horizontalLineStroke(): Brush {
		return <Brush>this.getValue(CrosshairLayer.horizontalLineStrokeProperty);
	}
	set horizontalLineStroke(value: Brush) {
		this.setValue(CrosshairLayer.horizontalLineStrokeProperty, value);
	}
	static readonly horizontalLineStrokePropertyName: string = "HorizontalLineStroke";
	static readonly horizontalLineStrokeProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.horizontalLineStrokePropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.horizontalLineStrokePropertyName, e.oldValue, e.newValue)));
	get verticalLineStroke(): Brush {
		return <Brush>this.getValue(CrosshairLayer.verticalLineStrokeProperty);
	}
	set verticalLineStroke(value: Brush) {
		this.setValue(CrosshairLayer.verticalLineStrokeProperty, value);
	}
	static readonly verticalLineStrokePropertyName: string = "VerticalLineStroke";
	static readonly verticalLineStrokeProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.verticalLineStrokePropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.verticalLineStrokePropertyName, e.oldValue, e.newValue)));
	get targetSeries(): Series {
		return <Series>this.getValue(CrosshairLayer.targetSeriesProperty);
	}
	set targetSeries(value: Series) {
		this.setValue(CrosshairLayer.targetSeriesProperty, value);
	}
	static readonly targetSeriesPropertyName: string = "TargetSeries";
	static readonly targetSeriesProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.targetSeriesPropertyName, (<any>Series).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.targetSeriesPropertyName, e.oldValue, e.newValue)));
	get useInterpolation(): boolean {
		return <boolean>this.getValue(CrosshairLayer.useInterpolationProperty);
	}
	set useInterpolation(value: boolean) {
		this.setValue(CrosshairLayer.useInterpolationProperty, value);
	}
	static readonly useInterpolationPropertyName: string = "UseInterpolation";
	static readonly useInterpolationProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.useInterpolationPropertyName, Boolean_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.useInterpolationPropertyName, e.oldValue, e.newValue)));
	get isAxisAnnotationEnabled(): boolean {
		return <boolean>this.getValue(CrosshairLayer.isAxisAnnotationEnabledProperty);
	}
	set isAxisAnnotationEnabled(value: boolean) {
		this.setValue(CrosshairLayer.isAxisAnnotationEnabledProperty, value);
	}
	static readonly isAxisAnnotationEnabledPropertyName: string = "IsAxisAnnotationEnabled";
	static readonly isAxisAnnotationEnabledProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.isAxisAnnotationEnabledPropertyName, Boolean_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.isAxisAnnotationEnabledPropertyName, e.oldValue, e.newValue)));
	xAxisAnnotationFormatLabel: (item: any) => string = null;
	hasXAxisAnnotationFormatLabel(): boolean {
		return this.xAxisAnnotationFormatLabel != null;
	}
	yAxisAnnotationFormatLabel: (item: any) => string = null;
	hasYAxisAnnotationFormatLabel(): boolean {
		return this.yAxisAnnotationFormatLabel != null;
	}
	get xAxisAnnotationTextColor(): Brush {
		return <Brush>this.getValue(CrosshairLayer.xAxisAnnotationTextColorProperty);
	}
	set xAxisAnnotationTextColor(value: Brush) {
		this.setValue(CrosshairLayer.xAxisAnnotationTextColorProperty, value);
	}
	static readonly xAxisAnnotationTextColorPropertyName: string = "XAxisAnnotationTextColor";
	static readonly xAxisAnnotationTextColorProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationTextColorPropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.xAxisAnnotationTextColorPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationBackground(): Brush {
		return <Brush>this.getValue(CrosshairLayer.xAxisAnnotationBackgroundProperty);
	}
	set xAxisAnnotationBackground(value: Brush) {
		this.setValue(CrosshairLayer.xAxisAnnotationBackgroundProperty, value);
	}
	static readonly xAxisAnnotationBackgroundPropertyName: string = "XAxisAnnotationBackground";
	static readonly xAxisAnnotationBackgroundProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationBackgroundPropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.xAxisAnnotationBackgroundPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationInterpolatedValuePrecision(): number {
		return typeGetValue(this.getValue(CrosshairLayer.xAxisAnnotationInterpolatedValuePrecisionProperty));
	}
	set xAxisAnnotationInterpolatedValuePrecision(value: number) {
		this.setValue(CrosshairLayer.xAxisAnnotationInterpolatedValuePrecisionProperty, value);
	}
	static readonly xAxisAnnotationInterpolatedValuePrecisionPropertyName: string = "XAxisAnnotationInterpolatedValuePrecision";
	static readonly xAxisAnnotationInterpolatedValuePrecisionProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationInterpolatedValuePrecisionPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.xAxisAnnotationInterpolatedValuePrecisionPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationOutline(): Brush {
		return <Brush>this.getValue(CrosshairLayer.xAxisAnnotationOutlineProperty);
	}
	set xAxisAnnotationOutline(value: Brush) {
		this.setValue(CrosshairLayer.xAxisAnnotationOutlineProperty, value);
	}
	static readonly xAxisAnnotationOutlinePropertyName: string = "XAxisAnnotationOutline";
	static readonly xAxisAnnotationOutlineProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationOutlinePropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.xAxisAnnotationOutlinePropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationPadding(): Thickness {
		return new Thickness(1, this.xAxisAnnotationPaddingLeft, this.xAxisAnnotationPaddingTop, this.xAxisAnnotationPaddingRight, this.xAxisAnnotationPaddingBottom);
	}
	static readonly xAxisAnnotationPaddingLeftPropertyName: string = "XAxisAnnotationPaddingLeft";
	static readonly xAxisAnnotationPaddingLeftProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationPaddingLeftPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.xAxisAnnotationPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationPaddingLeft(): number {
		return <number>this.getValue(CrosshairLayer.xAxisAnnotationPaddingLeftProperty);
	}
	set xAxisAnnotationPaddingLeft(value: number) {
		this.setValue(CrosshairLayer.xAxisAnnotationPaddingLeftProperty, value);
	}
	static readonly xAxisAnnotationPaddingTopPropertyName: string = "XAxisAnnotationPaddingTop";
	static readonly xAxisAnnotationPaddingTopProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationPaddingTopPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.xAxisAnnotationPaddingTopPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationPaddingTop(): number {
		return <number>this.getValue(CrosshairLayer.xAxisAnnotationPaddingTopProperty);
	}
	set xAxisAnnotationPaddingTop(value: number) {
		this.setValue(CrosshairLayer.xAxisAnnotationPaddingTopProperty, value);
	}
	static readonly xAxisAnnotationPaddingRightPropertyName: string = "XAxisAnnotationPaddingRight";
	static readonly xAxisAnnotationPaddingRightProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationPaddingRightPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.xAxisAnnotationPaddingRightPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationPaddingRight(): number {
		return <number>this.getValue(CrosshairLayer.xAxisAnnotationPaddingRightProperty);
	}
	set xAxisAnnotationPaddingRight(value: number) {
		this.setValue(CrosshairLayer.xAxisAnnotationPaddingRightProperty, value);
	}
	static readonly xAxisAnnotationPaddingBottomPropertyName: string = "XAxisAnnotationPaddingBottom";
	static readonly xAxisAnnotationPaddingBottomProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationPaddingBottomPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.xAxisAnnotationPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get xAxisAnnotationPaddingBottom(): number {
		return <number>this.getValue(CrosshairLayer.xAxisAnnotationPaddingBottomProperty);
	}
	set xAxisAnnotationPaddingBottom(value: number) {
		this.setValue(CrosshairLayer.xAxisAnnotationPaddingBottomProperty, value);
	}
	get yAxisAnnotationPadding(): Thickness {
		return new Thickness(1, this.yAxisAnnotationPaddingLeft, this.yAxisAnnotationPaddingTop, this.yAxisAnnotationPaddingRight, this.yAxisAnnotationPaddingBottom);
	}
	static readonly yAxisAnnotationPaddingLeftPropertyName: string = "YAxisAnnotationPaddingLeft";
	static readonly yAxisAnnotationPaddingLeftProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationPaddingLeftPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.yAxisAnnotationPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationPaddingLeft(): number {
		return <number>this.getValue(CrosshairLayer.yAxisAnnotationPaddingLeftProperty);
	}
	set yAxisAnnotationPaddingLeft(value: number) {
		this.setValue(CrosshairLayer.yAxisAnnotationPaddingLeftProperty, value);
	}
	static readonly yAxisAnnotationPaddingTopPropertyName: string = "YAxisAnnotationPaddingTop";
	static readonly yAxisAnnotationPaddingTopProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationPaddingTopPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.yAxisAnnotationPaddingTopPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationPaddingTop(): number {
		return <number>this.getValue(CrosshairLayer.yAxisAnnotationPaddingTopProperty);
	}
	set yAxisAnnotationPaddingTop(value: number) {
		this.setValue(CrosshairLayer.yAxisAnnotationPaddingTopProperty, value);
	}
	static readonly yAxisAnnotationPaddingRightPropertyName: string = "YAxisAnnotationPaddingRight";
	static readonly yAxisAnnotationPaddingRightProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationPaddingRightPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.yAxisAnnotationPaddingRightPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationPaddingRight(): number {
		return <number>this.getValue(CrosshairLayer.yAxisAnnotationPaddingRightProperty);
	}
	set yAxisAnnotationPaddingRight(value: number) {
		this.setValue(CrosshairLayer.yAxisAnnotationPaddingRightProperty, value);
	}
	static readonly yAxisAnnotationPaddingBottomPropertyName: string = "YAxisAnnotationPaddingBottom";
	static readonly yAxisAnnotationPaddingBottomProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationPaddingBottomPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CrosshairLayer>((<any>CrosshairLayer).$type, sender)).raisePropertyChanged(CrosshairLayer.yAxisAnnotationPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationPaddingBottom(): number {
		return <number>this.getValue(CrosshairLayer.yAxisAnnotationPaddingBottomProperty);
	}
	set yAxisAnnotationPaddingBottom(value: number) {
		this.setValue(CrosshairLayer.yAxisAnnotationPaddingBottomProperty, value);
	}
	get xAxisAnnotationStrokeThickness(): number {
		return <number>this.getValue(CrosshairLayer.xAxisAnnotationStrokeThicknessProperty);
	}
	set xAxisAnnotationStrokeThickness(value: number) {
		this.setValue(CrosshairLayer.xAxisAnnotationStrokeThicknessProperty, value);
	}
	static readonly xAxisAnnotationStrokeThicknessPropertyName: string = "XAxisAnnotationStrokeThickness";
	static readonly xAxisAnnotationStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.xAxisAnnotationStrokeThicknessPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.xAxisAnnotationStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationTextColor(): Brush {
		return <Brush>this.getValue(CrosshairLayer.yAxisAnnotationTextColorProperty);
	}
	set yAxisAnnotationTextColor(value: Brush) {
		this.setValue(CrosshairLayer.yAxisAnnotationTextColorProperty, value);
	}
	static readonly yAxisAnnotationTextColorPropertyName: string = "YAxisAnnotationTextColor";
	static readonly yAxisAnnotationTextColorProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationTextColorPropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.yAxisAnnotationTextColorPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationBackground(): Brush {
		return <Brush>this.getValue(CrosshairLayer.yAxisAnnotationBackgroundProperty);
	}
	set yAxisAnnotationBackground(value: Brush) {
		this.setValue(CrosshairLayer.yAxisAnnotationBackgroundProperty, value);
	}
	static readonly yAxisAnnotationBackgroundPropertyName: string = "YAxisAnnotationBackground";
	static readonly yAxisAnnotationBackgroundProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationBackgroundPropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.yAxisAnnotationBackgroundPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationInterpolatedValuePrecision(): number {
		return typeGetValue(this.getValue(CrosshairLayer.yAxisAnnotationInterpolatedValuePrecisionProperty));
	}
	set yAxisAnnotationInterpolatedValuePrecision(value: number) {
		this.setValue(CrosshairLayer.yAxisAnnotationInterpolatedValuePrecisionProperty, value);
	}
	static readonly yAxisAnnotationInterpolatedValuePrecisionPropertyName: string = "YAxisAnnotationInterpolatedValuePrecision";
	static readonly yAxisAnnotationInterpolatedValuePrecisionProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationInterpolatedValuePrecisionPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.yAxisAnnotationInterpolatedValuePrecisionPropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationOutline(): Brush {
		return <Brush>this.getValue(CrosshairLayer.yAxisAnnotationOutlineProperty);
	}
	set yAxisAnnotationOutline(value: Brush) {
		this.setValue(CrosshairLayer.yAxisAnnotationOutlineProperty, value);
	}
	static readonly yAxisAnnotationOutlinePropertyName: string = "YAxisAnnotationOutline";
	static readonly yAxisAnnotationOutlineProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationOutlinePropertyName, (<any>Brush).$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.yAxisAnnotationOutlinePropertyName, e.oldValue, e.newValue)));
	get yAxisAnnotationStrokeThickness(): number {
		return <number>this.getValue(CrosshairLayer.yAxisAnnotationStrokeThicknessProperty);
	}
	set yAxisAnnotationStrokeThickness(value: number) {
		this.setValue(CrosshairLayer.yAxisAnnotationStrokeThicknessProperty, value);
	}
	static readonly yAxisAnnotationStrokeThicknessPropertyName: string = "YAxisAnnotationStrokeThickness";
	static readonly yAxisAnnotationStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.yAxisAnnotationStrokeThicknessPropertyName, Number_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.yAxisAnnotationStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get verticalLineVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(CrosshairLayer.verticalLineVisibilityProperty));
	}
	set verticalLineVisibility(value: Visibility) {
		this.setValue(CrosshairLayer.verticalLineVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly verticalLineVisibilityPropertyName: string = "VerticalLineVisibility";
	static readonly verticalLineVisibilityProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.verticalLineVisibilityPropertyName, Visibility_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.verticalLineVisibilityPropertyName, e.oldValue, e.newValue)));
	get horizontalLineVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(CrosshairLayer.horizontalLineVisibilityProperty));
	}
	set horizontalLineVisibility(value: Visibility) {
		this.setValue(CrosshairLayer.horizontalLineVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly horizontalLineVisibilityPropertyName: string = "HorizontalLineVisibility";
	static readonly horizontalLineVisibilityProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.horizontalLineVisibilityPropertyName, Visibility_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.horizontalLineVisibilityPropertyName, e.oldValue, e.newValue)));
	get skipUnknownValues(): boolean {
		return <boolean>this.getValue(CrosshairLayer.skipUnknownValuesProperty);
	}
	set skipUnknownValues(value: boolean) {
		this.setValue(CrosshairLayer.skipUnknownValuesProperty, value);
	}
	static readonly skipUnknownValuesPropertyName: string = "SkipUnknownValues";
	static readonly skipUnknownValuesProperty: DependencyProperty = DependencyProperty.register(CrosshairLayer.skipUnknownValuesPropertyName, Boolean_$type, (<any>CrosshairLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CrosshairLayer>sender).raisePropertyChanged(CrosshairLayer.skipUnknownValuesPropertyName, e.oldValue, e.newValue)));
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
		if (this.targetSeries == null || this.targetSeries == series) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <CrosshairLayerFrame>frame;
		let useInterpolation = this.useInterpolation;
		let skipUnknowns = this.skipUnknownValues;
		f.lineHeights.clear();
		f.lineWidths.clear();
		f.horizontalLineBrushes.clear();
		f.verticalLineBrushes.clear();
		AxisAnnotationFrameManager.clear(f);
		if (this.isSeriesValid(this.targetSeries)) {
			this.prepareSeries(this.targetSeries, f, useInterpolation, skipUnknowns);
		} else {
			for (let series of fromEnum<Series>(this.seriesViewer.series)) {
				if (this.isSeriesValid(series)) {
					this.prepareSeries(series, f, useInterpolation, skipUnknowns);
				}
			}
		}
	}
	protected isSeriesValid(series: Series): boolean {
		if (!super.isSeriesValid(series)) {
			return false;
		}
		let res = this.getCategoryPosition(series);
		if (!res.item1) {
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
			this.updateAnnotations(<CrosshairLayerFrame>this.transitionFrame, false);
		} else {
			this.updateAnnotations(<CrosshairLayerFrame>this.currentFrame, false);
		}
	}
	private prepareSeries(series: Series, f: CrosshairLayerFrame, useInterpolation: boolean, skipUnknowns: boolean): void {
		let res = this.getCategoryPosition(series);
		if (!res.item1) {
			return;
		}
		let pos: Point = res.item2;
		pos = series.getSeriesValuePosition(pos, useInterpolation, skipUnknowns);
		let brush = this.actualBrush;
		if (brush == null) {
			brush = this.brush;
		}
		if (brush == null) {
			brush = series.actualBrush;
			if (brush != null) {
				brush = this.crosshairView.getLightenedBrush(brush);
			}
		}
		let horizontalBrush: Brush = brush;
		let verticalBrush: Brush = brush;
		if (this.horizontalLineStroke != null) {
			horizontalBrush = this.horizontalLineStroke;
		}
		if (this.verticalLineStroke != null) {
			verticalBrush = this.verticalLineStroke;
		}
		f.horizontalLineBrushes.add(horizontalBrush);
		f.verticalLineBrushes.add(verticalBrush);
		f.lineHeights.add(pos.y);
		f.lineWidths.add(pos.x);
		if (this.isAxisAnnotationEnabled) {
			AxisAnnotationFrameManager.prepare(f, pos, series, this.seriesViewer, this.getEffectiveViewport(), brush, this.xAxisAnnotationBackground, this.xAxisAnnotationTextColor, this.xAxisAnnotationOutline, this.xAxisAnnotationPadding, this.xAxisAnnotationStrokeThickness, this.yAxisAnnotationBackground, this.yAxisAnnotationTextColor, this.yAxisAnnotationOutline, this.yAxisAnnotationPadding, this.yAxisAnnotationStrokeThickness, this.verticalLineVisibility == Visibility.Visible, this.horizontalLineVisibility == Visibility.Visible);
		}
	}
	private _annotatedAxes: List$1<Axis> = null;
	private _annotations: Dictionary$2<Axis, Pool$1<AxisAnnotation>> = null;
	protected updateAnnotations(frame: CrosshairLayerFrame, forceAxisUpdate: boolean): void {
		let modified: boolean = false;
		if (this._annotations == null) {
			modified = true;
			this._annotatedAxes = new List$1<Axis>((<any>Axis).$type, 0);
			this._annotations = new Dictionary$2<Axis, Pool$1<AxisAnnotation>>((<any>Axis).$type, (<any>Pool$1).$type.specialize((<any>AxisAnnotation).$type), 0);
		}
		AxisAnnotationFrameManager.updateAnnoations(this, frame, modified, this._annotations, this._annotatedAxes, forceAxisUpdate, this.xAxisAnnotationInterpolatedValuePrecision, this.yAxisAnnotationInterpolatedValuePrecision, this.xAxisAnnotationFormatLabel, this.yAxisAnnotationFormatLabel);
	}
	private fetchPath(linePool: Pool$1<Path>, lineCount: number, i: number, f: CrosshairLayerFrame, isVertical: boolean): Tuple$2<Path, number> {
		let line = linePool.item(lineCount);
		lineCount++;
		if (isVertical) {
			line._stroke = f.verticalLineBrushes._inner[i];
			line._fill = f.verticalLineBrushes._inner[i];
		} else {
			line._stroke = f.horizontalLineBrushes._inner[i];
			line._fill = f.horizontalLineBrushes._inner[i];
		}
		line.strokeThickness = this.thickness;
		line.strokeDashArray = this.dashArray;
		line.strokeDashCap = <number>this.dashCap;
		return new Tuple$2<Path, number>((<any>Path).$type, Number_$type, line, lineCount);
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		let linePool = this.crosshairView.linePool;
		let f = <CrosshairLayerFrame>frame;
		let count: number = f.lineHeights.count;
		let lineCount: number = 0;
		let left = view.viewport.left;
		let right = view.viewport.right;
		let top = view.viewport.top;
		let bottom = view.viewport.bottom;
		let vertVisible = this.verticalLineVisibility == Visibility.Visible;
		let horizVisible = this.horizontalLineVisibility == Visibility.Visible;
		for (let i = 0; i < count; i++) {
			let yPos = Math.floor(f.lineHeights._inner[i]);
			let xPos = Math.floor(f.lineWidths._inner[i]);
			let line: Path = null;
			if (vertVisible) {
				if (isNaN_(yPos)) {
					continue;
				}
				let ret = this.fetchPath(linePool, lineCount, i, f, true);
				line = ret.item1;
				lineCount = ret.item2;
				let pg: PathGeometry = new PathGeometry();
				let pf: PathFigure = new PathFigure();
				pf._startPoint = <Point>{ $type: Point_$type, x: xPos, y: top };
				let ls: LineSegment = new LineSegment(1);
				ls.point = <Point>{ $type: Point_$type, x: xPos, y: bottom };
				pf._segments.add(ls);
				pg.figures.add(pf);
				line.data = pg;
			}
			if (horizVisible) {
				if (isNaN_(yPos)) {
					continue;
				}
				let ret1 = this.fetchPath(linePool, lineCount, i, f, false);
				line = ret1.item1;
				lineCount = ret1.item2;
				let pg1: PathGeometry = new PathGeometry();
				let pf1: PathFigure = new PathFigure();
				pf1._startPoint = <Point>{ $type: Point_$type, x: left, y: yPos };
				let ls1: LineSegment = new LineSegment(1);
				ls1.point = <Point>{ $type: Point_$type, x: right, y: yPos };
				pf1._segments.add(ls1);
				pg1.figures.add(pf1);
				line.data = pg1;
			}
		}
		linePool.count = lineCount;
		if (this.animationActive()) {
			this.updateAnnotations(<CrosshairLayerFrame>this.transitionFrame, true);
		} else {
			this.updateAnnotations(<CrosshairLayerFrame>this.currentFrame, false);
		}
	}
	protected requiresPrepare(): boolean {
		return true;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CrosshairLayer.horizontalLineVisibilityPropertyName:
			this.renderSeries(true);
			break;

			case CrosshairLayer.verticalLineVisibilityPropertyName:
			this.renderSeries(true);
			break;

			case CrosshairLayer.targetSeriesPropertyName:
			this.renderSeries(true);
			break;

			case CrosshairLayer.isAxisAnnotationEnabledPropertyName:

			case CrosshairLayer.xAxisAnnotationBackgroundPropertyName:

			case CrosshairLayer.xAxisAnnotationOutlinePropertyName:

			case CrosshairLayer.xAxisAnnotationPaddingLeftPropertyName:

			case CrosshairLayer.xAxisAnnotationPaddingTopPropertyName:

			case CrosshairLayer.xAxisAnnotationPaddingRightPropertyName:

			case CrosshairLayer.xAxisAnnotationPaddingBottomPropertyName:

			case CrosshairLayer.xAxisAnnotationStrokeThicknessPropertyName:

			case CrosshairLayer.xAxisAnnotationTextColorPropertyName:

			case CrosshairLayer.yAxisAnnotationBackgroundPropertyName:

			case CrosshairLayer.yAxisAnnotationOutlinePropertyName:

			case CrosshairLayer.yAxisAnnotationPaddingLeftPropertyName:

			case CrosshairLayer.yAxisAnnotationPaddingTopPropertyName:

			case CrosshairLayer.yAxisAnnotationPaddingRightPropertyName:

			case CrosshairLayer.yAxisAnnotationPaddingBottomPropertyName:

			case CrosshairLayer.yAxisAnnotationStrokeThicknessPropertyName:

			case CrosshairLayer.yAxisAnnotationTextColorPropertyName:

			case CrosshairLayer.horizontalLineStrokePropertyName:

			case CrosshairLayer.verticalLineStrokePropertyName:

			case CrosshairLayer.useInterpolationPropertyName:
			this.renderSeries(true);
			break;

		}

	}
}

/**
 * @hidden 
 */
export class CrosshairLayerView extends AnnotationLayerView {
	static $t: Type = markType(CrosshairLayerView, 'CrosshairLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: CrosshairLayer) {
		super(model);
		this.crosshairModel = model;
		this.visibleLines = new List$1<Path>((<any>Path).$type, 0);
	}
	private _crosshairModel: CrosshairLayer = null;
	protected get crosshairModel(): CrosshairLayer {
		return this._crosshairModel;
	}
	protected set crosshairModel(value: CrosshairLayer) {
		this._crosshairModel = value;
	}
	private _linePool: Pool$1<Path> = null;
	get linePool(): Pool$1<Path> {
		return this._linePool;
	}
	set linePool(value: Pool$1<Path>) {
		this._linePool = value;
	}
	private _visibleLines: List$1<Path> = null;
	protected get visibleLines(): List$1<Path> {
		return this._visibleLines;
	}
	protected set visibleLines(value: List$1<Path>) {
		this._visibleLines = value;
	}
	onInit(): void {
		super.onInit();
		this.linePool = ((() => {
			let $ret = new Pool$1<Path>((<any>Path).$type);
			$ret.create = runOn(this, this.lineCreate);
			$ret.activate = runOn(this, this.lineActivate);
			$ret.disactivate = runOn(this, this.lineDisactivate);
			$ret.destroy = runOn(this, this.lineDestroy);
			return $ret;
		})());
	}
	private lineCreate(): Path {
		let line: Path = new Path();
		line.renderTransform = new TranslateTransform();
		this.visibleLines.add(line);
		return line;
	}
	private lineActivate(line: Path): void {
		line._visibility = Visibility.Visible;
	}
	private lineDisactivate(line: Path): void {
		line._visibility = Visibility.Collapsed;
	}
	private lineDestroy(line: Path): void {
		this.visibleLines.remove(line);
	}
	setLineHeight(line: Path, y: number, left: number, right: number): void {
		if (line.data == null || (<LineGeometry>line.data).endPoint.x != right || (<LineGeometry>line.data).startPoint.x != left) {
			let altGeo = ((() => {
				let $ret = new LineGeometry();
				$ret.startPoint = <Point>{ $type: Point_$type, x: left, y: y };
				$ret.endPoint = <Point>{ $type: Point_$type, x: right, y: y };
				return $ret;
			})());
			line.data = altGeo;
		}
	}
	getLightenedBrush(brush: Brush): Brush {
		if (brush == null) {
			return brush;
		}
		return BrushUtil.getLightened(brush, 0.1);
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender && !isHitContext) {
			for (let i = 0; i < this.visibleLines.count; i++) {
				let line = this.visibleLines._inner[i];
				if (line._visibility == Visibility.Visible) {
					context.renderPath(line);
				}
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		for (let i = 0; i < this.visibleLines.count; i++) {
			this.model.seriesVisualDataManager.exportPathData(svd, this.visibleLines._inner[i], "crosshairLine", <string[]>[ "Main", "Crosshair" ]);
		}
	}
}


