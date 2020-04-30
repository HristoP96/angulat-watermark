/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ContentControl } from "igniteui-core/ContentControl";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Type, Base, Point, PropertyChangedEventArgs, delegateCombine, Point_$type, Number_$type, enumGetBox, EnumUtil, markType, PointUtil } from "igniteui-core/type";
import { SRProvider } from "igniteui-core/SRProvider";
import { ISeriesVisualDataManager, ISeriesVisualDataManager_$type } from "./ISeriesVisualDataManager";
import { DVContainer } from "igniteui-core/DVContainer";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { PointerTooltipPointerLocation, PointerTooltipPointerLocation_$type } from "./PointerTooltipPointerLocation";
import { PointCollection } from "igniteui-core/PointCollection";
import { Polygon } from "igniteui-core/Polygon";
import { Polyline } from "igniteui-core/Polyline";
import { EventProxy } from "igniteui-core/EventProxy";
import { PointerTooltipStyle } from "./PointerTooltipStyle";
import { Control } from "igniteui-core/Control";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { Size } from "igniteui-core/Size";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { List$1 } from "igniteui-core/List$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Rectangle } from "igniteui-core/Rectangle";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { Rect } from "igniteui-core/Rect";
import { truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class PointerTooltip extends ContentControl implements INotifyPropertyChanged {
	static $t: Type = markType(PointerTooltip, 'PointerTooltip', (<any>ContentControl).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		DVContainer.instance.registerIfLoaded("VisualDataFactoryManager");
		this.defaultStyleKey = (<any>PointerTooltip).$type;
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
		this.view = new PointerTooltipView(this);
	}
	private _sr: SRProvider = null;
	protected get res(): SRProvider {
		if (this._sr == null) {
			this._sr = new SRProvider(this.view.renderer);
		}
		return this._sr;
	}
	private _seriesVisualDataManager: ISeriesVisualDataManager = null;
	get seriesVisualDataManager(): ISeriesVisualDataManager {
		if (this._seriesVisualDataManager == null) {
			this._seriesVisualDataManager = <ISeriesVisualDataManager><any>DVContainer.instance.createInstance(ISeriesVisualDataManager_$type, () => this.res.dataChart_VisualDataNotLoaded);
		}
		return this._seriesVisualDataManager;
	}
	private _view: PointerTooltipView = null;
	get view(): PointerTooltipView {
		return this._view;
	}
	set view(value: PointerTooltipView) {
		this._view = value;
	}
	get pointerPosition(): Point {
		return <Point>this.getValue(PointerTooltip.pointerPositionProperty);
	}
	set pointerPosition(value: Point) {
		this.setValue(PointerTooltip.pointerPositionProperty, value);
	}
	static readonly pointerPositionPropertyName: string = "PointerPosition";
	static readonly pointerPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerPositionPropertyName, e.oldValue, e.newValue)));
	get pointerInset(): number {
		return <number>this.getValue(PointerTooltip.pointerInsetProperty);
	}
	set pointerInset(value: number) {
		this.setValue(PointerTooltip.pointerInsetProperty, value);
	}
	static readonly pointerInsetPropertyName: string = "PointerInset";
	static readonly pointerInsetProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerInsetPropertyName, Number_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, DeviceUtils.toPixelUnits(7.5), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerInsetPropertyName, e.oldValue, e.newValue)));
	get pointerWidth(): number {
		return <number>this.getValue(PointerTooltip.pointerWidthProperty);
	}
	set pointerWidth(value: number) {
		this.setValue(PointerTooltip.pointerWidthProperty, value);
	}
	static readonly pointerWidthPropertyName: string = "PointerWidth";
	static readonly pointerWidthProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerWidthPropertyName, Number_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, DeviceUtils.toPixelUnits(5), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerWidthPropertyName, e.oldValue, e.newValue)));
	get pointerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(PointerTooltip.pointerVisibilityProperty));
	}
	set pointerVisibility(value: Visibility) {
		this.setValue(PointerTooltip.pointerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly pointerVisibilityPropertyName: string = "PointerVisibility";
	static readonly pointerVisibilityProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerVisibilityPropertyName, Visibility_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerVisibilityPropertyName, e.oldValue, e.newValue)));
	get pointerLocation(): PointerTooltipPointerLocation {
		return EnumUtil.getEnumValue<PointerTooltipPointerLocation>(PointerTooltipPointerLocation_$type, this.getValue(PointerTooltip.pointerLocationProperty));
	}
	set pointerLocation(value: PointerTooltipPointerLocation) {
		this.setValue(PointerTooltip.pointerLocationProperty, enumGetBox<PointerTooltipPointerLocation>(PointerTooltipPointerLocation_$type, value));
	}
	static readonly pointerLocationPropertyName: string = "PointerLocation";
	static readonly pointerLocationProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerLocationPropertyName, PointerTooltipPointerLocation_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, enumGetBox<PointerTooltipPointerLocation>(PointerTooltipPointerLocation_$type, PointerTooltipPointerLocation.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerLocationPropertyName, e.oldValue, e.newValue)));
	get actualPointerStartPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualPointerStartPositionProperty);
	}
	set actualPointerStartPosition(value: Point) {
		this.setValue(PointerTooltip.actualPointerStartPositionProperty, value);
	}
	static readonly actualPointerStartPositionPropertyName: string = "ActualPointerStartPosition";
	static readonly actualPointerStartPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualPointerStartPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualPointerStartPositionPropertyName, e.oldValue, e.newValue)));
	get actualPointerFirstPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualPointerFirstPositionProperty);
	}
	set actualPointerFirstPosition(value: Point) {
		this.setValue(PointerTooltip.actualPointerFirstPositionProperty, value);
	}
	static readonly actualPointerFirstPositionPropertyName: string = "ActualPointerFirstPosition";
	static readonly actualPointerFirstPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualPointerFirstPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualPointerFirstPositionPropertyName, e.oldValue, e.newValue)));
	get actualPointerSecondPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualPointerSecondPositionProperty);
	}
	set actualPointerSecondPosition(value: Point) {
		this.setValue(PointerTooltip.actualPointerSecondPositionProperty, value);
	}
	static readonly actualPointerSecondPositionPropertyName: string = "ActualPointerSecondPosition";
	static readonly actualPointerSecondPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualPointerSecondPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualPointerSecondPositionPropertyName, e.oldValue, e.newValue)));
	get actualBoxTopLeftPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualBoxTopLeftPositionProperty);
	}
	set actualBoxTopLeftPosition(value: Point) {
		this.setValue(PointerTooltip.actualBoxTopLeftPositionProperty, value);
	}
	static readonly actualBoxTopLeftPositionPropertyName: string = "ActualBoxTopLeftPosition";
	static readonly actualBoxTopLeftPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxTopLeftPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxTopLeftPositionPropertyName, e.oldValue, e.newValue)));
	get actualBoxTopRightPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualBoxTopRightPositionProperty);
	}
	set actualBoxTopRightPosition(value: Point) {
		this.setValue(PointerTooltip.actualBoxTopRightPositionProperty, value);
	}
	static readonly actualBoxTopRightPositionPropertyName: string = "ActualBoxTopRightPosition";
	static readonly actualBoxTopRightPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxTopRightPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxTopRightPositionPropertyName, e.oldValue, e.newValue)));
	get actualBoxBottomLeftPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualBoxBottomLeftPositionProperty);
	}
	set actualBoxBottomLeftPosition(value: Point) {
		this.setValue(PointerTooltip.actualBoxBottomLeftPositionProperty, value);
	}
	static readonly actualBoxBottomLeftPositionPropertyName: string = "ActualBoxBottomLeftPosition";
	static readonly actualBoxBottomLeftPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxBottomLeftPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxBottomLeftPositionPropertyName, e.oldValue, e.newValue)));
	get actualBoxBottomRightPosition(): Point {
		return <Point>this.getValue(PointerTooltip.actualBoxBottomRightPositionProperty);
	}
	set actualBoxBottomRightPosition(value: Point) {
		this.setValue(PointerTooltip.actualBoxBottomRightPositionProperty, value);
	}
	static readonly actualBoxBottomRightPositionPropertyName: string = "ActualBoxBottomRightPosition";
	static readonly actualBoxBottomRightPositionProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxBottomRightPositionPropertyName, Point_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxBottomRightPositionPropertyName, e.oldValue, e.newValue)));
	get actualBoxWidth(): number {
		return <number>this.getValue(PointerTooltip.actualBoxWidthProperty);
	}
	set actualBoxWidth(value: number) {
		this.setValue(PointerTooltip.actualBoxWidthProperty, value);
	}
	static readonly actualBoxWidthPropertyName: string = "ActualBoxWidth";
	static readonly actualBoxWidthProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxWidthPropertyName, Number_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxWidthPropertyName, e.oldValue, e.newValue)));
	get actualBoxHeight(): number {
		return <number>this.getValue(PointerTooltip.actualBoxHeightProperty);
	}
	set actualBoxHeight(value: number) {
		this.setValue(PointerTooltip.actualBoxHeightProperty, value);
	}
	static readonly actualBoxHeightPropertyName: string = "ActualBoxHeight";
	static readonly actualBoxHeightProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxHeightPropertyName, Number_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxHeightPropertyName, e.oldValue, e.newValue)));
	get actualBoxFullHeight(): number {
		return <number>this.getValue(PointerTooltip.actualBoxFullHeightProperty);
	}
	set actualBoxFullHeight(value: number) {
		this.setValue(PointerTooltip.actualBoxFullHeightProperty, value);
	}
	static readonly actualBoxFullHeightPropertyName: string = "ActualBoxFullHeight";
	static readonly actualBoxFullHeightProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxFullHeightPropertyName, Number_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxFullHeightPropertyName, e.oldValue, e.newValue)));
	get actualBoxFullWidth(): number {
		return <number>this.getValue(PointerTooltip.actualBoxFullWidthProperty);
	}
	set actualBoxFullWidth(value: number) {
		this.setValue(PointerTooltip.actualBoxFullWidthProperty, value);
	}
	static readonly actualBoxFullWidthPropertyName: string = "ActualBoxFullWidth";
	static readonly actualBoxFullWidthProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.actualBoxFullWidthPropertyName, Number_$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.actualBoxFullWidthPropertyName, e.oldValue, e.newValue)));
	get pointerPoints(): PointCollection {
		return <PointCollection>this.getValue(PointerTooltip.pointerPointsProperty);
	}
	set pointerPoints(value: PointCollection) {
		this.setValue(PointerTooltip.pointerPointsProperty, value);
	}
	static readonly pointerPointsPropertyName: string = "PointerPoints";
	static readonly pointerPointsProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerPointsPropertyName, (<any>PointCollection).$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerPointsPropertyName, e.oldValue, e.newValue)));
	get pointerOutlinePoints(): PointCollection {
		return <PointCollection>this.getValue(PointerTooltip.pointerOutlinePointsProperty);
	}
	set pointerOutlinePoints(value: PointCollection) {
		this.setValue(PointerTooltip.pointerOutlinePointsProperty, value);
	}
	static readonly pointerOutlinePointsPropertyName: string = "PointerOutlinePoints";
	static readonly pointerOutlinePointsProperty: DependencyProperty = DependencyProperty.register(PointerTooltip.pointerOutlinePointsPropertyName, (<any>PointCollection).$type, (<any>PointerTooltip).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PointerTooltip>sender).raisePropertyChanged(PointerTooltip.pointerOutlinePointsPropertyName, e.oldValue, e.newValue)));
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case PointerTooltip.pointerPositionPropertyName:
			this.measureInvalid();
			break;

			case PointerTooltip.pointerVisibilityPropertyName:
			this.measureInvalid();
			break;

		}

	}
	private _contentControl: ContentControl = null;
	get contentControl(): ContentControl {
		return this._contentControl;
	}
	set contentControl(value: ContentControl) {
		this._contentControl = value;
	}
	private _pointerShape: Polygon = null;
	get pointerShape(): Polygon {
		return this._pointerShape;
	}
	set pointerShape(value: Polygon) {
		this._pointerShape = value;
	}
	private _pointerOutlineShape: Polyline = null;
	get pointerOutlineShape(): Polyline {
		return this._pointerOutlineShape;
	}
	set pointerOutlineShape(value: Polyline) {
		this._pointerOutlineShape = value;
	}
	private _isMeasureInvalid: boolean = false;
	protected get isMeasureInvalid(): boolean {
		return this._isMeasureInvalid;
	}
	protected set isMeasureInvalid(value: boolean) {
		this._isMeasureInvalid = value;
	}
	checkContentSize(): void {
		if (this.view.contentSizeChanged(this.content)) {
			this.measureInvalid();
		}
	}
	measureInvalid(): void {
		this.isMeasureInvalid = true;
	}
	private _lastPosition: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
	private _lastLocation: PointerTooltipPointerLocation = PointerTooltipPointerLocation.Auto;
	private _lastWidthDelta: number = 0;
	private _lastHeightDelta: number = 0;
	private closeEnough(value1: number, value2: number): boolean {
		if (Math.abs(value1 - value2) < 1E-05) {
			return true;
		}
		return false;
	}
	measureCore(availableSize: Size): Size {
		this.isMeasureInvalid = false;
		let contentNeedsWidth: number = 0;
		let contentNeedsHeight: number = 0;
		let size = this.view.getDesiredContentSize(availableSize);
		contentNeedsWidth = size.width;
		contentNeedsHeight = size.height;
		if (this._lastLocation == this.pointerLocation && this.closeEnough(this._lastPosition.x, this.pointerPosition.x) && this.closeEnough(this._lastPosition.y, this.pointerPosition.y)) {
			this.actualBoxWidth = contentNeedsWidth;
			this.actualBoxHeight = contentNeedsHeight;
			if (this.pointerVisibility == Visibility.Visible) {
				contentNeedsWidth += this._lastWidthDelta;
				contentNeedsHeight += this._lastHeightDelta;
				this.actualBoxFullWidth = this.actualBoxWidth + this._lastWidthDelta;
				this.actualBoxFullHeight = this.actualBoxHeight + this._lastHeightDelta;
			}
			return new Size(1, contentNeedsWidth, contentNeedsHeight);
		}
		let boxTopLeft = <Point>{ $type: Point_$type, x: 0, y: 0 };
		let boxTopMiddle = <Point>{ $type: Point_$type, x: contentNeedsWidth * 0.5, y: 0 };
		let boxTopRight = <Point>{ $type: Point_$type, x: contentNeedsWidth, y: 0 };
		let boxBottomRight = <Point>{ $type: Point_$type, x: contentNeedsWidth, y: contentNeedsHeight };
		let boxBottomMiddle = <Point>{ $type: Point_$type, x: contentNeedsWidth * 0.5, y: contentNeedsHeight };
		let boxBottomLeft = <Point>{ $type: Point_$type, x: 0, y: contentNeedsHeight };
		let boxLeftMiddle = <Point>{ $type: Point_$type, x: 0, y: contentNeedsHeight * 0.5 };
		let boxRightMiddle = <Point>{ $type: Point_$type, x: contentNeedsWidth, y: contentNeedsHeight * 0.5 };
		let boxWidth = contentNeedsWidth;
		let boxHeight = contentNeedsHeight;
		let fullWidth = contentNeedsWidth;
		let fullHeight = contentNeedsHeight;
		let pointerConnectionFirst = <Point>{ $type: Point_$type, x: 0, y: 0 };
		let pointerConnectionSecond = <Point>{ $type: Point_$type, x: 0, y: 0 };
		let pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: 0, y: 0 };
		let pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: 0, y: 0 };
		let pointerInset = this.pointerInset;
		let pointerWidth = this.pointerWidth;
		let pointerLocation = this.pointerLocation;
		let pointerPosition = this.pointerPosition;
		let widthDelta: number = 0;
		let heightDelta: number = 0;
		let distTopLeft = Math.pow(boxTopLeft.x - pointerPosition.x, 2) + Math.pow(boxTopLeft.y - pointerPosition.y, 2);
		let distTopMiddle = Math.pow(boxTopMiddle.x - pointerPosition.x, 2) + Math.pow(boxTopMiddle.y - pointerPosition.y, 2);
		let distTopRight = Math.pow(boxTopRight.x - pointerPosition.x, 2) + Math.pow(boxTopRight.y - pointerPosition.y, 2);
		let distRightMiddle = Math.pow(boxRightMiddle.x - pointerPosition.x, 2) + Math.pow(boxRightMiddle.y - pointerPosition.y, 2);
		let distBottomRight = Math.pow(boxBottomRight.x - pointerPosition.x, 2) + Math.pow(boxBottomRight.y - pointerPosition.y, 2);
		let distBottomMiddle = Math.pow(boxBottomMiddle.x - pointerPosition.x, 2) + Math.pow(boxBottomMiddle.y - pointerPosition.y, 2);
		let distBottomLeft = Math.pow(boxBottomLeft.x - pointerPosition.x, 2) + Math.pow(boxBottomLeft.y - pointerPosition.y, 2);
		let distLeftMiddle = Math.pow(boxLeftMiddle.x - pointerPosition.x, 2) + Math.pow(boxLeftMiddle.y - pointerPosition.y, 2);
		let minDist = 1.7976931348623157E+308;
		minDist = Math.min(minDist, distTopLeft);
		minDist = Math.min(minDist, distTopMiddle);
		minDist = Math.min(minDist, distTopRight);
		minDist = Math.min(minDist, distRightMiddle);
		minDist = Math.min(minDist, distBottomRight);
		minDist = Math.min(minDist, distBottomMiddle);
		minDist = Math.min(minDist, distBottomLeft);
		minDist = Math.min(minDist, distLeftMiddle);
		if (pointerLocation == PointerTooltipPointerLocation.Auto) {
			if (minDist == distTopLeft) {
				pointerLocation = PointerTooltipPointerLocation.LeftTop;
				if (pointerPosition.x >= boxTopLeft.x) {
					pointerLocation = PointerTooltipPointerLocation.TopLeft;
				}
			}
			if (minDist == distLeftMiddle) {
				pointerLocation = PointerTooltipPointerLocation.LeftMiddle;
			}
			if (minDist == distBottomLeft) {
				pointerLocation = PointerTooltipPointerLocation.LeftBottom;
				if (pointerPosition.x >= boxBottomLeft.x) {
					pointerLocation = PointerTooltipPointerLocation.BottomLeft;
				}
			}
			if (minDist == distTopRight) {
				pointerLocation = PointerTooltipPointerLocation.RightTop;
				if (pointerPosition.x <= boxTopRight.x) {
					pointerLocation = PointerTooltipPointerLocation.TopRight;
				}
			}
			if (minDist == distRightMiddle) {
				pointerLocation = PointerTooltipPointerLocation.RightMiddle;
			}
			if (minDist == distBottomRight) {
				pointerLocation = PointerTooltipPointerLocation.RightBottom;
				if (pointerPosition.x <= boxBottomRight.x) {
					pointerLocation = PointerTooltipPointerLocation.BottomRight;
				}
			}
			if (minDist == distTopMiddle) {
				pointerLocation = PointerTooltipPointerLocation.TopMiddle;
			}
			if (minDist == distBottomMiddle) {
				pointerLocation = PointerTooltipPointerLocation.BottomMiddle;
			}
		}
		let overlap = DeviceUtils.toPixelUnits(3);
		switch (pointerLocation) {
			case PointerTooltipPointerLocation.TopLeft:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x + pointerInset, y: boxTopLeft.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x + pointerInset + pointerWidth, y: boxTopLeft.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x + pointerInset, y: boxTopLeft.y + overlap };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x + pointerInset + pointerWidth, y: boxTopLeft.y + overlap };
			break;

			case PointerTooltipPointerLocation.TopMiddle:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: ((boxTopLeft.x + boxTopRight.x) / 2) - (pointerWidth / 2), y: boxTopLeft.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: ((boxTopLeft.x + boxTopRight.x) / 2) + (pointerWidth / 2), y: boxTopLeft.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: ((boxTopLeft.x + boxTopRight.x) / 2) - (pointerWidth / 2), y: boxTopLeft.y + overlap };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: ((boxTopLeft.x + boxTopRight.x) / 2) + (pointerWidth / 2), y: boxTopLeft.y + overlap };
			break;

			case PointerTooltipPointerLocation.TopRight:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopRight.x - pointerInset, y: boxTopLeft.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: (boxTopRight.x - pointerInset) - pointerWidth, y: boxTopLeft.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopRight.x - pointerInset, y: boxTopLeft.y + overlap };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: (boxTopRight.x - pointerInset) - pointerWidth, y: boxTopLeft.y + overlap };
			break;

			case PointerTooltipPointerLocation.RightTop:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopRight.x, y: boxTopRight.y + pointerInset };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxTopRight.x, y: boxTopRight.y + pointerInset + pointerWidth };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopRight.x - overlap, y: boxTopRight.y + pointerInset };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxTopRight.x - overlap, y: boxTopRight.y + pointerInset + pointerWidth };
			break;

			case PointerTooltipPointerLocation.RightMiddle:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopRight.x, y: ((boxTopRight.y + boxBottomRight.y) / 2) - (pointerWidth / 2) };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxTopRight.x, y: ((boxTopRight.y + boxBottomRight.y) / 2) + (pointerWidth / 2) };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopRight.x - overlap, y: ((boxTopRight.y + boxBottomRight.y) / 2) - (pointerWidth / 2) };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxTopRight.x - overlap, y: ((boxTopRight.y + boxBottomRight.y) / 2) + (pointerWidth / 2) };
			break;

			case PointerTooltipPointerLocation.RightBottom:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxBottomRight.x, y: boxBottomRight.y - pointerInset };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxBottomRight.x, y: boxBottomRight.y - pointerInset - pointerWidth };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxBottomRight.x - overlap, y: boxBottomRight.y - pointerInset };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxBottomRight.x - overlap, y: boxBottomRight.y - pointerInset - pointerWidth };
			break;

			case PointerTooltipPointerLocation.BottomRight:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxBottomRight.x - pointerInset, y: boxBottomRight.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: (boxBottomRight.x - pointerInset) - pointerWidth, y: boxBottomRight.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxBottomRight.x - pointerInset, y: boxBottomRight.y - overlap };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: (boxBottomRight.x - pointerInset) - pointerWidth, y: boxBottomRight.y - overlap };
			break;

			case PointerTooltipPointerLocation.BottomMiddle:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: ((boxBottomLeft.x + boxBottomRight.x) / 2) - (pointerWidth / 2), y: boxBottomRight.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: ((boxBottomLeft.x + boxBottomRight.x) / 2) + (pointerWidth / 2), y: boxBottomRight.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: ((boxBottomLeft.x + boxBottomRight.x) / 2) - (pointerWidth / 2), y: boxBottomRight.y - overlap };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: ((boxBottomLeft.x + boxBottomRight.x) / 2) + (pointerWidth / 2), y: boxBottomRight.y - overlap };
			break;

			case PointerTooltipPointerLocation.BottomLeft:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxBottomLeft.x + pointerInset, y: boxBottomLeft.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxBottomLeft.x + pointerInset + pointerWidth, y: boxBottomLeft.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxBottomLeft.x + pointerInset, y: boxBottomLeft.y - overlap };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxBottomLeft.x + pointerInset + pointerWidth, y: boxBottomLeft.y - overlap };
			break;

			case PointerTooltipPointerLocation.LeftBottom:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: boxBottomLeft.y - pointerInset };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: (boxBottomLeft.y - pointerInset) - pointerWidth };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x + overlap, y: boxBottomLeft.y - pointerInset };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x + overlap, y: (boxBottomLeft.y - pointerInset) - pointerWidth };
			break;

			case PointerTooltipPointerLocation.LeftMiddle:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: ((boxTopLeft.y + boxBottomLeft.y) / 2) - (pointerWidth / 2) };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: ((boxTopLeft.y + boxBottomLeft.y) / 2) + (pointerWidth / 2) };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x + overlap, y: ((boxTopLeft.y + boxBottomLeft.y) / 2) - (pointerWidth / 2) };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x + overlap, y: ((boxTopLeft.y + boxBottomLeft.y) / 2) + (pointerWidth / 2) };
			break;

			case PointerTooltipPointerLocation.LeftTop:
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: boxTopLeft.y + pointerInset };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: boxTopLeft.y + pointerInset + pointerWidth };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: boxTopLeft.x + overlap, y: boxTopLeft.y + pointerInset };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: boxTopLeft.x + overlap, y: boxTopLeft.y + pointerInset + pointerWidth };
			break;

		}

		let pointerStart = <Point>{ $type: Point_$type, x: pointerPosition.x, y: pointerPosition.y };
		if (pointerStart.y < boxTopLeft.y) {
			let diff = boxTopLeft.y - pointerStart.y;
			pointerStart = <Point>{ $type: Point_$type, x: pointerStart.x, y: 0 };
			fullHeight += diff;
			boxTopLeft = <Point>{ $type: Point_$type, x: boxTopLeft.x, y: boxTopLeft.y + diff };
			boxTopRight = <Point>{ $type: Point_$type, x: boxTopRight.x, y: boxTopRight.y + diff };
			boxBottomLeft = <Point>{ $type: Point_$type, x: boxBottomLeft.x, y: boxBottomLeft.y + diff };
			boxBottomRight = <Point>{ $type: Point_$type, x: boxBottomRight.x, y: boxBottomRight.y + diff };
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: pointerConnectionFirst.x, y: pointerConnectionFirst.y + diff };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: pointerConnectionSecond.x, y: pointerConnectionSecond.y + diff };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: pointerOverlapConnectionFirst.x, y: pointerOverlapConnectionFirst.y + diff };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: pointerOverlapConnectionSecond.x, y: pointerOverlapConnectionSecond.y + diff };
		} else {
			fullHeight = Math.max(pointerStart.y, boxHeight);
		}
		if (pointerStart.x < boxTopLeft.x) {
			let diff1 = boxTopLeft.x - pointerStart.x;
			pointerStart = <Point>{ $type: Point_$type, x: 0, y: pointerStart.y };
			fullWidth += diff1;
			boxTopLeft = <Point>{ $type: Point_$type, x: boxTopLeft.x + diff1, y: boxTopLeft.y };
			boxTopRight = <Point>{ $type: Point_$type, x: boxTopRight.x + diff1, y: boxTopRight.y };
			boxBottomLeft = <Point>{ $type: Point_$type, x: boxBottomLeft.x + diff1, y: boxBottomLeft.y };
			boxBottomRight = <Point>{ $type: Point_$type, x: boxBottomRight.x + diff1, y: boxBottomRight.y };
			pointerConnectionFirst = <Point>{ $type: Point_$type, x: pointerConnectionFirst.x + diff1, y: pointerConnectionFirst.y };
			pointerConnectionSecond = <Point>{ $type: Point_$type, x: pointerConnectionSecond.x + diff1, y: pointerConnectionSecond.y };
			pointerOverlapConnectionFirst = <Point>{ $type: Point_$type, x: pointerOverlapConnectionFirst.x + diff1, y: pointerOverlapConnectionFirst.y };
			pointerOverlapConnectionSecond = <Point>{ $type: Point_$type, x: pointerOverlapConnectionSecond.x + diff1, y: pointerOverlapConnectionSecond.y };
		} else {
			fullWidth = Math.max(pointerStart.x, boxWidth);
		}
		widthDelta = fullWidth - boxWidth;
		heightDelta = fullHeight - boxHeight;
		this._lastWidthDelta = widthDelta;
		this._lastHeightDelta = heightDelta;
		this._lastLocation = this.pointerLocation;
		this._lastPosition = this.pointerPosition;
		this.actualPointerStartPosition = pointerStart;
		this.actualPointerFirstPosition = pointerConnectionFirst;
		this.actualPointerSecondPosition = pointerConnectionSecond;
		this.actualBoxWidth = boxWidth;
		this.actualBoxHeight = boxHeight;
		this.actualBoxFullWidth = fullWidth;
		this.actualBoxFullHeight = fullHeight;
		this.actualBoxTopLeftPosition = boxTopLeft;
		this.actualBoxTopRightPosition = boxTopRight;
		this.actualBoxBottomRightPosition = boxBottomRight;
		this.actualBoxBottomLeftPosition = boxBottomLeft;
		let pc: PointCollection = new PointCollection(0);
		pc.add(pointerOverlapConnectionSecond);
		pc.add(this.actualPointerSecondPosition);
		pc.add(this.actualPointerStartPosition);
		pc.add(this.actualPointerFirstPosition);
		pc.add(pointerOverlapConnectionFirst);
		this.pointerPoints = pc;
		if (this.pointerShape != null) {
			this.pointerShape.points = pc;
		}
		let pc2: PointCollection = new PointCollection(0);
		pc2.add(this.actualPointerSecondPosition);
		pc2.add(this.actualPointerStartPosition);
		pc2.add(this.actualPointerFirstPosition);
		this.pointerOutlinePoints = pc2;
		if (this.pointerOutlineShape != null) {
			this.pointerOutlineShape.points = pc2;
		}
		if (this.pointerVisibility == Visibility.Collapsed) {
			return new Size(1, contentNeedsWidth, contentNeedsHeight);
		}
		return new Size(1, fullWidth, fullHeight);
	}
	destroy(): void {
		this.unbind();
		this.view.destroy();
	}
	hide(): void {
		this._visibility = Visibility.Collapsed;
		this.view.hide();
	}
	render(x: number, y: number): void {
		if (this.isMeasureInvalid) {
			this.measureCore(new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
		}
		this.view.render(x, y);
	}
	private _eventSink: EventProxy = null;
	get eventSink(): EventProxy {
		return this._eventSink;
	}
	set eventSink(value: EventProxy) {
		this._eventSink = value;
	}
	provideRenderer(renderer: DomRenderer): void {
		this.view.provideRenderer(renderer);
	}
	private _bound: boolean = false;
	bind(): void {
		if (!this._bound) {
			if (this.eventSink != null && this.view.container != null) {
				this._bound = true;
				this.eventSink.bindToSource(this.view.container, "pointerTooltip" + Base.getHashCodeStatic(this));
			}
		}
	}
	unbind(): void {
		if (this._bound) {
			if (this.eventSink != null && this.view.container != null) {
				this._bound = false;
				this.eventSink.unbindFromSource(this.view.container, "pointerTooltip" + Base.getHashCodeStatic(this));
			}
			this.eventSink = null;
		}
	}
	private _pointerTooltipStyle: PointerTooltipStyle = null;
	get pointerTooltipStyle(): PointerTooltipStyle {
		return this._pointerTooltipStyle;
	}
	set pointerTooltipStyle(value: PointerTooltipStyle) {
		this._pointerTooltipStyle = value;
	}
	exportVisualData(): any {
		if (this._visibility == Visibility.Collapsed) {
			return null;
		}
		return this.view.exportVisualData();
	}
}

