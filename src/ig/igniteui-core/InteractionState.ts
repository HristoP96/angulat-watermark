/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available interaction states of the chart or geographic map control.
 */
export enum InteractionState {
	/**
	 * User gesture will not change the state of the chart.
	 */
	None = 0,
	/**
	 * User gesture will start a drag rectangle to zoom the chart.
	 */
	DragZoom = 1,
	/**
	 * User gesture will start a pan action to move the chart's window.
	 */
	DragPan = 2,
	/**
	 * User gesture will start a pan action in a touch environment and a drag rectangle in a mouse environment.
	 */
	Auto = 3
}

/**
 * @hidden 
 */
export let InteractionState_$type = markEnum('InteractionState', 'None,0|DragZoom,1|DragPan,2|Auto,3');


