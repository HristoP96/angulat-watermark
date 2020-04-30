/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { SeriesView } from "./SeriesView";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Type, Point, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Series } from "./Series";
import { MarkerSeries } from "./MarkerSeries";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Color } from "igniteui-core/Color";
import { MarkerType } from "./MarkerType";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class PointSeries extends HorizontalAnchoredCategorySeries {
	static $t: Type = markType(PointSeries, 'PointSeries', (<any>HorizontalAnchoredCategorySeries).$type);
	protected createView(): SeriesView {
		return new PointSeriesView(this);
	}
	private _pointView: PointSeriesView;
	get pointView(): PointSeriesView {
		return this._pointView;
	}
	set pointView(value: PointSeriesView) {
		this._pointView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.pointView = <PointSeriesView>view;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>PointSeries).$type;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		let snapPosition = this.getSeriesValuePosition(this.toWorldPosition(position), true, false);
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
	}
	protected get_isMarkerlessDisplayPreferred(): boolean {
		return false;
	}
}

/**
 * @hidden 
 */
export class PointSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(PointSeriesView, 'PointSeriesView', (<any>AnchoredCategorySeriesView).$type);
	private _pointModel: PointSeries = null;
	protected get pointModel(): PointSeries {
		return this._pointModel;
	}
	protected set pointModel(value: PointSeries) {
		this._pointModel = value;
	}
	constructor(model: PointSeries) {
		super(model);
		this.pointModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.markerModel.markerType = MarkerType.Automatic;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Point;
		}
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 3;
		this.model.shadowOffsetX = 2;
		this.model.shadowOffsetY = 2;
		this.model.useSingleShadow = false;
	}
}


