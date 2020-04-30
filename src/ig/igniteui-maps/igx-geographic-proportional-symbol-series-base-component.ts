import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicProportionalSymbolSeriesBase } from "./GeographicProportionalSymbolSeriesBase";

export const IgxGeographicProportionalSymbolSeriesBaseComponent_PROVIDERS = [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicProportionalSymbolSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicProportionalSymbolSeriesBaseComponent)}];
export abstract class IgxGeographicProportionalSymbolSeriesBaseComponent extends IgxGeographicMapSeriesHostComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : GeographicProportionalSymbolSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
