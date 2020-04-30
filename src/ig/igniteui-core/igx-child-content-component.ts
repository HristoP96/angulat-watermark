/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'igx-child-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ng-template #defaultTemplate>
        <div></div>
    </ng-template>
    <ng-container *ngTemplateOutlet="template ? template : defaultTemplate; context: context">
    </ng-container>
  `,
    host: { class: "ig-child-content igx-child-content" },
    styles: [`
  :host {
    display: block;
  }
`]
})
export class IgxChildContentComponent {
    constructor(private _changeDetectorRef: ChangeDetectorRef, public viewContainer: ViewContainerRef) {

    }

    private _template: TemplateRef<any> = null;
    @Input()
    set template(value: TemplateRef<any>) {
        this._template = value;
        this._changeDetectorRef.detectChanges();
        // if (this._context != null) {
        //     
        // }
    }
    get template(): TemplateRef<any> {
        return this._template;
    }



    markChanged() {
        this._changeDetectorRef.detectChanges();
    }
}