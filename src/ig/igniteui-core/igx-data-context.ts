import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { DataContext as DataContext_internal } from "./DataContext";
import { brushToString, stringToBrush, toSpinal, initializePropertiesFromCss, NamePatcher } from "./componentUtil";

export class IgxDataContext
{
protected createImplementation() : DataContext_internal
{
	return new DataContext_internal();
}
	protected _implementation: any;
	public get i() : DataContext_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
		this._implementation = this.createImplementation();
		(<any>this._implementation).externalObject = this;
		this.onImplementationCreated();
	}

    get series() : any {
		return <any>this.i.series.externalObject;
	}

	set series(v: any) {
        if (v == null) {
            this.i.series = null;
            return;
        }
		this.i.series = v.i;
	}

		/**
	 * Gets the item that is in context.
	*/
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	/**
	 * Gets the actual resolved brush in use for the item that is in context.
	*/
	get actualItemBrush() : string {
		return brushToString(this.i.actualItemBrush);
	}
	set actualItemBrush(v: string) {
		this.i.actualItemBrush = stringToBrush(v);
	}
	/**
	 * Gets the outline in use for the item in context.
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets the label in use for the item in context, if available.
	*/
	get itemLabel() : any {
		return this.i.itemLabel as any;
	}
	set itemLabel(v: any) {
		this.i.itemLabel = v;
	}
	/**
	 * Gets the potential brush in usage for the item in context.
	*/
	get itemBrush() : string {
		return brushToString(this.i.itemBrush);
	}
	set itemBrush(v: string) {
		this.i.itemBrush = stringToBrush(v);
	}
	/**
	 * Gets the thickness of the item in context.
	*/
	get thickness() : number {
		return (this.i.thickness as number);
	}
	set thickness(v: number) {
		this.i.thickness = +v;
	}
	/**
	 * Gets the legend label to use for the item in context, if available.
	*/
	get legendLabel() : any {
		return this.i.legendLabel as any;
	}
	set legendLabel(v: any) {
		this.i.legendLabel = v;
	}

    

	
}
