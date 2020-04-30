/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "./ObservableCollection$1";
import { UIElement } from "./UIElement";
import { FrameworkElement } from "./FrameworkElement";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { IEnumerator, IEnumerator_$type, Base, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, fromEn, fromEnum, Type, markType } from "./type";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export class UIElementCollection extends ObservableCollection$1<UIElement> {
	static $t: Type = markType(UIElementCollection, 'UIElementCollection', (<any>ObservableCollection$1).$type.specialize((<any>UIElement).$type));
	private _owner: FrameworkElement = null;
	constructor(owner: FrameworkElement) {
		super((<any>UIElement).$type, 0);
		this._owner = owner;
	}
	protected onCollectionChanged(args: NotifyCollectionChangedEventArgs): void {
		super.onCollectionChanged(args);
		if (args.oldItems != null) {
			for (let item of fromEn<any>(args.oldItems)) {
				(<FrameworkElement>item).parent = null;
			}
		}
		if (args.newItems != null) {
			for (let item1 of fromEn<any>(args.newItems)) {
				(<FrameworkElement>item1).parent = this._owner;
			}
		}
	}
	protected clearItems(): void {
		for (let item of fromEnum<UIElement>(this)) {
			(<FrameworkElement>item).parent = null;
		}
		super.clearItems();
	}
}


