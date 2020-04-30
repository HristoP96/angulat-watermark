/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Color } from "igniteui-core/Color";
import { Brush } from "igniteui-core/Brush";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { CellModel } from "./CellModel";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { FontInfo } from "igniteui-core/FontInfo";
import { FontUtil } from "igniteui-core/FontUtil";

/**
 * @hidden 
 */
export class CanvasContentCellModelHelper extends Base {
	static $t: Type = markType(CanvasContentCellModelHelper, 'CanvasContentCellModelHelper');
	private static _transparent: Color = Color.fromArgb(0, 0, 0, 0);
	static extractColor(brush: Brush): Color {
		if (brush == null) {
			return CanvasContentCellModelHelper._transparent;
		}
		return brush.color;
	}
	static propertyMapper(renderer: DomRenderer, model: CellModel, cell: CanvasGridCellBase): void {
		if (model.isContentDirty) {
			if (model.isDirtyById(CellModel.contentOpacityPropertyId) || model.isDirtyById(CellModel.virtualizationPercentagePropertyId) || model.isDirty(CellModel.isRowPinnedPropertyName) || model.isDirty(CellModel.isRowStickyPropertyName) || model.isDirty(CellModel.pinnedRowOpacityPropertyName)) {
				let virtualPercent: number = Math.min(1, Math.max(0, model.virtualizationPercentage));
				let opacity: number = model.actualContentOpacity * (1 - virtualPercent);
				cell.setContentOpacity(opacity);
				if (model.isPlaceholdContentNeeded) {
					cell.updatePlaceholderVisualOpacity(model.actualContentOpacity * virtualPercent);
				}
			}
			if (model.isDirtyById(CellModel.textColorPropertyId)) {
				let color: Color = CanvasContentCellModelHelper.extractColor((model).textColor);
				cell.setTextColor(color);
				if (model.isPlaceholdContentNeeded) {
					cell.updatePlaceholderColor(model.textColor);
				}
			}
			if (model.isDirtyById(CellModel.lineBreakModePropertyId)) {
			}
			if (model.isDirtyById(CellModel.horizontalAlignmentPropertyId) || model.isDirtyById(CellModel.verticalAlignmentPropertyId)) {
				let hAlignment = model.horizontalAlignment;
				let vAlignment = model.verticalAlignment;
				cell.setHorizontalAlignment(hAlignment);
				cell.setVerticalAlignment(vAlignment);
				if (model.isPlaceholdContentNeeded) {
					cell.updatePlaceholderAlignment(hAlignment, vAlignment);
				}
			}
			if (model.isDirtyById(CellModel.fontInfoPropertyId)) {
				let fontInfo: FontInfo = model.fontInfo;
				if (fontInfo == null) {
					fontInfo = FontUtil.getDefaultFont(renderer);
				}
				cell.setFont(fontInfo);
			}
		}
	}
}


