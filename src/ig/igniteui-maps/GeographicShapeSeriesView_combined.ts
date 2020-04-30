/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicShapeSeriesBaseView } from "./GeographicShapeSeriesBaseView";
import { SeriesView } from "igniteui-charts/SeriesView";
import { GeographicShapeSeriesBase } from "./GeographicShapeSeriesBase";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ScatterPolygonSeries } from "igniteui-charts/ScatterPolygonSeries";
import { Base, Type, markType, runOn, delegateCombine, enumGetBox, EnumUtil } from "igniteui-core/type";
import { StyleSelector } from "igniteui-charts/StyleSelector";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Style } from "igniteui-core/Style";
import { MarkerType, MarkerType_$type } from "igniteui-charts/MarkerType";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { Brush } from "igniteui-core/Brush";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "igniteui-charts/CollisionAvoidanceType";
import { Control } from "igniteui-core/Control";
import { Series } from "igniteui-charts/Series";
import { StyleShapeEventArgs } from "igniteui-charts/StyleShapeEventArgs";
import { ShapeSeriesBase } from "igniteui-charts/ShapeSeriesBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class GeographicShapeSeriesView extends GeographicShapeSeriesBaseView {
	static $t: Type = markType(GeographicShapeSeriesView, 'GeographicShapeSeriesView', (<any>GeographicShapeSeriesBaseView).$type);
	constructor(model: GeographicShapeSeries) {
		super(model);
		this.shapeModel = model;
		if (!this.isThumbnailView) {
			this.shapeModel.shapeMemberPath = "points";
		}
	}
	private _shapeModel: GeographicShapeSeries = null;
	protected get shapeModel(): GeographicShapeSeries {
		return this._shapeModel;
	}
	protected set shapeModel(value: GeographicShapeSeries) {
		this._shapeModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).shapeStyle = this.shapeModel.shapeStyle;
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).shapeStyleSelector = this.shapeModel.shapeStyleSelector;
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerTemplate = this.shapeModel.markerTemplate;
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerCollisionAvoidance = this.shapeModel.markerCollisionAvoidance;
	}
	markerTemplatePropertyUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerTemplate = this.shapeModel.markerTemplate;
	}
	markerCollisionAvoidanceUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerCollisionAvoidance = this.shapeModel.markerCollisionAvoidance;
	}
	markerTypeUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerType = this.shapeModel.markerType;
	}
	markerBrushUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerBrush = this.shapeModel.markerBrush;
	}
	markerOutlineUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerOutline = this.shapeModel.markerOutline;
	}
	markerStyleUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).markerStyle = this.shapeModel.markerStyle;
	}
	shapeStyleSelectorUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).shapeStyleSelector = this.shapeModel.shapeStyleSelector;
	}
	shapeStyleUpdated(): void {
		(<ScatterPolygonSeries>this.shapeModel.hostedSeries).shapeStyle = this.shapeModel.shapeStyle;
	}
}

/**
 * @hidden 
 */
