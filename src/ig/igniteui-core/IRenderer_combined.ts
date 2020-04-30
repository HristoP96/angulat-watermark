/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Rectangle } from "./Rectangle";
import { Path } from "./Path";
import { Geometry } from "./Geometry";
import { TextBlock } from "./TextBlock";
import { Polygon } from "./Polygon";
import { Polyline } from "./Polyline";
import { DataTemplateRenderInfo } from "./DataTemplateRenderInfo";
import { ContentControl } from "./ContentControl";
import { Transform } from "./Transform";
import { Line } from "./Line";
import { Rect } from "./Rect";
import { Shape } from "./Shape";
import { Style } from "./Style";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { isNaN_ } from "./number";
import { FrameworkElement } from "./FrameworkElement";
import { stringEmpty, stringReplace, stringIsNullOrEmpty } from "./string";

/**
 * @hidden 
 */
export interface IRenderer { 
	renderRectangle(rectangle: Rectangle): void;
renderPath(path: Path): void;
renderGeometry(geometry: Geometry): void;
renderTextBlock(tb: TextBlock): void;
renderPolygon(polygon: Polygon): void;
renderPolyline(polyline: Polyline): void;
renderContentControl(info: DataTemplateRenderInfo, marker: ContentControl): void;
applyTransform(transform: Transform): void;
renderLine(line: Line): void;
data: any;
save(): void;
scale(x: number, y: number): void;
translate(x: number, y: number): void;
drawImage(image: any, opacity: number, left: number, top: number, width: number, height: number): void;
drawImage1(image: any, opacity: number, sourceLeft: number, sourceTop: number, sourceWidth: number, sourceHeight: number, left: number, top: number, width: number, height: number): void;
setRectangleClip(clipRectangle: Rect): void;
restore(): void;
clearRectangle(left: number, top: number, width: number, height: number): void;
getPixelAt(x: number, y: number): number[];
setFont(font: string): void;
setFontInfo(fontInfo: FontInfo): void;
getFont(): string;
getFontInfo(): FontInfo;
measureTextWidth(text: string): number;
setOpacity(p: number): void;
getUnderlyingContext(): any;
applyStyle(shape: Shape, style: Style): void;
enableDropShadow(color: string, blur: number, offsetX: number, offsetY: number): void;
disableDropShadow(): void;
renderTextBlockInRect(tb: TextBlock, rect: Rect, lineHeight: number): void;
}

/**
 * @hidden 
 */
export let IRenderer_$type = new Type(null, 'IRenderer');

/**
 * @hidden 
 */
