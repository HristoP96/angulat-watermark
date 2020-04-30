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
export class SummaryCell extends GridCellBase {
	static $t: Type = markType(SummaryCell, 'SummaryCell', (<any>GridCellBase).$type);
	private _summaryLabel: DomWrapper = null;
	get summaryLabel(): DomWrapper {
		return this._summaryLabel;
	}
	private _summaryValue: DomWrapper = null;
	get summaryValue(): DomWrapper {
		return this._summaryValue;
	}
	private _wrapper: DomWrapper = null;
	private _maxWidth: number = -1;
	setWidth(width: number, widthPadding: number): void {
		super.setWidth(width, widthPadding);
		let maxWidth = Math.max(0, width - widthPadding);
		if (this._maxWidth != maxWidth) {
			this._maxWidth = maxWidth;
		}
	}
	private _maxHeight: number = -1;
	setHeight(height: number, heightPadding: number): void {
		super.setHeight(height, heightPadding);
		let maxHeight = Math.max(0, height - heightPadding);
		if (this._maxHeight != maxHeight) {
			this._maxHeight = maxHeight;
		}
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this.container.setRawStyleProperty("vertical-align", "middle");
		this._wrapper = renderer.createElement("div");
		this._summaryLabel = renderer.createElement("span");
		this._summaryLabel.setRawStyleProperty("display", "inline-block");
		this._summaryLabel.setRawStyleProperty("width", "50%");
		this._summaryLabel.setRawStyleProperty("white-space", "nowrap");
		this._summaryLabel.setRawStyleProperty("text-overflow", "ellipsis");
		this._summaryLabel.setRawStyleProperty("vertical-align", "middle");
		this._summaryLabel.setRawStyleProperty("overflow", "hidden");
		this._wrapper.append(this._summaryLabel);
		this._summaryValue = renderer.createElement("span");
		this._summaryValue.setRawStyleProperty("display", "inline-block");
		this._summaryValue.setRawStyleProperty("width", "50%");
		this._summaryValue.setRawStyleProperty("text-align", "right");
		this._summaryValue.setRawStyleProperty("white-space", "nowrap");
		this._summaryValue.setRawStyleProperty("text-overflow", "ellipsis");
		this._summaryValue.setRawStyleProperty("vertical-align", "middle");
		this._summaryValue.setRawStyleProperty("overflow", "hidden");
		this._wrapper.append(this._summaryValue);
		this.container.append(this._wrapper);
	}
	protected get_isPlaceholderSupported(): boolean {
		return false;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		if (propertyName == GridCellBase.indentPropertyName || propertyName == GridCellBase.isCollapsablePropertyName) {
			this._summaryLabel.setRawStyleProperty("margin-left", this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + this.expansionIndicatorMarginRight + "px");
		}
	}
}


