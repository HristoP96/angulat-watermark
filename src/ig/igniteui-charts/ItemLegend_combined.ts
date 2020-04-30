/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LegendBase } from "./LegendBase";
import { IChartItemLegend, IChartItemLegend_$type } from "igniteui-core/IChartItemLegend";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { LegendBaseView } from "./LegendBaseView";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, fromEn, delegateCombine, typeCast, fromEnum, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { UIElement } from "igniteui-core/UIElement";
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { List$1 } from "igniteui-core/List$1";
import { ContentControl } from "igniteui-core/ContentControl";
import { ILegendContext, ILegendContext_$type } from "igniteui-core/ILegendContext";
import { LegendItemInfo } from "./LegendItemInfo";
import { LegendBaseViewManager } from "./LegendBaseViewManager";
import { LegendVisualData } from "./LegendVisualData";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, DomWrapperPosition } from "igniteui-core/dom";
import { LegendItemVisualData } from "./LegendItemVisualData";
import { RectData } from "igniteui-core/RectData";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";

/**
 * @hidden 
 */
export class ItemLegend extends LegendBase implements IChartItemLegend {
	static $t: Type = markType(ItemLegend, 'ItemLegend', (<any>LegendBase).$type, [IChartItemLegend_$type]);
	createView(): LegendBaseView {
		return new ItemLegendView(this);
	}
	onViewCreated(view: LegendBaseView): void {
		super.onViewCreated(view);
		this.itemView = <ItemLegendView>view;
	}
	private _itemView: ItemLegendView = null;
	get itemView(): ItemLegendView {
		return this._itemView;
	}
	set itemView(value: ItemLegendView) {
		this._itemView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>ItemLegend).$type;
		this.itemView = <ItemLegendView>this.view;
		let $t = this.children;
		$t.collectionChanged = delegateCombine($t.collectionChanged, (o: any, e: NotifyCollectionChangedEventArgs) => {
			if (e.oldItems != null) {
				for (let item of fromEn<any>(e.oldItems)) {
					this.itemView.removeItemVisual(item);
				}
			}
			if (e.newItems != null) {
				for (let item1 of fromEn<any>(e.newItems)) {
					this.itemView.addItemVisual(item1);
				}
			}
		});
	}
	addChildInOrder(legendItem: UIElement, series: ILegendSeries): void {
		if (!this.view.ready()) {
			return;
		}
		this.renderLegend(series);
	}
	protected get_isItemwise(): boolean {
		return true;
	}
	createItemwiseLegendItems(legendItems: List$1<UIElement>, series: ILegendSeries): void {
		this.createItemwiseLegendItemsInternal(legendItems, series);
	}
	createItemwiseLegendItemsInternal(legendItems: List$1<UIElement>, itemsHost: ILegendSeries): void {
		this.view.notifyBeginUpdate();
		this.clearLegendItemsForSeries(itemsHost);
		if (itemsHost == null || legendItems == null || legendItems.count == 0) {
			return;
		}
		for (let currentLegendItem of fromEnum<UIElement>(legendItems)) {
			let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, currentLegendItem);
			if (contentControl != null && contentControl.content != null) {
				let context: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
				if (context != null && !this.containsContext(context)) {
					this.children.add(currentLegendItem);
					let info: LegendItemInfo = new LegendItemInfo();
					info.dataContext = context;
					info.legendItem = currentLegendItem;
					info.series = itemsHost;
					if (context.legendLabel != null) {
						info.text = <string>context.legendLabel;
					} else {
						info.text = <string>context.itemLabel;
					}
				}
			}
		}
		this.view.notifyEndUpate();
	}
	createLegendItemsInsert(legendItems: List$1<UIElement>, itemsHost: ILegendSeries): void {
		this.createLegendItemsInsertInternal(legendItems, itemsHost);
	}
	createLegendItemsInsertInternal(legendItems: List$1<UIElement>, itemsHost: ILegendSeries): void {
		this.view.notifyBeginUpdate();
		try {
			let insertIndex: number = this.clearLegendItemsAndReturnInsertIndex(itemsHost);
			if (itemsHost == null || legendItems == null || legendItems.count == 0) {
				return;
			}
			for (let currentLegendItem of fromEnum<UIElement>(legendItems)) {
				let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, currentLegendItem);
				if (contentControl != null && contentControl.content != null) {
					let context: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
					if (context != null && !this.containsContext(context)) {
						this.children.insert(insertIndex, currentLegendItem);
						insertIndex++;
						let info: LegendItemInfo = new LegendItemInfo();
						info.dataContext = context;
						info.legendItem = currentLegendItem;
						info.series = itemsHost;
						info.text = context.legendLabel != null ? context.legendLabel.toString() : <string>context.itemLabel;
					}
				}
			}
		}
		finally {
			this.view.notifyEndUpate();
		}
	}
	renderItemwiseContent(itemsHost: ILegendSeries): void {
		this.renderLegend(itemsHost);
	}
	renderLegend(itemsHost: ILegendSeries): void {
		this.clearLegendItemsForSeries(itemsHost);
		if (itemsHost.hasSubItems) {
			itemsHost.forSubItems((legendItem: any) => {
				let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, legendItem);
				if (contentControl != null && contentControl.content != null) {
					let context: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
					if (context != null && !this.containsContext(context)) {
						this.children.add(<UIElement>legendItem);
						let info: LegendItemInfo = new LegendItemInfo();
						info.dataContext = context;
						info.legendItem = legendItem;
						info.series = itemsHost;
						info.text = <string>context.itemLabel;
					}
				}
			});
		}
	}
	clearLegendItemsAndReturnInsertIndex(itemsHost: ILegendSeries): number {
		if (itemsHost == null || this.children == null || this.children.count == 0) {
			return 0;
		}
		let legendItems: ObservableCollection$1<UIElement> = new ObservableCollection$1<UIElement>((<any>UIElement).$type, 0);
		let insertIndex: number = -1;
		let index: number = 0;
		for (let existingLegendItem of fromEnum<UIElement>(this.children)) {
			let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, existingLegendItem);
			if (contentControl != null && contentControl.content != null) {
				let context: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
				if (context != null && context.series == itemsHost) {
					if (insertIndex == -1) {
						insertIndex = index;
					}
					legendItems.add(existingLegendItem);
				}
			}
			index++;
		}
		for (let legendItem of fromEnum<UIElement>(legendItems)) {
			this.children.remove(legendItem);
		}
		if (insertIndex == -1) {
			return this.children.count;
		}
		return insertIndex;
	}
	private containsContext(dataContext: ILegendContext): boolean {
		return this.itemView.containsContext(dataContext);
	}
	private _fillColumn: IFastItemColumn$1<number> = null;
	get fillColumn(): IFastItemColumn$1<number> {
		return this._fillColumn;
	}
	set fillColumn(value: IFastItemColumn$1<number>) {
		this._fillColumn = value;
	}
}

