/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CanvasTemplateCellContainer } from "./CanvasTemplateCellContainer";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CanvasTemplateHeaderCell extends CanvasGridCellBase {
	static $t: Type = markType(CanvasTemplateHeaderCell, 'CanvasTemplateHeaderCell', (<any>CanvasGridCellBase).$type);
	private _container: CanvasTemplateCellContainer = null;
	get view(): CanvasTemplateCellContainer {
		return this._container;
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this._container = new CanvasTemplateCellContainer(renderer);
	}
	protected get_isHeaderCell(): boolean {
		return true;
	}
	forceCacheCreate(): void {
		this.ensureCacheCreated();
	}
}


