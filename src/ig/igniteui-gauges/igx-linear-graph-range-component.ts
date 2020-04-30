/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Component, OnInit, Input } from "@angular/core";
import { AngularRenderer } from "igniteui-core/angular-renderer";
import { TypeRegistrar } from "igniteui-core/type";
import { brushToString, stringToBrush, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { XamLinearGraphRange } from "./XamLinearGraphRange";


export const IgxLinearGraphRangeComponent_PROVIDERS = [];

@Component({
    selector: 'igx-linear-graph-range',
    template: ``,
    providers: IgxLinearGraphRangeComponent_PROVIDERS
})
export class IgxLinearGraphRangeComponent implements OnInit {
    protected _implementation: any;
    public get i(): XamLinearGraphRange {
        return this._implementation;
    }
    private onImplementationCreated() {

    }

    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    get rangeInternal(): XamLinearGraphRange {
        return this.i;
    }

    protected createImplementation(): XamLinearGraphRange {
        return new XamLinearGraphRange();
    }

    ngOnInit() {
    }

    private _renderer: AngularRenderer = null;
    private _provideRenderer(renderer: AngularRenderer) {
        this._renderer = renderer;
        this._zoneRunner = (act: () => void) => (<any>renderer)._ngZone.run(act);
    }

    static _createFromInternal(internal: any): IgxLinearGraphRangeComponent {
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

    	/**
	 * Gets or sets the name of the range.
	*/
	get name() : string {
		return (this.i.name as string);
	}
	@Input()
	set name(v: string) {
		this.i.name = v;
	}
	/**
	 * Gets or sets the brush to use to fill the range.
	*/
	get brush() : string {
		return brushToString(this.i.brush);
	}
	@Input()
	set brush(v: string) {
		this.i.brush = stringToBrush(v);
	}
	/**
	 * Gets or sets the outline to use when rendering the range.
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	@Input()
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets or sets the value at which the range starts along the scale.
	*/
	get startValue() : number {
		return (this.i.startValue as number);
	}
	@Input()
	set startValue(v: number) {
		this.i.startValue = +v;
	}
	/**
	 * Gets or sets the value at which the range ends along the scale.
	*/
	get endValue() : number {
		return (this.i.endValue as number);
	}
	@Input()
	set endValue(v: number) {
		this.i.endValue = +v;
	}
	/**
	 * Gets or sets the distance measured from the front/bottom of the bullet graph (from 0 to 1) at which to start rendering the inner edge of the range.
	 * Values further from zero than 1 can be used to make this extend further than the normal width/height of the bullet graph.
	*/
	get innerStartExtent() : number {
		return (this.i.innerStartExtent as number);
	}
	@Input()
	set innerStartExtent(v: number) {
		this.i.innerStartExtent = +v;
	}
	/**
	 * Gets or sets the distance measured from the front/bottom of the bullet graph (from 0 to 1) at which to end rendering the inner edge of the range.
	 * Values further from zero than 1 can be used to make this extend further than the normal width/height of the bullet graph.
	*/
	get innerEndExtent() : number {
		return (this.i.innerEndExtent as number);
	}
	@Input()
	set innerEndExtent(v: number) {
		this.i.innerEndExtent = +v;
	}
	/**
	 * Gets or sets the distance measured from the front/bottom of the bullet graph (from 0 to 1) at which to start rendering the outer edge of the range.
	 * Values further from zero than 1 can be used to make this extend further than the normal width/height of the bullet graph.
	*/
	get outerStartExtent() : number {
		return (this.i.outerStartExtent as number);
	}
	@Input()
	set outerStartExtent(v: number) {
		this.i.outerStartExtent = +v;
	}
	/**
	 * Gets or sets the distance measured from the front/bottom of the bullet graph (from 0 to 1) at which to end rendering the outer edge of the range.
	 * Values further from zero than 1 can be used to make this extend further than the normal width/height of the bullet graph.
	*/
	get outerEndExtent() : number {
		return (this.i.outerEndExtent as number);
	}
	@Input()
	set outerEndExtent(v: number) {
		this.i.outerEndExtent = +v;
	}
	/**
	 * Gets or sets the stroke thickness to use when rendering this range's outline.
	*/
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	@Input()
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
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
	        genericPrefix = toSpinal("LinearGraphRangeComponent");
		
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

    

    

    	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
