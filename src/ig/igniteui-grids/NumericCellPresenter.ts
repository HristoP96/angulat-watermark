/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { NumericCell } from "./NumericCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { NumericCellModel } from "./NumericCellModel";
import { TextCell } from "./TextCell";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { ContentCellModelHelper } from "./ContentCellModelHelper";
import { Base, Type, markType } from "igniteui-core/type";
import { NumericCellFormatter } from "./NumericCellFormatter";

/**
 * @hidden 
 */
export class NumericCellPresenter extends CellPresenterBase {
	static $t: Type = markType(NumericCellPresenter, 'NumericCellPresenter', (<any>CellPresenterBase).$type);
	get numericCell(): NumericCell {
		return <NumericCell>this.cell;
	}
	constructor(cell: GridCellBase) {
		super(cell);
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let numericCellModel: NumericCellModel = <NumericCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(NumericCellModel.numericValuePropertyId) || numericCellModel.isFormatDirty()) {
				numericCellModel.renderValue = this.formatCellValue(numericCellModel);
				this.numericCell.textView.setRawText(numericCellModel.renderValue);
			}
			ContentCellModelHelper.propertyMapper(this.cell.renderer, numericCellModel, this.cell.container, this.numericCell.textView, this.cell);
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


