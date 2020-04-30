/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type } from "./type";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { ISectionInformation } from "./ISectionInformation";
import { ISummaryResult } from "./ISummaryResult";

/**
 * @hidden 
 */
export interface IDataSourcePage { 
	count(): number;
getItemAtIndex(index: number): any;
getItemValueAtIndex(index: number, valueName: string): any;
pageIndex(): number;
schema(): IDataSourceSchema;
getGroupInformation(): ISectionInformation[];
getSummaryInformation(): ISummaryResult[];
}

/**
 * @hidden 
 */
export let IDataSourcePage_$type = new Type(null, 'IDataSourcePage');


