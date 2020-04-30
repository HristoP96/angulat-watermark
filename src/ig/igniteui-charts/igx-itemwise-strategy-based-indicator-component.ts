import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ItemwiseStrategyBasedIndicator } from "./ItemwiseStrategyBasedIndicator";

/**
 * Financial indicator base class for doing calculating an itemwize indicator.
 * An itemwise indicator's individual values don't depend on any other values in the 
 * collection so can always be independently recalculated. Also, because of this, the 
 * base class handles all the looping logic and inheritors only need to provide the 
 * actual calculation.
*/
export const IgxItemwiseStrategyBasedIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxItemwiseStrategyBasedIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxItemwiseStrategyBasedIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxItemwiseStrategyBasedIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxItemwiseStrategyBasedIndicatorComponent)}];
export abstract class IgxItemwiseStrategyBasedIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : ItemwiseStrategyBasedIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
