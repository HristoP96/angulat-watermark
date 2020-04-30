/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, String_$type, Boolean_$type, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class SyncSettings extends FrameworkElement implements INotifyPropertyChanged {
	static $t: Type = markType(SyncSettings, 'SyncSettings', (<any>FrameworkElement).$type, [INotifyPropertyChanged_$type]);
	get syncChannel(): string {
		return <string>this.getValue(SyncSettings.syncChannelProperty);
	}
	set syncChannel(value: string) {
		this.setValue(SyncSettings.syncChannelProperty, value);
	}
	static readonly syncChannelPropertyName: string = "SyncChannel";
	static readonly syncChannelProperty: DependencyProperty = DependencyProperty.register(SyncSettings.syncChannelPropertyName, String_$type, (<any>SyncSettings).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SyncSettings>o).raisePropertyChanged(SyncSettings.syncChannelPropertyName, e.oldValue, e.newValue)));
	get synchronizeVertically(): boolean {
		return <boolean>this.getValue(SyncSettings.synchronizeVerticallyProperty);
	}
	set synchronizeVertically(value: boolean) {
		this.setValue(SyncSettings.synchronizeVerticallyProperty, value);
	}
	static readonly synchronizeVerticallyPropertyName: string = "SynchronizeVertically";
	static readonly synchronizeVerticallyProperty: DependencyProperty = DependencyProperty.register(SyncSettings.synchronizeVerticallyPropertyName, Boolean_$type, (<any>SyncSettings).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SyncSettings>o).raisePropertyChanged(SyncSettings.synchronizeVerticallyPropertyName, e.oldValue, e.newValue)));
	get synchronizeHorizontally(): boolean {
		return <boolean>this.getValue(SyncSettings.synchronizeHorizontallyProperty);
	}
	set synchronizeHorizontally(value: boolean) {
		this.setValue(SyncSettings.synchronizeHorizontallyProperty, value);
	}
	static readonly synchronizeHorizontallyPropertyName: string = "SynchronizeHorizontally";
	static readonly synchronizeHorizontallyProperty: DependencyProperty = DependencyProperty.register(SyncSettings.synchronizeHorizontallyPropertyName, Boolean_$type, (<any>SyncSettings).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SyncSettings>o).raisePropertyChanged(SyncSettings.synchronizeHorizontallyPropertyName, e.oldValue, e.newValue)));
	protected raisePropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(propertyName, oldValue, newValue));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
}


