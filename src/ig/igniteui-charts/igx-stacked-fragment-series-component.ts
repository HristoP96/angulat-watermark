import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { IgxPropertyUpdatedEventArgs } from "igniteui-core/igx-property-updated-event-args";
import { StackedFragmentSeries } from "./StackedFragmentSeries";
import { TypeRegistrar } from "igniteui-core/type";
import { NamePatcher, brushToString, stringToBrush, ensureBool, colorToString, stringToColor, ensureEnum, toSpinal, initializePropertiesFromCss } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Represents a non-visual child of StackedSeriesBase.
*/
export const IgxStackedFragmentSeriesComponent_PROVIDERS = [];
@Component({
  selector: 'igx-stacked-fragment-series',
  template: ``,
  providers: [],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedFragmentSeriesComponent implements OnInit
{

protected createImplementation() : StackedFragmentSeries
{
	return new StackedFragmentSeries();
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : StackedFragmentSeries {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxStackedFragmentSeriesComponent {
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
	 * Gets or sets the brush of the stacked fragment.
	*/
	get brush() : string {
		return brushToString(this.i.brush);
	}
	@Input()
	set brush(v: string) {
		this.i.brush = stringToBrush(v);
	}
	/**
	 * Gets the actual brush used by the series.
	*/
	get actualBrush() : string {
		return brushToString(this.i.actualBrush);
	}
	@Input()
	set actualBrush(v: string) {
		this.i.actualBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets whether drop shadow should be enabled for this series.
	*/
	get isDropShadowEnabled() : boolean {
		return (this.i.isDropShadowEnabled as boolean);
	}
	@Input()
	set isDropShadowEnabled(v: boolean) {
		this.i.isDropShadowEnabled = ensureBool(v);
	}
	/**
	 * Gets whether drop shadow is actually enabled for this series.
	*/
	get actualIsDropShadowEnabled() : boolean {
		return (this.i.actualIsDropShadowEnabled as boolean);
	}
	@Input()
	set actualIsDropShadowEnabled(v: boolean) {
		this.i.actualIsDropShadowEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the shadow blur.
	 * This property is ignored when StackedFragmentSeries.UseSingleShadow is set to true.
	*/
	get shadowBlur() : number {
		return (this.i.shadowBlur as number);
	}
	@Input()
	set shadowBlur(v: number) {
		this.i.shadowBlur = +v;
	}
	/**
	 * Gets the actual shadow blur used by the series.
	*/
	get actualShadowBlur() : number {
		return (this.i.actualShadowBlur as number);
	}
	@Input()
	set actualShadowBlur(v: number) {
		this.i.actualShadowBlur = +v;
	}
	/**
	 * Gets or sets the drop shadow color.
	*/
	get shadowColor() : string {
		return colorToString(this.i.shadowColor);
	}
	@Input()
	set shadowColor(v: string) {
		this.i.shadowColor = stringToColor(v);
	}
	/**
	 * Gets actual the drop shadow color used by the series.
	*/
	get actualShadowColor() : string {
		return colorToString(this.i.actualShadowColor);
	}
	@Input()
	set actualShadowColor(v: string) {
		this.i.actualShadowColor = stringToColor(v);
	}
	/**
	 * Gets or sets whether drop shadow is applied to the whole StackedFragmentSeries visual or to each of the individual shapes forming the StackedFragmentSeries.
	 * When this property is set to true, no StackedFragmentSeries.ShadowBlur is applied.
	*/
	get useSingleShadow() : boolean {
		return (this.i.useSingleShadow as boolean);
	}
	@Input()
	set useSingleShadow(v: boolean) {
		this.i.useSingleShadow = ensureBool(v);
	}
	/**
	 * Gets whether drop shadow is actually applied to the whole StackedFragmentSeries visual or to each of the individual shapes forming the StackedFragmentSeries.
	*/
	get actualUseSingleShadow() : boolean {
		return (this.i.actualUseSingleShadow as boolean);
	}
	@Input()
	set actualUseSingleShadow(v: boolean) {
		this.i.actualUseSingleShadow = ensureBool(v);
	}
	/**
	 * Gets or sets the drop shadow x-offset.
	*/
	get shadowOffsetX() : number {
		return (this.i.shadowOffsetX as number);
	}
	@Input()
	set shadowOffsetX(v: number) {
		this.i.shadowOffsetX = +v;
	}
	/**
	 * Gets the actual drop shadow x-offset applied to the series.
	*/
	get actualShadowOffsetX() : number {
		return (this.i.actualShadowOffsetX as number);
	}
	@Input()
	set actualShadowOffsetX(v: number) {
		this.i.actualShadowOffsetX = +v;
	}
	/**
	 * Gets or sets the drop shadow y-offset.
	*/
	get shadowOffsetY() : number {
		return (this.i.shadowOffsetY as number);
	}
	@Input()
	set shadowOffsetY(v: number) {
		this.i.shadowOffsetY = +v;
	}
	/**
	 * Gets the actual drop shadow y-offset applied to the series.
	*/
	get actualShadowOffsetY() : number {
		return (this.i.actualShadowOffsetY as number);
	}
	@Input()
	set actualShadowOffsetY(v: number) {
		this.i.actualShadowOffsetY = +v;
	}
	/**
	 * Gets or sets the LegendItemBadgeTemplate property.
	 * The legend item badge is created according to the LegendItemBadgeTemplate on-demand by 
	 * the series object itself.
	*/
	get legendItemBadgeTemplate() : IgDataTemplate {
		return (this.i.legendItemBadgeTemplate as IgDataTemplate);
	}
	@Input()
	set legendItemBadgeTemplate(v: IgDataTemplate) {
		this.i.legendItemBadgeTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets the actual legend item badge template used by the series.
	*/
	get actualLegendItemBadgeTemplate() : IgDataTemplate {
		return (this.i.actualLegendItemBadgeTemplate as IgDataTemplate);
	}
	@Input()
	set actualLegendItemBadgeTemplate(v: IgDataTemplate) {
		this.i.actualLegendItemBadgeTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the LegendItemTemplate property.
	 * The legend item control content is created according to the LegendItemTemplate on-demand by 
	 * the series object itself.
	*/
	get legendItemTemplate() : IgDataTemplate {
		return (this.i.legendItemTemplate as IgDataTemplate);
	}
	@Input()
	set legendItemTemplate(v: IgDataTemplate) {
		this.i.legendItemTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets the actual legend item template used by the series.
	*/
	get actualLegendItemTemplate() : IgDataTemplate {
		return (this.i.actualLegendItemTemplate as IgDataTemplate);
	}
	@Input()
	set actualLegendItemTemplate(v: IgDataTemplate) {
		this.i.actualLegendItemTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the legend item visibility for the current series object.
	*/
	get legendItemVisibility() : Visibility {
		return this.i.legendItemVisibility;
	}
	@Input()
	set legendItemVisibility(v: Visibility) {
		this.i.legendItemVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets the actual visibility of the legend items in the series.
	*/
	get actualLegendItemVisibility() : Visibility {
		return this.i.actualLegendItemVisibility;
	}
	@Input()
	set actualLegendItemVisibility(v: Visibility) {
		this.i.actualLegendItemVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the brush that specifies how the current series object's marker interiors are painted.
	*/
	get markerBrush() : string {
		return brushToString(this.i.markerBrush);
	}
	@Input()
	set markerBrush(v: string) {
		this.i.markerBrush = stringToBrush(v);
	}
	/**
	 * Gets the actual marker brush of the series.
	*/
	get actualMarkerBrush() : string {
		return brushToString(this.i.actualMarkerBrush);
	}
	@Input()
	set actualMarkerBrush(v: string) {
		this.i.actualMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush that specifies how the current series object's marker outlines are painted.
	*/
	get markerOutline() : string {
		return brushToString(this.i.markerOutline);
	}
	@Input()
	set markerOutline(v: string) {
		this.i.markerOutline = stringToBrush(v);
	}
	/**
	 * Gets the actual marker outline of the series.
	*/
	get actualMarkerOutline() : string {
		return brushToString(this.i.actualMarkerOutline);
	}
	@Input()
	set actualMarkerOutline(v: string) {
		this.i.actualMarkerOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the MarkerTemplate for the current series object.
	*/
	get markerTemplate() : IgDataTemplate {
		return (this.i.markerTemplate as IgDataTemplate);
	}
	@Input()
	set markerTemplate(v: IgDataTemplate) {
		this.i.markerTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets the actual marker template used by the series.
	*/
	get actualMarkerTemplate() : IgDataTemplate {
		return (this.i.actualMarkerTemplate as IgDataTemplate);
	}
	@Input()
	set actualMarkerTemplate(v: IgDataTemplate) {
		this.i.actualMarkerTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the marker type for the current series object.
	 * If the MarkerTemplate property is set, the setting of the MarkerType property will be ignored.
	*/
	get markerType() : MarkerType {
		return this.i.markerType;
	}
	@Input()
	set markerType(v: MarkerType) {
		this.i.markerType = ensureEnum<MarkerType>(MarkerType_$type, v);
	}
	/**
	 * Gets the actual marker type set used in the series.
	*/
	get actualMarkerType() : MarkerType {
		return this.i.actualMarkerType;
	}
	@Input()
	set actualMarkerType(v: MarkerType) {
		this.i.actualMarkerType = ensureEnum<MarkerType>(MarkerType_$type, v);
	}
	/**
	 * Gets or sets the Name of the stacked fragment.
	*/
	get name() : string {
		return (this.i.name as string);
	}
	@Input()
	set name(v: string) {
		this.i.name = v;
	}
	/**
	 * Gets or sets the Opacity of the stacked fragment.
	*/
	get opacity() : number {
		return (this.i.opacity as number);
	}
	@Input()
	set opacity(v: number) {
		this.i.opacity = +v;
	}
	/**
	 * Gets the series opacity.
	*/
	get actualOpacity() : number {
		return (this.i.actualOpacity as number);
	}
	@Input()
	set actualOpacity(v: number) {
		this.i.actualOpacity = +v;
	}
	/**
	 * Gets or sets the brush to use for the outline of the series.
	 * Some series types, such as LineSeries, do not display outlines.  Therefore, this property does not affect some charts.
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	@Input()
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets the series outline.
	*/
	get actualOutline() : string {
		return brushToString(this.i.actualOutline);
	}
	@Input()
	set actualOutline(v: string) {
		this.i.actualOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the AreaFillOpacity of the stacked fragment. This property only applies for area-like series.
	*/
	get areaFillOpacity() : number {
		return (this.i.areaFillOpacity as number);
	}
	@Input()
	set areaFillOpacity(v: number) {
		this.i.areaFillOpacity = +v;
	}
	/**
	 * Gets the series ActualAreaFillOpacity.  This property only applies for area-like series.
	*/
	get actualAreaFillOpacity() : number {
		return (this.i.actualAreaFillOpacity as number);
	}
	@Input()
	set actualAreaFillOpacity(v: number) {
		this.i.actualAreaFillOpacity = +v;
	}
	/**
	 * Gets or sets the x-radius of the ellipse that is used to round the corners of the column. This only applies to Bar and Column series.
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	@Input()
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets the actual corner radius of the series
	*/
	get actualRadiusX() : number {
		return (this.i.actualRadiusX as number);
	}
	@Input()
	set actualRadiusX(v: number) {
		this.i.actualRadiusX = +v;
	}
	/**
	 * Gets or sets the y-radius of the ellipse that is used to round the corners of the column. This only applies to Bar and Column series.
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	@Input()
	set radiusY(v: number) {
		this.i.radiusY = +v;
	}
	/**
	 * Gets the actual corner radius of the series
	*/
	get actualRadiusY() : number {
		return (this.i.actualRadiusY as number);
	}
	@Input()
	set actualRadiusY(v: number) {
		this.i.actualRadiusY = +v;
	}
	/**
	 * Gets or sets the width of the current series object's line thickness.
	*/
	get thickness() : number {
		return (this.i.thickness as number);
	}
	@Input()
	set thickness(v: number) {
		this.i.thickness = +v;
	}
	/**
	 * Gets or sets the thickness of this stacked fragment.
	*/
	get actualThickness() : number {
		return (this.i.actualThickness as number);
	}
	@Input()
	set actualThickness(v: number) {
		this.i.actualThickness = +v;
	}
	/**
	 * Gets or sets the Title property.
	 * The legend item control is created according to the Title on-demand by 
	 * the series object itself.
	*/
	get title() : any {
		return this.i.title as any;
	}
	@Input()
	set title(v: any) {
		this.i.title = v;
	}
	/**
	 * Gets or sets the value mapping property for the current series object.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * Gets or sets the Visibility of the stacked fragment.
	*/
	get visibility() : Visibility {
		return this.i.visibility;
	}
	@Input()
	set visibility(v: Visibility) {
		this.i.visibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets the actual visibility of the stacked fragment.
	*/
	get actualVisibility() : Visibility {
		return this.i.actualVisibility;
	}
	@Input()
	set actualVisibility(v: Visibility) {
		this.i.actualVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets the resolved brush used between the local series and the parent series.
	*/
	get parentOrLocalBrush() : string {
		return brushToString(this.i.parentOrLocalBrush);
	}
	@Input()
	set parentOrLocalBrush(v: string) {
		this.i.parentOrLocalBrush = stringToBrush(v);
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
	        genericPrefix = toSpinal("StackedFragmentSeriesComponent");
		
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
	private _propertyUpdated: EventEmitter<{ sender: any, args: IgxPropertyUpdatedEventArgs}> = null;
	/**
	 * Event raised when a property (including "effective" and non-dependency property) value changes.
	*/
	@Output()
	get propertyUpdated(): EventEmitter<{ sender: any, args: IgxPropertyUpdatedEventArgs}> {
		if (this._propertyUpdated == null) {
			this._propertyUpdated = new EventEmitter<{sender: any, args: IgxPropertyUpdatedEventArgs}>();
			this.i.propertyUpdated = delegateCombine(this.i.propertyUpdated, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxPropertyUpdatedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforePropertyUpdated) {
	                        (this as any).beforePropertyUpdated(this, outerArgs);
	                    }
					this._propertyUpdated.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._propertyUpdated;
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
