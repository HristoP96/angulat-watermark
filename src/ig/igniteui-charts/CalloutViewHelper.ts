/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { Thickness } from "igniteui-core/Thickness";
import { Line } from "igniteui-core/Line";
import { isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CalloutViewHelper extends Base {
	static $t: Type = markType(CalloutViewHelper, 'CalloutViewHelper');
	static intersectSegment(rx1: number, ry1: number, rx2: number, ry2: number, sx1: number, sy1: number, sx2: number, sy2: number): number {
		let dist: number = Math.sqrt((rx2 - rx1) * (rx2 - rx1) + (ry2 - ry1) * (ry2 - ry1));
		let dx: number = (rx2 - rx1) / dist;
		let dy: number = (ry2 - ry1) / dist;
		let v1x: number = rx1 - sx1;
		let v1y: number = ry1 - sy1;
		let v2x: number = sx2 - sx1;
		let v2y: number = sy2 - sy1;
		let v3x: number = -dy;
		let v3y: number = dx;
		let dot: number = v2x * v3x + v2y * v3y;
		let cross: number = v2x * v1y - v2y * v1x;
		let dotv1v3: number = v1x * v3x + v1y * v3y;
		let t1: number = cross / dot;
		let t2: number = dotv1v3 / dot;
		if (t1 >= 0 && t2 >= 0 && t2 <= 1) {
			return t1;
		}
		return Number.POSITIVE_INFINITY;
	}
	static updateLeader(targetPoint: Point, textWidth: number, textHeight: number, line: Line): Thickness {
		let x = targetPoint.x;
		let y = targetPoint.y;
		let leftMargin = 0;
		let topMargin = 0;
		let rightMargin = 0;
		let bottomMargin = 0;
		let labelX = 0;
		let labelY = 0;
		if (x < 0) {
			leftMargin = -x;
			labelX = leftMargin;
			x = 0;
		}
		if (y < 0) {
			topMargin = -y;
			labelY = topMargin;
			y = 0;
		}
		if (x > textWidth) {
			rightMargin = x - textWidth;
		}
		if (y > textHeight) {
			bottomMargin = y - textHeight;
		}
		let margin = new Thickness(1, leftMargin, topMargin, rightMargin, bottomMargin);
		let t1 = CalloutViewHelper.intersectSegment(x, y, labelX + textWidth / 2, labelY + textHeight / 2, labelX, labelY, labelX, labelY + textHeight);
		let t2 = CalloutViewHelper.intersectSegment(x, y, labelX + textWidth / 2, labelY + textHeight / 2, labelX, labelY, labelX + textWidth, labelY);
		let t3 = CalloutViewHelper.intersectSegment(x, y, labelX + textWidth / 2, labelY + textHeight / 2, labelX, labelY + textHeight, labelX + textWidth, labelY + textHeight);
		let t4 = CalloutViewHelper.intersectSegment(x, y, labelX + textWidth / 2, labelY + textHeight / 2, labelX + textWidth, labelY, labelX + textWidth, labelY + textHeight);
		let minT = Math.min(t1, Math.min(t2, Math.min(t3, t4)));
		let interX: number = 0;
		let interY: number = 0;
		if (isInfinity(minT)) {
			interX = x;
			interY = y;
		} else {
			let rx2: number = labelX + textWidth / 2;
			let ry2: number = labelY + textHeight / 2;
			let rx1: number = x;
			let ry1: number = y;
			let dist: number = Math.sqrt((rx2 - rx1) * (rx2 - rx1) + (ry2 - ry1) * (ry2 - ry1));
			let dx: number = (rx2 - rx1) / dist;
			let dy: number = (ry2 - ry1) / dist;
			interX = rx1 + dx * minT;
			interY = ry1 + dy * minT;
		}
		line.x1 = x;
		line.y1 = y;
		line.x2 = interX;
		line.y2 = interY;
		return margin;
	}
}


