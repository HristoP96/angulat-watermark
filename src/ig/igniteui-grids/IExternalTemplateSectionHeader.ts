/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TemplateSectionHeaderCellModel } from "./TemplateSectionHeaderCellModel";
import { Base, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IExternalTemplateSectionHeader { 
	raiseCreateOrUpdate(model: TemplateSectionHeaderCellModel, cell: any): void;
}

/**
 * @hidden 
 */
export let IExternalTemplateSectionHeader_$type = new Type(null, 'IExternalTemplateSectionHeader');


