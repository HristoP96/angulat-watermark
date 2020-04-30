/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { ITrackThumbVisual, ITrackThumbVisual_$type } from "./ITrackThumbVisual";
import { ZoomSliderOrientation } from "./ZoomSliderOrientation";
import { Path } from "igniteui-core/Path";
import { List$1 } from "igniteui-core/List$1";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";

/**
 * @hidden 
 */
export class DefaultTrackThumbVisual extends Base implements ITrackThumbVisual {
	static $t: Type = markType(DefaultTrackThumbVisual, 'DefaultTrackThumbVisual', (<any>Base).$type, [ITrackThumbVisual_$type]);
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
	constructor() {
		super();
		this.thumbBox = new Path();
		this.thumbRidges = new Path();
		this.allPaths = new List$1<Path>((<any>Path).$type, 0);
		this.allPaths.add(this.thumbBox);
		this.allPaths.add(this.thumbRidges);
		this.width = this.getTrackThumbDefaultWidth();
		this.height = this.getTrackThumbDefaultHeight();
		this.thumbBox._stroke = this.getThumbBoxDefaultStroke();
		this.thumbBox.strokeThickness = this.getThumbBoxDefaultStrokeThickness();
		this.thumbBox._fill = this.getThumbBoxDefaultBrush();
		this.thumbRidges._stroke = this.getThumbRidgesDefaultStroke();
		this.thumbRidges.strokeThickness = 1;
	}
	getTrackThumbDefaultWidth(): number {
		return 10;
	}
	getTrackThumbDefaultHeight(): number {
		return 22;
	}
	getThumbBoxDefaultStroke(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 185, 185, 185);
			return $ret;
		})());
	}
	getThumbBoxDefaultStrokeThickness(): number {
		return 1;
	}
	getThumbBoxDefaultBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 249, 249, 249);
			return $ret;
		})());
	}
	getThumbRidgesDefaultStroke(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 119, 119, 119);
			return $ret;
		})());
	}
	private updateThumbRidges(): void {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let pg: PathGeometry = new PathGeometry();
			let pf: PathFigure = new PathFigure();
			let ps: LineSegment = new LineSegment(1);
			pf._isClosed = false;
			pf._isFilled = false;
			pf._startPoint = <Point>{ $type: Point_$type, x: -1.5, y: -4 };
			ps.point = <Point>{ $type: Point_$type, x: -1.5, y: 4 };
			pf._segments.add(ps);
			pg.figures.add(pf);
			let pf2: PathFigure = new PathFigure();
			let ps2: LineSegment = new LineSegment(1);
			pf2._isClosed = false;
			pf2._isFilled = false;
			pf2._startPoint = <Point>{ $type: Point_$type, x: 1.5, y: -4 };
			ps2.point = <Point>{ $type: Point_$type, x: 1.5, y: 4 };
			pf2._segments.add(ps2);
			pg.figures.add(pf2);
			this.thumbRidges.data = pg;
		} else {
			let pg1: PathGeometry = new PathGeometry();
			let pf1: PathFigure = new PathFigure();
			let ps1: LineSegment = new LineSegment(1);
			pf1._isClosed = false;
			pf1._isFilled = false;
			pf1._startPoint = <Point>{ $type: Point_$type, x: -4, y: -1.5 };
			ps1.point = <Point>{ $type: Point_$type, x: 4, y: -1.5 };
			pf1._segments.add(ps1);
			pg1.figures.add(pf1);
			let pf21: PathFigure = new PathFigure();
			let ps21: LineSegment = new LineSegment(1);
			pf21._isClosed = false;
			pf21._isFilled = false;
			pf21._startPoint = <Point>{ $type: Point_$type, x: -4, y: 1.5 };
			ps21.point = <Point>{ $type: Point_$type, x: 4, y: 1.5 };
			pf21._segments.add(ps21);
			pg1.figures.add(pf21);
			this.thumbRidges.data = pg1;
		}
	}
	private updateThumbBox(): void {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let ps: PolyLineSegment = new PolyLineSegment();
		pf._isClosed = true;
		pf._isFilled = true;
		pf._startPoint = <Point>{ $type: Point_$type, x: this.width / -2, y: this.height / -2 };
		ps._points.add(<Point>{ $type: Point_$type, x: this.width / 2, y: this.height / -2 });
		ps._points.add(<Point>{ $type: Point_$type, x: this.width / 2, y: this.height / 2 });
		ps._points.add(<Point>{ $type: Point_$type, x: this.width / -2, y: this.height / 2 });
		pf._segments.add(ps);
		pg.figures.add(pf);
		this.thumbBox.data = pg;
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
			this.updateThumbBox();
			this.updateThumbRidges();
		}
	}
	private _orientation: ZoomSliderOrientation = ZoomSliderOrientation.Horizontal;
	get orientation(): ZoomSliderOrientation {
		return this._orientation;
	}
	set orientation(value: ZoomSliderOrientation) {
		let oldValue = this._orientation;
		this._orientation = value;
		if (this._orientation != oldValue) {
			this.updateVisual();
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
	private _thumbBox: Path = null;
	get thumbBox(): Path {
		return this._thumbBox;
	}
	set thumbBox(value: Path) {
		this._thumbBox = value;
	}
	private _thumbRidges: Path = null;
	get thumbRidges(): Path {
		return this._thumbRidges;
	}
	set thumbRidges(value: Path) {
		this._thumbRidges = value;
	}
	private _allPaths: IList$1<Path> = null;
	get allPaths(): IList$1<Path> {
		return this._allPaths;
	}
	set allPaths(value: IList$1<Path>) {
		this._allPaths = value;
	}
}


