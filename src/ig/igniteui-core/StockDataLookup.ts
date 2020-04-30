/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, callStaticConstructors, String_$type, Type, markType } from "./type";
import { StockPricePoint } from "./StockPricePoint";
import { Dictionary$2 } from "./Dictionary$2";
import { Debug } from "./Debug";
import { StockInfo } from "./StockInfo";
import { Random } from "./Random";
import { dateNow } from "./date";

/**
 * @hidden 
 */
export class StockDataLookup extends Base {
	static $t: Type = markType(StockDataLookup, 'StockDataLookup');
	static dictionary: Dictionary$2<string, StockPricePoint> = null;
	private static add(symbol: string, company: string, price: number, volume: number, sector: string): void {
		if (StockDataLookup.dictionary.containsKey(symbol)) {
			Debug.writeLine("StockDataLookup duplicate found: " + symbol);
		} else {
			let stock = new StockPricePoint();
			stock.symbol = symbol;
			stock.company = company;
			stock.open = price;
			stock.close = price;
			stock.volume = volume;
			stock.sector = sector;
			StockDataLookup.dictionary.addItem(symbol, stock);
		}
	}
	static get(symbol: string): StockPricePoint {
		if (StockDataLookup.dictionary.containsKey(symbol)) {
			return StockDataLookup.dictionary.item(symbol);
		} else {
			let dataPoint = new StockPricePoint();
			dataPoint.symbol = symbol;
			dataPoint.open = StockDataLookup.rand.next2(100, 500);
			dataPoint.volume = StockDataLookup.rand.next2(100000, 500000);
			StockDataLookup.dictionary.addItem(symbol, dataPoint);
			return dataPoint;
		}
	}
	static rand: Random = new Random(0);
	static staticInit(): void {
		let start = dateNow();
		StockDataLookup.dictionary = new Dictionary$2<string, StockPricePoint>(String_$type, (<any>StockPricePoint).$type, 0);
		StockDataLookup.add("TSLA", "Tesla Inc", 332.01, 10834796, "Transportation");
		StockDataLookup.add("UBER", "Uber Technologies Inc", 38.79, 79442420, "Transportation");
		StockDataLookup.add("NVDA", "Nvidia Corp", 163.5, 16422819, "Technology");
		StockDataLookup.add("GOOG", "Alphabet Inc", 1204.11, 43944923, "Technology");
		StockDataLookup.add("QCOM", "Qualcomm Inc", 83.24, 16689039, "Technology");
		StockDataLookup.add("ROKU", "Roku Inc", 80.76, 22878291, "Technology");
		StockDataLookup.add("CSCO", "Cisco Systems Inc", 51.83, 28869931, "Technology");
		StockDataLookup.add("INTC", "Intel Corp", 45.33, 39091928, "Technology");
		StockDataLookup.add("ADBE", "Adobe Systems Inc", 270.565, 2698322, "Technology");
		StockDataLookup.add("AVGO", "Broadcom Inc", 293.82, 3786434, "Technology");
		StockDataLookup.add("LYFT", "Lyft Inc", 50, 10007408, "Transportation");
		StockDataLookup.add("PYPL", "PayPal Holdings Inc", 107.6, 5657900, "Financial");
		StockDataLookup.add("ORCL", "Oracle Corp", 53.72, 10664674, "Technology");
		StockDataLookup.add("SBUX", "Starbucks Corp", 77.25, 9778829, "Consumer Goods");
		StockDataLookup.add("TWTR", "Twitter Inc", 37.5, 16829698, "Communication");
		StockDataLookup.add("AMAT", "Applied Materials Inc", 39.26, 10725058, "Materials");
		StockDataLookup.add("ATVI", "Activision Blizzard Inc", 44.73, 9803138, "Technology");
		StockDataLookup.add("SNAP", "Snap Inc", 10.05, 15911862, "Communication");
		StockDataLookup.add("TMUS", "T-Mobile US Inc", 74.38, 3477107, "Communication");
		StockDataLookup.add("AMZN", "Amazon.com Inc", 1836.56, 5783410, "Technology");
		StockDataLookup.add("AAPL", "Apple Inc", 223.55, 957369, "Technology");
		StockDataLookup.add("MSFT", "Microsoft Corp", 124.11, 33944923, "Technology");
		StockDataLookup.add("NFLX", "Netflix Inc", 361.95, 16833347, "Communication");
		StockDataLookup.add("BABA", "Alibaba Group Holding Ltd", 169.79, 22330737, "Technology");
		StockDataLookup.add("BAC", "Bank of America Corp", 28.53, 5783410, "Financial");
		StockDataLookup.add("AMJ", "JP Morgan Chase & Co", 25.34, 1350492, "Financial");
		StockDataLookup.add("TXN", "Texas Instruments Inc", 109.17, 7867589, "Technology");
		StockDataLookup.add("CAT", "Caterpillar Inc", 127.51, 8580682, "Industrial");
		StockDataLookup.add("MMM", "3M Co", 173.935, 5916911, "Materials");
		StockDataLookup.add("DIS", "Walt Disney Co", 131.5, 11389896, "Communication");
		StockDataLookup.add("AMD", "Advanced Micro Devices Inc", 26.98, 99017893, "Technology");
		StockDataLookup.add("HON", "Honeywell Intl. Inc", 168.48, 3705165, "Materials");
		StockDataLookup.add("IBM", "Intl. Business Machines", 133.28, 4958021, "Technology");
		StockDataLookup.add("UTX", "United Technologies Corp", 134.03, 4119212, "Technology");
		StockDataLookup.add("CVS", "CVS Health Corp", 54.3, 11183821, "Consumer Goods");
		StockDataLookup.add("DAL", "Delta Air Lines Inc", 55.44, 5223811, "Transportation");
		StockDataLookup.add("CCZ", "Comcast Corp", 55.5, 410, "Communication");
		StockDataLookup.add("BBY", "Best Buy Co Inc", 70.3, 5408468, "Consumer Goods");
		StockDataLookup.add("AAL", "American Airlines Group Inc", 33.16, 7040853, "Transportation");
		StockDataLookup.add("CRM", "Salesforce.Com Inc", 154.92, 5694582, "Financial");
		StockDataLookup.add("C", "Citigroup Inc", 66.13, 23494395, "Financial");
		StockDataLookup.add("F", "Ford Motor Co", 10.17, 51102054, "Transportation");
		StockDataLookup.add("T", "AT&T Inc", 30.35, 27713285, "Communication");
		StockDataLookup.add("V", "Visa Inc", 157.19, 9729964, "Financial");
		StockDataLookup.add("GE", "General Electric Co", 9.85, 60136022, "Energy");
		StockDataLookup.add("MU", "Micron Technology Inc", 37.36, 33092081, "Technology");
		StockDataLookup.add("MA", "Mastercard Inc", 241.51, 4137245, "Financial");
		StockDataLookup.add("HD", "Home Depot Inc", 191, 3326028, "Materials");
		StockDataLookup.add("VZ", "Verizon Comm Inc", 56.72, 13759350, "Communication");
		StockDataLookup.add("EA", "Electronic Arts Inc", 92.01, 3685460, "Communication");
		StockDataLookup.add("FB", "Facebook Inc", 183.5, 16833347, "Technology");
		StockDataLookup.add("GM", "General Motors Company", 36.85, 19454839, "Transportation");
	}
}


(function(v) { callStaticConstructors(); })(true);
