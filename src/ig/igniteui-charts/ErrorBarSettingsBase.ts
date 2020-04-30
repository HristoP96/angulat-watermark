/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, markType } from "igniteui-core/type";
import { Style } from "igniteui-core/Style";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export abstract class ErrorBarSettingsBase extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(ErrorBarSettingsBase, 'ErrorBarSettingsBase', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.defaultErrorBarStyle = new Style();
	}
	static readonly defaultErrorBarStylePropertyName: string = "DefaultErrorBarStyle";
	static readonly defaultErrorBarStyleProperty: DependencyProperty = DependencyProperty.register(ErrorBarSettingsBase.defaultErrorBarStylePropertyName, (<any>Style).$type, (<any>ErrorBarSettingsBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ErrorBarSettingsBase>sender).raisePropertyChanged(ErrorBarSettingsBase.defaultErrorBarStylePropertyName, e.oldValue, e.newValue)));
	get defaultErrorBarStyle(): Style {
		return <Style>this.getValue(ErrorBarSettingsBase.defaultErrorBarStyleProperty);
	}
	set defaultErrorBarStyle(value: Style) {
		this.setValue(ErrorBarSettingsBase.defaultErrorBarStyleProperty, value);
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
}


