/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Point, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TreemapNodePointerEventArgs extends EventArgs {
	static $t: Type = markType(TreemapNodePointerEventArgs, 'TreemapNodePointerEventArgs', (<any>EventArgs).$type);
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	private _sum: number = 0;
	get sum(): number {
		return this._sum;
	}
	set sum(value: number) {
		this._sum = value;
	}
	private _customValue: any = null;
	get customValue(): any {
		return this._customValue;
	}
	set customValue(value: any) {
		this._customValue = value;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _parentItem: any = null;
	get parentItem(): any {
		return this._parentItem;
	}
	set parentItem(value: any) {
		this._parentItem = value;
	}
	private _position: Point = null;
	get position(): Point {
		return this._position;
	}
	set position(value: Point) {
		this._position = value;
	}
	private _isRightButton: boolean = false;
	get isRightButton(): boolean {
		return this._isRightButton;
	}
	set isRightButton(value: boolean) {
		this._isRightButton = value;
	}
	private _isHandled: boolean = false;
	get isHandled(): boolean {
		return this._isHandled;
	}
	set isHandled(value: boolean) {
		this._isHandled = value;
	}
	private _isOverHeader: boolean = false;
	get isOverHeader(): boolean {
		return this._isOverHeader;
	}
	set isOverHeader(value: boolean) {
		this._isOverHeader = value;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	private _parentValue: number = 0;
	get parentValue(): number {
		return this._parentValue;
	}
	set parentValue(value: number) {
		this._parentValue = value;
	}
	private _parentLabel: string = null;
	get parentLabel(): string {
		return this._parentLabel;
	}
	set parentLabel(value: string) {
		this._parentLabel = value;
	}
	private _parentSum: number = 0;
	get parentSum(): number {
		return this._parentSum;
	}
	set parentSum(value: number) {
		this._parentSum = value;
	}
}


