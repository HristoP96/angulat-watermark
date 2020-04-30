/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HostSeriesView } from "./HostSeriesView";
import { HighDensityScatterSeries } from "igniteui-charts/HighDensityScatterSeries";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { Series } from "igniteui-charts/Series";
import { XamGeographicMap } from "./XamGeographicMap";
import { Base, typeCast, Type, markType, String_$type, Boolean_$type, Number_$type, typeGetValue, runOn, delegateCombine } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Color } from "igniteui-core/Color";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "igniteui-charts/SeriesView";
import { ProgressiveLoadStatusEventArgs } from "igniteui-charts/ProgressiveLoadStatusEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class GeographicHighDensityScatterSeriesView extends HostSeriesView {
	static $t: Type = markType(GeographicHighDensityScatterSeriesView, 'GeographicHighDensityScatterSeriesView', (<any>HostSeriesView).$type);
	constructor(model: GeographicHighDensityScatterSeries) {
		super(model);
		this.geographicHighDensityScatterModel = model;
	}
	private _geographicHighDensityScatterModel: GeographicHighDensityScatterSeries = null;
	private get geographicHighDensityScatterModel(): GeographicHighDensityScatterSeries {
		return this._geographicHighDensityScatterModel;
	}
	private set geographicHighDensityScatterModel(value: GeographicHighDensityScatterSeries) {
		this._geographicHighDensityScatterModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		let hostedSeries: HighDensityScatterSeries = typeCast<HighDensityScatterSeries>((<any>HighDensityScatterSeries).$type, this.geographicHighDensityScatterModel.hostedSeries);
		hostedSeries.xMemberPath = this.geographicHighDensityScatterModel.longitudeMemberPath;
		hostedSeries.yMemberPath = this.geographicHighDensityScatterModel.latitudeMemberPath;
		hostedSeries.useBruteForce = this.geographicHighDensityScatterModel.useBruteForce;
		hostedSeries.progressiveLoad = this.geographicHighDensityScatterModel.progressiveLoad;
		hostedSeries.mouseOverEnabled = this.geographicHighDensityScatterModel.mouseOverEnabled;
		hostedSeries.heatMinimum = this.geographicHighDensityScatterModel.heatMinimum;
		hostedSeries.heatMaximum = this.geographicHighDensityScatterModel.heatMaximum;
	}
	onLongitudeMemberPathUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).xMemberPath = this.geographicHighDensityScatterModel.longitudeMemberPath;
	}
	onLatitudeMemberPathUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).yMemberPath = this.geographicHighDensityScatterModel.latitudeMemberPath;
	}
	onUseBruteForceUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).useBruteForce = this.geographicHighDensityScatterModel.useBruteForce;
	}
	onProgressiveLoadUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).progressiveLoad = this.geographicHighDensityScatterModel.progressiveLoad;
	}
	onMouseOverEnabledUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).mouseOverEnabled = this.geographicHighDensityScatterModel.mouseOverEnabled;
	}
	onHeatMinimumPropertyUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).heatMinimum = this.geographicHighDensityScatterModel.heatMinimum;
	}
	onHeatMaximumPropertyUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).heatMaximum = this.geographicHighDensityScatterModel.heatMaximum;
	}
	onSeriesViewerUpdated(): void {
		let hostedSeries: HighDensityScatterSeries = typeCast<HighDensityScatterSeries>((<any>HighDensityScatterSeries).$type, this.geographicHighDensityScatterModel.hostedSeries);
		if (this.geographicHighDensityScatterModel.seriesViewer == null) {
			hostedSeries.xAxis = null;
			hostedSeries.yAxis = null;
			return;
		}
		hostedSeries.xAxis = (<XamGeographicMap>this.geographicHighDensityScatterModel.seriesViewer).xAxis;
		hostedSeries.yAxis = (<XamGeographicMap>this.geographicHighDensityScatterModel.seriesViewer).yAxis;
	}
	onXAxisUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).xAxis = (<XamGeographicMap>this.geographicHighDensityScatterModel.seriesViewer).xAxis;
	}
	onYAxisUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).yAxis = (<XamGeographicMap>this.geographicHighDensityScatterModel.seriesViewer).yAxis;
	}
	onHeatMinimumColorPropertyUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).heatMinimumColor = this.geographicHighDensityScatterModel.heatMinimumColor;
	}
	onHeatMaximumColorPropertyUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).heatMaximumColor = this.geographicHighDensityScatterModel.heatMaximumColor;
	}
	onPointExtentPropertUpdated(): void {
		(<HighDensityScatterSeries>this.geographicHighDensityScatterModel.hostedSeries).pointExtent = this.geographicHighDensityScatterModel.pointExtent;
	}
}

/**
 * @hidden 
 */
