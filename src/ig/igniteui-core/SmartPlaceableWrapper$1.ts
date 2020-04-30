/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, Point_$type, markType, PointUtil } from "./type";
import { ISmartPlaceable, ISmartPlaceable_$type } from "./ISmartPlaceable";
import { FrameworkElement } from "./FrameworkElement";
import { Size } from "./Size";
import { SmartPosition } from "./SmartPosition";
import { Rect } from "./Rect";

/**
 * @hidden 
 */
export class SmartPlaceableWrapper$1<T extends FrameworkElement> extends Base implements ISmartPlaceable {
	static $t: Type = markType(SmartPlaceableWrapper$1, 'SmartPlaceableWrapper$1', (<any>Base).$type, [ISmartPlaceable_$type]);
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this.noWiggle = false;
	}
	private _noWiggle: boolean = false;
	get noWiggle(): boolean {
		return this._noWiggle;
	}
	set noWiggle(value: boolean) {
		this._noWiggle = value;
	}
	private _element: T = null;
	get element(): T {
		return this._element;
	}
	set element(value: T) {
		this._element = value;
	}
	private _elementLocationResult: Point = null;
	get elementLocationResult(): Point {
		return this._elementLocationResult;
	}
	set elementLocationResult(value: Point) {
		this._elementLocationResult = value;
	}
	private _originalLocation: Point = null;
	get originalLocation(): Point {
		return this._originalLocation;
	}
	set originalLocation(value: Point) {
		this._originalLocation = value;
	}
	getSmartPositions(): SmartPosition[] {
		if (this.noWiggle) {
			return this.smartPositionDefault;
		} else {
			return this.smartPositions;
		}
	}
	private smartPositionDefault: SmartPosition[] = [ SmartPosition.CenterCenter ];
	private smartPositions: SmartPosition[] = [ SmartPosition.CenterCenter, SmartPosition.RightCenter, SmartPosition.RightTop, SmartPosition.CenterTop, SmartPosition.RightBottom, SmartPosition.CenterBottom, SmartPosition.LeftTop, SmartPosition.LeftCenter, SmartPosition.LeftBottom ];
	private _elementDesiredSize: Size = new Size();
	get elementDesiredSize(): Size {
		return this._elementDesiredSize;
	}
	set elementDesiredSize(value: Size) {
		this._elementDesiredSize = value;
	}
	getSmartElementSize(): Size {
		return this.elementDesiredSize;
	}
	getSmartBounds(position: SmartPosition): Rect {
		let s: Size = this.getSmartElementSize();
		let w: number = s.width;
		let h: number = s.height;
		let d: Point;
		{
			d = this.getOffset(position, w, h);
		}
		return new Rect(0, this.originalLocation.x + d.x, this.originalLocation.y + d.y, w, h);
	}
	get opacity(): number {
		return this.element._opacity;
	}
	set opacity(value: number) {
		this.element._opacity = value;
	}
	get smartPosition(): SmartPosition {
		return this._smartPosition;
	}
	set smartPosition(value: SmartPosition) {
		this._smartPosition = value;
		let s: Size = this.getSmartElementSize();
		let h: number = s.height;
		let w: number = s.width;
		let d: Point;
		{
			d = this.getOffset(this._smartPosition, w, h);
		}
		this.elementLocationResult = <Point>{ $type: Point_$type, x: this.originalLocation.x + d.x, y: this.originalLocation.y + d.y };
	}
	private _smartPosition: SmartPosition = <SmartPosition>0;
	private getOffset(position: SmartPosition, w: number, h: number): Point {
		let c: number = 0.25;
		switch (position) {
			case SmartPosition.LeftTop: return <Point>{ $type: Point_$type, x: -w * c, y: -h * c };
			case SmartPosition.CenterTop: return <Point>{ $type: Point_$type, x: 0, y: -h * c };
			case SmartPosition.RightTop: return <Point>{ $type: Point_$type, x: w * c, y: -h * c };
			case SmartPosition.LeftCenter: return <Point>{ $type: Point_$type, x: -w * c, y: 0 };
			case SmartPosition.CenterCenter: return <Point>{ $type: Point_$type, x: 0, y: 0 };
			case SmartPosition.RightCenter: return <Point>{ $type: Point_$type, x: w * c, y: 0 };
			case SmartPosition.LeftBottom: return <Point>{ $type: Point_$type, x: -w * c, y: h * c };
			case SmartPosition.CenterBottom: return <Point>{ $type: Point_$type, x: 0, y: h * c };
			default: return <Point>{ $type: Point_$type, x: w * c, y: h * c };
		}

	}
}


