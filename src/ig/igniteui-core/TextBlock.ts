/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FrameworkElement } from "./FrameworkElement";
import { Brush } from "./Brush";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TextBlock extends FrameworkElement {
	static $t: Type = markType(TextBlock, 'TextBlock', (<any>FrameworkElement).$type);
	private _text: string = null;
	get text(): string {
		return this._text;
	}
	set text(value: string) {
		if (this._text != value) {
			this._textDirty = true;
			this._text = value;
		}
	}
	private _fill: Brush = null;
	get fill(): Brush {
		return this._fill;
	}
	set fill(value: Brush) {
		this._fill = value;
	}
	private _textDirty: boolean = true;
	private static readonly widthHistoryLength: number = 5;
	private _widthHistory: number[] = null;
	private _textHistory: string[] = null;
	private _fontContextHistory: any[] = null;
	private _fontVersionHistory: number[] = null;
	private _historyPosition: number = -1;
	getHistoricalWidth(fontContext: any, fontVersion: number): number {
		if (this._historyPosition == -1) {
			return -1;
		}
		if (!this._textDirty) {
			if (this._fontContextHistory[this._historyPosition] == fontContext) {
				return this._widthHistory[this._historyPosition];
			}
		}
		for (let i = 0; i < TextBlock.widthHistoryLength; i++) {
			let index: number = this._historyPosition - i;
			if (index < 0) {
				index = (TextBlock.widthHistoryLength) + index;
			}
			if (fontVersion != this._fontVersionHistory[index] || fontContext != this._fontContextHistory[index] || this._text != this._textHistory[index]) {
				continue;
			}
			return this._widthHistory[index];
		}
		return -1;
	}
	setHistoricalWidth(fontContext: any, fontVersion: number, width: number): void {
		if (this._historyPosition == -1) {
			this._textHistory = <string[]>new Array(TextBlock.widthHistoryLength);
			this._fontContextHistory = <any[]>new Array(TextBlock.widthHistoryLength);
			this._fontVersionHistory = <number[]>new Array(TextBlock.widthHistoryLength);
			this._widthHistory = <number[]>new Array(TextBlock.widthHistoryLength);
		}
		this._historyPosition++;
		if (this._historyPosition > TextBlock.widthHistoryLength - 1) {
			this._historyPosition = 0;
		}
		this._textHistory[this._historyPosition] = this._text;
		this._fontContextHistory[this._historyPosition] = fontContext;
		this._fontVersionHistory[this._historyPosition] = fontVersion;
		this._widthHistory[this._historyPosition] = width;
		this._textDirty = false;
	}
}


