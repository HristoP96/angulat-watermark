import { Type, Output, TemplateRef, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterViewInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Icon } from "./Icon";
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher, fromBrushCollection, toBrushCollection } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { AngularRenderer, PortalManager } from 'igniteui-core/angular-renderer';
import { delegateCombine } from 'igniteui-core/type';

export const IgxIconComponent_PROVIDERS = [];



@Component({
	selector: 'igx-icon',
    template: `<ng-template #childContent><ng-content></ng-content></ng-template>
<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxIconComponent_PROVIDERS,
    host: { 'class': 'ig-icon igx-icon' },
	styles: [`
		:host {
			display: inline-block;  
            vertical-align: middle;         
		}
	`]
})
export class IgxIconComponent implements AfterViewInit {
    container: Element;

    private _wrapper: AngularRenderer = null;
    private _portalManager: PortalManager = null;
    private _root: Element = null;

    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;
    @ViewChild("childContent", { read: TemplateRef, static: false }) _childTemplateRef: TemplateRef<any>;


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
            renderer.setStyle(this.container, "display", "inline-block");
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
        var icon = this.i;
        this._icon = <Icon>icon;

        if (renderer) {
            this._portalManager = new PortalManager("iconContent", componentFactoryResolver)
            var ren: AngularRenderer = new AngularRenderer(
                root, this.renderer, window.document,
                this.ngZone, true,
                {}, this._portalManager);
            this._wrapper = ren;
            icon.provideContainer(ren);

        }
    }

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
    }

    ngOnDestroy() {
        this._icon.destroy();
        this._wrapper.destroy();
    }


    private _implementation: Icon = null;

    ngAfterViewInit(): void {
        this._portalManager.dynamicContent = this._dynamicContent;
        this._portalManager.onChildContentChanged(this._childTemplateRef);
        this._styling(this._root, this);


        this.updateStyle();
    }

    protected createImplementation() {
        return new Icon();
    }

    public get i(): Icon {
        return this._implementation;
    }

    private _icon: Icon;


   
		/**
	 * Gets the color to use for the actual background.
	*/
	get actualFill() : string {
		return brushToString(this.i.actualFill);
	}
	@Input()
	set actualFill(v: string) {
		this.i.actualFill = stringToBrush(v);
	}
	/**
	 * Gets the color to use for the actual text color.
	*/
	get actualTextColor() : string {
		return brushToString(this.i.actualTextColor);
	}
	@Input()
	set actualTextColor(v: string) {
		this.i.actualTextColor = stringToBrush(v);
	}
	/**
	 * Gets the color to use for the actual background.
	*/
	get actualHoverFill() : string {
		return brushToString(this.i.actualHoverFill);
	}
	@Input()
	set actualHoverFill(v: string) {
		this.i.actualHoverFill = stringToBrush(v);
	}
	/**
	 * Gets the hover stroke to use for the icon.
	*/
	get actualHoverStroke() : string {
		return brushToString(this.i.actualHoverStroke);
	}
	@Input()
	set actualHoverStroke(v: string) {
		this.i.actualHoverStroke = stringToBrush(v);
	}
	/**
	 * Gets the stroke to use for the icon.
	*/
	get actualStroke() : string {
		return brushToString(this.i.actualStroke);
	}
	@Input()
	set actualStroke(v: string) {
		this.i.actualStroke = stringToBrush(v);
	}
	/**
	 * Gets the hover stroke to use for the icon.
	*/
	get actualHoverStrokeThickness() : number {
		return (this.i.actualHoverStrokeThickness as number);
	}
	@Input()
	set actualHoverStrokeThickness(v: number) {
		this.i.actualHoverStrokeThickness = +v;
	}
	/**
	 * Gets the stroke to use for the icon.
	*/
	get actualStrokeThickness() : number {
		return (this.i.actualStrokeThickness as number);
	}
	@Input()
	set actualStrokeThickness(v: number) {
		this.i.actualStrokeThickness = +v;
	}
	/**
	 * Gets or sets the color to use for the actual background.
	*/
	get fill() : string {
		return brushToString(this.i.fill);
	}
	@Input()
	set fill(v: string) {
		this.i.fill = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text.
	*/
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	@Input()
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text.
	*/
	get svgPath() : string {
		return (this.i.svgPath as string);
	}
	@Input()
	set svgPath(v: string) {
		this.i.svgPath = v;
	}
	/**
	 * Gets or sets the color to use for the actual background.
	*/
	get hoverFill() : string {
		return brushToString(this.i.hoverFill);
	}
	@Input()
	set hoverFill(v: string) {
		this.i.hoverFill = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover stroke to use for the icon.
	*/
	get hoverStroke() : string {
		return brushToString(this.i.hoverStroke);
	}
	@Input()
	set hoverStroke(v: string) {
		this.i.hoverStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke to use for the icon.
	*/
	get stroke() : string {
		return brushToString(this.i.stroke);
	}
	@Input()
	set stroke(v: string) {
		this.i.stroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover stroke to use for the icon.
	*/
	get hoverStrokeThickness() : number {
		return (this.i.hoverStrokeThickness as number);
	}
	@Input()
	set hoverStrokeThickness(v: number) {
		this.i.hoverStrokeThickness = +v;
	}
	/**
	 * Gets or sets the stroke to use for the icon.
	*/
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	@Input()
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
	}
	/**
	 * Gets or sets the use for the button.
	*/
	get textStyle() : FontInfo {
		return this.i.textStyle as FontInfo;
	}
	@Input()
	set textStyle(v: FontInfo) {
		this.i.textStyle = v;
	}
	/**
	 * Gets or sets the color to use for the hovered text of the button regardless of type.
	*/
	get hoverTextColor() : string {
		return brushToString(this.i.hoverTextColor);
	}
	@Input()
	set hoverTextColor(v: string) {
		this.i.hoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the id to use for the checkbox.
	*/
	get id() : string {
		return (this.i.id as string);
	}
	@HostBinding('attr.id') @Input()
	set id(v: string) {
		this.i.id = v;
	}
	/**
	 * Gets or sets TabIndex to use for the checkbox.
	*/
	get tabIndex() : number {
		return (this.i.tabIndex as number);
	}
	@Input('tabindex')
	set tabIndex(v: number) {
		this.i.tabIndex = +v;
	}
	/**
	 * Gets or sets the value of the aria-label attribute.
	*/
	get ariaLabel() : string {
		return (this.i.ariaLabel as string);
	}
	@Input('aria-label')
	set ariaLabel(v: string) {
		this.i.ariaLabel = v;
	}
	/**
	 * Gets or sets whether the icon is hovered.
	*/
	get isHover() : boolean {
		return (this.i.isHover as boolean);
	}
	@Input()
	set isHover(v: boolean) {
		this.i.isHover = ensureBool(v);
	}
	/**
	 * Gets or sets whether the checkbox is disabled.
	*/
	get disabled() : boolean {
		return (this.i.disabled as boolean);
	}
	@Input()
	set disabled(v: boolean) {
		this.i.disabled = ensureBool(v);
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
	        genericPrefix = toSpinal("IconComponent");
		
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
