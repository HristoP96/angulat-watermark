/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";

/**
 * @hidden 
 */
export class CanvasTemplateCellContainer extends Base {
	static $t: Type = markType(CanvasTemplateCellContainer, 'CanvasTemplateCellContainer');
	private _xFSpecificContent: any = null;
	get xFSpecificContent(): any {
		return this._xFSpecificContent;
	}
	set xFSpecificContent(value: any) {
		this._xFSpecificContent = value;
	}
	private _renderer: DomRenderer = null;
	get isCanvasBased(): boolean {
		return true;
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
	}
	constructor(renderer: DomRenderer) {
		super();
		this._renderer = renderer;
	}
}


