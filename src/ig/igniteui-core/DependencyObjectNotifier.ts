/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DependencyObjectNotifier extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(DependencyObjectNotifier, 'DependencyObjectNotifier', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	protected onPropertyChanged(propertyName: string): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


