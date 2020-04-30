/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "igniteui-charts/Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Base, Point, Type, typeCast, Number_$type, runOn, delegateRemove, delegateCombine, markType, TypeRegistrar } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { SeriesPointOfInterest } from "igniteui-charts/SeriesPointOfInterest";
import { Axis } from "igniteui-charts/Axis";
import { SeriesView } from "igniteui-charts/SeriesView";
import { SeriesViewer } from "igniteui-charts/SeriesViewer";
import { RectChangedEventArgs } from "igniteui-core/RectChangedEventArgs";
import { Rect } from "igniteui-core/Rect";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { RenderSurface } from "igniteui-charts/RenderSurface";
import { DataContext } from "igniteui-core/DataContext";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { PlatformConstants } from "igniteui-core/PlatformConstants";
import { RenderingContext } from "igniteui-core/RenderingContext";

/**
 * @hidden 
 */
export abstract class GeographicMapSeriesHost extends Series {
	static $t: Type = markType(GeographicMapSeriesHost, 'GeographicMapSeriesHost', (<any>Series).$type);
	constructor() {
		super();
		this.hostedSeries = this.createSeries();
	}
	private _hostedSeries: Series = null;
	protected get_isGeographic(): boolean {
		return true;
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == "LatitudeMemberPath") {
			resolved = "YMemberPath";
		}
		if (resolved == "LongitudeMemberPath") {
			resolved = "XMemberPath";
		}
		return this.hostedSeries.getItemValue(item, memberPathName);
	}
	getVisiblePointsOfInterest(points: List$1<SeriesPointOfInterest>, useValueAsLabel: boolean, labelPrecision: number): boolean {
		return this.hostedSeries.getVisiblePointsOfInterest(points, useValueAsLabel, labelPrecision);
	}
	getAxes(): Axis[] {
		return this.hostedSeries.getAxes();
	}
	resolveHostedSeries(): Series {
		return this.hostedSeries;
	}
	get hostedSeries(): Series {
		return this._hostedSeries;
	}
	set hostedSeries(value: Series) {
		let changed: boolean = this.hostedSeries != value;
		if (changed) {
			this._hostedSeries = value;
			this.onHostedSeriesUpdated();
		}
	}
	protected onHostedSeriesUpdated(): void {
		if (this._hostedSeries != null) {
			let hostedSeries_ = this._hostedSeries;
			(<any>hostedSeries_).externalObject = TypeRegistrar.createFromInternal(hostedSeries_, PlatformConstants.Prefix, PlatformConstants.Postfix);
			(<any>hostedSeries_).externalObject._implementation = hostedSeries_;
		}
		this.disableCursorEventsForSeries(this.hostedSeries);
		this.hostView.onHostedSeriesUpdated();
	}
	getItem(world: Point): any {
		return this.getSeriesItem(this.hostedSeries, world);
	}
	protected abstract createSeries(): Series;
	protected createView(): SeriesView {
		return new HostSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.hostView = typeCast<HostSeriesView>((<any>HostSeriesView).$type, view);
	}
	private _hostView: HostSeriesView;
	get hostView(): HostSeriesView {
		return this._hostView;
	}
	set hostView(value: HostSeriesView) {
		this._hostView = value;
	}
	private static readonly visibleFromScalePropertyName: string = "VisibleFromScale";
	static readonly visibleFromScaleProperty: DependencyProperty = DependencyProperty.register(GeographicMapSeriesHost.visibleFromScalePropertyName, Number_$type, (<any>GeographicMapSeriesHost).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let host: GeographicMapSeriesHost = <GeographicMapSeriesHost>sender;
		host.raisePropertyChanged(GeographicMapSeriesHost.visibleFromScalePropertyName, e.oldValue, e.newValue);
	}));
	get visibleFromScale(): number {
		return <number>this.getValue(GeographicMapSeriesHost.visibleFromScaleProperty);
	}
	set visibleFromScale(value: number) {
		this.setValue(GeographicMapSeriesHost.visibleFromScaleProperty, value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			this.hostedSeries.seriesViewer = this.seriesViewer;
			if (oldValue != null) {
				(<SeriesViewer>oldValue).removeSeries(this.hostedSeries);
			}
			if (newValue != null) {
				this.seriesViewer.attachSeries(this.hostedSeries);
			}
			this.hostedSeries.provideViewport(this.viewport);
			this.hostedSeries.index = this.index;
			this.forceIndexUpdate(this.hostedSeries);
			this.uniqueIndex = this.hostedSeries.uniqueIndex;
			let oldSeriesViewer: SeriesViewer = typeCast<SeriesViewer>((<any>SeriesViewer).$type, oldValue);
			if (oldSeriesViewer != null) {
				oldSeriesViewer.actualWindowRectChanged = delegateRemove(oldSeriesViewer.actualWindowRectChanged, runOn(this, this.seriesViewer_ActualWindowRectChanged));
			}
			if (this.seriesViewer != null) {
				let $t = this.seriesViewer;
				$t.actualWindowRectChanged = delegateCombine($t.actualWindowRectChanged, runOn(this, this.seriesViewer_ActualWindowRectChanged));
			}
			this.applyVisibleFromScale();
			break;

			case Series.syncLinkPropertyName:
			this.hostedSeries.syncLink = this.syncLink;
			break;

			case GeographicMapSeriesHost.visibleFromScalePropertyName:
			this.applyVisibleFromScale();
			break;

			case Series.indexPropertyName:
			this.hostedSeries.index = this.index;
			break;

			case Series.itemsSourcePropertyName:
			this.hostView.onItemsSourceUpdated();
			break;

			case Series.resolutionPropertyName:
			this.hostView.onResolutionUpdated();
			break;

			case Series.transitionDurationPropertyName:
			this.hostView.onTransitionDurationUpdated();
			break;

			case "Opacity":
			this.hostView.onOpacityUpdated();
			break;

		}

	}
	private applyVisibleFromScale(): void {
		if (this.seriesViewer == null || this.hostedSeries == null) {
			return;
		}
		if (this.seriesViewer.actualWindowRect.width > this.visibleFromScale) {
			this.hostedSeries._visibility = Visibility.Collapsed;
		} else {
			this.hostedSeries._visibility = Visibility.Visible;
		}
	}
	private seriesViewer_ActualWindowRectChanged(sender: any, e: RectChangedEventArgs): void {
		this.applyVisibleFromScale();
	}
	renderSeries(animate: boolean): void {
		super.renderSeries(animate);
		if (this.hostedSeries != null) {
			this.hostedSeries.renderSeries(animate);
		}
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		if (this.hostedSeries != null) {
			this.hostedSeries.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		}
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		return this.hostedSeries.getHitDataContext(position, isFinger);
	}
	styleUpdated(): void {
		super.styleUpdated();
		this.hostedSeries.styleUpdated();
	}
	protected get_coercionMethods(): any {
		return this._coercionMethods;
	}
	protected set_coercionMethods(value: any): void {
		this._coercionMethods = value;
		this.hostedSeries.coercionMethods = value;
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		if (this.hostedSeries != null) {
			let vd = this.hostedSeries.exportVisualData();
			this.copyVisualData(svd, vd);
		}
	}
}

