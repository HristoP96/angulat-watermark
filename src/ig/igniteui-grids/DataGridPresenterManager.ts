/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { Grid } from "./Grid";
import { ICellPresenter } from "./ICellPresenter";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { CellModel } from "./CellModel";
import { TextCellModel } from "./TextCellModel";
import { CanvasTextCell } from "./CanvasTextCell";
import { CanvasTextCellPresenter } from "./CanvasTextCellPresenter";
import { NumericCellModel } from "./NumericCellModel";
import { CanvasNumericCell } from "./CanvasNumericCell";
import { CanvasNumericCellPresenter } from "./CanvasNumericCellPresenter";
import { DateTimeCellModel } from "./DateTimeCellModel";
import { CanvasDateTimeCell } from "./CanvasDateTimeCell";
import { CanvasDateTimeCellPresenter } from "./CanvasDateTimeCellPresenter";
import { TextHeaderCellModel } from "./TextHeaderCellModel";
import { CanvasTextHeaderCell } from "./CanvasTextHeaderCell";
import { CanvasTextHeaderCellPresenter } from "./CanvasTextHeaderCellPresenter";
import { RowSeparatorModel } from "./RowSeparatorModel";
import { CanvasRowSeparatorCell } from "./CanvasRowSeparatorCell";
import { CanvasRowSeparatorCellPresenter } from "./CanvasRowSeparatorCellPresenter";
import { ImageCellModel } from "./ImageCellModel";
import { CanvasImageCell } from "./CanvasImageCell";
import { CanvasImageCellPresenter } from "./CanvasImageCellPresenter";
import { TemplateCellModel } from "./TemplateCellModel";
import { CanvasTemplateCell } from "./CanvasTemplateCell";
import { CanvasTemplateCellPresenter } from "./CanvasTemplateCellPresenter";
import { TemplateHeaderCellModel } from "./TemplateHeaderCellModel";
import { CanvasTemplateHeaderCell } from "./CanvasTemplateHeaderCell";
import { CanvasTemplateHeaderCellPresenter } from "./CanvasTemplateHeaderCellPresenter";
import { SectionHeaderCellModel } from "./SectionHeaderCellModel";
import { CanvasSectionHeaderCell } from "./CanvasSectionHeaderCell";
import { CanvasSectionHeaderCellPresenter } from "./CanvasSectionHeaderCellPresenter";
import { VerticalSeparatorCellModel } from "./VerticalSeparatorCellModel";
import { CanvasVerticalSeparatorCell } from "./CanvasVerticalSeparatorCell";
import { CanvasVerticalSeparatorCellPresenter } from "./CanvasVerticalSeparatorCellPresenter";
import { SummaryCellModel } from "./SummaryCellModel";
import { CanvasSummaryCell } from "./CanvasSummaryCell";
import { CanvasSummaryCellPresenter } from "./CanvasSummaryCellPresenter";
import { TextCell } from "./TextCell";
import { TextCellPresenter } from "./TextCellPresenter";
import { NumericCell } from "./NumericCell";
import { NumericCellPresenter } from "./NumericCellPresenter";
import { DateTimeCell } from "./DateTimeCell";
import { DateTimeCellPresenter } from "./DateTimeCellPresenter";
import { TextHeaderCell } from "./TextHeaderCell";
import { TextHeaderCellPresenter } from "./TextHeaderCellPresenter";
import { RowSeparatorCell } from "./RowSeparatorCell";
import { RowSeparatorCellPresenter } from "./RowSeparatorCellPresenter";
import { ImageCell } from "./ImageCell";
import { ImageCellPresenter } from "./ImageCellPresenter";
import { TemplateCell } from "./TemplateCell";
import { TemplateCellPresenter } from "./TemplateCellPresenter";
import { TemplateHeaderCell } from "./TemplateHeaderCell";
import { TemplateHeaderCellPresenter } from "./TemplateHeaderCellPresenter";
import { SectionHeaderCell } from "./SectionHeaderCell";
import { SectionHeaderCellPresenter } from "./SectionHeaderCellPresenter";
import { VerticalSeparatorCell } from "./VerticalSeparatorCell";
import { VerticalSeparatorCellPresenter } from "./VerticalSeparatorCellPresenter";
import { SummaryCell } from "./SummaryCell";
import { SummaryCellPresenter } from "./SummaryCellPresenter";

/**
 * @hidden 
 */
