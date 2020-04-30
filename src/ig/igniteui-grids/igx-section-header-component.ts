import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { GroupSummaryDisplayMode, GroupSummaryDisplayMode_$type } from "./GroupSummaryDisplayMode";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { SectionHeader } from "./SectionHeader";
import { brushToString, stringToBrush, ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Used to configure the appearance of the section header cells.
*/
export const IgxSectionHeaderComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSectionHeaderComponent)}];
@Component({
  selector: 'igx-section-header',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSectionHeaderComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSectionHeaderComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : SectionHeader
{
	return new SectionHeader();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SectionHeader {
		return this._implementation;
	}
	constructor() {
		super();
	}
	get selectedBackground() : string {
		return brushToString(this.i.selectedBackground);
	}
	@Input()
	set selectedBackground(v: string) {
		this.i.selectedBackground = stringToBrush(v);
	}
	get actualSelectedBackground() : string {
		return brushToString(this.i.actualSelectedBackground);
	}
	@Input()
	set actualSelectedBackground(v: string) {
		this.i.actualSelectedBackground = stringToBrush(v);
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
	get isCollapsable() : boolean {
		return (this.i.isCollapsable as boolean);
	}
	@Input()
	set isCollapsable(v: boolean) {
		this.i.isCollapsable = ensureBool(v);
	}
	get summaryDisplayMode() : GroupSummaryDisplayMode {
		return this.i.summaryDisplayMode;
	}
	@Input()
	set summaryDisplayMode(v: GroupSummaryDisplayMode) {
		this.i.summaryDisplayMode = ensureEnum<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, v);
	}
}
