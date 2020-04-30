/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";

/**
 * @hidden 
 */
export class TemplateCellContainer extends Base {
	static $t: Type = markType(TemplateCellContainer, 'TemplateCellContainer');
	private _frameworkSpecificContent: any = null;
	get frameworkSpecificContent(): any {
		return this._frameworkSpecificContent;
	}
	set frameworkSpecificContent(value: any) {
		this._frameworkSpecificContent = value;
	}
	private _element: DomWrapper = null;
	get element(): DomWrapper {
		return this._element;
	}
	set element(value: DomWrapper) {
		this._element = value;
	}
	private _renderer: DomRenderer = null;
	get isCanvasBased(): boolean {
		return false;
	}
	constructor(renderer: DomRenderer) {
		super();
		this._renderer = renderer;
		this.element = renderer.createElement("div");
	}
}