/**
 * @hidden 
 */
export class HostSeriesView extends SeriesView {
	static $t: Type = markType(HostSeriesView, 'HostSeriesView', (<any>SeriesView).$type);
	constructor(model: GeographicMapSeriesHost) {
		super(model);
		this.hostModel = model;
	}
	private _hostModel: GeographicMapSeriesHost = null;
	private get hostModel(): GeographicMapSeriesHost {
		return this._hostModel;
	}
	private set hostModel(value: GeographicMapSeriesHost) {
		this._hostModel = value;
	}
	onContextProvided(context: RenderingContext, hitContext: RenderingContext): void {
		super.onContextProvided(context, hitContext);
	}
	onHostedSeriesUpdated(): void {
		this.hostModel.hostedSeries.itemsSource = this.hostModel.itemsSource;
		this.hostModel.hostedSeries.index = this.hostModel.index;
		this.hostModel.hostedSeries.brush = this.hostModel.brush;
		this.hostModel.hostedSeries.outline = this.hostModel.outline;
		this.hostModel.hostedSeries.resolution = this.hostModel.resolution;
		this.hostModel.hostedSeries.transitionDuration = this.hostModel.transitionDuration;
		this.hostModel.hostedSeries._opacity = this.hostModel._opacity;
	}
	onItemsSourceUpdated(): void {
		this.hostModel.hostedSeries.itemsSource = this.hostModel.itemsSource;
	}
	onResolutionUpdated(): void {
		this.hostModel.hostedSeries.resolution = this.hostModel.resolution;
	}
	onTransitionDurationUpdated(): void {
		this.hostModel.hostedSeries.transitionDuration = this.hostModel.transitionDuration;
	}
	onOpacityUpdated(): void {
		this.hostModel.hostedSeries._opacity = this.hostModel._opacity;
	}
}


