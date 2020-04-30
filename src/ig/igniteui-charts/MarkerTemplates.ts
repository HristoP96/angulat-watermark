/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DataContext } from "igniteui-core/DataContext";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { Brush } from "igniteui-core/Brush";
import { LinearGradientBrush } from "igniteui-core/LinearGradientBrush";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";

/**
 * @hidden 
 */
export class MarkerTemplates extends Base {
	static $t: Type = markType(MarkerTemplates, 'MarkerTemplates');
	static startMarker(context: CanvasRenderingContext2D, dataContext: DataContext, info: DataTemplateRenderInfo): void {
		context.beginPath();
		let brush = dataContext.actualItemBrush;
		let outlineBrush = dataContext.outline;
		if (brush != null) {
			if (brush.isGradient) {
				let halfWidth = info.availableWidth / 2;
				let halfHeight = info.availableHeight / 2;
				let x = info.xPosition - halfWidth;
				let y = info.yPosition - halfWidth;
				x += info.renderOffsetX;
				y += info.renderOffsetY;
				let grad = CanvasViewRenderer.createGradient(context, <LinearGradientBrush>brush, x, y, x + info.availableWidth, y + info.availableHeight, dataContext.thickness, false);
				context.fillStyle = grad;
			} else {
				if (context.fillStyle != brush._fill) {
					context.fillStyle = brush._fill;
				}
			}
		}
		if (dataContext.outline != null) {
			if (dataContext.outline.isGradient) {
				let halfWidth1 = info.availableWidth / 2;
				let halfHeight1 = info.availableHeight / 2;
				let x1 = info.xPosition - halfWidth1;
				let y1 = info.yPosition - halfWidth1;
				x1 += info.renderOffsetX;
				y1 += info.renderOffsetY;
				let grad1 = CanvasViewRenderer.createGradient(context, <LinearGradientBrush>dataContext.outline, x1, y1, x1 + info.availableWidth, y1 + info.availableHeight, dataContext.thickness, true);
				context.strokeStyle = grad1;
			} else {
				if (context.strokeStyle != dataContext.outline._fill) {
					context.strokeStyle = dataContext.outline._fill;
				}
			}
			context.lineWidth = <number>dataContext.thickness;
		}
	}
	static endMarker(context: CanvasRenderingContext2D, dataContext: DataContext): void {
		if (dataContext.actualItemBrush != null) {
			context.fill();
		}
		if (dataContext.outline != null) {
			context.stroke();
		}
		context.closePath();
	}
	static measureAsEightByEightConstantMarkerTemplate(info: DataTemplateMeasureInfo): void {
		info.isConstant = true;
		info.width = 8;
		info.height = 8;
	}
	static renderCircleMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let radius: number = Math.min(info.availableWidth, info.availableHeight) / 2;
		ctx.arc(<number>info.xPosition, <number>info.yPosition, <number>radius, 0, <number>(Math.PI * 2), false);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderTriangleMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left, top);
		ctx.lineTo(left + halfWidth, top + <number>info.availableHeight);
		ctx.lineTo(left + <number>info.availableWidth, top + 0);
		ctx.lineTo(left, top);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderPyramidMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left, top + <number>info.availableHeight);
		ctx.lineTo(left + halfWidth, top + 0);
		ctx.lineTo(left + <number>info.availableWidth, top + <number>info.availableHeight);
		ctx.lineTo(left, top + <number>info.availableHeight);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderSquareMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.rect(left, top, <number>info.availableWidth, <number>info.availableHeight);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderAlignedSquareMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left_: number = <number>(info.xPosition - halfWidth);
		let top_: number = <number>(info.yPosition - halfHeight);
		ctx.rect(<number>(left_ | 0), <number>(top_ | 0), <number>info.availableWidth, <number>info.availableHeight);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderDiamondMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left + 0, top + halfHeight);
		ctx.lineTo(left + halfWidth, top + <number>info.availableHeight);
		ctx.lineTo(left + <number>info.availableWidth, top + halfHeight);
		ctx.lineTo(left + halfWidth, top + 0);
		ctx.lineTo(left + 0, top + halfHeight);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderPentagonMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		ctx.lineTo(left + <number>((0.1956000030040741 / 8) * info.availableWidth), top + <number>((2.7639999389648438 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((1.6499999761581421 / 8) * info.availableWidth), top + <number>((7.2360000610351562 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((6.3499999046325684 / 8) * info.availableWidth), top + <number>((7.2360000610351562 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((7.8043999671936035 / 8) * info.availableWidth), top + <number>((2.7639999389648438 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderHexagonMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		ctx.lineTo(left + <number>((0.35600000619888306 / 8) * info.availableWidth), top + <number>((2 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((0.35600000619888306 / 8) * info.availableWidth), top + <number>((6 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + <number>(info.availableHeight));
		ctx.lineTo(left + <number>((7.4640002250671387 / 8) * info.availableWidth), top + <number>((6 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((7.4640002250671387 / 8) * info.availableWidth), top + <number>((2 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderTetragramMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		ctx.lineTo(left + <number>((2.5855998992919922 / 8) * info.availableWidth), top + <number>((2.5856 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((0 / 8) * info.availableWidth), top + <number>((4 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((2.5855998992919922 / 8) * info.availableWidth), top + <number>((5.4144001007080078 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + <number>((8 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((5.4144001007080078 / 8) * info.availableWidth), top + <number>((5.4144001007080078 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((8 / 8) * info.availableWidth), top + <number>((4 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((5.4144001007080078 / 8) * info.availableWidth), top + <number>((2.5855998992919922 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderPentagramMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		ctx.lineTo(left + <number>((2.8243999481201172 / 8) * info.availableWidth), top + <number>((2.382 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((0.1956 / 8) * info.availableWidth), top + <number>((2.7639999389648438 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((2.0980000495910645 / 8) * info.availableWidth), top + <number>((4.6180000305175781 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((1.6488000154495239 / 8) * info.availableWidth), top + <number>((7.2360000610351562 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + <number>((6 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((6.3512 / 8) * info.availableWidth), top + <number>((7.2360000610351562 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((5.9019999504089355 / 8) * info.availableWidth), top + <number>((4.6180000305175781 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((7.8043999671936035 / 8) * info.availableWidth), top + <number>((2.7639999389648438 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((5.1756000518798828 / 8) * info.availableWidth), top + <number>((2.3819999694824219 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
	static renderHexagramMarkerTemplate(info: DataTemplateRenderInfo): void {
		let ctx = <CanvasRenderingContext2D>info.context;
		let dataContext = <DataContext>info.data;
		MarkerTemplates.startMarker(ctx, dataContext, info);
		let halfHeight: number = <number>(info.availableHeight / 2);
		let halfWidth: number = <number>(info.availableWidth / 2);
		let left: number = <number>(info.xPosition - halfWidth);
		let top: number = <number>(info.yPosition - halfHeight);
		ctx.moveTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		ctx.lineTo(left + <number>((3 / 8) * info.availableWidth), top + <number>((2.268 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((0.536 / 8) * info.availableWidth), top + <number>((2 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((2 / 8) * info.availableWidth), top + <number>((4 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((0.536 / 8) * info.availableWidth), top + <number>((6 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((3 / 8) * info.availableWidth), top + <number>((5.73199987411499 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + <number>((8 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((5 / 8) * info.availableWidth), top + <number>((5.73199987411499 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((7.4640002250671387 / 8) * info.availableWidth), top + <number>((6 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((6 / 8) * info.availableWidth), top + <number>((4 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((7.4640002250671387 / 8) * info.availableWidth), top + <number>((2 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((5 / 8) * info.availableWidth), top + <number>((2.2679998874664307 / 8) * info.availableHeight));
		ctx.lineTo(left + <number>((4 / 8) * info.availableWidth), top + 0);
		MarkerTemplates.endMarker(ctx, dataContext);
	}
}


