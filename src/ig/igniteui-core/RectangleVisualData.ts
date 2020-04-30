/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { Base, Type, markType } from "./type";
import { Rectangle } from "./Rectangle";
import { FrameworkElement } from "./FrameworkElement";
import { AppearanceHelper } from "./AppearanceHelper";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";
import { PrimitiveAppearanceData } from "./PrimitiveAppearanceData";

/**
 * @hidden 
 */
export class RectangleVisualData extends PrimitiveVisualData {
	static $t: Type = markType(RectangleVisualData, 'RectangleVisualData', (<any>PrimitiveVisualData).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, name: string, rect: Rectangle);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(1, "rect1");
				this._width = 0;
				this._height = 0;
				this._radiusX = 0;
				this._radiusY = 0;
			}
			break;

			case 1:
			{
				let name: string = <string>_rest[0];
				let rect: Rectangle = <Rectangle>_rest[1];
				super(1, name);
				this._width = 0;
				this._height = 0;
				this._radiusX = 0;
				this._radiusY = 0;
				this.width = rect.width;
				this.height = rect.height;
				this.radiusX = rect.radiusX;
				this.radiusY = rect.radiusY;
				AppearanceHelper.getShapeAppearance(this.appearance, rect);
			}
			break;

		}

	}
	private _width: number;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _radiusX: number;
	get radiusX(): number {
		return this._radiusX;
	}
	set radiusX(value: number) {
		this._radiusX = value;
	}
	private _radiusY: number;
	get radiusY(): number {
		return this._radiusY;
	}
	set radiusY(value: number) {
		this._radiusY = value;
	}
	protected serializeOverride(): string {
		return "width: " + this.width + ", height: " + this.height + ", radiusX: " + this.radiusX + ", radiusY: " + this.radiusY;
	}
	protected get_type(): string {
		return "Rectangle";
	}
	get type(): string {
		return this.get_type();
	}
	scaleByViewport(viewport: RectData): void {
		super.scaleByViewport(viewport);
		this.width = this.width / viewport.width;
		this.height = this.height / viewport.height;
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current: List$1<PointData> = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		current.add(new PointData(this.appearance.canvasLeft, this.appearance.canvasTop));
		current.add(new PointData(this.appearance.canvasLeft + this.width, this.appearance.canvasTop));
		current.add(new PointData(this.appearance.canvasLeft + this.width, this.appearance.canvasTop + this.height));
		current.add(new PointData(this.appearance.canvasLeft, this.appearance.canvasTop + this.height));
	}
}


