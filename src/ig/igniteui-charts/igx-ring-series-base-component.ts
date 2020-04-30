import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy, TemplateRef, ComponentRef  } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, IEnumerable } from 'igniteui-core/type';
import { IgxDoughnutChartComponent } from "./igx-doughnut-chart-component";
import { LabelsPosition, LabelsPosition_$type } from "./LabelsPosition";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { Style } from 'igniteui-core/Style';
import { LeaderLineType, LeaderLineType_$type } from "./LeaderLineType";
import { OthersCategoryType, OthersCategoryType_$type } from "./OthersCategoryType";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { IgxPropertyUpdatedEventArgs } from "igniteui-core/igx-property-updated-event-args";
import { RingSeriesBase } from "./RingSeriesBase";
import { ensureEnum, toBrushCollection, fromBrushCollection, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher, brushToString, stringToBrush } from "igniteui-core/componentUtil";
import { TypeRegistrar } from 'igniteui-core/type';
import { AngularWrapper } from 'igniteui-core/angular-renderer';

/**
 * Represents a IgxRingSeriesBaseComponent base series.
*/
export const IgxRingSeriesBaseComponent_PROVIDERS = [];
export abstract class IgxRingSeriesBaseComponent implements OnInit {

    protected createImplementation(): RingSeriesBase {
        return null;
    }
    ngOnInit() {
    }
    //
    private _dataSource: Array<any> = null;
    @Input()
    set dataSource(value: Array<any>) {
        this._dataSource = value;
        this.bindData();
    }
    get dataSource(): Array<any> {
        return this._dataSource;
    }

    bindData() {
        if (this.i != null && this.i !== undefined) {
            this.i.itemsSource = <IEnumerable><any>this._dataSource;
        }
    }
    //

    protected _implementation: any;
    public get i(): RingSeriesBase {
        return this._implementation;
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

    static _createFromInternal(internal: any): IgxRingSeriesBaseComponent {
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
    get legend(): any {
        if (this.i.legend != null)
            return (<any>this.i.legend).externalObject;
    }
    @Input()
    set legend(v: any) {
        if (v != undefined && v != null)
            this.i.legend = v.i;
    }


    private _tooltipTemplate: TemplateRef<any> = null;
    private _tooltipContent: ComponentRef<any> = null;
    @Input()
    set tooltipTemplate(value: TemplateRef<any>) {
        this._tooltipTemplate = value;
        if (value == null) {
            if (this._tooltipContent !== null) {
                this._tooltipContent.destroy();
                this._tooltipContent = null;
            }
        }
        if (this._tooltipContent != null) {
            this._tooltipContent.instance.template = this._tooltipTemplate;
        } else {
            if ((<any>this).owner != null) {
                (<any>this).owner._ensureTooltipCreated(this);
            }
        }
    }
    get tooltipTemplate(): TemplateRef<any> {
        return this._tooltipTemplate;
    }

    private _tooltipContainerTemplate: TemplateRef<any> = null;
    @Input()
    set tooltipContainerTemplate(value: TemplateRef<any>) {
        this._tooltipContainerTemplate = value;
        if (this._tooltipContent != null) {
            this._tooltipContent.instance.containerTemplate = this._tooltipContainerTemplate;
        }
    }
    get tooltipContainerTemplate(): TemplateRef<any> {
        return this._tooltipContainerTemplate;
    }

    private _ensureTooltipCreated(
        createTooltip: () => ComponentRef<any>,
        createWrapper: (Element) => AngularWrapper) {
        if (this._tooltipTemplate == null) {
            this.i.toolTip = null;
        }
        if (this._tooltipContent == null && this._tooltipTemplate != null) {
            let tooltip = createTooltip();
            if (tooltip == null) {
                return;
            }
            this._tooltipContent = tooltip;
            (<any>tooltip.instance).template = this._tooltipTemplate;
            this.i.toolTip = createWrapper(tooltip.location.nativeElement);
        }
    }

    private _ensureTooltipDestroyed() {
        if (this._tooltipContent !== null) {
            this._tooltipContent.destroy();
            this._tooltipContent = null;
        }
    }

    private _showDefaultTooltip: boolean = false;
	/**
	 * Gets or sets whether default tooltip will be shown.
	*/
    get showDefaultTooltip(): boolean {
        return <boolean>this._showDefaultTooltip;
    }
    @Input()
    set showDefaultTooltip(v: boolean) {
        this._showDefaultTooltip = ensureBool(v);
    }

    sychronizeCollections() { }

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
	 * Gets or sets the fill brush.
	*/
	get leaderLineFill() : string {
		return this.i.leaderLineStyle ? (this.i.leaderLineStyle.fill as string) : null;
	}
	@Input()
	set leaderLineFill(v: string) {
		this.ensureLeaderLineStyle();
	                                        this.i.leaderLineStyle.fill = v;
	}
	/**
	 * Gets or sets the stroke brush.
	*/
	get leaderLineStroke() : string {
		return this.i.leaderLineStyle ? (this.i.leaderLineStyle.stroke as string) : null;
	}
	@Input()
	set leaderLineStroke(v: string) {
		this.ensureLeaderLineStyle();
	                                        this.i.leaderLineStyle.stroke = v;
	}
	/**
	 * Gets or sets the stroke thickness.
	*/
	get leaderLineStrokeThickness() : number {
		return this.i.leaderLineStyle ? (this.i.leaderLineStyle.strokeThickness as number) : NaN;
	}
	@Input()
	set leaderLineStrokeThickness(v: number) {
	                                        this.ensureLeaderLineStyle();
		this.i.leaderLineStyle.strokeThickness = +v;
	}
	/**
	 * Gets or sets the opacity.
	*/
	get leaderLineOpacity() : number {
		return this.i.leaderLineStyle ? (this.i.leaderLineStyle.opacity as number) : NaN;
	}
	@Input()
	set leaderLineOpacity(v: number) {
	                                        this.ensureLeaderLineStyle();
		this.i.leaderLineStyle.opacity = +v;
	}
	ensureLeaderLineStyle() {
	if (this.i.leaderLineStyle) {
	                                            return;
	                                        }
	                                        this.i.leaderLineStyle = new Style();
	
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
	 * Gets or sets the margin between a label and its leader line. The default is 6 pixels.
	*/
	get leaderLineMargin() : number {
		return (this.i.leaderLineMargin as number);
	}
	@Input()
	set leaderLineMargin(v: number) {
		this.i.leaderLineMargin = +v;
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
	 * Gets or sets the scaling factor of the chart's radius. Value between 0 and 1.
	*/
	get radiusFactor() : number {
		return (this.i.radiusFactor as number);
	}
	@Input()
	set radiusFactor(v: number) {
		this.i.radiusFactor = +v;
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
	        genericPrefix = toSpinal("RingSeriesBaseComponent");
		
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
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
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
