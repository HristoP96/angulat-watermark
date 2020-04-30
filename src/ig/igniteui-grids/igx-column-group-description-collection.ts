import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnGroupDescription } from "./igx-column-group-description";
import { ColumnGroupDescription as ColumnGroupDescription_internal } from "./ColumnGroupDescription";
import { ColumnGroupDescriptionCollection as ColumnGroupDescriptionCollection_internal } from "./ColumnGroupDescriptionCollection";

/**
 * Represents a collection of grouping elements that are applied to a data source or provider.
*/
export class IgxColumnGroupDescriptionCollection {

    protected createImplementation(): ColumnGroupDescriptionCollection_internal {
        return new ColumnGroupDescriptionCollection_internal();
    }
    protected _implementation: any;
    public get i(): ColumnGroupDescriptionCollection_internal {
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

    public item(index: number, value?: IgxColumnGroupDescription): IgxColumnGroupDescription {
        let int: ColumnGroupDescription_internal = null;

        if (value !== undefined) {
            int = this.i.set(index, value == null ? null : value.i);
        } else {
            int = this.i.get(index);
        }

        let ext: IgxColumnGroupDescription = null;
        if (int != null) {
            ext = (int as any).externalObject;
            if (!ext) {
                ext = new IgxColumnGroupDescription();
                (ext as any)._implementation = int;
                (int as any).externalObject = ext;
            }
        }

        return ext;
    }

    public get count(): number {
        return this.i.size();
    }

    public toArray(): IgxColumnGroupDescription[] {
        let arr: IgxColumnGroupDescription[] = [];
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

    

    

		public add(item: IgxColumnGroupDescription) : boolean {
		let iv = this.i.add((item == null ? null : item.i));
		return (iv);
	}
	public insert(index: number, item: IgxColumnGroupDescription) {
		this.i.insert(index, (item == null ? null : item.i));
	}
	public clear() {
		this.i.clear();
	}
	public indexOf(item: IgxColumnGroupDescription) : number {
		let iv = this.i.indexOf((item == null ? null : item.i));
		return (iv);
	}
	public remove(item: IgxColumnGroupDescription) : boolean {
		let iv = this.i.remove((item == null ? null : item.i));
		return (iv);
	}
	public removeAt(index: number) : IgxColumnGroupDescription {
		let iv = this.i.removeAt(index);
		return (iv == null ? null : (iv as any).externalObject);
	}
}
