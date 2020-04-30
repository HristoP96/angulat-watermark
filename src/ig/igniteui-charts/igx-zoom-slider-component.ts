import { Type, Output, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ZoomSliderOrientation, ZoomSliderOrientation_$type } from './ZoomSliderOrientation';
import { IgxZoomSliderResolvingAxisValueEventArgs } from './igx-zoom-slider-resolving-axis-value-event-args';
import { IgxRectChangedEventArgs } from 'igniteui-core/igx-rect-changed-event-args';
import { ZoomSlider } from "./ZoomSlider";
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { AngularRenderer } from 'igniteui-core/angular-renderer';
import { delegateCombine } from 'igniteui-core/type';

export const IgxZoomSliderComponent_PROVIDERS = [];

const ZoomSliderStylingDefaults = {};


@Component({
	selector: 'igx-zoom-slider',
	template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxZoomSliderComponent_PROVIDERS,
    host: { 'class': 'ig-zoom-slider igx-zoom-slider' },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxZoomSliderComponent implements AfterContentInit {
	container: Element;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._zoomSlider.notifySizeChanged();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._zoomSlider.notifySizeChanged();
    }
    get width(): string {
        return this._width;
    }

	@ViewChild("dynamicContent", {read: ViewContainerRef, static: true}) _dynamicContent: ViewContainerRef;

    private _wrapper: AngularRenderer = null;
    private _root: Element = null;

	constructor(private renderer: Renderer2, 
		private _elRef: ViewContainerRef,
		 private ngZone: NgZone, 
		 private injector: Injector,
		 private componentFactoryResolver: ComponentFactoryResolver) {
		
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._implementation = this.createImplementation();
        if (renderer) {
            this.container = renderer.createElement("div");
            renderer.appendChild(_elRef.element.nativeElement, this.container);
            renderer.setStyle(this.container, "display", "block");
            renderer.setStyle(this.container, "width", "100%");
            renderer.setStyle(this.container, "height", "100%");
        }
		var root: any;
		root = this.container;
		if (this.container != null) {
			root = this.container;
        }
        if (root && root.nativeElement) {
            root = root.nativeElement;
        }
        this._root = root;
        var zoomSlider = this.i;
        this._zoomSlider = <ZoomSlider>zoomSlider;

        if (renderer) {
            var ren: AngularRenderer = new AngularRenderer(
                root, this.renderer, window.document,
                this.ngZone, true,
                ZoomSliderStylingDefaults);
            this._wrapper = ren;
            zoomSlider.provideContainer(ren);
            zoomSlider.notifySizeChanged();

            ren.addSizeWatcher(() => {
                this._zoomSlider.notifySizeChanged();
            });
        }
	}

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
	}

    ngOnDestroy() {
        this._zoomSlider.destroy();
        this._wrapper.destroy();
    }

	
	private _implementation: ZoomSlider = null;

	ngAfterContentInit(): void {
        this.updateStyle();
	}

	protected createImplementation() {
		return new ZoomSlider();
	}

	public get i() : ZoomSlider {
		return this._implementation;
	}

	private _zoomSlider: ZoomSlider;

    protected static _staticStyling(container: any, component: any, parent?: any) {
        let genericPrefix = "";
        let typeName = ((component.i ? component.i : component) as any).$type.name;
        if (typeName.indexOf("Xam") === 0) {
            typeName = typeName.substring(3);
        }
        genericPrefix = toSpinal("ZoomSlider");

        let additionalPrefixes = [];

        let prefix = toSpinal(typeName);
        additionalPrefixes.push(prefix + "-");

        let b = ((component.i ? component.i : component) as any).$type.baseType;
        while (b && b.name != "Object" &&
            b.name != "Base" &&
            b.name != "Control" &&
            b.Name != "DependencyObject" &&
            b.Name != "FrameworkElement") {
            typeName = b.name;
            if (typeName.indexOf("Xam") === 0) {
                typeName = typeName.substring(3);
            }
            let basePrefix = toSpinal(typeName);
            additionalPrefixes.push(basePrefix + "-");
            b = b.baseType;
        }

        if (parent) {
            let parentTypeName = (parent.i as any).$type.name;
            if (parentTypeName.indexOf("Xam") === 0) {
                parentTypeName = parentTypeName.substring(3);
            }
            let parentPrefix = toSpinal(parentTypeName);

            additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
            additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
        }

        initializePropertiesFromCss(container, component, genericPrefix + "-", new Set<string>(), false, additionalPrefixes);
    }

		get panTransitionDuration() : number {
		return (this.i.panTransitionDuration as number);
	}
	@Input()
	set panTransitionDuration(v: number) {
		this.i.panTransitionDuration = +v;
	}
	get maxZoomWidth() : number {
		return (this.i.maxZoomWidth as number);
	}
	@Input()
	set maxZoomWidth(v: number) {
		this.i.maxZoomWidth = +v;
	}
	/**
	 * Gets or sets the scaling value used to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get pixelScalingRatio() : number {
		return (this.i.pixelScalingRatio as number);
	}
	@Input()
	set pixelScalingRatio(v: number) {
		this.i.pixelScalingRatio = +v;
	}
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
	}
	get windowRect() : IgRect {
		return fromRect(this.i.windowRect);
	}
	@Input()
	set windowRect(v: IgRect) {
		this.i.windowRect = toRect(v);
	}
	get minZoomWidth() : number {
		return (this.i.minZoomWidth as number);
	}
	@Input()
	set minZoomWidth(v: number) {
		this.i.minZoomWidth = +v;
	}
	get startInset() : number {
		return (this.i.startInset as number);
	}
	@Input()
	set startInset(v: number) {
		this.i.startInset = +v;
	}
	get endInset() : number {
		return (this.i.endInset as number);
	}
	@Input()
	set endInset(v: number) {
		this.i.endInset = +v;
	}
	get trackStartInset() : number {
		return (this.i.trackStartInset as number);
	}
	@Input()
	set trackStartInset(v: number) {
		this.i.trackStartInset = +v;
	}
	get trackEndInset() : number {
		return (this.i.trackEndInset as number);
	}
	@Input()
	set trackEndInset(v: number) {
		this.i.trackEndInset = +v;
	}
	get barExtent() : number {
		return (this.i.barExtent as number);
	}
	@Input()
	set barExtent(v: number) {
		this.i.barExtent = +v;
	}
	get orientation() : ZoomSliderOrientation {
		return this.i.orientation;
	}
	@Input()
	set orientation(v: ZoomSliderOrientation) {
		this.i.orientation = ensureEnum<ZoomSliderOrientation>(ZoomSliderOrientation_$type, v);
	}
	get lowerThumbBrush() : string {
		return brushToString(this.i.lowerThumbBrush);
	}
	@Input()
	set lowerThumbBrush(v: string) {
		this.i.lowerThumbBrush = stringToBrush(v);
	}
	get lowerThumbStrokeThickness() : number {
		return (this.i.lowerThumbStrokeThickness as number);
	}
	@Input()
	set lowerThumbStrokeThickness(v: number) {
		this.i.lowerThumbStrokeThickness = +v;
	}
	get higherThumbStrokeThickness() : number {
		return (this.i.higherThumbStrokeThickness as number);
	}
	@Input()
	set higherThumbStrokeThickness(v: number) {
		this.i.higherThumbStrokeThickness = +v;
	}
	get higherThumbBrush() : string {
		return brushToString(this.i.higherThumbBrush);
	}
	@Input()
	set higherThumbBrush(v: string) {
		this.i.higherThumbBrush = stringToBrush(v);
	}
	get lowerThumbOutline() : string {
		return brushToString(this.i.lowerThumbOutline);
	}
	@Input()
	set lowerThumbOutline(v: string) {
		this.i.lowerThumbOutline = stringToBrush(v);
	}
	get higherThumbOutline() : string {
		return brushToString(this.i.higherThumbOutline);
	}
	@Input()
	set higherThumbOutline(v: string) {
		this.i.higherThumbOutline = stringToBrush(v);
	}
	get lowerThumbRidgesBrush() : string {
		return brushToString(this.i.lowerThumbRidgesBrush);
	}
	@Input()
	set lowerThumbRidgesBrush(v: string) {
		this.i.lowerThumbRidgesBrush = stringToBrush(v);
	}
	get higherThumbRidgesBrush() : string {
		return brushToString(this.i.higherThumbRidgesBrush);
	}
	@Input()
	set higherThumbRidgesBrush(v: string) {
		this.i.higherThumbRidgesBrush = stringToBrush(v);
	}
	get lowerThumbWidth() : number {
		return (this.i.lowerThumbWidth as number);
	}
	@Input()
	set lowerThumbWidth(v: number) {
		this.i.lowerThumbWidth = +v;
	}
	get higherThumbWidth() : number {
		return (this.i.higherThumbWidth as number);
	}
	@Input()
	set higherThumbWidth(v: number) {
		this.i.higherThumbWidth = +v;
	}
	get lowerThumbHeight() : number {
		return (this.i.lowerThumbHeight as number);
	}
	@Input()
	set lowerThumbHeight(v: number) {
		this.i.lowerThumbHeight = +v;
	}
	get higherThumbHeight() : number {
		return (this.i.higherThumbHeight as number);
	}
	@Input()
	set higherThumbHeight(v: number) {
		this.i.higherThumbHeight = +v;
	}
	get lowerShadeBrush() : string {
		return brushToString(this.i.lowerShadeBrush);
	}
	@Input()
	set lowerShadeBrush(v: string) {
		this.i.lowerShadeBrush = stringToBrush(v);
	}
	get lowerShadeOutline() : string {
		return brushToString(this.i.lowerShadeOutline);
	}
	@Input()
	set lowerShadeOutline(v: string) {
		this.i.lowerShadeOutline = stringToBrush(v);
	}
	get lowerShadeStrokeThickness() : number {
		return (this.i.lowerShadeStrokeThickness as number);
	}
	@Input()
	set lowerShadeStrokeThickness(v: number) {
		this.i.lowerShadeStrokeThickness = +v;
	}
	get higherShadeBrush() : string {
		return brushToString(this.i.higherShadeBrush);
	}
	@Input()
	set higherShadeBrush(v: string) {
		this.i.higherShadeBrush = stringToBrush(v);
	}
	get higherShadeOutline() : string {
		return brushToString(this.i.higherShadeOutline);
	}
	@Input()
	set higherShadeOutline(v: string) {
		this.i.higherShadeOutline = stringToBrush(v);
	}
	get higherShadeStrokeThickness() : number {
		return (this.i.higherShadeStrokeThickness as number);
	}
	@Input()
	set higherShadeStrokeThickness(v: number) {
		this.i.higherShadeStrokeThickness = +v;
	}
	get barBrush() : string {
		return brushToString(this.i.barBrush);
	}
	@Input()
	set barBrush(v: string) {
		this.i.barBrush = stringToBrush(v);
	}
	get barOutline() : string {
		return brushToString(this.i.barOutline);
	}
	@Input()
	set barOutline(v: string) {
		this.i.barOutline = stringToBrush(v);
	}
	get barStrokeThickness() : number {
		return (this.i.barStrokeThickness as number);
	}
	@Input()
	set barStrokeThickness(v: number) {
		this.i.barStrokeThickness = +v;
	}
	get rangeThumbBrush() : string {
		return brushToString(this.i.rangeThumbBrush);
	}
	@Input()
	set rangeThumbBrush(v: string) {
		this.i.rangeThumbBrush = stringToBrush(v);
	}
	get rangeThumbOutline() : string {
		return brushToString(this.i.rangeThumbOutline);
	}
	@Input()
	set rangeThumbOutline(v: string) {
		this.i.rangeThumbOutline = stringToBrush(v);
	}
	get rangeThumbStrokeThickness() : number {
		return (this.i.rangeThumbStrokeThickness as number);
	}
	@Input()
	set rangeThumbStrokeThickness(v: number) {
		this.i.rangeThumbStrokeThickness = +v;
	}
	get rangeThumbRidgesBrush() : string {
		return brushToString(this.i.rangeThumbRidgesBrush);
	}
	@Input()
	set rangeThumbRidgesBrush(v: string) {
		this.i.rangeThumbRidgesBrush = stringToBrush(v);
	}
	get lowerCalloutBrush() : string {
		return brushToString(this.i.lowerCalloutBrush);
	}
	@Input()
	set lowerCalloutBrush(v: string) {
		this.i.lowerCalloutBrush = stringToBrush(v);
	}
	get lowerCalloutTextColor() : string {
		return brushToString(this.i.lowerCalloutTextColor);
	}
	@Input()
	set lowerCalloutTextColor(v: string) {
		this.i.lowerCalloutTextColor = stringToBrush(v);
	}
	get lowerCalloutOutline() : string {
		return brushToString(this.i.lowerCalloutOutline);
	}
	@Input()
	set lowerCalloutOutline(v: string) {
		this.i.lowerCalloutOutline = stringToBrush(v);
	}
	get lowerCalloutStrokeThickness() : number {
		return (this.i.lowerCalloutStrokeThickness as number);
	}
	@Input()
	set lowerCalloutStrokeThickness(v: number) {
		this.i.lowerCalloutStrokeThickness = +v;
	}
	get higherCalloutBrush() : string {
		return brushToString(this.i.higherCalloutBrush);
	}
	@Input()
	set higherCalloutBrush(v: string) {
		this.i.higherCalloutBrush = stringToBrush(v);
	}
	get higherCalloutTextColor() : string {
		return brushToString(this.i.higherCalloutTextColor);
	}
	@Input()
	set higherCalloutTextColor(v: string) {
		this.i.higherCalloutTextColor = stringToBrush(v);
	}
	get higherCalloutOutline() : string {
		return brushToString(this.i.higherCalloutOutline);
	}
	@Input()
	set higherCalloutOutline(v: string) {
		this.i.higherCalloutOutline = stringToBrush(v);
	}
	get higherCalloutStrokeThickness() : number {
		return (this.i.higherCalloutStrokeThickness as number);
	}
	@Input()
	set higherCalloutStrokeThickness(v: number) {
		this.i.higherCalloutStrokeThickness = +v;
	}
	get isCustomThumbProvided() : boolean {
		return (this.i.isCustomThumbProvided as boolean);
	}
	get isCustomRangeThumbProvided() : boolean {
		return (this.i.isCustomRangeThumbProvided as boolean);
	}
	get isCustomBarProvided() : boolean {
		return (this.i.isCustomBarProvided as boolean);
	}
	get isCustomShadeProvided() : boolean {
		return (this.i.isCustomShadeProvided as boolean);
	}
	get areThumbCalloutsEnabled() : boolean {
		return (this.i.areThumbCalloutsEnabled as boolean);
	}
	@Input()
	set areThumbCalloutsEnabled(v: boolean) {
		this.i.areThumbCalloutsEnabled = ensureBool(v);
	}
	get thumbCalloutTextStyle() : string {
	                                    if (this.i.thumbCalloutTextStyle == null) {
	                                        return null;
	                                    }
		return this.i.thumbCalloutTextStyle.fontString;
	}
	@Input()
	set thumbCalloutTextStyle(v: string) {
		let fi = new FontInfo();
	                                        fi.fontString = v;
	                                        this.i.thumbCalloutTextStyle = fi;
	}

    	
	protected __p: string = null;
	protected _hasUserValues: Set<string> = new Set<string>();
	protected get hasUserValues(): Set<string> {
	    return this._hasUserValues;
	}
	protected __m(propertyName: string) {
	    if (!this._inStyling) {
	        this._hasUserValues.add(propertyName);
	    }
	}
	
	protected _stylingContainer: any = null;
	protected _stylingParent: any = null;
	protected _inStyling: boolean = false;
	protected _styling(container: any, component: any, parent?: any) {
	        if (this._inStyling) {
	            return;
	        }
	        this._inStyling = true;
	        this._stylingContainer = container;
	        this._stylingParent = component;
		
	        let genericPrefix = "";
	        let typeName = (this.i as any).$type.name;
	        if (typeName.indexOf("Xam") === 0) {
	            typeName = typeName.substring(3);
	        }
	        genericPrefix = toSpinal("ZoomSliderComponent");
		
		let additionalPrefixes = [];
		
		let prefix = toSpinal(typeName);
		additionalPrefixes.push(prefix + "-");
	
	        let b = (this.i as any).$type.baseType;
	        while (b && b.name != "Object" && 
	            b.name != "Base" && 
	            b.name != "Control" && 
	            b.Name != "DependencyObject" &&
	            b.Name != "FrameworkElement") {
	            typeName = b.name;
	            if (typeName.indexOf("Xam") === 0) {
	                typeName = typeName.substring(3);
	            }
	            let basePrefix = toSpinal(typeName);
	            additionalPrefixes.push(basePrefix + "-");
	            b = b.baseType;
	        }
		
		if (parent) {
			let parentTypeName = (parent.i as any).$type.name;
	            if (parentTypeName.indexOf("Xam") === 0) {
	                parentTypeName = parentTypeName.substring(3);
	            }
	            let parentPrefix = toSpinal(parentTypeName);
	
			additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
			additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
		}
	
		initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);
	
	        
	
	        if ((this as any)._otherStyling) {
	            (this as any)._otherStyling(container, component, parent);
	        }
	        this._inStyling = false;
	}

		public onDetachedFromUI() {
		this.i.onDetachedFromUI();
	}
	public onAttachedToUI() {
		this.i.onAttachedToUI();
	}
	/**
	 * Release any resources held by the ZoomSlider.
	
	*/
	public destroy() {
		this.i.destroy();
	}
	/**
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	public flush() {
		this.i.flush();
	}
	public trackDirty() {
		this.i.trackDirty();
	}
	/**
	 * Shows the ZoomSlider.
	
	*/
	public show() {
		this.i.show();
	}
	/**
	 * Hides the ZoomSlider.
	
	*/
	public hide() {
		this.i.hide();
	}

    	private _resolvingAxisValue: EventEmitter<{ sender: any, args: IgxZoomSliderResolvingAxisValueEventArgs}> = null;
	@Output()
	get resolvingAxisValue(): EventEmitter<{ sender: any, args: IgxZoomSliderResolvingAxisValueEventArgs}> {
		if (this._resolvingAxisValue == null) {
			this._resolvingAxisValue = new EventEmitter<{sender: any, args: IgxZoomSliderResolvingAxisValueEventArgs}>();
			this.i.resolvingAxisValue = delegateCombine(this.i.resolvingAxisValue, (o, e) => {
				let outerArgs = new IgxZoomSliderResolvingAxisValueEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeResolvingAxisValue) {
	                            (this as any).beforeResolvingAxisValue(this, outerArgs);
	                        }
					    this._resolvingAxisValue.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._resolvingAxisValue;
	}
	private _windowRectChanged: EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> = null;
	/**
	 * Occurs just after the current ZoomSlider's window rectangle is changed.
	*/
	@Output()
	get windowRectChanged(): EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> {
		if (this._windowRectChanged == null) {
			this._windowRectChanged = new EventEmitter<{sender: any, args: IgxRectChangedEventArgs}>();
			this.i.windowRectChanged = delegateCombine(this.i.windowRectChanged, (o, e) => {
				let outerArgs = new IgxRectChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeWindowRectChanged) {
	                            (this as any).beforeWindowRectChanged(this, outerArgs);
	                        }
					    this._windowRectChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._windowRectChanged;
	}

    	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
