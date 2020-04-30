/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates how to break lines of text for a cell.
 */
export enum TextCellLineBreakMode {
	/**
	 * Truncates the text content at the end and displays an ellipsis character if it can't fit on a line.
	 */
	Ellipsis = 0,
	/**
	 * Keeps the text on a single line, but does not attempt to insert an ellipsis character.
	 */
	NoWrap = 1,
	/**
	 * If possible for the current platform, wraps to a new line on a word break, if necessary.
	 */
	WordWrap = 2,
	/**
	 * If possible for the current platform, wraps to a new line whenever necessary.
	 */
	CharacterWrap = 3
}

/**
 * @hidden 
 */
export let TextCellLineBreakMode_$type = markEnum('TextCellLineBreakMode', 'Ellipsis,0|NoWrap,1|WordWrap,2|CharacterWrap,3');


