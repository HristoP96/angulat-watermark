/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Specifies type of FDC3 intent
 *  https://fdc3.finos.org/docs/1.0/intents-spec
 * 
 */
export enum Fdc3IntentType {
	/**
	 * Specifies no intent for FDC3 data adapter to listen to
	 */
	None = 0,
	/**
	 * Specifies all intents for FDC3 data adapter to listen to
	 */
	All = 1,
	/**
	 * Specifies an intent that is unknown by FDC3 data adapter
	 */
	Unknown = 2,
	/**
	 * Specifies an intent to view a chart for stock tickers in the Instrument context
	 */
	ViewChart = 3,
	/**
	 * Specifies an intent to view information about stock tickers in the Instrument context
	 */
	ViewInstrument = 4,
	/**
	 * Currently not supported - Starts a call with Contact(s) context
	 */
	StartCall = 5,
	/**
	 * Currently not supported - Starts a chat with Contact(s) context
	 */
	StartChat = 6,
	/**
	 * Currently not supported - Display analysis about Instrument, Contact, or Organization
	 */
	ViewAnalysis = 7,
	/**
	 * Currently not supported - Display details of the Contact context
	 */
	ViewContact = 8,
	/**
	 * Currently not supported - Display news for Instrument, Contact, or Organization
	 */
	ViewNews = 9,
	/**
	 * Currently not supported - Display pricing for the Instrument context
	 */
	ViewQuote = 10
}

/**
 * @hidden 
 */
export let Fdc3IntentType_$type = markEnum('Fdc3IntentType', 'None,0|All,1|Unknown,2|ViewChart,3|ViewInstrument,4|StartCall,5|StartChat,6|ViewAnalysis,7|ViewContact,8|ViewNews,9|ViewQuote,10');


