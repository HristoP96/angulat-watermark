/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisRendererBase } from "./AxisRendererBase";
import { AxisLabelManager } from "./AxisLabelManager";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { CategoryAxisRenderingParameters } from "./CategoryAxisRenderingParameters";
import { CategoryMode } from "./CategoryMode";
import { LinearCategorySnapper } from "./LinearCategorySnapper";
import { RangeInfo } from "./RangeInfo";
import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategoryAxisRenderer extends AxisRendererBase {
	static $t: Type = markType(CategoryAxisRenderer, 'CategoryAxisRenderer', (<any>AxisRendererBase).$type);
	constructor(labelManager: AxisLabelManager) {
		super(labelManager);
	}
	getSnapperInfoInternal(renderingParams: AxisRenderingParametersBase, interval: number, minorCount: number, first: number, last: number): { p1: number; p2: number; p3: number; p4: number; } {
		let catParams = typeCast<CategoryAxisRenderingParameters>((<any>CategoryAxisRenderingParameters).$type, renderingParams);
		let mode: CategoryMode = CategoryMode.Mode0;
		if (catParams != null) {
			mode = catParams.categoryMode;
		}
		let snapper: LinearCategorySnapper = new LinearCategorySnapper(1, renderingParams.currentRangeInfo.visibleMinimum, renderingParams.currentRangeInfo.visibleMaximum, renderingParams.currentRangeInfo.resolution, renderingParams.interval, mode, renderingParams.heuristicResolution);
		interval = snapper.interval;
		if (renderingParams.currentRangeInfo.intervalOverride != -1) {
			interval = renderingParams.currentRangeInfo.intervalOverride;
		}
		let firstValue: number = Math.floor((renderingParams.currentRangeInfo.visibleMinimum - renderingParams.actualMinimumValue) / interval);
		let lastValue: number = Math.ceil((renderingParams.currentRangeInfo.visibleMaximum - renderingParams.actualMinimumValue) / interval);
		first = <number>truncate(firstValue);
		last = <number>truncate(lastValue);
		minorCount = <number>truncate(snapper.minorCount);
		if (renderingParams.currentRangeInfo.minorCountOverride != -1) {
			minorCount = renderingParams.currentRangeInfo.minorCountOverride;
		}
		return {
			p1: interval,
			p2: minorCount,
			p3: first,
			p4: last

		};
	}
	getLabel(renderingParams: AxisRenderingParametersBase, unscaledValue: number, index: number, interval: number): any {
		let catParams = typeCast<CategoryAxisRenderingParameters>((<any>CategoryAxisRenderingParameters).$type, renderingParams);
		if (catParams == null) {
			return null;
		}
		let itemIndex: number = 0;
		if (interval >= 1) {
			itemIndex = index * <number>truncate(Math.floor(interval));
		} else {
			if ((index * interval) * 2 % 2 == 0) {
				itemIndex = <number>truncate(Math.floor(index * interval));
			} else {
				itemIndex = -1;
			}
		}
		let label: any = null;
		if ((catParams.count > 0 && itemIndex < catParams.count && itemIndex >= 0) || catParams.wrapAround) {
			while (itemIndex >= catParams.count && catParams.wrapAround) {
				itemIndex -= catParams.count;
			}
			label = this.getLabelForItem(itemIndex);
		}
		return label;
	}
	private renderMinorLines(renderingParams: AxisRenderingParametersBase, interval: number, minorCount: number, majorValue: number, i: number, nextMajorValue: number): void {
		let catParams = typeCast<CategoryAxisRenderingParameters>((<any>CategoryAxisRenderingParameters).$type, renderingParams);
		if (catParams.categoryMode != CategoryMode.Mode0 && catParams.mode2GroupCount != 0) {
			for (let categoryNumber: number = 0; categoryNumber < <number>truncate(interval); categoryNumber++) {
				for (let groupNumber: number = 0; groupNumber < catParams.mode2GroupCount; groupNumber++) {
					let center: number = this.getGroupCenter(groupNumber, renderingParams.windowRect, renderingParams.viewportRect, renderingParams.effectiveViewportRect);
					if (catParams.isInverted) {
						center = -center;
					}
					let minorValue: number = this.scaling(renderingParams, categoryNumber + i * interval) + center;
					renderingParams.currentRenderingInfo = renderingParams.minorRenderingInfo;
					this.line(renderingParams, renderingParams.minor, minorValue);
					renderingParams.currentRenderingInfo = null;
				}
			}
		}
	}
}


