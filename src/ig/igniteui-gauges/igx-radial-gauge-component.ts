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
import { XamRadialGauge } from './XamRadialGauge';
import { CollectionAdapter, brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, fromBrushCollection, toBrushCollection, ensureBool, ensureEnum, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { delegateCombine } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { GaugeVisualData } from './GaugeVisualData';
import { SweepDirection, SweepDirection_$type } from 'igniteui-core/SweepDirection';
import { RadialGaugeNeedleShape, RadialGaugeNeedleShape_$type } from './RadialGaugeNeedleShape';
import { RadialGaugePivotShape, RadialGaugePivotShape_$type } from './RadialGaugePivotShape';
import { RadialGaugeScaleOversweepShape, RadialGaugeScaleOversweepShape_$type } from './RadialGaugeScaleOversweepShape';
import { RadialGaugeBackingShape, RadialGaugeBackingShape_$type } from './RadialGaugeBackingShape';
import { RadialGaugeDuplicateLabelOmissionStrategy, RadialGaugeDuplicateLabelOmissionStrategy_$type } from './RadialGaugeDuplicateLabelOmissionStrategy';
import { IgxFormatRadialGaugeLabelEventArgs } from './igx-format-radial-gauge-label-event-args';
import { IgxAlignRadialGaugeLabelEventArgs } from './igx-align-radial-gauge-label-event-args';
import { RadialGaugeStylingDefaults } from './RadialGaugeStylingDefaults';
import { IgxRadialGaugeRangeComponent } from './igx-radial-gauge-range-component';
import { XamRadialGaugeRange } from './XamRadialGaugeRange';
import { IgxRadialGaugeRangeCollection } from './igx-radial-gauge-range-collection';


export const IgxRadialGaugeComponent_PROVIDERS = [];


/**
 * A radial gauge for displaying a single value on a defined scale.
*/
@Component({
    selector: 'igx-radial-gauge',
    template: `<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxRadialGaugeComponent_PROVIDERS,
    host: { 'class': 'igx-radial-gauge ig-radial-gauge' },
    styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxRadialGaugeComponent implements AfterContentInit, OnDestroy {


    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._gauge.containerResized();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._gauge.containerResized();
    }
    get width(): string {
        return this._width;
    }

    private _container: any;

    @ContentChildren(IgxRadialGaugeRangeComponent) contentRanges: QueryList<IgxRadialGaugeRangeComponent>;
    /**
    * The ranges actually present in the chart. Do not directly modify this array.
    * This array's contents can be modified by causing Angular to reproject the child content.
    * Or adding and removing ranges from the manual ranges collection on the ranges property.
    */
    actualRanges: IgxRadialGaugeRangeComponent[] = [];
    private _ranges: IgxRadialGaugeRangeCollection = null;
    private _rangesAdapter: CollectionAdapter<IgxRadialGaugeRangeComponent, XamRadialGaugeRange> = null;
	/**
	 * A collection or manually added axes for the chart.
	*/
    get ranges(): IgxRadialGaugeRangeCollection {
        if (this._ranges === null) {
            let coll = new IgxRadialGaugeRangeCollection();
            let inner: SyncableObservableCollection$2<IgxRadialGaugeRangeComponent, XamRadialGaugeRange> = (<any>coll)._innerColl;
            inner.addListener((sender, e) => {
                switch (e.action) {
                    case NotifyCollectionChangedAction.Add:
                        this._rangesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Remove:
                        this._rangesAdapter.removeManualItemAt(e.oldStartingIndex);
                        break;
                    case NotifyCollectionChangedAction.Replace:
                        this._rangesAdapter.removeManualItemAt(e.oldStartingIndex);
                        this._rangesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Reset:
                        this._rangesAdapter.clearManualItems();
                        break;
                }
            });
            this._ranges = coll;
        }
        return this._ranges;
    }


    private _root: Element;

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
        var ren: AngularRenderer = new AngularRenderer(
            root, this._renderer, window.document,
            this._ngZone,
            true,
            RadialGaugeStylingDefaults);

        this._root = root;
        this._wrapper = ren;
        var gauge = this.i;
        this._gauge = gauge;

        this._rangesAdapter = new CollectionAdapter<IgxRadialGaugeRangeComponent, XamRadialGaugeRange>(
            [],
            this.i.ranges,
            this.actualRanges,
            (c) => c.i,
            (i) => { 
                (<any>i)._provideRenderer(this._wrapper); 
                if (this._root && this._root.parentElement) {
                    (i as any)._styling(this._root, this, this);
                }
            },
            (i) => { (<any>i)._provideRenderer(null); }
        );


        gauge.provideContainer(ren);
        ren.addSizeWatcher(() => {
            this._gauge.containerResized();
        });
    }

    ngOnDestroy() {
        this._gauge.destroy();
        this._wrapper.destroy();
    }

    private _wrapper: AngularRenderer;

    protected createImplementation() {
        return new XamRadialGauge();
    }

    private _gauge: XamRadialGauge;

    ngAfterContentInit() {
        this._rangesAdapter.updateQuery(this.contentRanges);

        this._styling(this._container, this);
        if (this.actualRanges && this.actualRanges.length > 0) {
            var currRange = this.actualRanges;
            for (var i = 0; i < currRange.length; i++) {
                (currRange[i] as any)._styling(this._root, this, this);
            }
        }

        this.i.containerResized();
    }

    protected _zoneRunner: (act: () => void) => void = null;
    protected _runInZone(act: () => void): void {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        } else {
            act();
        }
    }

    	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : XamRadialGauge {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxRadialGaugeComponent {
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
	 * Gets or sets a collection of brushes to be used as the palette for gauge ranges.
	*/
	get rangeBrushes() : string[] {
		return fromBrushCollection(this.i.rangeBrushes);
	}
	@Input()
	set rangeBrushes(v: string[]) {
		this.i.rangeBrushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets a collection of brushes to be used as the palette for gauge outlines.
	*/
	get rangeOutlines() : string[] {
		return fromBrushCollection(this.i.rangeOutlines);
	}
	@Input()
	set rangeOutlines(v: string[]) {
		this.i.rangeOutlines = toBrushCollection(v);
	}
	/**
	 * Gets or sets the minimum value of the scale.
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	@Input()
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * Gets the resolved minimum value of the scale.
	*/
	get actualMinimumValue() : number {
		return (this.i.actualMinimumValue as number);
	}
	@Input()
	set actualMinimumValue(v: number) {
		this.i.actualMinimumValue = +v;
	}
	/**
	 * Gets or sets the maximum value of the scale.
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	@Input()
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * Gets the resolved maximum value of the scale.
	*/
	get actualMaximumValue() : number {
		return (this.i.actualMaximumValue as number);
	}
	@Input()
	set actualMaximumValue(v: number) {
		this.i.actualMaximumValue = +v;
	}
	/**
	 * Gets or sets the interval to use for the scale.
	*/
	get interval() : number {
		return (this.i.interval as number);
	}
	@Input()
	set interval(v: number) {
		this.i.interval = +v;
	}
	/**
	 * Gets or sets the x position of the center of the gauge with the value ranging from 0 to 1.
	*/
	get centerX() : number {
		return (this.i.centerX as number);
	}
	@Input()
	set centerX(v: number) {
		this.i.centerX = +v;
	}
	/**
	 * Gets or sets the y position of the center of the gauge with the value ranging from 0 to 1.
	*/
	get centerY() : number {
		return (this.i.centerY as number);
	}
	@Input()
	set centerY(v: number) {
		this.i.centerY = +v;
	}
	/**
	 * Gets or sets the value at which to point the needle of the gauge.
	*/
	get value() : number {
		return (this.i.value as number);
	}
	@Input()
	set value(v: number) {
		this.i.value = +v;
	}
	/**
	 * Gets or sets the start angle for the scale in degrees.
	*/
	get scaleStartAngle() : number {
		return (this.i.scaleStartAngle as number);
	}
	@Input()
	set scaleStartAngle(v: number) {
		this.i.scaleStartAngle = +v;
	}
	/**
	 * Gets or sets the end angle for the scale in degrees.
	*/
	get scaleEndAngle() : number {
		return (this.i.scaleEndAngle as number);
	}
	@Input()
	set scaleEndAngle(v: number) {
		this.i.scaleEndAngle = +v;
	}
	/**
	 * Gets or sets the direction in which the scale sweeps around the center from the start angle to end angle.
	*/
	get scaleSweepDirection() : SweepDirection {
		return this.i.scaleSweepDirection;
	}
	@Input()
	set scaleSweepDirection(v: SweepDirection) {
		this.i.scaleSweepDirection = ensureEnum<SweepDirection>(SweepDirection_$type, v);
	}
	/**
	 * Gets or sets the number of milliseconds over which changes to the gauge should be animated.
	*/
	get transitionDuration() : number {
		return (this.i.transitionDuration as number);
	}
	@Input()
	set transitionDuration(v: number) {
		this.i.transitionDuration = +v;
	}
	/**
	 * Gets or sets the easing function used to morph the current series.
	*/
	get transitionEasingFunction() : (time: number) => number {
		return this.i.transitionEasingFunction;
	}
	@Input()
	set transitionEasingFunction(v: (time: number) => number) {
		this.i.transitionEasingFunction = v;
	}
	/**
	 * Gets or sets the brush to use when rendering the fill of the needle.
	*/
	get needleBrush() : string {
		return brushToString(this.i.needleBrush);
	}
	@Input()
	set needleBrush(v: string) {
		this.i.needleBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use when rendering the outline of the needle.
	*/
	get needleOutline() : string {
		return brushToString(this.i.needleOutline);
	}
	@Input()
	set needleOutline(v: string) {
		this.i.needleOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the extent (from -1 to 1) at which to start rendering the needle, measured from the center of the gauge. 
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needleStartExtent() : number {
		return (this.i.needleStartExtent as number);
	}
	@Input()
	set needleStartExtent(v: number) {
		this.i.needleStartExtent = +v;
	}
	/**
	 * Gets or sets the extent (from -1 to 1) at which to end rendering the needle, measured from the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needleEndExtent() : number {
		return (this.i.needleEndExtent as number);
	}
	@Input()
	set needleEndExtent(v: number) {
		this.i.needleEndExtent = +v;
	}
	/**
	 * Gets or sets the shape to use when rendering the needle from a number of options.
	*/
	get needleShape() : RadialGaugeNeedleShape {
		return this.i.needleShape;
	}
	@Input()
	set needleShape(v: RadialGaugeNeedleShape) {
		this.i.needleShape = ensureEnum<RadialGaugeNeedleShape>(RadialGaugeNeedleShape_$type, v);
	}
	/**
	 * Gets or sets the width of the needle at its point using a value from (0 to 1). Note: Only some needle shapes respect this property.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needleStartWidthRatio() : number {
		return (this.i.needleStartWidthRatio as number);
	}
	@Input()
	set needleStartWidthRatio(v: number) {
		this.i.needleStartWidthRatio = +v;
	}
	/**
	 * Gets or sets the width of the needle at its point using a value from (0 to 1). Note: Only some needle shapes respect this property.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needleEndWidthRatio() : number {
		return (this.i.needleEndWidthRatio as number);
	}
	@Input()
	set needleEndWidthRatio(v: number) {
		this.i.needleEndWidthRatio = +v;
	}
	/**
	 * Gets or sets the width of the needle at its feature which is closest to the base (e.g. a bulb) with a value from 0 to 1. Note: Only some needle shapes respect this property, namely: NeedleWithBulb, RectangleWithBulb, TrapezoidWithBulb, and TriangleWithBulb.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needleBaseFeatureWidthRatio() : number {
		return (this.i.needleBaseFeatureWidthRatio as number);
	}
	@Input()
	set needleBaseFeatureWidthRatio(v: number) {
		this.i.needleBaseFeatureWidthRatio = +v;
	}
	/**
	 * Gets or sets the extent of the feature which is closest to the base (e.g. a bulb) with a value from -1 to 1. Note: Only some needle shapes respect this property, namely: NeedleWithBulb, RectangleWithBulb, TrapezoidWithBulb, and TriangleWithBulb.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needleBaseFeatureExtent() : number {
		return (this.i.needleBaseFeatureExtent as number);
	}
	@Input()
	set needleBaseFeatureExtent(v: number) {
		this.i.needleBaseFeatureExtent = +v;
	}
	/**
	 * Gets or sets the width of the needle at its feature which is closest to the point (e.g. the tapering point of a needle) with a value from 0 to 1. Note: Only some needle shapes respect this property.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needlePointFeatureWidthRatio() : number {
		return (this.i.needlePointFeatureWidthRatio as number);
	}
	@Input()
	set needlePointFeatureWidthRatio(v: number) {
		this.i.needlePointFeatureWidthRatio = +v;
	}
	/**
	 * Gets or sets the extent of the feature which is closest to the point (e.g. the tapering point of a needle) with a value from -1 to 1. Note: Only some needle shapes respect this property.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needlePointFeatureExtent() : number {
		return (this.i.needlePointFeatureExtent as number);
	}
	@Input()
	set needlePointFeatureExtent(v: number) {
		this.i.needlePointFeatureExtent = +v;
	}
	/**
	 * Gets or sets the width of the cap of the needle with a value from 0 to 1. Note: Will only take effect if you have a cap set on the needle.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get needlePivotWidthRatio() : number {
		return (this.i.needlePivotWidthRatio as number);
	}
	@Input()
	set needlePivotWidthRatio(v: number) {
		this.i.needlePivotWidthRatio = +v;
	}
	/**
	 * Gets or sets the width of the inner cutout section of the needle cap with a value from 0 to 1. Note: Will only take effect if you have a cap set on the needle that has a cutout section.
	*/
	get needlePivotInnerWidthRatio() : number {
		return (this.i.needlePivotInnerWidthRatio as number);
	}
	@Input()
	set needlePivotInnerWidthRatio(v: number) {
		this.i.needlePivotInnerWidthRatio = +v;
	}
	/**
	 * Gets or sets the shape to use for the needle cap.
	*/
	get needlePivotShape() : RadialGaugePivotShape {
		return this.i.needlePivotShape;
	}
	@Input()
	set needlePivotShape(v: RadialGaugePivotShape) {
		this.i.needlePivotShape = ensureEnum<RadialGaugePivotShape>(RadialGaugePivotShape_$type, v);
	}
	/**
	 * Gets or sets the position at which to start rendering the scale, measured from the center of the gauge as a value from 0 to 1.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get scaleStartExtent() : number {
		return (this.i.scaleStartExtent as number);
	}
	@Input()
	set scaleStartExtent(v: number) {
		this.i.scaleStartExtent = +v;
	}
	/**
	 * Gets or sets the brush to use for filling the needle cap. Note: this only applies to certain cap shapes.
	*/
	get needlePivotBrush() : string {
		return brushToString(this.i.needlePivotBrush);
	}
	@Input()
	set needlePivotBrush(v: string) {
		this.i.needlePivotBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the outlines of the needle cap.
	*/
	get needlePivotOutline() : string {
		return brushToString(this.i.needlePivotOutline);
	}
	@Input()
	set needlePivotOutline(v: string) {
		this.i.needlePivotOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness of the needle outline.
	*/
	get needleStrokeThickness() : number {
		return (this.i.needleStrokeThickness as number);
	}
	@Input()
	set needleStrokeThickness(v: number) {
		this.i.needleStrokeThickness = +v;
	}
	/**
	 * Gets or sets the stroke thickness to use for the outline of the needle cap.
	*/
	get needlePivotStrokeThickness() : number {
		return (this.i.needlePivotStrokeThickness as number);
	}
	@Input()
	set needlePivotStrokeThickness(v: number) {
		this.i.needlePivotStrokeThickness = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the scale as a value from 0 to 1 measured from the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get scaleEndExtent() : number {
		return (this.i.scaleEndExtent as number);
	}
	@Input()
	set scaleEndExtent(v: number) {
		this.i.scaleEndExtent = +v;
	}
	/**
	 * Gets or sets the position at which to put the labels as a value from 0 to 1, measured form the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get labelExtent() : number {
		return (this.i.labelExtent as number);
	}
	@Input()
	set labelExtent(v: number) {
		this.i.labelExtent = +v;
	}
	/**
	 * Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
	*/
	get labelInterval() : number {
		return (this.i.labelInterval as number);
	}
	@Input()
	set labelInterval(v: number) {
		this.i.labelInterval = +v;
	}
	/**
	 * Gets or sets the position at which to start rendering the major tickmarks as a value from 0 to 1, measured from the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get tickStartExtent() : number {
		return (this.i.tickStartExtent as number);
	}
	@Input()
	set tickStartExtent(v: number) {
		this.i.tickStartExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the major tickmarks as a value from 0 to 1, measured from the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get tickEndExtent() : number {
		return (this.i.tickEndExtent as number);
	}
	@Input()
	set tickEndExtent(v: number) {
		this.i.tickEndExtent = +v;
	}
	/**
	 * Gets or sets the stroke thickness to use when rendering ticks.
	*/
	get tickStrokeThickness() : number {
		return (this.i.tickStrokeThickness as number);
	}
	@Input()
	set tickStrokeThickness(v: number) {
		this.i.tickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the brush to use for the major tickmarks.
	*/
	get tickBrush() : string {
		return brushToString(this.i.tickBrush);
	}
	@Input()
	set tickBrush(v: string) {
		this.i.tickBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the label font.
	*/
	get fontBrush() : string {
		return brushToString(this.i.fontBrush);
	}
	@Input()
	set fontBrush(v: string) {
		this.i.fontBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the position at which to start rendering the minor tickmarks as a value from 0 to 1, measured from the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get minorTickStartExtent() : number {
		return (this.i.minorTickStartExtent as number);
	}
	@Input()
	set minorTickStartExtent(v: number) {
		this.i.minorTickStartExtent = +v;
	}
	/**
	 * Gets or sets the position at which to stop rendering the minor tickmarks as a value from 0 to 1, measured from the center of the gauge.
	 * Values further from zero than 1 can be used to make this extend further than the normal radius of the gauge.
	*/
	get minorTickEndExtent() : number {
		return (this.i.minorTickEndExtent as number);
	}
	@Input()
	set minorTickEndExtent(v: number) {
		this.i.minorTickEndExtent = +v;
	}
	/**
	 * Gets or sets the stroke thickness to use when rendering minor ticks.
	*/
	get minorTickStrokeThickness() : number {
		return (this.i.minorTickStrokeThickness as number);
	}
	@Input()
	set minorTickStrokeThickness(v: number) {
		this.i.minorTickStrokeThickness = +v;
	}
	/**
	 * Gets or sets the brush to use for the minor tickmarks.
	*/
	get minorTickBrush() : string {
		return brushToString(this.i.minorTickBrush);
	}
	@Input()
	set minorTickBrush(v: string) {
		this.i.minorTickBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the number of minor tickmarks to place between major tickmarks.
	*/
	get minorTickCount() : number {
		return (this.i.minorTickCount as number);
	}
	@Input()
	set minorTickCount(v: number) {
		this.i.minorTickCount = +v;
	}
	/**
	 * Gets or sets the brush to use to fill the background of the scale.
	*/
	get scaleBrush() : string {
		return brushToString(this.i.scaleBrush);
	}
	@Input()
	set scaleBrush(v: string) {
		this.i.scaleBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use to fill the backing of the gauge.
	*/
	get backingBrush() : string {
		return brushToString(this.i.backingBrush);
	}
	@Input()
	set backingBrush(v: string) {
		this.i.backingBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush to use for the outline of the backing.
	*/
	get backingOutline() : string {
		return brushToString(this.i.backingOutline);
	}
	@Input()
	set backingOutline(v: string) {
		this.i.backingOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness of the backing outline.
	*/
	get backingStrokeThickness() : number {
		return (this.i.backingStrokeThickness as number);
	}
	@Input()
	set backingStrokeThickness(v: number) {
		this.i.backingStrokeThickness = +v;
	}
	/**
	 * Gets or sets the outer extent of the gauge backing.
	*/
	get backingOuterExtent() : number {
		return (this.i.backingOuterExtent as number);
	}
	@Input()
	set backingOuterExtent(v: number) {
		this.i.backingOuterExtent = +v;
	}
	/**
	 * Gets or sets the over sweep angle to apply to the backing if it is displaying fitted (in degrees). Must be greater or equal to 0.
	*/
	get backingOversweep() : number {
		return (this.i.backingOversweep as number);
	}
	@Input()
	set backingOversweep(v: number) {
		this.i.backingOversweep = +v;
	}
	/**
	 * Gets or sets the extra degrees of sweep to apply to the scale background. Must be greater or equal to 0.
	*/
	get scaleOversweep() : number {
		return (this.i.scaleOversweep as number);
	}
	@Input()
	set scaleOversweep(v: number) {
		this.i.scaleOversweep = +v;
	}
	/**
	 * Gets or sets the oversweep shape to use for the excess fill area for the scale.
	*/
	get scaleOversweepShape() : RadialGaugeScaleOversweepShape {
		return this.i.scaleOversweepShape;
	}
	@Input()
	set scaleOversweepShape(v: RadialGaugeScaleOversweepShape) {
		this.i.scaleOversweepShape = ensureEnum<RadialGaugeScaleOversweepShape>(RadialGaugeScaleOversweepShape_$type, v);
	}
	/**
	 * Gets or sets the corner rounding radius to use for the fitted scale backings.
	*/
	get backingCornerRadius() : number {
		return (this.i.backingCornerRadius as number);
	}
	@Input()
	set backingCornerRadius(v: number) {
		this.i.backingCornerRadius = +v;
	}
	/**
	 * Gets or sets the inner extent of the gauge backing.
	*/
	get backingInnerExtent() : number {
		return (this.i.backingInnerExtent as number);
	}
	@Input()
	set backingInnerExtent(v: number) {
		this.i.backingInnerExtent = +v;
	}
	/**
	 * Gets or sets the type of shape to use for the backing of the gauge.
	*/
	get backingShape() : RadialGaugeBackingShape {
		return this.i.backingShape;
	}
	@Input()
	set backingShape(v: RadialGaugeBackingShape) {
		this.i.backingShape = ensureEnum<RadialGaugeBackingShape>(RadialGaugeBackingShape_$type, v);
	}
	/**
	 * Gets or sets the multiplying factor to apply to the normal radius of the gauge. 
	 * The radius of the gauge is defined by the minimum of the width and height of the control divided by 2.0. 
	 * This introduces a multiplicative factor to that value.
	*/
	get radiusMultiplier() : number {
		return (this.i.radiusMultiplier as number);
	}
	@Input()
	set radiusMultiplier(v: number) {
		this.i.radiusMultiplier = +v;
	}
	/**
	 * Gets or sets the strategy to use for omitting labels if the first and last label have the same value.
	*/
	get duplicateLabelOmissionStrategy() : RadialGaugeDuplicateLabelOmissionStrategy {
		return this.i.duplicateLabelOmissionStrategy;
	}
	@Input()
	set duplicateLabelOmissionStrategy(v: RadialGaugeDuplicateLabelOmissionStrategy) {
		this.i.duplicateLabelOmissionStrategy = ensureEnum<RadialGaugeDuplicateLabelOmissionStrategy>(RadialGaugeDuplicateLabelOmissionStrategy_$type, v);
	}
	/**
	 * Gets or sets whether needle dragging is enabled or not.
	*/
	get isNeedleDraggingEnabled() : boolean {
		return (this.i.isNeedleDraggingEnabled as boolean);
	}
	@Input()
	set isNeedleDraggingEnabled(v: boolean) {
		this.i.isNeedleDraggingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether the needle is constrained within the minimum and maximum value range during dragging.
	*/
	get isNeedleDraggingConstrained() : boolean {
		return (this.i.isNeedleDraggingConstrained as boolean);
	}
	@Input()
	set isNeedleDraggingConstrained(v: boolean) {
		this.i.isNeedleDraggingConstrained = ensureBool(v);
	}
	/**
	 * Gets or sets the font.
	*/
	get font() : string {
		return (this.i.font as string);
	}
	@Input()
	set font(v: string) {
		this.i.font = v;
	}
	/**
	 * Gets a value indicating whether the radial gauge is currently animating.
	*/
	get animating() : boolean {
		return (this.i.animating as boolean);
	}
	/**
	 * Gets the transition progress of the animation when the control is animating.
	*/
	get transitionProgress() : number {
		return (this.i.transitionProgress as number);
	}
	@Input()
	set transitionProgress(v: number) {
		this.i.transitionProgress = +v;
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
	 * Gets the actual pixel scaling ratio used to affect the pixel density of the control.
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
	        genericPrefix = toSpinal("RadialGaugeComponent");
		
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
	 * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
	
	* @param value  * The value to scale.
	*/
	public scaleValue(value: number) : number {
		let iv = this.i.scaleValue(value);
		return (iv);
	}
	/**
	 * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
	
	* @param angle  * The angle in radians to unscale to a value.
	*/
	public unscaleValue(angle: number) : number {
		let iv = this.i.unscaleValue(angle);
		return (iv);
	}
	/**
	 * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
	
	* @param point  * The point for which to retrieve the associated value.
	*/
	public getValueForPoint(point: IgPoint) : number {
		let iv = this.i.getValueForPoint(toPoint(point));
		return (iv);
	}
	public getPointForValue(value: number, extent: number) : IgPoint {
		let iv = this.i.getPointForValue(value, extent);
		return fromPoint(iv);
	}
	public styleUpdated() {
		this.i.styleUpdated();
	}
	public needleContainsPoint(point: IgPoint, isFinger: boolean) : boolean {
		let iv = this.i.needleContainsPoint(toPoint(point), isFinger);
		return (iv);
	}
	/**
	 * Called by the UI framework to provide a UI container for rendering this control.
	
	* @param container  * The UI container element.
	*/
	public provideContainer(container: any) {
		this.i.provideContainer(container);
	}
	public containerResized() {
		this.i.containerResized();
	}
	/**
	 * Use to force the radial gauge to finish any deferred work before printing or evaluating its visual.
	 * This should only be called if the visual of the radial gauge needs to be synchronously saved or evaluated. 
	 * Calling this method too often will hinder the performance of the radial gauge.
	
	*/
	public flush() {
		this.i.flush();
	}
	/**
	 * Returns visuals as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}

    	private _formatLabel: EventEmitter<{ sender: any, args: IgxFormatRadialGaugeLabelEventArgs}> = null;
	/**
	 * Event which is raised when a label of the gauge is formatted.
	 * Function takes first argument null and second argument ui.
	 * Use ui.owner to obtain reference to gauge widget.
	 * Use ui.actualMinimumValue to obtain the minimum value of gauge scale.
	 * Use ui.actualMaximumValue to obtain the maximum value of gauge scale.
	 * Use ui.startAngle to obtain the starting angle of gauge scale.
	 * Use ui.endAngle to obtain the ending angle of gauge scale.
	 * Use ui.angle to obtain the angle on the gauge scale at which the label will be located.
	 * Use ui.value to obtain the value on the gauge scale associated with the label.
	 * Use ui.label to obtain the string value of the label.
	*/
	@Output()
	get formatLabel(): EventEmitter<{ sender: any, args: IgxFormatRadialGaugeLabelEventArgs}> {
		if (this._formatLabel == null) {
			this._formatLabel = new EventEmitter<{sender: any, args: IgxFormatRadialGaugeLabelEventArgs}>();
			this.i.formatLabel = delegateCombine(this.i.formatLabel, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFormatRadialGaugeLabelEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeFormatLabel) {
	                        (this as any).beforeFormatLabel(this, outerArgs);
	                    }
					this._formatLabel.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._formatLabel;
	}
	private _alignLabel: EventEmitter<{ sender: any, args: IgxAlignRadialGaugeLabelEventArgs}> = null;
	/**
	 * Event which is raised when a label of the gauge is aligned along the scale.
	 * Function takes first argument null and second argument ui.
	 * Use ui.owner to obtain reference to gauge widget.
	 * Use ui.actualMinimumValue to obtain the minimum value of gauge scale.
	 * Use ui.actualMaximumValue to obtain the maximum value of gauge scale.
	 * Use ui.startAngle to obtain the starting angle of gauge scale.
	 * Use ui.endAngle to obtain the ending angle of gauge scale.
	 * Use ui.angle to obtain the angle on the gauge scale at which the label will be located.
	 * Use ui.value to obtain the value on the gauge scale associated with the label.
	 * Use ui.label to obtain the string value of the label.
	 * Use ui.width to obtain the width of the label.
	 * Use ui.height to obtain the height of the label.
	 * Use ui.offsetX to obtain the X offset of the label on the gauge scale.
	 * Use ui.offsetY to obtain the Y offset of the label on the gauge scale.
	*/
	@Output()
	get alignLabel(): EventEmitter<{ sender: any, args: IgxAlignRadialGaugeLabelEventArgs}> {
		if (this._alignLabel == null) {
			this._alignLabel = new EventEmitter<{sender: any, args: IgxAlignRadialGaugeLabelEventArgs}>();
			this.i.alignLabel = delegateCombine(this.i.alignLabel, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxAlignRadialGaugeLabelEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeAlignLabel) {
	                        (this as any).beforeAlignLabel(this, outerArgs);
	                    }
					this._alignLabel.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._alignLabel;
	}
}
