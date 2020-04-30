/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

export enum RegexOptions {
	None = 0,
	IgnoreCase = 1,
	Multiline = 2,
	ExplicitCapture = 4,
	Compiled = 8,
	Singleline = 16,
	IgnorePatternWhitespace = 32,
	RightToLeft = 64,
	ECMAScript = 256,
	CultureInvariant = 512
}

/**
 * @hidden 
 */
export let RegexOptions_$type = markEnum('RegexOptions', 'None,0|IgnoreCase,1|Multiline,2|ExplicitCapture,4|Compiled,8|Singleline,16|IgnorePatternWhitespace,32|RightToLeft,64|ECMAScript,256|CultureInvariant,512');


