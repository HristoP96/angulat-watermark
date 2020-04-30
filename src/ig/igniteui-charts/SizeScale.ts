/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, delegateCombine, Number_$type, Boolean_$type, typeGetValue, fromEnum, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class SizeScale extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(SizeScale, 'SizeScale', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.series = new List$1<Series>((<any>Series).$type, 0);
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
	}
	private _series: List$1<Series> = null;
	get series(): List$1<Series> {
		return this._series;
	}
	set series(value: List$1<Series>) {
		this._series = value;
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(SizeScale.minimumValuePropertyName, Number_$type, (<any>SizeScale).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SizeScale>o).raisePropertyChanged(SizeScale.minimumValuePropertyName, e.oldValue, e.newValue)));
	get minimumValue(): number {
		return <number>this.getValue(SizeScale.minimumValueProperty);
	}
	set minimumValue(value: number) {
		this.setValue(SizeScale.minimumValueProperty, value);
	}
	static readonly maximumValuePropertyName: string = "MaximumValue";
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(SizeScale.maximumValuePropertyName, Number_$type, (<any>SizeScale).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SizeScale>o).raisePropertyChanged(SizeScale.maximumValuePropertyName, e.oldValue, e.newValue)));
	get maximumValue(): number {
		return <number>this.getValue(SizeScale.maximumValueProperty);
	}
	set maximumValue(value: number) {
		this.setValue(SizeScale.maximumValueProperty, value);
	}
	static readonly isLogarithmicPropertyName: string = "IsLogarithmic";
	static readonly isLogarithmicProperty: DependencyProperty = DependencyProperty.register(SizeScale.isLogarithmicPropertyName, Boolean_$type, (<any>SizeScale).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SizeScale>o).raisePropertyChanged(SizeScale.isLogarithmicPropertyName, e.oldValue, e.newValue)));
	get isLogarithmic(): boolean {
		return <boolean>this.getValue(SizeScale.isLogarithmicProperty);
	}
	set isLogarithmic(value: boolean) {
		this.setValue(SizeScale.isLogarithmicProperty, value);
	}
	static readonly logarithmBasePropertyName: string = "LogarithmBase";
	static readonly logarithmBaseProperty: DependencyProperty = DependencyProperty.register(SizeScale.logarithmBasePropertyName, Number_$type, (<any>SizeScale).$type, new PropertyMetadata(2, 10, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SizeScale>o).raisePropertyChanged(SizeScale.logarithmBasePropertyName, e.oldValue, e.newValue)));
	get logarithmBase(): number {
		return typeGetValue(this.getValue(SizeScale.logarithmBaseProperty));
	}
	set logarithmBase(value: number) {
		this.setValue(SizeScale.logarithmBaseProperty, value);
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
			if (series.seriesViewer != null) {
				series.notifyThumbnailAppearanceChanged();
				series.notifySizeScalesDirty();
			}
		}
	}
}


