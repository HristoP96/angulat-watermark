/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IDataSourceDataProvider, IDataSourceDataProvider_$type } from "./IDataSourceDataProvider";
import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { Base, Type } from "./type";
import { IDataSourcePage } from "./IDataSourcePage";
import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";

/**
 * @hidden 
 */
export interface IDataSourceVirtualDataProvider extends IDataSourceDataProvider { 
	addPageRequest(pageIndex: number, priority: DataSourcePageRequestPriority): void;
removePageRequest(pageIndex: number): void;
removeAllPageRequests(): void;
close(): void;
pageLoaded: (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void;
pageSizeRequested: number;
}

/**
 * @hidden 
 */
export let IDataSourceVirtualDataProvider_$type = new Type(null, 'IDataSourceVirtualDataProvider', null, [IDataSourceDataProvider_$type]);


