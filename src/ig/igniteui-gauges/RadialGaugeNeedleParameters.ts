/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RadialGaugeNeedleShape } from "./RadialGaugeNeedleShape";
import { RadialGaugePivotShape } from "./RadialGaugePivotShape";
import { Brush } from "igniteui-core/Brush";

/**
 * @hidden 
 */
export class RadialGaugeNeedleParameters extends Base {
	static $t: Type = markType(RadialGaugeNeedleParameters, 'RadialGaugeNeedleParameters');
	minExtent: number = 0;
	maxExtent: number = 0;
	minWidth: number = 0;
	maxWidth: number = 0;
	baseFeatureWidth: number = 0;
	baseFeatureExtent: number = 0;
	pointFeatureWidth: number = 0;
	pointFeatureExtent: number = 0;
	featurePointExtent: number = 0;
	needleShape: RadialGaugeNeedleShape = <RadialGaugeNeedleShape>0;
	capShape: RadialGaugePivotShape = <RadialGaugePivotShape>0;
	capWidth: number = 0;
	capFill: Brush = null;
	capOutline: Brush = null;
	capStrokeThickness: number = 0;
	needleBrush: Brush = null;
	needleOutline: Brush = null;
	needleStrokeThickness: number = 0;
	capPos: number = 0;
	capInnerWidth: number = 0;
	clone(): RadialGaugeNeedleParameters {
		let ret = new RadialGaugeNeedleParameters();
		ret.minExtent = this.minExtent;
		ret.maxExtent = this.maxExtent;
		ret.minWidth = this.minWidth;
		ret.maxWidth = this.maxWidth;
		ret.baseFeatureWidth = this.baseFeatureWidth;
		ret.baseFeatureExtent = this.baseFeatureExtent;
		ret.pointFeatureWidth = this.pointFeatureWidth;
		ret.pointFeatureExtent = this.pointFeatureExtent;
		ret.needleShape = this.needleShape;
		ret.capShape = this.capShape;
		ret.capWidth = this.capWidth;
		ret.capFill = this.capFill;
		ret.capOutline = this.capOutline;
		ret.capStrokeThickness = this.capStrokeThickness;
		ret.needleBrush = this.needleBrush;
		ret.needleOutline = this.needleOutline;
		ret.needleStrokeThickness = this.needleStrokeThickness;
		ret.capPos = this.capPos;
		ret.capInnerWidth = this.capInnerWidth;
		return ret;
	}
}


