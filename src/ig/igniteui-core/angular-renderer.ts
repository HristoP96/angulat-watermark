/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, AfterContentInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, NgZone, Renderer2 } from '@angular/core';
import { List$1 } from "./List$1";
import { String_$type, TypeRegistrar } from './type';
import { DomRenderer, DomWrapper, DomPortal } from './dom';
import { fromSpinal } from './componentUtil';
import { CssHelper } from './CssHelper';

export class AngularRenderer implements DomRenderer {
    constructor(private container: any,
        renderer: Renderer2,
        document: any,
        ngZone: NgZone,
        useDefaultsSource: boolean,
        defaultsSource: { [key: string]: any }, portalManager: PortalManager = null) {
        this._renderer = renderer;
        this._document = document;
        this._ngZone = ngZone;
        this._container = container;
        this._rootElement = container;
        this._rootWrapper = new AngularWrapper(this._rootElement, this._renderer, this._ngZone);
        this._cssHelper = new AngularCssHelper(this._renderer, this._document);
        this._useDefaultsSource = useDefaultsSource;
        this._defaultsSource = defaultsSource;
        this._portalManager = portalManager;
        if (this._portalManager) {
            this._portalManager.renderer = this;
        }
    }

    private _useRenderer: boolean = false;
    private _container: any;
    private _renderer: Renderer2;
    private _document: any;
    private _ngZone: NgZone;
    private _useDefaultsSource: boolean = false;
    private _defaultsSource: { [key: string]: any };
    private _rootWrapper: AngularWrapper;
    private _rootElement: any;
    private _cssHelper: AngularCssHelper;
    private _checkResized: () => void = null;
    private _resizeListener: () => void = null;
    private _resizeTicking: boolean = false;
    private _portalManager: PortalManager = null;

    addSizeWatcher(onResized: () => void) {
        let previousWidth = this._rootElement.offsetWidth;
        let previousHeight = this._rootElement.offsetHeight;
        let previousRatio = window.devicePixelRatio;
        if (this._checkResized == null) {
            this._checkResized = () => {
                let currWidth = this._rootElement.offsetWidth;
                let currHeight = this._rootElement.offsetHeight;
                let currRatio = window.devicePixelRatio;

                let changed = false;
                if (previousWidth != currWidth ||
                    previousHeight != currHeight ||
                    previousRatio != currRatio) {
                    changed = true;
                }

                previousWidth = currWidth;
                previousHeight = currHeight;
                previousRatio = currRatio;

                if (changed) {
                    onResized();
                }
            }
        }

        this._resizeListener = this.globalListen("window", "resize", (ev) => this._checkResized());

        let self = this;
        this._resizeTicking = true;
        function resizeTick() {
            self._resizeTickId = -1;
            if (self._resizeTicking) {
                self._checkResized();
                self._resizeTickId = self.setTimeout(resizeTick, 100);
            }
        }
        this._resizeTickId = this.setTimeout(resizeTick, 100);
    }

    destroy() {
        for (let i = 0; i < this._toUnbind.length; i++) {
            this._toUnbind[i]();
        }
        this._toUnbind = [];
        this.removeSizeWatcher();
        this._rootWrapper.destroy();
        this._rootWrapper = null;
        this._rootElement = null;
    }

    private _resizeTickId: number = -1;
    removeSizeWatcher() {
        this._resizeTicking = false;
        if (this._resizeTickId != -1) {
            window.clearTimeout(this._resizeTickId);
            this._resizeTickId = -1;
        }
        if (this._resizeListener != null) {
            this._resizeListener();
            this._resizeListener = null;
        }
    }

    withRenderer(act: (ren: Renderer2) => void) {
        //if (NgZone.isInAngularZone()) {
        act(this._renderer);
        //    return;
        //} else {
        //    this._ngZone.run(() => {
        //        act(this._renderer);
        //    });
        //}
    }

    supportsAnimation(): boolean {
        return true;
    }

