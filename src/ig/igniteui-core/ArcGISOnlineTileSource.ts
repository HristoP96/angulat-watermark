/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MapTileSource } from "./MapTileSource";
import { DependencyProperty } from "./DependencyProperty";
import { DependencyObject } from "./DependencyObject";
import { IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Type, String_$type, Boolean_$type, Number_$type, typeGetValue, typeCast, markType } from "./type";
import { Uri } from "./Uri";
import { DependencyPropertyChangedEventArgs } from "./DependencyPropertyChangedEventArgs";
import { XamMultiScaleTileSource } from "./XamMultiScaleTileSource";
import { PropertyMetadata } from "./PropertyMetadata";
import { UriKind } from "./UriKind";
import { truncate } from "./number";
import { stringIsNullOrEmpty } from "./string";
import { stringFormat1 } from "./stringExtended";

/**
 * @hidden 
 */
export class ArcGISOnlineTileSource extends MapTileSource {
	static $t: Type = markType(ArcGISOnlineTileSource, 'ArcGISOnlineTileSource', (<any>MapTileSource).$type);
	constructor() {
		super(2097152, 2097152, 256, 256, 0);
	}
	static readonly mapServerUriProperty: DependencyProperty = DependencyProperty.register("MapServerUri", String_$type, (<any>ArcGISOnlineTileSource).$type, new PropertyMetadata(2, null, ArcGISOnlineTileSource.onPropertyChanged));
	get mapServerUri(): string {
		return <string>this.getValue(ArcGISOnlineTileSource.mapServerUriProperty);
	}
	set mapServerUri(value: string) {
		this.setValue(ArcGISOnlineTileSource.mapServerUriProperty, value);
	}
	static readonly isMapPublicProperty: DependencyProperty = DependencyProperty.register("IsMapPublic", Boolean_$type, (<any>ArcGISOnlineTileSource).$type, new PropertyMetadata(2, true, ArcGISOnlineTileSource.onPropertyChanged));
	get isMapPublic(): boolean {
		return <boolean>this.getValue(ArcGISOnlineTileSource.isMapPublicProperty);
	}
	set isMapPublic(value: boolean) {
		this.setValue(ArcGISOnlineTileSource.isMapPublicProperty, value);
	}
	static readonly levelOfDetailProperty: DependencyProperty = DependencyProperty.register("LevelOfDetail", Number_$type, (<any>ArcGISOnlineTileSource).$type, new PropertyMetadata(2, -1, ArcGISOnlineTileSource.onPropertyChanged));
	get levelOfDetail(): number {
		return typeGetValue(this.getValue(ArcGISOnlineTileSource.levelOfDetailProperty));
	}
	set levelOfDetail(value: number) {
		this.setValue(ArcGISOnlineTileSource.levelOfDetailProperty, value);
	}
	static readonly userTokenProperty: DependencyProperty = DependencyProperty.register("UserToken", String_$type, (<any>ArcGISOnlineTileSource).$type, new PropertyMetadata(2, null, ArcGISOnlineTileSource.onPropertyChanged));
	get userToken(): string {
		return <string>this.getValue(ArcGISOnlineTileSource.userTokenProperty);
	}
	set userToken(value: string) {
		this.setValue(ArcGISOnlineTileSource.userTokenProperty, value);
	}
	protected getTileLayers(tileLevel: number, tilePositionX: number, tilePositionY: number, tileImageLayerSources: IList$1<any>): void {
		let uri = this.mapServerUri + "/tile/{0}/{1}/{2}";
		let token = "";
		if (stringIsNullOrEmpty(this.mapServerUri) || this.levelOfDetail < 1 || !Uri.isWellFormedUriString(this.mapServerUri, UriKind.Absolute)) {
			return;
		}
		if (!this.isMapPublic) {
			if (!stringIsNullOrEmpty(this.userToken)) {
				uri += "?token={3}";
				token = this.userToken.trim();
			} else {
				return;
			}
		}
		let zoom: number = tileLevel - 8;
		if (zoom > 0) {
			let uriString: string = stringFormat1(uri, zoom, tilePositionY, tilePositionX, token);
			tileImageLayerSources.add(new Uri(0, uriString));
		}
	}
	private static onPropertyChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		let tileSource = <ArcGISOnlineTileSource>d;
		if (e.property == ArcGISOnlineTileSource.mapServerUriProperty) {
			if (tileSource.mapServerUri != typeCast<string>(String_$type, e.newValue)) {
				tileSource.mapServerUri = typeCast<string>(String_$type, e.newValue);
			}
			tileSource.invalidateTileLayer(0, 0, 0, 0);
		}
		if (e.property == ArcGISOnlineTileSource.userTokenProperty) {
			if (tileSource.userToken != typeCast<string>(String_$type, e.newValue)) {
				tileSource.userToken = typeCast<string>(String_$type, e.newValue);
			}
			tileSource.invalidateTileLayer(0, 0, 0, 0);
		}
		if (e.property == ArcGISOnlineTileSource.levelOfDetailProperty) {
			tileSource.imageWidth = <number>truncate((Math.pow(2, tileSource.levelOfDetail - 1) * 256));
			tileSource.imageHeight = <number>truncate((Math.pow(2, tileSource.levelOfDetail - 1) * 256));
		}
		if (e.property == ArcGISOnlineTileSource.isMapPublicProperty) {
			tileSource.invalidateTileLayer(0, 0, 0, 0);
		}
	}
}


