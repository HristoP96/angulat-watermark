/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HostSeriesView } from "./HostSeriesView";
import { GeographicSymbolSeriesBase } from "./GeographicSymbolSeriesBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class GeographicSymbolSeriesBaseView extends HostSeriesView {
	static $t: Type = markType(GeographicSymbolSeriesBaseView, 'GeographicSymbolSeriesBaseView', (<any>HostSeriesView).$type);
	constructor(model: GeographicSymbolSeriesBase) {
		super(model);
		this.symbolModel = model;
	}
	private _symbolModel: GeographicSymbolSeriesBase = null;
	private get symbolModel(): GeographicSymbolSeriesBase {
		return this._symbolModel;
	}
	private set symbolModel(value: GeographicSymbolSeriesBase) {
		this._symbolModel = value;
	}
}


