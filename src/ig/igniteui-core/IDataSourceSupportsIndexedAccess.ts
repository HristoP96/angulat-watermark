/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IDataSourceSupportsCount, IDataSourceSupportsCount_$type } from "./IDataSourceSupportsCount";
import { Base, Type } from "./type";

/**
 * @hidden 
 */
export interface IDataSourceSupportsIndexedAccess extends IDataSourceSupportsCount { 
	getItemAtIndex(index: number): any;
}

/**
 * @hidden 
 */
export let IDataSourceSupportsIndexedAccess_$type = new Type(null, 'IDataSourceSupportsIndexedAccess', null, [IDataSourceSupportsCount_$type]);


