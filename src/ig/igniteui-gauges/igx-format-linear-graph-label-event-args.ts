/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FormatLinearGraphLabelEventArgs as FormatLinearGraphLabelEventArgs_internal } from "./FormatLinearGraphLabelEventArgs";


/**
 * Represents event argument for FormatLinearGraphLabel.
*/
export class IgxFormatLinearGraphLabelEventArgs {

    protected createImplementation(): FormatLinearGraphLabelEventArgs_internal {
        return new FormatLinearGraphLabelEventArgs_internal();
    }
    protected _implementation: any;
    public get i(): FormatLinearGraphLabelEventArgs_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

    }
    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    get actualMinimumValue(): number {
        return this.i.actualMinimumValue;
    }

    get actualMaximumValue(): number {
        return this.i.actualMaximumValue;
    }

    get value(): number {
        return this.i.value;
    }

    get label(): string {
        return this.i.label;
    }
    set label(value:string) {
        this.i.label = value;
    }
    
    

    

    

    
   
}
