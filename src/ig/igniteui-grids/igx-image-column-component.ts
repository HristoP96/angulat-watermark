import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ImageStretchOptions, ImageStretchOptions_$type } from "./ImageStretchOptions";
import { IgxColumnComponent } from "./igx-column-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { ImageColumn } from "./ImageColumn";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents an Image grid column, used to allow the developer to display an image in a cell.
*/
export const IgxImageColumnComponent_PROVIDERS = [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxImageColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxImageColumnComponent)}];
@Component({
  selector: 'igx-image-column',
  template: ``,
  providers: [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxImageColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxImageColumnComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxImageColumnComponent extends IgxColumnComponent
{

protected createImplementation() : ImageColumn
{
	return new ImageColumn();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ImageColumn {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the stretch option to use when rendering images
	*/
	get imageStretchOption() : ImageStretchOptions {
		return this.i.imageStretchOption;
	}
	@Input()
	set imageStretchOption(v: ImageStretchOptions) {
		this.i.imageStretchOption = ensureEnum<ImageStretchOptions>(ImageStretchOptions_$type, v);
	}
}
