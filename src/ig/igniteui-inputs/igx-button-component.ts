import { Type, Output, TemplateRef, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterViewInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Button } from "./Button";
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher, fromBrushCollection, toBrushCollection } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { AngularRenderer, PortalManager } from 'igniteui-core/angular-renderer';
import { delegateCombine } from 'igniteui-core/type';
import { CornerRadius } from 'igniteui-core/CornerRadius';
import { ButtonDisplayStyle, ButtonDisplayStyle_$type } from './ButtonDisplayStyle';
import { IgxButtonClickEventArgs } from './igx-button-click-event-args';

export const IgxButtonComponent_PROVIDERS = [];



@Component({
	selector: 'igx-button',
    template: `<ng-template #childContent><ng-content></ng-content></ng-template>
<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxButtonComponent_PROVIDERS,
    host: { 'class': 'ig-button igx-button' },
	styles: [`
		:host {
			display: inline-block;           
		}
	`]
})
export class IgxButtonComponent implements AfterViewInit {
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
        var button = this.i;
        this._button = <Button>button;

        if (renderer) {
            this._portalManager = new PortalManager("buttonContent", componentFactoryResolver)
            var ren: AngularRenderer = new AngularRenderer(
                root, this.renderer, window.document,
                this.ngZone, true,
                {}, this._portalManager);
            this._wrapper = ren;
            button.provideContainer(ren);

        }
    }

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
    }

    ngOnDestroy() {
        this._button.destroy();
        this._wrapper.destroy();
    }


    private _implementation: Button = null;

    ngAfterViewInit(): void {
        this._portalManager.dynamicContent = this._dynamicContent;
        this._portalManager.onChildContentChanged(this._childTemplateRef);
        this._styling(this._root, this);


        this.updateStyle();
    }

    protected createImplementation() {
        return new Button();
    }

    public get i(): Button {
        return this._implementation;
    }

    private _button: Button;


   
		/**
	 * Gets or sets the display style to use for the button.
	*/
	get type() : ButtonDisplayStyle {
		return this.i.type;
	}
	@Input()
	set type(v: ButtonDisplayStyle) {
		this.i.type = ensureEnum<ButtonDisplayStyle>(ButtonDisplayStyle_$type, v);
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
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualUmbraShadowColor() : string {
		return brushToString(this.i.actualUmbraShadowColor);
	}
	@Input()
	set actualUmbraShadowColor(v: string) {
		this.i.actualUmbraShadowColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualPenumbraShadowColor() : string {
		return brushToString(this.i.actualPenumbraShadowColor);
	}
	@Input()
	set actualPenumbraShadowColor(v: string) {
		this.i.actualPenumbraShadowColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualAmbientShadowColor() : string {
		return brushToString(this.i.actualAmbientShadowColor);
	}
	@Input()
	set actualAmbientShadowColor(v: string) {
		this.i.actualAmbientShadowColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualRestingElevation() : number {
		return (this.i.actualRestingElevation as number);
	}
	@Input()
	set actualRestingElevation(v: number) {
		this.i.actualRestingElevation = +v;
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualFocusElevation() : number {
		return (this.i.actualFocusElevation as number);
	}
	@Input()
	set actualFocusElevation(v: number) {
		this.i.actualFocusElevation = +v;
	}
	/**
	 * Gets or sets the color to use for the check mark when the checkbox is checked.
	*/
	get actualHoverElevation() : number {
		return (this.i.actualHoverElevation as number);
	}
	@Input()
	set actualHoverElevation(v: number) {
		this.i.actualHoverElevation = +v;
	}
	/**
	 * Gets or sets the color to use for the ripple when the button is pressed.
	*/
	get actualRippleColor() : string {
		return brushToString(this.i.actualRippleColor);
	}
	@Input()
	set actualRippleColor(v: string) {
		this.i.actualRippleColor = stringToBrush(v);
	}
	/**
	 * Gets the actual corner radius to use for the checkbox.
	*/
	get actualCornerRadius() : CornerRadius {
		return this.i.actualCornerRadius as CornerRadius;
	}
	@Input()
	set actualCornerRadius(v: CornerRadius) {
		this.i.actualCornerRadius = v;
	}
	/**
	 * Gets the color to use for the actual background.
	*/
	get actualBackgroundColor() : string {
		return brushToString(this.i.actualBackgroundColor);
	}
	@Input()
	set actualBackgroundColor(v: string) {
		this.i.actualBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets the color to use for the actual background.
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
	get actualHoverTextColor() : string {
		return brushToString(this.i.actualHoverTextColor);
	}
	@Input()
	set actualHoverTextColor(v: string) {
		this.i.actualHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets the color to use for the actual background.
	*/
	get actualFocusBackgroundColor() : string {
		return brushToString(this.i.actualFocusBackgroundColor);
	}
	@Input()
	set actualFocusBackgroundColor(v: string) {
		this.i.actualFocusBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets the hover color to use for the actual background.
	*/
	get actualHoverBackgroundColor() : string {
		return brushToString(this.i.actualHoverBackgroundColor);
	}
	@Input()
	set actualHoverBackgroundColor(v: string) {
		this.i.actualHoverBackgroundColor = stringToBrush(v);
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
	 * Gets or sets the color to use for the background of the button when the  type is raised.
	*/
	get raisedBackgroundColor() : string {
		return brushToString(this.i.raisedBackgroundColor);
	}
	@Input()
	set raisedBackgroundColor(v: string) {
		this.i.raisedBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover color to use for the background of the button when the  type is raised.
	*/
	get raisedHoverBackgroundColor() : string {
		return brushToString(this.i.raisedHoverBackgroundColor);
	}
	@Input()
	set raisedHoverBackgroundColor(v: string) {
		this.i.raisedHoverBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color to use for the button when the type is raised.
	*/
	get raisedBorderColor() : string {
		return brushToString(this.i.raisedBorderColor);
	}
	@Input()
	set raisedBorderColor(v: string) {
		this.i.raisedBorderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the elevation to use for the button when the type is raised.
	*/
	get raisedRestingElevation() : number {
		return (this.i.raisedRestingElevation as number);
	}
	@Input()
	set raisedRestingElevation(v: number) {
		this.i.raisedRestingElevation = +v;
	}
	/**
	 * Gets or sets the hover elevation to use for the button when the type is raised.
	*/
	get raisedHoverElevation() : number {
		return (this.i.raisedHoverElevation as number);
	}
	@Input()
	set raisedHoverElevation(v: number) {
		this.i.raisedHoverElevation = +v;
	}
	/**
	 * Gets or sets the focus elevation to use for the button when the type is raised.
	*/
	get raisedFocusElevation() : number {
		return (this.i.raisedFocusElevation as number);
	}
	@Input()
	set raisedFocusElevation(v: number) {
		this.i.raisedFocusElevation = +v;
	}
	/**
	 * Gets or sets the width to use for the button border when the type is raised.
	*/
	get raisedBorderWidth() : number {
		return (this.i.raisedBorderWidth as number);
	}
	@Input()
	set raisedBorderWidth(v: number) {
		this.i.raisedBorderWidth = +v;
	}
	get raisedCornerRadiusBottomRight() : number {
		return this.i.raisedCornerRadius ? (this.i.raisedCornerRadius.bottomRight as number) : NaN;
	}
	@Input()
	set raisedCornerRadiusBottomRight(v: number) {
	                                        this.ensureRaisedCornerRadius();
		this.i.raisedCornerRadius.bottomRight = +v;
	                                        this.i.raisedCornerRadius = this.i.raisedCornerRadius
	
	}
	get raisedCornerRadiusBottomLeft() : number {
		return this.i.raisedCornerRadius ? (this.i.raisedCornerRadius.bottomLeft as number) : NaN;
	}
	@Input()
	set raisedCornerRadiusBottomLeft(v: number) {
	                                        this.ensureRaisedCornerRadius();
		this.i.raisedCornerRadius.bottomLeft = +v;
	                                        this.i.raisedCornerRadius = this.i.raisedCornerRadius
	
	}
	get raisedCornerRadiusTopLeft() : number {
		return this.i.raisedCornerRadius ? (this.i.raisedCornerRadius.topLeft as number) : NaN;
	}
	@Input()
	set raisedCornerRadiusTopLeft(v: number) {
	                                        this.ensureRaisedCornerRadius();
		this.i.raisedCornerRadius.topLeft = +v;
	                                        this.i.raisedCornerRadius = this.i.raisedCornerRadius
	
	}
	get raisedCornerRadiusTopRight() : number {
		return this.i.raisedCornerRadius ? (this.i.raisedCornerRadius.topRight as number) : NaN;
	}
	@Input()
	set raisedCornerRadiusTopRight(v: number) {
	                                        this.ensureRaisedCornerRadius();
		this.i.raisedCornerRadius.topRight = +v;
	                                        this.i.raisedCornerRadius = this.i.raisedCornerRadius
	
	}
	ensureRaisedCornerRadius() {
	if (this.i.raisedCornerRadius) {
	                                            return;
	                                        }
	                                        this.i.raisedCornerRadius = new CornerRadius(2);
	
	                                }
	/**
	 * Gets or sets the color to use for the background when the button is pressed and the type is floating action button.
	*/
	get raisedRippleColor() : string {
		return brushToString(this.i.raisedRippleColor);
	}
	@Input()
	set raisedRippleColor(v: string) {
		this.i.raisedRippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the background of the button when the type is flat.
	*/
	get flatBackgroundColor() : string {
		return brushToString(this.i.flatBackgroundColor);
	}
	@Input()
	set flatBackgroundColor(v: string) {
		this.i.flatBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover color to use for the background of the button when the type is flat.
	*/
	get flatHoverBackgroundColor() : string {
		return brushToString(this.i.flatHoverBackgroundColor);
	}
	@Input()
	set flatHoverBackgroundColor(v: string) {
		this.i.flatHoverBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color to use for the button when the type is flat.
	*/
	get flatBorderColor() : string {
		return brushToString(this.i.flatBorderColor);
	}
	@Input()
	set flatBorderColor(v: string) {
		this.i.flatBorderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the elevation to use for the button when the type is flat.
	*/
	get flatRestingElevation() : number {
		return (this.i.flatRestingElevation as number);
	}
	@Input()
	set flatRestingElevation(v: number) {
		this.i.flatRestingElevation = +v;
	}
	/**
	 * Gets or sets the hover elevation to use for the button when the type is flat.
	*/
	get flatHoverElevation() : number {
		return (this.i.flatHoverElevation as number);
	}
	@Input()
	set flatHoverElevation(v: number) {
		this.i.flatHoverElevation = +v;
	}
	/**
	 * Gets or sets the focus elevation to use for the button when the type is flat.
	*/
	get flatFocusElevation() : number {
		return (this.i.flatFocusElevation as number);
	}
	@Input()
	set flatFocusElevation(v: number) {
		this.i.flatFocusElevation = +v;
	}
	/**
	 * Gets or sets the color to use for the background when the button is pressed and the type is floating action button.
	*/
	get flatRippleColor() : string {
		return brushToString(this.i.flatRippleColor);
	}
	@Input()
	set flatRippleColor(v: string) {
		this.i.flatRippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text of the button when type is flat.
	*/
	get flatTextColor() : string {
		return brushToString(this.i.flatTextColor);
	}
	@Input()
	set flatTextColor(v: string) {
		this.i.flatTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the hovered text of the button when type is flat.
	*/
	get flatHoverTextColor() : string {
		return brushToString(this.i.flatHoverTextColor);
	}
	@Input()
	set flatHoverTextColor(v: string) {
		this.i.flatHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the backround the button when it is focused and flat.
	*/
	get flatFocusBackgroundColor() : string {
		return brushToString(this.i.flatFocusBackgroundColor);
	}
	@Input()
	set flatFocusBackgroundColor(v: string) {
		this.i.flatFocusBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the width to use for the button border when the type is flat.
	*/
	get flatBorderWidth() : number {
		return (this.i.flatBorderWidth as number);
	}
	@Input()
	set flatBorderWidth(v: number) {
		this.i.flatBorderWidth = +v;
	}
	get flatCornerRadiusBottomRight() : number {
		return this.i.flatCornerRadius ? (this.i.flatCornerRadius.bottomRight as number) : NaN;
	}
	@Input()
	set flatCornerRadiusBottomRight(v: number) {
	                                        this.ensureFlatCornerRadius();
		this.i.flatCornerRadius.bottomRight = +v;
	                                        this.i.flatCornerRadius = this.i.flatCornerRadius
	
	}
	get flatCornerRadiusBottomLeft() : number {
		return this.i.flatCornerRadius ? (this.i.flatCornerRadius.bottomLeft as number) : NaN;
	}
	@Input()
	set flatCornerRadiusBottomLeft(v: number) {
	                                        this.ensureFlatCornerRadius();
		this.i.flatCornerRadius.bottomLeft = +v;
	                                        this.i.flatCornerRadius = this.i.flatCornerRadius
	
	}
	get flatCornerRadiusTopLeft() : number {
		return this.i.flatCornerRadius ? (this.i.flatCornerRadius.topLeft as number) : NaN;
	}
	@Input()
	set flatCornerRadiusTopLeft(v: number) {
	                                        this.ensureFlatCornerRadius();
		this.i.flatCornerRadius.topLeft = +v;
	                                        this.i.flatCornerRadius = this.i.flatCornerRadius
	
	}
	get flatCornerRadiusTopRight() : number {
		return this.i.flatCornerRadius ? (this.i.flatCornerRadius.topRight as number) : NaN;
	}
	@Input()
	set flatCornerRadiusTopRight(v: number) {
	                                        this.ensureFlatCornerRadius();
		this.i.flatCornerRadius.topRight = +v;
	                                        this.i.flatCornerRadius = this.i.flatCornerRadius
	
	}
	ensureFlatCornerRadius() {
	if (this.i.flatCornerRadius) {
	                                            return;
	                                        }
	                                        this.i.flatCornerRadius = new CornerRadius(2);
	
	                                }
	/**
	 * Gets or sets the color to use for the background when the button regardless of type.
	*/
	get backgroundColor() : string {
		return brushToString(this.i.backgroundColor);
	}
	@Input()
	set backgroundColor(v: string) {
		this.i.backgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover color to use for the background of the button when the  type is hovered.
	*/
	get hoverBackgroundColor() : string {
		return brushToString(this.i.hoverBackgroundColor);
	}
	@Input()
	set hoverBackgroundColor(v: string) {
		this.i.hoverBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color to use for the button regardless of type.
	*/
	get borderColor() : string {
		return brushToString(this.i.borderColor);
	}
	@Input()
	set borderColor(v: string) {
		this.i.borderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the elevation to use for the button regardless of type.
	*/
	get restingElevation() : number {
		return (this.i.restingElevation as number);
	}
	@Input()
	set restingElevation(v: number) {
		this.i.restingElevation = +v;
	}
	/**
	 * Gets or sets the hover elevation to use for the button regardless of type.
	*/
	get hoverElevation() : number {
		return (this.i.hoverElevation as number);
	}
	@Input()
	set hoverElevation(v: number) {
		this.i.hoverElevation = +v;
	}
	/**
	 * Gets or sets the focus elevation to use for the button regardless of type.
	*/
	get focusElevation() : number {
		return (this.i.focusElevation as number);
	}
	@Input()
	set focusElevation(v: number) {
		this.i.focusElevation = +v;
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
	 * Gets or sets the color to use for the text of the button regardless of type.
	*/
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	@Input()
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
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
	 * Gets or sets the color to use for the background of the button regardless of type.
	*/
	get rippleColor() : string {
		return brushToString(this.i.rippleColor);
	}
	@Input()
	set rippleColor(v: string) {
		this.i.rippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text of the button when type is raised.
	*/
	get raisedTextColor() : string {
		return brushToString(this.i.raisedTextColor);
	}
	@Input()
	set raisedTextColor(v: string) {
		this.i.raisedTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the hovered text of the button when type is raised.
	*/
	get raisedHoverTextColor() : string {
		return brushToString(this.i.raisedHoverTextColor);
	}
	@Input()
	set raisedHoverTextColor(v: string) {
		this.i.raisedHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the backround the button when it is focused and raised.
	*/
	get raisedFocusBackgroundColor() : string {
		return brushToString(this.i.raisedFocusBackgroundColor);
	}
	@Input()
	set raisedFocusBackgroundColor(v: string) {
		this.i.raisedFocusBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the backround the button when it is focused.
	*/
	get focusBackgroundColor() : string {
		return brushToString(this.i.focusBackgroundColor);
	}
	@Input()
	set focusBackgroundColor(v: string) {
		this.i.focusBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the width to use for the button border regardless of type.
	*/
	get borderWidth() : number {
		return (this.i.borderWidth as number);
	}
	@Input()
	set borderWidth(v: number) {
		this.i.borderWidth = +v;
	}
	get cornerRadiusBottomRight() : number {
		return this.i.cornerRadius ? (this.i.cornerRadius.bottomRight as number) : NaN;
	}
	@Input()
	set cornerRadiusBottomRight(v: number) {
	                                        this.ensureCornerRadius();
		this.i.cornerRadius.bottomRight = +v;
	                                        this.i.cornerRadius = this.i.cornerRadius
	
	}
	get cornerRadiusBottomLeft() : number {
		return this.i.cornerRadius ? (this.i.cornerRadius.bottomLeft as number) : NaN;
	}
	@Input()
	set cornerRadiusBottomLeft(v: number) {
	                                        this.ensureCornerRadius();
		this.i.cornerRadius.bottomLeft = +v;
	                                        this.i.cornerRadius = this.i.cornerRadius
	
	}
	get cornerRadiusTopLeft() : number {
		return this.i.cornerRadius ? (this.i.cornerRadius.topLeft as number) : NaN;
	}
	@Input()
	set cornerRadiusTopLeft(v: number) {
	                                        this.ensureCornerRadius();
		this.i.cornerRadius.topLeft = +v;
	                                        this.i.cornerRadius = this.i.cornerRadius
	
	}
	get cornerRadiusTopRight() : number {
		return this.i.cornerRadius ? (this.i.cornerRadius.topRight as number) : NaN;
	}
	@Input()
	set cornerRadiusTopRight(v: number) {
	                                        this.ensureCornerRadius();
		this.i.cornerRadius.topRight = +v;
	                                        this.i.cornerRadius = this.i.cornerRadius
	
	}
	ensureCornerRadius() {
	if (this.i.cornerRadius) {
	                                            return;
	                                        }
	                                        this.i.cornerRadius = new CornerRadius(2);
	
	                                }
	/**
	 * Gets or sets the color to use for the background of the button when the  type is outlined.
	*/
	get outlinedBackgroundColor() : string {
		return brushToString(this.i.outlinedBackgroundColor);
	}
	@Input()
	set outlinedBackgroundColor(v: string) {
		this.i.outlinedBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover color to use for the background of the button when the  type is hoveredOutlined.
	*/
	get outlinedHoverBackgroundColor() : string {
		return brushToString(this.i.outlinedHoverBackgroundColor);
	}
	@Input()
	set outlinedHoverBackgroundColor(v: string) {
		this.i.outlinedHoverBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color to use for the button when the type is outlined.
	*/
	get outlinedBorderColor() : string {
		return brushToString(this.i.outlinedBorderColor);
	}
	@Input()
	set outlinedBorderColor(v: string) {
		this.i.outlinedBorderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the elevation to use for the button when the type is outlined.
	*/
	get outlinedRestingElevation() : number {
		return (this.i.outlinedRestingElevation as number);
	}
	@Input()
	set outlinedRestingElevation(v: number) {
		this.i.outlinedRestingElevation = +v;
	}
	/**
	 * Gets or sets the hover elevation to use for the button when the type is outlined.
	*/
	get outlinedHoverElevation() : number {
		return (this.i.outlinedHoverElevation as number);
	}
	@Input()
	set outlinedHoverElevation(v: number) {
		this.i.outlinedHoverElevation = +v;
	}
	/**
	 * Gets or sets the focus elevation to use for the button when the type is outlined.
	*/
	get outlinedFocusElevation() : number {
		return (this.i.outlinedFocusElevation as number);
	}
	@Input()
	set outlinedFocusElevation(v: number) {
		this.i.outlinedFocusElevation = +v;
	}
	/**
	 * Gets or sets the width to use for the button border when the type is outlined.
	*/
	get outlinedBorderWidth() : number {
		return (this.i.outlinedBorderWidth as number);
	}
	@Input()
	set outlinedBorderWidth(v: number) {
		this.i.outlinedBorderWidth = +v;
	}
	get outlinedCornerRadiusBottomRight() : number {
		return this.i.outlinedCornerRadius ? (this.i.outlinedCornerRadius.bottomRight as number) : NaN;
	}
	@Input()
	set outlinedCornerRadiusBottomRight(v: number) {
	                                        this.ensureOutlinedCornerRadius();
		this.i.outlinedCornerRadius.bottomRight = +v;
	                                        this.i.outlinedCornerRadius = this.i.outlinedCornerRadius
	
	}
	get outlinedCornerRadiusBottomLeft() : number {
		return this.i.outlinedCornerRadius ? (this.i.outlinedCornerRadius.bottomLeft as number) : NaN;
	}
	@Input()
	set outlinedCornerRadiusBottomLeft(v: number) {
	                                        this.ensureOutlinedCornerRadius();
		this.i.outlinedCornerRadius.bottomLeft = +v;
	                                        this.i.outlinedCornerRadius = this.i.outlinedCornerRadius
	
	}
	get outlinedCornerRadiusTopLeft() : number {
		return this.i.outlinedCornerRadius ? (this.i.outlinedCornerRadius.topLeft as number) : NaN;
	}
	@Input()
	set outlinedCornerRadiusTopLeft(v: number) {
	                                        this.ensureOutlinedCornerRadius();
		this.i.outlinedCornerRadius.topLeft = +v;
	                                        this.i.outlinedCornerRadius = this.i.outlinedCornerRadius
	
	}
	get outlinedCornerRadiusTopRight() : number {
		return this.i.outlinedCornerRadius ? (this.i.outlinedCornerRadius.topRight as number) : NaN;
	}
	@Input()
	set outlinedCornerRadiusTopRight(v: number) {
	                                        this.ensureOutlinedCornerRadius();
		this.i.outlinedCornerRadius.topRight = +v;
	                                        this.i.outlinedCornerRadius = this.i.outlinedCornerRadius
	
	}
	ensureOutlinedCornerRadius() {
	if (this.i.outlinedCornerRadius) {
	                                            return;
	                                        }
	                                        this.i.outlinedCornerRadius = new CornerRadius(2);
	
	                                }
	/**
	 * Gets or sets the color to use for the background when the button is pressed and the type is floating action button.
	*/
	get outlinedRippleColor() : string {
		return brushToString(this.i.outlinedRippleColor);
	}
	@Input()
	set outlinedRippleColor(v: string) {
		this.i.outlinedRippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text of the button when type is outlined.
	*/
	get outlinedTextColor() : string {
		return brushToString(this.i.outlinedTextColor);
	}
	@Input()
	set outlinedTextColor(v: string) {
		this.i.outlinedTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the hovered text of the button when type is outlined.
	*/
	get outlinedHoverTextColor() : string {
		return brushToString(this.i.outlinedHoverTextColor);
	}
	@Input()
	set outlinedHoverTextColor(v: string) {
		this.i.outlinedHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the backround the button when it is focused and outlined.
	*/
	get outlinedFocusBackgroundColor() : string {
		return brushToString(this.i.outlinedFocusBackgroundColor);
	}
	@Input()
	set outlinedFocusBackgroundColor(v: string) {
		this.i.outlinedFocusBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the background of the button when the  type is floating action button.
	*/
	get fabBackgroundColor() : string {
		return brushToString(this.i.fabBackgroundColor);
	}
	@Input()
	set fabBackgroundColor(v: string) {
		this.i.fabBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover color to use for the background of the button when the  type is hoveredFab.
	*/
	get fabHoverBackgroundColor() : string {
		return brushToString(this.i.fabHoverBackgroundColor);
	}
	@Input()
	set fabHoverBackgroundColor(v: string) {
		this.i.fabHoverBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color to use for the button when the type is floating action button.
	*/
	get fabBorderColor() : string {
		return brushToString(this.i.fabBorderColor);
	}
	@Input()
	set fabBorderColor(v: string) {
		this.i.fabBorderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the elevation to use for the button when the type is floating action button.
	*/
	get fabRestingElevation() : number {
		return (this.i.fabRestingElevation as number);
	}
	@Input()
	set fabRestingElevation(v: number) {
		this.i.fabRestingElevation = +v;
	}
	/**
	 * Gets or sets the hover elevation to use for the button when the type is floating action button.
	*/
	get fabHoverElevation() : number {
		return (this.i.fabHoverElevation as number);
	}
	@Input()
	set fabHoverElevation(v: number) {
		this.i.fabHoverElevation = +v;
	}
	/**
	 * Gets or sets the focus elevation to use for the button when the type is floating action button.
	*/
	get fabFocusElevation() : number {
		return (this.i.fabFocusElevation as number);
	}
	@Input()
	set fabFocusElevation(v: number) {
		this.i.fabFocusElevation = +v;
	}
	/**
	 * Gets or sets the width to use for the button border when the type is floating action button.
	*/
	get fabBorderWidth() : number {
		return (this.i.fabBorderWidth as number);
	}
	@Input()
	set fabBorderWidth(v: number) {
		this.i.fabBorderWidth = +v;
	}
	get fabCornerRadiusBottomRight() : number {
		return this.i.fabCornerRadius ? (this.i.fabCornerRadius.bottomRight as number) : NaN;
	}
	@Input()
	set fabCornerRadiusBottomRight(v: number) {
	                                        this.ensureFabCornerRadius();
		this.i.fabCornerRadius.bottomRight = +v;
	                                        this.i.fabCornerRadius = this.i.fabCornerRadius
	
	}
	get fabCornerRadiusBottomLeft() : number {
		return this.i.fabCornerRadius ? (this.i.fabCornerRadius.bottomLeft as number) : NaN;
	}
	@Input()
	set fabCornerRadiusBottomLeft(v: number) {
	                                        this.ensureFabCornerRadius();
		this.i.fabCornerRadius.bottomLeft = +v;
	                                        this.i.fabCornerRadius = this.i.fabCornerRadius
	
	}
	get fabCornerRadiusTopLeft() : number {
		return this.i.fabCornerRadius ? (this.i.fabCornerRadius.topLeft as number) : NaN;
	}
	@Input()
	set fabCornerRadiusTopLeft(v: number) {
	                                        this.ensureFabCornerRadius();
		this.i.fabCornerRadius.topLeft = +v;
	                                        this.i.fabCornerRadius = this.i.fabCornerRadius
	
	}
	get fabCornerRadiusTopRight() : number {
		return this.i.fabCornerRadius ? (this.i.fabCornerRadius.topRight as number) : NaN;
	}
	@Input()
	set fabCornerRadiusTopRight(v: number) {
	                                        this.ensureFabCornerRadius();
		this.i.fabCornerRadius.topRight = +v;
	                                        this.i.fabCornerRadius = this.i.fabCornerRadius
	
	}
	ensureFabCornerRadius() {
	if (this.i.fabCornerRadius) {
	                                            return;
	                                        }
	                                        this.i.fabCornerRadius = new CornerRadius(2);
	
	                                }
	/**
	 * Gets or sets the color to use for the background when the button is pressed and the type is floating action button.
	*/
	get fabRippleColor() : string {
		return brushToString(this.i.fabRippleColor);
	}
	@Input()
	set fabRippleColor(v: string) {
		this.i.fabRippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text of the button when type is floating action button.
	*/
	get fabTextColor() : string {
		return brushToString(this.i.fabTextColor);
	}
	@Input()
	set fabTextColor(v: string) {
		this.i.fabTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the hovered text of the button when type is floating action button.
	*/
	get fabHoverTextColor() : string {
		return brushToString(this.i.fabHoverTextColor);
	}
	@Input()
	set fabHoverTextColor(v: string) {
		this.i.fabHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the backround the button when it is focused and fab.
	*/
	get fabFocusBackgroundColor() : string {
		return brushToString(this.i.fabFocusBackgroundColor);
	}
	@Input()
	set fabFocusBackgroundColor(v: string) {
		this.i.fabFocusBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the background of the button when the  type is icon.
	*/
	get iconBackgroundColor() : string {
		return brushToString(this.i.iconBackgroundColor);
	}
	@Input()
	set iconBackgroundColor(v: string) {
		this.i.iconBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the hover color to use for the background of the button when the  type is hoveredIcon.
	*/
	get iconHoverBackgroundColor() : string {
		return brushToString(this.i.iconHoverBackgroundColor);
	}
	@Input()
	set iconHoverBackgroundColor(v: string) {
		this.i.iconHoverBackgroundColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color to use for the button when the type is icon.
	*/
	get iconBorderColor() : string {
		return brushToString(this.i.iconBorderColor);
	}
	@Input()
	set iconBorderColor(v: string) {
		this.i.iconBorderColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the elevation to use for the button when the type is icon.
	*/
	get iconRestingElevation() : number {
		return (this.i.iconRestingElevation as number);
	}
	@Input()
	set iconRestingElevation(v: number) {
		this.i.iconRestingElevation = +v;
	}
	/**
	 * Gets or sets the hover elevation to use for the button when the type is icon.
	*/
	get iconHoverElevation() : number {
		return (this.i.iconHoverElevation as number);
	}
	@Input()
	set iconHoverElevation(v: number) {
		this.i.iconHoverElevation = +v;
	}
	/**
	 * Gets or sets the focus elevation to use for the button when the type is icon.
	*/
	get iconFocusElevation() : number {
		return (this.i.iconFocusElevation as number);
	}
	@Input()
	set iconFocusElevation(v: number) {
		this.i.iconFocusElevation = +v;
	}
	/**
	 * Gets or sets the width to use for the button border when the type is icon.
	*/
	get iconBorderWidth() : number {
		return (this.i.iconBorderWidth as number);
	}
	@Input()
	set iconBorderWidth(v: number) {
		this.i.iconBorderWidth = +v;
	}
	get iconCornerRadiusBottomRight() : number {
		return this.i.iconCornerRadius ? (this.i.iconCornerRadius.bottomRight as number) : NaN;
	}
	@Input()
	set iconCornerRadiusBottomRight(v: number) {
	                                        this.ensureIconCornerRadius();
		this.i.iconCornerRadius.bottomRight = +v;
	                                        this.i.iconCornerRadius = this.i.iconCornerRadius
	
	}
	get iconCornerRadiusBottomLeft() : number {
		return this.i.iconCornerRadius ? (this.i.iconCornerRadius.bottomLeft as number) : NaN;
	}
	@Input()
	set iconCornerRadiusBottomLeft(v: number) {
	                                        this.ensureIconCornerRadius();
		this.i.iconCornerRadius.bottomLeft = +v;
	                                        this.i.iconCornerRadius = this.i.iconCornerRadius
	
	}
	get iconCornerRadiusTopLeft() : number {
		return this.i.iconCornerRadius ? (this.i.iconCornerRadius.topLeft as number) : NaN;
	}
	@Input()
	set iconCornerRadiusTopLeft(v: number) {
	                                        this.ensureIconCornerRadius();
		this.i.iconCornerRadius.topLeft = +v;
	                                        this.i.iconCornerRadius = this.i.iconCornerRadius
	
	}
	get iconCornerRadiusTopRight() : number {
		return this.i.iconCornerRadius ? (this.i.iconCornerRadius.topRight as number) : NaN;
	}
	@Input()
	set iconCornerRadiusTopRight(v: number) {
	                                        this.ensureIconCornerRadius();
		this.i.iconCornerRadius.topRight = +v;
	                                        this.i.iconCornerRadius = this.i.iconCornerRadius
	
	}
	ensureIconCornerRadius() {
	if (this.i.iconCornerRadius) {
	                                            return;
	                                        }
	                                        this.i.iconCornerRadius = new CornerRadius(2);
	
	                                }
	/**
	 * Gets or sets the color to use for the background when the button is pressed and the type is floating action button.
	*/
	get iconRippleColor() : string {
		return brushToString(this.i.iconRippleColor);
	}
	@Input()
	set iconRippleColor(v: string) {
		this.i.iconRippleColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the text of the button when type is icon.
	*/
	get iconTextColor() : string {
		return brushToString(this.i.iconTextColor);
	}
	@Input()
	set iconTextColor(v: string) {
		this.i.iconTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the hovered text of the button when type is icon.
	*/
	get iconHoverTextColor() : string {
		return brushToString(this.i.iconHoverTextColor);
	}
	@Input()
	set iconHoverTextColor(v: string) {
		this.i.iconHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the backround the button when it is focused and icon.
	*/
	get iconFocusBackgroundColor() : string {
		return brushToString(this.i.iconFocusBackgroundColor);
	}
	@Input()
	set iconFocusBackgroundColor(v: string) {
		this.i.iconFocusBackgroundColor = stringToBrush(v);
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
	        genericPrefix = toSpinal("ButtonComponent");
		
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

    	private _clicked: EventEmitter<{ sender: any, args: IgxButtonClickEventArgs}> = null;
	@Output()
	get clicked(): EventEmitter<{ sender: any, args: IgxButtonClickEventArgs}> {
		if (this._clicked == null) {
			this._clicked = new EventEmitter<{sender: any, args: IgxButtonClickEventArgs}>();
			this.i.clicked = delegateCombine(this.i.clicked, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxButtonClickEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeClicked) {
	                        (this as any).beforeClicked(this, outerArgs);
	                    }
					this._clicked.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._clicked;
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
