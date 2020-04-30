/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IDetectsCollisions, IDetectsCollisions_$type } from "./IDetectsCollisions";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class CollisionAvoider extends Base implements IDetectsCollisions {
	static $t: Type = markType(CollisionAvoider, 'CollisionAvoider', (<any>Base).$type, [IDetectsCollisions_$type]);
	constructor() {
		super();
	}
	tryAdd(rc: Rect): boolean {
		for (let i: number = this.rects.count - 1; i >= 0; --i) {
			if (rc.left > this.rects._inner[i].right) {
				break;
			}
			if (this.rects._inner[i].intersectsWith(rc)) {
				return false;
			}
		}
		if (this.rects.count == 0 || rc.right >= this.rects._inner[this.rects.count - 1].right) {
			this.rects.add(rc);
		} else {
			this.rects.add(rc);
			this.rects.sort2((a: Rect, b: Rect) => <number>Math.sign(a.right - b.right));
		}
		return true;
	}
	clear(): void {
		this.rects.clear();
	}
	private rects: List$1<Rect> = new List$1<Rect>((<any>Rect).$type, 0);
}


