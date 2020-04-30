/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, PropertyChangedEventArgs, IList, IList_$type, ICollection, ICollection_$type, EventArgs, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, runOn, delegateRemove, delegateCombine, fromEnum, Type, markType } from "igniteui-core/type";
import { IAxisAnnotationManager, IAxisAnnotationManager_$type } from "./IAxisAnnotationManager";
import { Axis } from "./Axis";
import { List$1 } from "igniteui-core/List$1";
import { IAxisAnnotation } from "./IAxisAnnotation";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { TextBlock } from "igniteui-core/TextBlock";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Rect } from "igniteui-core/Rect";
import { LabelPosition } from "./LabelPosition";
import { SeriesViewer } from "./SeriesViewer";
import { Shape } from "igniteui-core/Shape";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { AxisLabelPanelBaseView } from "./AxisLabelPanelBaseView";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { AxisAnnotationCollection } from "./AxisAnnotationCollection";
import { CategoryMode } from "./CategoryMode";

/**
 * @hidden 
 */
export class AxisAnnotationManager extends Base implements IAxisAnnotationManager {
	static $t: Type = markType(AxisAnnotationManager, 'AxisAnnotationManager', (<any>Base).$type, [IAxisAnnotationManager_$type]);
	private _owner: Axis = null;
	get owner(): Axis {
		return this._owner;
	}
	set owner(value: Axis) {
		this._owner = value;
	}
	onAddAnnotations(axis: Axis): void {
		let textBlockCount: number = 0;
		for (let i = 0; i < axis.autoAnnotations.count; i++) {
			textBlockCount = this.addAnnotation(axis, axis.autoAnnotations._inner[i], textBlockCount);
		}
		for (let i1 = 0; i1 < axis.annotations.count; i1++) {
			textBlockCount = this.addAnnotation(axis, axis.annotations._inner[i1], textBlockCount);
		}
		axis.annotationBackings.count = textBlockCount;
		axis.annotationTextBlocks.count = textBlockCount;
	}
	private addAnnotation(axis: Axis, axisAnnotation: IAxisAnnotation, textBlockCount: number): number {
		let val: number = NaN;
		val = <number>axisAnnotation.value;
		let pos = new LabelPosition(axis.scaleValue(val));
		if (axis.isCategoryDateTime) {
			let cat = <CategoryAxisBase>axis;
			if (cat.categoryMode == CategoryMode.Mode2) {
				let windowRect = axis.seriesViewer.actualWindowRect;
				let viewportRect = axis.viewportRect;
				let effectiveViewportRect = axis.getCurrentEffectiveViewport();
				pos.value += axis.isInverted ? -cat.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * 0.5 : cat.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * 0.5;
			}
		}
		let position = pos.value;
		if (axis.isVertical) {
			if (pos.value > axis.viewportRect.bottom || pos.value < axis.viewportRect.top) {
				return textBlockCount;
			}
		} else {
			if (pos.value > axis.viewportRect.right || pos.value < axis.viewportRect.left) {
				return textBlockCount;
			}
		}
		let backing = axis.annotationBackings.item(textBlockCount);
		let tb = axis.annotationTextBlocks.item(textBlockCount);
		let z = 100 + textBlockCount * 2;
		textBlockCount++;
		tb.text = axisAnnotation.resolveLabelValue();
		if (axisAnnotation.textColor != null) {
			tb.fill = axisAnnotation.textColor;
		}
		backing._fill = axisAnnotation.background;
		backing._stroke = axisAnnotation.outline;
		backing.strokeThickness = axisAnnotation.strokeThickness;
		backing.canvasZIndex = z;
		tb.canvasZIndex = z + 1;
		axisAnnotation.checkForExtentReset(() => pos.resetOverlayExtent = true);
		pos.isOverlay = true;
		pos.overlayPadding = axisAnnotation.backgroundPadding;
		axis.labelPositions.add(pos);
		axis.labelDataContext.add1(tb.text);
		return textBlockCount;
	}
	arrangeAnnotations(axis: Axis, view: AxisLabelPanelBaseView, textBlocks: List$1<FrameworkElement>, labelBounds: List$1<Rect>, useRotation: boolean, effectiveAngle: number, leftMargin: number, topMargin: number, rightMargin: number, bottomMargin: number): void {
		for (let i = 0; i < axis.annotationTextBlocks.count; i++) {
			let backing = axis.annotationBackings.item(i);
			let textIndex: number = -1;
			for (let j = textBlocks.count - 1; j >= 0; j--) {
				if (textBlocks._inner[j] == axis.annotationTextBlocks.item(i)) {
					textIndex = j;
					break;
				}
			}
			if (textIndex == -1) {
				continue;
			}
			if (useRotation) {
				view.arrangeBackingToText(backing, axis.annotationTextBlocks.item(i), axis.labelPositions._inner[textIndex], labelBounds._inner[textIndex], leftMargin, topMargin, rightMargin, bottomMargin);
				view.setBackingRotationTransform(backing, axis.annotationTextBlocks.item(i), axis.labelPositions._inner[textIndex], labelBounds._inner[textIndex], leftMargin, topMargin, rightMargin, bottomMargin, effectiveAngle);
			} else {
				view.arrangeBackingToText(backing, axis.annotationTextBlocks.item(i), axis.labelPositions._inner[textIndex], labelBounds._inner[textIndex], leftMargin, topMargin, rightMargin, bottomMargin);
			}
		}
	}
	private annotation_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.owner.mustInvalidateLabels = true;
		this.owner.renderAxis();
	}
	private onAnnotationsCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let i = 0; i < e.oldItems.count; i++) {
				let item = e.oldItems.item(i);
				if (item == null) {
					continue;
				}
				let annotation = <IAxisAnnotation><any>item;
				annotation.propertyChanged = delegateRemove(annotation.propertyChanged, runOn(this, this.annotation_PropertyChanged));
			}
		}
		if (e.newItems != null) {
			for (let i1 = 0; i1 < e.newItems.count; i1++) {
				let item1 = e.newItems.item(i1);
				if (item1 == null) {
					continue;
				}
				let annotation1 = <IAxisAnnotation><any>item1;
				annotation1.propertyChanged = delegateCombine(annotation1.propertyChanged, runOn(this, this.annotation_PropertyChanged));
			}
		}
		this.owner.mustInvalidateLabels = true;
		this.owner.renderAxis();
	}
	onAnnotionsChanged(axis: Axis, annotations: AxisAnnotationCollection, e: NotifyCollectionChangedEventArgs): void {
		this.onAnnotationsCollectionChanged(e);
	}
	onAnnotionsReset(axis: Axis, annotations: AxisAnnotationCollection, e: EventArgs): void {
		for (let item of fromEnum<IAxisAnnotation>(annotations)) {
			item.propertyChanged = delegateRemove(item.propertyChanged, runOn(this, this.annotation_PropertyChanged));
		}
	}
	onAutoAnnotionsChanged(axis: Axis, autoAnnotations: AxisAnnotationCollection, e: NotifyCollectionChangedEventArgs): void {
		this.onAnnotationsCollectionChanged(e);
	}
	onAutoAnnotionsReset(axis: Axis, autoAnnotations: AxisAnnotationCollection, e: EventArgs): void {
		for (let item of fromEnum<IAxisAnnotation>(autoAnnotations)) {
			item.propertyChanged = delegateRemove(item.propertyChanged, runOn(this, this.annotation_PropertyChanged));
		}
	}
}


