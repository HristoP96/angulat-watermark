/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, typeCast, fromEnum, Type, markType } from "./type";
import { PathGeometry } from "./PathGeometry";
import { List$1 } from "./List$1";
import { PathFigure } from "./PathFigure";
import { GeometryGroup } from "./GeometryGroup";
import { Geometry } from "./Geometry";
import { FrameworkElement } from "./FrameworkElement";
import { Panel } from "./Panel";
import { ContentControl } from "./ContentControl";
import { UIElement } from "./UIElement";
import { Rect } from "./Rect";
import { isNaN_, isInfinity } from "./number";

/**
 * @hidden 
 */
export class Extensions extends Base {
	static $t: Type = markType(Extensions, 'Extensions');
	static reset1(geom: PathGeometry): void {
		geom.figures.clear();
		geom.figures.add(new PathFigure());
		geom.figures.removeAt(0);
	}
	static reset(geom: GeometryGroup): void {
		geom.children.clear();
		geom.children.add(new PathGeometry());
		geom.children.removeAt(0);
	}
	static detach(child: FrameworkElement): void {
		if (child == null) {
			return;
		}
		let parent: Panel = typeCast<Panel>((<any>Panel).$type, child.parent);
		if (parent != null) {
			parent.children.remove(child);
			return;
		}
		let cont = typeCast<ContentControl>((<any>ContentControl).$type, child.parent);
		if (cont != null) {
			cont.content = null;
			return;
		}
	}
	static transferChildrenTo(from: Panel, to: Panel): void {
		let transfer: List$1<UIElement> = new List$1<UIElement>((<any>UIElement).$type, 0);
		for (let child of fromEnum<UIElement>(from.children)) {
			if (typeCast<UIElement>((<any>UIElement).$type, child) !== null) {
				transfer.add(<UIElement>child);
			}
		}
		for (let child1 of fromEnum<UIElement>(transfer)) {
			from.children.remove(child1);
			to.children.add(child1);
		}
	}
	static isPlottable(point: Point): boolean {
		return !isNaN_(point.x) && !isNaN_(point.y) && !isInfinity(point.x) && !isInfinity(point.y);
	}
	static isPlottable1(rect: Rect): boolean {
		return !isNaN_(rect.left) && !isNaN_(rect.right) && !isNaN_(rect.top) && !isNaN_(rect.bottom) && !isInfinity(rect.left) && !isInfinity(rect.right) && !isInfinity(rect.top) && !isInfinity(rect.bottom);
	}
}


