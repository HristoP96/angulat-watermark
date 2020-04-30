/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Message_Spark } from "./Message_Spark";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ContainerResizedMessage_Spark extends Message_Spark {
	static $t: Type = markType(ContainerResizedMessage_Spark, 'ContainerResizedMessage_Spark', (<any>Message_Spark).$type);
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _verticalAxisWidth: number = 0;
	get verticalAxisWidth(): number {
		return this._verticalAxisWidth;
	}
	set verticalAxisWidth(value: number) {
		this._verticalAxisWidth = value;
	}
	private _horizontalAxisHeight: number = 0;
	get horizontalAxisHeight(): number {
		return this._horizontalAxisHeight;
	}
	set horizontalAxisHeight(value: number) {
		this._horizontalAxisHeight = value;
	}
	private _container: DomRenderer = null;
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
	}
	private _backgroundCanvas: DomWrapper = null;
	get backgroundCanvas(): DomWrapper {
		return this._backgroundCanvas;
	}
	set backgroundCanvas(value: DomWrapper) {
		this._backgroundCanvas = value;
	}
	private _horizontalAxisCanvas: DomWrapper = null;
	get horizontalAxisCanvas(): DomWrapper {
		return this._horizontalAxisCanvas;
	}
	set horizontalAxisCanvas(value: DomWrapper) {
		this._horizontalAxisCanvas = value;
	}
	private _verticalAxisCanvas: DomWrapper = null;
	get verticalAxisCanvas(): DomWrapper {
		return this._verticalAxisCanvas;
	}
	set verticalAxisCanvas(value: DomWrapper) {
		this._verticalAxisCanvas = value;
	}
	private _horizontalAxisContext: RenderingContext = null;
	get horizontalAxisContext(): RenderingContext {
		return this._horizontalAxisContext;
	}
	set horizontalAxisContext(value: RenderingContext) {
		this._horizontalAxisContext = value;
	}
	private _verticalAxisContext: RenderingContext = null;
	get verticalAxisContext(): RenderingContext {
		return this._verticalAxisContext;
	}
	set verticalAxisContext(value: RenderingContext) {
		this._verticalAxisContext = value;
	}
}


