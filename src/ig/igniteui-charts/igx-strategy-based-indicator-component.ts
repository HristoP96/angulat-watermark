import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { StrategyBasedIndicator } from "./StrategyBasedIndicator";

/**
 * A base class for indicator series with simple calculations that separates the calculation
 * responsibility from the other responsibilities of the financial series, this enables
 * easier unit testing and decoupling of individual calculation strategies.
 * A contract is defined between the financial series and these simple indicator calculations 
 * detailing the data which the series agrees to provide the simple indicator calculations, 
 * this contract is defined by FinancialCalculationDataSource. If more 
 * complex interactions are needed between the indicator calculation and the series, the 
 * indicators should instead derive from FinancialIndicator directly, or some 
 * derivative other than StrategyBasedIndicator
*/
export const IgxStrategyBasedIndicatorComponent_PROVIDERS = [{provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxStrategyBasedIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxStrategyBasedIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStrategyBasedIndicatorComponent)}];
export abstract class IgxStrategyBasedIndicatorComponent extends IgxFinancialIndicatorComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : StrategyBasedIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
