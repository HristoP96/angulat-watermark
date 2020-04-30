/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicXYTriangulatingSeriesView } from "./GeographicXYTriangulatingSeriesView";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ScatterContourSeries } from "igniteui-charts/ScatterContourSeries";
import { Base, Type, markType, runOn, delegateCombine, String_$type } from "igniteui-core/type";
import { GeographicXYTriangulatingSeries } from "./GeographicXYTriangulatingSeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { ValueBrushScale } from "igniteui-charts/ValueBrushScale";
import { ContourValueResolver } from "igniteui-charts/ContourValueResolver";
import { Control } from "igniteui-core/Control";
import { Series } from "igniteui-charts/Series";
import { TriangulationStatusEventArgs } from "igniteui-core/TriangulationStatusEventArgs";
import { ScatterTriangulationSeries } from "igniteui-charts/ScatterTriangulationSeries";
import { SeriesView } from "igniteui-charts/SeriesView";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class GeographicContourLineSeriesView extends GeographicXYTriangulatingSeriesView {
	static $t: Type = markType(GeographicContourLineSeriesView, 'GeographicContourLineSeriesView', (<any>GeographicXYTriangulatingSeriesView).$type);
	constructor(model: GeographicContourLineSeries) {
		super(model);
		this.geographicContourLineModel = model;
	}
	private _geographicContourLineModel: GeographicContourLineSeries = null;
	private get geographicContourLineModel(): GeographicContourLineSeries {
		return this._geographicContourLineModel;
	}
	private set geographicContourLineModel(value: GeographicContourLineSeries) {
		this._geographicContourLineModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		if (this.geographicContourLineModel.hostedSeries != null) {
			this.geographicContourLineModel.hostedContourLineSeries.fillScale = this.geographicContourLineModel.fillScale;
			this.geographicContourLineModel.hostedContourLineSeries.valueMemberPath = this.geographicContourLineModel.valueMemberPath;
		}
	}
	fillScaleUpdated(): void {
		if (this.geographicContourLineModel.hostedContourLineSeries != null) {
			this.geographicContourLineModel.hostedContourLineSeries.fillScale = this.geographicContourLineModel.fillScale;
		}
	}
	valueMemberPathUpdated(): void {
		if (this.geographicContourLineModel.hostedContourLineSeries != null) {
			this.geographicContourLineModel.hostedContourLineSeries.valueMemberPath = this.geographicContourLineModel.valueMemberPath;
		}
	}
}

/**
 * @hidden 
 */
export class GeographicContourLineSeries extends GeographicXYTriangulatingSeries {
	static $t: Type = markType(GeographicContourLineSeries, 'GeographicContourLineSeries', (<any>GeographicXYTriangulatingSeries).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicContourLineSeries).$type;
	}
	protected onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
	}
	private _hostedContourLineSeries: ScatterContourSeries;
	get hostedContourLineSeries(): ScatterContourSeries {
		return this._hostedContourLineSeries;
	}
	set hostedContourLineSeries(value: ScatterContourSeries) {
		this._hostedContourLineSeries = value;
	}
	protected createSeries(): Series {
		this.hostedContourLineSeries = new ScatterContourSeries();
		let $t = this.hostedContourLineSeries;
		$t.triangulationStatusChanged = delegateCombine($t.triangulationStatusChanged, runOn(this, this.hostedContourLineSeries_TriangulationStatusChanged));
		return this.hostedContourLineSeries;
	}
	private hostedContourLineSeries_TriangulationStatusChanged(sender: any, args: TriangulationStatusEventArgs): void {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, args);
		}
	}
	private static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicContourLineSeries.valueMemberPathPropertyName, String_$type, (<any>GeographicContourLineSeries).$type, new PropertyMetadata(2, "value", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicContourLineSeries>sender).raisePropertyChanged(GeographicContourLineSeries.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueMemberPath(): string {
		return <string>this.getValue(GeographicContourLineSeries.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(GeographicContourLineSeries.valueMemberPathProperty, value);
	}
	private static readonly fillScalePropertyName: string = "FillScale";
	static readonly fillScaleProperty: DependencyProperty = DependencyProperty.register(GeographicContourLineSeries.fillScalePropertyName, (<any>ValueBrushScale).$type, (<any>GeographicContourLineSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicContourLineSeries>sender).raisePropertyChanged(GeographicContourLineSeries.fillScalePropertyName, e.oldValue, e.newValue)));
	get fillScale(): ValueBrushScale {
		return <ValueBrushScale>this.getValue(GeographicContourLineSeries.fillScaleProperty);
	}
	set fillScale(value: ValueBrushScale) {
		this.setValue(GeographicContourLineSeries.fillScaleProperty, value);
	}
	protected createView(): SeriesView {
		return new GeographicContourLineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.geographicContourLineSeriesView = <GeographicContourLineSeriesView>view;
	}
	private _geographicContourLineSeriesView: GeographicContourLineSeriesView;
	get geographicContourLineSeriesView(): GeographicContourLineSeriesView {
		return this._geographicContourLineSeriesView;
	}
	set geographicContourLineSeriesView(value: GeographicContourLineSeriesView) {
		this._geographicContourLineSeriesView = value;
	}
	private static readonly valueResolverPropertyName: string = "ValueResolver";
	static readonly valueResolverProperty: DependencyProperty = DependencyProperty.register(GeographicContourLineSeries.valueResolverPropertyName, (<any>ContourValueResolver).$type, (<any>GeographicContourLineSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicContourLineSeries>sender).raisePropertyChanged(GeographicContourLineSeries.valueResolverPropertyName, e.oldValue, e.newValue)));
	get valueResolver(): ContourValueResolver {
		return <ContourValueResolver>this.getValue(GeographicContourLineSeries.valueResolverProperty);
	}
	set valueResolver(value: ContourValueResolver) {
		this.setValue(GeographicContourLineSeries.valueResolverProperty, value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case GeographicContourLineSeries.fillScalePropertyName:
			this.geographicContourLineSeriesView.fillScaleUpdated();
			break;

			case GeographicContourLineSeries.valueMemberPathPropertyName:
			this.geographicContourLineSeriesView.valueMemberPathUpdated();
			break;

			case GeographicContourLineSeries.valueResolverPropertyName:
			this.hostedContourLineSeries.valueResolver = this.valueResolver;
			break;

			case Series.thicknessPropertyName:
			this.hostedContourLineSeries.thickness = this.thickness;
			break;

			case Series.dashArrayPropertyName:
			this.hostedContourLineSeries.dashArray = this.dashArray;
			break;

			case Series.dashCapPropertyName:
			this.hostedContourLineSeries.dashCap = this.dashCap;
			break;

			case Series.miterLimitPropertyName:
			this.hostedContourLineSeries.miterLimit = this.miterLimit;
			break;

		}

	}
	triangulationStatusChanged: (sender: any, args: TriangulationStatusEventArgs) => void = null;
}


