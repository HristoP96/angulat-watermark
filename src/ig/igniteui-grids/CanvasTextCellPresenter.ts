/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasTextCell } from "./CanvasTextCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellModel } from "./CellModel";
import { TextCellModel } from "./TextCellModel";
import { Base, Type, markType } from "igniteui-core/type";
import { CanvasContentCellModelHelper } from "./CanvasContentCellModelHelper";

/**
 * @hidden 
 */
export class CanvasTextCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasTextCellPresenter, 'CanvasTextCellPresenter', (<any>CanvasCellPresenterBase).$type);
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	get textCell(): CanvasTextCell {
		return <CanvasTextCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let textModel: TextCellModel = <TextCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(TextCellModel.textValuePropertyId) || model.isDirtyById(CellModel.originalValuePropertyId)) {
				if (textModel.textValue != null) {
					textModel.renderValue = textModel.textValue;
				} else {
					if (textModel.originalValue == null) {
						textModel.renderValue = "";
					} else {
						textModel.renderValue = textModel.originalValue.toString();
					}
				}
				this.textCell.setText(textModel.renderValue);
			}
			CanvasContentCellModelHelper.propertyMapper(this.cell.renderer, textModel, this.cell);
		}
	}
}