export class DataGridPresenterManager extends Base {
	static $t: Type = markType(DataGridPresenterManager, 'DataGridPresenterManager');
	private _grid: Grid = null;
	private _useCanvas: boolean = false;
	constructor(grid: Grid, useCanvas: boolean) {
		super();
		this._grid = grid;
		this._useCanvas = useCanvas;
	}
	getCellPresenter(renderer: DomRenderer, model: CellModel): ICellPresenter {
		if (model.presenter != null) {
			return model.presenter;
		}
		if (this._useCanvas) {
			if (typeCast<TextCellModel>((<any>TextCellModel).$type, model) !== null) {
				model.presenter = new CanvasTextCellPresenter(new CanvasTextCell(renderer));
			}
			if (typeCast<NumericCellModel>((<any>NumericCellModel).$type, model) !== null) {
				model.presenter = new CanvasNumericCellPresenter(new CanvasNumericCell(renderer));
			}
			if (typeCast<DateTimeCellModel>((<any>DateTimeCellModel).$type, model) !== null) {
				model.presenter = new CanvasDateTimeCellPresenter(new CanvasDateTimeCell(renderer));
			}
			if (typeCast<TextHeaderCellModel>((<any>TextHeaderCellModel).$type, model) !== null) {
				model.presenter = new CanvasTextHeaderCellPresenter(new CanvasTextHeaderCell(renderer));
			}
			if (typeCast<RowSeparatorModel>((<any>RowSeparatorModel).$type, model) !== null) {
				model.presenter = new CanvasRowSeparatorCellPresenter(new CanvasRowSeparatorCell(renderer));
			}
			if (typeCast<ImageCellModel>((<any>ImageCellModel).$type, model) !== null) {
				model.presenter = new CanvasImageCellPresenter(new CanvasImageCell(renderer));
			}
			if (typeCast<TemplateCellModel>((<any>TemplateCellModel).$type, model) !== null) {
				model.presenter = new CanvasTemplateCellPresenter(new CanvasTemplateCell(renderer), this._grid);
			}
			if (typeCast<TemplateHeaderCellModel>((<any>TemplateHeaderCellModel).$type, model) !== null) {
				model.presenter = new CanvasTemplateHeaderCellPresenter(new CanvasTemplateHeaderCell(renderer), this._grid);
			}
			if (typeCast<SectionHeaderCellModel>((<any>SectionHeaderCellModel).$type, model) !== null) {
				model.presenter = new CanvasSectionHeaderCellPresenter(new CanvasSectionHeaderCell(renderer));
			}
			if (typeCast<VerticalSeparatorCellModel>((<any>VerticalSeparatorCellModel).$type, model) !== null) {
				model.presenter = new CanvasVerticalSeparatorCellPresenter(new CanvasVerticalSeparatorCell(renderer));
			}
			if (typeCast<SummaryCellModel>((<any>SummaryCellModel).$type, model) !== null) {
				model.presenter = new CanvasSummaryCellPresenter(new CanvasSummaryCell(renderer));
			}
		} else {
			if (typeCast<TextCellModel>((<any>TextCellModel).$type, model) !== null) {
				model.presenter = new TextCellPresenter(new TextCell(renderer));
			}
			if (typeCast<NumericCellModel>((<any>NumericCellModel).$type, model) !== null) {
				model.presenter = new NumericCellPresenter(new NumericCell(renderer));
			}
			if (typeCast<DateTimeCellModel>((<any>DateTimeCellModel).$type, model) !== null) {
				model.presenter = new DateTimeCellPresenter(new DateTimeCell(renderer));
			}
			if (typeCast<TextHeaderCellModel>((<any>TextHeaderCellModel).$type, model) !== null) {
				model.presenter = new TextHeaderCellPresenter(new TextHeaderCell(renderer));
			}
			if (typeCast<RowSeparatorModel>((<any>RowSeparatorModel).$type, model) !== null) {
				model.presenter = new RowSeparatorCellPresenter(new RowSeparatorCell(renderer));
			}
			if (typeCast<ImageCellModel>((<any>ImageCellModel).$type, model) !== null) {
				model.presenter = new ImageCellPresenter(new ImageCell(renderer));
			}
			if (typeCast<TemplateCellModel>((<any>TemplateCellModel).$type, model) !== null) {
				model.presenter = new TemplateCellPresenter(new TemplateCell(renderer), this._grid);
			}
			if (typeCast<TemplateHeaderCellModel>((<any>TemplateHeaderCellModel).$type, model) !== null) {
				model.presenter = new TemplateHeaderCellPresenter(new TemplateHeaderCell(renderer), this._grid);
			}
			if (typeCast<SectionHeaderCellModel>((<any>SectionHeaderCellModel).$type, model) !== null) {
				model.presenter = new SectionHeaderCellPresenter(new SectionHeaderCell(renderer));
			}
			if (typeCast<VerticalSeparatorCellModel>((<any>VerticalSeparatorCellModel).$type, model) !== null) {
				model.presenter = new VerticalSeparatorCellPresenter(new VerticalSeparatorCell(renderer));
			}
			if (typeCast<SummaryCellModel>((<any>SummaryCellModel).$type, model) !== null) {
				model.presenter = new SummaryCellPresenter(new SummaryCell(renderer));
			}
		}
		return model.presenter;
	}
}


