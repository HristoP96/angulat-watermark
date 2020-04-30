import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TreemapNodePointerEventArgs as TreemapNodePointerEventArgs_internal } from "./TreemapNodePointerEventArgs";
import { fromPoint, toPoint, ensureBool } from "igniteui-core/componentUtil";

export class IgxTreemapNodePointerEventArgs
{

protected createImplementation() : TreemapNodePointerEventArgs_internal
{
	return new TreemapNodePointerEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : TreemapNodePointerEventArgs_internal {
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
	get position() : IgPoint {
		return fromPoint(this.i.position);
	}
	set position(v: IgPoint) {
		this.i.position = toPoint(v);
	}
	get isRightButton() : boolean {
		return (this.i.isRightButton as boolean);
	}
	set isRightButton(v: boolean) {
		this.i.isRightButton = ensureBool(v);
	}
	get isHandled() : boolean {
		return (this.i.isHandled as boolean);
	}
	set isHandled(v: boolean) {
		this.i.isHandled = ensureBool(v);
	}
	get isOverHeader() : boolean {
		return (this.i.isOverHeader as boolean);
	}
	set isOverHeader(v: boolean) {
		this.i.isOverHeader = ensureBool(v);
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
}
