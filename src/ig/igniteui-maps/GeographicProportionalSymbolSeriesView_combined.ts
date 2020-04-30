/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HostSeriesView } from "./HostSeriesView";
import { BubbleSeries } from "igniteui-charts/BubbleSeries";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ScatterBase } from "igniteui-charts/ScatterBase";
import { MarkerSeries } from "igniteui-charts/MarkerSeries";
import { Series } from "igniteui-charts/Series";
import { XamGeographicMap } from "./XamGeographicMap";
import { Base, Type, markType, String_$type, enumGetBox, EnumUtil, typeGetValue, Number_$type } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { MarkerType, MarkerType_$type } from "igniteui-charts/MarkerType";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { Brush } from "igniteui-core/Brush";
import { SizeScale } from "igniteui-charts/SizeScale";
import { BrushScale } from "igniteui-charts/BrushScale";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "igniteui-charts/SeriesView";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class GeographicProportionalSymbolSeriesView extends HostSeriesView {
	static $t: Type = markType(GeographicProportionalSymbolSeriesView, 'GeographicProportionalSymbolSeriesView', (<any>HostSeriesView).$type);
	constructor(model: GeographicProportionalSymbolSeries) {
		super(model);
		this.proportionalModel = model;
	}
	private _proportionalModel: GeographicProportionalSymbolSeries = null;
	private get proportionalModel(): GeographicProportionalSymbolSeries {
		return this._proportionalModel;
	}
	private set proportionalModel(value: GeographicProportionalSymbolSeries) {
		this._proportionalModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		let hostedSeries = <BubbleSeries>this.proportionalModel.hostedSeries;
		hostedSeries.xMemberPath = this.proportionalModel.longitudeMemberPath;
		hostedSeries.yMemberPath = this.proportionalModel.latitudeMemberPath;
		hostedSeries.markerType = this.proportionalModel.markerType;
		hostedSeries.markerTemplate = this.proportionalModel.markerTemplate;
		hostedSeries.radiusMemberPath = this.proportionalModel.radiusMemberPath;
		hostedSeries.radiusScale = this.proportionalModel.radiusScale;
		hostedSeries.labelMemberPath = this.proportionalModel.labelMemberPath;
		hostedSeries.fillMemberPath = this.proportionalModel.fillMemberPath;
		hostedSeries.fillScale = this.proportionalModel.fillScale;
	}
	onLongitudeMemberPathUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).xMemberPath = this.proportionalModel.longitudeMemberPath;
	}
	onLatitudeMemberPathUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).yMemberPath = this.proportionalModel.latitudeMemberPath;
	}
	onMarkerTypeUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).markerType = this.proportionalModel.markerType;
	}
	onMarkerTemplateUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).markerTemplate = this.proportionalModel.markerTemplate;
	}
	onMaximumMarkersUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).maximumMarkers = this.proportionalModel.maximumMarkers;
	}
	onXAxisUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).xAxis = (<XamGeographicMap>this.proportionalModel.seriesViewer).xAxis;
	}
	onYAxisUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).yAxis = (<XamGeographicMap>this.proportionalModel.seriesViewer).yAxis;
	}
	onSeriesViewerUpdated(): void {
		let hostedSeries = <BubbleSeries>this.proportionalModel.hostedSeries;
		if (this.proportionalModel.seriesViewer == null) {
			hostedSeries.xAxis = null;
			hostedSeries.yAxis = null;
			return;
		}
		hostedSeries.xAxis = (<XamGeographicMap>this.proportionalModel.seriesViewer).xAxis;
		hostedSeries.yAxis = (<XamGeographicMap>this.proportionalModel.seriesViewer).yAxis;
	}
	onMarkerBrushUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).markerBrush = this.proportionalModel.markerBrush;
	}
	onMarkerOutlineUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).markerOutline = this.proportionalModel.markerOutline;
	}
	radiusMemberPathUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).radiusMemberPath = this.proportionalModel.radiusMemberPath;
	}
	radiusScaleUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).radiusScale = this.proportionalModel.radiusScale;
	}
	labelMemberPathUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).labelMemberPath = this.proportionalModel.labelMemberPath;
	}
	fillScaleUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).fillScale = this.proportionalModel.fillScale;
	}
	fillMemberPathUpdated(): void {
		(<BubbleSeries>this.proportionalModel.hostedSeries).fillMemberPath = this.proportionalModel.fillMemberPath;
	}
}

