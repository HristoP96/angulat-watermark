/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, ViewChild, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { IgxTemplateContentComponent } from './igx-template-content-component';
import { TypeRegistrar } from './type';

@Component({
  selector: 'igx-tooltip-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "ig-tooltip-container igx-tooltip-container" },
  template: `
    <ng-template #defaultContainer>
        <div class='ig-tooltip-container-background' *ngIf="context !== null && context.item !== null"
            [style.border-color]="context && context.isSubContent ? 'transparent' : '#666'">
            <igx-template-content *ngIf="context !== null" [template]="template" [context]="context"></igx-template-content>
        </div>
    </ng-template>
    <ng-container *ngTemplateOutlet="containerTemplate ? containerTemplate : defaultContainer; context: context">
    </ng-container>
  `,
    styles: [`
        .ig-tooltip-container-background {
            padding: 5px; 
            padding: var(--tooltip-container-padding, 5px);
            background-color: white; 
            background-color: var(--tooltip-container-background-color, white);
            border-style: solid; 
            border-style: var(--tooltip-container-border-style, solid);
            border-width: 1px; 
            border-width: var(--tooltip-container-border-width, 1px);
            color: inherit; 
            color: var(--tooltip-container-text-color, inherit);
            pointer-events: none;
            white-space: nowrap;
        }
`]
})
export class IgxTooltipContainerComponent {
    constructor(private _changeDetectorRef: ChangeDetectorRef) {

    }

    @ViewChild(IgxTemplateContentComponent, { static: true })
    private _tooltipContent: IgxTemplateContentComponent;

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

    private _containerTemplate: TemplateRef<any> = null;
    @Input()
    set containerTemplate(value: TemplateRef<any>) {
        this._containerTemplate = value;
        if (this._context != null) {
            this._changeDetectorRef.detectChanges();
        }
    }
    get containerTemplate(): TemplateRef<any> {
        return this._containerTemplate;
    }

    private _context: any = null;
    @Input()
    set context(value: any) {
        this._context = value;
        this._changeDetectorRef.detectChanges();

        if (this._tooltipContent != null) {
            this._tooltipContent.markChanged();
        }
        //console.log("tool:" + this._tooltipContent != null);
    }
    get context(): any {
        return this._context;
    }

    static register(): void {
        TypeRegistrar.registerCons("IgxTooltipContainerComponent", IgxTooltipContainerComponent);
    }
}