/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Type, String_$type, typeCast, Number_$type, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { Brush } from "igniteui-core/Brush";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class LinearGraphTooltipDataContext extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(LinearGraphTooltipDataContext, 'LinearGraphTooltipDataContext', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	get item(): any {
		return this.getValue(LinearGraphTooltipDataContext.itemProperty);
	}
	set item(value: any) {
		this.setValue(LinearGraphTooltipDataContext.itemProperty, value);
	}
	get itemName(): string {
		return <string>this.getValue(LinearGraphTooltipDataContext.itemNameProperty);
	}
	set itemName(value: string) {
		this.setValue(LinearGraphTooltipDataContext.itemNameProperty, value);
	}
	get outline(): Brush {
		return <Brush>this.getValue(LinearGraphTooltipDataContext.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(LinearGraphTooltipDataContext.outlineProperty, value);
	}
	get brush(): Brush {
		return <Brush>this.getValue(LinearGraphTooltipDataContext.itemBrushProperty);
	}
	set brush(value: Brush) {
		this.setValue(LinearGraphTooltipDataContext.itemBrushProperty, value);
	}
	get thickness(): number {
		return <number>this.getValue(LinearGraphTooltipDataContext.thicknessProperty);
	}
	set thickness(value: number) {
		this.setValue(LinearGraphTooltipDataContext.thicknessProperty, value);
	}
	get label(): string {
		return <string>this.getValue(LinearGraphTooltipDataContext.labelProperty);
	}
	set label(value: string) {
		this.setValue(LinearGraphTooltipDataContext.labelProperty, value);
	}
	static readonly labelProperty: DependencyProperty = DependencyProperty.register("Label", String_$type, (<any>LinearGraphTooltipDataContext).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<LinearGraphTooltipDataContext>((<any>LinearGraphTooltipDataContext).$type, o)).raisePropertyChanged("Label", e.oldValue, e.newValue)));
	static readonly itemProperty: DependencyProperty = DependencyProperty.register("Item", (<any>Base).$type, (<any>LinearGraphTooltipDataContext).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<LinearGraphTooltipDataContext>((<any>LinearGraphTooltipDataContext).$type, o)).raisePropertyChanged("Item", e.oldValue, e.newValue)));
	static readonly itemNameProperty: DependencyProperty = DependencyProperty.register("ItemName", (<any>Base).$type, (<any>LinearGraphTooltipDataContext).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<LinearGraphTooltipDataContext>((<any>LinearGraphTooltipDataContext).$type, o)).raisePropertyChanged("ItemName", e.oldValue, e.newValue)));
	static readonly itemBrushProperty: DependencyProperty = DependencyProperty.register("ItemBrush", (<any>Brush).$type, (<any>LinearGraphTooltipDataContext).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<LinearGraphTooltipDataContext>((<any>LinearGraphTooltipDataContext).$type, o)).raisePropertyChanged("ItemBrush", e.oldValue, e.newValue)));
	static readonly thicknessPropertyName: string = "Thickness";
	static readonly thicknessProperty: DependencyProperty = DependencyProperty.register(LinearGraphTooltipDataContext.thicknessPropertyName, Number_$type, (<any>LinearGraphTooltipDataContext).$type, new PropertyMetadata(2, <number>0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<LinearGraphTooltipDataContext>((<any>LinearGraphTooltipDataContext).$type, o)).raisePropertyChanged(LinearGraphTooltipDataContext.thicknessPropertyName, e.oldValue, e.newValue)));
	static readonly outlinePropertyName: string = "Outline";
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(LinearGraphTooltipDataContext.outlinePropertyName, (<any>Brush).$type, (<any>LinearGraphTooltipDataContext).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<LinearGraphTooltipDataContext>((<any>LinearGraphTooltipDataContext).$type, sender)).raisePropertyChanged(LinearGraphTooltipDataContext.outlinePropertyName, e.oldValue, e.newValue)));
	protected raisePropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


