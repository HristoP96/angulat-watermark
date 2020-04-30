/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, EnumUtil, String_$type, IEnumerable$1, Type, markType } from "./type";
import { IDataSeriesAdapterRule, IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { List$1 } from "./List$1";
import { DataSeriesAdapterRunContext } from "./DataSeriesAdapterRunContext";
import { DataSeriesIntent, DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeriesDataProviderAnalyzer } from "./DataSeriesDataProviderAnalyzer";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { truncate } from "./number";
import { DataSeriesType } from "./DataSeriesType";
import { DataSeriesAxisType } from "./DataSeriesAxisType";
import { stringJoin } from "./string";

/**
 * @hidden 
 */
export class SimpleFinancialPriceSeriesRule extends Base implements IDataSeriesAdapterRule {
	static $t: Type = markType(SimpleFinancialPriceSeriesRule, 'SimpleFinancialPriceSeriesRule', (<any>Base).$type, [IDataSeriesAdapterRule_$type]);
	constructor() {
		super();
		this.priority = 10;
		this.distinctCheckThreshold = 50000;
	}
	private _priority: number = 0;
	get priority(): number {
		return this._priority;
	}
	set priority(value: number) {
		this._priority = value;
	}
	private _distinctCheckThreshold: number = 0;
	get distinctCheckThreshold(): number {
		return this._distinctCheckThreshold;
	}
	set distinctCheckThreshold(value: number) {
		this._distinctCheckThreshold = value;
	}
	private except(source: List$1<string>, target: List$1<string>): void {
		for (let ss of fromEnum<string>(target)) {
			if (source.contains(ss)) {
				source.remove(ss);
			}
		}
	}
	static getTimeString(context: DataSeriesAdapterRunContext, distinctCheckThreshold: number): string {
		let intentStrings = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.AxisDateValue));
		if (intentStrings.length > 0) {
			return intentStrings[0];
		}
		return ((($t: string) => $t != null ? $t : context.analyzer.getFirstDateTimeProperty())(context.analyzer.getFirstDistinctDateTimeProperty(distinctCheckThreshold)));
	}
	static getCategoryString(context: DataSeriesAdapterRunContext, distinctCheckThreshold: number): string {
		let intentStrings = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.AxisDateValue));
		if (intentStrings.length > 0) {
			return intentStrings[0];
		}
		intentStrings = context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.AxisLabelValue));
		if (intentStrings.length > 0) {
			return intentStrings[0];
		}
		return ((($t: string) => $t != null ? $t : ((($t: string) => $t != null ? $t : ((($t: string) => $t != null ? $t : context.analyzer.getFirstStringProperty())(context.analyzer.getFirstDistinctMonotonicNumericProperty(distinctCheckThreshold))))(context.analyzer.getFirstDistinctStringProperty(distinctCheckThreshold))))(context.analyzer.getFirstDistinctDateTimeProperty(distinctCheckThreshold)));
	}
	evaluate(context: DataSeriesAdapterRunContext): void {
		let timeString: string = SimpleFinancialPriceSeriesRule.getTimeString(context, this.distinctCheckThreshold);
		let categoryString: string = SimpleFinancialPriceSeriesRule.getCategoryString(context, this.distinctCheckThreshold);
		let openProps: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.OpenSeriesValue)));
		let highProps: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.HighSeriesValue)));
		let lowProps: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.LowSeriesValue)));
		let closeProps: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.CloseSeriesValue)));
		let volumeProps: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>context.analyzer.getAllPropertiesWithIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.VolumeSeriesValue)));
		let targetCount: number = Math.min(openProps.count, Math.min(highProps.count, Math.min(lowProps.count, closeProps.count)));
		if (targetCount == 0) {
			let unusedNumericProperties: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>context.analyzer.getAllNumericProperties());
			for (let propertyName of fromEnum<string>(unusedNumericProperties)) {
				if (Base.equalsStatic(propertyName.toLowerCase(), "open")) {
					openProps.add(propertyName);
					continue;
				}
				if (Base.equalsStatic(propertyName.toLowerCase(), "high")) {
					highProps.add(propertyName);
					continue;
				}
				if (Base.equalsStatic(propertyName.toLowerCase(), "low")) {
					lowProps.add(propertyName);
					continue;
				}
				if (Base.equalsStatic(propertyName.toLowerCase(), "close")) {
					closeProps.add(propertyName);
					continue;
				}
				if (Base.equalsStatic(propertyName.toLowerCase(), "volume")) {
					volumeProps.add(propertyName);
					continue;
				}
			}
			this.except(unusedNumericProperties, openProps);
			this.except(unusedNumericProperties, highProps);
			this.except(unusedNumericProperties, lowProps);
			this.except(unusedNumericProperties, closeProps);
			this.except(unusedNumericProperties, volumeProps);
			let usableNumericProperties: number = openProps.count + highProps.count + lowProps.count + closeProps.count + unusedNumericProperties.count;
			if (usableNumericProperties == 0) {
				return;
			}
			targetCount = usableNumericProperties <= 4 ? 1 : <number>truncate(Math.floor(usableNumericProperties / 5));
			let propertyLists: any[] = [ openProps, highProps, lowProps, closeProps, volumeProps ];
			let counter: number = 0;
			while (unusedNumericProperties.count > 0) {
				(<List$1<string>>propertyLists[counter++ % propertyLists.length]).add(unusedNumericProperties._inner[0]);
				unusedNumericProperties.removeAt(0);
			}
		}
		let dataSourceTitle: string = this.getDataSourceTitle(context.getCurrentDataSource());
		for (let ii: number = 0; ii < targetCount; ii++) {
			context.pushParentTitle(targetCount == 1 ? dataSourceTitle : dataSourceTitle + (ii + 1));
			let open: string = openProps.count > ii ? openProps._inner[ii] : null;
			let high: string = highProps.count > ii ? highProps._inner[ii] : null;
			let low: string = lowProps.count > ii ? lowProps._inner[ii] : null;
			let close: string = closeProps.count > ii ? closeProps._inner[ii] : null;
			let series: DataSeries = ((() => {
				let $ret = new DataSeries();
				$ret.name = stringJoin("_", ...<string[]>[ open, high, low, close ]);
				$ret.title = context.analyzer.getTitleString(null, [ open, high, low, close ]);
				$ret.suggestedSeries = DataSeriesType.FinancialPrice;
				$ret.suggestedPrimaryAxis = DataSeriesAxisType.Category;
				$ret.suggestedSecondaryAxis = DataSeriesAxisType.Linear;
				return $ret;
			})());
			series.addMemberPathHint(((() => {
				let $ret = new DataSeriesMemberPathHint();
				$ret.intent = DataSeriesIntent.OpenSeriesValue;
				$ret.path = open;
				return $ret;
			})()));
			series.addMemberPathHint(((() => {
				let $ret = new DataSeriesMemberPathHint();
				$ret.intent = DataSeriesIntent.HighSeriesValue;
				$ret.path = high;
				return $ret;
			})()));
			series.addMemberPathHint(((() => {
				let $ret = new DataSeriesMemberPathHint();
				$ret.intent = DataSeriesIntent.LowSeriesValue;
				$ret.path = low;
				return $ret;
			})()));
			series.addMemberPathHint(((() => {
				let $ret = new DataSeriesMemberPathHint();
				$ret.intent = DataSeriesIntent.CloseSeriesValue;
				$ret.path = close;
				return $ret;
			})()));
			if (volumeProps.count > ii) {
				series.addMemberPathHint(((() => {
					let $ret = new DataSeriesMemberPathHint();
					$ret.intent = DataSeriesIntent.VolumeSeriesValue;
					$ret.path = volumeProps._inner[ii];
					return $ret;
				})()));
			}
			if (timeString != null) {
				series.addMemberPathHint(((() => {
					let $ret = new DataSeriesMemberPathHint();
					$ret.intent = DataSeriesIntent.AxisDateValue;
					$ret.path = timeString;
					return $ret;
				})()));
			}
			series.addMemberPathHint(((() => {
				let $ret = new DataSeriesMemberPathHint();
				$ret.intent = DataSeriesIntent.AxisLabelValue;
				$ret.path = categoryString;
				return $ret;
			})()));
			context.addDataSeries(series, this);
			context.popParentTitle();
		}
	}
	private getDataSourceTitle(provider: IDataSourceLocalDataProvider): string {
		let itemsSource: any = provider == null ? null : provider.dataSource;
		if (itemsSource == null) {
			return null;
		}
		let titleFunction: boolean = <boolean>(typeof itemsSource.title === 'function');
		return titleFunction ? <string>(itemsSource.title()) : <boolean>(itemsSource.title) ? <string>(itemsSource.title) : null;
	}
}


