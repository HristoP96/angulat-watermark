/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType, PointUtil } from "igniteui-core/type";
import { INativeCell, INativeCell_$type } from "./INativeCell";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { Brush } from "igniteui-core/Brush";
import { Rectangle } from "igniteui-core/Rectangle";
import { Line } from "igniteui-core/Line";
import { TextBlock } from "igniteui-core/TextBlock";
import { Color } from "igniteui-core/Color";
import { FontInfo } from "igniteui-core/FontInfo";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { CanvasPlaceholderView } from "./CanvasPlaceholderView";
import { CellModel } from "./CellModel";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { Random } from "igniteui-core/Random";
import { ICellActionManager } from "./ICellActionManager";
import { FontUtil } from "igniteui-core/FontUtil";
import { truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CanvasGridCellBase extends Base implements INativeCell {
	static $t: Type = markType(CanvasGridCellBase, 'CanvasGridCellBase', (<any>Base).$type, [INativeCell_$type]);
	private _actionManager: ICellActionManager = null;
	private _isTextLayoutDirty: boolean = true;
	private _isDirty: boolean = true;
	protected get isDirty(): boolean {
		return this._isDirty;
	}
	protected set isDirty(value: boolean) {
		this._isDirty = value;
	}
	setRefreshHandler(dirtyHandler: () => void): void {
		this._dirtyHandler = dirtyHandler;
	}
	private _dirtyHandler: () => void = null;
	protected queueRefresh(): void {
		this._isDirty = true;
		if (this._dirtyHandler != null) {
			this._dirtyHandler();
		}
	}
	get isCanvasBased(): boolean {
		return true;
	}
	private _renderer: DomRenderer = null;
	get renderer(): DomRenderer {
		return this._renderer;
	}
	private _desiredText: string = null;
	setText(text: string): void {
		this._desiredText = text;
		this._isDirty = true;
		this._isTextLayoutDirty = true;
	}
	constructor(renderer: DomRenderer) {
		super();
		this._renderer = renderer;
	}
	get templateContext(): any {
		return this._cacheContext.getUnderlyingContext();
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
	setBorder(border: Brush, borderLeft: number, borderTop: number, borderRight: number, borderBottom: number): void {
		this._isDirty = true;
		this._borderBrush = border;
		this._borderLeft = borderLeft;
		this._borderTop = borderTop;
		this._borderRight = borderRight;
		this._borderBottom = borderBottom;
		this._isTextLayoutDirty = true;
	}
	private _contentOpacity: number = 1;
	setContentOpacity(opacity: number): void {
		this._isDirty = true;
		this._contentOpacity = opacity;
		this._text._opacity = this._contentOpacity;
	}
	private _paddingLeft: number = 5;
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	private _paddingTop: number = 5;
	get paddingTop(): number {
		return this._paddingTop;
	}
	private _paddingRight: number = 5;
	get paddingRight(): number {
		return this._paddingRight;
	}
	private _paddingBottom: number = 5;
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	private _borderBrush: Brush = null;
	private _borderLeft: number = 0;
	get borderLeft(): number {
		return this._borderLeft;
	}
	private _borderTop: number = 0;
	get borderTop(): number {
		return this._borderTop;
	}
	private _borderRight: number = 0;
	get borderRight(): number {
		return this._borderRight;
	}
	private _borderBottom: number = 0;
	get borderBottom(): number {
		return this._borderBottom;
	}
	private _background: Rectangle = new Rectangle();
	private _leftBorder: Line = new Line();
	private _topBorder: Line = new Line();
	private _rightBorder: Line = new Line();
	private _bottomBorder: Line = new Line();
	private _textLeft: number = 0;
	protected get textLeft(): number {
		return this._textLeft;
	}
	private _textRight: number = 0;
	protected get textRight(): number {
		return this._textRight;
	}
	private _textTop: number = 0;
	private _textYCenter: number = 0;
	protected get textYCenter(): number {
		return this._textYCenter;
	}
	private _cache: DomWrapper = null;
	private _cacheContext: RenderingContext = null;
	private _cacheDesiredWidth: number = 0;
	private _cacheDesiredHeight: number = 0;
	private _cacheWidth: number = 0;
	private _cacheHeight: number = 0;
	protected get_isTemplate(): boolean {
		return false;
	}
	protected get isTemplate(): boolean {
		return this.get_isTemplate();
	}
	draw(context: RenderingContext, rendererLeft: number, rendererTop: number, modelLeft: number, modelTop: number, pixelScalingRatio: number): void {
		let renderBackground: boolean = true;
		let renderContent: boolean = true;
		let subRender: boolean = false;
		if (this.isTemplate) {
			renderBackground = false;
			renderContent = false;
			subRender = false;
		}
		this.drawCore(context, rendererLeft, rendererTop, modelLeft, modelTop, pixelScalingRatio, renderBackground, renderContent, subRender);
	}
	get resized(): boolean {
		return this._resized;
	}
	private _resized: boolean = true;
	ensureCorrectSize(): boolean {
		this._resized = this.ensureCacheSize(this._pixelScalingRatio);
		return this._resized;
	}
	protected drawCore(context: RenderingContext, rendererLeft: number, rendererTop: number, modelLeft: number, modelTop: number, pixelScalingRatio: number, renderBackground: boolean, renderContent: boolean, subRender: boolean): void {
		if (!this._isVisible) {
			return;
		}
		if (this._opacity != 1) {
			context.setOpacity(this._opacity);
		}
		this._pixelScalingRatio = pixelScalingRatio;
		if (!subRender) {
			this.ensureCacheCreated();
			this.ensureCorrectSize();
		}
		if (this.isDirty || this._resized || subRender) {
			this.isDirty = false;
			let cacheContext = this._cacheContext;
			if (this._isFontDirty || this._resized || (this._font != null && this._font.versionNumber != this._fontVersion)) {
				this._isFontDirty = false;
				this._fontVersion = this._font.versionNumber;
				cacheContext.setFontInfo(this._font);
			}
			if (pixelScalingRatio != 1) {
				this._cacheContext.save();
				this._cacheContext.scale(pixelScalingRatio, pixelScalingRatio);
			}
			if (renderBackground) {
				this.renderBackground();
			}
			if (renderContent) {
				this.renderContent(this._cacheContext);
			}
			if (pixelScalingRatio != 1) {
				this._cacheContext.restore();
			}
		}
		if (!subRender) {
			let canvasLeft = Math.round((modelLeft - rendererLeft) * pixelScalingRatio);
			let canvasTop = Math.round((modelTop - rendererTop) * pixelScalingRatio);
			if (this._cacheDesiredWidth == this._cacheWidth && this._cacheDesiredHeight == this._cacheHeight) {
				context.drawImage(this._cache.getNativeElement(), 1, canvasLeft, canvasTop, this._cacheDesiredWidth, this._cacheDesiredHeight);
			} else {
				context.drawImage1(this._cache.getNativeElement(), 1, 0, 0, this._cacheDesiredWidth, this._cacheDesiredHeight, canvasLeft, canvasTop, this._cacheDesiredWidth, this._cacheDesiredHeight);
			}
		}
		if (this._opacity != 1) {
			context.setOpacity(1);
		}
	}
	renderBackground(): void {
		if (!this._isBackgroundOpaque) {
			this._cacheContext.clearRectangle(0, 0, this._cacheWidth, this._cacheHeight);
		}
		this._background.canvasLeft = 0;
		this._background.canvasTop = 0;
		this._background.width = this._width;
		this._background.height = this._height;
		this._cacheContext.renderRectangle(this._background);
		if (this._borderBrush != null) {
			if (this._borderLeft > 0) {
				this._leftBorder.y1 = 0;
				this._leftBorder.x1 = this._borderLeft / 2;
				this._leftBorder.y2 = this._height;
				this._leftBorder.x2 = this._borderLeft / 2;
				this._leftBorder._stroke = this._borderBrush;
				this._leftBorder.strokeThickness = this._borderLeft;
				this._cacheContext.renderLine(this._leftBorder);
			}
			if (this._borderRight > 0) {
				this._rightBorder.y1 = 0;
				this._rightBorder.x1 = Math.max(0, (this._width - (this._borderRight / 2)));
				this._rightBorder.y2 = this._height;
				this._rightBorder.x2 = Math.max(0, (this._width - (this._borderRight / 2)));
				this._rightBorder._stroke = this._borderBrush;
				this._rightBorder.strokeThickness = this._borderRight;
				this._cacheContext.renderLine(this._rightBorder);
			}
			if (this._borderTop > 0) {
				this._topBorder.y1 = this._borderTop / 2;
				this._topBorder.x1 = this._borderLeft;
				this._topBorder.y2 = this._borderTop / 2;
				this._topBorder.x2 = Math.max(0, (this._width - (this._borderRight / 2)));
				this._topBorder._stroke = this._borderBrush;
				this._topBorder.strokeThickness = this._borderTop;
				this._cacheContext.renderLine(this._topBorder);
			}
			if (this._borderBottom > 0) {
				this._bottomBorder.y1 = Math.max(0, this._height - (this._borderBottom / 2));
				this._bottomBorder.x1 = this._borderLeft;
				this._bottomBorder.y2 = Math.max(0, this._height - (this._borderBottom / 2));
				this._bottomBorder.x2 = Math.max(0, (this._width - (this._borderRight / 2)));
				this._bottomBorder._stroke = this._borderBrush;
				this._bottomBorder.strokeThickness = this._borderBottom;
				this._cacheContext.renderLine(this._bottomBorder);
			}
		}
	}
	setPixelScalingRatio(pixelScalingRatio: number): void {
		this._pixelScalingRatio = pixelScalingRatio;
	}
	renderStandardContent(): void {
		this.drawCore(this._cacheContext, 0, 0, 0, 0, this._pixelScalingRatio, false, true, true);
	}
	renderStandardBackground(): void {
		this.drawCore(this._cacheContext, 0, 0, 0, 0, this._pixelScalingRatio, true, false, true);
	}
	protected renderContent(context: RenderingContext): void {
		if (this._isTextLayoutDirty) {
			this.updateTextLayout();
			this._isTextLayoutDirty = false;
		}
		if (this._text.text != null) {
			this._text.canvasLeft = this._textLeft;
			this._text.canvasTop = this._textTop;
			this._cacheContext.renderTextBlock(this._text);
		}
	}
	protected ensureCacheCreated(): void {
		if (this._cache == null) {
			this._cache = this._renderer.createElement("canvas");
			let ctx = this._renderer.get2DCanvasContext(this._cache);
			let canvasRenderer = ((() => {
				let $ret = new CanvasViewRenderer();
				$ret.data = ctx;
				return $ret;
			})());
			this._cacheContext = new RenderingContext(canvasRenderer, ctx);
			this._isTextLayoutDirty = true;
		}
	}
	private ensureCacheSize(pixelScalingRatio: number): boolean {
		let desiredWidth = Math.round(this._width * pixelScalingRatio);
		let desiredHeight = Math.round(this._height * pixelScalingRatio);
		this._cacheDesiredWidth = desiredWidth;
		this._cacheDesiredHeight = desiredHeight;
		let actualWidth = this.snap(desiredWidth);
		let actualHeight = this.snap(desiredHeight);
		if (actualWidth != this._cacheWidth || actualHeight != this._cacheHeight) {
			this._cache.setAttribute("width", actualWidth + "px");
			this._cache.setAttribute("height", actualHeight + "px");
			this._cacheWidth = actualWidth;
			this._cacheHeight = actualHeight;
			this._cacheDesiredWidth = desiredWidth;
			this._cacheDesiredHeight = desiredHeight;
			return true;
		}
		return false;
	}
	private snap(dim: number): number {
		return dim;
	}
	setPadding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): void {
		this._isDirty = true;
		this._paddingLeft = paddingLeft;
		this._paddingTop = paddingTop;
		this._paddingRight = paddingRight;
		this._paddingBottom = paddingBottom;
		this._isTextLayoutDirty = true;
	}
	private _textMaxWidth: number = NaN;
	get textMaxWidth(): number {
		return this._textMaxWidth;
	}
	set textMaxWidth(value: number) {
		this._textMaxWidth = value;
	}
	private _text: TextBlock = new TextBlock();
	private _textColor: Color = Color.fromArgb(255, 0, 0, 0);
	setTextColor(color: Color): void {
		this._isDirty = true;
		this._textColor = color;
		this._text.fill = ((() => {
			let $ret = new Brush();
			$ret.color = this._textColor;
			return $ret;
		})());
	}
	protected get_isHeaderCell(): boolean {
		return false;
	}
	get isHeaderCell(): boolean {
		return this.get_isHeaderCell();
	}
	private _isVisible: boolean = true;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isDirty = true;
		this._isVisible = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	setHeight(height: number): void {
		this._isDirty = true;
		this._height = height;
		this._background.height = this._height;
	}
	setWidth(width: number): void {
		this._isDirty = true;
		this._width = width;
		this._background.width = this._width;
		this._isTextLayoutDirty = true;
	}
	createPlaceholderVisual(): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._canRenderPlaceholderContent = true;
		this._placeholder = new CanvasPlaceholderView();
		this._placeholderHorizontalAlignment = CellContentHorizontalAlignment.Left;
		this._placeholderVerticalAlignment = CellContentVerticalAlignment.Center;
		this._placeholder.color = Color.fromArgb(120, 120, 120, 120);
		this._placeholder.opacity = 0;
	}
	private _backgroundColor: Color = Color.fromArgb(255, 255, 255, 255);
	private _isBackgroundOpaque: boolean = false;
	setBackgroundColor(color: Color): void {
		this._isDirty = true;
		this._backgroundColor = color;
		this._isBackgroundOpaque = this._backgroundColor.a == 255;
		this._background._fill = ((() => {
			let $ret = new Brush();
			$ret.color = this._backgroundColor;
			return $ret;
		})());
	}
	private _placeholder: CanvasPlaceholderView = null;
	private _placeholderHorizontalAlignment: CellContentHorizontalAlignment = <CellContentHorizontalAlignment>0;
	private _placeholderVerticalAlignment: CellContentVerticalAlignment = <CellContentVerticalAlignment>0;
	private _opacity: number = 1;
	setOpacity(opacity: number): void {
		this._isDirty = true;
		this._opacity = opacity;
	}
	private _placeholderWidth: number = 0;
	private _placeholderHeight: number = 0;
	private static _rand: Random = new Random(0);
	updatePlaceholderVisualOpacity(opacity: number): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._isDirty = true;
		this._placeholder.opacity = (<number>opacity * 0.20000000298023224);
	}
	measurePlaceholder(left: number, top: number, width: number, height: number): void {
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
		}
	}
	private _font: FontInfo = ((() => {
		let $ret = new FontInfo();
		$ret.fontFamily = "Verdana";
		$ret.fontSize = 12;
		return $ret;
	})());
	private _isFontDirty: boolean = true;
	private _fontVersion: number = -1;
	setFont(font: FontInfo): void {
		this._font = font;
		this._isFontDirty = true;
		this._isDirty = true;
		this._isTextLayoutDirty = true;
	}
	updatePlaceholderSize(model: CellModel): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._isDirty = true;
		let height: number = DeviceUtils.toFontPixelUnits(12);
		if (model.fontInfo != null && !isNaN_(model.fontInfo.fontSize)) {
			height = model.fontInfo.fontSize;
		}
		if (this._placeholderHeight != height) {
			this._placeholderHeight = height;
		}
		let minWidth: number = model.width * 0.2;
		let maxWidth: number = model.height * 0.6;
		if (this._placeholderWidth >= minWidth && this._placeholderWidth <= maxWidth) {
			return;
		}
		let newWidth: number = (CanvasGridCellBase._rand.nextDouble() * (maxWidth - minWidth) + minWidth);
		if (this._placeholderWidth != newWidth) {
			this._placeholderWidth = newWidth;
		}
	}
	updatePlaceholderAlignment(horizontalAlignment: CellContentHorizontalAlignment, verticalAlignment: CellContentVerticalAlignment): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._isDirty = true;
		this._placeholderHorizontalAlignment = horizontalAlignment;
		this._placeholderVerticalAlignment = verticalAlignment;
	}
	updatePlaceholderColor(foreground: Brush): void {
		if (!this.isPlaceholderSupported) {
			return;
		}
		this._isDirty = true;
	}
	setActionManager(actionManager: ICellActionManager): void {
		this._actionManager = actionManager;
	}
	private _downX: number = 0;
	private _downY: number = 0;
	private _isClick: boolean = false;
	private _activePointer: number = 0;
	private static _touchSlop: number = 10;
	private _horizontalAlignment: CellContentHorizontalAlignment = CellContentHorizontalAlignment.Left;
	protected get horizontalAlignment(): CellContentHorizontalAlignment {
		return this._horizontalAlignment;
	}
	setHorizontalAlignment(alignment: CellContentHorizontalAlignment): void {
		this._horizontalAlignment = alignment;
		this._isDirty = true;
		this._isTextLayoutDirty = true;
	}
	private _currentFontHeight: number = NaN;
	private _currentFontHeightFontInfo: FontInfo = null;
	private _currentFontHeightVersion: number = -1;
	private updateTextLayout(): void {
		if (this._desiredText == null) {
			return;
		}
		if (this._cacheContext == null) {
			return;
		}
		if (this._isFontDirty || (this._font != null && this._font.versionNumber != this._fontVersion)) {
			this._isFontDirty = false;
			this._fontVersion = this._font.versionNumber;
			this._cacheContext.setFontInfo(this._font);
		}
		let textHeight: number;
		if (this._currentFontHeightFontInfo != this._font || this._currentFontHeightVersion != this._font.versionNumber) {
			this._currentFontHeightFontInfo = this._font;
			this._currentFontHeightVersion = this._font.versionNumber;
			this._currentFontHeight = FontUtil.getCurrentFontHeight(this._renderer, this._font);
		}
		textHeight = this._currentFontHeight;
		let left: number = 0;
		let top: number = 0;
		let innerWidth: number = this._width;
		let innerHeight: number = this._height;
		innerWidth -= (this._borderLeft + this._paddingLeft + this._borderRight + this._paddingRight);
		innerHeight -= (this._borderTop + this._paddingTop + this._borderBottom + this._paddingBottom);
		innerWidth = Math.max(innerWidth, 0);
		innerHeight = Math.max(innerHeight, 0);
		let availableWidth = innerWidth;
		if (!isNaN_(this._textMaxWidth) && this._textMaxWidth < innerWidth) {
			availableWidth = this._textMaxWidth;
		}
		let textWidth = this.trimTextBlock(this._text, this._desiredText, availableWidth, this._cacheContext);
		switch (this._horizontalAlignment) {
			case CellContentHorizontalAlignment.Left:
			left = this._paddingLeft + this._borderLeft;
			break;

			case CellContentHorizontalAlignment.Stretch:

			case CellContentHorizontalAlignment.Center:
			left = this._paddingLeft + this._borderLeft + ((innerWidth / 2) - (textWidth / 2));
			break;

			case CellContentHorizontalAlignment.Right:
			left = Math.max(0, (this._width - (this._paddingRight + this._borderRight))) - textWidth;
			break;

		}

		switch (this._verticalAlignment) {
			case CellContentVerticalAlignment.Top:
			top = this._paddingTop + this._borderTop;
			break;

			case CellContentVerticalAlignment.Stretch:

			case CellContentVerticalAlignment.Center:
			top = this._paddingTop + this._borderTop + ((innerHeight / 2) - (textHeight / 2));
			break;

			case CellContentVerticalAlignment.Bottom:
			top = Math.max(0, (this._height - (this._paddingBottom + this._borderBottom))) - textHeight;
			break;

		}

		this._textLeft = left;
		this._textRight = this._textLeft + textWidth;
		this._textTop = top;
		this._textYCenter = this._textTop + (textHeight / 2);
		this._isDirty = true;
	}
	private _collapsingWidth: number = NaN;
	protected trimTextBlock(text: TextBlock, desiredText: string, availableWidth: number, context: RenderingContext): number {
		let originalText: string = desiredText;
		let length: number = originalText.length;
		let collapsingChar: string = <string>("\u2026");
		if (isNaN_(this._collapsingWidth)) {
			this._collapsingWidth = context.measureTextWidth(collapsingChar);
		}
		if (availableWidth <= this._collapsingWidth) {
			text.text = collapsingChar;
			return this._collapsingWidth;
		}
		let desiredWidth: number = context.measureTextWidth(originalText);
		if (desiredWidth <= availableWidth) {
			text.text = desiredText;
			return desiredWidth;
		}
		let p = availableWidth / desiredWidth;
		let tryLength = <number>truncate(Math.ceil(length * p));
		let tryText = originalText.substr(0, tryLength) + collapsingChar;
		let tryDesired = context.measureTextWidth(tryText);
		if (tryDesired > availableWidth) {
			length = tryLength;
		} else {
			tryLength = tryLength + 1;
			tryText = originalText.substr(0, tryLength) + collapsingChar;
			tryDesired = context.measureTextWidth(tryText);
			if (tryDesired > availableWidth) {
				length = tryLength;
			}
		}
		while (desiredWidth > availableWidth && length > 0) {
			length--;
			originalText = originalText.substr(0, length) + collapsingChar;
			desiredWidth = context.measureTextWidth(originalText);
		}
		text.text = originalText;
		return desiredWidth;
	}
	private _verticalAlignment: CellContentVerticalAlignment = CellContentVerticalAlignment.Center;
	setVerticalAlignment(alignment: CellContentVerticalAlignment): void {
		this._verticalAlignment = alignment;
		this._isDirty = true;
		this._isTextLayoutDirty = true;
	}
	protected shouldEmitClick(manager: ICellActionManager): boolean {
		return manager.isClickActionDesired;
	}
	private static _dragSlop: number = 3;
	private _pixelScalingRatio: number = 1;
	onContactStarted(e: NormalizedEvent, isFinger: boolean): void {
		if (this._actionManager != null && this.shouldEmitClick(this._actionManager)) {
			this._downX = e.pageX;
			this._downY = e.pageY;
			this._actionManager.mouseDownCell(this._downX, this._downY);
		}
	}
	onContactMoved(e: NormalizedEvent, isFinger: boolean): void {
		if (this._actionManager != null && this.shouldEmitClick(this._actionManager)) {
			let x: number = e.pageX;
			let y: number = e.pageY;
			if (this._actionManager.isMouseDown) {
				if (isFinger) {
					if (PointUtil.equals(this._actionManager.mousePosition, null) || Math.abs(x - this._actionManager.mousePosition.x) > CanvasGridCellBase._touchSlop || Math.abs(y - this._actionManager.mousePosition.y) > CanvasGridCellBase._touchSlop) {
						this._actionManager.mouseUpCell(x, y);
					} else {
						e.stopPropagation();
					}
				} else {
					if (PointUtil.equals(this._actionManager.mousePosition, null)) {
						this._actionManager.mouseUpCell(x, y);
					} else {
						if (Math.abs(x - this._actionManager.mousePosition.x) > CanvasGridCellBase._dragSlop || Math.abs(y - this._actionManager.mousePosition.y) > CanvasGridCellBase._dragSlop) {
							this._actionManager.isControlPressed = e.ctrlKey;
							this._actionManager.dragStarted();
						}
					}
				}
			}
		}
	}
	onContactCompleted(e: NormalizedEvent, isFinger: boolean): void {
		if (this._actionManager != null && this.shouldEmitClick(this._actionManager)) {
			let x: number = e.pageX;
			let y: number = e.pageY;
			if (PointUtil.equals(this._actionManager.mousePosition, null) || Math.abs(x - this._actionManager.mousePosition.x) > CanvasGridCellBase._touchSlop || Math.abs(y - this._actionManager.mousePosition.y) > CanvasGridCellBase._touchSlop || this._actionManager.isDrag) {
				this._actionManager.mouseUpCell(x, y);
			}
			if (this._actionManager.isCellDown()) {
				this._actionManager.isControlPressed = e.ctrlKey;
				this._actionManager.isShiftPressed = e.shiftKey;
				this._actionManager.clickCell();
				this._actionManager.mouseUpCell(e.pageX, e.pageY);
			}
		}
	}
}


