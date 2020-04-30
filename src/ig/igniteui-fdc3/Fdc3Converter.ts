/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Fdc3Instrument } from "./Fdc3Instrument";
import { Fdc3InstrumentList } from "./Fdc3InstrumentList";
import { Fdc3Position } from "./Fdc3Position";
import { Fdc3Portfolio } from "./Fdc3Portfolio";

/**
 * @hidden 
 */
export class Fdc3Converter extends Base {
	static $t: Type = markType(Fdc3Converter, 'Fdc3Converter');
	static log(message_: string): void {
		
        console.log('FDC3 Converter... ' + message_);
    ;
	}
	static toInstrument(context_: any): Fdc3Instrument {
		let instrument_ = new Fdc3Instrument();
		if (context_ == null) {
			return instrument_;
		}
		
        // Fdc3Converter.log('converting to Instrument');
        var propNames = Object.getOwnPropertyNames(context_);  
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];

            if (prop === 'id') {
                var propIDs = Object.getOwnPropertyNames(context_[prop]);
                for (var ii = 0; ii < propIDs.length; ii++) {
                    var id = propIDs[ii]; 
                    instrument_.id.set(id, context_[prop][id]); 
                }
            } else {
                instrument_.set(prop, context_[prop]); 
            }
        } 
    ;
		return instrument_;
	}
	static toInstrumentList(context_: any): Fdc3InstrumentList {
		let list_ = new Fdc3InstrumentList();
		if (context_ == null) {
			return list_;
		}
		
        // Fdc3Converter.log('converting to InstrumentList'); 
        var propNames = Object.getOwnPropertyNames(context_); 
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];

            if (context_[prop] instanceof Array) {
                var array = context_[prop] as Array<any>;
                for (var ii = 0; ii < array.length; ii++) {
                    var item = array[ii];
                    if (item['type'] === 'fdc3.instrument') {
                        var instrument = this.toInstrument(item);
                        list_.instruments.push(instrument);
                    }
                }
            } else {
                list_.set(prop, context_[prop]);
            }
        }
    ;
		return list_;
	}
	static toPosition(context_: any): Fdc3Position {
		let position_ = new Fdc3Position();
		if (context_ == null) {
			return position_;
		}
		
        // Fdc3Converter.log('converting to Position');
        var propNames = Object.getOwnPropertyNames(context_); 
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];

            if (prop === 'instrument') {
                var inst = Fdc3Converter.toInstrument(context_[prop] as any);
                position_.instrument = inst;
            } else {
                position_.set(prop, context_[prop]);
            }
        }
    ;
		return position_;
	}
	static toPortfolio(context_: any): Fdc3Portfolio {
		let portfolio_ = new Fdc3Portfolio();
		if (context_ == null) {
			return portfolio_;
		}
		
        // Fdc3Converter.log('converting to Portfolio'); 
        var propNames = Object.getOwnPropertyNames(context_); 
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];
 
            if (context_[prop] instanceof Array) {
                // Fdc3Converter.log('array ');
                var array = context_[prop] as Array<any>;
                for (var ii = 0; ii < array.length; ii++) {
                    var item = array[ii];
                    if (item['type'] === 'fdc3.position') {
                        var position_ = Fdc3Converter.toPosition(item);
                        portfolio_.positions.push(position_);
                    }
                }
            }
            else {
                portfolio_.set(prop, context_[prop]);
            }
        }
    ;
		return portfolio_;
	}
	static fromPortfolio(portfolio_: Fdc3Portfolio): any {
		let context_: any = null;
		if (portfolio_ == null) {
			return context_;
		}
		
        // Fdc3Converter.log('converting from Portfolio'); 

        context_ = { };
        var propNames = portfolio_.getKeys();
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];
            context_[prop] = portfolio_.item(prop);
        }

        context_.positions = [];
        for (var i = 0; i < portfolio_.positions.length; i++) {
            var position_ = portfolio_.positions[i];
            var item = Fdc3Converter.fromPosition(position_);
            context_.positions.push(item);
        }
    ;
		return context_;
	}
	static fromPosition(position_: Fdc3Position): any {
		let context_: any = null;
		if (position_ == null) {
			return context_;
		}
		
        // Fdc3Converter.log('converting from position');  
        context_ = { };
        var propNames = position_.getKeys();
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];
            context_[prop] = position_.item(prop);
        }
        context_.instrument = Fdc3Converter.fromInstrument(position_.instrument);
    ;
		return context_;
	}
	static fromInstrumentList(list_: Fdc3InstrumentList): any {
		let context_: any = null;
		if (list_ == null) {
			return context_;
		}
		
        // Fdc3Converter.log('converting from InstrumentList');   
        context_ = { }; 
        var propNames = list_.getKeys();
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];
            context_[prop] = list_.item(prop);
        }
        context_.instruments = [];
        for (var i = 0; i < list_.instruments.length; i++) {
            var instrument = list_.instruments[i];
            var item = Fdc3Converter.fromInstrument(instrument);
            context_.instruments.push(item);
        }
    ;
		return context_;
	}
	static fromInstrument(instrument_: Fdc3Instrument): any {
		let context_: any = null;
		if (instrument_ == null) {
			return context_;
		}
		
        // Fdc3Converter.log('converting from Instrument');    
        context_ = { };
        var propNames = instrument_.getKeys();
        for (var i = 0; i < propNames.length; i++) {
            var prop = propNames[i];
            context_[prop] = instrument_.item(prop);
        }
        context_.id = {};
        var propIDs = instrument_.id.getKeys();
        for (var i = 0; i < propIDs.length; i++) {
            var prop = propIDs[i];
            context_.id[prop] = instrument_.id.item(prop);
        }
    ;
		return context_;
	}
}


