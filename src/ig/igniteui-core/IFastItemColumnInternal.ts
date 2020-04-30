/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type } from "./type";

/**
 * @hidden 
 */
export interface IFastItemColumnInternal { 
	reset(): boolean;
insertRange(position: number, count: number): boolean;
removeRange(position: number, count: number): boolean;
replaceRange(position: number, count: number): boolean;
readonly propertyName: string;
}

/**
 * @hidden 
 */
export let IFastItemColumnInternal_$type = new Type(null, 'IFastItemColumnInternal');


