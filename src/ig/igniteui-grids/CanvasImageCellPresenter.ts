/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasCellPresenterBase } from "./CanvasCellPresenterBase";
import { CanvasImageCell } from "./CanvasImageCell";
import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { CellModel } from "./CellModel";
import { ImageCellModel } from "./ImageCellModel";
import { ImageStretchOptions } from "./ImageStretchOptions";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { ImageResourceType } from "./ImageResourceType";
import { Base, Type, markType } from "igniteui-core/type";
import { ModelStates } from "./ModelStates";
import { stringStartsWith } from "igniteui-core/string";

/**
 * @hidden 
 */
export class CanvasImageCellPresenter extends CanvasCellPresenterBase {
	static $t: Type = markType(CanvasImageCellPresenter, 'CanvasImageCellPresenter', (<any>CanvasCellPresenterBase).$type);
	constructor(cell: CanvasGridCellBase) {
		super(cell);
	}
	get imageCell(): CanvasImageCell {
		return <CanvasImageCell>this.cell;
	}
	protected modelUpdatedOverride(model: CellModel): void {
		super.modelUpdatedOverride(model);
		let imageModel: ImageCellModel = <ImageCellModel>model;
		if (model.isContentDirty) {
			if (model.isDirtyById(CellModel.contentOpacityPropertyId) || model.isDirtyById(CellModel.virtualizationPercentagePropertyId)) {
				let virtualPercent: number = Math.min(1, Math.max(0, model.virtualizationPercentage));
				let opacity: number = model.contentOpacity * (1 - virtualPercent);
				this.imageCell.modelOpacity = opacity;
			}
			if (imageModel.isDirtyById(ImageCellModel.imagePathPropertyId) || imageModel.isDirtyById(ImageCellModel.imageResourceTypePropertyId)) {
				this.updateImageContent(imageModel.imagePath, <ImageResourceType><number>imageModel.imageResourceType);
			}
			if (imageModel.isDirtyById(ImageCellModel.imageStretchOptionPropertyId) || imageModel.isDirtyById(ImageCellModel.horizontalAlignmentPropertyId) || imageModel.isDirtyById(ImageCellModel.verticalAlignmentPropertyId)) {
				this.updateImageStretch(imageModel.imageStretchOption, imageModel.horizontalAlignment, imageModel.verticalAlignment);
			}
			if (imageModel.isDirtyById(ImageCellModel.statePropertyId)) {
				if (model.state == ModelStates.Recycled) {
					this.imageCell.cancelPendingLoad();
				} else if (model.state == ModelStates.Inview) {
					this.updateImageContent(imageModel.imagePath, <ImageResourceType><number>imageModel.imageResourceType);
				}
			}
		}
	}
	private updateImageStretch(imageStretchOption: ImageStretchOptions, horizontalAlignment: CellContentHorizontalAlignment, verticalAlignment: CellContentVerticalAlignment): void {
	}
	private updateImageContent(imagePath: string, resourceType: ImageResourceType): void {
		let loweredImagePath: string = imagePath.toLowerCase();
		if (resourceType == ImageResourceType.Unspecified) {
			resourceType = ImageResourceType.RemoteResource;
		}
		if (stringStartsWith(loweredImagePath, "http") || resourceType == ImageResourceType.RemoteResource) {
			this.imageCell.loadImage(imagePath, ImageResourceType.RemoteResource);
		}
		if (stringStartsWith(loweredImagePath, "asset") || resourceType == ImageResourceType.LocalAsset) {
			let realPath: string = imagePath;
			if (stringStartsWith(loweredImagePath, "asset")) {
				realPath = imagePath.substr(8);
			}
			this.imageCell.loadImage(realPath, ImageResourceType.LocalAsset);
		}
		if (stringStartsWith(loweredImagePath, "drawable") || resourceType == ImageResourceType.LocalResource) {
			let realPath1: string = imagePath;
			if (stringStartsWith(loweredImagePath, "drawable")) {
				realPath1 = imagePath.substr(11);
			}
			this.imageCell.loadImage(realPath1, ImageResourceType.LocalResource);
		}
		if (stringStartsWith(loweredImagePath, "nativeresource") || resourceType == ImageResourceType.LocalResource) {
			let realPath2: string = imagePath;
			if (stringStartsWith(loweredImagePath, "nativeresource")) {
				realPath2 = imagePath.substr(17);
			}
			this.imageCell.loadImage(realPath2, ImageResourceType.LocalResource);
		}
		if (stringStartsWith(loweredImagePath, "embeddedresource") || resourceType == ImageResourceType.EmbeddedResource) {
			let realPath3: string = imagePath;
			if (stringStartsWith(loweredImagePath, "embeddedresource")) {
				realPath3 = imagePath.substr(19);
			}
			this.imageCell.loadImage(realPath3, ImageResourceType.EmbeddedResource);
		}
	}
}


