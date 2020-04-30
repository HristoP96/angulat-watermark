/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasTextHeaderCell } from "./CanvasTextHeaderCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { Base, runOn, Type, markType } from "igniteui-core/type";
import { CellModel } from "./CellModel";
import { TextHeaderCellModel } from "./TextHeaderCellModel";
import { TextCellModel } from "./TextCellModel";
import { GridSortIndicator } from "./GridSortIndicator";
import { Grid } from "./Grid";
import { CanvasContentCellModelHelper } from "./CanvasContentCellModelHelper";

/**
 * @hidden 
 */
export class CanvasTextHeaderCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasTextHeaderCellPresenter, 'CanvasTextHeaderCellPresenter', (<any>CanvasCellPresenterBase).$type);
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	get textCell(): CanvasTextHeaderCell {
		return <CanvasTextHeaderCell>this.cell;
	}
	private _refresh: () => void = null;
	protected refresh(): void {
		if (this._refresh != null) {
			this._refresh();
		}
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let textModel: TextHeaderCellModel = <TextHeaderCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(TextCellModel.textValuePropertyId)) {
				textModel.renderValue = textModel.textValue;
				this.textCell.setText(textModel.renderValue);
			}
			if (model.isDirtyById(CellModel.sortDirectionPropertyId)) {
				if (model.isStateDirty) {
					this.textCell.sortIndicator.isAnimationEnabled = false;
				}
				if (this._refresh == null) {
					let grid = model.owner;
					this._refresh = () => grid.refresh();
				}
				this.textCell.setSortDirection(model.sortDirection);
				this.textCell.setRefreshHandler(runOn(this, this.refresh));
				if (model.isStateDirty) {
					this.textCell.sortIndicator.isAnimationEnabled = true;
				}
			}
			if (model.isDirtyById(CellModel.sortIndicatorColorPropertyId)) {
				if (model.isStateDirty) {
					this.textCell.sortIndicator.isAnimationEnabled = false;
				}
				this.textCell.sortIndicator.iconColor = model.sortIndicatorColor;
				if (model.isStateDirty) {
					this.textCell.sortIndicator.isAnimationEnabled = true;
				}
			}
			if (model.isDirty(TextHeaderCellModel.sortIndicatorStylePropertyName)) {
				this.textCell.sortIndicator.sortIndicatorStyle = textModel.sortIndicatorStyle;
			}
			CanvasContentCellModelHelper.propertyMapper(this.cell.renderer, textModel, this.cell);
		}
	}
}


