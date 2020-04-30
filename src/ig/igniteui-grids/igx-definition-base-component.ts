import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine } from 'igniteui-core/type';
import { CellContentHorizontalAlignment, CellContentHorizontalAlignment_$type } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment, CellContentVerticalAlignment_$type } from "./CellContentVerticalAlignment";
import { TextCellLineBreakMode, TextCellLineBreakMode_$type } from "./TextCellLineBreakMode";
import { IgxDataBindingEventArgs } from "./igx-data-binding-event-args";
import { IgxCellStyleRequestedEventArgs } from "./igx-cell-style-requested-event-args";
import { CellPropertyAnimationType, CellPropertyAnimationType_$type } from "./CellPropertyAnimationType";
import { DefinitionBase } from "./DefinitionBase";
import { NamePatcher } from "igniteui-core/componentUtil";
import { brushToString, stringToBrush, ensureEnum, toSpinal, initializePropertiesFromCss } from "igniteui-core/componentUtil";
import { FontInfo } from "igniteui-core/FontInfo";
import { TypeRegistrar } from 'igniteui-core/type';
import { ColumnPropertyUpdatingAnimationMode } from './ColumnPropertyUpdatingAnimationMode';
import { AngularRenderer } from "igniteui-core/angular-renderer";


/**
 * Base class for various definition types for the grid.
*/
export abstract class IgxDefinitionBaseComponent implements OnInit {

    protected createImplementation() : DefinitionBase
    {
	    return null;
    }

    	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DefinitionBase {
	return this._implementation;
	}/**
	                             * @hidden 
	                             */
	static _createFromInternal(internal: any) : IgxDefinitionBaseComponent {
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

    ngOnInit() {
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
		this._stylingContainer = container;
        this._stylingParent = component;
        if (this._inStyling) {
            return;
        }
        this._inStyling = true;

        let grid = component._grid;
        var prev: any;
        if (grid) {
            prev = grid.columnPropertyUpdatingAnimationMode;
            grid.columnPropertyUpdatingAnimationMode = ColumnPropertyUpdatingAnimationMode.None;
        }

        let genericPrefix = "";
        let typeName = (this.i as any).$type.name;
        let lowerTypeName = typeName.toLowerCase();
        if (lowerTypeName.indexOf("column") >= 0) {
            genericPrefix = "column";
        } else if (lowerTypeName.indexOf("sectionheader") >= 0) {
            genericPrefix = "section-header";
        } else if (lowerTypeName.indexOf("sectionfooter") >= 0) {
            genericPrefix = "section-footer";
        } else if (lowerTypeName.indexOf("rowseparator") >= 0) {
            genericPrefix = "row-separator";
        } else {
            genericPrefix = "header";
		}
		
		let additionalPrefixes = [];
		
		let prefix = toSpinal(typeName);
		additionalPrefixes.push(prefix + "-");
		
		if (parent) {
			let parentTypeName = (parent.i as any).$type.name;
            if (parentTypeName == "Grid") {
                parentTypeName = "LiveGrid";
            }
			let parentPrefix = toSpinal(parentTypeName);

			additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
			additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
		}

		initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);

        if (grid) {
            grid.columnPropertyUpdatingAnimationMode = prev;
        }

        this._inStyling = false;
	}

    private _renderer: AngularRenderer = null;
    private _provideRenderer(renderer: AngularRenderer) {
        this._renderer = renderer;
        this._zoneRunner = (act: () => void) => (<any>renderer)._ngZone.run(act);
    }

