import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { ChartHitTestMode, ChartHitTestMode_$type } from "./ChartHitTestMode";
import { WindowResponse, WindowResponse_$type } from "./WindowResponse";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { InteractionState, InteractionState_$type } from "igniteui-core/InteractionState";
import { ModifierKeys, ModifierKeys_$type } from "igniteui-core/ModifierKeys";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { IgxChartCursorEventArgs } from "./igx-chart-cursor-event-args";
import { IgxDataChartMouseButtonEventArgs } from "./igx-data-chart-mouse-button-event-args";
import { IgxChartMouseEventArgs } from "./igx-chart-mouse-event-args";
import { IgxRectChangedEventArgs } from "igniteui-core/igx-rect-changed-event-args";
import { IgxSeriesComponent } from "./igx-series-component";
import { SeriesViewer } from "./SeriesViewer";
import { TypeRegistrar } from "igniteui-core/type";
import { NamePatcher, fromPoint, toPoint, ensureBool, fromRect, toRect, ensureEnum, brushToString, stringToBrush, toSpinal, initializePropertiesFromCss } from "igniteui-core/componentUtil";

/**
 * Represents a control for viewing series objects.
*/
export const IgxSeriesViewerComponent_PROVIDERS = [];
export abstract class IgxSeriesViewerComponent implements OnInit
{

protected createImplementation() : SeriesViewer
{
	return null;
}
ngOnInit() {
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : SeriesViewer {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxSeriesViewerComponent {
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
	 * Gets or sets the cross hair point (in world coordinates)
	 * Either or both of the crosshair point's X and Y may be set to double.NaN, in which
	 * case the relevant crosshair line is hidden.
	* 
	* The `crosshairPoint` property is used to gets/sets the cross hair point (in world coordinates).
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     crosshairVisibility="visible"
	*     crosshairPoint={x:.8,y:.2}>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.crosshairPoint = {x:.8,y:.2};
	* ```
	*/
	get crosshairPoint() : IgPoint {
		return fromPoint(this.i.crosshairPoint);
	}
	@Input()
	set crosshairPoint(v: IgPoint) {
		this.i.crosshairPoint = toPoint(v);
	}
	/**
	 * Gets or sets whether the series animations should be allowed when a range change has been detected on an axis.
	* 
	* `animateSeriesWhenAxisRangeChanges` is a Boolean property to override the default behavior in which series do not animate if an axis range changes.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     animateSeriesWhenAxisRangeChanges=true>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         transitionInMode="accordionFromBottom"
	*         isTransitionInEnabled=true
	*         transitionInSpeedType="indexScaled"
	*         transitionDuration=1000>
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.animateSeriesWhenAxisRangeChanges = true;
	* ```
	*/
	get animateSeriesWhenAxisRangeChanges() : boolean {
		return (this.i.animateSeriesWhenAxisRangeChanges as boolean);
	}
	@Input()
	set animateSeriesWhenAxisRangeChanges(v: boolean) {
		this.i.animateSeriesWhenAxisRangeChanges = ensureBool(v);
	}
	/**
	 * Gets the viewport rectangle associated with the SeriesViewer, the physical dimensions of the plot area.
	* 
	* ```ts
	* let viewPortRect: IgxRect = this.chart.viewportRect;
	* ```
	*/
	get viewportRect() : IgRect {
		return fromRect(this.i.viewportRect);
	}
	/**
	 * Gets the EffectiveViewport rectangle, representing the effective viewport area after margins have been subtracted.
	* 
	*  ``ts
	* let viewport: IgxRect = this.chart.effectiveViewport;
	* 
	* ```
	* 
	* ```
	*/
	get effectiveViewport() : IgRect {
		return fromRect(this.i.effectiveViewport);
	}
	@Input()
	set effectiveViewport(v: IgRect) {
		this.i.effectiveViewport = toRect(v);
	}
	/**
	 * Represents the subset area within the viewport into which content should be mapped.
	 * This is the projection of the current EffectiveViewport into the viewport at current zoom level.
	* 
	* ```ts
	* let contentViewport: IgxRect = this.chart.contentViewport;
	* ```
	*/
	get contentViewport() : IgRect {
		return fromRect(this.i.contentViewport);
	}
	/**
	 * A rectangle representing the portion of the SeriesViewer currently in view.
	 * A rectangle at X=0, Y=0 with a Height and Width of 1 implies the entire plotting area is in view.  A Height and Width of .5 would imply that the view is halfway zoomed in.
	* 
	* You can set the `windowRect` to zoom in on an area of interest in the chart.
	* 
	* ```ts
	* this.chart.windowRect = {left:0, top:1, width: .5, height: .5};
	* ```
	*/
	get windowRect() : IgRect {
		return fromRect(this.i.windowRect);
	}
	@Input()
	set windowRect(v: IgRect) {
		this.i.windowRect = toRect(v);
	}
	/**
	 * Gets or sets whether the series viewer should use cached tiles during zooms rather than the default live content.
	*/
	get useTiledZooming() : boolean {
		return (this.i.useTiledZooming as boolean);
	}
	@Input()
	set useTiledZooming(v: boolean) {
		this.i.useTiledZooming = ensureBool(v);
	}
	/**
	 * Gets or sets whether the series viewer should prefer selecting higher resolution tiles over lower resolution tiles when performing tile zooming. Setting this to true will lower performance but increase quality.
	*/
	get preferHigherResolutionTiles() : boolean {
		return (this.i.preferHigherResolutionTiles as boolean);
	}
	@Input()
	set preferHigherResolutionTiles(v: boolean) {
		this.i.preferHigherResolutionTiles = ensureBool(v);
	}
	/**
	 * Gets or sets the maximum number of zoom tiles that the series viewer should cache while in tiled zooming mode.
	*/
	get zoomTileCacheSize() : number {
		return (this.i.zoomTileCacheSize as number);
	}
	@Input()
	set zoomTileCacheSize(v: number) {
		this.i.zoomTileCacheSize = +v;
	}
	/**
	 * Gets or sets the duration the highlighting/de-highlighting effects.
	* 
	* The `highlightingTransitionDuration` property is used to set the time for highlighting transition in milliseconds .
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	* 	HighlightingTransitionDuration=500 >
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value" >
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* chart.HighlightingTransitionDuration=500;
	* ```
	*/
	get highlightingTransitionDuration() : number {
		return (this.i.highlightingTransitionDuration as number);
	}
	@Input()
	set highlightingTransitionDuration(v: number) {
		this.i.highlightingTransitionDuration = +v;
	}
	/**
	 * Gets or sets the whether the series viewer can allow the page to pan if a control pan is not possible in the requested direction.
	*/
	get isPagePanningAllowed() : boolean {
		return (this.i.isPagePanningAllowed as boolean);
	}
	@Input()
	set isPagePanningAllowed(v: boolean) {
		this.i.isPagePanningAllowed = ensureBool(v);
	}
	/**
	 * Determines the method of hit testing used when mousing over elements in the chart.
	* 
	* ```ts
	* this.chart.contentHitTestMode = ChartHitTestMode.Computational;
	* ```
	*/
	get contentHitTestMode() : ChartHitTestMode {
		return this.i.contentHitTestMode;
	}
	@Input()
	set contentHitTestMode(v: ChartHitTestMode) {
		this.i.contentHitTestMode = ensureEnum<ChartHitTestMode>(ChartHitTestMode_$type, v);
	}
	/**
	 * Resolved method of hit testing used when the pointer is over elements in the chart.
	* 
	* ```ts
	* let actualContentHitTestMode: ChartHitTestMode  =this.chart.actualContentHitTestMode;
	* ```
	*/
	get actualContentHitTestMode() : ChartHitTestMode {
		return this.i.actualContentHitTestMode;
	}
	@Input()
	set actualContentHitTestMode(v: ChartHitTestMode) {
		this.i.actualContentHitTestMode = ensureEnum<ChartHitTestMode>(ChartHitTestMode_$type, v);
	}
	/**
	 * Gets or sets whether all surface interactions with the plot area should be disabled.
	* 
	* The `isSurfaceInteractionDisabled` property is used to enable/disable interactions with the plot surface.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isSurfaceInteractionDisabled=true>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* chart.isSurfaceInteractionDisabled=true;
	* ```
	*/
	get isSurfaceInteractionDisabled() : boolean {
		return (this.i.isSurfaceInteractionDisabled as boolean);
	}
	@Input()
	set isSurfaceInteractionDisabled(v: boolean) {
		this.i.isSurfaceInteractionDisabled = ensureBool(v);
	}
	/**
	 * Indicates if this SeriesViewer is a map.
	*/
	get isMap() : boolean {
		return (this.i.isMap as boolean);
	}
	/**
	 * The response to user panning and zooming: whether to update the view immediately while the user action is happening, or to defer the update to after the user action is complete.  The user action will be an action such as a mouse drag which causes panning and/or zooming to occur.
	* 
	* The `windowResponse` property is used to set the response to user panning and zooming: whether to update the view immediately while the user action is happening, or to defer the update to after the user action is complete. 
	* The user action will be an action such as a mouse drag which causes panning and/or zooming to occur.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isHorizontalZoomEnabled=true
	*     windowResponse="deferred">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.windowResponse="deferred";
	* ```
	*/
	get windowResponse() : WindowResponse {
		return this.i.windowResponse;
	}
	@Input()
	set windowResponse(v: WindowResponse) {
		this.i.windowResponse = ensureEnum<WindowResponse>(WindowResponse_$type, v);
	}
	/**
	 * Sets or gets the minimum width that the window rect is allowed to reach before being clamped.
	 * Decrease this value if you want to allow for further zooming into the viewer.
	 * If this value is lowered too much it can cause graphical corruption due to floating point arithmetic inaccuracy.
	* 
	* The `windowRectMinWidth` property is used to set or get the minimum width that the window rect is allowed to reach before being clamped.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isHorizontalZoomEnabled=true
	*     windowRectMinWidth=.2>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.WindowRectMinWidth=".2";
	* ```
	*/
	get windowRectMinWidth() : number {
		return (this.i.windowRectMinWidth as number);
	}
	@Input()
	set windowRectMinWidth(v: number) {
		this.i.windowRectMinWidth = +v;
	}
	/**
	 * Gets or sets the current SeriesViewer's crosshair visibility override.
	* 
	* The `crosshairVisibility` property is used to gets or sets the current Chart's crosshair visibility override. Note: setting this property does not affect the mobile browser version of the chart.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     crosshairVisibility="visible">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.crosshairVisibility = Visibility.Visible;
	* ```
	*/
	get crosshairVisibility() : Visibility {
		return this.i.crosshairVisibility;
	}
	@Input()
	set crosshairVisibility(v: Visibility) {
		this.i.crosshairVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets the brush used as the background for the current SeriesViewer object's plot area.
	* 
	* `plotAreaBackground` property set the background brush to the current Chart object's plot area.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     plotAreaBackground="#F0F8FF">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.chart.plotAreaBackground="#F0F8FF";
	* ```
	*/
	get plotAreaBackground() : string {
		return brushToString(this.i.plotAreaBackground);
	}
	@Input()
	set plotAreaBackground(v: string) {
		this.i.plotAreaBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the DefaultInteraction property.
	 * The default interaction state defines the SeriesViewer's response to mouse events.
	* 
	* The default interaction state defines the chart's response to mouse events.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isHorizontalZoomEnabled=true
	*     defaultInteraction="dragPan">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.defaultInteraction = InteractionState.DragPan;
	* ```
	*/
	get defaultInteraction() : InteractionState {
		return this.i.defaultInteraction;
	}
	@Input()
	set defaultInteraction(v: InteractionState) {
		this.i.defaultInteraction = ensureEnum<InteractionState>(InteractionState_$type, v);
	}
	/**
	 * Gets or sets the RightButtonDefaultInteraction property.
	 * The default interaction state defines the SeriesViewer's response to right button mouse events.
	*/
	get rightButtonDefaultInteraction() : InteractionState {
		return this.i.rightButtonDefaultInteraction;
	}
	@Input()
	set rightButtonDefaultInteraction(v: InteractionState) {
		this.i.rightButtonDefaultInteraction = ensureEnum<InteractionState>(InteractionState_$type, v);
	}
	/**
	 * Gets or sets the current SeriesViewer's DragModifier property.
	* 
	* `dragModifier` is useful to enable zooming when zooming is not the default interaction. 
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isHorizontalZoomEnabled=true
	*     defaultInteraction="dragPan"
	*     dragModifier="alt">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.dragModifier = ModifierKeys.Alt;
	* ```
	*/
	get dragModifier() : ModifierKeys {
		return this.i.dragModifier;
	}
	@Input()
	set dragModifier(v: ModifierKeys) {
		this.i.dragModifier = ensureEnum<ModifierKeys>(ModifierKeys_$type, v);
	}
	/**
	 * Gets or sets the current SeriesViewer's PanModifier property.
	* 
	* `panModifier` is useful to enable panning when panning is not the default interaction. 
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isHorizontalZoomEnabled=true
	*     defaultInteraction="dragZoom"
	*     panModifier="alt">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.panModifier = ModifierKeys.Alt;
	* ```
	*/
	get panModifier() : ModifierKeys {
		return this.i.panModifier;
	}
	@Input()
	set panModifier(v: ModifierKeys) {
		this.i.panModifier = ensureEnum<ModifierKeys>(ModifierKeys_$type, v);
	}
	/**
	 * Gets or sets the preview rectangle.
	 * The preview rectangle may be set to Rect.Empty, in which case the visible preview
	 * strokePath is hidden.
	* 
	* `previewRect` can be used to highlight an area of importance.
	* 
	* ```ts
	* this.chart.previewRect = {left:0,top:0,height:.5,width:.5};
	* ```
	*/
	get previewRect() : IgRect {
		return fromRect(this.i.previewRect);
	}
	@Input()
	set previewRect(v: IgRect) {
		this.i.previewRect = toRect(v);
	}
	/**
	 * A number between 0 and 1 determining the position of the horizontal scroll.
	 * This property is effectively a shortcut to the X position of the WindowRect property.
	* 
	* ```ts
	* this.chart.windowPositionHorizontal = .2;
	* ```
	*/
	get windowPositionHorizontal() : number {
		return (this.i.windowPositionHorizontal as number);
	}
	@Input()
	set windowPositionHorizontal(v: number) {
		this.i.windowPositionHorizontal = +v;
	}
	/**
	 * A number between 0 and 1 determining the position of the vertical scroll.
	 * This property is effectively a shortcut to the Y position of the WindowRect property.
	* 
	* ```ts
	* this.chart.windowPositionVertical = .2;
	* ```
	*/
	get windowPositionVertical() : number {
		return (this.i.windowPositionVertical as number);
	}
	@Input()
	set windowPositionVertical(v: number) {
		this.i.windowPositionVertical = +v;
	}
	/**
	 * Text to display above the plot area.
	* 
	* The `chartTitle` property is used to set the title to display for the component.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.title="Items Sold";
	* ```
	*/
	get chartTitle() : string {
		return (this.i.title as string);
	}
	@Input()
	set chartTitle(v: string) {
		this.i.title = v;
	}
	/**
	 * Gets or sets the TitleHorizontalAlignment property.
	* 
	* The `subtitleHorizontalAlignment` property is used to set horizontal alignment for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="date of sale: 1/1/2018"
	*     titleHorizontalAlignment="left"
	*     subtitleHorizontalAlignment="left">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.titleHorizontalAlignment="left";
	* ```
	*/
	get titleHorizontalAlignment() : HorizontalAlignment {
		return this.i.titleHorizontalAlignment;
	}
	@Input()
	set titleHorizontalAlignment(v: HorizontalAlignment) {
		this.i.titleHorizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the SubtitleHorizontalAlignment property.
	* 
	* The `subtitleBottomMargin` property is used to set the horizontal alignment for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="Date of Sale: 1/1/2018"
	*     titleHorizontalAlignment="left"
	*     subtitleHorizontalAlignment="left">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.subtitleHorizontalAlignment="left";
	* ```
	*/
	get subtitleHorizontalAlignment() : HorizontalAlignment {
		return this.i.subtitleHorizontalAlignment;
	}
	@Input()
	set subtitleHorizontalAlignment(v: HorizontalAlignment) {
		this.i.subtitleHorizontalAlignment = ensureEnum<HorizontalAlignment>(HorizontalAlignment_$type, v);
	}
	/**
	 * Font settings for the title.
	*/
	get titleTextStyle() : string {
		return (this.i.titleTextStyle as string);
	}
	@Input()
	set titleTextStyle(v: string) {
		this.i.titleTextStyle = v;
	}
	/**
	 * Font settings for the subtitle.
	*/
	get subtitleTextStyle() : string {
		return (this.i.subtitleTextStyle as string);
	}
	@Input()
	set subtitleTextStyle(v: string) {
		this.i.subtitleTextStyle = v;
	}
	/**
	 * Gets or sets the Color used for the Title Text.
	* 
	* The `titleTextColor` property is used to set the title brush.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="date of sale: 1/1/2018"
	*     titleTextColor="blue">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.titleTextColor="blue" ;
	* ```
	*/
	get titleTextColor() : string {
		return brushToString(this.i.titleTextColor);
	}
	@Input()
	set titleTextColor(v: string) {
		this.i.titleTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the Color used for the Subtitle Text.
	* 
	* The `subtitleTextColor` property is used to set the color for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="Date of Sale: 1/1/2018"
	*     subtitleTextColor="blue">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart> 
	* ```
	* 
	* ```ts
	* this.chart.subtitleTextColor="blue";
	* ```
	*/
	get subtitleTextColor() : string {
		return brushToString(this.i.subtitleTextColor);
	}
	@Input()
	set subtitleTextColor(v: string) {
		this.i.subtitleTextColor = stringToBrush(v);
	}
	/**
	 * Margin applied above the title.
	* 
	* The `titleTopMargin` property is used to set the top margin for the title.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     titleLeftMarging=10
	*     titleTopMargin=10
	*     titleRightMargin=10
	*     titleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.titleTopMargin=10;
	* ```
	*/
	get titleTopMargin() : number {
		return (this.i.titleTopMargin as number);
	}
	@Input()
	set titleTopMargin(v: number) {
		this.i.titleTopMargin = +v;
	}
	/**
	 * Margin applied to the left of the title.
	* 
	* The `titleLeftMarging` property is used to set the left margin for the title.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     titleLeftMarging=10
	*     titleTopMargin=10
	*     titleRightMargin=10
	*     titleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.titleLeftMarging=10;
	* ```
	*/
	get titleLeftMargin() : number {
		return (this.i.titleLeftMargin as number);
	}
	@Input()
	set titleLeftMargin(v: number) {
		this.i.titleLeftMargin = +v;
	}
	/**
	 * Margin applied to the right of the title.
	* 
	* The `titleRightMargin` property is used to set the right margin for the title.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     titleLeftMarging=10
	*     titleTopMargin=10
	*     titleRightMargin=10
	*     titleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.titleRightMargin=10;
	* ```
	*/
	get titleRightMargin() : number {
		return (this.i.titleRightMargin as number);
	}
	@Input()
	set titleRightMargin(v: number) {
		this.i.titleRightMargin = +v;
	}
	/**
	 * Margin applied below the title.
	* 
	* The `titleBottomMargin` property is used to set the bottom margin for the title.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     titleLeftMarging=10
	*     titleTopMargin=10
	*     titleRightMargin=10
	*     titleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.titleBottomMargin=20;
	* ```
	*/
	get titleBottomMargin() : number {
		return (this.i.titleBottomMargin as number);
	}
	@Input()
	set titleBottomMargin(v: number) {
		this.i.titleBottomMargin = +v;
	}
	/**
	 * Margin applied above the subtitle.
	* 
	* The `subtitleTopMargin` property is used to set the top margin for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="date of sale: 1/1/2018"
	*     subtitleLeftMarging=10
	*     subtitleTopMargin=10
	*     subtitleRightMargin=10
	*     subtitleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.subtitleTopMargin =10;
	* ```
	*/
	get subtitleTopMargin() : number {
		return (this.i.subtitleTopMargin as number);
	}
	@Input()
	set subtitleTopMargin(v: number) {
		this.i.subtitleTopMargin = +v;
	}
	/**
	 * Margin applied to the left of the subtitle.
	* 
	* The `subtitleLeftMarging` property is used to set the left margin for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="date of sale: 1/1/2018"
	*     subtitleLeftMarging=10
	*     subtitleTopMargin=10
	*     subtitleRightMargin=10
	*     subtitleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.subtitleLeftMarging=10;
	* ```
	*/
	get subtitleLeftMargin() : number {
		return (this.i.subtitleLeftMargin as number);
	}
	@Input()
	set subtitleLeftMargin(v: number) {
		this.i.subtitleLeftMargin = +v;
	}
	/**
	 * Margin applied to the right of the subtitle.
	* 
	* The `subTitleRightMargin` property is used to set the right margin for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="date of sale: 1/1/2018"
	*     subtitleLeftMarging=10
	*     subtitleTopMargin=10
	*     subTitleRightMargin=10
	*     subtitleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.subtitleLeftMarging=10;
	* ```
	*/
	get subtitleRightMargin() : number {
		return (this.i.subtitleRightMargin as number);
	}
	@Input()
	set subtitleRightMargin(v: number) {
		this.i.subtitleRightMargin = +v;
	}
	/**
	 * Margin applied below the subtitle.
	* 
	* The `subtitleBottomMargin` property is used to set the bottom margin for the subtitle.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="date of sale: 1/1/2018"
	*     subtitleLeftMarging=10
	*     subtitleTopMargin=10
	*     subtitleRightMargin=10
	*     subtitleBottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.subtitleBottomMargin = 20;
	* ```
	*/
	get subtitleBottomMargin() : number {
		return (this.i.subtitleBottomMargin as number);
	}
	@Input()
	set subtitleBottomMargin(v: number) {
		this.i.subtitleBottomMargin = +v;
	}
	/**
	 * Gets or sets the Subtitle property.
	 * The Title property defines the Subtitle of the chart
	* 
	* The `subtitle` property is used to display subtitle for the component.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     title="Items Sold"
	*     subtitle="Date of Sale: 1/1/2018">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.subtitle="Date of Sale: 1/1/2018";
	* ```
	*/
	get subtitle() : string {
		return (this.i.subtitle as string);
	}
	@Input()
	set subtitle(v: string) {
		this.i.subtitle = v;
	}
	/**
	 * Sets or gets the top margin to use around the chart content.
	* 
	* The `topMargin` property is used to set the top margin.
	* 
	* ```html
	*  <igx-data-chart
	*     [dataSource]="data"
	*     leftMargin=20
	*     rightMargin=20
	*     topMargin=30
	*     bottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.topMargin=30;
	* ```
	*/
	get topMargin() : number {
		return (this.i.topMargin as number);
	}
	@Input()
	set topMargin(v: number) {
		this.i.topMargin = +v;
	}
	/**
	 * Sets or gets the left margin to use around the chart content.
	* 
	* The `leftMargin` property is used to set the left margin.
	* 
	* ```html
	*  <igx-data-chart
	*     [dataSource]="data"
	*     leftMargin=20
	*     rightMargin=20
	*     topMargin=30
	*     bottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	*  this.chart.leftMargin = 20;
	* ```
	*/
	get leftMargin() : number {
		return (this.i.leftMargin as number);
	}
	@Input()
	set leftMargin(v: number) {
		this.i.leftMargin = +v;
	}
	/**
	 * Sets or gets the right margin to use around the chart content.
	* 
	* The `rightMargin` property is used to set the left margin around the chart content in the canvas.
	* 
	* ```html
	*  <igx-data-chart
	*     [dataSource]="data"
	*     leftMargin=20
	*     rightMargin=20
	*     topMargin=30
	*     bottomMargin=20>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.rightMargin=20;
	* ```
	*/
	get rightMargin() : number {
		return (this.i.rightMargin as number);
	}
	@Input()
	set rightMargin(v: number) {
		this.i.rightMargin = +v;
	}
	/**
	 * Sets or gets the bottom margin to use around the chart content.
	* 
	* The `bottomMargin` property is used to gets/set the bottom margin around the chart content in the canvas.
	* 
	* ```ts
	* this.chart.bottomMargin = 50;
	* ```
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     bottomMargin=50>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	*/
	get bottomMargin() : number {
		return (this.i.bottomMargin as number);
	}
	@Input()
	set bottomMargin(v: number) {
		this.i.bottomMargin = +v;
	}
	/**
	 * Sets or gets the automatic width to add when automatically adding margins to the chart.
	* 
	* The `autoMarginWidth` propertry is used find the automatic width to add when automatically adding margins to the chart.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     autoMarginWidth=50>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.chart.autoMarginWidth = 50;
	* ```
	*/
	get autoMarginWidth() : number {
		return (this.i.autoMarginWidth as number);
	}
	@Input()
	set autoMarginWidth(v: number) {
		this.i.autoMarginWidth = +v;
	}
	/**
	 * Sets or gets the automatic height to add when automatically adding margins to the chart.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     autoMarginHeight=50>
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	*  this.chart.autoMarginHeight = 50;
	* ```
	*/
	get autoMarginHeight() : number {
		return (this.i.autoMarginHeight as number);
	}
	@Input()
	set autoMarginHeight(v: number) {
		this.i.autoMarginHeight = +v;
	}
	/**
	 * Gets or sets the IsAntiAliasingEnabledDuringInteraction property.
	*/
	get isAntiAliasingEnabledDuringInteraction() : boolean {
		return (this.i.isAntiAliasingEnabledDuringInteraction as boolean);
	}
	@Input()
	set isAntiAliasingEnabledDuringInteraction(v: boolean) {
		this.i.isAntiAliasingEnabledDuringInteraction = ensureBool(v);
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
	 * Method of pixel scaling to use during end user interaction with the chart.
	*/
	get interactionPixelScalingRatio() : number {
		return (this.i.interactionPixelScalingRatio as number);
	}
	@Input()
	set interactionPixelScalingRatio(v: number) {
		this.i.interactionPixelScalingRatio = +v;
	}
	/**
	 * Gets the resolved pixel scaling ratio.
	* 
	* A higher scaling ratio will produce crisper visuals at the expense of memory. Lower values will cause the control to appear blurry
	* 
	* ```ts
	* let actualPixelScalingRatio: number = this.chart.actualPixelScalingRatio;
	* ```
	*/
	get actualPixelScalingRatio() : number {
		return (this.i.actualPixelScalingRatio as number);
	}
	@Input()
	set actualPixelScalingRatio(v: number) {
		this.i.actualPixelScalingRatio = +v;
	}
	/**
	 * Resolved method of pixel scaling to use during end user interaction with the chart.
	* 
	* ```ts
	* let actualInteractionPixelScalingRatio: number = this.chart.actualInteractionPixelScalingRatio;
	* ```
	*/
	get actualInteractionPixelScalingRatio() : number {
		return (this.i.actualInteractionPixelScalingRatio as number);
	}
	@Input()
	set actualInteractionPixelScalingRatio(v: number) {
		this.i.actualInteractionPixelScalingRatio = +v;
	}
	/**
	 * Gets the actual value of the window rectangle, which represents the current zoom level.
	* 
	* ```ts
	* let actualWindowRect: IgxRect = this.chart.actualWindowRect;
	* ``
	* ```
	*/
	get actualWindowRect() : IgRect {
		return fromRect(this.i.actualWindowRect);
	}
	@Input()
	set actualWindowRect(v: IgRect) {
		this.i.actualWindowRect = toRect(v);
	}
	/**
	 * A number between 0 and 1 determining the position of the horizontal scroll.
	 * This property is effectively a shortcut to the Left of the ActualWindowRect property.
	* 
	* ```ts
	* let actualWindowPositionHorizontal: number = this.chart.actualWindowPositionHorizontal;
	* ```
	*/
	get actualWindowPositionHorizontal() : number {
		return (this.i.actualWindowPositionHorizontal as number);
	}
	@Input()
	set actualWindowPositionHorizontal(v: number) {
		this.i.actualWindowPositionHorizontal = +v;
	}
	/**
	 * A number between 0 and 1 determining the position of the vertical scroll.
	 * This property is effectively a shortcut to the Top of the ActualWindowRect property.
	* 
	* ```ts
	* let actualWindowPositionVertical: number = this.chart.actualWindowPositionVertical;
	* ``
	* ```
	*/
	get actualWindowPositionVertical() : number {
		return (this.i.actualWindowPositionVertical as number);
	}
	@Input()
	set actualWindowPositionVertical(v: number) {
		this.i.actualWindowPositionVertical = +v;
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
	        genericPrefix = toSpinal("SeriesViewerComponent");
		
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
	 * Hides the active main tooltip, if displayed.
	
	* 
	* ```ts
	* this.chart.hideToolTip();
	* ```
	*/
	public hideToolTip() {
		this.i.hideToolTip();
	}
	/**
	 * Manually starts a tiled zoom if one isn't already running.
	
	*/
	public startTiledZoomingIfNecessary() {
		this.i.startTiledZoomingIfNecessary();
	}
	/**
	 * Manually ends a tiled zoom if one is running.
	
	*/
	public endTiledZoomingIfRunning() {
		this.i.endTiledZoomingIfRunning();
	}
	/**
	 * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
	
	*/
	public clearTileZoomCache() {
		this.i.clearTileZoomCache();
	}
	/**
	 * Resets the zoom level to default.
	
	*/
	public resetZoom() {
		this.i.resetZoom();
	}
	/**
	 * Gets actual window scale for horizontal dimension of the control
	
	* 
	* ```ts
	* let actualWindowScaleHorizontal: number = chart.getActualWindowScaleHorizontal();
	* ```
	*/
	public getActualWindowScaleHorizontal() : number {
		let iv = this.i.getActualWindowScaleHorizontal();
		return (iv);
	}
	/**
	 * Gets actual window scale for vertical dimension of the control
	
	* 
	* ```ts
	* let actualWindowScaleVertical: number = chart.getActualWindowScaleVertical();
	* ```
	*/
	public getActualWindowScaleVertical() : number {
		let iv = this.i.getActualWindowScaleVertical();
		return (iv);
	}
	/**
	 * Notification from the containing object that the container has been resized.
	
	*/
	public notifyContainerResized() {
		this.i.notifyContainerResized();
	}
	/**
	 * Attaches the given series to the chart.
	
	* @param s  * The series to attach to the chart.
	*/
	public attachSeries(s: IgxSeriesComponent) {
		this.i.attachSeries((s == null ? null : s.i));
	}
	public notifySetItem(source_: any, index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(source_, index, oldItem, newItem);
	}
	/**
	 * Used to manually notify the SeriesViewer that the data source has reset or cleared its items.  Invoking this method is only necessary if that datasource is not observable.
	
	* @param source_  * The data source which was cleared or reset.
	* 
	* ```ts
	* this.chart.notifyClearItems(this.data);
	* ```
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
	 * Release any resources held by the control.
	
	*/
	public destroy() {
		this.i.destroy();
	}
	/**
	 * Use to force the SeriesViewer to finish any deferred work before printing or evaluating its visual.
	 * This should only be called if the visual of the SeriesViewer needs to be synchronously saved or evaluated. 
	 * Calling this method too often will hinder the performance of the SeriesViewer.
	
	* 
	* ```ts
	* this.chart.flush();
	* ```
	*/
	public flush() {
		this.i.flush();
	}
	private _seriesCursorMouseMove: EventEmitter<{ sender: any, args: IgxChartCursorEventArgs}> = null;
	/**
	 * Occurs when the cursors are moved over a series in this SeriesViewer.
	*/
	@Output()
	get seriesCursorMouseMove(): EventEmitter<{ sender: any, args: IgxChartCursorEventArgs}> {
		if (this._seriesCursorMouseMove == null) {
			this._seriesCursorMouseMove = new EventEmitter<{sender: any, args: IgxChartCursorEventArgs}>();
			this.i.seriesCursorMouseMove = delegateCombine(this.i.seriesCursorMouseMove, (o, e) => {
				let outerArgs = new IgxChartCursorEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeSeriesCursorMouseMove) {
	                            (this as any).beforeSeriesCursorMouseMove(this, outerArgs);
	                        }
					    this._seriesCursorMouseMove.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._seriesCursorMouseMove;
	}
	private _seriesMouseLeftButtonDown: EventEmitter<{ sender: any, args: IgxDataChartMouseButtonEventArgs}> = null;
	/**
	 * Occurs when the left mouse button is pressed while the mouse pointer is over a Series.
	* 
	* The `SeriesMouseLeftButtonDown` event occurs when the left mouse button is pressed while the mouse pointer is over an element of this chart.
	* 
	* &lt;-- position: content member-->
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     (seriesMouseLeftButtonDown)="onSeriesMouseLeftButtonDown($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         thickness=5>
	*     </igx-line-series>       
	* </igx-data-chart> 
	* ```
	* 
	* ```ts
	* public onSeriesMouseLeftButtonDown(event: {sender: any, args: DataChartMouseButtonEventArgs})
	* {
	*     var item = event.args.item;
	* }
	* ```
	*/
	@Output()
	get seriesMouseLeftButtonDown(): EventEmitter<{ sender: any, args: IgxDataChartMouseButtonEventArgs}> {
		if (this._seriesMouseLeftButtonDown == null) {
			this._seriesMouseLeftButtonDown = new EventEmitter<{sender: any, args: IgxDataChartMouseButtonEventArgs}>();
			this.i.seriesMouseLeftButtonDown = delegateCombine(this.i.seriesMouseLeftButtonDown, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxDataChartMouseButtonEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesMouseLeftButtonDown) {
	                        (this as any).beforeSeriesMouseLeftButtonDown(this, outerArgs);
	                    }
					this._seriesMouseLeftButtonDown.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesMouseLeftButtonDown;
	}
	private _seriesMouseLeftButtonUp: EventEmitter<{ sender: any, args: IgxDataChartMouseButtonEventArgs}> = null;
	/**
	 * Occurs when the left mouse button is released while the mouse pointer is over a Series.
	* 
	* The `SeriesMouseLeftButtonUp` event occurs when the left mouse button is released while the mouse pointer is over an element of this chart.
	* 
	* &lt;-- position: content member-->
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     (seriesMouseLeftButtonUp)="onSeriesMouseLeftButtonUp($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         thickness=5>
	*     </igx-line-series>       
	* </igx-data-chart> 
	* ```
	* 
	* &lt;-- position: content member-->
	* 
	* ```ts
	* public onSeriesMouseLeftButtonUp(event: {sender: any, args: DataChartMouseButtonEventArgs})
	* {
	*     var item = event.args.item;
	* }
	* ```
	* 
	* ```ts
	* public onSeriesMouseLeftButtonUp =(event: any, args: DataChartMouseButtonEventArgs )
	* {
	*    
	* }
	* ```
	*/
	@Output()
	get seriesMouseLeftButtonUp(): EventEmitter<{ sender: any, args: IgxDataChartMouseButtonEventArgs}> {
		if (this._seriesMouseLeftButtonUp == null) {
			this._seriesMouseLeftButtonUp = new EventEmitter<{sender: any, args: IgxDataChartMouseButtonEventArgs}>();
			this.i.seriesMouseLeftButtonUp = delegateCombine(this.i.seriesMouseLeftButtonUp, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxDataChartMouseButtonEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesMouseLeftButtonUp) {
	                        (this as any).beforeSeriesMouseLeftButtonUp(this, outerArgs);
	                    }
					this._seriesMouseLeftButtonUp.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesMouseLeftButtonUp;
	}
	private _seriesMouseMove: EventEmitter<{ sender: any, args: IgxChartMouseEventArgs}> = null;
	/**
	 * Occurs when the mouse pointer moves while over a Series.
	* 
	* The `SeriesMouseMove` event occurs when the left mouse pointer moves while over an element of this chart. 
	* 
	* &lt;-- position: content member-->
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     (seriesMouseMove)="onSeriesMouseMove($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         thickness=5>
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* &lt;-- position: content member-->
	* 
	* ```ts
	* public onSeriesMouseMove(event: {sender: any, args: ChartMouseEventArgs})
	* {
	*     var item = event.args.item;    
	* }
	* ```
	* 
	* ```ts
	* public onSeriesMouseMove =( event: any, args: ChartMouseEventArgs) => {
	*                  }
	* ```
	*/
	@Output()
	get seriesMouseMove(): EventEmitter<{ sender: any, args: IgxChartMouseEventArgs}> {
		if (this._seriesMouseMove == null) {
			this._seriesMouseMove = new EventEmitter<{sender: any, args: IgxChartMouseEventArgs}>();
			this.i.seriesMouseMove = delegateCombine(this.i.seriesMouseMove, (o, e) => {
				let outerArgs = new IgxChartMouseEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeSeriesMouseMove) {
	                            (this as any).beforeSeriesMouseMove(this, outerArgs);
	                        }
					    this._seriesMouseMove.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._seriesMouseMove;
	}
	private _seriesMouseEnter: EventEmitter<{ sender: any, args: IgxChartMouseEventArgs}> = null;
	/**
	 * Occurs when the mouse pointer enters a Series.
	* 
	* The `SeriesMouseEnter` event occurs when the left mouse pointer enters an element of this chart.
	* 
	* &lt;-- position: content member-->
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     (seriesMouseEnter)="onSeriesMouseEnter($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         thickness=5>
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* public onSeriesMouseEnter(event: {sender: any, args: ChartMouseEventArgs})
	* {
	*     var item = event.args.item;    
	* }
	* ```
	*/
	@Output()
	get seriesMouseEnter(): EventEmitter<{ sender: any, args: IgxChartMouseEventArgs}> {
		if (this._seriesMouseEnter == null) {
			this._seriesMouseEnter = new EventEmitter<{sender: any, args: IgxChartMouseEventArgs}>();
			this.i.seriesMouseEnter = delegateCombine(this.i.seriesMouseEnter, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxChartMouseEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesMouseEnter) {
	                        (this as any).beforeSeriesMouseEnter(this, outerArgs);
	                    }
					this._seriesMouseEnter.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesMouseEnter;
	}
	private _seriesMouseLeave: EventEmitter<{ sender: any, args: IgxChartMouseEventArgs}> = null;
	/**
	 * Occurs when the mouse pointer leaves a Series.
	* 
	* The `SeriesMouseLeave` event occurs when the left mouse pointer leaves an element of this chart.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     (seriesMouseLeave)="onSeriesMouseLeave($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         thickness=5>
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* public onSeriesMouseLeave(event: {sender: any, args: ChartMouseEventArgs})
	* {
	*     var item = event.args.item;    
	* }
	* ```
	*/
	@Output()
	get seriesMouseLeave(): EventEmitter<{ sender: any, args: IgxChartMouseEventArgs}> {
		if (this._seriesMouseLeave == null) {
			this._seriesMouseLeave = new EventEmitter<{sender: any, args: IgxChartMouseEventArgs}>();
			this.i.seriesMouseLeave = delegateCombine(this.i.seriesMouseLeave, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxChartMouseEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesMouseLeave) {
	                        (this as any).beforeSeriesMouseLeave(this, outerArgs);
	                    }
					this._seriesMouseLeave.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesMouseLeave;
	}
	private _windowRectChanged: EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> = null;
	/**
	 * Occurs just after the current SeriesViewer's window rectangle is changed.
	* 
	* &lt;-- position: content member-->
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     isHorizontalZoomEnabled=true
	*     (windowRectChanged)="onWindowRectChanged($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>  
	* ```
	* 
	* &lt;-- position: content member-->
	* 
	* ```ts
	* public onWindowRectChanged(event: {sender: any, args: RectChangedEventArgs})
	* {
	*     let newRect: IgxRect = event.args.newRect;
	* }
	* ```
	* 
	* ```ts
	* public onWindowRectChanged =( s:any, e: RectChangedEventArgs) => {
	*        
	*        }
	* ```
	*/
	@Output()
	get windowRectChanged(): EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> {
		if (this._windowRectChanged == null) {
			this._windowRectChanged = new EventEmitter<{sender: any, args: IgxRectChangedEventArgs}>();
			this.i.windowRectChanged = delegateCombine(this.i.windowRectChanged, (o, e) => {
				let outerArgs = new IgxRectChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeWindowRectChanged) {
	                            (this as any).beforeWindowRectChanged(this, outerArgs);
	                        }
					    this._windowRectChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._windowRectChanged;
	}
	private _sizeChanged: EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> = null;
	/**
	 * Occurs after the size of the series viewer changes.
	* 
	* &lt;-- position: content member-->
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data"
	*     (sizeChanged)="onSizeChanged($event)">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>       
	* </igx-data-chart>
	* ```
	* 
	* &lt;-- position: content member-->
	* 
	* ```ts
	* public onSizeChanged(event: {sender: any, args: RectChangedEventArgs})
	* {
	*     let newRect: IgxRect = event.args.newRect;
	* }
	* ```
	* 
	* ```ts
	* public onSizeChanged =(event: any, args: RectChangedEventArgs}){
	*     
	* }
	* ```
	*/
	@Output()
	get sizeChanged(): EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> {
		if (this._sizeChanged == null) {
			this._sizeChanged = new EventEmitter<{sender: any, args: IgxRectChangedEventArgs}>();
			this.i.sizeChanged = delegateCombine(this.i.sizeChanged, (o, e) => {
				let outerArgs = new IgxRectChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeSizeChanged) {
	                            (this as any).beforeSizeChanged(this, outerArgs);
	                        }
					    this._sizeChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._sizeChanged;
	}
	private _actualWindowRectChanged: EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> = null;
	/**
	 * Raised when the actual window rectangle of the SeriesViewer changes.
	*/
	@Output()
	get actualWindowRectChanged(): EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> {
		if (this._actualWindowRectChanged == null) {
			this._actualWindowRectChanged = new EventEmitter<{sender: any, args: IgxRectChangedEventArgs}>();
			this.i.actualWindowRectChanged = delegateCombine(this.i.actualWindowRectChanged, (o, e) => {
				let outerArgs = new IgxRectChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeActualWindowRectChanged) {
	                            (this as any).beforeActualWindowRectChanged(this, outerArgs);
	                        }
					    this._actualWindowRectChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._actualWindowRectChanged;
	}
	private _gridAreaRectChanged: EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> = null;
	/**
	 * Occurs just after the current SeriesViewer's grid area rectangle is changed.
	 * The grid area may change as the result of the SeriesViewer being resized, or
	 * of an axis being added or changing size, possibly in another SeriesViewer.
	*/
	@Output()
	get gridAreaRectChanged(): EventEmitter<{ sender: any, args: IgxRectChangedEventArgs}> {
		if (this._gridAreaRectChanged == null) {
			this._gridAreaRectChanged = new EventEmitter<{sender: any, args: IgxRectChangedEventArgs}>();
			this.i.gridAreaRectChanged = delegateCombine(this.i.gridAreaRectChanged, (o, e) => {
				let outerArgs = new IgxRectChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeGridAreaRectChanged) {
	                            (this as any).beforeGridAreaRectChanged(this, outerArgs);
	                        }
					    this._gridAreaRectChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._gridAreaRectChanged;
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
