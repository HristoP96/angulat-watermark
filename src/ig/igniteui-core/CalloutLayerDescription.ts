/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CalloutLayerDescription extends AnnotationLayerDescription {
	static $t: Type = markType(CalloutLayerDescription, 'CalloutLayerDescription', (<any>AnnotationLayerDescription).$type);
	protected get_type(): string {
		return "CalloutLayer";
	}
	constructor() {
		super();
	}
	private _labelMemberPath: string = null;
	get labelMemberPath(): string {
		return this._labelMemberPath;
	}
	set labelMemberPath(value: string) {
		this._labelMemberPath = value;
		this.markDirty("LabelMemberPath");
	}
	private _xMemberPath: string = null;
	get xMemberPath(): string {
		return this._xMemberPath;
	}
	set xMemberPath(value: string) {
		this._xMemberPath = value;
		this.markDirty("XMemberPath");
	}
	private _yMemberPath: string = null;
	get yMemberPath(): string {
		return this._yMemberPath;
	}
	set yMemberPath(value: string) {
		this._yMemberPath = value;
		this.markDirty("YMemberPath");
	}
	private _keyMemberPath: string = null;
	get keyMemberPath(): string {
		return this._keyMemberPath;
	}
	set keyMemberPath(value: string) {
		this._keyMemberPath = value;
		this.markDirty("KeyMemberPath");
	}
	private _isCalloutOffsettingEnabled: boolean = false;
	get isCalloutOffsettingEnabled(): boolean {
		return this._isCalloutOffsettingEnabled;
	}
	set isCalloutOffsettingEnabled(value: boolean) {
		this._isCalloutOffsettingEnabled = value;
		this.markDirty("IsCalloutOffsettingEnabled");
	}
	private _contentMemberPath: string = null;
	get contentMemberPath(): string {
		return this._contentMemberPath;
	}
	set contentMemberPath(value: string) {
		this._contentMemberPath = value;
		this.markDirty("ContentMemberPath");
	}
	private _targetSeriesRef: string = null;
	get targetSeriesRef(): string {
		return this._targetSeriesRef;
	}
	set targetSeriesRef(value: string) {
		this._targetSeriesRef = value;
		this.markDirty("TargetSeriesRef");
	}
	private _collisionChannel: string = null;
	get collisionChannel(): string {
		return this._collisionChannel;
	}
	set collisionChannel(value: string) {
		this._collisionChannel = value;
		this.markDirty("CollisionChannel");
	}
	private _isAutoCalloutBehaviorEnabled: boolean = false;
	get isAutoCalloutBehaviorEnabled(): boolean {
		return this._isAutoCalloutBehaviorEnabled;
	}
	set isAutoCalloutBehaviorEnabled(value: boolean) {
		this._isAutoCalloutBehaviorEnabled = value;
		this.markDirty("IsAutoCalloutBehaviorEnabled");
	}
	private _useValueForAutoCalloutLabels: boolean = false;
	get useValueForAutoCalloutLabels(): boolean {
		return this._useValueForAutoCalloutLabels;
	}
	set useValueForAutoCalloutLabels(value: boolean) {
		this._useValueForAutoCalloutLabels = value;
		this.markDirty("UseValueForAutoCalloutLabels");
	}
	private _isCustomCalloutStyleEnabled: boolean = false;
	get isCustomCalloutStyleEnabled(): boolean {
		return this._isCustomCalloutStyleEnabled;
	}
	set isCustomCalloutStyleEnabled(value: boolean) {
		this._isCustomCalloutStyleEnabled = value;
		this.markDirty("IsCustomCalloutStyleEnabled");
	}
	private _autoCalloutLabelPrecision: number = 0;
	get autoCalloutLabelPrecision(): number {
		return this._autoCalloutLabelPrecision;
	}
	set autoCalloutLabelPrecision(value: number) {
		this._autoCalloutLabelPrecision = value;
		this.markDirty("AutoCalloutLabelPrecision");
	}
	private _calloutTextColor: string = null;
	get calloutTextColor(): string {
		return this._calloutTextColor;
	}
	set calloutTextColor(value: string) {
		this._calloutTextColor = value;
		this.markDirty("CalloutTextColor");
	}
	private _calloutBackground: string = null;
	get calloutBackground(): string {
		return this._calloutBackground;
	}
	set calloutBackground(value: string) {
		this._calloutBackground = value;
		this.markDirty("CalloutBackground");
	}
	private _calloutInterpolatedValuePrecision: number = 0;
	get calloutInterpolatedValuePrecision(): number {
		return this._calloutInterpolatedValuePrecision;
	}
	set calloutInterpolatedValuePrecision(value: number) {
		this._calloutInterpolatedValuePrecision = value;
		this.markDirty("CalloutInterpolatedValuePrecision");
	}
	private _calloutOutline: string = null;
	get calloutOutline(): string {
		return this._calloutOutline;
	}
	set calloutOutline(value: string) {
		this._calloutOutline = value;
		this.markDirty("CalloutOutline");
	}
	private _calloutLeaderBrush: string = null;
	get calloutLeaderBrush(): string {
		return this._calloutLeaderBrush;
	}
	set calloutLeaderBrush(value: string) {
		this._calloutLeaderBrush = value;
		this.markDirty("CalloutLeaderBrush");
	}
	private _calloutPaddingLeft: number = 0;
	get calloutPaddingLeft(): number {
		return this._calloutPaddingLeft;
	}
	set calloutPaddingLeft(value: number) {
		this._calloutPaddingLeft = value;
		this.markDirty("CalloutPaddingLeft");
	}
	private _calloutPaddingTop: number = 0;
	get calloutPaddingTop(): number {
		return this._calloutPaddingTop;
	}
	set calloutPaddingTop(value: number) {
		this._calloutPaddingTop = value;
		this.markDirty("CalloutPaddingTop");
	}
	private _calloutPaddingRight: number = 0;
	get calloutPaddingRight(): number {
		return this._calloutPaddingRight;
	}
	set calloutPaddingRight(value: number) {
		this._calloutPaddingRight = value;
		this.markDirty("CalloutPaddingRight");
	}
	private _calloutPaddingBottom: number = 0;
	get calloutPaddingBottom(): number {
		return this._calloutPaddingBottom;
	}
	set calloutPaddingBottom(value: number) {
		this._calloutPaddingBottom = value;
		this.markDirty("CalloutPaddingBottom");
	}
	private _calloutCollisionMode: string = null;
	get calloutCollisionMode(): string {
		return this._calloutCollisionMode;
	}
	set calloutCollisionMode(value: string) {
		this._calloutCollisionMode = value;
		this.markDirty("CalloutCollisionMode");
	}
	private _calloutPositionPadding: number = 0;
	get calloutPositionPadding(): number {
		return this._calloutPositionPadding;
	}
	set calloutPositionPadding(value: number) {
		this._calloutPositionPadding = value;
		this.markDirty("CalloutPositionPadding");
	}
	private _calloutStrokeThickness: number = 0;
	get calloutStrokeThickness(): number {
		return this._calloutStrokeThickness;
	}
	set calloutStrokeThickness(value: number) {
		this._calloutStrokeThickness = value;
		this.markDirty("CalloutStrokeThickness");
	}
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		this._textStyle = value;
		this.markDirty("TextStyle");
	}
	private _calloutStyleUpdating: string = null;
	get calloutStyleUpdatingRef(): string {
		return this._calloutStyleUpdating;
	}
	set calloutStyleUpdatingRef(value: string) {
		this._calloutStyleUpdating = value;
		this.markDirty("CalloutStyleUpdatingRef");
	}
	private _calloutContentUpdating: string = null;
	get calloutContentUpdatingRef(): string {
		return this._calloutContentUpdating;
	}
	set calloutContentUpdatingRef(value: string) {
		this._calloutContentUpdating = value;
		this.markDirty("CalloutContentUpdatingRef");
	}
	private _calloutLabelUpdating: string = null;
	get calloutLabelUpdatingRef(): string {
		return this._calloutLabelUpdating;
	}
	set calloutLabelUpdatingRef(value: string) {
		this._calloutLabelUpdating = value;
		this.markDirty("CalloutLabelUpdatingRef");
	}
	private _calloutSeriesSelecting: string = null;
	get calloutSeriesSelectingRef(): string {
		return this._calloutSeriesSelecting;
	}
	set calloutSeriesSelectingRef(value: string) {
		this._calloutSeriesSelecting = value;
		this.markDirty("CalloutSeriesSelectingRef");
	}
}


