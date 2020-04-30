/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type } from "igniteui-core/type";
import { DragType } from "./DragType";
import { CellPath } from "./CellPath";
import { DragSelectEventArgs } from "./DragSelectEventArgs";

/**
 * @hidden 
 */
export interface IDraggerView { 
	readonly model: IDragger;
provideContainer(container: any): void;
captureMouse(): void;
releaseMouse(): void;
transformPoint(x: number, y: number): Point;
onViewportSizeChanged(width: number, height: number): void;
onDetachedFromUI(): void;
onAttachedToUI(): void;
}

/**
 * @hidden 
 */
export let IDraggerView_$type = new Type(null, 'IDraggerView');

/**
 * @hidden 
 */
export interface IDragger { 
	readonly view: IDraggerView;
readonly dragType: DragType;
readonly isDragActive: boolean;
readonly cellPath: CellPath;
viewportWidth: number;
viewportHeight: number;
provideContainer(container: any): void;
dragStart(x: number, y: number, offsetX: number, offsetY: number, dragType: DragType, cellPath: CellPath, isControlPressed: boolean): void;
onMouseMove(x: number, y: number): void;
onMouseUp(x: number, y: number): void;
onDrag: (sender: any, args: DragSelectEventArgs) => void;
onDragEnd: (sender: any, args: DragSelectEventArgs) => void;
onDetachedFromUI(): void;
onAttachedToUI(): void;
}

/**
 * @hidden 
 */
export let IDragger_$type = new Type(null, 'IDragger');


