/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, EnumUtil, Boolean_$type, Type, markType, enumGetBox } from "igniteui-core/type";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { Fdc3IntentType, Fdc3IntentType_$type } from "./Fdc3IntentType";
import { Fdc3Dictionary } from "./Fdc3Dictionary";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { Fdc3Util } from "./Fdc3Util";
import { Fdc3ContextType } from "./Fdc3ContextType";

/**
 * @hidden 
 */
export class Fdc3Serializer extends Base {
	static $t: Type = markType(Fdc3Serializer, 'Fdc3Serializer');
	constructor() {
		super();
		this._sb = new StringBuilder(0);
	}
	toString(): string {
		return this._sb.toString();
	}
	private _sb: StringBuilder = null;
	private _tabLevel: number = 0;
	private _newLine: boolean = false;
	toJson(context: Fdc3Context): string {
		this._sb.clear();
		if (typeCast<Fdc3Instrument>((<any>Fdc3Instrument).$type, context) !== null) {
			this.add4(typeCast<Fdc3Instrument>((<any>Fdc3Instrument).$type, context));
		} else if (typeCast<Fdc3InstrumentList>((<any>Fdc3InstrumentList).$type, context) !== null) {
			this.add5(typeCast<Fdc3InstrumentList>((<any>Fdc3InstrumentList).$type, context));
		} else if (typeCast<Fdc3Position>((<any>Fdc3Position).$type, context) !== null) {
			this.add9(typeCast<Fdc3Position>((<any>Fdc3Position).$type, context));
		} else if (typeCast<Fdc3Portfolio>((<any>Fdc3Portfolio).$type, context) !== null) {
			this.add8(typeCast<Fdc3Portfolio>((<any>Fdc3Portfolio).$type, context));
		} else if (typeCast<Fdc3Contact>((<any>Fdc3Contact).$type, context) !== null) {
			this.add1(typeCast<Fdc3Contact>((<any>Fdc3Contact).$type, context));
		} else if (typeCast<Fdc3ContactList>((<any>Fdc3ContactList).$type, context) !== null) {
			this.add2(typeCast<Fdc3ContactList>((<any>Fdc3ContactList).$type, context));
		} else if (typeCast<Fdc3Organization>((<any>Fdc3Organization).$type, context) !== null) {
			this.add6(typeCast<Fdc3Organization>((<any>Fdc3Organization).$type, context));
		} else if (typeCast<Fdc3OrganizationList>((<any>Fdc3OrganizationList).$type, context) !== null) {
			this.add7(typeCast<Fdc3OrganizationList>((<any>Fdc3OrganizationList).$type, context));
		} else {
			this.add3(typeCast<Fdc3Context>((<any>Fdc3Context).$type, context));
		}
		return this.toString();
	}
	add4(context: Fdc3Instrument, endWith: string = ""): void {
		this.log("serializing Fdc3Instrument");
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "ticker") {
				continue;
			}
			if (key != "id") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.id == null) {
			this.addProp1("id", "null");
		} else {
			this.addProp("id");
			this.addObjectOpen();
			this.addProp1("ticker", context.ticker);
			let $t1 = context.id.getKeys();
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let name = $t1[i1];
				if (name == "ticker") {
					continue;
				}
				this.addProp1(name, context.id.item(name));
			}
			this.addObjectClose();
		}
		this.addObjectClose(endWith);
	}
	add5(context: Fdc3InstrumentList): void {
		this.log("serializing Fdc3InstrumentList");
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "id") {
				continue;
			}
			if (key != "instruments") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.instruments == null) {
			this.addProp1("instruments", "null");
		} else {
			this.addProp("instruments");
			this.addArrayOpen();
			let $t1 = context.instruments;
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let instrument = $t1[i1];
				this.add4(instrument, ",");
			}
			this.addArrayClose();
		}
		this.addObjectClose();
	}
	add8(context: Fdc3Portfolio): void {
		this.log("serializing Fdc3Portfolio");
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "id") {
				continue;
			}
			if (key != "positions") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.positions == null) {
			this.addProp1("positions", "null");
		} else {
			this.addProp("positions");
			this.addArrayOpen();
			let $t1 = context.positions;
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let position = $t1[i1];
				this.add9(position, ",");
			}
			this.addArrayClose();
		}
		this.addObjectClose();
	}
	add9(context: Fdc3Position, endWith: string = ""): void {
		this.log("serializing Fdc3Position");
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "id") {
				continue;
			}
			if (key != "instrument") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.instrument == null) {
			this.addProp1("instrument", "null");
		} else {
			this.addProp("instrument");
			this.add4(context.instrument, ",");
		}
		this.addObjectClose(endWith);
	}
	add1(context: Fdc3Contact, endWith: string = ""): void {
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "email") {
				continue;
			}
			if (key == "phone") {
				continue;
			}
			if (key != "id") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.id == null) {
			this.addProp1("id", "null");
		} else {
			this.addProp("id");
			this.addObjectOpen();
			let $t1 = context.id.getKeys();
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let key1 = $t1[i1];
				this.addProp1(key1, context.id.item(key1));
			}
			this.addObjectClose();
		}
		this.addObjectClose(endWith);
	}
	log(message_: string): void {
		
        // console.log('FDC3 Serializer... ' +  message_);
    ;
	}
	add2(context: Fdc3ContactList): void {
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "id") {
				continue;
			}
			if (key != "contacts") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.contacts == null) {
			this.addProp1("contacts", "null");
		} else {
			this.addProp("contacts");
			this.addArrayOpen();
			let $t1 = context.contacts;
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let item = $t1[i1];
				this.add1(item, ",");
			}
			this.addArrayClose();
		}
		this.addObjectClose();
	}
	add6(context: Fdc3Organization, endWith: string = ""): void {
		this.log("serializing Fdc3Organization");
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "email") {
				continue;
			}
			if (key == "phone") {
				continue;
			}
			if (key != "id") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.id == null) {
			this.addProp1("id", "null");
		} else {
			this.addProp("id");
			this.addObjectOpen();
			let $t1 = context.id.getKeys();
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let key1 = $t1[i1];
				this.addProp1(key1, context.id.item(key1));
			}
			this.addObjectClose();
		}
		this.addObjectClose(endWith);
	}
	add7(context: Fdc3OrganizationList): void {
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key == "id") {
				continue;
			}
			if (key != "organizations") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.organizations == null) {
			this.addProp1("organizations", "null");
		} else {
			this.addProp("organizations");
			this.addArrayOpen();
			let $t1 = context.organizations;
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let item = $t1[i1];
				this.add4(item, ",");
			}
			this.addArrayClose();
		}
		this.addObjectClose();
	}
	add3(context: Fdc3Context, endWith: string = ""): void {
		this.log("serializing Fdc3Context");
		this.addObjectOpen();
		this.addProp1("type", context.type);
		if (!stringIsNullOrEmpty(context.target)) {
			this.addProp1("target", context.target);
		}
		if (context.intent != Fdc3IntentType.Unknown) {
			this.addProp1("intent", EnumUtil.getName<Fdc3IntentType>(Fdc3IntentType_$type, context.intent));
		}
		if (!stringIsNullOrEmpty(context.name)) {
			this.addProp1("name", context.name);
		}
		let $t = context.getKeys();
		for (let i = 0; i < $t.length; i++) {
			let key = $t[i];
			if (key == "type") {
				continue;
			}
			if (key == "name") {
				continue;
			}
			if (key == "target") {
				continue;
			}
			if (key == "intent") {
				continue;
			}
			if (key != "id") {
				this.addProp1(key, context.item(key));
			}
		}
		if (context.id == null) {
			this.addProp1("id", "null");
		} else {
			this.addProp("id");
			this.addObjectOpen();
			let $t1 = context.id.getKeys();
			for (let i1 = 0; i1 < $t1.length; i1++) {
				let key1 = $t1[i1];
				this.addProp1(key1, context.id.item(key1));
			}
			this.addObjectClose();
		}
		this.addObjectClose(endWith);
	}
	addArrayOpen(): Fdc3Serializer {
		this.addLine("[");
		this.tabIncrease();
		return this;
	}
	addArrayClose(endWith: string = ""): Fdc3Serializer {
		this.tabDecrease();
		this.addLine("]" + endWith);
		return this;
	}
	addObjectOpen(): Fdc3Serializer {
		this.addLine("{");
		this.tabIncrease();
		return this;
	}
	addObjectClose(endWith: string = ""): Fdc3Serializer {
		this.tabDecrease();
		this.addLine("}" + endWith);
		return this;
	}
	add(val: string): Fdc3Serializer {
		this.addTabs();
		this._sb.append5(val);
		return this;
	}
	addLine(val: string): Fdc3Serializer {
		this.addTabs();
		this._sb.appendLine1(val);
		this._newLine = true;
		return this;
	}
	addProp(name: string): Fdc3Serializer {
		this.addTabs();
		this._sb.appendLine1("\"" + name + "\": ");
		this._newLine = true;
		return this;
	}
	addProp1(name: string, value: any, comment: string = ""): Fdc3Serializer {
		this.addTabs();
		if (!stringIsNullOrEmpty(comment)) {
			comment = " // " + comment;
		}
		let propValue = value == null ? "null" : value;
		if (typeof value === 'string') {
			this._sb.appendLine1("\"" + name + "\": \"" + propValue + "\"," + comment);
		} else if (typeCast<boolean>(Boolean_$type, value) !== null) {
			let boolVal = propValue.toString().toLowerCase();
			this._sb.appendLine1("\"" + name + "\": " + boolVal + "," + comment);
		} else {
			this._sb.appendLine1("\"" + name + "\": " + propValue + "," + comment);
		}
		this._newLine = true;
		return this;
	}
	private addTabs(): Fdc3Serializer {
		if (this._newLine) {
			for (let i = 0; i < this._tabLevel; i++) {
				this._sb.append5("    ");
			}
			this._newLine = false;
		}
		return this;
	}
	tabIncrease(): Fdc3Serializer {
		this._tabLevel++;
		return this;
	}
	tabDecrease(): Fdc3Serializer {
		this._tabLevel--;
		return this;
	}
}

