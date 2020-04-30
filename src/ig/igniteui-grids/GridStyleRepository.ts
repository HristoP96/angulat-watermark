/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { FontInfo } from "igniteui-core/FontInfo";
import { DeviceUtils } from "igniteui-core/DeviceUtils";

/**
 * @hidden 
 */
export class GridStyleRepository extends Base {
	static $t: Type = markType(GridStyleRepository, 'GridStyleRepository');
	private static _rowSeparatorBackgroundColor: Brush = null;
	static get rowSeparatorBackgroundColor(): Brush {
		if (GridStyleRepository._rowSeparatorBackgroundColor == null) {
			GridStyleRepository._rowSeparatorBackgroundColor = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(255, 230, 230, 230);
				return $ret;
			})());
		}
		return GridStyleRepository._rowSeparatorBackgroundColor;
	}
	private static _defaultStickyRowSeparatorBackground: Brush = null;
	static get defaultStickyRowSeparatorBackground(): Brush {
		if (GridStyleRepository._defaultStickyRowSeparatorBackground == null) {
			let color: string = "#CCCCCC";
			GridStyleRepository._defaultStickyRowSeparatorBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultStickyRowSeparatorBackground;
	}
	private static _defaultLastStickyRowSeparatorBackground: Brush = null;
	static get defaultLastStickyRowSeparatorBackground(): Brush {
		if (GridStyleRepository._defaultLastStickyRowSeparatorBackground == null) {
			let color: string = "#999999";
			GridStyleRepository._defaultLastStickyRowSeparatorBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultLastStickyRowSeparatorBackground;
	}
	private static _textCellTextColor: Brush = null;
	static get textCellTextColor(): Brush {
		if (GridStyleRepository._textCellTextColor == null) {
			GridStyleRepository._textCellTextColor = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(222, 0, 0, 0);
				return $ret;
			})());
		}
		return GridStyleRepository._textCellTextColor;
	}
	private static _activationBorderColor: Brush = null;
	static get activationBorderColor(): Brush {
		if (GridStyleRepository._activationBorderColor == null) {
			GridStyleRepository._activationBorderColor = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(222, 0, 0, 0);
				return $ret;
			})());
		}
		return GridStyleRepository._activationBorderColor;
	}
	private static _textCellFontInfo: FontInfo = null;
	static get textCellFontInfo(): FontInfo {
		if (GridStyleRepository._textCellFontInfo == null) {
			GridStyleRepository._textCellFontInfo = new FontInfo();
			GridStyleRepository._textCellFontInfo.fontSize = DeviceUtils.toFontPixelUnits(13);
			GridStyleRepository._textCellFontInfo.fontFamily = "Verdana";
		}
		return GridStyleRepository._textCellFontInfo;
	}
	private static _headerTextCellFontInfo: FontInfo = null;
	static get headerTextCellFontInfo(): FontInfo {
		if (GridStyleRepository._headerTextCellFontInfo == null) {
			GridStyleRepository._headerTextCellFontInfo = new FontInfo();
			GridStyleRepository._headerTextCellFontInfo.fontSize = DeviceUtils.toFontPixelUnits(12);
			GridStyleRepository._headerTextCellFontInfo.fontFamily = "Verdana";
		}
		return GridStyleRepository._headerTextCellFontInfo;
	}
	private static _defaultSelectedBackgroundColor: Brush = null;
	static get defaultSelectedBackground(): Brush {
		if (GridStyleRepository._defaultSelectedBackgroundColor == null) {
			GridStyleRepository._defaultSelectedBackgroundColor = new Brush();
			GridStyleRepository._defaultSelectedBackgroundColor.color = Color.fromArgb(255, 238, 238, 238);
		}
		return GridStyleRepository._defaultSelectedBackgroundColor;
	}
	private static _defaultBackgroundColor: Brush = null;
	static get defaultBackgroundColor(): Brush {
		if (GridStyleRepository._defaultBackgroundColor == null) {
			GridStyleRepository._defaultBackgroundColor = ((() => {
				let $ret = new Brush();
				$ret.fill = "White";
				return $ret;
			})());
		}
		return GridStyleRepository._defaultBackgroundColor;
	}
	private static _headerBackgroundColor: Brush = null;
	static get headerBackgroundColor(): Brush {
		if (GridStyleRepository._headerBackgroundColor == null) {
			GridStyleRepository._headerBackgroundColor = ((() => {
				let $ret = new Brush();
				$ret.fill = "White";
				return $ret;
			})());
		}
		return GridStyleRepository._headerBackgroundColor;
	}
	private static _sortIndicatorColor: Brush = null;
	static get sortIndicatorColor(): Brush {
		if (GridStyleRepository._sortIndicatorColor == null) {
			GridStyleRepository._sortIndicatorColor = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(138, 0, 0, 0);
				return $ret;
			})());
		}
		return GridStyleRepository._sortIndicatorColor;
	}
	private static _headerTextColor: Brush = null;
	static get headerTextColor(): Brush {
		if (GridStyleRepository._headerTextColor == null) {
			GridStyleRepository._headerTextColor = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(138, 0, 0, 0);
				return $ret;
			})());
		}
		return GridStyleRepository._headerTextColor;
	}
	private static _defaultSectionHeaderBackground: Brush = null;
	static get defaultSectionHeaderBackground(): Brush {
		if (GridStyleRepository._defaultSectionHeaderBackground == null) {
			let color: string = "#DDDDDD";
			GridStyleRepository._defaultSectionHeaderBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultSectionHeaderBackground;
	}
	private static _defaultSectionFooterBackground: Brush = null;
	static get defaultSectionFooterBackground(): Brush {
		if (GridStyleRepository._defaultSectionFooterBackground == null) {
			GridStyleRepository._defaultSectionFooterBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = "#f5f5dc";
				return $ret;
			})());
		}
		return GridStyleRepository._defaultSectionFooterBackground;
	}
	private static _defaultStickyRowBackground: Brush = null;
	static get defaultStickyRowBackground(): Brush {
		if (GridStyleRepository._defaultStickyRowBackground == null) {
			let color: string = "#F5F5F5";
			GridStyleRepository._defaultStickyRowBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultStickyRowBackground;
	}
	private static _defaultPinnedRowBackground: Brush = null;
	static get defaultPinnedRowBackground(): Brush {
		if (GridStyleRepository._defaultPinnedRowBackground == null) {
			let color: string = "White";
			GridStyleRepository._defaultPinnedRowBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultPinnedRowBackground;
	}
	private static _defaultRootSummaryCellBackground: Brush = null;
	static get defaultRootSummaryCellBackground(): Brush {
		if (GridStyleRepository._defaultRootSummaryCellBackground == null) {
			let color: string = "#E0E0E0";
			GridStyleRepository._defaultRootSummaryCellBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultRootSummaryCellBackground;
	}
	private static _defaultSectionSummaryCellBackground: Brush = null;
	static get defaultSectionSummaryCellBackground(): Brush {
		if (GridStyleRepository._defaultSectionSummaryCellBackground == null) {
			let color: string = "#F4F4F4";
			GridStyleRepository._defaultSectionSummaryCellBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultSectionSummaryCellBackground;
	}
	private static _defaultSummaryNameTextColor: Brush = null;
	static get defaultSummaryNameTextColor(): Brush {
		if (GridStyleRepository._defaultSummaryNameTextColor == null) {
			let color = "#0099FF";
			GridStyleRepository._defaultSummaryNameTextColor = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultSummaryNameTextColor;
	}
	private static _defaultColumnMoveSeparatorBackground: Brush = null;
	static get defaultColumnMoveSeparatorBackground(): Brush {
		if (GridStyleRepository._defaultColumnMoveSeparatorBackground == null) {
			let color: string = "#F50000";
			GridStyleRepository._defaultColumnMoveSeparatorBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultColumnMoveSeparatorBackground;
	}
	private static _defaultPinnedAreaSeparatorBackground: Brush = null;
	static get defaultPinnedAreaSeparatorBackground(): Brush {
		if (GridStyleRepository._defaultPinnedAreaSeparatorBackground == null) {
			let color: string = "#BDBDBD";
			GridStyleRepository._defaultPinnedAreaSeparatorBackground = ((() => {
				let $ret = new Brush();
				$ret.fill = color;
				return $ret;
			})());
		}
		return GridStyleRepository._defaultPinnedAreaSeparatorBackground;
	}
}


