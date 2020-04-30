/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GridLayer } from "./GridLayer";
import { Base, runOn, Type, markType } from "igniteui-core/type";
import { ICellRenderingEngine, ICellRenderingEngine_$type } from "./ICellRenderingEngine";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent, DomWrapperPosition } from "igniteui-core/dom";
import { DataGridPresenterManager } from "./DataGridPresenterManager";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { VisualModel } from "./VisualModel";
import { CellModel } from "./CellModel";
import { ICellPresenter } from "./ICellPresenter";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { GridCellBase } from "./GridCellBase";
import { RowPath } from "./RowPath";
import { List$1 } from "igniteui-core/List$1";
import { FastIterationDictionary$2 } from "igniteui-core/FastIterationDictionary$2";
import { CellPath } from "./CellPath";
import { CurrentRendererSettings } from "./CurrentRendererSettings";
import { Rect } from "igniteui-core/Rect";
import { INativeCell } from "./INativeCell";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { PinnedPositions } from "./PinnedPositions";
import { ModelStates } from "./ModelStates";
import { intDivide } from "igniteui-core/number";

/**
 * @hidden 
 */
export class DataGridCellLayoutPanel extends Base implements ICellRenderingEngine {
	static $t: Type = markType(DataGridCellLayoutPanel, 'DataGridCellLayoutPanel', (<any>Base).$type, [ICellRenderingEngine_$type]);
	private _model: VisualModel = null;
	private _refreshPending: boolean = false;
	private _renderer: DomRenderer = null;
	private _element: DomWrapper = null;
	get element(): DomWrapper {
		return this._element;
	}
	set element(value: DomWrapper) {
		this._element = value;
	}
	private _presenterManager: DataGridPresenterManager = null;
	private _finishedInitialRefresh: boolean = false;
	constructor(renderer: DomRenderer, presenterManager: DataGridPresenterManager, pixelScalingRatio: number) {
		super();
		this.pixelScalingRatio = pixelScalingRatio;
		this._renderer = renderer;
		this.requestAnimationFrame = this._renderer.getRequestAnimationFrame();
		this.element = this._renderer.createElement("div");
		this.element.setRawStyleProperty("position", "relative");
		this.element.setRawStyleProperty("box-sizing", "border-box");
		this.refresh(this._model, false);
		this._presenterManager = presenterManager;
		this._finishedInitialRefresh = false;
	}
	refresh(visualModel: VisualModel, immediate: boolean): void {
		this._model = visualModel;
		this.scheduleRefresh(immediate);
	}
	viewportChanged(): void {
		this.scheduleRefresh(true);
	}
	private _visibilityInvalidated: boolean = false;
	private _validateVisibility: () => void = null;
	invalidateVisibility(validateVisibility: () => void): void {
		this._validateVisibility = validateVisibility;
		this._visibilityInvalidated = true;
	}
	get initialRefreshFinished(): boolean {
		return this._finishedInitialRefresh;
	}
	notifySizeChanged(width: number, height: number, oldWidth: number, oldHeight: number): void {
		this.scheduleRefresh(true);
	}
	removeCell(model: CellModel): void {
		let presenter: ICellPresenter = this._presenterManager.getCellPresenter(this._renderer, model);
		if (presenter.isCanvasBased) {
			let cell = (<CanvasGridCellBase>presenter.nativeCell).isVisible = false;
		} else {
			let cell1: DomWrapper = <DomWrapper><any><any>(<GridCellBase>presenter.nativeCell).container;
			cell1.setRawStyleProperty("top", "-1000px");
			if (model.path.pinned != PinnedPositions.None) {
				cell1.setRawStyleProperty("clip", "auto");
			}
		}
	}
	private _suspendQueuing: boolean = false;
	scheduleRefresh(immediate: boolean): void {
		if (immediate) {
			this._refreshPending = true;
			this.doRefresh();
			return;
		}
		if (this._suspendQueuing) {
			return;
		}
		if (this._refreshPending) {
			return;
		}
		this._refreshPending = true;
		this.makePending(runOn(this, this.doRefresh));
	}
	private _requestAnimationFrame: (arg1: () => void) => void = null;
	private get requestAnimationFrame(): (arg1: () => void) => void {
		return this._requestAnimationFrame;
	}
	private set requestAnimationFrame(value: (arg1: () => void) => void) {
		this._requestAnimationFrame = value;
	}
	protected makePending(action: () => void): void {
		this.requestAnimationFrame(action);
	}
	private _zVersion: number = 0;
	private _currWidth: number = -1;
	private _currHeight: number = -1;
	private doRefresh(): void {
		if (!this._refreshPending) {
			return;
		}
		this._refreshPending = false;
		if (this._visibilityInvalidated) {
			this._visibilityInvalidated = false;
			this._validateVisibility();
		}
		if (this._model == null) {
			return;
		}
		if (Rect.l_op_Equality(this._model.actualVisibleRegion, null) || this._model.actualVisibleRegion.isEmpty) {
			return;
		}
		this._finishedInitialRefresh = true;
		if (this._currWidth != this._model.absoluteWidth) {
			this.element.setRawStyleProperty("width", this._model.absoluteWidth + "px");
		}
		if (this._currHeight != this._model.absoluteHeight) {
			this.element.setRawStyleProperty("height", this._model.absoluteHeight + "px");
		}
		this._currWidth = this._model.absoluteWidth;
		this._currHeight = this._model.absoluteHeight;
		let top: number = this._model.actualVisibleRegion.top;
		let left: number = this._model.actualVisibleRegion.left;
		let layers: List$1<GridLayer> = this._model.gridLayers;
		let layersCount: number = layers.count;
		let hiddenLayer: FastIterationDictionary$2<CellPath, List$1<CellModel>> = this._model.hiddenLayer;
		let hiddenKeys: List$1<CellPath> = this._model.hiddenLayer.keyList;
		let hiddenCount: number = hiddenKeys.count;
		let hiddenRemoved: List$1<boolean> = this._model.hiddenLayer.removedList;
		for (let k: number = 0; k < hiddenCount; k++) {
			if (hiddenRemoved._inner[k]) {
				continue;
			}
			let cells: List$1<CellModel> = hiddenLayer.item(hiddenKeys._inner[k]);
			for (let m: number = 0; m < cells.count; m++) {
				let cell: CellModel = cells._inner[m];
				this.removeCell(cell);
			}
		}
		hiddenLayer.clear();
		let zIsDirty: boolean = false;
		let zVersion: number = this._zVersion;
		let allCanvas: boolean = true;
		let anyCanvas: boolean = false;
		for (let i: number = 0; i < layersCount; i++) {
			let values = layers._inner[i].valueList;
			let valuesCount: number = layers._inner[i].valueList.count;
			let removed = layers._inner[i].removedList;
			for (let j: number = 0; j < valuesCount; j++) {
				if (removed._inner[j]) {
					continue;
				}
				let model: CellModel = values._inner[j];
				let presenter: ICellPresenter = this._presenterManager.getCellPresenter(this._renderer, model);
				if (!presenter.isCanvasBased) {
					allCanvas = false;
				} else {
					anyCanvas = true;
				}
				if (model.isLayerDirty) {
					zIsDirty = true;
				}
				if (model.state == ModelStates.Recycled && model.zVersion != zVersion) {
					zIsDirty = true;
				}
			}
		}
		if (anyCanvas) {
			this.ensureEvents();
		}
		if (zIsDirty) {
			if (this._zVersion == 0x7FFFFFFFFFFFFFFF - 1) {
				this._zVersion = 0;
			} else {
				this._zVersion++;
			}
			zVersion = this._zVersion;
		}
		let zLevel: number = 0;
		let currentRenderer: CurrentRendererSettings = new CurrentRendererSettings();
		let pixelScalingRatio = this.pixelScalingRatio;
		this._suspendQueuing = true;
		for (let i1: number = 0; i1 < layersCount; i1++) {
			let values1 = layers._inner[i1].valueList;
			let valuesCount1: number = layers._inner[i1].valueList.count;
			let removed1 = layers._inner[i1].removedList;
			for (let j1: number = 0; j1 < valuesCount1; j1++) {
				if (removed1._inner[j1]) {
					continue;
				}
				let model1: CellModel = values1._inner[j1];
				let presenter1: ICellPresenter = this._presenterManager.getCellPresenter(this._renderer, model1);
				if (presenter1.isCanvasBased) {
					let prevRenderer = currentRenderer.currentRenderer;
					this.updateRenderer(currentRenderer, i1, model1, this._model, zLevel, zIsDirty, allCanvas);
					if (currentRenderer.currentRenderer != prevRenderer && zIsDirty) {
						zLevel++;
					}
				}
				let isCanvasBased = presenter1.isCanvasBased;
				let view: DomWrapper = null;
				if (!isCanvasBased) {
					view = <DomWrapper><any><any>(<GridCellBase>presenter1.nativeCell).container;
					if (model1.state == ModelStates.New) {
						this.element.append(view);
					}
				}
				if (model1.state == ModelStates.Recycled) {
					if (isCanvasBased) {
						let canvasCell = <CanvasGridCellBase>model1.presenter.nativeCell;
						canvasCell.isVisible = true;
					}
				}
				model1.state = ModelStates.Inview;
				let centerX: number = (model1.snappedX + intDivide(model1.width, 2));
				let centerY: number = (model1.snappedY + intDivide(model1.height, 2));
				let xPercent: number = <number>(centerX - left) / <number>this._model.actualVisibleRegion.width;
				let yPercent: number = <number>(centerY - top) / <number>this._model.actualVisibleRegion.height;
				if (model1.isPositionDirty) {
					if (!isCanvasBased) {
						view.setRawPosition(model1.x, model1.y);
					}
				}
				if (!isCanvasBased) {
					if (model1.path.pinned != PinnedPositions.None) {
						if (this._model.isClipRectEnabled) {
							view.setRawStyleProperty("clip", this.createClipRect(model1.path.pinned, model1.x, model1.y));
						} else {
							view.setRawStyleProperty("clip", "auto");
						}
					} else {
						view.setRawStyleProperty("clip", "auto");
					}
				}
				model1.notifyReconciling();
				if (isCanvasBased) {
					let canvasCell1 = <CanvasGridCellBase>model1.presenter.nativeCell;
					canvasCell1.setPixelScalingRatio(pixelScalingRatio);
				}
				model1.presenter.modelUpdated(model1);
				if (isCanvasBased && currentRenderer.isDirty) {
					let context = currentRenderer.currentRenderer;
					context.save();
					if (model1.path.pinned != PinnedPositions.None && this._model.isClipRectEnabled) {
						context.setRectangleClip(this.getClipRect(model1.path.pinned));
					}
					let canvasCell2 = <CanvasGridCellBase>model1.presenter.nativeCell;
					canvasCell2.draw(context, currentRenderer.left, currentRenderer.top, model1.x, model1.y, pixelScalingRatio);
					context.restore();
				}
				model1.cleanDirtyFlags();
				if (zIsDirty) {
					model1.zVersion = zVersion;
					if (!isCanvasBased) {
						view.setRawStyleProperty("z-index", zLevel.toString());
					}
					zLevel++;
				}
			}
		}
		this._suspendQueuing = false;
		if (currentRenderer.currentRenderer != null && this.pixelScalingRatio != 1) {
			currentRenderer.currentRenderer.restore();
		}
	}
	private _hookedEvents: boolean = false;
	private ensureEvents(): void {
		if (!this._hookedEvents) {
			this._hookedEvents = true;
			let container = this._renderer.rootWrapper;
			let msPointerEnabled = <boolean>(window.navigator.msPointerEnabled && MSGesture !== undefined);
			let pointerEnabled = <boolean>((<any>window).PointerEvent || window.navigator.pointerEnabled);
			let touchEnabled = <boolean>((<any>window).TouchEvent);
			if ((msPointerEnabled || pointerEnabled)) {
				container.listen("pointerdown", runOn(this, this.pointerDown));
				container.listen("pointerup", runOn(this, this.pointerUp));
				container.listen("pointermove", runOn(this, this.pointerMove));
			} else {
				container.listen("mousedown", runOn(this, this.mouseDown));
				container.listen("mouseup", runOn(this, this.mouseUp));
				container.listen("mousemove", runOn(this, this.mouseMove));
				container.listen("touchstart", runOn(this, this.touchDown));
				container.listen("touchend", runOn(this, this.touchUp));
				container.listen("touchmove", runOn(this, this.touchMove));
			}
		}
	}
	private mouseDown(e: NormalizedEvent): void {
		this.onContactStarted(e, false);
	}
	private mouseUp(e: NormalizedEvent): void {
		this.onContactCompleted(e, false);
	}
	private mouseMove(e: NormalizedEvent): void {
		this.onContactMoved(e, false);
	}
	private pointerDown(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType == "touch") {
			this.touchDown(e_);
		} else {
			this.mouseDown(e_);
		}
	}
	private pointerMove(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType == "touch") {
			this.touchMove(e_);
		} else {
			this.mouseMove(e_);
		}
	}
	private pointerUp(e_: NormalizedEvent): void {
		let pointerType = <string>(e_.originalEvent.pointerType);
		if (pointerType == "touch") {
			this.touchUp(e_);
		} else {
			this.mouseUp(e_);
		}
	}
	private touchDown(e: NormalizedEvent): void {
		this.onContactStarted(e, true);
	}
	private onContactStarted(e: NormalizedEvent, isTouch: boolean): void {
		if (this._model == null) {
			return;
		}
		let offset = this._renderer.rootWrapper.getOffset();
		let cell = this._model.getHitCell(e.pageX - offset.left, e.pageY - offset.top);
		if (cell == null) {
			return;
		}
		if (cell.presenter != null) {
			if (cell.presenter.isCanvasBased && cell.presenter.nativeCell != null) {
				cell.presenter.nativeCell.onContactStarted(e, isTouch);
			}
		}
	}
	private touchMove(e: NormalizedEvent): void {
		this.onContactMoved(e, true);
	}
	private onContactMoved(e: NormalizedEvent, isTouch: boolean): void {
		if (this._model == null) {
			return;
		}
		let offset = this._renderer.rootWrapper.getOffset();
		let cell = this._model.getHitCell(e.pageX - offset.left, e.pageY - offset.top);
		if (cell == null) {
			return;
		}
		if (cell.presenter != null) {
			if (cell.presenter.isCanvasBased && cell.presenter.nativeCell != null) {
				cell.presenter.nativeCell.onContactMoved(e, isTouch);
			}
		}
	}
	private touchUp(e: NormalizedEvent): void {
		this.onContactCompleted(e, true);
	}
	private onContactCompleted(e: NormalizedEvent, isTouch: boolean): void {
		if (this._model == null) {
			return;
		}
		let offset = this._renderer.rootWrapper.getOffset();
		let cell = this._model.getHitCell(e.pageX - offset.left, e.pageY - offset.top);
		if (cell == null) {
			return;
		}
		if (cell.presenter != null) {
			if (cell.presenter.isCanvasBased && cell.presenter.nativeCell != null) {
				cell.presenter.nativeCell.onContactCompleted(e, isTouch);
			}
		}
	}
	private _pixelScalingRatio: number = 0;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
	}
	private _renderers: RenderingContext[] = null;
	private _layers: DomWrapper[] = null;
	private _rendererWidths: number[] = null;
	private _rendererHeights: number[] = null;
	private updateRenderer(settings: CurrentRendererSettings, layerIndex: number, model: CellModel, visualModel: VisualModel, zLevel: number, zIsDirty: boolean, allCanvas: boolean): void {
		if (allCanvas) {
			layerIndex = 0;
		}
		if (this._renderers == null) {
			this._renderers = <RenderingContext[]>new Array(visualModel.gridLayers.count);
			this._layers = <DomWrapper[]>new Array(visualModel.gridLayers.count);
			this._rendererWidths = <number[]>new Array(visualModel.gridLayers.count);
			this._rendererHeights = <number[]>new Array(visualModel.gridLayers.count);
			for (let i = 0; i < visualModel.gridLayers.count; i++) {
				this._renderers[i] = null;
				this._layers[i] = null;
				this._rendererWidths[i] = -1;
				this._rendererHeights[i] = -1;
			}
		}
		if (this._renderers[layerIndex] == null) {
			let layerCanvas = this._renderer.createElement("canvas");
			this._layers[layerIndex] = layerCanvas;
			layerCanvas.setRawStyleProperty("position", "absolute");
			layerCanvas.setRawStyleProperty("z-index", zLevel.toString());
			this.element.append(layerCanvas);
			let context = this._renderer.get2DCanvasContext(layerCanvas);
			let canvasRenderer = ((() => {
				let $ret = new CanvasViewRenderer();
				$ret.data = context;
				return $ret;
			})());
			this._renderers[layerIndex] = new RenderingContext(canvasRenderer, context);
		}
		if (settings.currentRenderer != this._renderers[layerIndex]) {
			settings.currentRenderer = this._renderers[layerIndex];
			settings.isDirty = true;
			settings.left = visualModel.actualVisibleRegion.left;
			settings.top = visualModel.actualVisibleRegion.top;
			let desiredWidth: number = visualModel.actualVisibleRegion.width * this.pixelScalingRatio;
			let desiredHeight: number = visualModel.actualVisibleRegion.height * this.pixelScalingRatio;
			if (desiredWidth != this._rendererWidths[layerIndex] || desiredHeight != this._rendererHeights[layerIndex]) {
				this._layers[layerIndex].setRawSize(visualModel.actualVisibleRegion.width, visualModel.actualVisibleRegion.height);
				this._layers[layerIndex].setAttribute("width", desiredWidth + "px");
				this._layers[layerIndex].setAttribute("height", desiredHeight + "px");
				this._rendererWidths[layerIndex] = desiredWidth;
				this._rendererHeights[layerIndex] = desiredHeight;
			}
			if (zIsDirty) {
				this._layers[layerIndex].setRawStyleProperty("z-index", zLevel.toString());
			}
			settings.currentRenderer.clearRectangle(0, 0, visualModel.actualVisibleRegion.width, visualModel.actualVisibleRegion.height);
			this._layers[layerIndex].setRawPosition(settings.left, settings.top);
		}
	}
	private getClipRect(position: PinnedPositions): Rect {
		let clipY = this._model.top;
		let clipX = this._model.left + this._model.insetLeft;
		let clipWidth = this._model.fixedColumnWidthLeft;
		let clipHeight = this._model.height;
		if (position == PinnedPositions.Right) {
			clipX = Math.min(this._model.fullWidth, this._model.right) - this._model.fixedColumnWidthRight - this._model.insetRight;
			clipWidth = this._model.fixedColumnWidthRight;
		}
		return new Rect(0, clipX, clipY, clipWidth, clipHeight);
	}
	private createClipRect(position: PinnedPositions, cellX: number, cellY: number): string {
		if (position != PinnedPositions.None) {
			let clipRect = this.getClipRect(position);
			let left = clipRect.x - cellX;
			let top = clipRect.y - cellY;
			let right = left + clipRect.width;
			let bottom = top + clipRect.height;
			return "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
		}
		return "auto";
	}
}


