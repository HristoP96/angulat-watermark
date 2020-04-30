/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialDataAdapter } from "igniteui-core/FinancialDataAdapter";
import { IDisposable, IDisposable_$type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, typeCast, IEnumerable$1, fromEnum, Type, markType } from "igniteui-core/type";
import { Fdc3Message } from "./Fdc3Message";
import { Fdc3Context } from "./Fdc3Context";
import { List$1 } from "igniteui-core/List$1";
import { Fdc3Position } from "./Fdc3Position";
import { Fdc3Instrument } from "./Fdc3Instrument";
import { Fdc3InstrumentList } from "./Fdc3InstrumentList";
import { Fdc3Portfolio } from "./Fdc3Portfolio";
import { StockPriceHistory } from "igniteui-core/StockPriceHistory";
import { StockPosition } from "igniteui-core/StockPosition";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Fdc3Converter } from "./Fdc3Converter";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { arrayClear } from "igniteui-core/array";

/**
 * @hidden 
 */
export class Fdc3DataAdapter extends FinancialDataAdapter implements IDisposable {
	static $t: Type = markType(Fdc3DataAdapter, 'Fdc3DataAdapter', (<any>FinancialDataAdapter).$type, [IDisposable_$type]);
	protected onPropertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	messageReceived: (message: Fdc3Message) => void = null;
	onMessageReceived(message: Fdc3Message): void {
		if (message == null) {
			return;
		}
		if (message.context != null && stringIsNullOrEmpty(message.json)) {
			message.json = message.context.toJson();
			this.log("received '" + message.intentType + "' intent '" + message.contextType + "' context with JSON:\n" + message.json);
		}
		if (this.messageReceived != null && message != null) {
			this.messageReceived(message);
		}
	}
	isOpenFinRunning(): boolean {
		let isRunning_ = true;
		
        if (!window.hasOwnProperty('fin')) {
            isRunning_ = false;
        }
    ;
		return isRunning_;
	}
	subscribe(intentType_: string, contextType_: string = ""): void {
		if (!this.isOpenFinRunning()) {
			return;
		}
		if (stringIsNullOrEmpty(intentType_)) {
			intentType_ = "ViewChart";
		}
		this.log("Subscribing to '" + intentType_ + "' intent and '" + contextType_ + "' context");
		let addIntentListener_: any = this._openFin.addIntentListener;
		
        // calling OpenFin API:
        addIntentListener_(intentType_,
        (context: any): Promise<void> => {
            return new Promise((resolve, reject) => {
                try
                {
                    this.log('Subscriber received context ' );

                    if (context.type == null || context.type === undefined)
                    {    
                        this.log('Subscriber received context with missing context.type' ); 
                        return; 
                    }

                    if (contextType_ !== '' && contextType_ !== context.type)
                    {    
                        this.log('Subscriber skipping not matching context.type' ); 
                        return; 
                    }
                    // call function to handle intent and process its context
                    this.handleIntent(context, context.type, intentType_);
                    resolve();
                }
                catch (e)
                {
                    this.log('Subscriber detected error with ' + intentType_ + ' intent: \n' + e);
                    reject(e);
                }
            });
        });
    ;
	}
	private handleIntent(context_: any, contextType_: string, intentType_: string): void {
		let msg_ = new Fdc3Message();
		this.log("HandleIntent '" + intentType_ + "' intent with '" + contextType_ + "' context");
		msg_.intentType = intentType_;
		msg_.contextType = contextType_;
		

        this.log('HandleIntent');
        if (contextType_ === 'fdc3.instrument')
        {
            var instrument = Fdc3Converter.toInstrument(context_);
            msg_.context = instrument;
        }
        else if (contextType_ === 'fdc3.instrumentList')
        {
            var list = Fdc3Converter.toInstrumentList(context_);
            msg_.context = list;
        }
        else if (contextType_ === 'fdc3.position')
        {
            var position = Fdc3Converter.toPosition(context_);
            msg_.context = position;
        }
        else if (contextType_ === 'fdc3.portfolio')
        {
            var portfolio = Fdc3Converter.toPortfolio(context_);
            msg_.context = portfolio;
        }
        else // TODO other unsupported/custom context of FDC3 messages
        { 
        //  var custom = Fdc3Converter.toPortfolio(context_);
        //  msg_.context = custom;
        //  this.log('received custom \n' + custom.toJson());
        }
    ;
		let positionList = new List$1<Fdc3Position>((<any>Fdc3Position).$type, 0);
		let instrumentList = new List$1<Fdc3Instrument>((<any>Fdc3Instrument).$type, 0);
		let tickerSymbols = new List$1<string>(String_$type, 0);
		let tickerNames = new List$1<string>(String_$type, 0);
		if (contextType_ == "fdc3.instrument") {
			this.cachedPrices.clear();
			arrayClear(this.stockPrices);
			let instrument = typeCast<Fdc3Instrument>((<any>Fdc3Instrument).$type, msg_.context);
			instrumentList.add(instrument);
			let ticker = instrument.ticker;
			if (!tickerSymbols.contains(ticker)) {
				tickerSymbols.add(ticker);
			}
			let name = instrument.name;
			if (!tickerNames.contains(name)) {
				tickerNames.add(name);
			}
		} else if (contextType_ == "fdc3.instrumentList") {
			this.cachedPrices.clear();
			arrayClear(this.stockPrices);
			let list = typeCast<Fdc3InstrumentList>((<any>Fdc3InstrumentList).$type, msg_.context);
			instrumentList.addRange(<IEnumerable$1<Fdc3Instrument>><any>list.instruments);
			let $t = list.instruments;
			for (let i = 0; i < $t.length; i++) {
				let instrument1 = $t[i];
				let ticker1 = instrument1.ticker;
				if (!tickerSymbols.contains(ticker1)) {
					tickerSymbols.add(ticker1);
				}
				let name1 = instrument1.name;
				if (!tickerNames.contains(name1)) {
					tickerNames.add(name1);
				}
			}
		} else if (contextType_ == "fdc3.position") {
			let position = typeCast<Fdc3Position>((<any>Fdc3Position).$type, msg_.context);
			positionList.add(position);
			let ticker2 = position.instrument.ticker;
			if (!tickerSymbols.contains(ticker2)) {
				tickerSymbols.add(position.instrument.ticker);
			}
			let name2 = position.instrument.name;
			if (!tickerNames.contains(name2)) {
				tickerNames.add(name2);
			}
		} else if (contextType_ == "fdc3.portfolio") {
			this.cachedPositions.clear();
			arrayClear(this.stockPositions);
			let portfolio = typeCast<Fdc3Portfolio>((<any>Fdc3Portfolio).$type, msg_.context);
			positionList.addRange(<IEnumerable$1<Fdc3Position>><any>portfolio.positions);
			let $t1 = portfolio.positions;
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let position1 = $t1[i1];
				let ticker3 = position1.instrument.ticker;
				if (!tickerSymbols.contains(ticker3)) {
					tickerSymbols.add(position1.instrument.ticker);
				}
				let name3 = position1.instrument.name;
				if (!tickerNames.contains(name3)) {
					tickerNames.add(name3);
				}
			}
		}
		msg_.tickerSymbols = this.extToArray$1<string>(String_$type, tickerSymbols);
		msg_.tickerNames = this.extToArray$1<string>(String_$type, tickerNames);
		this.log("HandleIntent tickerSymbols " + msg_.tickerSymbols);
		this.log("HandleIntent instrumentList " + instrumentList.count);
		this.log("HandleIntent positionList " + positionList.count);
		for (let stock of fromEnum<Fdc3Instrument>(instrumentList)) {
			let ticker4 = stock.ticker;
			if (stringIsNullOrEmpty(ticker4)) {
				continue;
			}
			let prices = this.onGeneratingPrices(ticker4);
			this.onAddingPrices(ticker4, prices);
		}
		for (let stock1 of fromEnum<Fdc3Position>(positionList)) {
			let ticker5 = stock1.instrument.ticker;
			if (stringIsNullOrEmpty(ticker5)) {
				continue;
			}
			let position2 = this.onGeneratingPosition(ticker5);
			if (stock1.cost > 0) {
				position2.costPerShare = stock1.cost;
			}
			if (stock1.shares > 0) {
				position2.shares = stock1.shares;
			}
			if (stock1.price > 0) {
				position2.marketPrice = stock1.price;
			}
			this.onAddingPosition(ticker5, position2);
		}
		this.onMessageReceived(msg_);
	}
	sendInstrument(intent: string, instrument: Fdc3Instrument, target: string = ""): void {
		if (instrument == null) {
			return;
		}
		let context = Fdc3Converter.fromInstrument(instrument);
		this.send(intent, context, target);
	}
	sendInstrumentList(intent: string, list: Fdc3InstrumentList, target: string = ""): void {
		if (list == null) {
			return;
		}
		let context = Fdc3Converter.fromInstrumentList(list);
		this.send(intent, context, target);
	}
	sendPosition(intent: string, position: Fdc3Position, target: string = ""): void {
		if (position == null) {
			return;
		}
		let context = Fdc3Converter.fromPosition(position);
		this.send(intent, context, target);
	}
	sendPortfolio(intent: string, portfolio: Fdc3Portfolio, target: string = ""): void {
		if (portfolio == null) {
			return;
		}
		let context = Fdc3Converter.fromPortfolio(portfolio);
		this.send(intent, context, target);
	}
	private send(intent_: string, context_: any, target_: string = ""): void {
		if (!this.isOpenFinRunning()) {
			return;
		}
		let raiseIntent_: any = this._openFin.raiseIntent;
		
		this.log('Sending \'' + intent_ + '\' intent to \'' + target_ + '\' target');
        // calling OpenFin API: 
        if (target_ == null || target_ === '') {
            raiseIntent_(intent_, context_); // send to all OpenFin apps
        } else {
            raiseIntent_(intent_, context_, target_); // send only to Target app
        }
    ;
	}
	private _openFin: any = null;
	constructor(openFin: any) {
		super();
		this._openFin = openFin;
	}
	private _disposed: boolean = false;
	private get disposed(): boolean {
		return this._disposed;
	}
	private set disposed(value: boolean) {
		this._disposed = value;
	}
	protected disposeUnmanaged(isDisposing: boolean): void {
		this.disposed = true;
	}
	dispose(): void {
		this.disposeUnmanaged(true);
	}
}


