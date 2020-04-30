/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { SummaryCell } from "./SummaryCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { SummaryCellModel } from "./SummaryCellModel";
import { ContentCellModelHelper } from "./ContentCellModelHelper";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { Brush } from "igniteui-core/Brush";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SummaryCellPresenter extends CellPresenterBase {
	static $t: Type = markType(SummaryCellPresenter, 'SummaryCellPresenter', (<any>CellPresenterBase).$type);
	constructor(cell: GridCellBase) {
		super(cell);
	}
	get summaryCell(): SummaryCell {
		return <SummaryCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let summaryModel: SummaryCellModel = <SummaryCellModel>model;
		if (model.isContentDirty) {
			ContentCellModelHelper.propertyMapper(this.cell.renderer, summaryModel, this.cell.container, this.summaryCell.summaryLabel, this.cell);
			ContentCellModelHelper.propertyMapper(this.cell.renderer, summaryModel, this.cell.container, this.summaryCell.summaryValue, this.cell);
			if (model.isDirty(SummaryCellModel.resolvedSummaryTextPropertyName) || model.isDirty(SummaryCellModel.resolvedSummaryValuePropertyName)) {
				if (summaryModel.resolvedSummaryText != null) {
					this.summaryCell.summaryLabel.setRawText(summaryModel.resolvedSummaryText);
				}
				if (summaryModel.resolvedSummaryValue != null) {
					this.summaryCell.summaryValue.setRawText(summaryModel.resolvedSummaryValue);
				}
			}
			if (model.isDirty(SummaryCellModel.summaryNameTextColorPropertyName)) {
				this.summaryCell.summaryLabel.setRawStyleProperty("color", summaryModel.summaryNameTextColor._fill);
			}
		}
	}
}


