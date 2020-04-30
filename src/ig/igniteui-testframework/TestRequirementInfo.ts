/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "igniteui-core/type";
import { arrayIndexOf1 } from "igniteui-core/arrayExtended";

/**
 * @hidden 
 */
export class TestRequirementInfo extends Base {
	static $t: Type = markType(TestRequirementInfo, 'TestRequirementInfo');
	static currentRequirements: string[] = null;
	static hasRequirement(requirement: string): boolean {
		return TestRequirementInfo.currentRequirements == null || arrayIndexOf1<string>(String_$type, TestRequirementInfo.currentRequirements, requirement) >= 0;
	}
}


