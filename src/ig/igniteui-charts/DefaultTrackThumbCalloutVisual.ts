/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { ITrackThumbCalloutVisual, ITrackThumbCalloutVisual_$type } from "./ITrackThumbCalloutVisual";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Path } from "igniteui-core/Path";
import { TextBlock } from "igniteui-core/TextBlock";
import { List$1 } from "igniteui-core/List$1";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class DefaultTrackThumbCalloutVisual extends Base implements ITrackThumbCalloutVisual {
	static $t: Type = markType(DefaultTrackThumbCalloutVisual, 'DefaultTrackThumbCalloutVisual', (<any>Base).$type, [ITrackThumbCalloutVisual_$type]);
	private _translateX: number = 0;
	get translateX(): number {
		return this._translateX;
	}
	set translateX(value: number) {
		this._translateX = value;
	}
	private _translateY: number = 0;
	get translateY(): number {
		return this._translateY;
	}
	set translateY(value: number) {
		this._translateY = value;
	}
	private _textTranslateX: number = 0;
	get textTranslateX(): number {
		return this._textTranslateX;
	}
	set textTranslateX(value: number) {
		this._textTranslateX = value;
	}
	private _textTranslateY: number = 0;
	get textTranslateY(): number {
		return this._textTranslateY;
	}
	set textTranslateY(value: number) {
		this._textTranslateY = value;
	}
	constructor() {
		super();
		this.calloutBox = new Path();
		this.calloutBox._visibility = Visibility.Collapsed;
		this.calloutText = new TextBlock();
		this.calloutText._visibility = Visibility.Collapsed;
		this.allPaths = new List$1<Path>((<any>Path).$type, 0);
		this.allPaths.add(this.calloutBox);
		this.height = 22;
		this.width = 10;
		this.calloutBox._stroke = this.getCalloutBoxDefaultStroke();
		this.calloutBox.strokeThickness = this.getCalloutBoxDefaultStrokeThickness();
		this.calloutBox._fill = this.getCalloutBoxDefaultBrush();
		this.calloutText.fill = this.getCalloutTextDefaultBrush();
		this.calloutText.text = "";
	}
	getCalloutBoxDefaultStroke(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 185, 185, 185);
			return $ret;
		})());
	}
	getCalloutBoxDefaultStrokeThickness(): number {
		return 1;
	}
	getCalloutBoxDefaultBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(200, 255, 255, 255);
			return $ret;
		})());
	}
	getCalloutTextDefaultBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 185, 185, 185);
			return $ret;
		})());
	}
	private updateText(): void {
	}
	private updateCalloutBox(): void {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let ps: PolyLineSegment = new PolyLineSegment();
		pf._isClosed = true;
		pf._isFilled = true;
		pf._startPoint = <Point>{ $type: Point_$type, x: 0, y: 0 };
		ps._points.add(<Point>{ $type: Point_$type, x: this.width, y: 0 });
		ps._points.add(<Point>{ $type: Point_$type, x: this.width, y: this.height });
		ps._points.add(<Point>{ $type: Point_$type, x: 0, y: this.height });
		pf._segments.add(ps);
		pg.figures.add(pf);
		this.calloutBox.data = pg;
	}
	private _width: number = -1;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		let oldValue = this._width;
		this._width = value;
		if (oldValue != this._width) {
			this.updateVisual();
		}
	}
	private updateVisual(): void {
		if (this.width > 0 && this.height > 0) {
			this.updateText();
			this.updateCalloutBox();
		}
	}
	private _height: number = -1;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		let oldValue = this._height;
		this._height = value;
		if (this._height != oldValue) {
			this.updateVisual();
		}
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		let oldValue = this._isVisible;
		this._isVisible = value;
		if (this._isVisible != oldValue) {
			this.calloutBox._visibility = this._isVisible ? Visibility.Visible : Visibility.Collapsed;
			this.calloutText._visibility = this._isVisible ? Visibility.Visible : Visibility.Collapsed;
		}
	}
	private _calloutBox: Path = null;
	get calloutBox(): Path {
		return this._calloutBox;
	}
	set calloutBox(value: Path) {
		this._calloutBox = value;
	}
	private _calloutText: TextBlock = null;
	get calloutText(): TextBlock {
		return this._calloutText;
	}
	set calloutText(value: TextBlock) {
		this._calloutText = value;
	}
	private _allPaths: IList$1<Path> = null;
	get allPaths(): IList$1<Path> {
		return this._allPaths;
	}
	set allPaths(value: IList$1<Path>) {
		this._allPaths = value;
	}
}


