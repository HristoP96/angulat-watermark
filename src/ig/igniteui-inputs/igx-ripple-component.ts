import { Type, Output, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Ripple } from "./Ripple";
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher, fromBrushCollection, toBrushCollection } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { AngularRenderer } from 'igniteui-core/angular-renderer';
import { delegateCombine } from 'igniteui-core/type';

export const IgxRippleComponent_PROVIDERS = [];



@Component({
	selector: 'igx-ripple',
	template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxRippleComponent_PROVIDERS,
    host: { 'class': 'ig-ripple igx-ripple' },
	styles: [`
		:host {
			display: block;           
		}
	`]
})
export class IgxRippleComponent implements AfterContentInit {
	container: Element;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this._wrapper.rootWrapper.setStyleProperty("height", value);
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this._wrapper.rootWrapper.setStyleProperty("width", value);
    }
    get width(): string {
        return this._width;
    }

    private _top: string;
    private _left: string;
    @Input()
    set top(value: string) {
        this._top = value;
        this._wrapper.rootWrapper.setStyleProperty("top", value);
    }
    get top(): string {
        return this._top;
    }

    @Input()
    set left(value: string) {
        this._left = value;
        this._wrapper.rootWrapper.setStyleProperty("left", value);
    }
    get left(): string {
        return this._left;
    }

    private _position: string;
    @Input()
    set position(value: string) {
        this._position = value;
        this._wrapper.rootWrapper.setStyleProperty("position", value);
    }
    get position(): string {
        return this._position;
    }
    
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
        var ripple = this.i;
        this._ripple = <Ripple>ripple;

        if (renderer) {
            var ren: AngularRenderer = new AngularRenderer(
                root, this.renderer, window.document,
                this.ngZone, true,
                { });
            this._wrapper = ren;
            ripple.provideContainer(ren);

        }
	}

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
	}

    ngOnDestroy() {
        this._ripple.destroy();
        this._wrapper.destroy();
    }

	
	private _implementation: Ripple = null;

    ngAfterContentInit(): void {
        
        this._styling(this._root, this);
       
        
        this.updateStyle();
	}

	protected createImplementation() {
		return new Ripple();
	}

	public get i() : Ripple {
		return this._implementation;
	}

	private _ripple: Ripple;

   
		/**
	 * Gets or sets the target element to inject ripples into.
	*/
	get eventSource() : any {
		return this.i.eventSource as any;
	}
	@Input()
	set eventSource(v: any) {
		this.i.eventSource = v;
	}
	/**
	 * Gets or sets the color to use for the background when the checkbox is unchecked.
	*/
	get rippleColor() : string {
		return brushToString(this.i.rippleColor);
	}
	@Input()
	set rippleColor(v: string) {
		this.i.rippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the background when the ripple is hovered.
	*/
	get hoverColor() : string {
		return brushToString(this.i.hoverColor);
	}
	@Input()
	set hoverColor(v: string) {
		this.i.hoverColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the actual color to use for the background when the ripple is hovered.
	*/
	get actualHoverColor() : string {
		return brushToString(this.i.actualHoverColor);
	}
	@Input()
	set actualHoverColor(v: string) {
		this.i.actualHoverColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the actual background when the checkbox is unchecked.
	*/
	get actualRippleColor() : string {
		return brushToString(this.i.actualRippleColor);
	}
	@Input()
	set actualRippleColor(v: string) {
		this.i.actualRippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the duration to use for the ripple animation.
	*/
	get rippleDuration() : number {
		return (this.i.rippleDuration as number);
	}
	@Input()
	set rippleDuration(v: number) {
		this.i.rippleDuration = +v;
	}
	/**
	 * Gets or sets if the ripple is disabled.
	*/
	get isDisabled() : boolean {
		return (this.i.isDisabled as boolean);
	}
	@Input()
	set isDisabled(v: boolean) {
		this.i.isDisabled = ensureBool(v);
	}
	/**
	 * Gets or sets if the ripple is centered.
	*/
	get isCentered() : boolean {
		return (this.i.isCentered as boolean);
	}
	@Input()
	set isCentered(v: boolean) {
		this.i.isCentered = ensureBool(v);
	}
	/**
	 * Gets or sets if the ripple is centered.
	*/
	get isHoverEnabled() : boolean {
		return (this.i.isHoverEnabled as boolean);
	}
	@Input()
	set isHoverEnabled(v: boolean) {
		this.i.isHoverEnabled = ensureBool(v);
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
	        genericPrefix = toSpinal("RippleComponent");
		
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

    

    	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
