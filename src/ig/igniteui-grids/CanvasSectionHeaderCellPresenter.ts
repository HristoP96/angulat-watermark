/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasSectionHeaderCell } from "./CanvasSectionHeaderCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellModel } from "./CellModel";
import { SectionHeaderCellModel } from "./SectionHeaderCellModel";
import { Base, Type, markType } from "igniteui-core/type";
import { CanvasContentCellModelHelper } from "./CanvasContentCellModelHelper";
import { GroupSummaryDisplayMode } from "./GroupSummaryDisplayMode";

/**
 * @hidden 
 */
export class CanvasSectionHeaderCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasSectionHeaderCellPresenter, 'CanvasSectionHeaderCellPresenter', (<any>CanvasCellPresenterBase).$type);
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	get headerCell(): CanvasSectionHeaderCell {
		return <CanvasSectionHeaderCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let headerModel: SectionHeaderCellModel = <SectionHeaderCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(SectionHeaderCellModel.groupsPropertyId) || model.isDirtyById(SectionHeaderCellModel.resolvedTextPropertyId)) {
				if (headerModel.groups == null || (headerModel.groups.length == 0 && headerModel.resolvedText == null)) {
					if (headerModel.originalValue == null) {
						headerModel.renderValue = "";
					} else {
						headerModel.renderValue = headerModel.originalValue.toString();
					}
				} else {
					if (headerModel.resolvedSummaryText != null && headerModel.summaryDisplayMode == GroupSummaryDisplayMode.List) {
						headerModel.renderValue = headerModel.resolvedText + "    " + headerModel.resolvedSummaryText;
					} else {
						headerModel.renderValue = headerModel.resolvedText;
					}
				}
				this.headerCell.setText(headerModel.renderValue);
			}
			CanvasContentCellModelHelper.propertyMapper(this.cell.renderer, headerModel, this.cell);
		}
	}
}