/**
 * @hidden 
 */
export class Fdc3Context extends Fdc3Dictionary {
	static $t: Type = markType(Fdc3Context, 'Fdc3Context', (<any>Fdc3Dictionary).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, type: Fdc3ContextType);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ Fdc3ContextType.Unknown ];
				{
					let type: Fdc3ContextType = <Fdc3ContextType>$outerArgs[0];
					this.type = Fdc3Util.getString(type);
					this.id = new Fdc3Dictionary();
				}
			}
			break;

			case 1:
			{
				let type: Fdc3ContextType = <Fdc3ContextType>_rest[0];
				this.type = Fdc3Util.getString(type);
				this.id = new Fdc3Dictionary();
			}
			break;

		}

	}
	get intent(): Fdc3IntentType {
		return Fdc3Util.getIntentType(this.item("intent").toString());
	}
	set intent(value: Fdc3IntentType) {
		this.item("intent", enumGetBox<Fdc3IntentType>(Fdc3IntentType_$type, value));
	}
	get type(): string {
		return this.item("type").toString();
	}
	set type(value: string) {
		this.item("type", value);
	}
	get target(): string {
		return this.getString("target");
	}
	set target(value: string) {
		this.item("target", value);
	}
	get name(): string {
		return this.getString("name");
	}
	set name(value: string) {
		this.item("name", value);
	}
	private _id: Fdc3Dictionary = null;
	get id(): Fdc3Dictionary {
		return this._id;
	}
	set id(value: Fdc3Dictionary) {
		this._id = value;
	}
	toJson(): string {
		let serializer = new Fdc3Serializer();
		let json = serializer.toJson(this);
		return json;
	}
}

