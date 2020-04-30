/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, PropertyChangedEventArgs, Type } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";

/**
 * @hidden 
 */
export interface IAxisAnnotation { 
	readonly text: string;
readonly value: any;
resolveLabelValue(): string;
formatLabel: (item: any) => string;
propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
readonly textColor: Brush;
readonly background: Brush;
readonly outline: Brush;
readonly strokeThickness: number;
readonly backgroundPadding: Thickness;
checkForExtentReset(act: () => void): void;
}

/**
 * @hidden 
 */
export let IAxisAnnotation_$type = new Type(null, 'IAxisAnnotation');


