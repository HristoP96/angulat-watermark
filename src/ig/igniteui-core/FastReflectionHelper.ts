/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { stringContains, stringStartsWith } from "./string";

/**
 * @hidden 
 */
export class FastReflectionHelper extends Base {
	static $t: Type = markType(FastReflectionHelper, 'FastReflectionHelper');
	constructor(useTraditionalReflection: boolean, propertyName: string) {
		super();
		this.useTraditionalReflection = useTraditionalReflection;
		this.updatePropertyName(propertyName);
	}
	static needsHelper(propertyName: string): boolean {
		if (propertyName == null) {
			return false;
		}
		if (propertyName != "." && propertyName != null && stringContains(propertyName, ".") || stringContains(propertyName, "[")) {
			return true;
		}
		return false;
	}
	private _isSelfReference: boolean = false;
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		if (value != this._fullPath) {
			this.updatePropertyName(value);
		}
	}
	private _innerHelper: FastReflectionHelper = null;
	private _isIntIndexer: boolean = false;
	private _isStringIndexer: boolean = false;
	private _index: number = -1;
	private _fullPath: string = null;
	private updatePropertyName(propertyName: string): void {
		this._fullPath = propertyName;
		this._propertyName = propertyName;
		this._isSelfReference = false;
		if (this._propertyName == ".") {
			this._isSelfReference = true;
			return;
		}
		if (this._propertyName == null) {
			return;
		}
		let isExplicitIndexer: boolean = false;
		if (stringStartsWith(propertyName, "[")) {
			isExplicitIndexer = true;
		}
		while (stringStartsWith(propertyName, ".")) {
			propertyName = propertyName.substr(1);
		}
		while (stringStartsWith(propertyName, "[")) {
			propertyName = propertyName.substr(1);
		}
		let indexOfBracket = propertyName.indexOf("[");
		let indexOfDot = propertyName.indexOf(".");
		let indexOfSpecialChar: number = -1;
		if (indexOfBracket < 0) {
			indexOfSpecialChar = indexOfDot;
		} else if (indexOfDot < 0) {
			indexOfSpecialChar = indexOfBracket;
		} else {
			indexOfSpecialChar = Math.min(indexOfDot, indexOfBracket);
		}
		if (indexOfSpecialChar > 0) {
			if (propertyName.charAt(indexOfSpecialChar) == '[' || !isExplicitIndexer) {
				let rest: string = propertyName.substr(indexOfSpecialChar, propertyName.length - indexOfSpecialChar);
				this._innerHelper = new FastReflectionHelper(this.useTraditionalReflection, rest);
				this.updatePropertyName(propertyName.substr(0, indexOfSpecialChar));
				return;
			}
		}
		let indexOfClosingBracket = propertyName.indexOf("]");
		if (indexOfClosingBracket > 0) {
			let rest1: string = propertyName.substr(indexOfClosingBracket + 1, propertyName.length - indexOfClosingBracket - 1);
			if (rest1.length > 0) {
				this._innerHelper = new FastReflectionHelper(this.useTraditionalReflection, rest1);
			}
			propertyName = propertyName.substr(0, indexOfClosingBracket);
			if (this.isInteger(propertyName)) {
				this._isIntIndexer = true;
				this._index = parseInt(propertyName);
			} else {
				this._isStringIndexer = true;
			}
		} else {
			this._isIntIndexer = false;
			this._isStringIndexer = false;
		}
		this._propertyName = propertyName;
	}
	private isInteger(propertyName: string): boolean {
		if (propertyName == null) {
			return false;
		}
		let trimmed: string = propertyName.trim();
		if (trimmed.length == 0) {
			return false;
		}
		for (let i = 0; i < trimmed.length; i++) {
			let c = trimmed.charAt(i);
			let charCode = c.charCodeAt(0);
			if (48 <= charCode && charCode <= 57) {
				continue;
			}
			return false;
		}
		return true;
	}
	private _useTraditionalReflection: boolean = false;
	get useTraditionalReflection(): boolean {
		return this._useTraditionalReflection;
	}
	set useTraditionalReflection(value: boolean) {
		this._useTraditionalReflection = value;
	}
	getPropertyValue(item: any): any {
		let from_ = item;
		if (this._isSelfReference) {
			return from_;
		}
		let ret: any = null;
		if (this._isIntIndexer) {
			ret = from_[this._index];
		} else {
			ret = from_[this._propertyName];
		}
		if (this._innerHelper != null) {
			return this._innerHelper.getPropertyValue(ret);
		}
		return ret;
	}
	get invalid(): boolean {
		return false;
	}
}


