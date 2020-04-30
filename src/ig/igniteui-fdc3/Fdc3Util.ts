/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, callStaticConstructors, String_$type, EnumUtil, Type, markType } from "igniteui-core/type";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Fdc3ContextType, Fdc3ContextType_$type } from "./Fdc3ContextType";
import { Fdc3IntentType, Fdc3IntentType_$type } from "./Fdc3IntentType";

/**
 * @hidden 
 */
export class Fdc3Util extends Base {
	static $t: Type = markType(Fdc3Util, 'Fdc3Util');
	private static contextTypes: Dictionary$2<string, Fdc3ContextType> = null;
	private static intentTypes: Dictionary$2<string, Fdc3IntentType> = null;
	static staticInit(): void {
		Fdc3Util.contextTypes = new Dictionary$2<string, Fdc3ContextType>(String_$type, Fdc3ContextType_$type, 0);
		Fdc3Util.add(Fdc3ContextType.Unknown);
		Fdc3Util.add(Fdc3ContextType.Instrument);
		Fdc3Util.add(Fdc3ContextType.InstrumentList);
		Fdc3Util.add(Fdc3ContextType.Position);
		Fdc3Util.add(Fdc3ContextType.Portfolio);
		Fdc3Util.add(Fdc3ContextType.Organization);
		Fdc3Util.add(Fdc3ContextType.OrganizationList);
		Fdc3Util.add(Fdc3ContextType.Contact);
		Fdc3Util.add(Fdc3ContextType.ContactList);
		Fdc3Util.intentTypes = new Dictionary$2<string, Fdc3IntentType>(String_$type, Fdc3IntentType_$type, 0);
		Fdc3Util.add1(Fdc3IntentType.Unknown);
		Fdc3Util.add1(Fdc3IntentType.ViewChart);
		Fdc3Util.add1(Fdc3IntentType.ViewInstrument);
		Fdc3Util.add1(Fdc3IntentType.ViewAnalysis);
		Fdc3Util.add1(Fdc3IntentType.StartCall);
		Fdc3Util.add1(Fdc3IntentType.StartChat);
		Fdc3Util.add1(Fdc3IntentType.ViewContact);
		Fdc3Util.add1(Fdc3IntentType.ViewQuote);
		Fdc3Util.add1(Fdc3IntentType.ViewNews);
	}
	static getString(type: Fdc3ContextType): string {
		let typeStr = EnumUtil.getName<Fdc3ContextType>(Fdc3ContextType_$type, type);
		return "fdc3." + typeStr.substr(0, 1).toLowerCase() + typeStr.substr(1);
	}
	static getContextType(name: string): Fdc3ContextType {
		if (Fdc3Util.contextTypes.containsKey(name)) {
			return Fdc3Util.contextTypes.item(name);
		} else {
			return Fdc3ContextType.Unknown;
		}
	}
	static getIntentType(name: string): Fdc3IntentType {
		if (Fdc3Util.intentTypes.containsKey(name)) {
			return Fdc3Util.intentTypes.item(name);
		} else {
			return Fdc3IntentType.Unknown;
		}
	}
	static add(type: Fdc3ContextType): void {
		let name = Fdc3Util.getString(type);
		if (!Fdc3Util.contextTypes.containsKey(name)) {
			Fdc3Util.contextTypes.addItem(name, type);
		}
	}
	static add1(type: Fdc3IntentType): void {
		let name = EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, type);
		if (!Fdc3Util.intentTypes.containsKey(name)) {
			Fdc3Util.intentTypes.addItem(name, type);
		}
	}
}


(function(v) { callStaticConstructors(); })(true);
