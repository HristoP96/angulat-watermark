/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ContourValueResolver } from "./ContourValueResolver";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, NotSupportedException, Number_$type, typeGetValue, toEnum, markType } from "igniteui-core/type";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Thread } from "igniteui-core/culture";

/**
 * @hidden 
 */
export class LinearContourValueResolver extends ContourValueResolver {
	static $t: Type = markType(LinearContourValueResolver, 'LinearContourValueResolver', (<any>ContourValueResolver).$type);
	constructor() {
		super();
	}
	private static readonly valueCountPropertyName: string = "ValueCount";
	static readonly valueCountProperty: DependencyProperty = DependencyProperty.register(LinearContourValueResolver.valueCountPropertyName, Number_$type, (<any>LinearContourValueResolver).$type, new PropertyMetadata(2, 10, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<LinearContourValueResolver>sender).propertyUpdated(LinearContourValueResolver.valueCountPropertyName, e.oldValue, e.newValue)));
	get valueCount(): number {
		return typeGetValue(this.getValue(LinearContourValueResolver.valueCountProperty));
	}
	set valueCount(value: number) {
		this.setValue(LinearContourValueResolver.valueCountProperty, value);
	}
	private *_getContourValues(valueColumn: IFastItemColumn$1<number>): IterableIterator<any> {
		for (let i: number = 0; i < this.valueCount; i++) {
			yield valueColumn.minimum + (valueColumn.maximum - valueColumn.minimum) * <number>(i + 1) / <number>(this.valueCount + 1);
		}
	}
	getContourValues(valueColumn: IFastItemColumn$1<number>): IEnumerable$1<number> {
		return toEnum(() => this._getContourValues(valueColumn));
	}
}


