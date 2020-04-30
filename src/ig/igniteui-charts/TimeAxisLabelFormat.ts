/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TimeAxisLabelFormat extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(TimeAxisLabelFormat, 'TimeAxisLabelFormat', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private static readonly rangePropertyName: string = "Range";
	private _range: number = (0);
	get range(): number {
		return this._range;
	}
	set range(value: number) {
		let oldValue: number = this.range;
		if (value != oldValue) {
			this._range = value;
			this.onPropertyUpdated(TimeAxisLabelFormat.rangePropertyName, oldValue, this.range);
		}
	}
	private static readonly formatPropertyName: string = "Format";
	private _format: string = null;
	get format(): string {
		return this._format;
	}
	set format(value: string) {
		let oldValue: string = this.format;
		if (value != oldValue) {
			this._format = value;
			this.onPropertyUpdated(TimeAxisLabelFormat.formatPropertyName, oldValue, this.format);
		}
	}
	private onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdateOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected propertyUpdateOverride(propertyName: string, oldValue: any, newValue: any): void {
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


