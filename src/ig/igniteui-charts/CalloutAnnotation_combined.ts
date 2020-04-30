/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, typeCast, String_$type, Number_$type, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { Series } from "./Series";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { LabelCollisionInfo } from "igniteui-core/LabelCollisionInfo";

/**
 * @hidden 
 */
export class CalloutAnnotation extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(CalloutAnnotation, 'CalloutAnnotation', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _wrapper: CalloutAnnotationWrapper = null;
	get wrapper(): CalloutAnnotationWrapper {
		return this._wrapper;
	}
	set wrapper(value: CalloutAnnotationWrapper) {
		this._wrapper = value;
	}
	static readonly xValuePropertyName: string = "XValue";
	static readonly xValueProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.xValuePropertyName, (<any>Base).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.xValuePropertyName, e.oldValue, e.newValue)));
	get xValue(): any {
		return <any>this.getValue(CalloutAnnotation.xValueProperty);
	}
	set xValue(value: any) {
		this.setValue(CalloutAnnotation.xValueProperty, value);
	}
	static readonly yValuePropertyName: string = "YValue";
	static readonly yValueProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.yValuePropertyName, (<any>Base).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.yValuePropertyName, e.oldValue, e.newValue)));
	get yValue(): any {
		return <any>this.getValue(CalloutAnnotation.yValueProperty);
	}
	set yValue(value: any) {
		this.setValue(CalloutAnnotation.yValueProperty, value);
	}
	static readonly textPropertyName: string = "Text";
	static readonly textProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.textPropertyName, String_$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.textPropertyName, e.oldValue, e.newValue)));
	get text(): string {
		return <string>this.getValue(CalloutAnnotation.textProperty);
	}
	set text(value: string) {
		this.setValue(CalloutAnnotation.textProperty, value);
	}
	static readonly keyPropertyName: string = "Key";
	static readonly keyProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.keyPropertyName, (<any>Base).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.keyPropertyName, e.oldValue, e.newValue)));
	get key(): any {
		return <any>this.getValue(CalloutAnnotation.keyProperty);
	}
	set key(value: any) {
		this.setValue(CalloutAnnotation.keyProperty, value);
	}
	static readonly contentPropertyName: string = "Content";
	static readonly contentProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.contentPropertyName, (<any>Base).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.contentPropertyName, e.oldValue, e.newValue)));
	get content(): any {
		return <any>this.getValue(CalloutAnnotation.contentProperty);
	}
	set content(value: any) {
		this.setValue(CalloutAnnotation.contentProperty, value);
	}
	static readonly seriesPropertyName: string = "Series";
	static readonly seriesProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.seriesPropertyName, (<any>Series).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.seriesPropertyName, e.oldValue, e.newValue)));
	get series(): Series {
		return <Series>this.getValue(CalloutAnnotation.seriesProperty);
	}
	set series(value: Series) {
		this.setValue(CalloutAnnotation.seriesProperty, value);
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
	private _formatLabel: (item: any) => string = null;
	get formatLabel(): (item: any) => string {
		return this._formatLabel;
	}
	set formatLabel(value: (item: any) => string) {
		this._formatLabel = value;
	}
	static readonly textColorPropertyName: string = "TextColor";
	static readonly textColorProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.textColorPropertyName, (<any>Brush).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.textColorPropertyName, e.oldValue, e.newValue)));
	get textColor(): Brush {
		return <Brush>this.getValue(CalloutAnnotation.textColorProperty);
	}
	set textColor(value: Brush) {
		this.setValue(CalloutAnnotation.textColorProperty, value);
	}
	static readonly backgroundPropertyName: string = "Background";
	static readonly backgroundProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.backgroundPropertyName, (<any>Brush).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.backgroundPropertyName, e.oldValue, e.newValue)));
	get background(): Brush {
		return <Brush>this.getValue(CalloutAnnotation.backgroundProperty);
	}
	set background(value: Brush) {
		this.setValue(CalloutAnnotation.backgroundProperty, value);
	}
	static readonly outlinePropertyName: string = "Outline";
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.outlinePropertyName, (<any>Brush).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.outlinePropertyName, e.oldValue, e.newValue)));
	get outline(): Brush {
		return <Brush>this.getValue(CalloutAnnotation.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(CalloutAnnotation.outlineProperty, value);
	}
	static readonly leaderBrushPropertyName: string = "LeaderBrush";
	static readonly leaderBrushProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.leaderBrushPropertyName, (<any>Brush).$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.leaderBrushPropertyName, e.oldValue, e.newValue)));
	get leaderBrush(): Brush {
		return <Brush>this.getValue(CalloutAnnotation.leaderBrushProperty);
	}
	set leaderBrush(value: Brush) {
		this.setValue(CalloutAnnotation.leaderBrushProperty, value);
	}
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	static readonly strokeThicknessProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.strokeThicknessPropertyName, Number_$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.strokeThicknessPropertyName, e.oldValue, e.newValue)));
	get strokeThickness(): number {
		return <number>this.getValue(CalloutAnnotation.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(CalloutAnnotation.strokeThicknessProperty, value);
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
	static readonly backgroundPaddingLeftProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.backgroundPaddingLeftPropertyName, Number_$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.backgroundPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingLeft(): number {
		return <number>this.getValue(CalloutAnnotation.backgroundPaddingLeftProperty);
	}
	set backgroundPaddingLeft(value: number) {
		this.setValue(CalloutAnnotation.backgroundPaddingLeftProperty, value);
	}
	static readonly backgroundPaddingTopPropertyName: string = "BackgroundPaddingTop";
	static readonly backgroundPaddingTopProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.backgroundPaddingTopPropertyName, Number_$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.backgroundPaddingTopPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingTop(): number {
		return <number>this.getValue(CalloutAnnotation.backgroundPaddingTopProperty);
	}
	set backgroundPaddingTop(value: number) {
		this.setValue(CalloutAnnotation.backgroundPaddingTopProperty, value);
	}
	static readonly backgroundPaddingRightPropertyName: string = "BackgroundPaddingRight";
	static readonly backgroundPaddingRightProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.backgroundPaddingRightPropertyName, Number_$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.backgroundPaddingRightPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingRight(): number {
		return <number>this.getValue(CalloutAnnotation.backgroundPaddingRightProperty);
	}
	set backgroundPaddingRight(value: number) {
		this.setValue(CalloutAnnotation.backgroundPaddingRightProperty, value);
	}
	static readonly backgroundPaddingBottomPropertyName: string = "BackgroundPaddingBottom";
	static readonly backgroundPaddingBottomProperty: DependencyProperty = DependencyProperty.register(CalloutAnnotation.backgroundPaddingBottomPropertyName, Number_$type, (<any>CalloutAnnotation).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutAnnotation>((<any>CalloutAnnotation).$type, sender)).raisePropertyChanged(CalloutAnnotation.backgroundPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get backgroundPaddingBottom(): number {
		return <number>this.getValue(CalloutAnnotation.backgroundPaddingBottomProperty);
	}
	set backgroundPaddingBottom(value: number) {
		this.setValue(CalloutAnnotation.backgroundPaddingBottomProperty, value);
	}
}

/**
 * @hidden 
 */
export class CalloutAnnotationWrapper extends Base {
	static $t: Type = markType(CalloutAnnotationWrapper, 'CalloutAnnotationWrapper');
	private _callout: CalloutAnnotation = null;
	get callout(): CalloutAnnotation {
		return this._callout;
	}
	set callout(value: CalloutAnnotation) {
		this._callout = value;
		this._callout.wrapper = this;
	}
	private _label: LabelCollisionInfo = null;
	get label(): LabelCollisionInfo {
		return this._label;
	}
	set label(value: LabelCollisionInfo) {
		this._label = value;
	}
	equals(obj: any): boolean {
		let other = typeCast<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, obj);
		if (other == null) {
			return super.equals(obj);
		}
		if (other.callout == null && this.callout == null) {
			return super.equals(obj);
		}
		if (other.callout == null) {
			return false;
		}
		if (this.callout.key != null || other.callout.key != null) {
			return Base.equalsStatic(this.callout.key, other.callout.key);
		}
		return super.equals(obj);
	}
	getHashCode(): number {
		if (this.callout == null || this.callout.key == null) {
			return super.getHashCode();
		}
		return Base.getHashCodeStatic(this.callout.key);
	}
}


