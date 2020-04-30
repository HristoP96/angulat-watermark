/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, ICollection$1, ICollection$1_$type, NotSupportedException, fromEnum, toEnum, Type, markType } from "igniteui-core/type";
import { IFlattener } from "./IFlattener";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { Path } from "igniteui-core/Path";
import { PathFigure } from "igniteui-core/PathFigure";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { NaNSegmenter } from "./NaNSegmenter";
import { List$1 } from "igniteui-core/List$1";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { Thread } from "igniteui-core/culture";
import { PathSegment } from "igniteui-core/PathSegment";

/**
 * @hidden 
 */
export class PathRenderer extends Base {
	static $t: Type = markType(PathRenderer, 'PathRenderer');
	private _flattener: IFlattener = null;
	get flattener(): IFlattener {
		return this._flattener;
	}
	set flattener(value: IFlattener) {
		this._flattener = value;
	}
	constructor(initNumber: number);
	constructor(initNumber: number, flattener: IFlattener);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.unknownValuePlotting = UnknownValuePlotting.DontPlot;
			}
			break;

			case 1:
			{
				let flattener: IFlattener = <IFlattener>_rest[0];
				this.flattener = flattener;
			}
			break;

		}

	}
	private _unknownValuePlotting: UnknownValuePlotting = <UnknownValuePlotting>0;
	get unknownValuePlotting(): UnknownValuePlotting {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this._unknownValuePlotting = value;
	}
	render(path: Path, points: IList$1<Point>, resolution: number): void {
		let segments = NaNSegmenter.segments(points, this.unknownValuePlotting);
		let pathFigures = this.getFigures(segments, resolution);
		let data: PathGeometry = new PathGeometry();
		for (let figure of fromEnum<PathFigure>(pathFigures)) {
			data.figures.add(figure);
		}
		path.data = data;
	}
	private *_getFigures(segments: IList$1<IList$1<Point>>, resolution: number): IterableIterator<any> {
		for (let i = 0; i < segments.count; i++) {
			let segment = segments.item(i);
			if (segment.count >= 2) {
				let figure: PathFigure = new PathFigure();
				let first: Point = segment.item(0);
				figure._startPoint = first;
				let seg: PolyLineSegment = this.createPolylineSegment(segment, resolution);
				figure._segments.add(seg);
				yield figure;
			}
		}
	}
	private getFigures(segments: IList$1<IList$1<Point>>, resolution: number): IEnumerable$1<PathFigure> {
		return toEnum(() => this._getFigures(segments, resolution));
	}
	private createPolylineSegment(segment: IList$1<Point>, resolution: number): PolyLineSegment {
		let polySegment: PolyLineSegment = new PolyLineSegment();
		if (this.flattener == null) {
			for (let i = 1; i < segment.count; i++) {
				let point: Point = segment.item(i);
				polySegment._points.add(point);
			}
		} else {
			let flattened = this.flattener.flatten(segment, resolution);
			for (let i1 = 1; i1 < flattened.count; i1++) {
				let point1: Point = flattened.item(i1);
				polySegment._points.add(point1);
			}
		}
		return polySegment;
	}
}


