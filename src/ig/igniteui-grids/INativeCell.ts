/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NormalizedEvent } from "igniteui-core/dom";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface INativeCell { 
	onContactStarted(e: NormalizedEvent, isTouch: boolean): void;
onContactCompleted(e: NormalizedEvent, isTouch: boolean): void;
onContactMoved(e: NormalizedEvent, isTouch: boolean): void;
}

/**
 * @hidden 
 */
export let INativeCell_$type = new Type(null, 'INativeCell');


