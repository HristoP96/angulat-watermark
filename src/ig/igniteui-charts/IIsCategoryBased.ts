/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryMode } from "./CategoryMode";
import { ICategoryScaler } from "./ICategoryScaler";
import { IScaler } from "./IScaler";
import { IBucketizer } from "./IBucketizer";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IIsCategoryBased { 
	readonly currentCategoryMode: CategoryMode;
readonly scaler: ICategoryScaler;
readonly yScaler: IScaler;
readonly bucketizer: IBucketizer;
readonly currentMode2Index: number;
readonly useHighMarkerFidelity: boolean;
readonly mayContainUnknowns: boolean;
getHostReferenceValue(): number;
provideCollisionDetector(): IDetectsCollisions;
}

/**
 * @hidden 
 */
export let IIsCategoryBased_$type = new Type(null, 'IIsCategoryBased');


