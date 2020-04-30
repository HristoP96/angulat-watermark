import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFinancialCalculationDataSource } from './igx-financial-calculation-data-source';
import { IgxFinancialCalculationSupportingCalculations } from './igx-financial-calculation-supporting-calculations';
import { FinancialEventArgs as FinancialEventArgs_internal } from "./FinancialEventArgs";
import { List$1 } from 'igniteui-core/List$1';
import { String_$type } from 'igniteui-core/type';

/**
 * Parameterizes a financial calculation event.
*/
export class IgxFinancialEventArgs
{
	protected _implementation: any;
	public get i() : FinancialEventArgs_internal {
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

    get basedOn(): string[] {
        let ret: string[] = null;
        if (this.i.basedOn) {
            ret = [];
            for (let i = 0; i < this.i.basedOn.count; i++) {
                ret.push(this.i.basedOn[i]);
            }
        }
        return ret;
    }
    set basedOn(v: string[]) {
        if (!v) {
            this.i.basedOn = null;
            return;
        }
        let list = new List$1<string>(String_$type, 0);
        for (let i = 0; i < v.length; i++) {
            list.add(v[i]);
        }
        this.i.basedOn = list;
    }

    	/**
	 * The beginning position that should be calculated from.
	*/
	get position() : number {
		return (this.i.position as number);
	}
	set position(v: number) {
		this.i.position = +v;
	}
	/**
	 * The number of positions that should be calculated from the start.
	*/
	get count() : number {
		return (this.i.count as number);
	}
	set count(v: number) {
		this.i.count = +v;
	}
	/**
	 * The data to use for the calculation.
	*/
	get dataSource() : IgxFinancialCalculationDataSource {
	                                        if (this.i.dataSource == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.dataSource as any).externalObject) {
	                                            let e = new IgxFinancialCalculationDataSource();
	                                            (e as any)._implementation = this.i.dataSource;
	                                            (this.i.dataSource as any).externalObject = e;
	                                        }
		return (this.i.dataSource as any).externalObject;
	}
	set dataSource(v: IgxFinancialCalculationDataSource) {
		v == null ? this.i.dataSource = null : this.i.dataSource = v.i;
	}
	/**
	 * The supporting calculations to use in the calculation.
	*/
	get supportingCalculations() : IgxFinancialCalculationSupportingCalculations {
	                                        if (this.i.supportingCalculations == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.supportingCalculations as any).externalObject) {
	                                            let e = new IgxFinancialCalculationSupportingCalculations();
	                                            (e as any)._implementation = this.i.supportingCalculations;
	                                            (this.i.supportingCalculations as any).externalObject = e;
	                                        }
		return (this.i.supportingCalculations as any).externalObject;
	}
	set supportingCalculations(v: IgxFinancialCalculationSupportingCalculations) {
		v == null ? this.i.supportingCalculations = null : this.i.supportingCalculations = v.i;
	}

    

	

    
}
