/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { TextCell } from "./TextCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { TextCellModel } from "./TextCellModel";
import { Base, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { ContentCellModelHelper } from "./ContentCellModelHelper";

/**
 * @hidden 
 */
export class TextCellPresenter extends CellPresenterBase {
	static $t: Type = markType(TextCellPresenter, 'TextCellPresenter', (<any>CellPresenterBase).$type);
	constructor(cell: GridCellBase) {
		super(cell);
	}
	get textCell(): TextCell {
		return <TextCell>this.cell;
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
				this.textCell.textView.setRawText(textModel.renderValue);
			}
			ContentCellModelHelper.propertyMapper(this.cell.renderer, textModel, this.cell.container, this.textCell.textView, this.cell);
		}
	}
}