    getRequestAnimationFrame(): (act: () => void) => void {
        let ret = (act: () => void): void => {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(
                    act)
            });
        }
        return ret;
    }

    setTimeout(act: () => void, millisecondsDelay: number): number {
        let val: number;
        this._ngZone.runOutsideAngular(() => {
            val = window.setTimeout(act, millisecondsDelay);
        });
        return val;
    }

    clearTimeout(timerId) {
        this._ngZone.runOutsideAngular(() => {
            window.clearTimeout(timerId);
        });
    }

    get rootWrapper(): DomWrapper {
        return this._rootWrapper;
    }

    querySelector(selector: string): DomWrapper {
        let wrapper: DomWrapper = null;
        this.withRenderer((ren) => {
            let ele = this.rootWrapper.getNativeElement().querySelector(selector);
            wrapper = new AngularWrapper(ele, ren, this._ngZone);
        });
        return wrapper;
    }

    getWrapper(ele: any): DomWrapper {
        let wrapper: DomWrapper = null;
        this.withRenderer((ren) => {
            wrapper = new AngularWrapper(ele, ren, this._ngZone);
        });
        return wrapper;
    }

    getResourceString(resourceId: string): string {
        //TODO: fix this;
        return "";
    }

    append(child: DomWrapper): DomRenderer {
        this._rootWrapper.append(child);
        return this;
    }

    appendToBody(element: DomWrapper): void {
        if (this._document !== null && this._document.body !== null) {
            this._document.body.appendChild(element.getNativeElement());
        }
    }

    runInMainZone(action: () => void) {
        if (NgZone.isInAngularZone()) {
            action();
            return;
        } else {
            this._ngZone.run(() => {
                action();
            });
        }
    }

    createElement(elementName): AngularWrapper {
        let ele: any;
        this.withRenderer((ren) => {
            ele = ren.createElement(elementName);
        });

        let wrap = new AngularWrapper(ele, this._renderer, this._ngZone);
        return wrap;
    }

    createElementNS(elementName, ns): AngularWrapper {
        let ele: any;
        this.withRenderer((ren) => {
            ele = ren.createElement(elementName, ns);
        });

        let wrap = new AngularWrapper(ele, this._renderer, this._ngZone);
        return wrap;
    }

    private _discStack: Array<AngularWrapper> = [];

    endCSSQuery(): void {
        this._currentFontQuery = null;
        if (!this.hasBody()) { return; }
        if (this._discStack.length > 0) {
            var toRemove = this._discStack.pop();

            let parent = toRemove.getNativeElement().parentElement;
            if (parent) {
                parent.removeChild(toRemove.getNativeElement());
            }
            //toRemove.remove();
        }
    }

    expandTemplate(template: string, args: any): AngularWrapper {
        throw new Error("not implemented");
    }

    get2DCanvasContext(canvas: AngularWrapper): CanvasRenderingContext2D {
        let context: CanvasRenderingContext2D = null;
        this.withRenderer((ren) => {
            var canv = <HTMLCanvasElement>(canvas.getNativeElement());
            context = canv.getContext("2d");
        });
        return context;
    }

    private get isComputedFontQuery() {
        return this._currentFontQuery != null &&
            this.hasBody();
    }

    getCssDefaultPropertyValue(className: string, propertyName: string): string {
        if (this._useDefaultsSource && !this.isComputedFontQuery) {
            let c = this._defaultsSource[className];
            if (className == "" || className == null) {
                c = this._defaultsSource;
            }
            if (c === undefined) {
                return null;
            }
            let v = c[propertyName];
            if (v === undefined) {
                return null;
            }
            return v;
        }
        return this._cssHelper.getPropertyValue(this.getCurrentDiscovery(), className, propertyName);
    }

    getCssDefaultValuesForClassCollection(classPrefix: string, propertyNames: string[]) {
        if (this._useDefaultsSource) {
            let ret: string[][] = [];
            for (let k in this._defaultsSource) {
                if (k.indexOf(classPrefix) === 0) {
                    let subRet: string[] = [];
                    ret.push(subRet);
                    for (let i = 0; i < propertyNames.length; i++) {
                        let v = this._defaultsSource[k][propertyNames[i]];
                        if (v === undefined) {
                            subRet.push(null);
                        } else {
                            subRet.push(v);
                        }
                    }
                }
            }
            return ret;
        }
        return this._cssHelper.getValuesForClassCollection(this.getCurrentDiscovery(), classPrefix, propertyNames);
    }

    getDefaultFontHeight(): number {
        if (this._defaultsSource["default-font-height"] !== undefined) {
            return +this._defaultsSource["default-font-height"];
        }

        return 16;
    }

    private static _fontHeightCache = {};
    getHeightForFontString(fontString, text, useOffsetHeight) {
        let key = fontString + ";" + text + ";" + (useOffsetHeight ? ";true" : ";false");
        if (AngularRenderer._fontHeightCache[key] !== undefined) {
            return AngularRenderer._fontHeightCache[key];
        }
        if (this._rootWrapper.getNativeElement() == null) {
            //TODO: some voodoo here.
            return 12;
        }
        this.startCSSQuery();
        let disc = this.getCurrentDiscovery();
        if (disc == null || !this.hasWindow) {
            return this.getDefaultFontHeight();
        }



        if (disc.getNativeElement().parentElement) {
            disc.getNativeElement().parentElement.removeChild(disc.getNativeElement())
        }
        disc.setStyleProperty("position", "absolute");
        disc.setStyleProperty("visibility", "hidden");
        disc.setStyleProperty("font", fontString);

        document.body.appendChild(disc.getNativeElement());

        let span: any;
        this.withRenderer((ren) => {
            span = this._renderer.createElement("span");
        });
        var spanWrap = new AngularWrapper(span, this._renderer, this._ngZone);
        this.getCurrentDiscovery().append(spanWrap);
        spanWrap.setText(text);
        var height;
        if (useOffsetHeight) {
            var offHeight = spanWrap.getNativeElement().offsetHeight;
            height = offHeight;
            AngularRenderer._fontHeightCache[key] = height;
        } else {
            height = spanWrap.getNativeElement().height();
            AngularRenderer._fontHeightCache[key] = height;
        }
        if (height == 0) {
            //HACK: HACK! HACK! HACK!
            return this.getDefaultFontHeight();
        }
        //console.log("font height: " + height);

        document.body.removeChild(disc.getNativeElement())

        this.endCSSQuery();



        return height;
    }

    getSubRenderer(root: DomWrapper): DomRenderer {
        var elem: any = root;
        elem = elem.getNativeElement();
        return new AngularRenderer(elem, this._renderer, this._document, this._ngZone, this._useDefaultsSource, this._defaultsSource, this._portalManager);
    }

    private _toUnbind: (() => void)[] = [];

    globalListen(element: string, eventName: string, handler: (ev: any) => void): () => void {
        let retVal: () => void = null;
        this._ngZone.runOutsideAngular(() => {
            var $self = this;
            var a = function (e) {
                var inner: any = {};
                //TODO: normalize here?
                inner.originalEvent = e;
                inner.altKey = e.altKey;
                inner.button = e.button;
                inner.ctrlKey = e.ctrlKey;
                inner.offsetX = e.offsetX;
                inner.offsetY = e.offsetY;
                inner.pageX = e.pageX;
                inner.pageY = e.pageY;
                if (e.touches && e.touches.length > 0) {
                    inner.pageX = e.touches[0].pageX;
                    inner.pageY = e.touches[0].pageY;
                }
                inner.shiftKey = e.shiftKey;
                inner.which = e.which;
                inner.preventDefault = function () {
                    e.preventDefault();
                }
                inner.stopPropagation = function () {
                    e.stopPropagation();
                }
                //console.log(e);
                handler(inner);
            };
            var ret = this._renderer.listen(element, eventName, a);
            var self = this;
            retVal = function () {
                var ind = self._toUnbind.indexOf(retVal);
                if (ind >= 0) {
                    self._toUnbind.splice(ind, 1)
                }
                ret();
                a = null;
            }
            this._toUnbind.push(retVal);
        });
        return retVal;
    }

    hasBody() {
        return this._document !== null && this._document.body !== null;
    }

    hasWindow() {
        //todo: hmmm
        return true;
    }

    getCurrentDiscovery(): AngularWrapper {
        if (this._discStack.length <= 0) {
            return null;
        }
        return this._discStack[this._discStack.length - 1];
    }

    private _currentFontQuery: string = null;
    setCssQueryFontString(fontString) {
        if (this._useDefaultsSource) {
            this._currentFontQuery = fontString;
        }
        this.getCurrentDiscovery().setStyleProperty("font", fontString);
    }

    startCSSQuery() {
        if (!this.hasBody()) { return; }
        var disc = this._cssHelper.getDiscoveryElement(this._rootElement, this._ngZone);
        this._discStack.push(disc);
        this._rootWrapper.getNativeElement().appendChild(disc.getNativeElement());
    }

    supportsDOMEvents(): boolean {
        //todo: hmmm.
        return true;
    }

    getPortal(hostElement: DomWrapper, elementTag: string, portalCallback: (portal: DomPortal) => void, isContentPortal: boolean) {
        if (this._portalManager) {
            this._portalManager.getPortal(hostElement, elementTag, portalCallback, isContentPortal);
        }
    }
}

