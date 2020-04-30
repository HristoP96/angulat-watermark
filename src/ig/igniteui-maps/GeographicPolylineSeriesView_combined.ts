/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicShapeSeriesBaseView } from "./GeographicShapeSeriesBaseView";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ScatterPolylineSeries } from "igniteui-charts/ScatterPolylineSeries";
import { Base, Type, markType, runOn, delegateCombine } from "igniteui-core/type";
import { GeographicShapeSeriesBase } from "./GeographicShapeSeriesBase";
import { StyleSelector } from "igniteui-charts/StyleSelector";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Style } from "igniteui-core/Style";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "igniteui-charts/SeriesView";
import { Series } from "igniteui-charts/Series";
import { StyleShapeEventArgs } from "igniteui-charts/StyleShapeEventArgs";
import { ShapeSeriesBase } from "igniteui-charts/ShapeSeriesBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class GeographicPolylineSeriesView extends GeographicShapeSeriesBaseView {
	static $t: Type = markType(GeographicPolylineSeriesView, 'GeographicPolylineSeriesView', (<any>GeographicShapeSeriesBaseView).$type);
	constructor(model: GeographicPolylineSeries) {
		super(model);
		this.polylineModel = model;
	}
	private _polylineModel: GeographicPolylineSeries = null;
	protected get polylineModel(): GeographicPolylineSeries {
		return this._polylineModel;
	}
	protected set polylineModel(value: GeographicPolylineSeries) {
		this._polylineModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		(<ScatterPolylineSeries>this.polylineModel.hostedSeries).shapeStyleSelector = this.polylineModel.shapeStyleSelector;
		(<ScatterPolylineSeries>this.polylineModel.hostedSeries).shapeStyle = this.polylineModel.shapeStyle;
	}
	shapeStyleSelectorUpdated(): void {
		(<ScatterPolylineSeries>this.polylineModel.hostedSeries).shapeStyleSelector = this.polylineModel.shapeStyleSelector;
	}
	shapeStyleUpdated(): void {
		(<ScatterPolylineSeries>this.polylineModel.hostedSeries).shapeStyle = this.polylineModel.shapeStyle;
	}
}

/**
 * @hidden 
 */
export class GeographicPolylineSeries extends GeographicShapeSeriesBase {
	static $t: Type = markType(GeographicPolylineSeries, 'GeographicPolylineSeries', (<any>GeographicShapeSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicPolylineSeries).$type;
	}
	protected createView(): SeriesView {
		return new GeographicPolylineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polylineView = <GeographicPolylineSeriesView>view;
	}
	private _polylineView: GeographicPolylineSeriesView;
	get polylineView(): GeographicPolylineSeriesView {
		return this._polylineView;
	}
	set polylineView(value: GeographicPolylineSeriesView) {
		this._polylineView = value;
	}
	static readonly shapeStyleSelectorPropertyName: string = "ShapeStyleSelector";
	static readonly shapeStyleSelectorProperty: DependencyProperty = DependencyProperty.register(GeographicPolylineSeries.shapeStyleSelectorPropertyName, (<any>StyleSelector).$type, (<any>GeographicPolylineSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicPolylineSeries>sender).raisePropertyChanged(GeographicPolylineSeries.shapeStyleSelectorPropertyName, e.oldValue, e.newValue)));
	get shapeStyleSelector(): StyleSelector {
		return <StyleSelector>this.getValue(GeographicPolylineSeries.shapeStyleSelectorProperty);
	}
	set shapeStyleSelector(value: StyleSelector) {
		this.setValue(GeographicPolylineSeries.shapeStyleSelectorProperty, value);
	}
	static readonly shapeStylePropertyName: string = "ShapeStyle";
	static readonly shapeStyleProperty: DependencyProperty = DependencyProperty.register(GeographicPolylineSeries.shapeStylePropertyName, (<any>Style).$type, (<any>GeographicPolylineSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicPolylineSeries>sender).raisePropertyChanged(GeographicPolylineSeries.shapeStylePropertyName, e.oldValue, e.newValue)));
	get shapeStyle(): Style {
		return <Style>this.getValue(GeographicPolylineSeries.shapeStyleProperty);
	}
	set shapeStyle(value: Style) {
		this.setValue(GeographicPolylineSeries.shapeStyleProperty, value);
	}
	protected createSeries(): Series {
		let hostedSeries = new ScatterPolylineSeries();
		hostedSeries.styleShape = delegateCombine(hostedSeries.styleShape, runOn(this, this.hostedSeries_StyleShape));
		return hostedSeries;
	}
	private hostedSeries_StyleShape(sender: any, args: StyleShapeEventArgs): void {
		if (this.styleShape != null) {
			this.styleShape(this, args);
		}
	}
	styleShape: (sender: any, e: StyleShapeEventArgs) => void = null;
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case GeographicPolylineSeries.shapeStyleSelectorPropertyName:
			this.polylineView.shapeStyleSelectorUpdated();
			break;

			case GeographicPolylineSeries.shapeStylePropertyName:
			this.polylineView.shapeStyleUpdated();
			break;

		}

	}
}


