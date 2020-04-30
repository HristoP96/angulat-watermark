/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CultureInfo } from "./culture";
import { FormatException } from "./type";



export function boolToString(value: boolean, provider: any) {
    return value.toString();
};

export function boolToInt16(value: boolean, provider: CultureInfo): number {
    return +value;
}
export let boolToUInt16 = boolToInt16;
export let boolToInt32 = boolToInt16;
export let boolToInt64 = boolToInt16;
export let boolToUInt64 = boolToInt16;
export let boolToUInt32 = boolToInt16;
export let boolToSingle = boolToInt16;
export let boolToDouble = boolToInt16;
export let boolToDecimal = boolToInt16;

export function toBoolean(value: boolean, provider: CultureInfo) {
    /*jshint -W018 */
    return !!+value;
}

export function toString1(value: boolean, provider: CultureInfo) {
    return value.toString();
}
