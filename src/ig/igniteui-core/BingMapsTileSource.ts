/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MapTileSource } from "./MapTileSource";
import { DependencyProperty } from "./DependencyProperty";
import { DependencyObject } from "./DependencyObject";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Type, String_$type, typeCast, runOn, delegateRemove, delegateCombine, markType } from "./type";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { XamMultiScaleTileSource } from "./XamMultiScaleTileSource";
import { List$1 } from "./List$1";
import { Uri } from "./Uri";
import { StringBuilder } from "./StringBuilder";
import { DependencyPropertyChangedEventArgs } from "./DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "./PropertyMetadata";
import { stringIsNullOrEmpty, stringReplace } from "./string";

/**
 * @hidden 
 */
export class BingMapsTileSource extends MapTileSource {
	static $t: Type = markType(BingMapsTileSource, 'BingMapsTileSource', (<any>MapTileSource).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, tilePath: string, subDomains: ObservableCollection$1<string>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(256 << 22, 256 << 22, 256, 256, 0);
				this._cultureName = null;
			}
			break;

			case 1:
			{
				let tilePath: string = <string>_rest[0];
				let subDomains: ObservableCollection$1<string> = <ObservableCollection$1<string>>_rest[1];
				{
					super(256 << 22, 256 << 22, 256, 256, 0);
					this._cultureName = null;
				}
				this.tilePath = tilePath;
				this.subDomains = subDomains;
			}
			break;

		}

	}
	static readonly tilePathProperty: DependencyProperty = DependencyProperty.register("TilePath", String_$type, (<any>BingMapsTileSource).$type, new PropertyMetadata(2, null, BingMapsTileSource.onPropertyChanged));
	get tilePath(): string {
		return <string>this.getValue(BingMapsTileSource.tilePathProperty);
	}
	set tilePath(value: string) {
		this.setValue(BingMapsTileSource.tilePathProperty, value);
	}
	static readonly subDomainsProperty: DependencyProperty = DependencyProperty.register("SubDomains", (<any>ObservableCollection$1).$type.specialize(String_$type), (<any>BingMapsTileSource).$type, new PropertyMetadata(2, null, BingMapsTileSource.onPropertyChanged));
	get subDomains(): ObservableCollection$1<string> {
		return <ObservableCollection$1<string>>this.getValue(BingMapsTileSource.subDomainsProperty);
	}
	set subDomains(value: ObservableCollection$1<string>) {
		this.setValue(BingMapsTileSource.subDomainsProperty, value);
	}
	private subdomains_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.invalidateTileLayer(0, 0, 0, 0);
	}
	private _cultureName: string;
	static readonly cultureNameProperty: DependencyProperty = DependencyProperty.register("CultureName", String_$type, (<any>BingMapsTileSource).$type, new PropertyMetadata(2, null, BingMapsTileSource.onPropertyChanged));
	get cultureName(): string {
		return <string>this.getValue(BingMapsTileSource.cultureNameProperty);
	}
	set cultureName(value: string) {
		this.setValue(BingMapsTileSource.cultureNameProperty, value);
	}
	protected getTileLayers(tileLevel: number, tilePositionX: number, tilePositionY: number, tileImageLayerSources: IList$1<any>): void {
		if (!this.validateTileSourceProperties()) {
			tileImageLayerSources.clear();
			return;
		}
		if (stringIsNullOrEmpty(this.tilePath)) {
			return;
		}
		tileLevel -= 8;
		if (tileLevel > 0) {
			let quadKey: string = this.getQuadKey(tileLevel, tilePositionX, tilePositionY);
			let uriString: string = this.tilePath;
			uriString = stringReplace(uriString, "{culture}", this._cultureName);
			uriString = stringReplace(uriString, "{quadkey}", quadKey);
			let index = parseInt(quadKey.substr(quadKey.length - 1, 1));
			if (this.subDomains == null || index >= this.subDomains.count) {
				return;
			}
			uriString = stringReplace(uriString, "{subdomain}", this.subDomains._inner[index]);
			uriString = stringReplace(uriString, "&token={token}", "");
			tileImageLayerSources.add(new Uri(0, uriString));
		}
	}
	private validateTileSourceProperties(): boolean {
		let isValid: boolean = true;
		return isValid;
	}
	private getQuadKey(tileLevel: number, tilePositionX: number, tilePositionY: number): string {
		let quadKey: StringBuilder = new StringBuilder(0);
		for (let i: number = tileLevel; i > 0; --i) {
			let digit: string = '0';
			let mask: number = 1 << (i - 1);
			if ((tilePositionX & mask) != 0) {
				((() => { let $value = digit; digit = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
			}
			if ((tilePositionY & mask) != 0) {
				((() => { let $value = digit; digit = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
				((() => { let $value = digit; digit = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
			}
			quadKey.append1(digit);
		}
		return quadKey.toString();
	}
	private static onPropertyChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		let bing = <BingMapsTileSource>d;
		if ((e.property == BingMapsTileSource.subDomainsProperty) || (e.property == BingMapsTileSource.tilePathProperty) || (e.property == BingMapsTileSource.cultureNameProperty)) {
			if (e.property == BingMapsTileSource.subDomainsProperty) {
				let oldSubdomains = typeCast<ObservableCollection$1<string>>((<any>ObservableCollection$1).$type.specialize(String_$type), e.oldValue);
				let subdomains = typeCast<ObservableCollection$1<string>>((<any>ObservableCollection$1).$type.specialize(String_$type), e.newValue);
				if (oldSubdomains != null) {
					oldSubdomains.collectionChanged = delegateRemove(oldSubdomains.collectionChanged, runOn(bing, bing.subdomains_CollectionChanged));
				}
				if (subdomains != null) {
					subdomains.collectionChanged = delegateCombine(subdomains.collectionChanged, runOn(bing, bing.subdomains_CollectionChanged));
				}
			}
			if (e.property == BingMapsTileSource.cultureNameProperty) {
				bing._cultureName = <string>e.newValue;
			}
			bing.invalidateTileLayer(0, 0, 0, 0);
		}
	}
}


