/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HostSeriesView } from "./HostSeriesView";
import { ScatterSeries } from "igniteui-charts/ScatterSeries";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ScatterBase } from "igniteui-charts/ScatterBase";
import { MarkerSeries } from "igniteui-charts/MarkerSeries";
import { Series } from "igniteui-charts/Series";
import { XamGeographicMap } from "./XamGeographicMap";
import { Base, Type, markType, String_$type, enumGetBox, EnumUtil, typeGetValue, Number_$type, Boolean_$type } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { MarkerType, MarkerType_$type } from "igniteui-charts/MarkerType";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "igniteui-charts/CollisionAvoidanceType";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { Brush } from "igniteui-core/Brush";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "igniteui-charts/SeriesView";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class GeographicSymbolSeriesView extends HostSeriesView {
	static $t: Type = markType(GeographicSymbolSeriesView, 'GeographicSymbolSeriesView', (<any>HostSeriesView).$type);
	constructor(model: GeographicSymbolSeries) {
		super(model);
		this.symbolModel = model;
	}
	private _symbolModel: GeographicSymbolSeries = null;
	private get symbolModel(): GeographicSymbolSeries {
		return this._symbolModel;
	}
	private set symbolModel(value: GeographicSymbolSeries) {
		this._symbolModel = value;
	}
	onHostedSeriesUpdated(): void {
		let hostedSeries = <ScatterSeries>this.symbolModel.hostedSeries;
		super.onHostedSeriesUpdated();
		hostedSeries.xMemberPath = this.symbolModel.longitudeMemberPath;
		hostedSeries.yMemberPath = this.symbolModel.latitudeMemberPath;
		hostedSeries.markerType = this.symbolModel.markerType;
		hostedSeries.markerTemplate = this.symbolModel.markerTemplate;
	}
	onLongitudeMemberPathUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).xMemberPath = this.symbolModel.longitudeMemberPath;
	}
	onLatitudeMemberPathUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).yMemberPath = this.symbolModel.latitudeMemberPath;
	}
	onMarkerTypeUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).markerType = this.symbolModel.markerType;
	}
	onMarkerTemplateUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).markerTemplate = this.symbolModel.markerTemplate;
	}
	onMaximumMarkersUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).maximumMarkers = this.symbolModel.maximumMarkers;
	}
	onXAxisUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).xAxis = (<XamGeographicMap>this.symbolModel.seriesViewer).xAxis;
	}
	onYAxisUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).yAxis = (<XamGeographicMap>this.symbolModel.seriesViewer).yAxis;
	}
	onSeriesViewerUpdated(): void {
		let hostedSeries = <ScatterSeries>this.symbolModel.hostedSeries;
		if (this.symbolModel.seriesViewer == null) {
			hostedSeries.xAxis = null;
			hostedSeries.yAxis = null;
			return;
		}
		hostedSeries.xAxis = (<XamGeographicMap>this.symbolModel.seriesViewer).xAxis;
		hostedSeries.yAxis = (<XamGeographicMap>this.symbolModel.seriesViewer).yAxis;
	}
	onMarkerCollisionAvoidanceUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).markerCollisionAvoidance = this.symbolModel.markerCollisionAvoidance;
	}
	onMarkerBrushUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).markerBrush = this.symbolModel.markerBrush;
	}
	onMarkerOutlineUpdated(): void {
		(<ScatterSeries>this.symbolModel.hostedSeries).markerOutline = this.symbolModel.markerOutline;
	}
}

/**
 * @hidden 
 */
