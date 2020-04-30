/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class QuadTreeBoundingBox extends Base {
	static $t: Type = markType(QuadTreeBoundingBox, 'QuadTreeBoundingBox');
	constructor() {
		super();
	}
	centerX: number = 0;
	centerY: number = 0;
	halfWidth: number = 0;
	halfHeight: number = 0;
	intersect(other: QuadTreeBoundingBox): boolean {
		if (this.centerX + this.halfWidth < other.centerX - other.halfWidth || this.centerY + this.halfHeight < other.centerY - other.halfHeight || this.centerX - this.halfWidth > other.centerX + other.halfWidth || this.centerY - this.halfHeight > other.centerY + other.halfHeight) {
			return false;
		}
		return true;
	}
	data: any = null;
	insersectionArea(testBox: QuadTreeBoundingBox): number {
		let sLeft = this.centerX - this.halfWidth;
		let sTop = this.centerY - this.halfHeight;
		let sRight = this.centerX + this.halfWidth;
		let sBottom = this.centerY + this.halfHeight;
		let tLeft = testBox.centerX - testBox.halfWidth;
		let tTop = testBox.centerY - testBox.halfHeight;
		let tRight = testBox.centerX + testBox.halfWidth;
		let tBottom = testBox.centerY + testBox.halfHeight;
		let iLeft = Math.max(sLeft, tLeft);
		let iRight = Math.min(sRight, tRight);
		let iTop = Math.max(sTop, tTop);
		let iBottom = Math.min(sBottom, tBottom);
		return (iRight - iLeft) * (iBottom - iTop);
	}
}


