/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { Series } from "igniteui-charts/Series";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class GeographicShapeSeriesBaseBase extends GeographicMapSeriesHost {
	static $t: Type = markType(GeographicShapeSeriesBaseBase, 'GeographicShapeSeriesBaseBase', (<any>GeographicMapSeriesHost).$type);
	protected abstract createSeries(): Series;
}


