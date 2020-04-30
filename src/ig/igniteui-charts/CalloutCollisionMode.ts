/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available collision modes of callout layers.
 */
export enum CalloutCollisionMode {
	/**
	 * Automatically decide the collision strategy.
	 */
	Auto = 0,
	/**
	 * Use a simulated annealing based collision strategy. This is higher quality, but takes longer, and is performed time-sliced in the background until an acceptable quality is reached.
	 */
	SimulatedAnnealing = 1,
	/**
	 * Use a greedy algorithm to avoid collisions. This is cheap and predictable, but of comparatively low quality.
	 */
	Greedy = 2,
	/**
	 * Use a greedy algorithm with localized center of mass hints to avoid collisions. This is relatively cheap to perform, compared to the simulated annealing approach, but is of comparatively lower quality.
	 */
	GreedyCenterOfMass = 3
}

/**
 * @hidden 
 */
export let CalloutCollisionMode_$type = markEnum('CalloutCollisionMode', 'Auto,0|SimulatedAnnealing,1|Greedy,2|GreedyCenterOfMass,3');


