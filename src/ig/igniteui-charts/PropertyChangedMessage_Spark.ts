/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ConfigurationMessage_Spark } from "./ConfigurationMessage_Spark";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class PropertyChangedMessage_Spark extends ConfigurationMessage_Spark {
	static $t: Type = markType(PropertyChangedMessage_Spark, 'PropertyChangedMessage_Spark', (<any>ConfigurationMessage_Spark).$type);
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _oldValue: any = null;
	get oldValue(): any {
		return this._oldValue;
	}
	set oldValue(value: any) {
		this._oldValue = value;
	}
	private _newValue: any = null;
	get newValue(): any {
		return this._newValue;
	}
	set newValue(value: any) {
		this._newValue = value;
	}
	toString(): string {
		let oldValue: string = "null";
		let newVAlue: string = "null";
		if (this.oldValue != null) {
			oldValue = this.oldValue.toString();
		}
		if (this.newValue != null) {
			newVAlue = this.newValue.toString();
		}
		return "PropertyChangedMessage[" + this.propertyName + ", " + oldValue + ", " + newVAlue + "]";
	}
}


