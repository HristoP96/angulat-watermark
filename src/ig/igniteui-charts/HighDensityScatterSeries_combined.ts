/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { NumericXAxis } from "./NumericXAxis";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { NumericYAxis } from "./NumericYAxis";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Color } from "igniteui-core/Color";
import { ScatterFrame } from "./ScatterFrame";
import { KDTree2D } from "./KDTree2D";
import { Type, Base, EventArgs, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Point, String_$type, Boolean_$type, typeGetValue, Number_$type, runOn, delegateRemove, typeCast, delegateCombine, markType, toNullable } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Rect } from "igniteui-core/Rect";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { Axis } from "./Axis";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { SeriesView } from "./SeriesView";
import { NumericAxisBase } from "./NumericAxisBase";
import { List$1 } from "igniteui-core/List$1";
import { KDPointData } from "./KDPointData";
import { ScalerParams } from "./ScalerParams";
import { ProgressiveLoadStatusEventArgs } from "./ProgressiveLoadStatusEventArgs";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { SearchArgs } from "./SearchArgs";
import { KDTreeNode2D } from "./KDTreeNode2D";
import { SearchData } from "./SearchData";
import { SeriesViewer } from "./SeriesViewer";
import { SyncLink } from "./SyncLink";
import { AxisRange } from "./AxisRange";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_, isInfinity, logBase, intDivide } from "igniteui-core/number";
import { boxArray$1, arrayShallowClone } from "igniteui-core/array";
import { dateNow } from "igniteui-core/date";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Rectangle } from "igniteui-core/Rectangle";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class HighDensityScatterSeries extends Series {
	static $t: Type = markType(HighDensityScatterSeries, 'HighDensityScatterSeries', (<any>Series).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>HighDensityScatterSeries).$type;
		this.mouseOverEnabled = false;
	}
	protected get_isScatter(): boolean {
		return true;
	}
	get xAxis(): NumericXAxis {
		return <NumericXAxis>this.getValue(HighDensityScatterSeries.xAxisProperty);
	}
	set xAxis(value: NumericXAxis) {
		this.setValue(HighDensityScatterSeries.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.xAxisPropertyName, (<any>NumericXAxis).$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(HighDensityScatterSeries.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(HighDensityScatterSeries.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.yAxisPropertyName, e.oldValue, e.newValue)));
	get xMemberPath(): string {
		return <string>this.getValue(HighDensityScatterSeries.xMemberPathProperty);
	}
	set xMemberPath(value: string) {
		this.setValue(HighDensityScatterSeries.xMemberPathProperty, value);
	}
	static readonly xMemberPathPropertyName: string = "XMemberPath";
	static readonly xMemberPathProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.xMemberPathPropertyName, String_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.xMemberPathPropertyName, e.oldValue, e.newValue)));
	protected get xColumn(): IFastItemColumn$1<number> {
		return this._xColumn;
	}
	protected set xColumn(value: IFastItemColumn$1<number>) {
		if (this._xColumn != value) {
			let oldXColumn: IFastItemColumn$1<number> = this.xColumn;
			this._xColumn = value;
			this.raisePropertyChanged(HighDensityScatterSeries.xColumnPropertyName, oldXColumn, this.xColumn);
		}
	}
	private _xColumn: IFastItemColumn$1<number> = null;
	static readonly xColumnPropertyName: string = "XColumn";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == HighDensityScatterSeries.xMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.xMemberPath);
		}
		if (resolved == HighDensityScatterSeries.yMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.yMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	get yMemberPath(): string {
		return <string>this.getValue(HighDensityScatterSeries.yMemberPathProperty);
	}
	set yMemberPath(value: string) {
		this.setValue(HighDensityScatterSeries.yMemberPathProperty, value);
	}
	static readonly yMemberPathPropertyName: string = "YMemberPath";
	static readonly yMemberPathProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.yMemberPathPropertyName, String_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.yMemberPathPropertyName, e.oldValue, e.newValue)));
	protected get yColumn(): IFastItemColumn$1<number> {
		return this._yColumn;
	}
	protected set yColumn(value: IFastItemColumn$1<number>) {
		if (this._yColumn != value) {
			let oldYColumn: IFastItemColumn$1<number> = this.yColumn;
			this._yColumn = value;
			this.raisePropertyChanged(HighDensityScatterSeries.yColumnPropertyName, oldYColumn, this.yColumn);
		}
	}
	private _yColumn: IFastItemColumn$1<number> = null;
	static readonly yColumnPropertyName: string = "YColumn";
	get useBruteForce(): boolean {
		return <boolean>this.getValue(HighDensityScatterSeries.useBruteForceProperty);
	}
	set useBruteForce(value: boolean) {
		this.setValue(HighDensityScatterSeries.useBruteForceProperty, value);
	}
	static readonly useBruteForcePropertyName: string = "UseBruteForce";
	static readonly useBruteForceProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.useBruteForcePropertyName, Boolean_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.useBruteForcePropertyName, e.oldValue, e.newValue)));
	get progressiveLoad(): boolean {
		return <boolean>this.getValue(HighDensityScatterSeries.progressiveLoadProperty);
	}
	set progressiveLoad(value: boolean) {
		this.setValue(HighDensityScatterSeries.progressiveLoadProperty, value);
	}
	static readonly progressiveLoadPropertyName: string = "ProgressiveLoad";
	static readonly progressiveLoadProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.progressiveLoadPropertyName, Boolean_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.progressiveLoadPropertyName, e.oldValue, e.newValue)));
	get maxRenderDepth(): number {
		return typeGetValue(this.getValue(HighDensityScatterSeries.maxRenderDepthProperty));
	}
	set maxRenderDepth(value: number) {
		this.setValue(HighDensityScatterSeries.maxRenderDepthProperty, value);
	}
	static readonly maxRenderDepthPropertyName: string = "MaxRenderDepth";
	static readonly maxRenderDepthProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.maxRenderDepthPropertyName, Number_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, 0x7FFFFFFF, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.maxRenderDepthPropertyName, e.oldValue, e.newValue)));
	get heatMinimum(): number {
		return <number>this.getValue(HighDensityScatterSeries.heatMinimumProperty);
	}
	set heatMinimum(value: number) {
		this.setValue(HighDensityScatterSeries.heatMinimumProperty, value);
	}
	static readonly heatMinimumPropertyName: string = "HeatMinimum";
	static readonly heatMinimumProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.heatMinimumPropertyName, Number_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.heatMinimumPropertyName, e.oldValue, e.newValue)));
	get heatMaximum(): number {
		return <number>this.getValue(HighDensityScatterSeries.heatMaximumProperty);
	}
	set heatMaximum(value: number) {
		this.setValue(HighDensityScatterSeries.heatMaximumProperty, value);
	}
	static readonly heatMaximumPropertyName: string = "HeatMaximum";
	static readonly heatMaximumProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.heatMaximumPropertyName, Number_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, 50, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.heatMaximumPropertyName, e.oldValue, e.newValue)));
	get heatMinimumColor(): Color {
		return <Color>this.getValue(HighDensityScatterSeries.heatMinimumColorProperty);
	}
	set heatMinimumColor(value: Color) {
		this.setValue(HighDensityScatterSeries.heatMinimumColorProperty, value);
	}
	static readonly heatMinimumColorPropertyName: string = "HeatMinimumColor";
	static readonly heatMinimumColorProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.heatMinimumColorPropertyName, (<any>Color).$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.heatMinimumColorPropertyName, e.oldValue, e.newValue)));
	get heatMaximumColor(): Color {
		return <Color>this.getValue(HighDensityScatterSeries.heatMaximumColorProperty);
	}
	set heatMaximumColor(value: Color) {
		this.setValue(HighDensityScatterSeries.heatMaximumColorProperty, value);
	}
	static readonly heatMaximumColorPropertyName: string = "HeatMaximumColor";
	static readonly heatMaximumColorProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.heatMaximumColorPropertyName, (<any>Color).$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.heatMaximumColorPropertyName, e.oldValue, e.newValue)));
	get pointExtent(): number {
		return typeGetValue(this.getValue(HighDensityScatterSeries.pointExtentProperty));
	}
	set pointExtent(value: number) {
		this.setValue(HighDensityScatterSeries.pointExtentProperty, value);
	}
	static readonly pointExtentPropertyName: string = "PointExtent";
	static readonly pointExtentProperty: DependencyProperty = DependencyProperty.register(HighDensityScatterSeries.pointExtentPropertyName, Number_$type, (<any>HighDensityScatterSeries).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HighDensityScatterSeries>sender).raisePropertyChanged(HighDensityScatterSeries.pointExtentPropertyName, e.oldValue, e.newValue)));
	private resetTree(): void {
		if (this._tree == null) {
			return;
		}
		this._tree.cancelLoad();
		let $t = this._tree;
		$t.progressiveThunkCompleted = delegateRemove($t.progressiveThunkCompleted, runOn(this, this._tree_ProgressiveThunkCompleted));
		this._tree = null;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			if (this.seriesViewer != null) {
				let ev = this.getEffectiveViewport1(this.view);
				this._hasEffectiveViewport = !ev.isEmpty;
			}
			break;

			case Series.fastItemsSourcePropertyName:
			this.resetTree();
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.xColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.yColumn);
				this.xColumn = null;
				this.yColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.xColumn = this.registerDoubleColumn(this.xMemberPath);
				this.yColumn = this.registerDoubleColumn(this.yMemberPath);
			}
			if ((this.yAxis != null && !this.yAxis.updateRange()) || (this.xAxis != null && !this.xAxis.updateRange())) {
				this.renderSeries(false);
			}
			this.notifyThumbnailDataChanged();
			break;

			case HighDensityScatterSeries.xAxisPropertyName:
			let oldAxis = this._xAxis;
			this._xAxis = this.xAxis;
			this.resetTree();
			if (oldAxis != null) {
				oldAxis.rangeChanged = delegateRemove(oldAxis.rangeChanged, runOn(this, this.axis_RangeChanged));
			}
			if (this._xAxis != null) {
				let $t = this._xAxis;
				$t.rangeChanged = delegateCombine($t.rangeChanged, runOn(this, this.axis_RangeChanged));
			}
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if ((this.xAxis != null && !this.xAxis.updateRange()) || (newValue == null && oldValue != null)) {
				this.renderSeries(false);
			}
			break;

			case HighDensityScatterSeries.yAxisPropertyName:
			let oldYAxis = this._yAxis;
			this._yAxis = this.yAxis;
			this.resetTree();
			if (oldYAxis != null) {
				oldYAxis.rangeChanged = delegateRemove(oldYAxis.rangeChanged, runOn(this, this.axis_RangeChanged));
			}
			if (this._yAxis != null) {
				let $t1 = this._yAxis;
				$t1.rangeChanged = delegateCombine($t1.rangeChanged, runOn(this, this.axis_RangeChanged));
			}
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if ((this.yAxis != null && !this.yAxis.updateRange()) || (newValue == null && oldValue != null)) {
				this.renderSeries(false);
			}
			break;

			case Series.mouseOverEnabledPropertyName:
			this._mouseOverEnabled = this.mouseOverEnabled;
			this.renderSeries(false);
			break;

			case HighDensityScatterSeries.xMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.xColumn);
				this.xColumn = this.registerDoubleColumn(this.xMemberPath);
			}
			break;

			case HighDensityScatterSeries.xColumnPropertyName:
			this.resetTree();
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.renderSeries(false);
			}
			this.notifyThumbnailDataChanged();
			break;

			case HighDensityScatterSeries.yMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.yColumn);
				this.yColumn = this.registerDoubleColumn(this.yMemberPath);
			}
			break;

			case HighDensityScatterSeries.yColumnPropertyName:
			this.resetTree();
			if (this.yAxis != null && !this.yAxis.updateRange()) {
				this.renderSeries(false);
			}
			this.notifyThumbnailDataChanged();
			break;

			case HighDensityScatterSeries.useBruteForcePropertyName:
			this.resetTree();
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case HighDensityScatterSeries.heatMinimumPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case HighDensityScatterSeries.heatMaximumPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case HighDensityScatterSeries.maxRenderDepthPropertyName:
			this.renderSeries(false);
			break;

			case HighDensityScatterSeries.heatMaximumColorPropertyName:

			case HighDensityScatterSeries.heatMinimumColorPropertyName:
			if (!this.superView.colorScaleValid(this.heatMinimumColor, this.heatMaximumColor)) {
				return;
			}
			this._minR = this.heatMinimumColor.r;
			this._minG = this.heatMinimumColor.g;
			this._minB = this.heatMinimumColor.b;
			this._maxR = this.heatMaximumColor.r;
			this._maxG = this.heatMaximumColor.g;
			this._maxB = this.heatMaximumColor.b;
			this._rangeR = this._maxR - this._minR;
			this._rangeG = this._maxG - this._minG;
			this._rangeB = this._maxB - this._minB;
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case HighDensityScatterSeries.pointExtentPropertyName:
			this._pointExtent = Math.max(typeGetValue(newValue) - 1, 0);
			this._drawExtent = this._pointExtent > 0;
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case HighDensityScatterSeries.progressiveLoadPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	canUseAsYAxis(axis: any): boolean {
		if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	canUseAsXAxis(axis: any): boolean {
		if (typeCast<NumericXAxis>((<any>NumericXAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	private axis_RangeChanged(sender: any, e: AxisRangeChangedEventArgs): void {
		this.resetTree();
		this.renderSeries(false);
	}
	private _pointExtent: number = 0;
	private _drawExtent: boolean = false;
	private _minR: number = 0;
	private _minG: number = 0;
	private _minB: number = 0;
	private _maxR: number = 255;
	private _maxG: number = 0;
	private _maxB: number = 0;
	private _rangeR: number = 255;
	private _rangeG: number = 0;
	private _rangeB: number = 0;
	private _tree: KDTree2D = null;
	private _scalerParamsX: ScalerParams = null;
	private _scalerParamsY: ScalerParams = null;
	private _xAxis: NumericXAxis = null;
	private _yAxis: NumericYAxis = null;
	private _mouseOverEnabled: boolean = false;
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let ret = super.validateSeries(viewportRect, windowRect, view);
		if (this.yAxis == null || this.xAxis == null || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null || this.yColumn == null || this.xColumn == null || this.yColumn.count < 1 || this.xColumn.count < 1 || this.yColumn.count != this.xColumn.count || this.xAxis.actualMinimumValue == this.xAxis.actualMaximumValue || this.yAxis.actualMinimumValue == this.yAxis.actualMaximumValue || this.viewport.isEmpty) {
			ret = false;
		}
		return ret;
	}
	private _progressiveStatus: number = 0;
	get progressiveStatus(): number {
		return this._progressiveStatus;
	}
	set progressiveStatus(value: number) {
		let oldValue = this._progressiveStatus;
		this._progressiveStatus = value;
		this.raisePropertyChanged("ProgressiveStatus", oldValue, this._progressiveStatus);
	}
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		this.doRender(animate, this.view);
	}
	private doRender(animate: boolean, view: SeriesView): void {
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		if (this._tree == null && !this.useBruteForce) {
			let points: List$1<KDPointData> = new List$1<KDPointData>((<any>KDPointData).$type, 2, this.xColumn.count);
			let xAxis = this.xAxis;
			let yAxis = this.yAxis;
			let window = new Rect(0, 0, 0, 1, 1);
			let viewport = new Rect(0, 0, 0, 1, 1);
			let xParams = new ScalerParams(1, window, viewport, xAxis.isInverted);
			let yParams = new ScalerParams(1, window, viewport, yAxis.isInverted);
			let xVal: number;
			let yVal: number;
			for (let i: number = 0; i < this.xColumn.count; i++) {
				xVal = xAxis.getScaledValue(this.xColumn.item(i), xParams);
				yVal = yAxis.getScaledValue(this.yColumn.item(i), yParams);
				if (!isNaN_(xVal) && !isNaN_(yVal) && !isInfinity(xVal) && !isInfinity(yVal)) {
					points.add(((() => {
						let $ret = new KDPointData();
						$ret.x = xVal;
						$ret.y = yVal;
						$ret.index = i;
						return $ret;
					})()));
				}
			}
			if (this.progressiveLoad) {
				this._currentLevel = 1;
				this._expectedLevels = <number>truncate(logBase(points.count, 2)) + 3;
				this.progressiveStatus = <number>truncate(((this._currentLevel / <number>this._expectedLevels) * 100));
				if (this.progressiveLoadStatusChanged != null) {
					this.progressiveLoadStatusChanged(this, new ProgressiveLoadStatusEventArgs(this.progressiveStatus));
				}
				this._tree = KDTree2D.getProgressive(points.toArray(), 1);
				let $t = this._tree;
				$t.progressiveThunkCompleted = delegateCombine($t.progressiveThunkCompleted, runOn(this, this._tree_ProgressiveThunkCompleted));
				if (!this._tree.progressiveStep(this.renderer)) {
					let $t1 = this._tree;
					$t1.progressiveThunkCompleted = delegateRemove($t1.progressiveThunkCompleted, runOn(this, this._tree_ProgressiveThunkCompleted));
				}
				this.notifyThumbnailAppearanceChanged();
			} else {
				let before: Date = dateNow();
				this._tree = new KDTree2D(0, points.toArray(), 1);
				let after: Date = dateNow();
			}
		}
		if (this.progressiveLoad && !this.useBruteForce) {
			this.lockedRender(view);
		} else {
			this.renderBitmap(view);
		}
	}
	private _resolution: number = 0;
	private _expectedLevels: number = 0;
	private _currentLevel: number = 0;
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		this.resetTree();
		let refresh: boolean = false;
		if (this.xAxis != null && !this.xAxis.updateRange()) {
			refresh = true;
		}
		if (this.yAxis != null && !this.yAxis.updateRange()) {
			refresh = true;
		}
		if (refresh) {
			this.renderSeries(false);
		}
		this.notifyThumbnailDataChanged();
	}
	private assertMouseOver(view: SeriesView): void {
		let hdView = <HighDensityScatterSeriesView>view;
		let pixelCount = this._imageWidth * this._imageHeight;
		if (this._mouseOverEnabled) {
			if (this._itemIndexes == null || this._itemIndexes.length != pixelCount) {
				this._itemIndexes = <number[]>new Array(pixelCount);
				for (let i = 0; i < pixelCount; i++) {
					this._itemIndexes[i] = 0;
				}
			} else {
				for (let i1 = 0; i1 < pixelCount; i1++) {
					this._itemIndexes[i1] = 0;
				}
			}
		}
	}
	private renderBitmap(view: SeriesView): void {
		let window: Rect;
		let viewport: Rect;
		let oldIndexes: number[] = null;
		if (view.isThumbnailView) {
			oldIndexes = this._itemIndexes;
		}
		let $ret = view.getViewInfo(viewport, window);
		viewport = $ret.p0;
		window = $ret.p1;
		let superView = <HighDensityScatterSeriesView>view;
		let effectiveViewport = this.getEffectiveViewport1(view);
		this._scalerParamsX = new ScalerParams(0, window, viewport, this._xAxis.isInverted, effectiveViewport);
		this._scalerParamsY = new ScalerParams(0, window, viewport, this._yAxis.isInverted, effectiveViewport);
		this.assertBitmap(view);
		this.assertMouseOver(view);
		let pixelCount = this._imageWidth * this._imageHeight;
		if (this._values == null || this._values.length != pixelCount) {
			this._values = <number[]>new Array(pixelCount);
			this._alphas = <number[]>new Array(pixelCount);
		}
		let valuesLength = this._values.length;
		let values = this._values;
		let alphas = this._alphas;
		for (let i = 0; i < valuesLength; i++) {
			values[i] = 0;
			alphas[i] = 0;
		}
		this._resolution = <number>truncate(Math.round(this.resolution));
		this._pixels = superView.getPixelBuffer();
		let pixelsLength = this._pixels.length;
		let pixels = this._pixels;
		for (let i1 = 0; i1 < pixelsLength; i1++) {
			pixels[i1] = 0;
		}
		let hmin = this.heatMinimum;
		let hmax = this.heatMaximum;
		if (isNaN_(hmin) || isInfinity(hmin)) {
			hmin = 0;
		}
		if (isNaN_(hmax) || isInfinity(hmax)) {
			hmax = 50;
		}
		this._heatMinimum = Math.min(hmin, hmax);
		this._heatMaximum = Math.max(hmin, hmax);
		if (this._heatMinimum < 0) {
			this._heatMinimum = 0;
		}
		if (this._heatMaximum < 0) {
			this._heatMaximum = 0;
		}
		this._heatRange = this._heatMaximum - this._heatMinimum;
		if (this.useBruteForce) {
			this.bruteForceRender(view);
		} else {
			this.useTree(view);
		}
		superView.updateBitmap();
		if (view.isThumbnailView) {
			this._itemIndexes = oldIndexes;
			this.superView.updateImageValues();
		}
	}
	private lockedRender(view: SeriesView): void {
		if (this._tree == null) {
			return;
		}
		this.renderBitmap(view);
	}
	progressiveLoadStatusChanged: (sender: any, e: ProgressiveLoadStatusEventArgs) => void = null;
	private _tree_ProgressiveThunkCompleted(sender: any, e: EventArgs): void {
		this.superView.defer(() => {
			if (this._currentLevel < this._expectedLevels - 1) {
				this._currentLevel++;
			}
			this.progressiveStatus = <number>truncate(((this._currentLevel / <number>this._expectedLevels) * 100));
			if (this.progressiveLoadStatusChanged != null) {
				this.progressiveLoadStatusChanged(this, new ProgressiveLoadStatusEventArgs(this.progressiveStatus));
			}
			this.lockedRender(this.view);
			this.notifyThumbnailAppearanceChanged();
			if (this._tree != null) {
				if (!this._tree.progressiveStep(this.renderer)) {
					let $t = this._tree;
					$t.progressiveThunkCompleted = delegateRemove($t.progressiveThunkCompleted, runOn(this, this._tree_ProgressiveThunkCompleted));
					this.progressiveStatus = 100;
					if (this.progressiveLoadStatusChanged != null) {
						this.progressiveLoadStatusChanged(this, new ProgressiveLoadStatusEventArgs(this.progressiveStatus));
					}
				}
			}
		});
	}
	private bruteForceRender(view: SeriesView): void {
		let xValues: number[] = <number[]>arrayShallowClone(this.xColumn.asArray());
		this.xAxis.getScaledValueList(boxArray$1<number>(xValues), 0, xValues.length, this._scalerParamsX);
		let yValues: number[] = <number[]>arrayShallowClone(this.yColumn.asArray());
		this._rendered = 0;
		let pointExtent = this._pointExtent;
		let drawExtent = this._drawExtent;
		let valLength = this._values.length;
		this.yAxis.getScaledValueList(boxArray$1<number>(yValues), 0, yValues.length, this._scalerParamsY);
		let color: number = 255 << 24 | <number>truncate(this._minR) << 16 | <number>truncate(this._minG) << 8 | <number>truncate(this._minB);
		for (let i = 0; i < xValues.length; i++) {
			let posX: number = <number>truncate(xValues[i]);
			let posY: number = <number>truncate(yValues[i]);
			posX = <number>truncate(Math.floor(posX));
			posY = <number>truncate(Math.floor(posY));
			if (posX < 0 || posX >= this._imageWidth || posY < 0 || posY >= this._imageHeight) {
				continue;
			}
			if (drawExtent) {
				let minX: number = posX - pointExtent;
				let maxX: number = posX + pointExtent;
				maxX = maxX > (this._imageWidth - 1) ? (this._imageWidth - 1) : maxX;
				minX = minX < 0 ? 0 : minX;
				let maxY: number = posY + pointExtent;
				let minY: number = posY - pointExtent;
				for (let x: number = minX; x <= maxX; x++) {
					for (let y: number = minY; y <= maxY; y++) {
						let pos = (y * this._imageWidth) + x;
						if (pos < 0 || pos > valLength - 1) {
							continue;
						}
						this._values[pos] = this._values[pos] + 1;
						this._alphas[pos] = 1;
						this._rendered++;
						if (this._mouseOverEnabled) {
							this._itemIndexes[pos] = i + 1;
						}
					}
				}
			} else {
				let pos1 = (posY * this._imageWidth) + posX;
				this._values[pos1] = this._values[pos1] + 1;
				this._alphas[pos1] = 1;
				this._rendered++;
				if (this._mouseOverEnabled) {
					this._itemIndexes[pos1] = i + 1;
				}
			}
		}
		this.renderImage();
	}
	private _nodes: List$1<KDTreeNode2D> = null;
	private useTree(view: SeriesView): void {
		let viewport: Rect;
		let window: Rect;
		let $ret = view.getViewInfo(viewport, window);
		viewport = $ret.p0;
		window = $ret.p1;
		if (this._tree == null) {
			return;
		}
		if (this._nodes == null) {
			this._nodes = new List$1<KDTreeNode2D>((<any>KDTreeNode2D).$type, 2, <number>truncate(Math.round(viewport.width * viewport.height)));
		} else {
			this._nodes.clear();
		}
		let minX: number = window.left;
		let maxX: number = window.right;
		let minY: number = window.top;
		let maxY: number = window.bottom;
		this._windowTop = window.top;
		this._windowHeight = window.height;
		this._windowLeft = window.left;
		this._windowWidth = window.width;
		this._viewportTop = viewport.top;
		this._viewportHeight = viewport.height;
		this._viewportLeft = viewport.left;
		this._viewportWidth = viewport.width;
		let effectiveViewport = this.getEffectiveViewport1(view);
		this._effectiveViewportLeft = (effectiveViewport.left - this._viewportLeft) / this._viewportWidth;
		this._effectiveViewportTop = (effectiveViewport.top - this._viewportTop) / this._viewportHeight;
		let effectiveRight = (effectiveViewport.right - this._viewportLeft) / this._viewportWidth;
		this._effectiveViewportWidth = effectiveRight - this._effectiveViewportLeft;
		let effectiveBottom = (effectiveViewport.bottom - this._viewportTop) / this._viewportHeight;
		this._effectiveViewportHeight = effectiveBottom - this._effectiveViewportTop;
		if (this._hasEffectiveViewport) {
			minX = (minX - this._effectiveViewportLeft) / this._effectiveViewportWidth;
			maxX = (maxX - this._effectiveViewportLeft) / this._effectiveViewportWidth;
			minY = (minY - this._effectiveViewportTop) / this._effectiveViewportHeight;
			maxY = (maxY - this._effectiveViewportTop) / this._effectiveViewportHeight;
		}
		let onePixelX: number = this.resolution / viewport.width * window.width;
		let onePixelY: number = this.resolution / viewport.height * window.height;
		let pizelSize: number = Math.min(onePixelX, onePixelY);
		let args: SearchArgs = ((() => {
			let $ret = new SearchArgs();
			$ret.minX = minX;
			$ret.maxX = maxX;
			$ret.minY = minY;
			$ret.maxY = maxY;
			$ret.pixelSizeX = onePixelX;
			$ret.pixelSizeY = onePixelY;
			$ret.maxRenderDepth = this.maxRenderDepth;
			return $ret;
		})());
		this._tree.getVisible(this._nodes, args, 0, 1, 0, 1);
		let current: KDTreeNode2D;
		this._rendered = 0;
		for (let i = 0; i < this._nodes.count; i++) {
			current = this._nodes._inner[i];
			this.renderNode(current);
		}
		this.renderImage();
	}
	private _heatMinimum: number = 0;
	private _heatMaximum: number = 0;
	private _heatRange: number = 0;
	private _viewportTop: number = 0;
	private _viewportHeight: number = 0;
	private _viewportLeft: number = 0;
	private _viewportWidth: number = 0;
	private _windowLeft: number = 0;
	private _windowWidth: number = 0;
	private _windowTop: number = 0;
	private _windowHeight: number = 0;
	private _effectiveViewportLeft: number = 0;
	private _effectiveViewportTop: number = 0;
	private _effectiveViewportWidth: number = 0;
	private _effectiveViewportHeight: number = 0;
	private renderNode(current: KDTreeNode2D): void {
		if (current.unfinished) {
			return;
		}
		let pixelCutoff: boolean = current.searchData != null && current.searchData.isCutoff;
		let otherCount = current.otherPoints == null ? 0 : current.otherPoints.length;
		let val = <number>(current.descendantCount - otherCount) + 1;
		if (pixelCutoff && val > 0) {
		} else {
			val = 1;
		}
		this.renderPointData(current.median, val, pixelCutoff, current.searchData);
		if (otherCount > 0 && !pixelCutoff) {
			let other: KDPointData;
			for (let i = 0; i < otherCount; i++) {
				other = current.otherPoints[i];
				this.renderPointData(other, val, false, current.searchData);
			}
		}
		if (current.searchData != null) {
			current.searchData.isCutoff = false;
		}
	}
	scrollIntoView(item: any): boolean {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.seriesViewer != null ? this.seriesViewer.viewportRect : Rect.empty;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let cx: number = this.xAxis != null && this.xColumn != null && index < this.xColumn.count ? this.xAxis.getScaledValue(this.xColumn.item(index), xParams) : NaN;
		let cy: number = this.yAxis != null && this.yColumn != null && index < this.yColumn.count ? this.yAxis.getScaledValue(this.yColumn.item(index), yParams) : NaN;
		if (!isNaN_(cx)) {
			if (cx < windowRect.left + 0.1 * windowRect.width) {
				cx = cx + 0.4 * windowRect.width;
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			if (cx > windowRect.right - 0.1 * windowRect.width) {
				cx = cx - 0.4 * windowRect.width;
				windowRect.x = cx - 0.5 * windowRect.width;
			}
		}
		if (!isNaN_(cy)) {
			if (cy < windowRect.top + 0.1 * windowRect.height) {
				cy = cy + 0.4 * windowRect.height;
				windowRect.y = cy - 0.5 * windowRect.height;
			}
			if (cy > windowRect.bottom - 0.1 * windowRect.height) {
				cy = cy - 0.4 * windowRect.height;
				windowRect.y = cy - 0.5 * windowRect.height;
			}
		}
		if (this.syncLink != null) {
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	private renderPointData(pointData: KDPointData, p: number, isCutoff: boolean, searchData: SearchData): void {
		let color: number = this.getColorFromValue(p);
		let index = pointData.index;
		let pointExtent = this._pointExtent;
		if (isCutoff) {
			let minXVal: number = searchData.minX;
			let maxXVal: number = searchData.maxX;
			let minYVal: number = searchData.minY;
			let maxYVal: number = searchData.maxY;
			if (this._hasEffectiveViewport) {
				minXVal = this._effectiveViewportLeft + this._effectiveViewportWidth * minXVal;
				maxXVal = this._effectiveViewportLeft + this._effectiveViewportWidth * maxXVal;
				minYVal = this._effectiveViewportTop + this._effectiveViewportHeight * minYVal;
				maxYVal = this._effectiveViewportTop + this._effectiveViewportHeight * maxYVal;
			}
			let minX: number = <number>truncate((this._viewportLeft + this._viewportWidth * (minXVal - this._windowLeft) / this._windowWidth));
			let maxX: number = <number>truncate((this._viewportLeft + this._viewportWidth * (maxXVal - this._windowLeft) / this._windowWidth));
			let minY: number = <number>truncate((this._viewportTop + this._viewportHeight * (minYVal - this._windowTop) / this._windowHeight));
			let maxY: number = <number>truncate((this._viewportTop + this._viewportHeight * (maxYVal - this._windowTop) / this._windowHeight));
			minX = <number>truncate(Math.floor(minX));
			maxX = <number>truncate(Math.floor(maxX));
			minY = <number>truncate(Math.floor(minY));
			maxY = <number>truncate(Math.floor(maxY));
			if (this._drawExtent) {
				minX -= pointExtent;
				maxX += pointExtent;
				minY -= pointExtent;
				maxY += pointExtent;
			}
			let area: number = ((maxX - minX) + 1) * ((maxY - minY) + 1);
			let dens: number = p / area;
			let alpha: number = dens;
			for (let i: number = minX; i <= maxX; i++) {
				for (let j: number = minY; j <= maxY; j++) {
					this.renderPixel(index, i, j, dens, alpha);
				}
			}
		} else {
			let xVal: number = pointData.x;
			let yVal: number = pointData.y;
			if (this._hasEffectiveViewport) {
				xVal = this._effectiveViewportLeft + this._effectiveViewportWidth * xVal;
				yVal = this._effectiveViewportTop + this._effectiveViewportHeight * yVal;
			}
			let posX = <number>truncate((this._viewportLeft + this._viewportWidth * (xVal - this._windowLeft) / this._windowWidth));
			let posY = <number>truncate((this._viewportTop + this._viewportHeight * (yVal - this._windowTop) / this._windowHeight));
			posX = <number>truncate(Math.floor(posX));
			posY = <number>truncate(Math.floor(posY));
			if (this._drawExtent) {
				let minX1: number = posX - pointExtent;
				let maxX1: number = posX + pointExtent;
				let maxY1: number = posY + pointExtent;
				let minY1: number = posY - pointExtent;
				let area1: number = ((maxX1 - minX1) + 1) * ((maxY1 - minY1) + 1);
				let dens1: number = p / area1;
				let alpha1: number = dens1;
				for (let i1: number = minX1; i1 <= maxX1; i1++) {
					for (let j1: number = minY1; j1 <= maxY1; j1++) {
						this.renderPixel(index, i1, j1, dens1, alpha1);
					}
				}
			} else {
				this.renderPixel(index, posX, posY, p, 1);
			}
		}
	}
	private getAlphaColorFromValue(p: number, alpha: number): number {
		return <number>truncate((Math.floor(255 * alpha))) << 24 | <number>truncate(Math.floor(alpha * (this._minR + p * this._rangeR))) << 16 | <number>truncate(Math.floor(alpha * (this._minG + p * this._rangeG))) << 8 | <number>truncate(Math.floor(alpha * (this._minB + p * this._rangeB)));
	}
	private getColorFromValue(p: number): number {
		return 255 << 24 | <number>truncate(Math.floor((this._minR + p * this._rangeR))) << 16 | <number>truncate(Math.floor((this._minG + p * this._rangeG))) << 8 | <number>truncate(Math.floor((this._minB + p * this._rangeB)));
	}
	private getValueFromColor(color: number): number {
		return (color >> 24 & 255) / 255;
	}
	private renderPixel(index: number, posX: number, posY: number, p: number, alpha: number): void {
		if (posX < 0 || posX >= this._imageWidth || posY < 0 || posY >= this._imageHeight) {
			return;
		}
		let pos = (posY * this._imageWidth) + posX;
		this._values[pos] = this._values[pos] + p;
		this._alphas[pos] = this._alphas[pos] + alpha;
		if (this._mouseOverEnabled) {
			this._itemIndexes[pos] = index + 1;
		}
		this._rendered += <number>truncate(p);
	}
	private renderImage(): void {
		let val: number = 0;
		let alpha: number = 0;
		let heatRange = this._heatRange;
		let heatMinimum = this._heatMinimum;
		let heatMaximum = this._heatMaximum;
		let valuesLength: number = this._values.length;
		let values = this._values;
		let alphas = this._alphas;
		let pixels = this._pixels;
		let lastVal: number = NaN;
		let lastAlpha: number = NaN;
		let color: number = 0;
		let pixelPos: number = 0;
		for (let i = 0; i < valuesLength; i++) {
			val = values[i];
			if (val != 0) {
				alpha = alphas[i];
				if (val >= heatMaximum) {
					val = 1;
				} else if (val <= heatMinimum) {
					val = 0;
				} else {
					val = (val - heatMinimum) / (heatRange);
				}
				if (alpha > 1) {
					alpha = 1;
				}
				if (alpha < 0.2) {
					alpha = 0.2;
				}
				if (lastVal != val || lastAlpha != alpha) {
					color = this.getAlphaColorFromValue(val, alpha);
					lastVal = val;
					lastAlpha = alpha;
				}
				pixels[pixelPos] = color >> 16 & 255;
				pixels[pixelPos + 1] = color >> 8 & 255;
				pixels[pixelPos + 2] = color & 255;
				pixels[pixelPos + 3] = color >> 24 & 255;
			}
			pixelPos += 4;
		}
	}
	private _imageWidth: number = 0;
	private _imageHeight: number = 0;
	private _pixels: number[] = null;
	private _rendered: number = 0;
	private assertBitmap(view: SeriesView): void {
		let hdView = <HighDensityScatterSeriesView>view;
		hdView.assertBitmap();
	}
	protected createView(): SeriesView {
		return new HighDensityScatterSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.superView = <HighDensityScatterSeriesView>view;
	}
	private _superView: HighDensityScatterSeriesView;
	protected get superView(): HighDensityScatterSeriesView {
		return this._superView;
	}
	protected set superView(value: HighDensityScatterSeriesView) {
		this._superView = value;
	}
	getRange(axis: Axis): AxisRange {
		if (axis != null && axis == this.xAxis && this.xColumn != null) {
			return new AxisRange(this.xColumn.minimum, this.xColumn.maximum);
		}
		if (axis != null && axis == this.yAxis && this.yColumn != null) {
			return new AxisRange(this.yColumn.minimum, this.yColumn.maximum);
		}
		return null;
	}
	private _hasEffectiveViewport: boolean = false;
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		if (this.seriesViewer != null) {
			let ev = this.getEffectiveViewport1(this.view);
			this._hasEffectiveViewport = !ev.isEmpty;
		}
		this.renderSeries(false);
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	private _itemIndexes: number[] = null;
	private _values: number[] = null;
	private _alphas: number[] = null;
	getItem(world: Point): any {
		if (!this._mouseOverEnabled || this._itemIndexes == null || this.seriesViewer == null || this.fastItemsSource == null || this._itemIndexes.length != (this._imageWidth * this._imageHeight)) {
			return null;
		}
		let windowRect: Rect = this.seriesViewer.actualWindowRect;
		let windowX: number = (world.x - windowRect.left) / windowRect.width;
		let windowY: number = (world.y - windowRect.top) / windowRect.height;
		let pixelX: number = <number>truncate(Math.round(this.viewport.left + (this.viewport.width * windowX)));
		let pixelY: number = <number>truncate(Math.round(this.viewport.top + (this.viewport.height * windowY)));
		let index: number = this.tryGetIndex(pixelX, pixelY);
		if (index < 0 || index > this._itemIndexes.length - 1) {
			return null;
		}
		let itemIndex: number = this._itemIndexes[index] - 1;
		if (itemIndex < 0 || itemIndex > this.fastItemsSource.count) {
			return null;
		}
		return this.fastItemsSource.item(itemIndex);
	}
	private tryGetIndex(pixelX: number, pixelY: number): number {
		let index: number = (this._imageWidth * pixelY) + pixelX;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		let dist: number = 1;
		index = (this._imageWidth * (pixelY - dist)) + pixelX;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY + dist)) + pixelX;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY)) + pixelX - 1;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY)) + pixelX + 1;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY - dist)) + pixelX - 1;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY + dist)) + pixelX + 1;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY - dist)) + pixelX + 1;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		index = (this._imageWidth * (pixelY + dist)) + pixelX - 1;
		if (index > 0 && index < this._itemIndexes.length && this._itemIndexes[index] > 0) {
			return index;
		}
		return 0;
	}
	updateImageValues(pixels: number[], imageWidth: number, imageHeight: number): void {
		this._pixels = pixels;
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;
	}
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return true;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		super.set_useDeferredMouseEnterAndLeave(value);
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		this.superView.clearBitmap();
		if (this.thumbnailView != null) {
			(<HighDensityScatterSeriesView>this.thumbnailView).clearBitmap();
		}
		this.notifyThumbnailAppearanceChanged();
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
		if (!this.thumbnailDirty) {
			this.view.prepSurface(surface);
			return;
		}
		this.view.prepSurface(surface);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView)) {
			return;
		}
		let thumbnailView: HighDensityScatterSeriesView = typeCast<HighDensityScatterSeriesView>((<any>HighDensityScatterSeriesView).$type, this.thumbnailView);
		let frame: ScatterFrame = new ScatterFrame();
		this.doRender(false, thumbnailView);
		this.thumbnailDirty = false;
	}
	private _alternateFrame: ScatterFrame = null;
	private get alternateFrame(): ScatterFrame {
		return this._alternateFrame;
	}
	private set alternateFrame(value: ScatterFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let highDensityScatterSeriesView: HighDensityScatterSeriesView = <HighDensityScatterSeriesView>view;
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(highDensityScatterSeriesView)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new ScatterFrame();
		}
		this.doRender(false, view);
	}
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
}

