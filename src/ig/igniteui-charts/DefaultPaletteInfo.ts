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
export class DefaultPaletteInfo extends Base {
	static $t: Type = markType(DefaultPaletteInfo, 'DefaultPaletteInfo');
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
	private _markerBrushes: BrushCollection = null;
	get markerBrushes(): BrushCollection {
		return this._markerBrushes;
	}
	set markerBrushes(value: BrushCollection) {
		this._markerBrushes = value;
	}
	private _markerOutlines: BrushCollection = null;
	get markerOutlines(): BrushCollection {
		return this._markerOutlines;
	}
	set markerOutlines(value: BrushCollection) {
		this._markerOutlines = value;
	}
	private _trendLineBrushes: BrushCollection = null;
	get trendLineBrushes(): BrushCollection {
		return this._trendLineBrushes;
	}
	set trendLineBrushes(value: BrushCollection) {
		this._trendLineBrushes = value;
	}
	private _negativeBrushes: BrushCollection = null;
	get negativeBrushes(): BrushCollection {
		return this._negativeBrushes;
	}
	set negativeBrushes(value: BrushCollection) {
		this._negativeBrushes = value;
	}
	private _negativeOutlines: BrushCollection = null;
	get negativeOutlines(): BrushCollection {
		return this._negativeOutlines;
	}
	set negativeOutlines(value: BrushCollection) {
		this._negativeOutlines = value;
	}
	private _fontBrush: Brush = null;
	get fontBrush(): Brush {
		return this._fontBrush;
	}
	set fontBrush(value: Brush) {
		this._fontBrush = value;
	}
	private _crosshairBrush: Brush = null;
	get crosshairBrush(): Brush {
		return this._crosshairBrush;
	}
	set crosshairBrush(value: Brush) {
		this._crosshairBrush = value;
	}
	private _font: FontInfo = null;
	get font(): FontInfo {
		return this._font;
	}
	set font(value: FontInfo) {
		this._font = value;
	}
	private _axisLineBrush: Brush = null;
	get axisLineBrush(): Brush {
		return this._axisLineBrush;
	}
	set axisLineBrush(value: Brush) {
		this._axisLineBrush = value;
	}
}


