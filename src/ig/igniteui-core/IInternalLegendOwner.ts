/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FontInfo } from "./FontInfo";
import { Brush } from "./Brush";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IInternalLegendOwner { 
	getFontInfo(): FontInfo;
getFontHeight(): number;
getFontBrush(): Brush;
}

/**
 * @hidden 
 */
export let IInternalLegendOwner_$type = new Type(null, 'IInternalLegendOwner');


