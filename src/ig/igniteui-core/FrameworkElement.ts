/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElement } from "./UIElement";
import { Visibility } from "./Visibility";
import { Base, Type, markType } from "./type";
import { Style } from "./Style";

/**
 * @hidden 
 */
export class FrameworkElement extends UIElement {
	static $t: Type = markType(FrameworkElement, 'FrameworkElement', (<any>UIElement).$type);
	constructor() {
		super();
		this._opacity = 1;
		this.canvasZIndex = 0;
		this._visibility = Visibility.Visible;
		this.width = NaN;
		this.height = NaN;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _actualWidth: number = 0;
	get actualWidth(): number {
		return this._actualWidth;
	}
	set actualWidth(value: number) {
		this._actualWidth = value;
	}
	private _actualHeight: number = 0;
	get actualHeight(): number {
		return this._actualHeight;
	}
	set actualHeight(value: number) {
		this._actualHeight = value;
	}
	_visibility: Visibility = <Visibility>0;
	get visibility(): Visibility {
		return this._visibility;
	}
	set visibility(value: Visibility) {
		if (this._visibility != value) {
			let oldValue: Visibility = this._visibility;
			this._visibility = value;
			this.onVisibilityChanged(oldValue, this._visibility);
		}
	}
	protected onVisibilityChanged(oldValue: Visibility, newValue: Visibility): void {
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
	private _canvasTop: number = 0;
	get canvasTop(): number {
		return this._canvasTop;
	}
	set canvasTop(value: number) {
		this._canvasTop = value;
	}
	private _canvasLeft: number = 0;
	get canvasLeft(): number {
		return this._canvasLeft;
	}
	set canvasLeft(value: number) {
		this._canvasLeft = value;
	}
	private _canvasZIndex: number = 0;
	get canvasZIndex(): number {
		return this._canvasZIndex;
	}
	set canvasZIndex(value: number) {
		this._canvasZIndex = value;
	}
	private _parent: FrameworkElement = null;
	get parent(): FrameworkElement {
		return this._parent;
	}
	set parent(value: FrameworkElement) {
		this._parent = value;
	}
	private _dataContext: any = null;
	get dataContext(): any {
		return this._dataContext;
	}
	set dataContext(value: any) {
		this._dataContext = value;
	}
	_opacity: number = 1;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		if (this._opacity != value) {
			this._opacity = value;
			this.onOpacityChanged();
		}
	}
	protected onOpacityChanged(): void {
	}
	private _style: Style = null;
	get style(): Style {
		return this._style;
	}
	set style(value: Style) {
		this._style = value;
	}
}


