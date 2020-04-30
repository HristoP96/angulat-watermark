/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IPageCandidatesSink { 
	transformPage(pageIndex: number): number[];
addCandidate(pageIndex: number, priority: DataSourcePageRequestPriority): boolean;
removeCandidate(pageIndex: number): void;
}

/**
 * @hidden 
 */
export let IPageCandidatesSink_$type = new Type(null, 'IPageCandidatesSink');


