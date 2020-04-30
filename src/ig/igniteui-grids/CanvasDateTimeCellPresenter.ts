/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasDateTimeCell } from "./CanvasDateTimeCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellModel } from "./CellModel";
import { DateTimeCellModel } from "./DateTimeCellModel";
import { CanvasContentCellModelHelper } from "./CanvasContentCellModelHelper";
import { Base, Type, markType } from "igniteui-core/type";
import { stringEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class CanvasDateTimeCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasDateTimeCellPresenter, 'CanvasDateTimeCellPresenter', (<any>CanvasCellPresenterBase).$type);
	get dateTimeCell(): CanvasDateTimeCell {
		return <CanvasDateTimeCell>this.cell;
	}
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let dateTimeModel: DateTimeCellModel = <DateTimeCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(DateTimeCellModel.dateTimeValuePropertyId) || model.isDirtyById(DateTimeCellModel.formatOverridePropertyId) || model.isDirtyById(DateTimeCellModel.dateTimeFormatPropertyId)) {
				this.updateRenderValue(dateTimeModel);
				this.dateTimeCell.setText(dateTimeModel.renderValue);
			}
			CanvasContentCellModelHelper.propertyMapper(this.cell.renderer, dateTimeModel, this.cell);
		}
	}
	private updateRenderValue(dateTimeModel: DateTimeCellModel): void {
		dateTimeModel.renderValue = dateTimeModel.format(dateTimeModel.dateTimeValue);
		if (dateTimeModel.renderValue == stringEmpty() && dateTimeModel.originalValue != null) {
			dateTimeModel.renderValue = dateTimeModel.originalValue.toString();
		}
	}
}


