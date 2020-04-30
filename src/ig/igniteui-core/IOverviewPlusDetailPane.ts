/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Rect } from "./Rect";
import { CanvasRenderScheduler } from "./CanvasRenderScheduler";
import { RenderingContext } from "./RenderingContext";
import { Size } from "./Size";
import { Visibility } from "./Visibility";
import { IOverviewPlusDetailControl } from "./IOverviewPlusDetailControl";
import { Base, Point, Type } from "./type";
import { PropertyChangedEventArgs$1 } from "./PropertyChangedEventArgs$1";
import { EventProxy } from "./EventProxy";

/**
 * @hidden 
 */
export interface IOverviewPlusDetailPane { 
	thumbnailSizeChanged: (sender: any, e: PropertyChangedEventArgs$1<Size>) => void;
initializeScalingRatio(actualPixelScalingRatio: number): void;
isZoomable: boolean;
changeRect(oldRect: Rect, newRect: Rect, horizontalZoomable: boolean, verticalZoomable: boolean, worldRect: Rect): Rect;
doRefresh(immediate: boolean): void;
readonly updatingSliderRanges: boolean;
window: Rect;
world: Rect;
readonly previewViewportdRect: Rect;
backgroundImageUri: string;
readonly worldRectViewport: Rect;
isSurfaceInteractionDisabled: boolean;
mobileMode: boolean;
provideContext(context: RenderingContext): void;
provideContainer(container: any): void;
provideEventSource(eventSource: EventProxy): void;
viewScheduler: CanvasRenderScheduler;
readonly viewThumbnailContext: RenderingContext;
readonly viewThumbnailSize: Size;
viewShouldInteract(point: Point): boolean;
arrange(rect: Rect): void;
getDesiredSize(size: Size): Size;
pushZoomLevel(zoomLevel: number): void;
readonly isPinching: boolean;
visibility: Visibility;
windowChanged: (sender: any, e: PropertyChangedEventArgs$1<Rect>) => void;
windowChanging: (sender: any, e: PropertyChangedEventArgs$1<Rect>) => void;
surfaceIsDirty: boolean;
surfaceViewer: IOverviewPlusDetailControl;
}

/**
 * @hidden 
 */
export let IOverviewPlusDetailPane_$type = new Type(null, 'IOverviewPlusDetailPane');


