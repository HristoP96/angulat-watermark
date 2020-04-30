/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Specifies type of FDC3 context
 *  https://fdc3.finos.org/docs/1.0/context-spec
 * 
 */
export enum Fdc3ContextType {
	/**
	 * Specifies a context that is unknown by FDC3 data adapter
	 */
	Unknown = 0,
	/**
	 * Specifies FDC3 context for single instrument with stock name, stock ticker/symbol
	 */
	Instrument = 1,
	/**
	 * Specifies FDC3 context for multiple instrument
	 */
	InstrumentList = 2,
	/**
	 * Specifies FDC3 context for single position
	 */
	Position = 3,
	/**
	 * Specifies FDC3 context for multiple positions
	 */
	Portfolio = 4,
	/**
	 * Currently not supported - Specifies FDC3 context for single contact with person name, email, phone, etc.
	 */
	Contact = 5,
	/**
	 * Currently not supported - Specifies FDC3 context for multiple contacts
	 */
	ContactList = 6,
	/**
	 * Currently not supported - Specifies FDC3 context for single organization with company name
	 */
	Organization = 7,
	/**
	 * Currently not supported - Specifies FDC3 context for multiple organizations
	 */
	OrganizationList = 8
}

/**
 * @hidden 
 */
export let Fdc3ContextType_$type = markEnum('Fdc3ContextType', 'Unknown,0|Instrument,1|InstrumentList,2|Position,3|Portfolio,4|Contact,5|ContactList,6|Organization,7|OrganizationList,8');


