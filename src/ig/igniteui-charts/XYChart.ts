/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DomainChart } from "./DomainChart";
import { Base, IEnumerable, IEnumerable_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, enumGetBox, fromEnum, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { VerticalAlignment, VerticalAlignment_$type } from "igniteui-core/VerticalAlignment";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { AxisLabelsLocation, AxisLabelsLocation_$type } from "./AxisLabelsLocation";
import { Axis } from "./Axis";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { TitleSettings } from "./TitleSettings";
import { DataSeries } from "igniteui-core/DataSeries";
import { DataSeriesType, DataSeriesType_$type } from "igniteui-core/DataSeriesType";
import { Series } from "./Series";
import { Debug } from "igniteui-core/Debug";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { SeriesViewer } from "./SeriesViewer";
import { List$1 } from "igniteui-core/List$1";
import { ScalerParams } from "./ScalerParams";
import { XamDataChart } from "./XamDataChart";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { DataSeriesMemberPathHint } from "igniteui-core/DataSeriesMemberPathHint";
import { DataSeriesIntent } from "igniteui-core/DataSeriesIntent";

/**
 * @hidden 
 */
export abstract class XYChart extends DomainChart {
	static $t: Type = markType(XYChart, 'XYChart', (<any>DomainChart).$type);
	provideContainer(container: any): void {
		if (container != null) {
			let xAxis: Axis = this.getXAxis();
			let yAxis: Axis = this.getYAxis();
			if (xAxis != null) {
				xAxis.provideRenderer(<DomRenderer><any>container);
			}
			if (yAxis != null) {
				yAxis.provideRenderer(<DomRenderer><any>container);
			}
		}
		super.provideContainer(container);
	}
	protected initializeDefaultsOverride(): void {
		super.initializeDefaultsOverride();
		let xAxis: Axis = this.getXAxis();
		let yAxis: Axis = this.getYAxis();
		if (xAxis != null && xAxis.labelSettings != null) {
			this.xAxisLabelTextColor = xAxis.labelSettings.textColor;
		}
		if (yAxis != null && yAxis.labelSettings != null) {
			this.yAxisLabelTextColor = yAxis.labelSettings.textColor;
		}
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, oldValue, newValue);
		switch (propertyName) {
			case XYChart.xAxisLabelLeftMarginPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.leftMargin = this.xAxisLabelLeftMargin);
			break;

			case XYChart.xAxisLabelTopMarginPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.topMargin = this.xAxisLabelTopMargin);
			break;

			case XYChart.xAxisLabelRightMarginPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.rightMargin = this.xAxisLabelRightMargin);
			break;

			case XYChart.xAxisLabelBottomMarginPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.bottomMargin = this.xAxisLabelBottomMargin);
			break;

			case XYChart.yAxisLabelLeftMarginPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.leftMargin = this.yAxisLabelLeftMargin);
			break;

			case XYChart.yAxisLabelTopMarginPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.topMargin = this.yAxisLabelTopMargin);
			break;

			case XYChart.yAxisLabelRightMarginPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.rightMargin = this.yAxisLabelRightMargin);
			break;

			case XYChart.yAxisLabelBottomMarginPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.bottomMargin = this.yAxisLabelBottomMargin);
			break;

			case XYChart.xAxisLabelTextColorPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.textColor = this.xAxisLabelTextColor);
			break;

			case XYChart.yAxisLabelTextColorPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.textColor = this.yAxisLabelTextColor);
			break;

			case XYChart.xAxisTitleMarginPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.margin = this.xAxisTitleMargin);
			break;

			case XYChart.yAxisTitleMarginPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.margin = this.yAxisTitleMargin);
			break;

			case XYChart.xAxisTitleLeftMarginPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.leftMargin = this.xAxisTitleLeftMargin);
			break;

			case XYChart.yAxisTitleLeftMarginPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.leftMargin = this.yAxisTitleLeftMargin);
			break;

			case XYChart.xAxisTitleTopMarginPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.topMargin = this.xAxisTitleTopMargin);
			break;

			case XYChart.yAxisTitleTopMarginPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.topMargin = this.yAxisTitleTopMargin);
			break;

			case XYChart.xAxisTitleRightMarginPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.rightMargin = this.xAxisTitleRightMargin);
			break;

			case XYChart.yAxisTitleRightMarginPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.rightMargin = this.yAxisTitleRightMargin);
			break;

			case XYChart.xAxisTitleBottomMarginPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.bottomMargin = this.xAxisTitleBottomMargin);
			break;

			case XYChart.yAxisTitleBottomMarginPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.bottomMargin = this.yAxisTitleBottomMargin);
			break;

			case XYChart.xAxisTitleTextColorPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.textColor = this.xAxisTitleTextColor);
			break;

			case XYChart.yAxisTitleTextColorPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.textColor = this.yAxisTitleTextColor);
			break;

			case XYChart.xAxisFormatLabelPropertyName:
			this.onXAxis((axis: Axis) => axis.formatLabel = this.xAxisFormatLabel);
			break;

			case XYChart.yAxisFormatLabelPropertyName:
			this.onYAxis((axis: Axis) => axis.formatLabel = this.yAxisFormatLabel);
			break;

		}

	}
	private static readonly xAxisFormatLabelPropertyName: string = "XAxisFormatLabel";
	private _xAxisFormatLabel: (item: any) => string = null;
	get xAxisFormatLabel(): (item: any) => string {
		return this._xAxisFormatLabel;
	}
	set xAxisFormatLabel(value: (item: any) => string) {
		let oldValue: (item: any) => string = this.xAxisFormatLabel;
		if (value != oldValue) {
			this._xAxisFormatLabel = value;
			this.onPropertyUpdated(XYChart.xAxisFormatLabelPropertyName, oldValue, this.xAxisFormatLabel);
		}
	}
	private static readonly yAxisFormatLabelPropertyName: string = "YAxisFormatLabel";
	private _yAxisFormatLabel: (item: any) => string = null;
	get yAxisFormatLabel(): (item: any) => string {
		return this._yAxisFormatLabel;
	}
	set yAxisFormatLabel(value: (item: any) => string) {
		let oldValue: (item: any) => string = this.yAxisFormatLabel;
		if (value != oldValue) {
			this._yAxisFormatLabel = value;
			this.onPropertyUpdated(XYChart.yAxisFormatLabelPropertyName, oldValue, this.yAxisFormatLabel);
		}
	}
	private static readonly xAxisLabelLeftMarginPropertyName: string = "XAxisLabelLeftMargin";
	private _xAxisLabelLeftMargin: number = 0;
	get xAxisLabelLeftMargin(): number {
		return this._xAxisLabelLeftMargin;
	}
	set xAxisLabelLeftMargin(value: number) {
		let oldValue: number = this.xAxisLabelLeftMargin;
		if (value != oldValue) {
			this._xAxisLabelLeftMargin = value;
			this.onPropertyUpdated(XYChart.xAxisLabelLeftMarginPropertyName, oldValue, this.xAxisLabelLeftMargin);
		}
	}
	private static readonly xAxisLabelTopMarginPropertyName: string = "XAxisLabelTopMargin";
	private _xAxisLabelTopMargin: number = 5;
	get xAxisLabelTopMargin(): number {
		return this._xAxisLabelTopMargin;
	}
	set xAxisLabelTopMargin(value: number) {
		let oldValue: number = this.xAxisLabelTopMargin;
		if (value != oldValue) {
			this._xAxisLabelTopMargin = value;
			this.onPropertyUpdated(XYChart.xAxisLabelTopMarginPropertyName, oldValue, this.xAxisLabelTopMargin);
		}
	}
	private static readonly xAxisLabelRightMarginPropertyName: string = "XAxisLabelRightMargin";
	private _xAxisLabelRightMargin: number = 0;
	get xAxisLabelRightMargin(): number {
		return this._xAxisLabelRightMargin;
	}
	set xAxisLabelRightMargin(value: number) {
		let oldValue: number = this.xAxisLabelRightMargin;
		if (value != oldValue) {
			this._xAxisLabelRightMargin = value;
			this.onPropertyUpdated(XYChart.xAxisLabelRightMarginPropertyName, oldValue, this.xAxisLabelRightMargin);
		}
	}
	private static readonly xAxisLabelBottomMarginPropertyName: string = "XAxisLabelBottomMargin";
	private _xAxisLabelBottomMargin: number = 5;
	get xAxisLabelBottomMargin(): number {
		return this._xAxisLabelBottomMargin;
	}
	set xAxisLabelBottomMargin(value: number) {
		let oldValue: number = this.xAxisLabelBottomMargin;
		if (value != oldValue) {
			this._xAxisLabelBottomMargin = value;
			this.onPropertyUpdated(XYChart.xAxisLabelBottomMarginPropertyName, oldValue, this.xAxisLabelBottomMargin);
		}
	}
	private static readonly yAxisLabelLeftMarginPropertyName: string = "YAxisLabelLeftMargin";
	private _yAxisLabelLeftMargin: number = 5;
	get yAxisLabelLeftMargin(): number {
		return this._yAxisLabelLeftMargin;
	}
	set yAxisLabelLeftMargin(value: number) {
		let oldValue: number = this.yAxisLabelLeftMargin;
		if (value != oldValue) {
			this._yAxisLabelLeftMargin = value;
			this.onPropertyUpdated(XYChart.yAxisLabelLeftMarginPropertyName, oldValue, this.yAxisLabelLeftMargin);
		}
	}
	private static readonly yAxisLabelTopMarginPropertyName: string = "YAxisLabelTopMargin";
	private _yAxisLabelTopMargin: number = 0;
	get yAxisLabelTopMargin(): number {
		return this._yAxisLabelTopMargin;
	}
	set yAxisLabelTopMargin(value: number) {
		let oldValue: number = this.yAxisLabelTopMargin;
		if (value != oldValue) {
			this._yAxisLabelTopMargin = value;
			this.onPropertyUpdated(XYChart.yAxisLabelTopMarginPropertyName, oldValue, this.yAxisLabelTopMargin);
		}
	}
	private static readonly yAxisLabelRightMarginPropertyName: string = "YAxisLabelRightMargin";
	private _yAxisLabelRightMargin: number = 5;
	get yAxisLabelRightMargin(): number {
		return this._yAxisLabelRightMargin;
	}
	set yAxisLabelRightMargin(value: number) {
		let oldValue: number = this.yAxisLabelRightMargin;
		if (value != oldValue) {
			this._yAxisLabelRightMargin = value;
			this.onPropertyUpdated(XYChart.yAxisLabelRightMarginPropertyName, oldValue, this.yAxisLabelRightMargin);
		}
	}
	private static readonly yAxisLabelBottomMarginPropertyName: string = "YAxisLabelBottomMargin";
	private _yAxisLabelBottomMargin: number = 0;
	get yAxisLabelBottomMargin(): number {
		return this._yAxisLabelBottomMargin;
	}
	set yAxisLabelBottomMargin(value: number) {
		let oldValue: number = this.yAxisLabelBottomMargin;
		if (value != oldValue) {
			this._yAxisLabelBottomMargin = value;
			this.onPropertyUpdated(XYChart.yAxisLabelBottomMarginPropertyName, oldValue, this.yAxisLabelBottomMargin);
		}
	}
	private static readonly xAxisLabelTextColorPropertyName: string = "XAxisLabelTextColor";
	private _xAxisLabelTextColor: Brush = null;
	get xAxisLabelTextColor(): Brush {
		return this._xAxisLabelTextColor;
	}
	set xAxisLabelTextColor(value: Brush) {
		let oldValue: Brush = this.xAxisLabelTextColor;
		if (value != oldValue) {
			this._xAxisLabelTextColor = value;
			this.onPropertyUpdated(XYChart.xAxisLabelTextColorPropertyName, oldValue, this.xAxisLabelTextColor);
		}
	}
	private static readonly yAxisLabelTextColorPropertyName: string = "YAxisLabelTextColor";
	private _yAxisLabelTextColor: Brush = null;
	get yAxisLabelTextColor(): Brush {
		return this._yAxisLabelTextColor;
	}
	set yAxisLabelTextColor(value: Brush) {
		let oldValue: Brush = this.yAxisLabelTextColor;
		if (value != oldValue) {
			this._yAxisLabelTextColor = value;
			this.onPropertyUpdated(XYChart.yAxisLabelTextColorPropertyName, oldValue, this.yAxisLabelTextColor);
		}
	}
	private static readonly xAxisTitleMarginPropertyName: string = "XAxisTitleMargin";
	private _xAxisTitleMargin: number = 0;
	get xAxisTitleMargin(): number {
		return this._xAxisTitleMargin;
	}
	set xAxisTitleMargin(value: number) {
		let oldValue: number = this.xAxisTitleMargin;
		if (value != oldValue) {
			this._xAxisTitleMargin = value;
			this.onPropertyUpdated(XYChart.xAxisTitleMarginPropertyName, oldValue, this.xAxisTitleMargin);
		}
	}
	private static readonly yAxisTitleMarginPropertyName: string = "YAxisTitleMargin";
	private _yAxisTitleMargin: number = 0;
	get yAxisTitleMargin(): number {
		return this._yAxisTitleMargin;
	}
	set yAxisTitleMargin(value: number) {
		let oldValue: number = this.yAxisTitleMargin;
		if (value != oldValue) {
			this._yAxisTitleMargin = value;
			this.onPropertyUpdated(XYChart.yAxisTitleMarginPropertyName, oldValue, this.yAxisTitleMargin);
		}
	}
	private static readonly xAxisTitleLeftMarginPropertyName: string = "XAxisTitleLeftMargin";
	private _xAxisTitleLeftMargin: number = NaN;
	get xAxisTitleLeftMargin(): number {
		return this._xAxisTitleLeftMargin;
	}
	set xAxisTitleLeftMargin(value: number) {
		let oldValue: number = this.xAxisTitleLeftMargin;
		if (value != oldValue) {
			this._xAxisTitleLeftMargin = value;
			this.onPropertyUpdated(XYChart.xAxisTitleLeftMarginPropertyName, oldValue, this.xAxisTitleLeftMargin);
		}
	}
	private static readonly yAxisTitleLeftMarginPropertyName: string = "YAxisTitleLeftMargin";
	private _yAxisTitleLeftMargin: number = NaN;
	get yAxisTitleLeftMargin(): number {
		return this._yAxisTitleLeftMargin;
	}
	set yAxisTitleLeftMargin(value: number) {
		let oldValue: number = this.yAxisTitleLeftMargin;
		if (value != oldValue) {
			this._yAxisTitleLeftMargin = value;
			this.onPropertyUpdated(XYChart.yAxisTitleLeftMarginPropertyName, oldValue, this.yAxisTitleLeftMargin);
		}
	}
	private static readonly xAxisTitleTopMarginPropertyName: string = "XAxisTitleTopMargin";
	private _xAxisTitleTopMargin: number = NaN;
	get xAxisTitleTopMargin(): number {
		return this._xAxisTitleTopMargin;
	}
	set xAxisTitleTopMargin(value: number) {
		let oldValue: number = this.xAxisTitleTopMargin;
		if (value != oldValue) {
			this._xAxisTitleTopMargin = value;
			this.onPropertyUpdated(XYChart.xAxisTitleTopMarginPropertyName, oldValue, this.xAxisTitleTopMargin);
		}
	}
	private static readonly yAxisTitleTopMarginPropertyName: string = "YAxisTitleTopMargin";
	private _yAxisTitleTopMargin: number = NaN;
	get yAxisTitleTopMargin(): number {
		return this._yAxisTitleTopMargin;
	}
	set yAxisTitleTopMargin(value: number) {
		let oldValue: number = this.yAxisTitleTopMargin;
		if (value != oldValue) {
			this._yAxisTitleTopMargin = value;
			this.onPropertyUpdated(XYChart.yAxisTitleTopMarginPropertyName, oldValue, this.yAxisTitleTopMargin);
		}
	}
	private static readonly xAxisTitleRightMarginPropertyName: string = "XAxisTitleRightMargin";
	private _xAxisTitleRightMargin: number = NaN;
	get xAxisTitleRightMargin(): number {
		return this._xAxisTitleRightMargin;
	}
	set xAxisTitleRightMargin(value: number) {
		let oldValue: number = this.xAxisTitleRightMargin;
		if (value != oldValue) {
			this._xAxisTitleRightMargin = value;
			this.onPropertyUpdated(XYChart.xAxisTitleRightMarginPropertyName, oldValue, this.xAxisTitleRightMargin);
		}
	}
	private static readonly yAxisTitleRightMarginPropertyName: string = "YAxisTitleRightMargin";
	private _yAxisTitleRightMargin: number = NaN;
	get yAxisTitleRightMargin(): number {
		return this._yAxisTitleRightMargin;
	}
	set yAxisTitleRightMargin(value: number) {
		let oldValue: number = this.yAxisTitleRightMargin;
		if (value != oldValue) {
			this._yAxisTitleRightMargin = value;
			this.onPropertyUpdated(XYChart.yAxisTitleRightMarginPropertyName, oldValue, this.yAxisTitleRightMargin);
		}
	}
	private static readonly xAxisTitleBottomMarginPropertyName: string = "XAxisTitleBottomMargin";
	private _xAxisTitleBottomMargin: number = NaN;
	get xAxisTitleBottomMargin(): number {
		return this._xAxisTitleBottomMargin;
	}
	set xAxisTitleBottomMargin(value: number) {
		let oldValue: number = this.xAxisTitleBottomMargin;
		if (value != oldValue) {
			this._xAxisTitleBottomMargin = value;
			this.onPropertyUpdated(XYChart.xAxisTitleBottomMarginPropertyName, oldValue, this.xAxisTitleBottomMargin);
		}
	}
	private static readonly yAxisTitleBottomMarginPropertyName: string = "YAxisTitleBottomMargin";
	private _yAxisTitleBottomMargin: number = NaN;
	get yAxisTitleBottomMargin(): number {
		return this._yAxisTitleBottomMargin;
	}
	set yAxisTitleBottomMargin(value: number) {
		let oldValue: number = this.yAxisTitleBottomMargin;
		if (value != oldValue) {
			this._yAxisTitleBottomMargin = value;
			this.onPropertyUpdated(XYChart.yAxisTitleBottomMarginPropertyName, oldValue, this.yAxisTitleBottomMargin);
		}
	}
	private static readonly xAxisTitleTextColorPropertyName: string = "XAxisTitleTextColor";
	private _xAxisTitleTextColor: Brush = null;
	get xAxisTitleTextColor(): Brush {
		return this._xAxisTitleTextColor;
	}
	set xAxisTitleTextColor(value: Brush) {
		let oldValue: Brush = this.xAxisTitleTextColor;
		if (value != oldValue) {
			this._xAxisTitleTextColor = value;
			this.onPropertyUpdated(XYChart.xAxisTitleTextColorPropertyName, oldValue, this.xAxisTitleTextColor);
		}
	}
	private static readonly yAxisTitleTextColorPropertyName: string = "YAxisTitleTextColor";
	private _yAxisTitleTextColor: Brush = null;
	get yAxisTitleTextColor(): Brush {
		return this._yAxisTitleTextColor;
	}
	set yAxisTitleTextColor(value: Brush) {
		let oldValue: Brush = this.yAxisTitleTextColor;
		if (value != oldValue) {
			this._yAxisTitleTextColor = value;
			this.onPropertyUpdated(XYChart.yAxisTitleTextColorPropertyName, oldValue, this.yAxisTitleTextColor);
		}
	}
	protected propertyUpdatedOverridePlatform(propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverridePlatform(propertyName, oldValue, newValue);
		switch (propertyName) {
			case XYChart.xAxisLabelTextStylePropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.textStyle = this.xAxisLabelTextStyle);
			break;

			case XYChart.yAxisLabelTextStylePropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.textStyle = this.yAxisLabelTextStyle);
			break;

			case XYChart.xAxisTitleTextStylePropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.textStyle = this.xAxisTitleTextStyle);
			break;

			case XYChart.yAxisTitleTextStylePropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.textStyle = this.yAxisTitleTextStyle);
			break;

		}

	}
	private static readonly xAxisLabelTextStylePropertyName: string = "XAxisLabelTextStyle";
	private _xAxisLabelTextStyle: string = null;
	get xAxisLabelTextStyle(): string {
		return this._xAxisLabelTextStyle;
	}
	set xAxisLabelTextStyle(value: string) {
		let oldValue: string = this.xAxisLabelTextStyle;
		if (value != oldValue) {
			this._xAxisLabelTextStyle = value;
			this.onPropertyUpdated(XYChart.xAxisLabelTextStylePropertyName, oldValue, this.xAxisLabelTextStyle);
		}
	}
	private static readonly yAxisLabelTextStylePropertyName: string = "YAxisLabelTextStyle";
	private _yAxisLabelTextStyle: string = null;
	get yAxisLabelTextStyle(): string {
		return this._yAxisLabelTextStyle;
	}
	set yAxisLabelTextStyle(value: string) {
		let oldValue: string = this.yAxisLabelTextStyle;
		if (value != oldValue) {
			this._yAxisLabelTextStyle = value;
			this.onPropertyUpdated(XYChart.yAxisLabelTextStylePropertyName, oldValue, this.yAxisLabelTextStyle);
		}
	}
	private static readonly xAxisTitleTextStylePropertyName: string = "XAxisTitleTextStyle";
	private _xAxisTitleTextStyle: string = null;
	get xAxisTitleTextStyle(): string {
		return this._xAxisTitleTextStyle;
	}
	set xAxisTitleTextStyle(value: string) {
		let oldValue: string = this.xAxisTitleTextStyle;
		if (value != oldValue) {
			this._xAxisTitleTextStyle = value;
			this.onPropertyUpdated(XYChart.xAxisTitleTextStylePropertyName, oldValue, this.xAxisTitleTextStyle);
		}
	}
	private static readonly yAxisTitleTextStylePropertyName: string = "YAxisTitleTextStyle";
	private _yAxisTitleTextStyle: string = null;
	get yAxisTitleTextStyle(): string {
		return this._yAxisTitleTextStyle;
	}
	set yAxisTitleTextStyle(value: string) {
		let oldValue: string = this.yAxisTitleTextStyle;
		if (value != oldValue) {
			this._yAxisTitleTextStyle = value;
			this.onPropertyUpdated(XYChart.yAxisTitleTextStylePropertyName, oldValue, this.yAxisTitleTextStyle);
		}
	}
	private initializeXAxisOverridePlatform(xAxis: Axis): void {
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.leftMargin = this.xAxisLabelLeftMargin);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.topMargin = this.xAxisLabelTopMargin);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.rightMargin = this.xAxisLabelRightMargin);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.bottomMargin = this.xAxisLabelBottomMargin);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.textColor = this.xAxisLabelTextColor);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.textColor = this.xAxisTitleTextColor);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.leftMargin = this.xAxisTitleLeftMargin);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.topMargin = this.xAxisTitleTopMargin);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.rightMargin = this.xAxisTitleRightMargin);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.bottomMargin = this.xAxisTitleBottomMargin);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.textStyle = this.xAxisLabelTextStyle);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.textStyle = this.xAxisTitleTextStyle);
	}
	private initializeYAxisOverridePlatform(yAxis: Axis): void {
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.leftMargin = this.yAxisLabelLeftMargin);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.topMargin = this.yAxisLabelTopMargin);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.rightMargin = this.yAxisLabelRightMargin);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.bottomMargin = this.yAxisLabelBottomMargin);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.textColor = this.yAxisLabelTextColor);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.textColor = this.yAxisTitleTextColor);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.leftMargin = this.yAxisTitleLeftMargin);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.topMargin = this.yAxisTitleTopMargin);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.rightMargin = this.yAxisTitleRightMargin);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.bottomMargin = this.yAxisTitleBottomMargin);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.textStyle = this.yAxisLabelTextStyle);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.textStyle = this.yAxisTitleTextStyle);
	}
	protected repopulateSeriesBasedOn(ds: DataSeries): void {
		let seriesType = this.getSeriesType(ds);
		let series = this.createSeries(ds, seriesType);
		if (series == null) {
			Debug.fail("Not supported ChartType: " + enumGetBox<DataSeriesType>(DataSeriesType_$type, seriesType));
			return;
		}
		series.itemsSource = <IEnumerable><any>ds.data;
		series.name = this.getSeriesName(ds);
		series.title = this.getSeriesTitle(ds, seriesType);
		this.dataChart.series.add(series);
	}
	protected abstract getXAxis(): Axis;
	protected abstract getYAxis(): Axis;
	protected onXAxis(action: (arg1: Axis) => void): void {
		this.onXAxis1(action, null);
	}
	protected onXAxis1(action: (arg1: Axis) => void, propertyName: string): void {
		action(this.getXAxis());
	}
	protected onYAxis1(action: (arg1: Axis) => void, subCharts: boolean): void {
		action(this.getYAxis());
	}
	protected onYAxis(action: (arg1: Axis) => void): void {
		this.onYAxis1(action, true);
	}
	protected onXAxisTitle(action: (arg1: TitleSettings) => void): void {
		this.applyTitleSetting(this.getXAxis(), action);
	}
	protected onYAxisTitle(action: (arg1: TitleSettings) => void): void {
		this.applyTitleSetting(this.getYAxis(), action);
	}
	protected onYAxisLabel(action: (arg1: AxisLabelSettings) => void): void {
		this.applyLabelSetting(this.getYAxis(), action);
	}
	protected onXAxisLabel(action: (arg1: AxisLabelSettings) => void): void {
		this.applyLabelSetting(this.getXAxis(), action);
	}
	getScaledValueX(unscaledValue: number): number {
		let xAxis: Axis = this.getXAxis();
		return xAxis.getScaledValue(unscaledValue, new ScalerParams(1, this.windowRect, this.viewport, xAxis.isInverted));
	}
	getUnscaledValueX(scaledValue: number): number {
		let xAxis: Axis = this.getXAxis();
		return xAxis.getUnscaledValue(scaledValue, new ScalerParams(1, this.windowRect, this.viewport, xAxis.isInverted));
	}
	getScaledValueY(unscaledValue: number): number {
		let yAxis: Axis = this.getYAxis();
		return yAxis.getScaledValue(unscaledValue, new ScalerParams(1, this.windowRect, this.viewport, yAxis.isInverted));
	}
	getUnscaledValueY(scaledValue: number): number {
		let yAxis: Axis = this.getYAxis();
		return yAxis.getUnscaledValue(scaledValue, new ScalerParams(1, this.windowRect, this.viewport, yAxis.isInverted));
	}
	protected releaseChart(chart: XamDataChart): void {
		super.releaseChart(chart);
		if (chart == null) {
			return;
		}
		if (chart.axes != null) {
			let xAxis: Axis = this.getXAxis();
			let yAxis: Axis = this.getYAxis();
			if (chart.axes.contains(xAxis)) {
				chart.axes.remove(xAxis);
			}
			if (chart.axes.contains(yAxis)) {
				chart.axes.remove(yAxis);
			}
		}
	}
	static getXAxisLabel(xAxis: CategoryAxisBase, dataSeries: IEnumerable$1<DataSeries>): string {
		for (let ds of fromEnum<DataSeries>(dataSeries)) {
			let labelHint = ds.findMatchingHint(DataSeriesIntent.AxisLabelValue);
			if (labelHint != null) {
				let hintPath = labelHint.path;
				return hintPath;
			}
		}
		return null;
	}
	protected initializeChart(dataChart: XamDataChart): void {
		super.initializeChart(dataChart);
		if (dataChart == this.dataChart) {
			this.dataChart.axes.add(this.getXAxis());
			this.dataChart.axes.add(this.getYAxis());
		}
	}
	protected initializeXAxis(xAxis: Axis): void {
		if (xAxis != null && this.container != null && xAxis.domRenderer == null) {
			xAxis.provideRenderer(<DomRenderer><any>this.container);
		}
		xAxis.majorStroke = this.xAxisMajorStroke;
		xAxis.majorStrokeThickness = this.xAxisMajorStrokeThickness;
		xAxis.minorStroke = this.xAxisMinorStroke;
		xAxis.minorStrokeThickness = this.xAxisMinorStrokeThickness;
		xAxis.stroke = this.xAxisStroke;
		xAxis.strokeThickness = this.xAxisStrokeThickness;
		xAxis.strip = this.xAxisStrip;
		xAxis.tickLength = this.xAxisTickLength;
		xAxis.tickStroke = this.xAxisTickStroke;
		xAxis.tickStrokeThickness = this.xAxisTickStrokeThickness;
		xAxis.useEnhancedIntervalManagement = true;
		let main: boolean = xAxis == this.getXAxis();
		if (main) {
			xAxis.title = this.xAxisTitle;
		}
		xAxis.label = this.xAxisLabel;
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.angle = this.xAxisLabelAngle);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => {
			if (settings.extent != this.xAxisExtent) {
				settings.extent = this.xAxisExtent;
			}
		});
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.horizontalAlignment = this.xAxisLabelHorizontalAlignment);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.verticalAlignment = this.xAxisLabelVerticalAlignment);
		this.applyLabelSetting(xAxis, (settings: AxisLabelSettings) => settings.visibility = this.xAxisLabelVisibility);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.horizontalAlignment = this.xAxisTitleAlignment);
		this.applyTitleSetting(xAxis, (settings: TitleSettings) => settings.angle = this.xAxisTitleAngle);
		this.initializeXAxisOverridePlatform(xAxis);
	}
	protected initializeYAxis(yAxis: Axis): void {
		if (yAxis == null) {
			return;
		}
		if (this.container != null && yAxis.domRenderer == null) {
			yAxis.provideRenderer(<DomRenderer><any>this.container);
		}
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.angle = this.yAxisLabelAngle);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => {
			if (settings.extent != this.yAxisExtent) {
				settings.extent = this.yAxisExtent;
			}
		});
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.horizontalAlignment = this.yAxisLabelHorizontalAlignment);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.verticalAlignment = this.yAxisLabelVerticalAlignment);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.visibility = this.yAxisLabelVisibility);
		this.applyLabelSetting(yAxis, (settings: AxisLabelSettings) => settings.location = this.yAxisLabelLocation);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.verticalAlignment = this.yAxisTitleAlignment);
		this.applyTitleSetting(yAxis, (settings: TitleSettings) => settings.angle = this.yAxisTitleAngle);
		yAxis.majorStroke = this.yAxisMajorStroke;
		yAxis.majorStrokeThickness = this.yAxisMajorStrokeThickness;
		yAxis.minorStroke = this.yAxisMinorStroke;
		yAxis.minorStrokeThickness = this.yAxisMinorStrokeThickness;
		yAxis.stroke = this.yAxisStroke;
		yAxis.strokeThickness = this.yAxisStrokeThickness;
		yAxis.strip = this.yAxisStrip;
		yAxis.tickLength = this.yAxisTickLength;
		yAxis.tickStroke = this.yAxisTickStroke;
		yAxis.tickStrokeThickness = this.yAxisTickStrokeThickness;
		let main: boolean = yAxis == this.getYAxis();
		if (main) {
			yAxis.title = this.yAxisTitle;
		}
		this.initializeYAxisOverridePlatform(yAxis);
	}
	protected initializeAxes(): void {
		super.initializeAxes();
		this.initializeXAxis(this.getXAxis());
		this.initializeYAxis(this.getYAxis());
	}
	protected applyLabelSetting(axis: Axis, action: (arg1: AxisLabelSettings) => void): void {
		if (axis == null) {
			return;
		}
		if (axis.labelSettings == null) {
			axis.labelSettings = new AxisLabelSettings();
			axis.labelSettings.angle = axis.getDefaultLabelSettingsAngle();
			axis.labelSettings.bottomMargin = axis.getDefaultLabelSettingsBottomMargin();
			axis.labelSettings.leftMargin = axis.getDefaultLabelSettingsLeftMargin();
			axis.labelSettings.rightMargin = axis.getDefaultLabelSettingsRightMargin();
			axis.labelSettings.topMargin = axis.getDefaultLabelSettingsTopMargin();
			axis.labelSettings.horizontalAlignment = axis.getDefaultLabelSettingsHorizontalAlignment();
			axis.labelSettings.location = axis.getDefaultLabelSettingsLocation();
			axis.labelSettings.verticalAlignment = axis.getDefaultLabelSettingsVerticalAlignment();
		}
		action(axis.labelSettings);
	}
	protected applyTitleSetting(axis: Axis, action: (arg1: TitleSettings) => void): void {
		if (axis == null) {
			return;
		}
		if (axis.titleSettings == null) {
			axis.titleSettings = new TitleSettings();
			axis.titleSettings.bottomMargin = axis.getDefaultTitleSettingsBottomMargin();
			axis.titleSettings.leftMargin = axis.getDefaultTitleSettingsLeftMargin();
			axis.titleSettings.rightMargin = axis.getDefaultTitleSettingsRightMargin();
			axis.titleSettings.topMargin = axis.getDefaultTitleSettingsTopMargin();
			axis.titleSettings.location = axis.getDefaultTitleSettingsLocation();
			axis.titleSettings.angle = axis.getDefaultTitleSettingsAngle();
			axis.titleSettings.horizontalAlignment = axis.getDefaultTitleSettingsHorizontalAlignment();
			axis.titleSettings.verticalAlignment = axis.getDefaultTitleSettingsVerticalAlignment();
		}
		action(axis.titleSettings);
	}
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyUpdated(propertyName, oldValue, newValue);
		switch (propertyName) {
			case XYChart.xAxisLabelAnglePropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.angle = this.xAxisLabelAngle);
			break;

			case XYChart.yAxisLabelAnglePropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.angle = this.yAxisLabelAngle);
			break;

			case XYChart.xAxisLabelHorizontalAlignmentPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.horizontalAlignment = this.xAxisLabelHorizontalAlignment);
			break;

			case XYChart.yAxisLabelHorizontalAlignmentPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.horizontalAlignment = this.yAxisLabelHorizontalAlignment);
			break;

			case XYChart.xAxisLabelVerticalAlignmentPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.verticalAlignment = this.xAxisLabelVerticalAlignment);
			break;

			case XYChart.yAxisLabelVerticalAlignmentPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.verticalAlignment = this.yAxisLabelVerticalAlignment);
			break;

			case XYChart.xAxisLabelVisibilityPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.visibility = this.xAxisLabelVisibility);
			break;

			case XYChart.yAxisLabelVisibilityPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.visibility = this.yAxisLabelVisibility);
			break;

			case XYChart.xAxisLabelPropertyName:
			this.onXAxis((axis: Axis) => axis.label = this.xAxisLabel);
			break;

			case XYChart.yAxisLabelPropertyName:
			this.onYAxis((axis: Axis) => axis.label = this.yAxisLabel);
			break;

			case XYChart.xAxisTitleAnglePropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.angle = this.xAxisTitleAngle);
			break;

			case XYChart.yAxisTitleAnglePropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.angle = this.yAxisTitleAngle);
			break;

			case XYChart.xAxisTitleAlignmentPropertyName:
			this.onXAxisTitle((settings: TitleSettings) => settings.horizontalAlignment = this.xAxisTitleAlignment);
			break;

			case XYChart.yAxisTitleAlignmentPropertyName:
			this.onYAxisTitle((settings: TitleSettings) => settings.verticalAlignment = this.yAxisTitleAlignment);
			break;

			case XYChart.xAxisTitlePropertyName:
			this.onXAxis((axis: Axis) => axis.title = this.xAxisTitle);
			break;

			case XYChart.yAxisTitlePropertyName:
			this.onYAxis1((axis: Axis) => axis.title = this.yAxisTitle, false);
			break;

			case XYChart.xAxisMajorStrokePropertyName:
			this.onXAxis1((axis: Axis) => axis.majorStroke = this.xAxisMajorStroke, propertyName);
			break;

			case XYChart.yAxisMajorStrokePropertyName:
			this.onYAxis((axis: Axis) => axis.majorStroke = this.yAxisMajorStroke);
			break;

			case XYChart.xAxisMajorStrokeThicknessPropertyName:
			this.onXAxis1((axis: Axis) => axis.majorStrokeThickness = this.xAxisMajorStrokeThickness, propertyName);
			break;

			case XYChart.yAxisMajorStrokeThicknessPropertyName:
			this.onYAxis((axis: Axis) => axis.majorStrokeThickness = this.yAxisMajorStrokeThickness);
			break;

			case XYChart.xAxisMinorStrokePropertyName:
			this.onXAxis((axis: Axis) => axis.minorStroke = this.xAxisMinorStroke);
			break;

			case XYChart.yAxisMinorStrokePropertyName:
			this.onYAxis((axis: Axis) => axis.minorStroke = this.yAxisMinorStroke);
			break;

			case XYChart.xAxisMinorStrokeThicknessPropertyName:
			this.onXAxis((axis: Axis) => axis.minorStrokeThickness = this.xAxisMinorStrokeThickness);
			break;

			case XYChart.yAxisMinorStrokeThicknessPropertyName:
			this.onYAxis((axis: Axis) => axis.minorStrokeThickness = this.yAxisMinorStrokeThickness);
			break;

			case XYChart.xAxisTickLengthPropertyName:
			this.onXAxis((axis: Axis) => axis.tickLength = this.xAxisTickLength);
			break;

			case XYChart.yAxisTickLengthPropertyName:
			this.onYAxis((axis: Axis) => axis.tickLength = this.yAxisTickLength);
			break;

			case XYChart.xAxisTickStrokePropertyName:
			this.onXAxis((axis: Axis) => axis.tickStroke = this.xAxisTickStroke);
			break;

			case XYChart.yAxisTickStrokePropertyName:
			this.onYAxis((axis: Axis) => axis.tickStroke = this.yAxisTickStroke);
			break;

			case XYChart.xAxisTickStrokeThicknessPropertyName:
			this.onXAxis((axis: Axis) => axis.tickStrokeThickness = this.xAxisTickStrokeThickness);
			break;

			case XYChart.yAxisTickStrokeThicknessPropertyName:
			this.onYAxis((axis: Axis) => axis.tickStrokeThickness = this.yAxisTickStrokeThickness);
			break;

			case XYChart.xAxisStrokePropertyName:
			this.onXAxis((axis: Axis) => axis.stroke = this.xAxisStroke);
			break;

			case XYChart.yAxisStrokePropertyName:
			this.onYAxis((axis: Axis) => axis.stroke = this.yAxisStroke);
			break;

			case XYChart.xAxisStrokeThicknessPropertyName:
			this.onXAxis((axis: Axis) => axis.strokeThickness = this.xAxisStrokeThickness);
			break;

			case XYChart.yAxisStrokeThicknessPropertyName:
			this.onYAxis((axis: Axis) => axis.strokeThickness = this.yAxisStrokeThickness);
			break;

			case XYChart.xAxisExtentPropertyName:
			this.onXAxisLabel((settings: AxisLabelSettings) => settings.extent = this.xAxisExtent);
			break;

			case XYChart.yAxisExtentPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.extent = this.yAxisExtent);
			break;

			case XYChart.xAxisStripPropertyName:
			this.onXAxis((axis: Axis) => axis.strip = this.xAxisStrip);
			break;

			case XYChart.yAxisStripPropertyName:
			this.onYAxis((axis: Axis) => axis.strip = this.yAxisStrip);
			break;

			case XYChart.xAxisInvertedPropertyName:
			this.onXAxis((axis: Axis) => axis.isInverted = this.xAxisInverted);
			break;

			case XYChart.yAxisInvertedPropertyName:
			this.onYAxis((axis: Axis) => axis.isInverted = this.yAxisInverted);
			break;

			case XYChart.yAxisLabelLocationPropertyName:
			this.onYAxisLabel((settings: AxisLabelSettings) => settings.location = this.yAxisLabelLocation);
			break;

		}

	}
	private static readonly xAxisLabelPropertyName: string = "XAxisLabel";
	private _xAxisLabel: any = null;
	get xAxisLabel(): any {
		return this._xAxisLabel;
	}
	set xAxisLabel(value: any) {
		let oldValue: any = this.xAxisLabel;
		if (value != oldValue) {
			this._xAxisLabel = value;
			this.onPropertyUpdated(XYChart.xAxisLabelPropertyName, oldValue, this.xAxisLabel);
		}
	}
	private static readonly yAxisLabelPropertyName: string = "YAxisLabel";
	private _yAxisLabel: any = null;
	get yAxisLabel(): any {
		return this._yAxisLabel;
	}
	set yAxisLabel(value: any) {
		let oldValue: any = this.yAxisLabel;
		if (value != oldValue) {
			this._yAxisLabel = value;
			this.onPropertyUpdated(XYChart.yAxisLabelPropertyName, oldValue, this.yAxisLabel);
		}
	}
	static readonly xAxisMajorStrokePropertyName: string = "XAxisMajorStroke";
	private _xAxisMajorStroke: Brush = null;
	get xAxisMajorStroke(): Brush {
		return this._xAxisMajorStroke;
	}
	set xAxisMajorStroke(value: Brush) {
		let oldValue: Brush = this.xAxisMajorStroke;
		if (value != oldValue) {
			this._xAxisMajorStroke = value;
			this.onPropertyUpdated(XYChart.xAxisMajorStrokePropertyName, oldValue, this.xAxisMajorStroke);
		}
	}
	private static readonly yAxisMajorStrokePropertyName: string = "YAxisMajorStroke";
	private _yAxisMajorStroke: Brush = null;
	get yAxisMajorStroke(): Brush {
		return this._yAxisMajorStroke;
	}
	set yAxisMajorStroke(value: Brush) {
		let oldValue: Brush = this.yAxisMajorStroke;
		if (value != oldValue) {
			this._yAxisMajorStroke = value;
			this.onPropertyUpdated(XYChart.yAxisMajorStrokePropertyName, oldValue, this.yAxisMajorStroke);
		}
	}
	static readonly xAxisMajorStrokeThicknessPropertyName: string = "XAxisMajorStrokeThickness";
	private _xAxisMajorStrokeThickness: number = 1;
	get xAxisMajorStrokeThickness(): number {
		return this._xAxisMajorStrokeThickness;
	}
	set xAxisMajorStrokeThickness(value: number) {
		let oldValue: number = this.xAxisMajorStrokeThickness;
		if (value != oldValue) {
			this._xAxisMajorStrokeThickness = value;
			this.onPropertyUpdated(XYChart.xAxisMajorStrokeThicknessPropertyName, oldValue, this.xAxisMajorStrokeThickness);
		}
	}
	private static readonly yAxisMajorStrokeThicknessPropertyName: string = "YAxisMajorStrokeThickness";
	private _yAxisMajorStrokeThickness: number = 1;
	get yAxisMajorStrokeThickness(): number {
		return this._yAxisMajorStrokeThickness;
	}
	set yAxisMajorStrokeThickness(value: number) {
		let oldValue: number = this.yAxisMajorStrokeThickness;
		if (value != oldValue) {
			this._yAxisMajorStrokeThickness = value;
			this.onPropertyUpdated(XYChart.yAxisMajorStrokeThicknessPropertyName, oldValue, this.yAxisMajorStrokeThickness);
		}
	}
	private static readonly xAxisMinorStrokeThicknessPropertyName: string = "XAxisMinorStrokeThickness";
	private _xAxisMinorStrokeThickness: number = 1;
	get xAxisMinorStrokeThickness(): number {
		return this._xAxisMinorStrokeThickness;
	}
	set xAxisMinorStrokeThickness(value: number) {
		let oldValue: number = this.xAxisMinorStrokeThickness;
		if (value != oldValue) {
			this._xAxisMinorStrokeThickness = value;
			this.onPropertyUpdated(XYChart.xAxisMinorStrokeThicknessPropertyName, oldValue, this.xAxisMinorStrokeThickness);
		}
	}
	private static readonly yAxisMinorStrokeThicknessPropertyName: string = "YAxisMinorStrokeThickness";
	private _yAxisMinorStrokeThickness: number = 0;
	get yAxisMinorStrokeThickness(): number {
		return this._yAxisMinorStrokeThickness;
	}
	set yAxisMinorStrokeThickness(value: number) {
		let oldValue: number = this.yAxisMinorStrokeThickness;
		if (value != oldValue) {
			this._yAxisMinorStrokeThickness = value;
			this.onPropertyUpdated(XYChart.yAxisMinorStrokeThicknessPropertyName, oldValue, this.yAxisMinorStrokeThickness);
		}
	}
	private static readonly xAxisStripPropertyName: string = "XAxisStrip";
	private _xAxisStrip: Brush = null;
	get xAxisStrip(): Brush {
		return this._xAxisStrip;
	}
	set xAxisStrip(value: Brush) {
		let oldValue: Brush = this.xAxisStrip;
		if (value != oldValue) {
			this._xAxisStrip = value;
			this.onPropertyUpdated(XYChart.xAxisStripPropertyName, oldValue, this.xAxisStrip);
		}
	}
	private static readonly yAxisStripPropertyName: string = "YAxisStrip";
	private _yAxisStrip: Brush = null;
	get yAxisStrip(): Brush {
		return this._yAxisStrip;
	}
	set yAxisStrip(value: Brush) {
		let oldValue: Brush = this.yAxisStrip;
		if (value != oldValue) {
			this._yAxisStrip = value;
			this.onPropertyUpdated(XYChart.yAxisStripPropertyName, oldValue, this.yAxisStrip);
		}
	}
	private static readonly xAxisStrokePropertyName: string = "XAxisStroke";
	private _xAxisStroke: Brush = null;
	get xAxisStroke(): Brush {
		return this._xAxisStroke;
	}
	set xAxisStroke(value: Brush) {
		let oldValue: Brush = this.xAxisStroke;
		if (value != oldValue) {
			this._xAxisStroke = value;
			this.onPropertyUpdated(XYChart.xAxisStrokePropertyName, oldValue, this.xAxisStroke);
		}
	}
	private static readonly yAxisStrokePropertyName: string = "YAxisStroke";
	private _yAxisStroke: Brush = null;
	get yAxisStroke(): Brush {
		return this._yAxisStroke;
	}
	set yAxisStroke(value: Brush) {
		let oldValue: Brush = this.yAxisStroke;
		if (value != oldValue) {
			this._yAxisStroke = value;
			this.onPropertyUpdated(XYChart.yAxisStrokePropertyName, oldValue, this.yAxisStroke);
		}
	}
	private static readonly xAxisStrokeThicknessPropertyName: string = "XAxisStrokeThickness";
	private _xAxisStrokeThickness: number = 1;
	get xAxisStrokeThickness(): number {
		return this._xAxisStrokeThickness;
	}
	set xAxisStrokeThickness(value: number) {
		let oldValue: number = this.xAxisStrokeThickness;
		if (value != oldValue) {
			this._xAxisStrokeThickness = value;
			this.onPropertyUpdated(XYChart.xAxisStrokeThicknessPropertyName, oldValue, this.xAxisStrokeThickness);
		}
	}
	private static readonly yAxisStrokeThicknessPropertyName: string = "YAxisStrokeThickness";
	private _yAxisStrokeThickness: number = 1;
	get yAxisStrokeThickness(): number {
		return this._yAxisStrokeThickness;
	}
	set yAxisStrokeThickness(value: number) {
		let oldValue: number = this.yAxisStrokeThickness;
		if (value != oldValue) {
			this._yAxisStrokeThickness = value;
			this.onPropertyUpdated(XYChart.yAxisStrokeThicknessPropertyName, oldValue, this.yAxisStrokeThickness);
		}
	}
	private static readonly xAxisTickLengthPropertyName: string = "XAxisTickLength";
	private _xAxisTickLength: number = 5;
	get xAxisTickLength(): number {
		return this._xAxisTickLength;
	}
	set xAxisTickLength(value: number) {
		let oldValue: number = this.xAxisTickLength;
		if (value != oldValue) {
			this._xAxisTickLength = value;
			this.onPropertyUpdated(XYChart.xAxisTickLengthPropertyName, oldValue, this.xAxisTickLength);
		}
	}
	private static readonly yAxisTickLengthPropertyName: string = "YAxisTickLength";
	private _yAxisTickLength: number = 0;
	get yAxisTickLength(): number {
		return this._yAxisTickLength;
	}
	set yAxisTickLength(value: number) {
		let oldValue: number = this.yAxisTickLength;
		if (value != oldValue) {
			this._yAxisTickLength = value;
			this.onPropertyUpdated(XYChart.yAxisTickLengthPropertyName, oldValue, this.yAxisTickLength);
		}
	}
	private static readonly xAxisTickStrokePropertyName: string = "XAxisTickStroke";
	private _xAxisTickStroke: Brush = null;
	get xAxisTickStroke(): Brush {
		return this._xAxisTickStroke;
	}
	set xAxisTickStroke(value: Brush) {
		let oldValue: Brush = this.xAxisTickStroke;
		if (value != oldValue) {
			this._xAxisTickStroke = value;
			this.onPropertyUpdated(XYChart.xAxisTickStrokePropertyName, oldValue, this.xAxisTickStroke);
		}
	}
	private static readonly yAxisTickStrokePropertyName: string = "YAxisTickStroke";
	private _yAxisTickStroke: Brush = null;
	get yAxisTickStroke(): Brush {
		return this._yAxisTickStroke;
	}
	set yAxisTickStroke(value: Brush) {
		let oldValue: Brush = this.yAxisTickStroke;
		if (value != oldValue) {
			this._yAxisTickStroke = value;
			this.onPropertyUpdated(XYChart.yAxisTickStrokePropertyName, oldValue, this.yAxisTickStroke);
		}
	}
	private static readonly xAxisTickStrokeThicknessPropertyName: string = "XAxisTickStrokeThickness";
	private _xAxisTickStrokeThickness: number = 2;
	get xAxisTickStrokeThickness(): number {
		return this._xAxisTickStrokeThickness;
	}
	set xAxisTickStrokeThickness(value: number) {
		let oldValue: number = this.xAxisTickStrokeThickness;
		if (value != oldValue) {
			this._xAxisTickStrokeThickness = value;
			this.onPropertyUpdated(XYChart.xAxisTickStrokeThicknessPropertyName, oldValue, this.xAxisTickStrokeThickness);
		}
	}
	private static readonly yAxisTickStrokeThicknessPropertyName: string = "YAxisTickStrokeThickness";
	private _yAxisTickStrokeThickness: number = 2;
	get yAxisTickStrokeThickness(): number {
		return this._yAxisTickStrokeThickness;
	}
	set yAxisTickStrokeThickness(value: number) {
		let oldValue: number = this.yAxisTickStrokeThickness;
		if (value != oldValue) {
			this._yAxisTickStrokeThickness = value;
			this.onPropertyUpdated(XYChart.yAxisTickStrokeThicknessPropertyName, oldValue, this.yAxisTickStrokeThickness);
		}
	}
	private static readonly xAxisTitlePropertyName: string = "XAxisTitle";
	private _xAxisTitle: string = null;
	get xAxisTitle(): string {
		return this._xAxisTitle;
	}
	set xAxisTitle(value: string) {
		let oldValue: string = this.xAxisTitle;
		if (value != oldValue) {
			this._xAxisTitle = value;
			this.onPropertyUpdated(XYChart.xAxisTitlePropertyName, oldValue, this.xAxisTitle);
		}
	}
	private static readonly yAxisTitlePropertyName: string = "YAxisTitle";
	private _yAxisTitle: string = null;
	get yAxisTitle(): string {
		return this._yAxisTitle;
	}
	set yAxisTitle(value: string) {
		let oldValue: string = this.yAxisTitle;
		if (value != oldValue) {
			this._yAxisTitle = value;
			this.onPropertyUpdated(XYChart.yAxisTitlePropertyName, oldValue, this.yAxisTitle);
		}
	}
	private static readonly xAxisMinorStrokePropertyName: string = "XAxisMinorStroke";
	private _xAxisMinorStroke: Brush = null;
	get xAxisMinorStroke(): Brush {
		return this._xAxisMinorStroke;
	}
	set xAxisMinorStroke(value: Brush) {
		let oldValue: Brush = this.xAxisMinorStroke;
		if (value != oldValue) {
			this._xAxisMinorStroke = value;
			this.onPropertyUpdated(XYChart.xAxisMinorStrokePropertyName, oldValue, this.xAxisMinorStroke);
		}
	}
	private static readonly yAxisMinorStrokePropertyName: string = "YAxisMinorStroke";
	private _yAxisMinorStroke: Brush = null;
	get yAxisMinorStroke(): Brush {
		return this._yAxisMinorStroke;
	}
	set yAxisMinorStroke(value: Brush) {
		let oldValue: Brush = this.yAxisMinorStroke;
		if (value != oldValue) {
			this._yAxisMinorStroke = value;
			this.onPropertyUpdated(XYChart.yAxisMinorStrokePropertyName, oldValue, this.yAxisMinorStroke);
		}
	}
	private static readonly xAxisLabelAnglePropertyName: string = "XAxisLabelAngle";
	private _xAxisLabelAngle: number = 0;
	get xAxisLabelAngle(): number {
		return this._xAxisLabelAngle;
	}
	set xAxisLabelAngle(value: number) {
		let oldValue: number = this.xAxisLabelAngle;
		if (value != oldValue) {
			this._xAxisLabelAngle = value;
			this.onPropertyUpdated(XYChart.xAxisLabelAnglePropertyName, oldValue, this.xAxisLabelAngle);
		}
	}
	private static readonly yAxisLabelAnglePropertyName: string = "YAxisLabelAngle";
	private _yAxisLabelAngle: number = 0;
	get yAxisLabelAngle(): number {
		return this._yAxisLabelAngle;
	}
	set yAxisLabelAngle(value: number) {
		let oldValue: number = this.yAxisLabelAngle;
		if (value != oldValue) {
			this._yAxisLabelAngle = value;
			this.onPropertyUpdated(XYChart.yAxisLabelAnglePropertyName, oldValue, this.yAxisLabelAngle);
		}
	}
	private static readonly xAxisExtentPropertyName: string = "XAxisExtent";
	private _xAxisExtent: number = AxisLabelSettings.extentPropertyDefault;
	get xAxisExtent(): number {
		return this._xAxisExtent;
	}
	set xAxisExtent(value: number) {
		let oldValue: number = this.xAxisExtent;
		if (value != oldValue) {
			this._xAxisExtent = value;
			this.onPropertyUpdated(XYChart.xAxisExtentPropertyName, oldValue, this.xAxisExtent);
		}
	}
	private static readonly yAxisExtentPropertyName: string = "YAxisExtent";
	private _yAxisExtent: number = AxisLabelSettings.extentPropertyDefault;
	get yAxisExtent(): number {
		return this._yAxisExtent;
	}
	set yAxisExtent(value: number) {
		let oldValue: number = this.yAxisExtent;
		if (value != oldValue) {
			this._yAxisExtent = value;
			this.onPropertyUpdated(XYChart.yAxisExtentPropertyName, oldValue, this.yAxisExtent);
		}
	}
	private static readonly xAxisTitleAnglePropertyName: string = "XAxisTitleAngle";
	private _xAxisTitleAngle: number = 0;
	get xAxisTitleAngle(): number {
		return this._xAxisTitleAngle;
	}
	set xAxisTitleAngle(value: number) {
		let oldValue: number = this.xAxisTitleAngle;
		if (value != oldValue) {
			this._xAxisTitleAngle = value;
			this.onPropertyUpdated(XYChart.xAxisTitleAnglePropertyName, oldValue, this.xAxisTitleAngle);
		}
	}
	private static readonly yAxisTitleAnglePropertyName: string = "YAxisTitleAngle";
	private _yAxisTitleAngle: number = -90;
	get yAxisTitleAngle(): number {
		return this._yAxisTitleAngle;
	}
	set yAxisTitleAngle(value: number) {
		let oldValue: number = this.yAxisTitleAngle;
		if (value != oldValue) {
			this._yAxisTitleAngle = value;
			this.onPropertyUpdated(XYChart.yAxisTitleAnglePropertyName, oldValue, this.yAxisTitleAngle);
		}
	}
	private static readonly xAxisInvertedPropertyName: string = "XAxisInverted";
	private _xAxisInverted: boolean = false;
	get xAxisInverted(): boolean {
		return this._xAxisInverted;
	}
	set xAxisInverted(value: boolean) {
		let oldValue = this.xAxisInverted;
		if (value != oldValue) {
			this._xAxisInverted = value;
			this.onPropertyUpdated(XYChart.xAxisInvertedPropertyName, oldValue, this.xAxisInverted);
		}
	}
	private static readonly yAxisInvertedPropertyName: string = "YAxisInverted";
	private _yAxisInverted: boolean = false;
	get yAxisInverted(): boolean {
		return this._yAxisInverted;
	}
	set yAxisInverted(value: boolean) {
		let oldValue = this.yAxisInverted;
		if (value != oldValue) {
			this._yAxisInverted = value;
			this.onPropertyUpdated(XYChart.yAxisInvertedPropertyName, oldValue, this.yAxisInverted);
		}
	}
	private static readonly xAxisTitleAlignmentPropertyName: string = "XAxisTitleAlignment";
	private _xAxisTitleAlignment: HorizontalAlignment = HorizontalAlignment.Center;
	get xAxisTitleAlignment(): HorizontalAlignment {
		return this._xAxisTitleAlignment;
	}
	set xAxisTitleAlignment(value: HorizontalAlignment) {
		let oldValue: HorizontalAlignment = this.xAxisTitleAlignment;
		if (value != oldValue) {
			this._xAxisTitleAlignment = value;
			this.onPropertyUpdated(XYChart.xAxisTitleAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, this.xAxisTitleAlignment));
		}
	}
	private static readonly yAxisTitleAlignmentPropertyName: string = "YAxisTitleAlignment";
	private _yAxisTitleAlignment: VerticalAlignment = VerticalAlignment.Center;
	get yAxisTitleAlignment(): VerticalAlignment {
		return this._yAxisTitleAlignment;
	}
	set yAxisTitleAlignment(value: VerticalAlignment) {
		let oldValue: VerticalAlignment = this.yAxisTitleAlignment;
		if (value != oldValue) {
			this._yAxisTitleAlignment = value;
			this.onPropertyUpdated(XYChart.yAxisTitleAlignmentPropertyName, enumGetBox<VerticalAlignment>(VerticalAlignment_$type, oldValue), enumGetBox<VerticalAlignment>(VerticalAlignment_$type, this.yAxisTitleAlignment));
		}
	}
	private static readonly xAxisLabelHorizontalAlignmentPropertyName: string = "XAxisLabelHorizontalAlignment";
	private _xAxisLabelHorizontalAlignment: HorizontalAlignment = HorizontalAlignment.Center;
	get xAxisLabelHorizontalAlignment(): HorizontalAlignment {
		return this._xAxisLabelHorizontalAlignment;
	}
	set xAxisLabelHorizontalAlignment(value: HorizontalAlignment) {
		let oldValue: HorizontalAlignment = this.xAxisLabelHorizontalAlignment;
		if (value != oldValue) {
			this._xAxisLabelHorizontalAlignment = value;
			this.onPropertyUpdated(XYChart.xAxisLabelHorizontalAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, this.xAxisLabelHorizontalAlignment));
		}
	}
	private static readonly yAxisLabelHorizontalAlignmentPropertyName: string = "YAxisLabelHorizontalAlignment";
	private _yAxisLabelHorizontalAlignment: HorizontalAlignment = HorizontalAlignment.Right;
	protected get_yAxisLabelHorizontalAlignment(): HorizontalAlignment {
		return this._yAxisLabelHorizontalAlignment;
	}
	protected set_yAxisLabelHorizontalAlignment(value: HorizontalAlignment): void {
		let oldValue: HorizontalAlignment = this.yAxisLabelHorizontalAlignment;
		if (value != oldValue) {
			this._yAxisLabelHorizontalAlignment = value;
			this.onPropertyUpdated(XYChart.yAxisLabelHorizontalAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, this.yAxisLabelHorizontalAlignment));
		}
	}
	get yAxisLabelHorizontalAlignment(): HorizontalAlignment {
		return this.get_yAxisLabelHorizontalAlignment();
	}
	set yAxisLabelHorizontalAlignment(value: HorizontalAlignment) {
		this.set_yAxisLabelHorizontalAlignment(value);
	}
	private static readonly xAxisLabelVerticalAlignmentPropertyName: string = "XAxisLabelVerticalAlignment";
	private _xAxisLabelVerticalAlignment: VerticalAlignment = VerticalAlignment.Top;
	get xAxisLabelVerticalAlignment(): VerticalAlignment {
		return this._xAxisLabelVerticalAlignment;
	}
	set xAxisLabelVerticalAlignment(value: VerticalAlignment) {
		let oldValue: VerticalAlignment = this.xAxisLabelVerticalAlignment;
		if (value != oldValue) {
			this._xAxisLabelVerticalAlignment = value;
			this.onPropertyUpdated(XYChart.xAxisLabelVerticalAlignmentPropertyName, enumGetBox<VerticalAlignment>(VerticalAlignment_$type, oldValue), enumGetBox<VerticalAlignment>(VerticalAlignment_$type, this.xAxisLabelVerticalAlignment));
		}
	}
	private static readonly yAxisLabelVerticalAlignmentPropertyName: string = "YAxisLabelVerticalAlignment";
	private _yAxisLabelVerticalAlignment: VerticalAlignment = VerticalAlignment.Center;
	get yAxisLabelVerticalAlignment(): VerticalAlignment {
		return this._yAxisLabelVerticalAlignment;
	}
	set yAxisLabelVerticalAlignment(value: VerticalAlignment) {
		let oldValue: VerticalAlignment = this.yAxisLabelVerticalAlignment;
		if (value != oldValue) {
			this._yAxisLabelVerticalAlignment = value;
			this.onPropertyUpdated(XYChart.yAxisLabelVerticalAlignmentPropertyName, enumGetBox<VerticalAlignment>(VerticalAlignment_$type, oldValue), enumGetBox<VerticalAlignment>(VerticalAlignment_$type, this.yAxisLabelVerticalAlignment));
		}
	}
	protected static readonly xAxisLabelVisibilityPropertyName: string = "XAxisLabelVisibility";
	private _xAxisLabelVisibility: Visibility = <Visibility>0;
	get xAxisLabelVisibility(): Visibility {
		return this._xAxisLabelVisibility;
	}
	set xAxisLabelVisibility(value: Visibility) {
		let oldValue: Visibility = this.xAxisLabelVisibility;
		if (value != oldValue) {
			this._xAxisLabelVisibility = value;
			this.onPropertyUpdated(XYChart.xAxisLabelVisibilityPropertyName, enumGetBox<Visibility>(Visibility_$type, oldValue), enumGetBox<Visibility>(Visibility_$type, this.xAxisLabelVisibility));
		}
	}
	protected static readonly yAxisLabelVisibilityPropertyName: string = "YAxisLabelVisibility";
	private _yAxisLabelVisibility: Visibility = <Visibility>0;
	get yAxisLabelVisibility(): Visibility {
		return this._yAxisLabelVisibility;
	}
	set yAxisLabelVisibility(value: Visibility) {
		let oldValue: Visibility = this.yAxisLabelVisibility;
		if (value != oldValue) {
			this._yAxisLabelVisibility = value;
			this.onPropertyUpdated(XYChart.yAxisLabelVisibilityPropertyName, enumGetBox<Visibility>(Visibility_$type, oldValue), enumGetBox<Visibility>(Visibility_$type, this.yAxisLabelVisibility));
		}
	}
	private static readonly yAxisLabelLocationPropertyName: string = "YAxisLabelLocation";
	private _yAxisLabelLocation: AxisLabelsLocation = AxisLabelsLocation.OutsideLeft;
	protected get_yAxisLabelLocation(): AxisLabelsLocation {
		return this._yAxisLabelLocation;
	}
	protected set_yAxisLabelLocation(value: AxisLabelsLocation): void {
		let oldValue: AxisLabelsLocation = this.yAxisLabelLocation;
		if (value != oldValue) {
			this._yAxisLabelLocation = value;
			this.onPropertyUpdated(XYChart.yAxisLabelLocationPropertyName, enumGetBox<AxisLabelsLocation>(AxisLabelsLocation_$type, oldValue), enumGetBox<AxisLabelsLocation>(AxisLabelsLocation_$type, this.yAxisLabelLocation));
		}
	}
	get yAxisLabelLocation(): AxisLabelsLocation {
		return this.get_yAxisLabelLocation();
	}
	set yAxisLabelLocation(value: AxisLabelsLocation) {
		this.set_yAxisLabelLocation(value);
	}
}


