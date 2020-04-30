import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { TileGeneratorMapImagery as TileGeneratorMapImagery_internal } from "./TileGeneratorMapImagery";
import { ITileGenerator } from "igniteui-core/ITileGenerator";

/**
 * Represents a CustomMapImagery MapImagery
*/
export class IgxTileGeneratorMapImagery extends IgxGeographicMapImagery
{

protected createImplementation() : TileGeneratorMapImagery_internal
{
	return new TileGeneratorMapImagery_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TileGeneratorMapImagery_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the culture name for this tile source.
	*/
	get tileGenerator() : ITileGenerator {
		return this.i.tileGenerator as ITileGenerator;
	}
	set tileGenerator(v: ITileGenerator) {
		this.i.tileGenerator = v;
	}
}
