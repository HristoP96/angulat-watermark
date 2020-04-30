/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, ICollection$1, ICollection$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, fromEnum, Type, markType } from "./type";
import { StockPriceHistory } from "./StockPriceHistory";
import { StockPosition } from "./StockPosition";
import { StockDetails } from "./StockDetails";
import { StockChangedEventArgs } from "./StockChangedEventArgs";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { StockDataGenerator } from "./StockDataGenerator";
import { arrayClear } from "./array";
import { stringIsNullOrEmpty } from "./string";

/**
 * @hidden 
 */
export class FinancialDataAdapter extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(FinancialDataAdapter, 'FinancialDataAdapter', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _stockSymbols: string[] = <string[]>new Array(0);
	static readonly stockSymbolsPropertyName: string = "StockSymbols";
	get stockSymbols(): string[] {
		return this._stockSymbols;
	}
	set stockSymbols(value: string[]) {
		this.stockUpdate(this._stockSymbols, value);
	}
	private _stockPrices: StockPriceHistory[] = <StockPriceHistory[]>new Array(0);
	get stockPrices(): StockPriceHistory[] {
		return this._stockPrices;
	}
	set stockPrices(value: StockPriceHistory[]) {
		let oldValue = this._stockPrices;
		this._stockPrices = value;
		if (oldValue != this._stockPrices) {
			this.onPropertyUpdated(FinancialDataAdapter.stockPricesPropertyName, oldValue, this._stockPrices);
		}
	}
	static readonly stockPricesPropertyName: string = "StockPrices";
	private _stockPricesMemberPaths: string[] = <string[]>[ "*.open", "*.high", "*.low", "*.close", "*.volume", "*.date" ];
	get stockPricesMemberPaths(): string[] {
		return this._stockPricesMemberPaths;
	}
	private _stockPositions: StockPosition[] = <StockPosition[]>new Array(0);
	get stockPositions(): StockPosition[] {
		return this._stockPositions;
	}
	set stockPositions(value: StockPosition[]) {
		let oldValue = this._stockPositions;
		this._stockPositions = value;
		if (oldValue != this._stockPositions) {
			this.onPropertyUpdated(FinancialDataAdapter.stockPositionsPropertyName, oldValue, this._stockPositions);
		}
	}
	static readonly stockPositionsPropertyName: string = "StockPositions";
	private _stockDetails: StockDetails[] = null;
	get stockDetails(): StockDetails[] {
		return this._stockDetails;
	}
	set stockDetails(value: StockDetails[]) {
		let oldValue = this._stockDetails;
		this._stockDetails = value;
		if (oldValue != this._stockDetails) {
			this.onPropertyUpdated(FinancialDataAdapter.stockDetailsPropertyName, oldValue, this._stockDetails);
		}
	}
	static readonly stockDetailsPropertyName: string = "StockDetails";
	private _stockPricesTimeRange: number = 6;
	static readonly stockPricesTimeRangePropertyName: string = "StockPricesTimeRange";
	get stockPricesTimeRange(): number {
		return this._stockPricesTimeRange;
	}
	set stockPricesTimeRange(value: number) {
		let oldValue = this._stockPricesTimeRange;
		this._stockPricesTimeRange = value;
		if (oldValue != this._stockPricesTimeRange) {
			this.onPropertyUpdated(FinancialDataAdapter.stockPricesTimeRangePropertyName, oldValue, this._stockPricesTimeRange);
		}
	}
	private _stockPricesTimeInterval: number = 10;
	static readonly stockPricesTimeIntervalPropertyName: string = "StockPricesTimeInterval";
	get stockPricesTimeInterval(): number {
		return this._stockPricesTimeInterval;
	}
	set stockPricesTimeInterval(value: number) {
		let oldValue = this._stockPricesTimeInterval;
		this._stockPricesTimeInterval = value;
		if (oldValue != this._stockPricesTimeInterval) {
			this.onPropertyUpdated(FinancialDataAdapter.stockPricesTimeIntervalPropertyName, oldValue, this._stockPricesTimeInterval);
		}
	}
	private _stockPricesTradeAfterHours: boolean = true;
	static readonly stockPricesTradeAfterHoursPropertyName: string = "StockPricesTradeAfterHours";
	get stockPricesTradeAfterHours(): boolean {
		return this._stockPricesTradeAfterHours;
	}
	set stockPricesTradeAfterHours(value: boolean) {
		let oldValue = this._stockPricesTradeAfterHours;
		this._stockPricesTradeAfterHours = value;
		if (oldValue != this._stockPricesTradeAfterHours) {
			this.onPropertyUpdated(FinancialDataAdapter.stockPricesTradeAfterHoursPropertyName, oldValue, this._stockPricesTradeAfterHours);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		this.onPropertyUpdatedOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected onPropertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case FinancialDataAdapter.stockPricesTimeRangePropertyName:

			case FinancialDataAdapter.stockPricesTimeIntervalPropertyName:

			case FinancialDataAdapter.stockPricesTradeAfterHoursPropertyName:
			this.stockRegenerate();
			break;

			case FinancialDataAdapter.stockSymbolsPropertyName:
			this.stockGenerate(<string[]>oldValue, <string[]>newValue);
			break;

		}

	}
	populateStockPosition: (stockSymbol: string) => StockPosition = null;
	populateStockPrices: (stockSymbol: string) => StockPriceHistory = null;
	stockSymbolsChanged: (sender: any, args: StockChangedEventArgs) => void = null;
	onStockSymbolsChanged(oldStocks: string[], newStocks: string[]): void {
		if (oldStocks == null) {
			oldStocks = <string[]>new Array(0);
		}
		if (newStocks == null) {
			newStocks = <string[]>new Array(0);
		}
		this.log("OnStockChanged " + oldStocks.length + " -> " + newStocks.length);
		if (this.stockSymbolsChanged != null) {
			this.stockSymbolsChanged(this, new StockChangedEventArgs(oldStocks, newStocks));
		}
	}
	constructor() {
		super();
		this.dataGenerator = new StockDataGenerator();
		this._stockDetails = this.dataGenerator.generateDetails();
	}
	log(message_: string): void {
		console.log('FDC3 Adapter... ' + message_);;
	}
	clearData(): void {
		this._stockSymbols = <string[]>new Array(0);
		this.cachedPrices.clear();
		this.cachedPositions.clear();
		arrayClear(this.stockPrices);
		arrayClear(this.stockPositions);
	}
	removeStockPosition(index: number): void {
		this.onRemovingPosition(index);
	}
	removeStockPrices(symbol: string): void {
		this.onRemovingPrices(symbol, 0);
	}
	stockAdd(symbol: string, name: string = ""): void {
		let $t = this.stockSymbols;
		for (let i = 0; i < $t.length; i++) {
			let addedStock = $t[i];
			if (!this.stockNames.containsKey(addedStock)) {
				this.stockNames.addItem(addedStock, "");
			}
		}
		if (this.stockNames.containsKey(symbol)) {
			this.stockNames.item(symbol, name);
		} else {
			this.stockNames.addItem(symbol, name);
		}
		let newSymbols = this.extToList$1<string>(String_$type, this.stockSymbols);
		if (!newSymbols.contains(symbol)) {
			newSymbols.add(symbol);
		}
		this.stockSymbols = this.extToArray$1<string>(String_$type, newSymbols);
	}
	stockRemove(symbol: string): void {
		if (this.cachedPrices.containsKey(symbol)) {
			let oldSymbols = this.extToList$1<string>(String_$type, this.stockSymbols);
			if (this.stockNames.containsKey(symbol)) {
				this.stockNames.removeItem(symbol);
			}
			let newSymbols = this.extToList$1<string>(String_$type, this.stockSymbols);
			if (newSymbols.contains(symbol)) {
				newSymbols.remove(symbol);
			}
			this._stockSymbols = this.extToArray$1<string>(String_$type, newSymbols);
			this.stockGenerate(this.extToArray$1<string>(String_$type, oldSymbols), this.extToArray$1<string>(String_$type, newSymbols));
		}
	}
	private getStockName(stockSymbol: string): string {
		if (stringIsNullOrEmpty(stockSymbol)) {
			return "";
		}
		if (this.stockNames.containsKey(stockSymbol)) {
			return this.stockNames.item(stockSymbol);
		}
		return "";
	}
	cachedPrices: Dictionary$2<string, StockPriceHistory> = new Dictionary$2<string, StockPriceHistory>(String_$type, (<any>StockPriceHistory).$type, 0);
	cachedPositions: List$1<StockPosition> = new List$1<StockPosition>((<any>StockPosition).$type, 0);
	private stockNames: Dictionary$2<string, string> = new Dictionary$2<string, string>(String_$type, String_$type, 0);
	private dataGenerator: StockDataGenerator = new StockDataGenerator();
	protected onGeneratingPrices(stockSymbol: string): StockPriceHistory {
		this.dataGenerator.dateRange = this.stockPricesTimeRange;
		this.dataGenerator.dateInterval = this.stockPricesTimeInterval;
		this.dataGenerator.skipAfterHours = !this.stockPricesTradeAfterHours;
		let stockCompany = this.getStockName(stockSymbol);
		let stockPrices: StockPriceHistory;
		if (this.populateStockPrices == null) {
			this.log("OnGeneratingPrices " + stockSymbol);
			stockPrices = this.dataGenerator.generateStockPrices(stockSymbol, stockCompany);
		} else {
			this.log("OnPopulatePrices " + stockSymbol);
			stockPrices = this.populateStockPrices(stockSymbol);
		}
		return stockPrices;
	}
	protected onGeneratingPosition(stockSymbol: string): StockPosition {
		this.dataGenerator.dateRange = this.stockPricesTimeRange;
		this.dataGenerator.dateInterval = this.stockPricesTimeInterval;
		this.dataGenerator.skipAfterHours = !this.stockPricesTradeAfterHours;
		let stockCompany = this.getStockName(stockSymbol);
		let stockPosition: StockPosition;
		if (this.populateStockPosition == null) {
			this.log("OnGeneratingPosition " + stockSymbol);
			stockPosition = this.dataGenerator.generatePosition(stockSymbol, stockCompany);
		} else {
			this.log("OnPopulatePosition " + stockSymbol);
			stockPosition = this.populateStockPosition(stockSymbol);
		}
		return stockPosition;
	}
	protected onAddingPosition(stockSymbol: string, stockPosition: StockPosition): void {
		if (stringIsNullOrEmpty(stockSymbol)) {
			return;
		}
		if (stockPosition == null) {
			return;
		}
		stockPosition.index = this.cachedPositions.count;
		this.cachedPositions.add(stockPosition);
		this.stockPositions = this.extToArray$1<StockPosition>((<any>StockPosition).$type, this.cachedPositions);
	}
	protected onAddingPrices(stockSymbol: string, stockPrices: StockPriceHistory): void {
		if (stringIsNullOrEmpty(stockSymbol)) {
			return;
		}
		if (stockPrices == null) {
			return;
		}
		this.log("OnAddingPrices " + stockSymbol);
		if (!this.cachedPrices.containsKey(stockSymbol)) {
			this.cachedPrices.addItem(stockSymbol, stockPrices);
		} else {
			return;
		}
		this.stockPrices = this.extToArray$1<StockPriceHistory>((<any>StockPriceHistory).$type, this.cachedPrices.values);
	}
	protected onRemovingPrices(stockSymbol: string, stockIndex: number): void {
		if (stringIsNullOrEmpty(stockSymbol)) {
			return;
		}
		this.log("OnRemovingPrices " + stockSymbol);
		if (this.cachedPrices.containsKey(stockSymbol)) {
			this.cachedPrices.removeItem(stockSymbol);
		} else {
			return;
		}
		this.stockPrices = this.extToArray$1<StockPriceHistory>((<any>StockPriceHistory).$type, this.cachedPrices.values);
	}
	protected onRemovingPosition(stockIndex: number): void {
		this.log("OnRemovingPosition " + stockIndex);
		if (this.cachedPositions.count > stockIndex) {
			this.cachedPositions.removeAt(stockIndex);
		} else {
			return;
		}
		for (let i: number = 0; i < this.cachedPositions.count; i++) {
			this.cachedPositions._inner[i].index = i;
		}
		this.stockPositions = this.extToArray$1<StockPosition>((<any>StockPosition).$type, this.cachedPositions);
	}
	protected onStockClearing(): void {
		this.log("OnStockClearing ");
		this.stockUpdate(this.stockSymbols, <string[]>new Array(0), true);
	}
	protected stockUpdate(oldStocks: string[], newStocks: string[], forceUpdate: boolean = false): void {
		if (this.extEquals(oldStocks, newStocks)) {
			return;
		}
		let combinedSymbols = this.extToList$1<string>(String_$type, oldStocks);
		for (let i = 0; i < newStocks.length; i++) {
			let symbol = newStocks[i];
			if (!combinedSymbols.contains(symbol)) {
				combinedSymbols.add(symbol);
			}
		}
		this._stockSymbols = this.extToArray$1<string>(String_$type, combinedSymbols);
		this.onPropertyUpdated(FinancialDataAdapter.stockSymbolsPropertyName, null, this._stockSymbols);
		this.onStockSymbolsChanged(oldStocks, this._stockSymbols);
	}
	protected stockGenerate(oldStocks: string[], newStocks: string[]): void {
		if (oldStocks == newStocks) {
			return;
		}
		this.log("StockGenerate ");
		if (oldStocks != null && oldStocks.length != 0) {
			for (let i: number = oldStocks.length - 1; i >= 0; i--) {
				let stock = oldStocks[i];
				if (this.cachedPrices.containsKey(stock)) {
					this.onRemovingPrices(stock, i);
				}
			}
		}
		if (newStocks != null && newStocks.length != 0) {
			for (let i1: number = 0; i1 < newStocks.length; i1++) {
				let stock1 = newStocks[i1];
				if (!this.cachedPrices.containsKey(stock1)) {
					let position = this.onGeneratingPosition(stock1);
					let prices = this.onGeneratingPrices(stock1);
					this.onAddingPrices(stock1, prices);
					this.onAddingPosition(stock1, position);
				}
			}
		}
	}
	protected stockRegenerate(): void {
		this.dataGenerator.dateRange = this.stockPricesTimeRange;
		this.dataGenerator.dateInterval = this.stockPricesTimeInterval;
		this.dataGenerator.skipAfterHours = !this.stockPricesTradeAfterHours;
		if (this.stockSymbols == null || this.stockSymbols.length == 0) {
			this.cachedPrices.clear();
			this.cachedPositions.clear();
			arrayClear(this.stockPrices);
			arrayClear(this.stockPositions);
		} else {
			this.cachedPrices.clear();
			this.cachedPositions.clear();
			arrayClear(this.stockPrices);
			arrayClear(this.stockPositions);
			for (let i: number = 0; i < this.stockSymbols.length; i++) {
				let stockSymbol = this.stockSymbols[i];
				let stockPosition = this.onGeneratingPosition(stockSymbol);
				let stockPrices = this.onGeneratingPrices(stockSymbol);
				this.onAddingPrices(stockSymbol, stockPrices);
				this.onAddingPosition(stockSymbol, stockPosition);
			}
		}
	}
	extContains(array: string[], str: string): boolean {
		if (array == null || array.length == 0) {
			return false;
		}
		for (let i = 0; i < array.length; i++) {
			let item = array[i];
			if (str == item) {
				return true;
			}
		}
		return false;
	}
	extToArray$1<T>($t: Type, list: ICollection$1<T>): T[] {
		if (list == null || list.count == 0) {
			return <T[]>new Array(0);
		}
		let array = <T[]>new Array(list.count);
		let i = 0;
		for (let item of fromEnum<T>(list)) {
			array[i] = item;
			i++;
		}
		return array;
	}
	extToList$1<T>($t: Type, array: T[]): List$1<T> {
		if (array == null || array.length == 0) {
			return new List$1<T>($t, 0);
		}
		let list = new List$1<T>($t, 0);
		for (let i: number = 0; i < array.length; i++) {
			list.add(array[i]);
		}
		return list;
	}
	extEquals(array1: any[], array2: any[]): boolean {
		if (array1 == null || array2 == null) {
			return false;
		}
		if (array1.length != array2.length) {
			return false;
		}
		for (let i: number = 0; i < array1.length; i++) {
			if (array1[i] != array2[i]) {
				return false;
			}
		}
		return true;
	}
}


