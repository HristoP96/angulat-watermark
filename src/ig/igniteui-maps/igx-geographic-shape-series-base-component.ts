import { forwardRef, Input } from '@angular/core';
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicShapeSeriesBase } from "./GeographicShapeSeriesBase";
import { IgxShapeDataSource } from "igniteui-core/igx-shape-data-source";

/**
 * Base class for series which render polygons on a map.
*/
export const IgxGeographicShapeSeriesBaseComponent_PROVIDERS = [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesBaseComponent)}];
export abstract class IgxGeographicShapeSeriesBaseComponent extends IgxGeographicMapSeriesHostComponent
{


	public get i() : GeographicShapeSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}

    private _shapeDataSource: string;
	/**
 	 * Gets or sets the string path of the .shp portion of the Shapefile.
	*/
    @Input()
    set shapeDataSource(value: string) {
        this._shapeDataSource = value;
        this.updateShapeDataSource();
    }
    get shapeDataSource(): string {
        return this._shapeDataSource;
    }

    private _databaseSource: string;
	/**
	 * Gets or sets the string path of the .dbf portion of the Shapefile.
	*/
    @Input()
    set databaseSource(value: string) {
        this._databaseSource = value;
        this.updateShapeDataSource();
    }
    get databaseSource(): string {
        return this._databaseSource;
    }

    private _currData: any = null;
    private _sub: () => void = null;
    protected onUpdateDataSource(dataSource: any): any {
        if (dataSource && dataSource.getPointData) {
            this._currData = dataSource;
            if (this._sub != null) {
                this._sub();
            }
            this._sub = dataSource.importCompleted.subscribe((o, e) => {
                if (this._currData == dataSource) {
                    this.i.itemsSource = dataSource.getPointData();
                }
            });
            if (dataSource.count > 0) {
                return dataSource.getPointData();
            }
            return null;
        }
        return dataSource;
    }

    private _cachedShapeDataSource: IgxShapeDataSource;
    private updateShapeDataSource() {
        if (this._cachedShapeDataSource == null) {
            this._cachedShapeDataSource = new IgxShapeDataSource();
            this.onShapeDataSourceImportCompleted = this.onShapeDataSourceImportCompleted.bind(this);
            this._cachedShapeDataSource.importCompleted.subscribe(this.onShapeDataSourceImportCompleted);
        }

        this._cachedShapeDataSource.shapefileSource = this._shapeDataSource;
       	this._cachedShapeDataSource.databaseSource = this._databaseSource;

        if (this._shapeDataSource && this._databaseSource) {
            this._cachedShapeDataSource.dataBind();
        }
    }

    private onShapeDataSourceImportCompleted(args: any) {
        this.dataSource = this._cachedShapeDataSource.getPointData();
    }
    	/**
	 * The name of the property on ItemsSource items which, for each shape, contains a list of points to be converted to a polygon.
	 * To be consistent with the Shapefile technical description, it is expected that each list of points is defined as an IEnumerable of IEnumerable of Point, or in other words, a list of lists of points.
	*/
	get shapeMemberPath() : string {
		return (this.i.shapeMemberPath as string);
	}
	@Input()
	set shapeMemberPath(v: string) {
		this.i.shapeMemberPath = v;
	}
	/**
	 * The resolution at which to filter out shapes in the series.  For example, if the ShapeFilterResolution is set to 3, then elements with a bounding rectangle smaller than 3 X 3 pixels will be filtered out.
	 * In the case of GeographicPolylineSeries, the resolution is compared to either dimension, rather than both.  In other words, a polyline will not be filtered if its height or its width exceeds the value of this property.  Whereas with a ShapeSeries, both the height and the width must exceed the value of this property.
	*/
	get shapeFilterResolution() : number {
		return (this.i.shapeFilterResolution as number);
	}
	@Input()
	set shapeFilterResolution(v: number) {
		this.i.shapeFilterResolution = +v;
	}

    

    
}

