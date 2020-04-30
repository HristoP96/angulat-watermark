/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { IOverviewPlusDetailControl, IOverviewPlusDetailControl_$type } from "igniteui-core/IOverviewPlusDetailControl";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Point, Type, runOn, delegateCombine, typeCast, delegateRemove, enumGetBox, Number_$type, markType } from "igniteui-core/type";
import { SeriesViewerView } from "./SeriesViewerView";
import { SeriesViewer } from "./SeriesViewer";
import { Canvas } from "igniteui-core/Canvas";
import { Rect } from "igniteui-core/Rect";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { InteractionState, InteractionState_$type } from "igniteui-core/InteractionState";
import { ArgumentNullException } from "igniteui-core/ArgumentNullException";
import { RectChangedEventArgs } from "igniteui-core/RectChangedEventArgs";
import { RenderSurface } from "./RenderSurface";
import { Size } from "igniteui-core/Size";
import { IOverviewPlusDetailPane } from "igniteui-core/IOverviewPlusDetailPane";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { RectUtil } from "igniteui-core/RectUtil";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { XamDataChart } from "./XamDataChart";

/**
 * @hidden 
 */
export class SeriesViewerSurfaceViewer extends DependencyObject implements IOverviewPlusDetailControl, INotifyPropertyChanged {
	static $t: Type = markType(SeriesViewerSurfaceViewer, 'SeriesViewerSurfaceViewer', (<any>DependencyObject).$type, [IOverviewPlusDetailControl_$type, INotifyPropertyChanged_$type]);
	constructor(model: SeriesViewer, view: SeriesViewerView) {
		super();
		if (model == null || view == null) {
			throw new ArgumentNullException(0, "model");
		}
		this.model = model;
		let $t = this.model;
		$t.windowRectChanged = delegateCombine($t.windowRectChanged, runOn(this, this.model_WindowRectChanged));
		this.view = view;
		this.previewCanvas = new Canvas();
		this.updateZoomLevelDisplayText();
	}
	private _view: SeriesViewerView = null;
	private get view(): SeriesViewerView {
		return this._view;
	}
	private set view(value: SeriesViewerView) {
		this._view = value;
	}
	private _suspendWindowRectChanges: boolean = false;
	private get suspendWindowRectChanges(): boolean {
		return this._suspendWindowRectChanges;
	}
	private set suspendWindowRectChanges(value: boolean) {
		this._suspendWindowRectChanges = value;
	}
	private model_WindowRectChanged(sender: any, e: RectChangedEventArgs): void {
		let suspendWindowRectChangesStored: boolean = this.suspendWindowRectChanges;
		this.suspendWindowRectChanges = true;
		this.zoomLevel = 1 - Math.min(e.newRect.height, e.newRect.width);
		this.suspendWindowRectChanges = suspendWindowRectChangesStored;
	}
	private _model: SeriesViewer = null;
	private get model(): SeriesViewer {
		return this._model;
	}
	private set model(value: SeriesViewer) {
		if (this._model != null) {
			let asIPropChange = typeCast<INotifyPropertyChanged>(INotifyPropertyChanged_$type, this._model);
			if (asIPropChange != null) {
				asIPropChange.propertyChanged = delegateRemove(asIPropChange.propertyChanged, runOn(this, this.model_PropertyChanged));
			}
		}
		this._model = value;
		if (this._model != null) {
			let asIPropChange1 = typeCast<INotifyPropertyChanged>(INotifyPropertyChanged_$type, this._model);
			if (asIPropChange1 != null) {
				asIPropChange1.propertyChanged = delegateCombine(asIPropChange1.propertyChanged, runOn(this, this.model_PropertyChanged));
			}
		}
	}
	private model_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		if (e.propertyName == "DefaultInteraction") {
			this._defaultInteraction = this.model.defaultInteraction;
			this.onPropertyChanged(e.propertyName, enumGetBox<InteractionState>(InteractionState_$type, this.defaultInteraction), enumGetBox<InteractionState>(InteractionState_$type, this.defaultInteraction));
		}
	}
	private _previewCanvas: Canvas = null;
	private get previewCanvas(): Canvas {
		return this._previewCanvas;
	}
	private set previewCanvas(value: Canvas) {
		this._previewCanvas = value;
	}
	zoomTo100(): void {
		this.model.windowRect = XamDataChart.standardRect;
	}
	scaleToFit(): void {
		this.model.windowRect = XamDataChart.standardRect;
	}
	renderPreview(): void {
		if (!this.isDirty) {
			return;
		}
		let surface: RenderSurface = new RenderSurface();
		surface.surface = this.view.overviewPlusDetailPane.viewThumbnailContext;
		if (surface.surface != null && surface.surface.shouldRender) {
			let thumbnailSize: Size = this.view.overviewPlusDetailPane.viewThumbnailSize;
			this.view.getThumbnail(thumbnailSize.width, thumbnailSize.height, surface);
		}
		this.isDirty = false;
	}
	get worldRect(): Rect {
		return XamDataChart.standardRect;
	}
	get viewportRect(): Rect {
		return this.model.viewportRect;
	}
	get minimumZoomLevel(): number {
		return 0;
	}
	get maximumZoomLevel(): number {
		if (this.model.windowRectMinWidth == 0.0001) {
			return 0.9;
		} else {
			return 1 - this.model.windowRectMinWidth;
		}
	}
	private _isDirty: boolean = true;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	get isIsoScaled(): boolean {
		if (this._model == null) {
			return false;
		}
		return this._model.isIsoScaled;
	}
	private static readonly zoomLevelPropertyName: string = "ZoomLevel";
	static readonly zoomLevelProperty: DependencyProperty = DependencyProperty.register("ZoomLevel", Number_$type, (<any>SeriesViewerSurfaceViewer).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewerSurfaceViewer>sender).onPropertyChanged(SeriesViewerSurfaceViewer.zoomLevelPropertyName, e.oldValue, e.newValue)));
	get zoomLevel(): number {
		return <number>this.getValue(SeriesViewerSurfaceViewer.zoomLevelProperty);
	}
	set zoomLevel(value: number) {
		this.setValue(SeriesViewerSurfaceViewer.zoomLevelProperty, value);
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		switch (propertyName) {
			case SeriesViewerSurfaceViewer.zoomLevelPropertyName:
			if (<number>newValue - this.minimumZoomLevel < -1E-05) {
				this.zoomLevel = this.minimumZoomLevel;
				return;
			}
			if (<number>newValue - this.maximumZoomLevel > 0.0001) {
				this.zoomLevel = this.maximumZoomLevel;
				return;
			}
			let updatingSliderRanges: boolean = this.model != null && this.model.overviewPlusDetailPane != null && this.model.overviewPlusDetailPane.updatingSliderRanges;
			if (!this.suspendWindowRectChanges && !updatingSliderRanges) {
				let windowSize = 1 - this.zoomLevel;
				let center = RectUtil.getCenter(this.model.actualWindowRect);
				let newRect = new Rect(0, center.x - windowSize / 2, center.y - windowSize / 2, windowSize, windowSize);
				this.model.windowRect = SeriesViewerSurfaceViewer.changeRect(this.model.windowRect, newRect, this.model.isZoomingHorizontallyEnabled(), this.model.isZoomingVerticallyEnabled(), this.worldRect);
			}
			this.updateZoomLevelDisplayText();
			if (this.model.overviewPlusDetailPane != null) {
				this.model.overviewPlusDetailPane.pushZoomLevel(this.zoomLevel);
			}
			break;

		}

	}
	private updateZoomLevelDisplayText(): void {
		let zoomLevelDisplay: number = Math.round(100 * (1 / (1 - this.zoomLevel)));
		if (zoomLevelDisplay <= 1000) {
			this.zoomLevelDisplayText = zoomLevelDisplay.toString();
		} else {
			this.zoomLevelDisplayText = "> 1000";
		}
	}
	private static readonly zoomLevelDisplayTextPropertyName: string = "ZoomLevelDisplayText";
	private _zoomLevelDisplayText: string = null;
	get zoomLevelDisplayText(): string {
		return this._zoomLevelDisplayText;
	}
	set zoomLevelDisplayText(value: string) {
		let changed: boolean = this.zoomLevelDisplayText != value;
		if (changed) {
			let oldValue: any = this.zoomLevelDisplayText;
			this._zoomLevelDisplayText = value;
			this.onPropertyChanged(SeriesViewerSurfaceViewer.zoomLevelDisplayTextPropertyName, oldValue, value);
		}
	}
	private _defaultInteraction: InteractionState = <InteractionState>0;
	get defaultInteraction(): InteractionState {
		return this._defaultInteraction;
	}
	set defaultInteraction(value: InteractionState) {
		this._defaultInteraction = value;
		this.model.defaultInteraction = value;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	static changeRect(oldRect: Rect, newRect: Rect, horizontalZoomable: boolean, verticalZoomable: boolean, worldRect: Rect): Rect {
		let left: number, top: number, width: number, height: number;
		if (horizontalZoomable) {
			left = newRect.left;
			width = newRect.width;
		} else {
			left = oldRect.left;
			width = oldRect.width;
		}
		if (verticalZoomable) {
			top = newRect.top;
			height = newRect.height;
		} else {
			top = oldRect.top;
			height = oldRect.height;
		}
		let right: number = left + width;
		let bottom: number = top + height;
		let leftOverflow: number = Math.max(0, worldRect.left - left);
		let rightOverflow: number = Math.max(0, right - worldRect.right);
		let topOverflow: number = Math.max(0, worldRect.top - top);
		let bottomOverflow: number = Math.max(0, bottom - worldRect.bottom);
		left += leftOverflow - rightOverflow;
		top += topOverflow - bottomOverflow;
		let result: Rect = new Rect(0, left, top, width, height);
		result.intersect(worldRect);
		return result;
	}
}


