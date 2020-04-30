import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicSymbolSeriesBase } from "./GeographicSymbolSeriesBase";

export const IgxGeographicSymbolSeriesBaseComponent_PROVIDERS = [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicSymbolSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicSymbolSeriesBaseComponent)}];
export abstract class IgxGeographicSymbolSeriesBaseComponent extends IgxGeographicMapSeriesHostComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : GeographicSymbolSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
