/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type } from "./type";

/**
 * @hidden 
 */
export interface IPool$1<T> { 
	create: () => T;
disactivate: (arg1: T) => void;
activate: (arg1: T) => void;
destroy: (arg1: T) => void;
clear(): void;
}

/**
 * @hidden 
 */
export let IPool$1_$type = new Type(null, 'IPool$1');


