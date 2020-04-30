/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TokenResponseModel extends Base {
	static $t: Type = markType(TokenResponseModel, 'TokenResponseModel');
	private _token: string = null;
	get token(): string {
		return this._token;
	}
	set token(value: string) {
		this._token = value;
	}
	private _expires: number = 0;
	get expires(): number {
		return this._expires;
	}
	set expires(value: number) {
		this._expires = value;
	}
	private _ssl: boolean = false;
	get ssl(): boolean {
		return this._ssl;
	}
	set ssl(value: boolean) {
		this._ssl = value;
	}
}