    	/**
	 * Gets or sets the background color to use.
	*/
	get background() : string {
		return brushToString(this.i.background);
	}
	@Input()
	set background(v: string) {
		this.i.background = stringToBrush(v);
	}
	/**
	 * Gets or sets the background color to use.
	*/
	get border() : string {
		return brushToString(this.i.border);
	}
	@Input()
	set border(v: string) {
		this.i.border = stringToBrush(v);
	}
	/**
	 * Gets or sets the background color to use.
	*/
	get activationBorder() : string {
		return brushToString(this.i.activationBorder);
	}
	@Input()
	set activationBorder(v: string) {
		this.i.activationBorder = stringToBrush(v);
	}
	/**
	 * Gets the actual border color that will be used.
	*/
	get actualBorder() : string {
		return brushToString(this.i.actualBorder);
	}
	@Input()
	set actualBorder(v: string) {
		this.i.actualBorder = stringToBrush(v);
	}
	/**
	 * Gets or sets the amount of left border to use for the cell content for this column.
	*/
	get borderLeftWidth() : number {
		return (this.i.borderLeftWidth as number);
	}
	@Input()
	set borderLeftWidth(v: number) {
		this.i.borderLeftWidth = +v;
	}
	/**
	 * Gets or sets the amount of top border to use for the cell content for this column.
	*/
	get borderTopWidth() : number {
		return (this.i.borderTopWidth as number);
	}
	@Input()
	set borderTopWidth(v: number) {
		this.i.borderTopWidth = +v;
	}
	/**
	 * Gets or sets the amount of right border to use for the cell content of this column.
	*/
	get borderRightWidth() : number {
		return (this.i.borderRightWidth as number);
	}
	@Input()
	set borderRightWidth(v: number) {
		this.i.borderRightWidth = +v;
	}
	/**
	 * Gets or sets the amount of bottom border to use for the cell content of this column.
	*/
	get borderBottomWidth() : number {
		return (this.i.borderBottomWidth as number);
	}
	@Input()
	set borderBottomWidth(v: number) {
		this.i.borderBottomWidth = +v;
	}
	/**
	 * Gets or sets the amount of left activation border to use for the cell content for this column.
	*/
	get activationBorderLeftWidth() : number {
		return (this.i.activationBorderLeftWidth as number);
	}
	@Input()
	set activationBorderLeftWidth(v: number) {
		this.i.activationBorderLeftWidth = +v;
	}
	/**
	 * Gets or sets the amount of top activation border to use for the cell content for this column.
	*/
	get activationBorderTopWidth() : number {
		return (this.i.activationBorderTopWidth as number);
	}
	@Input()
	set activationBorderTopWidth(v: number) {
		this.i.activationBorderTopWidth = +v;
	}
	/**
	 * Gets or sets the amount of right activation border to use for the cell content of this column.
	*/
	get activationBorderRightWidth() : number {
		return (this.i.activationBorderRightWidth as number);
	}
	@Input()
	set activationBorderRightWidth(v: number) {
		this.i.activationBorderRightWidth = +v;
	}
	/**
	 * Gets or sets the amount of bottom activation border to use for the cell content of this column.
	*/
	get activationBorderBottomWidth() : number {
		return (this.i.activationBorderBottomWidth as number);
	}
	@Input()
	set activationBorderBottomWidth(v: number) {
		this.i.activationBorderBottomWidth = +v;
	}
	/**
	 * Gets the actual background color that will be used.
	*/
	get actualBackground() : string {
		return brushToString(this.i.actualBackground);
	}
	@Input()
	set actualBackground(v: string) {
		this.i.actualBackground = stringToBrush(v);
	}
	/**
	 * Gets the actual background color that will be used.
	*/
	get actualActivationBorder() : string {
		return brushToString(this.i.actualActivationBorder);
	}
	@Input()
	set actualActivationBorder(v: string) {
		this.i.actualActivationBorder = stringToBrush(v);
	}
	/**
	 * Gets or sets the background color for content that sticks to the top of the grid.
	*/
	get stickyRowBackground() : string {
		return brushToString(this.i.stickyRowBackground);
	}
	@Input()
	set stickyRowBackground(v: string) {
		this.i.stickyRowBackground = stringToBrush(v);
	}
	/**
	 * Gets the actual background color for content that sticks to the top of the grid.
	*/
	get actualStickyRowBackground() : string {
		return brushToString(this.i.actualStickyRowBackground);
	}
	@Input()
	set actualStickyRowBackground(v: string) {
		this.i.actualStickyRowBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the background color for cells belonging to rows marked as pinned.
	*/
	get pinnedRowBackground() : string {
		return brushToString(this.i.pinnedRowBackground);
	}
	@Input()
	set pinnedRowBackground(v: string) {
		this.i.pinnedRowBackground = stringToBrush(v);
	}
	/**
	 * Gets the actual background color for cells belonging to rows marked as pinned.
	*/
	get actualPinnedRowBackground() : string {
		return brushToString(this.i.actualPinnedRowBackground);
	}
	@Input()
	set actualPinnedRowBackground(v: string) {
		this.i.actualPinnedRowBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the color for the last row in the sticky row area.
	*/
	get lastStickyRowBackground() : string {
		return brushToString(this.i.lastStickyRowBackground);
	}
	@Input()
	set lastStickyRowBackground(v: string) {
		this.i.lastStickyRowBackground = stringToBrush(v);
	}
	/**
	 * Gets the actual color for the last row in the sticky row area.
	*/
	get actualLastStickyRowBackground() : string {
		return brushToString(this.i.actualLastStickyRowBackground);
	}
	@Input()
	set actualLastStickyRowBackground(v: string) {
		this.i.actualLastStickyRowBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the opacity of the content.
	*/
	get contentOpacity() : number {
		return (this.i.contentOpacity as number);
	}
	@Input()
	set contentOpacity(v: number) {
		this.i.contentOpacity = +v;
	}
	/**
	 * Gets or sets the horizontal alignment to use for the cell content.
	*/
	get horizontalAlignment() : CellContentHorizontalAlignment {
		return this.i.horizontalAlignment;
	}
	@Input()
	set horizontalAlignment(v: CellContentHorizontalAlignment) {
		this.i.horizontalAlignment = ensureEnum<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, v);
	}
	/**
	 * Gets or sets the vertical alignment to use for the cell content.
	*/
	get verticalAlignment() : CellContentVerticalAlignment {
		return this.i.verticalAlignment;
	}
	@Input()
	set verticalAlignment(v: CellContentVerticalAlignment) {
		this.i.verticalAlignment = ensureEnum<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, v);
	}
	/**
	 * Gets or sets the line breaking mode to use if text is present in the cell.
	*/
	get lineBreakMode() : TextCellLineBreakMode {
		return this.i.lineBreakMode;
	}
	@Input()
	set lineBreakMode(v: TextCellLineBreakMode) {
		this.i.lineBreakMode = ensureEnum<TextCellLineBreakMode>(TextCellLineBreakMode_$type, v);
	}
	/**
	 * Gets the actual line break mode which will be used if text is present in the cell.
	*/
	get actualLineBreakMode() : TextCellLineBreakMode {
		return this.i.actualLineBreakMode;
	}
	@Input()
	set actualLineBreakMode(v: TextCellLineBreakMode) {
		this.i.actualLineBreakMode = ensureEnum<TextCellLineBreakMode>(TextCellLineBreakMode_$type, v);
	}
	/**
	 * Gets or sets the color to use for displaying text.
	*/
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	@Input()
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
	}
	/**
	 * Gets the actual color used for displaying text.
	*/
	get actualTextColor() : string {
		return brushToString(this.i.actualTextColor);
	}
	@Input()
	set actualTextColor(v: string) {
		this.i.actualTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for displaying text.
	*/
	get pinnedRowOpacity() : number {
		return (this.i.pinnedRowOpacity as number);
	}
	@Input()
	set pinnedRowOpacity(v: number) {
		this.i.pinnedRowOpacity = +v;
	}
	/**
	 * Gets or sets the color to use for displaying text.
	*/
	get actualPinnedRowOpacity() : number {
		return (this.i.actualPinnedRowOpacity as number);
	}
	@Input()
	set actualPinnedRowOpacity(v: number) {
		this.i.actualPinnedRowOpacity = +v;
	}
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

    
		public setNamedValue(valueName: string, animationType: CellPropertyAnimationType, value: any) {
		this.i.setNamedValue(valueName, (animationType == null ? null : animationType), value);
	}
	/**
	 * Returns if this definition has named value.
	
	*/
	public hasNamedValues() : boolean {
		let iv = this.i.hasNamedValues();
		return (iv);
	}
	/**
	 * Returns if this definition has a named value with a given name.
	
	* @param valueName  * The named value name to check for.
	*/
	public hasNamedValue(valueName: string) : boolean {
		let iv = this.i.hasNamedValue(valueName);
		return (iv);
	}
	/**
	 * Removes the named value from this definition by name.
	
	* @param valueName  * The named value name to remove.
	*/
	public removeNamedValue(valueName: string) {
		this.i.removeNamedValue(valueName);
	}
	/**
	 * Gets the value for a named value from this definition.
	
	* @param valueName  * The named value name to check for.
	*/
	public getNamedValue(valueName: string) : any {
		let iv = this.i.getNamedValue(valueName);
		return (iv);
	}

    	private _dataBinding: EventEmitter<{ sender: any, args: IgxDataBindingEventArgs}> = null;
	/**
	 * Called when a cell is data binding.
	*/
	@Output()
	get dataBinding(): EventEmitter<{ sender: any, args: IgxDataBindingEventArgs}> {
		if (this._dataBinding == null) {
			this._dataBinding = new EventEmitter<{sender: any, args: IgxDataBindingEventArgs}>();
			this.i.dataBinding = delegateCombine(this.i.dataBinding, (o, e) => {
				let outerArgs = new IgxDataBindingEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeDataBinding) {
	                            (this as any).beforeDataBinding(this, outerArgs);
	                        }
					    this._dataBinding.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._dataBinding;
	}
	private _dataBound: EventEmitter<{ sender: any, args: IgxDataBindingEventArgs}> = null;
	/**
	 * Called when a cell has been data bound.
	*/
	@Output()
	get dataBound(): EventEmitter<{ sender: any, args: IgxDataBindingEventArgs}> {
		if (this._dataBound == null) {
			this._dataBound = new EventEmitter<{sender: any, args: IgxDataBindingEventArgs}>();
			this.i.dataBound = delegateCombine(this.i.dataBound, (o, e) => {
				let outerArgs = new IgxDataBindingEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeDataBound) {
	                            (this as any).beforeDataBound(this, outerArgs);
	                        }
					    this._dataBound.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._dataBound;
	}
	private _cellStyleKeyRequested: EventEmitter<{ sender: any, args: IgxCellStyleRequestedEventArgs}> = null;
	/**
	 * Called when the style key for a cell is needed. Used for recycling the cell.
	*/
	@Output()
	get cellStyleKeyRequested(): EventEmitter<{ sender: any, args: IgxCellStyleRequestedEventArgs}> {
		if (this._cellStyleKeyRequested == null) {
			this._cellStyleKeyRequested = new EventEmitter<{sender: any, args: IgxCellStyleRequestedEventArgs}>();
			this.i.cellStyleKeyRequested = delegateCombine(this.i.cellStyleKeyRequested, (o, e) => {
				let outerArgs = new IgxCellStyleRequestedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeCellStyleKeyRequested) {
	                            (this as any).beforeCellStyleKeyRequested(this, outerArgs);
	                        }
					    this._cellStyleKeyRequested.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._cellStyleKeyRequested;
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