/**
 * @hidden 
 */
export class GeographicProportionalSymbolSeries extends GeographicMapSeriesHost {
	static $t: Type = markType(GeographicProportionalSymbolSeries, 'GeographicProportionalSymbolSeries', (<any>GeographicMapSeriesHost).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicProportionalSymbolSeries).$type;
	}
	protected createView(): SeriesView {
		return new GeographicProportionalSymbolSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.proportionalView = <GeographicProportionalSymbolSeriesView>view;
	}
	private _proportionalView: GeographicProportionalSymbolSeriesView;
	get proportionalView(): GeographicProportionalSymbolSeriesView {
		return this._proportionalView;
	}
	set proportionalView(value: GeographicProportionalSymbolSeriesView) {
		this._proportionalView = value;
	}
	protected createSeries(): Series {
		return new BubbleSeries();
	}
	private _bubbleSeries: BubbleSeries = null;
	private get bubbleSeries(): BubbleSeries {
		return this._bubbleSeries;
	}
	private set bubbleSeries(value: BubbleSeries) {
		this._bubbleSeries = value;
	}
	static readonly latitudeMemberPathPropertyName: string = "LatitudeMemberPath";
	static readonly latitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.latitudeMemberPathPropertyName, String_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.latitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get latitudeMemberPath(): string {
		return <string>this.getValue(GeographicProportionalSymbolSeries.latitudeMemberPathProperty);
	}
	set latitudeMemberPath(value: string) {
		this.setValue(GeographicProportionalSymbolSeries.latitudeMemberPathProperty, value);
	}
	static readonly longitudeMemberPathPropertyName: string = "LongitudeMemberPath";
	static readonly longitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.longitudeMemberPathPropertyName, String_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.longitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get longitudeMemberPath(): string {
		return <string>this.getValue(GeographicProportionalSymbolSeries.longitudeMemberPathProperty);
	}
	set longitudeMemberPath(value: string) {
		this.setValue(GeographicProportionalSymbolSeries.longitudeMemberPathProperty, value);
	}
	static readonly markerTypePropertyName: string = "MarkerType";
	static readonly markerTypeProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.markerTypePropertyName, MarkerType_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.markerTypePropertyName, e.oldValue, e.newValue)));
	get markerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(GeographicProportionalSymbolSeries.markerTypeProperty));
	}
	set markerType(value: MarkerType) {
		this.setValue(GeographicProportionalSymbolSeries.markerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.markerTemplatePropertyName, e.oldValue, e.newValue)));
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(GeographicProportionalSymbolSeries.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(GeographicProportionalSymbolSeries.markerTemplateProperty, value);
	}
	get markerBrush(): Brush {
		return <Brush>this.getValue(GeographicProportionalSymbolSeries.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(GeographicProportionalSymbolSeries.markerBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.markerBrushPropertyName, (<any>Brush).$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.markerBrushPropertyName, e.oldValue, e.newValue)));
	get markerOutline(): Brush {
		return <Brush>this.getValue(GeographicProportionalSymbolSeries.markerOutlineProperty);
	}
	set markerOutline(value: Brush) {
		this.setValue(GeographicProportionalSymbolSeries.markerOutlineProperty, value);
	}
	static readonly markerOutlinePropertyName: string = "MarkerOutline";
	static readonly markerOutlineProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.markerOutlinePropertyName, (<any>Brush).$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.markerOutlinePropertyName, e.oldValue, e.newValue)));
	get maximumMarkers(): number {
		return typeGetValue(this.getValue(GeographicProportionalSymbolSeries.maximumMarkersProperty));
	}
	set maximumMarkers(value: number) {
		this.setValue(GeographicProportionalSymbolSeries.maximumMarkersProperty, value);
	}
	static readonly maximumMarkersPropertyName: string = "MaximumMarkers";
	static readonly maximumMarkersProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.maximumMarkersPropertyName, Number_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(2, 400, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.maximumMarkersPropertyName, e.oldValue, e.newValue)));
	get radiusMemberPath(): string {
		return <string>this.getValue(GeographicProportionalSymbolSeries.radiusMemberPathProperty);
	}
	set radiusMemberPath(value: string) {
		this.setValue(GeographicProportionalSymbolSeries.radiusMemberPathProperty, value);
	}
	static readonly radiusMemberPathPropertyName: string = "RadiusMemberPath";
	static readonly radiusMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.radiusMemberPathPropertyName, String_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.radiusMemberPathPropertyName, e.oldValue, e.newValue)));
	static readonly radiusScalePropertyName: string = "RadiusScale";
	static readonly radiusScaleProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.radiusScalePropertyName, (<any>SizeScale).$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.radiusScalePropertyName, e.oldValue, e.newValue)));
	get radiusScale(): SizeScale {
		return <SizeScale>this.getValue(GeographicProportionalSymbolSeries.radiusScaleProperty);
	}
	set radiusScale(value: SizeScale) {
		this.setValue(GeographicProportionalSymbolSeries.radiusScaleProperty, value);
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	static readonly labelMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.labelMemberPathPropertyName, String_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.labelMemberPathPropertyName, e.oldValue, e.newValue)));
	get labelMemberPath(): string {
		return <string>this.getValue(GeographicProportionalSymbolSeries.labelMemberPathProperty);
	}
	set labelMemberPath(value: string) {
		this.setValue(GeographicProportionalSymbolSeries.labelMemberPathProperty, value);
	}
	static readonly fillMemberPathPropertyName: string = "FillMemberPath";
	static readonly fillMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.fillMemberPathPropertyName, String_$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.fillMemberPathPropertyName, e.oldValue, e.newValue)));
	get fillMemberPath(): string {
		return <string>this.getValue(GeographicProportionalSymbolSeries.fillMemberPathProperty);
	}
	set fillMemberPath(value: string) {
		this.setValue(GeographicProportionalSymbolSeries.fillMemberPathProperty, value);
	}
	static readonly fillScalePropertyName: string = "FillScale";
	static readonly fillScaleProperty: DependencyProperty = DependencyProperty.register(GeographicProportionalSymbolSeries.fillScalePropertyName, (<any>BrushScale).$type, (<any>GeographicProportionalSymbolSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicProportionalSymbolSeries>sender).raisePropertyChanged(GeographicProportionalSymbolSeries.fillScalePropertyName, e.oldValue, e.newValue)));
	get fillScale(): BrushScale {
		return <BrushScale>this.getValue(GeographicProportionalSymbolSeries.fillScaleProperty);
	}
	set fillScale(value: BrushScale) {
		this.setValue(GeographicProportionalSymbolSeries.fillScaleProperty, value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			this.proportionalView.onSeriesViewerUpdated();
			break;

			case GeographicProportionalSymbolSeries.longitudeMemberPathPropertyName:
			this.proportionalView.onLongitudeMemberPathUpdated();
			break;

			case GeographicProportionalSymbolSeries.latitudeMemberPathPropertyName:
			this.proportionalView.onLatitudeMemberPathUpdated();
			break;

			case GeographicProportionalSymbolSeries.markerTypePropertyName:
			this.proportionalView.onMarkerTypeUpdated();
			break;

			case GeographicProportionalSymbolSeries.markerTemplatePropertyName:
			this.proportionalView.onMarkerTemplateUpdated();
			break;

			case GeographicProportionalSymbolSeries.maximumMarkersPropertyName:
			this.proportionalView.onMaximumMarkersUpdated();
			break;

			case XamGeographicMap.xAxisPropertyName:
			this.proportionalView.onXAxisUpdated();
			break;

			case XamGeographicMap.yAxisPropertyName:
			this.proportionalView.onYAxisUpdated();
			break;

			case GeographicProportionalSymbolSeries.markerBrushPropertyName:
			this.proportionalView.onMarkerBrushUpdated();
			break;

			case GeographicProportionalSymbolSeries.markerOutlinePropertyName:
			this.proportionalView.onMarkerOutlineUpdated();
			break;

			case GeographicProportionalSymbolSeries.radiusMemberPathPropertyName:
			this.proportionalView.radiusMemberPathUpdated();
			break;

			case GeographicProportionalSymbolSeries.radiusScalePropertyName:
			this.proportionalView.radiusScaleUpdated();
			break;

			case GeographicProportionalSymbolSeries.labelMemberPathPropertyName:
			this.proportionalView.labelMemberPathUpdated();
			break;

			case GeographicProportionalSymbolSeries.fillMemberPathPropertyName:
			this.proportionalView.fillMemberPathUpdated();
			break;

			case GeographicProportionalSymbolSeries.fillScalePropertyName:
			this.proportionalView.fillScaleUpdated();
			break;

		}

	}
}


