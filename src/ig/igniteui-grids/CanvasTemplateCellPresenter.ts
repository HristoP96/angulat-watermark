/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasTemplateCell } from "./CanvasTemplateCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { Grid } from "./Grid";
import { CellModel } from "./CellModel";
import { TemplateCellModel } from "./TemplateCellModel";
import { TemplateColumn } from "./TemplateColumn";
import { CellPath } from "./CellPath";
import { List$1 } from "igniteui-core/List$1";
import { Column } from "./Column";
import { CanvasTemplateCellContainer } from "./CanvasTemplateCellContainer";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CanvasTemplateCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasTemplateCellPresenter, 'CanvasTemplateCellPresenter', (<any>CanvasCellPresenterBase).$type);
	private _grid: Grid = null;
	constructor(cell: CanvasGridCellBase, grid: Grid) {
		super(cell);
		this._grid = grid;
	}
	get templateCell(): CanvasTemplateCell {
		return <CanvasTemplateCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let templateCellModel: TemplateCellModel = <TemplateCellModel>model;
		let column: TemplateColumn = <TemplateColumn>this._grid.actualColumns._inner[model.path.column];
		if (model.isDirtyById(CellModel.contentOpacityPropertyId) || model.isDirtyById(CellModel.virtualizationPercentagePropertyId)) {
			let virtualPercent: number = Math.min(1, Math.max(0, model.virtualizationPercentage));
			let opacity: number = model.contentOpacity * (1 - virtualPercent);
			this.templateCell.view.opacity = opacity;
		}
		this.templateCell.forceCacheCreate();
		column.prepareCreateOrUpdateCall(<TemplateCellModel>model, this.templateCell);
	}
}


