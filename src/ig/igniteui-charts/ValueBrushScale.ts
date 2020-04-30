/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BrushScale } from "./BrushScale";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Base, Type, Number_$type, Boolean_$type, typeGetValue, markType } from "igniteui-core/type";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_, isInfinity, logBase } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ValueBrushScale extends BrushScale {
	static $t: Type = markType(ValueBrushScale, 'ValueBrushScale', (<any>BrushScale).$type);
	constructor() {
		super();
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(ValueBrushScale.minimumValuePropertyName, Number_$type, (<any>ValueBrushScale).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueBrushScale>o).raisePropertyChanged(ValueBrushScale.minimumValuePropertyName, e.oldValue, e.newValue)));
	get minimumValue(): number {
		return <number>this.getValue(ValueBrushScale.minimumValueProperty);
	}
	set minimumValue(value: number) {
		this.setValue(ValueBrushScale.minimumValueProperty, value);
	}
	static readonly maximumValuePropertyName: string = "MaximumValue";
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(ValueBrushScale.maximumValuePropertyName, Number_$type, (<any>ValueBrushScale).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueBrushScale>o).raisePropertyChanged(ValueBrushScale.maximumValuePropertyName, e.oldValue, e.newValue)));
	get maximumValue(): number {
		return <number>this.getValue(ValueBrushScale.maximumValueProperty);
	}
	set maximumValue(value: number) {
		this.setValue(ValueBrushScale.maximumValueProperty, value);
	}
	static readonly isLogarithmicPropertyName: string = "IsLogarithmic";
	static readonly isLogarithmicProperty: DependencyProperty = DependencyProperty.register(ValueBrushScale.isLogarithmicPropertyName, Boolean_$type, (<any>ValueBrushScale).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueBrushScale>o).raisePropertyChanged(ValueBrushScale.isLogarithmicPropertyName, e.oldValue, e.newValue)));
	get isLogarithmic(): boolean {
		return <boolean>this.getValue(ValueBrushScale.isLogarithmicProperty);
	}
	set isLogarithmic(value: boolean) {
		this.setValue(ValueBrushScale.isLogarithmicProperty, value);
	}
	private _currentIsLogarithmic: boolean = false;
	static readonly logarithmBasePropertyName: string = "LogarithmBase";
	static readonly logarithmBaseProperty: DependencyProperty = DependencyProperty.register(ValueBrushScale.logarithmBasePropertyName, Number_$type, (<any>ValueBrushScale).$type, new PropertyMetadata(2, 10, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ValueBrushScale>o).raisePropertyChanged(ValueBrushScale.logarithmBasePropertyName, e.oldValue, e.newValue)));
	get logarithmBase(): number {
		return typeGetValue(this.getValue(ValueBrushScale.logarithmBaseProperty));
	}
	set logarithmBase(value: number) {
		this.setValue(ValueBrushScale.logarithmBaseProperty, value);
	}
	private _currentLogarithmBase: number = 10;
	getBrushByIndex(index: number, FillColumn: IFastItemColumn$1<number>): Brush {
		if (FillColumn == null || this.brushes == null || this.brushes.count == 0 || index < 0 || index >= FillColumn.count) {
			return null;
		}
		if (FillColumn.count == 0) {
			return this.brushes.item(0);
		}
		let min: number = isNaN_(this.minimumValue) || isInfinity(this.minimumValue) ? FillColumn.minimum : this.minimumValue;
		let max: number = isNaN_(this.maximumValue) || isInfinity(this.maximumValue) ? FillColumn.maximum : this.maximumValue;
		let value: number = FillColumn.item(index);
		if (min == max) {
			return value == min ? this.brushes.item(0) : null;
		}
		return this.getInterpolatedBrushLogarithmic(min, max, value);
	}
	getBrushByValue(value: number, FillColumn: IFastItemColumn$1<number>): Brush {
		if (FillColumn == null || this.brushes == null || this.brushes.count == 0) {
			return null;
		}
		if (FillColumn.count <= 1) {
			return this.brushes.item(0);
		}
		let min: number = isNaN_(this.minimumValue) || isInfinity(this.minimumValue) ? FillColumn.minimum : this.minimumValue;
		let max: number = isNaN_(this.maximumValue) || isInfinity(this.maximumValue) ? FillColumn.maximum : this.maximumValue;
		if (value < min) {
			return null;
		}
		if (value > max) {
			return null;
		}
		return this.getInterpolatedBrushLogarithmic(min, max, value);
	}
	private getInterpolatedBrushLogarithmic(min: number, max: number, value: number): Brush {
		if (this._currentIsLogarithmic && this._currentLogarithmBase > 0) {
			let newMin: number = logBase(min, this._currentLogarithmBase);
			let newMax: number = logBase(max, this._currentLogarithmBase);
			let newValue: number = logBase(value, this._currentLogarithmBase);
			return this.getInterpolatedBrushLinear(newMin, newMax, newValue);
		}
		return this.getInterpolatedBrushLinear(min, max, value);
	}
	private getInterpolatedBrushLinear(min: number, max: number, value: number): Brush {
		if (value < min || value > max) {
			return null;
		}
		let scaledValue: number = (value - min) / (max - min);
		let scaledBrushIndex: number = scaledValue * (this.brushes.count - 1);
		return this.getInterpolatedBrush(scaledBrushIndex);
	}
	protected get_isReady(): boolean {
		return this.brushes != null && this.brushes.count > 0;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case ValueBrushScale.logarithmBasePropertyName:
			this._currentLogarithmBase = typeGetValue(newValue);
			break;

			case ValueBrushScale.isLogarithmicPropertyName:
			this._currentIsLogarithmic = <boolean>newValue;
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
	}
}


