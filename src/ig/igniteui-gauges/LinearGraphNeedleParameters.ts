/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Type, markType } from "igniteui-core/type";
import { LinearScaleOrientation } from "./LinearScaleOrientation";
import { LinearGraphNeedleShape } from "./LinearGraphNeedleShape";

/**
 * @hidden 
 */
export class LinearGraphNeedleParameters extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(LinearGraphNeedleParameters, 'LinearGraphNeedleParameters', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _scaleOrientation: LinearScaleOrientation = <LinearScaleOrientation>0;
	get scaleOrientation(): LinearScaleOrientation {
		return this._scaleOrientation;
	}
	set scaleOrientation(value: LinearScaleOrientation) {
		this._scaleOrientation = value;
	}
	private _isScaleInverted: boolean = false;
	get isScaleInverted(): boolean {
		return this._isScaleInverted;
	}
	set isScaleInverted(value: boolean) {
		this._isScaleInverted = value;
	}
	private _minExtent: number = NaN;
	get outerExtent(): number {
		return this._minExtent;
	}
	set outerExtent(value: number) {
		if (this._minExtent != value) {
			this._minExtent = value;
			this.onPropertyChanged("OuterExtent");
		}
	}
	private _maxExtent: number = NaN;
	get innerExtent(): number {
		return this._maxExtent;
	}
	set innerExtent(value: number) {
		if (this._maxExtent != value) {
			this._maxExtent = value;
			this.onPropertyChanged("InnerExtent");
		}
	}
	private _innerBaseWidth: number = NaN;
	get innerBaseWidth(): number {
		return this._innerBaseWidth;
	}
	set innerBaseWidth(value: number) {
		if (this._innerBaseWidth != value) {
			this._innerBaseWidth = value;
			this.onPropertyChanged("InnerBaseWidth");
		}
	}
	private _outerBaseWidth: number = NaN;
	get outerBaseWidth(): number {
		return this._outerBaseWidth;
	}
	set outerBaseWidth(value: number) {
		if (this._outerBaseWidth != value) {
			this._outerBaseWidth = value;
			this.onPropertyChanged("OuterBaseWidth");
		}
	}
	private _innerPointWidth: number = NaN;
	get innerPointWidth(): number {
		return this._innerPointWidth;
	}
	set innerPointWidth(value: number) {
		if (this._innerPointWidth != value) {
			this._innerPointWidth = value;
			this.onPropertyChanged("InnerPointWidth");
		}
	}
	private _outerPointWidth: number = NaN;
	get outerPointWidth(): number {
		return this._outerPointWidth;
	}
	set outerPointWidth(value: number) {
		if (this._outerPointWidth != value) {
			this._outerPointWidth = value;
			this.onPropertyChanged("OuterPointWidth");
		}
	}
	private _innerPointExtent: number = NaN;
	get innerPointExtent(): number {
		return this._innerPointExtent;
	}
	set innerPointExtent(value: number) {
		if (this._innerPointExtent != value) {
			this._innerPointExtent = value;
			this.onPropertyChanged("InnerPointExtent");
		}
	}
	private _outerPointExtent: number = NaN;
	get outerPointExtent(): number {
		return this._outerPointExtent;
	}
	set outerPointExtent(value: number) {
		if (this._outerPointExtent != value) {
			this._outerPointExtent = value;
			this.onPropertyChanged("OuterPointExtent");
		}
	}
	private _defaultWidth: number = NaN;
	get defaultWidth(): number {
		return this._defaultWidth;
	}
	set defaultWidth(value: number) {
		if (this._defaultWidth != value) {
			this._defaultWidth = value;
			this.onPropertyChanged("DefaultWidth");
		}
	}
	private _needleShape: LinearGraphNeedleShape = LinearGraphNeedleShape.Needle;
	get needleShape(): LinearGraphNeedleShape {
		return this._needleShape;
	}
	set needleShape(value: LinearGraphNeedleShape) {
		if (this._needleShape != value) {
			this._needleShape = value;
			this.onPropertyChanged("NeedleShape");
		}
	}
	clone(): LinearGraphNeedleParameters {
		let ret = new LinearGraphNeedleParameters();
		ret.outerExtent = this.outerExtent;
		ret.innerExtent = this.innerExtent;
		ret.innerBaseWidth = this.innerBaseWidth;
		ret.outerBaseWidth = this.outerBaseWidth;
		ret.innerPointExtent = this.innerPointExtent;
		ret.outerPointExtent = this.outerPointExtent;
		ret.innerPointWidth = this.innerPointWidth;
		ret.outerPointWidth = this.outerPointWidth;
		ret.needleShape = this.needleShape;
		ret.defaultWidth = this.defaultWidth;
		return ret;
	}
	private onPropertyChanged(propertyName: string): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


