/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IDataObject } from "./IDataObject";

/**
 * @hidden 
 */
export class Clipboard extends Base {
	static $t: Type = markType(Clipboard, 'Clipboard');
	private static _dataObject: IDataObject = null;
	static getDataObject(): IDataObject {
		return Clipboard._dataObject;
	}
	static setDataObject(data: IDataObject, copy: boolean = false): void {
		Clipboard._dataObject = data;
	}
}


