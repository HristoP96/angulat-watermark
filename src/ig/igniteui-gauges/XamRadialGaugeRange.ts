/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, String_$type, Number_$type, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { Brush } from "igniteui-core/Brush";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { DeviceUtils } from "igniteui-core/DeviceUtils";

/**
 * @hidden 
 */
export class XamRadialGaugeRange extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(XamRadialGaugeRange, 'XamRadialGaugeRange', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
	}
	protected propertyUpdateOverride(propertyName: string, oldValue: any, newValue: any): void {
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdateOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	static readonly namePropertyName: string = "Name";
	get name(): string {
		return <string>this.getValue(XamRadialGaugeRange.nameProperty);
	}
	set name(value: string) {
		this.setValue(XamRadialGaugeRange.nameProperty, value);
	}
	static readonly nameProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.namePropertyName, String_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.namePropertyName, e.oldValue, e.newValue)));
	static readonly brushPropertyName: string = "Brush";
	get brush(): Brush {
		return <Brush>this.getValue(XamRadialGaugeRange.brushProperty);
	}
	set brush(value: Brush) {
		this.setValue(XamRadialGaugeRange.brushProperty, value);
	}
	static readonly brushProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.brushPropertyName, (<any>Brush).$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.brushPropertyName, e.oldValue, e.newValue)));
	static readonly outlinePropertyName: string = "Outline";
	get outline(): Brush {
		return <Brush>this.getValue(XamRadialGaugeRange.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(XamRadialGaugeRange.outlineProperty, value);
	}
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.outlinePropertyName, (<any>Brush).$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.outlinePropertyName, e.oldValue, e.newValue)));
	static readonly startValuePropertyName: string = "StartValue";
	get startValue(): number {
		return <number>this.getValue(XamRadialGaugeRange.startValueProperty);
	}
	set startValue(value: number) {
		this.setValue(XamRadialGaugeRange.startValueProperty, value);
	}
	static readonly startValueProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.startValuePropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.startValuePropertyName, e.oldValue, e.newValue)));
	static readonly endValuePropertyName: string = "EndValue";
	get endValue(): number {
		return <number>this.getValue(XamRadialGaugeRange.endValueProperty);
	}
	set endValue(value: number) {
		this.setValue(XamRadialGaugeRange.endValueProperty, value);
	}
	static readonly endValueProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.endValuePropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.endValuePropertyName, e.oldValue, e.newValue)));
	static readonly innerStartExtentPropertyName: string = "InnerStartExtent";
	get innerStartExtent(): number {
		return <number>this.getValue(XamRadialGaugeRange.innerStartExtentProperty);
	}
	set innerStartExtent(value: number) {
		this.setValue(XamRadialGaugeRange.innerStartExtentProperty, value);
	}
	static readonly innerStartExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.innerStartExtentPropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.innerStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly innerEndExtentPropertyName: string = "InnerEndExtent";
	get innerEndExtent(): number {
		return <number>this.getValue(XamRadialGaugeRange.innerEndExtentProperty);
	}
	set innerEndExtent(value: number) {
		this.setValue(XamRadialGaugeRange.innerEndExtentProperty, value);
	}
	static readonly innerEndExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.innerEndExtentPropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.innerEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly outerStartExtentPropertyName: string = "OuterStartExtent";
	get outerStartExtent(): number {
		return <number>this.getValue(XamRadialGaugeRange.outerStartExtentProperty);
	}
	set outerStartExtent(value: number) {
		this.setValue(XamRadialGaugeRange.outerStartExtentProperty, value);
	}
	static readonly outerStartExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.outerStartExtentPropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.outerStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly outerEndExtentPropertyName: string = "OuterEndExtent";
	get outerEndExtent(): number {
		return <number>this.getValue(XamRadialGaugeRange.outerEndExtentProperty);
	}
	set outerEndExtent(value: number) {
		this.setValue(XamRadialGaugeRange.outerEndExtentProperty, value);
	}
	static readonly outerEndExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.outerEndExtentPropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.outerEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	static readonly strokeThicknessDefaultValue: number = DeviceUtils.toPixelUnits(1);
	get strokeThickness(): number {
		return <number>this.getValue(XamRadialGaugeRange.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(XamRadialGaugeRange.strokeThicknessProperty, value);
	}
	static readonly strokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamRadialGaugeRange.strokeThicknessPropertyName, Number_$type, (<any>XamRadialGaugeRange).$type, new PropertyMetadata(2, XamRadialGaugeRange.strokeThicknessDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGaugeRange>o).onPropertyChanged(XamRadialGaugeRange.strokeThicknessPropertyName, e.oldValue, e.newValue)));
}