/**
 * @hidden 
 */
export class ItemLegendView extends LegendBaseView {
	static $t: Type = markType(ItemLegendView, 'ItemLegendView', (<any>LegendBaseView).$type);
	constructor(model: ItemLegend) {
		super(model);
		this.itemModel = model;
	}
	private _itemModel: ItemLegend = null;
	get itemModel(): ItemLegend {
		return this._itemModel;
	}
	set itemModel(value: ItemLegend) {
		this._itemModel = value;
	}
	onInit(): void {
		super.onInit();
	}
	protected get_isDiscrete(): boolean {
		return true;
	}
	containsContext(dataContext: ILegendContext): boolean {
		return this.viewManager.containsContext(dataContext);
	}
	exportVisualData(): LegendVisualData {
		let legend = new LegendVisualData();
		let root: DomWrapper = this.viewManager.container.rootWrapper;
		root = root.getChildAt(0);
		let count: number = root.getChildCount();
		for (let ii: number = 0; ii < count; ii++) {
			let item: LegendItemVisualData = new LegendItemVisualData();
			let child: DomWrapper = root.getChildAt(ii);
			item.label = child.getText();
			item.label = item.label != null ? item.label.trim() : null;
			item.bounds = new RectData(child.getOffset().left, child.getOffset().top, child.width(), child.height());
			item.labelBounds = this.getTextBounds(child);
			item.badgeBounds = this.getBadgeBounds(child);
			legend.items.add(item);
		}
		for (let ii1: number = 0; ii1 < count; ii1++) {
			legend.items._inner[ii1].appearance.fill = this.getItemFill(ii1);
		}
		return legend;
	}
}


