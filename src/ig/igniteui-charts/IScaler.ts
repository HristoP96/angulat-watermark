/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScalerParams } from "./ScalerParams";
import { IList$1, IList$1_$type, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IScaler { 
	getUnscaledValue(scaledValue: number, p: ScalerParams): number;
getScaledValue(unscaledValue: number, p: ScalerParams): number;
getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndices: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void;
getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void;
getUnscaledValueList(scaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void;
readonly isInverted: boolean;
}

/**
 * @hidden 
 */
export let IScaler_$type = new Type(null, 'IScaler');


