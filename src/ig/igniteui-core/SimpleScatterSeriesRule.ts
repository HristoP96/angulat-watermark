/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, EnumUtil, Type, markType } from "./type";
import { IDataSeriesAdapterRule, IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { DataSeriesAdapterRunContext } from "./DataSeriesAdapterRunContext";
import { List$1 } from "./List$1";
import { DataSeriesIntent, DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeriesDataProviderAnalyzer } from "./DataSeriesDataProviderAnalyzer";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { DataSeriesType } from "./DataSeriesType";
import { DataSeriesAxisType } from "./DataSeriesAxisType";

/**
 * @hidden 
 */
export class SimpleScatterSeriesRule extends Base implements IDataSeriesAdapterRule {
	static $t: Type = markType(SimpleScatterSeriesRule, 'SimpleScatterSeriesRule', (<any>Base).$type, [IDataSeriesAdapterRule_$type]);
	constructor() {
		super();
		this.priority = 9;
		this.monotonicCheckAmount = 10000;
	}
	private _priority: number = 0;
	get priority(): number {
		return this._priority;
	}
	set priority(value: number) {
		this._priority = value;
	}
	private _monotonicCheckAmount: number = 0;
	get monotonicCheckAmount(): number {
		return this._monotonicCheckAmount;
	}
	set monotonicCheckAmount(value: number) {
		this._monotonicCheckAmount = value;
	}
	evaluate(context: DataSeriesAdapterRunContext): void {
		let numericProps = context.analyzer.getAllNumericProperties();
		if (numericProps.length == 0) {
			return;
		}
		let actualCount = context.getCurrentDataSource().actualCount;
		let remainingProps = new List$1<string>(String_$type, 0);
		for (let i = 0; i < numericProps.length; i++) {
			remainingProps.add(numericProps[i]);
		}
		let xProps = this.getXProps(remainingProps);
		let yProps = this.getYProps(remainingProps);
		let xIntentProperties = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.SeriesX));
		let yIntentProperties = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.SeriesY));
		if (xIntentProperties.length > 0 && yIntentProperties.length > 0 && xIntentProperties.length == yIntentProperties.length) {
			xProps.clear();
			yProps.clear();
			remainingProps.clear();
			for (let i1 = 0; i1 < xIntentProperties.length; i1++) {
				xProps.add(xIntentProperties[i1]);
				yProps.add(yIntentProperties[i1]);
			}
		}
		let j: number = 0;
		for (j = 0; j < Math.min(xProps.count, yProps.count); j++) {
			let props: string[] = <string[]>new Array(2);
			props[0] = xProps._inner[j];
			props[1] = yProps._inner[j];
			let titleString: string = context.analyzer.getTitleString(null, props);
			this.createScatterSeries(context, xProps._inner[j], yProps._inner[j], titleString);
		}
		for (; j < xProps.count; j++) {
			remainingProps.add(xProps._inner[j]);
		}
		for (; j < yProps.count; j++) {
			remainingProps.add(yProps._inner[j]);
		}
		for (let i2 = 0; i2 < remainingProps.count; i2 += 2) {
			if (i2 + 1 >= remainingProps.count) {
				continue;
			}
			let props1: string[] = <string[]>new Array(2);
			props1[0] = remainingProps._inner[i2];
			props1[1] = remainingProps._inner[i2 + 1];
			let titleString1: string = context.analyzer.getTitleString(null, props1);
			this.createScatterSeries(context, remainingProps._inner[i2], remainingProps._inner[i2 + 1], titleString1);
		}
	}
	private getYProps(remainingProps: List$1<string>): List$1<string> {
		let yProps: List$1<string> = new List$1<string>(String_$type, 0);
		for (let i = 0; i < remainingProps.count; i++) {
			if (this.isYProp(remainingProps._inner[i])) {
				yProps.add(remainingProps._inner[i]);
				remainingProps.removeAt(i);
				i--;
			}
		}
		return yProps;
	}
	private isYProp(v: string): boolean {
		if (Base.equalsStatic(v.toLowerCase(), "y") || Base.equalsStatic(v.toLowerCase(), "yvalue")) {
			return true;
		}
		return false;
	}
	private getXProps(remainingProps: List$1<string>): List$1<string> {
		let xProps: List$1<string> = new List$1<string>(String_$type, 0);
		for (let i = 0; i < remainingProps.count; i++) {
			if (this.isXProp(remainingProps._inner[i])) {
				xProps.add(remainingProps._inner[i]);
				remainingProps.removeAt(i);
				i--;
			}
		}
		return xProps;
	}
	private isXProp(v: string): boolean {
		if (Base.equalsStatic(v.toLowerCase(), "x") || Base.equalsStatic(v.toLowerCase(), "xvalue")) {
			return true;
		}
		return false;
	}
	private createScatterSeries(context: DataSeriesAdapterRunContext, xValue: string, yValue: string, titleString: string): void {
		let s: DataSeries = new DataSeries();
		s.name = xValue + "_" + yValue;
		if (titleString != null) {
			s.title = titleString;
		} else {
			s.title = xValue + " - " + yValue;
			s.title = context.analyzer.expandCamelCasedWords(s.title);
		}
		let xHint = new DataSeriesMemberPathHint();
		xHint.intent = DataSeriesIntent.SeriesX;
		xHint.path = xValue;
		let yHint = new DataSeriesMemberPathHint();
		yHint.intent = DataSeriesIntent.SeriesY;
		yHint.path = yValue;
		s.addMemberPathHint(xHint);
		s.addMemberPathHint(yHint);
		let provider = context.getCurrentDataSource();
		let actualCount = provider.actualCount;
		if (actualCount > this.monotonicCheckAmount) {
			s.suggestedSeries = DataSeriesType.ScatterPoint;
		} else {
			if (context.analyzer.isMonotonic(provider, xValue, this.monotonicCheckAmount)) {
				s.suggestedSeries = DataSeriesType.ScatterLine;
			} else {
				s.suggestedSeries = DataSeriesType.ScatterPoint;
			}
		}
		s.suggestedPrimaryAxis = DataSeriesAxisType.Linear;
		s.suggestedSecondaryAxis = DataSeriesAxisType.Linear;
		context.addDataSeries(s, this);
	}
}


