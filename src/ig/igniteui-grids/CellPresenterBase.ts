/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ICellPresenter, ICellPresenter_$type } from "./ICellPresenter";
import { INativeCell } from "./INativeCell";
import { GridCellBase } from "./GridCellBase";
import { CellModel } from "./CellModel";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class CellPresenterBase extends Base implements ICellPresenter {
	static $t: Type = markType(CellPresenterBase, 'CellPresenterBase', (<any>Base).$type, [ICellPresenter_$type]);
	cell: GridCellBase = null;
	constructor(cell: GridCellBase) {
		super();
		this.cell = cell;
	}
	modelUpdated(model: CellModel): void {
		this.modelUpdatedOverride(model);
	}
	protected modelUpdatedOverride(model: CellModel): void {
		this.cell.setActionManager(model.actionManager);
		if (model.isDirtyById(CellModel.actualPaddingLeftPropertyId) || model.isDirtyById(CellModel.actualPaddingTopPropertyId) || model.isDirtyById(CellModel.actualPaddingRightPropertyId) || model.isDirtyById(CellModel.actualPaddingBottomPropertyId)) {
			this.cell.setPadding(model.actualPaddingLeft, model.actualPaddingTop, model.actualPaddingRight, model.actualPaddingBottom);
		}
		if (model.isBorderDirty) {
			this.cell.setBorder(model.actualBorder, model.actualBorderLeftWidth, model.actualBorderTopWidth, model.actualBorderRightWidth, model.actualBorderBottomWidth);
		}
		if (model.isSizeDirty) {
			this.cell.setHeight(model.height, (model.actualPaddingTop + model.actualPaddingBottom + model.actualBorderTopWidth + model.actualBorderBottomWidth));
			this.cell.setWidth(model.width, (model.actualPaddingLeft + model.actualPaddingRight + model.actualBorderLeftWidth + model.actualBorderRightWidth));
		}
		if (model.isContentDirty) {
			if (model.isPlaceholdContentNeeded && !this.cell.canRenderPlaceholderContent) {
				this.cell.createPlaceholderVisual();
			}
			if (model.isDirtyById(CellModel.actualBackgroundPropertyId)) {
				this.cell.setBackgroundColor(model.actualBackground.color);
			}
			if (model.isDirtyById(CellModel.actualOpacityPropertyId)) {
				this.cell.setOpacity(<number>model.actualOpacity);
			}
			if (model.isDirty(CellModel.isCollapsablePropertyName)) {
				this.cell.isCollapsable = model.isCollapsable;
				this.cell.indent = model.indent;
				this.cell.isExpanded = model.isExpanded;
				this.cell.setWidth(model.width, (model.actualPaddingLeft + model.actualPaddingRight + model.actualBorderLeftWidth + model.actualBorderRightWidth));
			}
			if (model.isDirty(CellModel.indentPropertyName)) {
				this.cell.indent = model.indent;
				this.cell.setWidth(model.width, (model.actualPaddingLeft + model.actualPaddingRight + model.actualBorderLeftWidth + model.actualBorderRightWidth));
			}
			if (model.isDirty(CellModel.isExpandedPropertyName)) {
				this.cell.isExpanded = model.isExpanded;
			}
		}
		if (model.isSizeDirty && model.isPlaceholdContentNeeded) {
			this.cell.updatePlaceholderSize(model);
		}
	}
	private getBlendedColor(backgroundColor: Brush, selectedBackgroundColor: Brush, selectedStatus: number): Color {
		if (selectedStatus == 0) {
			return backgroundColor.color;
		}
		if (selectedStatus == 1) {
			return selectedBackgroundColor.color;
		}
		let blendedColor: Brush = BrushUtil.getInterpolation(backgroundColor, selectedStatus, selectedBackgroundColor, InterpolationMode.RGB);
		return blendedColor.color;
	}
	get nativeCell(): INativeCell {
		return this.cell;
	}
	get isCanvasBased(): boolean {
		return false;
	}
}


