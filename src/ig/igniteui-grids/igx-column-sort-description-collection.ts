import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnSortDescription } from "./igx-column-sort-description";
import { ColumnSortDescription as ColumnSortDescription_internal } from "./ColumnSortDescription";
import { ColumnSortDescriptionCollection as ColumnSortDescriptionCollection_internal } from "./ColumnSortDescriptionCollection";

/**
 * Represents a collection of sort elements that are applied to a data source or provider.
*/
export class IgxColumnSortDescriptionCollection {

    protected createImplementation(): ColumnSortDescriptionCollection_internal {
        return new ColumnSortDescriptionCollection_internal();
    }
    protected _implementation: any;
    public get i(): ColumnSortDescriptionCollection_internal {
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

    public item(index: number, value?: IgxColumnSortDescription): IgxColumnSortDescription {
        let int: ColumnSortDescription_internal = null;

        if (value !== undefined) {
            int = this.i.set(index, value == null ? null : value.i);
        } else {
            int = this.i.get(index);
        }

        let ext: IgxColumnSortDescription = null;
        if (int != null) {
            ext = (int as any).externalObject;
            if (!ext) {
                ext = new IgxColumnSortDescription();
                (ext as any)._implementation = int;
                (int as any).externalObject = ext;
            }
        }

        return ext;
    }

    public get count(): number {
        return this.i.size();
    }

    public toArray(): IgxColumnSortDescription[] {
        let arr: IgxColumnSortDescription[] = [];
        for (let i = 0; i < this.count; i++) {
            arr[i] = this.item(i);
        }
        return arr;
    }

    *[Symbol.iterator]() {
        for (let i = 0; i < this.count; i++) {
            let item: any = this.item(i);
            if (item.externalObject) {
                item = item.externalObject;
            }
            yield item;
        }
    }

    

    

		public add(item: IgxColumnSortDescription) : boolean {
		let iv = this.i.add((item == null ? null : item.i));
		return (iv);
	}
	public insert(index: number, item: IgxColumnSortDescription) {
		this.i.insert(index, (item == null ? null : item.i));
	}
	public clear() {
		this.i.clear();
	}
	public indexOf(item: IgxColumnSortDescription) : number {
		let iv = this.i.indexOf((item == null ? null : item.i));
		return (iv);
	}
	public remove(item: IgxColumnSortDescription) : boolean {
		let iv = this.i.remove((item == null ? null : item.i));
		return (iv);
	}
	public removeAt(index: number) : IgxColumnSortDescription {
		let iv = this.i.removeAt(index);
		return (iv == null ? null : (iv as any).externalObject);
	}
}
