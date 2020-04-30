/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, typeCast, Point_$type, Type, markType, PointUtil } from "./type";
import { Matrix } from "./Matrix";
import { ScaleTransform } from "./ScaleTransform";
import { RotateTransform } from "./RotateTransform";
import { TranslateTransform } from "./TranslateTransform";
import { TransformGroup } from "./TransformGroup";
import { MatrixTransform } from "./MatrixTransform";
import { List$1 } from "./List$1";
import { Transform } from "./Transform";

/**
 * @hidden 
 */
export class TransformMatrixHelpler extends Base {
	static $t: Type = markType(TransformMatrixHelpler, 'TransformMatrixHelpler');
	static coerceToMatrix(value: any): Matrix {
		if (typeCast<MatrixTransform>((<any>MatrixTransform).$type, value) !== null) {
			return (<MatrixTransform>value).matrix;
		}
		if (typeCast<ScaleTransform>((<any>ScaleTransform).$type, value) !== null) {
			let s = <ScaleTransform>value;
			return TransformMatrixHelpler.getAffineTransformation(0, s.scaleX, s.scaleY, <Point>{ $type: Point_$type, x: 0, y: 0 });
		}
		if (typeCast<RotateTransform>((<any>RotateTransform).$type, value) !== null) {
			let r = <RotateTransform>value;
			return TransformMatrixHelpler.getAffineTransformation(r.angle, 1, 1, <Point>{ $type: Point_$type, x: 0, y: 0 });
		}
		if (typeCast<TranslateTransform>((<any>TranslateTransform).$type, value) !== null) {
			let t = <TranslateTransform>value;
			return TransformMatrixHelpler.getAffineTransformation(0, 1, 1, <Point>{ $type: Point_$type, x: t.x, y: t.y });
		}
		if (typeCast<TransformGroup>((<any>TransformGroup).$type, value) !== null) {
			let g = <TransformGroup>value;
			let m = TransformMatrixHelpler.coerceToMatrix(g.children._inner[g.children.count - 1]);
			for (let i = g.children.count - 2; i >= 0; i++) {
				let sm = TransformMatrixHelpler.coerceToMatrix(g.children._inner[i]);
				m = TransformMatrixHelpler.affineMultiply(m, sm);
			}
			return m;
		}
		return <Matrix>value;
	}
	static affineExtractRotation(m: Matrix): number {
		return Math.atan2(m.m12, m.m11) * 180 / Math.PI;
	}
	static affineExtractScaleX(m: Matrix): number {
		let sx = Math.sqrt((m.m11 * m.m11) + (m.m12 * m.m12));
		return sx;
	}
	static affineExtractScaleY(m: Matrix): number {
		let sy = Math.sqrt((m.m21 * m.m21) + (m.m22 * m.m22));
		return sy;
	}
	static affineExtractTranslation(m: Matrix): Point {
		return <Point>{ $type: Point_$type, x: m.offsetX, y: m.offsetY };
	}
	static affineMultiply(m1: Matrix, m2: Matrix): Matrix {
		let res: Matrix = new Matrix();
		res.m11 = m1.m11 * m2.m11 + m1.m12 * m2.m21;
		res.m12 = m1.m11 * m2.m12 + m1.m12 * m2.m22;
		res.offsetX = m1.m11 * m2.offsetX + m1.m12 * m2.offsetY;
		res.m21 = m1.m21 * m2.m11 + m1.m22 * m2.m21;
		res.m22 = m1.m21 * m2.m12 + m1.m22 * m2.m22;
		res.offsetY = m1.m21 * m2.offsetX + m1.m22 * m2.offsetY;
		return res;
	}
	static affineInterpolate(p: number, m1: Matrix, m2: Matrix): Matrix {
		let m1Angle = TransformMatrixHelpler.affineExtractRotation(m1);
		let m2Angle = TransformMatrixHelpler.affineExtractRotation(m2);
		let m1ScaleX = TransformMatrixHelpler.affineExtractScaleX(m1);
		let m2ScaleX = TransformMatrixHelpler.affineExtractScaleX(m2);
		let m1ScaleY = TransformMatrixHelpler.affineExtractScaleY(m1);
		let m2ScaleY = TransformMatrixHelpler.affineExtractScaleY(m2);
		let m1Translation = TransformMatrixHelpler.affineExtractTranslation(m1);
		let m2Translation = TransformMatrixHelpler.affineExtractTranslation(m2);
		let tAngle = m1Angle + (m2Angle - m1Angle) * p;
		let tScaleX = m1ScaleX + (m2ScaleX - m1ScaleX) * p;
		let tScaleY = m1ScaleY + (m2ScaleY - m1ScaleY) * p;
		let tTranslation = <Point>{ $type: Point_$type, x: m1Translation.x + (m2Translation.x - m1Translation.x) * p, y: m1Translation.y + (m2Translation.y - m1Translation.y) * p };
		return TransformMatrixHelpler.getAffineTransformation(tAngle, tScaleX, tScaleY, tTranslation);
	}
	static getAffineTransformation(angle: number, scaleX: number, scaleY: number, translation: Point): Matrix {
		angle = angle % 360;
		let rad = angle * Math.PI / 180;
		let mat = new Matrix();
		let cosRad = Math.cos(rad);
		let sinRad = Math.sin(rad);
		mat.m11 = scaleX * cosRad;
		mat.m12 = scaleX * sinRad;
		mat.m21 = -scaleY * sinRad;
		mat.m22 = scaleY * cosRad;
		mat.offsetX = translation.x;
		mat.offsetY = translation.y;
		return mat;
	}
}


