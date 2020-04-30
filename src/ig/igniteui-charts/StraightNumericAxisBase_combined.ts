/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericAxisBase } from "./NumericAxisBase";
import { NumericScaleMode, NumericScaleMode_$type } from "./NumericScaleMode";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { NumericScaler } from "./NumericScaler";
import { Base, Type, enumGetBox, EnumUtil, typeCast, markType } from "igniteui-core/type";
import { Axis } from "./Axis";
import { AxisView } from "./AxisView";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { ArgumentNullException } from "igniteui-core/ArgumentNullException";
import { LogarithmicScaler } from "./LogarithmicScaler";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { NumericAxisBaseView } from "./NumericAxisBaseView";

/**
 * @hidden 
 */
export abstract class StraightNumericAxisBase extends NumericAxisBase {
	static $t: Type = markType(StraightNumericAxisBase, 'StraightNumericAxisBase', (<any>NumericAxisBase).$type);
	constructor() {
		super();
		this.updateActualScaler();
	}
	createView(): AxisView {
		return new StraightNumericAxisBaseView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.straightView = <StraightNumericAxisBaseView>view;
	}
	private _straightView: StraightNumericAxisBaseView;
	get straightView(): StraightNumericAxisBaseView {
		return this._straightView;
	}
	set straightView(value: StraightNumericAxisBaseView) {
		this._straightView = value;
	}
	static readonly scaleModePropertyName: string = "ScaleMode";
	static readonly scaleModeProperty: DependencyProperty = DependencyProperty.register(StraightNumericAxisBase.scaleModePropertyName, NumericScaleMode_$type, (<any>StraightNumericAxisBase).$type, new PropertyMetadata(2, enumGetBox<NumericScaleMode>(NumericScaleMode_$type, NumericScaleMode.Linear), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StraightNumericAxisBase>sender).raisePropertyChanged(StraightNumericAxisBase.scaleModePropertyName, e.oldValue, e.newValue)));
	get scaleMode(): NumericScaleMode {
		return EnumUtil.getEnumValue<NumericScaleMode>(NumericScaleMode_$type, this.getValue(StraightNumericAxisBase.scaleModeProperty));
	}
	set scaleMode(value: NumericScaleMode) {
		this.setValue(StraightNumericAxisBase.scaleModeProperty, enumGetBox<NumericScaleMode>(NumericScaleMode_$type, value));
	}
	static readonly scalerPropertyName: string = "Scaler";
	static readonly scalerProperty: DependencyProperty = DependencyProperty.register(StraightNumericAxisBase.scalerPropertyName, (<any>NumericScaler).$type, (<any>StraightNumericAxisBase).$type, new PropertyMetadata(2, null, StraightNumericAxisBase.onScalerPropertyChanged));
	get scaler(): NumericScaler {
		return <NumericScaler>this.getValue(StraightNumericAxisBase.scalerProperty);
	}
	set scaler(value: NumericScaler) {
		this.setValue(StraightNumericAxisBase.scalerProperty, value);
	}
	private static onScalerPropertyChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		let strNumAcxisBase = typeCast<StraightNumericAxisBase>((<any>StraightNumericAxisBase).$type, d);
		strNumAcxisBase.updateActualScaler();
		strNumAcxisBase.raisePropertyChanged(StraightNumericAxisBase.scalerPropertyName, e.oldValue, e.newValue);
	}
	protected createLinearScaler(): NumericScaler {
		return null;
	}
	private static readonly actualScalerPropertyName: string = "ActualScaler";
	protected cachedActualScaler: NumericScaler = null;
	protected get_actualScaler(): NumericScaler {
		if (this.cachedActualScaler == null) {
			this.updateActualScaler();
		}
		return this.cachedActualScaler;
	}
	protected set_actualScaler(value: NumericScaler): void {
		let changed: boolean = this.cachedActualScaler != value;
		if (changed) {
			let oldValue: any = this.cachedActualScaler;
			this.cachedActualScaler = value;
			this.raisePropertyChanged(StraightNumericAxisBase.actualScalerPropertyName, oldValue, value);
		}
	}
	get actualScaler(): NumericScaler {
		return this.get_actualScaler();
	}
	set actualScaler(value: NumericScaler) {
		this.set_actualScaler(value);
	}
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, isLogarithmic: boolean, logarithmBase: number, actualMinimumValue: number, actualMaximumValue: number): { p5: number; p6: number; } {
		let $ret = this.actualScaler.calculateRange(target, minimumValue, maximumValue, actualMinimumValue, actualMaximumValue);
		actualMinimumValue = $ret.p3;
		actualMaximumValue = $ret.p4;
		return {
			p5: actualMinimumValue,
			p6: actualMaximumValue

		};
	}
	private suspendPropertyUpdatedAndExecute(a: () => void): void {
		let suspendPropertyUpdatedStored: boolean = this.suspendPropertyUpdated;
		this.suspendPropertyUpdated = true;
		a();
		this.suspendPropertyUpdated = suspendPropertyUpdatedStored;
	}
	private _suspendPropertyUpdated: boolean = false;
	private get suspendPropertyUpdated(): boolean {
		return this._suspendPropertyUpdated;
	}
	private set suspendPropertyUpdated(value: boolean) {
		this._suspendPropertyUpdated = value;
	}
	protected updateActualScaler(): void {
		let scaler: NumericScaler = this.scaler;
		if (scaler == null) {
			scaler = this.createScalerOverride();
		}
		this.actualScaler = scaler;
		if (this.actualScaler == null) {
			throw new ArgumentNullException(0, "ActualScaler");
		}
		this.bindScalerProperties();
	}
	bindScalerProperties(): void {
		this.straightView.bindScalerProperties();
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		if (this.suspendPropertyUpdated) {
			return;
		}
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case NumericAxisBase.logarithmBasePropertyName:
			this.updateActualScaler();
			break;

			case NumericAxisBase.isLogarithmicPropertyName:
			this.updateActualScaler();
			break;

			case StraightNumericAxisBase.scaleModePropertyName:
			this.updateActualScaler();
			break;

			case StraightNumericAxisBase.scalerPropertyName:
			this.updateActualScaler();
			break;

			case StraightNumericAxisBase.actualScalerPropertyName:
			this.actualIsLogarithmic = typeCast<LogarithmicScaler>((<any>LogarithmicScaler).$type, this.actualScaler) !== null;
			this.bindScalerProperties();
			this.updateRange();
			this.renderAxis1(false);
			break;

			case NumericAxisBase.actualMaximumValuePropertyName:
			this.onActualMaximumValueChanged();
			break;

			case NumericAxisBase.actualMinimumValuePropertyName:
			this.onActualMinimumValueChanged();
			this.updateActualScaler();
			break;

		}

	}
	private onActualMinimumValueChanged(): void {
		this.actualScaler.setActualMinimumValue(this.actualMinimumValue);
	}
	private onActualMaximumValueChanged(): void {
		this.actualScaler.setActualMaximumValue(this.actualMaximumValue);
	}
	protected getProportionalAxisValue(axisValue: number, axis: StraightNumericAxisBase): number {
		if (axisValue < this.actualMinimumValue) {
			axisValue = this.actualMinimumValue;
		} else if (axisValue > this.actualMaximumValue) {
			axisValue = this.actualMaximumValue;
		}
		if (!axis.isVertical) {
			return (axisValue - this.actualMinimumValue) / (this.actualMaximumValue - this.actualMinimumValue);
		} else {
			return (axisValue - this.actualMaximumValue) / (this.actualMinimumValue - this.actualMaximumValue);
		}
	}
}

/**
 * @hidden 
 */
export class StraightNumericAxisBaseView extends NumericAxisBaseView {
	static $t: Type = markType(StraightNumericAxisBaseView, 'StraightNumericAxisBaseView', (<any>NumericAxisBaseView).$type);
	private _straightModel: StraightNumericAxisBase = null;
	protected get straightModel(): StraightNumericAxisBase {
		return this._straightModel;
	}
	protected set straightModel(value: StraightNumericAxisBase) {
		this._straightModel = value;
	}
	constructor(model: StraightNumericAxisBase) {
		super(model);
		this.straightModel = model;
	}
	bindScalerProperties(): void {
		this.straightModel.actualScaler.setActualMaximumValue(this.straightModel.actualMaximumValue);
		this.straightModel.actualScaler.setActualMinimumValue(this.straightModel.actualMinimumValue);
	}
}


