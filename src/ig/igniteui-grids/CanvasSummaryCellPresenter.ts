/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasSummaryCell } from "./CanvasSummaryCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellModel } from "./CellModel";
import { SummaryCellModel } from "./SummaryCellModel";
import { Color } from "igniteui-core/Color";
import { CanvasContentCellModelHelper } from "./CanvasContentCellModelHelper";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CanvasSummaryCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasSummaryCellPresenter, 'CanvasSummaryCellPresenter', (<any>CanvasCellPresenterBase).$type);
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	get summaryCell(): CanvasSummaryCell {
		return <CanvasSummaryCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let summaryModel: SummaryCellModel = <SummaryCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirty(SummaryCellModel.resolvedSummaryTextPropertyName) || model.isDirty(SummaryCellModel.resolvedSummaryValuePropertyName)) {
				this.summaryCell.setLabel(summaryModel.resolvedSummaryText);
				this.summaryCell.setText(summaryModel.resolvedSummaryValue);
			}
			if (model.isDirty(SummaryCellModel.summaryNameTextColorPropertyName)) {
				let color = CanvasContentCellModelHelper.extractColor(summaryModel.summaryNameTextColor);
				this.summaryCell.setLabelColor(color);
			}
			if (model.isDirty(SummaryCellModel.fontInfoPropertyName)) {
				this.summaryCell.setLabelFont(summaryModel.fontInfo);
			}
			CanvasContentCellModelHelper.propertyMapper(this.cell.renderer, summaryModel, this.cell);
		}
	}
}


