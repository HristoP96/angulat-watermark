/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Color } from "igniteui-core/Color";
import { Brush } from "igniteui-core/Brush";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { CellModel } from "./CellModel";
import { GridCellBase } from "./GridCellBase";
import { TextCellLineBreakMode } from "./TextCellLineBreakMode";
import { FontInfo } from "igniteui-core/FontInfo";
import { FontUtil } from "igniteui-core/FontUtil";

/**
 * @hidden 
 */
export class ContentCellModelHelper extends Base {
	static $t: Type = markType(ContentCellModelHelper, 'ContentCellModelHelper');
	private static _transparent: Color = Color.fromArgb(0, 0, 0, 0);
	static extractColor(brush: Brush): Color {
		if (brush == null) {
			return ContentCellModelHelper._transparent;
		}
		return brush.color;
	}
	private static setHorizontalAlignment(container: DomWrapper, element: DomWrapper, alignment: CellContentHorizontalAlignment): void {
		switch (alignment) {
			case CellContentHorizontalAlignment.Left:
			container.setRawStyleProperty("text-align", "left");
			break;

			case CellContentHorizontalAlignment.Center:
			container.setRawStyleProperty("text-align", "center");
			break;

			case CellContentHorizontalAlignment.Right:
			container.setRawStyleProperty("text-align", "right");
			break;

			case CellContentHorizontalAlignment.Stretch:
			container.setRawStyleProperty("text-align", "center");
			break;

		}

	}
	private static setVerticalAlignment(container: DomWrapper, element: DomWrapper, alignment: CellContentVerticalAlignment): void {
		switch (alignment) {
			case CellContentVerticalAlignment.Top:
			element.setRawStyleProperty("vertical-align", "top");
			break;

			case CellContentVerticalAlignment.Center:
			element.setRawStyleProperty("vertical-align", "center");
			break;

			case CellContentVerticalAlignment.Bottom:
			element.setRawStyleProperty("vertical-align", "bottom");
			break;

			case CellContentVerticalAlignment.Stretch:
			element.setRawStyleProperty("vertical-align", "center");
			break;

		}

	}
	static propertyMapper(renderer: DomRenderer, model: CellModel, container: DomWrapper, textView: DomWrapper, cell: GridCellBase): void {
		if (model.isContentDirty) {
			if (model.isDirtyById(CellModel.contentOpacityPropertyId) || model.isDirtyById(CellModel.virtualizationPercentagePropertyId) || model.isDirty(CellModel.isRowPinnedPropertyName) || model.isDirty(CellModel.isRowStickyPropertyName) || model.isDirty(CellModel.pinnedRowOpacityPropertyName)) {
				let virtualPercent: number = Math.min(1, Math.max(0, model.virtualizationPercentage));
				let opacity: number = model.actualContentOpacity * (1 - virtualPercent);
				textView.setRawStyleProperty("opacity", (<number>opacity).toString());
				if (model.isPlaceholdContentNeeded) {
					cell.updatePlaceholderVisualOpacity(model.actualContentOpacity * virtualPercent);
				}
			}
			if (model.isDirtyById(CellModel.textColorPropertyId)) {
				let color: Color = ContentCellModelHelper.extractColor((model).textColor);
				textView.setRawStyleProperty("color", color.colorString);
				if (model.isPlaceholdContentNeeded) {
					cell.updatePlaceholderColor(model.textColor);
				}
			}
			if (model.isDirtyById(CellModel.lineBreakModePropertyId)) {
				switch (model.lineBreakMode) {
					case TextCellLineBreakMode.Ellipsis:
					textView.setRawStyleProperty("white-space", "nowrap");
					textView.setRawStyleProperty("text-overflow", "ellipsis");
					break;

					case TextCellLineBreakMode.CharacterWrap:

					case TextCellLineBreakMode.WordWrap:
					textView.setRawStyleProperty("white-space", "pre-wrap");
					textView.setRawStyleProperty("text-overflow", "ellipsis");
					break;

					case TextCellLineBreakMode.NoWrap:
					textView.setRawStyleProperty("white-space", "nowrap");
					textView.setRawStyleProperty("text-overflow", "clip");
					break;

				}

			}
			if (model.isDirtyById(CellModel.horizontalAlignmentPropertyId) || model.isDirtyById(CellModel.verticalAlignmentPropertyId)) {
				let hAlignment = model.horizontalAlignment;
				let vAlignment = model.verticalAlignment;
				ContentCellModelHelper.setHorizontalAlignment(container, textView, hAlignment);
				cell.onHorizontalAlignmentChange(container, textView, hAlignment);
				ContentCellModelHelper.setVerticalAlignment(container, textView, vAlignment);
				if (model.isPlaceholdContentNeeded) {
					cell.updatePlaceholderAlignment(hAlignment, vAlignment);
				}
			}
			if (model.isDirtyById(CellModel.fontInfoPropertyId)) {
				let fontInfo: FontInfo = model.fontInfo;
				if (fontInfo == null) {
					fontInfo = FontUtil.getDefaultFont(renderer);
				}
				textView.setRawStyleProperty("font", fontInfo.fontString);
			}
		}
	}
}


