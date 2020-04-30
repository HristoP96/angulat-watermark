import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { CalloutStyleUpdatingEventArgs as CalloutStyleUpdatingEventArgs_internal } from "./CalloutStyleUpdatingEventArgs";
import { brushToString, stringToBrush } from "igniteui-core/componentUtil";

export class IgxCalloutStyleUpdatingEventArgs
{

protected createImplementation() : CalloutStyleUpdatingEventArgs_internal
{
	return new CalloutStyleUpdatingEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CalloutStyleUpdatingEventArgs_internal {
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
	get xValue() : any {
		return this.i.xValue as any;
	}
	set xValue(v: any) {
		this.i.xValue = v;
	}
	get yValue() : any {
		return this.i.yValue as any;
	}
	set yValue(v: any) {
		this.i.yValue = v;
	}
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
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
	get background() : string {
		return brushToString(this.i.background);
	}
	set background(v: string) {
		this.i.background = stringToBrush(v);
	}
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
	}
	get outline() : string {
		return brushToString(this.i.outline);
	}
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	get leaderBrush() : string {
		return brushToString(this.i.leaderBrush);
	}
	set leaderBrush(v: string) {
		this.i.leaderBrush = stringToBrush(v);
	}
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
	}
}
