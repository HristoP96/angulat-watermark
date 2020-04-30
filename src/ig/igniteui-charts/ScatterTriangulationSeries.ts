/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, ICollection$1, ICollection$1_$type, Type, String_$type, runOn, delegateCombine, delegateRemove, typeCast, markType } from "igniteui-core/type";
import { NumericXAxis } from "./NumericXAxis";
import { NumericYAxis } from "./NumericYAxis";
import { Triangle } from "igniteui-core/Triangle";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { Triangulator } from "igniteui-core/Triangulator";
import { TriangulationStatusEventArgs } from "igniteui-core/TriangulationStatusEventArgs";
import { FastItemsSource } from "igniteui-core/FastItemsSource";
import { CoercionInfo } from "./CoercionInfo";
import { SeriesViewer } from "./SeriesViewer";
import { Axis } from "./Axis";
import { Rect } from "igniteui-core/Rect";
import { SeriesView } from "./SeriesView";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { AxisRange } from "./AxisRange";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export abstract class ScatterTriangulationSeries extends Series {
	static $t: Type = markType(ScatterTriangulationSeries, 'ScatterTriangulationSeries', (<any>Series).$type);
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	private static readonly xMemberPathPropertyName: string = "XMemberPath";
	static readonly xMemberPathProperty: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.xMemberPathPropertyName, String_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.xMemberPathPropertyName, e.oldValue, e.newValue)));
	get xMemberPath(): string {
		return <string>this.getValue(ScatterTriangulationSeries.xMemberPathProperty);
	}
	set xMemberPath(value: string) {
		this.setValue(ScatterTriangulationSeries.xMemberPathProperty, value);
	}
	private static readonly yMemberPathPropertyName: string = "YMemberPath";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == ScatterTriangulationSeries.xMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.xMemberPath);
		}
		if (resolved == ScatterTriangulationSeries.yMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.yMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	static readonly yMemberPathProperty: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.yMemberPathPropertyName, String_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.yMemberPathPropertyName, e.oldValue, e.newValue)));
	get yMemberPath(): string {
		return <string>this.getValue(ScatterTriangulationSeries.yMemberPathProperty);
	}
	set yMemberPath(value: string) {
		this.setValue(ScatterTriangulationSeries.yMemberPathProperty, value);
	}
	private static readonly xColumnPropertyName: string = "XColumn";
	private _xColumn: IFastItemColumn$1<number> = null;
	protected get xColumn(): IFastItemColumn$1<number> {
		return this._xColumn;
	}
	protected set xColumn(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.xColumn != value;
		if (changed) {
			let oldValue: any = this.xColumn;
			this._xColumn = value;
			this.raisePropertyChanged(ScatterTriangulationSeries.xColumnPropertyName, oldValue, this.xColumn);
		}
	}
	private static readonly yColumnPropertyName: string = "YColumn";
	private _yColumn: IFastItemColumn$1<number> = null;
	protected get yColumn(): IFastItemColumn$1<number> {
		return this._yColumn;
	}
	protected set yColumn(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.yColumn != value;
		if (changed) {
			let oldValue: any = this.yColumn;
			this._yColumn = value;
			this.raisePropertyChanged(ScatterTriangulationSeries.yColumnPropertyName, oldValue, this.yColumn);
		}
	}
	get xAxis(): NumericXAxis {
		return <NumericXAxis>this.getValue(ScatterTriangulationSeries.xAxisProperty);
	}
	set xAxis(value: NumericXAxis) {
		this.setValue(ScatterTriangulationSeries.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.xAxisPropertyName, (<any>NumericXAxis).$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(ScatterTriangulationSeries.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(ScatterTriangulationSeries.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.yAxisPropertyName, e.oldValue, e.newValue)));
	private _autoTriangulated: boolean = false;
	private get autoTriangulated(): boolean {
		return this._autoTriangulated;
	}
	private set autoTriangulated(value: boolean) {
		this._autoTriangulated = value;
	}
	renderSeriesOverride(animate: boolean): void {
		let needsTriangulation: boolean = this.fastItemsSource != null && this.fastTrianglesSource == null && this.triangulation == null && this.xColumn != null && this.yColumn != null && this.xColumn.count >= 3 && this.yColumn.count >= 3 && !this.autoTriangulated;
		if (needsTriangulation) {
			this.startTriangulation();
			this.autoTriangulated = true;
		}
	}
	private startTriangulation(): void {
		this._triangulator = new Triangulator(this.fastItemsSource.count, this.xColumn, this.yColumn);
		let $t = this._triangulator;
		$t.triangulationStatusChanged = delegateCombine($t.triangulationStatusChanged, runOn(this, this.triangulator_TriangulationStatusChanged));
		this._triangulator.triangulateAsync();
	}
	private cancelTriangulation(): void {
		if (this._triangulator == null) {
			return;
		}
		this._triangulator.cancel();
		let $t = this._triangulator;
		$t.triangulationStatusChanged = delegateRemove($t.triangulationStatusChanged, runOn(this, this.triangulator_TriangulationStatusChanged));
		this._triangulator = null;
	}
	private _triangulator: Triangulator = null;
	triangulationStatusChanged: (sender: any, args: TriangulationStatusEventArgs) => void = null;
	private triangulator_TriangulationStatusChanged(sender: any, args: TriangulationStatusEventArgs): void {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, new TriangulationStatusEventArgs(args.currentStatus));
		}
		if (args.currentStatus >= 100) {
			if (this._triangulator == null) {
				return;
			}
			let $t = this._triangulator;
			$t.triangulationStatusChanged = delegateRemove($t.triangulationStatusChanged, runOn(this, this.triangulator_TriangulationStatusChanged));
			this.triangulation = this._triangulator.getResult();
			this._triangulator = null;
			let internalFastItemsSource: IFastItemsSource = ((() => {
				let $ret = new FastItemsSource();
				$ret.itemsSource = this.triangulation;
				return $ret;
			})());
			this.triangleVertexColumn1 = this.registerTriangleIntColumn(internalFastItemsSource, "v1");
			this.triangleVertexColumn2 = this.registerTriangleIntColumn(internalFastItemsSource, "v2");
			this.triangleVertexColumn3 = this.registerTriangleIntColumn(internalFastItemsSource, "v3");
			this.renderSeries(false);
		}
	}
	protected registerTriangleIntColumn(itemsSource: IFastItemsSource, memberPath: string): IFastItemColumn$1<number> {
		if (memberPath == null) {
			return itemsSource.registerColumnInt(null, null, false);
		}
		let coercionMethod: (arg1: any) => any = null;
		let info = SeriesViewer.getCoercionMethod(memberPath, this.coercionMethods);
		coercionMethod = info.coercionMethod;
		return itemsSource.registerColumnInt(memberPath, coercionMethod, this.expectFunctions);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastItemsSource != null) {
				oldFastItemsSource.deregisterColumn(this.xColumn);
				oldFastItemsSource.deregisterColumn(this.yColumn);
				this.xColumn = null;
				this.yColumn = null;
			}
			this.refreshAutoTriangulation();
			let newFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue);
			if (newFastItemsSource != null) {
				this.xColumn = this.registerDoubleColumn(this.xMemberPath);
				this.yColumn = this.registerDoubleColumn(this.yMemberPath);
			}
			this.renderSeries(false);
			break;

			case ScatterTriangulationSeries.xMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.xColumn);
				this.xColumn = this.registerDoubleColumn(this.xMemberPath);
			}
			this.refreshAutoTriangulation();
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.yMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.yColumn);
				this.yColumn = this.registerDoubleColumn(this.yMemberPath);
			}
			this.refreshAutoTriangulation();
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.xAxisPropertyName:
			if (oldValue != null) {
				(typeCast<Axis>((<any>Axis).$type, oldValue)).deregisterSeries(this);
			}
			if (newValue != null) {
				(typeCast<Axis>((<any>Axis).$type, newValue)).registerSeries(this);
			}
			if ((this.xAxis != null && !this.xAxis.updateRange()) || (newValue == null && oldValue != null)) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.yAxisPropertyName:
			if (oldValue != null) {
				(typeCast<Axis>((<any>Axis).$type, oldValue)).deregisterSeries(this);
			}
			if (newValue != null) {
				(typeCast<Axis>((<any>Axis).$type, newValue)).registerSeries(this);
			}
			if ((this.yAxis != null && !this.yAxis.updateRange()) || (newValue == null && oldValue != null)) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.trianglesSourcePropertyName:
			if (this.trianglesSource != null) {
				this.cancelTriangulation();
				this.fastTrianglesSource = ((() => {
					let $ret = new FastItemsSource();
					$ret.itemsSource = this.trianglesSource;
					return $ret;
				})());
			} else {
				this.fastTrianglesSource = null;
			}
			break;

			case ScatterTriangulationSeries.fastTrianglesSourcePropertyName:
			let oldFastTrianglesSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastTrianglesSource != null) {
				oldFastTrianglesSource.deregisterColumn(this.triangleVertexColumn1);
				oldFastTrianglesSource.deregisterColumn(this.triangleVertexColumn2);
				oldFastTrianglesSource.deregisterColumn(this.triangleVertexColumn3);
				this.triangleVertexColumn1 = null;
				this.triangleVertexColumn2 = null;
				this.triangleVertexColumn3 = null;
			}
			let newFastTrianglesSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue);
			if (newFastTrianglesSource != null) {
				this.triangleVertexColumn1 = this.registerTriangleIntColumn(newFastTrianglesSource, this.triangleVertexMemberPath1);
				this.triangleVertexColumn2 = this.registerTriangleIntColumn(newFastTrianglesSource, this.triangleVertexMemberPath2);
				this.triangleVertexColumn3 = this.registerTriangleIntColumn(newFastTrianglesSource, this.triangleVertexMemberPath3);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.triangleVertexMemberPath1PropertyName:
			if (this.fastTrianglesSource != null) {
				this.fastTrianglesSource.deregisterColumn(this.triangleVertexColumn1);
				this.triangleVertexColumn1 = this.registerTriangleIntColumn(this.fastTrianglesSource, this.triangleVertexMemberPath1);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.triangleVertexMemberPath2PropertyName:
			if (this.fastTrianglesSource != null) {
				this.fastTrianglesSource.deregisterColumn(this.triangleVertexColumn2);
				this.triangleVertexColumn2 = this.registerTriangleIntColumn(this.fastTrianglesSource, this.triangleVertexMemberPath2);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.triangleVertexMemberPath3PropertyName:
			if (this.fastTrianglesSource != null) {
				this.fastTrianglesSource.deregisterColumn(this.triangleVertexColumn3);
				this.triangleVertexColumn3 = this.registerTriangleIntColumn(this.fastTrianglesSource, this.triangleVertexMemberPath3);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterTriangulationSeries.xColumnPropertyName:
			if (this.xAxis != null) {
				this.xAxis.updateRange();
			}
			break;

			case ScatterTriangulationSeries.yColumnPropertyName:
			if (this.yAxis != null) {
				this.yAxis.updateRange();
			}
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
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		return super.validateSeries(viewportRect, windowRect, view) && this.fastItemsSource != null && this.xAxis != null && this.yAxis != null && this.xAxis.seriesViewer != null && this.yAxis.seriesViewer != null && viewportRect.width > 0 && viewportRect.height > 0 && this.triangleVertexColumn1 != null && this.triangleVertexColumn1.count > 0 && this.triangleVertexColumn2 != null && this.triangleVertexColumn2.count > 0 && this.triangleVertexColumn3 != null && this.triangleVertexColumn3.count > 0 && this.xColumn != null && this.xColumn.count > 0 && this.yColumn != null && this.yColumn.count > 0;
	}
	private refreshAutoTriangulation(): void {
		if (this.trianglesSource == null) {
			this.triangulation = null;
			this.triangleVertexColumn1 = null;
			this.triangleVertexColumn2 = null;
			this.triangleVertexColumn3 = null;
			this.autoTriangulated = false;
		}
	}
	private _triangulation: IEnumerable$1<Triangle> = null;
	private get triangulation(): IEnumerable$1<Triangle> {
		return this._triangulation;
	}
	private set triangulation(value: IEnumerable$1<Triangle>) {
		this._triangulation = value;
	}
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.xAxis != null) {
			this.xAxis.renderAxis();
		}
		if (this.yAxis != null) {
			this.yAxis.renderAxis();
		}
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		this.refreshAutoTriangulation();
		this.renderSeries(false);
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
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.renderSeries(false);
	}
	private static readonly trianglesSourcePropertyName: string = "TrianglesSource";
	static readonly trianglesSourceProperty: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.trianglesSourcePropertyName, IEnumerable_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.trianglesSourcePropertyName, e.oldValue, e.newValue)));
	get trianglesSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(ScatterTriangulationSeries.trianglesSourceProperty);
	}
	set trianglesSource(value: IEnumerable) {
		this.setValue(ScatterTriangulationSeries.trianglesSourceProperty, value);
	}
	private static readonly fastTrianglesSourcePropertyName: string = "FastTrianglesSource";
	static readonly fastTrianglesSourceProperty: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.fastTrianglesSourcePropertyName, IFastItemsSource_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.fastTrianglesSourcePropertyName, e.oldValue, e.newValue)));
	get fastTrianglesSource(): IFastItemsSource {
		return <IFastItemsSource><any>this.getValue(ScatterTriangulationSeries.fastTrianglesSourceProperty);
	}
	set fastTrianglesSource(value: IFastItemsSource) {
		this.setValue(ScatterTriangulationSeries.fastTrianglesSourceProperty, value);
	}
	private static readonly triangleVertexMemberPath1PropertyName: string = "TriangleVertexMemberPath1";
	static readonly triangleVertexMemberPath1Property: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.triangleVertexMemberPath1PropertyName, String_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.triangleVertexMemberPath1PropertyName, e.oldValue, e.newValue)));
	get triangleVertexMemberPath1(): string {
		return <string>this.getValue(ScatterTriangulationSeries.triangleVertexMemberPath1Property);
	}
	set triangleVertexMemberPath1(value: string) {
		this.setValue(ScatterTriangulationSeries.triangleVertexMemberPath1Property, value);
	}
	private static readonly triangleVertexMemberPath2PropertyName: string = "TriangleVertexMemberPath2";
	static readonly triangleVertexMemberPath2Property: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.triangleVertexMemberPath2PropertyName, String_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ScatterTriangulationSeries>((<any>ScatterTriangulationSeries).$type, sender)).raisePropertyChanged(ScatterTriangulationSeries.triangleVertexMemberPath2PropertyName, e.oldValue, e.newValue)));
	get triangleVertexMemberPath2(): string {
		return <string>this.getValue(ScatterTriangulationSeries.triangleVertexMemberPath2Property);
	}
	set triangleVertexMemberPath2(value: string) {
		this.setValue(ScatterTriangulationSeries.triangleVertexMemberPath2Property, value);
	}
	private static readonly triangleVertexMemberPath3PropertyName: string = "TriangleVertexMemberPath3";
	static readonly triangleVertexMemberPath3Property: DependencyProperty = DependencyProperty.register(ScatterTriangulationSeries.triangleVertexMemberPath3PropertyName, String_$type, (<any>ScatterTriangulationSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterTriangulationSeries>sender).raisePropertyChanged(ScatterTriangulationSeries.triangleVertexMemberPath3PropertyName, e.oldValue, e.newValue)));
	get triangleVertexMemberPath3(): string {
		return <string>this.getValue(ScatterTriangulationSeries.triangleVertexMemberPath3Property);
	}
	set triangleVertexMemberPath3(value: string) {
		this.setValue(ScatterTriangulationSeries.triangleVertexMemberPath3Property, value);
	}
	private static readonly triangleVertexColumn1PropertyName: string = "TriangleVertexColumn1";
	private _triangleVertexColumn1: IFastItemColumn$1<number> = null;
	protected get triangleVertexColumn1(): IFastItemColumn$1<number> {
		return this._triangleVertexColumn1;
	}
	protected set triangleVertexColumn1(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.triangleVertexColumn1 != value;
		if (changed) {
			let oldValue: any = this.triangleVertexColumn1;
			this._triangleVertexColumn1 = value;
			this.raisePropertyChanged(ScatterTriangulationSeries.triangleVertexColumn1PropertyName, oldValue, this.triangleVertexColumn1);
		}
	}
	private static readonly triangleVertexColumn2PropertyName: string = "TriangleVertexColumn2";
	private _triangleVertexColumn2: IFastItemColumn$1<number> = null;
	protected get triangleVertexColumn2(): IFastItemColumn$1<number> {
		return this._triangleVertexColumn2;
	}
	protected set triangleVertexColumn2(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.triangleVertexColumn2 != value;
		if (changed) {
			let oldValue: any = this.triangleVertexColumn2;
			this._triangleVertexColumn2 = value;
			this.raisePropertyChanged(ScatterTriangulationSeries.triangleVertexColumn2PropertyName, oldValue, this.triangleVertexColumn2);
		}
	}
	private static readonly triangleVertexColumn3PropertyName: string = "TriangleVertexColumn3";
	private _triangleVertexColumn3: IFastItemColumn$1<number> = null;
	protected get triangleVertexColumn3(): IFastItemColumn$1<number> {
		return this._triangleVertexColumn3;
	}
	protected set triangleVertexColumn3(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.triangleVertexColumn3 != value;
		if (changed) {
			let oldValue: any = this.triangleVertexColumn3;
			this._triangleVertexColumn3 = value;
			this.raisePropertyChanged(ScatterTriangulationSeries.triangleVertexColumn3PropertyName, oldValue, this.triangleVertexColumn3);
		}
	}
	protected get_isShape(): boolean {
		return true;
	}
}


