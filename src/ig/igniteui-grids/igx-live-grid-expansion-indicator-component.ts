import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { GridExpansionIndicator } from "./GridExpansionIndicator";
import { TypeRegistrar } from "igniteui-core/type";
import { NamePatcher, ensureBool, brushToString, stringToBrush, toSpinal, initializePropertiesFromCss } from "igniteui-core/componentUtil";

export const IgxLiveGridExpansionIndicatorComponent_PROVIDERS = [];
@Component({
  selector: 'igx-live-grid-expansion-indicator',
  template: ``,
  providers: [],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxLiveGridExpansionIndicatorComponent implements OnInit
{

protected createImplementation() : GridExpansionIndicator
{
	return new GridExpansionIndicator();
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridExpansionIndicator {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxLiveGridExpansionIndicatorComponent {
	    if (!internal) {
	                                    return null;
	                                }
	                                if (!internal.$type) {
	                                    return null;
	                                }
	                                let name = internal.$type.name;
	                                let externalName = "Igx" + name + "Component";
	                                if (!TypeRegistrar.isRegistered(externalName)) {
	                                    return null;
	                                }
	                                return TypeRegistrar.create(externalName);
	                            }
	private onImplementationCreated() {
		
	}
	constructor() {
	                                    if ((this as any)._styling) {
	                                        NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
	                                    }
		this._implementation = this.createImplementation();
		(<any>this._implementation).externalObject = this;
		this.onImplementationCreated();
	}
	/**
	 * Gets or sets the expansion state of the indicator.
	*/
	get isExpanded() : boolean {
		return (this.i.isExpanded as boolean);
	}
	@Input()
	set isExpanded(v: boolean) {
		this.i.isExpanded = ensureBool(v);
	}
	/**
	 * Gets or sets the color of the indicator.
	*/
	get iconColor() : string {
		return brushToString(this.i.iconColor);
	}
	@Input()
	set iconColor(v: string) {
		this.i.iconColor = stringToBrush(v);
	}
	/**
	 * Gets or sets whether animations are enabled.
	*/
	get isAnimationEnabled() : boolean {
		return (this.i.isAnimationEnabled as boolean);
	}
	@Input()
	set isAnimationEnabled(v: boolean) {
		this.i.isAnimationEnabled = ensureBool(v);
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
	/**
	 * Gets the actual pixel scaling ratio used to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
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
	        genericPrefix = toSpinal("LiveGridExpansionIndicatorComponent");
		
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
	public notifySizeChanged(width: number, height: number) {
		this.i.notifySizeChanged(width, height);
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
