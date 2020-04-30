/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Type, markType, enumGetBox } from "igniteui-core/type";
import { ITrackOwner } from "./ITrackOwner";
import { ThumbRangePosition, ThumbRangePosition_$type } from "./ThumbRangePosition";

/**
 * @hidden 
 */
export class TrackThumbRange extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(TrackThumbRange, 'TrackThumbRange', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _position: number = 0;
	private _width: number = 0;
	private _minWidth: number = 0;
	private _maxWidth: number = 1;
	private _lowerThumb: TrackThumb = null;
	private _higherThumb: TrackThumb = null;
	private _owner: ITrackOwner = null;
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdated(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private propertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		this.markDirty();
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected markDirty(): void {
		if (this.owner == null) {
			return;
		}
		this.owner.trackDirty();
	}
	get owner(): ITrackOwner {
		return this._owner;
	}
	set owner(value: ITrackOwner) {
		let oldValue = this._owner;
		this._owner = value;
		if (oldValue != this._owner) {
			this.onPropertyChanged("Owner", oldValue, this._owner);
		}
	}
	get position(): number {
		return this._position;
	}
	set position(value: number) {
		let oldValue = this._position;
		this._position = value;
		if (oldValue != this._position) {
			this.onPropertyChanged("Position", oldValue, this._position);
		}
	}
	push(amount: number): number {
		if (amount > 0 && this.position + (this.width / 2) + amount > 1) {
			amount = 1 - (this.position + (this.width / 2));
		}
		if (amount < 0 && (this.position - (this.width / 2)) + amount < 0) {
			amount = (this.position - (this.width / 2)) * -1;
		}
		this.lowerThumb.position += amount;
		this.higherThumb.position += amount;
		this.position += amount;
		return amount;
	}
	pushFromHigher(amount: number): number {
		amount = this.coerceAmount(amount);
		let left = this.position - this.width / 2;
		this.width += amount;
		this.position = left + this.width / 2;
		return amount;
	}
	private coerceAmount(amount: number): number {
		if (amount < 0) {
			let targetWidth = this.width + amount;
			if (targetWidth < this.minWidth) {
				targetWidth = this.minWidth;
				amount = (targetWidth - this.width);
			}
		}
		if (amount > 0) {
			let targetWidth1 = this.width + amount;
			if (targetWidth1 > this.maxWidth) {
				targetWidth1 = this.maxWidth;
				amount = (targetWidth1 - this.width);
			}
		}
		return amount;
	}
	pushFromLower(amount: number): number {
		amount = -1 * this.coerceAmount(amount * -1);
		let right = this.position + this.width / 2;
		this.width -= amount;
		this.position = right - this.width / 2;
		return amount;
	}
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		let oldValue = this._width;
		this._width = value;
		if (oldValue != this._width) {
			this.onPropertyChanged("Width", oldValue, this._width);
		}
	}
	get minWidth(): number {
		return this._minWidth;
	}
	set minWidth(value: number) {
		let oldValue = this._minWidth;
		this._minWidth = value;
		if (oldValue != this._minWidth) {
			this.onPropertyChanged("MinWidth", oldValue, this._minWidth);
		}
	}
	get maxWidth(): number {
		return this._maxWidth;
	}
	set maxWidth(value: number) {
		let oldValue = this._maxWidth;
		this._maxWidth = value;
		if (oldValue != this._maxWidth) {
			this.onPropertyChanged("MaxWidth", oldValue, this._maxWidth);
		}
	}
	get lowerThumb(): TrackThumb {
		return this._lowerThumb;
	}
	set lowerThumb(value: TrackThumb) {
		let oldValue = this._lowerThumb;
		this._lowerThumb = value;
		if (oldValue != this._lowerThumb) {
			this.onPropertyChanged("LowerThumb", oldValue, this._lowerThumb);
		}
	}
	get higherThumb(): TrackThumb {
		return this._higherThumb;
	}
	set higherThumb(value: TrackThumb) {
		let oldValue = this._higherThumb;
		this._higherThumb = value;
		if (oldValue != this._higherThumb) {
			this.onPropertyChanged("HigherThumb", oldValue, this._higherThumb);
		}
	}
}

/**
 * @hidden 
 */
export class TrackThumb extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(TrackThumb, 'TrackThumb', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _position: number = 0;
	private _width: number = 0;
	private _rangePosition: ThumbRangePosition = ThumbRangePosition.PinnedHigher;
	private _range: TrackThumbRange = null;
	private _owner: ITrackOwner = null;
	get owner(): ITrackOwner {
		return this._owner;
	}
	set owner(value: ITrackOwner) {
		let oldValue = this._owner;
		this._owner = value;
		if (oldValue != this._owner) {
			this.onPropertyChanged("Owner", oldValue, this._owner);
		}
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdated(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private propertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		this.markDirty();
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	push(amount: number): number {
		if (this.position + amount > 1) {
			amount = 1 - this.position;
		}
		if (this.position + amount < 0) {
			amount = -this.position;
		}
		if (this.range != null) {
			if (this.rangePosition == ThumbRangePosition.PinnedLower) {
				amount = this.range.pushFromLower(amount);
			} else {
				amount = this.range.pushFromHigher(amount);
			}
		}
		this.position += amount;
		return amount;
	}
	protected markDirty(): void {
		if (this.owner == null) {
			return;
		}
		this.owner.trackDirty();
	}
	get position(): number {
		return this._position;
	}
	set position(value: number) {
		let oldValue = this._position;
		this._position = value;
		if (oldValue != this._position) {
			this.onPropertyChanged("Position", oldValue, this._position);
		}
	}
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		let oldValue = this._width;
		this._width = value;
		if (oldValue != this._width) {
			this.onPropertyChanged("Width", oldValue, this._width);
		}
	}
	get rangePosition(): ThumbRangePosition {
		return this._rangePosition;
	}
	set rangePosition(value: ThumbRangePosition) {
		let oldValue = this._rangePosition;
		this._rangePosition = value;
		if (oldValue != this._rangePosition) {
			this.onPropertyChanged("RangePosition", enumGetBox<ThumbRangePosition>(ThumbRangePosition_$type, oldValue), enumGetBox<ThumbRangePosition>(ThumbRangePosition_$type, this._rangePosition));
		}
	}
	get range(): TrackThumbRange {
		return this._range;
	}
	set range(value: TrackThumbRange) {
		let oldValue = this._range;
		this._range = value;
		if (oldValue != this._range) {
			this.onPropertyChanged("Range", oldValue, this._range);
		}
	}
}


