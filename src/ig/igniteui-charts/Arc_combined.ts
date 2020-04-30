/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PieChartBase } from "./PieChartBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { PieChartBaseView } from "./PieChartBaseView";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Number_$type, typeCast, fromEnum, markType, IEnumerable, IEnumerable_$type, IEnumerable$1, IEnumerable$1_$type, INotifyPropertyChanged, INotifyPropertyChanged_$type, Point, PropertyChangedEventArgs, Point_$type, delegateCombine, String_$type, enumGetBox, EnumUtil, Delegate_$type, Boolean_$type, delegateRemove, PointUtil, runOn, IList, IList_$type, NotSupportedException, fromEn, toEnum } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SliceClickEventArgs } from "./SliceClickEventArgs";
import { Slice } from "./Slice";
import { List$1 } from "igniteui-core/List$1";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { Pool$1 } from "igniteui-core/Pool$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { FastItemsSource } from "igniteui-core/FastItemsSource";
import { IChartLegend, IChartLegend_$type } from "igniteui-core/IChartLegend";
import { ContentControl } from "igniteui-core/ContentControl";
import { Brush } from "igniteui-core/Brush";
import { PieSliceDataContext } from "./PieSliceDataContext";
import { IChartItemLegend } from "igniteui-core/IChartItemLegend";
import { UIElement } from "igniteui-core/UIElement";
import { DataContext } from "igniteui-core/DataContext";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SweepDirection } from "igniteui-core/SweepDirection";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { OthersCategoryType, OthersCategoryType_$type } from "./OthersCategoryType";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { isNaN_, isInfinity, intDivide } from "igniteui-core/number";
import { ILegendSeries, ILegendSeries_$type } from "igniteui-core/ILegendSeries";
import { ILegendTemplateProvider, ILegendTemplateProvider_$type } from "igniteui-core/ILegendTemplateProvider";
import { LabelsPosition, LabelsPosition_$type } from "./LabelsPosition";
import { Style } from "igniteui-core/Style";
import { LeaderLineType, LeaderLineType_$type } from "./LeaderLineType";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { Canvas } from "igniteui-core/Canvas";
import { ILegendOwner, ILegendOwner_$type } from "igniteui-core/ILegendOwner";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { Size } from "igniteui-core/Size";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { Rect } from "igniteui-core/Rect";
import { HoleDimensionsChangedEventArgs } from "./HoleDimensionsChangedEventArgs";
import { DoughnutChartVisualData } from "./DoughnutChartVisualData";
import { RingSeriesVisualDataList } from "./RingSeriesVisualDataList";
import { RectData } from "igniteui-core/RectData";
import { Thread } from "igniteui-core/culture";
import { PieChartViewManager } from "./PieChartViewManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { PieLegendTemplates } from "./PieLegendTemplates";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { FontInfo } from "igniteui-core/FontInfo";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { FontUtil } from "igniteui-core/FontUtil";
import { EventProxy } from "igniteui-core/EventProxy";
import { DOMEventProxy } from "igniteui-core/DOMEventProxy";
import { SliceVisualData } from "./SliceVisualData";
import { PieLabel } from "./PieLabel";
import { RingSeriesVisualData } from "./RingSeriesVisualData";
import { RingVisualDataList } from "./RingVisualDataList";
import { RingVisualData } from "./RingVisualData";
import { ArcVisualDataList } from "./ArcVisualDataList";
import { ArcVisualData } from "./ArcVisualData";
import { SliceVisualDataList } from "./SliceVisualDataList";
import { PointData } from "igniteui-core/PointData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { SliceView } from "./SliceView";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { DoughnutChartLabelVisualData } from "./DoughnutChartLabelVisualData";
import { RectUtil } from "igniteui-core/RectUtil";
import { SizeData } from "igniteui-core/SizeData";
import { TextBlock } from "igniteui-core/TextBlock";

/**
 * @hidden 
 */
export class Arc extends PieChartBase {
	static $t: Type = markType(Arc, 'Arc', (<any>PieChartBase).$type);
	createView(): PieChartBaseView {
		return new ArcView(this);
	}
	onViewCreated(view: PieChartBaseView): void {
		super.onViewCreated(view);
		this.arcView = <ArcView>view;
	}
	private _arcView: ArcView;
	get arcView(): ArcView {
		return this._arcView;
	}
	set arcView(value: ArcView) {
		this._arcView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>Arc).$type;
	}
	private _ring: Ring = null;
	get ring(): Ring {
		return this._ring;
	}
	set ring(value: Ring) {
		let oldRing = this._ring;
		this._ring = value;
		this.arcView.onRingChanged(oldRing, this._ring);
	}
	private _arcItem: ArcItem = null;
	get arcItem(): ArcItem {
		return this._arcItem;
	}
	set arcItem(value: ArcItem) {
		this._arcItem = value;
	}
	static readonly endAnglePropertyName: string = "EndAngle";
	static readonly endAngleProperty: DependencyProperty = DependencyProperty.register(Arc.endAnglePropertyName, Number_$type, (<any>Arc).$type, new PropertyMetadata(2, 360, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<Arc>((<any>Arc).$type, o)).raisePropertyChanged(Arc.endAnglePropertyName, e.oldValue, e.newValue)));
	get endAngle(): number {
		return <number>this.getValue(Arc.endAngleProperty);
	}
	set endAngle(value: number) {
		this.setValue(Arc.endAngleProperty, value);
	}
	private _actualEndAngle: number = 0;
	get actualEndAngle(): number {
		return this._actualEndAngle;
	}
	set actualEndAngle(value: number) {
		this._actualEndAngle = value;
	}
	get arcBreadth(): number {
		if (this.ring != null) {
			return this.ring.ringBreadth;
		}
		return 0;
	}
	onSliceClick(sender: any, e: SliceClickEventArgs): void {
		super.onSliceClick(sender, e);
		if (this.ring != null) {
			this.ring.ringSeries.chart.onSliceClick(sender, e);
		}
	}
	explodeSlice(slice: Slice, explode: boolean): void {
		if (this.ring != null && this.ring.owner != null) {
			super.explodeSlice(slice, explode);
			let item: SliceItem = this.getSliceItem(slice);
			if (item != null) {
				this.ring.owner.explodeSlice(item, explode);
			}
		}
	}
	selectSlice(slice: Slice, shouldSelect: boolean): void {
		if (this.ring != null && this.ring.owner != null) {
			super.selectSlice(slice, shouldSelect);
			let item: SliceItem = this.getSliceItem(slice);
			if (item != null) {
				this.ring.owner.selectSlice(item, shouldSelect);
			}
		}
	}
	getSliceItem(slice: Slice): SliceItem {
		for (let item of fromEnum<SliceItem>(this.arcItem.sliceItems)) {
			if (item.slice == slice) {
				return item;
			}
		}
		return null;
	}
	protected selectedIndicesChangedOverride(args: NotifyCollectionChangedEventArgs): void {
		if (this.allowSliceSelection) {
			this.prepareSlices();
			this.renderSlices();
			this.renderLegendItems();
		}
	}
	prepareSlices(): void {
		if (this.itemsSource == null || this.fastItemsSource == null) {
			this.slices.count = 0;
			return;
		}
		let totalSliceCount: number = this.valueIndices.count;
		let hasOtherSlice: boolean = this.othersValueIndices.count > 0;
		let startAngle: number = PieChartBase.roundAngle(this.actualStartAngle);
		let endAngle: number = PieChartBase.roundAngle(this.actualStartAngle);
		this.totalSliceCount = totalSliceCount;
		if (hasOtherSlice) {
			totalSliceCount++;
		}
		for (let i: number = 0; i < totalSliceCount; i++) {
			let isOtherSlice: boolean = false;
			let value: number;
			if (i == totalSliceCount - 1 && hasOtherSlice) {
				value = this.othersTotal;
				isOtherSlice = true;
			} else {
				value = this.valueColumn.item(this.valueIndices._inner[i]);
			}
			if (this.sweepDirection == SweepDirection.Clockwise) {
				endAngle += PieChartBase.roundAngle(Math.abs(value) * this.endAngle / this.total);
			} else {
				endAngle -= PieChartBase.roundAngle(Math.abs(value) * this.endAngle / this.total);
			}
			let slice: Slice = this.slices.item(i);
			if (this.actualInnerExtent >= 100) {
				slice._visibility = Visibility.Collapsed;
			} else {
				slice._visibility = Visibility.Visible;
			}
			slice.suspendCreation = true;
			slice.startAngle = startAngle;
			slice.endAngle = endAngle;
			slice.innerExtentStart = slice.innerExtentEnd = this.actualInnerExtent;
			slice.isOthersSlice = isOtherSlice;
			slice.explodedRadius = this.actualExplodedRadius;
			slice.index = i;
			slice.dataContext = isOtherSlice ? this.others : this.fastItemsSource.item(this.valueIndices._inner[i]);
			slice.isExploded = this.explodedSlices.contains(i);
			slice.isSelected = this.selectedSlices.contains(i);
			startAngle = endAngle;
			slice.suspendCreation = false;
		}
		this.slices.count = totalSliceCount;
		if (this.arcItem != null) {
			this.arcItem.updateSliceItems(this);
		}
	}
	renderLegendItems(): void {
		let itemLegend: IChartLegend = typeCast<IChartLegend>(IChartLegend_$type, this.legend);
		if (itemLegend == null) {
			return;
		}
		if (this.labelColumn == null || this.labelColumn.count == 0 || ((this.ring != null && this.ring.ringSeries != null) && (this.ring.owner != null && !this.ring.owner.series.contains(this.ring.ringSeries)))) {
			itemLegend.clearLegendItemsForSeries(this.ring.ringSeries);
			return;
		}
		this.legendItems = new List$1<UIElement>((<any>UIElement).$type, 0);
		for (let slice of fromEnum<Slice>(this.slices.active)) {
			let item: ContentControl = new ContentControl();
			let itemLabel: any = this.getLabel(slice);
			let itemBrush: Brush = slice.background;
			let legendLabelFromLegendLabelColumn: any = slice.isOthersSlice ? this.othersCategoryText : (this.legendLabelColumn != null && this.legendLabelColumn.count > 0) ? this.legendLabelColumn.item(this.valueIndices._inner[slice.index]) : null;
			legendLabelFromLegendLabelColumn = (legendLabelFromLegendLabelColumn == null && this.labelColumn.count > 0) ? this.labelColumn.item(this.valueIndices._inner[slice.index]) : legendLabelFromLegendLabelColumn;
			item.content = ((() => {
				let $ret = new PieSliceDataContext();
				$ret.series = this.ring.ringSeries;
				$ret.slice = slice;
				$ret.item = slice.dataContext;
				$ret.itemBrush = itemBrush;
				$ret.legendLabel = legendLabelFromLegendLabelColumn != null ? legendLabelFromLegendLabelColumn.toString() : null;
				$ret.itemLabel = itemLabel != null ? itemLabel.toString() : null;
				$ret.percentValue = this.getPercentValue(slice);
				$ret.isOthersSlice = slice.isOthersSlice;
				return $ret;
			})());
			let dc: PieSliceDataContext = <PieSliceDataContext>item.content;
			if (this.formatLegendLabel != null) {
				let legendLabel: any = this.formatLegendLabel(dc);
				if (legendLabel != null) {
					dc.legendLabel = legendLabel.toString();
				}
			}
			if (this.legendItemTemplate != null) {
				item.contentTemplate = this.legendItemTemplate;
			}
			this.legendItems.add(item);
		}
		if (itemLegend.isItemwise) {
			let item1 = <IChartItemLegend><any>itemLegend;
			item1.createLegendItemsInsert(this.legendItems, this.ring.ringSeries);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Arc.endAnglePropertyName:
			this.actualEndAngle = <number>newValue;
			this.prepareSlices();
			this.prepareLabels();
			this.renderSlices();
			this.renderLabels();
			break;

			case PieChartBase.radiusFactorPropertyName:
			if (this.ring != null && this.ring.owner != null) {
				this.ring.owner.prepareCenterPresenter();
			}
			break;

			case PieChartBase.legendPropertyName:
			let oldLegend: IChartLegend = typeCast<IChartLegend>(IChartLegend_$type, oldValue);
			if (oldLegend != null && this.ring != null && this.ring.ringSeries != null) {
				oldLegend.clearLegendItemsForSeries(this.ring.ringSeries);
			}
			break;

		}

	}
	getContainer(): any {
		return this.view.getContainer();
	}
}

/**
 * @hidden 
 */
