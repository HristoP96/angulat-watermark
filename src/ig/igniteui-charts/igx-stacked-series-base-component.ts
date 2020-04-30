import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy, TemplateRef, ComponentRef  } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, IEnumerable } from 'igniteui-core/type';
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { Style } from 'igniteui-core/Style';
import { IgxPropertyUpdatedEventArgs } from "igniteui-core/igx-property-updated-event-args";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { ensureEnum, toBrushCollection, fromBrushCollection, toPoint, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";
import { TypeRegistrar } from 'igniteui-core/type';
import { AngularWrapper } from 'igniteui-core/angular-renderer';
import { IgxStackedSeriesCreatedEventArgs } from './igx-stacked-series-created-event-args';
import { IgxCategorySeriesComponent } from "./igx-category-series-component";

import { StackedFragmentSeries } from './StackedSeriesCreatedEventArgs_combined';
import { AfterContentInit, ContentChildren, QueryList  } from '@angular/core';
import { NotifyCollectionChangedAction } from 'igniteui-core/NotifyCollectionChangedAction';
import { IgxStackedFragmentSeriesComponent } from './igx-stacked-fragment-series-component';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { CollectionAdapter } from "igniteui-core/componentUtil";
import { IgxStackedSeriesCollection } from './igx-stacked-series-collection';

/**
 * Represents a IgxStackedSeriesBaseComponent base series.
*/
export const IgxStackedSeriesBaseComponent_PROVIDERS = [];
export abstract class IgxStackedSeriesBaseComponent extends IgxCategorySeriesComponent implements AfterContentInit, OnInit {

    protected createImplementation(): StackedSeriesBase {
        return null;
    }
    ngOnInit() {
    }

    protected _implementation: any;
    public get i(): StackedSeriesBase {
        return this._implementation;
    }
    constructor() {
        super();
        //=============================
        this._seriesAdapter = new CollectionAdapter<IgxStackedFragmentSeriesComponent, StackedFragmentSeries>(
            [],
            this.i.series,
            this.actualSeries,
            (c) => c.i,
            (i) => {
                (<any>i).owner = this;
                //(<any>i)._provideRenderer(this._dataSource);
                //i.provideData(this._dataSource);
                //this._ensureDefaultTooltip(i);
                //this._ensureTooltipCreated(i);
            },
            (i) => {
                //(<any>i)._provideRenderer(null);
                //i.provideData(null); 
            }
        );
		//=============================
    }

    //=============================

    ngAfterContentInit() {
        this._seriesAdapter.updateQuery(this.fragments);
    }

    @ContentChildren(IgxStackedFragmentSeriesComponent) fragments: QueryList<IgxStackedFragmentSeriesComponent>;
    private _seriesAdapter: CollectionAdapter<IgxStackedFragmentSeriesComponent, StackedFragmentSeries> = null;


	/**
	 * The series actually present in the chart. Do not directly modify this array.
	 * This array's contents can be modified by causing Angular to reproject the child content.
	 * Or adding and removing series from the manual series collection on the series property.
	 */
    actualSeries: IgxStackedFragmentSeriesComponent[] = [];
    private _series: IgxStackedSeriesCollection = null;
	/**
	 * A collection or manually added series for the chart.
	*/
    get series(): IgxStackedSeriesCollection {
        if (this._series === null) {
            let coll = new IgxStackedSeriesCollection();
            let inner: SyncableObservableCollection$2<IgxStackedFragmentSeriesComponent, StackedFragmentSeries> = (<any>coll)._innerColl;
            inner.addListener((sender, e) => {
                switch (e.action) {
                    case NotifyCollectionChangedAction.Add:
                        this._seriesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Remove:
                        this._seriesAdapter.removeManualItemAt(e.oldStartingIndex);
                        break;
                    case NotifyCollectionChangedAction.Replace:
                        this._seriesAdapter.removeManualItemAt(e.oldStartingIndex);
                        this._seriesAdapter.insertManualItem(e.newStartingIndex, e.newItems.item(0));
                        break;
                    case NotifyCollectionChangedAction.Reset:
                        this._seriesAdapter.clearManualItems();
                        break;
                }
            });
            this._series = coll;
        }
        return this._series;
    }


	//=============================

    static _createFromInternal(internal: any): IgxStackedSeriesBaseComponent {
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
	 * Gets or sets whether series should be automatically generated. Reqiures the use of GroupBy as the ItemsSource.
	*/
	get autoGenerateSeries() : boolean {
		return (this.i.autoGenerateSeries as boolean);
	}
	@Input()
	set autoGenerateSeries(v: boolean) {
		this.i.autoGenerateSeries = ensureBool(v);
	}
	/**
	 * Gets or sets whether the order of the fragment series should be reversed in the legend.
	*/
	get reverseLegendOrder() : boolean {
		return (this.i.reverseLegendOrder as boolean);
	}
	@Input()
	set reverseLegendOrder(v: boolean) {
		this.i.reverseLegendOrder = ensureBool(v);
	}
	/**
	 * Checks if this series is a stacked series
	*/
	get isStacked() : boolean {
		return (this.i.isStacked as boolean);
	}

    

		/**
	 * Simulates a pointer hover over the series surface.
	
	* @param point  * The pointer position relative to the series viewport over which to hover.
	*/
	public simulateHover(point: IgPoint) {
		this.i.simulateHover(toPoint(point));
	}
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The series is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}

    	private _seriesCreated: EventEmitter<{ sender: any, args: IgxStackedSeriesCreatedEventArgs}> = null;
	/**
	 * Event raised when a new fragment series is automatically generated.
	*/
	@Output()
	get seriesCreated(): EventEmitter<{ sender: any, args: IgxStackedSeriesCreatedEventArgs}> {
		if (this._seriesCreated == null) {
			this._seriesCreated = new EventEmitter<{sender: any, args: IgxStackedSeriesCreatedEventArgs}>();
			this.i.seriesCreated = delegateCombine(this.i.seriesCreated, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxStackedSeriesCreatedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeSeriesCreated) {
	                        (this as any).beforeSeriesCreated(this, outerArgs);
	                    }
					this._seriesCreated.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._seriesCreated;
	}

    
}
