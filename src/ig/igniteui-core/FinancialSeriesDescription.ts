/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesDescription } from "./SeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class FinancialSeriesDescription extends SeriesDescription {
	static $t: Type = markType(FinancialSeriesDescription, 'FinancialSeriesDescription', (<any>SeriesDescription).$type);
	protected get_type(): string {
		return "FinancialSeries";
	}
	constructor() {
		super();
	}
	private _negativeBrush: string = null;
	get negativeBrush(): string {
		return this._negativeBrush;
	}
	set negativeBrush(value: string) {
		this._negativeBrush = value;
		this.markDirty("NegativeBrush");
	}
	private _xAxisRef: string = null;
	get xAxisRef(): string {
		return this._xAxisRef;
	}
	set xAxisRef(value: string) {
		this._xAxisRef = value;
		this.markDirty("XAxisRef");
	}
	private _yAxisRef: string = null;
	get yAxisRef(): string {
		return this._yAxisRef;
	}
	set yAxisRef(value: string) {
		this._yAxisRef = value;
		this.markDirty("YAxisRef");
	}
	private _openMemberPath: string = null;
	get openMemberPath(): string {
		return this._openMemberPath;
	}
	set openMemberPath(value: string) {
		this._openMemberPath = value;
		this.markDirty("OpenMemberPath");
	}
	private _highMemberPath: string = null;
	get highMemberPath(): string {
		return this._highMemberPath;
	}
	set highMemberPath(value: string) {
		this._highMemberPath = value;
		this.markDirty("HighMemberPath");
	}
	private _lowMemberPath: string = null;
	get lowMemberPath(): string {
		return this._lowMemberPath;
	}
	set lowMemberPath(value: string) {
		this._lowMemberPath = value;
		this.markDirty("LowMemberPath");
	}
	private _closeMemberPath: string = null;
	get closeMemberPath(): string {
		return this._closeMemberPath;
	}
	set closeMemberPath(value: string) {
		this._closeMemberPath = value;
		this.markDirty("CloseMemberPath");
	}
	private _volumeMemberPath: string = null;
	get volumeMemberPath(): string {
		return this._volumeMemberPath;
	}
	set volumeMemberPath(value: string) {
		this._volumeMemberPath = value;
		this.markDirty("VolumeMemberPath");
	}
	private _isCustomCategoryStyleAllowed: boolean = false;
	get isCustomCategoryStyleAllowed(): boolean {
		return this._isCustomCategoryStyleAllowed;
	}
	set isCustomCategoryStyleAllowed(value: boolean) {
		this._isCustomCategoryStyleAllowed = value;
		this.markDirty("IsCustomCategoryStyleAllowed");
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
	private _typical: string = null;
	get typicalRef(): string {
		return this._typical;
	}
	set typicalRef(value: string) {
		this._typical = value;
		this.markDirty("TypicalRef");
	}
	private _typicalBasedOn: string = null;
	get typicalBasedOnRef(): string {
		return this._typicalBasedOn;
	}
	set typicalBasedOnRef(value: string) {
		this._typicalBasedOn = value;
		this.markDirty("TypicalBasedOnRef");
	}
}


