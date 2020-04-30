/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, IList, IList_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, ICollection, ICollection_$type, Number_$type, typeCast, Array_$type, fromEn } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { boxArray$1 } from "igniteui-core/array";
import { stringFormat } from "igniteui-core/stringExtended";
import { stringStartsWith } from "igniteui-core/string";

/**
 * @hidden 
 */
export class FinancialChartRangeSelectorVisualData extends Base {
	static $t: Type = markType(FinancialChartRangeSelectorVisualData, 'FinancialChartRangeSelectorVisualData');
	private _visibility: string = null;
	get visibility(): string {
		return this._visibility;
	}
	set visibility(value: string) {
		this._visibility = value;
	}
	private _buttonVisibilities: boolean[] = null;
	get buttonVisibilities(): boolean[] {
		return this._buttonVisibilities;
	}
	set buttonVisibilities(value: boolean[]) {
		this._buttonVisibilities = value;
	}
	private _buttonLabels: string[] = null;
	get buttonLabels(): string[] {
		return this._buttonLabels;
	}
	set buttonLabels(value: string[]) {
		this._buttonLabels = value;
	}
	private _buttonsChecked: boolean[] = null;
	get buttonsChecked(): boolean[] {
		return this._buttonsChecked;
	}
	set buttonsChecked(value: boolean[]) {
		this._buttonsChecked = value;
	}
	private _buttonLefts: number[] = null;
	get buttonLefts(): number[] {
		return this._buttonLefts;
	}
	set buttonLefts(value: number[]) {
		this._buttonLefts = value;
	}
	private _buttonTops: number[] = null;
	get buttonTops(): number[] {
		return this._buttonTops;
	}
	set buttonTops(value: number[]) {
		this._buttonTops = value;
	}
	private _buttonWidths: number[] = null;
	get buttonWidths(): number[] {
		return this._buttonWidths;
	}
	set buttonWidths(value: number[]) {
		this._buttonWidths = value;
	}
	private _buttonHeights: number[] = null;
	get buttonHeights(): number[] {
		return this._buttonHeights;
	}
	set buttonHeights(value: number[]) {
		this._buttonHeights = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	serialize(): string {
		return FinancialChartVisualData.serialize1([ "buttonLabels", "buttonsChecked", "buttonLefts", "buttonTops", "buttonWidths", "buttonHeights", "left", "top", "width", "height" ], <any[]>[ this.buttonLabels, this.buttonsChecked, this.buttonLefts, this.buttonTops, this.buttonWidths, this.buttonHeights, this.left, this.top, this.width, this.height ]);
	}
}

/**
 * @hidden 
 */
export class FinancialChartEnumPickerVisualData extends Base {
	static $t: Type = markType(FinancialChartEnumPickerVisualData, 'FinancialChartEnumPickerVisualData');
	private _items: string[] = null;
	get items(): string[] {
		return this._items;
	}
	set items(value: string[]) {
		this._items = value;
	}
	private _selectedItem: string = null;
	get selectedItem(): string {
		return this._selectedItem;
	}
	set selectedItem(value: string) {
		this._selectedItem = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isVisible = value;
	}
	serialize(): string {
		return FinancialChartVisualData.serialize1([ "items", "selectedItem", "left", "top", "width", "height", "isVisible" ], <any[]>[ this.items, this.selectedItem, this.left, this.top, this.width, this.height, this.isVisible ]);
	}
}

/**
 * @hidden 
 */
export class FinancialChartToolbarVisualData extends Base {
	static $t: Type = markType(FinancialChartToolbarVisualData, 'FinancialChartToolbarVisualData');
	private _chartTypePicker: FinancialChartEnumPickerVisualData = null;
	get chartTypePicker(): FinancialChartEnumPickerVisualData {
		return this._chartTypePicker;
	}
	set chartTypePicker(value: FinancialChartEnumPickerVisualData) {
		this._chartTypePicker = value;
	}
	private _rangeSelector: FinancialChartRangeSelectorVisualData = null;
	get rangeSelector(): FinancialChartRangeSelectorVisualData {
		return this._rangeSelector;
	}
	set rangeSelector(value: FinancialChartRangeSelectorVisualData) {
		this._rangeSelector = value;
	}
	serialize(): string {
		return FinancialChartVisualData.serialize1([ "chartTypePicker", "rangeSelector" ], <any[]>[ this.chartTypePicker == null ? null : this.chartTypePicker.serialize(), this.rangeSelector == null ? null : this.rangeSelector.serialize() ]);
	}
}

/**
 * @hidden 
 */
export class FinancialChartVisualData extends Base {
	static $t: Type = markType(FinancialChartVisualData, 'FinancialChartVisualData');
	constructor() {
		super();
		this.mainChartLeft = NaN;
		this.mainChartTop = NaN;
		this.volumeChartLeft = NaN;
		this.volumeChartTop = NaN;
		this.zoomChartLeft = NaN;
		this.zoomChartTop = NaN;
		this.indicatorChartLefts = new List$1<number>(Number_$type, 0);
		this.indicatorChartTops = new List$1<number>(Number_$type, 0);
	}
	private _mainChart: any = null;
	get mainChart(): any {
		return this._mainChart;
	}
	set mainChart(value: any) {
		this._mainChart = value;
	}
	private _volumeChart: any = null;
	get volumeChart(): any {
		return this._volumeChart;
	}
	set volumeChart(value: any) {
		this._volumeChart = value;
	}
	private _indicatorCharts: List$1<any> = null;
	get indicatorCharts(): List$1<any> {
		return this._indicatorCharts;
	}
	set indicatorCharts(value: List$1<any>) {
		this._indicatorCharts = value;
	}
	private _toolbar: FinancialChartToolbarVisualData = null;
	get toolbar(): FinancialChartToolbarVisualData {
		return this._toolbar;
	}
	set toolbar(value: FinancialChartToolbarVisualData) {
		this._toolbar = value;
	}
	private _zoomChart: any = null;
	get zoomChart(): any {
		return this._zoomChart;
	}
	set zoomChart(value: any) {
		this._zoomChart = value;
	}
	private _mainChartLeft: number = 0;
	get mainChartLeft(): number {
		return this._mainChartLeft;
	}
	set mainChartLeft(value: number) {
		this._mainChartLeft = value;
	}
	private _mainChartTop: number = 0;
	get mainChartTop(): number {
		return this._mainChartTop;
	}
	set mainChartTop(value: number) {
		this._mainChartTop = value;
	}
	private _volumeChartLeft: number = 0;
	get volumeChartLeft(): number {
		return this._volumeChartLeft;
	}
	set volumeChartLeft(value: number) {
		this._volumeChartLeft = value;
	}
	private _volumeChartTop: number = 0;
	get volumeChartTop(): number {
		return this._volumeChartTop;
	}
	set volumeChartTop(value: number) {
		this._volumeChartTop = value;
	}
	private _indicatorChartLefts: List$1<number> = null;
	get indicatorChartLefts(): List$1<number> {
		return this._indicatorChartLefts;
	}
	set indicatorChartLefts(value: List$1<number>) {
		this._indicatorChartLefts = value;
	}
	private _indicatorChartTops: List$1<number> = null;
	get indicatorChartTops(): List$1<number> {
		return this._indicatorChartTops;
	}
	set indicatorChartTops(value: List$1<number>) {
		this._indicatorChartTops = value;
	}
	private _zoomChartLeft: number = 0;
	get zoomChartLeft(): number {
		return this._zoomChartLeft;
	}
	set zoomChartLeft(value: number) {
		this._zoomChartLeft = value;
	}
	private _zoomChartTop: number = 0;
	get zoomChartTop(): number {
		return this._zoomChartTop;
	}
	set zoomChartTop(value: number) {
		this._zoomChartTop = value;
	}
	private _toolbarLeft: number = 0;
	get toolbarLeft(): number {
		return this._toolbarLeft;
	}
	set toolbarLeft(value: number) {
		this._toolbarLeft = value;
	}
	private _toolbarTop: number = 0;
	get toolbarTop(): number {
		return this._toolbarTop;
	}
	set toolbarTop(value: number) {
		this._toolbarTop = value;
	}
	private _toolbarWidth: number = 0;
	get toolbarWidth(): number {
		return this._toolbarWidth;
	}
	set toolbarWidth(value: number) {
		this._toolbarWidth = value;
	}
	private _toolbarHeight: number = 0;
	get toolbarHeight(): number {
		return this._toolbarHeight;
	}
	set toolbarHeight(value: number) {
		this._toolbarHeight = value;
	}
	private _legendLeft: number = 0;
	get legendLeft(): number {
		return this._legendLeft;
	}
	set legendLeft(value: number) {
		this._legendLeft = value;
	}
	private _legendTop: number = 0;
	get legendTop(): number {
		return this._legendTop;
	}
	set legendTop(value: number) {
		this._legendTop = value;
	}
	private _legendWidth: number = 0;
	get legendWidth(): number {
		return this._legendWidth;
	}
	set legendWidth(value: number) {
		this._legendWidth = value;
	}
	private _legendHeight: number = 0;
	get legendHeight(): number {
		return this._legendHeight;
	}
	set legendHeight(value: number) {
		this._legendHeight = value;
	}
	private _legend: any = null;
	get legend(): any {
		return this._legend;
	}
	set legend(value: any) {
		this._legend = value;
	}
	private callScaleByViewport(chart: any): void {
		if (chart != null) {
			let chart_ = chart;
			chart_.scaleByViewport();
		}
	}
	scaleByViewport(): void {
		this.callScaleByViewport(this.mainChart);
		this.callScaleByViewport(this.volumeChart);
		if (this.indicatorCharts != null) {
			for (let i = 0; i < this.indicatorCharts.count; i++) {
				this.callScaleByViewport(this.indicatorCharts._inner[i]);
			}
		}
		this.callScaleByViewport(this.zoomChart);
	}
	private callSerialize(chart: any): string {
		if (chart != null) {
			let chart_ = chart;
			return <string>(chart_.serialize());
		}
		return null;
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		sb.appendLine1("{");
		if (this.volumeChart != null) {
			sb.appendLine1("volumeChart: " + this.callSerialize(this.volumeChart) + ",");
		}
		if (this.zoomChart != null) {
			sb.appendLine1("zoomChart: " + this.callSerialize(this.zoomChart) + ",");
		}
		if (this.indicatorCharts != null) {
			sb.appendLine1("indicatorCharts: [");
			for (let i = 0; i < this.indicatorCharts.count; i++) {
				if (i > 0) {
					sb.appendLine1(",");
				}
				sb.append5(this.callSerialize(this.indicatorCharts._inner[i]));
			}
			sb.appendLine();
			sb.appendLine1("],");
		}
		if (this.toolbar != null) {
			sb.appendLine1("toolbar: " + this.toolbar.serialize() + ",");
		}
		if (this.mainChart != null) {
			sb.appendLine1("mainChart: " + this.callSerialize(this.mainChart) + ",");
		}
		sb.appendLine1("mainChartLeft: " + this.mainChartLeft.toString() + ",");
		sb.appendLine1("mainChartTop: " + this.mainChartTop.toString() + ",");
		sb.appendLine1("volumeChartLeft: " + this.volumeChartLeft.toString() + ",");
		sb.appendLine1("volumeChartTop: " + this.volumeChartTop.toString() + ",");
		sb.appendLine1("zoomChartLeft: " + this.zoomChartLeft.toString() + ",");
		sb.appendLine1("zoomChartTop: " + this.zoomChartTop.toString() + ",");
		sb.appendLine1("toolbarLeft: " + this.toolbarLeft.toString() + ",");
		sb.appendLine1("toolbarTop: " + this.toolbarTop.toString() + ",");
		sb.appendLine1("toolbarWidth: " + this.toolbarWidth.toString() + ",");
		sb.appendLine1("toolbarHeight: " + this.toolbarHeight.toString() + ",");
		sb.appendLine1("indicatorChartLefts: [");
		for (let i1 = 0; i1 < this.indicatorChartLefts.count; i1++) {
			if (i1 > 0) {
				sb.appendLine1(",");
			}
			sb.append4(this.indicatorChartLefts._inner[i1]);
		}
		sb.appendLine();
		sb.appendLine1("],");
		sb.appendLine1("indicatorChartTops: [");
		for (let i2 = 0; i2 < this.indicatorChartTops.count; i2++) {
			if (i2 > 0) {
				sb.appendLine1(",");
			}
			sb.append4(this.indicatorChartTops._inner[i2]);
		}
		sb.appendLine();
		sb.appendLine1("],");
		sb.appendLine1(stringFormat("legendLeft: {0},", this.legendLeft));
		sb.appendLine1(stringFormat("legendTop: {0},", this.legendTop));
		sb.appendLine1(stringFormat("legendWidth: {0},", this.legendWidth));
		sb.appendLine1(stringFormat("legendHeight: {0},", this.legendHeight));
		let serializedLegendVisualData: string;
		if (this.legend != null) {
			serializedLegendVisualData = <string>(this.legend.serialize());
		} else {
			serializedLegendVisualData = "null";
		}
		sb.appendLine1(stringFormat("legend: {0}", serializedLegendVisualData));
		sb.appendLine1("}");
		return sb.toString();
	}
	static serialize1(propertyNames: string[], values: any[]): string {
		let builder: StringBuilder = new StringBuilder(0);
		builder.appendLine1("{");
		for (let ii: number = 0; ii < propertyNames.length; ii++) {
			builder.append5(propertyNames[ii] + ": " + FinancialChartVisualData.serializeObject(values[ii]));
			if (ii < propertyNames.length - 1) {
				builder.append5(", ");
			}
			builder.appendLine();
		}
		builder.append5("}");
		return builder.toString();
	}
	private static serializeObject(value: any): string {
		if (value == null) {
			return "null";
		}
		if (typeof value === 'string' && !stringStartsWith((<string>value), "{")) {
			return "\"" + value + "\"";
		}
		if (typeCast<IList>(IList_$type, value) !== null) {
			return FinancialChartVisualData.serializeList(<IList><any>value);
		}
		if (typeCast<any[]>(Array_$type, value) !== null) {
			return FinancialChartVisualData.serializeList(boxArray$1<any>(<any[]>value));
		}
		return value.toString();
	}
	private static serializeList(array: IList): string {
		if (array == null) {
			return "null";
		}
		let builder: StringBuilder = new StringBuilder(0);
		builder.append5("[");
		let counter: number = 0;
		for (let value of fromEn<any>(array)) {
			builder.append5(FinancialChartVisualData.serializeObject(value));
			if (++counter < array.count) {
				builder.append5(", ");
			}
		}
		builder.append5("]");
		return builder.toString();
	}
}


