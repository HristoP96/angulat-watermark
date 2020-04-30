/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { TemplateCell } from "./TemplateCell";
import { GridCellBase } from "./GridCellBase";
import { Grid } from "./Grid";
import { CellModel } from "./CellModel";
import { TemplateCellModel } from "./TemplateCellModel";
import { TemplateColumn } from "./TemplateColumn";
import { CellPath } from "./CellPath";
import { List$1 } from "igniteui-core/List$1";
import { Column } from "./Column";
import { TemplateCellContainer } from "./TemplateCellContainer";
import { Base, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";

/**
 * @hidden 
 */
export class TemplateCellPresenter extends CellPresenterBase {
	static $t: Type = markType(TemplateCellPresenter, 'TemplateCellPresenter', (<any>CellPresenterBase).$type);
	private _grid: Grid = null;
	constructor(cell: GridCellBase, grid: Grid) {
		super(cell);
		this._grid = grid;
	}
	get templateCell(): TemplateCell {
		return <TemplateCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let templateCellModel: TemplateCellModel = <TemplateCellModel>model;
		let column: TemplateColumn = <TemplateColumn>this._grid.actualColumns._inner[model.path.column];
		if (model.isDirtyById(CellModel.contentOpacityPropertyId) || model.isDirtyById(CellModel.virtualizationPercentagePropertyId)) {
			let virtualPercent: number = Math.min(1, Math.max(0, model.virtualizationPercentage));
			let opacity: number = model.contentOpacity * (1 - virtualPercent);
			this.templateCell.view.element.setRawStyleProperty("opacity", (<number>opacity).toString());
		}
		column.prepareCreateOrUpdateCall(<TemplateCellModel>model, this.templateCell.view);
	}
}