export class ArcItem extends Base {
	static $t: Type = markType(ArcItem, 'ArcItem');
	constructor() {
		super();
		this.startAngle = 0;
		this.endAngle = 360;
		this.sliceItems = new List$1<SliceItem>((<any>SliceItem).$type, 0);
	}
	private _ring: Ring = null;
	get ring(): Ring {
		return this._ring;
	}
	set ring(value: Ring) {
		this._ring = value;
	}
	private _parent: ArcItem = null;
	get parent(): ArcItem {
		return this._parent;
	}
	set parent(value: ArcItem) {
		this._parent = value;
	}
	private _valueMemberPath: string = null;
	get valueMemberPath(): string {
		return this._valueMemberPath;
	}
	set valueMemberPath(value: string) {
		this._valueMemberPath = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _levelDepth: number = 0;
	get levelDepth(): number {
		return this._levelDepth;
	}
	set levelDepth(value: number) {
		this._levelDepth = value;
	}
	private _startAngle: number = 0;
	get startAngle(): number {
		return this._startAngle;
	}
	set startAngle(value: number) {
		this._startAngle = value;
	}
	private _endAngle: number = 0;
	get endAngle(): number {
		return this._endAngle;
	}
	set endAngle(value: number) {
		this._endAngle = value;
	}
	private _othersCategoryThreshold: number = 0;
	get othersCategoryThreshold(): number {
		return this._othersCategoryThreshold;
	}
	set othersCategoryThreshold(value: number) {
		this._othersCategoryThreshold = value;
	}
	private _othersCategoryType: OthersCategoryType = <OthersCategoryType>0;
	get othersCategoryType(): OthersCategoryType {
		return this._othersCategoryType;
	}
	set othersCategoryType(value: OthersCategoryType) {
		this._othersCategoryType = value;
	}
	private _brushes: BrushCollection = null;
	get brushes(): BrushCollection {
		return this._brushes;
	}
	set brushes(value: BrushCollection) {
		this._brushes = value;
	}
	private _sliceItems: List$1<SliceItem> = null;
	get sliceItems(): List$1<SliceItem> {
		return this._sliceItems;
	}
	set sliceItems(value: List$1<SliceItem>) {
		this._sliceItems = value;
	}
	private _parentSlice: SliceItem = null;
	get parentSlice(): SliceItem {
		return this._parentSlice;
	}
	set parentSlice(value: SliceItem) {
		this._parentSlice = value;
	}
	private _itemSource: IEnumerable = null;
	get itemSource(): IEnumerable {
		return this._itemSource;
	}
	set itemSource(value: IEnumerable) {
		this._itemSource = value;
	}
	prepareData(startAngleParam: number, endAngleParam: number): void {
		let total: number = 0;
		let othersTotal: number = 0;
		let valueIndices = new List$1<number>(Number_$type, 0);
		let othersValueIndices = new List$1<number>(Number_$type, 0);
		let others = new List$1<any>((<any>Base).$type, 0);
		this.sliceItems.clear();
		if (this.itemSource == null) {
			return;
		}
		let fs = new FastItemsSource();
		fs.itemsSource = this.itemSource;
		let valueColumn = this.registerDoubleColumn(fs, this.valueMemberPath);
		if (valueColumn == null || valueColumn.count == 0) {
			fs.deregisterColumn(valueColumn);
			fs.detach();
			return;
		}
		for (let value of fromEnum<number>(valueColumn)) {
			if (isNaN_(value) || isInfinity(value) || value <= 0) {
				continue;
			}
			total = total + value;
		}
		for (let i: number = 0; i < valueColumn.count; i++) {
			let value1: number = valueColumn.item(i);
			if (isNaN_(value1) || isInfinity(value1) || value1 <= 0) {
				continue;
			}
			let calculatedValue: number = this.othersCategoryType == OthersCategoryType.Percent ? value1 / total : value1;
			let calculatedThreshold: number = this.othersCategoryType == OthersCategoryType.Percent ? this.othersCategoryThreshold / 100 : this.othersCategoryThreshold;
			if (calculatedValue <= calculatedThreshold) {
				othersTotal = othersTotal + value1;
				othersValueIndices.add(i);
				others.add1(fs.item(i));
			} else {
				valueIndices.add(i);
			}
		}
		let totalSliceCount: number = valueIndices.count;
		let hasOtherSlice: boolean = othersValueIndices.count > 0;
		let startAngle: number = PieChartBase.roundAngle(startAngleParam);
		let endAngle: number = PieChartBase.roundAngle(startAngleParam);
		if (hasOtherSlice) {
			totalSliceCount++;
		}
		for (let i1: number = 0; i1 < totalSliceCount; i1++) {
			let isOtherSlice: boolean = false;
			let value2: number;
			if (i1 == totalSliceCount - 1 && hasOtherSlice) {
				value2 = othersTotal;
				isOtherSlice = true;
			} else {
				value2 = valueColumn.item(valueIndices._inner[i1]);
			}
			let sweepDirection = SweepDirection.Clockwise;
			if (sweepDirection == SweepDirection.Clockwise) {
				endAngle += PieChartBase.roundAngle(Math.abs(value2) * endAngleParam / total);
			} else {
				endAngle -= PieChartBase.roundAngle(Math.abs(value2) * endAngleParam / total);
			}
			this.sliceItems.add(((() => {
				let $ret = new SliceItem();
				$ret.startAngle = startAngle;
				$ret.endAngle = endAngle - startAngle;
				$ret.data = isOtherSlice ? others : fs.item(valueIndices._inner[i1]);
				return $ret;
			})()));
			startAngle = endAngle;
		}
		fs.deregisterColumn(valueColumn);
		fs.detach();
	}
	private registerDoubleColumn(fs: FastItemsSource, memberPath: string): IFastItemColumn$1<number> {
		let coercionMethod: (arg1: any) => any = null;
		return fs.registerColumn(memberPath, coercionMethod, false);
	}
	prepareSliceItems(seriesStartAngle: number): void {
		let startAngle: number = this.parentSlice == null ? seriesStartAngle : this.parentSlice.startAngle;
		let endAngle: number = this.parentSlice == null ? 360 : this.parentSlice.endAngle;
		this.prepareData(startAngle, endAngle);
	}
	updateSliceItems(arc: Arc): void {
		this.sliceItems.clear();
		for (let index: number = 0; index < arc.slices.count; index++) {
			let slice: Slice = arc.slices.item(index);
			this.sliceItems.add(((() => {
				let $ret = new SliceItem();
				$ret.startAngle = slice.startAngle;
				$ret.endAngle = slice.endAngle - slice.startAngle;
				$ret.index = index;
				$ret.arcItem = this;
				$ret.data = slice.dataContext;
				$ret.isOther = slice.isOthersSlice;
				$ret.slice = slice;
				return $ret;
			})()));
		}
	}
}

/**
 * @hidden 
 */
export abstract class RingSeriesBase extends Control implements INotifyPropertyChanged, ILegendSeries, ILegendTemplateProvider {
	static $t: Type = markType(RingSeriesBase, 'RingSeriesBase', (<any>Control).$type, [INotifyPropertyChanged_$type, ILegendSeries_$type, ILegendTemplateProvider_$type]);
	private readonly _propertyUpdatedOverride: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	constructor() {
		super();
		this.location = <Point>{ $type: Point_$type, x: 0, y: 0 };
		this._propertyUpdatedOverride = (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue);
		this.propertyUpdated = delegateCombine(this.propertyUpdated, this._propertyUpdatedOverride);
		this.view = this.createView();
		this.onViewCreated(this.view);
		this.view.onInit();
		this.fastItemsSource_Event = (o: any, e: FastItemsSourceEventArgs) => this.dataUpdatedOverride(e.action, e.position, e.count, e.propertyName);
	}
	private _chart: XamDoughnutChart = null;
	get chart(): XamDoughnutChart {
		return this._chart;
	}
	set chart(value: XamDoughnutChart) {
		this._chart = value;
	}
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	static readonly itemsSourceProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.itemsSourcePropertyName, IEnumerable_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.itemsSourcePropertyName, e.oldValue, e.newValue)));
	get itemsSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(RingSeriesBase.itemsSourceProperty);
	}
	set itemsSource(value: IEnumerable) {
		this.setValue(RingSeriesBase.itemsSourceProperty, value);
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.valueMemberPathPropertyName, String_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueMemberPath(): string {
		return <string>this.getValue(RingSeriesBase.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(RingSeriesBase.valueMemberPathProperty, value);
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	static readonly labelMemberPathProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.labelMemberPathPropertyName, String_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.labelMemberPathPropertyName, e.oldValue, e.newValue)));
	get labelMemberPath(): string {
		return <string>this.getValue(RingSeriesBase.labelMemberPathProperty);
	}
	set labelMemberPath(value: string) {
		this.setValue(RingSeriesBase.labelMemberPathProperty, value);
	}
	static readonly legendLabelMemberPathPropertyName: string = "LegendLabelMemberPath";
	static readonly legendLabelMemberPathProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.legendLabelMemberPathPropertyName, String_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.legendLabelMemberPathPropertyName, e.oldValue, e.newValue)));
	get legendLabelMemberPath(): string {
		return <string>this.getValue(RingSeriesBase.legendLabelMemberPathProperty);
	}
	set legendLabelMemberPath(value: string) {
		this.setValue(RingSeriesBase.legendLabelMemberPathProperty, value);
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(propertyName, oldValue, newValue));
		}
	}
	static readonly labelsPositionPropertyName: string = "LabelsPosition";
	static readonly labelsPositionProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.labelsPositionPropertyName, LabelsPosition_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, enumGetBox<LabelsPosition>(LabelsPosition_$type, LabelsPosition.Center), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.labelsPositionPropertyName, e.oldValue, e.newValue)));
	get labelsPosition(): LabelsPosition {
		return EnumUtil.getEnumValue<LabelsPosition>(LabelsPosition_$type, this.getValue(RingSeriesBase.labelsPositionProperty));
	}
	set labelsPosition(value: LabelsPosition) {
		this.setValue(RingSeriesBase.labelsPositionProperty, enumGetBox<LabelsPosition>(LabelsPosition_$type, value));
	}
	static readonly leaderLineVisibilityPropertyName: string = "LeaderLineVisibility";
	static readonly leaderLineVisibilityProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.leaderLineVisibilityPropertyName, Visibility_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.leaderLineVisibilityPropertyName, e.oldValue, e.newValue)));
	get leaderLineVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(RingSeriesBase.leaderLineVisibilityProperty));
	}
	set leaderLineVisibility(value: Visibility) {
		this.setValue(RingSeriesBase.leaderLineVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly leaderLineStylePropertyName: string = "LeaderLineStyle";
	static readonly leaderLineStyleProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.leaderLineStylePropertyName, (<any>Style).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.leaderLineStylePropertyName, e.oldValue, e.newValue)));
	get leaderLineStyle(): Style {
		return <Style>this.getValue(RingSeriesBase.leaderLineStyleProperty);
	}
	set leaderLineStyle(value: Style) {
		this.setValue(RingSeriesBase.leaderLineStyleProperty, value);
	}
	static readonly leaderLineTypePropertyName: string = "LeaderLineType";
	static readonly leaderLineTypeProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.leaderLineTypePropertyName, LeaderLineType_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, enumGetBox<LeaderLineType>(LeaderLineType_$type, LeaderLineType.Straight), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.leaderLineTypePropertyName, e.oldValue, e.newValue)));
	get leaderLineType(): LeaderLineType {
		return EnumUtil.getEnumValue<LeaderLineType>(LeaderLineType_$type, this.getValue(RingSeriesBase.leaderLineTypeProperty));
	}
	set leaderLineType(value: LeaderLineType) {
		this.setValue(RingSeriesBase.leaderLineTypeProperty, enumGetBox<LeaderLineType>(LeaderLineType_$type, value));
	}
	static readonly leaderLineMarginPropertyName: string = "LeaderLineMargin";
	static readonly leaderLineMarginProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.leaderLineMarginPropertyName, Number_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, 6, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.leaderLineMarginPropertyName, e.oldValue, e.newValue)));
	get leaderLineMargin(): number {
		return <number>this.getValue(RingSeriesBase.leaderLineMarginProperty);
	}
	set leaderLineMargin(value: number) {
		this.setValue(RingSeriesBase.leaderLineMarginProperty, value);
	}
	static readonly toolTipPropertyName: string = "ToolTip";
	static readonly toolTipProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.toolTipPropertyName, (<any>Base).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.toolTipPropertyName, e.oldValue, e.newValue)));
	get toolTip(): any {
		return this.getValue(RingSeriesBase.toolTipProperty);
	}
	set toolTip(value: any) {
		this.setValue(RingSeriesBase.toolTipProperty, value);
	}
	static readonly othersCategoryThresholdPropertyName: string = "OthersCategoryThreshold";
	static readonly othersCategoryThresholdProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.othersCategoryThresholdPropertyName, Number_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, 3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.othersCategoryThresholdPropertyName, e.oldValue, e.newValue)));
	get othersCategoryThreshold(): number {
		return <number>this.getValue(RingSeriesBase.othersCategoryThresholdProperty);
	}
	set othersCategoryThreshold(value: number) {
		this.setValue(RingSeriesBase.othersCategoryThresholdProperty, value);
	}
	static readonly othersCategoryTypePropertyName: string = "OthersCategoryType";
	static readonly othersCategoryTypeProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.othersCategoryTypePropertyName, OthersCategoryType_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, enumGetBox<OthersCategoryType>(OthersCategoryType_$type, OthersCategoryType.Percent), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.othersCategoryTypePropertyName, e.oldValue, e.newValue)));
	get othersCategoryType(): OthersCategoryType {
		return EnumUtil.getEnumValue<OthersCategoryType>(OthersCategoryType_$type, this.getValue(RingSeriesBase.othersCategoryTypeProperty));
	}
	set othersCategoryType(value: OthersCategoryType) {
		this.setValue(RingSeriesBase.othersCategoryTypeProperty, enumGetBox<OthersCategoryType>(OthersCategoryType_$type, value));
	}
	static readonly othersCategoryTextPropertyName: string = "OthersCategoryText";
	static readonly othersCategoryTextProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.othersCategoryTextPropertyName, String_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, "Others", (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.othersCategoryTextPropertyName, e.oldValue, e.newValue)));
	get othersCategoryText(): string {
		return <string>this.getValue(RingSeriesBase.othersCategoryTextProperty);
	}
	set othersCategoryText(value: string) {
		this.setValue(RingSeriesBase.othersCategoryTextProperty, value);
	}
	static readonly legendPropertyName: string = "Legend";
	static readonly legendProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.legendPropertyName, IChartLegend_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.legendPropertyName, e.oldValue, e.newValue)));
	get legend(): IChartLegend {
		return <IChartLegend><any>this.getValue(RingSeriesBase.legendProperty);
	}
	set legend(value: IChartLegend) {
		this.setValue(RingSeriesBase.legendProperty, value);
	}
	get formatLabel(): (obj: any) => string {
		return <(obj: any) => string>this.getValue(RingSeriesBase.formatLabelProperty);
	}
	set formatLabel(value: (obj: any) => string) {
		this.setValue(RingSeriesBase.formatLabelProperty, value);
	}
	static readonly formatLabelPropertyName: string = "FormatLabel";
	static readonly formatLabelProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.formatLabelPropertyName, Delegate_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.formatLabelPropertyName, e.oldValue, e.newValue)));
	get formatLegendLabel(): (obj: any) => string {
		return <(obj: any) => string>this.getValue(RingSeriesBase.formatLegendLabelProperty);
	}
	set formatLegendLabel(value: (obj: any) => string) {
		this.setValue(RingSeriesBase.formatLegendLabelProperty, value);
	}
	static readonly formatLegendLabelPropertyName: string = "FormatLegendLabel";
	static readonly formatLegendLabelProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.formatLegendLabelPropertyName, Delegate_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.formatLegendLabelPropertyName, e.oldValue, e.newValue)));
	static readonly labelExtentPropertyName: string = "LabelExtent";
	static readonly labelExtentProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.labelExtentPropertyName, Number_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, 10, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.labelExtentPropertyName, e.oldValue, e.newValue)));
	get labelExtent(): number {
		return <number>this.getValue(RingSeriesBase.labelExtentProperty);
	}
	set labelExtent(value: number) {
		this.setValue(RingSeriesBase.labelExtentProperty, value);
	}
	static readonly startAnglePropertyName: string = "StartAngle";
	static readonly startAngleProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.startAnglePropertyName, Number_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.startAnglePropertyName, e.oldValue, e.newValue)));
	get startAngle(): number {
		return <number>this.getValue(RingSeriesBase.startAngleProperty);
	}
	set startAngle(value: number) {
		this.setValue(RingSeriesBase.startAngleProperty, value);
	}
	static readonly othersCategoryStylePropertyName: string = "OthersCategoryStyle";
	static readonly othersCategoryStyleProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.othersCategoryStylePropertyName, (<any>Style).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.othersCategoryStylePropertyName, e.oldValue, e.newValue)));
	get othersCategoryStyle(): Style {
		return <Style>this.getValue(RingSeriesBase.othersCategoryStyleProperty);
	}
	set othersCategoryStyle(value: Style) {
		this.setValue(RingSeriesBase.othersCategoryStyleProperty, value);
	}
	static readonly selectedStylePropertyName: string = "SelectedStyle";
	static readonly selectedStyleProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.selectedStylePropertyName, (<any>Style).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.selectedStylePropertyName, e.oldValue, e.newValue)));
	get selectedStyle(): Style {
		return <Style>this.getValue(RingSeriesBase.selectedStyleProperty);
	}
	set selectedStyle(value: Style) {
		this.setValue(RingSeriesBase.selectedStyleProperty, value);
	}
	static readonly selectedStyleResolvedPropertyName: string = "SelectedStyleResolved";
	get selectedStyleResolved(): Style {
		if (this.selectedStyle != null) {
			return this.selectedStyle;
		}
		if (this.chart != null && this.chart.selectedStyle != null) {
			return this.chart.selectedStyle;
		}
		return null;
	}
	set selectedStyleResolved(value: Style) {
		let oldValue: Style = this.selectedStyleResolved;
		if (this.selectedStyle != null && value != this.selectedStyle) {
			value = this.selectedStyle;
		}
		this.raisePropertyChanged(RingSeriesBase.selectedStyleResolvedPropertyName, oldValue, value);
	}
	static readonly toolTipStylePropertyName: string = "ToolTipStyle";
	static readonly toolTipStyleProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.toolTipStylePropertyName, (<any>Style).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.toolTipStylePropertyName, e.oldValue, e.newValue)));
	get toolTipStyle(): Style {
		return <Style>this.getValue(RingSeriesBase.toolTipStyleProperty);
	}
	set toolTipStyle(value: Style) {
		this.setValue(RingSeriesBase.toolTipStyleProperty, value);
	}
	static readonly brushesPropertyName: string = "Brushes";
	static readonly brushesProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.brushesPropertyName, (<any>BrushCollection).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.brushesPropertyName, e.oldValue, e.newValue)));
	get brushes(): BrushCollection {
		return <BrushCollection>this.getValue(RingSeriesBase.brushesProperty);
	}
	set brushes(value: BrushCollection) {
		this.setValue(RingSeriesBase.brushesProperty, value);
	}
	static readonly outlinesPropertyName: string = "Outlines";
	static readonly outlinesProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.outlinesPropertyName, (<any>BrushCollection).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.outlinesPropertyName, e.oldValue, e.newValue)));
	get outlines(): BrushCollection {
		return <BrushCollection>this.getValue(RingSeriesBase.outlinesProperty);
	}
	set outlines(value: BrushCollection) {
		this.setValue(RingSeriesBase.outlinesProperty, value);
	}
	static readonly labelOuterColorPropertyName: string = "LabelOuterColor";
	get labelOuterColor(): Brush {
		return <Brush>this.getValue(RingSeriesBase.labelOuterColorProperty);
	}
	set labelOuterColor(value: Brush) {
		this.setValue(RingSeriesBase.labelOuterColorProperty, value);
	}
	static readonly labelOuterColorProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.labelOuterColorPropertyName, (<any>Brush).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RingSeriesBase>o).raisePropertyChanged(RingSeriesBase.labelOuterColorPropertyName, e.oldValue, e.newValue)));
	static readonly labelInnerColorPropertyName: string = "LabelInnerColor";
	get labelInnerColor(): Brush {
		return <Brush>this.getValue(RingSeriesBase.labelInnerColorProperty);
	}
	set labelInnerColor(value: Brush) {
		this.setValue(RingSeriesBase.labelInnerColorProperty, value);
	}
	static readonly labelInnerColorProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.labelInnerColorPropertyName, (<any>Brush).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RingSeriesBase>o).raisePropertyChanged(RingSeriesBase.labelInnerColorPropertyName, e.oldValue, e.newValue)));
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		let oldValue = this._textStyle;
		this._textStyle = value;
		this.raisePropertyChanged(RingSeriesBase.textStylePropertyName, oldValue, value);
	}
	static readonly textStylePropertyName: string = "TextStyle";
	get legendItemTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(RingSeriesBase.legendItemTemplateProperty);
	}
	set legendItemTemplate(value: DataTemplate) {
		this.setValue(RingSeriesBase.legendItemTemplateProperty, value);
	}
	static readonly legendItemTemplatePropertyName: string = "LegendItemTemplate";
	static readonly legendItemTemplateProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.legendItemTemplatePropertyName, (<any>DataTemplate).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.legendItemTemplatePropertyName, e.oldValue, e.newValue)));
	get legendItemBadgeTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(RingSeriesBase.legendItemBadgeTemplateProperty);
	}
	set legendItemBadgeTemplate(value: DataTemplate) {
		this.setValue(RingSeriesBase.legendItemBadgeTemplateProperty, value);
	}
	static readonly legendItemBadgeTemplatePropertyName: string = "LegendItemBadgeTemplate";
	static readonly legendItemBadgeTemplateProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.legendItemBadgeTemplatePropertyName, (<any>DataTemplate).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.legendItemBadgeTemplatePropertyName, e.oldValue, e.newValue)));
	private static readonly labelTemplatePropertyName: string = "LabelTemplate";
	static readonly labelTemplateProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.labelTemplatePropertyName, (<any>DataTemplate).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.labelTemplatePropertyName, e.oldValue, e.newValue)));
	get labelTemplate(): DataTemplate {
		return typeCast<DataTemplate>((<any>DataTemplate).$type, this.getValue(RingSeriesBase.labelTemplateProperty));
	}
	set labelTemplate(value: DataTemplate) {
		this.setValue(RingSeriesBase.labelTemplateProperty, value);
	}
	private _isSurfaceInteractionUserSet: boolean = false;
	get isSurfaceInteractionDisabled(): boolean {
		return <boolean>this.getValue(RingSeriesBase.isSurfaceInteractionDisabledProperty);
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this._isSurfaceInteractionUserSet = true;
		this.setValue(RingSeriesBase.isSurfaceInteractionDisabledProperty, value);
	}
	static readonly isSurfaceInteractionDisabledPropertyName: string = "IsSurfaceInteractionDisabled";
	static readonly isSurfaceInteractionDisabledProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.isSurfaceInteractionDisabledPropertyName, Boolean_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RingSeriesBase>sender).raisePropertyChanged(RingSeriesBase.isSurfaceInteractionDisabledPropertyName, e.oldValue, e.newValue)));
	get isSurfaceInteractionDisabledResolved(): boolean {
		if (!this._isSurfaceInteractionUserSet) {
			return this.chart.isSurfaceInteractionDisabled;
		} else {
			return this.isSurfaceInteractionDisabled;
		}
	}
	static readonly radiusFactorPropertyName: string = "RadiusFactor";
	static radiusFactorProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.radiusFactorPropertyName, Number_$type, (<any>RingSeriesBase).$type, new PropertyMetadata(2, 0.9, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, o)).raisePropertyChanged(RingSeriesBase.radiusFactorPropertyName, e.oldValue, e.newValue)));
	get radiusFactor(): number {
		return <number>this.getValue(RingSeriesBase.radiusFactorProperty);
	}
	set radiusFactor(value: number) {
		this.setValue(RingSeriesBase.radiusFactorProperty, value);
	}
	protected _fastItemsSourceAttached: boolean = false;
	protected fastItemsSource_Event: (sender: any, e: FastItemsSourceEventArgs) => void = null;
	static readonly fastItemsSourcePropertyName: string = "FastItemsSource";
	static readonly fastItemsSourceProperty: DependencyProperty = DependencyProperty.register(RingSeriesBase.fastItemsSourcePropertyName, (<any>FastItemsSource).$type, (<any>RingSeriesBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<RingSeriesBase>((<any>RingSeriesBase).$type, sender)).raisePropertyChanged(RingSeriesBase.fastItemsSourcePropertyName, e.oldValue, e.newValue)));
	get fastItemsSource(): FastItemsSource {
		return <FastItemsSource>this.getValue(RingSeriesBase.fastItemsSourceProperty);
	}
	set fastItemsSource(value: FastItemsSource) {
		this.setValue(RingSeriesBase.fastItemsSourceProperty, value);
	}
	private _location: Point = null;
	get location(): Point {
		return this._location;
	}
	set location(value: Point) {
		this._location = value;
	}
	private _view: RingSeriesBaseView = null;
	get view(): RingSeriesBaseView {
		return this._view;
	}
	set view(value: RingSeriesBaseView) {
		this._view = value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		if (propertyName == RingSeriesBase.itemsSourcePropertyName) {
			this.fastItemsSource = ((() => {
				let $ret = new FastItemsSource();
				$ret.itemsSource = <IEnumerable><any>newValue;
				return $ret;
			})());
		}
		if (propertyName == RingSeriesBase.fastItemsSourcePropertyName) {
			if (typeCast<FastItemsSource>((<any>FastItemsSource).$type, oldValue) != null) {
				let $t = (typeCast<FastItemsSource>((<any>FastItemsSource).$type, oldValue));
				$t.event = delegateRemove($t.event, this.fastItemsSource_Event);
				this._fastItemsSourceAttached = false;
			}
			if (typeCast<FastItemsSource>((<any>FastItemsSource).$type, newValue) != null) {
				let $t1 = (typeCast<FastItemsSource>((<any>FastItemsSource).$type, newValue));
				$t1.event = delegateCombine($t1.event, this.fastItemsSource_Event);
				this._fastItemsSourceAttached = true;
			}
			this.prepareData();
		}
		switch (propertyName) {
			case RingSeriesBase.selectedStylePropertyName:
			this.selectedStyleResolved = <Style>newValue;
			break;

			case RingSeriesBase.valueMemberPathPropertyName:
			this.prepareData();
			break;

		}

	}
	private static readonly rootCanvasName: string = "RootCanvas";
	private _rootCanvas: Canvas = null;
	get rootCanvas(): Canvas {
		return this._rootCanvas;
	}
	set rootCanvas(value: Canvas) {
		this._rootCanvas = value;
	}
	get container(): ILegendOwner {
		return this.chart;
	}
	get isStacked(): boolean {
		return false;
	}
	get isVertical(): boolean {
		return false;
	}
	get isUsableInLegend(): boolean {
		return true;
	}
	get hasMarkers(): boolean {
		return false;
	}
	get hasSubItems(): boolean {
		return false;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		this.prepareData();
	}
	createView(): RingSeriesBaseView {
		return new RingSeriesBaseView(this);
	}
	onViewCreated(view: RingSeriesBaseView): void {
	}
	abstract analyzeRings(): RingCollection;
	abstract prepareData(): void;
	abstract prepareBrushes(): void;
	provideContainer(container: any): void {
		this.view.provideContainer(container);
	}
	clearView(): void {
		if (this.view != null) {
			this.view.clearView();
		}
	}
	abstract renderSeries(): void;
	abstract renderLegendItems(): void;
	notifyInsertItem(index: number, newItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Add, newItem, index));
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, newItem, oldItem, index));
	}
	notifyClearItems(): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(0, NotifyCollectionChangedAction.Reset));
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Remove, oldItem, index));
	}
	private handleCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		if (this.fastItemsSource != null) {
			this.fastItemsSource.handleCollectionChanged(e);
		}
	}
	resolveLegendIndex(): number {
		return -1;
	}
	forSubItems(action: (arg1: any) => void): void {
	}
}

