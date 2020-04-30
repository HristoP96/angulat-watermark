import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { LabelsPosition, LabelsPosition_$type } from "./LabelsPosition";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { LeaderLineType, LeaderLineType_$type } from "./LeaderLineType";
import { OthersCategoryType, OthersCategoryType_$type } from "./OthersCategoryType";
import { IgxIndexCollection } from "./igx-index-collection";
import { SweepDirection, SweepDirection_$type } from "igniteui-core/SweepDirection";
import { SliceSelectionMode, SliceSelectionMode_$type } from "./SliceSelectionMode";
import { IgxObjectCollection } from "igniteui-core/igx-object-collection";
import { IgxLabelClickEventArgs } from "./igx-label-click-event-args";
import { IgxSelectedItemChangingEventArgs } from "./igx-selected-item-changing-event-args";
import { IgxSelectedItemsChangingEventArgs } from "./igx-selected-items-changing-event-args";
import { IgxSelectedItemChangedEventArgs } from "./igx-selected-item-changed-event-args";
import { IgxSelectedItemsChangedEventArgs } from "./igx-selected-items-changed-event-args";
import { IgxSliceClickEventArgs } from "./igx-slice-click-event-args";
import { PieChartBase } from "./PieChartBase";
import { TypeRegistrar, Number_$type, Base } from "igniteui-core/type";
import { NamePatcher, ensureEnum, brushToString, stringToBrush, ensureBool, toBrushCollection, fromBrushCollection, toSpinal, initializePropertiesFromCss, toPoint } from "igniteui-core/componentUtil";
import { IndexCollection as IndexCollection_internal } from "./IndexCollection";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";
import { Style } from "igniteui-core/Style";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { ObjectCollection as ObjectCollection_internal } from "igniteui-core/ObjectCollection";

