/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { List$1 } from "igniteui-core/List$1";
import { Base, Number_$type, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { FrameExtended } from "./FrameExtended";
import { InterpolationUtil } from "igniteui-core/InterpolationUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class ItemTooltipLayerFrame extends Frame {
	static $t: Type = markType(ItemTooltipLayerFrame, 'ItemTooltipLayerFrame', (<any>Frame).$type);
	private _tooltipYCoords: List$1<number> = null;
	get tooltipYCoords(): List$1<number> {
		return this._tooltipYCoords;
	}
	set tooltipYCoords(value: List$1<number>) {
		this._tooltipYCoords = value;
	}
	private _tooltipXCoords: List$1<number> = null;
	get tooltipXCoords(): List$1<number> {
		return this._tooltipXCoords;
	}
	set tooltipXCoords(value: List$1<number>) {
		this._tooltipXCoords = value;
	}
	private _actualTooltipYCoords: List$1<number> = null;
	get actualTooltipYCoords(): List$1<number> {
		return this._actualTooltipYCoords;
	}
	set actualTooltipYCoords(value: List$1<number>) {
		this._actualTooltipYCoords = value;
	}
	private _actualTooltipXCoords: List$1<number> = null;
	get actualTooltipXCoords(): List$1<number> {
		return this._actualTooltipXCoords;
	}
	set actualTooltipXCoords(value: List$1<number>) {
		this._actualTooltipXCoords = value;
	}
	private _tooltipObjects: List$1<any> = null;
	get tooltipObjects(): List$1<any> {
		return this._tooltipObjects;
	}
	set tooltipObjects(value: List$1<any>) {
		this._tooltipObjects = value;
	}
	private _tooltipDataContexts: List$1<any> = null;
	get tooltipDataContexts(): List$1<any> {
		return this._tooltipDataContexts;
	}
	set tooltipDataContexts(value: List$1<any>) {
		this._tooltipDataContexts = value;
	}
	private _tooltipContainers: List$1<any> = null;
	get tooltipContainers(): List$1<any> {
		return this._tooltipContainers;
	}
	set tooltipContainers(value: List$1<any>) {
		this._tooltipContainers = value;
	}
	private _tooltipWidths: List$1<number> = null;
	get tooltipWidths(): List$1<number> {
		return this._tooltipWidths;
	}
	set tooltipWidths(value: List$1<number>) {
		this._tooltipWidths = value;
	}
	private _tooltipHeights: List$1<number> = null;
	get tooltipHeights(): List$1<number> {
		return this._tooltipHeights;
	}
	set tooltipHeights(value: List$1<number>) {
		this._tooltipHeights = value;
	}
	private _leaderBrushes: List$1<Brush> = null;
	get leaderBrushes(): List$1<Brush> {
		return this._leaderBrushes;
	}
	set leaderBrushes(value: List$1<Brush>) {
		this._leaderBrushes = value;
	}
	constructor() {
		super();
		this.tooltipYCoords = new List$1<number>(Number_$type, 0);
		this.tooltipXCoords = new List$1<number>(Number_$type, 0);
		this.actualTooltipYCoords = new List$1<number>(Number_$type, 0);
		this.actualTooltipXCoords = new List$1<number>(Number_$type, 0);
		this.tooltipObjects = new List$1<any>((<any>Base).$type, 0);
		this.tooltipDataContexts = new List$1<any>((<any>Base).$type, 0);
		this.tooltipContainers = new List$1<any>((<any>Base).$type, 0);
		this.tooltipWidths = new List$1<number>(Number_$type, 0);
		this.tooltipHeights = new List$1<number>(Number_$type, 0);
		this.leaderBrushes = new List$1<Brush>((<any>Brush).$type, 0);
	}
	interpolate2(p: number, min: Frame, max: Frame): void {
		let mn: ItemTooltipLayerFrame = <ItemTooltipLayerFrame>min;
		let mx: ItemTooltipLayerFrame = <ItemTooltipLayerFrame>max;
		Frame.interpolate1(this.tooltipYCoords, p, mn.tooltipYCoords, mx.tooltipYCoords);
		Frame.interpolate1(this.tooltipXCoords, p, mn.tooltipXCoords, mx.tooltipXCoords);
		Frame.interpolate1(this.actualTooltipYCoords, p, mn.actualTooltipYCoords, mx.actualTooltipYCoords);
		Frame.interpolate1(this.actualTooltipXCoords, p, mn.actualTooltipXCoords, mx.actualTooltipXCoords);
		Frame.interpolate1(this.tooltipWidths, p, mn.tooltipWidths, mx.tooltipWidths);
		Frame.interpolate1(this.tooltipHeights, p, mn.tooltipHeights, mx.tooltipHeights);
		FrameExtended.interpolate(this.leaderBrushes, p, mn.leaderBrushes, mx.leaderBrushes, InterpolationMode.RGB);
		InterpolationUtil.interpolateValues$1<any>((<any>Base).$type, this.tooltipObjects, p, mn.tooltipObjects, mx.tooltipObjects, () => null, (ip: number, iq: number, minVal: any, maxVal: any) => maxVal);
		InterpolationUtil.interpolateValues$1<any>((<any>Base).$type, this.tooltipDataContexts, p, mn.tooltipDataContexts, mx.tooltipDataContexts, () => null, (ip: number, iq: number, minVal: any, maxVal: any) => maxVal);
		InterpolationUtil.interpolateValues$1<any>((<any>Base).$type, this.tooltipContainers, p, mn.tooltipContainers, mx.tooltipContainers, () => null, (ip: number, iq: number, minVal: any, maxVal: any) => maxVal);
	}
}