/**
 * @hidden 
 */
export class PointerTooltipView extends Base {
	static $t: Type = markType(PointerTooltipView, 'PointerTooltipView');
	constructor(model: PointerTooltip) {
		super();
		this.model = model;
		this.model.pointerShape = new Polygon();
		this.model.pointerOutlineShape = new Polyline();
		this.container = null;
		this.initializeScalingRatio();
	}
	initializeScalingRatio(): void {
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != this._currentPixelRatio) {
			this._currentPixelRatio = window.devicePixelRatio;
		}
	}
	private _model: PointerTooltip = null;
	private get model(): PointerTooltip {
		return this._model;
	}
	private set model(value: PointerTooltip) {
		this._model = value;
	}
	getDesiredContentSize(availableSize: Size): Size {
		let contentEle = <DomWrapper><any>this.model.content;
		contentEle = contentEle.clone();
		let size = new Size(1, 0, 0);
		if (this.tempContainer == null) {
			this.tempContainer = this.renderer.createElement("div");
			this.tempContainer.addClass("ui-chart-pointer-tooltip-container");
			this.tempContainer.setStyleProperty("position", "absolute");
			this.tempContainer.setStyleProperty("visibility", "hidden");
			this.tempContainer.setStyleProperty("top", "0px");
			this.tempContainer.setStyleProperty("left", "0px");
			this.tempRelativePanel = this.renderer.createElement("div");
			this.tempRelativePanel.setStyleProperty("position", "relative");
			this.tempContentPanel = this.renderer.createElement("div");
			this.tempContentPanel.addClass("ui-chart-pointer-tooltip-content-container");
			this.tempContentPanel.setStyleProperty("position", "absolute");
			this.tempContentPanel.setStyleProperty("top", "0px");
			this.tempContentPanel.setStyleProperty("left", "0px");
			this.tempContainer.append(this.tempRelativePanel);
			this.tempRelativePanel.append(this.tempContentPanel);
		}
		this.tempContainer.remove();
		this.renderer.appendToBody(this.tempContainer);
		this.tempContentPanel.append(contentEle);
		size = new Size(1, this.tempContentPanel.outerWidthWithMargin(), this.tempContentPanel.outerHeightWithMargin());
		this.tempContainer.remove();
		contentEle.remove();
		return size;
	}
	private _tempContainer: DomWrapper = null;
	get tempContainer(): DomWrapper {
		return this._tempContainer;
	}
	set tempContainer(value: DomWrapper) {
		this._tempContainer = value;
	}
	private _tempRelativePanel: DomWrapper = null;
	get tempRelativePanel(): DomWrapper {
		return this._tempRelativePanel;
	}
	set tempRelativePanel(value: DomWrapper) {
		this._tempRelativePanel = value;
	}
	private _tempContentPanel: DomWrapper = null;
	get tempContentPanel(): DomWrapper {
		return this._tempContentPanel;
	}
	set tempContentPanel(value: DomWrapper) {
		this._tempContentPanel = value;
	}
	private _container: DomWrapper = null;
	get container(): DomWrapper {
		return this._container;
	}
	set container(value: DomWrapper) {
		this._container = value;
	}
	private _canvas: DomWrapper = null;
	protected get canvas(): DomWrapper {
		return this._canvas;
	}
	protected set canvas(value: DomWrapper) {
		this._canvas = value;
	}
	private _mainContext: RenderingContext = null;
	protected get mainContext(): RenderingContext {
		return this._mainContext;
	}
	protected set mainContext(value: RenderingContext) {
		this._mainContext = value;
	}
	private _contentContainer: DomWrapper = null;
	protected get contentContainer(): DomWrapper {
		return this._contentContainer;
	}
	protected set contentContainer(value: DomWrapper) {
		this._contentContainer = value;
	}
	private _lastRectangle: Rectangle = null;
	private _shown: boolean = false;
	private _lastCanvasWidth: number = 0;
	private _lastCanvasHeight: number = 0;
	render(x: number, y: number): void {
		if (this.container == null) {
			this.container = this.renderer.createElement("div");
			this.container.addClass("ui-chart-pointer-tooltip-container");
			this.container.setStyleProperty("position", "absolute");
			this.container.setStyleProperty("top", "0px");
			this.container.setStyleProperty("left", "0px");
			let subContainer = this.renderer.createElement("div");
			subContainer.setStyleProperty("position", "relative");
			this.canvas = this.renderer.createElement("canvas");
			this.canvas.setStyleProperty("position", "absolute");
			this.canvas.setStyleProperty("top", "0px");
			this.canvas.setStyleProperty("left", "0px");
			this.contentContainer = this.renderer.createElement("div");
			this.contentContainer.addClass("ui-chart-pointer-tooltip-content-container");
			this.contentContainer.setStyleProperty("position", "absolute");
			this.contentContainer.setStyleProperty("top", "0px");
			this.contentContainer.setStyleProperty("left", "0px");
			subContainer.append(this.canvas);
			subContainer.append(this.contentContainer);
			this.container.append(subContainer);
			this.mainContext = new RenderingContext(new CanvasViewRenderer(), this.renderer.get2DCanvasContext(this.canvas));
			this.container.hide();
			this.renderer.appendToBody(this.container);
		}
		this.model.bind();
		if (this.model._visibility == Visibility.Collapsed && this._shown) {
			this.container.hide();
			this._shown = false;
			return;
		}
		let content: DomWrapper = null;
		if (this.model.content != null) {
			content = <DomWrapper><any>this.model.content;
			content.remove();
		}
		this.contentContainer.removeChildren();
		if (content != null) {
			let cont_ = this.contentContainer;
			let xPos_ = this.model.actualBoxTopLeftPosition.x.toString() + "px";
			let yPos_ = this.model.actualBoxTopLeftPosition.y.toString() + "px";
			cont_.setRawStyleProperty("left", xPos_);
			cont_.setRawStyleProperty("top", yPos_);
			this.contentContainer.append(content);
		}
		let style = this.model.pointerTooltipStyle;
		let thickness: number = 1;
		this.initializeScalingRatio();
		if (style != null) {
			thickness = !isNaN_(style.strokeThickness) ? style.strokeThickness : 1;
		}
		let newWidth = <number>truncate(Math.ceil(this.model.actualBoxFullWidth + (thickness * 2)));
		let newHeight = <number>truncate(Math.ceil(this.model.actualBoxFullHeight + (thickness * 2)));
		if (newWidth != this._lastCanvasWidth || newHeight != this._lastCanvasHeight) {
			this.canvas.setStyleProperty("width", newWidth.toString() + "px");
			this.canvas.setStyleProperty("height", newHeight.toString() + "px");
			this.canvas.setAttribute("width", (newWidth * this._currentPixelRatio).toString());
			this.canvas.setAttribute("height", (newHeight * this._currentPixelRatio).toString());
			this._lastCanvasWidth = newWidth;
			this._lastCanvasHeight = newHeight;
		}
		if (this.mainContext.shouldRender && this._currentPixelRatio != 1) {
			this.mainContext.save();
			this.mainContext.scale(this._currentPixelRatio, this._currentPixelRatio);
		}
		this.mainContext.clearRectangle(0, 0, this._lastCanvasWidth, this._lastCanvasHeight);
		let rect: Rectangle = new Rectangle();
		rect.width = this.model.actualBoxWidth;
		rect.height = this.model.actualBoxHeight;
		rect.canvasLeft = this.model.actualBoxTopLeftPosition.x;
		rect.canvasTop = this.model.actualBoxTopLeftPosition.y;
		if (style != null) {
			rect._fill = style.fillColor != null ? style.fillColor : ((() => {
				let $ret = new Brush();
				$ret.fill = "white";
				return $ret;
			})());
			rect._stroke = style.strokeColor != null ? style.strokeColor : ((() => {
				let $ret = new Brush();
				$ret.fill = "black";
				return $ret;
			})());
			rect.strokeThickness = !isNaN_(style.strokeThickness) ? style.strokeThickness : 1;
			rect.radiusX = !isNaN_(style.cornerRadius) ? style.cornerRadius : 0;
			rect.radiusY = !isNaN_(style.cornerRadius) ? style.cornerRadius : 0;
		} else {
			rect._fill = ((() => {
				let $ret = new Brush();
				$ret.fill = "white";
				return $ret;
			})());
			rect._stroke = ((() => {
				let $ret = new Brush();
				$ret.fill = "black";
				return $ret;
			})());
			rect.strokeThickness = 1;
		}
		this._lastRectangle = rect;
		let fillShape = this.model.pointerShape;
		let outlineShape = this.model.pointerOutlineShape;
		fillShape._fill = rect._fill;
		outlineShape._stroke = rect._stroke;
		this.mainContext.renderRectangle(rect);
		this.mainContext.renderPolygon(fillShape);
		this.mainContext.renderPolyline(outlineShape);
		let x_ = x + "px";
		let y_ = y + "px";
		let container_ = this.container;
		container_.setRawStyleProperty("left", x_);
		container_.setRawStyleProperty("top", y_);
		if (this.model._visibility == Visibility.Visible && !this._shown) {
			this.container.show();
			this._shown = true;
		}
		if (this.mainContext.shouldRender && this._currentPixelRatio != 1) {
			this.mainContext.restore();
		}
	}
	exportVisualData(): any {
		return this.model.seriesVisualDataManager.exportPointerTooltipData(this.model.pointerShape, this.model.pointerOutlineShape, this._lastRectangle, new Rect(0, 0, 0, this.model.actualBoxFullWidth, this.model.actualBoxFullHeight));
	}
	private _currentWidth: number = -1;
	private _currentHeight: number = -1;
	private _currentPixelRatio: number = 1;
	contentSizeChanged(Content: any): boolean {
		let oldWidth = this._currentWidth;
		let oldHeight = this._currentHeight;
		let size = this.getDesiredContentSize(new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
		if (size.width != oldWidth || size.height != oldHeight) {
			return true;
		}
		return false;
	}
	destroy(): void {
		this.renderer = null;
		this.container.hide();
		this.container.remove();
		this.container = null;
		this.tempContainer = null;
		this.tempRelativePanel = null;
		this.tempContentPanel = null;
		this.container = null;
		this.canvas = null;
		this.contentContainer = null;
	}
	hide(): void {
		this.container.hide();
	}
	private _renderer: DomRenderer = null;
	get renderer(): DomRenderer {
		return this._renderer;
	}
	set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	provideRenderer(renderer: DomRenderer): void {
		this.renderer = renderer;
	}
}


