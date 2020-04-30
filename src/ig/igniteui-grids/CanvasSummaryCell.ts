/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { TextBlock } from "igniteui-core/TextBlock";
import { FontInfo } from "igniteui-core/FontInfo";
import { Color } from "igniteui-core/Color";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { FontUtil } from "igniteui-core/FontUtil";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Base, Type, markType } from "igniteui-core/type";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { intDivide } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CanvasSummaryCell extends CanvasGridCellBase {
	static $t: Type = markType(CanvasSummaryCell, 'CanvasSummaryCell', (<any>CanvasGridCellBase).$type);
	private _labelText: string = null;
	private _label: TextBlock = new TextBlock();
	private _labelLeft: number = 0;
	private _labelTop: number = 0;
	private _labelFontHeight: number = 0;
	private _labelFont: FontInfo = null;
	private _labelFontVersion: number = 0;
	private _isLabelFontDirty: boolean = false;
	private _isTextLayoutDirty1: boolean = true;
	private _labelWidth: number = 0;
	constructor(renderer: DomRenderer) {
		super(renderer);
		this.setHorizontalAlignment(CellContentHorizontalAlignment.Right);
	}
	setWidth(width: number): void {
		super.setWidth(width);
		this.textMaxWidth = intDivide(width, 2);
		this._isTextLayoutDirty1 = true;
	}
	setLabelFont(font: FontInfo): void {
		this._labelFont = font;
		this._isLabelFontDirty = true;
		this.isDirty = true;
		this._isTextLayoutDirty1 = true;
	}
	setLabel(text: string): void {
		this._labelText = text;
		this._label.text = this._labelText;
		this.isDirty = true;
		this._isTextLayoutDirty1 = true;
	}
	setLabelColor(color: Color): void {
		this.isDirty = true;
		this._label.fill = ((() => {
			let $ret = new Brush();
			$ret.color = color;
			return $ret;
		})());
	}
	private updateLabelTextLayout(context: RenderingContext): void {
		if (this._label.text == null) {
			return;
		}
		if (context == null) {
			return;
		}
		if (this._isLabelFontDirty || (this._labelFont != null && this._labelFont.versionNumber != this._labelFontVersion)) {
			this._isLabelFontDirty = false;
			this._labelFontVersion = this._labelFont.versionNumber;
			context.setFontInfo(this._labelFont);
			this._labelFontHeight = FontUtil.getCurrentFontHeight(this.renderer, this._labelFont);
		}
		let innerWidth: number = this.width;
		let innerHeight: number = this.height;
		innerWidth -= (this.borderLeft + this.paddingLeft + this.borderRight + this.paddingRight);
		innerHeight -= (this.borderTop + this.paddingTop + this.borderBottom + this.paddingBottom);
		innerWidth = Math.max(innerWidth, 0);
		innerHeight = Math.max(innerHeight, 0);
		this._labelWidth = this.trimTextBlock(this._label, this._labelText, innerWidth / 2, context);
		this._labelLeft = this.paddingLeft + this.borderLeft;
		this._labelTop = this.paddingTop + this.borderTop + ((innerHeight / 2) - (this._labelFontHeight / 2));
	}
	protected renderContent(context: RenderingContext): void {
		if (this._label.text != null) {
			if (this._isTextLayoutDirty1) {
				this.updateLabelTextLayout(context);
				this._isTextLayoutDirty1 = false;
			}
			this._label.canvasLeft = this._labelLeft;
			this._label.canvasTop = this._labelTop;
			context.renderTextBlock(this._label);
		}
		super.renderContent(context);
	}
	protected get_isPlaceholderSupported(): boolean {
		return false;
	}
}


