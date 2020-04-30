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
import { ErrorBarCalculatorReference, ErrorBarCalculatorReference_$type } from "igniteui-core/ErrorBarCalculatorReference";
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
export class ScatterErrorBarSettings extends ErrorBarSettingsBase {
	static $t: Type = markType(ScatterErrorBarSettings, 'ScatterErrorBarSettings', (<any>ErrorBarSettingsBase).$type);
	constructor() {
		super();
		this.propertyUpdated = delegateCombine(this.propertyUpdated, runOn(this, this.scatterErrorBarSettings_PropertyUpdated));
	}
	get enableErrorBarsHorizontal(): EnableErrorBars {
		return EnumUtil.getEnumValue<EnableErrorBars>(EnableErrorBars_$type, this.getValue(ScatterErrorBarSettings.enableErrorBarsHorizontalProperty));
	}
	set enableErrorBarsHorizontal(value: EnableErrorBars) {
		this.setValue(ScatterErrorBarSettings.enableErrorBarsHorizontalProperty, enumGetBox<EnableErrorBars>(EnableErrorBars_$type, value));
	}
	private static readonly enableErrorBarsHorizontalPropertyName: string = "EnableErrorBarsHorizontal";
	static readonly enableErrorBarsHorizontalProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.enableErrorBarsHorizontalPropertyName, EnableErrorBars_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, enumGetBox<EnableErrorBars>(EnableErrorBars_$type, EnableErrorBars.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.enableErrorBarsHorizontalPropertyName, e.oldValue, e.newValue)));
	get horizontalCalculatorReference(): ErrorBarCalculatorReference {
		return EnumUtil.getEnumValue<ErrorBarCalculatorReference>(ErrorBarCalculatorReference_$type, this.getValue(ScatterErrorBarSettings.horizontalCalculatorReferenceProperty));
	}
	set horizontalCalculatorReference(value: ErrorBarCalculatorReference) {
		this.setValue(ScatterErrorBarSettings.horizontalCalculatorReferenceProperty, enumGetBox<ErrorBarCalculatorReference>(ErrorBarCalculatorReference_$type, value));
	}
	private static readonly horizontalCalculatorReferencePropertyName: string = "HorizontalCalculatorReference";
	static readonly horizontalCalculatorReferenceProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.horizontalCalculatorReferencePropertyName, ErrorBarCalculatorReference_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, enumGetBox<ErrorBarCalculatorReference>(ErrorBarCalculatorReference_$type, ErrorBarCalculatorReference.X), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.horizontalCalculatorReferencePropertyName, e.oldValue, e.newValue)));
	get horizontalCalculator(): IErrorBarCalculator {
		return <IErrorBarCalculator><any>this.getValue(ScatterErrorBarSettings.horizontalCalculatorProperty);
	}
	set horizontalCalculator(value: IErrorBarCalculator) {
		this.setValue(ScatterErrorBarSettings.horizontalCalculatorProperty, value);
	}
	private static readonly horizontalCalculatorPropertyName: string = "HorizontalCalculator";
	static readonly horizontalCalculatorProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.horizontalCalculatorPropertyName, IErrorBarCalculator_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.horizontalCalculatorPropertyName, e.oldValue, e.newValue)));
	get horizontalErrorBarCapLength(): number {
		return typeGetValue(this.getValue(ScatterErrorBarSettings.horizontalErrorBarCapLengthProperty));
	}
	set horizontalErrorBarCapLength(value: number) {
		this.setValue(ScatterErrorBarSettings.horizontalErrorBarCapLengthProperty, value);
	}
	protected static readonly horizontalErrorBarCapLengthPropertyName: string = "HorizontalErrorBarCapLength";
	static readonly horizontalErrorBarCapLengthProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.horizontalErrorBarCapLengthPropertyName, Number_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, 6, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.horizontalErrorBarCapLengthPropertyName, e.oldValue, e.newValue)));
	get horizontalStroke(): Brush {
		return <Brush>this.getValue(ScatterErrorBarSettings.horizontalStrokeProperty);
	}
	set horizontalStroke(value: Brush) {
		this.setValue(ScatterErrorBarSettings.horizontalStrokeProperty, value);
	}
	private static readonly horizontalStrokePropertyName: string = "HorizontalStroke";
	static readonly horizontalStrokeProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.horizontalStrokePropertyName, (<any>Brush).$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.horizontalStrokePropertyName, e.oldValue, e.newValue)));
	get horizontalStrokeThickness(): number {
		return <number>this.getValue(ScatterErrorBarSettings.horizontalStrokeThicknessProperty);
	}
	set horizontalStrokeThickness(value: number) {
		this.setValue(ScatterErrorBarSettings.horizontalStrokeThicknessProperty, value);
	}
	private static readonly horizontalStrokeThicknessPropertyName: string = "HorizontalStrokeThickness";
	static readonly horizontalStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.horizontalStrokeThicknessPropertyName, Number_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.horizontalStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly horizontalErrorBarStylePropertyName: string = "HorizontalErrorBarStyle";
	static readonly horizontalErrorBarStyleProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.horizontalErrorBarStylePropertyName, (<any>Style).$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.horizontalErrorBarStylePropertyName, e.oldValue, e.newValue)));
	get horizontalErrorBarStyle(): Style {
		return <Style>this.getValue(ScatterErrorBarSettings.horizontalErrorBarStyleProperty);
	}
	set horizontalErrorBarStyle(value: Style) {
		this.setValue(ScatterErrorBarSettings.horizontalErrorBarStyleProperty, value);
	}
	get enableErrorBarsVertical(): EnableErrorBars {
		return EnumUtil.getEnumValue<EnableErrorBars>(EnableErrorBars_$type, this.getValue(ScatterErrorBarSettings.enableErrorBarsVerticalProperty));
	}
	set enableErrorBarsVertical(value: EnableErrorBars) {
		this.setValue(ScatterErrorBarSettings.enableErrorBarsVerticalProperty, enumGetBox<EnableErrorBars>(EnableErrorBars_$type, value));
	}
	private static readonly enableErrorBarsVerticalPropertyName: string = "EnableErrorBarsVertical";
	static readonly enableErrorBarsVerticalProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.enableErrorBarsVerticalPropertyName, EnableErrorBars_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, enumGetBox<EnableErrorBars>(EnableErrorBars_$type, EnableErrorBars.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.enableErrorBarsVerticalPropertyName, e.oldValue, e.newValue)));
	get verticalCalculatorReference(): ErrorBarCalculatorReference {
		return EnumUtil.getEnumValue<ErrorBarCalculatorReference>(ErrorBarCalculatorReference_$type, this.getValue(ScatterErrorBarSettings.verticalCalculatorReferenceProperty));
	}
	set verticalCalculatorReference(value: ErrorBarCalculatorReference) {
		this.setValue(ScatterErrorBarSettings.verticalCalculatorReferenceProperty, enumGetBox<ErrorBarCalculatorReference>(ErrorBarCalculatorReference_$type, value));
	}
	private static readonly verticalCalculatorReferencePropertyName: string = "VerticalCalculatorReference";
	static readonly verticalCalculatorReferenceProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.verticalCalculatorReferencePropertyName, ErrorBarCalculatorReference_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, enumGetBox<ErrorBarCalculatorReference>(ErrorBarCalculatorReference_$type, ErrorBarCalculatorReference.Y), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.verticalCalculatorReferencePropertyName, e.oldValue, e.newValue)));
	get verticalCalculator(): IErrorBarCalculator {
		return <IErrorBarCalculator><any>this.getValue(ScatterErrorBarSettings.verticalCalculatorProperty);
	}
	set verticalCalculator(value: IErrorBarCalculator) {
		this.setValue(ScatterErrorBarSettings.verticalCalculatorProperty, value);
	}
	private static readonly verticalCalculatorPropertyName: string = "VerticalCalculator";
	static readonly verticalCalculatorProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.verticalCalculatorPropertyName, IErrorBarCalculator_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.verticalCalculatorPropertyName, e.oldValue, e.newValue)));
	get verticalErrorBarCapLength(): number {
		return typeGetValue(this.getValue(ScatterErrorBarSettings.verticalErrorBarCapLengthProperty));
	}
	set verticalErrorBarCapLength(value: number) {
		this.setValue(ScatterErrorBarSettings.verticalErrorBarCapLengthProperty, value);
	}
	protected static readonly verticalErrorBarCapLengthPropertyName: string = "VerticalErrorBarCapLength";
	static readonly verticalErrorBarCapLengthProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.verticalErrorBarCapLengthPropertyName, Number_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, 6, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.verticalErrorBarCapLengthPropertyName, e.oldValue, e.newValue)));
	get verticalStroke(): Brush {
		return <Brush>this.getValue(ScatterErrorBarSettings.verticalStrokeProperty);
	}
	set verticalStroke(value: Brush) {
		this.setValue(ScatterErrorBarSettings.verticalStrokeProperty, value);
	}
	private static readonly verticalStrokePropertyName: string = "VerticalStroke";
	static readonly verticalStrokeProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.verticalStrokePropertyName, (<any>Brush).$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.verticalStrokePropertyName, e.oldValue, e.newValue)));
	get verticalStrokeThickness(): number {
		return <number>this.getValue(ScatterErrorBarSettings.verticalStrokeThicknessProperty);
	}
	set verticalStrokeThickness(value: number) {
		this.setValue(ScatterErrorBarSettings.verticalStrokeThicknessProperty, value);
	}
	private static readonly verticalStrokeThicknessPropertyName: string = "VerticalStrokeThickness";
	static readonly verticalStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.verticalStrokeThicknessPropertyName, Number_$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.verticalStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly verticalErrorBarStylePropertyName: string = "VerticalErrorBarStyle";
	static readonly verticalErrorBarStyleProperty: DependencyProperty = DependencyProperty.register(ScatterErrorBarSettings.verticalErrorBarStylePropertyName, (<any>Style).$type, (<any>ScatterErrorBarSettings).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterErrorBarSettings>sender).raisePropertyChanged(ScatterErrorBarSettings.verticalErrorBarStylePropertyName, e.oldValue, e.newValue)));
	get verticalErrorBarStyle(): Style {
		return <Style>this.getValue(ScatterErrorBarSettings.verticalErrorBarStyleProperty);
	}
	set verticalErrorBarStyle(value: Style) {
		this.setValue(ScatterErrorBarSettings.verticalErrorBarStyleProperty, value);
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private scatterErrorBarSettings_PropertyUpdated(sender: any, e: PropertyUpdatedEventArgs): void {
		switch (e.propertyName) {
			case ScatterErrorBarSettings.horizontalCalculatorPropertyName:

			case ScatterErrorBarSettings.verticalCalculatorPropertyName:
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

			case ScatterErrorBarSettings.enableErrorBarsHorizontalPropertyName:

			case ScatterErrorBarSettings.enableErrorBarsVerticalPropertyName:

			case ScatterErrorBarSettings.horizontalCalculatorReferencePropertyName:

			case ScatterErrorBarSettings.horizontalErrorBarCapLengthPropertyName:

			case ScatterErrorBarSettings.horizontalErrorBarStylePropertyName:

			case ScatterErrorBarSettings.horizontalStrokePropertyName:

			case ScatterErrorBarSettings.horizontalStrokeThicknessPropertyName:

			case ScatterErrorBarSettings.verticalCalculatorReferencePropertyName:

			case ScatterErrorBarSettings.verticalErrorBarCapLengthPropertyName:

			case ScatterErrorBarSettings.verticalErrorBarStylePropertyName:

			case ScatterErrorBarSettings.verticalStrokePropertyName:

			case ScatterErrorBarSettings.verticalStrokeThicknessPropertyName:
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


