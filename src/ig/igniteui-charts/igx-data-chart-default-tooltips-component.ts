/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, EventEmitter, Output, ViewChild, AfterContentInit, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxSeriesComponent } from './igx-series-component';
import { IgxAxisComponent } from './igx-axis-component';
import { FastReflectionHelper } from 'igniteui-core/FastReflectionHelper';

@Component({
    selector: 'igx-data-chart-default-tooltips',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ng-template #anchoredCategoryTooltip let-series="series" let-item="item">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">            
            <span *ngIf="series.xAxis.isDateTime">{{shortDate(series.xAxis.getItemValue(asAny(item),'dateTimeMemberPath'))}}</span>
            <br *ngIf="series.xAxis.isDateTime" />
            <span *ngIf="!series.xAxis.isDateTime && series.xAxis.label">{{format(series.xAxis.getItemValue(asAny(item), 'label'))}}</span>
            <br *ngIf="!series.xAxis.isDateTime && series.xAxis.label" />
            <span [style.color]="getBrush(series)">{{series.title}}: </span>
            <span class="ui-tooltip-priority">{{getAnchoredValue(series, item)}}</span>
        </div>
    </ng-template>
    <ng-template #anchoredVerticalCategoryTooltip let-series="series" let-item="item">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">            
            <span *ngIf="series.yAxis.isDateTime">{{shortDate(series.yAxis.getItemValue(asAny(item), 'dateTimeMemberPath'))}}</span>
            <br *ngIf="series.yAxis.isDateTime" />
            <span *ngIf="!series.yAxis.isDateTime && series.yAxis.label">{{format(series.yAxis.getItemValue(asAny(item), 'label'))}}</span>
            <br *ngIf="!series.yAxis.isDateTime && series.yAxis.label" />
            <span [style.color]="getBrush(series)">{{series.title}}: </span>
            <span class="ui-tooltip-priority">{{getAnchoredValue(series, item)}}</span>
        </div>
    </ng-template>
    <ng-template #financialTooltip let-series="series" let-item="item" let-itemLabel="itemLabel">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">            
            <span *ngIf="series.xAxis.isDateTime">{{itemLabel}}</span>
            <br *ngIf="series.xAxis.isDateTime" />
            <span *ngIf="!series.xAxis.isDateTime && series.xAxis.label">{{format(series.xAxis.getItemValue(asAny(item), 'label'))}}</span>
            <br *ngIf="!series.xAxis.isDateTime && series.xAxis.label" />
            <span [style.color]="getBrush(series)">{{series.title}}: </span>
            <table>
                <tr *ngIf="hasOpen(series)"><td>Open:</td><td>{{getOpenValue(series, item)}}</td></tr>
                <tr *ngIf="hasHigh(series)"><td>High:</td><td>{{getHighValue(series, item)}}</td></tr>
                <tr *ngIf="hasLow(series)"><td>Low:</td><td>{{getLowValue(series, item)}}</td></tr>
                <tr *ngIf="hasClose(series)"><td>Close:</td><td>{{getCloseValue(series, item)}}</td></tr>
                <tr *ngIf="hasVolume(series)"><td>Volume:</td><td>{{getVolumeValue(series, item)}}</td></tr>
            </table>
        </div>
    </ng-template>    
    <ng-template #scatterTooltip let-series="series" let-item="item">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">   
            <span [style.color]="getBrush(series)">{{series.title}}</span>
            <br/>
            <span *ngIf="hasRadius(series)">({{getXValue(series, item)}}, {{getYValue(series, item)}}), radius: {{getRadiusValue(series, item)}}</span>
            <span *ngIf="!hasRadius(series)">x: {{getXValue(series, item)}}</span>
            <br *ngIf="!hasRadius(series)"/>
            <span *ngIf="!hasRadius(series)">y: {{getYValue(series, item)}}</span>
        </div>
    </ng-template>
    <ng-template #polarTooltip let-series="series" let-item="item">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">
            <span>{{getAngleValue(series, item)}}</span>
            <br/>
            <span [style.color]="getBrush(series)">{{series.title}}: {{getRadiusValue(series, item)}}</span> 
        </div>
    </ng-template>
    <ng-template #radialTooltip let-series="series" let-item="item">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">
            <span>{{series.angleAxis.label}}</span>
            <br/>
            <span [style.color]="getBrush(series)">{{series.title}}: {{getAnchoredValue(series, item)}}</span> 
        </div>
    </ng-template>    
    <ng-template #rangeTooltip let-series="series" let-item="item">
    <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">            
        <span *ngIf="series.xAxis.isDateTime">{{shortDate(series.xAxis.getItemValue(asAny(item), 'dateTimeMemberPath'))}}</span>
        <br *ngIf="series.xAxis.isDateTime" />
        <span *ngIf="!series.xAxis.isDateTime && series.xAxis.label">{{format(series.xAxis.getItemValue(asAny(item), 'label'))}}</span>
        <br *ngIf="!series.xAxis.isDateTime && series.xAxis.label" />
        <span [style.color]="getBrush(series)">{{series.title}}: </span>
        <span class="ui-tooltip-priority">{{getLowValue(series, item)}} - {{getHighValue(series, item)}}</span>
    </div>
    </ng-template>    
    <ng-template #shapeTooltip let-series="series" let-item="item">
        <div class='ui-chart-default-tooltip-content' *ngIf="item" style="white-space:nowrap">   
            <span [style.color]="getBrush(series)">{{series.title}}</span>
            <br *ngIf="hasXY(series, item)"/>
            <span *ngIf="hasXY(series, item)">({{getXValue(series, item)}}, {{getYValue(series, item)}})</span>
            <br *ngIf="hasColor(series)"/>
            <span *ngIf="hasColor(series)">value: {{getColorValue(series, item)}}</span>
            <br *ngIf="hasValue(series)"/>
            <span *ngIf="hasValue(series)">value: {{item}}</span>
        </div>
    </ng-template>
  `,
    styles: []
})
export class IgxDataChartDefaultTooltipsComponent implements AfterContentInit {

    @ViewChild("anchoredCategoryTooltip", { static: true })
    public anchoredCategoryTooltip: TemplateRef<any>;

    @ViewChild("anchoredVerticalCategoryTooltip", { static: true })
    public anchoredVerticalCategoryTooltip: TemplateRef<any>;

    @ViewChild("financialTooltip", { static: true })
    public financialTooltip: TemplateRef<any>;

    @ViewChild("polarTooltip", { static: true })
    public polarTooltip: TemplateRef<any>;

    @ViewChild("radialTooltip", { static: true })
    public radialTooltip: TemplateRef<any>;

    @ViewChild("rangeTooltip", { static: true })
    public rangeTooltip: TemplateRef<any>;

    @ViewChild("scatterTooltip", { static: true })
    public scatterTooltip: TemplateRef<any>;

    @ViewChild("shapeTooltip", { static: true })
    public shapeTooltip: TemplateRef<any>;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {

    }

    ensureDefaultTooltip(series: IgxSeriesComponent) {

        if (series.isPolar) {
            if (series.showDefaultTooltip) {
                series.tooltipTemplate = this.polarTooltip;
            } else {
                if (series.tooltipTemplate === this.polarTooltip) {
                    series.tooltipTemplate = null;
                }
            }
        } else if (series.isRadial) {
            if (series.showDefaultTooltip) {
                series.tooltipTemplate = this.radialTooltip;
            } else {
                if (series.tooltipTemplate === this.radialTooltip) {
                    series.tooltipTemplate = null;
                }
            }
        } else if (series.isShape) {
            if (series.showDefaultTooltip) {
                series.tooltipTemplate = this.shapeTooltip;
            } else {
                if (series.tooltipTemplate === this.shapeTooltip) {
                    series.tooltipTemplate = null;
                }
            }
        } else if (series.isScatter) {
            if (series.showDefaultTooltip) {
                series.tooltipTemplate = this.scatterTooltip;
            } else {
                if (series.tooltipTemplate === this.scatterTooltip) {
                    series.tooltipTemplate = null;
                }
            }
        } else if (series.isCategory &&
            !series.isFinancial) {
            let tooltip = series.isVertical ? this.anchoredVerticalCategoryTooltip : series.isRange ? this.rangeTooltip : this.anchoredCategoryTooltip;
            if (series.showDefaultTooltip) {
                series.tooltipTemplate = tooltip;
            } else {
                if (series.tooltipTemplate === tooltip) {
                    series.tooltipTemplate = null;
                }
            }
        } else if (series.isFinancial) {
            if (series.showDefaultTooltip) {
                series.tooltipTemplate = this.financialTooltip;
            } else {
                if (series.tooltipTemplate === this.financialTooltip) {
                    series.tooltipTemplate = null;
                }
            }
        }
    }

    format(value: any) {
        if (value == undefined || value == null) {
            return "";
        }
        if (value.getTime) {
            return this.shortDate(value);
        }
        return value.toString();
    }

    shortDate(item: Date) {
        if (item == undefined || item == null) {
            return "";
        }
        return item.toLocaleDateString() + " " + item.toLocaleTimeString();
    }

    hasOpen(series: any) {
        return series.openMemberPath;
    }

    getOpenValue(series: any, item: any) {
        return this.getItemValue(series, item, "openMemberPath", series.openMemberPath);
    }

    hasHigh(series: any) {
        return series.highMemberPath;
    }

    getHighValue(series: any, item: any) {
        return this.getItemValue(series, item, "highMemberPath", series.highMemberPath);
    }

    hasLow(series: any) {
        return series.lowMemberPath;
    }

    getLowValue(series: any, item: any) {
        return this.getItemValue(series, item, "lowMemberPath", series.lowMemberPath);
    }

    hasClose(series: any) {
        return series.closeMemberPath;
    }

    getCloseValue(series: any, item: any) {
        return this.getItemValue(series, item, "closeMemberPath", series.closeMemberPath);
    }

    hasVolume(series: any) {
        return series.volumeMemberPath;
    }

    getVolumeValue(series: any, item: any) {
        return this.getItemValue(series, item, "volumeMemberPath", series.volumeMemberPath);
    }

    getAnchoredValue(series: any, item: any) {
        return this.getItemValue(series, item, "valueMemberPath", series.valueMemberPath);
    }

    getXValue(series: any, item: any) {
        return this.getItemValue(series, item, "xMemberPath", series.xMemberPath);
    }

    getYValue(series: any, item: any) {
        return this.getItemValue(series, item, "yMemberPath", series.yMemberPath);
    }

    hasRadius(series: any) {
        return series.radiusMemberPath !== undefined;
    }

    getRadiusValue(series: any, item: any) {
        return this.getItemValue(series, item, "radiusMemberPath", series.radiusMemberPath);
    }

    getAngleValue(series: any, item: any) {
        return this.getItemValue(series, item, "angleMemberPath", series.angleMemberPath);
    }

    hasValue(series: any) {
        return series.valueMemberPath;
    }

    getItemValue(series: any, item: any, memberPath: string, memberPathValue: string) {
        return series.getItemValue(item, memberPath);
    }

    getValue(series: any, item: any) {
        return this.getItemValue(series, item, "valueMemberPath", series.valueMemberPath);
    }

    getBrush(series: IgxSeriesComponent) {
        return series.actualBrush;
    }

    hasXY(series: any, item: any) {
        return series.xMemberPath && series.yMemberPath && item[series.xMemberPath] && item[series.yMemberPath];
    }

    hasColor(series: any) {
        return series.colorMemberPath;
    }

    getColorValue(series: any, item: any) {
        return this.getItemValue(series, item, "colorMemberPath", series.colorMemberPath);
    }

    asAny(item: any): any {
        return item;
    }

    static register(): void {
        TypeRegistrar.registerCons("IgxDataChartDefaultTooltipsComponent", IgxDataChartDefaultTooltipsComponent);
    }

    @Output()
    onContentReady: EventEmitter<any> = new EventEmitter<any>();

    ngAfterContentInit(): void {
        this.onContentReady.emit({});
    }
}