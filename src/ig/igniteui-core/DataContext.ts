/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Type, markType } from "./type";
import { ILegendContext, ILegendContext_$type } from "./ILegendContext";
import { Brush } from "./Brush";

/**
 * @hidden 
 */
export class DataContext extends Base implements ILegendContext, INotifyPropertyChanged {
	static $t: Type = markType(DataContext, 'DataContext', (<any>Base).$type, [ILegendContext_$type, INotifyPropertyChanged_$type]);
	private _series: any = null;
	get series(): any {
		return this._series;
	}
	set series(value: any) {
		this._series = value;
	}
	private _item: any = null;
	get item(): any {
		return <any>this._item;
	}
	set item(value: any) {
		if (value != this._item) {
			this._item = value;
			this.onPropetyChanged("Item");
		}
	}
	private _actualItemBrush: Brush = null;
	get actualItemBrush(): Brush {
		return this._actualItemBrush;
	}
	set actualItemBrush(value: Brush) {
		if (value != this._actualItemBrush) {
			this._actualItemBrush = value;
			this.onPropetyChanged("ActualItemBrush");
		}
	}
	private _outline: Brush = null;
	get outline(): Brush {
		return this._outline;
	}
	set outline(value: Brush) {
		if (value != this._outline) {
			this._outline = value;
			this.onPropetyChanged("Outline");
		}
	}
	private _itemLabel: any = null;
	get itemLabel(): any {
		return <any>this._itemLabel;
	}
	set itemLabel(value: any) {
		if (value != this._itemLabel) {
			this._itemLabel = value;
			this.onPropetyChanged("ItemLabel");
		}
	}
	private _itemBrush: Brush = null;
	get itemBrush(): Brush {
		return this._itemBrush;
	}
	set itemBrush(value: Brush) {
		if (value != this._itemBrush) {
			this._itemBrush = value;
			this.onPropetyChanged("ItemBrush");
		}
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		if (value != this._thickness) {
			this._thickness = value;
			this.onPropetyChanged("Thickness");
		}
	}
	private _legendLabel: any = null;
	get legendLabel(): any {
		return this._legendLabel;
	}
	set legendLabel(value: any) {
		if (value != this._legendLabel) {
			this._legendLabel = value;
			this.onPropetyChanged("LegendLabel");
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropetyChanged(propertyName: string): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	flatten(): any {
		let series_ = this.series;
		let item_ = this.item;
		let actualItemBrush_ = this.actualItemBrush;
		let outline_ = this.outline;
		let itemLabel_ = this.itemLabel;
		let itemBrush_ = this.itemBrush;
		let thickness_ = this.thickness;
		return { item: item_, itemBrush: actualItemBrush_, outline: outline_, itemLabel: itemLabel_, thickness: thickness_ };
	}
}


