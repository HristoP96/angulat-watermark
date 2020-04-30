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

export const IgxLegendComponent_PROVIDERS = [{provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxLegendComponent)}];

/**
 * Represents a legend in a IgxDataChartComponent control.
* 
* The `IgxLegendComponent` helps end-user identify visuals of chart series with contextual information related to the data plotted in the chart control.   
* 
* ```html
*  <igx-data-chart 
*     [dataSource]="data"
* 	 [legend]="legend">
*     <igx-category-x-axis
*         label="label"
*         #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis       
*         #yAxis>
*     </igx-numeric-y-axis>
*     <igx-line-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-line-series>
* </igx-data-chart> 
*  <igx-legend #legend></igx-legend>
* ```
* 
* ```ts
* public legend : IgxLegendComponent;
* ```
*/
@Component({
  selector: 'igx-legend',
  template: ``,
    providers: [{ provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxLegendComponent) }],
    host: { 'class': 'ig-legend igx-legend' },
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
export class IgxLegendComponent extends IgxLegendBaseComponent implements OnDestroy
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

    public get i(): Legend {
        return this._implementation;
    }
		/**
	 * Gets or sets the current Legend object's orientation.
	*/
	get orientation() : LegendOrientation {
		return this.i.orientation;
	}
	@Input()
	set orientation(v: LegendOrientation) {
		this.i.orientation = ensureEnum<LegendOrientation>(LegendOrientation_$type, v);
	}
	/**
	 * Gets or sets color of text
	*/
	get textColor() : string {
		return (this.i.textColor as string);
	}
	@Input()
	set textColor(v: string) {
		this.i.textColor = v;
	}
	/**
	 * Gets or sets style of text.
	*/
	get textStyle() : string {
		return (this.i.textStyle as string);
	}
	@Input()
	set textStyle(v: string) {
		this.i.textStyle = v;
	}

    

	
}
