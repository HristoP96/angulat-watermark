/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { SectionHeaderCell } from "./SectionHeaderCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { SectionHeaderCellModel } from "./SectionHeaderCellModel";
import { Base, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { ContentCellModelHelper } from "./ContentCellModelHelper";
import { GroupSummaryDisplayMode } from "./GroupSummaryDisplayMode";

/**
 * @hidden 
 */
export class SectionHeaderCellPresenter extends CellPresenterBase {
	static $t: Type = markType(SectionHeaderCellPresenter, 'SectionHeaderCellPresenter', (<any>CellPresenterBase).$type);
	constructor(cell: GridCellBase) {
		super(cell);
	}
	get headerCell(): SectionHeaderCell {
		return <SectionHeaderCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let headerModel: SectionHeaderCellModel = <SectionHeaderCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(SectionHeaderCellModel.groupsPropertyId) || model.isDirtyById(SectionHeaderCellModel.resolvedTextPropertyId) || model.isDirtyById(SectionHeaderCellModel.resolvedSummaryTextPropertyId) || model.isDirtyById(SectionHeaderCellModel.summaryDisplayModePropertyId)) {
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
				this.headerCell.textView.setRawText(headerModel.renderValue);
			}
			ContentCellModelHelper.propertyMapper(this.cell.renderer, headerModel, this.cell.container, this.headerCell.textView, this.cell);
		}
	}
}


