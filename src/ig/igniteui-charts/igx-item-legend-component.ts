import { Type, OnDestroy, Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, forwardRef, Input, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxLegendBaseComponent } from './igx-legend-base-component';
import { ItemLegend } from "./ItemLegend";
import {LegendOrientation, LegendOrientation_$type } from './LegendOrientation';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";

export const IgxItemLegendComponent_PROVIDERS = [{provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxItemLegendComponent)}];

/**
 * Represents a legend that displays an item for each point in the series.
* 
* You can use the `IgxItemLegendComponent` to display a legend item for each data member bound to the `IgxBubbleSeriesComponent`
*/
@Component({
  selector: 'igx-item-legend',
    template: ``,
    host: { 'class': 'ig-item-legend igx-item-legend' },
  providers: [{provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxItemLegendComponent)}],
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
export class IgxItemLegendComponent extends IgxLegendBaseComponent implements OnDestroy
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
        return new ItemLegend();
    }

    public get i(): ItemLegend {
        return this._implementation;
    }
    public createItemwiseLegendItems(legendItems, series): void {
        this.i.createItemwiseLegendItems(legendItems, series);
    }
    public exportVisualData(): any {
        return this.i.exportVisualData();
    }
    public exportSerializedVisualData(): any {
        return this.i.exportSerializedVisualData();
    }
		/**
	 * Gets whether or not this legend supports itemwise visuals
	*/
	get isItemwise() : boolean {
		return (this.i.isItemwise as boolean);
	}

    

	
}
