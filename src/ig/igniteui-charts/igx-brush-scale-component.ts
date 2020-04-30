import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxPropertyUpdatedEventArgs } from "igniteui-core/igx-property-updated-event-args";
import { IgxSeriesComponent } from "./igx-series-component";
import { BrushScale } from "./BrushScale";
import { TypeRegistrar } from "igniteui-core/type";
import { NamePatcher, toBrushCollection, fromBrushCollection, ensureBool, toSpinal, initializePropertiesFromCss, brushToString } from "igniteui-core/componentUtil";

/**
 * Represents a base class for brush scales.
*/
export const IgxBrushScaleComponent_PROVIDERS = [];
@Component({
  selector: 'igx-brush-scale',
  template: ``,
  providers: [],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxBrushScaleComponent implements OnInit
{

protected createImplementation() : BrushScale
{
	return new BrushScale();
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : BrushScale {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxBrushScaleComponent {
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
	 * Gets the brushes collection used by this scale.
	*/
	get brushes() : string[] {
		return fromBrushCollection(this.i.brushes);
	}
	@Input()
	set brushes(v: string[]) {
		this.i.brushes = toBrushCollection(v);
	}
	/**
	 * Gets the status of the scale
	*/
	get isReady() : boolean {
		return (this.i.isReady as boolean);
	}
	/**
	 * Checks if this item is a BrushScale
	*/
	get isBrushScale() : boolean {
		return (this.i.isBrushScale as boolean);
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
	        genericPrefix = toSpinal("BrushScaleComponent");
		
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
	/**
	 * Registers a series with the scale. Under normal circumstances you should not need to call this manually.
	
	* @param series  * The series to register with the scale.
	*/
	public registerSeries(series: IgxSeriesComponent) {
		this.i.registerSeries((series == null ? null : series.i));
	}
	/**
	 * Unregisters a series with the scale. Under normal circumstances you should not need to call this manually.
	
	* @param series  * The series to unregister from the scale.
	*/
	public unregisterSeries(series: IgxSeriesComponent) {
		this.i.unregisterSeries((series == null ? null : series.i));
	}
	/**
	 * Gets a brush from the brushes collection by index.
	
	*/
	public getBrush(index: number) : string {
		let iv = this.i.getBrush(index);
		return brushToString(iv);
	}
	private _propertyUpdated: EventEmitter<{ sender: any, args: IgxPropertyUpdatedEventArgs}> = null;
	/**
	 * Event raised when a property (including "effective" and non-dependency property) value changes.
	*/
	@Output()
	get propertyUpdated(): EventEmitter<{ sender: any, args: IgxPropertyUpdatedEventArgs}> {
		if (this._propertyUpdated == null) {
			this._propertyUpdated = new EventEmitter<{sender: any, args: IgxPropertyUpdatedEventArgs}>();
			this.i.propertyUpdated = delegateCombine(this.i.propertyUpdated, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxPropertyUpdatedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforePropertyUpdated) {
	                        (this as any).beforePropertyUpdated(this, outerArgs);
	                    }
					this._propertyUpdated.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._propertyUpdated;
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
