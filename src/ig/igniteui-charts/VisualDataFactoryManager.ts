/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DVContainer } from "igniteui-core/DVContainer";
import { IDataChartVisualDataManager, IDataChartVisualDataManager_$type } from "./IDataChartVisualDataManager";
import { DataChartVisualDataManager } from "./DataChartVisualDataManager";
import { IAxisVisualDataManager, IAxisVisualDataManager_$type } from "./IAxisVisualDataManager";
import { ISeriesVisualDataManager, ISeriesVisualDataManager_$type } from "./ISeriesVisualDataManager";
import { AxisVisualDataManager } from "./AxisVisualDataManager";
import { SeriesVisualDataManager } from "./SeriesVisualDataManager";

/**
 * @hidden 
 */
export class VisualDataFactoryManager extends Base {
	static $t: Type = markType(VisualDataFactoryManager, 'VisualDataFactoryManager');
	private static _isRegistered: boolean = false;
	static register(): void {
		if (!VisualDataFactoryManager._isRegistered) {
			DVContainer.instance.registerFactory(IDataChartVisualDataManager_$type, () => new DataChartVisualDataManager());
			DVContainer.instance.registerFactory(IAxisVisualDataManager_$type, () => new AxisVisualDataManager());
			DVContainer.instance.registerFactory(ISeriesVisualDataManager_$type, () => new SeriesVisualDataManager());
			VisualDataFactoryManager._isRegistered = true;
		}
	}
}


