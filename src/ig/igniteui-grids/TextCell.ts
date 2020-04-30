/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GridCellBase } from "./GridCellBase";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TextCell extends GridCellBase {
	static $t: Type = markType(TextCell, 'TextCell', (<any>GridCellBase).$type);
	private _textView: DomWrapper = null;
	get textView(): DomWrapper {
		return this._textView;
	}
	private _maxWidth: number = -1;
	setWidth(width: number, widthPadding: number): void {
		super.setWidth(width, widthPadding);
		let maxWidth = Math.max(0, width - widthPadding - (this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + this.expansionIndicatorMarginRight));
		if (this._maxWidth != maxWidth) {
			this._maxWidth = maxWidth;
			this._textView.setRawStyleProperty("max-width", maxWidth.toString() + "px");
		}
	}
	private _maxHeight: number = -1;
	setHeight(height: number, heightPadding: number): void {
		super.setHeight(height, heightPadding);
		let maxHeight = Math.max(0, height - heightPadding);
		if (this._maxHeight != maxHeight) {
			this._maxHeight = maxHeight;
			this._textView.setRawStyleProperty("max-height", maxHeight.toString() + "px");
		}
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this._textView = renderer.createElement("span");
		this.container.setRawStyleProperty("text-align", "left");
		this._textView.setRawStyleProperty("display", "inline-block");
		this._textView.setRawStyleProperty("line-height", "normal");
		this._textView.setRawStyleProperty("vertical-align", "middle");
		this._textView.setRawStyleProperty("overflow", "hidden");
		this._textView.setRawStyleProperty("white-space", "nowrap");
		this._textView.setRawStyleProperty("text-overflow", "ellipsis");
		this.container.setRawStyleProperty("vertical-align", "middle");
		this.container.append(this._textView);
	}
	protected get_isPlaceholderSupported(): boolean {
		return true;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		if (propertyName == GridCellBase.indentPropertyName || propertyName == GridCellBase.isCollapsablePropertyName) {
			this._textView.setRawStyleProperty("margin-left", this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + this.expansionIndicatorMarginRight + "px");
		}
	}
}


