/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FrameworkElement } from "./FrameworkElement";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Image extends FrameworkElement {
	static $t: Type = markType(Image, 'Image', (<any>FrameworkElement).$type);
	private _source: any = null;
	get source(): any {
		return this._source;
	}
	set source(value: any) {
		this._source = value;
	}
	private _isHitTestVisible: boolean = false;
	get isHitTestVisible(): boolean {
		return this._isHitTestVisible;
	}
	set isHitTestVisible(value: boolean) {
		this._isHitTestVisible = value;
	}
}


