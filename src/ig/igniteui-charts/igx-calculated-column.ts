import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CalculatedColumn as CalculatedColumn_internal } from "./CalculatedColumn";
import { EnumeratorWrapper } from 'igniteui-core/type';

/**
 * Represents a column that is calculated based on the values of other columns.
*/
export class IgxCalculatedColumn
{
	protected _implementation: any;
	public get i() : CalculatedColumn_internal {
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

    [Symbol.iterator]() {
        return new EnumeratorWrapper<number>(
            this.i.getEnumerator());
    }

    

    

	

    
}
