/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, getInstanceType } from "./type";
import { DataTemplate } from "./DataTemplate";
import { DataTemplatePassInfo } from "./DataTemplatePassInfo";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "./dom";
import { DataContext } from "./DataContext";
import { DataTemplateMeasureInfo } from "./DataTemplateMeasureInfo";
import { DataTemplateRenderInfo } from "./DataTemplateRenderInfo";
import { isNaN_ } from "./number";
import { stringEndsWith } from "./string";
import { numberToString2 } from "./numberExtended";

/**
 * @hidden 
 */
export class LegendItemHelper extends Base {
	static $t: Type = markType(LegendItemHelper, 'LegendItemHelper');
	private static _pixelRatio: number = NaN;
	static get pixelRatio(): number {
		if (isNaN_(LegendItemHelper._pixelRatio)) {
			LegendItemHelper._pixelRatio = window.devicePixelRatio == <number>undefined ? 1 : window.devicePixelRatio;
		}
		return LegendItemHelper._pixelRatio;
	}
	static set pixelRatio(value: number) {
		LegendItemHelper._pixelRatio = value;
	}
	static coreLegendItemRender(context: any, xPosition: number, yPosition: number, availableWidth: number, availableHeight: number, data: any, title: string, template: DataTemplate, passInfo: DataTemplatePassInfo): void {
		LegendItemHelper.coreLegendItemRender1(context, xPosition, yPosition, availableWidth, availableHeight, data, title, template, passInfo, false);
	}
	static coreLegendItemRender1(context: any, xPosition: number, yPosition: number, availableWidth: number, availableHeight: number, data: any, title: string, template: DataTemplate, passInfo: DataTemplatePassInfo, isFinancial: boolean, ...args: any[]): void {
		let obj: DomRenderer = <DomRenderer><any>context;
		let cont: DataContext = <DataContext>data;
		if (cont != null && cont.series != null) {
			if (template != null) {
				let BadgeWidth: number = 18, BadgeHeight: number = 16;
				let badgeDom = obj.createElement("canvas");
				if (isFinancial) {
					badgeDom.setStyleProperty("vertical-align", "middle");
				}
				badgeDom.setAttribute("width", (BadgeWidth * LegendItemHelper.pixelRatio).toString());
				badgeDom.setAttribute("height", (BadgeHeight * LegendItemHelper.pixelRatio).toString());
				badgeDom.setStyleProperty("width", BadgeWidth.toString() + "px");
				badgeDom.setStyleProperty("height", BadgeHeight.toString() + "px");
				let badgeCellDom = isFinancial ? obj.createElement("span") : obj.createElement("td");
				badgeCellDom.addClass("ui-legend-item-badge");
				badgeCellDom.append(badgeDom);
				let badgeContext = obj.get2DCanvasContext(badgeDom);
				let measureInfo: DataTemplateMeasureInfo = new DataTemplateMeasureInfo();
				measureInfo.passInfo = passInfo;
				measureInfo.context = badgeContext;
				measureInfo.width = BadgeWidth;
				measureInfo.height = BadgeHeight;
				measureInfo.data = cont;
				template.measure(measureInfo);
				let renderInfo: DataTemplateRenderInfo = new DataTemplateRenderInfo();
				renderInfo.availableWidth = (isNaN_(measureInfo.width) ? BadgeWidth : <number>Math.min(measureInfo.width, BadgeWidth));
				renderInfo.availableHeight = (isNaN_(measureInfo.height) ? BadgeHeight : <number>Math.min(measureInfo.height, BadgeHeight));
				renderInfo.passInfo = passInfo;
				renderInfo.context = badgeContext;
				renderInfo.data = cont;
				renderInfo.xPosition = 0;
				renderInfo.yPosition = 0;
				if (LegendItemHelper.pixelRatio != 1) {
					badgeContext.save();
					badgeContext.scale(LegendItemHelper.pixelRatio, LegendItemHelper.pixelRatio);
				}
				template.render(renderInfo);
				if (LegendItemHelper.pixelRatio != 1) {
					badgeContext.restore();
				}
				obj.append(badgeCellDom);
			}
			if (isFinancial) {
				let titleLabel: DomWrapper = obj.createElement("label");
				titleLabel.addClass("ui-legend-item-text");
				titleLabel.setText(title);
				obj.append(titleLabel);
				let finalValue: number = <number>args[0];
				let percentChange: number = <number>args[1];
				let isOverlay: boolean = stringEndsWith(getInstanceType(cont.series).typeName, "Overlay");
				if (!isNaN_(finalValue) && !isOverlay) {
					titleLabel.setText(titleLabel.getText() + ": ");
					let finalValueLabel: DomWrapper = obj.createElement("label");
					finalValueLabel.setStyleProperty("font-weight", "bold");
					finalValueLabel.setText(numberToString2(finalValue, "0.00") + (isNaN_(percentChange) ? "" : " "));
					obj.append(finalValueLabel);
				}
				if (!isNaN_(percentChange) && !isOverlay) {
					let percentChangeLabel: DomWrapper = obj.createElement("label");
					percentChangeLabel.setText("(" + numberToString2(percentChange, "0.00") + "%)");
					obj.append(percentChangeLabel);
				}
			} else {
				let titleDom = obj.createElement("td");
				let titleSpan = obj.createElement("span");
				titleSpan.setText(title);
				titleDom.append(titleSpan);
				titleDom.addClass("ui-legend-item-text");
				obj.append(titleDom);
			}
		}
	}
}