/**
 * Represents the base class for the pie chart.
*/
export const IgxPieChartBaseComponent_PROVIDERS = [];
export abstract class IgxPieChartBaseComponent implements OnInit
{

protected createImplementation() : PieChartBase
{
	return null;
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : PieChartBase {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxPieChartBaseComponent {
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
	 * Gets or sets the amount of space between the center and the start of the arc. This property should be set between 0 and 1.
	 * If InnerExtent is set to a value greater than 1, it will be interpreted as a percentage, effectively divided by 100.
	*/
	get innerExtent() : number {
		return (this.i.innerExtent as number);
	}
	@Input()
	set innerExtent(v: number) {
		this.i.innerExtent = +v;
	}
	/**
	 * Gets or Sets the property name that contains the values.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * Gets or sets the property name that contains the labels.
	*/
	get labelMemberPath() : string {
		return (this.i.labelMemberPath as string);
	}
	@Input()
	set labelMemberPath(v: string) {
		this.i.labelMemberPath = v;
	}
	/**
	 * Gets or sets the property name that contains the legend labels.
	*/
	get legendLabelMemberPath() : string {
		return (this.i.legendLabelMemberPath as string);
	}
	@Input()
	set legendLabelMemberPath(v: string) {
		this.i.legendLabelMemberPath = v;
	}
	/**
	 * Gets or sets the position of chart labels.
	*/
	get labelsPosition() : LabelsPosition {
		return this.i.labelsPosition;
	}
	@Input()
	set labelsPosition(v: LabelsPosition) {
		this.i.labelsPosition = ensureEnum<LabelsPosition>(LabelsPosition_$type, v);
	}
	/**
	 * Gets or sets the color for labels rendered outside of the pie chart.
	*/
	get labelOuterColor() : string {
		return brushToString(this.i.labelOuterColor);
	}
	@Input()
	set labelOuterColor(v: string) {
		this.i.labelOuterColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color for labels rendered inside of the pie chart.
	*/
	get labelInnerColor() : string {
		return brushToString(this.i.labelInnerColor);
	}
	@Input()
	set labelInnerColor(v: string) {
		this.i.labelInnerColor = stringToBrush(v);
	}
	/**
	 * Gets or sets whether the leader lines are visible.
	*/
	get leaderLineVisibility() : Visibility {
		return this.i.leaderLineVisibility;
	}
	@Input()
	set leaderLineVisibility(v: Visibility) {
		this.i.leaderLineVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets what type of leader lines will be used for the outside end labels.
	*/
	get leaderLineType() : LeaderLineType {
		return this.i.leaderLineType;
	}
	@Input()
	set leaderLineType(v: LeaderLineType) {
		this.i.leaderLineType = ensureEnum<LeaderLineType>(LeaderLineType_$type, v);
	}
	/**
	 * Gets or sets the margin between a label and the end of its leader line. The default is 6 pixels.
	*/
	get leaderLineMargin() : number {
		return (this.i.leaderLineMargin as number);
	}
	@Input()
	set leaderLineMargin(v: number) {
		this.i.leaderLineMargin = +v;
	}
	/**
	 * Gets or sets the ToolTip for the chart.
	*/
	get toolTip() : any {
		return this.i.toolTip as any;
	}
	@Input()
	set toolTip(v: any) {
		this.i.toolTip = v;
	}
	/**
	 * Gets or sets the threshold value that determines if slices are grouped into the Others slice.
	*/
	get othersCategoryThreshold() : number {
		return (this.i.othersCategoryThreshold as number);
	}
	@Input()
	set othersCategoryThreshold(v: number) {
		this.i.othersCategoryThreshold = +v;
	}
	/**
	 * Gets or sets whether to use numeric or percent-based threshold value.
	*/
	get othersCategoryType() : OthersCategoryType {
		return this.i.othersCategoryType;
	}
	@Input()
	set othersCategoryType(v: OthersCategoryType) {
		this.i.othersCategoryType = ensureEnum<OthersCategoryType>(OthersCategoryType_$type, v);
	}
	/**
	 * Gets or sets the label of the Others slice.
	*/
	get othersCategoryText() : string {
		return (this.i.othersCategoryText as string);
	}
	@Input()
	set othersCategoryText(v: string) {
		this.i.othersCategoryText = v;
	}
	/**
	 * Determines how much the exploded slice is offset from the center. Value between 0 and 1.
	*/
	get explodedRadius() : number {
		return (this.i.explodedRadius as number);
	}
	@Input()
	set explodedRadius(v: number) {
		this.i.explodedRadius = +v;
	}
	/**
	 * Gets or sets the scaling factor of the chart's radius. Value between 0 and 1.
	*/
	get radiusFactor() : number {
		return (this.i.radiusFactor as number);
	}
	@Input()
	set radiusFactor(v: number) {
		this.i.radiusFactor = +v;
	}
	/**
	 * Gets or sets whether the slices can be selected.
	*/
	get allowSliceSelection() : boolean {
		return (this.i.allowSliceSelection as boolean);
	}
	@Input()
	set allowSliceSelection(v: boolean) {
		this.i.allowSliceSelection = ensureBool(v);
	}
	/**
	 * Gets or sets whether the slices can be exploded.
	*/
	get allowSliceExplosion() : boolean {
		return (this.i.allowSliceExplosion as boolean);
	}
	@Input()
	set allowSliceExplosion(v: boolean) {
		this.i.allowSliceExplosion = ensureBool(v);
	}
	private _explodedSlices: IgxIndexCollection = null;
	                                
	/**
	 * Gets or sets the collection of exploded slice indices.
	*/
	get explodedSlices() : IgxIndexCollection {
	                                        if (this._explodedSlices === null) {
	                                            let coll = new IgxIndexCollection();
	                                            let innerColl = this.i.explodedSlices;
			if (!innerColl) {
	                                            	innerColl = new IndexCollection_internal();
			}
	                                            this._explodedSlices = (coll as any)._fromInner(innerColl);
	                                            this.i.explodedSlices = innerColl;
	
	                                        }
		return this._explodedSlices;
	}
	@Input()
	set explodedSlices(v: IgxIndexCollection) {
	                                        if (this._explodedSlices !== null) {
	                                            (this._explodedSlices as any)._setSyncTarget(null);
	                                            this._explodedSlices = null;
	                                        }
	                                        let coll = new IgxIndexCollection();
	                                        this._explodedSlices = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<Number>(Number_$type);
	                                        let innerColl = this.i.explodedSlices;
		if (!innerColl) {
	                                        	innerColl = new IndexCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._explodedSlices as any)._setSyncTarget(syncColl);
	                                        this.i.explodedSlices = innerColl;
	
	}
	/**
	 * Gets or sets the pixel amount by which the labels are offset from the edge of the slices.
	*/
	get labelExtent() : number {
		return (this.i.labelExtent as number);
	}
	@Input()
	set labelExtent(v: number) {
		this.i.labelExtent = +v;
	}
	/**
	 * Gets or sets the starting angle of the chart.
	 * The default zero value is equivalent to 3 o'clock.
	*/
	get startAngle() : number {
		return (this.i.startAngle as number);
	}
	@Input()
	set startAngle(v: number) {
		this.i.startAngle = +v;
	}
	/**
	 * Gets or sets the rotational direction of the chart.
	*/
	get sweepDirection() : SweepDirection {
		return this.i.sweepDirection;
	}
	@Input()
	set sweepDirection(v: SweepDirection) {
		this.i.sweepDirection = ensureEnum<SweepDirection>(SweepDirection_$type, v);
	}
	/**
	 * Gets or sets the fill brush.
	*/
	get othersCategoryFill() : string {
		return this.i.othersCategoryStyle ? (this.i.othersCategoryStyle.fill as string) : null;
	}
	@Input()
	set othersCategoryFill(v: string) {
		this.ensureOthersCategoryStyle();
	                                        this.i.othersCategoryStyle.fill = v;
	}
	/**
	 * Gets or sets the stroke brush.
	*/
	get othersCategoryStroke() : string {
		return this.i.othersCategoryStyle ? (this.i.othersCategoryStyle.stroke as string) : null;
	}
	@Input()
	set othersCategoryStroke(v: string) {
		this.ensureOthersCategoryStyle();
	                                        this.i.othersCategoryStyle.stroke = v;
	}
	/**
	 * Gets or sets the stroke thickness.
	*/
	get othersCategoryStrokeThickness() : number {
		return this.i.othersCategoryStyle ? (this.i.othersCategoryStyle.strokeThickness as number) : NaN;
	}
	@Input()
	set othersCategoryStrokeThickness(v: number) {
	                                        this.ensureOthersCategoryStyle();
		this.i.othersCategoryStyle.strokeThickness = +v;
	}
	/**
	 * Gets or sets the opacity.
	*/
	get othersCategoryOpacity() : number {
		return this.i.othersCategoryStyle ? (this.i.othersCategoryStyle.opacity as number) : NaN;
	}
	@Input()
	set othersCategoryOpacity(v: number) {
	                                        this.ensureOthersCategoryStyle();
		this.i.othersCategoryStyle.opacity = +v;
	}
	ensureOthersCategoryStyle() {
	if (this.i.othersCategoryStyle) {
	                                            return;
	                                        }
	                                        this.i.othersCategoryStyle = new Style();
	
	                                }
	/**
	 * Gets or sets the fill brush.
	*/
	get selectedSliceFill() : string {
		return this.i.selectedStyle ? (this.i.selectedStyle.fill as string) : null;
	}
	@Input()
	set selectedSliceFill(v: string) {
		this.ensureSelectedStyle();
	                                        this.i.selectedStyle.fill = v;
	}
	/**
	 * Gets or sets the stroke brush.
	*/
	get selectedSliceStroke() : string {
		return this.i.selectedStyle ? (this.i.selectedStyle.stroke as string) : null;
	}
	@Input()
	set selectedSliceStroke(v: string) {
		this.ensureSelectedStyle();
	                                        this.i.selectedStyle.stroke = v;
	}
	/**
	 * Gets or sets the stroke thickness.
	*/
	get selectedSliceStrokeThickness() : number {
		return this.i.selectedStyle ? (this.i.selectedStyle.strokeThickness as number) : NaN;
	}
	@Input()
	set selectedSliceStrokeThickness(v: number) {
	                                        this.ensureSelectedStyle();
		this.i.selectedStyle.strokeThickness = +v;
	}
	/**
	 * Gets or sets the opacity.
	*/
	get selectedSliceOpacity() : number {
		return this.i.selectedStyle ? (this.i.selectedStyle.opacity as number) : NaN;
	}
	@Input()
	set selectedSliceOpacity(v: number) {
	                                        this.ensureSelectedStyle();
		this.i.selectedStyle.opacity = +v;
	}
	ensureSelectedStyle() {
	if (this.i.selectedStyle) {
	                                            return;
	                                        }
	                                        this.i.selectedStyle = new Style();
	
	                                }
	/**
	 * Gets or sets the palette of brushes to use for coloring the slices.
	*/
	get brushes() : string[] {
		return fromBrushCollection(this.i.brushes);
	}
	@Input()
	set brushes(v: string[]) {
		this.i.brushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets the palette of brushes to use for outlines on the slices.
	*/
	get outlines() : string[] {
		return fromBrushCollection(this.i.outlines);
	}
	@Input()
	set outlines(v: string[]) {
		this.i.outlines = toBrushCollection(v);
	}
	/**
	 * Gets or sets the LegendItemTemplate property.
	 * The legend item control content is created according to the LegendItemTemplate on-demand by
	 * the chart object itself.
	*/
	get legendItemTemplate() : IgDataTemplate {
		return (this.i.legendItemTemplate as IgDataTemplate);
	}
	@Input()
	set legendItemTemplate(v: IgDataTemplate) {
		this.i.legendItemTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the LegendItemBadgeTemplate property.
	 * The legend item badge is created according to the LegendItemBadgeTemplate on-demand by
	 * the chart object itself.
	*/
	get legendItemBadgeTemplate() : IgDataTemplate {
		return (this.i.legendItemBadgeTemplate as IgDataTemplate);
	}
	@Input()
	set legendItemBadgeTemplate(v: IgDataTemplate) {
		this.i.legendItemBadgeTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets whether all surface interactions with the plot area should be disabled.
	*/
	get isSurfaceInteractionDisabled() : boolean {
		return (this.i.isSurfaceInteractionDisabled as boolean);
	}
	@Input()
	set isSurfaceInteractionDisabled(v: boolean) {
		this.i.isSurfaceInteractionDisabled = ensureBool(v);
	}
	/**
	 * Sets or gets a function which takes an object that produces a formatted label for displaying in the chart.
	*/
	get formatLabel() : (obj: any) => string {
		return this.i.formatLabel;
	}
	@Input()
	set formatLabel(v: (obj: any) => string) {
		this.i.formatLabel = v;
	}
	/**
	 * Sets or gets a function which takes an object that produces a formatted label for displaying in the chart's legend.
	*/
	get formatLegendLabel() : (obj: any) => string {
		return this.i.formatLegendLabel;
	}
	@Input()
	set formatLegendLabel(v: (obj: any) => string) {
		this.i.formatLegendLabel = v;
	}
	/**
	 * Gets or sets the scaling value used to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get pixelScalingRatio() : number {
		return (this.i.pixelScalingRatio as number);
	}
	@Input()
	set pixelScalingRatio(v: number) {
		this.i.pixelScalingRatio = +v;
	}
	/**
	 * Resolved pixel scaling ratio. Unless explicitly overridden by the PieChartBase.PixelScalingRatio property,
	 * this one returns the default ratio enforced by device. High resolution devices will initialize this property
	 * to a higher value.
	*/
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
	}
	/**
	 * Gets or sets which mode to use for selecting slices.
	*/
	get selectionMode() : SliceSelectionMode {
		return this.i.selectionMode;
	}
	@Input()
	set selectionMode(v: SliceSelectionMode) {
		this.i.selectionMode = ensureEnum<SliceSelectionMode>(SliceSelectionMode_$type, v);
	}
	/**
	 * Gets or sets the currently selected data item.  If a different data item is provided the pie chart
	 * will select the slice associated with the new item.
	*/
	get selectedItem() : any {
		return this.i.selectedItem as any;
	}
	@Input()
	set selectedItem(v: any) {
		this.i.selectedItem = v;
	}
	private _selectedItems: IgxObjectCollection = null;
	                                
	/**
	 * Gets the currently selected data items.  Adding or removing data items from this collection will
	 * select or deselect the slices associated with those items.
	*/
	get selectedItems() : IgxObjectCollection {
	                                        if (this._selectedItems === null) {
	                                            let coll = new IgxObjectCollection();
	                                            let innerColl = this.i.selectedItems;
			if (!innerColl) {
	                                            	innerColl = new ObjectCollection_internal(0);
			}
	                                            this._selectedItems = (coll as any)._fromInner(innerColl);
	                                            this.i.selectedItems = innerColl;
	
	                                        }
		return this._selectedItems;
	}
	@Input()
	set selectedItems(v: IgxObjectCollection) {
	                                        if (this._selectedItems !== null) {
	                                            (this._selectedItems as any)._setSyncTarget(null);
	                                            this._selectedItems = null;
	                                        }
	                                        let coll = new IgxObjectCollection();
	                                        this._selectedItems = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<Object>((Base as any).$type);
	                                        let innerColl = this.i.selectedItems;
		if (!innerColl) {
	                                        	innerColl = new ObjectCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._selectedItems as any)._setSyncTarget(syncColl);
	                                        this.i.selectedItems = innerColl;
	
	}
	/**
	 * Manually overrides the style to use for the labels.
	*/
	get textStyle() : string {
		return (this.i.textStyle as string);
	}
	@Input()
	set textStyle(v: string) {
		this.i.textStyle = v;
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
	        genericPrefix = toSpinal("PieChartBaseComponent");
		
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
	/**
	 * Returns the chart visuals expressed as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}
	/**
	 * Simulates a mouse click action at the specified point.
	
	* @param point  * The point to click at.
	*/
	public simulateLeftClick(point: IgPoint) {
		this.i.simulateLeftClick(toPoint(point));
	}
	/**
	 * Invoked by the containing object to provide reference to the container.
	
	* @param container  * Reference to the container.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	/**
	 * Notification from the containing object that the container has been resized.
	
	*/
	public notifyContainerResized() {
		this.i.notifyContainerResized();
	}
	/**
	 * Invoked when the instance is being destroyed.
	
	*/
	public destroy() {
		this.i.destroy();
	}
	/**
	 * Use to force the pie chart to finish any deferred work before printing or evaluating its visual.
	 * This should only be called if the visual of the pie chart needs to be synchronously saved or evaluated. 
	 * Calling this method too often will hinder the performance of the pie chart.
	
	*/
	public flush() {
		this.i.flush();
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Manually notifies the pie chart's data source that the data it has bound to has been cleared and needs to be re-examined.
	 * This should not be called if the data that the pie chart is bound to is already observable.
	
	* @param source_  * The data source.
	*/
	public notifyClearItems(source_: any) {
		this.i.notifyClearItems(source_);
	}
	public notifyInsertItem(source_: any, index: number, newItem: any) {
		this.i.notifyInsertItem(source_, index, newItem);
	}
	public notifyRemoveItem(source_: any, index: number, oldItem: any) {
		this.i.notifyRemoveItem(source_, index, oldItem);
	}
	/**
	 * Assigns data source for the items.
	
	* @param source_  * Array of the data source items.
	*/
	public setWidgetLevelDataSource(source_: any) {
		this.i.setWidgetLevelDataSource(source_);
	}
	/**
	 * Resets items data source.
	
	*/
	public removeWidgetLevelDataSource() {
		this.i.removeWidgetLevelDataSource();
	}
	/**
	 * Invoked when style is updated.
	
	*/
	public styleUpdated() {
		this.i.styleUpdated();
	}
	private _labelClick: EventEmitter<{ sender: any, args: IgxLabelClickEventArgs}> = null;
	/**
	 * Raised when the slice's label is clicked.
	*/
	@Output()
	get labelClick(): EventEmitter<{ sender: any, args: IgxLabelClickEventArgs}> {
		if (this._labelClick == null) {
			this._labelClick = new EventEmitter<{sender: any, args: IgxLabelClickEventArgs}>();
			this.i.labelClick = delegateCombine(this.i.labelClick, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxLabelClickEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeLabelClick) {
	                        (this as any).beforeLabelClick(this, outerArgs);
	                    }
					this._labelClick.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._labelClick;
	}
	private _selectedItemChanging: EventEmitter<{ sender: any, args: IgxSelectedItemChangingEventArgs}> = null;
	/**
	 * Raised when the SelectedItem property is changing.  This event is cancelable.
	*/
	@Output()
	get selectedItemChanging(): EventEmitter<{ sender: any, args: IgxSelectedItemChangingEventArgs}> {
		if (this._selectedItemChanging == null) {
			this._selectedItemChanging = new EventEmitter<{sender: any, args: IgxSelectedItemChangingEventArgs}>();
			this.i.selectedItemChanging = delegateCombine(this.i.selectedItemChanging, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxSelectedItemChangingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSelectedItemChanging) {
	                        (this as any).beforeSelectedItemChanging(this, outerArgs);
	                    }
					this._selectedItemChanging.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._selectedItemChanging;
	}
	private _selectedItemsChanging: EventEmitter<{ sender: any, args: IgxSelectedItemsChangingEventArgs}> = null;
	/**
	 * Raised when the SelectedItems collection is changing.  This event is cancelable.
	*/
	@Output()
	get selectedItemsChanging(): EventEmitter<{ sender: any, args: IgxSelectedItemsChangingEventArgs}> {
		if (this._selectedItemsChanging == null) {
			this._selectedItemsChanging = new EventEmitter<{sender: any, args: IgxSelectedItemsChangingEventArgs}>();
			this.i.selectedItemsChanging = delegateCombine(this.i.selectedItemsChanging, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxSelectedItemsChangingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSelectedItemsChanging) {
	                        (this as any).beforeSelectedItemsChanging(this, outerArgs);
	                    }
					this._selectedItemsChanging.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._selectedItemsChanging;
	}
	private _selectedItemChanged: EventEmitter<{ sender: any, args: IgxSelectedItemChangedEventArgs}> = null;
	/**
	 * Raised when the SelectedItem property has changed.
	*/
	@Output()
	get selectedItemChanged(): EventEmitter<{ sender: any, args: IgxSelectedItemChangedEventArgs}> {
		if (this._selectedItemChanged == null) {
			this._selectedItemChanged = new EventEmitter<{sender: any, args: IgxSelectedItemChangedEventArgs}>();
			this.i.selectedItemChanged = delegateCombine(this.i.selectedItemChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxSelectedItemChangedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSelectedItemChanged) {
	                        (this as any).beforeSelectedItemChanged(this, outerArgs);
	                    }
					this._selectedItemChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._selectedItemChanged;
	}
	private _selectedItemsChanged: EventEmitter<{ sender: any, args: IgxSelectedItemsChangedEventArgs}> = null;
	/**
	 * Raised when the SelectedItems collection has changed.
	*/
	@Output()
	get selectedItemsChanged(): EventEmitter<{ sender: any, args: IgxSelectedItemsChangedEventArgs}> {
		if (this._selectedItemsChanged == null) {
			this._selectedItemsChanged = new EventEmitter<{sender: any, args: IgxSelectedItemsChangedEventArgs}>();
			this.i.selectedItemsChanged = delegateCombine(this.i.selectedItemsChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxSelectedItemsChangedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSelectedItemsChanged) {
	                        (this as any).beforeSelectedItemsChanged(this, outerArgs);
	                    }
					this._selectedItemsChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._selectedItemsChanged;
	}
	private _sliceClick: EventEmitter<{ sender: any, args: IgxSliceClickEventArgs}> = null;
	/**
	 * Raised when the slice is clicked.
	*/
	@Output()
	get sliceClick(): EventEmitter<{ sender: any, args: IgxSliceClickEventArgs}> {
		if (this._sliceClick == null) {
			this._sliceClick = new EventEmitter<{sender: any, args: IgxSliceClickEventArgs}>();
			this.i.sliceClick = delegateCombine(this.i.sliceClick, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxSliceClickEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSliceClick) {
	                        (this as any).beforeSliceClick(this, outerArgs);
	                    }
					this._sliceClick.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._sliceClick;
	}
	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
