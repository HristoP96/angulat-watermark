/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ErrorBarSettingsBase } from "./ErrorBarSettingsBase";
import { EnableErrorBars, EnableErrorBars_$type } from "./EnableErrorBars";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IErrorBarCalculator, IErrorBarCalculator_$type } from "igniteui-core/IErrorBarCalculator";
import { Brush } from "igniteui-core/Brush";
import { Style } from "igniteui-core/Style";
import { Series } from "./Series";
import { Base, EventArgs, Type, runOn, delegateCombine, enumGetBox, EnumUtil, typeGetValue, Number_$type, typeCast, delegateRemove, markType } from "igniteui-core/type";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class CategoryErrorBarSettings extends ErrorBarSettingsBase {
	static $t: Type = markType(CategoryErrorBarSettings, 'CategoryErrorBarSettings', (<any>ErrorBarSettingsBase).$type);
	constructor() {
		super();
		this.propertyUpdated = delegateCombine(this.propertyUpdated, runOn(this, this.categoryErrorBarSettings_PropertyUpdated));
	}
	get enableErrorBars(): EnableErrorBars {
		return EnumUtil.getEnumValue<EnableErrorBars>(EnableErrorBars_$type, this.getValue(CategoryErrorBarSettings.enableErrorBarsProperty));
	}
	set enableErrorBars(value: EnableErrorBars) {
		this.setValue(CategoryErrorBarSettings.enableErrorBarsProperty, enumGetBox<EnableErrorBars>(EnableErrorBars_$type, value));
	}
	private static readonly enableErrorBarsPropertyName: string = "EnableErrorBars";
	static readonly enableErrorBarsProperty: DependencyProperty = DependencyProperty.register(CategoryErrorBarSettings.enableErrorBarsPropertyName, EnableErrorBars_$type, (<any>CategoryErrorBarSettings).$type, new PropertyMetadata(2, enumGetBox<EnableErrorBars>(EnableErrorBars_$type, EnableErrorBars.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryErrorBarSettings>sender).raisePropertyChanged(CategoryErrorBarSettings.enableErrorBarsPropertyName, e.oldValue, e.newValue)));
	get errorBarCapLength(): number {
		return typeGetValue(this.getValue(CategoryErrorBarSettings.errorBarCapLengthProperty));
	}
	set errorBarCapLength(value: number) {
		this.setValue(CategoryErrorBarSettings.errorBarCapLengthProperty, value);
	}
	private static readonly errorBarCapLengthPropertyName: string = "ErrorBarCapLength";
	static readonly errorBarCapLengthProperty: DependencyProperty = DependencyProperty.register(CategoryErrorBarSettings.errorBarCapLengthPropertyName, Number_$type, (<any>CategoryErrorBarSettings).$type, new PropertyMetadata(2, 6, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryErrorBarSettings>sender).raisePropertyChanged(CategoryErrorBarSettings.errorBarCapLengthPropertyName, e.oldValue, e.newValue)));
	get calculator(): IErrorBarCalculator {
		return <IErrorBarCalculator><any>this.getValue(CategoryErrorBarSettings.calculatorProperty);
	}
	set calculator(value: IErrorBarCalculator) {
		this.setValue(CategoryErrorBarSettings.calculatorProperty, value);
	}
	private static readonly calculatorPropertyName: string = "Calculator";
	static readonly calculatorProperty: DependencyProperty = DependencyProperty.register(CategoryErrorBarSettings.calculatorPropertyName, IErrorBarCalculator_$type, (<any>CategoryErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryErrorBarSettings>sender).raisePropertyChanged(CategoryErrorBarSettings.calculatorPropertyName, e.oldValue, e.newValue)));
	get stroke(): Brush {
		return <Brush>this.getValue(CategoryErrorBarSettings.strokeProperty);
	}
	set stroke(value: Brush) {
		this.setValue(CategoryErrorBarSettings.strokeProperty, value);
	}
	private static readonly strokePropertyName: string = "Stroke";
	static readonly strokeProperty: DependencyProperty = DependencyProperty.register(CategoryErrorBarSettings.strokePropertyName, (<any>Brush).$type, (<any>CategoryErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryErrorBarSettings>sender).raisePropertyChanged(CategoryErrorBarSettings.strokePropertyName, e.oldValue, e.newValue)));
	get strokeThickness(): number {
		return <number>this.getValue(CategoryErrorBarSettings.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(CategoryErrorBarSettings.strokeThicknessProperty, value);
	}
	private static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	static readonly strokeThicknessProperty: DependencyProperty = DependencyProperty.register(CategoryErrorBarSettings.strokeThicknessPropertyName, Number_$type, (<any>CategoryErrorBarSettings).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryErrorBarSettings>sender).raisePropertyChanged(CategoryErrorBarSettings.strokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly errorBarStylePropertyName: string = "ErrorBarStyle";
	static readonly errorBarStyleProperty: DependencyProperty = DependencyProperty.register(CategoryErrorBarSettings.errorBarStylePropertyName, (<any>Style).$type, (<any>CategoryErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryErrorBarSettings>sender).raisePropertyChanged(CategoryErrorBarSettings.errorBarStylePropertyName, e.oldValue, e.newValue)));
	get errorBarStyle(): Style {
		return <Style>this.getValue(CategoryErrorBarSettings.errorBarStyleProperty);
	}
	set errorBarStyle(value: Style) {
		this.setValue(CategoryErrorBarSettings.errorBarStyleProperty, value);
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private categoryErrorBarSettings_PropertyUpdated(sender: any, e: PropertyUpdatedEventArgs): void {
		switch (e.propertyName) {
			case CategoryErrorBarSettings.calculatorPropertyName:
			let oldCalc: IErrorBarCalculator = typeCast<IErrorBarCalculator>(IErrorBarCalculator_$type, e.oldValue);
			if (oldCalc != null) {
				oldCalc.changed = delegateRemove(oldCalc.changed, runOn(this, this.calculator_Changed));
			}
			if (this.series != null) {
				this.series.renderSeries(false);
				if (this.series.seriesViewer != null) {
					this.series.notifyThumbnailAppearanceChanged();
				}
			}
			let newCalc: IErrorBarCalculator = typeCast<IErrorBarCalculator>(IErrorBarCalculator_$type, e.newValue);
			if (newCalc != null) {
				newCalc.changed = delegateCombine(newCalc.changed, runOn(this, this.calculator_Changed));
			}
			break;

			case CategoryErrorBarSettings.enableErrorBarsPropertyName:

			case CategoryErrorBarSettings.errorBarCapLengthPropertyName:

			case CategoryErrorBarSettings.errorBarStylePropertyName:

			case CategoryErrorBarSettings.strokePropertyName:

			case CategoryErrorBarSettings.strokeThicknessPropertyName:
			if (this.series != null) {
				this.series.renderSeries(false);
				if (this.series.seriesViewer != null) {
					this.series.notifyThumbnailAppearanceChanged();
				}
			}
			break;

		}

	}
	private calculator_Changed(sender: any, e: EventArgs): void {
		let calculator: IErrorBarCalculator = typeCast<IErrorBarCalculator>(IErrorBarCalculator_$type, sender);
		if (calculator != null) {
			calculator.changed = delegateRemove(calculator.changed, runOn(this, this.calculator_Changed));
			if (this.series != null) {
				this.series.renderSeries(false);
			}
			calculator.changed = delegateCombine(calculator.changed, runOn(this, this.calculator_Changed));
		}
	}
}


