/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Header } from "./Header";
import { CellModel } from "./CellModel";
import { CellPath } from "./CellPath";
import { TemplateHeaderCellModel } from "./TemplateHeaderCellModel";
import { Grid } from "./Grid";
import { Base, Type, markType } from "igniteui-core/type";
import { Column } from "./Column";
import { TemplateCellModel } from "./TemplateCellModel";
import { TemplateHeaderCellUpdatingEventArgs } from "./TemplateHeaderCellUpdatingEventArgs";

/**
 * @hidden 
 */
export class TemplateHeader extends Header {
	static $t: Type = markType(TemplateHeader, 'TemplateHeader', (<any>Header).$type);
	constructor() {
		super();
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new TemplateHeaderCellModel();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		let defaultKey = "template-header-" + path.column.toString();
		return defaultKey;
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let templateModel = <TemplateHeaderCellModel>cellModel;
		let owningColumn = grid.getContainingColumn(cellModel.path);
		templateModel.value = owningColumn.actualHeaderText;
		templateModel.sortDirection = owningColumn.sortDirection;
		templateModel.isFilterUIVisible = owningColumn.isFilteringEnabled && grid.isFilterUIEnabled;
	}
	prepareCreateOrUpdateCall(model: TemplateHeaderCellModel, cell: any): void {
		if (this.cellUpdating != null) {
			this.cellUpdating(this, ((() => {
				let $ret = new TemplateHeaderCellUpdatingEventArgs();
				$ret.cellInfo = model;
				$ret.content = cell;
				return $ret;
			})()));
		}
	}
	cellUpdating: (sender: any, args: TemplateHeaderCellUpdatingEventArgs) => void = null;
}


