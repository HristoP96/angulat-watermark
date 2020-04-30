/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IComparer$1, IComparer$1_$type } from "./IComparer$1";
import { SectionData } from "./SectionData";

/**
 * @hidden 
 */
export class SectionDataStartIndexComparer extends Base implements IComparer$1<SectionData> {
	static $t: Type = markType(SectionDataStartIndexComparer, 'SectionDataStartIndexComparer', (<any>Base).$type, [IComparer$1_$type.specialize((<any>SectionData).$type)]);
	compare(x: SectionData, y: SectionData): number {
		return Base.compareSimple(x.sectionStartIndex, y.sectionStartIndex);
	}
}


