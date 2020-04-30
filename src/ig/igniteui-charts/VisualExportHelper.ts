/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, typeCast, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { TextBlock } from "igniteui-core/TextBlock";
import { Transform } from "igniteui-core/Transform";
import { RotateTransform } from "igniteui-core/RotateTransform";
import { TransformGroup } from "igniteui-core/TransformGroup";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { UIElement } from "igniteui-core/UIElement";
import { List$1 } from "igniteui-core/List$1";
import { RectUtil } from "igniteui-core/RectUtil";

/**
 * @hidden 
 */
export class VisualExportHelper extends Base {
	static $t: Type = markType(VisualExportHelper, 'VisualExportHelper');
	static getRotatedBounds(textBlock: TextBlock): Rect {
		let location = <Point>{ $type: Point_$type, x: textBlock.canvasLeft, y: textBlock.canvasTop };
		let bounds = new Rect(0, location.x, location.y, textBlock.actualWidth, textBlock.actualHeight);
		let transform = textBlock.renderTransform;
		if (transform == null) {
			return bounds;
		}
		let angle = 0;
		let x = 0;
		let y = 0;
		let rotTransform: RotateTransform = null;
		if (typeCast<RotateTransform>((<any>RotateTransform).$type, transform) !== null) {
			rotTransform = typeCast<RotateTransform>((<any>RotateTransform).$type, transform);
			angle = rotTransform.angle;
		} else if (typeCast<TransformGroup>((<any>TransformGroup).$type, transform) !== null) {
			let tg = typeCast<TransformGroup>((<any>TransformGroup).$type, transform);
			for (let child of fromEnum<Transform>(tg.children)) {
				if (typeCast<RotateTransform>((<any>RotateTransform).$type, child) !== null) {
					rotTransform = typeCast<RotateTransform>((<any>RotateTransform).$type, child);
					angle = rotTransform.angle;
				}
				if (typeCast<TranslateTransform>((<any>TranslateTransform).$type, child) !== null) {
					let tt = typeCast<TranslateTransform>((<any>TranslateTransform).$type, child);
					x = tt.x;
					y = tt.y;
				}
			}
		}
		if (rotTransform != null) {
			bounds = RectUtil.rotateAboutPoint(bounds, rotTransform.centerX, rotTransform.centerY, angle);
		}
		bounds.x = bounds.x + x;
		bounds.y = bounds.y + y;
		return bounds;
	}
}


