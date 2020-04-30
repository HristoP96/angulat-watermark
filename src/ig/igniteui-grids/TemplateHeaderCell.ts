/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GridCellBase } from "./GridCellBase";
import { TemplateCellContainer } from "./TemplateCellContainer";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TemplateHeaderCell extends GridCellBase {
	static $t: Type = markType(TemplateHeaderCell, 'TemplateHeaderCell', (<any>GridCellBase).$type);
	private _container1: TemplateCellContainer = null;
	get view(): TemplateCellContainer {
		return this._container1;
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this._container1 = new TemplateCellContainer(renderer);
		this.container.append(this._container1.element);
	}
	protected get_isHeaderCell(): boolean {
		return true;
	}
}


