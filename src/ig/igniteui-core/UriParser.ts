/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, IEnumerable$1, Type, markType } from "./type";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export abstract class UriParser extends Base {
	static $t: Type = markType(UriParser, 'UriParser');
	private static readonly _knownSchemes: List$1<string> = new List$1<string>(String_$type, 1, <IEnumerable$1<string>><any>[ "http", "https", "ws", "wss", "ftp", "file", "gopher", "nntp", "news", "mailto", "uuid", "telnet", "ldap", "net.tcp", "net.pipe" ]);
	static isKnownScheme(schemeName: string): boolean {
		return UriParser._knownSchemes.contains(schemeName.toLowerCase());
	}
}


