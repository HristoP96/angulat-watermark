/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SectionHeader } from "./SectionHeader";
import { CellPath } from "./CellPath";
import { Grid } from "./Grid";
import { Base, Type, markType } from "igniteui-core/type";
import { CellModel } from "./CellModel";
import { TemplateSectionHeaderCellModel } from "./TemplateSectionHeaderCellModel";
import { TemplateSectionHeaderCellUpdatingEventArgs } from "./TemplateSectionHeaderCellUpdatingEventArgs";

/**
 * @hidden 
 */
export class TemplateSectionHeader extends SectionHeader {
	static $t: Type = markType(TemplateSectionHeader, 'TemplateSectionHeader', (<any>SectionHeader).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "templateSectionHeader";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new TemplateSectionHeaderCellModel();
	}
	prepareCreateOrUpdateCall(model: TemplateSectionHeaderCellModel, cell: any): void {
		if (this.cellUpdating != null) {
			this.cellUpdating(this, ((() => {
				let $ret = new TemplateSectionHeaderCellUpdatingEventArgs();
				$ret.cellInfo = model;
				$ret.content = cell;
				return $ret;
			})()));
		}
	}
	cellUpdating: (sender: any, args: TemplateSectionHeaderCellUpdatingEventArgs) => void = null;
}


