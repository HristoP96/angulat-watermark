/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Style } from "igniteui-core/Style";

/**
 * @hidden 
 */
export class StyleShapeEventArgs extends EventArgs {
	static $t: Type = markType(StyleShapeEventArgs, 'StyleShapeEventArgs', (<any>EventArgs).$type);
	constructor(item: any, container: DependencyObject, style: Style) {
		super();
		this.item = item;
		this.container = container;
		this.shapeStyle = style;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _container: DependencyObject = null;
	get container(): DependencyObject {
		return this._container;
	}
	set container(value: DependencyObject) {
		this._container = value;
	}
	private _shapeStyle: Style = null;
	get shapeStyle(): Style {
		return this._shapeStyle;
	}
	set shapeStyle(value: Style) {
		this._shapeStyle = value;
	}
	getStyle(): Style {
		return this.shapeStyle;
	}
}


