import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { FastStochasticOscillatorIndicator } from "./FastStochasticOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Fast Stochastic Oscillator indicator series.
 * Default required members: High, Low, Close
*/
export const IgxFastStochasticOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-fast-stochastic-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFastStochasticOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxFastStochasticOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : FastStochasticOscillatorIndicator
{
	return new FastStochasticOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : FastStochasticOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current FastStochasticOscillatorIndicator object.
	 * The typical, and initial, value for FastStochasticOscillatorIndicator periods is 14.
	*/
	get period() : number {
		return (this.i.period as number);
	}
	@Input()
	set period(v: number) {
		this.i.period = +v;
	}
}
