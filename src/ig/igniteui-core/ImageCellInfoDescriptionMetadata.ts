/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { ImageCellInfoDescription } from "./ImageCellInfoDescription";

/**
 * @hidden 
 */
export class ImageCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(ImageCellInfoDescriptionMetadata, 'ImageCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ImageCellInfoDescriptionMetadata._metadata == null) {
			ImageCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ImageCellInfoDescriptionMetadata.fillMetadata(context, ImageCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ImagePath", "String");
		metadata.item("ImageStretchOption", "ExportedType:string:ImageStretchOptions");
		metadata.item("ImageResourceType", "ExportedType:string:ImageResourceType");
	}
	static register(context: TypeDescriptionContext): void {
		ImageCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ImageCellInfo", () => new ImageCellInfoDescription());
		context.register("ImageCellInfo", ImageCellInfoDescriptionMetadata._metadata);
	}
}


