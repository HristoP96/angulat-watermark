import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { PrimaryKeyValue as PrimaryKeyValue_internal } from "./PrimaryKeyValue";

/**
 * A primary key value.
*/
export class IgxPrimaryKeyValue {
    protected _implementation: any;
    public get i(): PrimaryKeyValue_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

    }
    constructor(primaryKey: string[] = null,
        primaryKeyValue: any[] = null) {
        this._implementation = new PrimaryKeyValue_internal(primaryKey, primaryKeyValue);
        this._implementation.externalObject = this;
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    public static createIdentityKey(item: any) {
        let int = PrimaryKeyValue_internal.createIdentityKey(item);
        let ext = new IgxPrimaryKeyValue(null, null);
        ext._provideImplementation(int);
        return ext;
    }

    	/**
	 * The primary key associated with this value.
	*/
	get key() : string[] {
		return this.i.key as string[];
	}
	/**
	 * The value of the keys for this primary key value.
	*/
	get value() : any[] {
		return this.i.value as any[];
	}

    

		/**
	 * Determines if two primary key values are equal.
	
	* @param other  * The other key value to check against.
	*/
	public equals(other: any) : boolean {
		let iv = this.i.equals(other);
		return (iv);
	}
}
