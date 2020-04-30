/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { TemplateHeaderCell } from "./TemplateHeaderCell";
import { GridCellBase } from "./GridCellBase";
import { Grid } from "./Grid";
import { CellModel } from "./CellModel";
import { Column } from "./Column";
import { TemplateHeader } from "./TemplateHeader";
import { TemplateHeaderCellModel } from "./TemplateHeaderCellModel";
import { CellPath } from "./CellPath";
import { List$1 } from "igniteui-core/List$1";
import { TemplateCellContainer } from "./TemplateCellContainer";
import { Base, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";

/**
 * @hidden 
 */
export class TemplateHeaderCellPresenter extends CellPresenterBase {
	static $t: Type = markType(TemplateHeaderCellPresenter, 'TemplateHeaderCellPresenter', (<any>CellPresenterBase).$type);
	private _grid: Grid = null;
	get templateCell(): TemplateHeaderCell {
		return <TemplateHeaderCell>this.cell;
	}
	constructor(cell: GridCellBase, grid: Grid) {
		super(cell);
		this._grid = grid;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let column: Column = this._grid.actualColumns._inner[model.path.column];
		let header: TemplateHeader = <TemplateHeader>column.header;
		if (model.isDirtyById(CellModel.contentOpacityPropertyId) || model.isDirtyById(CellModel.virtualizationPercentagePropertyId)) {
			let virtualPercent: number = Math.min(1, Math.max(0, model.virtualizationPercentage));
			let opacity: number = model.contentOpacity * (1 - virtualPercent);
			this.templateCell.view.element.setRawStyleProperty("opacity", (<number>opacity).toString());
		}
		let templateCellModel: TemplateHeaderCellModel = <TemplateHeaderCellModel>model;
		header.prepareCreateOrUpdateCall(templateCellModel, this.templateCell.view);
	}
}


