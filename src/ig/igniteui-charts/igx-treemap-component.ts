import { Type, Output, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterContentInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxRectChangedEventArgs } from 'igniteui-core/igx-rect-changed-event-args';
import { Treemap } from "./Treemap";
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher, fromBrushCollection, toBrushCollection } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { AngularRenderer } from 'igniteui-core/angular-renderer';
import { delegateCombine } from 'igniteui-core/type';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { IEnumerable } from 'igniteui-core/type';
import { IgxTreemapNodeStyleMappingComponent } from './igx-treemap-node-style-mapping-component';
import { TreemapNodeStyleMapping } from './TreemapNodeStyleMapping';
import { IgxTreemapNodeStyleMappingCollection } from './igx-treemap-node-style-mapping-collection';
import { CollectionAdapter } from 'igniteui-core/componentUtil';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { TreemapFillScaleMode, TreemapFillScaleMode_$type } from 'igniteui-charts/TreemapFillScaleMode';
import { IgxTreemapNodeStylingEventArgs } from 'igniteui-charts/igx-treemap-node-styling-event-args';
import { TreemapOrientation, TreemapOrientation_$type } from './TreemapOrientation';
import { TreemapLayoutType, TreemapLayoutType_$type } from './TreemapLayoutType';
import { IgxTreemapNodePointerEventArgs } from './igx-treemap-node-pointer-event-args';
import { TreemapHeaderDisplayMode, TreemapHeaderDisplayMode_$type } from './TreemapHeaderDisplayMode';
import { HorizontalAlignment, HorizontalAlignment_$type } from 'igniteui-core/HorizontalAlignment';
import { VerticalAlignment, VerticalAlignment_$type } from 'igniteui-core/VerticalAlignment';
import { TreemapLabelHorizontalFitMode, TreemapLabelHorizontalFitMode_$type } from './TreemapLabelHorizontalFitMode';
import { TreemapLabelVerticalFitMode, TreemapLabelVerticalFitMode_$type } from './TreemapLabelVerticalFitMode';


export const IgxTreemapComponent_PROVIDERS = [];



