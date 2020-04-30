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
export class PointTester extends Base {
	static $t: Type = markType(PointTester, 'PointTester');
	test(PX: number, PY: number, P1X: number, P1Y: number, P2X: number, P2Y: number, P3X: number, P3Y: number): boolean {
		let fabsy1y2: number = Math.abs(P1Y - P2Y);
		let fabsy2y3: number = Math.abs(P2Y - P3Y);
		let xc: number = 0;
		let yc: number = 0;
		if (fabsy1y2 == 0 && fabsy2y3 == 0) {
			return false;
		}
		if (fabsy1y2 == 0 && fabsy2y3 != 0) {
			xc = (P2X + P1X) / 2;
			yc = (-(P3X - P2X) / (P3Y - P2Y)) * (xc - ((P2X + P3X) / 2)) + ((P2Y + P3Y) / 2);
		}
		if (fabsy1y2 != 0 && fabsy2y3 == 0) {
			xc = (P3X + P2X) / 2;
			yc = (-(P2X - P1X) / (P2Y - P1Y)) * (xc - ((P1X + P2X) / 2)) + ((P1Y + P2Y) / 2);
		}
		if (fabsy1y2 != 0 && fabsy2y3 != 0) {
			let m1: number = -(P2X - P1X) / (P2Y - P1Y);
			let m2: number = -(P3X - P2X) / (P3Y - P2Y);
			let mx1: number = (P1X + P2X) / 2;
			let mx2: number = (P2X + P3X) / 2;
			let my1: number = (P1Y + P2Y) / 2;
			let my2: number = (P2Y + P3Y) / 2;
			xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
			yc = fabsy1y2 > fabsy2y3 ? m1 * (xc - mx1) + my1 : m2 * (xc - mx2) + my2;
		}
		let dx: number = P2X - xc;
		let dy: number = P2Y - yc;
		let rsqr: number = dx * dx + dy * dy;
		dx = PX - xc;
		dy = PY - yc;
		let drsqr: number = dx * dx + dy * dy;
		this.inside = drsqr <= rsqr;
		this.complete = xc < PX && ((PX - xc) * (PX - xc)) > rsqr;
		return true;
	}
	complete: boolean = false;
	inside: boolean = false;
}


