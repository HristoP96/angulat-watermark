import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CellKey as CellKey_internal } from "./CellKey";
import { IgxPrimaryKeyValue } from './igx-primary-key-value';
import { IgxColumnComponent } from './igx-column-component';

/**
 * An indentifier for a specific cell in the grid.
*/
export class IgxCellKey {
    protected _implementation: any;
    private _primaryKey: IgxPrimaryKeyValue;

    public get i(): CellKey_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

    }
    constructor() {
        this._implementation = new CellKey_internal();
        this._implementation.externalObject = this;
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    /**
	 * Gets or sets the primary key of the row associated with the cell.
	*/
    get primaryKey(): IgxPrimaryKeyValue {
        if (this.i.primaryKey == null) {
            return null;
        }
        if (!this._primaryKey) {
            this._primaryKey = new IgxPrimaryKeyValue(this.i.primaryKey.key, this.i.primaryKey.value);
        }

        return this._primaryKey;
    }
    set primaryKey(v: IgxPrimaryKeyValue) {
        this.i.primaryKey = v.i;
    }

    	/**
	 * Gets or sets the row data object associated with the cell.
	*/
	get rowItem() : any {
		return this.i.rowItem as any;
	}
	set rowItem(v: any) {
		this.i.rowItem = v;
	}
	/**
	 * Gets or sets the column name associated with the cell.
	 * All columns in the grid must have a unique name. That unique name is what is used for this property.
	*/
	get columnUniqueKey() : string {
		return (this.i.columnUniqueKey as string);
	}
	set columnUniqueKey(v: string) {
		this.i.columnUniqueKey = v;
	}
	/**
	 * Gets or sets the resolved column object associated with this cell.
	*/
	get resolvedColumn() : IgxColumnComponent {
	                                        if (this.i.resolvedColumn == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.resolvedColumn as any).externalObject) {
	                                            let e = IgxColumnComponent._createFromInternal(this.i.resolvedColumn);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.resolvedColumn;
	                                            }
	                                            (this.i.resolvedColumn as any).externalObject = e;
	                                        }
		return (this.i.resolvedColumn as any).externalObject;
	}

    

    
}
