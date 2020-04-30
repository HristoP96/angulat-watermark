/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterBaseView } from "./ScatterBaseView";
import { ScatterBase } from "./ScatterBase";
import { Path } from "igniteui-core/Path";
import { SeriesView } from "./SeriesView";
import { Series } from "./Series";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Base, Type, markType } from "igniteui-core/type";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export class ScatterSplineSeriesView extends ScatterBaseView {
	static $t: Type = markType(ScatterSplineSeriesView, 'ScatterSplineSeriesView', (<any>ScatterBaseView).$type);
	constructor(model: ScatterBase) {
		super(model);
	}
	polyline: Path = new Path();
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polyline._stroke = this.model.actualBrush;
		this.polyline.strokeThickness = this.model.thickness;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline._stroke = hitBrush;
		this.polyline.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.polyline);
		}
	}
	clearRendering(wipeClean: boolean): void {
		super.clearRendering(wipeClean);
		this.polyline.data = null;
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline, "shape", <string[]>[ "Main" ]);
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 3;
		this.model.shadowOffsetX = 1;
		this.model.shadowOffsetY = 4;
		this.model.useSingleShadow = false;
	}
}


