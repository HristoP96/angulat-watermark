/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class StyleShapeEventArgsDescription extends Description {
	static $t: Type = markType(StyleShapeEventArgsDescription, 'StyleShapeEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "StyleShapeEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _itemRef: string = null;
	get itemRef(): string {
		return this._itemRef;
	}
	set itemRef(value: string) {
		this._itemRef = value;
		this.markDirty("ItemRef");
	}
	private _shapeFill: string = null;
	get shapeFill(): string {
		return this._shapeFill;
	}
	set shapeFill(value: string) {
		this._shapeFill = value;
		this.markDirty("ShapeFill");
	}
	private _shapeStroke: string = null;
	get shapeStroke(): string {
		return this._shapeStroke;
	}
	set shapeStroke(value: string) {
		this._shapeStroke = value;
		this.markDirty("ShapeStroke");
	}
	private _shapeStrokeThickness: number = 0;
	get shapeStrokeThickness(): number {
		return this._shapeStrokeThickness;
	}
	set shapeStrokeThickness(value: number) {
		this._shapeStrokeThickness = value;
		this.markDirty("ShapeStrokeThickness");
	}
	private _shapeOpacity: number = 0;
	get shapeOpacity(): number {
		return this._shapeOpacity;
	}
	set shapeOpacity(value: number) {
		this._shapeOpacity = value;
		this.markDirty("ShapeOpacity");
	}
}