/**
 * @hidden 
 */
export class Fdc3Instrument extends Fdc3Context {
	static $t: Type = markType(Fdc3Instrument, 'Fdc3Instrument', (<any>Fdc3Context).$type);
	constructor() {
		super(1, Fdc3ContextType.Instrument);
	}
	get ticker(): string {
		return this.id.item("ticker").toString();
	}
	set ticker(value: string) {
		this.id.item("ticker", value);
	}
}

/**
 * @hidden 
 */
export class Fdc3InstrumentList extends Fdc3Context {
	static $t: Type = markType(Fdc3InstrumentList, 'Fdc3InstrumentList', (<any>Fdc3Context).$type);
	constructor() {
		super(0);
		this.type = Fdc3Util.getString(Fdc3ContextType.InstrumentList);
		this.instruments = <Fdc3Instrument[]>new Array(0);
	}
	private _instruments: Fdc3Instrument[] = null;
	get instruments(): Fdc3Instrument[] {
		return this._instruments;
	}
	set instruments(value: Fdc3Instrument[]) {
		this._instruments = value;
	}
}

/**
 * @hidden 
 */
export class Fdc3Position extends Fdc3Context {
	static $t: Type = markType(Fdc3Position, 'Fdc3Position', (<any>Fdc3Context).$type);
	constructor() {
		super(1, Fdc3ContextType.Position);
		this.instrument = new Fdc3Instrument();
	}
	get instrument(): Fdc3Instrument {
		return typeCast<Fdc3Instrument>((<any>Fdc3Instrument).$type, this.item("instrument"));
	}
	set instrument(value: Fdc3Instrument) {
		this.item("instrument", value);
	}
	get shares(): number {
		return this.getNumber("shares");
	}
	set shares(value: number) {
		this.item("shares", value);
	}
	get cost(): number {
		return this.getNumber("cost");
	}
	set cost(value: number) {
		this.item("cost", value);
	}
	get price(): number {
		return this.getNumber("price");
	}
	set price(value: number) {
		this.item("price", value);
	}
}

