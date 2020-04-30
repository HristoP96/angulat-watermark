/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { ImageResourceType } from "./ImageResourceType";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CanvasImageCell extends CanvasGridCellBase {
	static $t: Type = markType(CanvasImageCell, 'CanvasImageCell', (<any>CanvasGridCellBase).$type);
	private _horzAlignment: CellContentHorizontalAlignment = CellContentHorizontalAlignment.Center;
	private _vertAlignment: CellContentVerticalAlignment = CellContentVerticalAlignment.Stretch;
	private _activeResource: string = null;
	private _modelOpacity: number = 1;
	private _imageView: DomWrapper = null;
	get modelOpacity(): number {
		return this._modelOpacity;
	}
	set modelOpacity(value: number) {
		this._modelOpacity = value;
	}
	constructor(renderer: DomRenderer) {
		super(renderer);
		this._imageView = renderer.createElement("img");
	}
	loadImage(path: string, resourceType: ImageResourceType): void {
		this.cancelPendingLoad();
		this._imageView.setRawStyleProperty("opacity", "0");
		if (path == null || path.length == 0) {
			this.cleanImageView(this._imageView);
			return;
		}
		if (Base.equalsStatic(path, this._activeResource)) {
			return;
		}
		this.startImageRetrieve(path, resourceType);
	}
	private cleanImageView(imageView: DomWrapper): void {
		imageView.setAttribute("src", "");
	}
	private startImageRetrieve(path: string, resourceType: ImageResourceType): void {
		this._activeResource = path;
		this._imageView.setAttribute("src", path);
	}
	cancelPendingLoad(): void {
		this.cleanImageView(this._imageView);
		this._activeResource = "";
	}
	setImageHorizontalAlignment(alignment: CellContentHorizontalAlignment): void {
		this.isDirty = true;
		this._horzAlignment = alignment;
	}
	setImageVerticalAlignment(alignment: CellContentVerticalAlignment): void {
		this.isDirty = true;
		this._vertAlignment = alignment;
	}
	protected get_isPlaceholderSupported(): boolean {
		return true;
	}
}