@Component({
	selector: 'igx-treemap',
	template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxTreemapComponent_PROVIDERS,
    host: { 'class': 'ig-treemap igx-treemap' },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxTreemapComponent implements AfterContentInit {
	container: Element;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._treeMap.notifySizeChanged();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._treeMap.notifySizeChanged();
    }
    get width(): string {
        return this._width;
    }

    @ViewChild("dynamicContent", { read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    @ContentChildren(IgxTreemapNodeStyleMappingComponent) contentStyleMappings: QueryList<IgxTreemapNodeStyleMappingComponent>;
    /**
    * The style mappings actually present in the chart. Do not directly modify this array.
    * This array's contents can be modified by causing Angular to reproject the child content.
    * Or adding and removing stye mappings from the manual style mapping collection on the styleMappings property.
    */
    actualStyleMappings: IgxTreemapNodeStyleMappingComponent[] = [];
    private _styleMappings: IgxTreemapNodeStyleMappingCollection = null;
    private _styleMappingsAdapter: CollectionAdapter<IgxTreemapNodeStyleMappingComponent, TreemapNodeStyleMapping> = null;
	/**
	 * A collection or manually added axes for the chart.
	*/
    get styleMappings(): IgxTreemapNodeStyleMappingCollection {
        if (this._styleMappings === null) {
            let coll = new IgxTreemapNodeStyleMappingCollection();
            let inner: SyncableObservableCollection$2<IgxTreemapNodeStyleMappingComponent, TreemapNodeStyleMapping> = (<any>coll)._innerColl;
            inner.addListener((sender, e) => {
                switch (e.action) {
                    case NotifyCollectionChangedAction.Add:
                        this._styleMappingsAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Remove:
                        this._styleMappingsAdapter.removeManualItemAt(e.oldStartingIndex);
                        break;
                    case NotifyCollectionChangedAction.Replace:
                        this._styleMappingsAdapter.removeManualItemAt(e.oldStartingIndex);
                        this._styleMappingsAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Reset:
                        this._styleMappingsAdapter.clearManualItems();
                        break;
                }
            });
            this._styleMappings = coll;
        }
        return this._styleMappings;
    }


    private _wrapper: AngularRenderer = null;
    private _root: Element = null;

	constructor(private renderer: Renderer2, 
		private _elRef: ViewContainerRef,
		 private ngZone: NgZone, 
		 private injector: Injector,
		 private componentFactoryResolver: ComponentFactoryResolver) {
		
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._implementation = this.createImplementation();
        if (renderer) {
            this.container = renderer.createElement("div");
            renderer.appendChild(_elRef.element.nativeElement, this.container);
            renderer.setStyle(this.container, "display", "block");
            renderer.setStyle(this.container, "width", "100%");
            renderer.setStyle(this.container, "height", "100%");
        }
		var root: any;
		root = this.container;
		if (this.container != null) {
			root = this.container;
        }
        if (root && root.nativeElement) {
            root = root.nativeElement;
        }
        this._root = root;
        var treemap = this.i;
        this._treeMap = <Treemap>treemap;

        this._styleMappingsAdapter = new CollectionAdapter<IgxTreemapNodeStyleMappingComponent, TreemapNodeStyleMapping>(
            [],
            this.i.styleMappings,
            this.actualStyleMappings,
            (c) => c.i,
            (i) => {
                if (this._root && this._root.parentElement) {
                    (i as any)._styling(this._root, this, this);
                }
            },
            (i) => { }
        );


        if (renderer) {
            var ren: AngularRenderer = new AngularRenderer(
                root, this.renderer, window.document,
                this.ngZone, true,
                DataChartStylingDefaults);
            this._wrapper = ren;
            treemap.provideContainer(ren);
            treemap.notifySizeChanged();

            ren.addSizeWatcher(() => {
                this._treeMap.notifySizeChanged();
            });
        }
	}

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
	}

    ngOnDestroy() {
        this._treeMap.destroy();
        this._wrapper.destroy();
    }

	
	private _implementation: Treemap = null;

    ngAfterContentInit(): void {
        this._styleMappingsAdapter.updateQuery(this.contentStyleMappings);

        this._styling(this._root, this);
        if (this.actualStyleMappings && this.actualStyleMappings.length > 0) {
            var currStyleMapping = this.actualStyleMappings;
            for (var i = 0; i < currStyleMapping.length; i++) {
                (currStyleMapping[i] as any)._styling(this._root, this, this);
            }
        }

        this.i.notifySizeChanged();
        this.updateStyle();
	}

	protected createImplementation() {
		return new Treemap();
	}

	public get i() : Treemap {
		return this._implementation;
	}

	private _treeMap: Treemap;

   
		/**
	 * Gets or sets path to use to get the values from the items.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * Gets or sets the root title to use for breadcrumbs.
	*/
	get rootTitle() : string {
		return (this.i.rootTitle as string);
	}
	@Input()
	set rootTitle(v: string) {
		this.i.rootTitle = v;
	}
	/**
	 * Gets or sets the root title to use for breadcrumbs.
	*/
	get breadcrumbSequence() : string {
		return (this.i.breadcrumbSequence as string);
	}
	@Input()
	set breadcrumbSequence(v: string) {
		this.i.breadcrumbSequence = v;
	}
	/**
	 * Gets or sets the path to use to get the Parent of the items.
	*/
	get parentIdMemberPath() : string {
		return (this.i.parentIdMemberPath as string);
	}
	@Input()
	set parentIdMemberPath(v: string) {
		this.i.parentIdMemberPath = v;
	}
	/**
	 * Gets or sets the path to use to get the Label of the items.
	*/
	get labelMemberPath() : string {
		return (this.i.labelMemberPath as string);
	}
	@Input()
	set labelMemberPath(v: string) {
		this.i.labelMemberPath = v;
	}
	/**
	 * Gets or sets the path to use to get the custom value of the items.
	*/
	get customValueMemberPath() : string {
		return (this.i.customValueMemberPath as string);
	}
	@Input()
	set customValueMemberPath(v: string) {
		this.i.customValueMemberPath = v;
	}
	/**
	 * Gets or sets the path to use to get the id of the items.
	*/
	get idMemberPath() : string {
		return (this.i.idMemberPath as string);
	}
	@Input()
	set idMemberPath(v: string) {
		this.i.idMemberPath = v;
	}
	/**
	 * Gets or sets the (possibly hierarchical) data to assign to the TreeMap.
	*/
	get dataSource() : any[] {
		return (this.i.dataSource as any) as any[];
	}
	@Input()
	set dataSource(v: any[]) {
		this.i.dataSource = (v as any) as IEnumerable;
	}
	/**
	 * Gets or sets brushes to use for the fill scale.
	*/
	get fillBrushes() : string[] {
		return fromBrushCollection(this.i.fillBrushes);
	}
	@Input()
	set fillBrushes(v: string[]) {
		this.i.fillBrushes = toBrushCollection(v);
	}
	/**
	 * Gets or sets mode to use for the fill scale.
	*/
	get fillScaleMode() : TreemapFillScaleMode {
		return this.i.fillScaleMode;
	}
	@Input()
	set fillScaleMode(v: TreemapFillScaleMode) {
		this.i.fillScaleMode = ensureEnum<TreemapFillScaleMode>(TreemapFillScaleMode_$type, v);
	}
	/**
	 * Gets or sets whether the fill scale is logarithmic.
	*/
	get isFillScaleLogarithmic() : boolean {
		return (this.i.isFillScaleLogarithmic as boolean);
	}
	@Input()
	set isFillScaleLogarithmic(v: boolean) {
		this.i.isFillScaleLogarithmic = ensureBool(v);
	}
	/**
	 * Gets or sets the logarithm base to use if the fill scale is logarithmic.
	*/
	get fillScaleLogarithmBase() : number {
		return (this.i.fillScaleLogarithmBase as number);
	}
	@Input()
	set fillScaleLogarithmBase(v: number) {
		this.i.fillScaleLogarithmBase = +v;
	}
	/**
	 * Gets or sets the minimum value to use for the fill scale.
	*/
	get fillScaleMinimumValue() : number {
		return (this.i.fillScaleMinimumValue as number);
	}
	@Input()
	set fillScaleMinimumValue(v: number) {
		this.i.fillScaleMinimumValue = +v;
	}
	/**
	 * Gets or sets the maximum value to use for the fill scale.
	*/
	get fillScaleMaximumValue() : number {
		return (this.i.fillScaleMaximumValue as number);
	}
	@Input()
	set fillScaleMaximumValue(v: number) {
		this.i.fillScaleMaximumValue = +v;
	}
	/**
	 * Gets or sets the vertical fit mode to use for the node labels.
	*/
	get labelVerticalFitMode() : TreemapLabelVerticalFitMode {
		return this.i.labelVerticalFitMode;
	}
	@Input()
	set labelVerticalFitMode(v: TreemapLabelVerticalFitMode) {
		this.i.labelVerticalFitMode = ensureEnum<TreemapLabelVerticalFitMode>(TreemapLabelVerticalFitMode_$type, v);
	}
	/**
	 * Gets or sets the horizontal fit mode to use for the node labels.
	*/
	get labelHorizontalFitMode() : TreemapLabelHorizontalFitMode {
		return this.i.labelHorizontalFitMode;
	}
	@Input()
	set labelHorizontalFitMode(v: TreemapLabelHorizontalFitMode) {
		this.i.labelHorizontalFitMode = ensureEnum<TreemapLabelHorizontalFitMode>(TreemapLabelHorizontalFitMode_$type, v);
	}
	/**
	 * Gets or sets the background to use for the overlay header when it is hovered.
	*/
	get overlayHeaderHoverBackground() : string {
		return brushToString(this.i.overlayHeaderHoverBackground);
	}
	@Input()
	set overlayHeaderHoverBackground(v: string) {
		this.i.overlayHeaderHoverBackground = stringToBrush(v);
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
	 * Gets or sets the background to use for the overlay header.
	*/
	get overlayHeaderBackground() : string {
		return brushToString(this.i.overlayHeaderBackground);
	}
	@Input()
	set overlayHeaderBackground(v: string) {
		this.i.overlayHeaderBackground = stringToBrush(v);
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
	 * Gets or sets the dark text color to use for the header.
	*/
	get headerDarkTextColor() : string {
		return brushToString(this.i.headerDarkTextColor);
	}
	@Input()
	set headerDarkTextColor(v: string) {
		this.i.headerDarkTextColor = stringToBrush(v);
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
	 * Gets or sets the dark text color to use for the nodes.
	*/
	get darkTextColor() : string {
		return brushToString(this.i.darkTextColor);
	}
	@Input()
	set darkTextColor(v: string) {
		this.i.darkTextColor = stringToBrush(v);
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
	 * Gets or sets the dark text color to use for the header when hovered.
	*/
	get headerHoverDarkTextColor() : string {
		return brushToString(this.i.headerHoverDarkTextColor);
	}
	@Input()
	set headerHoverDarkTextColor(v: string) {
		this.i.headerHoverDarkTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the font to use for content nodes
	*/
	get textStyle() : string {
	                                    if (this.i.textStyle == null) {
	                                        return null;
	                                    }
		return this.i.textStyle.fontString;
	}
	@Input()
	set textStyle(v: string) {
		let fi = new FontInfo();
	                                        fi.fontString = v;
	                                        this.i.textStyle = fi;
	}
	/**
	 * Gets or sets the font to use for header nodes
	*/
	get headerTextStyle() : string {
	                                    if (this.i.headerTextStyle == null) {
	                                        return null;
	                                    }
		return this.i.headerTextStyle.fontString;
	}
	@Input()
	set headerTextStyle(v: string) {
		let fi = new FontInfo();
	                                        fi.fontString = v;
	                                        this.i.headerTextStyle = fi;
	}
	/**
	 * Gets or sets the font to use for header nodes
	*/
	get headerDisplayMode() : TreemapHeaderDisplayMode {
		return this.i.headerDisplayMode;
	}
	@Input()
	set headerDisplayMode(v: TreemapHeaderDisplayMode) {
		this.i.headerDisplayMode = ensureEnum<TreemapHeaderDisplayMode>(TreemapHeaderDisplayMode_$type, v);
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
	 * Gets or sets the bottom margin to use for the header.
	*/
	get headerLabelBottomMargin() : number {
		return (this.i.headerLabelBottomMargin as number);
	}
	@Input()
	set headerLabelBottomMargin(v: number) {
		this.i.headerLabelBottomMargin = +v;
	}
	/**
	 * Gets or sets the left margin to use for the overlay header.
	*/
	get overlayHeaderLabelLeftMargin() : number {
		return (this.i.overlayHeaderLabelLeftMargin as number);
	}
	@Input()
	set overlayHeaderLabelLeftMargin(v: number) {
		this.i.overlayHeaderLabelLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin to use for the overlay header.
	*/
	get overlayHeaderLabelTopMargin() : number {
		return (this.i.overlayHeaderLabelTopMargin as number);
	}
	@Input()
	set overlayHeaderLabelTopMargin(v: number) {
		this.i.overlayHeaderLabelTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin to use for the overlay header.
	*/
	get overlayHeaderLabelRightMargin() : number {
		return (this.i.overlayHeaderLabelRightMargin as number);
	}
	@Input()
	set overlayHeaderLabelRightMargin(v: number) {
		this.i.overlayHeaderLabelRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin to use for the overlay header.
	*/
	get overlayHeaderLabelBottomMargin() : number {
		return (this.i.overlayHeaderLabelBottomMargin as number);
	}
	@Input()
	set overlayHeaderLabelBottomMargin(v: number) {
		this.i.overlayHeaderLabelBottomMargin = +v;
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
	 * Gets or sets the left margin to use for the parent nodes.
	*/
	get parentNodeLeftMargin() : number {
		return (this.i.parentNodeLeftMargin as number);
	}
	@Input()
	set parentNodeLeftMargin(v: number) {
		this.i.parentNodeLeftMargin = +v;
	}
	/**
	 * Gets or sets the top margin to use for the parent nodes.
	*/
	get parentNodeTopMargin() : number {
		return (this.i.parentNodeTopMargin as number);
	}
	@Input()
	set parentNodeTopMargin(v: number) {
		this.i.parentNodeTopMargin = +v;
	}
	/**
	 * Gets or sets the right margin to use for the parent nodes.
	*/
	get parentNodeRightMargin() : number {
		return (this.i.parentNodeRightMargin as number);
	}
	@Input()
	set parentNodeRightMargin(v: number) {
		this.i.parentNodeRightMargin = +v;
	}
	/**
	 * Gets or sets the bottom margin to use for the parent nodes.
	*/
	get parentNodeBottomMargin() : number {
		return (this.i.parentNodeBottomMargin as number);
	}
	@Input()
	set parentNodeBottomMargin(v: number) {
		this.i.parentNodeBottomMargin = +v;
	}
	/**
	 * Gets or sets the left padding to use for the parent nodes.
	*/
	get parentNodeLeftPadding() : number {
		return (this.i.parentNodeLeftPadding as number);
	}
	@Input()
	set parentNodeLeftPadding(v: number) {
		this.i.parentNodeLeftPadding = +v;
	}
	/**
	 * Gets or sets the top padding to use for the parent nodes.
	*/
	get parentNodeTopPadding() : number {
		return (this.i.parentNodeTopPadding as number);
	}
	@Input()
	set parentNodeTopPadding(v: number) {
		this.i.parentNodeTopPadding = +v;
	}
	/**
	 * Gets or sets the right padding to use for the parent nodes.
	*/
	get parentNodeRightPadding() : number {
		return (this.i.parentNodeRightPadding as number);
	}
	@Input()
	set parentNodeRightPadding(v: number) {
		this.i.parentNodeRightPadding = +v;
	}
	/**
	 * Gets or sets the bottom padding to use for the parent nodes.
	*/
	get parentNodeBottomPadding() : number {
		return (this.i.parentNodeBottomPadding as number);
	}
	@Input()
	set parentNodeBottomPadding(v: number) {
		this.i.parentNodeBottomPadding = +v;
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
	/**
	 * Gets or sets the orientation to use for the stripped and slice and dice layout types.
	*/
	get layoutOrientation() : TreemapOrientation {
		return this.i.layoutOrientation;
	}
	@Input()
	set layoutOrientation(v: TreemapOrientation) {
		this.i.layoutOrientation = ensureEnum<TreemapOrientation>(TreemapOrientation_$type, v);
	}
	/**
	 * Gets or sets the type of layout to use for the nodes.
	*/
	get layoutType() : TreemapLayoutType {
		return this.i.layoutType;
	}
	@Input()
	set layoutType(v: TreemapLayoutType) {
		this.i.layoutType = ensureEnum<TreemapLayoutType>(TreemapLayoutType_$type, v);
	}
	/**
	 * Gets or sets the minimum size (width or height) to display a node.
	*/
	get minimumDisplaySize() : number {
		return (this.i.minimumDisplaySize as number);
	}
	@Input()
	set minimumDisplaySize(v: number) {
		this.i.minimumDisplaySize = +v;
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
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
	}
	/**
	 * Gets or sets the scaling value used to affect the pixel density of the control while it is animating.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get interactionPixelScalingRatio() : number {
		return (this.i.interactionPixelScalingRatio as number);
	}
	@Input()
	set interactionPixelScalingRatio(v: number) {
		this.i.interactionPixelScalingRatio = +v;
	}
	/**
	 * Gets or sets the resolved scaling value used to affect the pixel density of the control while it is animating.
	 * A higher scaling ratio will produce crisper visuals at the expense of memory.  Lower values will cause the control
	 * to appear blurry.
	*/
	get actualInteractionPixelScalingRatio() : number {
		return (this.i.actualInteractionPixelScalingRatio as number);
	}
	@Input()
	set actualInteractionPixelScalingRatio(v: number) {
		this.i.actualInteractionPixelScalingRatio = +v;
	}
	get animating() : boolean {
		return (this.i.animating as boolean);
	}
	/**
	 * Gets or sets the item to drill to in the treemap.
	*/
	get focusItem() : any {
		return this.i.focusItem as any;
	}
	@Input()
	set focusItem(v: any) {
		this.i.focusItem = v;
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
	        genericPrefix = toSpinal("TreemapComponent");
		
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
	 * Returns visuals as a serialized string.
	
	*/
	public exportSerializedVisualData() : string {
		let iv = this.i.exportSerializedVisualData();
		return (iv);
	}
	public markDirty() {
		this.i.markDirty();
	}
	public onDetachedFromUI() {
		this.i.onDetachedFromUI();
	}
	public onAttachedToUI() {
		this.i.onAttachedToUI();
	}
	public flush() {
		this.i.flush();
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Manually notifies the treemap's data source that the data it has bound to has been cleared and needs to be re-examined.
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

    	private _nodeStyling: EventEmitter<{ sender: any, args: IgxTreemapNodeStylingEventArgs}> = null;
	/**
	 * Fired when a node is being styled. Provides an opportunity to customize node styling.
	*/
	@Output()
	get nodeStyling(): EventEmitter<{ sender: any, args: IgxTreemapNodeStylingEventArgs}> {
		if (this._nodeStyling == null) {
			this._nodeStyling = new EventEmitter<{sender: any, args: IgxTreemapNodeStylingEventArgs}>();
			this.i.nodeStyling = delegateCombine(this.i.nodeStyling, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxTreemapNodeStylingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeNodeStyling) {
	                        (this as any).beforeNodeStyling(this, outerArgs);
	                    }
					this._nodeStyling.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._nodeStyling;
	}
	private _nodePointerOver: EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> = null;
	/**
	 * Fired with the pointer is moving over a node.
	*/
	@Output()
	get nodePointerOver(): EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> {
		if (this._nodePointerOver == null) {
			this._nodePointerOver = new EventEmitter<{sender: any, args: IgxTreemapNodePointerEventArgs}>();
			this.i.nodePointerOver = delegateCombine(this.i.nodePointerOver, (o, e) => {
				let outerArgs = new IgxTreemapNodePointerEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeNodePointerOver) {
	                            (this as any).beforeNodePointerOver(this, outerArgs);
	                        }
					    this._nodePointerOver.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._nodePointerOver;
	}
	private _nodePointerEnter: EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> = null;
	/**
	 * Fired when the pointer enters a node.
	*/
	@Output()
	get nodePointerEnter(): EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> {
		if (this._nodePointerEnter == null) {
			this._nodePointerEnter = new EventEmitter<{sender: any, args: IgxTreemapNodePointerEventArgs}>();
			this.i.nodePointerEnter = delegateCombine(this.i.nodePointerEnter, (o, e) => {
				let outerArgs = new IgxTreemapNodePointerEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeNodePointerEnter) {
	                            (this as any).beforeNodePointerEnter(this, outerArgs);
	                        }
					    this._nodePointerEnter.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._nodePointerEnter;
	}
	private _nodePointerLeave: EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> = null;
	/**
	 * Fired when the pointer leaved a node.
	*/
	@Output()
	get nodePointerLeave(): EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> {
		if (this._nodePointerLeave == null) {
			this._nodePointerLeave = new EventEmitter<{sender: any, args: IgxTreemapNodePointerEventArgs}>();
			this.i.nodePointerLeave = delegateCombine(this.i.nodePointerLeave, (o, e) => {
				let outerArgs = new IgxTreemapNodePointerEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeNodePointerLeave) {
	                            (this as any).beforeNodePointerLeave(this, outerArgs);
	                        }
					    this._nodePointerLeave.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._nodePointerLeave;
	}
	private _nodePointerPressed: EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> = null;
	/**
	 * Fired when the pointer is pressed on a node.
	*/
	@Output()
	get nodePointerPressed(): EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> {
		if (this._nodePointerPressed == null) {
			this._nodePointerPressed = new EventEmitter<{sender: any, args: IgxTreemapNodePointerEventArgs}>();
			this.i.nodePointerPressed = delegateCombine(this.i.nodePointerPressed, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxTreemapNodePointerEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeNodePointerPressed) {
	                        (this as any).beforeNodePointerPressed(this, outerArgs);
	                    }
					this._nodePointerPressed.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._nodePointerPressed;
	}
	private _nodePointerReleased: EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> = null;
	/**
	 * Fired when the pointer is released on a node.
	*/
	@Output()
	get nodePointerReleased(): EventEmitter<{ sender: any, args: IgxTreemapNodePointerEventArgs}> {
		if (this._nodePointerReleased == null) {
			this._nodePointerReleased = new EventEmitter<{sender: any, args: IgxTreemapNodePointerEventArgs}>();
			this.i.nodePointerReleased = delegateCombine(this.i.nodePointerReleased, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxTreemapNodePointerEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeNodePointerReleased) {
	                        (this as any).beforeNodePointerReleased(this, outerArgs);
	                    }
					this._nodePointerReleased.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._nodePointerReleased;
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
