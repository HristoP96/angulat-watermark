/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DomainChartDescription } from "./DomainChartDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class XYChartDescription extends DomainChartDescription {
	static $t: Type = markType(XYChartDescription, 'XYChartDescription', (<any>DomainChartDescription).$type);
	protected get_type(): string {
		return "XYChart";
	}
	constructor() {
		super();
	}
	private _xAxisFormatLabelRef: string = null;
	get xAxisFormatLabelRef(): string {
		return this._xAxisFormatLabelRef;
	}
	set xAxisFormatLabelRef(value: string) {
		this._xAxisFormatLabelRef = value;
		this.markDirty("XAxisFormatLabelRef");
	}
	private _yAxisFormatLabelRef: string = null;
	get yAxisFormatLabelRef(): string {
		return this._yAxisFormatLabelRef;
	}
	set yAxisFormatLabelRef(value: string) {
		this._yAxisFormatLabelRef = value;
		this.markDirty("YAxisFormatLabelRef");
	}
	private _xAxisLabelLeftMargin: number = 0;
	get xAxisLabelLeftMargin(): number {
		return this._xAxisLabelLeftMargin;
	}
	set xAxisLabelLeftMargin(value: number) {
		this._xAxisLabelLeftMargin = value;
		this.markDirty("XAxisLabelLeftMargin");
	}
	private _xAxisLabelTopMargin: number = 0;
	get xAxisLabelTopMargin(): number {
		return this._xAxisLabelTopMargin;
	}
	set xAxisLabelTopMargin(value: number) {
		this._xAxisLabelTopMargin = value;
		this.markDirty("XAxisLabelTopMargin");
	}
	private _xAxisLabelRightMargin: number = 0;
	get xAxisLabelRightMargin(): number {
		return this._xAxisLabelRightMargin;
	}
	set xAxisLabelRightMargin(value: number) {
		this._xAxisLabelRightMargin = value;
		this.markDirty("XAxisLabelRightMargin");
	}
	private _xAxisLabelBottomMargin: number = 0;
	get xAxisLabelBottomMargin(): number {
		return this._xAxisLabelBottomMargin;
	}
	set xAxisLabelBottomMargin(value: number) {
		this._xAxisLabelBottomMargin = value;
		this.markDirty("XAxisLabelBottomMargin");
	}
	private _yAxisLabelLeftMargin: number = 0;
	get yAxisLabelLeftMargin(): number {
		return this._yAxisLabelLeftMargin;
	}
	set yAxisLabelLeftMargin(value: number) {
		this._yAxisLabelLeftMargin = value;
		this.markDirty("YAxisLabelLeftMargin");
	}
	private _yAxisLabelTopMargin: number = 0;
	get yAxisLabelTopMargin(): number {
		return this._yAxisLabelTopMargin;
	}
	set yAxisLabelTopMargin(value: number) {
		this._yAxisLabelTopMargin = value;
		this.markDirty("YAxisLabelTopMargin");
	}
	private _yAxisLabelRightMargin: number = 0;
	get yAxisLabelRightMargin(): number {
		return this._yAxisLabelRightMargin;
	}
	set yAxisLabelRightMargin(value: number) {
		this._yAxisLabelRightMargin = value;
		this.markDirty("YAxisLabelRightMargin");
	}
	private _yAxisLabelBottomMargin: number = 0;
	get yAxisLabelBottomMargin(): number {
		return this._yAxisLabelBottomMargin;
	}
	set yAxisLabelBottomMargin(value: number) {
		this._yAxisLabelBottomMargin = value;
		this.markDirty("YAxisLabelBottomMargin");
	}
	private _xAxisLabelTextColor: string = null;
	get xAxisLabelTextColor(): string {
		return this._xAxisLabelTextColor;
	}
	set xAxisLabelTextColor(value: string) {
		this._xAxisLabelTextColor = value;
		this.markDirty("XAxisLabelTextColor");
	}
	private _yAxisLabelTextColor: string = null;
	get yAxisLabelTextColor(): string {
		return this._yAxisLabelTextColor;
	}
	set yAxisLabelTextColor(value: string) {
		this._yAxisLabelTextColor = value;
		this.markDirty("YAxisLabelTextColor");
	}
	private _xAxisTitleMargin: number = 0;
	get xAxisTitleMargin(): number {
		return this._xAxisTitleMargin;
	}
	set xAxisTitleMargin(value: number) {
		this._xAxisTitleMargin = value;
		this.markDirty("XAxisTitleMargin");
	}
	private _yAxisTitleMargin: number = 0;
	get yAxisTitleMargin(): number {
		return this._yAxisTitleMargin;
	}
	set yAxisTitleMargin(value: number) {
		this._yAxisTitleMargin = value;
		this.markDirty("YAxisTitleMargin");
	}
	private _xAxisTitleLeftMargin: number = 0;
	get xAxisTitleLeftMargin(): number {
		return this._xAxisTitleLeftMargin;
	}
	set xAxisTitleLeftMargin(value: number) {
		this._xAxisTitleLeftMargin = value;
		this.markDirty("XAxisTitleLeftMargin");
	}
	private _yAxisTitleLeftMargin: number = 0;
	get yAxisTitleLeftMargin(): number {
		return this._yAxisTitleLeftMargin;
	}
	set yAxisTitleLeftMargin(value: number) {
		this._yAxisTitleLeftMargin = value;
		this.markDirty("YAxisTitleLeftMargin");
	}
	private _xAxisTitleTopMargin: number = 0;
	get xAxisTitleTopMargin(): number {
		return this._xAxisTitleTopMargin;
	}
	set xAxisTitleTopMargin(value: number) {
		this._xAxisTitleTopMargin = value;
		this.markDirty("XAxisTitleTopMargin");
	}
	private _yAxisTitleTopMargin: number = 0;
	get yAxisTitleTopMargin(): number {
		return this._yAxisTitleTopMargin;
	}
	set yAxisTitleTopMargin(value: number) {
		this._yAxisTitleTopMargin = value;
		this.markDirty("YAxisTitleTopMargin");
	}
	private _xAxisTitleRightMargin: number = 0;
	get xAxisTitleRightMargin(): number {
		return this._xAxisTitleRightMargin;
	}
	set xAxisTitleRightMargin(value: number) {
		this._xAxisTitleRightMargin = value;
		this.markDirty("XAxisTitleRightMargin");
	}
	private _yAxisTitleRightMargin: number = 0;
	get yAxisTitleRightMargin(): number {
		return this._yAxisTitleRightMargin;
	}
	set yAxisTitleRightMargin(value: number) {
		this._yAxisTitleRightMargin = value;
		this.markDirty("YAxisTitleRightMargin");
	}
	private _xAxisTitleBottomMargin: number = 0;
	get xAxisTitleBottomMargin(): number {
		return this._xAxisTitleBottomMargin;
	}
	set xAxisTitleBottomMargin(value: number) {
		this._xAxisTitleBottomMargin = value;
		this.markDirty("XAxisTitleBottomMargin");
	}
	private _yAxisTitleBottomMargin: number = 0;
	get yAxisTitleBottomMargin(): number {
		return this._yAxisTitleBottomMargin;
	}
	set yAxisTitleBottomMargin(value: number) {
		this._yAxisTitleBottomMargin = value;
		this.markDirty("YAxisTitleBottomMargin");
	}
	private _xAxisTitleTextColor: string = null;
	get xAxisTitleTextColor(): string {
		return this._xAxisTitleTextColor;
	}
	set xAxisTitleTextColor(value: string) {
		this._xAxisTitleTextColor = value;
		this.markDirty("XAxisTitleTextColor");
	}
	private _yAxisTitleTextColor: string = null;
	get yAxisTitleTextColor(): string {
		return this._yAxisTitleTextColor;
	}
	set yAxisTitleTextColor(value: string) {
		this._yAxisTitleTextColor = value;
		this.markDirty("YAxisTitleTextColor");
	}
	private _xAxisLabelTextStyle: string = null;
	get xAxisLabelTextStyle(): string {
		return this._xAxisLabelTextStyle;
	}
	set xAxisLabelTextStyle(value: string) {
		this._xAxisLabelTextStyle = value;
		this.markDirty("XAxisLabelTextStyle");
	}
	private _yAxisLabelTextStyle: string = null;
	get yAxisLabelTextStyle(): string {
		return this._yAxisLabelTextStyle;
	}
	set yAxisLabelTextStyle(value: string) {
		this._yAxisLabelTextStyle = value;
		this.markDirty("YAxisLabelTextStyle");
	}
	private _xAxisTitleTextStyle: string = null;
	get xAxisTitleTextStyle(): string {
		return this._xAxisTitleTextStyle;
	}
	set xAxisTitleTextStyle(value: string) {
		this._xAxisTitleTextStyle = value;
		this.markDirty("XAxisTitleTextStyle");
	}
	private _yAxisTitleTextStyle: string = null;
	get yAxisTitleTextStyle(): string {
		return this._yAxisTitleTextStyle;
	}
	set yAxisTitleTextStyle(value: string) {
		this._yAxisTitleTextStyle = value;
		this.markDirty("YAxisTitleTextStyle");
	}
	private _xAxisLabelRef: string = null;
	get xAxisLabelRef(): string {
		return this._xAxisLabelRef;
	}
	set xAxisLabelRef(value: string) {
		this._xAxisLabelRef = value;
		this.markDirty("XAxisLabelRef");
	}
	private _yAxisLabelRef: string = null;
	get yAxisLabelRef(): string {
		return this._yAxisLabelRef;
	}
	set yAxisLabelRef(value: string) {
		this._yAxisLabelRef = value;
		this.markDirty("YAxisLabelRef");
	}
	private _xAxisMajorStroke: string = null;
	get xAxisMajorStroke(): string {
		return this._xAxisMajorStroke;
	}
	set xAxisMajorStroke(value: string) {
		this._xAxisMajorStroke = value;
		this.markDirty("XAxisMajorStroke");
	}
	private _yAxisMajorStroke: string = null;
	get yAxisMajorStroke(): string {
		return this._yAxisMajorStroke;
	}
	set yAxisMajorStroke(value: string) {
		this._yAxisMajorStroke = value;
		this.markDirty("YAxisMajorStroke");
	}
	private _xAxisMajorStrokeThickness: number = 0;
	get xAxisMajorStrokeThickness(): number {
		return this._xAxisMajorStrokeThickness;
	}
	set xAxisMajorStrokeThickness(value: number) {
		this._xAxisMajorStrokeThickness = value;
		this.markDirty("XAxisMajorStrokeThickness");
	}
	private _yAxisMajorStrokeThickness: number = 0;
	get yAxisMajorStrokeThickness(): number {
		return this._yAxisMajorStrokeThickness;
	}
	set yAxisMajorStrokeThickness(value: number) {
		this._yAxisMajorStrokeThickness = value;
		this.markDirty("YAxisMajorStrokeThickness");
	}
	private _xAxisMinorStrokeThickness: number = 0;
	get xAxisMinorStrokeThickness(): number {
		return this._xAxisMinorStrokeThickness;
	}
	set xAxisMinorStrokeThickness(value: number) {
		this._xAxisMinorStrokeThickness = value;
		this.markDirty("XAxisMinorStrokeThickness");
	}
	private _yAxisMinorStrokeThickness: number = 0;
	get yAxisMinorStrokeThickness(): number {
		return this._yAxisMinorStrokeThickness;
	}
	set yAxisMinorStrokeThickness(value: number) {
		this._yAxisMinorStrokeThickness = value;
		this.markDirty("YAxisMinorStrokeThickness");
	}
	private _xAxisStrip: string = null;
	get xAxisStrip(): string {
		return this._xAxisStrip;
	}
	set xAxisStrip(value: string) {
		this._xAxisStrip = value;
		this.markDirty("XAxisStrip");
	}
	private _yAxisStrip: string = null;
	get yAxisStrip(): string {
		return this._yAxisStrip;
	}
	set yAxisStrip(value: string) {
		this._yAxisStrip = value;
		this.markDirty("YAxisStrip");
	}
	private _xAxisStroke: string = null;
	get xAxisStroke(): string {
		return this._xAxisStroke;
	}
	set xAxisStroke(value: string) {
		this._xAxisStroke = value;
		this.markDirty("XAxisStroke");
	}
	private _yAxisStroke: string = null;
	get yAxisStroke(): string {
		return this._yAxisStroke;
	}
	set yAxisStroke(value: string) {
		this._yAxisStroke = value;
		this.markDirty("YAxisStroke");
	}
	private _xAxisStrokeThickness: number = 0;
	get xAxisStrokeThickness(): number {
		return this._xAxisStrokeThickness;
	}
	set xAxisStrokeThickness(value: number) {
		this._xAxisStrokeThickness = value;
		this.markDirty("XAxisStrokeThickness");
	}
	private _yAxisStrokeThickness: number = 0;
	get yAxisStrokeThickness(): number {
		return this._yAxisStrokeThickness;
	}
	set yAxisStrokeThickness(value: number) {
		this._yAxisStrokeThickness = value;
		this.markDirty("YAxisStrokeThickness");
	}
	private _xAxisTickLength: number = 0;
	get xAxisTickLength(): number {
		return this._xAxisTickLength;
	}
	set xAxisTickLength(value: number) {
		this._xAxisTickLength = value;
		this.markDirty("XAxisTickLength");
	}
	private _yAxisTickLength: number = 0;
	get yAxisTickLength(): number {
		return this._yAxisTickLength;
	}
	set yAxisTickLength(value: number) {
		this._yAxisTickLength = value;
		this.markDirty("YAxisTickLength");
	}
	private _xAxisTickStroke: string = null;
	get xAxisTickStroke(): string {
		return this._xAxisTickStroke;
	}
	set xAxisTickStroke(value: string) {
		this._xAxisTickStroke = value;
		this.markDirty("XAxisTickStroke");
	}
	private _yAxisTickStroke: string = null;
	get yAxisTickStroke(): string {
		return this._yAxisTickStroke;
	}
	set yAxisTickStroke(value: string) {
		this._yAxisTickStroke = value;
		this.markDirty("YAxisTickStroke");
	}
	private _xAxisTickStrokeThickness: number = 0;
	get xAxisTickStrokeThickness(): number {
		return this._xAxisTickStrokeThickness;
	}
	set xAxisTickStrokeThickness(value: number) {
		this._xAxisTickStrokeThickness = value;
		this.markDirty("XAxisTickStrokeThickness");
	}
	private _yAxisTickStrokeThickness: number = 0;
	get yAxisTickStrokeThickness(): number {
		return this._yAxisTickStrokeThickness;
	}
	set yAxisTickStrokeThickness(value: number) {
		this._yAxisTickStrokeThickness = value;
		this.markDirty("YAxisTickStrokeThickness");
	}
	private _xAxisTitle: string = null;
	get xAxisTitle(): string {
		return this._xAxisTitle;
	}
	set xAxisTitle(value: string) {
		this._xAxisTitle = value;
		this.markDirty("XAxisTitle");
	}
	private _yAxisTitle: string = null;
	get yAxisTitle(): string {
		return this._yAxisTitle;
	}
	set yAxisTitle(value: string) {
		this._yAxisTitle = value;
		this.markDirty("YAxisTitle");
	}
	private _xAxisMinorStroke: string = null;
	get xAxisMinorStroke(): string {
		return this._xAxisMinorStroke;
	}
	set xAxisMinorStroke(value: string) {
		this._xAxisMinorStroke = value;
		this.markDirty("XAxisMinorStroke");
	}
	private _yAxisMinorStroke: string = null;
	get yAxisMinorStroke(): string {
		return this._yAxisMinorStroke;
	}
	set yAxisMinorStroke(value: string) {
		this._yAxisMinorStroke = value;
		this.markDirty("YAxisMinorStroke");
	}
	private _xAxisLabelAngle: number = 0;
	get xAxisLabelAngle(): number {
		return this._xAxisLabelAngle;
	}
	set xAxisLabelAngle(value: number) {
		this._xAxisLabelAngle = value;
		this.markDirty("XAxisLabelAngle");
	}
	private _yAxisLabelAngle: number = 0;
	get yAxisLabelAngle(): number {
		return this._yAxisLabelAngle;
	}
	set yAxisLabelAngle(value: number) {
		this._yAxisLabelAngle = value;
		this.markDirty("YAxisLabelAngle");
	}
	private _xAxisExtent: number = 0;
	get xAxisExtent(): number {
		return this._xAxisExtent;
	}
	set xAxisExtent(value: number) {
		this._xAxisExtent = value;
		this.markDirty("XAxisExtent");
	}
	private _yAxisExtent: number = 0;
	get yAxisExtent(): number {
		return this._yAxisExtent;
	}
	set yAxisExtent(value: number) {
		this._yAxisExtent = value;
		this.markDirty("YAxisExtent");
	}
	private _xAxisTitleAngle: number = 0;
	get xAxisTitleAngle(): number {
		return this._xAxisTitleAngle;
	}
	set xAxisTitleAngle(value: number) {
		this._xAxisTitleAngle = value;
		this.markDirty("XAxisTitleAngle");
	}
	private _yAxisTitleAngle: number = 0;
	get yAxisTitleAngle(): number {
		return this._yAxisTitleAngle;
	}
	set yAxisTitleAngle(value: number) {
		this._yAxisTitleAngle = value;
		this.markDirty("YAxisTitleAngle");
	}
	private _xAxisInverted: boolean = false;
	get xAxisInverted(): boolean {
		return this._xAxisInverted;
	}
	set xAxisInverted(value: boolean) {
		this._xAxisInverted = value;
		this.markDirty("XAxisInverted");
	}
	private _yAxisInverted: boolean = false;
	get yAxisInverted(): boolean {
		return this._yAxisInverted;
	}
	set yAxisInverted(value: boolean) {
		this._yAxisInverted = value;
		this.markDirty("YAxisInverted");
	}
	private _xAxisTitleAlignment: string = null;
	get xAxisTitleAlignment(): string {
		return this._xAxisTitleAlignment;
	}
	set xAxisTitleAlignment(value: string) {
		this._xAxisTitleAlignment = value;
		this.markDirty("XAxisTitleAlignment");
	}
	private _yAxisTitleAlignment: string = null;
	get yAxisTitleAlignment(): string {
		return this._yAxisTitleAlignment;
	}
	set yAxisTitleAlignment(value: string) {
		this._yAxisTitleAlignment = value;
		this.markDirty("YAxisTitleAlignment");
	}
	private _xAxisLabelHorizontalAlignment: string = null;
	get xAxisLabelHorizontalAlignment(): string {
		return this._xAxisLabelHorizontalAlignment;
	}
	set xAxisLabelHorizontalAlignment(value: string) {
		this._xAxisLabelHorizontalAlignment = value;
		this.markDirty("XAxisLabelHorizontalAlignment");
	}
	private _yAxisLabelHorizontalAlignment: string = null;
	get yAxisLabelHorizontalAlignment(): string {
		return this._yAxisLabelHorizontalAlignment;
	}
	set yAxisLabelHorizontalAlignment(value: string) {
		this._yAxisLabelHorizontalAlignment = value;
		this.markDirty("YAxisLabelHorizontalAlignment");
	}
	private _xAxisLabelVerticalAlignment: string = null;
	get xAxisLabelVerticalAlignment(): string {
		return this._xAxisLabelVerticalAlignment;
	}
	set xAxisLabelVerticalAlignment(value: string) {
		this._xAxisLabelVerticalAlignment = value;
		this.markDirty("XAxisLabelVerticalAlignment");
	}
	private _yAxisLabelVerticalAlignment: string = null;
	get yAxisLabelVerticalAlignment(): string {
		return this._yAxisLabelVerticalAlignment;
	}
	set yAxisLabelVerticalAlignment(value: string) {
		this._yAxisLabelVerticalAlignment = value;
		this.markDirty("YAxisLabelVerticalAlignment");
	}
	private _xAxisLabelVisibility: string = null;
	get xAxisLabelVisibility(): string {
		return this._xAxisLabelVisibility;
	}
	set xAxisLabelVisibility(value: string) {
		this._xAxisLabelVisibility = value;
		this.markDirty("XAxisLabelVisibility");
	}
	private _yAxisLabelVisibility: string = null;
	get yAxisLabelVisibility(): string {
		return this._yAxisLabelVisibility;
	}
	set yAxisLabelVisibility(value: string) {
		this._yAxisLabelVisibility = value;
		this.markDirty("YAxisLabelVisibility");
	}
	private _yAxisLabelLocation: string = null;
	get yAxisLabelLocation(): string {
		return this._yAxisLabelLocation;
	}
	set yAxisLabelLocation(value: string) {
		this._yAxisLabelLocation = value;
		this.markDirty("YAxisLabelLocation");
	}
}


