import { Type, Output, EventEmitter, Component, ViewContainerRef, ComponentRef, Injector, ComponentFactoryResolver, AfterViewInit, OnInit, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { fromRect, toRect, ensureEnum, brushToString, stringToBrush, ensureBool, initializePropertiesFromCss, NamePatcher, isValidProp, toSpinal, getModifiedProps, fromBrushCollection, toBrushCollection, brushCollectionToString, enumToString, getAllPropertyNames, fromSpinal } from "igniteui-core/componentUtil";
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { CheckboxList } from './CheckboxList';
import { IgxCheckedChangedEventArgs } from 'igniteui-grids/igx-checked-changed-event-args';
import { IgxLiveGridComponent } from 'igniteui-grids/igx-live-grid-component';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { PrimaryKeyValue } from 'igniteui-grids/PrimaryKeyValue';
import { IgxGridSelectedKeysCollection } from 'igniteui-grids/igx-grid-selected-keys-collection';
import { GridSelectedKeysCollection as GridSelectedKeysCollection_internal } from 'igniteui-grids/GridSelectedKeysCollection';
export const IgxCheckboxListComponent_PROVIDERS = [];

// IgxLiveGridModule.register();


@Component({
	selector: 'igx-checkbox-list',
    template: `<div #listContainer>
                <input type="text">
                <igx-live-grid #listGrid height="90%" width="100%"></igx-live-grid>
                </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxCheckboxListComponent_PROVIDERS,
    host: { 'class': 'ig-checkbox-list igx-checkbox-list' },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxCheckboxListComponent implements AfterViewInit {
    container: Element;

    @ViewChild("listGrid", { read: IgxLiveGridComponent, static: true })
    public _listGrid: IgxLiveGridComponent;

    @ViewChild("listContainer", { read: ElementRef, static: true })
    public _listContainer: ElementRef;

    private _height: string;
    private _width: string;
    private _dataSource: any = null;

    @Input()
    set height(value: string) {
        this._height = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._checkboxList.notifySizeChanged();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._checkboxList.notifySizeChanged();
    }
    get width(): string {
        return this._width;
    }

    @Input()
    set dataSource(value: any) {
        this._dataSource = value;
        if (this._checkboxList != null) {
            this._checkboxList.itemsSource = this._dataSource;
        }
    }
    get dataSource(): any {
        return this._dataSource;
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

        var checkboxList = this.i;
        this._checkboxList = checkboxList;

	}

    // supports angular themes or custom properties set in CSS
    public updateStyle() {
        this._styling(this._root, this);
	}

    ngOnDestroy() {
        this._checkboxList.destroy();
        this._wrapper.destroy();
    }

	
    private _implementation: CheckboxList = null;

    ngAfterViewInit(): void {
        if (this.renderer && this._listGrid != null && this._listContainer != null) {
            this.container = this._listContainer.nativeElement;
            this._root = this.container;
            var ren: AngularRenderer = new AngularRenderer(
                this.container, this.renderer, window.document,
                this.ngZone, true,
                null);
            this._wrapper = ren;
            this._checkboxList.provideContainer(ren, this._listGrid.i);
            this._checkboxList.notifySizeChanged();

            ren.addSizeWatcher(() => {
                this._checkboxList.notifySizeChanged();
            });
        }

        this._styling(this._root, this);

        this.i.notifySizeChanged();
        this.updateStyle();
    }

	protected createImplementation() {
		return new CheckboxList();
	}

    public get i(): CheckboxList {
		return this._implementation;
	}

    private _checkboxList: CheckboxList;

   
		private _keys: IgxGridSelectedKeysCollection = null;
	                                
	/**
	 * Gets the collection responsible for selection in the CheckboxList. Selection is determined by two factors:
	 * whether everything is selected or deselected and the values present in this collection. If everything is
	 * selected then any items in this collection will be deselected. If everything is deselected then any items in
	 * this collection will be selected. The CheckboxList defaults all items as deselected. This state can change
	 * when you use the SelectAll and DeselectAll methods.
	*/
	get keys() : IgxGridSelectedKeysCollection {
	                                        if (this._keys === null) {
	                                            let coll = new IgxGridSelectedKeysCollection();
	                                            let innerColl = this.i.keys;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedKeysCollection_internal();
			}
	                                            this._keys = (coll as any)._fromInner(innerColl);
	                                            
	                                        }
		return this._keys;
	}
	@Input()
	set keys(v: IgxGridSelectedKeysCollection) {
	                                        if (this._keys !== null) {
	                                            (this._keys as any)._setSyncTarget(null);
	                                            this._keys = null;
	                                        }
	                                        let coll = new IgxGridSelectedKeysCollection();
	                                        this._keys = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<PrimaryKeyValue>((PrimaryKeyValue as any).$type);
	                                        let innerColl = this.i.keys;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedKeysCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._keys as any)._setSyncTarget(syncColl);
	                                        
	}
	/**
	 * Gets or sets the primary key to use for the CheckboxList.
	*/
	get primaryKey() : string[] {
		return this.i.primaryKey as string[];
	}
	@Input()
	set primaryKey(v: string[]) {
		this.i.primaryKey = v;
	}
	/**
	 * Gets or Sets the property name that contains the values.
	*/
	get dataMemberPath() : string {
		return (this.i.dataMemberPath as string);
	}
	@Input()
	set dataMemberPath(v: string) {
		this.i.dataMemberPath = v;
	}
	/**
	 * Gets or Sets the property name that contains the values.
	*/
	get selectedMemberPath() : string {
		return (this.i.selectedMemberPath as string);
	}
	@Input()
	set selectedMemberPath(v: string) {
		this.i.selectedMemberPath = v;
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
	        genericPrefix = toSpinal("CheckboxListComponent");
		
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
	 * selects all the items in the checkbox list.
	
	*/
	public selectAll() {
		this.i.selectAll();
	}
	/**
	 * Deselects all the items in the checkbox list.
	
	*/
	public deselectAll() {
		this.i.deselectAll();
	}
	public notifySetItem(index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(index, oldItem, newItem);
	}
	/**
	 * Manually notifies the checkboxlist's grid that the data it has bound to has been cleared and needs to be re-examined.
	 * This should not be called if the data that the grid is bound to is already observable.
	
	*/
	public notifyClearItems() {
		this.i.notifyClearItems();
	}
	public notifyInsertItem(index: number, newItem: any) {
		this.i.notifyInsertItem(index, newItem);
	}
	public notifyRemoveItem(index: number, oldItem: any) {
		this.i.notifyRemoveItem(index, oldItem);
	}
	public addKeyValue(value: any[]) {
		this.i.addKeyValue(value);
	}
	public removeKeyValue(value: any[]) {
		this.i.removeKeyValue(value);
	}

    	private _checkedChanged: EventEmitter<{ sender: any, args: IgxCheckedChangedEventArgs}> = null;
	/**
	 * Called when a checkbox is checked or unchecked.
	*/
	@Output()
	get checkedChanged(): EventEmitter<{ sender: any, args: IgxCheckedChangedEventArgs}> {
		if (this._checkedChanged == null) {
			this._checkedChanged = new EventEmitter<{sender: any, args: IgxCheckedChangedEventArgs}>();
			this.i.checkedChanged = delegateCombine(this.i.checkedChanged, (o, e) => {
				let outerArgs = new IgxCheckedChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeCheckedChanged) {
	                            (this as any).beforeCheckedChanged(this, outerArgs);
	                        }
					    this._checkedChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._checkedChanged;
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