export class GeographicHighDensityScatterSeries extends GeographicMapSeriesHost {
	static $t: Type = markType(GeographicHighDensityScatterSeries, 'GeographicHighDensityScatterSeries', (<any>GeographicMapSeriesHost).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicHighDensityScatterSeries).$type;
	}
	protected createView(): SeriesView {
		return new GeographicHighDensityScatterSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.highDensityScatterView = <GeographicHighDensityScatterSeriesView>view;
	}
	private _highDensityScatterView: GeographicHighDensityScatterSeriesView;
	get highDensityScatterView(): GeographicHighDensityScatterSeriesView {
		return this._highDensityScatterView;
	}
	set highDensityScatterView(value: GeographicHighDensityScatterSeriesView) {
		this._highDensityScatterView = value;
	}
	protected createSeries(): Series {
		return new HighDensityScatterSeries();
	}
	private _highDensityScatterSeries: HighDensityScatterSeries = null;
	private get highDensityScatterSeries(): HighDensityScatterSeries {
		return this._highDensityScatterSeries;
	}
	private set highDensityScatterSeries(value: HighDensityScatterSeries) {
		this._highDensityScatterSeries = value;
	}
	static readonly latitudeMemberPathPropertyName: string = "LatitudeMemberPath";
	static readonly latitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.latitudeMemberPathPropertyName, String_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.latitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get latitudeMemberPath(): string {
		return <string>this.getValue(GeographicHighDensityScatterSeries.latitudeMemberPathProperty);
	}
	set latitudeMemberPath(value: string) {
		this.setValue(GeographicHighDensityScatterSeries.latitudeMemberPathProperty, value);
	}
	static readonly longitudeMemberPathPropertyName: string = "LongitudeMemberPath";
	static readonly longitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.longitudeMemberPathPropertyName, String_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.longitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get longitudeMemberPath(): string {
		return <string>this.getValue(GeographicHighDensityScatterSeries.longitudeMemberPathProperty);
	}
	set longitudeMemberPath(value: string) {
		this.setValue(GeographicHighDensityScatterSeries.longitudeMemberPathProperty, value);
	}
	get useBruteForce(): boolean {
		return <boolean>this.getValue(GeographicHighDensityScatterSeries.useBruteForceProperty);
	}
	set useBruteForce(value: boolean) {
		this.setValue(GeographicHighDensityScatterSeries.useBruteForceProperty, value);
	}
	static readonly useBruteForcePropertyName: string = "UseBruteForce";
	static readonly useBruteForceProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.useBruteForcePropertyName, Boolean_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.useBruteForcePropertyName, e.oldValue, e.newValue)));
	get progressiveLoad(): boolean {
		return <boolean>this.getValue(GeographicHighDensityScatterSeries.progressiveLoadProperty);
	}
	set progressiveLoad(value: boolean) {
		this.setValue(GeographicHighDensityScatterSeries.progressiveLoadProperty, value);
	}
	static readonly progressiveLoadPropertyName: string = "ProgressiveLoad";
	static readonly progressiveLoadProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.progressiveLoadPropertyName, Boolean_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.progressiveLoadPropertyName, e.oldValue, e.newValue)));
	get mouseOverEnabled(): boolean {
		return <boolean>this.getValue(GeographicHighDensityScatterSeries.mouseOverEnabledProperty1);
	}
	set mouseOverEnabled(value: boolean) {
		this.setValue(GeographicHighDensityScatterSeries.mouseOverEnabledProperty1, value);
	}
	static readonly mouseOverEnabledPropertyName1: string = "MouseOverEnabled";
	static readonly mouseOverEnabledProperty1: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.mouseOverEnabledPropertyName1, Boolean_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.mouseOverEnabledPropertyName1, e.oldValue, e.newValue)));
	get heatMinimum(): number {
		return <number>this.getValue(GeographicHighDensityScatterSeries.heatMinimumProperty);
	}
	set heatMinimum(value: number) {
		this.setValue(GeographicHighDensityScatterSeries.heatMinimumProperty, value);
	}
	static readonly heatMinimumPropertyName: string = "HeatMinimum";
	static readonly heatMinimumProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.heatMinimumPropertyName, Number_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.heatMinimumPropertyName, e.oldValue, e.newValue)));
	get heatMaximum(): number {
		return <number>this.getValue(GeographicHighDensityScatterSeries.heatMaximumProperty);
	}
	set heatMaximum(value: number) {
		this.setValue(GeographicHighDensityScatterSeries.heatMaximumProperty, value);
	}
	static readonly heatMaximumPropertyName: string = "HeatMaximum";
	static readonly heatMaximumProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.heatMaximumPropertyName, Number_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, 50, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.heatMaximumPropertyName, e.oldValue, e.newValue)));
	get heatMinimumColor(): Color {
		return <Color>this.getValue(GeographicHighDensityScatterSeries.heatMinimumColorProperty);
	}
	set heatMinimumColor(value: Color) {
		this.setValue(GeographicHighDensityScatterSeries.heatMinimumColorProperty, value);
	}
	static readonly heatMinimumColorPropertyName: string = "HeatMinimumColor";
	static readonly heatMinimumColorProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.heatMinimumColorPropertyName, (<any>Color).$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.heatMinimumColorPropertyName, e.oldValue, e.newValue)));
	get heatMaximumColor(): Color {
		return <Color>this.getValue(GeographicHighDensityScatterSeries.heatMaximumColorProperty);
	}
	set heatMaximumColor(value: Color) {
		this.setValue(GeographicHighDensityScatterSeries.heatMaximumColorProperty, value);
	}
	static readonly heatMaximumColorPropertyName: string = "HeatMaximumColor";
	static readonly heatMaximumColorProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.heatMaximumColorPropertyName, (<any>Color).$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.heatMaximumColorPropertyName, e.oldValue, e.newValue)));
	get pointExtent(): number {
		return typeGetValue(this.getValue(GeographicHighDensityScatterSeries.pointExtentProperty));
	}
	set pointExtent(value: number) {
		this.setValue(GeographicHighDensityScatterSeries.pointExtentProperty, value);
	}
	static readonly pointExtentPropertyName: string = "PointExtent";
	static readonly pointExtentProperty: DependencyProperty = DependencyProperty.register(GeographicHighDensityScatterSeries.pointExtentPropertyName, Number_$type, (<any>GeographicHighDensityScatterSeries).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicHighDensityScatterSeries>sender).raisePropertyChanged(GeographicHighDensityScatterSeries.pointExtentPropertyName, e.oldValue, e.newValue)));
	progressiveLoadStatusChanged: (sender: any, e: ProgressiveLoadStatusEventArgs) => void = null;
	private _progressiveStatus: number = 0;
	get progressiveStatus(): number {
		return this._progressiveStatus;
	}
	set progressiveStatus(value: number) {
		let oldValue = this._progressiveStatus;
		this._progressiveStatus = value;
		this.raisePropertyChanged("ProgressiveStatus", oldValue, this._progressiveStatus);
	}
	protected onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		let $t = (<HighDensityScatterSeries>this.hostedSeries);
		$t.progressiveLoadStatusChanged = delegateCombine($t.progressiveLoadStatusChanged, runOn(this, this.onHostedSeriesProgressiveLoadStatusChanged));
	}
	private onHostedSeriesProgressiveLoadStatusChanged(sender: any, e: ProgressiveLoadStatusEventArgs): void {
		this.progressiveStatus = e.currentStatus;
		if (this.progressiveLoadStatusChanged != null) {
			this.progressiveLoadStatusChanged(this, e);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			this.highDensityScatterView.onSeriesViewerUpdated();
			break;

			case GeographicHighDensityScatterSeries.longitudeMemberPathPropertyName:
			this.highDensityScatterView.onLongitudeMemberPathUpdated();
			break;

			case GeographicHighDensityScatterSeries.latitudeMemberPathPropertyName:
			this.highDensityScatterView.onLatitudeMemberPathUpdated();
			break;

			case GeographicHighDensityScatterSeries.useBruteForcePropertyName:
			this.highDensityScatterView.onUseBruteForceUpdated();
			break;

			case GeographicHighDensityScatterSeries.progressiveLoadPropertyName:
			this.highDensityScatterView.onProgressiveLoadUpdated();
			break;

			case GeographicHighDensityScatterSeries.mouseOverEnabledPropertyName1:
			this.highDensityScatterView.onMouseOverEnabledUpdated();
			break;

			case XamGeographicMap.xAxisPropertyName:
			this.highDensityScatterView.onXAxisUpdated();
			break;

			case XamGeographicMap.yAxisPropertyName:
			this.highDensityScatterView.onYAxisUpdated();
			break;

			case GeographicHighDensityScatterSeries.heatMinimumPropertyName:
			this.highDensityScatterView.onHeatMinimumPropertyUpdated();
			break;

			case GeographicHighDensityScatterSeries.heatMaximumPropertyName:
			this.highDensityScatterView.onHeatMaximumPropertyUpdated();
			break;

			case GeographicHighDensityScatterSeries.heatMinimumColorPropertyName:
			this.highDensityScatterView.onHeatMinimumColorPropertyUpdated();
			break;

			case GeographicHighDensityScatterSeries.heatMaximumColorPropertyName:
			this.highDensityScatterView.onHeatMaximumColorPropertyUpdated();
			break;

			case GeographicHighDensityScatterSeries.pointExtentPropertyName:
			this.highDensityScatterView.onPointExtentPropertUpdated();
			break;

		}

	}
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return true;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		super.set_useDeferredMouseEnterAndLeave(value);
	}
}


