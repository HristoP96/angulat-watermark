/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapSeriesHostDescription } from "./GeographicMapSeriesHostDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class GeographicXYTriangulatingSeriesDescription extends GeographicMapSeriesHostDescription {
	static $t: Type = markType(GeographicXYTriangulatingSeriesDescription, 'GeographicXYTriangulatingSeriesDescription', (<any>GeographicMapSeriesHostDescription).$type);
	protected get_type(): string {
		return "GeographicXYTriangulatingSeries";
	}
	constructor() {
		super();
	}
	private _longitudeMemberPath: string = null;
	get longitudeMemberPath(): string {
		return this._longitudeMemberPath;
	}
	set longitudeMemberPath(value: string) {
		this._longitudeMemberPath = value;
		this.markDirty("LongitudeMemberPath");
	}
	private _latitudeMemberPath: string = null;
	get latitudeMemberPath(): string {
		return this._latitudeMemberPath;
	}
	set latitudeMemberPath(value: string) {
		this._latitudeMemberPath = value;
		this.markDirty("LatitudeMemberPath");
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
}