export class FontInfo extends Base {
	static $t: Type = markType(FontInfo, 'FontInfo');
	ensurePopulated(renderer: DomRenderer): void {
		if (isNaN_(this.fontSize)) {
			let fi = FontUtil.getFontInfoFromString(renderer, this.fontString);
			this._fontFamily = fi.fontFamily;
			this._fontSize = fi.fontSize;
			this._fontStretch = fi.fontStretch;
			this._fontStyle = fi.fontStyle;
			this._fontVariant = fi.fontVariant;
			this._fontWeight = fi.fontWeight;
		}
	}
	constructor() {
		super();
		this.fontSize = NaN;
		this.lineHeight = NaN;
	}
	private _versionNumber: number = 0;
	get versionNumber(): number {
		return this._versionNumber;
	}
	private _fontStyle: string = null;
	get fontStyle(): string {
		return this._fontStyle;
	}
	set fontStyle(value: string) {
		let oldValue = this._fontStyle;
		this._fontStyle = value;
		if (oldValue != this._fontStyle) {
			this.onPropertyChanged("FontStyle");
		}
	}
	private onPropertyChanged(propertyName: string): void {
		if (propertyName != "FontString") {
			this._fontString = null;
		}
		if (this._versionNumber < 100000) {
			this._versionNumber++;
		} else {
			this._versionNumber = 0;
		}
	}
	private _fontVariant: string = null;
	get fontVariant(): string {
		return this._fontVariant;
	}
	set fontVariant(value: string) {
		let oldValue = this._fontVariant;
		this._fontVariant = value;
		if (this._fontVariant != oldValue) {
			this.onPropertyChanged("FontVariant");
		}
	}
	private _fontWeight: string = null;
	get fontWeight(): string {
		return this._fontWeight;
	}
	set fontWeight(value: string) {
		let oldValue = this._fontWeight;
		this._fontWeight = value;
		if (this._fontWeight != oldValue) {
			this.onPropertyChanged("FontWeight");
		}
	}
	private _fontSize: number = 0;
	get fontSize(): number {
		return this._fontSize;
	}
	set fontSize(value: number) {
		let oldValue = this._fontSize;
		this._fontSize = value;
		if (this._fontSize != oldValue) {
			this.onPropertyChanged("FontSize");
		}
	}
	private _lineHeight: number = 0;
	get lineHeight(): number {
		return this._lineHeight;
	}
	set lineHeight(value: number) {
		let oldValue = this._lineHeight;
		this._lineHeight = value;
		if (this._lineHeight != oldValue) {
			this.onPropertyChanged("LineHeight");
		}
	}
	private _fontFamily: string = null;
	get fontFamily(): string {
		return this._fontFamily;
	}
	set fontFamily(value: string) {
		let oldValue = this._fontFamily;
		this._fontFamily = value;
		if (this._fontFamily != oldValue) {
			this.onPropertyChanged("FontFamily");
		}
	}
	private _fontStretch: string = null;
	get fontStretch(): string {
		return this._fontStretch;
	}
	set fontStretch(value: string) {
		let oldValue = this._fontStretch;
		this._fontStretch = value;
		if (this._fontStretch != oldValue) {
			this.onPropertyChanged("FontStretch");
		}
	}
	private _fontString: string = null;
	get fontString(): string {
		if (this._fontString == null) {
			FontUtil.updateFontString(this);
		}
		return this._fontString;
	}
	set fontString(value: string) {
		let oldValue = this._fontString;
		this._fontString = value;
		if (this._fontString != oldValue) {
			this.onPropertyChanged("FontString");
		}
	}
	copyFontInfo(): FontInfo {
		return ((() => {
			let $ret = new FontInfo();
			$ret.fontStyle = this.fontStyle;
			$ret.fontVariant = this.fontVariant;
			$ret.fontWeight = this.fontWeight;
			$ret.fontSize = this.fontSize;
			$ret.lineHeight = this.lineHeight;
			$ret.fontFamily = this.fontFamily;
			$ret.fontStretch = this.fontStretch;
			$ret.fontString = this.fontString;
			return $ret;
		})());
	}
}

/**
 * @hidden 
 */
