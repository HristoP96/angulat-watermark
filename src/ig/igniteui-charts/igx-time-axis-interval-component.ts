/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Component, OnInit, Input } from "@angular/core";
import { AngularRenderer } from "igniteui-core/angular-renderer";
import { TypeRegistrar } from "igniteui-core/type";
import { TimeAxisInterval } from "./TimeAxisInterval";
import { TimeAxisIntervalType, TimeAxisIntervalType_$type } from "./TimeAxisIntervalType";
import { ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";


export const IgxTimeAxisIntervalComponent_PROVIDERS = [];

@Component({
    selector: 'igx-time-axis-interval',
    template: ``,
    providers: IgxTimeAxisIntervalComponent_PROVIDERS
})
export class IgxTimeAxisIntervalComponent implements OnInit {
    protected _implementation: any;
    public get i(): TimeAxisInterval {
        return this._implementation;
    }
    private onImplementationCreated() {

    }

    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    protected createImplementation(): TimeAxisInterval {
        return new TimeAxisInterval();
    }

    ngOnInit() {
    }

    private _renderer: AngularRenderer = null;
    private _provideRenderer(renderer: AngularRenderer) {
        this._renderer = renderer;
        this._zoneRunner = (act: () => void) => (<any>renderer)._ngZone.run(act);
    }

    static _createFromInternal(internal: any): IgxTimeAxisIntervalComponent {
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
	 * The visible axis range at which to apply this interval.
	* 
	* Use `range` property for the visible axis range at which to apply this interval.  
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	* 	<igx-time-x-axis
	* 		[labelFormats]="labelFormats"
	* 		dateTimeMemberPath="time"
	* 
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	*/
	get range() : number {
		return (this.i.range as number);
	}
	@Input()
	set range(v: number) {
		this.i.range = +v;
	}
	/**
	 * The interval, expressed as a multiple of IntervalType.
	* 
	* Use the `interval` property expressed as a multiple of IntervalType.  
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	* 	<igx-time-x-axis
	* 		[labelFormats]="labelFormats"
	* 		dateTimeMemberPath="time"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	*/
	get interval() : number {
		return (this.i.interval as number);
	}
	@Input()
	set interval(v: number) {
		this.i.interval = +v;
	}
	/**
	 * The unit of time for this interval.
	* 
	* The `intervalType` is the unit of time for this interval.  
	*/
	get intervalType() : TimeAxisIntervalType {
		return this.i.intervalType;
	}
	@Input()
	set intervalType(v: TimeAxisIntervalType) {
		this.i.intervalType = ensureEnum<TimeAxisIntervalType>(TimeAxisIntervalType_$type, v);
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
	        genericPrefix = toSpinal("TimeAxisIntervalComponent");
		
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