/**
 * @hidden 
 */
export class HighDensityScatterSeriesView extends SeriesView {
	static $t: Type = markType(HighDensityScatterSeriesView, 'HighDensityScatterSeriesView', (<any>SeriesView).$type);
	constructor(model: HighDensityScatterSeries) {
		super(model);
		this.highDensityScatterModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.highDensityScatterModel.heatMinimumColor = Color.fromArgb(255, 0, 0, 0);
			this.highDensityScatterModel.heatMaximumColor = Color.fromArgb(255, 255, 0, 0);
		}
	}
	updateImageValues(): void {
		this.highDensityScatterModel.updateImageValues(this._pixels, this._imageWidth, this._imageHeight);
	}
	private _highDensityScatterModel: HighDensityScatterSeries = null;
	protected get highDensityScatterModel(): HighDensityScatterSeries {
		return this._highDensityScatterModel;
	}
	protected set highDensityScatterModel(value: HighDensityScatterSeries) {
		this._highDensityScatterModel = value;
	}
	private _pixels: number[] = null;
	private _imageWidth: number = 0;
	private _imageHeight: number = 0;
	private _offscreen: DomWrapper = null;
	private get offscreen(): DomWrapper {
		return this._offscreen;
	}
	private set offscreen(value: DomWrapper) {
		this._offscreen = value;
	}
	private _imageData: ImageData = null;
	private get imageData(): ImageData {
		return this._imageData;
	}
	private set imageData(value: ImageData) {
		this._imageData = value;
	}
	private _offscreenContext: RenderingContext = null;
	private get offscreenContext(): RenderingContext {
		return this._offscreenContext;
	}
	private set offscreenContext(value: RenderingContext) {
		this._offscreenContext = value;
	}
	assertBitmap(): void {
		if (this.offscreen == null) {
			this.offscreen = this.model.renderer.createElement("canvas");
			let cont = this.model.renderer.get2DCanvasContext(this.offscreen);
			this.offscreenContext = new RenderingContext(new CanvasViewRenderer(), cont);
		}
		let rect: Rect;
		if (this.isAlternateView) {
			rect = this.viewport;
		} else {
			rect = this.model.seriesViewer.getContainerRect();
		}
		let viewportLeft: number = <number>truncate(Math.round(rect.left));
		let viewportTop: number = <number>truncate(Math.round(rect.top));
		let viewportWidth: number = <number>truncate(Math.round(rect.width));
		let viewportHeight: number = <number>truncate(Math.round(rect.height));
		let lastImageWidth = this._imageWidth;
		let lastImageHeight = this._imageHeight;
		this._imageWidth = viewportWidth;
		this._imageHeight = viewportHeight;
		if (lastImageWidth != this._imageWidth || lastImageHeight != this._imageHeight || this._pixels == null) {
			this.offscreen.setAttribute("width", viewportWidth.toString());
			this.offscreen.setAttribute("height", viewportHeight.toString());
			this.imageData = (<CanvasRenderingContext2D>this.offscreenContext.getUnderlyingContext()).getImageData(0, 0, viewportWidth, viewportHeight);
			let imageDataArray_ = this.imageData.data;
			this._pixels = <number[]>(<any>imageDataArray_);
		}
		this.highDensityScatterModel.updateImageValues(this._pixels, this._imageWidth, this._imageHeight);
	}
	getPixelBuffer(): number[] {
		return this._pixels;
	}
	updateBitmap(): void {
		let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
		let viewportTop: number = <number>truncate(Math.round(this.viewport.left));
		let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
		let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
		(<CanvasRenderingContext2D>this.offscreenContext.getUnderlyingContext()).putImageData(this.imageData, 0, 0);
		this.makeDirty();
	}
	defer(action: () => void): void {
		if (this.model.renderer != null) {
			this.model.renderer.setTimeout(<() => void><any>action, 0);
		} else {
			window.setTimeout(<() => void><any>action, 0);
		}
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (isHitContext) {
			if (!this.highDensityScatterModel.mouseOverEnabled) {
				return;
			}
			let rect: Rectangle = new Rectangle();
			rect.canvasLeft = this.viewport.left;
			rect.canvasTop = this.viewport.top;
			rect.width = this.viewport.width;
			rect.height = this.viewport.height;
			rect._fill = this.getHitBrush();
			context.renderRectangle(rect);
			return;
		}
		if (this.offscreen == null) {
			return;
		}
		let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
		let viewportTop: number = <number>truncate(Math.round(this.viewport.top));
		let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
		let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
		this.context.drawImage1(this.offscreen.getNativeElement(), this.model._opacity, viewportLeft, viewportTop, viewportWidth, viewportHeight, viewportLeft, viewportTop, viewportWidth, viewportHeight);
	}
	colorScaleValid(HeatMinimumColor: Color, HeatMaximumColor: Color): boolean {
		return Color.l_op_Inequality_Lifted(toNullable<Color>((<any>Color).$type, HeatMinimumColor), toNullable<Color>((<any>Color).$type, null)) && Color.l_op_Inequality_Lifted(toNullable<Color>((<any>Color).$type, HeatMaximumColor), toNullable<Color>((<any>Color).$type, null));
	}
	clearBitmap(): void {
		if (this._pixels != null) {
			for (let i = 0; i < this._pixels.length; i++) {
				this._pixels[i] = 0;
			}
			this.updateBitmap();
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		if (this._pixels == null) {
			this.model.seriesVisualDataManager.exportSeriesPixelsData(svd, null, this._imageWidth, this._imageHeight);
			return;
		}
		let packed: number[] = <number[]>new Array(intDivide(this._pixels.length, 4));
		let pos: number;
		for (let i = 0; i < intDivide(this._pixels.length, 4); i++) {
			pos = i * 4;
			packed[i] = this._pixels[pos + 3] << 24 | this._pixels[pos] << 16 | this._pixels[pos + 1] << 8 | this._pixels[pos + 2];
		}
		this.model.seriesVisualDataManager.exportSeriesPixelsData(svd, packed, this._imageWidth, this._imageHeight);
	}
}