export class AngularWrapper implements DomWrapper {
    private ele: any;
    constructor(ele: any, private renderer: Renderer2, private ngZone: NgZone) {
        if (ele.getNativeElement) {
            ele = ele.getNativeElement();
        }
        this.ele = ele;
        this._toUnbind = [];
    }

    destroy() {
        this.unlistenAll();
        this.ele = null;
    }

    withRenderer(act: (ren: Renderer2) => void) {
        //if (NgZone.isInAngularZone()) {
        act(this.renderer);
        //    return;
        // } else {
        //    this.ngZone.run(() => {
        //         act(this.renderer);
        //     });
        //}
    }

    private _toUnbind: Array<Function> = [];
    private _attrCache: Map<string, string> = new Map<string, string>();
    private _styleCache: Map<string, string> = new Map<string, string>();
    private _useRenderer: boolean = false;

    addClass(className: string): DomWrapper {
        if (className == null || className.length == 0) {
            return this;
        }
        this.withRenderer((ren) => {
            className.split(" ").forEach((item) => ren.addClass(this.ele, item));
        });
        return this;
    }

    append(child: DomWrapper): DomWrapper {
        this.withRenderer((ren) => {
            ren.appendChild(this.ele, child.getNativeElement());
        });
        return this;
    }

    getAttribute(propertyName: string) {
        if (this._attrCache.has(propertyName)) {
            return this._attrCache.get(propertyName);
        }
        return null;
    }

