/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DataContext } from "igniteui-core/DataContext";

/**
 * @hidden 
 */
export class SeriesPointOfInterest extends Base {
	static $t: Type = markType(SeriesPointOfInterest, 'SeriesPointOfInterest');
	private _xValue: any = null;
	get xValue(): any {
		return this._xValue;
	}
	set xValue(value: any) {
		this._xValue = value;
	}
	private _yValue: any = null;
	get yValue(): any {
		return this._yValue;
	}
	set yValue(value: any) {
		this._yValue = value;
	}
	private _dataContext: DataContext = null;
	get dataContext(): DataContext {
		return this._dataContext;
	}
	set dataContext(value: DataContext) {
		this._dataContext = value;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
}


