/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImagery } from "./GeographicMapImagery";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Base, Type, String_$type, Boolean_$type, typeCast, markType } from "igniteui-core/type";
import { ArcGISOnlineTileSource } from "igniteui-core/ArcGISOnlineTileSource";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { Uri } from "igniteui-core/Uri";
import { TokenResponseModel } from "./TokenResponseModel";
import { MapServerResponseModel } from "./MapServerResponseModel";
import { TileInfoResponseModel } from "./TileInfoResponseModel";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { UriKind } from "igniteui-core/UriKind";
import { HttpRequestUtil } from "igniteui-core/httpRequestUtil";
import { stringIsNullOrEmpty, stringRemove } from "igniteui-core/string";
import { stringFormat1, stringFormat } from "igniteui-core/stringExtended";

/**
 * @hidden 
 */
export class ArcGISOnlineMapImagery extends GeographicMapImagery {
	static $t: Type = markType(ArcGISOnlineMapImagery, 'ArcGISOnlineMapImagery', (<any>GeographicMapImagery).$type);
	private static readonly generateTokenExtUri: string = "generateToken?username={0}&password={1}&client=referer&referer={2}&expiration={3}&f=pjson";
	constructor() {
		super(new ArcGISOnlineTileSource());
		this._refererUri = "localhost";
		this._tokenGenerationEndPoint = "https://www.arcgis.com/sharing/";
		this._defaultTokenTimeout = 60;
		this.userToken = null;
		this.getResponseCompleted_MapServerResponse = this.getResponseCompleted_MapServerResponse.bind(this);
		this.getResponseCompleted_TokenResponse = this.getResponseCompleted_TokenResponse.bind(this);
	}
	static readonly mapServerUriPropertyName: string = "MapServerUri";
	static readonly mapServerUriProperty: DependencyProperty = DependencyProperty.register(ArcGISOnlineMapImagery.mapServerUriPropertyName, String_$type, (<any>ArcGISOnlineMapImagery).$type, new PropertyMetadata(2, null, ArcGISOnlineMapImagery.mapServerUriChanged));
	get mapServerUri(): string {
		return <string>this.getValue(ArcGISOnlineMapImagery.mapServerUriProperty);
	}
	set mapServerUri(value: string) {
		this.setValue(ArcGISOnlineMapImagery.mapServerUriProperty, value);
	}
	private static mapServerUriChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<ArcGISOnlineMapImagery>d).onPropertyChanged(ArcGISOnlineMapImagery.mapServerUriPropertyName, e.oldValue, e.newValue);
	}
	static readonly userNamePropertyName: string = "UserName";
	static readonly userNameProperty: DependencyProperty = DependencyProperty.register(ArcGISOnlineMapImagery.userNamePropertyName, String_$type, (<any>ArcGISOnlineMapImagery).$type, new PropertyMetadata(2, null, ArcGISOnlineMapImagery.onUserNameChanged));
	get userName(): string {
		return <string>this.getValue(ArcGISOnlineMapImagery.userNameProperty);
	}
	set userName(value: string) {
		this.setValue(ArcGISOnlineMapImagery.userNameProperty, value);
	}
	private static onUserNameChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<ArcGISOnlineMapImagery>d).onPropertyChanged(ArcGISOnlineMapImagery.userNamePropertyName, e.oldValue, e.newValue);
	}
	static readonly passwordPropertyName: string = "Password";
	static readonly passwordProperty: DependencyProperty = DependencyProperty.register(ArcGISOnlineMapImagery.passwordPropertyName, String_$type, (<any>ArcGISOnlineMapImagery).$type, new PropertyMetadata(2, null, ArcGISOnlineMapImagery.onPasswordChanged));
	get password(): string {
		return <string>this.getValue(ArcGISOnlineMapImagery.passwordProperty);
	}
	set password(value: string) {
		this.setValue(ArcGISOnlineMapImagery.passwordProperty, value);
	}
	private static onPasswordChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<ArcGISOnlineMapImagery>d).onPropertyChanged(ArcGISOnlineMapImagery.passwordPropertyName, e.oldValue, e.newValue);
	}
	static readonly userTokenPropertyName: string = "UserToken";
	static readonly userTokenProperty: DependencyProperty = DependencyProperty.register(ArcGISOnlineMapImagery.userTokenPropertyName, String_$type, (<any>ArcGISOnlineMapImagery).$type, new PropertyMetadata(2, null, ArcGISOnlineMapImagery.onUserTokenChanged));
	get userToken(): string {
		return <string>this.getValue(ArcGISOnlineMapImagery.userTokenProperty);
	}
	set userToken(value: string) {
		this.setValue(ArcGISOnlineMapImagery.userTokenProperty, value);
	}
	private static onUserTokenChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<ArcGISOnlineMapImagery>d).onPropertyChanged(ArcGISOnlineMapImagery.userTokenPropertyName, e.oldValue, e.newValue);
	}
	static readonly isMapPublicPropertyName: string = "IsMapPublic";
	static readonly isMapPublicProperty: DependencyProperty = DependencyProperty.register(ArcGISOnlineMapImagery.isMapPublicPropertyName, Boolean_$type, (<any>ArcGISOnlineMapImagery).$type, new PropertyMetadata(2, true, ArcGISOnlineMapImagery.isMapPublicChanged));
	get isMapPublic(): boolean {
		return <boolean>this.getValue(ArcGISOnlineMapImagery.isMapPublicProperty);
	}
	set isMapPublic(value: boolean) {
		this.setValue(ArcGISOnlineMapImagery.isMapPublicProperty, value);
	}
	private static isMapPublicChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<ArcGISOnlineMapImagery>d).onPropertyChanged(ArcGISOnlineMapImagery.isMapPublicPropertyName, e.oldValue, e.newValue);
	}
	private _defaultTokenTimeout: number = 0;
	get defaultTokenTimeout(): number {
		return this._defaultTokenTimeout;
	}
	set defaultTokenTimeout(value: number) {
		this._defaultTokenTimeout = value;
		this.acquireNewTokenInternal(true);
	}
	private _tokenGenerationEndPoint: string = null;
	get tokenGenerationEndPoint(): string {
		return this._tokenGenerationEndPoint;
	}
	set tokenGenerationEndPoint(value: string) {
		this._tokenGenerationEndPoint = value;
		this.acquireNewTokenInternal(true);
	}
	private _refererUri: string = null;
	get refererUri(): string {
		return this._refererUri;
	}
	set refererUri(value: string) {
		this._refererUri = value;
		this.acquireNewTokenInternal(true);
	}
	acquireNewToken(): void {
		this.acquireNewTokenInternal(true);
	}
	private executeOnDispatcher(method: () => void): void {
		method();
	}
	private acquireNewTokenInternal(forceTokenRetrieve: boolean): void {
		if (stringIsNullOrEmpty(this.userToken) && forceTokenRetrieve == false) {
			this.requestMapServerConfiguration();
			return;
		}
		let tokenEndpoint = this.tokenGenerationEndPoint;
		if (stringIsNullOrEmpty(tokenEndpoint)) {
			this.userToken = "";
			return;
		}
		if (tokenEndpoint.substr(tokenEndpoint.length - 1, 1) != "/") {
			tokenEndpoint += "/";
		}
		if (stringIsNullOrEmpty(this.refererUri)) {
			this.userToken = "";
			return;
		}
		let timeOut = this.defaultTokenTimeout;
		if (timeOut < 1) {
			timeOut = 1;
		}
		tokenEndpoint += stringFormat1(ArcGISOnlineMapImagery.generateTokenExtUri, this.userName, this.password, this.refererUri, timeOut);
		if (!Uri.isWellFormedUriString(tokenEndpoint, UriKind.Absolute)) {
			this.userToken = "";
			return;
		}
		let url_ = tokenEndpoint;
		this._pendingTokenRequest_ = HttpRequestUtil.submit(url_, this.getResponseCompleted_TokenResponse, null );
	}
	private requestMapServerConfiguration(): void {
		if (stringIsNullOrEmpty(this.mapServerUri)) {
			return;
		}
		let mapUri = this.mapServerUri;
		if (mapUri.substr(mapUri.length - 1, 1) == "/") {
			stringRemove(mapUri, mapUri.length - 1, 1);
		}
		if (!this.isMapPublic) {
			if (stringIsNullOrEmpty(this.userToken)) {
				return;
			}
			mapUri = stringFormat("{0}?f=json&token={1}", mapUri, this.userToken);
		} else {
			mapUri = stringFormat("{0}?f=json", mapUri);
		}
		if (!Uri.isWellFormedUriString(mapUri, UriKind.Absolute)) {
			return;
		}
		let url_ = mapUri;
		this._pendingMapServerRequest_ = HttpRequestUtil.submit(url_, this.getResponseCompleted_MapServerResponse, null );
	}
	private _pendingTokenRequest_: any = null;
	private _pendingMapServerRequest_: any = null;
	private getResponseCompleted_TokenResponse(data: any, request: any): void {
		if (request != this._pendingTokenRequest_) {
			return;
		}
		this._pendingTokenRequest_ = null;
		let data_ = data;
		let tokenResp: TokenResponseModel = <TokenResponseModel>( JSON.parse(data_));
		if (tokenResp != null) {
			let token: string = "";
			if (tokenResp.token != null) {
				token = tokenResp.token;
			}
			this.userToken = token;
		}
	}
	private getResponseCompleted_MapServerResponse(data: any, request: any): void {
		if (request != this._pendingMapServerRequest_) {
			return;
		}
		this._pendingMapServerRequest_ = null;
		let data_ = data;
		let mapServerResp: MapServerResponseModel = <MapServerResponseModel>( JSON.parse(data_));
		if ((mapServerResp != null) && (mapServerResp.tileInfo != null)) {
			(<ArcGISOnlineTileSource>this.tileSource).levelOfDetail = mapServerResp.tileInfo.lods.length;
		}
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		let tileSource = typeCast<ArcGISOnlineTileSource>((<any>ArcGISOnlineTileSource).$type, this.tileSource);
		switch (propertyName) {
			case ArcGISOnlineMapImagery.mapServerUriPropertyName:
			if (tileSource != null) {
				tileSource.mapServerUri = typeCast<string>(String_$type, newValue);
			}
			this.requestMapServerConfiguration();
			break;

			case ArcGISOnlineMapImagery.userNamePropertyName:

			case ArcGISOnlineMapImagery.passwordPropertyName:
			if (stringIsNullOrEmpty(this.userName) || stringIsNullOrEmpty(this.password)) {
				return;
			}
			this.acquireNewTokenInternal(true);
			break;

			case ArcGISOnlineMapImagery.userTokenPropertyName:
			this.executeOnDispatcher(() => tileSource.userToken = this.userToken);
			this.requestMapServerConfiguration();
			break;

			case ArcGISOnlineMapImagery.isMapPublicPropertyName:
			tileSource.isMapPublic = this.isMapPublic;
			break;

		}

		super.onPropertyUpdated(propertyName, oldValue, newValue);
	}
}


