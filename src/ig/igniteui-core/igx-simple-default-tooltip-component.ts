/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, EventEmitter, Output, ViewChild, AfterContentInit, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { TypeRegistrar } from 'igniteui-core/type';

@Component({
  selector: 'igx-simple-default-tooltips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `  
  <ng-template #tooltip let-context="i" >
    <div class='ui-simple-default-tooltip-content' *ngIf="context">
        <span  style="white-space: nowrap;font-weight: bold;" >{{getLabel(context)}}</span>
    </div>
  </ng-template>
  `,
  styles: []
})
export class IgxSimpleDefaultTooltipComponent implements AfterContentInit {
    
    @ViewChild("tooltip", { static: true })
    public tooltip: TemplateRef<any>;

    labelText:any;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {

    }

    ensureDefaultTooltip(gauge: any) {
        if (gauge.showToolTip) {
            gauge.tooltipTemplate = this.tooltip;
        } else {
            gauge.tooltipTemplate = null;
        }
    }

    getLabel(context: any) {
        if (context.itemName == null) {
            let label = context.label.split(":");
            return label.length < 2 ? context.label : label[1].trim();
        }
        return context.label;
    }
    
    @Output()
    onContentReady: EventEmitter<any> = new EventEmitter<any>();

    ngAfterContentInit(): void {
        this.onContentReady.emit({});
    }

    static register(): void {
        TypeRegistrar.registerCons("IgxSimpleDefaultTooltipComponent", IgxSimpleDefaultTooltipComponent);
    }
}