export class GeographicSymbolSeries extends GeographicMapSeriesHost {
	static $t: Type = markType(GeographicSymbolSeries, 'GeographicSymbolSeries', (<any>GeographicMapSeriesHost).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicSymbolSeries).$type;
	}
	protected createView(): SeriesView {
		return new GeographicSymbolSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.symbolView = <GeographicSymbolSeriesView>view;
	}
	private _symbolView: GeographicSymbolSeriesView;
	get symbolView(): GeographicSymbolSeriesView {
		return this._symbolView;
	}
	set symbolView(value: GeographicSymbolSeriesView) {
		this._symbolView = value;
	}
	protected createSeries(): Series {
		return new ScatterSeries();
	}
	private _scatterSeries: ScatterSeries = null;
	private get scatterSeries(): ScatterSeries {
		return this._scatterSeries;
	}
	private set scatterSeries(value: ScatterSeries) {
		this._scatterSeries = value;
	}
	static readonly latitudeMemberPathPropertyName: string = "LatitudeMemberPath";
	static readonly latitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.latitudeMemberPathPropertyName, String_$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.latitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get latitudeMemberPath(): string {
		return <string>this.getValue(GeographicSymbolSeries.latitudeMemberPathProperty);
	}
	set latitudeMemberPath(value: string) {
		this.setValue(GeographicSymbolSeries.latitudeMemberPathProperty, value);
	}
	static readonly longitudeMemberPathPropertyName: string = "LongitudeMemberPath";
	static readonly longitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.longitudeMemberPathPropertyName, String_$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.longitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get longitudeMemberPath(): string {
		return <string>this.getValue(GeographicSymbolSeries.longitudeMemberPathProperty);
	}
	set longitudeMemberPath(value: string) {
		this.setValue(GeographicSymbolSeries.longitudeMemberPathProperty, value);
	}
	static readonly markerTypePropertyName: string = "MarkerType";
	static readonly markerTypeProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.markerTypePropertyName, MarkerType_$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.Automatic), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.markerTypePropertyName, e.oldValue, e.newValue)));
	get markerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(GeographicSymbolSeries.markerTypeProperty));
	}
	set markerType(value: MarkerType) {
		this.setValue(GeographicSymbolSeries.markerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.markerTemplatePropertyName, e.oldValue, e.newValue)));
	get markerCollisionAvoidance(): CollisionAvoidanceType {
		return EnumUtil.getEnumValue<CollisionAvoidanceType>(CollisionAvoidanceType_$type, this.getValue(GeographicSymbolSeries.markerCollisionAvoidanceProperty));
	}
	set markerCollisionAvoidance(value: CollisionAvoidanceType) {
		this.setValue(GeographicSymbolSeries.markerCollisionAvoidanceProperty, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, value));
	}
	static readonly markerCollisionAvoidancePropertyName: string = "MarkerCollisionAvoidance";
	static readonly markerCollisionAvoidanceProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.markerCollisionAvoidancePropertyName, CollisionAvoidanceType_$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, CollisionAvoidanceType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.markerCollisionAvoidancePropertyName, e.oldValue, e.newValue)));
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(GeographicSymbolSeries.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(GeographicSymbolSeries.markerTemplateProperty, value);
	}
	get markerBrush(): Brush {
		return <Brush>this.getValue(GeographicSymbolSeries.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(GeographicSymbolSeries.markerBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.markerBrushPropertyName, (<any>Brush).$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.markerBrushPropertyName, e.oldValue, e.newValue)));
	get markerOutline(): Brush {
		return <Brush>this.getValue(GeographicSymbolSeries.markerOutlineProperty);
	}
	set markerOutline(value: Brush) {
		this.setValue(GeographicSymbolSeries.markerOutlineProperty, value);
	}
	static readonly markerOutlinePropertyName: string = "MarkerOutline";
	static readonly markerOutlineProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.markerOutlinePropertyName, (<any>Brush).$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.markerOutlinePropertyName, e.oldValue, e.newValue)));
	get maximumMarkers(): number {
		return typeGetValue(this.getValue(GeographicSymbolSeries.maximumMarkersProperty));
	}
	set maximumMarkers(value: number) {
		this.setValue(GeographicSymbolSeries.maximumMarkersProperty, value);
	}
	static readonly maximumMarkersPropertyName: string = "MaximumMarkers";
	static readonly maximumMarkersProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.maximumMarkersPropertyName, Number_$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, 400, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.maximumMarkersPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			this.symbolView.onSeriesViewerUpdated();
			break;

			case GeographicSymbolSeries.longitudeMemberPathPropertyName:
			this.symbolView.onLongitudeMemberPathUpdated();
			break;

			case GeographicSymbolSeries.latitudeMemberPathPropertyName:
			this.symbolView.onLatitudeMemberPathUpdated();
			break;

			case GeographicSymbolSeries.markerCollisionAvoidancePropertyName:
			this.symbolView.onMarkerCollisionAvoidanceUpdated();
			break;

			case GeographicSymbolSeries.markerTypePropertyName:
			this.symbolView.onMarkerTypeUpdated();
			break;

			case GeographicSymbolSeries.markerTemplatePropertyName:
			this.symbolView.onMarkerTemplateUpdated();
			break;

			case GeographicSymbolSeries.maximumMarkersPropertyName:
			this.symbolView.onMaximumMarkersUpdated();
			break;

			case XamGeographicMap.xAxisPropertyName:
			this.symbolView.onXAxisUpdated();
			break;

			case XamGeographicMap.yAxisPropertyName:
			this.symbolView.onYAxisUpdated();
			break;

			case GeographicSymbolSeries.markerBrushPropertyName:
			this.symbolView.onMarkerBrushUpdated();
			break;

			case GeographicSymbolSeries.markerOutlinePropertyName:
			this.symbolView.onMarkerOutlineUpdated();
			break;

		}

	}
	get useLightweightMarkers(): boolean {
		return <boolean>this.getValue(GeographicSymbolSeries.useLightweightMarkersProperty);
	}
	set useLightweightMarkers(value: boolean) {
		this.setValue(GeographicSymbolSeries.useLightweightMarkersProperty, value);
	}
	static readonly useLightweightMarkersPropertyName: string = "UseLightweightMarkers";
	static readonly useLightweightMarkersProperty: DependencyProperty = DependencyProperty.register(GeographicSymbolSeries.useLightweightMarkersPropertyName, Boolean_$type, (<any>GeographicSymbolSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicSymbolSeries>sender).raisePropertyChanged(GeographicSymbolSeries.useLightweightMarkersPropertyName, e.oldValue, e.newValue)));
}


