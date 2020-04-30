/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, IEnumerator$1, IEnumerator$1_$type, Base, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, PropertyChangedEventArgs, runOn, delegateCombine, fromEnum, delegateRemove, Type, markType } from "igniteui-core/type";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { Series } from "./Series";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { Brush } from "igniteui-core/Brush";
import { List$1 } from "igniteui-core/List$1";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { BrushCollectionUtil } from "igniteui-core/BrushCollectionUtil";

/**
 * @hidden 
 */
export class BrushScale extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(BrushScale, 'BrushScale', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.series = new List$1<Series>((<any>Series).$type, 0);
		this.brushes = new BrushCollection();
		let $t = this.brushes;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.brushes_CollectionChanged));
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
	}
	protected brushes_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		for (let series of fromEnum<Series>(this.series)) {
			series.renderSeries(false);
			series.notifyBrushScalesDirty();
			series.notifyThumbnailAppearanceChanged();
		}
	}
	get brushes(): BrushCollection {
		return this._brushes;
	}
	set brushes(value: BrushCollection) {
		let oldValue = this._brushes;
		if (this._brushes != null) {
			let $t = this._brushes;
			$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.brushes_CollectionChanged));
		}
		this._brushes = value;
		if (this._brushes != null) {
			let $t1 = this._brushes;
			$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.brushes_CollectionChanged));
		}
		for (let series of fromEnum<Series>(this.series)) {
			series.renderSeries(false);
			series.notifyBrushScalesDirty();
			series.notifyThumbnailAppearanceChanged();
		}
	}
	private _brushes: BrushCollection = null;
	private _series: List$1<Series> = null;
	get series(): List$1<Series> {
		return this._series;
	}
	set series(value: List$1<Series>) {
		this._series = value;
	}
	registerSeries(series: Series): void {
		let present: boolean = this.series.contains(series);
		if (!present) {
			this.series.add(series);
		}
	}
	unregisterSeries(series: Series): void {
		let present: boolean = this.series.contains(series);
		if (present) {
			this.series.remove(series);
		}
	}
	getBrush(index: number): Brush {
		if (this.brushes == null || index < 0 || index >= this.brushes.count) {
			return null;
		}
		return this.brushes.item(index);
	}
	protected get_isReady(): boolean {
		return true;
	}
	get isReady(): boolean {
		return this.get_isReady();
	}
	getInterpolatedBrush(index: number): Brush {
		if (this.brushes == null || this.brushes.count == 0 || index < 0) {
			return null;
		}
		return BrushCollectionUtil.getInterpolatedBrush(this.brushes, index);
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
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		for (let series of fromEnum<Series>(this.series)) {
			series.renderSeries(false);
			series.notifyBrushScalesDirty();
			series.notifyThumbnailAppearanceChanged();
		}
	}
	protected get_isBrushScale(): boolean {
		return true;
	}
	get isBrushScale(): boolean {
		return this.get_isBrushScale();
	}
}


