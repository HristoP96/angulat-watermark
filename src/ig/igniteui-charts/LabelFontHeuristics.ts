/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LabelFontHeuristics extends Base {
	static $t: Type = markType(LabelFontHeuristics, 'LabelFontHeuristics');
	constructor() {
		super();
		this.labelHeight = NaN;
		this.labelWidestCharacterGuess = NaN;
		this.labelMinimumDesiredCharacters = NaN;
		this.labelMinimumWidth = NaN;
	}
	private _labelHeight: number = 0;
	get labelHeight(): number {
		return this._labelHeight;
	}
	set labelHeight(value: number) {
		this._labelHeight = value;
	}
	private _labelWidestCharacterGuess: number = 0;
	get labelWidestCharacterGuess(): number {
		return this._labelWidestCharacterGuess;
	}
	set labelWidestCharacterGuess(value: number) {
		this._labelWidestCharacterGuess = value;
	}
	private _labelMinimumDesiredCharacters: number = 0;
	get labelMinimumDesiredCharacters(): number {
		return this._labelMinimumDesiredCharacters;
	}
	set labelMinimumDesiredCharacters(value: number) {
		this._labelMinimumDesiredCharacters = value;
	}
	private _labelMinimumWidth: number = 0;
	get labelMinimumWidth(): number {
		return this._labelMinimumWidth;
	}
	set labelMinimumWidth(value: number) {
		this._labelMinimumWidth = value;
	}
}