/**
 * @hidden 
 */
export class Fdc3Portfolio extends Fdc3Context {
	static $t: Type = markType(Fdc3Portfolio, 'Fdc3Portfolio', (<any>Fdc3Context).$type);
	constructor() {
		super(1, Fdc3ContextType.Portfolio);
		this.positions = <Fdc3Position[]>new Array(0);
	}
	private _positions: Fdc3Position[] = null;
	get positions(): Fdc3Position[] {
		return this._positions;
	}
	set positions(value: Fdc3Position[]) {
		this._positions = value;
	}
}

/**
 * @hidden 
 */
export class Fdc3Organization extends Fdc3Context {
	static $t: Type = markType(Fdc3Organization, 'Fdc3Organization', (<any>Fdc3Context).$type);
	constructor() {
		super(1, Fdc3ContextType.Organization);
	}
}

/**
 * @hidden 
 */
export class Fdc3OrganizationList extends Fdc3Context {
	static $t: Type = markType(Fdc3OrganizationList, 'Fdc3OrganizationList', (<any>Fdc3Context).$type);
	constructor() {
		super(1, Fdc3ContextType.OrganizationList);
	}
	private _organizations: Fdc3Instrument[] = null;
	get organizations(): Fdc3Instrument[] {
		return this._organizations;
	}
	set organizations(value: Fdc3Instrument[]) {
		this._organizations = value;
	}
}

/**
 * @hidden 
 */
export class Fdc3Contact extends Fdc3Context {
	static $t: Type = markType(Fdc3Contact, 'Fdc3Contact', (<any>Fdc3Context).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, fullName: string, email: string, phone: string, twitter?: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ "", "", "", "" ];
				{
					let fullName: string = <string>$outerArgs[0];
					let email: string = <string>$outerArgs[1];
					let phone: string = <string>$outerArgs[2];
					let twitter: string = <string>$outerArgs[3];
					super(1, Fdc3ContextType.Contact);
					this.name = fullName;
					this.email = email;
					this.phone = phone;
					this.twitter = twitter;
				}
			}
			break;

			case 1:
			{
				let fullName: string = <string>_rest[0];
				let email: string = <string>_rest[1];
				let phone: string = <string>_rest[2];
				let twitter: string = <string>_rest[3];
				super(1, Fdc3ContextType.Contact);
				this.name = fullName;
				this.email = email;
				this.phone = phone;
				this.twitter = twitter;
			}
			break;

		}

	}
	get email(): string {
		return this.id.item("email").toString();
	}
	set email(value: string) {
		this.id.item("email", value);
	}
	get phone(): string {
		return this.id.item("phone").toString();
	}
	set phone(value: string) {
		this.id.item("phone", value);
	}
	get twitter(): string {
		return this.id.item("twitter").toString();
	}
	set twitter(value: string) {
		this.id.item("twitter", value);
	}
}

/**
 * @hidden 
 */
export class Fdc3ContactList extends Fdc3Context {
	static $t: Type = markType(Fdc3ContactList, 'Fdc3ContactList', (<any>Fdc3Context).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, arr: Fdc3Contact[]);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(1, Fdc3ContextType.ContactList);
				this._contacts = null;
				this.contacts = <Fdc3Contact[]>new Array(0);
			}
			break;

			case 1:
			{
				let arr: Fdc3Contact[] = <Fdc3Contact[]>_rest[0];
				{
					super(1, Fdc3ContextType.ContactList);
					this._contacts = null;
					this.contacts = <Fdc3Contact[]>new Array(0);
				}
				this.contacts = arr;
			}
			break;

		}

	}
	private _contacts: Fdc3Contact[];
	get contacts(): Fdc3Contact[] {
		return this._contacts;
	}
	set contacts(value: Fdc3Contact[]) {
		this._contacts = value;
	}
}


