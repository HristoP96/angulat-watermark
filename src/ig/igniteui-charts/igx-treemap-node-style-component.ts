import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { VerticalAlignment, VerticalAlignment_$type } from "igniteui-core/VerticalAlignment";
import { TreemapNodeStyle } from "./TreemapNodeStyle";
import { TypeRegistrar } from "igniteui-core/type";
import { NamePatcher, brushToString, stringToBrush, ensureEnum, toSpinal, initializePropertiesFromCss } from "igniteui-core/componentUtil";

/**
 * Represents a style to apply to a treemap node.
*/
export const IgxTreemapNodeStyleComponent_PROVIDERS = [];
@Component({
  selector: 'igx-treemap-node-style',
  template: ``,
  providers: [],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTreemapNodeStyleComponent implements OnInit
{

protected createImplementation() : TreemapNodeStyle
{
	return new TreemapNodeStyle();
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : TreemapNodeStyle {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxTreemapNodeStyleComponent {
	    if (!internal) {
	                                    return null;
	                                }
	                                if (!internal.$type) {
	                                    return null;
	                                }
	                                let name = internal.$type.name;
	                                let externalName = "Igx" + name + "Component";
	                                if (!TypeRegistrar.isRegistered(externalName)) {
	                                    return null;
	                                }
	                                return TypeRegistrar.create(externalName);
	                            }
	private onImplementationCreated() {
		
	}
	constructor() {
	                                    if ((this as any)._styling) {
	                                        NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
	                                    }
		this._implementation = this.createImplementation();
		(<any>this._implementation).externalObject = this;
		this.onImplementationCreated();
	}
	/**
	 * Gets or sets the background to use for the header when it is hovered.
	*/
	get headerHoverBackground() : string {
		return brushToString(this.i.headerHoverBackground);
	}
	@Input()
	set headerHoverBackground(v: string) {
		this.i.headerHoverBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the background to use for the header.
	*/
	get headerBackground() : string {
		return brushToString(this.i.headerBackground);
	}
	@Input()
	set headerBackground(v: string) {
		this.i.headerBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the text color to use for the header.
	*/
	get headerTextColor() : string {
		return brushToString(this.i.headerTextColor);
	}
	@Input()
	set headerTextColor(v: string) {
		this.i.headerTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the label to use for the node.
	*/
	get label() : string {
		return (this.i.label as string);
	}
	@Input()
	set label(v: string) {
		this.i.label = v;
	}
	/**
	 * Gets or sets the text color to use for the nodes.
	*/
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	@Input()
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the text color to use for the header.
	*/
	get headerHoverTextColor() : string {
		return brushToString(this.i.headerHoverTextColor);
	}
	@Input()
	set headerHoverTextColor(v: string) {
		this.i.headerHoverTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the left margin to use for the header.
	*/
	get headerLabelLeftMargin() : number {
		return (this.i.headerLabelLeftMargin as number);
	}
	@Input()
	set headerLabelLeftMargin(v: number) {
		this.i.headerLabelLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin to use for the header.
	*/
	get headerLabelTopMargin() : number {
		return (this.i.headerLabelTopMargin as number);
	}
	@Input()
	set headerLabelTopMargin(v: number) {
		this.i.headerLabelTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin to use for the header.
	*/
	get headerLabelRightMargin() : number {
		return (this.i.headerLabelRightMargin as number);
	}
	@Input()
	set headerLabelRightMargin(v: number) {
		this.i.headerLabelRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin to use for the labels.
	*/
	get headerLabelBottomMargin() : number {
		return (this.i.headerLabelBottomMargin as number);
	}
	@Input()
	set headerLabelBottomMargin(v: number) {
		this.i.headerLabelBottomMargin = +v;
	}
	/**
	 * Gets or sets the left margin to use for the labels.
	*/
	get labelLeftMargin() : number {
		return (this.i.labelLeftMargin as number);
	}
	@Input()
	set labelLeftMargin(v: number) {
		this.i.labelLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin to use for the labels.
	*/
	get labelTopMargin() : number {
		return (this.i.labelTopMargin as number);
	}
	@Input()
	set labelTopMargin(v: number) {
		this.i.labelTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin to use for the labels.
	*/
	get labelRightMargin() : number {
		return (this.i.labelRightMargin as number);
	}
	@Input()
	set labelRightMargin(v: number) {
		this.i.labelRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin to use for the labels.
	*/
	get labelBottomMargin() : number {
		return (this.i.labelBottomMargin as number);
	}
	@Input()
	set labelBottomMargin(v: number) {
		this.i.labelBottomMargin = +v;
	}
	/**
	 * Gets or sets the height to use for the header.
	*/
	get headerHeight() : number {
		return (this.i.headerHeight as number);
	}
	@Input()
	set headerHeight(v: number) {
		this.i.headerHeight = +v;
	}
	/**
	 * Gets or sets the horizontal alignment to use for the node labels.
	*/
	get labelHorizontalAlignment() : HorizontalAlignment {
		return this.i.labelHorizontalAlignment;
	}
	@Input()
	set labelHorizontalAlignment(v: HorizontalAlignment) {
		this.i.labelHorizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the vertical alignment to use for the node labels.
	*/
	get labelVerticalAlignment() : VerticalAlignment {
		return this.i.labelVerticalAlignment;
	}
	@Input()
	set labelVerticalAlignment(v: VerticalAlignment) {
		this.i.labelVerticalAlignment = ensureEnum<VerticalAlignment>(VerticalAlignment_$type, v);
	}
	/**
	 * Gets or sets the fill color to use for the nodes.
	*/
	get fill() : string {
		return brushToString(this.i.fill);
	}
	@Input()
	set fill(v: string) {
		this.i.fill = stringToBrush(v);
	}
	/**
	 * Gets or sets the outline to use for the nodes.
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	@Input()
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness to use for the node outline.
	*/
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	@Input()
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
	}
	
	protected __p: string = null;
	protected _hasUserValues: Set<string> = new Set<string>();
	protected get hasUserValues(): Set<string> {
	    return this._hasUserValues;
	}
	protected __m(propertyName: string) {
	    if (!this._inStyling) {
	        this._hasUserValues.add(propertyName);
	    }
	}
	
	protected _stylingContainer: any = null;
	protected _stylingParent: any = null;
	protected _inStyling: boolean = false;
	protected _styling(container: any, component: any, parent?: any) {
	        if (this._inStyling) {
	            return;
	        }
	        this._inStyling = true;
	        this._stylingContainer = container;
	        this._stylingParent = component;
		
	        let genericPrefix = "";
	        let typeName = (this.i as any).$type.name;
	        if (typeName.indexOf("Xam") === 0) {
	            typeName = typeName.substring(3);
	        }
	        genericPrefix = toSpinal("TreemapNodeStyleComponent");
		
		let additionalPrefixes = [];
		
		let prefix = toSpinal(typeName);
		additionalPrefixes.push(prefix + "-");
	
	        let b = (this.i as any).$type.baseType;
	        while (b && b.name != "Object" && 
	            b.name != "Base" && 
	            b.name != "Control" && 
	            b.Name != "DependencyObject" &&
	            b.Name != "FrameworkElement") {
	            typeName = b.name;
	            if (typeName.indexOf("Xam") === 0) {
	                typeName = typeName.substring(3);
	            }
	            let basePrefix = toSpinal(typeName);
	            additionalPrefixes.push(basePrefix + "-");
	            b = b.baseType;
	        }
		
		if (parent) {
			let parentTypeName = (parent.i as any).$type.name;
	            if (parentTypeName.indexOf("Xam") === 0) {
	                parentTypeName = parentTypeName.substring(3);
	            }
	            let parentPrefix = toSpinal(parentTypeName);
	
			additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
			additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
		}
	
		initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);
	
	        
	
	        if ((this as any)._otherStyling) {
	            (this as any)._otherStyling(container, component, parent);
	        }
	        this._inStyling = false;
	}
}
