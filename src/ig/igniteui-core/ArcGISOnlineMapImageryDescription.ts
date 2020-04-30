/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImageryDescription } from "./GeographicMapImageryDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ArcGISOnlineMapImageryDescription extends GeographicMapImageryDescription {
	static $t: Type = markType(ArcGISOnlineMapImageryDescription, 'ArcGISOnlineMapImageryDescription', (<any>GeographicMapImageryDescription).$type);
	protected get_type(): string {
		return "ArcGISOnlineMapImagery";
	}
	constructor() {
		super();
	}
	private _mapServerUri: string = null;
	get mapServerUri(): string {
		return this._mapServerUri;
	}
	set mapServerUri(value: string) {
		this._mapServerUri = value;
		this.markDirty("MapServerUri");
	}
	private _userName: string = null;
	get userName(): string {
		return this._userName;
	}
	set userName(value: string) {
		this._userName = value;
		this.markDirty("UserName");
	}
	private _password: string = null;
	get password(): string {
		return this._password;
	}
	set password(value: string) {
		this._password = value;
		this.markDirty("Password");
	}
	private _userToken: string = null;
	get userToken(): string {
		return this._userToken;
	}
	set userToken(value: string) {
		this._userToken = value;
		this.markDirty("UserToken");
	}
	private _isMapPublic: boolean = false;
	get isMapPublic(): boolean {
		return this._isMapPublic;
	}
	set isMapPublic(value: boolean) {
		this._isMapPublic = value;
		this.markDirty("IsMapPublic");
	}
	private _defaultTokenTimeout: number = 0;
	get defaultTokenTimeout(): number {
		return this._defaultTokenTimeout;
	}
	set defaultTokenTimeout(value: number) {
		this._defaultTokenTimeout = value;
		this.markDirty("DefaultTokenTimeout");
	}
	private _tokenGenerationEndPoint: string = null;
	get tokenGenerationEndPoint(): string {
		return this._tokenGenerationEndPoint;
	}
	set tokenGenerationEndPoint(value: string) {
		this._tokenGenerationEndPoint = value;
		this.markDirty("TokenGenerationEndPoint");
	}
	private _refererUri: string = null;
	get refererUri(): string {
		return this._refererUri;
	}
	set refererUri(value: string) {
		this._refererUri = value;
		this.markDirty("RefererUri");
	}
}


