/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { GridSortIndicator } from "./GridSortIndicator";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { Base, delegateCombine, Type, markType } from "igniteui-core/type";
import { SortIndicatorRenderCompletedEventArgs } from "./SortIndicatorRenderCompletedEventArgs";
import { ColumnSortDirection } from "./ColumnSortDirection";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";

/**
 * @hidden 
 */
export class CanvasTextHeaderCell extends CanvasGridCellBase {
	static $t: Type = markType(CanvasTextHeaderCell, 'CanvasTextHeaderCell', (<any>CanvasGridCellBase).$type);
	private _sortIndicator: GridSortIndicator = null;
	private _offscreen: DomWrapper = null;
	private _offscreenCanvas: HTMLCanvasElement = null;
	get sortIndicator(): GridSortIndicator {
		return this._sortIndicator;
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this.setHorizontalAlignment(CellContentHorizontalAlignment.Left);
		this.setVerticalAlignment(CellContentVerticalAlignment.Center);
		this._sortIndicator = new GridSortIndicator();
		let offscreen = renderer.createElement("div");
		offscreen.setRawStyleProperty("display", "inline-block");
		offscreen.setRawStyleProperty("width", "16px");
		offscreen.setRawStyleProperty("height", "16px");
		this._offscreen = offscreen;
		let sub = renderer.getSubRenderer(this._offscreen);
		this._sortIndicator.provideContainer(sub);
		this._sortIndicator.pixelScalingRatio = window.devicePixelRatio;
		let $t = this._sortIndicator;
		$t.renderCompleted = delegateCombine($t.renderCompleted, (o: any, e: SortIndicatorRenderCompletedEventArgs) => this.queueRefresh());
		this._sortIndicator.notifySizeChanged(16, 16);
		this._offscreenCanvas = <HTMLCanvasElement>this._sortIndicator.getCanvas();
	}
	setSortDirection(sortDirection: ColumnSortDirection): void {
		this.sortIndicator.sortDirection = sortDirection;
		this.queueRefresh();
	}
	protected renderContent(context: RenderingContext): void {
		super.renderContent(context);
		let left = this.textRight + 5;
		if (this.horizontalAlignment == CellContentHorizontalAlignment.Right) {
			left = this.textLeft - 21;
		}
		context.drawImage(this._offscreenCanvas, 1, left, this.textYCenter - 8, 16, 16);
	}
	protected get_isHeaderCell(): boolean {
		return true;
	}
}


