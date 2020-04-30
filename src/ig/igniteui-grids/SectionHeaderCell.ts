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
export class SectionHeaderCell extends GridCellBase {
	static $t: Type = markType(SectionHeaderCell, 'SectionHeaderCell', (<any>GridCellBase).$type);
	private _textView: DomWrapper = null;
	get textView(): DomWrapper {
		return this._textView;
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this._textView = renderer.createElement("span");
		this.container.setRawStyleProperty("text-align", "left");
		this.container.setRawStyleProperty("vertical-align", "middle");
		this.container.setRawStyleProperty("overflow", "hidden");
		this.container.setRawStyleProperty("white-space", "nowrap");
		this.container.setRawStyleProperty("text-overflow", "ellipsis");
		this.container.append(this._textView);
	}
	protected get_isPlaceholderSupported(): boolean {
		return true;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		if (propertyName == GridCellBase.indentPropertyName) {
			this._textView.setRawStyleProperty("margin-left", this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + 10 + "px");
		}
		if (propertyName == GridCellBase.isCollapsablePropertyName) {
			if (this.isCollapsable) {
				this._textView.setRawStyleProperty("margin-left", this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + 10 + "px");
			} else {
				this._textView.setRawStyleProperty("margin-left", "0px");
			}
		}
	}
}


