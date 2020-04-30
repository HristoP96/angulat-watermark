import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCalculatedColumn } from './igx-calculated-column';
import { FinancialCalculationDataSource as FinancialCalculationDataSource_internal } from "./FinancialCalculationDataSource";
import { ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { FinancialSeries } from './FinancialSeries';

/**
 * Represents the data contract between a financial series and the 
 * decoupled calculation responsibilities which implement its mathmatical logic.
 * The FinancialCalculationDataSource contract represents the subset
 * of data which needs to be provided in order to test or run a calculation,
 * and its intentionally a subset of the information available to the series, 
 * in order to make calculation strategies more easily testable and usable in isolation to
 * the financial series container.
*/
export class IgxFinancialCalculationDataSource
{

protected createImplementation() : FinancialCalculationDataSource_internal
{
	return new FinancialCalculationDataSource_internal();
}
	protected _implementation: any;
	public get i() : FinancialCalculationDataSource_internal {
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

    get openColumn() {
        return (<FinancialSeries>this.i.series).getOpenColumnAsArray();
    }

    get highColumn() {
        return (<FinancialSeries>this.i.series).getHighColumnAsArray();
    }
    
    get lowColumn() {
        return (<FinancialSeries>this.i.series).getLowColumnAsArray();
    }

    get closeColumn() {
        return (<FinancialSeries>this.i.series).getCloseColumnAsArray();
    }

    get volumeColumn() {
        return (<FinancialSeries>this.i.series).getVolumeColumnAsArray();
    }

    get indicatorColumn() {
        return (<any>this.i.series).indicatorColumn.asArray();
    }

    	/**
	 * An enumerable list of typical prices provided by the series to use
	 * in calculations.
	*/
	get typicalColumn() : IgxCalculatedColumn {
	                                        if (this.i.typicalColumn == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.typicalColumn as any).externalObject;
	}
	set typicalColumn(v: IgxCalculatedColumn) {
		v == null ? this.i.typicalColumn = null : this.i.typicalColumn = v.i;
	}
	/**
	 * And enumerable list of true range values provided by the series to use
	 * in calculations.
	*/
	get trueRange() : IgxCalculatedColumn {
	                                        if (this.i.trueRange == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.trueRange as any).externalObject;
	}
	set trueRange(v: IgxCalculatedColumn) {
		v == null ? this.i.trueRange = null : this.i.trueRange = v.i;
	}
	/**
	 * An enumerable list of true low values provided by the series to use
	 * in calculations.
	*/
	get trueLow() : IgxCalculatedColumn {
	                                        if (this.i.trueLow == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.trueLow as any).externalObject;
	}
	set trueLow(v: IgxCalculatedColumn) {
		v == null ? this.i.trueLow = null : this.i.trueLow = v.i;
	}
	/**
	 * The period to use when calculating, if applicable.
	*/
	get period() : number {
		return (this.i.period as number);
	}
	set period(v: number) {
		this.i.period = +v;
	}
	/**
	 * The short period to use when calculating, if applicable.
	*/
	get shortPeriod() : number {
		return (this.i.shortPeriod as number);
	}
	set shortPeriod(v: number) {
		this.i.shortPeriod = +v;
	}
	/**
	 * The long period to use when calculating, if applicable.
	*/
	get longPeriod() : number {
		return (this.i.longPeriod as number);
	}
	set longPeriod(v: number) {
		this.i.longPeriod = +v;
	}
	/**
	 * The count of the values in the series.
	*/
	get count() : number {
		return (this.i.count as number);
	}
	set count(v: number) {
		this.i.count = +v;
	}
	/**
	 * The starting index from which to calculate
	*/
	get calculateFrom() : number {
		return (this.i.calculateFrom as number);
	}
	set calculateFrom(v: number) {
		this.i.calculateFrom = +v;
	}
	/**
	 * The number of items from the starting index from which to calculate
	*/
	get calculateCount() : number {
		return (this.i.calculateCount as number);
	}
	set calculateCount(v: number) {
		this.i.calculateCount = +v;
	}
	/**
	 * If the calculation supports some sort of scaling factor, 
	 * this value will be used.
	*/
	get multiplier() : number {
		return (this.i.multiplier as number);
	}
	set multiplier(v: number) {
		this.i.multiplier = +v;
	}
	/**
	 * If the calculation determines the range of indicator values,
	 * it will set the minimum and maximux properties.
	 * This will contain the previous minimum value when the indicator
	 * calculation is called again, in case this makes the update of the
	 * value speedier.
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * If the calculation determines the range of indicator values,
	 * it will set the minimum and maximux properties.
	 * This will contain the previous minimum value when the indicator
	 * calculation is called again, in case this makes the update of the
	 * value speedier.
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * The calculation strategy should set this to true if it 
	 * specifes the minimum and maximum value properties.
	*/
	get specifiesRange() : boolean {
		return (this.i.specifiesRange as boolean);
	}
	set specifiesRange(v: boolean) {
		this.i.specifiesRange = ensureBool(v);
	}

    

	

    
}
