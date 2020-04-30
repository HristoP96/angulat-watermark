import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxTreemapNodeStyleComponent } from "./igx-treemap-node-style-component";
import { TreemapNodeStylingEventArgs as TreemapNodeStylingEventArgs_internal } from "./TreemapNodeStylingEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

export class IgxTreemapNodeStylingEventArgs
{

protected createImplementation() : TreemapNodeStylingEventArgs_internal
{
	return new TreemapNodeStylingEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : TreemapNodeStylingEventArgs_internal {
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
	get value() : number {
		return (this.i.value as number);
	}
	set value(v: number) {
		this.i.value = +v;
	}
	get sum() : number {
		return (this.i.sum as number);
	}
	set sum(v: number) {
		this.i.sum = +v;
	}
	get customValue() : any {
		return this.i.customValue as any;
	}
	set customValue(v: any) {
		this.i.customValue = v;
	}
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	get parentItem() : any {
		return this.i.parentItem as any;
	}
	set parentItem(v: any) {
		this.i.parentItem = v;
	}
	get label() : string {
		return (this.i.label as string);
	}
	set label(v: string) {
		this.i.label = v;
	}
	get parentValue() : number {
		return (this.i.parentValue as number);
	}
	set parentValue(v: number) {
		this.i.parentValue = +v;
	}
	get parentLabel() : string {
		return (this.i.parentLabel as string);
	}
	set parentLabel(v: string) {
		this.i.parentLabel = v;
	}
	get parentSum() : number {
		return (this.i.parentSum as number);
	}
	set parentSum(v: number) {
		this.i.parentSum = +v;
	}
	get isParent() : boolean {
		return (this.i.isParent as boolean);
	}
	set isParent(v: boolean) {
		this.i.isParent = ensureBool(v);
	}
	get style() : IgxTreemapNodeStyleComponent {
	                                        if (this.i.style == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.style as any).externalObject) {
	                                            let e = IgxTreemapNodeStyleComponent._createFromInternal(this.i.style);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.style;
	                                            }
	                                            (this.i.style as any).externalObject = e;
	                                        }
		return (this.i.style as any).externalObject;
	}
	set style(v: IgxTreemapNodeStyleComponent) {
		v == null ? this.i.style = null : this.i.style = v.i;
	}
}
