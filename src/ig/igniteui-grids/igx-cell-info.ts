import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CellContentHorizontalAlignment, CellContentHorizontalAlignment_$type } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment, CellContentVerticalAlignment_$type } from "./CellContentVerticalAlignment";
import { TextCellLineBreakMode, TextCellLineBreakMode_$type } from "./TextCellLineBreakMode";
import { ColumnSortDirection, ColumnSortDirection_$type } from "./ColumnSortDirection";
import { CellModel as CellModel_internal } from "./CellModel";
import { ensureBool, ensureEnum, brushToString, stringToBrush, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { ICellActionManager } from "./ICellActionManager";
import { FontInfo } from "igniteui-core/FontInfo";  
import { delegateCombine, delegateRemove, runOn, PropertyChangedEventArgs } from 'igniteui-core/type';
import { PinnedPositions, PinnedPositions_$type } from './PinnedPositions';

/**
 * Represents info about the current cell.
*/
export abstract class IgxCellInfo {

    protected createImplementation(): CellModel_internal {
        return null;
    }
    protected _implementation: any;
    public get i(): CellModel_internal {
        return this._implementation;
    }

    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

    private onImplementationCreated() {
        
    }

    public addOnChangedListener(listener: () => void) {
        if (this._onChanged.length == 0) {
            this.i.propertyChanged = delegateCombine(this.i.propertyChanged, runOn(this, this._implementation_propertyChanged));
            this.i.cellReconciling = delegateCombine(this.i.cellReconciling, runOn(this, this._implementation_cellReconciling));
        }
        this._onChanged.push(listener);
    }
    public removeOnChangedListener(listener: () => void) {
        let ind = this._onChanged.indexOf(listener);
        if (ind < 0) {
            return;
        }
        this._onChanged.splice(ind, 1);
        if (this._onChanged.length == 0) {
            this.i.propertyChanged = delegateRemove(this.i.propertyChanged, runOn(this, this._implementation_propertyChanged));
            this.i.cellReconciling = delegateRemove(this.i.cellReconciling, runOn(this, this._implementation_cellReconciling));
        }
    }

    private _onChanged: (() => void)[] = [];
    private _changed: boolean = false;
    private _implementation_propertyChanged(sender: any, args: PropertyChangedEventArgs) {
        this._changed = true;
    }
    private _implementation_cellReconciling(model: CellModel_internal) {
        if (this._changed && this._onChanged !== null && this._onChanged.length > 0) {
            this._changed = false;
            for (let i = 0; i < this._onChanged.length; i++) {
                this._onChanged[i]();
            }
        }
        this._changed = false;
    }

    public get resolvedTextAlign() {
        switch (this.horizontalAlignment) {
            case CellContentHorizontalAlignment.Center:
                return "center";
            case CellContentHorizontalAlignment.Left:
                return "left";
            case CellContentHorizontalAlignment.Right:
                return "right";
            case CellContentHorizontalAlignment.Stretch:
                return "center";
        }
        return "left";
    }

    public get resolvedContentOpacity(): number {
        let virtualPercent = Math.min(1.0, Math.max(0.0, this.virtualizationPercentage));

        let opacity = this.contentOpacity * (1.0 - virtualPercent);

        return opacity;
    }

    	/**
	 * Gets the style key of the current cell, used for recycling.
	*/
	get styleKey() : string {
		return (this.i.styleKey as string);
	}
	set styleKey(v: string) {
		this.i.styleKey = v;
	}
	/**
	 * Gets the absolute data row for the current cell.
	*/
	get dataRow() : number {
		return (this.i.dataRow as number);
	}
	set dataRow(v: number) {
		this.i.dataRow = +v;
	}
	/**
	 * Gets if the position of the cell is dirty.
	*/
	get isPositionDirty() : boolean {
		return (this.i.isPositionDirty as boolean);
	}
	set isPositionDirty(v: boolean) {
		this.i.isPositionDirty = ensureBool(v);
	}
	/**
	 * Gets if the size of the cell is dirty.
	*/
	get isSizeDirty() : boolean {
		return (this.i.isSizeDirty as boolean);
	}
	set isSizeDirty(v: boolean) {
		this.i.isSizeDirty = ensureBool(v);
	}
	/**
	 * Gets if the content of the cell is dirty.
	*/
	get isContentDirty() : boolean {
		return (this.i.isContentDirty as boolean);
	}
	set isContentDirty(v: boolean) {
		this.i.isContentDirty = ensureBool(v);
	}
	/**
	 * Gets if the content of the cell is dirty.
	*/
	get isBorderDirty() : boolean {
		return (this.i.isBorderDirty as boolean);
	}
	set isBorderDirty(v: boolean) {
		this.i.isBorderDirty = ensureBool(v);
	}
	/**
	 * Gets if the layer of the cell is dirty.
	*/
	get isLayerDirty() : boolean {
		return (this.i.isLayerDirty as boolean);
	}
	set isLayerDirty(v: boolean) {
		this.i.isLayerDirty = ensureBool(v);
	}
	/**
	 * Gets if the layer of the cell is dirty.
	*/
	get isStateDirty() : boolean {
		return (this.i.isStateDirty as boolean);
	}
	set isStateDirty(v: boolean) {
		this.i.isStateDirty = ensureBool(v);
	}
	/**
	 * Gets if the data of the cell is dirty.
	*/
	get isDataDirty() : boolean {
		return (this.i.isDataDirty as boolean);
	}
	set isDataDirty(v: boolean) {
		this.i.isDataDirty = ensureBool(v);
	}
	/**
	 * Gets if placeholder content is needed when virtualized.
	*/
	get isPlaceholdContentNeeded() : boolean {
		return (this.i.isPlaceholdContentNeeded as boolean);
	}
	set isPlaceholdContentNeeded(v: boolean) {
		this.i.isPlaceholdContentNeeded = ensureBool(v);
	}
	/**
	 * Gets the action manager to propagate actions back to the grid.
	*/
	get actionManager() : ICellActionManager {
		return this.i.actionManager as ICellActionManager;
	}
	set actionManager(v: ICellActionManager) {
		this.i.actionManager = v;
	}
	/**
	 * Gets if this cell belongs to a row that has been marked as pinned.
	*/
	get isRowPinned() : boolean {
		return (this.i.isRowPinned as boolean);
	}
	set isRowPinned(v: boolean) {
		this.i.isRowPinned = ensureBool(v);
	}
	/**
	 * Gets if this cell belongs to a row that will stick to the top of the grid.
	*/
	get isRowSticky() : boolean {
		return (this.i.isRowSticky as boolean);
	}
	set isRowSticky(v: boolean) {
		this.i.isRowSticky = ensureBool(v);
	}
	/**
	 * Gets if this cell is the last row that can stick to the top of the grid.
	*/
	get isLastStickyRow() : boolean {
		return (this.i.isLastStickyRow as boolean);
	}
	set isLastStickyRow(v: boolean) {
		this.i.isLastStickyRow = ensureBool(v);
	}
	/**
	 * Gets the indent level of the cell.
	*/
	get indent() : number {
		return (this.i.indent as number);
	}
	set indent(v: number) {
		this.i.indent = +v;
	}
	get rowItem() : any {
		return this.i.rowItem as any;
	}
	set rowItem(v: any) {
		this.i.rowItem = v;
	}
	/**
	 * Gets the X position of the cell within the content.
	*/
	get x() : number {
		return (this.i.x as number);
	}
	set x(v: number) {
		this.i.x = +v;
	}
	/**
	 * Gets the Y position of the cell within the content.
	*/
	get y() : number {
		return (this.i.y as number);
	}
	set y(v: number) {
		this.i.y = +v;
	}
	/**
	 * Gets the pixel snapped X position of the cell within the content.
	*/
	get snappedX() : number {
		return (this.i.snappedX as number);
	}
	set snappedX(v: number) {
		this.i.snappedX = +v;
	}
	/**
	 * Gets the snapped Y position of the cell within the content.
	*/
	get snappedY() : number {
		return (this.i.snappedY as number);
	}
	set snappedY(v: number) {
		this.i.snappedY = +v;
	}
	/**
	 * Gets or sets the opacity of the content of the cell.
	*/
	get contentOpacity() : number {
		return (this.i.contentOpacity as number);
	}
	set contentOpacity(v: number) {
		this.i.contentOpacity = +v;
	}
	/**
	 * Gets the actual content opacity of the cell.
	*/
	get actualContentOpacity() : number {
		return (this.i.actualContentOpacity as number);
	}
	set actualContentOpacity(v: number) {
		this.i.actualContentOpacity = +v;
	}
	/**
	 * Gets or sets the opacity of the cell.
	*/
	get opacity() : number {
		return (this.i.opacity as number);
	}
	set opacity(v: number) {
		this.i.opacity = +v;
	}
	/**
	 * Gets the actual opacity of the cell.
	*/
	get actualOpacity() : number {
		return (this.i.actualOpacity as number);
	}
	set actualOpacity(v: number) {
		this.i.actualOpacity = +v;
	}
	/**
	 * Gets the height of the cell.
	*/
	get height() : number {
		return (this.i.height as number);
	}
	set height(v: number) {
		this.i.height = +v;
	}
	/**
	 * Gets the width of the cell.
	*/
	get width() : number {
		return (this.i.width as number);
	}
	set width(v: number) {
		this.i.width = +v;
	}
	/**
	 * Gets if the cell is selected.
	*/
	get isSelected() : boolean {
		return (this.i.isSelected as boolean);
	}
	set isSelected(v: boolean) {
		this.i.isSelected = ensureBool(v);
	}
	/**
	 * Gets the amount that the cell is selected. This is a value between 0 and 1.
	*/
	get selectedStatus() : number {
		return (this.i.selectedStatus as number);
	}
	set selectedStatus(v: number) {
		this.i.selectedStatus = +v;
	}
	/**
	 * Gets the amount that the cell is activated. This is a value between 0 and 1.
	*/
	get activationStatus() : number {
		return (this.i.activationStatus as number);
	}
	set activationStatus(v: number) {
		this.i.activationStatus = +v;
	}
	/**
	 * Gets or sets the horiztonal alignment of the cell content.
	*/
	get horizontalAlignment() : CellContentHorizontalAlignment {
		return this.i.horizontalAlignment;
	}
	set horizontalAlignment(v: CellContentHorizontalAlignment) {
		this.i.horizontalAlignment = ensureEnum<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the vertical alignment of the cell content.
	*/
	get verticalAlignment() : CellContentVerticalAlignment {
		return this.i.verticalAlignment;
	}
	set verticalAlignment(v: CellContentVerticalAlignment) {
		this.i.verticalAlignment = ensureEnum<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, v);
	}
	/**
	 * Gets or sets the background color of the cell.
	*/
	get background() : string {
		return brushToString(this.i.background);
	}
	set background(v: string) {
		this.i.background = stringToBrush(v);
	}
	/**
	 * Gets or sets the border color of the cell.
	*/
	get border() : string {
		return brushToString(this.i.border);
	}
	set border(v: string) {
		this.i.border = stringToBrush(v);
	}
	/**
	 * Gets the actual background color of the cell
	*/
	get actualBackground() : string {
		return brushToString(this.i.actualBackground);
	}
	set actualBackground(v: string) {
		this.i.actualBackground = stringToBrush(v);
	}
	/**
	 * Gets the actual background color of the cell
	*/
	get actualBorder() : string {
		return brushToString(this.i.actualBorder);
	}
	set actualBorder(v: string) {
		this.i.actualBorder = stringToBrush(v);
	}
	/**
	 * Gets the actual background color of the cell
	*/
	get activationBorder() : string {
		return brushToString(this.i.activationBorder);
	}
	set activationBorder(v: string) {
		this.i.activationBorder = stringToBrush(v);
	}
	/**
	 * Gets or sets the selected background color of the cell.
	*/
	get selectedBackground() : string {
		return brushToString(this.i.selectedBackground);
	}
	set selectedBackground(v: string) {
		this.i.selectedBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the color for the sort indicator icon.
	*/
	get sortIndicatorColor() : string {
		return brushToString(this.i.sortIndicatorColor);
	}
	set sortIndicatorColor(v: string) {
		this.i.sortIndicatorColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the background color for the cell when it is stuck to the top of the grid as a pinned row.
	*/
	get stickyRowBackground() : string {
		return brushToString(this.i.stickyRowBackground);
	}
	set stickyRowBackground(v: string) {
		this.i.stickyRowBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the background color for the cell that has been marked as pinned.
	*/
	get pinnedRowBackground() : string {
		return brushToString(this.i.pinnedRowBackground);
	}
	set pinnedRowBackground(v: string) {
		this.i.pinnedRowBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the color for the last row in the sticky row area.
	*/
	get lastStickyRowBackground() : string {
		return brushToString(this.i.lastStickyRowBackground);
	}
	set lastStickyRowBackground(v: string) {
		this.i.lastStickyRowBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for displaying text.
	*/
	get pinnedRowOpacity() : number {
		return (this.i.pinnedRowOpacity as number);
	}
	set pinnedRowOpacity(v: number) {
		this.i.pinnedRowOpacity = +v;
	}
	/**
	 * Gets or sets the original value for the cell, before processing.
	*/
	get originalValue() : any {
		return this.i.originalValue as any;
	}
	set originalValue(v: any) {
		this.i.originalValue = v;
	}
	/**
	 * Gets or sets the text value, if any, which was rendered by a text cell.
	*/
	get renderValue() : string {
		return (this.i.renderValue as string);
	}
	set renderValue(v: string) {
		this.i.renderValue = v;
	}
	/**
	 * Gets or sets the color of the text for the cell, if any.
	*/
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
	}
	get font() : string {
	                                    if (this.i.fontInfo == null) {
	                                        return null;
	                                    }
		return this.i.fontInfo.fontString;
	}
	set font(v: string) {
		let fi = new FontInfo();
	                                        fi.fontString = v;
	                                        this.i.fontInfo = fi;
	}
	/**
	 * Gets or sets the line break mode to use if text is present in the cell.
	*/
	get lineBreakMode() : TextCellLineBreakMode {
		return this.i.lineBreakMode;
	}
	set lineBreakMode(v: TextCellLineBreakMode) {
		this.i.lineBreakMode = ensureEnum<TextCellLineBreakMode>(TextCellLineBreakMode_$type, v);
	}
	/**
	 * Gets or sets the virtualization percentage value. This is between 0 an 1, and indicates how virtual the content is at present.
	*/
	get virtualizationPercentage() : number {
		return (this.i.virtualizationPercentage as number);
	}
	set virtualizationPercentage(v: number) {
		this.i.virtualizationPercentage = +v;
	}
	/**
	 * Gets or sets the left padding to use for the content.
	*/
	get paddingLeft() : number {
		return (this.i.paddingLeft as number);
	}
	set paddingLeft(v: number) {
		this.i.paddingLeft = +v;
	}
	/**
	 * Gets or sets the top padding to use for the content.
	*/
	get paddingTop() : number {
		return (this.i.paddingTop as number);
	}
	set paddingTop(v: number) {
		this.i.paddingTop = +v;
	}
	/**
	 * Gets or sets the right padding to use for the content.
	*/
	get paddingRight() : number {
		return (this.i.paddingRight as number);
	}
	set paddingRight(v: number) {
		this.i.paddingRight = +v;
	}
	/**
	 * Gets or sets the bottom padding to use for the content.
	*/
	get paddingBottom() : number {
		return (this.i.paddingBottom as number);
	}
	set paddingBottom(v: number) {
		this.i.paddingBottom = +v;
	}
	/**
	 * Gets or sets the left padding to use for the content.
	*/
	get actualPaddingLeft() : number {
		return (this.i.actualPaddingLeft as number);
	}
	set actualPaddingLeft(v: number) {
		this.i.actualPaddingLeft = +v;
	}
	/**
	 * Gets or sets the top padding to use for the content.
	*/
	get actualPaddingTop() : number {
		return (this.i.actualPaddingTop as number);
	}
	set actualPaddingTop(v: number) {
		this.i.actualPaddingTop = +v;
	}
	/**
	 * Gets or sets the right padding to use for the content.
	*/
	get actualPaddingRight() : number {
		return (this.i.actualPaddingRight as number);
	}
	set actualPaddingRight(v: number) {
		this.i.actualPaddingRight = +v;
	}
	/**
	 * Gets or sets the bottom padding to use for the content.
	*/
	get actualPaddingBottom() : number {
		return (this.i.actualPaddingBottom as number);
	}
	set actualPaddingBottom(v: number) {
		this.i.actualPaddingBottom = +v;
	}
	/**
	 * Gets or sets the left border to use for the content.
	*/
	get borderLeftWidth() : number {
		return (this.i.borderLeftWidth as number);
	}
	set borderLeftWidth(v: number) {
		this.i.borderLeftWidth = +v;
	}
	/**
	 * Gets or sets the top border to use for the content.
	*/
	get borderTopWidth() : number {
		return (this.i.borderTopWidth as number);
	}
	set borderTopWidth(v: number) {
		this.i.borderTopWidth = +v;
	}
	/**
	 * Gets or sets the right border to use for the content.
	*/
	get borderRightWidth() : number {
		return (this.i.borderRightWidth as number);
	}
	set borderRightWidth(v: number) {
		this.i.borderRightWidth = +v;
	}
	/**
	 * Gets or sets the bottom border to use for the content.
	*/
	get borderBottomWidth() : number {
		return (this.i.borderBottomWidth as number);
	}
	set borderBottomWidth(v: number) {
		this.i.borderBottomWidth = +v;
	}
	/**
	 * Gets or sets the left activation border to use for the content.
	*/
	get activationBorderLeftWidth() : number {
		return (this.i.activationBorderLeftWidth as number);
	}
	set activationBorderLeftWidth(v: number) {
		this.i.activationBorderLeftWidth = +v;
	}
	/**
	 * Gets or sets the top activation border to use for the content.
	*/
	get activationBorderTopWidth() : number {
		return (this.i.activationBorderTopWidth as number);
	}
	set activationBorderTopWidth(v: number) {
		this.i.activationBorderTopWidth = +v;
	}
	/**
	 * Gets or sets the right activation border to use for the content.
	*/
	get activationBorderRightWidth() : number {
		return (this.i.activationBorderRightWidth as number);
	}
	set activationBorderRightWidth(v: number) {
		this.i.activationBorderRightWidth = +v;
	}
	/**
	 * Gets or sets the bottom activation border to use for the content.
	*/
	get activationBorderBottomWidth() : number {
		return (this.i.activationBorderBottomWidth as number);
	}
	set activationBorderBottomWidth(v: number) {
		this.i.activationBorderBottomWidth = +v;
	}
	/**
	 * Gets or sets the actual left border to use for the content.
	*/
	get actualBorderLeftWidth() : number {
		return (this.i.actualBorderLeftWidth as number);
	}
	set actualBorderLeftWidth(v: number) {
		this.i.actualBorderLeftWidth = +v;
	}
	/**
	 * Gets or sets the actual top border to use for the content.
	*/
	get actualBorderTopWidth() : number {
		return (this.i.actualBorderTopWidth as number);
	}
	set actualBorderTopWidth(v: number) {
		this.i.actualBorderTopWidth = +v;
	}
	/**
	 * Gets or sets the actual right border to use for the content.
	*/
	get actualBorderRightWidth() : number {
		return (this.i.actualBorderRightWidth as number);
	}
	set actualBorderRightWidth(v: number) {
		this.i.actualBorderRightWidth = +v;
	}
	/**
	 * Gets or sets the actual bottom border to use for the content.
	*/
	get actualBorderBottomWidth() : number {
		return (this.i.actualBorderBottomWidth as number);
	}
	set actualBorderBottomWidth(v: number) {
		this.i.actualBorderBottomWidth = +v;
	}
	/**
	 * Gets the current sort direction for the column containing the cell.
	*/
	get sortDirection() : ColumnSortDirection {
		return this.i.sortDirection;
	}
	set sortDirection(v: ColumnSortDirection) {
		this.i.sortDirection = ensureEnum<ColumnSortDirection>(ColumnSortDirection_$type, v);
	}
	/**
	 * Gets the expansion state of the cell.
	*/
	get isExpanded() : boolean {
		return (this.i.isExpanded as boolean);
	}
	set isExpanded(v: boolean) {
		this.i.isExpanded = ensureBool(v);
	}
	/**
	 * Gets if the cell needs to display an expansion indicator.
	*/
	get isCollapsable() : boolean {
		return (this.i.isCollapsable as boolean);
	}
	set isCollapsable(v: boolean) {
		this.i.isCollapsable = ensureBool(v);
	}
	/**
	 * Gets the fixed column position of this cell.
	*/
	get pinned() : PinnedPositions {
		return this.i.pinned;
	}
	set pinned(v: PinnedPositions) {
		this.i.pinned = ensureEnum<PinnedPositions>(PinnedPositions_$type, v);
	}

    

		public isCustomFieldDirty(propertyName: string) : boolean {
		let iv = this.i.isCustomFieldDirty(propertyName);
		return (iv);
	}
	/**
	 * Gets if a named property is dirty.
	
	* @param propertyId  * The property id to check.
	*/
	public isDirtyById(propertyId_: number) : boolean {
		let iv = this.i.isDirtyById(propertyId_);
		return (iv);
	}
	/**
	 * Gets if a named property is dirty.
	
	* @param propertyName  * The property name to check.
	*/
	public isDirty(propertyName: string) : boolean {
		let iv = this.i.isDirty(propertyName);
		return (iv);
	}
	public setNamedValue(valueName: string, value: any) {
		this.i.setNamedValue(valueName, value);
	}
	/**
	 * Returns if there is a named value stored for the cell.
	
	* @param valueName  * The name of the value to check.
	*/
	public hasNamedValue(valueName: string) : boolean {
		let iv = this.i.hasNamedValue(valueName);
		return (iv);
	}
	/**
	 * Removes a named value from the cell.
	
	* @param valueName  * The name of the value to remove.
	*/
	public removeNamedValue(valueName: string) {
		this.i.removeNamedValue(valueName);
	}
	/**
	 * Gets a named value from the cell.
	
	* @param valueName  * The name of the value to get.
	*/
	public getNamedValue(valueName: string) : any {
		let iv = this.i.getNamedValue(valueName);
		return (iv);
	}

    
}
