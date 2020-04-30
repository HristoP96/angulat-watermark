/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Rect } from "./Rect";
import { Base, Type } from "./type";
import { RectChangedEventArgs } from "./RectChangedEventArgs";

/**
 * @hidden 
 */
export interface IZoomSlider { 
	provideContainer(container: any): void;
windowRect: Rect;
windowRectChanged: (sender: any, e: RectChangedEventArgs) => void;
hide(): void;
show(): void;
startInset: number;
endInset: number;
trackStartInset: number;
trackEndInset: number;
notifySizeChanged(): void;
barExtent: number;
onAttachedToUI(): void;
onDetachedFromUI(): void;
}

/**
 * @hidden 
 */
export let IZoomSlider_$type = new Type(null, 'IZoomSlider');


