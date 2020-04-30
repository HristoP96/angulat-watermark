/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAxisLabelPanelBase } from "./HorizontalAxisLabelPanelBase";
import { Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, Number_$type, fromEnum, Boolean_$type, Type, markType } from "igniteui-core/type";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { Axis } from "./Axis";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { AxisLabelPanelBaseView } from "./AxisLabelPanelBaseView";
import { Size } from "igniteui-core/Size";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { LabelPosition } from "./LabelPosition";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { HorizontalAxisLabelPanelBaseView } from "./HorizontalAxisLabelPanelBaseView";
import { TransformGroup } from "igniteui-core/TransformGroup";
import { RotateTransform } from "igniteui-core/RotateTransform";
import { Transform } from "igniteui-core/Transform";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { UIElement } from "igniteui-core/UIElement";
import { ViewportUtils } from "./ViewportUtils";

/**
 * @hidden 
 */
export class RadialAxisLabelPanel extends HorizontalAxisLabelPanelBase {
	static $t: Type = markType(RadialAxisLabelPanel, 'RadialAxisLabelPanel', (<any>HorizontalAxisLabelPanelBase).$type);
	createView(): AxisLabelPanelBaseView {
		return new RadialAxisLabelPanelView(this);
	}
	onViewCreated(view: AxisLabelPanelBaseView): void {
		super.onViewCreated(view);
		this.radialView = <RadialAxisLabelPanelView>view;
	}
	private _radialView: RadialAxisLabelPanelView;
	get radialView(): RadialAxisLabelPanelView {
		return this._radialView;
	}
	set radialView(value: RadialAxisLabelPanelView) {
		this._radialView = value;
	}
	private _rotationCenter: Point = null;
	get rotationCenter(): Point {
		return this._rotationCenter;
	}
	set rotationCenter(value: Point) {
		this._rotationCenter = value;
	}
	private _crossingAngle: number = 0;
	get crossingAngle(): number {
		return this._crossingAngle;
	}
	set crossingAngle(value: number) {
		this._crossingAngle = value;
	}
	protected get axisIsNotEmbedded(): boolean {
		return this.axis.labelSettings != null && (this.axis.labelSettings.actualLocation != AxisLabelsLocation.InsideBottom && this.axis.labelSettings.actualLocation != AxisLabelsLocation.InsideTop);
	}
	protected get axisIsEmbedded(): boolean {
		return !this.axisIsNotEmbedded;
	}
	shouldTryStagger(): boolean {
		return this.foundCollisions && (!this.useRotation || this.getEffectiveAngle() == -180);
	}
	protected shouldVerticalAlign(): boolean {
		return !this.useStaggering;
	}
	applyPanelRotation(finalSize: Size): void {
		super.applyPanelRotation(finalSize);
		if (this.crossingAngle % 360 == 0 || this.axisIsNotEmbedded) {
			this.radialView.clearPanelRotation();
		} else {
			this.radialView.applyPanelRotation(finalSize);
		}
	}
	getEffectiveAngle(): number {
		let angle: number = super.getEffectiveAngle();
		if (this.axisIsEmbedded) {
			angle -= (this.crossingAngle * 180) / Math.PI;
		}
		return angle;
	}
	shouldRotate(): boolean {
		return this.getEffectiveAngle() % 360 != 0;
	}
	protected shouldClip(): boolean {
		if (this.axisIsNotEmbedded) {
			return true;
		}
		let angle: number = this.crossingAngle * 180 / Math.PI;
		if (angle < 30 || angle > 330 || (angle > 150 && angle < 210)) {
			return true;
		}
		return false;
	}
	private _toHide: List$1<number> = new List$1<number>(Number_$type, 0);
	setLabelRotationTransform(label: FrameworkElement, angle: number): void {
		let angleRadians: number = angle * Math.PI / 180;
		let yFactor: number = Math.abs(Math.sin(angleRadians));
		if (this.axis.labelSettings != null && this.axis.labelSettings.actualLocation == AxisLabelsLocation.InsideTop) {
			yFactor = yFactor * -1;
		}
		this.radialView.setLabelRotationalTransform(label, angle, yFactor);
	}
	protected minimumPosition(): number {
		let min: number = 1.7976931348623157E+308;
		for (let pos of fromEnum<LabelPosition>(this.labelPositions)) {
			min = Math.min(pos.value, min);
		}
		return min;
	}
	protected maximumPosition(): number {
		let max: number = -1.7976931348623157E+308;
		for (let pos of fromEnum<LabelPosition>(this.labelPositions)) {
			max = Math.max(pos.value, max);
		}
		return max;
	}
	protected hideOptionalLabels(rectangles: List$1<Rect>, isOverlayList: List$1<boolean>): void {
		let val: number;
		if (this.axis.isInverted) {
			val = this.minimumPosition();
		} else {
			val = this.maximumPosition();
		}
		let toHide: List$1<number> = new List$1<number>(Number_$type, 0);
		let subOverlay: List$1<boolean> = new List$1<boolean>(Boolean_$type, 0);
		for (let i = 0; i < this.labelPositions.count; i++) {
			let pos: LabelPosition = this.labelPositions._inner[i];
			if (pos.value == val && !pos.isOverlay) {
				toHide.add(this.labelPositions.indexOf(pos));
			}
		}
		this._toHide = toHide;
		let notHidden = new List$1<Rect>((<any>Rect).$type, 0);
		for (let i1 = 0; i1 < rectangles.count; i1++) {
			let rectangle = rectangles._inner[i1];
			let isOverlay = this.labelPositions._inner[i1].isOverlay;
			if (!this._toHide.contains(i1)) {
				notHidden.add(rectangle);
				subOverlay.add(isOverlay);
			}
		}
		this.foundCollisions = this.detectCollisions(notHidden, subOverlay);
	}
	shouldDisplay(index: number, bounds: Rect): boolean {
		if (this._toHide.contains(index)) {
			return false;
		} else {
			return super.shouldDisplay(index, bounds);
		}
	}
	protected showOptionalLabels(): void {
		this._toHide = new List$1<number>(Number_$type, 0);
		super.showOptionalLabels();
	}
	getDefaultLabelsLocation(): AxisLabelsLocation {
		return AxisLabelsLocation.InsideBottom;
	}
	validLocation(location: AxisLabelsLocation): boolean {
		return location == AxisLabelsLocation.InsideBottom || location == AxisLabelsLocation.InsideTop || location == AxisLabelsLocation.OutsideBottom || location == AxisLabelsLocation.OutsideTop;
	}
	protected createTicks(): void {
	}
}

