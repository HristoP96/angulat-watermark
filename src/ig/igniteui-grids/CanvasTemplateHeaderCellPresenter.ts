/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasTemplateHeaderCell } from "./CanvasTemplateHeaderCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { Grid } from "./Grid";
import { CellModel } from "./CellModel";
import { Column } from "./Column";
import { TemplateHeader } from "./TemplateHeader";
import { TemplateHeaderCellModel } from "./TemplateHeaderCellModel";
import { CellPath } from "./CellPath";
import { List$1 } from "igniteui-core/List$1";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CanvasTemplateHeaderCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasTemplateHeaderCellPresenter, 'CanvasTemplateHeaderCellPresenter', (<any>CanvasCellPresenterBase).$type);
	private _grid: Grid = null;
	get templateCell(): CanvasTemplateHeaderCell {
		return <CanvasTemplateHeaderCell>this.cell;
	}
	constructor(cell: CanvasGridCellBase, grid: Grid) {
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
		}
		let templateCellModel: TemplateHeaderCellModel = <TemplateHeaderCellModel>model;
		this.templateCell.forceCacheCreate();
		header.prepareCreateOrUpdateCall(templateCellModel, this.templateCell);
	}
}


