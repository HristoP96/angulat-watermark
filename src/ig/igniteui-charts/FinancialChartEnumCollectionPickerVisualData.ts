/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FinancialChartVisualData } from "./FinancialChartVisualData";

/**
 * @hidden 
 */
export class FinancialChartEnumCollectionPickerVisualData extends Base {
	static $t: Type = markType(FinancialChartEnumCollectionPickerVisualData, 'FinancialChartEnumCollectionPickerVisualData');
	private _items: string[] = null;
	get items(): string[] {
		return this._items;
	}
	set items(value: string[]) {
		this._items = value;
	}
	private _selectedItems: string[] = null;
	get selectedItems(): string[] {
		return this._selectedItems;
	}
	set selectedItems(value: string[]) {
		this._selectedItems = value;
	}
	private _pickerLeft: number = 0;
	get pickerLeft(): number {
		return this._pickerLeft;
	}
	set pickerLeft(value: number) {
		this._pickerLeft = value;
	}
	private _pickerTop: number = 0;
	get pickerTop(): number {
		return this._pickerTop;
	}
	set pickerTop(value: number) {
		this._pickerTop = value;
	}
	private _pickerWidth: number = 0;
	get pickerWidth(): number {
		return this._pickerWidth;
	}
	set pickerWidth(value: number) {
		this._pickerWidth = value;
	}
	private _pickerHeight: number = 0;
	get pickerHeight(): number {
		return this._pickerHeight;
	}
	set pickerHeight(value: number) {
		this._pickerHeight = value;
	}
	private _buttonLeft: number = 0;
	get buttonLeft(): number {
		return this._buttonLeft;
	}
	set buttonLeft(value: number) {
		this._buttonLeft = value;
	}
	private _buttonTop: number = 0;
	get buttonTop(): number {
		return this._buttonTop;
	}
	set buttonTop(value: number) {
		this._buttonTop = value;
	}
	private _buttonWidth: number = 0;
	get buttonWidth(): number {
		return this._buttonWidth;
	}
	set buttonWidth(value: number) {
		this._buttonWidth = value;
	}
	private _buttonHeight: number = 0;
	get buttonHeight(): number {
		return this._buttonHeight;
	}
	set buttonHeight(value: number) {
		this._buttonHeight = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isVisible = value;
	}
	private _isPickerVisible: boolean = false;
	get isPickerVisible(): boolean {
		return this._isPickerVisible;
	}
	set isPickerVisible(value: boolean) {
		this._isPickerVisible = value;
	}
	serialize(): string {
		return FinancialChartVisualData.serialize1([ "items", "selectedItems", "pickerLeft", "pickerTop", "pickerWidth", "pickerHeight", "buttonLeft", "buttonTop", "buttonWidth", "buttonHeight", "width", "height", "isVisible", "isPickerVisible" ], <any[]>[ this.items, this.selectedItems, this.pickerLeft, this.pickerTop, this.pickerWidth, this.pickerHeight, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, this.width, this.height, this.isVisible, this.isPickerVisible ]);
	}
}


