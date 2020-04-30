/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, OnDestroy, EventEmitter, Output, ComponentRef, AfterViewInit, TemplateRef, Injector, ComponentFactoryResolver, Component, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'igx-component-renderer-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ng-container #dynamicContent></ng-container>
  `,
    styles: [`
  :host {
    display: block;
  }`]
})
export class IgxComponentRendererContainerComponent {
    constructor(private _renderer: Renderer2, 
        private _elRef: ViewContainerRef,
        private _ngZone: NgZone,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector) {

    }

    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    private listeners: ((r: any) => void)[] = [];
    private _currentRoot: any = null;
    private _currentRootRef: any = null;

    static isEvent(ev: any): boolean {
        return ev instanceof EventEmitter;
    }

    replaceRootItem(t: any, continueActions: (resumeRequired: boolean) => void) {  
        if (this._currentRoot != null) {
            this._currentRoot
        }

        let cf = this._componentFactoryResolver.resolveComponentFactory(t);
        let cr = this._dynamicContent.createComponent(cf);
        this._currentRootRef = cr;
        this._currentRoot = cr.instance;
        (this._currentRoot as any).width = "100%";
        (this._currentRoot as any).height = "100%";
        continueActions(false);
    }

    clearContainer(continueActions: (resumeRequired: boolean) => void) {
        if (this._currentRootRef) {
            this._currentRootRef.destroy();
            this._currentRootRef = null;
            this._currentRoot = null;
        }
        continueActions(false);
    }

    getRootObject(): any {
        return this._currentRoot;
    }

}
