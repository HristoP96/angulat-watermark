/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox, Type, markType } from "igniteui-core/type";
import { GridEasingFunctionType, GridEasingFunctionType_$type } from "./GridEasingFunctionType";

/**
 * @hidden 
 */
export class GridAnimationPhaseSettings extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridAnimationPhaseSettings, 'GridAnimationPhaseSettings', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	static readonly durationMillisecondsPropertyName: string = "DurationMilliseconds";
	private _durationMilliseconds: number = 300;
	get durationMilliseconds(): number {
		return this._durationMilliseconds;
	}
	set durationMilliseconds(value: number) {
		let oldValue = this._durationMilliseconds;
		this._durationMilliseconds = value;
		if (oldValue != this._durationMilliseconds) {
			this.onPropertyChanged(GridAnimationPhaseSettings.durationMillisecondsPropertyName, oldValue, this._durationMilliseconds);
		}
	}
	static readonly holdInitialMillisecondsPropertyName: string = "HoldInitialMilliseconds";
	private _holdInitialMilliseconds: number = 0;
	get holdInitialMilliseconds(): number {
		return this._holdInitialMilliseconds;
	}
	set holdInitialMilliseconds(value: number) {
		let oldValue = this._holdInitialMilliseconds;
		this._holdInitialMilliseconds = value;
		if (oldValue != this._holdInitialMilliseconds) {
			this.onPropertyChanged(GridAnimationPhaseSettings.holdInitialMillisecondsPropertyName, oldValue, this._holdInitialMilliseconds);
		}
	}
	static readonly perItemDelayMillisecondsPropertyName: string = "PerItemDelayMilliseconds";
	private _perItemDelayMilliseconds: number = -1;
	get perItemDelayMilliseconds(): number {
		return this._perItemDelayMilliseconds;
	}
	set perItemDelayMilliseconds(value: number) {
		let oldValue = this._perItemDelayMilliseconds;
		this._perItemDelayMilliseconds = value;
		if (oldValue != this._perItemDelayMilliseconds) {
			this.onPropertyChanged(GridAnimationPhaseSettings.perItemDelayMillisecondsPropertyName, oldValue, this._perItemDelayMilliseconds);
		}
	}
	static readonly subItemDurationMillisecondsPropertyName: string = "SubItemDurationMilliseconds";
	private _subItemDurationMilliseconds: number = -1;
	get subItemDurationMilliseconds(): number {
		return this._subItemDurationMilliseconds;
	}
	set subItemDurationMilliseconds(value: number) {
		let oldValue = this._subItemDurationMilliseconds;
		this._subItemDurationMilliseconds = value;
		if (oldValue != this._subItemDurationMilliseconds) {
			this.onPropertyChanged(GridAnimationPhaseSettings.subItemDurationMillisecondsPropertyName, oldValue, this._subItemDurationMilliseconds);
		}
	}
	static readonly desiredSubItemDurationMillisecondsPropertyName: string = "DesiredSubItemDurationMilliseconds";
	private _desiredSubItemDurationMilliseconds: number = 300;
	get desiredSubItemDurationMilliseconds(): number {
		return this._desiredSubItemDurationMilliseconds;
	}
	set desiredSubItemDurationMilliseconds(value: number) {
		let oldValue = this._desiredSubItemDurationMilliseconds;
		this._desiredSubItemDurationMilliseconds = value;
		if (oldValue != this._desiredSubItemDurationMilliseconds) {
			this.onPropertyChanged(GridAnimationPhaseSettings.desiredSubItemDurationMillisecondsPropertyName, oldValue, this._desiredSubItemDurationMilliseconds);
		}
	}
	static readonly shouldItemsFinishSimultaneouslyPropertyName: string = "ShouldItemsFinishSimultaneously";
	private _shouldItemsFinishSimultaneously: boolean = false;
	get shouldItemsFinishSimultaneously(): boolean {
		return this._shouldItemsFinishSimultaneously;
	}
	set shouldItemsFinishSimultaneously(value: boolean) {
		let oldValue = this._shouldItemsFinishSimultaneously;
		this._shouldItemsFinishSimultaneously = value;
		if (oldValue != this._shouldItemsFinishSimultaneously) {
			this.onPropertyChanged(GridAnimationPhaseSettings.shouldItemsFinishSimultaneouslyPropertyName, oldValue, this._shouldItemsFinishSimultaneously);
		}
	}
	static readonly easingFunctionTypePropertyName: string = "EasingFunctionType";
	private _easingFunctionType: GridEasingFunctionType = GridEasingFunctionType.CubicInOut;
	get easingFunctionType(): GridEasingFunctionType {
		return this._easingFunctionType;
	}
	set easingFunctionType(value: GridEasingFunctionType) {
		let oldValue = this._easingFunctionType;
		this._easingFunctionType = value;
		if (oldValue != this._easingFunctionType) {
			this.onPropertyChanged(GridAnimationPhaseSettings.easingFunctionTypePropertyName, enumGetBox<GridEasingFunctionType>(GridEasingFunctionType_$type, oldValue), enumGetBox<GridEasingFunctionType>(GridEasingFunctionType_$type, this._easingFunctionType));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	clone(): GridAnimationPhaseSettings {
		return ((() => {
			let $ret = new GridAnimationPhaseSettings();
			$ret.durationMilliseconds = this.durationMilliseconds;
			$ret.easingFunctionType = this.easingFunctionType;
			$ret.holdInitialMilliseconds = this.holdInitialMilliseconds;
			$ret.perItemDelayMilliseconds = this.perItemDelayMilliseconds;
			$ret.shouldItemsFinishSimultaneously = this.shouldItemsFinishSimultaneously;
			$ret.subItemDurationMilliseconds = this.subItemDurationMilliseconds;
			$ret.desiredSubItemDurationMilliseconds = this.desiredSubItemDurationMilliseconds;
			return $ret;
		})());
	}
}


