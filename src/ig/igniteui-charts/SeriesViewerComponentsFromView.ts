/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IOverviewPlusDetailPane } from "igniteui-core/IOverviewPlusDetailPane";

/**
 * @hidden 
 */
export class SeriesViewerComponentsFromView extends Base {
	static $t: Type = markType(SeriesViewerComponentsFromView, 'SeriesViewerComponentsFromView');
	private _overviewPlusDetailPane: IOverviewPlusDetailPane = null;
	get overviewPlusDetailPane(): IOverviewPlusDetailPane {
		return this._overviewPlusDetailPane;
	}
	set overviewPlusDetailPane(value: IOverviewPlusDetailPane) {
		this._overviewPlusDetailPane = value;
	}
}


