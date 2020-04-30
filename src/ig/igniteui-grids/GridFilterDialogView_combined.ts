/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, runOn, Type, markType, PointUtil, delegateCombine, delegateRemove, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Enum, EnumUtil, IList, IList_$type, ICollection, ICollection_$type } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent, DomWrapperPosition } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Path } from "igniteui-core/Path";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { truncate, isNaN_ } from "igniteui-core/number";
import { List$1 } from "igniteui-core/List$1";
import { GridFilterDialogViewModelRow } from "./GridFilterDialogViewModelRow";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";
import { GridFilterDialogOpeningEventArgs } from "./GridFilterDialogOpeningEventArgs";
import { ColumnComparisonConditionOperatorType, ColumnComparisonConditionOperatorType_$type } from "./ColumnComparisonConditionOperatorType";
import { ColumnComparisonFilterCondition } from "./ColumnComparisonFilterCondition";
import { GridFilterDialogFilterChangeEventArgs } from "./GridFilterDialogFilterChangeEventArgs";
import { ColumnFilterConditionGroup } from "./ColumnFilterConditionGroup";
import { Stack$1 } from "igniteui-core/Stack$1";
import { GridFilterDialogViewModelGroupingLevel } from "./GridFilterDialogViewModelGroupingLevel";
import { GridFilterDialogViewModelGrouping } from "./GridFilterDialogViewModelGrouping";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathSegment } from "igniteui-core/PathSegment";
import { Shape } from "igniteui-core/Shape";
import { GridFilterDialogViewModelGroupingLevelCollection } from "./GridFilterDialogViewModelGroupingLevelCollection";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";

/**
 * @hidden 
 */
export class GridFilterDialogView extends Base {
	static $t: Type = markType(GridFilterDialogView, 'GridFilterDialogView');
	constructor(model: GridFilterDialog) {
		super();
		this.model = model;
	}
	private _model: GridFilterDialog = null;
	get model(): GridFilterDialog {
		return this._model;
	}
	set model(value: GridFilterDialog) {
		this._model = value;
	}
	private _indicator: Path = new Path();
	private _currentArrowWidth: number = 0;
	private get currentArrowWidth(): number {
		return this._currentArrowWidth;
	}
	private set currentArrowWidth(value: number) {
		this._currentArrowWidth = value;
	}
	private _currentArrowHeight: number = 0;
	private get currentArrowHeight(): number {
		return this._currentArrowHeight;
	}
	private set currentArrowHeight(value: number) {
		this._currentArrowHeight = value;
	}
	render(): void {
		if (this.currentArrowWidth != this.currentWidth || this.currentArrowHeight != this.currentHeight) {
			this.makeIcon();
			this.currentArrowWidth = this.currentWidth;
			this.currentArrowHeight = this.currentHeight;
		}
		let dim = Math.min(this.currentWidth, this.currentHeight);
		let center = <Point>{ $type: Point_$type, x: this.currentWidth / 2, y: this.currentHeight / 2 };
		let pixelWidth = Math.round(this.currentWidth * this._currentPixelRatio);
		let pixelHeight = Math.round(this.currentHeight * this._currentPixelRatio);
		if (this._canvasWidth != pixelWidth || this._canvasHeight != pixelHeight) {
			this.canvas.setAttribute("width", pixelWidth.toString());
			this.canvas.setAttribute("height", pixelHeight.toString());
			this.canvas.setStyleProperty("width", this.currentWidth.toString() + "px");
			this.canvas.setStyleProperty("height", this.currentHeight.toString() + "px");
			this.canvas.setStyleProperty("top", "0px");
			this.canvas.setStyleProperty("left", "0px");
			this._canvasWidth = <number>truncate(Math.round(pixelWidth));
			this._canvasHeight = <number>truncate(Math.round(pixelHeight));
		}
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.save();
			this.context.scale(this._currentPixelRatio, this._currentPixelRatio);
		}
		this.context.clearRectangle(0, 0, this.currentWidth, this.currentHeight);
		this.context.renderPath(this._indicator);
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.restore();
		}
	}
	private makeIcon(): void {
		this.model.makeIcon(this.currentWidth, this.currentHeight, this._indicator);
	}
	private _canvas: DomWrapper = null;
	private get canvas(): DomWrapper {
		return this._canvas;
	}
	private set canvas(value: DomWrapper) {
		this._canvas = value;
	}
	private _context: RenderingContext = null;
	private get context(): RenderingContext {
		return this._context;
	}
	private set context(value: RenderingContext) {
		this._context = value;
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	private _canvasWidth: number = 0;
	private _canvasHeight: number = 0;
	private _currentPixelRatio: number = 1;
	onContainerProvided(container: any): void {
		if (container == null) {
			if (this.canvas != null) {
				this.canvas.destroy();
			}
			this.canvas = null;
			this.container = null;
			this.context = null;
			return;
		}
		this._currentPixelRatio = (isNaN_(this.model.pixelScalingRatio) ? this.model.actualPixelScalingRatio : this.model.pixelScalingRatio);
		let cont = <DomRenderer><any>container;
		this.container = cont;
		this.container.rootWrapper.addClass("ui-radialgauge-container");
		let pixelScale = this._currentPixelRatio;
		let containerWidth = Math.round(<number>cont.rootWrapper.width());
		let containerHeight = Math.round(<number>cont.rootWrapper.height());
		let pixelWidth = containerWidth * pixelScale;
		let pixelHeight = containerHeight * pixelScale;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		let canv = this.container.createElement("canvas");
		canv.setStyleProperty("position", "absolute");
		this.container.append(canv);
		this._canvasWidth = <number>truncate(Math.round(pixelWidth));
		this._canvasHeight = <number>truncate(Math.round(pixelHeight));
		canv.setAttribute("width", pixelWidth.toString());
		canv.setAttribute("height", pixelHeight.toString());
		canv.setStyleProperty("width", containerWidth.toString() + "px");
		canv.setStyleProperty("height", containerHeight.toString() + "px");
		canv.listen("mousedown", runOn(this, this.canvasMouseDown));
		canv.listen("mouseup", runOn(this, this.canvasMouseUp));
		this.currentWidth = containerWidth;
		this.currentHeight = containerHeight;
		this.canvas = canv;
		let context = this.container.get2DCanvasContext(this.canvas);
		this.context = new RenderingContext(new CanvasViewRenderer(), context);
		if (isNaN_(this.model.pixelScalingRatio)) {
			this.model.actualPixelScalingRatio = window.devicePixelRatio;
			this._currentPixelRatio = this.model.actualPixelScalingRatio;
		}
		this.render();
	}
	private canvasMouseDown(arg1: NormalizedEvent): void {
		arg1.preventDefault();
		arg1.stopPropagation();
	}
	private canvasMouseUp(arg1: NormalizedEvent): void {
		arg1.preventDefault();
		arg1.stopPropagation();
		if (!this.isOpen) {
			this.model.openDialog();
		} else {
			this.model.closeDialog(this.panel.vM, false);
		}
	}
	scheduleRender(): void {
		this.render();
	}
	private _currentWidth: number = 0;
	private get currentWidth(): number {
		return this._currentWidth;
	}
	private set currentWidth(value: number) {
		this._currentWidth = value;
	}
	private _currentHeight: number = 0;
	private get currentHeight(): number {
		return this._currentHeight;
	}
	private set currentHeight(value: number) {
		this._currentHeight = value;
	}
	onSizeChanged(width: number, height: number): void {
		if (isNaN_(this.model.pixelScalingRatio)) {
			this.model.actualPixelScalingRatio = window.devicePixelRatio;
			this._currentPixelRatio = this.model.actualPixelScalingRatio;
		}
		this.currentWidth = width;
		this.currentHeight = height;
		this.render();
	}
	getDefaultIconStroke(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(138, 0, 0, 0);
			return $ret;
		})());
	}
	private _isOpen: boolean = false;
	private get isOpen(): boolean {
		return this._isOpen;
	}
	private set isOpen(value: boolean) {
		this._isOpen = value;
	}
	showDialog(vm: GridFilterDialogViewModel): void {
		this.isOpen = true;
		let panel = new GridFilterDialogPanel(this.canvas, this.container);
		panel.dialog = this.model;
		panel.open(vm);
		this.panel = panel;
	}
	private _panel: GridFilterDialogPanel = null;
	private get panel(): GridFilterDialogPanel {
		return this._panel;
	}
	private set panel(value: GridFilterDialogPanel) {
		this._panel = value;
	}
	closeDialog(): void {
		this.isOpen = false;
		if (this.panel != null) {
			this.panel.close();
			this.panel.destroy();
			this.panel = null;
		}
	}
}

