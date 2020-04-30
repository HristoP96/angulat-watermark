/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Control } from "./Control";
import { Base, Type, markType } from "./type";
import { DataTemplate } from "./DataTemplate";

/**
 * @hidden 
 */
export class ContentControl extends Control {
	static $t: Type = markType(ContentControl, 'ContentControl', (<any>Control).$type);
	private _content: any = null;
	get content(): any {
		return this._content;
	}
	set content(value: any) {
		this._content = value;
	}
	private _contentTemplate: DataTemplate = null;
	get contentTemplate(): DataTemplate {
		return this._contentTemplate;
	}
	set contentTemplate(value: DataTemplate) {
		this._contentTemplate = value;
	}
}


