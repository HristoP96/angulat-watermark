/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IgxFormatLinearGraphLabelEventArgs } from "./igx-format-linear-graph-label-event-args";
import { AlignLinearGraphLabelEventArgs as AlignLinearGraphLabelEventArgs_internal } from "./AlignLinearGraphLabelEventArgs";

/**
 * Represents event argument for AlignLinearGraphLabel.
*/
export class IgxAlignLinearGraphLabelEventArgs extends IgxFormatLinearGraphLabelEventArgs
{

    protected createImplementation() : AlignLinearGraphLabelEventArgs_internal
    {
	    return new AlignLinearGraphLabelEventArgs_internal();
    }
	public get i() : AlignLinearGraphLabelEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}

    get width(): number {
        return this.i.width;
    }
    set width(value:number) {
        this.i.width = value;
    }
    
    get height(): number {
        return this.i.height;
    }
    set height(value:number) {
        this.i.height = value;
    }
    
    get offsetX(): number {
        return this.i.offsetX;
    }
    set offsetX(value:number) {
        this.i.offsetX = value;
    }
    
    get offsetY(): number {
        return this.i.offsetY;
    }
    set offsetY(value:number) {
        this.i.offsetY = value;
    }
    
    

    

    

    
}
