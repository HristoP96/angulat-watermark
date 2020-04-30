/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ShapeSeriesBase } from "./ShapeSeriesBase";
import { StyleSelector } from "./StyleSelector";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Style } from "igniteui-core/Style";
import { Type, Base, Point, markType, typeCast } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { ShapeSeriesViewBase } from "./ShapeSeriesViewBase";
import { Series } from "./Series";
import { DataContext } from "igniteui-core/DataContext";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { List$1 } from "igniteui-core/List$1";
import { PointCollection } from "igniteui-core/PointCollection";
import { Path } from "igniteui-core/Path";
import { Shape } from "igniteui-core/Shape";
import { Rect } from "igniteui-core/Rect";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class ScatterPolylineSeries extends ShapeSeriesBase {
	static $t: Type = markType(ScatterPolylineSeries, 'ScatterPolylineSeries', (<any>ShapeSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>ScatterPolylineSeries).$type;
	}
	protected createView(): SeriesView {
		return new ScatterPolylineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polylineView = <ScatterPolylineSeriesView>view;
	}
	private _polylineView: ScatterPolylineSeriesView;
	protected get polylineView(): ScatterPolylineSeriesView {
		return this._polylineView;
	}
	protected set polylineView(value: ScatterPolylineSeriesView) {
		this._polylineView = value;
	}
	protected get_isClosed(): boolean {
		return false;
	}
	private static readonly shapeStyleSelectorPropertyName: string = "ShapeStyleSelector";
	static readonly shapeStyleSelectorProperty: DependencyProperty = DependencyProperty.register(ScatterPolylineSeries.shapeStyleSelectorPropertyName, (<any>StyleSelector).$type, (<any>ScatterPolylineSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolylineSeries>sender).raisePropertyChanged(ScatterPolylineSeries.shapeStyleSelectorPropertyName, e.oldValue, e.newValue)));
	get shapeStyleSelector(): StyleSelector {
		return <StyleSelector>this.getValue(ScatterPolylineSeries.shapeStyleSelectorProperty);
	}
	set shapeStyleSelector(value: StyleSelector) {
		this.setValue(ScatterPolylineSeries.shapeStyleSelectorProperty, value);
	}
	private static readonly shapeStylePropertyName: string = "ShapeStyle";
	static readonly shapeStyleProperty: DependencyProperty = DependencyProperty.register(ScatterPolylineSeries.shapeStylePropertyName, (<any>Style).$type, (<any>ScatterPolylineSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolylineSeries>sender).raisePropertyChanged(ScatterPolylineSeries.shapeStylePropertyName, e.oldValue, e.newValue)));
	get shapeStyle(): Style {
		return <Style>this.getValue(ScatterPolylineSeries.shapeStyleProperty);
	}
	set shapeStyle(value: Style) {
		this.setValue(ScatterPolylineSeries.shapeStyleProperty, value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case ScatterPolylineSeries.shapeStylePropertyName:
			this.polylineView.shapeStyleChanged(this.shapeStyle);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterPolylineSeries.shapeStyleSelectorPropertyName:
			this.polylineView.shapeStyleSelectorChanged(this.shapeStyleSelector);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	protected renderWithView(view: SeriesView): void {
		let shapeView: ScatterPolylineSeriesView = <ScatterPolylineSeriesView>view;
		shapeView.shapeStyleChanged(this.shapeStyle);
		shapeView.shapeStyleSelectorChanged(this.shapeStyleSelector);
		super.renderWithView(view);
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		let polyline = this.polylineView.getHitShape1(position, isFinger, true);
		if (polyline != null) {
			return <DataContext>polyline.dataContext;
		}
		return super.getHitDataContext(position, isFinger);
	}
}

/**
 * @hidden 
 */
export class ScatterPolylineSeriesView extends ShapeSeriesViewBase {
	static $t: Type = markType(ScatterPolylineSeriesView, 'ScatterPolylineSeriesView', (<any>ShapeSeriesViewBase).$type);
	constructor(model: ScatterPolylineSeries) {
		super(model);
	}
	protected getShapeGeometry(i: number, points: List$1<PointCollection>): PathGeometry {
		return this.getShapeGeometry1(i, points, false);
	}
	protected applyStyling1(shape: FrameworkElement, item: any): void {
		super.applyStyling1(shape, item);
		ShapeSeriesViewBase.applyStyling(this, <Path>shape, item);
	}
	protected applyData(element: FrameworkElement, data: PathGeometry): void {
		let shape: Path = typeCast<Path>((<any>Path).$type, element);
		if (shape == null) {
			return;
		}
		shape.data = data;
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
		super.setupItemAppearanceOverride(item, index);
		let path = <Path>item;
		path._fill = null;
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let path = <Path>item;
		path._fill = null;
	}
	shouldRenderShape(bounds: Rect): boolean {
		return bounds.width >= this.shapeModel.shapeFilterResolutionCached || bounds.height >= this.shapeModel.shapeFilterResolutionCached;
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.shapeModel.title + "</span><br/>";
		tooltipTemplate += "</div>";
		return tooltipTemplate;
	}
}


