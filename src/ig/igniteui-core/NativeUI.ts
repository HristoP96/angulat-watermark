/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { UIElementPropertyId } from "./UIElementPropertyId";
import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { UIElementPropertyAccessorFactory } from "./UIElementPropertyAccessorFactory";
import { Brush } from "./Brush";
import { Thickness } from "./Thickness";
import { CornerRadius } from "./CornerRadius";
import { Transform } from "./Transform";
import { Matrix } from "./Matrix";
import { MatrixTransform } from "./MatrixTransform";
import { TransformMatrixHelpler } from "./TransformMatrixHelpler";

/**
 * @hidden 
 */
export class NativeUI extends Base {
	static $t: Type = markType(NativeUI, 'NativeUI');
	static setValue(id: UIElementPropertyId, target: any, value: any): void {
		let acc = UIElementPropertyAccessorFactory.instance.getPropertyAccessor(id);
		acc.setValue(target, value);
	}
	static getValue(id: UIElementPropertyId, target: any): any {
		let acc = UIElementPropertyAccessorFactory.instance.getPropertyAccessor(id);
		return acc.getValue(target);
	}
	static setOpacity(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.Opacity, target, value);
	}
	static getOpacity(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.Opacity, target);
	}
	static setBackgroundColor(target: any, value: Brush): void {
		NativeUI.setValue(UIElementPropertyId.BackgroundColor, target, value);
	}
	static getBackgroundColor(target: any): Brush {
		return <Brush>NativeUI.getValue(UIElementPropertyId.BackgroundColor, target);
	}
	static setBorderColor(target: any, value: Brush): void {
		NativeUI.setValue(UIElementPropertyId.BorderColor, target, value);
	}
	static getBorderColor(target: any): Brush {
		return <Brush>NativeUI.getValue(UIElementPropertyId.BorderColor, target);
	}
	static setBorderWidth(target: any, value: Thickness): void {
		NativeUI.setValue(UIElementPropertyId.BorderWidth, target, value);
	}
	static getBorderWidth(target: any): Thickness {
		return <Thickness>NativeUI.getValue(UIElementPropertyId.BorderWidth, target);
	}
	static setBorderRadius(target: any, value: CornerRadius): void {
		NativeUI.setValue(UIElementPropertyId.BorderRadius, target, value);
	}
	static getBorderRadius(target: any): CornerRadius {
		return <CornerRadius>NativeUI.getValue(UIElementPropertyId.BorderRadius, target);
	}
	static setColor(target: any, value: Brush): void {
		NativeUI.setValue(UIElementPropertyId.Color, target, value);
	}
	static getColor(target: any): Brush {
		return <Brush>NativeUI.getValue(UIElementPropertyId.Color, target);
	}
	static setFontSize(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.FontSize, target, value);
	}
	static getFontSize(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.FontSize, target);
	}
	static setWidth(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.Width, target, value);
	}
	static getWidth(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.Width, target);
	}
	static setHeight(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.Height, target, value);
	}
	static getHeight(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.Height, target);
	}
	static setLeft(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.Left, target, value);
	}
	static getLeft(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.Left, target);
	}
	static setMargin(target: any, value: Thickness): void {
		NativeUI.setValue(UIElementPropertyId.Margin, target, value);
	}
	static getMargin(target: any): Thickness {
		return <Thickness>NativeUI.getValue(UIElementPropertyId.Margin, target);
	}
	static setTransform(target: any, value: Transform): void {
		let m = TransformMatrixHelpler.coerceToMatrix(value);
		let mt = new MatrixTransform();
		mt.matrix = m;
		NativeUI.setValue(UIElementPropertyId.Transform, target, mt);
	}
	static getTransform(target: any): Transform {
		return <Transform>NativeUI.getValue(UIElementPropertyId.Transform, target);
	}
	static setStroke(target: any, value: Brush): void {
		NativeUI.setValue(UIElementPropertyId.Stroke, target, value);
	}
	static setFill(target: any, value: Brush): void {
		NativeUI.setValue(UIElementPropertyId.Fill, target, value);
	}
	static getStroke(target: any): Brush {
		return <Brush>NativeUI.getValue(UIElementPropertyId.Stroke, target);
	}
	static setStrokeWidth(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.StrokeWidth, target, value);
	}
	static getStrokeWidth(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.StrokeWidth, target);
	}
	static setStrokeDashArray(target: any, value: number[]): void {
		NativeUI.setValue(UIElementPropertyId.StrokeDashArray, target, value);
	}
	static getStrokeDashArray(target: any): number[] {
		return <number[]>NativeUI.getValue(UIElementPropertyId.StrokeDashArray, target);
	}
	static setStrokeOffset(target: any, value: number): void {
		NativeUI.setValue(UIElementPropertyId.StrokeDashOffset, target, value);
	}
	static getStrokeOffset(target: any): number {
		return <number>NativeUI.getValue(UIElementPropertyId.StrokeDashOffset, target);
	}
}


