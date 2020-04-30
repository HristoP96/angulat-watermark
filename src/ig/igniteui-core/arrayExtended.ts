/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type } from "./type";

export function arrayClear1(array: any[], index: number, length: number): void {
    for (var i = index; i < index + length; i++) {
        array[ i ] = null;
    }
}

export function arrayCopy1(source: any[], sourceIndex: number, dest: any[], destIndex: number, count: number): void {
    var i: number;
    if (source == dest && sourceIndex < destIndex) {
        for (i = count - 1; i >= 0; i--) {
            dest[i + destIndex] = source[i + sourceIndex];
        }
    } else {
        for (i = 0; i < count; i++) {
            dest[i + destIndex] = source[i + sourceIndex];
        }
    }
}

export function arrayCopy2(source: any[], dest: any[], count: number): void {
    for (var i = 0; i < count; i++) {
        dest[ i ] = source[ i ];
    }
}

export function arrayIndexOf1<T>($t: Type, array: any[], value: any): number {
    return array.indexOf(value);
}

export function arrayContains<T>(array: T[], value: T): boolean {
    for (var i = 0; i < array.length; i++) {
        if (Type.equalsStatic(array[i], value))
            return true;
    }

    return false;
}

export function arrayLast<T>(array: T[]): T {
    return array[ array.length - 1 ];
}
