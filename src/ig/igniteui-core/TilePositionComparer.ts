/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEqualityComparer$1, IEqualityComparer$1_$type, Type, markType } from "./type";
import { Tile } from "./Tile";

/**
 * @hidden 
 */
export class TilePositionComparer extends Base implements IEqualityComparer$1<Tile> {
	static $t: Type = markType(TilePositionComparer, 'TilePositionComparer', (<any>Base).$type, [IEqualityComparer$1_$type.specialize((<any>Tile).$type)]);
	equalsC(x: Tile, y: Tile): boolean {
		return x.x == y.x && x.y == y.y && x.z == y.z;
	}
	getHashCodeC(obj: Tile): number {
		let hash: number = 23;
		hash = hash * 31 + obj.x;
		hash = hash * 31 + obj.y;
		hash = hash * 31 + obj.z;
		return hash;
	}
}