export class FontUtil extends Base {
	static $t: Type = markType(FontUtil, 'FontUtil');
	static getCurrentFontHeight(renderer: DomRenderer, font: FontInfo): number {
		if (renderer == null) {
			return 14;
		}
		let fontString: string = null;
		if (font != null) {
			fontString = font.fontString;
		}
		return renderer.getHeightForFontString(fontString, "M", true);
	}
	static measureStringHeight(renderer: DomRenderer, text: string, font: FontInfo): number {
		let height = renderer.getHeightForFontString(font.fontString, text, false);
		return height;
	}
	static measureStringWidth1(text: string, font: string, context: RenderingContext): number {
		context.save();
		context.setFont(font);
		let width: number = context.measureTextWidth(text);
		context.restore();
		return width;
	}
	static measureStringWidth(text: string, font: FontInfo, context: RenderingContext): number {
		context.save();
		context.setFontInfo(font);
		let width: number = context.measureTextWidth(text);
		context.restore();
		return width;
	}
	private static _defaultInfo: FontInfo = null;
	static getDefaultFont(renderer: DomRenderer): FontInfo {
		if (FontUtil._defaultInfo == null) {
			FontUtil._defaultInfo = FontUtil.getFontInfoFromString(renderer, "12px Verdana");
		}
		return FontUtil._defaultInfo;
	}
	static getFontSize(font: FontInfo): number {
		return font.fontSize;
	}
	static getFontWithNewFontSize(font: FontInfo, fontSize: number): FontInfo {
		let tempFont: FontInfo = font.copyFontInfo();
		tempFont.fontSize = fontSize;
		tempFont.fontString = fontSize + "px " + font.fontFamily;
		return tempFont;
	}
	static getFontInfoFromString(renderer: DomRenderer, font: string): FontInfo {
		renderer.startCSSQuery();
		renderer.setCssQueryFontString(font);
		let fontStyle = renderer.getCssDefaultPropertyValue("", "font-style");
		let fontVariant = renderer.getCssDefaultPropertyValue("", "font-variant");
		let fontWeight = renderer.getCssDefaultPropertyValue("", "font-weight");
		fontWeight = FontUtil.getFontWeightWord(fontWeight);
		let fontSize = renderer.getCssDefaultPropertyValue("", "font-size");
		let lineHeight = renderer.getCssDefaultPropertyValue("", "line-height");
		let fontFamily = renderer.getCssDefaultPropertyValue("", "font-family");
		renderer.endCSSQuery();
		let returnFont: FontInfo = new FontInfo();
		let first: boolean = true;
		font = "";
		if (fontStyle.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontStyle;
		}
		if (fontVariant.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontVariant;
		}
		if (fontWeight.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontWeight;
		}
		if (fontSize.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontSize;
		}
		if (lineHeight.length > 0) {
			if (!first) {
				font += "/";
			} else {
				first = false;
			}
			font += lineHeight;
		}
		if (fontFamily.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontFamily;
		}
		let info: FontInfo = new FontInfo();
		info.fontFamily = fontFamily;
		info.fontSize = parseFloat(fontSize);
		info.fontStretch = "Normal";
		info.fontStyle = fontStyle;
		info.fontVariant = fontVariant;
		info.fontWeight = fontWeight;
		info.fontString = font;
		return info;
	}
	static getFontForClass(container: DomRenderer, className: string): FontInfo {
		let font: string = stringEmpty();
		container.startCSSQuery();
		let fontStyle = container.getCssDefaultPropertyValue(className, "font-style");
		let fontVariant = container.getCssDefaultPropertyValue(className, "font-variant");
		let fontWeight = container.getCssDefaultPropertyValue(className, "font-weight");
		fontWeight = FontUtil.getFontWeightWord(fontWeight);
		let fontSize = container.getCssDefaultPropertyValue(className, "font-size");
		let lineHeight = container.getCssDefaultPropertyValue(className, "line-height");
		let fontFamily = container.getCssDefaultPropertyValue(className, "font-family");
		container.endCSSQuery();
		let first: boolean = true;
		if (fontStyle.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontStyle;
		}
		if (fontVariant.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontVariant;
		}
		if (fontWeight.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontWeight;
		}
		if (fontSize.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontSize;
		}
		if (lineHeight.length > 0) {
			if (!first) {
				font += "/";
			} else {
				first = false;
			}
			font += lineHeight;
		}
		if (fontFamily.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontFamily;
		}
		let info: FontInfo = new FontInfo();
		info.fontFamily = fontFamily;
		info.fontSize = parseFloat(fontSize);
		info.fontStretch = "Normal";
		info.fontStyle = fontStyle;
		info.fontVariant = fontVariant;
		info.fontWeight = fontWeight;
		info.fontString = font;
		return info;
	}
	static getFont(container: DomRenderer): FontInfo {
		return FontUtil.getFontForClass(container, "");
	}
	static updateFontString(fontInfo: FontInfo): void {
		let font: string = stringEmpty();
		let fontStyle = fontInfo.fontStyle;
		let fontVariant = fontInfo.fontVariant;
		let fontWeight = fontInfo.fontWeight;
		let fontSize = fontInfo.fontSize.toString();
		let lineHeight = "normal";
		let fontFamily = fontInfo.fontFamily;
		let first: boolean = true;
		if (fontStyle != null && fontStyle.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontStyle;
		}
		if (fontVariant != null && fontVariant.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontVariant;
		}
		if (fontWeight != null && fontWeight.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontWeight;
		}
		if (fontSize.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontSize + "px";
		}
		if (lineHeight != null && lineHeight.length > 0) {
			if (!first) {
				font += "/";
			} else {
				first = false;
			}
			font += lineHeight;
		}
		if (fontFamily != null && fontFamily.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontFamily;
		}
		fontInfo.fontString = font;
	}
	static getFontInfo(renderer: DomRenderer, tb: FrameworkElement, fontDescriptor: FontInfo): FontInfo {
		if (fontDescriptor == null) {
			let fi = new FontInfo();
			renderer.startCSSQuery();
			let fontStyle = renderer.getCssDefaultPropertyValue("", "font-style");
			let fontVariant = renderer.getCssDefaultPropertyValue("", "font-variant");
			let fontWeight = renderer.getCssDefaultPropertyValue("", "font-weight");
			fontWeight = FontUtil.getFontWeightWord(fontWeight);
			let fontSize = renderer.getCssDefaultPropertyValue("", "font-size");
			let lineHeight = renderer.getCssDefaultPropertyValue("", "line-height");
			let fontFamily = renderer.getCssDefaultPropertyValue("", "font-family");
			fi.fontFamily = stringReplace(fontFamily, "'", "");
			fi.fontStyle = FontUtil.toUpperFirst(fontStyle);
			fi.fontWeight = FontUtil.toUpperFirst(fontWeight.toString());
			fi.fontVariant = fontVariant;
			fi.lineHeight = parseFloat(lineHeight);
			fi.fontSize = parseFloat(fontSize);
			renderer.endCSSQuery();
			return fi;
		}
		return fontDescriptor;
	}
	private static toUpperFirst(label: string): string {
		if (stringIsNullOrEmpty(label)) {
			return stringEmpty();
		}
		let result = label.substr(0, 1).toUpperCase();
		if (label.length > 1) {
			result += label.substr(1);
		}
		return result;
	}
	static toFontInfo(renderer: DomRenderer, font: string): FontInfo {
		if (font == null) {
			return null;
		}
		return FontUtil.getFontInfoFromString(renderer, font);
	}
	static interpolateFont(actualFont: FontInfo, p: number, fromFont: FontInfo, toFont: FontInfo): void {
		if (fromFont == null) {
			fromFont = toFont;
		}
		if (toFont == null) {
			toFont = fromFont;
		}
		if (fromFont == null && toFont == null) {
			return;
		}
		if (p > 0.5) {
			actualFont.fontFamily = toFont.fontFamily;
			actualFont.fontStretch = toFont.fontStretch;
			actualFont.fontStyle = toFont.fontStyle;
			actualFont.fontVariant = toFont.fontVariant;
			actualFont.fontWeight = toFont.fontWeight;
			actualFont.lineHeight = toFont.lineHeight;
			actualFont.fontSize = toFont.fontSize;
		} else {
			actualFont.fontFamily = fromFont.fontFamily;
			actualFont.fontStretch = fromFont.fontStretch;
			actualFont.fontStyle = fromFont.fontStyle;
			actualFont.fontVariant = fromFont.fontVariant;
			actualFont.fontWeight = fromFont.fontWeight;
			actualFont.lineHeight = fromFont.lineHeight;
			actualFont.fontSize = fromFont.fontSize;
		}
		if (!isNaN_(fromFont.fontSize) && !isNaN_(toFont.fontSize)) {
			actualFont.fontSize = fromFont.fontSize + (toFont.fontSize - fromFont.fontSize) * p;
		}
		FontUtil.updateFontString(actualFont);
	}
	static charsEqual(text1: string, index1: number, chars: string[], index2: number): boolean {
		return Base.equalsStatic(text1.charAt(index1), chars[index2]);
	}
	private static getFontWeightWord(fontWeight: string): string {
		switch (fontWeight) {
			case "400":
			fontWeight = "normal";
			break;

			case "700":

			case "800":
			fontWeight = "bold";
			break;

		}

		return fontWeight;
	}
}

