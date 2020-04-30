/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { LiveGridCoreDescriptionModule } from "./LiveGridCoreDescriptionModule";
import { NumericColumnDescriptionMetadata } from "./NumericColumnDescriptionMetadata";
import { TextColumnDescriptionMetadata } from "./TextColumnDescriptionMetadata";
import { ImageColumnDescriptionMetadata } from "./ImageColumnDescriptionMetadata";
import { DateTimeColumnDescriptionMetadata } from "./DateTimeColumnDescriptionMetadata";
import { TemplateColumnDescriptionMetadata } from "./TemplateColumnDescriptionMetadata";
import { SectionHeaderDescriptionMetadata } from "./SectionHeaderDescriptionMetadata";
import { TextHeaderDescriptionMetadata } from "./TextHeaderDescriptionMetadata";
import { TemplateHeaderDescriptionMetadata } from "./TemplateHeaderDescriptionMetadata";
import { RowSeparatorDescriptionMetadata } from "./RowSeparatorDescriptionMetadata";

/**
 * @hidden 
 */
export class LiveGridDescriptionModule extends Base {
	static $t: Type = markType(LiveGridDescriptionModule, 'LiveGridDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		LiveGridCoreDescriptionModule.register(context);
		NumericColumnDescriptionMetadata.register(context);
		TextColumnDescriptionMetadata.register(context);
		ImageColumnDescriptionMetadata.register(context);
		DateTimeColumnDescriptionMetadata.register(context);
		TemplateColumnDescriptionMetadata.register(context);
		SectionHeaderDescriptionMetadata.register(context);
		TextHeaderDescriptionMetadata.register(context);
		TemplateHeaderDescriptionMetadata.register(context);
		RowSeparatorDescriptionMetadata.register(context);
	}
}


