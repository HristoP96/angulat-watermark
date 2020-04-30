/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { Brush } from "igniteui-core/Brush";
import { FontInfo } from "igniteui-core/FontInfo";

/**
 * @hidden 
 */
export class PieChartStyleInfo extends Base {
	static $t: Type = markType(PieChartStyleInfo, 'PieChartStyleInfo');
	private _brushes: BrushCollection = null;
	get brushes(): BrushCollection {
		return this._brushes;
	}
	set brushes(value: BrushCollection) {
		this._brushes = value;
	}
	private _outlines: BrushCollection = null;
	get outlines(): BrushCollection {
		return this._outlines;
	}
	set outlines(value: BrushCollection) {
		this._outlines = value;
	}
	private _innerFontBrush: Brush = null;
	get innerFontBrush(): Brush {
		return this._innerFontBrush;
	}
	set innerFontBrush(value: Brush) {
		this._innerFontBrush = value;
	}
	private _outerFontBrush: Brush = null;
	get outerFontBrush(): Brush {
		return this._outerFontBrush;
	}
	set outerFontBrush(value: Brush) {
		this._outerFontBrush = value;
	}
	private _font: FontInfo = null;
	get font(): FontInfo {
		return this._font;
	}
	set font(value: FontInfo) {
		this._font = value;
	}
	private _selectedBrush: Brush = null;
	get selectedBrush(): Brush {
		return this._selectedBrush;
	}
	set selectedBrush(value: Brush) {
		this._selectedBrush = value;
	}
	private _selectedOutlineBrush: Brush = null;
	get selectedOutlineBrush(): Brush {
		return this._selectedOutlineBrush;
	}
	set selectedOutlineBrush(value: Brush) {
		this._selectedOutlineBrush = value;
	}
	private _selectedOutlineThickness: number = 0;
	get selectedOutlineThickness(): number {
		return this._selectedOutlineThickness;
	}
	set selectedOutlineThickness(value: number) {
		this._selectedOutlineThickness = value;
	}
	private _selectedOpacity: number = 0;
	get selectedOpacity(): number {
		return this._selectedOpacity;
	}
	set selectedOpacity(value: number) {
		this._selectedOpacity = value;
	}
}


