/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IBucketizer { 
	getBucket(index: number): number[];
getBucketWithoutUnknowns(index: number): number[];
getErrorBucket(index: number, column: IFastItemColumn$1<number>): number;
getBucketInfo(firstBucket: number, lastBucket: number, bucketSize: number, resolution: number): { p0: number; p1: number; p2: number; p3: number; };
cacheValues(): void;
unCacheValues(): void;
}

/**
 * @hidden 
 */
export let IBucketizer_$type = new Type(null, 'IBucketizer');


