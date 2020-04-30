/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Uri } from "./Uri";
import { Type, Base, markType } from "./type";
import { stringEmpty } from "./string";

/**
 * @hidden 
 */
export interface ICredentials { 
	getCredential(uri: Uri, authType: string): NetworkCredential;
}

/**
 * @hidden 
 */
export let ICredentials_$type = new Type(null, 'ICredentials');

/**
 * @hidden 
 */
export class NetworkCredential extends Base implements ICredentials {
	static $t: Type = markType(NetworkCredential, 'NetworkCredential', (<any>Base).$type, [ICredentials_$type]);
	constructor(initNumber: number, userName: string, password: string);
	constructor(initNumber: number, userName: string, password: string, domain: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let userName: string = <string>_rest[0];
				let password: string = <string>_rest[1];
				let $outerArgs = <any[]>[ userName, password, stringEmpty() ];
				{
					let userName: string = <string>$outerArgs[0];
					let password: string = <string>$outerArgs[1];
					let domain: string = <string>$outerArgs[2];
					this.userName = userName;
					this.password = password;
					this.domain = domain;
				}
			}
			break;

			case 1:
			{
				let userName: string = <string>_rest[0];
				let password: string = <string>_rest[1];
				let domain: string = <string>_rest[2];
				this.userName = userName;
				this.password = password;
				this.domain = domain;
			}
			break;

		}

	}
	getCredential(uri: Uri, authType: string): NetworkCredential {
		return this;
	}
	private _userName: string = null;
	get userName(): string {
		return this._userName;
	}
	set userName(value: string) {
		this._userName = value;
	}
	private _password: string = null;
	get password(): string {
		return this._password;
	}
	set password(value: string) {
		this._password = value;
	}
	private _domain: string = null;
	get domain(): string {
		return this._domain;
	}
	set domain(value: string) {
		this._domain = value;
	}
}


