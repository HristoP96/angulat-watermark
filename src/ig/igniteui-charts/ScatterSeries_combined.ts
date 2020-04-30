/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterBase } from "./ScatterBase";
import { SeriesView } from "./SeriesView";
import { Type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { ScatterFrame } from "./ScatterFrame";
import { ScatterBaseView } from "./ScatterBaseView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { MarkerSeries } from "./MarkerSeries";
import { Series } from "./Series";
import { Color } from "igniteui-core/Color";
import { MarkerType } from "./MarkerType";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class ScatterSeries extends ScatterBase {
	static $t: Type = markType(ScatterSeries, 'ScatterSeries', (<any>ScatterBase).$type);
	protected createView(): SeriesView {
		return new ScatterSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.scatterSeriesView = <ScatterSeriesView>view;
	}
	private _scatterSeriesView: ScatterSeriesView;
	get scatterSeriesView(): ScatterSeriesView {
		return this._scatterSeriesView;
	}
	set scatterSeriesView(value: ScatterSeriesView) {
		this._scatterSeriesView = value;
	}
	protected get_isMarkerlessDisplayPreferred(): boolean {
		return false;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>ScatterSeries).$type;
		this.previousFrame = new ScatterFrame();
		this.transitionFrame = new ScatterFrame();
		this.currentFrame = new ScatterFrame();
	}
}

/**
 * @hidden 
 */
export class ScatterSeriesView extends ScatterBaseView {
	static $t: Type = markType(ScatterSeriesView, 'ScatterSeriesView', (<any>ScatterBaseView).$type);
	private _scatterSeriesModel: ScatterSeries = null;
	protected get scatterSeriesModel(): ScatterSeries {
		return this._scatterSeriesModel;
	}
	protected set scatterSeriesModel(value: ScatterSeries) {
		this._scatterSeriesModel = value;
	}
	constructor(model: ScatterSeries) {
		super(model);
		this.scatterSeriesModel = model;
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


