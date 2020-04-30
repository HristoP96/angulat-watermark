/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, DomWrapperPosition } from "igniteui-core/dom";
import { List$1 } from "igniteui-core/List$1";
import { SRProvider } from "igniteui-core/SRProvider";

/**
 * @hidden 
 */
export abstract class TemplatedHtmlControl extends Base {
	static $t: Type = markType(TemplatedHtmlControl, 'TemplatedHtmlControl');
	static findChildElement(rootElement: DomWrapper, elementType: string): DomWrapper {
		for (let i = 0; i < rootElement.getChildCount(); i++) {
			let child = rootElement.getChildAt(i);
			if (child.getNativeElement() != null) {
				let ele_ = child.getNativeElement();
				if (elementType.toUpperCase() == (<string>(ele_.nodeName)).toUpperCase()) {
					return child;
				}
				let subFind = TemplatedHtmlControl.findChildElement(child, elementType);
				if (subFind != null) {
					return subFind;
				}
			}
		}
		return null;
	}
	static findChildElements(rootElement: DomWrapper, elementType: string): List$1<DomWrapper> {
		let ret = new List$1<DomWrapper>(DomWrapper_$type, 0);
		for (let i = 0; i < rootElement.getChildCount(); i++) {
			let child = rootElement.getChildAt(i);
			if (child.getNativeElement() != null) {
				let ele_ = child.getNativeElement();
				if (elementType.toUpperCase() == (<string>(ele_.nodeName)).toUpperCase()) {
					ret.add(child);
				}
				let subFind = TemplatedHtmlControl.findChildElements(child, elementType);
				if (subFind != null) {
					ret.addRange(subFind);
				}
			}
		}
		return ret;
	}
	static getTemplate(template: any, className: string, defaultTemplate: string): any {
		return template;
	}
	private _className: string = null;
	protected get className(): string {
		return this._className;
	}
	protected set className(value: string) {
		this._className = value;
	}
	constructor(className: string, template: any, defaultTemplate: string) {
		super();
		this.template = TemplatedHtmlControl.getTemplate(template, className, defaultTemplate);
		this.className = className;
	}
	private _template: any = null;
	protected get template(): any {
		return this._template;
	}
	protected set template(value: any) {
		this._template = value;
	}
	private _rootElement: DomWrapper = null;
	get rootElement(): DomWrapper {
		if (this._rootElement == null && this.renderer != null) {
			return this.renderer.rootWrapper;
		}
		return this._rootElement;
	}
	set rootElement(value: DomWrapper) {
		this._rootElement = value;
	}
	private _renderer: DomRenderer = null;
	get renderer(): DomRenderer {
		return this._renderer;
	}
	set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	provideContainer(container: any): void {
		if (container == null) {
			if (this.rootElement != null) {
				this.rootElement.remove();
			}
			return;
		}
		this.renderer = <DomRenderer><any>container;
	}
	static importTemplateContent(template: any): HTMLElement {
		return null;
	}
	static setLabelText1(selector: string, resourceKey: string, renderer: DomRenderer, srProvider: SRProvider): void {
		TemplatedHtmlControl.setLabelText(selector, srProvider.getString(resourceKey), renderer);
	}
	static setLabelText(selector: string, text: string, renderer: DomRenderer): void {
		if (renderer == null) {
			return;
		}
		let el: DomWrapper = renderer.querySelector(selector);
		if (el == null) {
			return;
		}
		el.setText(text);
	}
	getRight(): number {
		if (this.renderer == null || this.renderer.rootWrapper == null) {
			return NaN;
		}
		let offset: DomWrapperPosition = this.renderer.rootWrapper.getOffset();
		return this.renderer.rootWrapper.width() + (offset == null ? 0 : offset.left);
	}
	hide(): void {
		if (this.renderer == null || this.renderer.rootWrapper == null) {
			return;
		}
		this.renderer.rootWrapper.hide();
	}
}


