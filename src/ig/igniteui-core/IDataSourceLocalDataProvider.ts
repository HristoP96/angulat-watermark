/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IDataSourceDataProvider, IDataSourceDataProvider_$type } from "./IDataSourceDataProvider";
import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { IDataSourceSupportsIndexedAccess, IDataSourceSupportsIndexedAccess_$type } from "./IDataSourceSupportsIndexedAccess";
import { Base, Type } from "./type";

/**
 * @hidden 
 */
export interface IDataSourceLocalDataProvider extends IDataSourceDataProvider, IDataSourceSupportsIndexedAccess { 
	dataSource: any;
}

/**
 * @hidden 
 */
export let IDataSourceLocalDataProvider_$type = new Type(null, 'IDataSourceLocalDataProvider', null, [IDataSourceDataProvider_$type, IDataSourceSupportsIndexedAccess_$type]);


