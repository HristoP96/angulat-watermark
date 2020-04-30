/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Point, Type } from "igniteui-core/type";
import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";

/**
 * @hidden 
 */
export interface ICellActionManager { 
	clickExpansionIndicator(): void;
clickCell(): void;
dragStarted(): void;
previewPointerDownCell(): void;
previewPointerUpCell(): void;
pointerDownCell(): void;
pointerUpCell(): void;
mouseDownCell(x: number, y: number): void;
mouseUpCell(x: number, y: number): void;
mouseLeaveCell(x: number, y: number): void;
mouseIsOver(x: number, y: number): void;
isLeaveActionDesired: boolean;
readonly isClickActionDesired: boolean;
readonly isHoverActionDesired: boolean;
readonly isPreviewPointerDownActionDesired: boolean;
readonly isPreviewPointerUpActionDesired: boolean;
readonly isPointerDownActionDesired: boolean;
readonly isPointerUpActionDesired: boolean;
isControlPressed: boolean;
isShiftPressed: boolean;
readonly isDrag: boolean;
readonly isMouseDown: boolean;
readonly mousePosition: Point;
isCellDown(): boolean;
getColumnFilterCondition(): ColumnFilterCondition;
getColumnPropertyType(): DataSourceSchemaPropertyType;
columnFilterChanging(fragment: ColumnFilterCondition): void;
columnFilterChanged(fragment: ColumnFilterCondition): void;
}

/**
 * @hidden 
 */
export let ICellActionManager_$type = new Type(null, 'ICellActionManager');