    setAttribute(propertyName: string, value: string) {
        this._attrCache.set(propertyName, value);
        //this.withRenderer((ren) => {
        let ren = this.renderer;
        ren.setAttribute(this.ele, propertyName, value);
        //});
        return this;
    }

    before(child: any): DomWrapper {
        this.ele.parentElement.insertBefore(child.getNativeElement(), this.ele);
        return this;
    }

    clone(): DomWrapper {
        return new AngularWrapper(this.getNativeElement().cloneNode(true), this.renderer, this.ngZone);
    }

    getStyleProperty(propertyName: string): string {
        if (this.getNativeElement() !== null) {
            if (getComputedStyle !== undefined) {
                var computed = getComputedStyle(this.getNativeElement());
                //console.log("getting computed value for: " + propertyName + ": " + computed[propertyName]);
                return computed[propertyName];
            }
        }
        if (this._styleCache.has(propertyName)) {
            return this._styleCache.get(propertyName);
        }

        return null;
    }

    setStyleProperty(propertyName: string, value: string): DomWrapper {
        this._styleCache.set(propertyName, value);
        //this.withRenderer((ren) => {
        this.renderer.setStyle(this.ele, propertyName, value);
        //});
        return this;
    }

    findByClass(className): DomWrapper[] {
        if (className.substring(0, 1) == '.') {
            className = className.substring(1);
        }
        let ret: any[] = this.ele.getElementsByClassName(className)
        let retVal: AngularWrapper[] = [];
        retVal.length = ret.length;
        for (var i = 0; i < ret.length; i++) {
            retVal[i] = new AngularWrapper(ret[i], this.renderer, this.ngZone);
        }
        return retVal;
    }

    focus(): DomWrapper {
        if (this.getNativeElement() !== null && this.getNativeElement().focus !== undefined) {
            this.getNativeElement().focus();
        }
        return this;
    }

    getChildAt(i): DomWrapper {
        let child: any = this.ele.children[i];
        return new AngularWrapper(child, this.renderer, this.ngZone);
    }

    getChildCount(): number {
        return this.ele.children.length;
    }

    getNativeElement(): any {
        let nativeElement: any = null;
        //this.withRenderer((ren) => {
        if (this.ele == null) {
            nativeElement = null;
            return nativeElement;
        }
        if (this.ele.getNativeElement == undefined) {
            nativeElement = this.ele;
            return nativeElement;
        }

        nativeElement = this.ele.getNativeElement();
        //});

        return nativeElement;
    }

    height(): number {
        var ret = this.getStyleProperty("height");
        if (ret == null) {
            //todo: some voodoo here.
            return 500;
        }
        let val = parseFloat(ret.replace("px", ""));
        if (isNaN(val)) {
            return 0;
        }
        return val;
    }

    hide(): DomWrapper {
        this.setStyleProperty("display", "none");
        return this;
    }

