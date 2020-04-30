/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GridCellBase } from "./GridCellBase";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { GridSortIndicator } from "./GridSortIndicator";
import { ICellActionManager } from "./ICellActionManager";
import { Base, runOn, delegateCombine, Type, markType } from "igniteui-core/type";
import { GridFilterDialog } from "./GridFilterDialog";
import { GridFilterDialogOpeningEventArgs } from "./GridFilterDialogOpeningEventArgs";
import { GridFilterDialogFilterChangeEventArgs } from "./GridFilterDialogFilterChangeEventArgs";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";

/**
 * @hidden 
 */
export class TextHeaderCell extends GridCellBase {
	static $t: Type = markType(TextHeaderCell, 'TextHeaderCell', (<any>GridCellBase).$type);
	private _textView: DomWrapper = null;
	private _sortIndicator: GridSortIndicator = null;
	private _filterDialog: GridFilterDialog = null;
	get textView(): DomWrapper {
		return this._textView;
	}
	get sortIndicator(): GridSortIndicator {
		return this._sortIndicator;
	}
	protected shouldEmitClick(manager: ICellActionManager): boolean {
		return true;
	}
	private _sortContainer: DomWrapper = null;
	private get sortContainer(): DomWrapper {
		return this._sortContainer;
	}
	private set sortContainer(value: DomWrapper) {
		this._sortContainer = value;
	}
	private _maxWidth: number = -1;
	setWidth(width: number, widthPadding: number): void {
		super.setWidth(width, widthPadding);
		width -= 21;
		if (this.isFilterVisible) {
			width -= 15;
		}
		let maxWidth = Math.max(0, width - widthPadding);
		if (maxWidth != this._maxWidth) {
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
		this.container.setRawStyleProperty("vertical-align", "middle");
		this._textView.setRawStyleProperty("display", "inline-block");
		this._textView.setRawStyleProperty("line-height", "normal");
		this._textView.setRawStyleProperty("vertical-align", "middle");
		this._textView.setRawStyleProperty("overflow", "hidden");
		this._textView.setRawStyleProperty("white-space", "nowrap");
		this._textView.setRawStyleProperty("text-overflow", "ellipsis");
		this.container.append(this._textView);
		let container = renderer.createElement("div");
		container.setRawStyleProperty("display", "none");
		container.setRawStyleProperty("width", "15px");
		container.setRawStyleProperty("height", "15px");
		this.filterContainer = container;
		let sub = renderer.getSubRenderer(container);
		this._filterDialog = new GridFilterDialog();
		this._filterDialog.provideContainer(sub);
		this.container.append(container);
		this._filterDialog.notifySizeChanged(15, 15);
		container = renderer.createElement("div");
		container.setRawStyleProperty("display", "inline-block");
		container.setRawStyleProperty("vertical-align", "middle");
		container.setRawStyleProperty("width", "16px");
		container.setRawStyleProperty("height", "16px");
		container.setRawStyleProperty("margin", "0 0 0 5px");
		this.sortContainer = container;
		sub = renderer.getSubRenderer(container);
		this._sortIndicator = new GridSortIndicator();
		this._sortIndicator.provideContainer(sub);
		this.container.append(container);
		this._sortIndicator.notifySizeChanged(16, 16);
		let $t = this._filterDialog;
		$t.dialogOpening = delegateCombine($t.dialogOpening, runOn(this, this.filterDialog_DialogOpening));
		let $t1 = this._filterDialog;
		$t1.filterChanging = delegateCombine($t1.filterChanging, runOn(this, this.filterDialog_FilterChanging));
		let $t2 = this._filterDialog;
		$t2.filterChanged = delegateCombine($t2.filterChanged, runOn(this, this.filterDialog_FilterChanged));
	}
	private filterDialog_FilterChanged(sender: any, args: GridFilterDialogFilterChangeEventArgs): void {
		this.actionManager.columnFilterChanged(args.filter);
	}
	private filterDialog_FilterChanging(sender: any, args: GridFilterDialogFilterChangeEventArgs): void {
		this.actionManager.columnFilterChanging(args.filter);
	}
	private filterDialog_DialogOpening(sender: any, args: GridFilterDialogOpeningEventArgs): void {
		if (this.actionManager != null) {
			args.filter = this.actionManager.getColumnFilterCondition();
			args.propertyType = this.actionManager.getColumnPropertyType();
		}
	}
	onHorizontalAlignmentChange(container: DomWrapper, textView: DomWrapper, hAlignment: CellContentHorizontalAlignment): void {
		super.onHorizontalAlignmentChange(container, textView, hAlignment);
		if (hAlignment == CellContentHorizontalAlignment.Right) {
			this.container.removeChild(this.sortContainer);
			this.container.removeChild(this.filterContainer);
			this._textView.before(this.filterContainer);
			this.filterContainer.before(this.sortContainer);
			this.sortContainer.setRawStyleProperty("margin", "0 5px 0 0");
		} else {
			this.container.removeChild(this.sortContainer);
			this.container.removeChild(this._textView);
			this.filterContainer.before(this._textView);
			this.filterContainer.before(this.sortContainer);
			this.sortContainer.setRawStyleProperty("margin", "0 0 0 5px");
		}
	}
	protected get_isHeaderCell(): boolean {
		return true;
	}
	private _filterContainer: DomWrapper = null;
	get filterContainer(): DomWrapper {
		return this._filterContainer;
	}
	set filterContainer(value: DomWrapper) {
		this._filterContainer = value;
	}
	private _isFilterVisible: boolean = false;
	get isFilterVisible(): boolean {
		return this._isFilterVisible;
	}
	set isFilterVisible(value: boolean) {
		this._isFilterVisible = value;
	}
}


