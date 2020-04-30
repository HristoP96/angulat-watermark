/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { TreemapNodeStyleDescription } from "./TreemapNodeStyleDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TreemapNodeStylingEventArgsDescription extends Description {
	static $t: Type = markType(TreemapNodeStylingEventArgsDescription, 'TreemapNodeStylingEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "TreemapNodeStylingEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		this.markDirty("Value");
	}
	private _sum: number = 0;
	get sum(): number {
		return this._sum;
	}
	set sum(value: number) {
		this._sum = value;
		this.markDirty("Sum");
	}
	private _customValueRef: string = null;
	get customValueRef(): string {
		return this._customValueRef;
	}
	set customValueRef(value: string) {
		this._customValueRef = value;
		this.markDirty("CustomValueRef");
	}
	private _itemRef: string = null;
	get itemRef(): string {
		return this._itemRef;
	}
	set itemRef(value: string) {
		this._itemRef = value;
		this.markDirty("ItemRef");
	}
	private _parentItemRef: string = null;
	get parentItemRef(): string {
		return this._parentItemRef;
	}
	set parentItemRef(value: string) {
		this._parentItemRef = value;
		this.markDirty("ParentItemRef");
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
		this.markDirty("Label");
	}
	private _parentValue: number = 0;
	get parentValue(): number {
		return this._parentValue;
	}
	set parentValue(value: number) {
		this._parentValue = value;
		this.markDirty("ParentValue");
	}
	private _parentLabel: string = null;
	get parentLabel(): string {
		return this._parentLabel;
	}
	set parentLabel(value: string) {
		this._parentLabel = value;
		this.markDirty("ParentLabel");
	}
	private _parentSum: number = 0;
	get parentSum(): number {
		return this._parentSum;
	}
	set parentSum(value: number) {
		this._parentSum = value;
		this.markDirty("ParentSum");
	}
	private _style: TreemapNodeStyleDescription = null;
	get style(): TreemapNodeStyleDescription {
		return this._style;
	}
	set style(value: TreemapNodeStyleDescription) {
		this._style = value;
		this.markDirty("Style");
	}
}