/**
 * @hidden 
 */
export class GridFilterDialogPanel extends Base {
	static $t: Type = markType(GridFilterDialogPanel, 'GridFilterDialogPanel');
	constructor(parent: DomWrapper, parentContainer: DomRenderer) {
		super();
		let container = parentContainer.createElement("div");
		let subRenderer: DomRenderer = parentContainer.getSubRenderer(container);
		container.setStyleProperty("position", "absolute");
		container.setStyleProperty("top", "0px");
		container.setStyleProperty("left", "0px");
		container.setStyleProperty("display", "none");
		container.setStyleProperty("z-index", "10000");
		container.setStyleProperty("opacity", ".9");
		container.setStyleProperty("background-color", "#aaa");
		container.setStyleProperty("border-radius", "3px");
		container.setStyleProperty("boxShadow", "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)");
		this.parentContainer = parent;
		this.subRenderer = subRenderer;
		this.container = container;
		this.rowContainer = subRenderer.createElement("div");
		this.container.append(this.rowContainer);
		this.buttonsContainer = subRenderer.createElement("div");
		this.container.append(this.buttonsContainer);
		this.addConditionButton = subRenderer.createElement("input");
		this.addConditionButton.setAttribute("type", "button");
		this.addConditionButton.setProperty("value", "add condition");
		this.applyButton = subRenderer.createElement("input");
		this.applyButton.setAttribute("type", "button");
		this.applyButton.setProperty("value", "apply");
		this.resetButton = subRenderer.createElement("input");
		this.resetButton.setAttribute("type", "button");
		this.resetButton.setProperty("value", "reset");
		this.buttonsContainer.append(this.addConditionButton);
		this.buttonsContainer.append(this.applyButton);
		this.buttonsContainer.append(this.resetButton);
		this.addConditionButton.listen("click", runOn(this, this.onAddCondition));
		this.applyButton.listen("click", runOn(this, this.onApplyClicked));
		this.resetButton.listen("click", runOn(this, this.onResetClicked));
		this.addConditionButton.setStyleProperty("opacity", ".9");
		this.addConditionButton.setStyleProperty("margin", "3px");
		this.applyButton.setStyleProperty("opacity", ".9");
		this.applyButton.setStyleProperty("margin", "3px");
		this.resetButton.setStyleProperty("opacity", ".9");
		this.resetButton.setStyleProperty("margin", "3px");
	}
	private onAddCondition(arg1: NormalizedEvent): void {
		this.vM.addNewRow();
	}
	private onResetClicked(arg1: NormalizedEvent): void {
		this.dialog.closeDialog(this.vM, true);
	}
	private onApplyClicked(arg1: NormalizedEvent): void {
		this.dialog.closeDialog(this.vM, false);
	}
	private _dialog: GridFilterDialog = null;
	get dialog(): GridFilterDialog {
		return this._dialog;
	}
	set dialog(value: GridFilterDialog) {
		this._dialog = value;
	}
	private _parentContainer: DomWrapper = null;
	get parentContainer(): DomWrapper {
		return this._parentContainer;
	}
	set parentContainer(value: DomWrapper) {
		this._parentContainer = value;
	}
	private _subRenderer: DomRenderer = null;
	get subRenderer(): DomRenderer {
		return this._subRenderer;
	}
	set subRenderer(value: DomRenderer) {
		this._subRenderer = value;
	}
	private _container: DomWrapper = null;
	get container(): DomWrapper {
		return this._container;
	}
	set container(value: DomWrapper) {
		this._container = value;
	}
	private _rowContainer: DomWrapper = null;
	get rowContainer(): DomWrapper {
		return this._rowContainer;
	}
	set rowContainer(value: DomWrapper) {
		this._rowContainer = value;
	}
	private _vM: GridFilterDialogViewModel = null;
	get vM(): GridFilterDialogViewModel {
		return this._vM;
	}
	set vM(value: GridFilterDialogViewModel) {
		this._vM = value;
	}
	private _buttonsContainer: DomWrapper = null;
	get buttonsContainer(): DomWrapper {
		return this._buttonsContainer;
	}
	set buttonsContainer(value: DomWrapper) {
		this._buttonsContainer = value;
	}
	private _applyButton: DomWrapper = null;
	get applyButton(): DomWrapper {
		return this._applyButton;
	}
	set applyButton(value: DomWrapper) {
		this._applyButton = value;
	}
	private _resetButton: DomWrapper = null;
	get resetButton(): DomWrapper {
		return this._resetButton;
	}
	set resetButton(value: DomWrapper) {
		this._resetButton = value;
	}
	private _addConditionButton: DomWrapper = null;
	get addConditionButton(): DomWrapper {
		return this._addConditionButton;
	}
	set addConditionButton(value: DomWrapper) {
		this._addConditionButton = value;
	}
	open(vm: GridFilterDialogViewModel): void {
		vm.onModified = delegateCombine(vm.onModified, runOn(this, this.vm_OnModified));
		this.vM = vm;
		this.refreshView();
		this.container.setStyleProperty("left", this.parentContainer.getOffset().left + "px");
		this.container.setStyleProperty("top", (this.parentContainer.getOffset().top + this.parentContainer.outerHeight()) + "px");
		this.container.setStyleProperty("display", "block");
		this.subRenderer.appendToBody(this.container);
	}
	close(): void {
		let $t = this.vM;
		$t.onModified = delegateRemove($t.onModified, runOn(this, this.vm_OnModified));
		this.vM = null;
		this.container.setStyleProperty("display", "none");
		this.container.remove();
	}
	destroy(): void {
		this.subRenderer.destroy();
		this.container = null;
		this.rowContainer = null;
		this.applyButton = null;
		this.buttonsContainer = null;
		this.resetButton = null;
		if (this.vM != null) {
			let $t = this.vM;
			$t.onModified = delegateRemove($t.onModified, runOn(this, this.vm_OnModified));
		}
		this.vM = null;
	}
	private _preventBounce: boolean = false;
	private vm_OnModified(vm: GridFilterDialogViewModel): void {
		if (this._preventBounce) {
			return;
		}
		this.refreshView();
	}
	private refreshView(): void {
		for (let i = 0; i < this.vM.rows.count; i++) {
			let row: DomWrapper = null;
			if (i < this.rowContainer.getChildCount()) {
				row = this.rowContainer.getChildAt(i);
			} else {
				row = this.subRenderer.createElement("div");
				this.rowContainer.append(row);
			}
			this.reconcileRow(i, row, this.vM.rows._inner[i]);
		}
		while (this.rowContainer.getChildCount() > this.vM.rows.count) {
			let stale = this.rowContainer.getChildAt(this.rowContainer.getChildCount() - 1);
			stale.remove();
		}
	}
	private reconcileRow(index: number, row: DomWrapper, vmRow: GridFilterDialogViewModelRow): void {
		let mustCreateSelect: boolean = false;
		let mustCreateOperand1: boolean = false;
		let mustCreateDeleteButton: boolean = false;
		let mustDeleteOperand1: boolean = false;
		let needOperand1: boolean = this.getOperandCount(vmRow) > 0;
		if (row.getChildCount() == 0) {
			mustCreateSelect = true;
			mustCreateOperand1 = needOperand1;
			mustCreateDeleteButton = true;
		} else {
			if (needOperand1 && row.getChildCount() == 2) {
				mustCreateOperand1 = true;
			}
			if (!needOperand1 && row.getChildCount() == 3) {
				mustDeleteOperand1 = true;
			}
		}
		let selectElement: DomWrapper = null;
		let operand1Element: DomWrapper = null;
		let deleteButton: DomWrapper = null;
		if (mustCreateSelect) {
			selectElement = this.subRenderer.createElement("select");
			this.fillSelectElement(selectElement, vmRow);
			selectElement.listen("change", runOn(this, this.onSelectChanged));
			selectElement.setStyleProperty("opacity", ".9");
			selectElement.setStyleProperty("margin", "3px");
			row.append(selectElement);
		} else {
			selectElement = row.getChildAt(0);
		}
		if (mustCreateOperand1) {
			operand1Element = this.subRenderer.createElement("input");
			operand1Element.setAttribute("type", "text");
			operand1Element.listen("input", runOn(this, this.onOperandChanged));
			operand1Element.setStyleProperty("opacity", ".9");
			operand1Element.setStyleProperty("margin", "3px");
			if (row.getChildCount() == 2) {
				let del = row.getChildAt(row.getChildCount() - 1);
				del.before(operand1Element);
			} else {
				row.append(operand1Element);
			}
		} else {
			operand1Element = row.getChildAt(1);
		}
		if (mustDeleteOperand1) {
			let op = row.getChildAt(1);
			op.remove();
		}
		if (mustCreateDeleteButton) {
			deleteButton = this.subRenderer.createElement("input");
			deleteButton.setAttribute("type", "button");
			deleteButton.setProperty("value", "X");
			deleteButton.listen("click", runOn(this, this.onDeleteClicked));
			deleteButton.setStyleProperty("opacity", ".9");
			deleteButton.setStyleProperty("margin", "3px");
			row.append(deleteButton);
		} else {
			deleteButton = row.getChildAt(row.getChildCount() - 1);
		}
		this._preventBounce = true;
		selectElement.setAttribute("data-index", index.toString());
		if (!stringIsNullOrEmpty(vmRow.currentOperator)) {
			selectElement.setProperty("value", vmRow.currentOperator);
		}
		if (row.getChildCount() > 2) {
			operand1Element.setAttribute("data-index", index.toString());
			if (vmRow.operand1 != null) {
				operand1Element.setProperty("value", vmRow.operand1);
			}
		}
		deleteButton.setAttribute("data-index", index.toString());
		this._preventBounce = false;
	}
	private fillSelectElement(selectElement: DomWrapper, vmRow: GridFilterDialogViewModelRow): void {
		selectElement.removeChildren();
		for (let i = 0; i < vmRow.operators.length; i++) {
			let option = this.subRenderer.createElement("option");
			option.setAttribute("value", vmRow.operators[i]);
			option.setText(vmRow.operators[i]);
			selectElement.append(option);
		}
	}
	private onDeleteClicked(arg1: NormalizedEvent): void {
		let index = this.getRowIndex(arg1);
		this.vM.rows.removeAt(index);
	}
	private getRowIndex(arg: NormalizedEvent): number {
		let originalEvent_ = arg.originalEvent;
		let currentTarget_ = originalEvent_.currentTarget;
		return parseInt(<string>((currentTarget_ as HTMLElement).getAttribute('data-index')));
	}
	private onOperandChanged(arg1: NormalizedEvent): void {
		this._preventBounce = true;
		let index = this.getRowIndex(arg1);
		let value = this.rowContainer.getChildAt(index).getChildAt(1).getProperty("value");
		this.vM.rows._inner[index].operand1 = value;
		this._preventBounce = false;
	}
	private onSelectChanged(arg1: NormalizedEvent): void {
		this._preventBounce = true;
		let index = this.getRowIndex(arg1);
		let value = this.rowContainer.getChildAt(index).getChildAt(0).getProperty("value");
		this.vM.rows._inner[index].currentOperator = <string>value;
		this._preventBounce = false;
	}
	private getOperandCount(vmRow: GridFilterDialogViewModelRow): number {
		return vmRow.operandNumber[this.getOpIndex(vmRow)];
	}
	private getOpIndex(vmRow: GridFilterDialogViewModelRow): number {
		for (let i = 0; i < vmRow.operators.length; i++) {
			if (vmRow.operators[i] == vmRow.currentOperator) {
				return i;
			}
		}
		return 0;
	}
}

