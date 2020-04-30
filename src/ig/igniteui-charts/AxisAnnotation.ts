/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, typeCast, String_$type, Number_$type, markType } from "igniteui-core/type";
import { IAxisAnnotation, IAxisAnnotation_$type } from "./IAxisAnnotation";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class AxisAnnotation extends DependencyObject implements INotifyPropertyChanged, IAxisAnnotation {
	static $t: Type = markType(AxisAnnotation, 'AxisAnnotation', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type, IAxisAnnotation_$type]);
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _shouldResetExtent: boolean = false;
	protected get shouldResetExtent(): boolean {
		return this._shouldResetExtent;
	}
	protected set shouldResetExtent(value: boolean) {
		this._shouldResetExtent = value;
	}
	resetCachedExtent(): void {
		this.shouldResetExtent = true;
	}
	checkForExtentReset(act: () => void): void {
		if (this.shouldResetExtent) {
			this.shouldResetExtent = false;
			act();
		}
	}
	static readonly valuePropertyName: string = "Value";
	static readonly valueProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.valuePropertyName, (<any>Base).$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.valuePropertyName, e.oldValue, e.newValue)));
	get value(): any {
		return <any>this.getValue(AxisAnnotation.valueProperty);
	}
	set value(value: any) {
		this.setValue(AxisAnnotation.valueProperty, value);
	}
	static readonly textPropertyName: string = "Text";
	static readonly textProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.textPropertyName, String_$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.textPropertyName, e.oldValue, e.newValue)));
	get text(): string {
		return <string>this.getValue(AxisAnnotation.textProperty);
	}
	set text(value: string) {
		this.setValue(AxisAnnotation.textProperty, value);
	}
	private raisePropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		this.checkDirty = true;
	}
	resolveLabelValue(): string {
		if (this.text != null) {
			return this.text;
		}
		if (this.formatLabel != null) {
			return this.formatLabel(this.value);
		}
		if (this.value == null) {
			return null;
		}
		return this.value.toString();
	}
	private _formatLabel: (item: any) => string = null;
	get formatLabel(): (item: any) => string {
		return this._formatLabel;
	}
	set formatLabel(value: (item: any) => string) {
		this._formatLabel = value;
	}
	static readonly textColorPropertyName: string = "TextColor";
	static readonly textColorProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.textColorPropertyName, (<any>Brush).$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.textColorPropertyName, e.oldValue, e.newValue)));
	get textColor(): Brush {
		return <Brush>this.getValue(AxisAnnotation.textColorProperty);
	}
	set textColor(value: Brush) {
		this.setValue(AxisAnnotation.textColorProperty, value);
	}
	static readonly backgroundPropertyName: string = "Background";
	static readonly backgroundProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.backgroundPropertyName, (<any>Brush).$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.backgroundPropertyName, e.oldValue, e.newValue)));
	get background(): Brush {
		return <Brush>this.getValue(AxisAnnotation.backgroundProperty);
	}
	set background(value: Brush) {
		this.setValue(AxisAnnotation.backgroundProperty, value);
	}
	static readonly outlinePropertyName: string = "Outline";
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.outlinePropertyName, (<any>Brush).$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.outlinePropertyName, e.oldValue, e.newValue)));
	get outline(): Brush {
		return <Brush>this.getValue(AxisAnnotation.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(AxisAnnotation.outlineProperty, value);
	}
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	static readonly strokeThicknessProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.strokeThicknessPropertyName, Number_$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.strokeThicknessPropertyName, e.oldValue, e.newValue)));
	get strokeThickness(): number {
		return <number>this.getValue(AxisAnnotation.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(AxisAnnotation.strokeThicknessProperty, value);
	}
	private _checkDirty: boolean = false;
	get checkDirty(): boolean {
		return this._checkDirty;
	}
	set checkDirty(value: boolean) {
		this._checkDirty = value;
	}
	get backgroundPadding(): Thickness {
		return new Thickness(1, this.backgroundPaddingLeft, this.backgroundPaddingTop, this.backgroundPaddingRight, this.backgroundPaddingBottom);
	}
	set backgroundPadding(value: Thickness) {
		this.backgroundPaddingLeft = value.left;
		this.backgroundPaddingTop = value.top;
		this.backgroundPaddingRight = value.right;
		this.backgroundPaddingBottom = value.bottom;
	}
	static readonly backgroundPaddingLeftPropertyName: string = "BackgroundPaddingLeft";
	static readonly backgroundPaddingLeftProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.backgroundPaddingLeftPropertyName, Number_$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.backgroundPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingLeft(): number {
		return <number>this.getValue(AxisAnnotation.backgroundPaddingLeftProperty);
	}
	set backgroundPaddingLeft(value: number) {
		this.setValue(AxisAnnotation.backgroundPaddingLeftProperty, value);
	}
	static readonly backgroundPaddingTopPropertyName: string = "BackgroundPaddingTop";
	static readonly backgroundPaddingTopProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.backgroundPaddingTopPropertyName, Number_$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.backgroundPaddingTopPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingTop(): number {
		return <number>this.getValue(AxisAnnotation.backgroundPaddingTopProperty);
	}
	set backgroundPaddingTop(value: number) {
		this.setValue(AxisAnnotation.backgroundPaddingTopProperty, value);
	}
	static readonly backgroundPaddingRightPropertyName: string = "BackgroundPaddingRight";
	static readonly backgroundPaddingRightProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.backgroundPaddingRightPropertyName, Number_$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.backgroundPaddingRightPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingRight(): number {
		return <number>this.getValue(AxisAnnotation.backgroundPaddingRightProperty);
	}
	set backgroundPaddingRight(value: number) {
		this.setValue(AxisAnnotation.backgroundPaddingRightProperty, value);
	}
	static readonly backgroundPaddingBottomPropertyName: string = "BackgroundPaddingBottom";
	static readonly backgroundPaddingBottomProperty: DependencyProperty = DependencyProperty.register(AxisAnnotation.backgroundPaddingBottomPropertyName, Number_$type, (<any>AxisAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<AxisAnnotation>((<any>AxisAnnotation).$type, sender)).raisePropertyChanged(AxisAnnotation.backgroundPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingBottom(): number {
		return <number>this.getValue(AxisAnnotation.backgroundPaddingBottomProperty);
	}
	set backgroundPaddingBottom(value: number) {
		this.setValue(AxisAnnotation.backgroundPaddingBottomProperty, value);
	}
}


