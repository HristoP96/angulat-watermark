/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IGetItemAtIndex, IGetItemAtIndex_$type } from "./IGetItemAtIndex";
import { Base, Type } from "./type";
import { IFastItemColumn$1 } from "./IFastItemColumn$1";
import { IFastItemColumnPropertyName } from "./IFastItemColumnPropertyName";
import { FastItemsSourceEventArgs } from "./FastItemsSourceEventArgs";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";

/**
 * @hidden 
 */
export interface IFastItemsSource extends IGetItemAtIndex { 
	item(index: number): any;
indexOf(item: any): number;
registerColumn(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<number>;
deregisterColumn(fastItemColumn: IFastItemColumnPropertyName): void;
registerColumnInt(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<number>;
registerColumnObject(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<any>;
registerColumnDateTime(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<Date>;
event: (sender: any, e: FastItemsSourceEventArgs) => void;
asArray(): any[];
readonly count: number;
handleCollectionChanged(e: NotifyCollectionChangedEventArgs): void;
}

/**
 * @hidden 
 */
export let IFastItemsSource_$type = new Type(null, 'IFastItemsSource', null, [IGetItemAtIndex_$type]);