/**
 * @hidden 
 */
export class Ring extends Base {
	static $t: Type = markType(Ring, 'Ring');
	constructor() {
		super();
		this.center = <Point>{ $type: Point_$type, x: 0, y: 0 };
		this.controlSize = new Size(1, 0, 0);
		this.ringControl = ((() => {
			let $ret = new RingControl();
			$ret.ring = this;
			return $ret;
		})());
		this.arcItems = new List$1<ArcItem>((<any>ArcItem).$type, 0);
		this.clearContent = true;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _innerExtend: number = 0;
	get innerExtend(): number {
		return this._innerExtend;
	}
	set innerExtend(value: number) {
		this._innerExtend = value;
	}
	private _controlSize: Size = new Size();
	get controlSize(): Size {
		return this._controlSize;
	}
	set controlSize(value: Size) {
		this._controlSize = value;
	}
	private _center: Point = null;
	get center(): Point {
		return this._center;
	}
	set center(value: Point) {
		this._center = value;
	}
	private _ringControl: RingControl = null;
	get ringControl(): RingControl {
		return this._ringControl;
	}
	set ringControl(value: RingControl) {
		this._ringControl = value;
	}
	private _ringSeries: RingSeriesBase = null;
	get ringSeries(): RingSeriesBase {
		return this._ringSeries;
	}
	set ringSeries(value: RingSeriesBase) {
		this._ringSeries = value;
		this._ringSeries.view.addRing(this.ringControl);
		if (this.ringControl != null) {
			this.ringControl.view.onSeriesProvided(value);
		}
	}
	private _ringBreadth: number = 0;
	get ringBreadth(): number {
		return this._ringBreadth;
	}
	set ringBreadth(value: number) {
		this._ringBreadth = value;
	}
	private _arcItems: List$1<ArcItem> = null;
	get arcItems(): List$1<ArcItem> {
		return this._arcItems;
	}
	set arcItems(value: List$1<ArcItem>) {
		this._arcItems = value;
	}
	private _owner: XamDoughnutChart = null;
	get owner(): XamDoughnutChart {
		return this._owner;
	}
	set owner(value: XamDoughnutChart) {
		this._owner = value;
	}
	private _clearContent: boolean = false;
	get clearContent(): boolean {
		return this._clearContent;
	}
	set clearContent(value: boolean) {
		this._clearContent = value;
	}
	renderArcs(): boolean {
		if (this.ringControl != null && this.ringControl.view.isReady()) {
			let x: number, y: number;
			x = this.center.x - this.ringSeries.location.x;
			y = this.center.y - this.ringSeries.location.y;
			this.ringControl.view.positionRingControl(x, y);
			return this.ringControl.renderControl();
		}
		return false;
	}
	prepareArcs(): void {
		if (this.ringControl != null) {
			this.ringControl.width = this.controlSize.width;
			this.ringControl.height = this.controlSize.height;
			this.ringSeries.view.addRing(this.ringControl);
			this.ringControl.itemsSource = this.arcItems;
		}
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		this.ringControl.notifyInsertItem(source_, index, newItem);
	}
	notifyClearItems(source_: any): void {
		this.ringControl.notifyClearItems(source_);
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		this.ringControl.notifyRemoveItem(source_, index, oldItem);
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		this.ringControl.notifySetItem(source_, index, oldItem, newItem);
	}
}

/**
 * @hidden 
 */
export class RingCollection extends ObservableCollection$1<Ring> {
	static $t: Type = markType(RingCollection, 'RingCollection', (<any>ObservableCollection$1).$type.specialize((<any>Ring).$type));
	constructor() {
		super((<any>Ring).$type, 0);
	}
	protected clearItems(): void {
		for (let ring of fromEnum<Ring>(this)) {
			if (ring.clearContent) {
				let index: number = 0;
				let count: number = ring.ringControl.arcs.count;
				while (index < count) {
					ring.ringControl.arcs.destroy(ring.ringControl.arcs.item(index));
					index++;
				}
				ring.ringControl.arcs.count = 0;
				ring.ringControl = null;
			}
		}
		super.clearItems();
	}
	protected removeItem(index: number): void {
		let ring: Ring = this._inner[index];
		if (ring.clearContent) {
			ring.ringControl.arcs.destroy(ring.ringControl.arcs.item(index));
			ring.ringControl.arcs.count = 0;
			ring.ringControl = null;
		}
		super.removeItem(index);
	}
}

/**
 * @hidden 
 */
export class RingControl extends Control implements INotifyPropertyChanged {
	static $t: Type = markType(RingControl, 'RingControl', (<any>Control).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>RingControl).$type;
		this.view = this.createView();
		this.onViewCreated(this.view);
		this.view.onInit();
		this.arcs = ((() => {
			let $ret = new Pool$1<Arc>((<any>Arc).$type);
			$ret.create = runOn(this.view, this.view.arcCreate);
			$ret.activate = runOn(this.view, this.view.arcActivate);
			$ret.disactivate = runOn(this.view, this.view.arcDisactivate);
			$ret.destroy = runOn(this.view, this.view.arcDestroy);
			return $ret;
		})());
	}
	get series(): RingSeriesBase {
		return this.ring.ringSeries;
	}
	private _view: RingControlView = null;
	get view(): RingControlView {
		return this._view;
	}
	set view(value: RingControlView) {
		this._view = value;
	}
	private _ring: Ring = null;
	get ring(): Ring {
		return this._ring;
	}
	set ring(value: Ring) {
		this._ring = value;
		if (this._ring == null) {
			this.view.onSeriesProvided(null);
		} else {
			this.view.onSeriesProvided(this._ring.ringSeries);
		}
	}
	arcs: Pool$1<Arc> = null;
	private _itemsSource: List$1<ArcItem> = null;
	get itemsSource(): List$1<ArcItem> {
		return this._itemsSource;
	}
	set itemsSource(value: List$1<ArcItem>) {
		this._itemsSource = value;
	}
	private static readonly rootCanvasName: string = "RootCanvas";
	private _rootCanvas: Canvas = null;
	get rootCanvas(): Canvas {
		return this._rootCanvas;
	}
	set rootCanvas(value: Canvas) {
		this._rootCanvas = value;
	}
	createView(): RingControlView {
		return new RingControlView(this);
	}
	onViewCreated(view: RingControlView): void {
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(propertyName, oldValue, newValue));
		}
	}
	onSizeUpdated(): void {
		this.renderControl();
	}
	renderControl(): boolean {
		if (this.itemsSource == null) {
			return false;
		}
		if (!this.view.isReady()) {
			return false;
		}
		let index: number = 0;
		let areResized: boolean = false;
		for (let arcItem of fromEnum<ArcItem>(this.itemsSource)) {
			let arc: Arc = this.arcs.item(index);
			arc.arcItem = arcItem;
			if (arc.innerExtent != this.ring.innerExtend) {
				arc.innerExtent = this.ring.innerExtend;
			}
			if ((arc.width != this.ring.controlSize.width || arc.height != this.ring.controlSize.height) && arc.view.ready()) {
				arc.width = this.ring.controlSize.width;
				arc.height = this.ring.controlSize.height;
				this.view.updateArcSize(arc);
				areResized = true;
			}
			if (arc.startAngle != arcItem.startAngle) {
				arc.startAngle = arcItem.startAngle;
			}
			if (arc.endAngle != arcItem.endAngle) {
				arc.endAngle = arcItem.endAngle;
			}
			if (arc.itemsSource != arcItem.itemSource) {
				arc.itemsSource = arcItem.itemSource;
			}
			if (arc.brushes != arcItem.brushes) {
				arc.brushes = arcItem.brushes;
			}
			this.view.positionArc(arc, 0, 0);
			index++;
		}
		this.arcs.count = index;
		return areResized;
	}
	provideContainer(container: any): void {
		this.view.provideContainer(container);
	}
	onContainerResized(): void {
		this.view.onContainerResized();
	}
	getContainer(): DomRenderer {
		return this.view.getContainer();
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		for (let ii: number = 0; ii < this.arcs.count; ii++) {
			this.arcs.item(ii).notifyInsertItem(source_, index, newItem);
		}
	}
	notifyClearItems(source_: any): void {
		for (let ii: number = 0; ii < this.arcs.count; ii++) {
			this.arcs.item(ii).notifyClearItems(source_);
		}
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		for (let ii: number = 0; ii < this.arcs.count; ii++) {
			this.arcs.item(ii).notifyRemoveItem(source_, index, oldItem);
		}
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		for (let ii: number = 0; ii < this.arcs.count; ii++) {
			this.arcs.item(ii).notifySetItem(source_, index, oldItem, newItem);
		}
	}
}