export class GeographicShapeSeries extends GeographicShapeSeriesBase {
	static $t: Type = markType(GeographicShapeSeries, 'GeographicShapeSeries', (<any>GeographicShapeSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicShapeSeries).$type;
	}
	protected createView(): SeriesView {
		return new GeographicShapeSeriesView(this);
	}
	private _shapeView: GeographicShapeSeriesView;
	get shapeView(): GeographicShapeSeriesView {
		return this._shapeView;
	}
	set shapeView(value: GeographicShapeSeriesView) {
		this._shapeView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.shapeView = <GeographicShapeSeriesView>view;
	}
	protected createSeries(): Series {
		let hostedSeries = new ScatterPolygonSeries();
		hostedSeries.styleShape = delegateCombine(hostedSeries.styleShape, runOn(this, this.hostedSeries_StyleShape));
		return hostedSeries;
	}
	private hostedSeries_StyleShape(sender: any, args: StyleShapeEventArgs): void {
		if (this.styleShape != null) {
			this.styleShape(this, args);
		}
	}
	styleShape: (sender: any, e: StyleShapeEventArgs) => void = null;
	static readonly shapeStyleSelectorPropertyName: string = "ShapeStyleSelector";
	static readonly shapeStyleSelectorProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.shapeStyleSelectorPropertyName, (<any>StyleSelector).$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.shapeStyleSelectorPropertyName, e.oldValue, e.newValue)));
	get shapeStyleSelector(): StyleSelector {
		return <StyleSelector>this.getValue(GeographicShapeSeries.shapeStyleSelectorProperty);
	}
	set shapeStyleSelector(value: StyleSelector) {
		this.setValue(GeographicShapeSeries.shapeStyleSelectorProperty, value);
	}
	static readonly shapeStylePropertyName: string = "ShapeStyle";
	static readonly shapeStyleProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.shapeStylePropertyName, (<any>Style).$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.shapeStylePropertyName, e.oldValue, e.newValue)));
	get shapeStyle(): Style {
		return <Style>this.getValue(GeographicShapeSeries.shapeStyleProperty);
	}
	set shapeStyle(value: Style) {
		this.setValue(GeographicShapeSeries.shapeStyleProperty, value);
	}
	get markerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(GeographicShapeSeries.markerTypeProperty));
	}
	set markerType(value: MarkerType) {
		this.setValue(GeographicShapeSeries.markerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly markerTypePropertyName: string = "MarkerType";
	static readonly markerTypeProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.markerTypePropertyName, MarkerType_$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.markerTypePropertyName, e.oldValue, e.newValue)));
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(GeographicShapeSeries.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(GeographicShapeSeries.markerTemplateProperty, value);
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.markerTemplatePropertyName, e.oldValue, e.newValue)));
	get markerBrush(): Brush {
		return <Brush>this.getValue(GeographicShapeSeries.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(GeographicShapeSeries.markerBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.markerBrushPropertyName, (<any>Brush).$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.markerBrushPropertyName, e.oldValue, e.newValue)));
	get markerOutline(): Brush {
		return <Brush>this.getValue(GeographicShapeSeries.markerOutlineProperty);
	}
	set markerOutline(value: Brush) {
		this.setValue(GeographicShapeSeries.markerOutlineProperty, value);
	}
	static readonly markerOutlinePropertyName: string = "MarkerOutline";
	static readonly markerOutlineProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.markerOutlinePropertyName, (<any>Brush).$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.markerOutlinePropertyName, e.oldValue, e.newValue)));
	get markerStyle(): Style {
		return <Style>this.getValue(GeographicShapeSeries.markerStyleProperty);
	}
	set markerStyle(value: Style) {
		this.setValue(GeographicShapeSeries.markerStyleProperty, value);
	}
	static readonly markerStylePropertyName: string = "MarkerStyle";
	static readonly markerStyleProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.markerStylePropertyName, (<any>Style).$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.markerStylePropertyName, e.oldValue, e.newValue)));
	get markerCollisionAvoidance(): CollisionAvoidanceType {
		return EnumUtil.getEnumValue<CollisionAvoidanceType>(CollisionAvoidanceType_$type, this.getValue(GeographicShapeSeries.markerCollisionAvoidanceProperty));
	}
	set markerCollisionAvoidance(value: CollisionAvoidanceType) {
		this.setValue(GeographicShapeSeries.markerCollisionAvoidanceProperty, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, value));
	}
	static readonly markerCollisionAvoidancePropertyName: string = "MarkerCollisionAvoidance";
	static readonly markerCollisionAvoidanceProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeries.markerCollisionAvoidancePropertyName, CollisionAvoidanceType_$type, (<any>GeographicShapeSeries).$type, new PropertyMetadata(2, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, CollisionAvoidanceType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicShapeSeries>sender).raisePropertyChanged(GeographicShapeSeries.markerCollisionAvoidancePropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case GeographicShapeSeries.markerTemplatePropertyName:
			this.shapeView.markerTemplatePropertyUpdated();
			break;

			case GeographicShapeSeries.markerCollisionAvoidancePropertyName:
			this.shapeView.markerCollisionAvoidanceUpdated();
			break;

			case GeographicShapeSeries.markerTypePropertyName:
			this.shapeView.markerTypeUpdated();
			break;

			case GeographicShapeSeries.markerBrushPropertyName:
			this.shapeView.markerBrushUpdated();
			break;

			case GeographicShapeSeries.markerOutlinePropertyName:
			this.shapeView.markerOutlineUpdated();
			break;

			case GeographicShapeSeries.markerStylePropertyName:
			this.shapeView.markerStyleUpdated();
			break;

			case GeographicShapeSeries.shapeStyleSelectorPropertyName:
			this.shapeView.shapeStyleSelectorUpdated();
			break;

			case GeographicShapeSeries.shapeStylePropertyName:
			this.shapeView.shapeStyleUpdated();
			break;

		}

	}
}


