/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialSeries } from "./FinancialSeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { Series } from "./Series";
import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { Axis } from "./Axis";
import { Base, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Type, typeCast, typeGetValue, Number_$type, markType } from "igniteui-core/type";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { Control } from "igniteui-core/Control";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { SeriesView } from "./SeriesView";
import { SyncLink } from "./SyncLink";
import { AxisRange } from "./AxisRange";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export abstract class FinancialOverlay extends FinancialSeries {
	static $t: Type = markType(FinancialOverlay, 'FinancialOverlay', (<any>FinancialSeries).$type);
	constructor() {
		super();
		this.overlayValid = false;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			(<ISortingAxis><any>this.xAxis).notifyDataChanged();
		}
		this.financialView.bucketCalculator.calculateBuckets(this.resolution);
		this.validateOverlay();
		if (this.yAxis != null) {
			this.yAxis.updateRange();
		}
		this.renderSeries(true);
	}
	get ignoreFirst(): number {
		return typeGetValue(this.getValue(FinancialOverlay.ignoreFirstProperty));
	}
	set ignoreFirst(value: number) {
		this.setValue(FinancialOverlay.ignoreFirstProperty, value);
	}
	static readonly ignoreFirstPropertyName: string = "IgnoreFirst";
	static readonly ignoreFirstProperty: DependencyProperty = DependencyProperty.register(FinancialOverlay.ignoreFirstPropertyName, Number_$type, (<any>FinancialOverlay).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialOverlay>sender).raisePropertyChanged(FinancialOverlay.ignoreFirstPropertyName, e.oldValue, e.newValue)));
	protected get_usesPresortedValueColumn(): boolean {
		return true;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			this.overlayValid = false;
			break;

			case FinancialOverlay.ignoreFirstPropertyName:
			this.overlayValid = false;
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case FinancialSeries.xAxisPropertyName:
			this.overlayValid = false;
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testHighLowStrokeOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	scrollIntoView(item: any): boolean {
		let index: number = this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let windowRect: Rect = this.view.windowRect;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		if (index >= 0 && Rect.l_op_Inequality(windowRect, null) && Rect.l_op_Inequality(viewportRect, null)) {
			if (this.xAxis != null) {
				let cx: number = this.xAxis.getScaledValue(index, xParams);
				if (cx < windowRect.left + 0.1 * windowRect.width) {
					cx = cx + 0.4 * windowRect.width;
				}
				if (cx > windowRect.right - 0.1 * windowRect.width) {
					cx = cx - 0.4 * windowRect.width;
				}
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			if (this.yAxis != null && this.lowColumn != null && this.highColumn != null && index < this.lowColumn.count && index < this.highColumn.count) {
				let low: number = this.yAxis.getScaledValue(this.lowColumn.item(index), yParams);
				let high: number = this.yAxis.getScaledValue(this.highColumn.item(index), yParams);
				if (!isNaN_(low) && !isNaN_(high)) {
					let height: number = Math.abs(low - high);
					if (windowRect.height < height) {
						windowRect.height = height;
						windowRect.y = Math.min(low, high);
					} else {
						if (low < windowRect.top + 0.1 * windowRect.height) {
							low = low + 0.4 * windowRect.height;
						}
						if (low > windowRect.bottom - 0.1 * windowRect.height) {
							low = low - 0.4 * windowRect.height;
						}
						windowRect.y = low - 0.5 * windowRect.height;
					}
				}
			}
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	getRange(axis: Axis): AxisRange {
		if (axis != null && axis == this.yAxis && this.lowColumn != null && this.highColumn != null) {
			return new AxisRange(this.lowColumn.minimum, this.highColumn.maximum);
		}
		return null;
	}
	private _overlayValid: boolean = false;
	protected get overlayValid(): boolean {
		return this._overlayValid;
	}
	protected set overlayValid(value: boolean) {
		this._overlayValid = value;
	}
	protected abstract validateOverlay(): boolean;
}


