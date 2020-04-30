/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Component, OnInit, Input } from "@angular/core";
import { AngularRenderer } from "igniteui-core/angular-renderer";
import { TypeRegistrar } from "igniteui-core/type";
import { TimeAxisBreak } from "./TimeAxisBreak";
import { toSpinal, initializePropertiesFromCss } from 'igniteui-core/componentUtil';

export const IgxTimeAxisBreakComponent_PROVIDERS = [];

@Component({
    selector: 'igx-time-axis-break',
    template: ``,
    providers: IgxTimeAxisBreakComponent_PROVIDERS
})
export class IgxTimeAxisBreakComponent implements OnInit {
    protected _implementation: any;
    public get i(): TimeAxisBreak {
        return this._implementation;
    }
    private onImplementationCreated() {

    }

    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    protected createImplementation(): TimeAxisBreak {
        return new TimeAxisBreak();
    }

    ngOnInit() {
    }

    private _renderer: AngularRenderer = null;
    private _provideRenderer(renderer: AngularRenderer) {
        this._renderer = renderer;
        this._zoneRunner = (act: () => void) => (<any>renderer)._ngZone.run(act);
    }

    static _createFromInternal(internal: any): IgxTimeAxisBreakComponent {
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
	 * The start time of the axis break.
	* 
	* Use `start` property for the start time of the axis break. 
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	*/
	get start() : Date {
		return (this.i.start as Date);
	}
	@Input()
	set start(v: Date) {
		this.i.start = v;
	}
	/**
	 * The end time of the axis break.
	* 
	* Use `end` property for the end time of the axis break.  
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	*/
	get end() : Date {
		return (this.i.end as Date);
	}
	@Input()
	set end(v: Date) {
		this.i.end = v;
	}
	/**
	 * The interval at which to repeat this break, expressed as a TimeSpan.
	* 
	* Use `interval` property to se the interval at which to repeat this break, expressed as a TimeSpan.  
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	*/
	get interval() : number {
		return (this.i.interval as number);
	}
	@Input()
	set interval(v: number) {
		this.i.interval = +v;
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
	        genericPrefix = toSpinal("TimeAxisBreakComponent");
		
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
