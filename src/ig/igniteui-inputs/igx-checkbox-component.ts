import { Type, Output, TemplateRef, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterViewInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Checkbox } from "./Checkbox";
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher, fromBrushCollection, toBrushCollection } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { AngularRenderer, PortalManager } from 'igniteui-core/angular-renderer';
import { delegateCombine } from 'igniteui-core/type';
import { IgxCheckboxChangeEventArgs } from './igx-checkbox-change-event-args';
import { CheckboxLabelPosition, CheckboxLabelPosition_$type } from './CheckboxLabelPosition';

export const IgxCheckboxComponent_PROVIDERS = [];



@Component({
	selector: 'igx-checkbox',
    template: `<ng-template #childContent><ng-content></ng-content></ng-template>
<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxCheckboxComponent_PROVIDERS,
    host: { 'class': 'ig-checkbox igx-checkbox' },
	styles: [`
		:host {
			display: inline-block;           
		}
	`]
})
export class IgxCheckboxComponent implements AfterViewInit {
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
        var checkbox = this.i;
        this._checkbox = <Checkbox>checkbox;

        if (renderer) {
            this._portalManager = new PortalManager("checkboxLabel", componentFactoryResolver)
            var ren: AngularRenderer = new AngularRenderer(
                root, this.renderer, window.document,
                this.ngZone, true,
                {}, this._portalManager);
            this._wrapper = ren;
            checkbox.provideContainer(ren);

        }
    }

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
    }

    ngOnDestroy() {
        this._checkbox.destroy();
        this._wrapper.destroy();
    }


    private _implementation: Checkbox = null;

    ngAfterViewInit(): void {
        this._portalManager.dynamicContent = this._dynamicContent;
        this._portalManager.onChildContentChanged(this._childTemplateRef);
        this._styling(this._root, this);


        this.updateStyle();
    }

    protected createImplementation() {
        return new Checkbox();
    }

    public get i(): Checkbox {
        return this._implementation;
    }

    private _checkbox: Checkbox;


   
		/**
	 * Gets or sets the color to use for the background when the checkbox is unchecked.
	*/
	get uncheckedBackgroundColor() : string {
		return brushToString(this.i.uncheckedBackgroundColor);
	}
	@Input()
	set uncheckedBackgroundColor(v: string) {
		this.i.uncheckedBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the actual background when the checkbox is unchecked.
	*/
	get actualUncheckedBackgroundColor() : string {
		return brushToString(this.i.actualUncheckedBackgroundColor);
	}
	@Input()
	set actualUncheckedBackgroundColor(v: string) {
		this.i.actualUncheckedBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the background when the checkbox is checked.
	*/
	get checkedBackgroundColor() : string {
		return brushToString(this.i.checkedBackgroundColor);
	}
	@Input()
	set checkedBackgroundColor(v: string) {
		this.i.checkedBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get tickColor() : string {
		return brushToString(this.i.tickColor);
	}
	@Input()
	set tickColor(v: string) {
		this.i.tickColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualTickColor() : string {
		return brushToString(this.i.actualTickColor);
	}
	@Input()
	set actualTickColor(v: string) {
		this.i.actualTickColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get borderColor() : string {
		return brushToString(this.i.borderColor);
	}
	@Input()
	set borderColor(v: string) {
		this.i.borderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualBorderColor() : string {
		return brushToString(this.i.actualBorderColor);
	}
	@Input()
	set actualBorderColor(v: string) {
		this.i.actualBorderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the Width to use for the check mark when the checkbox is checked.
	*/
	get borderWidth() : number {
		return (this.i.borderWidth as number);
	}
	@Input()
	set borderWidth(v: number) {
		this.i.borderWidth = +v;
	}
	/**
	 * Gets or sets the Width to use for the check mark when the checkbox is checked.
	*/
	get actualBorderWidth() : number {
		return (this.i.actualBorderWidth as number);
	}
	@Input()
	set actualBorderWidth(v: number) {
		this.i.actualBorderWidth = +v;
	}
	/**
	 * Gets or sets the corner radius to use for the checkbox.
	*/
	get cornerRadius() : number {
		return (this.i.cornerRadius as number);
	}
	@Input()
	set cornerRadius(v: number) {
		this.i.cornerRadius = +v;
	}
	/**
	 * Gets or sets the corner radius to use for the checkbox.
	*/
	get tickStrokeWidth() : number {
		return (this.i.tickStrokeWidth as number);
	}
	@Input()
	set tickStrokeWidth(v: number) {
		this.i.tickStrokeWidth = +v;
	}
	/**
	 * Gets or sets the stroke width to use for the check mark.
	*/
	get actualTickStrokeWidth() : number {
		return (this.i.actualTickStrokeWidth as number);
	}
	@Input()
	set actualTickStrokeWidth(v: number) {
		this.i.actualTickStrokeWidth = +v;
	}
	/**
	 * Gets the actual corner radius to use for the checkbox.
	*/
	get actualCornerRadius() : number {
		return (this.i.actualCornerRadius as number);
	}
	@Input()
	set actualCornerRadius(v: number) {
		this.i.actualCornerRadius = +v;
	}
	/**
	 * Gets or sets the color to use for the actual background when the checkbox is checked.
	*/
	get actualCheckedBackgroundColor() : string {
		return brushToString(this.i.actualCheckedBackgroundColor);
	}
	@Input()
	set actualCheckedBackgroundColor(v: string) {
		this.i.actualCheckedBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the id to use for the internal native checkbox.
	*/
	get inputId() : string {
		return (this.i.inputId as string);
	}
	@Input()
	set inputId(v: string) {
		this.i.inputId = v;
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
	 * Gets or sets id to use for the checkbox label.
	*/
	get labelId() : string {
		return (this.i.labelId as string);
	}
	@Input()
	set labelId(v: string) {
		this.i.labelId = v;
	}
	/**
	 * Gets or sets value to use for the checkbox.
	*/
	get value() : any {
		return this.i.value as any;
	}
	@Input()
	set value(v: any) {
		this.i.value = v;
	}
	/**
	 * Gets or sets name to use for the checkbox.
	*/
	get name() : string {
		return (this.i.name as string);
	}
	@Input()
	set name(v: string) {
		this.i.name = v;
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
	 * Gets or sets if the checkbox is required.
	*/
	get required() : number {
		return (this.i.required as number);
	}
	@Input()
	set required(v: number) {
		this.i.required = +v;
	}
	/**
	 * Gets or sets if the checkbox is Focused.
	*/
	get focused() : boolean {
		return (this.i.focused as boolean);
	}
	@Input()
	set focused(v: boolean) {
		this.i.focused = ensureBool(v);
	}
	/**
	 * Gets or sets the value of the aria-labelledby attribute.
	*/
	get ariaLabelledBy() : string {
		return (this.i.ariaLabelledBy as string);
	}
	@Input('aria-labelledby')
	set ariaLabelledBy(v: string) {
		this.i.ariaLabelledBy = v;
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
	 * Gets or sets LabelPosition to use for the checkbox.
	*/
	get labelPosition() : CheckboxLabelPosition {
		return this.i.labelPosition;
	}
	@Input()
	set labelPosition(v: CheckboxLabelPosition) {
		this.i.labelPosition = ensureEnum<CheckboxLabelPosition>(CheckboxLabelPosition_$type, v);
	}
	/**
	 * Gets or sets whether to disable the ripple effect for the checkbox.
	*/
	get disableRipple() : boolean {
		return (this.i.disableRipple as boolean);
	}
	@Input()
	set disableRipple(v: boolean) {
		this.i.disableRipple = ensureBool(v);
	}
	/**
	 * Gets or sets whether the checkbox is checked.
	*/
	get checked() : boolean {
		return (this.i.checked as boolean);
	}
	@Input()
	set checked(v: boolean) {
		this.i.checked = ensureBool(v);
	}
	/**
	 * Gets or sets whether the checkbox is indeterminate.
	*/
	get indeterminate() : boolean {
		return (this.i.indeterminate as boolean);
	}
	@Input()
	set indeterminate(v: boolean) {
		this.i.indeterminate = ensureBool(v);
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
	/**
	 * Gets or sets whether the checkbox transitions are disabled.
	*/
	get disableTransitions() : boolean {
		return (this.i.disableTransitions as boolean);
	}
	@Input()
	set disableTransitions(v: boolean) {
		this.i.disableTransitions = ensureBool(v);
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
	        genericPrefix = toSpinal("CheckboxComponent");
		
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

    	private _change: EventEmitter<{ sender: any, args: IgxCheckboxChangeEventArgs}> = null;
	@Output()
	get change(): EventEmitter<{ sender: any, args: IgxCheckboxChangeEventArgs}> {
		if (this._change == null) {
			this._change = new EventEmitter<{sender: any, args: IgxCheckboxChangeEventArgs}>();
			this.i.change = delegateCombine(this.i.change, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxCheckboxChangeEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeChange) {
	                        (this as any).beforeChange(this, outerArgs);
	                    }
					this._change.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._change;
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
