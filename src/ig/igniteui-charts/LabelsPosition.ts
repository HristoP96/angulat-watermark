/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available positions of labels.
 */
export enum LabelsPosition {
	/**
	 * No labels will be displayed.
	 */
	None = 0,
	/**
	 * Labels will be displayed in the center.
	 */
	Center = 1,
	/**
	 * Labels will be displayed inside and by the edge of the container.
	 */
	InsideEnd = 2,
	/**
	 * Labels will be displayed outside the container.
	 */
	OutsideEnd = 3,
	/**
	 * Labels will automatically decide their location.
	 */
	BestFit = 4
}

/**
 * @hidden 
 */
export let LabelsPosition_$type = markEnum('LabelsPosition', 'None,0|Center,1|InsideEnd,2|OutsideEnd,3|BestFit,4');


