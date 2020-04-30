/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, fromEnum, markType, IEnumerable, IEnumerable_$type, typeCast, Array_$type, runOn, EnumUtil, Number_$type, typeGetValue, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, IEnumerable$1, IEnumerable$1_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, delegateCombine, delegateRemove } from "./type";
import { DataSeriesCollection } from "./DataSeriesCollection";
import { Stack$1 } from "./Stack$1";
import { IDataSourceLocalDataProvider, IDataSourceLocalDataProvider_$type } from "./IDataSourceLocalDataProvider";
import { HashSet$1 } from "./HashSet$1";
import { DataSeriesType, DataSeriesType_$type } from "./DataSeriesType";
import { DataSeries } from "./DataSeries";
import { List$1 } from "./List$1";
import { Matcher } from "./Matcher";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { DataSeriesIntent, DataSeriesIntent_$type } from "./DataSeriesIntent";
import { stringIsNullOrEmpty, stringReplace, stringEmpty } from "./string";
import { dateMinValue } from "./date";
import { IDataSourceDataProviderUpdateNotifier, IDataSourceDataProviderUpdateNotifier_$type } from "./IDataSourceDataProviderUpdateNotifier";
import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { IExternalDataSeriesAdapter } from "./IExternalDataSeriesAdapter";
import { Dictionary$2 } from "./Dictionary$2";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";

/**
 * @hidden 
 */
export interface IDataSeriesAdapterRule { 
	evaluate(context: DataSeriesAdapterRunContext): void;
readonly priority: number;
}

/**
 * @hidden 
 */
export let IDataSeriesAdapterRule_$type = new Type(null, 'IDataSeriesAdapterRule');

/**
 * @hidden 
 */
export class DataSeriesAdapterRunContext extends Base {
	static $t: Type = markType(DataSeriesAdapterRunContext, 'DataSeriesAdapterRunContext');
	private _owner: DataSeriesAdapterImplementation = null;
	private get owner(): DataSeriesAdapterImplementation {
		return this._owner;
	}
	private set owner(value: DataSeriesAdapterImplementation) {
		this._owner = value;
	}
	private _analyzer: DataSeriesDataProviderAnalyzer = null;
	get analyzer(): DataSeriesDataProviderAnalyzer {
		return this._analyzer;
	}
	set analyzer(value: DataSeriesDataProviderAnalyzer) {
		this._analyzer = value;
	}
	constructor(owner: any) {
		super();
		this.owner = <DataSeriesAdapterImplementation>owner;
		this.analyzer = new DataSeriesDataProviderAnalyzer(this);
		this.analyzer.includedProperties = this.owner.includedProperties;
		this.analyzer.excludedProperties = this.owner.excludedProperties;
		this._dataSeries = new DataSeriesCollection();
		this._dataSources = new Stack$1<IDataSourceLocalDataProvider>(IDataSourceLocalDataProvider_$type);
		this._paths = new Stack$1<string>(String_$type);
		this._parentTitles = new Stack$1<string>(String_$type);
		this._includedProperties = this.owner.includedProperties;
		this._excludedProeprties = this.owner.excludedProperties;
		this._supportedSeriesMap = null;
		if (this.owner.supportedSeriesTypes != null) {
			this._supportedSeriesMap = new HashSet$1<DataSeriesType>(DataSeriesType_$type, 0);
			for (let i = 0; i < this.owner.supportedSeriesTypes.length; i++) {
				this._supportedSeriesMap.add_1(this.owner.supportedSeriesTypes[i]);
			}
		}
	}
	private _dataSeries: DataSeriesCollection = null;
	getSubProvider(itemsSource: any, path: string): IDataSourceLocalDataProvider {
		let provider = this.owner.getProvider(itemsSource);
		this.pushDataSource(provider);
		this.pushPath(path);
		return provider;
	}
	popSubProvider(): void {
		this.popDataSource();
		this.popPath();
	}
	localize(localizationId: string, defaultString: string): string {
		return this.owner.localize(localizationId, defaultString);
	}
	recurseRules(subDataSource: any, subPath: string, listenForSubPathChanges: boolean): void {
		this.owner.recurseRules(this, subDataSource, subPath, listenForSubPathChanges);
	}
	private _dataSources: Stack$1<IDataSourceLocalDataProvider> = null;
	private _paths: Stack$1<string> = null;
	private _parentTitles: Stack$1<string> = null;
	private _includedProperties: string[] = null;
	private _excludedProeprties: string[] = null;
	private _supportedSeriesMap: HashSet$1<DataSeriesType> = null;
	get includedProperties(): string[] {
		return this._includedProperties;
	}
	get excludedProperties(): string[] {
		return this._excludedProeprties;
	}
	getCurrentDataSource(): IDataSourceLocalDataProvider {
		return this._dataSources.peek();
	}
	pushDataSource(dataSource: IDataSourceLocalDataProvider): void {
		this._dataSources.push(dataSource);
	}
	hasValidType(dataSeries: DataSeries): boolean {
		if (this._supportedSeriesMap == null) {
			return true;
		}
		if (this._supportedSeriesMap.contains(dataSeries.suggestedSeries)) {
			return true;
		}
		return false;
	}
	popDataSource(): any {
		return this._dataSources.pop();
	}
	getCurrentPathSegment(): string {
		return this._paths.peek();
	}
	getCurrentPath(): string {
		let ret = "";
		let first: boolean = true;
		for (let pathSegment of fromEnum<string>(this._paths)) {
			if (first) {
				first = false;
			} else {
				ret += ".";
			}
			ret += pathSegment;
		}
		return ret;
	}
	getParentTitle(): string {
		if (this._parentTitles.count == 0) {
			return null;
		}
		return this._parentTitles.peek();
	}
	pushPath(path: string): void {
		this._paths.push(path);
	}
	popPath(): any {
		return this._paths.pop();
	}
	pushParentTitle(parentTitle: string): void {
		this._parentTitles.push(parentTitle);
	}
	popParentTitle(): any {
		return this._parentTitles.pop();
	}
	private populateDataSeries(dataSeries: DataSeries, rule: IDataSeriesAdapterRule): void {
		if (dataSeries.priority == -1) {
			dataSeries.priority = rule.priority;
		}
		if (dataSeries.dataPath == null) {
			dataSeries.dataPath = this.getCurrentPath();
		}
		if (dataSeries.data == null) {
			dataSeries.data = this.getCurrentDataSource().dataSource;
		}
	}
	addDataSeries(dataSeries: DataSeries, rule: IDataSeriesAdapterRule): void {
		this.populateDataSeries(dataSeries, rule);
		this._dataSeries.add(dataSeries);
	}
	removeDataSeries(dataSeries: DataSeries): void {
		this._dataSeries.remove(dataSeries);
	}
	insertDataSeries(index: number, dataSeries: DataSeries, rule: IDataSeriesAdapterRule): void {
		this.populateDataSeries(dataSeries, rule);
		this._dataSeries.insert(index, dataSeries);
	}
	clearDataSeries(): void {
		this._dataSeries.clear();
	}
	getDataSeriesCount(): number {
		return this._dataSeries.count;
	}
	getDataSeriesAt(index: number): DataSeries {
		return this._dataSeries._inner[index];
	}
}