    listen(eventName: string, handler: (ev: any) => void): () => void {
        let retVal: () => void = null;
        this.ngZone.runOutsideAngular(() => {
            var $self = this;
            var a = function (e) {
                var inner: any = {};
                //TODO: normalize here?
                inner.originalEvent = e;
                inner.altKey = e.altKey;
                inner.button = e.button;
                inner.ctrlKey = e.ctrlKey;
                inner.offsetX = e.offsetX;
                inner.offsetY = e.offsetY;
                inner.pageX = e.pageX;
                inner.pageY = e.pageY;
                if (e.touches && e.touches.length > 0) {
                    inner.pageX = e.touches[0].pageX;
                    inner.pageY = e.touches[0].pageY;
                }
                inner.shiftKey = e.shiftKey;
                inner.which = e.which;
                inner.preventDefault = function () {
                    e.preventDefault();
                }
                inner.stopPropagation = function () {
                    e.stopPropagation();
                }
                //console.log(e);
                handler(inner);
            };
            var ret = this.renderer.listen(this.ele, eventName, a);
            var self = this;
            retVal = function () {
                var ind = self._toUnbind.indexOf(retVal);
                if (ind >= 0) {
                    self._toUnbind.splice(ind, 1)
                }
                ret();
                a = null;
            }
            this._toUnbind.push(retVal);
        });
        return retVal;
    }

    getOffsetHelper(ele: Element): AngularWrapperPosition {
        var clientRect = ele.getBoundingClientRect();

        return {
            top: clientRect.top + window.pageYOffset,
            left: clientRect.left + window.pageXOffset
        }
    }

    getOffset(): AngularWrapperPosition {
        return this.getOffsetHelper(this.getNativeElement());
    }

    setOffset(x: number, y: number): DomWrapper {
        let par = this.getNativeElement().offsetParent || this.getNativeElement().parentElement;
        let parentOffset = this.getOffsetHelper(par);

        return this.setRawPosition(x - parentOffset.left, y - parentOffset.top);
        //return this;
    }

    outerHeight(): number {
        return <number>this.getProperty("offsetHeight");
    }

    outerHeightWithMargin(): number {
        let height = this.outerHeight();
        height += parseInt(this.getStyleProperty("marginTop"))
        height += parseInt(this.getStyleProperty("marginBottom"))
        return height;
    }

    outerWidth(): number {
        return <number>this.getProperty("offsetWidth");
    }

    outerWidthWithMargin(): number {
        let width = this.outerWidth();
        width += parseInt(this.getStyleProperty("marginLeft"))
        width += parseInt(this.getStyleProperty("marginRight"))
        return width;
    }

    getProperty(propertyName: string): any {
        let native = this.getNativeElement();
        return native[propertyName];
    }

    setProperty(propertyName: string, value: any): DomWrapper {
        this.withRenderer((ren) => {
            ren.setProperty(this.ele, propertyName, value);
        });
        return this;
    }

    remove(): DomWrapper {
        this.withRenderer((ren) => {
            let ele = this.getNativeElement();
            if (ele.parentElement != null) {
                if (this._useRenderer) {
                    ren.removeChild(ele.parentElement, ele);
                } else {
                    ele.parentElement.removeChild(ele);
                }
            }
            //ren.detachView([this.getNativeElement()]);
        });
        return this;
    }

    removeChild(child: DomWrapper) {
        this.withRenderer((ren) => {
            if (this._useRenderer) {
                ren.removeChild(this.getNativeElement(), child.getNativeElement());
            } else {
                this.getNativeElement().removeChild(child.getNativeElement());
            }
            //ren.detachView([child.getNativeElement()]);
        });
        return this;
    }

    removeChildren(): DomWrapper {
        for (let i = this.getChildCount() - 1; i >= 0; i--) {
            this.removeChild(this.getChildAt(i));
        }
        return this;
    }

    removeClass(className: string): DomWrapper {
        if (className == null || className.length == 0) {
            return this;
        }
        this.withRenderer((ren) => {
            className.split(" ").forEach((item) => ren.removeClass(this.ele, item));
        });
        return this;
    }

    setRawStyleProperty(propertyName: string, value: string): DomWrapper {
        //this.withRenderer((ren) => {
        //  ren.setStyle(this.ele, propertyName, value);
        //})
        this.ele.style[propertyName] = value;
        return this;
    }

