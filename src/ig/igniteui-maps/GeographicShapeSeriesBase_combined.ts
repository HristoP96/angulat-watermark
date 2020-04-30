/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterPolygonSeries } from "igniteui-charts/ScatterPolygonSeries";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "igniteui-charts/SeriesView";
import { Base, Type, String_$type, typeCast, Number_$type, markType } from "igniteui-core/type";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Series } from "igniteui-charts/Series";
import { ShapeSeriesBase } from "igniteui-charts/ShapeSeriesBase";
import { HostSeriesView } from "./HostSeriesView";
import { XamGeographicMap } from "./XamGeographicMap";

/**
 * @hidden 
 */
export abstract class GeographicShapeSeriesBase extends GeographicMapSeriesHost {
	static $t: Type = markType(GeographicShapeSeriesBase, 'GeographicShapeSeriesBase', (<any>GeographicMapSeriesHost).$type);
	protected createView(): SeriesView {
		return new GeographicShapeSeriesBaseView(this);
	}
	private _shapeBaseView: GeographicShapeSeriesBaseView;
	get shapeBaseView(): GeographicShapeSeriesBaseView {
		return this._shapeBaseView;
	}
	set shapeBaseView(value: GeographicShapeSeriesBaseView) {
		this._shapeBaseView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.shapeBaseView = <GeographicShapeSeriesBaseView>view;
	}
	static readonly shapeMemberPathPropertyName: string = "ShapeMemberPath";
	static readonly shapeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeriesBase.shapeMemberPathPropertyName, String_$type, (<any>GeographicShapeSeriesBase).$type, new PropertyMetadata(2, "points", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<GeographicShapeSeriesBase>((<any>GeographicShapeSeriesBase).$type, sender)).raisePropertyChanged(GeographicShapeSeriesBase.shapeMemberPathPropertyName, e.oldValue, e.newValue)));
	get shapeMemberPath(): string {
		return <string>this.getValue(GeographicShapeSeriesBase.shapeMemberPathProperty);
	}
	set shapeMemberPath(value: string) {
		this.setValue(GeographicShapeSeriesBase.shapeMemberPathProperty, value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			this.shapeBaseView.onSeriesViewerUpdated();
			break;

			case "ActualBrush":
			this.shapeBaseView.actualBrushUpdated();
			break;

			case "ActualOutline":
			this.shapeBaseView.actualOutlineUpdated();
			break;

			case ScatterPolygonSeries.shapeMemberPathPropertyName:
			this.shapeBaseView.shapeMemberPathUpdated();
			break;

			case Series.thicknessPropertyName:
			this.shapeBaseView.thicknessUpdated();
			break;

			case GeographicShapeSeriesBase.shapeFilterResolutionPropertyName:
			this.shapeBaseView.shapeFilterResolutionUpdated();
			break;

		}

	}
	private static readonly shapeFilterResolutionPropertyName: string = "ShapeFilterResolution";
	static readonly shapeFilterResolutionProperty: DependencyProperty = DependencyProperty.register(GeographicShapeSeriesBase.shapeFilterResolutionPropertyName, Number_$type, (<any>GeographicShapeSeriesBase).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<GeographicShapeSeriesBase>((<any>GeographicShapeSeriesBase).$type, sender)).raisePropertyChanged(GeographicShapeSeriesBase.shapeFilterResolutionPropertyName, e.oldValue, e.newValue)));
	get shapeFilterResolution(): number {
		return <number>this.getValue(GeographicShapeSeriesBase.shapeFilterResolutionProperty);
	}
	set shapeFilterResolution(value: number) {
		this.setValue(GeographicShapeSeriesBase.shapeFilterResolutionProperty, value);
	}
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return true;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		super.set_useDeferredMouseEnterAndLeave(value);
	}
}

/**
 * @hidden 
 */
export class GeographicShapeSeriesBaseView extends HostSeriesView {
	static $t: Type = markType(GeographicShapeSeriesBaseView, 'GeographicShapeSeriesBaseView', (<any>HostSeriesView).$type);
	constructor(model: GeographicShapeSeriesBase) {
		super(model);
		this.shapeBaseModel = model;
	}
	private _shapeBaseModel: GeographicShapeSeriesBase = null;
	private get shapeBaseModel(): GeographicShapeSeriesBase {
		return this._shapeBaseModel;
	}
	private set shapeBaseModel(value: GeographicShapeSeriesBase) {
		this._shapeBaseModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		(<ShapeSeriesBase>this.shapeBaseModel.hostedSeries).shapeMemberPath = this.shapeBaseModel.shapeMemberPath;
		this.shapeBaseModel.hostedSeries.brush = this.shapeBaseModel.actualBrush;
		this.shapeBaseModel.hostedSeries.outline = this.shapeBaseModel.actualOutline;
	}
	onSeriesViewerUpdated(): void {
		let hostedSeries: ShapeSeriesBase = <ShapeSeriesBase>this.shapeBaseModel.hostedSeries;
		if (this.shapeBaseModel.seriesViewer == null) {
			hostedSeries.xAxis = null;
			hostedSeries.yAxis = null;
			return;
		}
		hostedSeries.xAxis = (<XamGeographicMap>this.shapeBaseModel.seriesViewer).xAxis;
		hostedSeries.yAxis = (<XamGeographicMap>this.shapeBaseModel.seriesViewer).yAxis;
	}
	actualBrushUpdated(): void {
		this.shapeBaseModel.hostedSeries.brush = this.shapeBaseModel.actualBrush;
	}
	actualOutlineUpdated(): void {
		this.shapeBaseModel.hostedSeries.outline = this.shapeBaseModel.actualOutline;
	}
	shapeMemberPathUpdated(): void {
		(<ShapeSeriesBase>this.shapeBaseModel.hostedSeries).shapeMemberPath = this.shapeBaseModel.shapeMemberPath;
	}
	thicknessUpdated(): void {
		this.shapeBaseModel.hostedSeries.thickness = this.shapeBaseModel.thickness;
	}
	shapeFilterResolutionUpdated(): void {
		(<ShapeSeriesBase>this.shapeBaseModel.hostedSeries).shapeFilterResolution = this.shapeBaseModel.shapeFilterResolution;
	}
}


