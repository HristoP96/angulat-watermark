/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LinearGraphRangeDescription extends Description {
	static $t: Type = markType(LinearGraphRangeDescription, 'LinearGraphRangeDescription', (<any>Description).$type);
	protected get_type(): string {
		return "LinearGraphRange";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _name1: string = null;
	get name(): string {
		return this._name1;
	}
	set name(value: string) {
		this._name1 = value;
		this.markDirty("Name");
	}
	private _brush: string = null;
	get brush(): string {
		return this._brush;
	}
	set brush(value: string) {
		this._brush = value;
		this.markDirty("Brush");
	}
	private _outline: string = null;
	get outline(): string {
		return this._outline;
	}
	set outline(value: string) {
		this._outline = value;
		this.markDirty("Outline");
	}
	private _startValue: number = 0;
	get startValue(): number {
		return this._startValue;
	}
	set startValue(value: number) {
		this._startValue = value;
		this.markDirty("StartValue");
	}
	private _endValue: number = 0;
	get endValue(): number {
		return this._endValue;
	}
	set endValue(value: number) {
		this._endValue = value;
		this.markDirty("EndValue");
	}
	private _innerStartExtent: number = 0;
	get innerStartExtent(): number {
		return this._innerStartExtent;
	}
	set innerStartExtent(value: number) {
		this._innerStartExtent = value;
		this.markDirty("InnerStartExtent");
	}
	private _innerEndExtent: number = 0;
	get innerEndExtent(): number {
		return this._innerEndExtent;
	}
	set innerEndExtent(value: number) {
		this._innerEndExtent = value;
		this.markDirty("InnerEndExtent");
	}
	private _outerStartExtent: number = 0;
	get outerStartExtent(): number {
		return this._outerStartExtent;
	}
	set outerStartExtent(value: number) {
		this._outerStartExtent = value;
		this.markDirty("OuterStartExtent");
	}
	private _outerEndExtent: number = 0;
	get outerEndExtent(): number {
		return this._outerEndExtent;
	}
	set outerEndExtent(value: number) {
		this._outerEndExtent = value;
		this.markDirty("OuterEndExtent");
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
		this.markDirty("StrokeThickness");
	}
}


