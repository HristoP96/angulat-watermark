import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { ColumnSortDirection, ColumnSortDirection_$type } from "./ColumnSortDirection";
import { SortIndicatorStyle, SortIndicatorStyle_$type } from "./SortIndicatorStyle";
import { IgxSortIndicatorRenderCompletedEventArgs } from "./igx-sort-indicator-render-completed-event-args";
import { GridSortIndicator } from "./GridSortIndicator";
import { TypeRegistrar } from "igniteui-core/type";
import { NamePatcher, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss } from "igniteui-core/componentUtil";

/**
 * An advanced grid for displaying data.
*/
export const IgxLiveGridSortIndicatorComponent_PROVIDERS = [];
@Component({
  selector: 'igx-live-grid-sort-indicator',
  template: ``,
  providers: [],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxLiveGridSortIndicatorComponent implements OnInit
{

protected createImplementation() : GridSortIndicator
{
	return new GridSortIndicator();
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridSortIndicator {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxLiveGridSortIndicatorComponent {
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
	get sortDirection() : ColumnSortDirection {
		return this.i.sortDirection;
	}
	@Input()
	set sortDirection(v: ColumnSortDirection) {
		this.i.sortDirection = ensureEnum<ColumnSortDirection>(ColumnSortDirection_$type, v);
	}
	get iconColor() : string {
		return brushToString(this.i.iconColor);
	}
	@Input()
	set iconColor(v: string) {
		this.i.iconColor = stringToBrush(v);
	}
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
	get sortIndicatorStyle() : SortIndicatorStyle {
		return this.i.sortIndicatorStyle;
	}
	@Input()
	set sortIndicatorStyle(v: SortIndicatorStyle) {
		this.i.sortIndicatorStyle = ensureEnum<SortIndicatorStyle>(SortIndicatorStyle_$type, v);
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
	        genericPrefix = toSpinal("LiveGridSortIndicatorComponent");
		
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
	public getDesiredScale() : number {
		let iv = this.i.getDesiredScale();
		return (iv);
	}
	public notifySizeChanged(width: number, height: number) {
		this.i.notifySizeChanged(width, height);
	}
	private _renderCompleted: EventEmitter<{ sender: any, args: IgxSortIndicatorRenderCompletedEventArgs}> = null;
	@Output()
	get renderCompleted(): EventEmitter<{ sender: any, args: IgxSortIndicatorRenderCompletedEventArgs}> {
		if (this._renderCompleted == null) {
			this._renderCompleted = new EventEmitter<{sender: any, args: IgxSortIndicatorRenderCompletedEventArgs}>();
			this.i.renderCompleted = delegateCombine(this.i.renderCompleted, (o, e) => {
				let outerArgs = new IgxSortIndicatorRenderCompletedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeRenderCompleted) {
	                            (this as any).beforeRenderCompleted(this, outerArgs);
	                        }
					    this._renderCompleted.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._renderCompleted;
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
