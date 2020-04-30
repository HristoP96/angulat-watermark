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
export class GridAnimationSettings extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridAnimationSettings, 'GridAnimationSettings', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	constructor() {
		super();
		this._cellDataLoadedMainPhase = new GridAnimationPhaseSettings();
		this._cellDataLoadedMainPhase.durationMilliseconds = 500;
		this._cellDataLoadedMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._cellDataLoadedMainPhase.shouldItemsFinishSimultaneously = false;
		this._rowSelectionMainPhase = new GridAnimationPhaseSettings();
		this._rowSelectionMainPhase.durationMilliseconds = 300;
		this._rowSelectionMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._rowSelectionMainPhase.perItemDelayMilliseconds = 0;
		this._rowSelectionMainPhase.shouldItemsFinishSimultaneously = true;
		this._cellActivationMainPhase = new GridAnimationPhaseSettings();
		this._cellActivationMainPhase.durationMilliseconds = 0;
		this._cellActivationMainPhase.easingFunctionType = GridEasingFunctionType.CubicInOut;
		this._cellActivationMainPhase.perItemDelayMilliseconds = 0;
		this._cellActivationMainPhase.shouldItemsFinishSimultaneously = true;
	}
	private _cellDataLoadedMainPhase: GridAnimationPhaseSettings = null;
	static readonly cellDataLoadedMainPhasePropertyName: string = "CellDataLoadedMainPhase";
	get cellDataLoadedMainPhase(): GridAnimationPhaseSettings {
		return this._cellDataLoadedMainPhase;
	}
	set cellDataLoadedMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._cellDataLoadedMainPhase;
		this._cellDataLoadedMainPhase = value;
		this.onPropertyChanged(GridAnimationSettings.cellDataLoadedMainPhasePropertyName, oldValue, this._cellDataLoadedMainPhase);
	}
	private _rowSelectionMainPhase: GridAnimationPhaseSettings = null;
	static readonly rowSelectionMainPhasePropertyName: string = "RowSelectionMainPhase";
	get rowSelectionMainPhase(): GridAnimationPhaseSettings {
		return this._rowSelectionMainPhase;
	}
	set rowSelectionMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._rowSelectionMainPhase;
		this._rowSelectionMainPhase = value;
		this.onPropertyChanged(GridAnimationSettings.rowSelectionMainPhasePropertyName, oldValue, this._rowSelectionMainPhase);
	}
	private _cellActivationMainPhase: GridAnimationPhaseSettings = null;
	static readonly cellActivationMainPhasePropertyName: string = "CellActivationMainPhase";
	get cellActivationMainPhase(): GridAnimationPhaseSettings {
		return this._cellActivationMainPhase;
	}
	set cellActivationMainPhase(value: GridAnimationPhaseSettings) {
		let oldValue = this._cellActivationMainPhase;
		this._cellActivationMainPhase = value;
		this.onPropertyChanged(GridAnimationSettings.cellActivationMainPhasePropertyName, oldValue, this._cellActivationMainPhase);
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GridAnimationSettings.cellDataLoadedMainPhasePropertyName:
			if (oldValue != null) {
				let $t = (<INotifyPropertyChanged><any>oldValue);
				$t.propertyChanged = delegateRemove($t.propertyChanged, runOn(this, this.cellActualizationMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t1 = (<INotifyPropertyChanged><any>newValue);
				$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this.cellActualizationMainPhasePropertyChanged));
			}
			break;

			case GridAnimationSettings.rowSelectionMainPhasePropertyName:
			if (oldValue != null) {
				let $t2 = (<INotifyPropertyChanged><any>oldValue);
				$t2.propertyChanged = delegateRemove($t2.propertyChanged, runOn(this, this.rowSelectionMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t3 = (<INotifyPropertyChanged><any>newValue);
				$t3.propertyChanged = delegateCombine($t3.propertyChanged, runOn(this, this.rowSelectionMainPhasePropertyChanged));
			}
			break;

			case GridAnimationSettings.cellActivationMainPhasePropertyName:
			if (oldValue != null) {
				let $t4 = (<INotifyPropertyChanged><any>oldValue);
				$t4.propertyChanged = delegateRemove($t4.propertyChanged, runOn(this, this.cellActivationMainPhasePropertyChanged));
			}
			if (newValue != null) {
				let $t5 = (<INotifyPropertyChanged><any>newValue);
				$t5.propertyChanged = delegateCombine($t5.propertyChanged, runOn(this, this.cellActivationMainPhasePropertyChanged));
			}
			break;

		}

	}
	private cellActualizationMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridAnimationSettings.cellDataLoadedMainPhasePropertyName, this.cellDataLoadedMainPhase, this.cellDataLoadedMainPhase);
	}
	private rowSelectionMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridAnimationSettings.rowSelectionMainPhasePropertyName, this.rowSelectionMainPhase, this.rowSelectionMainPhase);
	}
	private cellActivationMainPhasePropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.onPropertyChanged(GridAnimationSettings.cellActivationMainPhasePropertyName, this.cellActivationMainPhase, this.cellActivationMainPhase);
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


