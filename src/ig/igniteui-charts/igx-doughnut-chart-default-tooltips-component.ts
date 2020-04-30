/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, EventEmitter, Output, ViewChild, AfterContentInit, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxRingSeriesBaseComponent } from './igx-ring-series-base-component';

@Component({
  selector: 'igx-dougnut-chart-default-tooltips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #doughnutSliceTooltip let-series="series" let-item="item" let-implementation="i">
        <div class='ui-chart-default-tooltip-content'>            
            <span [style.color]="getBrush(implementation)">{{getSliceLabel(series, item)}}</span>
            <br/>
            <span class="ui-tooltip-priority">{{getValueMemberPath(series)}} : {{getValue(series, item)}}</span>
        </div>
    </ng-template>
  `,
  styles: []
})
export class IgxDoughnutChartDefaultTooltipsComponent implements AfterContentInit {
    
    @ViewChild("doughnutSliceTooltip", { static: true })
    public doughnutSliceTooltip: TemplateRef<any>;
    
    constructor(private _changeDetectorRef: ChangeDetectorRef) {

    }

    ensureDefaultTooltip(series: IgxRingSeriesBaseComponent) {
        if (series.showDefaultTooltip) {
            series.tooltipTemplate = this.doughnutSliceTooltip;
        } else {
            if (series.tooltipTemplate === this.doughnutSliceTooltip) {
                series.tooltipTemplate = null;
            }
        }
    }

    getSliceLabel(series: any, item: any) {
        return item[series.labelMemberPath];
    }

    getValue(series: any, item: any) {
        return item[this.getValueMemberPath(series)];
    }
    
    getValueMemberPath(series: any) {
        return series.valueMemberPath;
    }
    
    getBrush(i: any) {
        if (i.slice.background)
            return i.slice.background.fill;
        return "black";
    }
    

    static register(): void {
        TypeRegistrar.registerCons("IgxDoughnutChartDefaultTooltipsComponent", IgxDoughnutChartDefaultTooltipsComponent);
    }

    @Output()
    onContentReady: EventEmitter<any> = new EventEmitter<any>();

    ngAfterContentInit(): void {
        this.onContentReady.emit({});
    }
}