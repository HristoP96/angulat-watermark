import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { GetTileImageUriArgs as GetTileImageUriArgs_internal } from "./GetTileImageUriArgs";

/**
 * Event arguments for GetTileImageUri event
*/
export class IgxGetTileImageUriArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GetTileImageUriArgs_internal {
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
	/**
	 * Gets or sets the tile level.
	*/
	get tileLevel() : number {
		return (this.i.tileLevel as number);
	}
	set tileLevel(v: number) {
		this.i.tileLevel = +v;
	}
	/**
	 * Gets or sets the tile's X position
	*/
	get tilePositionX() : number {
		return (this.i.tilePositionX as number);
	}
	set tilePositionX(v: number) {
		this.i.tilePositionX = +v;
	}
	/**
	 * Gets or sets the tile's Y position
	*/
	get tilePositionY() : number {
		return (this.i.tilePositionY as number);
	}
	set tilePositionY(v: number) {
		this.i.tilePositionY = +v;
	}
	/**
	 * Gets or sets the tile's image URI
	*/
	get tileImageUri() : string {
		return (this.i.tileImageUri as string);
	}
	set tileImageUri(v: string) {
		this.i.tileImageUri = v;
	}
}
