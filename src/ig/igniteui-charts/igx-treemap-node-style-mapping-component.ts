import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TreemapNodeStyleMappingTargetType, TreemapNodeStyleMappingTargetType_$type } from "./TreemapNodeStyleMappingTargetType";
import { TreemapValueMappingMode, TreemapValueMappingMode_$type } from "./TreemapValueMappingMode";
import { IgxTreemapNodeStyleComponent } from "./igx-treemap-node-style-component";
import { TreemapNodeStyleMapping } from "./TreemapNodeStyleMapping";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a style to apply to a set of nodes in the treemap.
*/
export const IgxTreemapNodeStyleMappingComponent_PROVIDERS = [{provide: IgxTreemapNodeStyleComponent, useExisting: forwardRef(() => IgxTreemapNodeStyleMappingComponent)}];
@Component({
  selector: 'igx-treemap-node-style-mapping',
  template: ``,
  providers: [{provide: IgxTreemapNodeStyleComponent, useExisting: forwardRef(() => IgxTreemapNodeStyleMappingComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTreemapNodeStyleMappingComponent extends IgxTreemapNodeStyleComponent
{

protected createImplementation() : TreemapNodeStyleMapping
{
	return new TreemapNodeStyleMapping();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TreemapNodeStyleMapping {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the unique name of the mapping.
	*/
	get targetType() : TreemapNodeStyleMappingTargetType {
		return this.i.targetType;
	}
	@Input()
	set targetType(v: TreemapNodeStyleMappingTargetType) {
		this.i.targetType = ensureEnum<TreemapNodeStyleMappingTargetType>(TreemapNodeStyleMappingTargetType_$type, v);
	}
	/**
	 * Gets or sets the unique name of the mapping.
	*/
	get name() : string {
		return (this.i.name as string);
	}
	@Input()
	set name(v: string) {
		this.i.name = v;
	}
	/**
	 * Gets or sets the minimum value to which the mapping applies.
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	@Input()
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * Gets or sets the maximum value to which the mapping applies.
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	@Input()
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * Gets or sets the value to which the mapping applies.
	*/
	get value() : any {
		return this.i.value as any;
	}
	@Input()
	set value(v: any) {
		this.i.value = v;
	}
	/**
	 * Gets or sets the mapping mode to use to evaluate whether the mapping applies.
	*/
	get mappingMode() : TreemapValueMappingMode {
		return this.i.mappingMode;
	}
	@Input()
	set mappingMode(v: TreemapValueMappingMode) {
		this.i.mappingMode = ensureEnum<TreemapValueMappingMode>(TreemapValueMappingMode_$type, v);
	}
}