/**
 * @hidden 
 */
export class RenderingContext extends Base {
	static $t: Type = markType(RenderingContext, 'RenderingContext');
	private _renderer: IRenderer = null;
	getUnderlyingContext(): any {
		if (this._renderer == null) {
			return null;
		}
		return this._renderer.getUnderlyingContext();
	}
	constructor(renderer: IRenderer, data: any) {
		super();
		this._renderer = renderer;
		if (this._renderer != null) {
			this._renderer.data = data;
		}
	}
	get shouldRender(): boolean {
		if (this._renderer == null) {
			return false;
		}
		return true;
	}
	renderRectangle(rectangle: Rectangle): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderRectangle(rectangle);
	}
	renderPath(path: Path): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderPath(path);
	}
	renderGeometry(geometry: Geometry): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderGeometry(geometry);
	}
	renderTextBlock(tb: TextBlock): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderTextBlock(tb);
	}
	renderTextBlockInRect(tb: TextBlock, rect: Rect, lineHeight: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderTextBlockInRect(tb, rect, lineHeight);
	}
	renderPolygon(polygon: Polygon): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderPolygon(polygon);
	}
	renderPolyline(polyline: Polyline): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderPolyline(polyline);
	}
	renderContentControl(info: DataTemplateRenderInfo, marker: ContentControl): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderContentControl(info, marker);
	}
	applyTransform(transform: Transform): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.applyTransform(transform);
	}
	renderLine(line: Line): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.renderLine(line);
	}
	save(): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.save();
	}
	restore(): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.restore();
	}
	setRectangleClip(clipRectangle: Rect): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.setRectangleClip(clipRectangle);
	}
	scale(x: number, y: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.scale(x, y);
	}
	translate(x: number, y: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.translate(x, y);
	}
	clearRectangle(left: number, top: number, width: number, height: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.clearRectangle(left, top, width, height);
	}
	drawImage1(image: any, opacity: number, sourceLeft: number, sourceTop: number, sourceWidth: number, sourceHeight: number, left: number, top: number, width: number, height: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.drawImage1(image, opacity, sourceLeft, sourceTop, sourceWidth, sourceHeight, left, top, width, height);
	}
	drawImage(image: any, opacity: number, left: number, top: number, width: number, height: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.drawImage(image, opacity, left, top, width, height);
	}
	getPixelAt(x: number, y: number): number[] {
		if (this._renderer == null) {
			return null;
		}
		return this._renderer.getPixelAt(x, y);
	}
	getFont(): string {
		if (this._renderer == null) {
			return null;
		}
		return this._renderer.getFont();
	}
	getFontInfo(): FontInfo {
		if (this._renderer == null) {
			return null;
		}
		return this._renderer.getFontInfo();
	}
	setFont(font: string): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.setFont(font);
	}
	setFontInfo(fontInfo: FontInfo): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.setFontInfo(fontInfo);
	}
	measureTextWidth(text: string): number {
		if (this._renderer == null) {
			return NaN;
		}
		return this._renderer.measureTextWidth(text);
	}
	measureTextBlockWidth(text: TextBlock): number {
		if (this._renderer == null) {
			return NaN;
		}
		let context: any = this._renderer.getFontInfo();
		let contextVersion: number = 0;
		if (context == null) {
			context = this._renderer.getFont();
		} else {
			contextVersion = (<FontInfo>context).versionNumber;
		}
		let hist = text.getHistoricalWidth(context, contextVersion);
		if (hist >= 0) {
			return <number>hist;
		}
		let width = this._renderer.measureTextWidth(text.text);
		text.setHistoricalWidth(context, contextVersion, width);
		return width;
	}
	setOpacity(p: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.setOpacity(p);
	}
	applyStyle(shape: Shape, style: Style): void {
		if (this._renderer == null || style == null) {
			return;
		}
		this._renderer.applyStyle(shape, style);
	}
	enableDropShadow(color: string, blur: number, offsetX: number, offsetY: number): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.enableDropShadow(color, blur, offsetX, offsetY);
	}
	disableDropShadow(): void {
		if (this._renderer == null) {
			return;
		}
		this._renderer.disableDropShadow();
	}
}


