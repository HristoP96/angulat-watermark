/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { Visibility } from "igniteui-core/Visibility";
import { Base, Type } from "igniteui-core/type";
import { CalloutStyleUpdatingEventArgs } from "./CalloutStyleUpdatingEventArgs";

/**
 * @hidden 
 */
export interface IAnnotationLayerProxy { 
	matchesType(series: Series): boolean;
setUseInterpolation(series: Series, value: boolean): void;
setHorizontalLineVisibility(series: Series, value: Visibility): void;
setVerticalLineVisibility(series: Series, value: Visibility): void;
setIsAxisAnnotationEnabled(series: Series, value: boolean): void;
setXMemberPath(series: Series, value: string): void;
setYMemberPath(series: Series, value: string): void;
setLabelMemberPath(series: Series, value: string): void;
setContentMemberPath(series: Series, value: string): void;
setTargetSeries(series: Series, value: Series): void;
setCollisionChannel(series: Series, value: string): void;
isCalloutLayer(series: Series): boolean;
addCalloutStyleUpdating(series: Series, raiseEventStyleUpdating: (sender: any, args: CalloutStyleUpdatingEventArgs) => void): void;
removeCalloutStyleUpdating(series: Series, raiseEventStyleUpdating: (sender: any, args: CalloutStyleUpdatingEventArgs) => void): void;
setCalloutStyleUpdatingEventEnabled(series: Series, calloutStyleUpdatingEventEnabled: boolean): void;
}

/**
 * @hidden 
 */
export let IAnnotationLayerProxy_$type = new Type(null, 'IAnnotationLayerProxy');