    setRawPosition(x: number, y: number): DomWrapper {
        this.ele.style.left = x + "px";
        this.ele.style.top = y + "px";
        return this;
    }
    setRawXPosition(x: number): DomWrapper {
        this.ele.style.left = x + "px";
        return this;
    }
    setRawYPosition(y: number): DomWrapper {
        this.ele.style.top = y + "px";
        return this;
    }

    setRawSize(width: number, height: number): DomWrapper {
        this.ele.style.width = width + "px";
        this.ele.style.height = height + "px";
        return this;
    }

    show(): DomWrapper {
        this.setStyleProperty("display", "");
        return this;
    }

    getText(): string {
        if (this._innerText != undefined) {
            return this._innerText;
        }
        return this.getNativeElement().innerText;
    }

    private _innerText: string = undefined;
    setText(value: string): DomWrapper {
        this._innerText = value;
        this.withRenderer((ren) => {
            //workaround warning:
            this.getNativeElement().innerText = value;
            //ren.setText(this.ele, value);
        });
        return this;
    }

    setRawText(value: string): DomWrapper {
        this._innerText = value;
        this.ele.textContent = value;
        return this;
    }

    unlistenAll(): DomWrapper {
        var toUnbind = [];
        for (var i = 0; i < this._toUnbind.length; i++) {
            toUnbind.push(this._toUnbind[i]);
        }

        for (var i = 0; i < toUnbind.length; i++) {
            toUnbind[i]();
        }
        this._toUnbind.length = 0;
        return this;
    }

    width(): number {
        var ret = this.getStyleProperty("width");
        if (ret == null) {
            //todo: some voodoo here.
            return 500;
        }
        let val = parseFloat(ret.replace("px", ""));
        if (isNaN(val)) {
            return 0;
        }
        return val;
    }
    parent(): AngularWrapper {
        return this.ele == null || this.ele.parentElement == null ? null :
            new AngularWrapper(this.ele.parentElement, this.renderer, this.ngZone);
    }
    querySelectorAll(selector: string): AngularWrapper[] {
        let elements: Array<Element> = [...this.ele.querySelectorAll(selector)];
        let result: AngularWrapper[] = [];
        elements.forEach(element => result.push(new AngularWrapper(element, this.renderer, this.ngZone)));
        return result;
    }
}

export interface AngularWrapperPosition {
    left: number;
    top: number;
}

class AngularCssHelper {

    protected get hasWindow(): boolean {
        //TODO
        return true;
    }

    getDiscoveryElement(container: any, ngZone: NgZone): AngularWrapper {
        //console.log(container);
        var ele = this.renderer.createElement("fakediscoveryelement");

        var wrapper = new AngularWrapper(ele, this.renderer, ngZone);
        wrapper.setStyleProperty("box-sizing", "content-box");
        return wrapper;
    }

    constructor(private renderer: Renderer2, private document: any) {

    }

    getPropertyValue(discoveryElement: AngularWrapper, className: string, propertyName: string): string {
        //console.log("fetching: " + className + ", prop: " + propertyName);
        var ret = CssHelper.getPropertyValue1(discoveryElement, className, propertyName);
        //console.log("for: " + className + ", prop: " + propertyName + " value: " + ret);
        return ret;
    }

    getValuesForClassCollection(discoveryElement: AngularWrapper, classPrefix: string, propertyNames: string[]) {
        var prop = new List$1<string>(String_$type, 0);
        for (var i = 0; i < propertyNames.length; i++) {
            prop.add(propertyNames[i]);
        }
        var ret = CssHelper.getValuesForClassCollection(discoveryElement, classPrefix, prop);
        var retVal = new Array(ret.count);
        for (var i1 = 0; i1 < ret.count; i1++) {
            retVal[i1] = new Array(ret._inner[i1].count);
            for (var j = 0; j < ret._inner[i1].count; j++) {
                retVal[i1][j] = ret._inner[i1]._inner[j];
            }
        }
        return retVal;
    }
}

export class PortalManager {
    public renderer: AngularRenderer;

    private _dynamicContent: ViewContainerRef = null;
    private _portals: AngularDomPortal[] = [];
    private _portalsMap: Map<string, AngularDomPortal> = new Map<string, AngularDomPortal>();
    private _componentFactoryResolver: ComponentFactoryResolver;
    private _id: string = null;