/**
 * @hidden 
 */
export class RingSeriesCollection extends ObservableCollection$1<RingSeriesBase> {
	static $t: Type = markType(RingSeriesCollection, 'RingSeriesCollection', (<any>ObservableCollection$1).$type.specialize((<any>RingSeriesBase).$type));
	constructor() {
		super((<any>RingSeriesBase).$type, 0);
	}
}

/**
 * @hidden 
 */
export class SliceItem extends Base {
	static $t: Type = markType(SliceItem, 'SliceItem');
	constructor() {
		super();
	}
	private _startAngle: number = 0;
	get startAngle(): number {
		return this._startAngle;
	}
	set startAngle(value: number) {
		this._startAngle = value;
	}
	private _endAngle: number = 0;
	get endAngle(): number {
		return this._endAngle;
	}
	set endAngle(value: number) {
		this._endAngle = value;
	}
	private _arcItem: ArcItem = null;
	get arcItem(): ArcItem {
		return this._arcItem;
	}
	set arcItem(value: ArcItem) {
		this._arcItem = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _slice: Slice = null;
	get slice(): Slice {
		return this._slice;
	}
	set slice(value: Slice) {
		this._slice = value;
	}
	private _data: any = null;
	get data(): any {
		return this._data;
	}
	set data(value: any) {
		this._data = value;
	}
	private _isOther: boolean = false;
	get isOther(): boolean {
		return this._isOther;
	}
	set isOther(value: boolean) {
		this._isOther = value;
	}
}

/**
 * @hidden 
 */
export class SliceCollection extends ObservableCollection$1<SliceItem> {
	static $t: Type = markType(SliceCollection, 'SliceCollection', (<any>ObservableCollection$1).$type.specialize((<any>SliceItem).$type));
	constructor() {
		super((<any>SliceItem).$type, 0);
	}
	private _isAttached: boolean = false;
	get isAttached(): boolean {
		return this._isAttached;
	}
	set isAttached(value: boolean) {
		this._isAttached = value;
	}
	private _useForSelection: boolean = false;
	get useForSelection(): boolean {
		return this._useForSelection;
	}
	set useForSelection(value: boolean) {
		this._useForSelection = value;
	}
	protected insertItem(index: number, item: SliceItem): void {
		if (this.contains(item)) {
			return;
		}
		let sliceItemIndex: number = this.findSliceItemIndexBySlice(item.slice);
		if (sliceItemIndex != -1) {
			super.setItem(sliceItemIndex, item);
		} else {
			super.insertItem(index, item);
			if (this.isAttached) {
				if (this.useForSelection) {
					item.slice.isSelected = true;
				} else {
					item.slice.isExploded = true;
				}
			}
		}
	}
	protected setItem(index: number, item: SliceItem): void {
		if (this.isAttached) {
			if (this.useForSelection) {
				this._inner[index].slice.isSelected = false;
			} else {
				this._inner[index].slice.isExploded = false;
			}
		}
		super.setItem(index, item);
	}
	protected removeItem(index: number): void {
		let sliceItem = this._inner[index];
		super.removeItem(index);
		if (this.isAttached) {
			if (this.useForSelection) {
				sliceItem.slice.isSelected = false;
			} else {
				sliceItem.slice.isExploded = false;
			}
		}
	}
	remove(item: SliceItem): boolean {
		let sliceItemIndex: number = this.findSliceItemIndexBySlice(item.slice);
		if (sliceItemIndex != -1) {
			this.removeItem(sliceItemIndex);
			return true;
		} else {
			return false;
		}
	}
	protected clearItems(): void {
		while (this.count > 0) {
			this.removeItem(0);
		}
	}
	private findSliceItemIndexBySlice(slice: Slice): number {
		for (let i: number = 0; i < this.count; i++) {
			if (this._inner[i].slice == slice) {
				return i;
			}
		}
		return -1;
	}
}

/**
 * @hidden 
 */
export class XamDoughnutChart extends Control implements INotifyPropertyChanged, ILegendOwner {
	static $t: Type = markType(XamDoughnutChart, 'XamDoughnutChart', (<any>Control).$type, [INotifyPropertyChanged_$type, ILegendOwner_$type]);
	private _series: RingSeriesCollection = new RingSeriesCollection();
	private _rings: RingCollection = new RingCollection();
	private _selectedSlices: SliceCollection = ((() => {
		let $ret = new SliceCollection();
		$ret.isAttached = true;
		$ret.useForSelection = true;
		return $ret;
	})());
	private _explodedSlices: SliceCollection = ((() => {
		let $ret = new SliceCollection();
		$ret.isAttached = true;
		$ret.useForSelection = false;
		return $ret;
	})());
	private readonly _propertyUpdatedOverride: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	constructor() {
		super();
		let view: XamDoughnutChartView = this.createView();
		this.onViewCreated(view);
		view.onInit();
		this.defaultStyleKey = (<any>XamDoughnutChart).$type;
		this._propertyUpdatedOverride = (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue);
		this.propertyUpdated = delegateCombine(this.propertyUpdated, this._propertyUpdatedOverride);
		let $t = this.series;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.series_CollectionChanged));
	}
	get rings(): RingCollection {
		return this._rings;
	}
	static readonly allowSliceSelectionPropertyName: string = "AllowSliceSelection";
	static readonly allowSliceSelectionProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.allowSliceSelectionPropertyName, Boolean_$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamDoughnutChart>((<any>XamDoughnutChart).$type, o)).raisePropertyChanged(XamDoughnutChart.allowSliceSelectionPropertyName, e.oldValue, e.newValue)));
	get allowSliceSelection(): boolean {
		return <boolean>this.getValue(XamDoughnutChart.allowSliceSelectionProperty);
	}
	set allowSliceSelection(value: boolean) {
		this.setValue(XamDoughnutChart.allowSliceSelectionProperty, value);
	}
	get isSurfaceInteractionDisabled(): boolean {
		return <boolean>this.getValue(XamDoughnutChart.isSurfaceInteractionDisabledProperty);
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this.setValue(XamDoughnutChart.isSurfaceInteractionDisabledProperty, value);
	}
	static readonly isSurfaceInteractionDisabledPropertyName: string = "IsSurfaceInteractionDisabled";
	static readonly isSurfaceInteractionDisabledProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.isSurfaceInteractionDisabledPropertyName, Boolean_$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamDoughnutChart>((<any>XamDoughnutChart).$type, o)).raisePropertyChanged(XamDoughnutChart.isSurfaceInteractionDisabledPropertyName, e.oldValue, e.newValue)));
	static readonly allowSliceExplosionPropertyName: string = "AllowSliceExplosion";
	static readonly allowSliceExplosionProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.allowSliceExplosionPropertyName, Boolean_$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamDoughnutChart>((<any>XamDoughnutChart).$type, o)).raisePropertyChanged(XamDoughnutChart.allowSliceExplosionPropertyName, e.oldValue, e.newValue)));
	get allowSliceExplosion(): boolean {
		return <boolean>this.getValue(XamDoughnutChart.allowSliceExplosionProperty);
	}
	set allowSliceExplosion(value: boolean) {
		this.setValue(XamDoughnutChart.allowSliceExplosionProperty, value);
	}
	get series(): RingSeriesCollection {
		return this._series;
	}
	private series_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		let removed = new List$1<RingSeriesBase>((<any>RingSeriesBase).$type, 0);
		if (e.oldItems != null) {
			for (let item of fromEn<any>(e.oldItems)) {
				if (e.newItems == null || !e.newItems.contains(item)) {
					(<RingSeriesBase>item).clearView();
					this.view.removeSeries(<RingSeriesBase>item);
				}
			}
		}
		this.prepareRingCollection();
		this.renderChart();
	}
	private static readonly contentPresenterName: string = "ContentPresenter";
	static readonly innerExtentPropertyName: string = "InnerExtent";
	static readonly innerExtentProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.innerExtentPropertyName, Number_$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, 40, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let newValue: number = <number>e.newValue;
		if (newValue < 0 || newValue > 100) {
			if (e.oldValue != null) {
				(<XamDoughnutChart>o).innerExtent = <number>e.oldValue;
			}
			return;
		}
		(<XamDoughnutChart>o).renderChart();
		(<XamDoughnutChart>o).raisePropertyChanged(XamDoughnutChart.innerExtentPropertyName, e.oldValue, e.newValue);
	}));
	get innerExtent(): number {
		return <number>this.getValue(XamDoughnutChart.innerExtentProperty);
	}
	set innerExtent(value: number) {
		this.setValue(XamDoughnutChart.innerExtentProperty, value);
	}
	get selectedSlices(): SliceCollection {
		return this._selectedSlices;
	}
	set selectedSlices(value: SliceCollection) {
		this._selectedSlices.clear();
		this._selectedSlices.isAttached = false;
		this._selectedSlices = value;
		this._selectedSlices.isAttached = true;
		this._selectedSlices.useForSelection = true;
		for (let i: number = 0; i < this._selectedSlices.count; i++) {
			this._selectedSlices._inner[i].slice.isSelected = true;
		}
	}
	get explodedSlices(): SliceCollection {
		return this._explodedSlices;
	}
	set explodedSlices(value: SliceCollection) {
		this._explodedSlices.clear();
		this._explodedSlices.isAttached = false;
		this._explodedSlices = value;
		this._explodedSlices.isAttached = true;
		this._explodedSlices.useForSelection = false;
		for (let i: number = 0; i < this._explodedSlices.count; i++) {
			this._explodedSlices._inner[i].slice.isExploded = true;
		}
	}
	static readonly selectedStylePropertyName: string = "SelectedStyle";
	static readonly selectedStyleProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.selectedStylePropertyName, (<any>Style).$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamDoughnutChart>((<any>XamDoughnutChart).$type, o)).raisePropertyChanged(XamDoughnutChart.selectedStylePropertyName, e.oldValue, e.newValue)));
	get selectedStyle(): Style {
		return <Style>this.getValue(XamDoughnutChart.selectedStyleProperty);
	}
	set selectedStyle(value: Style) {
		this.setValue(XamDoughnutChart.selectedStyleProperty, value);
	}
	static readonly centerDataPropertyName: string = "CenterData";
	static readonly centerDataProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.centerDataPropertyName, (<any>Base).$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamDoughnutChart>((<any>XamDoughnutChart).$type, o)).raisePropertyChanged(XamDoughnutChart.centerDataPropertyName, e.oldValue, e.newValue)));
	get centerData(): any {
		return <any>this.getValue(XamDoughnutChart.centerDataProperty);
	}
	set centerData(value: any) {
		this.setValue(XamDoughnutChart.centerDataProperty, value);
	}
	static readonly centerDataTemplatePropertyName: string = "CenterDataTemplate";
	static readonly centerDataTemplateProperty: DependencyProperty = DependencyProperty.register(XamDoughnutChart.centerDataTemplatePropertyName, (<any>DataTemplate).$type, (<any>XamDoughnutChart).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamDoughnutChart>((<any>XamDoughnutChart).$type, o)).raisePropertyChanged(XamDoughnutChart.centerDataTemplatePropertyName, e.oldValue, e.newValue)));
	get centerDataTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(XamDoughnutChart.centerDataTemplateProperty);
	}
	set centerDataTemplate(value: DataTemplate) {
		this.setValue(XamDoughnutChart.centerDataTemplateProperty, value);
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.raisePropertyChanged(XamDoughnutChart.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.raisePropertyChanged(XamDoughnutChart.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	private _view: XamDoughnutChartView = null;
	get view(): XamDoughnutChartView {
		return this._view;
	}
	set view(value: XamDoughnutChartView) {
		this._view = value;
	}
	destroy(): void {
		this.view.provideContainer(null);
		for (let series of fromEnum<RingSeriesBase>(this.series)) {
			series.clearView();
		}
	}
	selectSlice(slice: SliceItem, shouldSelect: boolean): void {
		if (shouldSelect) {
			this.selectedSlices.add(slice);
		} else {
			this.selectedSlices.remove(slice);
		}
	}
	explodeSlice(slice: SliceItem, explode: boolean): void {
		if (explode) {
			this.explodedSlices.add(slice);
		} else {
			this.explodedSlices.remove(slice);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case XamDoughnutChart.selectedStylePropertyName:
			for (let series of fromEnum<RingSeriesBase>(this.series)) {
				series.selectedStyleResolved = <Style>newValue;
			}
			break;

			case XamDoughnutChart.allowSliceExplosionPropertyName:
			for (let i: number = 0; i < this._rings.count; i++) {
				for (let arc of fromEnum<Arc>(this._rings._inner[i].ringControl.arcs.active)) {
					arc.allowSliceExplosion = this.allowSliceExplosion;
				}
			}
			break;

			case XamDoughnutChart.allowSliceSelectionPropertyName:
			for (let i1: number = 0; i1 < this._rings.count; i1++) {
				for (let arc1 of fromEnum<Arc>(this._rings._inner[i1].ringControl.arcs.active)) {
					arc1.allowSliceSelection = this.allowSliceSelection;
				}
			}
			break;

			case XamDoughnutChart.pixelScalingRatioPropertyName:
			let clampedValue = DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio);
			if (isNaN_(clampedValue)) {
				this.actualPixelScalingRatio = 1;
			} else {
				this.actualPixelScalingRatio = clampedValue;
			}
			break;

			case XamDoughnutChart.actualPixelScalingRatioPropertyName:
			for (let ring of fromEnum<Ring>(this._rings)) {
				for (let arc2 of fromEnum<Arc>(ring.ringControl.arcs.active)) {
					arc2.actualPixelScalingRatio = this.actualPixelScalingRatio;
				}
			}
			break;

		}

	}
	createView(): XamDoughnutChartView {
		return new XamDoughnutChartView(this);
	}
	onViewCreated(view: XamDoughnutChartView): void {
		this.view = <XamDoughnutChartView>view;
	}
	renderChart(): void {
		this.prepareRings();
		this.renderSeries();
		this.renderRings();
		this.prepareCenterPresenter();
		this.view.updateView();
	}
	renderSeries(): void {
		for (let series of fromEnum<RingSeriesBase>(this.series)) {
			series.renderSeries();
		}
	}
	prepareCenterPresenter(): void {
		let viewport: Rect = this.view.viewport;
		if (viewport.isEmpty || viewport.width == 0 || viewport.height == 0) {
			return;
		}
		let centerPoint: Point = <Point>{ $type: Point_$type, x: viewport.width / 2, y: viewport.height / 2 };
		let breadth: number = Math.min(viewport.width / 2, viewport.height / 2);
		let innerSeriesRadiusFactor: number = 0.9;
		if (this.series.count > 0) {
			innerSeriesRadiusFactor = this.series._inner[0].radiusFactor;
			if (isNaN_(innerSeriesRadiusFactor) || isInfinity(innerSeriesRadiusFactor) || innerSeriesRadiusFactor < 0) {
				innerSeriesRadiusFactor = 0;
			} else if (innerSeriesRadiusFactor > 1) {
				innerSeriesRadiusFactor = 1;
			}
		}
		let initialOffset: number = this.innerExtent * breadth / 100 * innerSeriesRadiusFactor;
		this.view.setCenterPresenterSize(initialOffset * 2, initialOffset * 2);
		this.view.positonCenterPresenter(centerPoint.x - initialOffset, centerPoint.y - initialOffset);
	}
	renderRings(): void {
		let sizeChanged: boolean = false;
		for (let ring of fromEnum<Ring>(this._rings)) {
			if (ring.renderArcs()) {
				sizeChanged = true;
			}
		}
		if (sizeChanged) {
			for (let ring1 of fromEnum<Ring>(this._rings)) {
				ring1.ringSeries.view.onSizeChanged();
			}
		}
	}
	prepareRings(): void {
		let viewport: Rect = this.view.viewport;
		if (viewport.isEmpty || viewport.width == 0 || viewport.height == 0) {
			return;
		}
		let centerPoint: Point = <Point>{ $type: Point_$type, x: viewport.width / 2, y: viewport.height / 2 };
		let widthBreadth: number = Math.min(viewport.width / 2, viewport.height / 2);
		let heightBreadth: number = Math.max(viewport.width / 2, viewport.height / 2);
		if (viewport.width > viewport.height) {
			widthBreadth = widthBreadth + heightBreadth;
			heightBreadth = widthBreadth - heightBreadth;
			widthBreadth = widthBreadth - heightBreadth;
		}
		let seriesWidthBreadth: number = ((100 - this.innerExtent) / 100 * widthBreadth) / this._rings.count;
		let seriesHeightBreadth: number = ((100 - this.innerExtent) / 100 * heightBreadth) / this._rings.count;
		let initialWidthOffset: number = this.innerExtent * widthBreadth / 100;
		let initialHeightOffset: number = this.innerExtent * heightBreadth / 100;
		let index: number = 1;
		for (let ring of fromEnum<Ring>(this._rings)) {
			let halfWidth: number = (initialWidthOffset + (seriesWidthBreadth * index));
			let halfHeight: number = (initialHeightOffset + (seriesHeightBreadth * index));
			ring.ringBreadth = seriesWidthBreadth;
			ring.controlSize = new Size(1, halfWidth * 2, halfHeight * 2);
			ring.center = <Point>{ $type: Point_$type, x: centerPoint.x - halfWidth, y: centerPoint.y - halfHeight };
			ring.innerExtend = 100 - (seriesWidthBreadth / halfWidth * 100);
			ring.prepareArcs();
			index++;
		}
	}
	prepareRingCollection(): void {
		this.explodedSlices.clear();
		this.selectedSlices.clear();
		this._rings.clear();
		this.view.ensureCenterPresenter();
		this.view.clearSeries();
		let index: number = 0;
		for (let i = 0; i < this.series.count; i++) {
			let series = <RingSeriesBase>this.series._inner[i];
			series.chart = this;
			this.view.addSeries(series);
			let series_ = series;
			(<any>series_).externalObject.sychronizeCollections();
			let seriesRings: RingCollection = series.analyzeRings();
			for (let ring of fromEnum<Ring>(seriesRings)) {
				ring.owner = this;
				ring.index = index;
				this._rings.add(ring);
				index++;
			}
		}
	}
	onSizeUpdated(): void {
		if (this.view != null) {
			this.height = this.view.viewport.height;
			this.width = this.view.viewport.width;
		}
		this.renderChart();
	}
	sliceClick: (sender: any, e: SliceClickEventArgs) => void = null;
	onSliceClick(sender: any, e: SliceClickEventArgs): void {
		let arc = <Arc>sender;
		let ringSeries = arc.ring.ringSeries;
		if (ringSeries.isSurfaceInteractionDisabledResolved) {
			return;
		}
		if (this.sliceClick != null) {
			this.sliceClick(sender, e);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
		for (let i = 0; i < this._rings.count; i++) {
			for (let arc of fromEnum<Arc>(this._rings._inner[i].ringControl.arcs.active)) {
				arc.onDetachedFromUI();
			}
			for (let arc1 of fromEnum<Arc>(this._rings._inner[i].ringControl.arcs.inactive)) {
				arc1.onDetachedFromUI();
			}
		}
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
		for (let i = 0; i < this._rings.count; i++) {
			for (let arc of fromEnum<Arc>(this._rings._inner[i].ringControl.arcs.active)) {
				arc.onAttachedToUI();
			}
			for (let arc1 of fromEnum<Arc>(this._rings._inner[i].ringControl.arcs.inactive)) {
				arc1.onAttachedToUI();
			}
		}
	}
	provideContainer(container: any): void {
		this.view.provideContainer(container);
	}
	notifyResized(): void {
		this.view.sizeUpdated();
	}
	getContainerID(): string {
		return this.view.getContainerID();
	}
	getCenterCoordinates(): Point {
		return this.view.centerCoordinates;
	}
	getHoleRadius(): number {
		return this.view.holeRadius;
	}
	flush(): void {
		let arcs: List$1<Arc>;
		let rings: RingCollection;
		for (let i: number = 0; i < this.series.count; i++) {
			rings = this.series._inner[i].analyzeRings();
			for (let j: number = 0; j < rings.count; j++) {
				arcs = rings._inner[j].ringControl.view.arcs();
				for (let k: number = 0; k < arcs.count; k++) {
					arcs._inner[k].flush();
				}
			}
		}
	}
	holeDimensionsChanged: (sender: any, e: HoleDimensionsChangedEventArgs) => void = null;
	onHoleDimensionsChanged(): void {
		if (this.holeDimensionsChanged != null) {
			this.holeDimensionsChanged(this, new HoleDimensionsChangedEventArgs(this.getCenterCoordinates(), this.getHoleRadius()));
		}
	}
	exportVisualData(): DoughnutChartVisualData {
		let visualData: DoughnutChartVisualData = new DoughnutChartVisualData();
		visualData.series = new RingSeriesVisualDataList();
		visualData.viewport = RectData.fromRect(this.view.viewport);
		this.view.exportViewShapes(visualData);
		return visualData;
	}
	exportSerializedVisualData(): string {
		let vd: DoughnutChartVisualData = this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	private *_getSeriesWithItemsSource(source: any): IterableIterator<any> {
		for (let series of fromEnum<RingSeriesBase>(this.series)) {
			if (PieChartBase.sourcesEqual1(source, series.itemsSource)) {
				yield series;
			}
		}
	}
	private getSeriesWithItemsSource(source: any): IEnumerable$1<RingSeriesBase> {
		return toEnum(() => this._getSeriesWithItemsSource(source));
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		for (let series of fromEnum<RingSeriesBase>(this.getSeriesWithItemsSource(source_))) {
			series.notifyInsertItem(index, newItem);
		}
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		for (let series of fromEnum<RingSeriesBase>(this.getSeriesWithItemsSource(source_))) {
			series.notifySetItem(index, oldItem, newItem);
		}
	}
	notifyClearItems(source_: any): void {
		for (let series of fromEnum<RingSeriesBase>(this.getSeriesWithItemsSource(source_))) {
			series.notifyClearItems();
		}
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		for (let series of fromEnum<RingSeriesBase>(this.getSeriesWithItemsSource(source_))) {
			series.notifyRemoveItem(index, oldItem);
		}
	}
}

/**
 * @hidden 
 */
export class ArcView extends PieChartBaseView {
	static $t: Type = markType(ArcView, 'ArcView', (<any>PieChartBaseView).$type);
	private _arcModel: Arc = null;
	protected get arcModel(): Arc {
		return this._arcModel;
	}
	protected set arcModel(value: Arc) {
		this._arcModel = value;
	}
	constructor(model: Arc) {
		super(model);
		this.arcModel = model;
	}
	onRingChanged(oldRing: Ring, _ring: Ring): void {
		this.toolTipContext.series = this.arcModel.ring.ringSeries;
	}
	getActiveSlice(): Slice {
		return this.activeSlice;
	}
	updateFont(): void {
		this.setDefaultBrushes();
		this.fontBrush = new Brush();
		let container = <DomRenderer><any>this.viewManager.getContainer();
		this.fontBrush._fill = container.rootWrapper.getStyleProperty("color");
	}
}

/**
 * @hidden 
 */
export class RingControlView extends Base {
	static $t: Type = markType(RingControlView, 'RingControlView');
	private _model: RingControl = null;
	protected get model(): RingControl {
		return this._model;
	}
	protected set model(value: RingControl) {
		this._model = value;
	}
	constructor(model: RingControl) {
		super();
		this.model = model;
	}
	private _allArcs: List$1<Arc> = new List$1<Arc>((<any>Arc).$type, 0);
	private _visibleArcs: List$1<Arc> = new List$1<Arc>((<any>Arc).$type, 0);
	arcCreate(): Arc {
		let arc: Arc = new Arc();
		arc.canvasTop = 0;
		arc.canvasLeft = 0;
		arc.ring = this.model.ring;
		this._allArcs.add(arc);
		this.setupArc(arc);
		if (arc.textStyle != this.model.series.textStyle) {
			arc.textStyle = this.model.series.textStyle;
		}
		arc.labelExtent = this.model.series.labelExtent;
		arc.formatLabel = this.model.series.formatLabel;
		arc.labelMemberPath = this.model.series.labelMemberPath;
		arc.labelsPosition = this.model.series.labelsPosition;
		arc.labelTemplate = this.model.series.labelTemplate;
		arc.valueMemberPath = this.model.series.valueMemberPath;
		if (this.model.series.toolTip != null) {
			arc.toolTip = this.model.series.toolTip;
		}
		arc.leaderLineVisibility = this.model.series.leaderLineVisibility;
		arc.leaderLineStyle = this.model.series.leaderLineStyle;
		arc.leaderLineType = this.model.series.leaderLineType;
		arc.leaderLineMargin = this.model.series.leaderLineMargin;
		arc.othersCategoryThreshold = this.model.series.othersCategoryThreshold;
		arc.othersCategoryType = this.model.series.othersCategoryType;
		arc.othersCategoryText = this.model.series.othersCategoryText;
		arc.othersCategoryStyle = this.model.series.othersCategoryStyle;
		arc.legend = this.model.series.legend;
		arc.legendItemTemplate = this.model.series.legendItemTemplate;
		arc.legendItemBadgeTemplate = this.model.series.legendItemBadgeTemplate;
		arc.outlines = this.model.series.outlines;
		arc.labelInnerColor = this.model.series.labelInnerColor;
		arc.labelOuterColor = this.model.series.labelOuterColor;
		arc.startAngle = this.model.series.startAngle;
		arc.brushes = this.model.series.brushes;
		arc.selectedStyle = this.model.series.selectedStyleResolved;
		arc.isSurfaceInteractionDisabled = true;
		arc.radiusFactor = this.model.series.radiusFactor;
		arc.allowSliceExplosion = this.model.series.chart.allowSliceExplosion;
		arc.allowSliceSelection = this.model.series.chart.allowSliceSelection;
		arc.formatLegendLabel = this.model.series.formatLegendLabel;
		arc.legendLabelMemberPath = this.model.series.legendLabelMemberPath;
		arc.actualPixelScalingRatio = this.model.series.chart.actualPixelScalingRatio;
		return arc;
	}
	arcActivate(arc: Arc): void {
		let div = this._arcDivs.item(arc).rootWrapper;
		if (div != null) {
			div.show();
		}
		this._visibleArcs.add(arc);
	}
	arcDisactivate(arc: Arc): void {
		let div = this._arcDivs.item(arc).rootWrapper;
		if (div != null) {
			div.hide();
		}
		this._visibleArcs.remove(arc);
	}
	arcDestroy(arc: Arc): void {
		this.destroyArc(arc);
		this._allArcs.remove(arc);
	}
	arcs(): List$1<Arc> {
		return this._allArcs;
	}
	onInit(): void {
	}
	private sizeUpdated(): void {
		this.model.onSizeUpdated();
	}
	positionArc(arc: Arc, x: number, y: number): void {
		x = x + this.model.canvasLeft;
		y = y + this.model.canvasTop;
		if (this._owningSeries != null) {
			x = x + this._owningSeries.canvasLeft;
			y = y + this._owningSeries.canvasTop;
		}
		if (arc.canvasLeft != x || arc.canvasTop != y) {
			arc.canvasLeft = x;
			arc.canvasTop = y;
			this.positionDiv(arc, this._arcDivs.item(arc).rootWrapper);
		}
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	provideContainer(container: any): void {
		if (container == null) {
			this.model.arcs.count = 0;
			for (let arc of fromEnum<Arc>(this._allArcs)) {
				arc.destroy();
			}
			this._allArcs.clear();
			this._arcDivs.clear();
			this._visibleArcs.clear();
			return;
		}
		this.container = <DomRenderer><any>container;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		for (let arc1 of fromEnum<Arc>(this._allArcs)) {
			let div = this._arcDivs.item(arc1);
			this.container.append(div.rootWrapper);
			arc1.arcView.updateFont();
		}
		this.sizeUpdated();
	}
	private _arcDivs: Dictionary$2<Arc, DomRenderer> = new Dictionary$2<Arc, DomRenderer>((<any>Arc).$type, DomRenderer_$type, 0);
	private setupArc(arc: Arc): void {
		let arcDiv = this.container.createElement("div");
		arcDiv.setStyleProperty("position", "absolute");
		this._arcDivs.addItem(arc, this.container.getSubRenderer(arcDiv));
		this.adjustDiv(arc, arcDiv);
		this.positionDiv(arc, arcDiv);
		if (this.container != null) {
			this.container.append(arcDiv);
		}
		arc.provideContainer(this._arcDivs.item(arc));
		arcDiv.setStyleProperty("position", "absolute");
	}
	private adjustDiv(arc: Arc, arcDiv: DomWrapper): void {
		arcDiv.setStyleProperty("width", arc.width.toString() + "px");
		arcDiv.setStyleProperty("height", arc.height.toString() + "px");
	}
	private positionDiv(arc: Arc, arcDiv: DomWrapper): void {
		arcDiv.setStyleProperty("top", arc.canvasTop.toString() + "px");
		arcDiv.setStyleProperty("left", arc.canvasLeft.toString() + "px");
	}
	private destroyArc(arc: Arc): void {
		let div = this._arcDivs.item(arc);
		div.rootWrapper.remove();
		this._arcDivs.removeItem(arc);
		arc.provideContainer(null);
	}
	updateArcSize(arc: Arc): void {
		this.adjustDiv(arc, (<DomRenderer><any>arc.getContainer()).rootWrapper);
		arc.onContainerResized(arc.width, arc.height);
	}
	isReady(): boolean {
		return this.container != null;
	}
	onContainerResized(): void {
	}
	private _owningSeries: RingSeriesBase = null;
	onSeriesProvided(ringSeriesBase: RingSeriesBase): void {
		this._owningSeries = ringSeriesBase;
		if (ringSeriesBase != null) {
			ringSeriesBase.propertyUpdated = delegateCombine(ringSeriesBase.propertyUpdated, runOn(this, this.ringSeriesBase_PropertyUpdated));
		}
	}
	private ringSeriesBase_PropertyUpdated(sender: any, e: PropertyUpdatedEventArgs): void {
		switch (e.propertyName) {
			case "LabelExtent":
			for (let i = 0; i < this._allArcs.count; i++) {
				this._allArcs._inner[i].labelExtent = <number>e.newValue;
			}
			break;

			case "LabelMemberPath":
			for (let i1 = 0; i1 < this._allArcs.count; i1++) {
				this._allArcs._inner[i1].labelMemberPath = <string>e.newValue;
			}
			break;

			case "LabelsPosition":
			for (let i2 = 0; i2 < this._allArcs.count; i2++) {
				this._allArcs._inner[i2].labelsPosition = EnumUtil.getEnumValue<LabelsPosition>(LabelsPosition_$type, e.newValue);
			}
			break;

			case "LabelTemplate":
			for (let i3 = 0; i3 < this._allArcs.count; i3++) {
				this._allArcs._inner[i3].labelTemplate = <DataTemplate>e.newValue;
			}
			break;

			case "ValueMemberPath":
			for (let i4 = 0; i4 < this._allArcs.count; i4++) {
				this._allArcs._inner[i4].valueMemberPath = <string>e.newValue;
			}
			break;

			case "ToolTip":
			for (let i5 = 0; i5 < this._allArcs.count; i5++) {
				this._allArcs._inner[i5].toolTip = <any>e.newValue;
			}
			break;

			case "LeaderLineVisibility":
			for (let i6 = 0; i6 < this._allArcs.count; i6++) {
				this._allArcs._inner[i6].leaderLineVisibility = EnumUtil.getEnumValue<Visibility>(Visibility_$type, e.newValue);
			}
			break;

			case "LeaderLineStyle":
			for (let i7 = 0; i7 < this._allArcs.count; i7++) {
				this._allArcs._inner[i7].leaderLineStyle = <Style>e.newValue;
			}
			break;

			case "LeaderLineType":
			for (let i8 = 0; i8 < this._allArcs.count; i8++) {
				this._allArcs._inner[i8].leaderLineType = EnumUtil.getEnumValue<LeaderLineType>(LeaderLineType_$type, e.newValue);
			}
			break;

			case "LeaderLineMargin":
			for (let i9 = 0; i9 < this._allArcs.count; i9++) {
				this._allArcs._inner[i9].leaderLineMargin = <number>e.newValue;
			}
			break;

			case "OthersCategoryThreshold":
			for (let i10 = 0; i10 < this._allArcs.count; i10++) {
				this._allArcs._inner[i10].othersCategoryThreshold = <number>e.newValue;
			}
			break;

			case "OthersCategoryType":
			for (let i11 = 0; i11 < this._allArcs.count; i11++) {
				this._allArcs._inner[i11].othersCategoryType = EnumUtil.getEnumValue<OthersCategoryType>(OthersCategoryType_$type, e.newValue);
			}
			break;

			case "OthersCategoryText":
			for (let i12 = 0; i12 < this._allArcs.count; i12++) {
				this._allArcs._inner[i12].othersCategoryText = <string>e.newValue;
			}
			break;

			case "OthersCategoryStyle":
			for (let i13 = 0; i13 < this._allArcs.count; i13++) {
				this._allArcs._inner[i13].othersCategoryStyle = <Style>e.newValue;
			}
			break;

			case "Legend":
			for (let i14 = 0; i14 < this._allArcs.count; i14++) {
				this._allArcs._inner[i14].legend = <IChartLegend><any>e.newValue;
			}
			break;

			case "LegendItemTemplate":
			for (let i15 = 0; i15 < this._allArcs.count; i15++) {
				this._allArcs._inner[i15].legendItemTemplate = <DataTemplate>e.newValue;
			}
			break;

			case "LegendItemBadgeTemplate":
			for (let i16 = 0; i16 < this._allArcs.count; i16++) {
				this._allArcs._inner[i16].legendItemBadgeTemplate = <DataTemplate>e.newValue;
			}
			break;

			case "Outlines":
			for (let i17 = 0; i17 < this._allArcs.count; i17++) {
				this._allArcs._inner[i17].outlines = <BrushCollection>e.newValue;
			}
			break;

			case "Brushes":
			for (let i18 = 0; i18 < this._allArcs.count; i18++) {
				this._allArcs._inner[i18].brushes = <BrushCollection>e.newValue;
			}
			break;

			case "SelectedStyle":
			for (let i19 = 0; i19 < this._allArcs.count; i19++) {
				this._allArcs._inner[i19].selectedStyle = <Style>e.newValue;
			}
			break;

			case "SelectedStyleResolved":
			for (let i20 = 0; i20 < this._allArcs.count; i20++) {
				this._allArcs._inner[i20].selectedStyle = <Style>e.newValue;
			}
			break;

			case "RadiusFactor":
			for (let i21 = 0; i21 < this._allArcs.count; i21++) {
				this._allArcs._inner[i21].radiusFactor = <number>e.newValue;
			}
			break;

		}

	}
	onArcsResized(): void {
		for (let arc of fromEnum<Arc>(this._allArcs)) {
			arc.flush();
		}
	}
	getContainer(): DomRenderer {
		return this.container;
	}
	positionRingControl(x: number, y: number): void {
		this.model.canvasLeft = x;
		this.model.canvasTop = y;
		this.repositionArcs();
	}
	repositionArcs(): void {
		for (let i = 0; i < this._allArcs.count; i++) {
			let arc = this._allArcs._inner[i];
			this.positionArc(arc, 0, 0);
		}
	}
}

/**
 * @hidden 
 */
export class RingSeriesBaseView extends Base {
	static $t: Type = markType(RingSeriesBaseView, 'RingSeriesBaseView');
	private _model: RingSeriesBase = null;
	protected get model(): RingSeriesBase {
		return this._model;
	}
	protected set model(value: RingSeriesBase) {
		this._model = value;
	}
	constructor(model: RingSeriesBase) {
		super();
		this.attachedRings = new List$1<RingControl>((<any>RingControl).$type, 0);
		this.model = model;
	}
	onInit(): void {
		this.model.legendItemTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = PieLegendTemplates.doughnutLegendItemRender;
			$ret.measure = PieLegendTemplates.defaultLegendItemMeasure;
			return $ret;
		})());
		this.model.legendItemBadgeTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = PieLegendTemplates.doughnutBadgeTemplate;
			$ret.measure = PieLegendTemplates.legendItemBadgeMeasure;
			return $ret;
		})());
	}
	private _attachedRings: List$1<RingControl> = null;
	get attachedRings(): List$1<RingControl> {
		return this._attachedRings;
	}
	set attachedRings(value: List$1<RingControl>) {
		this._attachedRings = value;
	}
	addRing(ringControl: RingControl): void {
		if (!this.attachedRings.contains(ringControl)) {
			this.attachedRings.add(ringControl);
		}
		if (this.container != null && (ringControl.getContainer() != this.container)) {
			ringControl.provideContainer(this.container);
		}
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	getDefaultStyle(container: DomRenderer, brushes: BrushCollection, outlines: BrushCollection, fontBrush: Brush, font: FontInfo): { p1: BrushCollection; p2: BrushCollection; p3: Brush; p4: FontInfo; } {
		let $ret = BrushUtil.getBrushCollection("chart", container, brushes, outlines);
		brushes = $ret.p2;
		outlines = $ret.p3;
		let defaultColors: string[] = <string[]>new Array(brushes.count * 2);
		for (let i: number = 0; i < defaultColors.length; i += 2) {
			defaultColors[i] = "#fff";
			defaultColors[i + 1] = brushes.item(intDivide(i, 2))._fill;
		}
		let $ret1 = BrushUtil.getBrushCollection("doughnut", container, brushes, outlines, defaultColors);
		brushes = $ret1.p2;
		outlines = $ret1.p3;
		fontBrush = new Brush();
		fontBrush._fill = this.container.rootWrapper.getStyleProperty("color");
		font = FontUtil.getFont(container);
		return {
			p1: brushes,
			p2: outlines,
			p3: fontBrush,
			p4: font

		};
	}
	private _brushes: BrushCollection = null;
	private _outlines: BrushCollection = null;
	private _fontBrush: Brush = null;
	private _font: FontInfo = null;
	provideContainer(container: any): void {
		if (container == null) {
			for (let ring of fromEnum<RingControl>(this.attachedRings)) {
				ring.provideContainer(null);
			}
			return;
		}
		this.container = <DomRenderer><any>container;
		let brushes: BrushCollection;
		let outlines: BrushCollection;
		let fontBrush: Brush;
		let font: FontInfo;
		let $ret = this.getDefaultStyle(this.container, brushes, outlines, fontBrush, font);
		brushes = $ret.p1;
		outlines = $ret.p2;
		fontBrush = $ret.p3;
		font = $ret.p4;
		this._brushes = brushes;
		this._outlines = outlines;
		this._fontBrush = fontBrush;
		this._font = font;
		if (this.model.brushes == null) {
			this.model.brushes = this._brushes;
		}
		if (this.model.outlines == null) {
			this.model.outlines = this._outlines;
		}
		for (let ring1 of fromEnum<RingControl>(this.attachedRings)) {
			ring1.provideContainer(this.container);
		}
	}
	isReady(): boolean {
		return true;
	}
	clearView(): void {
		this.provideContainer(null);
	}
	onSizeChanged(): void {
		for (let i = 0; i < this.attachedRings.count; i++) {
			let currRing = this.attachedRings._inner[i];
			for (let j = 0; j < currRing.arcs.active.count; j++) {
				let arc = currRing.arcs.active._inner[j];
				arc.flush();
			}
		}
	}
	positionSeries(x: number, y: number): void {
		this.model.canvasLeft = x;
		this.model.canvasTop = y;
		this.model.location = <Point>{ $type: Point_$type, x: x, y: y };
	}
}