/**
 * @hidden 
 */
export class DataSeriesDataProviderAnalyzer extends Base {
	static $t: Type = markType(DataSeriesDataProviderAnalyzer, 'DataSeriesDataProviderAnalyzer');
	constructor(owner: DataSeriesAdapterRunContext) {
		super();
		this.owner = owner;
	}
	private _owner: DataSeriesAdapterRunContext = null;
	get owner(): DataSeriesAdapterRunContext {
		return this._owner;
	}
	set owner(value: DataSeriesAdapterRunContext) {
		this._owner = value;
	}
	private _includedProperties: string[] = null;
	private _excludedProperties: string[] = null;
	private _hasInclusions: boolean = false;
	private _hasExclusions: boolean = false;
	private _includedPropertiesSet: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
	private _includedPropertiesMatchers: List$1<Matcher> = new List$1<Matcher>((<any>Matcher).$type, 0);
	private _excludedPropertiesSet: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
	private _excludedPropertiesMatchers: List$1<Matcher> = new List$1<Matcher>((<any>Matcher).$type, 0);
	get includedProperties(): string[] {
		return this._includedProperties;
	}
	set includedProperties(value: string[]) {
		this._includedProperties = value;
		this._includedPropertiesSet.clear();
		if (this._includedProperties == null) {
			this._hasInclusions = false;
		} else {
			this._hasInclusions = true;
			let $t = this._includedProperties;
			for (let i = 0; i < $t.length; i++) {
				let item = $t[i];
				if (Matcher.isPattern(item)) {
					this._includedPropertiesMatchers.add(new Matcher(item));
				} else {
					this._includedPropertiesSet.add_1(item);
				}
			}
		}
	}
	get excludedProperties(): string[] {
		return this._excludedProperties;
	}
	set excludedProperties(value: string[]) {
		this._excludedProperties = value;
		this._excludedPropertiesSet.clear();
		if (this._excludedProperties == null) {
			this._hasExclusions = false;
		} else {
			this._hasExclusions = true;
			let $t = this._excludedProperties;
			for (let i = 0; i < $t.length; i++) {
				let item = $t[i];
				if (Matcher.isPattern(item)) {
					this._excludedPropertiesMatchers.add(new Matcher(item));
				} else {
					this._excludedPropertiesSet.add_1(item);
				}
			}
		}
	}
	getParentTitle(): string {
		return this.owner.getParentTitle();
	}
	shouldIncludeProperty(property: string, path: string): boolean {
		if (!stringIsNullOrEmpty(path)) {
			property = path + "." + property;
		}
		if (this._hasInclusions && !this._includedPropertiesSet.contains(property) && !this.inclusionMatches(property)) {
			return false;
		}
		if (this._hasExclusions && (this._excludedPropertiesSet.contains(property) || this.exclusionMatches(property))) {
			return false;
		}
		return true;
	}
	private exclusionMatches(property: string): boolean {
		for (let i = 0; i < this._excludedPropertiesMatchers.count; i++) {
			if (this._excludedPropertiesMatchers._inner[i].match(property)) {
				return true;
			}
		}
		return false;
	}
	private inclusionMatches(property: string): boolean {
		for (let i = 0; i < this._includedPropertiesMatchers.count; i++) {
			if (this._includedPropertiesMatchers._inner[i].match(property)) {
				return true;
			}
		}
		return false;
	}
	expandCamelCasedWords(value: string): string {
		if (value == null) {
			return null;
		}
		value = stringReplace(stringReplace(value, "[", ""), "]", "");
		let output: List$1<string> = new List$1<string>(String_$type, 0);
		let upperRun: number = 0;
		for (let i = 0; i < value.length; i++) {
			let curr = value.charAt(i);
			let upperChar = curr.toUpperCase();
			let lowerChar = curr.toLowerCase();
			if (i == 0) {
				curr = upperChar;
			}
			let charIsNewWord: boolean = (upperRun == 0 && output.count > 0);
			let previousCharWasNewWord: boolean = (upperRun > 1);
			if (upperChar == curr) {
				if (charIsNewWord) {
					output.add(' ');
				}
				upperRun++;
			} else if (lowerChar == curr) {
				if (previousCharWasNewWord) {
					output.insert(output.count - 1, ' ');
				}
				upperRun = 0;
			} else {
				upperRun = 0;
			}
			output.add(curr);
		}
		let s: string = stringEmpty();
		for (let i1 = 0; i1 < output.count; i1++) {
			s += output._inner[i1];
		}
		return s;
	}
	hasStringProperties(): boolean {
		return this.getAllStringProperties().length > 0;
	}
	getAllStringProperties(): string[] {
		return this.getMatchingProperties((p: DataSourceSchemaPropertyType) => p == DataSourceSchemaPropertyType.StringValue, null);
	}
	isCollection(item: any): boolean {
		if (typeCast<IEnumerable>(IEnumerable_$type, item) !== null || typeCast<any[]>(Array_$type, item) !== null) {
			return true;
		}
		return false;
	}
	getAllPropertiesWithName(name: string): string[] {
		return this.getMatchingProperties(null, (n: string) => n == name);
	}
	getAllNumericProperties(): string[] {
		return this.getMatchingProperties(runOn(this, this.isNumericType), null);
	}
	getAllObjectProperties(): string[] {
		return this.getMatchingProperties(runOn(this, this.isObjectType), null);
	}
	getAllCollectionProperties(): string[] {
		let objProps = this.getAllObjectProperties();
		if (objProps.length == 0) {
			return <string[]>new Array(0);
		}
		let dataProvider = this.owner.getCurrentDataSource();
		let props = new List$1<string>(String_$type, 0);
		for (let i = 0; i < dataProvider.actualCount; i++) {
			if (this.isCollection(dataProvider.getItemAtIndex(i))) {
				props.add(dataProvider.actualSchema.propertyNames[i]);
			}
		}
		return props.toArray();
	}
	getFirstNumericProperty(): string {
		let props = this.getAllNumericProperties();
		if (props.length == 0) {
			return null;
		}
		return props[0];
	}
	hasNumericProperties(): boolean {
		return this.getAllNumericProperties().length > 0;
	}
	private isDateTimeType(type: DataSourceSchemaPropertyType): boolean {
		if (type == DataSourceSchemaPropertyType.DateTimeValue || type == DataSourceSchemaPropertyType.DateTimeOffsetValue) {
			return true;
		}
		return false;
	}
	private getPropertyType(name: string): DataSourceSchemaPropertyType {
		let dataProvider = this.owner.getCurrentDataSource();
		if (dataProvider == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		let schema = dataProvider.actualSchema;
		if (schema == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		let index: number = -1;
		for (let i = 0; i < schema.propertyNames.length; i++) {
			if (Base.equalsStatic(schema.propertyNames[i], name)) {
				index = i;
				break;
			}
		}
		if (index == -1) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		return schema.propertyTypes[index];
	}
	private getMatchingProperties(match: (arg1: DataSourceSchemaPropertyType) => boolean, nameMatch: (arg1: string) => boolean): string[] {
		let dataProvider = this.owner.getCurrentDataSource();
		let schema = dataProvider.actualSchema;
		if (schema == null) {
			return <string[]>new Array(0);
		}
		let path = this.owner.getCurrentPath();
		let count: number = 0;
		for (let i = 0; i < schema.propertyTypes.length; i++) {
			if ((match == null || match(schema.propertyTypes[i])) && (nameMatch == null || nameMatch(schema.propertyNames[i])) && this.shouldPlot(schema.propertyDataIntents, i) && this.shouldIncludeProperty(schema.propertyNames[i], path)) {
				count++;
			}
		}
		let ret = <string[]>new Array(count);
		count = 0;
		for (let i1 = 0; i1 < schema.propertyTypes.length; i1++) {
			if ((match == null || match(schema.propertyTypes[i1])) && (nameMatch == null || nameMatch(schema.propertyNames[i1])) && this.shouldPlot(schema.propertyDataIntents, i1) && this.shouldIncludeProperty(schema.propertyNames[i1], path)) {
				ret[count] = schema.propertyNames[i1];
				count++;
			}
		}
		return ret;
	}
	private shouldPlot(propertyDataIntents: string[][], index: number): boolean {
		if (propertyDataIntents == null) {
			return true;
		}
		return !this.containsIntent(propertyDataIntents, index, "DontPlot");
	}
	private containsIntent(propertyDataIntents: string[][], index: number, intentName: string): boolean {
		if (propertyDataIntents == null) {
			return false;
		}
		for (let j = 0; j < propertyDataIntents[index].length; j++) {
			let intent = propertyDataIntents[index][j];
			if (Base.equalsStatic(intent.toLowerCase(), intentName.toLowerCase())) {
				return true;
			}
		}
		return false;
	}
	getAllPropertiesWithIntent(intent: string): string[] {
		return this.getAllPropertiesWithIntentHelper(intent, false, false);
	}
	getAllPropertiesWithValuelessIntent(intent: string): string[] {
		return this.getAllPropertiesWithIntentHelper(intent, true, false);
	}
	getPropertyIntentValue(intent: string, property: string): string {
		let provider = this.owner.getCurrentDataSource();
		if (provider == null) {
			return null;
		}
		let schema = provider.actualSchema;
		if (schema == null) {
			return null;
		}
		let propertyDataIntents = schema.propertyDataIntents;
		if (propertyDataIntents == null || schema.propertyNames == null) {
			return null;
		}
		for (let i = 0; i < schema.propertyNames.length; i++) {
			if (schema.propertyNames[i] != null && Base.equalsStatic(schema.propertyNames[i], property)) {
				for (let j = 0; j < propertyDataIntents[i].length; j++) {
					let currIntent = propertyDataIntents[i][j];
					let intentParts = currIntent.split('/');
					if (intentParts.length == 2 && intentParts[0] != null && Base.equalsStatic(intentParts[0], intent)) {
						return intentParts[1];
					}
				}
			}
		}
		return null;
	}
	getAllPropertiesWithValuedIntent(intent: string): string[] {
		return this.getAllPropertiesWithIntentHelper(intent, false, true);
	}
	private getAllPropertiesWithIntentHelper(intent: string, excludeValued: boolean, excludeValueless: boolean): string[] {
		let provider = this.owner.getCurrentDataSource();
		if (provider == null) {
			return <string[]>new Array(0);
		}
		let schema = provider.actualSchema;
		if (schema == null) {
			return <string[]>new Array(0);
		}
		let propertyDataIntents = schema.propertyDataIntents;
		if (propertyDataIntents == null || schema.propertyNames == null) {
			return <string[]>new Array(0);
		}
		let count: number = 0;
		for (let i = 0; i < schema.propertyNames.length; i++) {
			for (let j = 0; j < propertyDataIntents[i].length; j++) {
				let currIntent = propertyDataIntents[i][j];
				let intentParts = currIntent.split('/');
				if (excludeValued && intentParts.length > 1) {
					continue;
				}
				if (excludeValueless && intentParts.length < 2) {
					continue;
				}
				if (Base.equalsStatic(intent.toLowerCase(), intentParts[0].toLowerCase())) {
					count++;
				}
			}
		}
		let ret = <string[]>new Array(count);
		count = 0;
		for (let i1 = 0; i1 < schema.propertyNames.length; i1++) {
			for (let j1 = 0; j1 < propertyDataIntents[i1].length; j1++) {
				let currIntent1 = propertyDataIntents[i1][j1];
				let intentParts1 = currIntent1.split('/');
				if (excludeValued && intentParts1.length > 1) {
					continue;
				}
				if (excludeValueless && intentParts1.length < 2) {
					continue;
				}
				if (Base.equalsStatic(intent.toLowerCase(), currIntent1.toLowerCase())) {
					ret[count] = schema.propertyNames[i1];
					count++;
				}
			}
		}
		return ret;
	}
	getAllDateTimeProperties(): string[] {
		return this.getMatchingProperties(runOn(this, this.isDateTimeType), null);
	}
	getFirstDateTimeProperty(): string {
		let props = this.getAllDateTimeProperties();
		if (props.length == 0) {
			return null;
		}
		return props[0];
	}
	getFirstStringProperty(): string {
		let props = this.getAllStringProperties();
		if (props.length == 0) {
			return null;
		}
		return props[0];
	}
	hasDateTimeProperties(): boolean {
		return this.getAllDateTimeProperties().length > 0;
	}
	private isNumericType(type: DataSourceSchemaPropertyType): boolean {
		return type == DataSourceSchemaPropertyType.IntValue || type == DataSourceSchemaPropertyType.LongValue || type == DataSourceSchemaPropertyType.ShortValue || type == DataSourceSchemaPropertyType.SingleValue || type == DataSourceSchemaPropertyType.DoubleValue || type == DataSourceSchemaPropertyType.DecimalValue || type == DataSourceSchemaPropertyType.ByteValue;
	}
	private isObjectType(type: DataSourceSchemaPropertyType): boolean {
		return type == DataSourceSchemaPropertyType.ObjectValue;
	}
	isMonotonic(provider: IDataSourceLocalDataProvider, property: string, monotonicCheckAmount: number): boolean {
		if (provider == null) {
			return false;
		}
		let isIncreasing: boolean = false;
		let initialized: boolean = false;
		let count = provider.actualCount;
		for (let i = 0; i < Math.min(count, monotonicCheckAmount); i++) {
			if (i == 0) {
				continue;
			}
			let prev = this.coerceToDouble(provider.getItemValue(provider.getItemAtIndex(i - 1), property));
			let next = this.coerceToDouble(provider.getItemValue(provider.getItemAtIndex(i), property));
			if (!initialized && prev != next) {
				isIncreasing = next > prev;
				initialized = true;
			}
			if (prev == next) {
				continue;
			}
			if (initialized) {
				let currIsIncreasing: boolean = next > prev;
				if (currIsIncreasing != isIncreasing) {
					return false;
				}
			}
		}
		return true;
	}
	private getFirstMatchingDistinctProperty(distinctCheckThreshold: number, match: (arg1: DataSourceSchemaPropertyType) => boolean, checkDistinct: (arg1: string, arg2: DataSourceSchemaPropertyType) => boolean): string {
		let dataProvider = this.owner.getCurrentDataSource();
		let schema = dataProvider.actualSchema;
		if (schema == null) {
			return null;
		}
		let matchingProperties = this.getMatchingProperties(match, null);
		if (matchingProperties.length == 0) {
			return null;
		}
		if (dataProvider.actualCount > distinctCheckThreshold) {
			return null;
		}
		for (let i = 0; i < matchingProperties.length; i++) {
			if (checkDistinct(matchingProperties[i], this.getPropertyType(matchingProperties[i]))) {
				return matchingProperties[i];
			}
		}
		return null;
	}
	getFirstDistinctStringProperty(distinctCheckThreshold: number): string {
		return this.getFirstMatchingDistinctProperty(distinctCheckThreshold, (p: DataSourceSchemaPropertyType) => p == DataSourceSchemaPropertyType.StringValue, runOn(this, this.isStringPropertyDistinct));
	}
	getFirstDistinctNumericProperty(distinctCheckThreshold: number): string {
		return this.getFirstMatchingDistinctProperty(distinctCheckThreshold, runOn(this, this.isNumericType), runOn(this, this.isNumericPropertyDistinct));
	}
	getFirstDistinctMonotonicNumericProperty(distinctCheckThreshold: number): string {
		let ds = this.owner.getCurrentDataSource();
		return this.getFirstMatchingDistinctProperty(distinctCheckThreshold, runOn(this, this.isNumericType), (p: string, t: DataSourceSchemaPropertyType) => this.isNumericPropertyDistinct(p, t) && this.isMonotonic(ds, p, distinctCheckThreshold));
	}
	getFirstDistinctDateTimeProperty(distinctCheckThreshold: number): string {
		return this.getFirstMatchingDistinctProperty(distinctCheckThreshold, runOn(this, this.isDateTimeType), runOn(this, this.isDateTimePropertyDistinct));
	}
	getFirstStringPropertyPreferringDistinct(distinctCheckThreshold: number): string {
		let distinct = this.getFirstDistinctStringProperty(distinctCheckThreshold);
		if (distinct != null) {
			return distinct;
		}
		let stringProps = this.getAllStringProperties();
		if (stringProps.length == 0) {
			return null;
		}
		return stringProps[0];
	}
	getTitleString(specificItem: any, specificProperties: string[]): string {
		let provider = this.owner.getCurrentDataSource();
		let titleString: string = null;
		if (titleString == null && specificProperties != null) {
			let lastIntent: string = null;
			for (let i = 0; i < specificProperties.length; i++) {
				let currIntent: string = this.getPropertyIntentValue(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.SeriesTitle), specificProperties[i]);
				if (titleString == null) {
					titleString = currIntent;
					lastIntent = currIntent;
				} else {
					if (currIntent != null) {
						if (currIntent.trim().length > 0 && currIntent != lastIntent) {
							titleString += " - " + currIntent;
						}
						lastIntent = currIntent;
					}
				}
			}
		}
		if (titleString == null) {
			let titles = this.getAllPropertiesWithValuelessIntent(EnumUtil.getName<DataSeriesIntent>(DataSeriesIntent_$type, DataSeriesIntent.SeriesTitle));
			if (titles != null && titles.length > 0) {
				titleString = titles[0];
				titleString = this.extractTitle(specificItem, provider, titleString);
			}
		}
		if (titleString == null) {
			if (this.getParentTitle() != null) {
				titleString = this.getParentTitle();
			}
		}
		if (titleString == null && specificItem != null) {
			let stringProperty = this.getAllStringProperties();
			for (let i1 = 0; i1 < stringProperty.length; i1++) {
				let prop = stringProperty[i1];
				if (prop != null && (Base.equalsStatic(prop.toLowerCase(), "label") || Base.equalsStatic(prop.toLowerCase(), "title"))) {
					titleString = prop;
				}
			}
			if (titleString != null) {
				titleString = this.extractTitle(specificItem, provider, titleString);
			}
		}
		return titleString;
	}
	private extractTitle(specificItem: any, provider: IDataSourceLocalDataProvider, titleString: string): string {
		if (specificItem != null) {
			let titleObj = provider.getItemValue(specificItem, titleString);
			if (titleObj != null) {
				titleString = titleObj.toString();
			}
		} else {
			titleString = this.getNonNullPropertyValue(titleString).toString();
		}
		return titleString;
	}
	getNonNullPropertyValue(propertyName: string): any {
		let dataProvider = this.owner.getCurrentDataSource();
		for (let i = 0; i < dataProvider.actualCount; i++) {
			let val = dataProvider.getItemValue(dataProvider.getItemAtIndex(i), propertyName);
			if (val != null) {
				return val;
			}
		}
		return null;
	}
	private isStringPropertyDistinct(propertyName: string, type: DataSourceSchemaPropertyType): boolean {
		let dataProvider = this.owner.getCurrentDataSource();
		let seen: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
		for (let i = 0; i < dataProvider.actualCount; i++) {
			let stringVal = dataProvider.getItemValue(dataProvider.getItemAtIndex(i), propertyName);
			let asString = <string>stringVal;
			if (seen.contains(asString)) {
				return false;
			}
			seen.add_1(asString);
		}
		return true;
	}
	private isDateTimePropertyDistinct(propertyName: string, type: DataSourceSchemaPropertyType): boolean {
		let dataProvider = this.owner.getCurrentDataSource();
		let seen: HashSet$1<number> = new HashSet$1<number>(Number_$type, 0);
		for (let i = 0; i < dataProvider.actualCount; i++) {
			let val: Date;
			let itemValue: any = dataProvider.getItemValue(dataProvider.getItemAtIndex(i), propertyName);
			if (itemValue == null) {
				val = dateMinValue();
			} else {
				val = <Date>itemValue;
			}
			if (seen.contains(val.getTime())) {
				return false;
			}
			seen.add_1(val.getTime());
		}
		return true;
	}
	private coerceToDouble(value_: any): number {
		return <number>(+value_);
	}
	private isNumericPropertyDistinct(propertyName: string, propertyType: DataSourceSchemaPropertyType): boolean {
		let dataProvider = this.owner.getCurrentDataSource();
		if (propertyType == DataSourceSchemaPropertyType.ShortValue || propertyType == DataSourceSchemaPropertyType.IntValue || propertyType == DataSourceSchemaPropertyType.LongValue) {
			let seen: HashSet$1<number> = new HashSet$1<number>(Number_$type, 0);
			for (let i = 0; i < dataProvider.actualCount; i++) {
				let val: number;
				let itemValue: any = dataProvider.getItemValue(dataProvider.getItemAtIndex(i), propertyName);
				if (itemValue == null) {
					val = -9.2233720368547758E+18;
				} else {
					val = typeGetValue(itemValue);
				}
				if (seen.contains(val)) {
					return false;
				}
				seen.add_1(val);
			}
			return true;
		}
		if (propertyType == DataSourceSchemaPropertyType.SingleValue || propertyType == DataSourceSchemaPropertyType.DoubleValue || propertyType == DataSourceSchemaPropertyType.DecimalValue) {
			let seen1: HashSet$1<number> = new HashSet$1<number>(Number_$type, 0);
			for (let i1 = 0; i1 < dataProvider.actualCount; i1++) {
				let val1: number;
				let itemValue1: any = dataProvider.getItemValue(dataProvider.getItemAtIndex(i1), propertyName);
				if (itemValue1 == null) {
					val1 = NaN;
				} else {
					val1 = this.coerceToDouble(itemValue1);
				}
				if (seen1.contains(val1)) {
					return false;
				}
				seen1.add_1(val1);
			}
			return true;
		}
		return false;
	}
}

/**
 * @hidden 
 */
export class DataSeriesAdapterUpdateNotifier extends Base implements IDataSourceDataProviderUpdateNotifier {
	static $t: Type = markType(DataSeriesAdapterUpdateNotifier, 'DataSeriesAdapterUpdateNotifier', (<any>Base).$type, [IDataSourceDataProviderUpdateNotifier_$type]);
	private _adapter: DataSeriesAdapterImplementation = null;
	private _provider: IDataSourceLocalDataProvider = null;
	constructor(adapter: DataSeriesAdapterImplementation, provider: IDataSourceLocalDataProvider) {
		super();
		this._adapter = adapter;
		this._provider = provider;
	}
	notifyClearItems(): void {
		this._adapter.onProviderCleared(this._provider);
	}
	notifyInsertItem(index: number, newItem: any): void {
		this._adapter.onProviderItemInserted(this._provider, index, newItem);
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		this._adapter.onProviderItemRemoved(this._provider, index, oldItem);
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		this._adapter.onProviderItemSet(this._provider, index, oldItem, newItem);
	}
}

/**
 * @hidden 
 */
export class DataSeriesAdapterRuleCollection extends ObservableCollection$1<IDataSeriesAdapterRule> {
	static $t: Type = markType(DataSeriesAdapterRuleCollection, 'DataSeriesAdapterRuleCollection', (<any>ObservableCollection$1).$type.specialize(IDataSeriesAdapterRule_$type));
	constructor() {
		super(IDataSeriesAdapterRule_$type, 0);
	}
}

/**
 * @hidden 
 */
export class DataSeriesAdapterRemovingDuplicatesEventArgs extends Base {
	static $t: Type = markType(DataSeriesAdapterRemovingDuplicatesEventArgs, 'DataSeriesAdapterRemovingDuplicatesEventArgs');
	private _runContext: DataSeriesAdapterRunContext = null;
	get runContext(): DataSeriesAdapterRunContext {
		return this._runContext;
	}
	set runContext(value: DataSeriesAdapterRunContext) {
		this._runContext = value;
	}
	private _dataSourcePath: string = null;
	get dataSourcePath(): string {
		return this._dataSourcePath;
	}
	set dataSourcePath(value: string) {
		this._dataSourcePath = value;
	}
	private _duplicatePath: string = null;
	get duplicatePath(): string {
		return this._duplicatePath;
	}
	set duplicatePath(value: string) {
		this._duplicatePath = value;
	}
	private _matchingSeries: DataSeries[] = null;
	get matchingSeries(): DataSeries[] {
		return this._matchingSeries;
	}
	set matchingSeries(value: DataSeries[]) {
		this._matchingSeries = value;
	}
	private _handled: boolean = false;
	get handled(): boolean {
		return this._handled;
	}
	set handled(value: boolean) {
		this._handled = value;
	}
}

/**
 * @hidden 
 */
export class DataSeriesAdapterRunEventArgs extends Base {
	static $t: Type = markType(DataSeriesAdapterRunEventArgs, 'DataSeriesAdapterRunEventArgs');
	private _runContext: DataSeriesAdapterRunContext = null;
	get runContext(): DataSeriesAdapterRunContext {
		return this._runContext;
	}
	set runContext(value: DataSeriesAdapterRunContext) {
		this._runContext = value;
	}
	private _handled: boolean = false;
	get handled(): boolean {
		return this._handled;
	}
	set handled(value: boolean) {
		this._handled = value;
	}
}

/**
 * @hidden 
 */
export class DataSeriesAdapterImplementation extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(DataSeriesAdapterImplementation, 'DataSeriesAdapterImplementation', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.rules = new DataSeriesAdapterRuleCollection();
		this.dataSeries = new DataSeriesCollection();
		this.populateDefaultRules(this.rules);
		let $t = this.rules;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.rules_CollectionChanged));
	}
	private _localizer: (arg1: string) => string = null;
	get localizer(): (arg1: string) => string {
		return this._localizer;
	}
	set localizer(value: (arg1: string) => string) {
		this._localizer = value;
	}
	localize(localizationId: string, defaultString: string): string {
		let localizedStr = stringEmpty();
		if (this.localizer != null) {
			localizedStr = this.localizer(localizationId);
		}
		if (stringIsNullOrEmpty(localizedStr)) {
			return defaultString;
		}
		return localizedStr;
	}
	private populateDefaultRules(rules: DataSeriesAdapterRuleCollection): void {
	}
	private rules_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.refresh();
	}
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	get externalAdapter(): IExternalDataSeriesAdapter {
		return <IExternalDataSeriesAdapter><any>this.externalObject;
	}
	private _cachedProviders: Dictionary$2<any, IDataSourceLocalDataProvider> = new Dictionary$2<any, IDataSourceLocalDataProvider>((<any>Base).$type, IDataSourceLocalDataProvider_$type, 0);
	private _itemsSource: IEnumerable = null;
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	get itemsSource(): IEnumerable {
		return this._itemsSource;
	}
	set itemsSource(value: IEnumerable) {
		let oldValue = this._itemsSource;
		this._itemsSource = value;
		if (oldValue != this._itemsSource) {
			this.onPropertyUpdated(DataSeriesAdapterImplementation.itemsSourcePropertyName, oldValue, this._itemsSource);
		}
	}
	private _supportedSeriesTypes: DataSeriesType[] = null;
	static readonly supportedSeriesTypesPropertyName: string = "SupportedSeriesTypes";
	get supportedSeriesTypes(): DataSeriesType[] {
		return this._supportedSeriesTypes;
	}
	set supportedSeriesTypes(value: DataSeriesType[]) {
		let oldValue = this._supportedSeriesTypes;
		this._supportedSeriesTypes = value;
		if (oldValue != this._supportedSeriesTypes) {
			this.onPropertyUpdated(DataSeriesAdapterImplementation.supportedSeriesTypesPropertyName, oldValue, this._supportedSeriesTypes);
		}
	}
	private _includedProperties: string[] = null;
	static readonly includedPropertiesPropertyName: string = "IncludedProperties";
	get includedProperties(): string[] {
		return this._includedProperties;
	}
	set includedProperties(value: string[]) {
		let oldValue = this._includedProperties;
		this._includedProperties = value;
		if (oldValue != this._includedProperties) {
			this.onPropertyUpdated(DataSeriesAdapterImplementation.includedPropertiesPropertyName, oldValue, this._includedProperties);
		}
	}
	private _excludedProperties: string[] = null;
	static readonly excludedPropertiesPropertyName: string = "ExcludedProperties";
	get excludedProperties(): string[] {
		return this._excludedProperties;
	}
	set excludedProperties(value: string[]) {
		let oldValue = this._excludedProperties;
		this._excludedProperties = value;
		if (oldValue != this._excludedProperties) {
			this.onPropertyUpdated(DataSeriesAdapterImplementation.excludedPropertiesPropertyName, oldValue, this._excludedProperties);
		}
	}
	private _rules: DataSeriesAdapterRuleCollection = null;
	get rules(): DataSeriesAdapterRuleCollection {
		return this._rules;
	}
	set rules(value: DataSeriesAdapterRuleCollection) {
		this._rules = value;
	}
	private _dataSeries: DataSeriesCollection = null;
	get dataSeries(): DataSeriesCollection {
		return this._dataSeries;
	}
	set dataSeries(value: DataSeriesCollection) {
		this._dataSeries = value;
	}
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case DataSeriesAdapterImplementation.itemsSourcePropertyName:
			this.refresh();
			break;

			case DataSeriesAdapterImplementation.supportedSeriesTypesPropertyName:
			this.refresh();
			break;

			case DataSeriesAdapterImplementation.includedPropertiesPropertyName:
			this.refresh();
			break;

			case DataSeriesAdapterImplementation.excludedPropertiesPropertyName:
			this.refresh();
			break;

		}

	}
	private _duringRefresh: boolean = false;
	refresh(): void {
		this._duringRefresh = true;
		this.clearCachedProviders();
		let context = new DataSeriesAdapterRunContext(this);
		let provider = this.getProvider(this.itemsSource);
		this.cacheProvider(provider, null, false);
		context.pushDataSource(provider);
		this.runRules(context);
		this.updateDataSeries(context);
		this._duringRefresh = false;
	}
	private clearCachedProviders(): void {
		for (let key of fromEnum<any>(this._cachedProviders.keys)) {
			let provider = this._cachedProviders.item(key);
			provider.updateNotifier = null;
			provider.schemaChanged = delegateRemove(provider.schemaChanged, runOn(this, this.provider_SchemaChanged));
		}
		this._cachedProviders.clear();
	}
	private updateDataSeries(context: DataSeriesAdapterRunContext): void {
		this.removeUnsupported(context);
		this.removeDuplicates(context);
		this.syncDataSeries(context);
	}
	private removeUnsupported(context: DataSeriesAdapterRunContext): void {
		let autoRemove: boolean = true;
		if (this.removingUnsupported != null) {
			let args = ((() => {
				let $ret = new DataSeriesAdapterRunEventArgs();
				$ret.runContext = context;
				return $ret;
			})());
			this.removingUnsupported(this, args);
			autoRemove = !args.handled;
		}
		if (autoRemove) {
			if (this.supportedSeriesTypes == null) {
				return;
			}
			let supported: HashSet$1<DataSeriesType> = new HashSet$1<DataSeriesType>(DataSeriesType_$type, 0);
			for (let i = 0; i < this.supportedSeriesTypes.length; i++) {
				supported.add_1(this.supportedSeriesTypes[i]);
			}
			for (let i1 = context.getDataSeriesCount() - 1; i1 >= 0; i1--) {
				let series = context.getDataSeriesAt(i1);
				if (!supported.contains(series.suggestedSeries)) {
					context.removeDataSeries(series);
				}
			}
		}
	}
	private syncDataSeries(context: DataSeriesAdapterRunContext): void {
		let i: number = 0;
		for (; i < Math.min(this.dataSeries.count, context.getDataSeriesCount()); i++) {
			if (!this.dataSeries._inner[i].equals(context.getDataSeriesAt(i))) {
				this.dataSeries.removeAt(i);
				i--;
			}
		}
		for (; i < context.getDataSeriesCount(); i++) {
			this.dataSeries.insert(i, context.getDataSeriesAt(i));
		}
		for (; i < this.dataSeries.count; i++) {
			this.dataSeries.removeAt(i);
			i--;
		}
	}
	removingUnsupported: (sender: any, args: DataSeriesAdapterRunEventArgs) => void = null;
	removingDuplicates: (sender: any, args: DataSeriesAdapterRemovingDuplicatesEventArgs) => void = null;
	private removeDuplicates(context: DataSeriesAdapterRunContext): void {
		let map: Dictionary$2<string, List$1<DataSeries>> = new Dictionary$2<string, List$1<DataSeries>>(String_$type, (<any>List$1).$type.specialize((<any>DataSeries).$type), 0);
		for (let i = 0; i < context.getDataSeriesCount(); i++) {
			let currentSeries = context.getDataSeriesAt(i);
			let hints = currentSeries.getAllPathHints();
			for (let j = 0; j < hints.count; j++) {
				if (hints.item(j).intent == DataSeriesIntent.AxisLabelValue || hints.item(j).intent == DataSeriesIntent.AxisDateValue) {
					continue;
				}
				let combinedPath = (currentSeries.dataPath != null ? (currentSeries.dataPath + ".") : "") + hints.item(j).path;
				if (hints.item(j).intent == DataSeriesIntent.GenerationInput) {
					combinedPath = hints.item(j).path;
				}
				if (!map.containsKey(combinedPath)) {
					map.item(combinedPath, new List$1<DataSeries>((<any>DataSeries).$type, 0));
				}
				map.item(combinedPath).add(currentSeries);
			}
		}
		for (let key of fromEnum<string>(map.keys)) {
			if (map.item(key).count > 1) {
				let matching: DataSeries[] = <DataSeries[]>new Array(map.item(key).count);
				let list = map.item(key);
				let count = list.count;
				for (let i1 = 0; i1 < count; i1++) {
					matching[i1] = list._inner[i1];
				}
				let autoRemove: boolean = true;
				if (this.removingDuplicates != null) {
					let args = ((() => {
						let $ret = new DataSeriesAdapterRemovingDuplicatesEventArgs();
						$ret.duplicatePath = key;
						$ret.runContext = context;
						$ret.matchingSeries = matching;
						return $ret;
					})());
					autoRemove = !args.handled;
				}
				if (autoRemove) {
					let maxPriority: number = -1;
					let maxPrioritySeries: DataSeries = null;
					list = map.item(key);
					count = list.count;
					for (let i2 = 0; i2 < count; i2++) {
						let curr = list._inner[i2];
						if (curr.priority > maxPriority) {
							maxPriority = curr.priority;
							maxPrioritySeries = curr;
						}
					}
					for (let i3 = 0; i3 < count; i3++) {
						let curr1 = list._inner[i3];
						if (curr1 != maxPrioritySeries) {
							context.removeDataSeries(curr1);
						}
					}
				}
			}
		}
	}
	private runRules(context: DataSeriesAdapterRunContext): void {
		for (let i = 0; i < this.rules.count; i++) {
			this.runRule(context, this.rules._inner[i]);
		}
	}
	private runRule(context: DataSeriesAdapterRunContext, rule: IDataSeriesAdapterRule): void {
		rule.evaluate(context);
	}
	getProvider(dataSource: any): IDataSourceLocalDataProvider {
		if (dataSource != null && this._cachedProviders.containsKey(dataSource)) {
			return this._cachedProviders.item(dataSource);
		}
		return this.externalAdapter.getDataProvider(dataSource);
	}
	recurseRules(context: DataSeriesAdapterRunContext, subDataSource: any, subPath: string, listenForSubPathChanges: boolean): void {
		let provider = this.getProvider(subDataSource);
		this.cacheProvider(provider, context.getCurrentDataSource(), listenForSubPathChanges);
		context.pushDataSource(provider);
		context.pushPath(subPath);
		this.runRules(context);
		context.popPath();
		context.popDataSource();
	}
	private cacheProvider(provider: IDataSourceLocalDataProvider, parentProvider: IDataSourceLocalDataProvider, listenOnSub: boolean): void {
		if (provider.dataSource != null) {
			this._cachedProviders.addItem(provider.dataSource, provider);
		}
		provider.schemaChanged = delegateCombine(provider.schemaChanged, runOn(this, this.provider_SchemaChanged));
		if (parentProvider != null) {
			let notifier = new DataSeriesAdapterUpdateNotifier(this, provider);
			parentProvider.updateNotifier = notifier;
		}
		if (listenOnSub) {
			let notifier1 = new DataSeriesAdapterUpdateNotifier(this, provider);
			provider.updateNotifier = notifier1;
		}
	}
	private provider_SchemaChanged(sender: any, args: DataSourceDataProviderSchemaChangedEventArgs): void {
		if (!this._duringRefresh) {
			this.refresh();
		}
	}
	onProviderCleared(_provider: IDataSourceLocalDataProvider): void {
		this.refresh();
	}
	onProviderItemInserted(_provider: IDataSourceLocalDataProvider, index: number, newItem: any): void {
		this.refresh();
	}
	onProviderItemRemoved(_provider: IDataSourceLocalDataProvider, index: number, oldItem: any): void {
		this.refresh();
	}
	onProviderItemSet(_provider: IDataSourceLocalDataProvider, index: number, oldItem: any, newItem: any): void {
		this.refresh();
	}
	notifyClearItems(dataSource: any): void {
		if (this._cachedProviders.containsKey(dataSource)) {
			this._cachedProviders.item(dataSource).notifyClearItems();
		}
	}
	notifyInsertItem(dataSource: any, index: number, newItem: any): void {
		if (this._cachedProviders.containsKey(dataSource)) {
			this._cachedProviders.item(dataSource).notifyInsertItem(index, newItem);
		}
	}
	notifyRemoveItem(dataSource: any, index: number, oldItem: any): void {
		if (this._cachedProviders.containsKey(dataSource)) {
			this._cachedProviders.item(dataSource).notifyRemoveItem(index, oldItem);
		}
	}
	notifySetItem(dataSource: any, index: number, oldItem: any, newItem: any): void {
		if (this._cachedProviders.containsKey(dataSource)) {
			this._cachedProviders.item(dataSource).notifySetItem(index, oldItem, newItem);
		}
	}
}


