/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PolarBase } from "./PolarBase";
import { SeriesView } from "./SeriesView";
import { Type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { PolarBaseView } from "./PolarBaseView";
import { Series } from "./Series";
import { Color } from "igniteui-core/Color";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class PolarScatterSeries extends PolarBase {
	static $t: Type = markType(PolarScatterSeries, 'PolarScatterSeries', (<any>PolarBase).$type);
	protected createView(): SeriesView {
		return new PolarScatterSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarScatterView = <PolarScatterSeriesView>view;
	}
	private _polarScatterView: PolarScatterSeriesView;
	get polarScatterView(): PolarScatterSeriesView {
		return this._polarScatterView;
	}
	set polarScatterView(value: PolarScatterSeriesView) {
		this._polarScatterView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>PolarScatterSeries).$type;
	}
}

/**
 * @hidden 
 */
export class PolarScatterSeriesView extends PolarBaseView {
	static $t: Type = markType(PolarScatterSeriesView, 'PolarScatterSeriesView', (<any>PolarBaseView).$type);
	private _polarScatterModel: PolarScatterSeries = null;
	protected get polarScatterModel(): PolarScatterSeries {
		return this._polarScatterModel;
	}
	protected set polarScatterModel(value: PolarScatterSeries) {
		this._polarScatterModel = value;
	}
	constructor(model: PolarScatterSeries) {
		super(model);
		this.polarScatterModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
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


