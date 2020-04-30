/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImageryView } from "./GeographicMapImageryView";
import { SubDomainsCollection } from "./SubDomainsCollection";
import { GeographicMapImagery } from "./GeographicMapImagery";
import { BingMapsTileSource } from "igniteui-core/BingMapsTileSource";
import { Base, Type, markType, Boolean_$type, typeCast, String_$type, enumGetBox, EnumUtil, runOn, delegateRemove, delegateCombine } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { BingMapsImageryStyle, BingMapsImageryStyle_$type } from "./BingMapsImageryStyle";
import { Debug } from "igniteui-core/Debug";
import { List$1 } from "igniteui-core/List$1";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { UriKind } from "igniteui-core/UriKind";
import { HttpRequestUtil } from "igniteui-core/httpRequestUtil";
import { Uri } from "igniteui-core/Uri";
import { stringEmpty, stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class BingMapsMapImageryView extends GeographicMapImageryView {
	static $t: Type = markType(BingMapsMapImageryView, 'BingMapsMapImageryView', (<any>GeographicMapImageryView).$type);
	constructor(model: BingMapsMapImagery) {
		super(model);
		this.bingModel = model;
	}
	private _bingModel: BingMapsMapImagery;
	protected get bingModel(): BingMapsMapImagery {
		return this._bingModel;
	}
	protected set bingModel(value: BingMapsMapImagery) {
		this._bingModel = value;
	}
	onInit(): void {
		if (this.bingModel.subDomains == null) {
			this.bingModel.subDomains = new SubDomainsCollection(0);
		}
		(<BingMapsTileSource>this.bingModel.tileSource).tilePath = this.bingModel.actualTilePath;
		(<BingMapsTileSource>this.bingModel.tileSource).subDomains = this.bingModel.actualSubDomains;
		(<BingMapsTileSource>this.bingModel.tileSource).cultureName = this.bingModel.cultureName;
	}
	onTilePathPropertyChanged(): void {
		(<BingMapsTileSource>this.bingModel.tileSource).tilePath = this.bingModel.actualTilePath;
	}
	onCultureNamePropertyChanged(): void {
		(<BingMapsTileSource>this.bingModel.tileSource).cultureName = this.bingModel.cultureName;
	}
	onSubDomainsPropertyChanged(): void {
		(<BingMapsTileSource>this.bingModel.tileSource).subDomains = this.bingModel.actualSubDomains;
	}
}

/**
 * @hidden 
 */
export class BingMapsMapImagery extends GeographicMapImagery {
	static $t: Type = markType(BingMapsMapImagery, 'BingMapsMapImagery', (<any>GeographicMapImagery).$type);
	private _pendingBingRequest_: any = null;
	private static readonly defaultBingUri: string = "http://dev.virtualearth.net/REST/v1/Imagery/Metadata/";
	constructor() {
		super(new BingMapsTileSource(0));
		this.getResponseCompleted = this.getResponseCompleted.bind(this);
		this.bingView.onInit();
		this.actualBingImageryRestUri = BingMapsMapImagery.defaultBingUri;
	}
	protected createView(): GeographicMapImageryView {
		return new BingMapsMapImageryView(this);
	}
	protected onViewCreated(view: GeographicMapImageryView): void {
		super.onViewCreated(view);
		this.bingView = <BingMapsMapImageryView>view;
	}
	private _bingView: BingMapsMapImageryView;
	get bingView(): BingMapsMapImageryView {
		return this._bingView;
	}
	set bingView(value: BingMapsMapImageryView) {
		this._bingView = value;
	}
	private _isInitialized: boolean = false;
	get isInitialized(): boolean {
		return this._isInitialized;
	}
	set isInitialized(value: boolean) {
		this._isInitialized = value;
	}
	get isDeferredLoad(): boolean {
		return <boolean>this.getValue(BingMapsMapImagery.isDeferredLoadProperty);
	}
	set isDeferredLoad(value: boolean) {
		this.setValue(BingMapsMapImagery.isDeferredLoadProperty, value);
	}
	static readonly isDeferredLoadPropertyName: string = "IsDeferredLoad";
	static readonly isDeferredLoadProperty: DependencyProperty = DependencyProperty.register(BingMapsMapImagery.isDeferredLoadPropertyName, Boolean_$type, (<any>BingMapsMapImagery).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<BingMapsMapImagery>((<any>BingMapsMapImagery).$type, o)).onPropertyChanged(BingMapsMapImagery.isDeferredLoadPropertyName, e.oldValue, e.newValue)));
	static readonly tilePathPropertyName: string = "TilePath";
	get tilePath(): string {
		return <string>this.getValue(BingMapsMapImagery.tilePathProperty);
	}
	set tilePath(value: string) {
		this.setValue(BingMapsMapImagery.tilePathProperty, value);
	}
	static readonly tilePathProperty: DependencyProperty = DependencyProperty.register(BingMapsMapImagery.tilePathPropertyName, String_$type, (<any>BingMapsMapImagery).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<BingMapsMapImagery>((<any>BingMapsMapImagery).$type, o)).onPropertyChanged(BingMapsMapImagery.tilePathPropertyName, e.oldValue, e.newValue)));
	static readonly actualTilePathPropertyName: string = "ActualTilePath";
	private _actualTilePath: string = null;
	get actualTilePath(): string {
		return this._actualTilePath;
	}
	set actualTilePath(value: string) {
		let oldValue = this._actualTilePath;
		this._actualTilePath = value;
		this.onPropertyChanged(BingMapsMapImagery.actualTilePathPropertyName, oldValue, this._actualTilePath);
	}
	static readonly subDomainsPropertyName: string = "SubDomains";
	get subDomains(): SubDomainsCollection {
		return <SubDomainsCollection>this.getValue(BingMapsMapImagery.subDomainsProperty);
	}
	set subDomains(value: SubDomainsCollection) {
		this.setValue(BingMapsMapImagery.subDomainsProperty, value);
	}
	static readonly subDomainsProperty: DependencyProperty = DependencyProperty.register(BingMapsMapImagery.subDomainsPropertyName, (<any>SubDomainsCollection).$type, (<any>BingMapsMapImagery).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<BingMapsMapImagery>((<any>BingMapsMapImagery).$type, o)).onPropertyChanged(BingMapsMapImagery.subDomainsPropertyName, e.oldValue, e.newValue)));
	static readonly actualSubDomainsPropertyName: string = "ActualSubDomains";
	private _actualSubDomains: SubDomainsCollection = null;
	get actualSubDomains(): SubDomainsCollection {
		return this._actualSubDomains;
	}
	set actualSubDomains(value: SubDomainsCollection) {
		let oldValue = this._actualSubDomains;
		this._actualSubDomains = value;
		this.onPropertyChanged(BingMapsMapImagery.actualSubDomainsPropertyName, oldValue, this._actualSubDomains);
	}
	static readonly bingImageryRestUriPropertyName: string = "BingImageryRestUri";
	private _bingImageryRestUri: string = null;
	get bingImageryRestUri(): string {
		return this._bingImageryRestUri;
	}
	set bingImageryRestUri(value: string) {
		let oldValue = this._bingImageryRestUri;
		this._bingImageryRestUri = value;
		this.onPropertyChanged(BingMapsMapImagery.bingImageryRestUriPropertyName, oldValue, this._bingImageryRestUri);
	}
	static readonly actualBingImageryRestUriPropertyName: string = "ActualBingImageryRestUri";
	private _actualBingImageryRestUri: string = null;
	get actualBingImageryRestUri(): string {
		return this._actualBingImageryRestUri;
	}
	set actualBingImageryRestUri(value: string) {
		let oldValue = this._actualBingImageryRestUri;
		this._actualBingImageryRestUri = value;
		this.onPropertyUpdated(BingMapsMapImagery.actualBingImageryRestUriPropertyName, oldValue, this._actualBingImageryRestUri);
	}
	static readonly cultureNamePropertyName: string = "CultureName";
	get cultureName(): string {
		return <string>this.getValue(BingMapsMapImagery.cultureNameProperty);
	}
	set cultureName(value: string) {
		this.setValue(BingMapsMapImagery.cultureNameProperty, value);
	}
	static readonly cultureNameProperty: DependencyProperty = DependencyProperty.register(BingMapsMapImagery.cultureNamePropertyName, String_$type, (<any>BingMapsMapImagery).$type, new PropertyMetadata(2, "en-US", (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<BingMapsMapImagery>((<any>BingMapsMapImagery).$type, o)).onPropertyChanged(BingMapsMapImagery.cultureNamePropertyName, e.oldValue, e.newValue)));
	get apiKey(): string {
		return <string>this.getValue(BingMapsMapImagery.apiKeyProperty);
	}
	set apiKey(value: string) {
		this.setValue(BingMapsMapImagery.apiKeyProperty, value);
	}
	static readonly apiKeyPropertyName: string = "ApiKey";
	static readonly apiKeyProperty: DependencyProperty = DependencyProperty.register(BingMapsMapImagery.apiKeyPropertyName, String_$type, (<any>BingMapsMapImagery).$type, new PropertyMetadata(2, stringEmpty(), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<BingMapsMapImagery>((<any>BingMapsMapImagery).$type, o)).onPropertyChanged(BingMapsMapImagery.apiKeyPropertyName, e.oldValue, e.newValue)));
	static readonly imageryStylePropertyName: string = "ImageryStyle";
	get imageryStyle(): BingMapsImageryStyle {
		return EnumUtil.getEnumValue<BingMapsImageryStyle>(BingMapsImageryStyle_$type, this.getValue(BingMapsMapImagery.imageryStyleProperty));
	}
	set imageryStyle(value: BingMapsImageryStyle) {
		this.setValue(BingMapsMapImagery.imageryStyleProperty, enumGetBox<BingMapsImageryStyle>(BingMapsImageryStyle_$type, value));
	}
	static readonly imageryStyleProperty: DependencyProperty = DependencyProperty.register(BingMapsMapImagery.imageryStylePropertyName, BingMapsImageryStyle_$type, (<any>BingMapsMapImagery).$type, new PropertyMetadata(2, enumGetBox<BingMapsImageryStyle>(BingMapsImageryStyle_$type, BingMapsImageryStyle.AerialWithLabels), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<BingMapsMapImagery>((<any>BingMapsMapImagery).$type, o)).onPropertyChanged(BingMapsMapImagery.imageryStylePropertyName, e.oldValue, e.newValue)));
	requestMapSettings(): void {
		this.requestMapSettings1(true);
	}
	private requestMapSettings1(calledByUser: boolean): void {
		this.internalRequestMapSettings(calledByUser);
	}
	private shouldRestBeUsed(): boolean {
		if ((this.tilePath == null) && (this.subDomains == null)) {
			return true;
		}
		return false;
	}
	private validate(): void {
		this.isInitialized = false;
		Debug.writeLine("Validating");
		if (!this.isValidApiKey()) {
			this.updateActualTilePathAndSubDomain("", null);
			return;
		}
		if (!this.isDeferredLoad) {
			this.requestMapSettings1(false);
		}
	}
	private isValidApiKey(): boolean {
		if (stringIsNullOrEmpty(this.apiKey) || this.apiKey.length < 20) {
			return false;
		}
		return true;
	}
	private cancelPendingRequest(): void {
	}
	private updateActualTilePathAndSubDomain(tilePath: string, subDomains: List$1<string>): void {
		this.actualTilePath = tilePath;
		this.actualSubDomains = subDomains == null ? null : new SubDomainsCollection(1, subDomains);
		this.bingView.onInit();
	}
	private internalRequestMapSettings(calledByUser: boolean): void {
		if ((!calledByUser) && (this.isDeferredLoad)) {
			return;
		}
		if (!this.isValidApiKey()) {
			this.isInitialized = false;
			this.updateActualTilePathAndSubDomain("", null);
			return;
		}
		this.isInitialized = true;
		let bingUrl: string = null;
		if (this.bingImageryRestUri != null) {
			if (Uri.isWellFormedUriString(this.bingImageryRestUri, UriKind.Absolute)) {
				bingUrl = this.bingImageryRestUri;
			}
		} else {
			if (Uri.isWellFormedUriString(this.actualBingImageryRestUri, UriKind.Absolute)) {
				bingUrl = this.actualBingImageryRestUri;
			}
		}
		if (bingUrl == null) {
			this.updateActualTilePathAndSubDomain("", null);
			return;
		}
		let imagerySet = this.imageryStyle;
		bingUrl += enumGetBox<BingMapsImageryStyle>(BingMapsImageryStyle_$type, imagerySet);
		let parms = "key=" + this.apiKey + "&include=ImageryProviders";
		let url_ = bingUrl + "?" + parms;
		this._pendingBingRequest_ = HttpRequestUtil.submit(url_, this.getResponseCompleted, null );
	}
	private getResponseCompleted(data: any, request: any): void {
		if (request != this._pendingBingRequest_) {
			return;
		}
		this._pendingBingRequest_ = null;
		let data_ = data;
		let resourceSets_ =  (<any>JSON.parse(data_)).resourceSets;
		if (resourceSets_ == null) {
			return;
		}
		let resources_ = resourceSets_.length > 0 ? resourceSets_[0].resources : null;
		if (resources_ == null) {
			return;
		}
		if (resources_.length == 0) { return; };
		let imageUrl_: string = <string>(resources_[0].imageUrl);
		let subDomains_: List$1<string> = new List$1<string>(String_$type, 0);
		for (var i = 0; i < resources_[0].imageUrlSubdomains.length; i++) { subDomains_.add(resources_[0].imageUrlSubdomains[i]); };
		this.updateActualTilePathAndSubDomain(imageUrl_, subDomains_);
	}
	private actualSubDomains_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.view.needsRefresh();
		this.validate();
		this.onPropertyChanged(BingMapsMapImagery.subDomainsPropertyName, this.actualSubDomains, this.actualSubDomains);
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case BingMapsMapImagery.apiKeyPropertyName:
			this.validate();
			break;

			case BingMapsMapImagery.isDeferredLoadPropertyName:
			this.validate();
			break;

			case BingMapsMapImagery.tilePathPropertyName:
			this.cancelPendingRequest();
			this.actualTilePath = <string>newValue;
			this.bingView.onTilePathPropertyChanged();
			this.view.needsRefresh();
			break;

			case BingMapsMapImagery.cultureNamePropertyName:
			this.bingView.onCultureNamePropertyChanged();
			this.view.needsRefresh();
			break;

			case BingMapsMapImagery.imageryStylePropertyName:
			this.validate();
			break;

			case BingMapsMapImagery.subDomainsPropertyName:
			this.cancelPendingRequest();
			let oldSubDomains = <SubDomainsCollection>oldValue;
			let newSubDomains = <SubDomainsCollection>newValue;
			if (this.actualSubDomains != null) {
				let $t = this.actualSubDomains;
				$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.actualSubDomains_CollectionChanged));
			}
			this.actualSubDomains = newSubDomains;
			if (this.actualSubDomains != null) {
				newSubDomains.collectionChanged = delegateCombine(newSubDomains.collectionChanged, runOn(this, this.actualSubDomains_CollectionChanged));
			}
			this.bingView.onSubDomainsPropertyChanged();
			this.view.needsRefresh();
			break;

			case BingMapsMapImagery.actualTilePathPropertyName:
			let newPath = <string>newValue;
			if (stringIsNullOrEmpty(newPath)) {
				this.validate();
			}
			break;

			case BingMapsMapImagery.bingImageryRestUriPropertyName:
			this.actualBingImageryRestUri = <string>newValue;
			this.cancelPendingRequest();
			this.validate();
			break;

			case BingMapsMapImagery.actualBingImageryRestUriPropertyName:
			this.cancelPendingRequest();
			this.validate();
			break;

		}

		super.onPropertyUpdated(propertyName, oldValue, newValue);
	}
}


