/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
import { NotImplementedException } from "./NotImplementedException";
import { UriKind } from "./UriKind";
import { isLetter, isLetterOrDigit } from "./stringExtended";

/**
 * @hidden 
 */
export class Uri extends Base {
	static $t: Type = markType(Uri, 'Uri');
	constructor(initNumber: number, uri: string);
	constructor(initNumber: number, uriString: string, uriKind: UriKind);
	constructor(initNumber: number, uriString: string, uriKind: UriKind, validate: boolean);
	constructor(initNumber: number, baseUri: Uri, relativeUri: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let uri: string = <string>_rest[0];
				let $outerArgs = <any[]>[ uri, UriKind.Absolute, true ];
				{
					let uriString: string = <string>$outerArgs[0];
					let uriKind: UriKind = <UriKind>$outerArgs[1];
					let validate: boolean = <boolean>$outerArgs[2];
					this.value = uriString;
				}
			}
			break;

			case 1:
			{
				let uriString: string = <string>_rest[0];
				let uriKind: UriKind = <UriKind>_rest[1];
				let $outerArgs = <any[]>[ uriString, uriKind, true ];
				{
					let uriString: string = <string>$outerArgs[0];
					let uriKind: UriKind = <UriKind>$outerArgs[1];
					let validate: boolean = <boolean>$outerArgs[2];
					this.value = uriString;
				}
			}
			break;

			case 2:
			{
				let uriString: string = <string>_rest[0];
				let uriKind: UriKind = <UriKind>_rest[1];
				let validate: boolean = <boolean>_rest[2];
				this.value = uriString;
			}
			break;

			case 3:
			{
				let baseUri: Uri = <Uri>_rest[0];
				let relativeUri: string = <string>_rest[1];
				throw new NotImplementedException(0);
			}
			break;

		}

	}
	private _value: string = null;
	get value(): string {
		return this._value;
	}
	set value(value: string) {
		this._value = value;
	}
	get isAbsoluteUri(): boolean {
		let value = this.value;
		let length = value.length;
		if (length != 0 && isLetter(value.charAt(0))) {
			for (let i: number = 1; i < length; i++) {
				let current = value.charAt(i);
				if (current == ':') {
					return true;
				}
				if (current != '+' && current != '-' && current != '.' && !isLetterOrDigit(current)) {
					break;
				}
			}
		}
		return false;
	}
	get scheme(): string {
		let value = this.value;
		let length = value.length;
		if (length != 0 && isLetter(value.charAt(0))) {
			for (let i: number = 1; i < length; i++) {
				let current = value.charAt(i);
				if (current == ':') {
					return value.substr(0, i);
				}
				if (current != '+' && current != '-' && current != '.' && !isLetterOrDigit(current)) {
					break;
				}
			}
		}
		throw new InvalidOperationException(1, "The scheme cannot be obtained from a relative Uri.");
	}
	static encodeURIComponent(stringToEscape: string): string {
		return null;
	}
	static escapeUriString(stringToEscape: string): string {
		if (<boolean>(/^([A-Z]:)|(\\\\)/i.test(stringToEscape))) {
			return stringToEscape;
		}
		return <string>(encodeURI(stringToEscape));
	}
	static tryCreate(uriString: string, uriKind: UriKind, result: Uri): { ret: boolean; p2: Uri; } {
		if (Uri.isWellFormedUriString(uriString, uriKind)) {
			result = new Uri(2, uriString, uriKind, false);
			return {
				ret: true,
				p2: result

			};
		}
		result = null;
		return {
			ret: false,
			p2: result

		};
	}
	static isWellFormedUriString(uriString: string, uriKind: UriKind): boolean {
		switch (uriKind) {
			case UriKind.Absolute:
			if (!<boolean>(/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(uriString))) {
				return false;
			}
			break;

			case UriKind.Relative:
			if (!<boolean>(/^([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(uriString))) {
				return false;
			}
			break;

			default:

			case UriKind.RelativeOrAbsolute:
			if (!<boolean>(/^((((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?)))?([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(uriString))) {
				return false;
			}
			break;

		}

		return true;
	}
	toString(): string {
		if (<boolean>(/^([A-Z]:)|(\\\\)/i.test(this.value))) {
			return this.value;
		}
		let result = <string>(decodeURI(this.value));
		if (<boolean>(/^(http|ftp|https):\/\/[\w-]+(\.[\w-]*)+?$/i.test(result))) {
			result += "/";
		}
		return result;
	}
	static readonly schemeDelimiter: string = "://";
	get absolutePath(): string {
		throw new NotImplementedException(0);
	}
	get absoluteUri(): string {
		throw new NotImplementedException(0);
	}
	get localPath(): string {
		let result = <string[]>(/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.exec(this.value));
		if (result == null) {
			throw new InvalidOperationException(0);
		}
		if (result[6] != null) {
			return <string>(decodeURI(result[6]));
		}
		return "/";
	}
	get originalString(): string {
		return this.value;
	}
	isWellFormedOriginalString(): boolean {
		return Uri.isWellFormedUriString(this.value, UriKind.RelativeOrAbsolute);
	}
}


