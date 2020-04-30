/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PolylineBuilder } from "./PolylineBuilder";
import { IList$1, IList$1_$type, Base, Number_$type, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";

/**
 * @hidden 
 */
export class ContourBuilder extends PolylineBuilder {
	static $t: Type = markType(ContourBuilder, 'ContourBuilder', (<any>PolylineBuilder).$type);
	clear(): void {
		super.clear();
		this.dictionary.clear();
		this._x.clear();
		this._y.clear();
	}
	get x(): IList$1<number> {
		return this._x;
	}
	get y(): IList$1<number> {
		return this._y;
	}
	private static readonly hASH_CONSTANT: number = 4294967296;
	point(b: number, xb: number, yb: number, zb: number, e: number, xe: number, ye: number, ze: number, z: number): number {
		let hash: number = Math.min(b, e) + ContourBuilder.hASH_CONSTANT * Math.max(b, e);
		let index: number = -1;
		if (!((() => { let $ret = this.dictionary.tryGetValue(hash, index); index = $ret.p1; return $ret.ret; })())) {
			index = this._x.count;
			let p: number = (z - zb) / (ze - zb);
			this.dictionary.addItem(hash, index);
			this._x.add(<number>(xb + p * (xe - xb)));
			this._y.add(<number>(yb + p * (ye - yb)));
		}
		return index;
	}
	private dictionary: Dictionary$2<number, number> = new Dictionary$2<number, number>(Number_$type, Number_$type, 0);
	private _x: List$1<number> = new List$1<number>(Number_$type, 0);
	private _y: List$1<number> = new List$1<number>(Number_$type, 0);
}


