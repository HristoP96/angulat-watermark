/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, EnumUtil, Type, markType } from "./type";
import { IDataSeriesAdapterRule, IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { DataSeriesAdapterRunContext } from "./DataSeriesAdapterRunContext";
import { DataSeriesIntent, DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeriesDataProviderAnalyzer } from "./DataSeriesDataProviderAnalyzer";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { DataSeriesType } from "./DataSeriesType";
import { DataSeriesAxisType } from "./DataSeriesAxisType";

/**
 * @hidden 
 */
export class SimpleCategorySeriesRule extends Base implements IDataSeriesAdapterRule {
	static $t: Type = markType(SimpleCategorySeriesRule, 'SimpleCategorySeriesRule', (<any>Base).$type, [IDataSeriesAdapterRule_$type]);
	constructor() {
		super();
		this.priority = 10;
		this.distinctCheckThreshold = 50000;
		this.useColumnThreshold = 30;
	}
	private _priority: number = 0;
	get priority(): number {
		return this._priority;
	}
	set priority(value: number) {
		this._priority = value;
	}
	private _useColumnThreshold: number = 0;
	get useColumnThreshold(): number {
		return this._useColumnThreshold;
	}
	set useColumnThreshold(value: number) {
		this._useColumnThreshold = value;
	}
	private _distinctCheckThreshold: number = 0;
	get distinctCheckThreshold(): number {
		return this._distinctCheckThreshold;
	}
	set distinctCheckThreshold(value: number) {
		this._distinctCheckThreshold = value;
	}
	static getCategoryString(context: DataSeriesAdapterRunContext, distinctCheckThreshold: number): string {
		let intentStrings = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.AxisLabelValue));
		if (intentStrings.length > 0) {
			return intentStrings[0];
		}
		return ((($t: string) => $t != null ? $t : ((($t: string) => $t != null ? $t : ((($t: string) => $t != null ? $t : context.analyzer.getFirstStringProperty())(context.analyzer.getFirstDistinctMonotonicNumericProperty(distinctCheckThreshold))))(context.analyzer.getFirstDistinctDateTimeProperty(distinctCheckThreshold))))(context.analyzer.getFirstDistinctStringProperty(distinctCheckThreshold)));
	}
	evaluate(context: DataSeriesAdapterRunContext): void {
		let categoryString: string = SimpleCategorySeriesRule.getCategoryString(context, this.distinctCheckThreshold);
		let numericProps: string[] = null;
		let valueIntentStrings = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.PrimarySeriesValue));
		if (valueIntentStrings.length > 0) {
			numericProps = valueIntentStrings;
		}
		if (numericProps == null) {
			numericProps = context.analyzer.getAllNumericProperties();
		}
		if (numericProps == null || numericProps.length == 0) {
			return;
		}
		let actualCount = context.getCurrentDataSource().actualCount;
		for (let i = 0; i < numericProps.length; i++) {
			if (numericProps[i] == categoryString && numericProps.length > 1) {
				continue;
			}
			let props: string[] = <string[]>new Array(1);
			props[0] = numericProps[i];
			let titleString: string = context.analyzer.getTitleString(null, props);
			let series: DataSeries = new DataSeries();
			let hint = new DataSeriesMemberPathHint();
			hint.intent = DataSeriesIntent.PrimarySeriesValue;
			hint.path = numericProps[i];
			let axisHint = new DataSeriesMemberPathHint();
			axisHint.intent = DataSeriesIntent.AxisLabelValue;
			axisHint.path = categoryString;
			series.addMemberPathHint(hint);
			series.addMemberPathHint(axisHint);
			if (actualCount > this.useColumnThreshold) {
				series.suggestedSeries = DataSeriesType.Line;
			} else {
				series.suggestedSeries = DataSeriesType.Column;
			}
			this.fallbackTypeIfUnsupported(series, context);
			series.suggestedPrimaryAxis = DataSeriesAxisType.Category;
			series.suggestedSecondaryAxis = DataSeriesAxisType.Linear;
			series.name = numericProps[i];
			if (titleString != null) {
				series.title = titleString;
			} else {
				series.title = numericProps[i];
				series.title = context.analyzer.expandCamelCasedWords(series.title);
			}
			context.addDataSeries(series, this);
		}
	}
	private fallbackTypeIfUnsupported(series: DataSeries, context: DataSeriesAdapterRunContext): void {
		if (!context.hasValidType(series)) {
			series.suggestedSeries = DataSeriesType.Line;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.Column;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.Area;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.Spline;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.SplineArea;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.StepLine;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.StepArea;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.Point;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.Waterfall;
			if (context.hasValidType(series)) {
				return;
			}
			series.suggestedSeries = DataSeriesType.Line;
		}
	}
}


