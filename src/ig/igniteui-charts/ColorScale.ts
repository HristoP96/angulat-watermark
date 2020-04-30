/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, IList$1, IList$1_$type, Base, PropertyChangedEventArgs, Type, markType } from "igniteui-core/type";
import { Color } from "igniteui-core/Color";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";

/**
 * @hidden 
 */
export abstract class ColorScale extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(ColorScale, 'ColorScale', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	abstract getColor(value: number, defaultMinimum: number, defaultMaximum: number, valueColumn: IList$1<number>): Color;
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
	}
}


