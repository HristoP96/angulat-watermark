/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Rect } from "./Rect";
import { InteractionState } from "./InteractionState";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IOverviewPlusDetailControl { 
	zoomTo100(): void;
scaleToFit(): void;
renderPreview(): void;
readonly worldRect: Rect;
readonly viewportRect: Rect;
readonly minimumZoomLevel: number;
readonly maximumZoomLevel: number;
readonly zoomLevelDisplayText: string;
defaultInteraction: InteractionState;
isDirty: boolean;
readonly isIsoScaled: boolean;
}

/**
 * @hidden 
 */
export let IOverviewPlusDetailControl_$type = new Type(null, 'IOverviewPlusDetailControl');


