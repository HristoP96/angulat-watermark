import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from './igx-series-component';
import { FinancialChartCustomIndicatorArgs as FinancialChartCustomIndicatorArgs_internal } from "./FinancialChartCustomIndicatorArgs";
import { TypeRegistrar } from 'igniteui-core/type';

/**
 * Event arguments for the Financial Chart's custom indicator event.
*/
export class IgxFinancialChartCustomIndicatorArgs
{
	protected _implementation: any;
	public get i() : FinancialChartCustomIndicatorArgs_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {									
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}

	get indicatorInfo(): any {
		if (!this.i.indicatorInfo) {
			return null;
		}
		if (!this.i.indicatorInfo.externalObject && TypeRegistrar.isRegistered("igx-financial-event-args")) {
			let e = TypeRegistrar.create("igx-financial-event-args");
			e._implementation = this.i.indicatorInfo;
			this.i.indicatorInfo.externalObject = e;
		}
		if (this.i.indicatorInfo.externalObject) {
			return this.i.indicatorInfo.externalObject;
		}
		return null;
	}

    	/**
	 * The Series in context.
	*/
	get series() : IgxSeriesComponent {
	                                        if (this.i.series == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.series as any).externalObject) {
	                                            let e = IgxSeriesComponent._createFromInternal(this.i.series);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.series;
	                                            }
	                                            (this.i.series as any).externalObject = e;
	                                        }
		return (this.i.series as any).externalObject;
	}
	set series(v: IgxSeriesComponent) {
		v == null ? this.i.series = null : this.i.series = v.i;
	}
	/**
	 * An integer representing the position of the associated custom indicator in its host.
	*/
	get index() : number {
		return (this.i.index as number);
	}
	set index(v: number) {
		this.i.index = +v;
	}

    

	

    
}
