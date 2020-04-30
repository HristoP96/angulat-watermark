/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, delegateRemove, delegateCombine, Type, markType } from "igniteui-core/type";
import { GridAnimationPhaseSettings } from "./GridAnimationPhaseSettings";
import { GridEasingFunctionType } from "./GridEasingFunctionType";

/**
 * @hidden 
 */
export class GridColumnAnimationSettings extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridColumnAnimationSettings, 'GridColumnAnimationSettings', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	constructor() {
		super();
		this._columnAddingMainPhase = new GridAnimationPhaseSettings();
		this._columnAddingMainPhase.durationMilliseconds = 1000;
		this._columnAddingMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnAddingMainPhase.holdInitialMilliseconds = 500;
		this._columnAddingMainPhase.shouldItemsFinishSimultaneously = false;
		this._columnShowingMainPhase = this._columnAddingMainPhase.clone();
		this._columnPropertyUpdatingMainPhase = new GridAnimationPhaseSettings();
		this._columnPropertyUpdatingMainPhase.durationMilliseconds = 1000;
		this._columnPropertyUpdatingMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnPropertyUpdatingMainPhase.shouldItemsFinishSimultaneously = false;
		this._columnAddingPrePhase = new GridAnimationPhaseSettings();
		this._columnAddingPrePhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnAddingPrePhase.durationMilliseconds = 300;
		this._columnShowingPrePhase = this._columnAddingPrePhase.clone();
		this._columnHidingMainPhase = this._columnAddingMainPhase.clone();
		this._columnHidingMainPhase.holdInitialMilliseconds = 0;
		this._columnHidingPostPhase = new GridAnimationPhaseSettings();
		this._columnHidingPostPhase.holdInitialMilliseconds = 1200;
		this._columnHidingPostPhase.durationMilliseconds = 300;
		this._columnHidingPostPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnMovingMainPhase = new GridAnimationPhaseSettings();
		this._columnMovingMainPhase.durationMilliseconds = 1000;
		this._columnMovingMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnMovingMainPhase.holdInitialMilliseconds = 500;
		this._columnMovingMainPhase.shouldItemsFinishSimultaneously = false;
		this._columnMovingPrePhase = new GridAnimationPhaseSettings();
		this._columnMovingPrePhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnMovingPrePhase.durationMilliseconds = 800;
		this._columnExchangingMainPhase = this._columnAddingMainPhase.clone();
		this._columnExchangingMainPhase.holdInitialMilliseconds = 0;
		this._columnExchangingCleanupPhase = new GridAnimationPhaseSettings();
		this._columnExchangingCleanupPhase.holdInitialMilliseconds = 0;
		this._columnExchangingCleanupPhase.durationMilliseconds = 300;
		this._columnExchangingCleanupPhase.easingFunctionType = GridEasingFunctionType.Linear;
		this._columnResizingMainPhase = new GridAnimationPhaseSettings();
		this._columnResizingMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._columnResizingMainPhase.durationMilliseconds = 200;
	}
	private _columnPropertyUpdatingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnPropertyUpdatingMainPhasePropertyName: string = "ColumnPropertyUpdatingMainPhase";
	get columnPropertyUpdatingMainPhase(): GridAnimationPhaseSettings {
		return this._columnPropertyUpdatingMainPhase;
	}
	set columnPropertyUpdatingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnPropertyUpdatingMainPhase;
		this._columnPropertyUpdatingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnPropertyUpdatingMainPhasePropertyName, oldValue, this._columnPropertyUpdatingMainPhase);
	}
	private _columnAddingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnAddingMainPhasePropertyName: string = "ColumnAddingMainPhase";
	get columnAddingMainPhase(): GridAnimationPhaseSettings {
		return this._columnAddingMainPhase;
	}
	set columnAddingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnAddingMainPhase;
		this._columnAddingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnAddingMainPhasePropertyName, oldValue, this._columnAddingMainPhase);
	}
	private _columnAddingPrePhase: GridAnimationPhaseSettings = null;
	static readonly columnAddingPrePhasePropertyName: string = "ColumnAddingPrePhase";
	get columnAddingPrePhase(): GridAnimationPhaseSettings {
		return this._columnAddingPrePhase;
	}
	set columnAddingPrePhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnAddingPrePhase;
		this._columnAddingPrePhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnAddingPrePhasePropertyName, oldValue, this._columnAddingPrePhase);
	}
	private _columnShowingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnShowingMainPhasePropertyName: string = "ColumnShowingMainPhase";
	get columnShowingMainPhase(): GridAnimationPhaseSettings {
		return this._columnShowingMainPhase;
	}
	set columnShowingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnShowingMainPhase;
		this._columnShowingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnShowingMainPhasePropertyName, oldValue, this._columnShowingMainPhase);
	}
	private _columnShowingPrePhase: GridAnimationPhaseSettings = null;
	static readonly columnShowingPrePhasePropertyName: string = "ColumnShowingPrePhase";
	get columnShowingPrePhase(): GridAnimationPhaseSettings {
		return this._columnShowingPrePhase;
	}
	set columnShowingPrePhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnShowingPrePhase;
		this._columnShowingPrePhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnShowingPrePhasePropertyName, oldValue, this._columnShowingPrePhase);
	}
	private _columnResizingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnResizingMainPhasePropertyName: string = "ColumnResizingMainPhase";
	get columnResizingMainPhase(): GridAnimationPhaseSettings {
		return this._columnResizingMainPhase;
	}
	set columnResizingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnResizingMainPhase;
		this._columnResizingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnResizingMainPhasePropertyName, oldValue, this._columnResizingMainPhase);
	}
	private _columnMovingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnMovingMainPhasePropertyName: string = "ColumnMovingMainPhase";
	get columnMovingMainPhase(): GridAnimationPhaseSettings {
		return this._columnMovingMainPhase;
	}
	set columnMovingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnMovingMainPhase;
		this._columnMovingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnMovingMainPhasePropertyName, oldValue, this._columnMovingMainPhase);
	}
	private _columnMovingPrePhase: GridAnimationPhaseSettings = null;
	static readonly columnMovingPrePhasePropertyName: string = "ColumnMovingPrePhase";
	get columnMovingPrePhase(): GridAnimationPhaseSettings {
		return this._columnMovingPrePhase;
	}
	set columnMovingPrePhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnMovingPrePhase;
		this._columnMovingPrePhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnMovingPrePhasePropertyName, oldValue, this._columnMovingPrePhase);
	}
	private _columnHidingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnHidingMainPhasePropertyName: string = "ColumnHidingMainPhase";
	get columnHidingMainPhase(): GridAnimationPhaseSettings {
		return this._columnHidingMainPhase;
	}
	set columnHidingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnHidingMainPhase;
		this._columnHidingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnHidingMainPhasePropertyName, oldValue, this._columnHidingMainPhase);
	}
	private _columnHidingPostPhase: GridAnimationPhaseSettings = null;
	static readonly columnHidingPostPhasePropertyName: string = "ColumnHidingPostPhase";
	get columnHidingPostPhase(): GridAnimationPhaseSettings {
		return this._columnHidingPostPhase;
	}
	set columnHidingPostPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnHidingPostPhase;
		this._columnHidingPostPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnHidingPostPhasePropertyName, oldValue, this._columnHidingPostPhase);
	}
	private _columnExchangingMainPhase: GridAnimationPhaseSettings = null;
	static readonly columnExchangingMainPhasePropertyName: string = "ColumnExchangingMainPhase";
	get columnExchangingMainPhase(): GridAnimationPhaseSettings {
		return this._columnExchangingMainPhase;
	}
	set columnExchangingMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnExchangingMainPhase;
		this._columnExchangingMainPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnExchangingMainPhasePropertyName, oldValue, this._columnExchangingMainPhase);
	}
	private _columnExchangingCleanupPhase: GridAnimationPhaseSettings = null;
	static readonly columnExchangingCleanupPhasePropertyName: string = "ColumnExchangingCleanupPhase";
	get columnExchangingCleanupPhase(): GridAnimationPhaseSettings {
		return this._columnExchangingCleanupPhase;
	}
	set columnExchangingCleanupPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._columnExchangingCleanupPhase;
		this._columnExchangingCleanupPhase = value;
		this.onPropertyChanged(GridColumnAnimationSettings.columnExchangingCleanupPhasePropertyName, oldValue, this._columnExchangingCleanupPhase);
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GridColumnAnimationSettings.columnAddingMainPhasePropertyName:
			if (oldValue != null) {
				let $t = (<INotifyPropertyChanged><any>oldValue);
				$t.propertyChanged = delegateRemove($t.propertyChanged, runOn(this, this.columnAddingMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t1 = (<INotifyPropertyChanged><any>newValue);
				$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this.columnAddingMainPhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnAddingPrePhasePropertyName:
			if (oldValue != null) {
				let $t2 = (<INotifyPropertyChanged><any>oldValue);
				$t2.propertyChanged = delegateRemove($t2.propertyChanged, runOn(this, this.columnAddingPrePhasePropertyChanged));
			}
			if (newValue != null) {
				let $t3 = (<INotifyPropertyChanged><any>newValue);
				$t3.propertyChanged = delegateCombine($t3.propertyChanged, runOn(this, this.columnAddingPrePhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnShowingMainPhasePropertyName:
			if (oldValue != null) {
				let $t4 = (<INotifyPropertyChanged><any>oldValue);
				$t4.propertyChanged = delegateRemove($t4.propertyChanged, runOn(this, this.columnShowingMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t5 = (<INotifyPropertyChanged><any>newValue);
				$t5.propertyChanged = delegateCombine($t5.propertyChanged, runOn(this, this.columnShowingMainPhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnShowingPrePhasePropertyName:
			if (oldValue != null) {
				let $t6 = (<INotifyPropertyChanged><any>oldValue);
				$t6.propertyChanged = delegateRemove($t6.propertyChanged, runOn(this, this.columnShowingPrePhasePropertyChanged));
			}
			if (newValue != null) {
				let $t7 = (<INotifyPropertyChanged><any>newValue);
				$t7.propertyChanged = delegateCombine($t7.propertyChanged, runOn(this, this.columnShowingPrePhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnMovingMainPhasePropertyName:
			if (oldValue != null) {
				let $t8 = (<INotifyPropertyChanged><any>oldValue);
				$t8.propertyChanged = delegateRemove($t8.propertyChanged, runOn(this, this.columnMovingMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t9 = (<INotifyPropertyChanged><any>newValue);
				$t9.propertyChanged = delegateCombine($t9.propertyChanged, runOn(this, this.columnMovingMainPhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnMovingPrePhasePropertyName:
			if (oldValue != null) {
				let $t10 = (<INotifyPropertyChanged><any>oldValue);
				$t10.propertyChanged = delegateRemove($t10.propertyChanged, runOn(this, this.columnMovingPrePhasePropertyChanged));
			}
			if (newValue != null) {
				let $t11 = (<INotifyPropertyChanged><any>newValue);
				$t11.propertyChanged = delegateCombine($t11.propertyChanged, runOn(this, this.columnMovingPrePhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnHidingMainPhasePropertyName:
			if (oldValue != null) {
				let $t12 = (<INotifyPropertyChanged><any>oldValue);
				$t12.propertyChanged = delegateRemove($t12.propertyChanged, runOn(this, this.columnHidingMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t13 = (<INotifyPropertyChanged><any>newValue);
				$t13.propertyChanged = delegateCombine($t13.propertyChanged, runOn(this, this.columnHidingMainPhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnHidingPostPhasePropertyName:
			if (oldValue != null) {
				let $t14 = (<INotifyPropertyChanged><any>oldValue);
				$t14.propertyChanged = delegateRemove($t14.propertyChanged, runOn(this, this.columnHidingPostPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t15 = (<INotifyPropertyChanged><any>newValue);
				$t15.propertyChanged = delegateCombine($t15.propertyChanged, runOn(this, this.columnHidingPostPhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnExchangingMainPhasePropertyName:
			if (oldValue != null) {
				let $t16 = (<INotifyPropertyChanged><any>oldValue);
				$t16.propertyChanged = delegateRemove($t16.propertyChanged, runOn(this, this.columnExchangingMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t17 = (<INotifyPropertyChanged><any>newValue);
				$t17.propertyChanged = delegateCombine($t17.propertyChanged, runOn(this, this.columnExchangingMainPhasePropertyChanged));
			}
			break;

			case GridColumnAnimationSettings.columnExchangingCleanupPhasePropertyName:
			if (oldValue != null) {
				let $t18 = (<INotifyPropertyChanged><any>oldValue);
				$t18.propertyChanged = delegateRemove($t18.propertyChanged, runOn(this, this.columnExchangingCleanupPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t19 = (<INotifyPropertyChanged><any>newValue);
				$t19.propertyChanged = delegateCombine($t19.propertyChanged, runOn(this, this.columnExchangingCleanupPhasePropertyChanged));
			}
			break;

		}

	}
	private columnAddingMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnAddingMainPhasePropertyName, this.columnAddingMainPhase, this.columnAddingMainPhase);
	}
	private columnAddingPrePhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnAddingPrePhasePropertyName, this.columnAddingPrePhase, this.columnAddingPrePhase);
	}
	private columnShowingMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnShowingMainPhasePropertyName, this.columnShowingMainPhase, this.columnShowingMainPhase);
	}
	private columnShowingPrePhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnShowingPrePhasePropertyName, this.columnShowingPrePhase, this.columnShowingPrePhase);
	}
	private columnMovingMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnMovingMainPhasePropertyName, this.columnMovingMainPhase, this.columnMovingMainPhase);
	}
	private columnMovingPrePhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnMovingPrePhasePropertyName, this.columnMovingPrePhase, this.columnMovingPrePhase);
	}
	private columnHidingMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnHidingMainPhasePropertyName, this.columnHidingMainPhase, this.columnHidingMainPhase);
	}
	private columnHidingPostPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnHidingPostPhasePropertyName, this.columnHidingPostPhase, this.columnHidingPostPhase);
	}
	private columnExchangingMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnExchangingMainPhasePropertyName, this.columnExchangingMainPhase, this.columnExchangingMainPhase);
	}
	private columnExchangingCleanupPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridColumnAnimationSettings.columnExchangingCleanupPhasePropertyName, this.columnExchangingCleanupPhase, this.columnExchangingCleanupPhase);
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


