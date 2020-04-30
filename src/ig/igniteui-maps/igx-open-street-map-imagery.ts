import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { OpenStreetMapImagery as OpenStreetMapImagery_internal } from "./OpenStreetMapImagery";

/**
 * UI element class used to display OpenStreetMap imagery in the IgxGeographicMap.Component
*/
export class IgxOpenStreetMapImagery extends IgxGeographicMapImagery
{

protected createImplementation() : OpenStreetMapImagery_internal
{
	return new OpenStreetMapImagery_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : OpenStreetMapImagery_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the tile path URL.
	*/
	get tilePath() : string {
		return (this.i.tilePath as string);
	}
	set tilePath(v: string) {
		this.i.tilePath = v;
	}
}
