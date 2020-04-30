/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'igx-template-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #defaultTemplate>
        <div></div>
    </ng-template>
    <ng-container *ngTemplateOutlet="template ? template : defaultTemplate; context: context">
    </ng-container>
  `,
  host: { class: "ig-template-content igx-template-content" },
  styles: [`
  :host {
    display: block;
  }
`]
})
export class IgxTemplateContentComponent {
    constructor(private _changeDetectorRef: ChangeDetectorRef, public viewContainer: ViewContainerRef) {

    }

    private _template: TemplateRef<any> = null;
    @Input()
    set template(value: TemplateRef<any>) {
        this._template = value;
        if (this._context != null) {
            this._changeDetectorRef.detectChanges();
        }
    }
    get template(): TemplateRef<any> {
        return this._template;
    }

    private _context: any = null;
    @Input()
    set context(value: any) {
        if (this._context == null && value == null) {
            return;
        }
        this._context = value;
        this._changeDetectorRef.detectChanges();
    }
    get context(): any {
        return this._context;
    }

    markChanged() {
        this._changeDetectorRef.detectChanges();
    }
}