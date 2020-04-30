/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "./type";
import { Random } from "./Random";
import { StockPosition } from "./StockPosition";
import { StockPricePoint } from "./StockPricePoint";
import { StockDataLookup } from "./StockDataLookup";
import { StockInfo } from "./StockInfo";
import { StockDetails } from "./StockDetails";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { StockPriceHistory } from "./StockPriceHistory";
import { intDivide, truncate } from "./number";
import { dateNow, dateFromValues, dateGetMonth, dateAddMonths, dateAddMinutes, dateGetTimeOfDay } from "./date";
import { timeSpanTotalMinutes, timeSpanInit1 } from "./timespan";
import { stringIsNullOrEmpty } from "./string";
import { DayOfWeek, DayOfWeek_$type } from "./dateExtended";
import { round10N } from "./numberExtended";

/**
 * @hidden 
 */
export class StockDataGenerator extends Base {
	static $t: Type = markType(StockDataGenerator, 'StockDataGenerator');
	constructor() {
		super();
		this.skipAfterHours = false;
		this.priceStart = 0;
		this.priceRange = NaN;
		this.priceMinimum = NaN;
		this.priceMaximum = NaN;
		this.volumeStart = 0;
		this.volumeRange = NaN;
		this.dateRange = 12;
		this.dateInterval = 24 * 60;
	}
	private _priceStart: number = 0;
	get priceStart(): number {
		return this._priceStart;
	}
	set priceStart(value: number) {
		this._priceStart = value;
	}
	private _priceRange: number = 0;
	get priceRange(): number {
		return this._priceRange;
	}
	set priceRange(value: number) {
		this._priceRange = value;
	}
	private _priceMinimum: number = 0;
	get priceMinimum(): number {
		return this._priceMinimum;
	}
	set priceMinimum(value: number) {
		this._priceMinimum = value;
	}
	private _priceMaximum: number = 0;
	get priceMaximum(): number {
		return this._priceMaximum;
	}
	set priceMaximum(value: number) {
		this._priceMaximum = value;
	}
	private _volumeStart: number = 0;
	get volumeStart(): number {
		return this._volumeStart;
	}
	set volumeStart(value: number) {
		this._volumeStart = value;
	}
	private _volumeRange: number = 0;
	get volumeRange(): number {
		return this._volumeRange;
	}
	set volumeRange(value: number) {
		this._volumeRange = value;
	}
	private _dateRange: number = 0;
	get dateRange(): number {
		return this._dateRange;
	}
	set dateRange(value: number) {
		this._dateRange = value;
	}
	private _dateInterval: number = 0;
	get dateInterval(): number {
		return this._dateInterval;
	}
	set dateInterval(value: number) {
		this._dateInterval = value;
	}
	private _stockInterval: number = 0;
	get stockInterval(): number {
		return this._stockInterval;
	}
	set stockInterval(value: number) {
		this._stockInterval = value;
	}
	private _skipAfterHours: boolean = false;
	get skipAfterHours(): boolean {
		return this._skipAfterHours;
	}
	set skipAfterHours(value: boolean) {
		this._skipAfterHours = value;
	}
	private dateEnd: Date = new Date();
	private dateStart: Date = new Date();
	private rand: Random = new Random(0);
	generatePosition(symbol: string, company: string = ""): StockPosition {
		let current = StockDataLookup.get(symbol);
		let changePercentage = (intDivide(this.rand.next2(1, 10), 100));
		let position = new StockPosition();
		position.symbol = current.symbol;
		position.company = current.company;
		position.sector = current.sector;
		position.costPerShare = current.close - (current.open * changePercentage);
		position.marketPrice = current.close;
		position.tradeDate = dateNow();
		return position;
	}
	generateDetails(): StockDetails[] {
		let list = new List$1<StockDetails>((<any>StockDetails).$type, 0);
		for (let stock of fromEnum<StockPricePoint>(StockDataLookup.dictionary.values)) {
			let changePercentage = (intDivide(this.rand.next2(10, 30), 100));
			let details = new StockDetails();
			details.company = stock.company;
			details.symbol = stock.symbol;
			details.sector = stock.sector;
			details.marketPrice = stock.close;
			details.marketShares = intDivide((stock.volume * this.rand.next2(15, 20)), 1000000);
			details.annualLow = stock.close - (stock.open * changePercentage);
			details.annualHigh = stock.close + (stock.open * changePercentage);
			list.add(details);
		}
		return list.toArray();
	}
	generateStockPrices(symbol: string, company: string = ""): StockPriceHistory {
		let now = dateNow();
		this.dateEnd = dateFromValues(now.getFullYear(), dateGetMonth(now), now.getDate(), 16, 30, 0, 0);
		this.dateStart = dateAddMonths(this.dateEnd, -this.dateRange);
		let dateSteps = Math.ceil(timeSpanTotalMinutes((+(this.dateEnd) - +(this.dateStart))) / this.dateInterval);
		let dateRange = dateSteps * this.dateInterval;
		this.log(dateSteps + " steps, " + dateRange + " range");
		if (dateSteps > 100000) {
			dateSteps = 100000;
			dateRange = dateSteps * this.dateInterval;
			this.log(dateSteps + "^steps, " + dateRange + " range");
		}
		let dateAdjusted = dateAddMinutes(this.dateEnd, -dateRange);
		if (this.dateStart.getTime() > dateAdjusted.getTime()) {
			this.dateStart = dateAdjusted;
		}
		let dataPoint = StockDataLookup.get(symbol);
		dataPoint.date = this.dateStart;
		let sector = dataPoint.sector;
		if (this.priceStart > 0) {
			dataPoint.open = this.priceStart;
		}
		if (this.volumeStart > 0) {
			dataPoint.volume = this.volumeStart;
		}
		this.volumeRange = dataPoint.volume * 0.05;
		this.priceRange = dataPoint.open * 0.025;
		this.priceMinimum = dataPoint.open - (dataPoint.open * 0.75);
		this.priceMaximum = dataPoint.open + (dataPoint.open * 0.75);
		dataPoint.high = dataPoint.open + (dataPoint.open * 0.02);
		dataPoint.low = dataPoint.open - (dataPoint.open * 0.02);
		dataPoint.close = dataPoint.open + ((this.rand.nextDouble() - 0.5) * this.priceRange);
		let dataSource = new StockPriceHistory();
		dataSource.symbol = symbol;
		if (!stringIsNullOrEmpty(company)) {
			dataPoint.company = company;
			dataSource.company = company;
		} else if (!stringIsNullOrEmpty(dataPoint.company)) {
			dataSource.company = dataPoint.company;
		}
		do {
			if (this.skipAfterHours) {
				if (!this.isAfterHours(dataPoint.date)) {
					dataSource.add(dataPoint);
				}
			} else {
				dataSource.add(dataPoint);
			}
			dataPoint = this.generateStockPricePoint(dataPoint);
		} while (dataPoint.date.getTime() <= this.dateEnd.getTime());
		this.log(" " + dataSource.count + " items");
		return dataSource;
	}
	private isAfterHours(date: Date): boolean {
		if (date.getDay() == DayOfWeek.Saturday) {
			return true;
		}
		if (date.getDay() == DayOfWeek.Sunday) {
			return true;
		}
		let start = timeSpanInit1(9, 30, 0);
		let end = timeSpanInit1(16, 30, 0);
		let time = dateGetTimeOfDay(date);
		if (time < start || time > end) {
			return true;
		}
		return false;
	}
	generateStockPricePoint(previous: StockPricePoint): StockPricePoint {
		let priceChange = (this.rand.nextDouble() - 0.499) * this.priceRange;
		let priceOpen = previous.close;
		let priceClose = previous.close + priceChange;
		if (priceClose < this.priceMinimum) {
			priceClose = this.priceMinimum + priceChange;
		}
		if (priceClose > this.priceMaximum) {
			priceClose = this.priceMaximum - priceChange;
		}
		let priceHigh = (this.rand.nextDouble() * 1.5 * Math.abs(priceChange));
		let priceLow = (this.rand.nextDouble() * 1.5 * Math.abs(priceChange));
		if (priceClose > priceOpen) {
			priceHigh = priceClose + priceHigh;
			priceLow = priceOpen - priceLow;
		} else {
			priceHigh = priceOpen + priceHigh;
			priceLow = priceClose - priceLow;
		}
		let volumeChange = (this.rand.nextDouble() - 0.49) * this.volumeRange;
		let volume = <number>truncate(Math.abs(previous.volume + volumeChange));
		let date = dateAddMinutes(previous.date, this.dateInterval);
		if (date.getTime() > this.dateEnd.getTime()) {
			date = this.dateEnd;
		}
		let dataPoint = ((() => {
			let $ret = new StockPricePoint();
			$ret.date = dateAddMinutes(previous.date, this.dateInterval);
			$ret.symbol = previous.symbol;
			$ret.company = previous.company;
			$ret.sector = previous.sector;
			$ret.close = round10N(priceClose, 2);
			$ret.open = round10N(priceOpen, 2);
			$ret.high = round10N(priceHigh, 2);
			$ret.low = round10N(priceLow, 2);
			$ret.volume = volume;
			return $ret;
		})());
		return dataPoint;
	}
	log(message_: string): void {
		
        console.log('FDC3 Generator... ' + message_);
    ;
	}
}