/**
 * @hidden 
 */
export class RadialAxisLabelPanelView extends HorizontalAxisLabelPanelBaseView {
	static $t: Type = markType(RadialAxisLabelPanelView, 'RadialAxisLabelPanelView', (<any>HorizontalAxisLabelPanelBaseView).$type);
	private _radialModel: RadialAxisLabelPanel = null;
	protected get radialModel(): RadialAxisLabelPanel {
		return this._radialModel;
	}
	protected set radialModel(value: RadialAxisLabelPanel) {
		this._radialModel = value;
	}
	constructor(model: RadialAxisLabelPanel) {
		super(model);
		this.radialModel = model;
	}
	setLabelRotationalTransform(label: FrameworkElement, angle: number, yFactor: number): void {
		let width = this.getDesiredWidth(label);
		let height = this.getDesiredHeight(label);
		let g: TransformGroup = new TransformGroup();
		g.children.add(((() => {
			let $ret = new RotateTransform();
			$ret.angle = angle;
			$ret.centerX = width / 2;
			$ret.centerY = height / 2;
			return $ret;
		})()));
		g.children.add(((() => {
			let $ret = new TranslateTransform();
			$ret.x = width / -2;
			$ret.y = width / 2 * yFactor;
			return $ret;
		})()));
		label.renderTransform = g;
	}
	clearPanelRotation(): void {
		this.model.renderTransform = null;
	}
	applyPanelRotation(finalSize: Size): void {
		let panelTop: number = ViewportUtils.transformYToViewport(0.5, this.model.windowRect, this.model.viewportRect);
		this.model.renderTransform = ((() => {
			let $ret = new RotateTransform();
			$ret.angle = (this.radialModel.crossingAngle * 180) / Math.PI;
			$ret.centerX = this.radialModel.rotationCenter.x;
			$ret.centerY = (this.radialModel.rotationCenter.y * finalSize.height) + panelTop;
			return $ret;
		})());
	}
	protected onExtentChangedAfterArrange(): void {
		super.onExtentChangedAfterArrange();
		this.model.arrangeLabels(new Size(1, this.model.labelViewport.width, this.model.labelViewport.height));
	}
}


