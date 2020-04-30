import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxGetTileImageUriArgs } from "igniteui-core/igx-get-tile-image-uri-args";
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { CustomMapImagery as CustomMapImagery_internal } from "./CustomMapImagery";

/**
 * Represents a CustomMapImagery MapImagery
*/
export class IgxCustomMapImagery extends IgxGeographicMapImagery
{


	/**
	                             * @hidden 
	                             */
	public get i() : CustomMapImagery_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	private _getTileImageUri: EventEmitter<{ sender: any, args: IgxGetTileImageUriArgs}> = null;
	/**
	 * Raised when URI for tiles should be provided
	*/
	@Output()
	get getTileImageUri(): EventEmitter<{ sender: any, args: IgxGetTileImageUriArgs}> {
		if (this._getTileImageUri == null) {
			this._getTileImageUri = new EventEmitter<{sender: any, args: IgxGetTileImageUriArgs}>();
			this.i.getTileImageUri = delegateCombine(this.i.getTileImageUri, (o, e) => {
				let outerArgs = new IgxGetTileImageUriArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeGetTileImageUri) {
	                            (this as any).beforeGetTileImageUri(this, outerArgs);
	                        }
					    this._getTileImageUri.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._getTileImageUri;
	}
}
