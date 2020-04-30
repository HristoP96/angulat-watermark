import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ImageStretchOptions, ImageStretchOptions_$type } from "./ImageStretchOptions";
import { ImageResourceType, ImageResourceType_$type } from "./ImageResourceType";
import { IgxCellInfo } from "./igx-cell-info";
import { ImageCellModel as ImageCellModel_internal } from "./ImageCellModel";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Backing information for an image cell in the grid.
*/
export class IgxImageCellInfo extends IgxCellInfo
{

protected createImplementation() : ImageCellModel_internal
{
	return new ImageCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ImageCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the resource path to use to get the image for the cell.
	*/
	get imagePath() : string {
		return (this.i.imagePath as string);
	}
	set imagePath(v: string) {
		this.i.imagePath = v;
	}
	/**
	 * Sets or gets the image stretching behavior for the image.
	*/
	get imageStretchOption() : ImageStretchOptions {
		return this.i.imageStretchOption;
	}
	set imageStretchOption(v: ImageStretchOptions) {
		this.i.imageStretchOption = ensureEnum<ImageStretchOptions>(ImageStretchOptions_$type, v);
	}
	/**
	 * Sets or gets the image resource type. Indicates which type of resource should be fetched and how ImagePath should be interpreted.
	*/
	get imageResourceType() : ImageResourceType {
		return this.i.imageResourceType;
	}
	set imageResourceType(v: ImageResourceType) {
		this.i.imageResourceType = ensureEnum<ImageResourceType>(ImageResourceType_$type, v);
	}
}
