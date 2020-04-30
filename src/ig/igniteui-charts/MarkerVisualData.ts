/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { RectData } from "igniteui-core/RectData";

/**
 * @hidden 
 */
export class MarkerVisualData extends Base {
	static $t: Type = markType(MarkerVisualData, 'MarkerVisualData');
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		this._x = value;
	}
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		this._y = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _markerAppearance: PrimitiveAppearanceData = null;
	get markerAppearance(): PrimitiveAppearanceData {
		return this._markerAppearance;
	}
	set markerAppearance(value: PrimitiveAppearanceData) {
		this._markerAppearance = value;
	}
	private _markerType: string = null;
	get markerType(): string {
		return this._markerType;
	}
	set markerType(value: string) {
		this._markerType = value;
	}
	private _contentTemplate: DataTemplate = null;
	get contentTemplate(): DataTemplate {
		return this._contentTemplate;
	}
	set contentTemplate(value: DataTemplate) {
		this._contentTemplate = value;
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isVisible = value;
	}
	serialize(): string {
		return "{ x: " + this.x + ", y: " + this.y + ", index: " + this.index + ", markerAppearance: " + (this.markerAppearance != null ? this.markerAppearance.serialize() : "null") + ", markerType: \"" + this.markerType + "\", isVisible: " + (this.isVisible ? "true" : "false") + ", " + "bounds: { left: " + this.bounds.left + ", top:" + this.bounds.top + ", width:" + this.bounds.width + ", height: " + this.bounds.height + "} }";
	}
	scaleByViewport(viewport: RectData): void {
		this.x = (this.x - viewport.left) / viewport.width;
		this.y = (this.y - viewport.top) / viewport.height;
		if (this.bounds != null) {
			let left = (this.bounds.left - viewport.left) / viewport.width;
			let top = (this.bounds.top - viewport.top) / viewport.height;
			let right = ((this.bounds.left + this.bounds.width) - viewport.left) / viewport.width;
			let bottom = ((this.bounds.top + this.bounds.height) - viewport.top) / viewport.height;
			this.bounds = new RectData(left, top, right - left, bottom - top);
		}
	}
	private _bounds: RectData = null;
	get bounds(): RectData {
		return this._bounds;
	}
	set bounds(value: RectData) {
		this._bounds = value;
	}
}


