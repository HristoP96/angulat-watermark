/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { DateTimeCell } from "./DateTimeCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { DateTimeCellModel } from "./DateTimeCellModel";
import { TextCell } from "./TextCell";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { ContentCellModelHelper } from "./ContentCellModelHelper";
import { Base, Type, markType } from "igniteui-core/type";
import { stringEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class DateTimeCellPresenter extends CellPresenterBase {
	static $t: Type = markType(DateTimeCellPresenter, 'DateTimeCellPresenter', (<any>CellPresenterBase).$type);
	get dateTimeCell(): DateTimeCell {
		return <DateTimeCell>this.cell;
	}
	constructor(cell: GridCellBase) {
		super(cell);
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let dateTimeModel: DateTimeCellModel = <DateTimeCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(DateTimeCellModel.dateTimeValuePropertyId) || model.isDirtyById(DateTimeCellModel.formatOverridePropertyId) || model.isDirtyById(DateTimeCellModel.dateTimeFormatPropertyId)) {
				this.updateRenderValue(dateTimeModel);
				this.dateTimeCell.textView.setRawText(dateTimeModel.renderValue);
			}
			ContentCellModelHelper.propertyMapper(this.cell.renderer, dateTimeModel, this.cell.container, this.dateTimeCell.textView, this.cell);
		}
	}
	private updateRenderValue(dateTimeModel: DateTimeCellModel): void {
		dateTimeModel.renderValue = dateTimeModel.format(dateTimeModel.dateTimeValue);
		if (dateTimeModel.renderValue == stringEmpty() && dateTimeModel.originalValue != null) {
			dateTimeModel.renderValue = dateTimeModel.originalValue.toString();
		}
	}
}


