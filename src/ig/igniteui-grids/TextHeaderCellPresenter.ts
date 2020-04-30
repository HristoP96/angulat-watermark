/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { TextHeaderCell } from "./TextHeaderCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { TextHeaderCellModel } from "./TextHeaderCellModel";
import { TextCellModel } from "./TextCellModel";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { GridSortIndicator } from "./GridSortIndicator";
import { ContentCellModelHelper } from "./ContentCellModelHelper";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TextHeaderCellPresenter extends CellPresenterBase {
	static $t: Type = markType(TextHeaderCellPresenter, 'TextHeaderCellPresenter', (<any>CellPresenterBase).$type);
	constructor(cell: GridCellBase) {
		super(cell);
	}
	get textCell(): TextHeaderCell {
		return <TextHeaderCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let textModel: TextHeaderCellModel = <TextHeaderCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(TextCellModel.textValuePropertyId)) {
				textModel.renderValue = textModel.textValue;
				this.textCell.textView.setRawText(textModel.renderValue);
			}
			if (model.isDirtyById(CellModel.sortDirectionPropertyId)) {
				if (model.isStateDirty) {
					this.textCell.sortIndicator.isAnimationEnabled = false;
				}
				this.textCell.sortIndicator.sortDirection = model.sortDirection;
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
			if (model.isDirty(TextHeaderCellModel.isFilterUIVisiblePropertyName)) {
				this.textCell.isFilterVisible = textModel.isFilterUIVisible;
				this.textCell.filterContainer.setRawStyleProperty("display", textModel.isFilterUIVisible ? "inline-block" : "none");
				this.cell.setWidth(model.width, (model.paddingLeft + model.paddingRight + model.borderLeftWidth + model.borderRightWidth));
			}
			if (model.isDirty(TextHeaderCellModel.sortIndicatorStylePropertyName)) {
				this.textCell.sortIndicator.sortIndicatorStyle = textModel.sortIndicatorStyle;
			}
			ContentCellModelHelper.propertyMapper(this.cell.renderer, textModel, this.cell.container, this.textCell.textView, this.cell);
		}
	}
}


