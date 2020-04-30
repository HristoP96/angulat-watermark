import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxPolarBaseComponent } from "./igx-polar-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PolarLineSeriesBase } from "./PolarLineSeriesBase";

/**
 * Represents the base class from which all IgxDataChartComponent polar line series are derived.
*/
export const IgxPolarLineSeriesBaseComponent_PROVIDERS = [{provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarLineSeriesBaseComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarLineSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarLineSeriesBaseComponent)}];
export abstract class IgxPolarLineSeriesBaseComponent extends IgxPolarBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : PolarLineSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
