/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { DataTemplateRenderInfo } from "./DataTemplateRenderInfo";
import { DataTemplateMeasureInfo } from "./DataTemplateMeasureInfo";
import { DataTemplatePassInfo } from "./DataTemplatePassInfo";

/**
 * @hidden 
 */
export class DataTemplate extends Base {
	static $t: Type = markType(DataTemplate, 'DataTemplate');
	private _render: (info: DataTemplateRenderInfo) => void = null;
	get render(): (info: DataTemplateRenderInfo) => void {
		return this._render;
	}
	set render(value: (info: DataTemplateRenderInfo) => void) {
		this._render = value;
	}
	private _measure: (info: DataTemplateMeasureInfo) => void = null;
	get measure(): (info: DataTemplateMeasureInfo) => void {
		return this._measure;
	}
	set measure(value: (info: DataTemplateMeasureInfo) => void) {
		this._measure = value;
	}
	private _passStarting: (info: DataTemplatePassInfo) => void = null;
	get passStarting(): (info: DataTemplatePassInfo) => void {
		return this._passStarting;
	}
	set passStarting(value: (info: DataTemplatePassInfo) => void) {
		this._passStarting = value;
	}
	private _passCompleted: (info: DataTemplatePassInfo) => void = null;
	get passCompleted(): (info: DataTemplatePassInfo) => void {
		return this._passCompleted;
	}
	set passCompleted(value: (info: DataTemplatePassInfo) => void) {
		this._passCompleted = value;
	}
}


