/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, runOn, Type, markType, PointUtil } from "igniteui-core/type";
import { INativeCell, INativeCell_$type } from "./INativeCell";
import { ICellActionManager } from "./ICellActionManager";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "igniteui-core/dom";
import { GridExpansionIndicator } from "./GridExpansionIndicator";
import { Brush } from "igniteui-core/Brush";
import { PlaceholderView } from "./PlaceholderView";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { Color } from "igniteui-core/Color";
import { CellModel } from "./CellModel";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { FontInfo } from "igniteui-core/FontInfo";
import { Random } from "igniteui-core/Random";
import { intDivide, truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class GridCellBase extends Base implements INativeCell {
	static $t: Type = markType(GridCellBase, 'GridCellBase', (<any>Base).$type, [INativeCell_$type]);
	private _actionManager: ICellActionManager = null;
	protected get actionManager(): ICellActionManager {
		return this._actionManager;
	}
	private _renderer: DomRenderer = null;
	get renderer(): DomRenderer {
		return this._renderer;
	}
	private _container: DomWrapper = null;
	get container(): DomWrapper {
		return this._container;
	}
	private _expansionIndicatorContainer: DomWrapper = null;
	private _expansionIndicator: GridExpansionIndicator = null;
	private _expansionIndicatorWidth: number = 0;
	private _expansionIndicatorHeight: number = 24;
	private _expansionIndicatorMarginRight: number = 0;
	private _expansionIndicatorMarginLeft: number = 0;
	protected get expansionIndicatorWidth(): number {
		return this._expansionIndicatorWidth;
	}
	protected get expansionIndicatorMarginLeft(): number {
		return this._expansionIndicatorMarginLeft;
	}
	protected get expansionIndicatorMarginRight(): number {
		return this._expansionIndicatorMarginRight;
	}
	protected static readonly indentPropertyName: string = "Indent";
	private _indent: number = 0;
	get indent(): number {
		return this._indent;
	}
	set indent(value: number) {
		let oldValue = this._indent;
		this._indent = value;
		if (oldValue != this._indent) {
			this.onPropertyChanged(GridCellBase.indentPropertyName, oldValue, this._indent);
		}
	}
	protected static readonly isCollapsablePropertyName: string = "IsCollapsable";
	private _isCollapsable: boolean = false;
	get isCollapsable(): boolean {
		return this._isCollapsable;
	}
	set isCollapsable(value: boolean) {
		let oldValue = this._isCollapsable;
		this._isCollapsable = value;
		if (oldValue != this._isCollapsable) {
			this.onPropertyChanged(GridCellBase.isCollapsablePropertyName, oldValue, this._isCollapsable);
		}
	}
	private static readonly isExpandedPropertyName: string = "IsExpanded";
	private _isExpanded: boolean = false;
	get isExpanded(): boolean {
		return this._isExpanded;
	}
	set isExpanded(value: boolean) {
		let oldValue = this._isExpanded;
		this._isExpanded = value;
		if (oldValue != this._isExpanded) {
			this.onPropertyChanged(GridCellBase.isExpandedPropertyName, oldValue, this._isExpanded);
		}
	}
	constructor(element: DomRenderer) {
		super();
		this._renderer = element;
		this._container = this._renderer.createElement("div");
		this._container.setRawStyleProperty("position", "absolute");
		this._container.setRawStyleProperty("overflow", "hidden");
		this._container.setRawStyleProperty("box-sizing", "border-box");
		let msPointerEnabled = <boolean>(window.navigator.msPointerEnabled && MSGesture !== undefined);
		let pointerEnabled = <boolean>((<any>window).PointerEvent || window.navigator.pointerEnabled);
		let touchEnabled = <boolean>((<any>window).TouchEvent);
		if ((msPointerEnabled || pointerEnabled)) {
			this._container.listen("pointerdown", runOn(this, this.pointerDown));
			this._container.listen("pointerup", runOn(this, this.pointerUp));
			this._container.listen("pointermove", runOn(this, this.pointerMove));
			this._container.listen("pointerleave", runOn(this, this.pointerLeave));
		} else {
			this._container.listen("mousedown", runOn(this, this.mouseDown));
			this._container.listen("mouseup", runOn(this, this.mouseUp));
			this._container.listen("mousemove", runOn(this, this.mouseMove));
			this._container.listen("mouseleave", runOn(this, this.mouseLeave));
			this._container.listen("touchstart", runOn(this, this.touchDown));
			this._container.listen("touchend", runOn(this, this.touchUp));
			this._container.listen("touchmove", runOn(this, this.touchMove));
		}
	}
	private initExpander(): void {
		this._expansionIndicatorMarginRight = 10;
		this._expansionIndicatorMarginLeft = this.indent * 24;
		this._expansionIndicatorWidth = 24;
		if (this._expansionIndicatorContainer == null) {
			this._expansionIndicatorContainer = this._renderer.createElement("div");
			this._expansionIndicatorContainer.setRawStyleProperty("display", "inline-block");
			this._expansionIndicatorContainer.setRawStyleProperty("vertical-align", "middle");
			this._expansionIndicatorContainer.setRawStyleProperty("width", this._expansionIndicatorWidth + "px");
			this._expansionIndicatorContainer.setRawStyleProperty("height", this._expansionIndicatorWidth + "px");
			this._expansionIndicatorContainer.setRawStyleProperty("cursor", "pointer");
			this._expansionIndicatorContainer.setRawStyleProperty("position", "absolute");
			this._expansionIndicatorContainer.setRawXPosition(this._paddingLeft + this._expansionIndicatorMarginLeft);
			this._expansionIndicatorContainer.setRawYPosition(intDivide(this._height, 2) - intDivide(this._expansionIndicatorHeight, 2));
		}
		if (this._expansionIndicator == null) {
			let subRenderer = this._renderer.getSubRenderer(this._expansionIndicatorContainer);
			this._expansionIndicator = new GridExpansionIndicator();
			this._expansionIndicator.provideContainer(subRenderer);
			this._expansionIndicator.notifySizeChanged(24, 24);
		}
		if (this._expansionIndicatorContainer.parent() == null) {
			this._container.append(this._expansionIndicatorContainer);
		}
	}
	removeExpander(): void {
		this._expansionIndicatorWidth = 0;
		this._expansionIndicatorMarginRight = 0;
		if (this._expansionIndicatorContainer != null) {
			if (this._expansionIndicatorContainer.parent() != null) {
				this._expansionIndicatorContainer.remove();
			}
		}
	}
	private _canRenderPlaceholderContent: boolean = false;
	get canRenderPlaceholderContent(): boolean {
		return this._canRenderPlaceholderContent;
	}
	set canRenderPlaceholderContent(value: boolean) {
		this._canRenderPlaceholderContent = value;
	}
	protected get_isPlaceholderSupported(): boolean {
		return false;
	}
	get isPlaceholderSupported(): boolean {
		return this.get_isPlaceholderSupported();
	}
	private _paddingLeft: number = 0;
	private _paddingTop: number = 0;
	private _paddingRight: number = 0;
	private _paddingBottom: number = 0;
	setPadding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): void {
		this._paddingLeft = paddingLeft;
		this._paddingTop = paddingTop;
		this._paddingRight = paddingRight;
		this._paddingBottom = paddingBottom;
		this._container.setRawStyleProperty("padding-left", paddingLeft.toString() + "px");
		this._container.setRawStyleProperty("padding-top", paddingTop.toString() + "px");
		this._container.setRawStyleProperty("padding-right", paddingRight.toString() + "px");
		this._container.setRawStyleProperty("padding-bottom", paddingBottom.toString() + "px");
	}
	private _borderLeft: number = 0;
	private _borderTop: number = 0;
	private _borderRight: number = 0;
	private _borderBottom: number = 0;
	private _borderColor: Brush = null;
	setBorder(border: Brush, borderLeft: number, borderTop: number, borderRight: number, borderBottom: number): void {
		this._borderLeft = borderLeft;
		this._borderTop = borderTop;
		this._borderRight = borderRight;
		this._borderBottom = borderBottom;
		this._borderColor = border;
		if (border == null) {
			this._container.setRawStyleProperty("border", "");
		} else {
			this._container.setRawStyleProperty("border-color", border._fill);
			this._container.setRawStyleProperty("border-left-width", borderLeft.toString() + "px");
			this._container.setRawStyleProperty("border-top-width", borderTop.toString() + "px");
			this._container.setRawStyleProperty("border-right-width", borderRight.toString() + "px");
			this._container.setRawStyleProperty("border-bottom-width", borderBottom.toString() + "px");
			this._container.setRawStyleProperty("border-style", "solid");
		}
	}
	protected get_isHeaderCell(): boolean {
		return false;
	}
	get isHeaderCell(): boolean {
		return this.get_isHeaderCell();
	}
	private _height: number = 0;
	private _width: number = 0;
	private _heightPadding: number = 0;
	setHeight(height: number, heightPadding: number): void {
		if (this._height != height || this._heightPadding != heightPadding) {
			this._height = height;
			this._heightPadding = heightPadding;
			let heightMinusPadding = Math.max(0, this._height - this._heightPadding);
			this._container.setRawStyleProperty("height", height.toString() + "px");
			this._container.setRawStyleProperty("line-height", heightMinusPadding.toString() + "px");
			if (this._expansionIndicatorContainer != null) {
				this._expansionIndicatorContainer.setRawYPosition(intDivide(this._height, 2) - intDivide(this._expansionIndicatorWidth, 2));
			}
		}
	}
	setWidth(width: number, widthPadding: number): void {
		if (this._width != width) {
			this._width = width;
			this._container.setRawStyleProperty("width", width.toString() + "px");
		}
	}
	createPlaceholderVisual(): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._canRenderPlaceholderContent = true;
		this._placeholder = new PlaceholderView(this._renderer);
		this._placeholderHorizontalAlignment = CellContentHorizontalAlignment.Left;
		this._placeholderVerticalAlignment = CellContentVerticalAlignment.Center;
		this._placeholder.color = Color.fromArgb(120, 120, 120, 120);
		this._placeholder.opacity = 0;
		this._container.append(this._placeholder.element);
	}
	setBackgroundColor(color: Color): void {
		this._container.setRawStyleProperty("background-color", color.colorString);
	}
	private _placeholder: PlaceholderView = null;
	private _placeholderHorizontalAlignment: CellContentHorizontalAlignment = <CellContentHorizontalAlignment>0;
	private _placeholderVerticalAlignment: CellContentVerticalAlignment = <CellContentVerticalAlignment>0;
	setOpacity(opacity: number): void {
		this._container.setRawStyleProperty("opacity", opacity.toString());
	}
	private _placeholderWidth: number = 0;
	private _placeholderHeight: number = 0;
	private static _rand: Random = new Random(0);
	updatePlaceholderVisualOpacity(opacity: number): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._placeholder.opacity = (<number>opacity * 0.20000000298023224);
	}
	updatePlaceholderPosition(left: number, top: number, width: number, height: number): void {
		if (this._placeholder != null) {
			let placeholderWidth: number = this._placeholderWidth;
			let placeholderHeight: number = this._placeholderHeight;
			if (this._placeholderVerticalAlignment == CellContentVerticalAlignment.Center) {
				top = <number>truncate((top + (height / 2) - (placeholderHeight / 2)));
			} else if (this._placeholderVerticalAlignment == CellContentVerticalAlignment.Bottom) {
				top = <number>truncate((top + (height) - (placeholderHeight)));
			}
			if (this._placeholderHorizontalAlignment == CellContentHorizontalAlignment.Center) {
				left = <number>truncate((left + (width / 2) - (placeholderWidth / 2)));
			} else if (this._placeholderHorizontalAlignment == CellContentHorizontalAlignment.Right) {
				left = <number>truncate((left + (width) - (placeholderWidth)));
			}
			this._placeholder.element.setRawXPosition(left);
			this._placeholder.element.setRawYPosition(top);
		}
	}
	onHorizontalAlignmentChange(container: DomWrapper, textView: DomWrapper, hAlignment: CellContentHorizontalAlignment): void {
	}
	updatePlaceholderSize(model: CellModel): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		let height: number = DeviceUtils.toFontPixelUnits(12);
		if (model.fontInfo != null && !isNaN_(model.fontInfo.fontSize)) {
			height = model.fontInfo.fontSize;
		}
		if (this._placeholderHeight != height) {
			this._placeholderHeight = height;
			this._placeholder.height = (height);
		}
		let minWidth: number = model.width * 0.2;
		let maxWidth: number = model.height * 0.6;
		if (this._placeholderWidth >= minWidth && this._placeholderWidth <= maxWidth && !this._placeholderPositionDirty) {
			return;
		}
		this._placeholderPositionDirty = false;
		let newWidth: number = (GridCellBase._rand.nextDouble() * (maxWidth - minWidth) + minWidth);
		if (this._placeholderWidth != newWidth) {
			this._placeholderWidth = newWidth;
			this._placeholder.width = newWidth;
		}
		this.updatePlaceholderPosition(this._paddingLeft + this._expansionIndicatorMarginLeft + this._expansionIndicatorWidth, this._paddingTop, this._width - (this._paddingLeft + this._paddingRight), this._height - (this._paddingTop + this._paddingBottom));
	}
	private _placeholderPositionDirty: boolean = false;
	updatePlaceholderAlignment(horizontalAlignment: CellContentHorizontalAlignment, verticalAlignment: CellContentVerticalAlignment): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._placeholderHorizontalAlignment = horizontalAlignment;
		this._placeholderVerticalAlignment = verticalAlignment;
		this._placeholderPositionDirty = true;
	}
	updatePlaceholderColor(foreground: Brush): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		if (foreground != null) {
			this._placeholder.color = foreground.color;
		}
	}
	setActionManager(actionManager: ICellActionManager): void {
		this._actionManager = actionManager;
	}
	private _downX: number = 0;
	private _downY: number = 0;
	private _activePointer: number = 0;
	private static _touchSlop: number = 10;
	private static _dragSlop: number = 3;
	protected setHorizontalAlignment(element: DomWrapper, alignment: CellContentHorizontalAlignment): void {
		switch (alignment) {
			case CellContentHorizontalAlignment.Left:
			this.container.setRawStyleProperty("text-align", "left");
			break;

			case CellContentHorizontalAlignment.Center:
			this.container.setRawStyleProperty("text-align", "center");
			break;

			case CellContentHorizontalAlignment.Right:
			this.container.setRawStyleProperty("text-align", "right");
			break;

			case CellContentHorizontalAlignment.Stretch:
			this.container.setRawStyleProperty("text-align", "center");
			break;

		}

	}
	protected setVerticalAlignment(element: DomWrapper, alignment: CellContentVerticalAlignment): void {
		switch (alignment) {
			case CellContentVerticalAlignment.Top:
			element.setRawStyleProperty("vertical-align", "top");
			break;

			case CellContentVerticalAlignment.Center:
			element.setRawStyleProperty("vertical-align", "center");
			break;

			case CellContentVerticalAlignment.Bottom:
			element.setRawStyleProperty("vertical-align", "bottom");
			break;

			case CellContentVerticalAlignment.Stretch:
			element.setRawStyleProperty("vertical-align", "center");
			break;

		}

	}
	protected shouldEmitClick(manager: ICellActionManager): boolean {
		return manager.isClickActionDesired;
	}
	private mouseDown(e: NormalizedEvent): void {
		this.onContactStarted(e, false);
	}
	private mouseUp(e: NormalizedEvent): void {
		this.onContactCompleted(e, false);
	}
	private mouseMove(e: NormalizedEvent): void {
		this.onContactMoved(e, false);
	}
	private mouseLeave(e: NormalizedEvent): void {
		this.onContactLeave(e, false);
	}
	private pointerDown(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType == "touch") {
			this.touchDown(e_);
		} else {
			this.mouseDown(e_);
		}
	}
	private pointerMove(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType == "touch") {
			this.touchMove(e_);
		} else {
			this.mouseMove(e_);
		}
	}
	private pointerUp(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType == "touch") {
			this.touchUp(e_);
		} else {
			this.mouseUp(e_);
		}
	}
	private pointerLeave(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType != "touch") {
			this.mouseLeave(e_);
		}
	}
	private touchDown(e: NormalizedEvent): void {
		this.onContactStarted(e, true);
	}
	private touchMove(e: NormalizedEvent): void {
		this.onContactMoved(e, true);
	}
	private touchUp(e: NormalizedEvent): void {
		this.onContactCompleted(e, true);
	}
	onContactStarted(e_: NormalizedEvent, isFinger: boolean): void {
		let isIndicator = false;
		if (this.isCollapsable) {
			let indicator_ = this._expansionIndicator.getCanvas();
			isIndicator = <boolean>(e_.originalEvent.srcElement === indicator_ || e_.originalEvent.target === indicator_);
		}
		this._indicatorDown = false;
		if (isIndicator) {
			this._indicatorDown = true;
		} else {
			if (this._actionManager != null && this.shouldEmitClick(this._actionManager)) {
				this._downX = e_.pageX;
				this._downY = e_.pageY;
				this._actionManager.mouseDownCell(this._downX, this._downY);
			}
		}
	}
	onContactMoved(e: NormalizedEvent, isFinger: boolean): void {
		if (this._actionManager != null) {
			let x: number = e.pageX;
			let y: number = e.pageY;
			if (this.shouldEmitClick(this._actionManager)) {
				if (this._actionManager.isMouseDown) {
					if (isFinger) {
						if (PointUtil.equals(this._actionManager.mousePosition, null) || Math.abs(x - this._actionManager.mousePosition.x) > GridCellBase._touchSlop || Math.abs(y - this._actionManager.mousePosition.y) > GridCellBase._touchSlop) {
							this._actionManager.mouseUpCell(x, y);
						} else {
							e.stopPropagation();
						}
					} else {
						if (PointUtil.equals(this._actionManager.mousePosition, null)) {
							this._actionManager.mouseUpCell(x, y);
						} else {
							if (Math.abs(x - this._actionManager.mousePosition.x) > GridCellBase._dragSlop || Math.abs(y - this._actionManager.mousePosition.y) > GridCellBase._dragSlop) {
								this._actionManager.isControlPressed = e.ctrlKey;
								this._actionManager.dragStarted();
							}
						}
					}
				}
			}
			if (this._actionManager.isHoverActionDesired) {
				this._actionManager.mouseIsOver(x, y);
			}
		}
	}
	onContactCompleted(e_: NormalizedEvent, isFinger: boolean): void {
		let isIndicator = false;
		if (this.isCollapsable) {
			let indicator_ = this._expansionIndicator.getCanvas();
			isIndicator = <boolean>(e_.originalEvent.srcElement === indicator_ || e_.originalEvent.target === indicator_);
		}
		if (this._indicatorDown && isIndicator) {
			this.actionManager.clickExpansionIndicator();
		} else {
			if (this._actionManager != null && this.shouldEmitClick(this._actionManager)) {
				let x: number = e_.pageX;
				let y: number = e_.pageY;
				if (PointUtil.equals(this._actionManager.mousePosition, null) || Math.abs(x - this._actionManager.mousePosition.x) > GridCellBase._touchSlop || Math.abs(y - this._actionManager.mousePosition.y) > GridCellBase._touchSlop || this._actionManager.isDrag) {
					this._actionManager.mouseUpCell(x, y);
				}
				if (this._actionManager.isCellDown()) {
					this._actionManager.isControlPressed = e_.ctrlKey;
					this._actionManager.isShiftPressed = e_.shiftKey;
					this._actionManager.clickCell();
					this._actionManager.mouseUpCell(e_.pageX, e_.pageY);
				}
			}
		}
		this._indicatorDown = false;
	}
	onContactLeave(e: NormalizedEvent, isFinger: boolean): void {
		if (this._actionManager != null && this._actionManager.isLeaveActionDesired) {
			let x: number = e.pageX;
			let y: number = e.pageY;
			this._actionManager.mouseLeaveCell(x, y);
		}
	}
	private _indicatorDown: boolean = false;
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GridCellBase.indentPropertyName:
			this._expansionIndicatorMarginLeft = this.indent * 24;
			this._expansionIndicatorMarginRight = this.indent > 0 ? 10 : 0;
			if (this._expansionIndicatorContainer != null) {
				this._expansionIndicatorContainer.setRawXPosition(this._paddingLeft + this._expansionIndicatorMarginLeft);
				this._expansionIndicatorContainer.setRawYPosition(intDivide(this._height, 2) - intDivide(this._expansionIndicatorHeight, 2));
			}
			break;

			case GridCellBase.isCollapsablePropertyName:
			if (this.isCollapsable) {
				this.initExpander();
			} else {
				this.removeExpander();
			}
			break;

			case GridCellBase.isExpandedPropertyName:
			if (this._expansionIndicator != null) {
				this._expansionIndicator.isExpanded = this.isExpanded;
			}
			break;

		}

	}
}


