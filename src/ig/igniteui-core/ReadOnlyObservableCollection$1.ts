/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";
import { INotifyCollectionChanged, INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, markType } from "./type";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";

/**
 * @hidden 
 */
export class ReadOnlyObservableCollection$1<T> extends ReadOnlyCollection$1<T> implements INotifyCollectionChanged, INotifyPropertyChanged {
	static $t: Type = markType(ReadOnlyObservableCollection$1, 'ReadOnlyObservableCollection$1', (<any>ReadOnlyCollection$1).$type.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
	protected $t: Type = null;
	constructor($t: Type, list: ObservableCollection$1<T>) {
		super($t, 0);
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
	}
	collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


