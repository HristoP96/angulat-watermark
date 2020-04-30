import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnSupportingCalculation } from "./igx-column-supporting-calculation";
import { IgxDataSourceSupportingCalculation } from "./igx-data-source-supporting-calculation";
import { FinancialCalculationSupportingCalculations as FinancialCalculationSupportingCalculations_internal } from "./FinancialCalculationSupportingCalculations";

/**
 * Represents a contract between the financial series and the calculation strategies
 * detailing the supporting calculation strategies that the financial series will 
 * provide in order for the indicator calculations to be performed.
*/
export class IgxFinancialCalculationSupportingCalculations
{

protected createImplementation() : FinancialCalculationSupportingCalculations_internal
{
	return new FinancialCalculationSupportingCalculations_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : FinancialCalculationSupportingCalculations_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
	this._implementation = this.createImplementation();
	(<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * The strategy provided to calculate an exponential moving average for a collection.
	*/
	get eMA() : IgxColumnSupportingCalculation {
	                                        if (this.i.eMA == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.eMA as any).externalObject;
	}
	set eMA(v: IgxColumnSupportingCalculation) {
		v == null ? this.i.eMA = null : this.i.eMA = v.i;
	}
	/**
	 * The strategy provided to calculate a simple moving average for a collection.
	*/
	get sMA() : IgxColumnSupportingCalculation {
	                                        if (this.i.sMA == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.sMA as any).externalObject;
	}
	set sMA(v: IgxColumnSupportingCalculation) {
		v == null ? this.i.sMA = null : this.i.sMA = v.i;
	}
	/**
	 * The strategy provided to calculate a standard deviation for a collection.
	*/
	get sTDEV() : IgxColumnSupportingCalculation {
	                                        if (this.i.sTDEV == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.sTDEV as any).externalObject;
	}
	set sTDEV(v: IgxColumnSupportingCalculation) {
		v == null ? this.i.sTDEV = null : this.i.sTDEV = v.i;
	}
	/**
	 * The strategy provided to calculate a moving sum for a collection.
	*/
	get movingSum() : IgxColumnSupportingCalculation {
	                                        if (this.i.movingSum == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.movingSum as any).externalObject;
	}
	set movingSum(v: IgxColumnSupportingCalculation) {
		v == null ? this.i.movingSum = null : this.i.movingSum = v.i;
	}
	/**
	 * The strategy provided to calculate the short period moving average for volume oscillator indicators.
	*/
	get shortVolumeOscillatorAverage() : IgxDataSourceSupportingCalculation {
	                                        if (this.i.shortVolumeOscillatorAverage == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.shortVolumeOscillatorAverage as any).externalObject;
	}
	set shortVolumeOscillatorAverage(v: IgxDataSourceSupportingCalculation) {
		v == null ? this.i.shortVolumeOscillatorAverage = null : this.i.shortVolumeOscillatorAverage = v.i;
	}
	/**
	 * The strategy provided to calculate the long period moving average for volume oscillator indicators.
	*/
	get longVolumeOscillatorAverage() : IgxDataSourceSupportingCalculation {
	                                        if (this.i.longVolumeOscillatorAverage == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.longVolumeOscillatorAverage as any).externalObject;
	}
	set longVolumeOscillatorAverage(v: IgxDataSourceSupportingCalculation) {
		v == null ? this.i.longVolumeOscillatorAverage = null : this.i.longVolumeOscillatorAverage = v.i;
	}
	/**
	 * The strategy provided to calculate the short period moving average for price oscillator indicators.
	*/
	get shortPriceOscillatorAverage() : IgxDataSourceSupportingCalculation {
	                                        if (this.i.shortPriceOscillatorAverage == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.shortPriceOscillatorAverage as any).externalObject;
	}
	set shortPriceOscillatorAverage(v: IgxDataSourceSupportingCalculation) {
		v == null ? this.i.shortPriceOscillatorAverage = null : this.i.shortPriceOscillatorAverage = v.i;
	}
	/**
	 * The strategy provided to calculate the long period moving average for price oscillator indicators.
	*/
	get longPriceOscillatorAverage() : IgxDataSourceSupportingCalculation {
	                                        if (this.i.longPriceOscillatorAverage == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.longPriceOscillatorAverage as any).externalObject;
	}
	set longPriceOscillatorAverage(v: IgxDataSourceSupportingCalculation) {
		v == null ? this.i.longPriceOscillatorAverage = null : this.i.longPriceOscillatorAverage = v.i;
	}
	/**
	 * The strategy provided to make doubles safe for plotting, by default will just make zero if the value
	 * is invalid.
	*/
	get makeSafe() : (arg1: number) => number {
		return this.i.makeSafe as (arg1: number) => number;
	}
	set makeSafe(v: (arg1: number) => number) {
		this.i.makeSafe = v;
	}
}
