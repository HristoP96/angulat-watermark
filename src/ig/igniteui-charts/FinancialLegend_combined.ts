/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LegendBase } from "./LegendBase";
import { LegendBaseView } from "./LegendBaseView";
import { Type, Base, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, fromEn, delegateCombine, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { UIElement } from "igniteui-core/UIElement";
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { List$1 } from "igniteui-core/List$1";
import { FinancialLegendViewManager } from "./FinancialLegendViewManager";

/**
 * @hidden 
 */
export class FinancialLegend extends LegendBase {
	static $t: Type = markType(FinancialLegend, 'FinancialLegend', (<any>LegendBase).$type);
	createView(): LegendBaseView {
		return new FinancialLegendView(this);
	}
	private get financialView(): FinancialLegendView {
		return <FinancialLegendView>this.view;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>FinancialLegend).$type;
		let $t = this.children;
		$t.collectionChanged = delegateCombine($t.collectionChanged, (o: any, e: NotifyCollectionChangedEventArgs) => {
			if (e.oldItems != null) {
				for (let item of fromEn<any>(e.oldItems)) {
					this.financialView.removeItemVisual(item);
				}
			}
			if (e.newItems != null) {
				for (let item1 of fromEn<any>(e.newItems)) {
					this.financialView.addItemVisual(item1);
				}
			}
		});
	}
	addChildInOrder(legendItem: UIElement, series: ILegendSeries): void {
		this.children.add(legendItem);
	}
	protected get_isFinancial(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class FinancialLegendView extends LegendBaseView {
	static $t: Type = markType(FinancialLegendView, 'FinancialLegendView', (<any>LegendBaseView).$type);
	constructor(model: FinancialLegend) {
		super(model);
		this.viewManager = new FinancialLegendViewManager(this);
	}
}


