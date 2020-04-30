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

/**
 * @hidden 
 */
export class XamLinearGraphRange extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(XamLinearGraphRange, 'XamLinearGraphRange', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
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
		return <string>this.getValue(XamLinearGraphRange.nameProperty);
	}
	set name(value: string) {
		this.setValue(XamLinearGraphRange.nameProperty, value);
	}
	static readonly nameProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.namePropertyName, String_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.namePropertyName, e.oldValue, e.newValue)));
	static readonly brushPropertyName: string = "Brush";
	get brush(): Brush {
		return <Brush>this.getValue(XamLinearGraphRange.brushProperty);
	}
	set brush(value: Brush) {
		this.setValue(XamLinearGraphRange.brushProperty, value);
	}
	static readonly brushProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.brushPropertyName, (<any>Brush).$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.brushPropertyName, e.oldValue, e.newValue)));
	static readonly outlinePropertyName: string = "Outline";
	get outline(): Brush {
		return <Brush>this.getValue(XamLinearGraphRange.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(XamLinearGraphRange.outlineProperty, value);
	}
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.outlinePropertyName, (<any>Brush).$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.outlinePropertyName, e.oldValue, e.newValue)));
	static readonly startValuePropertyName: string = "StartValue";
	get startValue(): number {
		return <number>this.getValue(XamLinearGraphRange.startValueProperty);
	}
	set startValue(value: number) {
		this.setValue(XamLinearGraphRange.startValueProperty, value);
	}
	static readonly startValueProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.startValuePropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.startValuePropertyName, e.oldValue, e.newValue)));
	static readonly endValuePropertyName: string = "EndValue";
	get endValue(): number {
		return <number>this.getValue(XamLinearGraphRange.endValueProperty);
	}
	set endValue(value: number) {
		this.setValue(XamLinearGraphRange.endValueProperty, value);
	}
	static readonly endValueProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.endValuePropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.endValuePropertyName, e.oldValue, e.newValue)));
	static readonly innerStartExtentPropertyName: string = "InnerStartExtent";
	get innerStartExtent(): number {
		return <number>this.getValue(XamLinearGraphRange.innerStartExtentProperty);
	}
	set innerStartExtent(value: number) {
		this.setValue(XamLinearGraphRange.innerStartExtentProperty, value);
	}
	static readonly innerStartExtentProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.innerStartExtentPropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.innerStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly innerEndExtentPropertyName: string = "InnerEndExtent";
	get innerEndExtent(): number {
		return <number>this.getValue(XamLinearGraphRange.innerEndExtentProperty);
	}
	set innerEndExtent(value: number) {
		this.setValue(XamLinearGraphRange.innerEndExtentProperty, value);
	}
	static readonly innerEndExtentProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.innerEndExtentPropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.innerEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly outerStartExtentPropertyName: string = "OuterStartExtent";
	get outerStartExtent(): number {
		return <number>this.getValue(XamLinearGraphRange.outerStartExtentProperty);
	}
	set outerStartExtent(value: number) {
		this.setValue(XamLinearGraphRange.outerStartExtentProperty, value);
	}
	static readonly outerStartExtentProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.outerStartExtentPropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.outerStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly outerEndExtentPropertyName: string = "OuterEndExtent";
	get outerEndExtent(): number {
		return <number>this.getValue(XamLinearGraphRange.outerEndExtentProperty);
	}
	set outerEndExtent(value: number) {
		this.setValue(XamLinearGraphRange.outerEndExtentProperty, value);
	}
	static readonly outerEndExtentProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.outerEndExtentPropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.outerEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	get strokeThickness(): number {
		return <number>this.getValue(XamLinearGraphRange.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(XamLinearGraphRange.strokeThicknessProperty, value);
	}
	static readonly strokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamLinearGraphRange.strokeThicknessPropertyName, Number_$type, (<any>XamLinearGraphRange).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamLinearGraphRange>o).onPropertyChanged(XamLinearGraphRange.strokeThicknessPropertyName, e.oldValue, e.newValue)));
}


