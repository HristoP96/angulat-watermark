import { Type, Output, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterViewInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, initializePropertiesFromCss, NamePatcher, isValidProp, toSpinal, getModifiedProps, fromBrushCollection, toBrushCollection, brushCollectionToString, enumToString, getAllPropertyNames, fromSpinal } from "igniteui-core/componentUtil";
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { ColumnHiding } from './ColumnHiding';
import { IgxCheckboxListComponent } from 'igniteui-grids/igx-checkbox-list-component';
import { IgxLiveGridComponent } from 'igniteui-grids/igx-live-grid-component';
export const IgxColumnChooserComponent_PROVIDERS = [];



@Component({
	selector: 'igx-column-hiding',
    template: `<div #hidingContainer>
                <igx-checkbox-list #checkboxList height="90%"></igx-checkbox-list>
                <input type="button" value="Show All">
                <input type="button" value="Hide All">
                </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxColumnChooserComponent_PROVIDERS,
    host: { 'class': 'ig-column-chooser igx-column-chooser' },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxColumnHidingComponent implements AfterViewInit {
    container: Element;

    @ViewChild("checkboxList", { read: IgxCheckboxListComponent, static: true })
    public _checkboxList: IgxCheckboxListComponent;

    @ViewChild("hidingContainer", { read: ElementRef, static: true })
    public _hidingContainer: ElementRef;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._columnHiding.notifySizeChanged();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._columnHiding.notifySizeChanged();
    }
    get width(): string {
        return this._width;
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

        var columnHiding = this.i;
        this._columnHiding = columnHiding;

	}

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
	}

    ngOnDestroy() {
        this._columnHiding.destroy();
        this._wrapper.destroy();
    }

	
    private _implementation: ColumnHiding = null;

    ngAfterViewInit(): void {

        if (this.renderer && this._checkboxList != null && this._hidingContainer != null) {
            this.container = this._hidingContainer.nativeElement;
            this._root = this.container;
            var ren: AngularRenderer = new AngularRenderer(
                this.container, this.renderer, window.document,
                this.ngZone, true,
                null);
            this._wrapper = ren;
            this._columnHiding.provideContainer(ren, this._checkboxList.i);
            this._columnHiding.notifySizeChanged();

            ren.addSizeWatcher(() => {
                this._columnHiding.notifySizeChanged();
            });
        }

        this._styling(this._root, this);

        this.i.notifySizeChanged();
        this.updateStyle();
	}

	protected createImplementation() {
        return new ColumnHiding();
	}

    public get i(): ColumnHiding {
		return this._implementation;
	}

    private _columnHiding: ColumnHiding;

   
		/**
	 * Gets or Sets the property name that contains the values.
	*/
	get targetGrid() : IgxLiveGridComponent {
	                                        if (this.i.targetGrid == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.targetGrid as any).externalObject;
	}
	@Input()
	set targetGrid(v: IgxLiveGridComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.targetGrid = null : this.i.targetGrid = v.i;
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
	        genericPrefix = toSpinal("ColumnHidingComponent");
		
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
	
	        if (this.targetGrid && (this.targetGrid as any)._styling) {
	    (this.targetGrid as any)._styling(container, component, this);
	}
	
	
	        if ((this as any)._otherStyling) {
	            (this as any)._otherStyling(container, component, parent);
	        }
	        this._inStyling = false;
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