/**
 * @hidden 
 */
export class GridFilterDialog extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridFilterDialog, 'GridFilterDialog', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _isAnimationEnabled: boolean = true;
	static readonly isAnimationEnabledPropertyName: string = "IsAnimationEnabled";
	get isAnimationEnabled(): boolean {
		return this._isAnimationEnabled;
	}
	set isAnimationEnabled(value: boolean) {
		let oldValue = this._isAnimationEnabled;
		this._isAnimationEnabled = value;
		if (oldValue != this._isAnimationEnabled) {
			this.onPropertyChanged(GridFilterDialog.isAnimationEnabledPropertyName, oldValue, this._isAnimationEnabled);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.onPropertyChanged(GridFilterDialog.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.onPropertyChanged(GridFilterDialog.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GridFilterDialog.pixelScalingRatioPropertyName:
			this.actualPixelScalingRatio = this.pixelScalingRatio;
			break;

			case GridFilterDialog.actualPixelScalingRatioPropertyName:
			this.view.scheduleRender();
			break;

		}

	}
	constructor() {
		super();
		this.view = new GridFilterDialogView(this);
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	openDialog(): void {
		let filter: ColumnFilterCondition = null;
		let propertyType: DataSourceSchemaPropertyType = DataSourceSchemaPropertyType.StringValue;
		if (this.dialogOpening != null) {
			let args: GridFilterDialogOpeningEventArgs = new GridFilterDialogOpeningEventArgs();
			this.dialogOpening(this, args);
			filter = args.filter;
			propertyType = args.propertyType;
		}
		this.showDialog(filter, propertyType);
	}
	private showDialog(filter: ColumnFilterCondition, propertyType: DataSourceSchemaPropertyType): void {
		this.originalFilter = filter;
		let applicableOperators = ColumnComparisonFilterCondition.getApplicableOperators(propertyType);
		let vm = this.getViewModel(filter, applicableOperators);
		vm.maxGroupingLevels = 1;
		vm.propertyType = propertyType;
		vm.onModified = delegateCombine(vm.onModified, runOn(this, this.onVMModified));
		this.view.showDialog(vm);
	}
	onDialogClosing(vm: GridFilterDialogViewModel, isCanceled: boolean): void {
		vm.onModified = delegateRemove(vm.onModified, runOn(this, this.onVMModified));
		if (isCanceled) {
			this.sendNullFilter();
		} else {
			this.sendFilterUpdate(vm, true);
		}
		this.originalFilter = null;
	}
	private sendOriginalFilter(): void {
		if (this.filterChanged != null) {
			this.filterChanged(this, ((() => {
				let $ret = new GridFilterDialogFilterChangeEventArgs();
				$ret.filter = this.originalFilter;
				return $ret;
			})()));
		}
	}
	private sendNullFilter(): void {
		if (this.filterChanged != null) {
			this.filterChanged(this, ((() => {
				let $ret = new GridFilterDialogFilterChangeEventArgs();
				$ret.filter = null;
				return $ret;
			})()));
		}
	}
	private _originalFilter: ColumnFilterCondition = null;
	private get originalFilter(): ColumnFilterCondition {
		return this._originalFilter;
	}
	private set originalFilter(value: ColumnFilterCondition) {
		this._originalFilter = value;
	}
	private sendFilterUpdate(vm: GridFilterDialogViewModel, isFinal: boolean): void {
		let filter = this.convertToFilter(vm);
		if (isFinal) {
			if (this.filterChanged != null) {
				this.filterChanged(this, ((() => {
					let $ret = new GridFilterDialogFilterChangeEventArgs();
					$ret.filter = filter;
					return $ret;
				})()));
			}
		} else {
			if (this.filterChanging != null) {
				this.filterChanging(this, ((() => {
					let $ret = new GridFilterDialogFilterChangeEventArgs();
					$ret.filter = filter;
					return $ret;
				})()));
			}
		}
	}
	private convertToFilter(vm: GridFilterDialogViewModel): ColumnFilterCondition {
		let topLevel: ColumnFilterConditionGroup = new ColumnFilterConditionGroup();
		topLevel.usesOrOperator = vm.isTopLevelOr;
		let otherGroups: Stack$1<ColumnFilterConditionGroup> = new Stack$1<ColumnFilterConditionGroup>((<any>ColumnFilterConditionGroup).$type);
		let groupingLevel: number = 0;
		let currLevel: ColumnFilterConditionGroup = topLevel;
		for (let i = 0; i < vm.rows.count; i++) {
			let g: ColumnFilterConditionGroup = this.pushGroupingLevel(groupingLevel, otherGroups, vm, i);
			while (g != null) {
				currLevel.add(g);
				currLevel = g;
				groupingLevel++;
				g = this.pushGroupingLevel(groupingLevel, otherGroups, vm, i);
			}
			g = this.popGroupingLevel(groupingLevel, otherGroups, vm, i);
			while (g != null) {
				currLevel = g;
				groupingLevel--;
				g = this.popGroupingLevel(groupingLevel, otherGroups, vm, i);
			}
			if (currLevel == null) {
				currLevel = topLevel;
			}
			if (this.shouldIgnore(vm, vm.rows._inner[i])) {
				continue;
			}
			currLevel.add(this.convertRowToCondition(vm.rows._inner[i]));
		}
		if (topLevel.count == 0) {
			return null;
		}
		return topLevel;
	}
	private shouldIgnore(vm: GridFilterDialogViewModel, row: GridFilterDialogViewModelRow): boolean {
		let opIndex = 0;
		for (let i = 0; i < row.operators.length; i++) {
			if (row.operators[i] == row.currentOperator) {
				opIndex = i;
				break;
			}
		}
		if (row.operandNumber[opIndex] > 0 && row.operand1 == null) {
			return true;
		}
		if (vm.propertyType != DataSourceSchemaPropertyType.StringValue && row.operandNumber[opIndex] > 0 && typeof row.operand1 === 'string' && stringIsNullOrEmpty(<string>row.operand1)) {
			return true;
		}
		return false;
	}
	private popGroupingLevel(groupingLevel: number, otherGroups: Stack$1<ColumnFilterConditionGroup>, vm: GridFilterDialogViewModel, index: number): ColumnFilterConditionGroup {
		let level: number = this.getRequiredGroupingLevel(vm, index);
		if (groupingLevel > level) {
			otherGroups.pop();
			return otherGroups.peek();
		}
		return null;
	}
	private getRequiredGroupingLevel(vm: GridFilterDialogViewModel, index: number): number {
		let level = vm.findTargetLevel(index);
		if (level == null) {
			return 0;
		}
		return vm.groupingLevels.indexOf(level);
	}
	private pushGroupingLevel(groupingLevel: number, otherGroups: Stack$1<ColumnFilterConditionGroup>, vm: GridFilterDialogViewModel, index: number): ColumnFilterConditionGroup {
		let level: number = this.getRequiredGroupingLevel(vm, index);
		if (groupingLevel < level) {
			let group = vm.findTargetGrouping(index);
			let newLevel = new ColumnFilterConditionGroup();
			newLevel.usesOrOperator = group.isOrGrouping;
			otherGroups.push(newLevel);
			return newLevel;
		}
		return null;
	}
	private convertRowToCondition(row: GridFilterDialogViewModelRow): ColumnFilterCondition {
		let c: ColumnComparisonFilterCondition = new ColumnComparisonFilterCondition();
		c.operator = this.toOperator(row.currentOperator);
		c.value = row.operand1;
		return c;
	}
	private toOperator(currentOperator: string): ColumnComparisonConditionOperatorType {
		return EnumUtil.getEnumValue<ColumnComparisonConditionOperatorType>(ColumnComparisonConditionOperatorType_$type, EnumUtil.parse(ColumnComparisonConditionOperatorType_$type, currentOperator, true));
	}
	private onVMModified(vm: GridFilterDialogViewModel): void {
		this.sendFilterUpdate(vm, false);
	}
	private getViewModel(filter: ColumnFilterCondition, applicableOperators: ColumnComparisonConditionOperatorType[]): GridFilterDialogViewModel {
		let vm = new GridFilterDialogViewModel();
		if (filter != null) {
			this.accumulateConditions(vm, filter, applicableOperators);
		} else {
			let row = new GridFilterDialogViewModelRow();
			row.operatorTypes = applicableOperators;
			row.operators = GridFilterDialog.getDisplayNames(applicableOperators);
			row.operandNumber = GridFilterDialog.getOperandNumbers(applicableOperators);
			row.currentOperator = GridFilterDialog.getDisplayName(applicableOperators[0]);
			vm.rows.add(row);
		}
		return vm;
	}
	private accumulateConditions(vm: GridFilterDialogViewModel, filter: ColumnFilterCondition, applicableOperators: ColumnComparisonConditionOperatorType[]): void {
		if (filter.isGroup()) {
			let group = <ColumnFilterConditionGroup>filter;
			for (let i = 0; i < group.count; i++) {
				let f = group.item(i);
				this.accumulateConditions(vm, f, applicableOperators);
			}
		} else {
			vm.rows.add(this.convertToRowItem(<ColumnComparisonFilterCondition>filter, applicableOperators));
		}
	}
	private convertToRowItem(filter: ColumnComparisonFilterCondition, applicableOperators: ColumnComparisonConditionOperatorType[]): GridFilterDialogViewModelRow {
		let row: GridFilterDialogViewModelRow = new GridFilterDialogViewModelRow();
		row.currentOperator = GridFilterDialog.getDisplayName(filter.operator);
		row.operatorTypes = applicableOperators;
		row.operators = GridFilterDialog.getDisplayNames(applicableOperators);
		row.operand1 = GridFilterDialog.fillFirstOperand(GridFilterDialog.getOperandNumber(filter.operator), filter.operator, filter);
		row.operand2 = GridFilterDialog.fillSecondOperand(GridFilterDialog.getOperandNumber(filter.operator), filter.operator, filter);
		row.operandNumber = GridFilterDialog.getOperandNumbers(applicableOperators);
		return row;
	}
	static getOperandNumber(op: ColumnComparisonConditionOperatorType): number {
		return ColumnComparisonFilterCondition.getOperandNumber(op);
	}
	static fillFirstOperand(operandNumber: number, op: ColumnComparisonConditionOperatorType, filter: ColumnComparisonFilterCondition): any {
		if (operandNumber == 0) {
			return "";
		}
		return filter.value != null ? filter.value.toString() : "";
	}
	static fillSecondOperand(operandNumber: number, op: ColumnComparisonConditionOperatorType, filter: ColumnComparisonFilterCondition): any {
		return "";
	}
	static getOperandNumbers(applicableOperators: ColumnComparisonConditionOperatorType[]): number[] {
		return ColumnComparisonFilterCondition.getOperandNumbers(applicableOperators);
	}
	static getDisplayNames(applicableOperators: ColumnComparisonConditionOperatorType[]): string[] {
		let displayNames: string[] = <string[]>new Array(applicableOperators.length);
		for (let i = 0; i < applicableOperators.length; i++) {
			displayNames[i] = EnumUtil.getName<ColumnComparisonConditionOperatorType>(ColumnComparisonConditionOperatorType_$type, applicableOperators[i]);
		}
		return displayNames;
	}
	static getDisplayName(op: ColumnComparisonConditionOperatorType): string {
		return EnumUtil.getName<ColumnComparisonConditionOperatorType>(ColumnComparisonConditionOperatorType_$type, op);
	}
	dialogOpening: (sender: any, args: GridFilterDialogOpeningEventArgs) => void = null;
	filterChanging: (sender: any, args: GridFilterDialogFilterChangeEventArgs) => void = null;
	filterChanged: (sender: any, args: GridFilterDialogFilterChangeEventArgs) => void = null;
	notifySizeChanged(width: number, height: number): void {
		this.view.onSizeChanged(width, height);
	}
	makeIcon(currentWidth: number, currentHeight: number, indicator: Path): void {
		let dim = Math.min(currentWidth, currentHeight);
		let center = <Point>{ $type: Point_$type, x: currentWidth / 2, y: currentHeight / 2 };
		let len = dim * 0.8;
		let halfLen = len / 2;
		let quarterLen = halfLen / 2;
		let eigthLen = quarterLen / 2;
		let sixteenthLen = eigthLen / 2;
		let pf: PathFigure = new PathFigure();
		pf._startPoint = <Point>{ $type: Point_$type, x: center.x - halfLen, y: center.y - halfLen };
		let ls: LineSegment = new LineSegment(1);
		ls.point = <Point>{ $type: Point_$type, x: center.x + halfLen, y: center.y - halfLen };
		pf._segments.add(ls);
		let pf2: PathFigure = new PathFigure();
		pf2._startPoint = <Point>{ $type: Point_$type, x: center.x - quarterLen, y: center.y };
		let ls2: LineSegment = new LineSegment(1);
		ls2.point = <Point>{ $type: Point_$type, x: center.x + quarterLen, y: center.y };
		pf2._segments.add(ls2);
		let pf3: PathFigure = new PathFigure();
		pf3._startPoint = <Point>{ $type: Point_$type, x: center.x - eigthLen, y: center.y + halfLen };
		let ls3: LineSegment = new LineSegment(1);
		ls3.point = <Point>{ $type: Point_$type, x: center.x + eigthLen, y: center.y + halfLen };
		pf3._segments.add(ls3);
		let pg: PathGeometry = new PathGeometry();
		pg.figures.add(pf);
		pg.figures.add(pf2);
		pg.figures.add(pf3);
		indicator.data = pg;
		indicator._stroke = this.view.getDefaultIconStroke();
		indicator.strokeThickness = 1;
	}
	closeDialog(viewModel: GridFilterDialogViewModel, isCancel: boolean): void {
		this.view.closeDialog();
		this.onDialogClosing(viewModel, isCancel);
	}
	private _view: GridFilterDialogView = null;
	protected get view(): GridFilterDialogView {
		return this._view;
	}
	protected set view(value: GridFilterDialogView) {
		this._view = value;
	}
}

/**
 * @hidden 
 */
export class GridFilterDialogViewModel extends Base {
	static $t: Type = markType(GridFilterDialogViewModel, 'GridFilterDialogViewModel');
	private _propertyType: DataSourceSchemaPropertyType = <DataSourceSchemaPropertyType>0;
	get propertyType(): DataSourceSchemaPropertyType {
		return this._propertyType;
	}
	set propertyType(value: DataSourceSchemaPropertyType) {
		this._propertyType = value;
	}
	private _groupingLevels: GridFilterDialogViewModelGroupingLevelCollection = null;
	get groupingLevels(): GridFilterDialogViewModelGroupingLevelCollection {
		return this._groupingLevels;
	}
	set groupingLevels(value: GridFilterDialogViewModelGroupingLevelCollection) {
		this._groupingLevels = value;
	}
	private _isTopLevelOr: boolean = false;
	get isTopLevelOr(): boolean {
		return this._isTopLevelOr;
	}
	set isTopLevelOr(value: boolean) {
		this._isTopLevelOr = value;
	}
	addNewRow(): void {
		let row = new GridFilterDialogViewModelRow();
		let applicableOperators = ColumnComparisonFilterCondition.getApplicableOperators(this.propertyType);
		row.operatorTypes = applicableOperators;
		row.operators = GridFilterDialog.getDisplayNames(applicableOperators);
		row.operandNumber = GridFilterDialog.getOperandNumbers(applicableOperators);
		row.currentOperator = GridFilterDialog.getDisplayName(applicableOperators[0]);
		this.rows.add(row);
	}
	constructor() {
		super();
		this.isTopLevelOr = false;
		this.rows = new GridFilterDialogViewModelRowCollection();
		this.rows.vM = this;
		this.groupingLevels = new GridFilterDialogViewModelGroupingLevelCollection();
		this.rows.onModified = runOn(this, this.rows_Modified);
		let $t = this.rows;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.rows_CollectionChanged));
	}
	private rows_Modified(arg1: GridFilterDialogViewModel): void {
		if (this.onModified != null) {
			this.onModified(this);
		}
	}
	private rows_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			if (e.newItems != null) {
				for (let i = 0; i < e.newItems.count; i++) {
					let item: any = e.newItems.item(i);
					this.onItemAdded(i + e.newStartingIndex, <GridFilterDialogViewModelRow>item);
				}
			}
			break;

			case NotifyCollectionChangedAction.Remove:
			if (e.oldItems != null) {
				for (let j = 0; j < e.oldItems.count; j++) {
					this.onItemRemoved(e.oldStartingIndex);
				}
			}
			break;

			case NotifyCollectionChangedAction.Replace:
			if (e.oldItems != null) {
				for (let k = 0; k < e.oldItems.count; k++) {
					this.onItemRemoved(e.oldStartingIndex);
				}
			}
			if (e.newItems != null) {
				for (let m = 0; m < e.newItems.count; m++) {
					let item1: any = e.newItems.item(m);
					this.onItemAdded(m + e.newStartingIndex, <GridFilterDialogViewModelRow>e.newItems.item(m));
				}
			}
			break;

			case NotifyCollectionChangedAction.Reset:
			this.onItemsCleared();
			break;

		}

		if (this.onModified != null) {
			this.onModified(this);
		}
	}
	private onItemRemoved(index: number): void {
		let level = this.findTargetLevel(index);
		if (level == null) {
			return;
		}
		let grouping = this.findTargetGrouping(index);
		if (grouping == null) {
			return;
		}
		this.shrinkGrouping(grouping, index);
		for (let i = level.indexOf(grouping) + 1; i < level.count; i++) {
			this.shiftGrouping(level._inner[i], -1);
		}
	}
	private shrinkGrouping(grouping: GridFilterDialogViewModelGrouping, index: number): void {
		grouping.endIndex--;
	}
	private onItemsCleared(): void {
		this.groupingLevels.clear();
	}
	private onItemAdded(index: number, item: GridFilterDialogViewModelRow): void {
		let level = this.findTargetLevel(index);
		if (level == null) {
			return;
		}
		let grouping = this.findTargetGrouping(index);
		if (grouping == null) {
			return;
		}
		this.growGrouping(grouping, index);
		for (let i = level.indexOf(grouping) + 1; i < level.count; i++) {
			this.shiftGrouping(level._inner[i], +1);
		}
	}
	private shiftGrouping(grouping: GridFilterDialogViewModelGrouping, offset: number): void {
		grouping.startIndex += offset;
		grouping.endIndex -= offset;
	}
	private growGrouping(grouping: GridFilterDialogViewModelGrouping, index: number): void {
		grouping.endIndex++;
	}
	findTargetGrouping(index: number): GridFilterDialogViewModelGrouping {
		for (let i = this.groupingLevels.count - 1; i >= 0; i--) {
			for (let j = 0; j < this.groupingLevels._inner[i].count; j--) {
				if (this.groupingLevels._inner[i]._inner[j].startIndex <= index && this.groupingLevels._inner[i]._inner[j].endIndex >= index) {
					return this.groupingLevels._inner[i]._inner[j];
				}
			}
		}
		return null;
	}
	findTargetLevel(index: number): GridFilterDialogViewModelGroupingLevel {
		for (let i = this.groupingLevels.count - 1; i >= 0; i--) {
			for (let j = 0; j < this.groupingLevels._inner[i].count; j--) {
				if (this.groupingLevels._inner[i]._inner[j].startIndex <= index && this.groupingLevels._inner[i]._inner[j].endIndex >= index) {
					return this.groupingLevels._inner[i];
				}
			}
		}
		return null;
	}
	private _maxGroupingLevels: number = 0;
	get maxGroupingLevels(): number {
		return this._maxGroupingLevels;
	}
	set maxGroupingLevels(value: number) {
		this._maxGroupingLevels = value;
	}
	canGroupRange(startIndex: number, endIndex: number): boolean {
		let lastGroupLevel = this.getTargetGroupLevel(startIndex, endIndex);
		if (this.collides(lastGroupLevel, startIndex, endIndex)) {
			if (this.groupingLevels.count < this.maxGroupingLevels) {
				return true;
			} else {
				return false;
			}
		}
		return true;
	}
	private collides(groupLevel: GridFilterDialogViewModelGroupingLevel, startIndex: number, endIndex: number): boolean {
		if (groupLevel == null) {
			return false;
		}
		for (let i = 0; i < groupLevel.count; i++) {
			if (this.collidesWithGroup(groupLevel._inner[i], startIndex, endIndex)) {
				return true;
			}
		}
		return false;
	}
	private collidesWithGroup(grouping: GridFilterDialogViewModelGrouping, startIndex: number, endIndex: number): boolean {
		if (endIndex > grouping.startIndex || startIndex > grouping.endIndex) {
			return false;
		}
		return true;
	}
	private getTargetGroupLevel(startIndex: number, endIndex: number): GridFilterDialogViewModelGroupingLevel {
		if (this.groupingLevels.count == 0) {
			return null;
		}
		for (let i = 0; i < this.groupingLevels.count; i++) {
			if (!this.collides(this.groupingLevels._inner[i], startIndex, endIndex)) {
				return this.groupingLevels._inner[i];
			}
		}
		return this.groupingLevels._inner[this.groupingLevels.count - 1];
	}
	ungroupRange(startIndex: number, endIndex: number): void {
		for (let i = 0; i < this.groupingLevels.count; i++) {
			for (let j = 0; j < this.groupingLevels._inner[i].count; j++) {
				if (this.groupingLevels._inner[i]._inner[j].startIndex == startIndex && this.groupingLevels._inner[i]._inner[j].endIndex == endIndex) {
					this.groupingLevels._inner[i].removeAt(j);
					break;
				}
			}
		}
		this.simplifyLevels();
		if (this.onModified != null) {
			this.onModified(this);
		}
	}
	private simplifyLevels(): void {
		for (let i = this.groupingLevels.count - 1; i >= 0; i--) {
			let toShiftDownward = new List$1<GridFilterDialogViewModelGrouping>((<any>GridFilterDialogViewModelGrouping).$type, 0);
			for (let j = 0; j < this.groupingLevels._inner[i].count; j++) {
				let group = this.groupingLevels._inner[i]._inner[j];
				if (i > 0) {
					if (!this.collides(this.groupingLevels._inner[i - 1], group.startIndex, group.endIndex)) {
						toShiftDownward.add(group);
					}
				}
			}
			for (let k = 0; k < toShiftDownward.count; k++) {
				this.groupingLevels._inner[i].remove(toShiftDownward._inner[k]);
				this.groupingLevels._inner[i - 1].add(toShiftDownward._inner[k]);
			}
			if (this.groupingLevels._inner[i].count == 0) {
				this.groupingLevels.removeAt(i);
			}
		}
		this.sortGroupingLevels();
	}
	private sortGroupingLevels(): void {
		for (let i = this.groupingLevels.count - 1; i >= 0; i--) {
			let list = new List$1<GridFilterDialogViewModelGrouping>((<any>GridFilterDialogViewModelGrouping).$type, 0);
			for (let j = 0; j < this.groupingLevels._inner[i].count; j++) {
				list.add(this.groupingLevels._inner[i]._inner[j]);
			}
			list.sort2((g1: GridFilterDialogViewModelGrouping, g2: GridFilterDialogViewModelGrouping) => Base.compareSimple(g1.startIndex, g2.startIndex));
			this.groupingLevels._inner[i].clear();
			for (let j1 = 0; j1 < this.groupingLevels._inner[i].count; j1++) {
				this.groupingLevels._inner[i].add(list._inner[j1]);
			}
		}
	}
	targetingRange(startIndex: number, endIndex: number): boolean {
		for (let i = 0; i < this.groupingLevels.count; i++) {
			for (let j = 0; j < this.groupingLevels._inner[i].count; j++) {
				if (this.groupingLevels._inner[i]._inner[j].startIndex == startIndex && this.groupingLevels._inner[i]._inner[j].endIndex == endIndex) {
					return true;
				}
			}
		}
		return false;
	}
	toggleRange(startIndex: number, endIndex: number): void {
		for (let i = 0; i < this.groupingLevels.count; i++) {
			for (let j = 0; j < this.groupingLevels._inner[i].count; j++) {
				if (this.groupingLevels._inner[i]._inner[j].startIndex == startIndex && this.groupingLevels._inner[i]._inner[j].endIndex == endIndex) {
					this.groupingLevels._inner[i]._inner[j].isOrGrouping = !this.groupingLevels._inner[i]._inner[j].isOrGrouping;
				}
			}
		}
		if (this.onModified != null) {
			this.onModified(this);
		}
	}
	groupRange(startIndex: number, endIndex: number, isOrGrouping: boolean): void {
		if (!this.canGroupRange(startIndex, endIndex)) {
			return;
		}
		let lastGroupLevel = this.getTargetGroupLevel(startIndex, endIndex);
		let targetLevel = lastGroupLevel;
		if (this.collides(lastGroupLevel, startIndex, endIndex)) {
			this.groupingLevels.add(new GridFilterDialogViewModelGroupingLevel());
			targetLevel = this.getTargetGroupLevel(startIndex, endIndex);
		}
		targetLevel.add(((() => {
			let $ret = new GridFilterDialogViewModelGrouping();
			$ret.startIndex = startIndex;
			$ret.endIndex = endIndex;
			$ret.isOrGrouping = isOrGrouping;
			return $ret;
		})()));
		this.sortGroupingLevels();
		if (this.onModified != null) {
			this.onModified(this);
		}
	}
	private _rows: GridFilterDialogViewModelRowCollection = null;
	get rows(): GridFilterDialogViewModelRowCollection {
		return this._rows;
	}
	set rows(value: GridFilterDialogViewModelRowCollection) {
		this._rows = value;
	}
	onModified: (vm: GridFilterDialogViewModel) => void = null;
}

