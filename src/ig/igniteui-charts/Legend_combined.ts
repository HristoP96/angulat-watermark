/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LegendBase } from "./LegendBase";
import { LegendOrientation } from "./LegendOrientation";
import { LegendBaseView } from "./LegendBaseView";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, fromEn, delegateCombine, fromEnum, typeCast, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { UIElement } from "igniteui-core/UIElement";
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { LegendItemInfo } from "./LegendItemInfo";
import { ContentControl } from "igniteui-core/ContentControl";
import { ILegendOwner } from "igniteui-core/ILegendOwner";
import { ILegendContext, ILegendContext_$type } from "igniteui-core/ILegendContext";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class Legend extends LegendBase {
	static $t: Type = markType(Legend, 'Legend', (<any>LegendBase).$type);
	createView(): LegendBaseView {
		return new LegendView(this);
	}
	onViewCreated(view: LegendBaseView): void {
		super.onViewCreated(view);
		this.legendView = <LegendView>view;
	}
	private _legendView: LegendView;
	get legendView(): LegendView {
		return this._legendView;
	}
	set legendView(value: LegendView) {
		this._legendView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>Legend).$type;
		let $t = this.children;
		$t.collectionChanged = delegateCombine($t.collectionChanged, (o: any, e: NotifyCollectionChangedEventArgs) => {
			if (e.oldItems != null) {
				for (let item of fromEn<any>(e.oldItems)) {
					this.legendView.removeItemVisual(item);
				}
			}
			if (e.newItems != null) {
				for (let item1 of fromEn<any>(e.newItems)) {
					this.legendView.addItemVisual(item1);
				}
			}
		});
	}
	private getSeriesIndex(series: ILegendSeries): number {
		return series.resolveLegendIndex();
	}
	private resolveSortOrder(container: any): number {
		return this.getSortOrder(container);
	}
	addChildInOrder(legendItem: UIElement, series: ILegendSeries): void {
		if (series.isStacked) {
			return;
		}
		if (!series.isUsableInLegend) {
			return;
		}
		let index: number = 0;
		for (let item of fromEnum<UIElement>(this.children)) {
			let itemChart: ILegendOwner;
			let itemSeries: ILegendSeries;
			let itemItem: any;
			let $ret = this.view.fetchLegendEnvironment(item, itemChart, itemSeries, itemItem);
			itemChart = $ret.p1;
			itemSeries = $ret.p2;
			itemItem = $ret.p3;
			if (series.container != null && itemChart != null && (this.resolveSortOrder(series.container) < this.resolveSortOrder(itemChart) || (this.resolveSortOrder(series.container) == -1 && this.resolveSortOrder(itemChart) == -1 && Base.getHashCodeStatic(series.container) < Base.getHashCodeStatic(itemChart)))) {
				break;
			}
			if (series.container != null && itemChart != null && series.container == itemChart && itemSeries != null) {
				let indexOfSeries: number = this.getSeriesIndex(series);
				let indexOfItemSeries: number = this.getSeriesIndex(itemSeries);
				let sortOrderSeries: number = this.resolveSortOrder(series);
				let sortOrderItemSeries: number = this.resolveSortOrder(itemSeries);
				if (itemSeries.isVertical && !itemSeries.isStacked) {
					if (sortOrderItemSeries == -1 && sortOrderSeries == -1) {
						index = 0;
						break;
					}
					if (sortOrderSeries < sortOrderItemSeries || sortOrderItemSeries == -1) {
						break;
					}
				}
				if (indexOfSeries <= indexOfItemSeries) {
					break;
				}
			}
			index++;
		}
		this.children.insert(index, legendItem);
		let info: LegendItemInfo = new LegendItemInfo();
		info.legendItem = legendItem;
		info.series = series;
		let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, legendItem);
		if (contentControl != null && contentControl.content != null) {
			let context: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
			if (context != null) {
				info.dataContext = context;
				info.text = <string>context.itemLabel;
			}
		}
	}
	get orientation(): LegendOrientation {
		return this.view.isHorizontal ? LegendOrientation.Horizontal : LegendOrientation.Horizontal;
	}
	set orientation(value: LegendOrientation) {
		this.view.isHorizontal = value == LegendOrientation.Horizontal;
	}
	static readonly orientationPropertyName: string = "Orientation";
	private getSortOrder(target: any): number {
		return -1;
	}
	get textColor(): string {
		return this.view.textColor;
	}
	set textColor(value: string) {
		this.view.textColor = value;
	}
	get textStyle(): string {
		return this.view.textStyle;
	}
	set textStyle(value: string) {
		this.view.textStyle = value;
	}
}

/**
 * @hidden 
 */
export class LegendView extends LegendBaseView {
	static $t: Type = markType(LegendView, 'LegendView', (<any>LegendBaseView).$type);
	constructor(model: Legend) {
		super(model);
		this.legendModel = model;
	}
	private _legendModel: Legend = null;
	protected get legendModel(): Legend {
		return this._legendModel;
	}
	protected set legendModel(value: Legend) {
		this._legendModel = value;
	}
	onInit(): void {
		super.onInit();
	}
}


