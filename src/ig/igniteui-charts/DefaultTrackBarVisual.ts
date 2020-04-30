/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { ITrackBarVisual, ITrackBarVisual_$type } from "./ITrackBarVisual";
import { Path } from "igniteui-core/Path";
import { List$1 } from "igniteui-core/List$1";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathSegment } from "igniteui-core/PathSegment";

/**
 * @hidden 
 */
export class DefaultTrackBarVisual extends Base implements ITrackBarVisual {
	static $t: Type = markType(DefaultTrackBarVisual, 'DefaultTrackBarVisual', (<any>Base).$type, [ITrackBarVisual_$type]);
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
		this.barBox = new Path();
		this.allPaths = new List$1<Path>((<any>Path).$type, 0);
		this.allPaths.add(this.barBox);
		this.barBox._fill = this.getBarBoxDefaultBrush();
	}
	getBarBoxDefaultBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 218, 218, 218);
			return $ret;
		})());
	}
	getBarBoxDefaultOutline(): Brush {
		return null;
	}
	getBarBoxDefaultStrokeThickness(): number {
		return 0;
	}
	private updateBar(): void {
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
		this.barBox.data = pg;
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
			this.updateBar();
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
	private _barBox: Path = null;
	get barBox(): Path {
		return this._barBox;
	}
	set barBox(value: Path) {
		this._barBox = value;
	}
	private _allPaths: IList$1<Path> = null;
	get allPaths(): IList$1<Path> {
		return this._allPaths;
	}
	set allPaths(value: IList$1<Path>) {
		this._allPaths = value;
	}
}


