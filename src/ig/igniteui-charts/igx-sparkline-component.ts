/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, OnDestroy, EventEmitter, Output, ComponentRef, AfterViewInit, TemplateRef, Injector, ComponentFactoryResolver, Component, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { Visibility, Visibility_$type } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { PointUtil, IEnumerable, TypeRegistrar } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Rect } from 'igniteui-core/Rect';
import { DataTemplate } from 'igniteui-core/DataTemplate';
import { BrushCollection } from 'igniteui-core/BrushCollection';
import { XamSparkline } from './XamSparkline';
import { CollectionAdapter, brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, fromBrushCollection, toBrushCollection, ensureBool, ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { delegateCombine } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { SparklineVisualData } from './SparklineVisualData';
import { SweepDirection, SweepDirection_$type } from 'igniteui-core/SweepDirection';
import { SparklineStylingDefaults } from './SparklineStylingDefaults';
import { TrendLineType, TrendLineType_$type } from 'igniteui-core/TrendLineType';
import { SparklineDisplayType, SparklineDisplayType_$type } from './SparklineDisplayType'; 
import { UnknownValuePlotting, UnknownValuePlotting_$type } from 'igniteui-core/UnknownValuePlotting'; 



export const IgxSparklineComponent_PROVIDERS = [];


/**
 * Represents a sparkline chart.
*/
@Component({
    selector: 'igx-sparkline',
    template: `<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxSparklineComponent_PROVIDERS,
    host: { 'class': 'ig-sparkline igx-sparkline' },
    styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxSparklineComponent implements AfterContentInit, OnDestroy {


    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._sparkline.notifyResized();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._sparkline.notifyResized();
    }
    get width(): string {
        return this._width;
    }

    private _container: any;

    private _dataSource: any = null;
    @Input()
    set dataSource(value: any) {
        this._dataSource = value;
        this.i.itemsSource = this._dataSource;
        //console.log("setting axis data source: " + value)
    }
    get dataSource(): any {
        if (this._dataSource != null) {
            return this._dataSource;
        }
        return this.i.itemsSource;
    }

   
    private _root: Element = null;
    constructor(
        private _renderer: Renderer2, 
        private _elRef: ViewContainerRef,
        private _ngZone: NgZone,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector) {

        //super();

        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._zoneRunner = (act: () => void) => this._ngZone.run(act);

        this._implementation = this.createImplementation();
        this._container = _renderer.createElement("div");
        _renderer.appendChild(_elRef.element.nativeElement, this._container);
        _renderer.setStyle(this._container, "display", "block");
        _renderer.setStyle(this._container, "width", "100%");
        _renderer.setStyle(this._container, "height", "100%");
        var root: any;
        root = this._container;
        if (this._container.nativeElement != null) {
            root = this._container.nativeElement;
        }
        this._root = root;
        var ren: AngularRenderer = new AngularRenderer(
            root, this._renderer, window.document,
            this._ngZone,
            true,
            SparklineStylingDefaults);

        this._wrapper = ren;
        var sparkline = this.i;
        this._sparkline = sparkline;

        sparkline.provideContainer(ren);
        ren.addSizeWatcher(() => {
            this._sparkline.notifyResized();
        });
    }

    ngOnDestroy() {
        this._sparkline.destroy();
        this._wrapper.destroy();
    }

    private _wrapper: AngularRenderer;

    protected createImplementation() {
        return new XamSparkline();
    }

    private _sparkline: XamSparkline;

    ngAfterContentInit() {
        this._styling(this._root, this);        

        this.i.notifyResized();
    }

    protected _zoneRunner: (act: () => void) => void = null;
    protected _runInZone(act: () => void): void {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        } else {
            act();
        }
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
            this._ensureTooltipCreated();
        }
    }
    get tooltipTemplate(): TemplateRef<any> {
        return this._tooltipTemplate;
    }

    private _ensureTooltipCreated() {
        if (this.i.toolTip == null) {
            let tooltip = this.createTooltip();
            if (tooltip == null) {
                return;
            }
            this._tooltipContent = tooltip;
            (<any>tooltip.instance).template = this._tooltipTemplate;
            this.i.toolTip = this.createWrapper(tooltip.location.nativeElement);
        }
    }

    private createWrapper(ele: any): AngularWrapper {
        let wrapper = new AngularWrapper(
            ele,
            this._renderer,
            this._ngZone
        );
        (<any>wrapper).updateToolTip = (<any>ele).updateToolTip;
        (<any>wrapper).hideToolTip = (<any>ele).hideToolTip;
        return wrapper;
    }

    private _defaultTooltips: ComponentRef<any> = null;
    private _ensureDefaultTooltip() {
        if (this._defaultTooltips == null) {
            return;
        }
        this._defaultTooltips.instance["ensureDefaultTooltip"](this);
    }

    private _onDefaultTooltipsReady(cr: ComponentRef<any>) {
        this._ensureDefaultTooltip();
    }

    private createTooltip(): ComponentRef<any> {
        if (!TypeRegistrar.isRegistered("IgxTooltipContainerComponent")) {
            return null;
        }
        let t = TypeRegistrar.get("IgxTooltipContainerComponent");
        let cf = this._componentFactoryResolver.resolveComponentFactory(t);
        let cr = this._dynamicContent.createComponent(cf);
        let ele: Element = cr.location.nativeElement;
        let self = this;

        (<any>ele).updateToolTip = function (c) {
            if (c.externalObject) {
                c = c.externalObject;
            } else {
                let ext = new IgxDataContext();
                (<any>ext)._implementation = c;
                c = ext;
            }

            if (ele.parentElement != self._container) {
                if (ele.parentElement != null) {
                    ele.parentElement.removeChild(ele);
                }

                self._container.appendChild(ele);
            }
            (<any>cr.instance).context = c;
            (<any>ele).style.display = "block";

            return true;
        };
        (<any>ele).hideToolTip = function () {
            (<any>ele).style.display = "none"
        };
        (<any>ele).style.display = "none"

        return cr;
    }

    	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : XamSparkline {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxSparklineComponent {
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

    	/**
	 * Gets or sets the sparkline brush.
	*/
	get brush() : string {
		return brushToString(this.i.brush);
	}
	@Input()
	set brush(v: string) {
		this.i.brush = stringToBrush(v);
	}
	/**
	 * Gets or sets the negative brush of the sparkline.
	*/
	get negativeBrush() : string {
		return brushToString(this.i.negativeBrush);
	}
	@Input()
	set negativeBrush(v: string) {
		this.i.negativeBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the marker brush of the sparkline.
	*/
	get markerBrush() : string {
		return brushToString(this.i.markerBrush);
	}
	@Input()
	set markerBrush(v: string) {
		this.i.markerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the negative marker brush of the sparkline.
	*/
	get negativeMarkerBrush() : string {
		return brushToString(this.i.negativeMarkerBrush);
	}
	@Input()
	set negativeMarkerBrush(v: string) {
		this.i.negativeMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the first marker brush of the sparkline.
	*/
	get firstMarkerBrush() : string {
		return brushToString(this.i.firstMarkerBrush);
	}
	@Input()
	set firstMarkerBrush(v: string) {
		this.i.firstMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the last marker brush of the sparkline.
	*/
	get lastMarkerBrush() : string {
		return brushToString(this.i.lastMarkerBrush);
	}
	@Input()
	set lastMarkerBrush(v: string) {
		this.i.lastMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the high marker brush of the sparkline.
	*/
	get highMarkerBrush() : string {
		return brushToString(this.i.highMarkerBrush);
	}
	@Input()
	set highMarkerBrush(v: string) {
		this.i.highMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the low marker brush of the sparkline.
	*/
	get lowMarkerBrush() : string {
		return brushToString(this.i.lowMarkerBrush);
	}
	@Input()
	set lowMarkerBrush(v: string) {
		this.i.lowMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the trendline brush of the sparkline.
	*/
	get trendLineBrush() : string {
		return brushToString(this.i.trendLineBrush);
	}
	@Input()
	set trendLineBrush(v: string) {
		this.i.trendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the horizontal axis line brush of the sparkline.
	*/
	get horizontalAxisBrush() : string {
		return brushToString(this.i.horizontalAxisBrush);
	}
	@Input()
	set horizontalAxisBrush(v: string) {
		this.i.horizontalAxisBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the vertical axis line brush of the sparkline.
	*/
	get verticalAxisBrush() : string {
		return brushToString(this.i.verticalAxisBrush);
	}
	@Input()
	set verticalAxisBrush(v: string) {
		this.i.verticalAxisBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the normal range brush of the sparkline.
	*/
	get normalRangeFill() : string {
		return brushToString(this.i.normalRangeFill);
	}
	@Input()
	set normalRangeFill(v: string) {
		this.i.normalRangeFill = stringToBrush(v);
	}
	/**
	 * Gets or sets the display state of the horizontal axis.
	*/
	get horizontalAxisVisibility() : Visibility {
		return this.i.horizontalAxisVisibility;
	}
	@Input()
	set horizontalAxisVisibility(v: Visibility) {
		this.i.horizontalAxisVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the display state of the vertical axis.
	*/
	get verticalAxisVisibility() : Visibility {
		return this.i.verticalAxisVisibility;
	}
	@Input()
	set verticalAxisVisibility(v: Visibility) {
		this.i.verticalAxisVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the marker visibility of the sparkline.
	*/
	get markerVisibility() : Visibility {
		return this.i.markerVisibility;
	}
	@Input()
	set markerVisibility(v: Visibility) {
		this.i.markerVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the negative marker visibility of the sparkline.
	*/
	get negativeMarkerVisibility() : Visibility {
		return this.i.negativeMarkerVisibility;
	}
	@Input()
	set negativeMarkerVisibility(v: Visibility) {
		this.i.negativeMarkerVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the first marker visibility of the sparkline.
	*/
	get firstMarkerVisibility() : Visibility {
		return this.i.firstMarkerVisibility;
	}
	@Input()
	set firstMarkerVisibility(v: Visibility) {
		this.i.firstMarkerVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the last marker visibility of the sparkline.
	*/
	get lastMarkerVisibility() : Visibility {
		return this.i.lastMarkerVisibility;
	}
	@Input()
	set lastMarkerVisibility(v: Visibility) {
		this.i.lastMarkerVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the low marker visibility of the sparkline.
	*/
	get lowMarkerVisibility() : Visibility {
		return this.i.lowMarkerVisibility;
	}
	@Input()
	set lowMarkerVisibility(v: Visibility) {
		this.i.lowMarkerVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the high marker visibility of the sparkline.
	*/
	get highMarkerVisibility() : Visibility {
		return this.i.highMarkerVisibility;
	}
	@Input()
	set highMarkerVisibility(v: Visibility) {
		this.i.highMarkerVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the normal range visibility of the sparkline.
	*/
	get normalRangeVisibility() : Visibility {
		return this.i.normalRangeVisibility;
	}
	@Input()
	set normalRangeVisibility(v: Visibility) {
		this.i.normalRangeVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the position of the normal range on the sparkline.
	*/
	get displayNormalRangeInFront() : boolean {
		return (this.i.displayNormalRangeInFront as boolean);
	}
	@Input()
	set displayNormalRangeInFront(v: boolean) {
		this.i.displayNormalRangeInFront = ensureBool(v);
	}
	/**
	 * Gets or sets the marker size of the sparkline.
	*/
	get markerSize() : number {
		return (this.i.markerSize as number);
	}
	@Input()
	set markerSize(v: number) {
		this.i.markerSize = +v;
	}
	/**
	 * Gets or sets the first marker size of the sparkline.
	*/
	get firstMarkerSize() : number {
		return (this.i.firstMarkerSize as number);
	}
	@Input()
	set firstMarkerSize(v: number) {
		this.i.firstMarkerSize = +v;
	}
	/**
	 * Gets or sets the last marker size of the sparkline.
	*/
	get lastMarkerSize() : number {
		return (this.i.lastMarkerSize as number);
	}
	@Input()
	set lastMarkerSize(v: number) {
		this.i.lastMarkerSize = +v;
	}
	/**
	 * Gets or sets the high marker size of the sparkline.
	*/
	get highMarkerSize() : number {
		return (this.i.highMarkerSize as number);
	}
	@Input()
	set highMarkerSize(v: number) {
		this.i.highMarkerSize = +v;
	}
	/**
	 * Gets or sets the low marker size of the sparkline.
	*/
	get lowMarkerSize() : number {
		return (this.i.lowMarkerSize as number);
	}
	@Input()
	set lowMarkerSize(v: number) {
		this.i.lowMarkerSize = +v;
	}
	/**
	 * Gets or sets the negative marker size of the sparkline.
	*/
	get negativeMarkerSize() : number {
		return (this.i.negativeMarkerSize as number);
	}
	@Input()
	set negativeMarkerSize(v: number) {
		this.i.negativeMarkerSize = +v;
	}
	/**
	 * Gets or sets the line thickness of the sparkline.
	*/
	get lineThickness() : number {
		return (this.i.lineThickness as number);
	}
	@Input()
	set lineThickness(v: number) {
		this.i.lineThickness = +v;
	}
	/**
	 * Gets or sets the minimum value of the y axis.
	*/
	get minimum() : number {
		return (this.i.minimum as number);
	}
	@Input()
	set minimum(v: number) {
		this.i.minimum = +v;
	}
	/**
	 * Gets or sets the maximum value of the y axis.
	*/
	get maximum() : number {
		return (this.i.maximum as number);
	}
	@Input()
	set maximum(v: number) {
		this.i.maximum = +v;
	}
	/**
	 * Gets or sets the string path to the value column.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * String identifier of a column or property name to get labels from on each item in the data source.  These labels will be retrieved from the first and last item, and displayed by the horizontal axis.
	*/
	get labelMemberPath() : string {
		return (this.i.labelMemberPath as string);
	}
	@Input()
	set labelMemberPath(v: string) {
		this.i.labelMemberPath = v;
	}
	/**
	 * Gets or sets the type of trendline used by the sparkline.
	*/
	get trendLineType() : TrendLineType {
		return this.i.trendLineType;
	}
	@Input()
	set trendLineType(v: TrendLineType) {
		this.i.trendLineType = ensureEnum<TrendLineType>(TrendLineType_$type, v);
	}
	/**
	 * Gets or sets the trendline period used by the sparkline.
	*/
	get trendLinePeriod() : number {
		return (this.i.trendLinePeriod as number);
	}
	@Input()
	set trendLinePeriod(v: number) {
		this.i.trendLinePeriod = +v;
	}
	/**
	 * Gets or sets the thickness of the sparkline's trendline.
	*/
	get trendLineThickness() : number {
		return (this.i.trendLineThickness as number);
	}
	@Input()
	set trendLineThickness(v: number) {
		this.i.trendLineThickness = +v;
	}
	/**
	 * Gets or sets the minimum value of the normal range.
	*/
	get normalRangeMinimum() : number {
		return (this.i.normalRangeMinimum as number);
	}
	@Input()
	set normalRangeMinimum(v: number) {
		this.i.normalRangeMinimum = +v;
	}
	/**
	 * Gets or sets the maximum value of the normal range.
	*/
	get normalRangeMaximum() : number {
		return (this.i.normalRangeMaximum as number);
	}
	@Input()
	set normalRangeMaximum(v: number) {
		this.i.normalRangeMaximum = +v;
	}
	/**
	 * Gets or sets the display type of the sparkline.
	*/
	get displayType() : SparklineDisplayType {
		return this.i.displayType;
	}
	@Input()
	set displayType(v: SparklineDisplayType) {
		this.i.displayType = ensureEnum<SparklineDisplayType>(SparklineDisplayType_$type, v);
	}
	/**
	 * Gets or sets the way null values are interpreted.
	*/
	get unknownValuePlotting() : UnknownValuePlotting {
		return this.i.unknownValuePlotting;
	}
	@Input()
	set unknownValuePlotting(v: UnknownValuePlotting) {
		this.i.unknownValuePlotting = ensureEnum<UnknownValuePlotting>(UnknownValuePlotting_$type, v);
	}
	/**
	 * The value or content to display on the vertical axis.
	 * This can be set to a formatted string, such as "{0:n}", or it can be set to a DataTemplate.
	*/
	get verticalAxisLabel() : any {
		return this.i.verticalAxisLabel as any;
	}
	@Input()
	set verticalAxisLabel(v: any) {
		this.i.verticalAxisLabel = v;
	}
	/**
	 * The value or content to display on the horizontal axis.
	 * This can be set to a formatted string, such as "{0}", or it can be set to a DataTemplate.
	*/
	get horizontalAxisLabel() : any {
		return this.i.horizontalAxisLabel as any;
	}
	@Input()
	set horizontalAxisLabel(v: any) {
		this.i.horizontalAxisLabel = v;
	}
	/**
	 * Sets or gets a function which takes an object that produces a formatted label for displaying in the chart.
	*/
	get formatLabel() : (arg1: any) => string {
		return this.i.formatLabel as (arg1: any) => string;
	}
	@Input()
	set formatLabel(v: (arg1: any) => string) {
		this.i.formatLabel = v;
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
	 * Gets the actual scaling value used by the component to affect the pixel density of the control.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
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
	        genericPrefix = toSpinal("SparklineComponent");
		
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
	 * Provides a container to the sparkline control.
	
	* @param container  * The container.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	/**
	 * Notify that the control has resized.
	
	*/
	public notifyResized() {
		this.i.notifyResized();
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Used to manually notify the IgxSparklineComponent that the data source has reset or cleared its items.  Invoking this method is only necessary if that datasource is not observable.
	
	* @param source_  * The data source which was cleared or reset.
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
	 * Returns the sparkline visuals expressed as a SparklineVisualData object.
	
	*/
	public exportVisualData() : SparklineVisualData {
		let iv = this.i.exportVisualData();
		return (iv);
	}
	/**
	 * Returns visuals as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}

    
}
