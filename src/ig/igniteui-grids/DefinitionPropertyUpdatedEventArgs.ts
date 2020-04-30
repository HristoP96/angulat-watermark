/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { CellPropertyAnimationType } from "./CellPropertyAnimationType";

/**
 * @hidden 
 */
export class DefinitionPropertyUpdatedEventArgs extends EventArgs {
	static $t: Type = markType(DefinitionPropertyUpdatedEventArgs, 'DefinitionPropertyUpdatedEventArgs', (<any>EventArgs).$type);
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _animationType: CellPropertyAnimationType = <CellPropertyAnimationType>0;
	get animationType(): CellPropertyAnimationType {
		return this._animationType;
	}
	set animationType(value: CellPropertyAnimationType) {
		this._animationType = value;
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
}


