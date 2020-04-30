/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColorScale } from "./ColorScale";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { ObservableColorCollection } from "igniteui-core/ObservableColorCollection";
import { Base, IList$1, IList$1_$type, Type, runOn, delegateCombine, Number_$type, typeCast, delegateRemove, enumGetBox, EnumUtil, markType } from "igniteui-core/type";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { Color } from "igniteui-core/Color";
import { ColorScaleInterpolationMode, ColorScaleInterpolationMode_$type } from "./ColorScaleInterpolationMode";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { InterpolationMode } from "igniteui-core/InterpolationMode";
import { List$1 } from "igniteui-core/List$1";
import { ColorUtil } from "igniteui-core/ColorUtil";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CustomPaletteColorScale extends ColorScale {
	static $t: Type = markType(CustomPaletteColorScale, 'CustomPaletteColorScale', (<any>ColorScale).$type);
	constructor() {
		super();
		this._transparent = Color.fromArgb(0, 0, 0, 0);
		this._palette = new ObservableColorCollection();
		let $t = this._palette;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.palette_CollectionChanged));
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
	}
	private static readonly minimumValuePropertyName: string = "MinimumValue";
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(CustomPaletteColorScale.minimumValuePropertyName, Number_$type, (<any>CustomPaletteColorScale).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CustomPaletteColorScale>((<any>CustomPaletteColorScale).$type, sender)).raisePropertyChanged(CustomPaletteColorScale.minimumValuePropertyName, e.oldValue, e.newValue)));
	get minimumValue(): number {
		return <number>this.getValue(CustomPaletteColorScale.minimumValueProperty);
	}
	set minimumValue(value: number) {
		this.setValue(CustomPaletteColorScale.minimumValueProperty, value);
	}
	private static readonly maximumValuePropertyName: string = "MaximumValue";
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(CustomPaletteColorScale.maximumValuePropertyName, Number_$type, (<any>CustomPaletteColorScale).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CustomPaletteColorScale>((<any>CustomPaletteColorScale).$type, sender)).raisePropertyChanged(CustomPaletteColorScale.maximumValuePropertyName, e.oldValue, e.newValue)));
	get maximumValue(): number {
		return <number>this.getValue(CustomPaletteColorScale.maximumValueProperty);
	}
	set maximumValue(value: number) {
		this.setValue(CustomPaletteColorScale.maximumValueProperty, value);
	}
	private _palette: ObservableColorCollection = null;
	private static readonly palettePropertyName: string = "Palette";
	get palette(): ObservableColorCollection {
		return this._palette;
	}
	set palette(value: ObservableColorCollection) {
		let oldValue = this._palette;
		if (this._palette != null) {
			let $t = this._palette;
			$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.palette_CollectionChanged));
		}
		this._palette = value;
		if (this._palette != null) {
			let $t1 = this._palette;
			$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.palette_CollectionChanged));
		}
		this.raisePropertyChanged(CustomPaletteColorScale.palettePropertyName, oldValue, this.palette);
	}
	private palette_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.raisePropertyChanged(CustomPaletteColorScale.palettePropertyName, this.palette, this.palette);
	}
	private _transparent: Color = new Color();
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CustomPaletteColorScale.minimumValuePropertyName:
			this._cachedMinimum = this.minimumValue;
			this._cachedMinimumIsNaN = isNaN_(this._cachedMinimum);
			break;

			case CustomPaletteColorScale.maximumValuePropertyName:
			this._cachedMaximum = this.maximumValue;
			this._cachedMaximumIsNaN = isNaN_(this._cachedMaximum);
			break;

			case CustomPaletteColorScale.interpolationModePropertyName:
			this._cachedInterpolationMode = this.interpolationMode;
			break;

		}

	}
	private _cachedMinimum: number = NaN;
	private _cachedMaximum: number = NaN;
	private _cachedMinimumIsNaN: boolean = true;
	private _cachedMaximumIsNaN: boolean = true;
	private _cachedInterpolationMode: ColorScaleInterpolationMode = ColorScaleInterpolationMode.Select;
	getColor(value: number, defaultMinimum: number, defaultMaximum: number, valueColumn: IList$1<number>): Color {
		if (((this._palette == null) || (this._palette.count == 0)) || valueColumn == null) {
			return this._transparent;
		}
		let minimumValue: number = this._cachedMinimumIsNaN ? defaultMinimum : this._cachedMinimum;
		let maximumValue: number = this._cachedMaximumIsNaN ? defaultMaximum : this._cachedMaximum;
		let normalizedValue: number = (value - minimumValue) / (maximumValue - minimumValue);
		if (isNaN_(normalizedValue) || normalizedValue < 0 || normalizedValue > 1) {
			return this._transparent;
		}
		let index: number = normalizedValue * (this._palette.count - 1);
		if (this._cachedInterpolationMode == ColorScaleInterpolationMode.InterpolateHSV || this._cachedInterpolationMode == ColorScaleInterpolationMode.InterpolateRGB) {
			let floor: number = Math.floor(index);
			let ceiling: number = Math.ceil(index);
			let preceding: Color = this._palette._inner[<number>truncate(floor)];
			let subsequent: Color = this._palette._inner[<number>truncate(ceiling)];
			let decimalPortion: number = index - floor;
			let colorUtilInteprolationMode: InterpolationMode = this._cachedInterpolationMode == ColorScaleInterpolationMode.InterpolateHSV ? InterpolationMode.HSV : InterpolationMode.RGB;
			return ColorUtil.getInterpolation(preceding, decimalPortion, subsequent, colorUtilInteprolationMode);
		} else {
			let roundedIndex: number = <number>truncate(Math.round(index));
			return this._palette._inner[roundedIndex];
		}
	}
	private static readonly interpolationModePropertyName: string = "InterpolationMode";
	static readonly interpolationModeProperty: DependencyProperty = DependencyProperty.register(CustomPaletteColorScale.interpolationModePropertyName, ColorScaleInterpolationMode_$type, (<any>CustomPaletteColorScale).$type, new PropertyMetadata(2, enumGetBox<ColorScaleInterpolationMode>(ColorScaleInterpolationMode_$type, ColorScaleInterpolationMode.Select), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CustomPaletteColorScale>((<any>CustomPaletteColorScale).$type, sender)).raisePropertyChanged(CustomPaletteColorScale.interpolationModePropertyName, e.oldValue, e.newValue)));
	get interpolationMode(): ColorScaleInterpolationMode {
		return EnumUtil.getEnumValue<ColorScaleInterpolationMode>(ColorScaleInterpolationMode_$type, this.getValue(CustomPaletteColorScale.interpolationModeProperty));
	}
	set interpolationMode(value: ColorScaleInterpolationMode) {
		this.setValue(CustomPaletteColorScale.interpolationModeProperty, enumGetBox<ColorScaleInterpolationMode>(ColorScaleInterpolationMode_$type, value));
	}
	providePalette(colors: string[]): void {
		let colorColl = new ObservableColorCollection();
		for (let i = 0; i < colors.length; i++) {
			let color = colors[i];
			let c = ((() => {
				let $ret = new Color();
				$ret.colorString = color;
				return $ret;
			})());
			colorColl.add(c);
		}
		this.palette = colorColl;
	}
}