    public get dynamicContent(): ViewContainerRef {
        return this._dynamicContent;
    }
    public set dynamicContent(value: ViewContainerRef) {
        this._dynamicContent = value;
        this.onDynamicContentProvided();
    }

    private onDynamicContentProvided() {
        for (var i = 0; i < this._portals.length; i++) {
            this._portals[i]._onDynamicContentProvided(this._dynamicContent);
        }
    }

    public constructor(id: string, componentFactoryResolver: ComponentFactoryResolver) {
        //this._dynamicContent = dynamicContent;
        this._componentFactoryResolver = componentFactoryResolver;
        this._id = id;
    }

    private _currId: number = 0;
    private getId(): string {
        return this._id + "__" + (this._currId++).toString();
    }

    public onChildContentChanged(template: any) {
        if (this._portals && this._portals.length > 0) {
            //children = React.Children.toArray(this.props.children);

            for (let i = 0; i < this._portals.length; i++) {
                let p = this._portals[i];
                if (p.isContentPortal) {
                    p.componentRef.template = template;
                }
            }
        }
    }

    public getPortal(hostElement: DomWrapper, elementTag: string, portalCallback: (portal: DomPortal) => void, isContentPortal: boolean): void {
        let portal = new AngularDomPortal(hostElement, elementTag, portalCallback, this.getId(), this._dynamicContent, this._componentFactoryResolver, isContentPortal);
        this._portals.push(portal);
        this._portalsMap.set(portal._portalId, portal);
        portalCallback(portal);
    }

    public _destroy(portal: AngularDomPortal) {
        let ind = this._portals.indexOf(portal);
        this._portalsMap.delete(portal._portalId);
        (portal as any)._componentReference.location.nativeElement.remove();
        (portal as any)._componentReference.destroy();
        this._portals.splice(ind, 1);
    }
}

class AngularDomPortal implements DomPortal {
    private _owner: PortalManager;
    public portalContainer: any;
    public componentRef: any;
    private _dynamicContent: ViewContainerRef;
    public isContentPortal: boolean;

    public onChildContentChanged: (template: any) => void = null;

    public destroy(): void {
        this._owner._destroy(this);
    }

    public _onComponentProvided(ele) {
        var oldValue = this.componentRef;
        this.componentRef = ele;
        if (oldValue !== this.componentRef) {
            this._portalCallback(this);
        }
    }

    public _onDynamicContentProvided(value: ViewContainerRef) {
        if (!this.componentRef) {
            this._dynamicContent = value;
            this.componentRef = this.createElementFromTag(this._elementTag, this._portalId, this._dynamicContent, this._componentFactoryResolver);
            this.portalContainer.getNativeElement().appendChild(this._componentReference.location.nativeElement);
        }
    }

    private _elementTag: string;
    private _portalCallback: (portal: DomPortal) => void;

    public _nativePortal: any;
    public _portalId: string;
    private _componentReference: any = null;
    private _componentFactoryResolver: ComponentFactoryResolver;

    private toPascal(name: string) {
        var val = fromSpinal(name);
        return val.substr(0, 1).toUpperCase() + val.substr(1);
    }

    private createElementFromTag(elementTag: string, portalId: string,
        dynamicContent: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver) {
        if (elementTag.indexOf("-") >= 0) {
            elementTag = this.toPascal(elementTag);
        }

        var name = "Igx" + elementTag + "Component";
        var ele = TypeRegistrar.get(name);
        let cf = componentFactoryResolver.resolveComponentFactory(ele);
        let cr = dynamicContent.createComponent(cf);
        this._componentReference = cr;
        this.componentRef = this._componentReference.instance;

        return this.componentRef;
    }

    public constructor(hostElement: DomWrapper, elementTag: string,
        portalCallback: (portal: DomPortal) => void,
        portalId: string,
        dynamicContent: ViewContainerRef,
        componentFactoryResolver: ComponentFactoryResolver,
        isContentPortal: boolean) {
        this.portalContainer = hostElement;
        this._dynamicContent = dynamicContent;
        this._elementTag = elementTag;
        this._portalCallback = portalCallback;
        this._portalId = portalId;
        this._componentFactoryResolver = componentFactoryResolver;
        this.isContentPortal = isContentPortal;

        if (this._dynamicContent) {
            this.componentRef = this.createElementFromTag(this._elementTag, this._portalId, dynamicContent, componentFactoryResolver);
            hostElement.getNativeElement().appendChild(this._componentReference.location.nativeElement);
        }
    }
}