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
export interface IScrollerKeyboardListener { 
	onUpArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onLeftArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onRightArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onDownArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onPageDown(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onPageUp(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onHome(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onEnd(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onTab(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
onWheel(): void;
onEnter(isShiftPressed: boolean, isCtrlPressed: boolean): boolean;
}

/**
 * @hidden 
 */
export let IScrollerKeyboardListener_$type = new Type(null, 'IScrollerKeyboardListener');


