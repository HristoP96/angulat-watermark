/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Point, Type, markType } from "igniteui-core/type";
import { IDragger, IDragger_$type } from "./IDragger";
import { IDraggerView } from "./IDraggerView";
import { DraggerView } from "./DraggerView";
import { DragType } from "./DragType";
import { CellPath } from "./CellPath";
import { DragSelectEventArgs } from "./DragSelectEventArgs";

/**
 * @hidden 
 */
export class Dragger extends Base implements IDragger, INotifyPropertyChanged {
	static $t: Type = markType(Dragger, 'Dragger', (<any>Base).$type, [IDragger_$type, INotifyPropertyChanged_$type]);
	private _start: Point = null;
	private _controlPressed: boolean = false;
	private _view: IDraggerView = null;
	get view(): IDraggerView {
		if (this._view == null) {
			this._view = new DraggerView(this);
		}
		return this._view;
	}
	private _dragType: DragType = DragType.None;
	get dragType(): DragType {
		return this._dragType;
	}
	private _isDrag: boolean = false;
	get isDragActive(): boolean {
		return this._isDrag;
	}
	private _cellPath: CellPath = null;
	get cellPath(): CellPath {
		return this._cellPath;
	}
	static readonly viewportWidthPropertyName: string = "ViewportWidth";
	private _viewportWidth: number = 0;
	get viewportWidth(): number {
		return this._viewportWidth;
	}
	set viewportWidth(value: number) {
		let oldValue = this._viewportWidth;
		this._viewportWidth = value;
		if (oldValue != this._viewportWidth) {
			this.onPropertyUpdated(Dragger.viewportWidthPropertyName, oldValue, this._viewportWidth);
		}
	}
	static readonly viewportHeightPropertyName: string = "ViewportHeight";
	private _viewportHeight: number = 0;
	get viewportHeight(): number {
		return this._viewportHeight;
	}
	set viewportHeight(value: number) {
		let oldValue = this._viewportHeight;
		this._viewportHeight = value;
		if (oldValue != this._viewportHeight) {
			this.onPropertyUpdated(Dragger.viewportHeightPropertyName, oldValue, this._viewportHeight);
		}
	}
	onDrag: (sender: any, args: DragSelectEventArgs) => void = null;
	onDragEnd: (sender: any, args: DragSelectEventArgs) => void = null;
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	provideContainer(container: any): void {
		this.view.provideContainer(container);
	}
	onMouseMove(x: number, y: number): void {
		if (this._isDrag) {
			if (this.onDrag != null) {
				this.onDrag(this, ((() => {
					let $ret = new DragSelectEventArgs();
					$ret.startX = this._start.x;
					$ret.startY = this._start.y;
					$ret.currentX = x;
					$ret.currentY = y;
					$ret.controlPressed = this._controlPressed;
					return $ret;
				})()));
			}
		}
	}
	onMouseUp(x: number, y: number): void {
		if (this._isDrag) {
			this.view.releaseMouse();
			this._isDrag = false;
			if (this.onDragEnd != null) {
				this.onDragEnd(this, new DragSelectEventArgs());
			}
			this._dragType = DragType.None;
		}
	}
	dragStart(x: number, y: number, offsetX: number, offsetY: number, dragType: DragType, cellPath: CellPath, isControlPressed: boolean): void {
		if (!this._isDrag) {
			this._start = this.view.transformPoint(x + offsetX, y + offsetY);
			this._isDrag = true;
			this._controlPressed = isControlPressed;
			this._dragType = dragType;
			this._cellPath = cellPath;
			this.view.captureMouse();
		}
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Dragger.viewportWidthPropertyName:

			case Dragger.viewportHeightPropertyName:
			this.view.onViewportSizeChanged(this._viewportWidth, this._viewportHeight);
			break;

		}

	}
}


