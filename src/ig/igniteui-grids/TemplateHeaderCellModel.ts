/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TemplateCellModel } from "./TemplateCellModel";
import { CellModel } from "./CellModel";
import { Base, Type, markType } from "igniteui-core/type";
import { CellModelExport } from "./CellModelExport";
import { TemplateHeaderCellModelExport } from "./TemplateHeaderCellModelExport";

/**
 * @hidden 
 */
export class TemplateHeaderCellModel extends TemplateCellModel {
	static $t: Type = markType(TemplateHeaderCellModel, 'TemplateHeaderCellModel', (<any>TemplateCellModel).$type);
	static readonly isFilterUIVisiblePropertyName: string = "IsFilterUIVisible";
	static readonly isFilterUIVisiblePropertyId: number = CellModel.getCellModelPropertyId(TemplateHeaderCellModel.isFilterUIVisiblePropertyName);
	private _isFilterUIVisible: boolean = false;
	get isFilterUIVisible(): boolean {
		return this._isFilterUIVisible;
	}
	set isFilterUIVisible(value: boolean) {
		let oldValue = this._isFilterUIVisible;
		this._isFilterUIVisible = value;
		if (this._isFilterUIVisible != oldValue) {
			this.onPropertyChanged(TemplateHeaderCellModel.isFilterUIVisiblePropertyName, TemplateHeaderCellModel.isFilterUIVisiblePropertyId, oldValue, this._isFilterUIVisible);
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == TemplateHeaderCellModel.isFilterUIVisiblePropertyName) {
			this.isFilterUIVisible = <boolean>value;
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == TemplateHeaderCellModel.isFilterUIVisiblePropertyName) {
			return this.isFilterUIVisible;
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new TemplateHeaderCellModelExport();
		}
		$export = super.createModelExport($export);
		let templateExport = <TemplateHeaderCellModelExport>$export;
		templateExport.value = this.value;
		return templateExport;
	}
}