/**
 * @hidden 
 */
export class GridFilterDialogViewModelRowCollection extends ObservableCollection$1<GridFilterDialogViewModelRow> {
	static $t: Type = markType(GridFilterDialogViewModelRowCollection, 'GridFilterDialogViewModelRowCollection', (<any>ObservableCollection$1).$type.specialize((<any>GridFilterDialogViewModelRow).$type));
	constructor() {
		super((<any>GridFilterDialogViewModelRow).$type, 0);
		this.collectionChanged = delegateCombine(this.collectionChanged, runOn(this, this.gridFilterDialogViewModelRowCollection_CollectionChanged));
	}
	private gridFilterDialogViewModelRowCollection_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let i = 0; i < e.oldItems.count; i++) {
				let row = <GridFilterDialogViewModelRow>e.oldItems.item(i);
				row.propertyChanged = delegateRemove(row.propertyChanged, runOn(this, this.row_PropertyChanged));
			}
		}
		if (e.newItems != null) {
			for (let i1 = 0; i1 < e.newItems.count; i1++) {
				let row1 = <GridFilterDialogViewModelRow>e.newItems.item(i1);
				row1.propertyChanged = delegateCombine(row1.propertyChanged, runOn(this, this.row_PropertyChanged));
			}
		}
	}
	private _vM: GridFilterDialogViewModel = null;
	get vM(): GridFilterDialogViewModel {
		return this._vM;
	}
	set vM(value: GridFilterDialogViewModel) {
		this._vM = value;
	}
	private row_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		if (this._onModified != null) {
			this._onModified(this.vM);
		}
	}
	private _onModified: (arg1: GridFilterDialogViewModel) => void = null;
	get onModified(): (arg1: GridFilterDialogViewModel) => void {
		return this._onModified;
	}
	set onModified(value: (arg1: GridFilterDialogViewModel) => void) {
		this._onModified = value;
	}
}


