import { Type, OnDestroy, Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, forwardRef, Input, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxLegendBaseComponent } from './igx-legend-base-component';
import { Legend } from "./Legend";
import {LegendOrientation, LegendOrientation_$type } from './LegendOrientation';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { FinancialLegend } from './FinancialLegend';

export const IgxFinancialLegendComponent_PROVIDERS = [{provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxFinancialLegendComponent)}];

/**
 * Represents a legend that displays information about each series, most often used in financial charting.
*/
@Component({
  selector: 'igx-financial-legend',
  template: ``,
    providers: [{ provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxFinancialLegendComponent) }],
    host: { 'class': 'ig-financial-legend igx-financial-legend' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`:host {
    display: block;
}
.ig-legend {
    border: none;
    border: var(--legend-border, none);
    overflow: auto;
    overflow: var(--legend-item-overflow, auto);
}
.ig-chart-legend-item-text {
    font: 12px Verdana, Arial, sans-serif;
    font: var(--legend-item-font, 12px Verdana, Arial, sans-serif);
    vertical-align: middle;
    vertical-align: var(--legend-item-vertical-align, middle);
}
.ig-chart-legend-items-list
{
    padding: 5px;
    padding: var(--legend-item-padding, 5px);
    margin: 0px;
    margin: var(--legend-item-margin, 0px);
    background-color: transparent;
    background-color: var(--legend-list-background-color, transparent);
}
.ig-chart-legend-item-badge, .ui-chart-legend-item-badge canvas
{
    vertical-align: middle;
    vertical-align: var(--legend-item-badge-vertical-align, middle);
}
.ig-chart-legend-item
{
    background-color: transparent;
    background-color: var(--legend-item-background-color, transparent);
}`]
})
export class IgxFinancialLegendComponent extends IgxLegendBaseComponent implements OnDestroy
{
    container: Element;

    constructor(private renderer: Renderer2,
        private elRef: ElementRef,
        private ngZone: NgZone) {
        super();

        this._zoneRunner = (act: () => void) => this.ngZone.run(act);		
        this.container = renderer.createElement("div");
        renderer.appendChild(elRef.nativeElement, this.container);
        var root: any;
        root = this.container;
        if (this.container != null) {
            root = this.container;
        }
        var ren: AngularRenderer = new AngularRenderer(
            root, this.renderer, window.document,
            this.ngZone, true,
            DataChartStylingDefaults);
        this._wrapper = ren;
        this.i.provideContainer(ren);   
     
    }

    private _wrapper: AngularRenderer;

    ngOnDestroy() {
        this._wrapper.destroy();
        this.i.provideContainer(null);
    }

    protected createImplementation() {
        return new Legend();
    }

    public get i(): FinancialLegend {
        return this._implementation;
    }
		/**
	 * Gets if the legend is a financial legend.
	*/
	get isFinancial() : boolean {
		return (this.i.isFinancial as boolean);
	}

    

	
}