/**
 * @hidden 
 */
export class XamDoughnutChartView extends Base {
	static $t: Type = markType(XamDoughnutChartView, 'XamDoughnutChartView');
	private _model: XamDoughnutChart = null;
	protected get model(): XamDoughnutChart {
		return this._model;
	}
	protected set model(value: XamDoughnutChart) {
		this._model = value;
	}
	private _centerCoordinates: Point = null;
	get centerCoordinates(): Point {
		return this._centerCoordinates;
	}
	set centerCoordinates(value: Point) {
		this._centerCoordinates = value;
	}
	private _holeRadius: number = 0;
	get holeRadius(): number {
		return this._holeRadius;
	}
	set holeRadius(value: number) {
		this._holeRadius = value;
	}
	constructor(model: XamDoughnutChart) {
		super();
		this.viewport = Rect.empty;
		this.centerCoordinates = <Point>{ $type: Point_$type, x: 0, y: 0 };
		this.holeRadius = 0;
		this.attachedSeries = new List$1<RingSeriesBase>((<any>RingSeriesBase).$type, 0);
		this.model = model;
	}
	onInit(): void {
		this.initializePixelScalingRatio();
	}
	updateView(): void {
	}
	private _attachedSeries: List$1<RingSeriesBase> = null;
	private get attachedSeries(): List$1<RingSeriesBase> {
		return this._attachedSeries;
	}
	private set attachedSeries(value: List$1<RingSeriesBase>) {
		this._attachedSeries = value;
	}
	addSeries(series: RingSeriesBase): void {
		if (!this.attachedSeries.contains(series)) {
			series.provideContainer(this.container);
			this.attachedSeries.add(series);
		}
	}
	removeSeries(series: RingSeriesBase): void {
		if (this.attachedSeries.contains(series)) {
			series.provideContainer(null);
			this.attachedSeries.remove(series);
		}
	}
	clearSeries(): void {
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	sizeUpdated(): void {
		if (this.container == null) {
			return;
		}
		this.initializePixelScalingRatio();
		let width = this.container.rootWrapper.width();
		let height = this.container.rootWrapper.height();
		this.viewport = new Rect(0, 0, 0, width, height);
		if (this.eventProxy != null) {
			this.eventProxy.viewport = this.viewport;
		}
		this.model.onSizeUpdated();
	}
	private _canvas: DomWrapper = null;
	private get canvas(): DomWrapper {
		return this._canvas;
	}
	private set canvas(value: DomWrapper) {
		this._canvas = value;
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	private _eventProxy: EventProxy = null;
	private get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	private set eventProxy(value: EventProxy) {
		this._eventProxy = value;
	}
	provideContainer(container: any): void {
		if (container == null) {
			if (this.eventProxy != null) {
				this.eventProxy.destroy();
			}
			return;
		}
		let cont = <DomRenderer><any>container;
		this.container = cont;
		let width = this.container.rootWrapper.width();
		let height = this.container.rootWrapper.height();
		this.viewport = new Rect(0, 0, 0, width, height);
		this.eventProxy = new DOMEventProxy(this.container.rootWrapper, this.container, false);
		this.eventProxy.viewport = this.viewport;
		let $t = this.eventProxy;
		$t.onMouseOver = delegateCombine($t.onMouseOver, runOn(this, this.eventProxy_OnMouseOver));
		let $t1 = this.eventProxy;
		$t1.onMouseLeave = delegateCombine($t1.onMouseLeave, runOn(this, this.eventProxy_OnMouseLeave));
		let $t2 = this.eventProxy;
		$t2.onMouseDown = delegateCombine($t2.onMouseDown, runOn(this, this.eventProxy_OnMouseDown));
		let $t3 = this.eventProxy;
		$t3.onMouseUp = delegateCombine($t3.onMouseUp, runOn(this, this.eventProxy_OnMouseUp));
		this.sizeUpdated();
	}
	private passArcEvent(point: Point, action: (arg1: PieChartBaseView, arg2: Point) => void, eventType: string): void {
		for (let i: number = this.attachedSeries.count - 1; i >= 0; i--) {
			let currSeries = this.attachedSeries._inner[i];
			if (currSeries.isSurfaceInteractionDisabledResolved) {
				continue;
			}
			let attachedRings = currSeries.view.attachedRings;
			for (let j = 0; j < attachedRings.count; j++) {
				let currRing = attachedRings._inner[j];
				let activeArcs = currRing.arcs.active;
				for (let k = 0; k < activeArcs.count; k++) {
					let currentArc = activeArcs._inner[k];
					let translatedPoint = <Point>{ $type: Point_$type, x: point.x - currentArc.canvasLeft, y: point.y - currentArc.canvasTop };
					action(currentArc.view, translatedPoint);
					if (eventType == "mouseUp") {
						let activeSlice = currentArc.arcView.getActiveSlice();
						if (activeSlice != null) {
							return;
						}
					}
				}
			}
		}
	}
	private eventProxy_OnMouseUp(point: Point): void {
		this.passArcEvent(point, (a: PieChartBaseView, p: Point) => a.canvasMouseUp(p), "mouseUp");
	}
	private eventProxy_OnMouseDown(point: Point): void {
		this.passArcEvent(point, (a: PieChartBaseView, p: Point) => a.canvasMouseDown(p), "mouseDown");
	}
	private eventProxy_OnMouseLeave(point: Point): void {
		this.passArcEvent(point, (a: PieChartBaseView, p: Point) => a.canvasMouseLeave(p), "mouseLeave");
	}
	private eventProxy_OnMouseOver(point: Point, onMouseMove: boolean, isFinger: boolean): void {
		this.passArcEvent(point, (a: PieChartBaseView, p: Point) => a.canvasMouseMove(p, onMouseMove, isFinger), "mouseOver");
	}
	getContainerID(): string {
		return this.container.rootWrapper.getAttribute("id");
	}
	positonCenterPresenter(x: number, y: number): void {
		if (!this.viewport.isEmpty && this.viewport.width != 0 && this.viewport.height != 0) {
			let oldX: number = this.centerCoordinates.x;
			let oldY: number = this.centerCoordinates.y;
			this.centerCoordinates.x = this.viewport.width / 2;
			this.centerCoordinates.y = this.viewport.height / 2;
			if (this.centerCoordinates.x != oldX || this.centerCoordinates.y != oldY) {
				this.model.onHoleDimensionsChanged();
			}
		}
	}
	setCenterPresenterSize(width: number, height: number): void {
		let oldRadius: number = this.holeRadius;
		this.holeRadius = width / 2;
		if (oldRadius != this.holeRadius) {
			this.model.onHoleDimensionsChanged();
		}
	}
	ensureCenterPresenter(): void {
	}
	exportViewShapes(doughnutChart: DoughnutChartVisualData): void {
		doughnutChart.width = this.model.width;
		doughnutChart.height = this.model.height;
		doughnutChart.holeRadius = this.model.getHoleRadius();
		for (let i: number = 0; i < this.model.series.count; i++) {
			doughnutChart.series.add(new RingSeriesVisualData());
			doughnutChart.series._inner[i].rings = new RingVisualDataList();
			doughnutChart.series._inner[i].name = this.model.series._inner[i].name;
			doughnutChart.series._inner[i].labelExtent = this.model.series._inner[i].labelExtent;
			doughnutChart.series._inner[i].leaderLineMargin = this.model.series._inner[i].leaderLineMargin;
			doughnutChart.series._inner[i].leaderLineType = EnumUtil.getName<LeaderLineType>(LeaderLineType_$type, this.model.series._inner[i].leaderLineType);
			doughnutChart.series._inner[i].labelsPosition = EnumUtil.getName<LabelsPosition>(LabelsPosition_$type, this.model.series._inner[i].labelsPosition);
			doughnutChart.series._inner[i].leaderLineVisibility = this.model.series._inner[i].leaderLineVisibility == Visibility.Visible;
			for (let j: number = 0; j < this.model.series._inner[i].analyzeRings().count; j++) {
				doughnutChart.series._inner[i].rings.add(new RingVisualData());
				doughnutChart.series._inner[i].rings._inner[j].arcs = new ArcVisualDataList();
				for (let k: number = 0; k < this.model.series._inner[i].analyzeRings()._inner[j].arcItems.count; k++) {
					doughnutChart.series._inner[i].rings._inner[j].arcs.add(new ArcVisualData());
					doughnutChart.series._inner[i].rings._inner[j].arcs._inner[k].slices = new SliceVisualDataList();
					for (let m: number = 0; m < this.model.series._inner[i].analyzeRings()._inner[j].arcItems._inner[k].sliceItems.count; m++) {
						if (null == this.model.series._inner[i].analyzeRings()._inner[j].arcItems._inner[k].sliceItems._inner[m].slice) {
							continue;
						}
						doughnutChart.series._inner[i].rings._inner[j].arcs._inner[k].slices.add(new SliceVisualData());
						let svd: SliceVisualData = new SliceVisualData();
						let currentSlice: Slice = this.model.series._inner[i].analyzeRings()._inner[j].arcItems._inner[k].sliceItems._inner[m].slice;
						svd.visibility = currentSlice._visibility == Visibility.Visible;
						svd.endAngle = currentSlice.endAngle;
						svd.startAngle = currentSlice.startAngle;
						svd.radius = currentSlice.radius;
						svd.origin = PointData.fromPoint(currentSlice.origin);
						svd.explodedOrigin = PointData.fromPoint(currentSlice.explodedOrigin);
						svd.index = currentSlice.index;
						svd.isExploded = currentSlice.isExploded;
						svd.isSelected = currentSlice.isSelected;
						svd.outline = AppearanceHelper.fromBrushExtended(currentSlice.borderBrush);
						svd.backgroundPath = new PathVisualData(1, "slicePath", currentSlice.view.getSlicePath());
						doughnutChart.series._inner[i].rings._inner[j].arcs._inner[k].slices._inner[m] = svd;
						let currentLabel: PieLabel = currentSlice.label;
						if (null != currentLabel) {
							doughnutChart.series._inner[i].rings._inner[j].arcs._inner[k].slices._inner[m].labelVisualData = ((() => {
								let $ret = new DoughnutChartLabelVisualData();
								$ret.labelSize = SizeData.fromSize(RectUtil.size(currentLabel.bounds));
								$ret.labelValue = (<TextBlock>currentLabel.label).text;
								return $ret;
							})());
							if (!isNaN_(currentLabel.canvasLeft) && !isNaN_(currentLabel.canvasTop)) {
								doughnutChart.series._inner[i].rings._inner[j].arcs._inner[k].slices._inner[m].labelVisualData.labelPosition = new PointData(currentLabel.canvasLeft, currentLabel.canvasTop);
							}
						}
					}
				}
			}
		}
	}
	private initializePixelScalingRatio(): void {
		let userRatio = this.model.pixelScalingRatio;
		let actualRatio = this.model.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			this.model.actualPixelScalingRatio = window.devicePixelRatio;
		}
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.container.rootWrapper, "");
		}
	}
	onAttachedToUI(): void {
		this.initializePixelScalingRatio();
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.container.rootWrapper, "");
		}
	}
}


