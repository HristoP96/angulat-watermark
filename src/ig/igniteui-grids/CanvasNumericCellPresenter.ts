/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasNumericCell } from "./CanvasNumericCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellModel } from "./CellModel";
import { NumericCellModel } from "./NumericCellModel";
import { CanvasContentCellModelHelper } from "./CanvasContentCellModelHelper";
import { Base, Type, markType } from "igniteui-core/type";
import { NumericCellFormatter } from "./NumericCellFormatter";

/**
 * @hidden 
 */
export class CanvasNumericCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasNumericCellPresenter, 'CanvasNumericCellPresenter', (<any>CanvasCellPresenterBase).$type);
	get numericCell(): CanvasNumericCell {
		return <CanvasNumericCell>this.cell;
	}
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let numericCellModel: NumericCellModel = <NumericCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(NumericCellModel.numericValuePropertyId) || numericCellModel.isFormatDirty()) {
				numericCellModel.renderValue = this.formatCellValue(numericCellModel);
				this.numericCell.setText(numericCellModel.renderValue);
			}
			CanvasContentCellModelHelper.propertyMapper(this.cell.renderer, numericCellModel, this.cell);
		}
	}
	private formatCellValue(model: NumericCellModel): string {
		if (model.formatOverride != null) {
			let val_ = model.numericValue;
			let override_ = model.formatOverride;
			return <string>(override_.format(val_));
		}
		return NumericCellFormatter.formatValue(model);
	}
}


