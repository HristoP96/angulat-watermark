/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class CategorySeriesDescription extends MarkerSeriesDescription {
	static $t: Type = markType(CategorySeriesDescription, 'CategorySeriesDescription', (<any>MarkerSeriesDescription).$type);
	protected get_type(): string {
		return "CategorySeries";
	}
	constructor() {
		super();
	}
	private _isCustomCategoryStyleAllowed: boolean = false;
	get isCustomCategoryStyleAllowed(): boolean {
		return this._isCustomCategoryStyleAllowed;
	}
	set isCustomCategoryStyleAllowed(value: boolean) {
		this._isCustomCategoryStyleAllowed = value;
		this.markDirty("IsCustomCategoryStyleAllowed");
	}
	private _isCustomCategoryMarkerStyleAllowed: boolean = false;
	get isCustomCategoryMarkerStyleAllowed(): boolean {
		return this._isCustomCategoryMarkerStyleAllowed;
	}
	set isCustomCategoryMarkerStyleAllowed(value: boolean) {
		this._isCustomCategoryMarkerStyleAllowed = value;
		this.markDirty("IsCustomCategoryMarkerStyleAllowed");
	}
	private _useHighMarkerFidelity: boolean = false;
	get useHighMarkerFidelity(): boolean {
		return this._useHighMarkerFidelity;
	}
	set useHighMarkerFidelity(value: boolean) {
		this._useHighMarkerFidelity = value;
		this.markDirty("UseHighMarkerFidelity");
	}
	private _transitionInMode: string = null;
	get transitionInMode(): string {
		return this._transitionInMode;
	}
	set transitionInMode(value: string) {
		this._transitionInMode = value;
		this.markDirty("TransitionInMode");
	}
	private _isTransitionInEnabled: boolean = false;
	get isTransitionInEnabled(): boolean {
		return this._isTransitionInEnabled;
	}
	set isTransitionInEnabled(value: boolean) {
		this._isTransitionInEnabled = value;
		this.markDirty("IsTransitionInEnabled");
	}
	private _assigningCategoryStyle: string = null;
	get assigningCategoryStyleRef(): string {
		return this._assigningCategoryStyle;
	}
	set assigningCategoryStyleRef(value: string) {
		this._assigningCategoryStyle = value;
		this.markDirty("AssigningCategoryStyleRef");
	}
	private _assigningCategoryMarkerStyle: string = null;
	get assigningCategoryMarkerStyleRef(): string {
		return this._assigningCategoryMarkerStyle;
	}
	set assigningCategoryMarkerStyleRef(value: string) {
		this._assigningCategoryMarkerStyle = value;
		this.markDirty("AssigningCategoryMarkerStyleRef");
	}
}


