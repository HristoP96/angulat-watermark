import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicXYTriangulatingSeries } from "./GeographicXYTriangulatingSeries";
import { IgxTriangulationDataSource } from "igniteui-core/igx-triangulation-data-source";
import { IEnumerable } from "igniteui-core/type";

/**
 * Base class for geographic series which triangulate XY data prior to rendering.
*/
export const IgxGeographicXYTriangulatingSeriesComponent_PROVIDERS = [{ provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicXYTriangulatingSeriesComponent) }, { provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicXYTriangulatingSeriesComponent) }];
export abstract class IgxGeographicXYTriangulatingSeriesComponent extends IgxGeographicMapSeriesHostComponent {


    public get i(): GeographicXYTriangulatingSeries {
        return this._implementation;
    }
    constructor() {
        super();
    }
    private _triangulationDataSource: string;
	/**
	 * Gets or sets the string path specifying the location of the Itf file.
	*/
    @Input()
    set triangulationDataSource(value: string) {
        this._triangulationDataSource = value;
        this.updateTriangulationDataSource();
    }
    get triangulationDataSource(): string {
        return this._triangulationDataSource;
    }

    private _cachedTriangulationDataSource: IgxTriangulationDataSource;
    private updateTriangulationDataSource() {
        if (this._cachedTriangulationDataSource == null) {
            this._cachedTriangulationDataSource = new IgxTriangulationDataSource();
            this.onTriangulationDataSourceImportCompleted = this.onTriangulationDataSourceImportCompleted.bind(this);
            this._cachedTriangulationDataSource.importCompleted.subscribe(this.onTriangulationDataSourceImportCompleted);
        }

       	this._cachedTriangulationDataSource.source = this._triangulationDataSource;
    }

    private onTriangulationDataSourceImportCompleted(s: any, e: any) {
        this.dataSource = this._cachedTriangulationDataSource.getPointData();
        this.trianglesSource = <any[]><any>this._cachedTriangulationDataSource.getTriangleData();
    }


		/**
	 * The name of the property from which to extract the Longitude for each item in the ItemsSource.
	*/
	get longitudeMemberPath() : string {
		return (this.i.longitudeMemberPath as string);
	}
	@Input()
	set longitudeMemberPath(v: string) {
		this.i.longitudeMemberPath = v;
	}
	/**
	 * The name of the property from which to extract the Latitude for each item in the ItemsSource.
	*/
	get latitudeMemberPath() : string {
		return (this.i.latitudeMemberPath as string);
	}
	@Input()
	set latitudeMemberPath(v: string) {
		this.i.latitudeMemberPath = v;
	}
	/**
	 * The source of triangulation data.
	 * This property is optional.  If it is left as null, the triangulation will be created based on the items in the ItemsSource.  Triangulation is a demanding operation, so the runtime performance will be better when specifying a TriangulationSource, especially when a large number of data items are present.
	*/
	get trianglesSource() : any[] {
		return (this.i.trianglesSource as any) as any[];
	}
	@Input()
	set trianglesSource(v: any[]) {
		this.i.trianglesSource = (v as any) as IEnumerable;
	}
	/**
	 * The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource.
	*/
	get triangleVertexMemberPath1() : string {
		return (this.i.triangleVertexMemberPath1 as string);
	}
	@Input()
	set triangleVertexMemberPath1(v: string) {
		this.i.triangleVertexMemberPath1 = v;
	}
	/**
	 * The name of the property of the TrianglesSource items which, for each triangle, contains the index of the second vertex point in the ItemsSource.
	*/
	get triangleVertexMemberPath2() : string {
		return (this.i.triangleVertexMemberPath2 as string);
	}
	@Input()
	set triangleVertexMemberPath2(v: string) {
		this.i.triangleVertexMemberPath2 = v;
	}
	/**
	 * The name of the property of the TrianglesSource items which, for each triangle, contains the index of the third vertex point in the ItemsSource.
	*/
	get triangleVertexMemberPath3() : string {
		return (this.i.triangleVertexMemberPath3 as string);
	}
	@Input()
	set triangleVertexMemberPath3(v: string) {
		this.i.triangleVertexMemberPath3 = v;
	}

    

	

    

    //@@ZoneRunner
}

