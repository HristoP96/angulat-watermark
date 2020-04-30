import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGridColumnAnimationSettings } from "./igx-grid-column-animation-settings";
import { IgxColumnWidth } from "./igx-column-width";
import { IgxHeaderComponent } from "./igx-header-component";
import { ColumnSortDirection, ColumnSortDirection_$type } from "./ColumnSortDirection";
import { PinnedPositions, PinnedPositions_$type } from "./PinnedPositions";
import { CellPropertyAnimationType, CellPropertyAnimationType_$type } from "./CellPropertyAnimationType";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { Column } from "./Column";
import { brushToString, stringToBrush, ensureBool, ensureEnum } from "igniteui-core/componentUtil";
import { ColumnWidth as ColumnWidth_internal } from "./ColumnWidth";
import { ColumnFilterCondition } from "./ColumnFilterCondition";

/**
 * A column in the data grid.
*/
export const IgxColumnComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxColumnComponent)}];
export abstract class IgxColumnComponent extends IgxDefinitionBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : Column {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the amount of left padding to use for the cell content for this column.
	*/
	get paddingLeft() : number {
		return (this.i.paddingLeft as number);
	}
	@Input()
	set paddingLeft(v: number) {
		this.i.paddingLeft = +v;
	}
	/**
	 * Gets or sets the amount of top padding to use for the cell content for this column.
	*/
	get paddingTop() : number {
		return (this.i.paddingTop as number);
	}
	@Input()
	set paddingTop(v: number) {
		this.i.paddingTop = +v;
	}
	/**
	 * Gets or sets the amount of right padding to use for the cell content of this column.
	*/
	get paddingRight() : number {
		return (this.i.paddingRight as number);
	}
	@Input()
	set paddingRight(v: number) {
		this.i.paddingRight = +v;
	}
	/**
	 * Gets or sets the amount of bottom padding to use for the cell content of this column.
	*/
	get paddingBottom() : number {
		return (this.i.paddingBottom as number);
	}
	@Input()
	set paddingBottom(v: number) {
		this.i.paddingBottom = +v;
	}
	/**
	 * Gets or sets an unique name of the Column
	*/
	get name() : string {
		return (this.i.name as string);
	}
	@Input()
	set name(v: string) {
		this.i.name = v;
	}
	/**
	 * Gets or sets the key used for the column binding
	*/
	get propertyPath() : string {
		return (this.i.propertyPath as string);
	}
	@Input()
	set propertyPath(v: string) {
		this.i.propertyPath = v;
	}
	/**
	 * Gets or sets the text displayed in the header of the column
	*/
	get headerText() : string {
		return (this.i.headerText as string);
	}
	@Input()
	set headerText(v: string) {
		this.i.headerText = v;
	}
	/**
	 * Gets the actual text displayed in the header of the column
	*/
	get actualHeaderText() : string {
		return (this.i.actualHeaderText as string);
	}
	@Input()
	set actualHeaderText(v: string) {
		this.i.actualHeaderText = v;
	}
	/**
	 * Gets or sets the background color to use for the cells when they are selected
	*/
	get selectedBackground() : string {
		return brushToString(this.i.selectedBackground);
	}
	@Input()
	set selectedBackground(v: string) {
		this.i.selectedBackground = stringToBrush(v);
	}
	/**
	 * Gets the actual background color that is used for the cells when they are selected
	*/
	get actualSelectedBackground() : string {
		return brushToString(this.i.actualSelectedBackground);
	}
	@Input()
	set actualSelectedBackground(v: string) {
		this.i.actualSelectedBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the animation settings to use for this column.
	*/
	get animationSettings() : IgxGridColumnAnimationSettings {
	                                        if (this.i.animationSettings == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.animationSettings as any).externalObject) {
	                                            let e = new IgxGridColumnAnimationSettings();
	                                            (e as any)._implementation = this.i.animationSettings;
	                                            (this.i.animationSettings as any).externalObject = e;
	                                        }
		return (this.i.animationSettings as any).externalObject;
	}
	@Input()
	set animationSettings(v: IgxGridColumnAnimationSettings) {
		v == null ? this.i.animationSettings = null : this.i.animationSettings = v.i;
	}
	/**
	 * Gets or sets the width to use for this column.
	*/
	get width() : IgxColumnWidth {
	                                        if (this.i.width == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.width as any).externalObject) {
	                                            let e = new IgxColumnWidth();
	                                            (e as any)._implementation = this.i.width;
	                                            (this.i.width as any).externalObject = e;
	                                        }
		return (this.i.width as any).externalObject;
	}
	@Input()
	set width(v: IgxColumnWidth) {
	                                        if (typeof v == "string") {
	                                            let int = ColumnWidth_internal.parse(v as string);
	                                            let ext = new IgxColumnWidth();
	                                            (ext as any)._implementation = int;
	                                            v = ext;
	                                        }
	                                
		v == null ? this.i.width = null : this.i.width = v.i;
	}
	/**
	 * Gets or sets the minimum width to use for this column. Overrides the DefaultColumnMinWidth from the grid, if set.
	*/
	get minWidth() : number {
		return (this.i.minWidth as number);
	}
	@Input()
	set minWidth(v: number) {
		this.i.minWidth = +v;
	}
	/**
	 * Gets whether this column was projected from markup/templates and is constrained.
	*/
	get isFromMarkup() : boolean {
		return (this.i.isFromMarkup as boolean);
	}
	@Input()
	set isFromMarkup(v: boolean) {
		this.i.isFromMarkup = ensureBool(v);
	}
	/**
	 * Gets whether this column was auto generated.
	*/
	get isAutoGenerated() : boolean {
		return (this.i.isAutoGenerated as boolean);
	}
	@Input()
	set isAutoGenerated(v: boolean) {
		this.i.isAutoGenerated = ensureBool(v);
	}
	/**
	 * Gets or sets a filter to apply on the values of this column
	*/
	get filter() : ColumnFilterCondition {
		return this.i.filter as ColumnFilterCondition;
	}
	@Input()
	set filter(v: ColumnFilterCondition) {
		this.i.filter = v;
	}
	/**
	 * Gets or sets the header definition for this column.
	*/
	get header() : IgxHeaderComponent {
	                                        if (this.i.header == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.header as any).externalObject) {
	                                            let e = IgxHeaderComponent._createFromInternal(this.i.header);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.header;
	                                            }
	                                            (this.i.header as any).externalObject = e;
	                                        }
		return (this.i.header as any).externalObject;
	}
	@Input()
	set header(v: IgxHeaderComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.header = null : this.i.header = v.i;
	}
	/**
	 * Gets or sets whether filtering is enabled for this column.
	*/
	get isFilteringEnabled() : boolean {
		return (this.i.isFilteringEnabled as boolean);
	}
	@Input()
	set isFilteringEnabled(v: boolean) {
		this.i.isFilteringEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether resizing is enabled for this column.
	*/
	get isResizingEnabled() : boolean {
		return (this.i.isResizingEnabled as boolean);
	}
	@Input()
	set isResizingEnabled(v: boolean) {
		this.i.isResizingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether or not a column is hidden from the grid
	*/
	get isHidden() : boolean {
		return (this.i.isHidden as boolean);
	}
	@Input()
	set isHidden(v: boolean) {
		this.i.isHidden = ensureBool(v);
	}
	/**
	 * Gets or sets if a column should be removed from the grid when it is fully hidden
	*/
	get shouldRemoveWhenHidden() : boolean {
		return (this.i.shouldRemoveWhenHidden as boolean);
	}
	@Input()
	set shouldRemoveWhenHidden(v: boolean) {
		this.i.shouldRemoveWhenHidden = ensureBool(v);
	}
	/**
	 * Gets the current sort direction (None, Ascending, Descending) for this column.
	*/
	get sortDirection() : ColumnSortDirection {
		return this.i.sortDirection;
	}
	@Input()
	set sortDirection(v: ColumnSortDirection) {
		this.i.sortDirection = ensureEnum<ColumnSortDirection>(ColumnSortDirection_$type, v);
	}
	/**
	 * Gets or sets the current fixed position for this column.
	*/
	get pinned() : PinnedPositions {
		return this.i.pinned;
	}
	@Input()
	set pinned(v: PinnedPositions) {
		this.i.pinned = ensureEnum<PinnedPositions>(PinnedPositions_$type, v);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.header && (this.header as any)._styling) {
	    (this.header as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	/**
	 * Get the unique key used to identify this column.
	
	*/
	public getUniqueKey() : string {
		let iv = this.i.getUniqueKey();
		return (iv);
	}
	public setNamedHeaderValue(valueName: string, animationType: CellPropertyAnimationType, value: any) {
		this.i.setNamedHeaderValue(valueName, (animationType == null ? null : animationType), value);
	}
	/**
	 * Returns if the column has named header values.
	
	*/
	public hasNamedHeaderValues() : boolean {
		let iv = this.i.hasNamedHeaderValues();
		return (iv);
	}
	/**
	 * Returns if there is a named header value with a given name.
	
	* @param valueName  * The named value to check for.
	*/
	public hasNamedHeaderValue(valueName: string) : boolean {
		let iv = this.i.hasNamedHeaderValue(valueName);
		return (iv);
	}
	/**
	 * Removes a named header value with the given name from the named header values for this column.
	
	* @param valueName  * The named header value to remove.
	*/
	public removeNamedHeaderValue(valueName: string) {
		this.i.removeNamedHeaderValue(valueName);
	}
	/**
	 * Gets the value of a named header value for this column by name.
	
	* @param valueName  * Name of the named header value to retrieve.
	*/
	public getNamedHeaderValue(valueName: string) : any {
		let iv = this.i.getNamedHeaderValue(valueName);
		return (iv);
	}
}
