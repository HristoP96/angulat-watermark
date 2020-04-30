/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesDescription } from "./SeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class ScatterTriangulationSeriesDescription extends SeriesDescription {
	static $t: Type = markType(ScatterTriangulationSeriesDescription, 'ScatterTriangulationSeriesDescription', (<any>SeriesDescription).$type);
	protected get_type(): string {
		return "ScatterTriangulationSeries";
	}
	constructor() {
		super();
	}
	private _xMemberPath: string = null;
	get xMemberPath(): string {
		return this._xMemberPath;
	}
	set xMemberPath(value: string) {
		this._xMemberPath = value;
		this.markDirty("XMemberPath");
	}
	private _yMemberPath: string = null;
	get yMemberPath(): string {
		return this._yMemberPath;
	}
	set yMemberPath(value: string) {
		this._yMemberPath = value;
		this.markDirty("YMemberPath");
	}
	private _xAxisRef: string = null;
	get xAxisRef(): string {
		return this._xAxisRef;
	}
	set xAxisRef(value: string) {
		this._xAxisRef = value;
		this.markDirty("XAxisRef");
	}
	private _yAxisRef: string = null;
	get yAxisRef(): string {
		return this._yAxisRef;
	}
	set yAxisRef(value: string) {
		this._yAxisRef = value;
		this.markDirty("YAxisRef");
	}
	private _trianglesSourceRef: string = null;
	get trianglesSourceRef(): string {
		return this._trianglesSourceRef;
	}
	set trianglesSourceRef(value: string) {
		this._trianglesSourceRef = value;
		this.markDirty("TrianglesSourceRef");
	}
	private _triangleVertexMemberPath1: string = null;
	get triangleVertexMemberPath1(): string {
		return this._triangleVertexMemberPath1;
	}
	set triangleVertexMemberPath1(value: string) {
		this._triangleVertexMemberPath1 = value;
		this.markDirty("TriangleVertexMemberPath1");
	}
	private _triangleVertexMemberPath2: string = null;
	get triangleVertexMemberPath2(): string {
		return this._triangleVertexMemberPath2;
	}
	set triangleVertexMemberPath2(value: string) {
		this._triangleVertexMemberPath2 = value;
		this.markDirty("TriangleVertexMemberPath2");
	}
	private _triangleVertexMemberPath3: string = null;
	get triangleVertexMemberPath3(): string {
		return this._triangleVertexMemberPath3;
	}
	set triangleVertexMemberPath3(value: string) {
		this._triangleVertexMemberPath3 = value;
		this.markDirty("TriangleVertexMemberPath3");
	}
	private _triangulationStatusChanged: string = null;
	get triangulationStatusChangedRef(): string {
		return this._triangulationStatusChanged;
	}
	set triangulationStatusChangedRef(value: string) {
		this._triangulationStatusChanged = value;
		this.markDirty("TriangulationStatusChangedRef");
	}
}


