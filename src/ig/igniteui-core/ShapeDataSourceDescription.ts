/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ShapeDataSourceDescription extends Description {
	static $t: Type = markType(ShapeDataSourceDescription, 'ShapeDataSourceDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ShapeDataSource";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _worldRect: RectDescription = null;
	get worldRect(): RectDescription {
		return this._worldRect;
	}
	set worldRect(value: RectDescription) {
		this._worldRect = value;
		this.markDirty("WorldRect");
	}
	private _shapefileSource: string = null;
	get shapefileSource(): string {
		return this._shapefileSource;
	}
	set shapefileSource(value: string) {
		this._shapefileSource = value;
		this.markDirty("ShapefileSource");
	}
	private _databaseSource: string = null;
	get databaseSource(): string {
		return this._databaseSource;
	}
	set databaseSource(value: string) {
		this._databaseSource = value;
		this.markDirty("DatabaseSource");
	}
	private _importCompleted: string = null;
	get importCompletedRef(): string {
		return this._importCompleted;
	}
	set importCompletedRef(value: string) {
		this._importCompleted = value;
		this.markDirty("ImportCompletedRef");
	}
	private _filter: string = null;
	get filterRef(): string {
		return this._filter;
	}
	set filterRef(value: string) {
		this._filter = value;
		this.markDirty("FilterRef");
	}
}


