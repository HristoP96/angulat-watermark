/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, Type, PropertyChangedEventArgs, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialChartIndicatorMenuItem extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(FinancialChartIndicatorMenuItem, 'FinancialChartIndicatorMenuItem', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _content: any = null;
	get content(): any {
		return this._content;
	}
	set content(value: any) {
		this._content = value;
	}
	private _indentation: number = 0;
	get indentation(): number {
		return this._indentation;
	}
	set indentation(value: number) {
		this._indentation = value;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	private _type: Type = null;
	get type(): Type {
		return this._type;
	}
	set type(value: Type) {
		this._type = value;
	}
	private static readonly isCheckedPropertyName: string = "IsChecked";
	private _isChecked: boolean = false;
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	get isChecked(): boolean {
		return this._isChecked;
	}
	set isChecked(value: boolean) {
		let oldValue: boolean = this.isChecked;
		if (value != oldValue) {
			this._isChecked = value;
			if (this.propertyChanged != null) {
				this.propertyChanged(this, new PropertyChangedEventArgs(FinancialChartIndicatorMenuItem.isCheckedPropertyName));
			}
		}
	}
}


