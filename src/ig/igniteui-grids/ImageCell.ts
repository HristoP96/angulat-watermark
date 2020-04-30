/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GridCellBase } from "./GridCellBase";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent } from "igniteui-core/dom";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { Base, runOn, Type, markType } from "igniteui-core/type";
import { ImageResourceType } from "./ImageResourceType";
import { ImageStretchOptions } from "./ImageStretchOptions";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class ImageCell extends GridCellBase {
	static $t: Type = markType(ImageCell, 'ImageCell', (<any>GridCellBase).$type);
	private _imageView: DomWrapper = null;
	private _horzAlignment: CellContentHorizontalAlignment = CellContentHorizontalAlignment.Center;
	private _vertAlignment: CellContentVerticalAlignment = CellContentVerticalAlignment.Stretch;
	private _activeResource: string = null;
	private _loading: boolean = false;
	private _modelOpacity: number = 1;
	private _imageDiv: DomWrapper = null;
	get imageView(): DomWrapper {
		return this._imageView;
	}
	get modelOpacity(): number {
		return this._modelOpacity;
	}
	set modelOpacity(value: number) {
		this._modelOpacity = value;
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this._imageView = renderer.createElement("img");
		this._imageView.listen("load", runOn(this, this.imageLoaded));
		this._imageDiv = renderer.createElement("div");
		this._imageDiv.setRawStyleProperty("background-size", "contain");
		this._imageDiv.setRawStyleProperty("background-repeat", "no-repeat");
		this._imageDiv.setRawStyleProperty("background-position", "center");
		this._imageDiv.setRawStyleProperty("width", "100%");
		this._imageDiv.setRawStyleProperty("height", "100%");
		this.container.setRawStyleProperty("text-align", "left");
		this.container.setRawStyleProperty("vertical-align", "middle");
		this.container.append(this._imageDiv);
	}
	private imageLoaded(e: NormalizedEvent): void {
		this._loading = false;
		if (!stringIsNullOrEmpty(this._activeResource)) {
			this._imageDiv.setRawStyleProperty("opacity", "1");
			this._imageDiv.setRawStyleProperty("background-image", "url(" + this._activeResource + ")");
		}
	}
	loadImage(path: string, resourceType: ImageResourceType): void {
		if (path == this._activeResource) {
			return;
		}
		this.cancelPendingLoad();
		this._imageDiv.setRawStyleProperty("opacity", "0");
		if (path == null || path.length == 0) {
			this.cleanImageView(this._imageView);
			return;
		}
		if (Base.equalsStatic(path, this._activeResource)) {
			return;
		}
		this.startImageRetrieve(path, resourceType);
		let img_: any = this._imageView.getNativeElement();
		if (img_ != null && <boolean>(img_.complete)) {
			this._loading = false;
			this._imageView.setRawStyleProperty("opacity", "1");
			this._imageDiv.setRawStyleProperty("background-image", "url(" + this._activeResource + ")");
		}
	}
	private cleanImageView(imageView: DomWrapper): void {
		imageView.setAttribute("src", "");
		this._imageDiv.setRawStyleProperty("background-image", "");
	}
	setStretchOptions(imageStretchOption: ImageStretchOptions): void {
		switch (imageStretchOption) {
			case ImageStretchOptions.Fill:
			this._imageDiv.setRawStyleProperty("background-size", "100% 100%");
			break;

			case ImageStretchOptions.None:
			this._imageDiv.setRawStyleProperty("background-size", "auto");
			break;

			case ImageStretchOptions.Uniform:
			this._imageDiv.setRawStyleProperty("background-size", "contain");
			break;

		}

	}
	private startImageRetrieve(path: string, resourceType: ImageResourceType): void {
		this._loading = true;
		this._activeResource = path;
		this.imageView.setAttribute("src", path);
	}
	cancelPendingLoad(): void {
		if (this._loading) {
			this.cleanImageView(this._imageView);
			this._activeResource = "";
		}
	}
	setImageHorizontalAlignment(alignment: CellContentHorizontalAlignment): void {
		this._horzAlignment = alignment;
	}
	setImageVerticalAlignment(alignment: CellContentVerticalAlignment): void {
		this._vertAlignment = alignment;
	}
	protected get_isPlaceholderSupported(): boolean {
		return true;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		if (propertyName == GridCellBase.indentPropertyName || propertyName == GridCellBase.isCollapsablePropertyName) {
			this._imageDiv.setRawStyleProperty("margin-left", this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + this.expansionIndicatorMarginRight + "px");
		}
	}
}


