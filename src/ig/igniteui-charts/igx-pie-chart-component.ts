import { Component, ChangeDetectionStrategy, AfterContentInit, OnDestroy, ViewChild, ViewContainerRef, Input, Inject, NgZone, ComponentFactoryResolver, Renderer2, Injector, ComponentRef } from '@angular/core';
import { AngularRenderer, AngularWrapper } from 'igniteui-core/angular-renderer';
import { TypeRegistrar, IEnumerable } from 'igniteui-core/type';
import { IgxPieChartBaseComponent } from './igx-pie-chart-base-component';
import { DataChartStylingDefaults } from './DataChartStylingDefaults';
import { XamPieChart } from './XamPieChart';
import { IgxDataContext } from 'igniteui-core/igx-data-context';
import { toSpinal, initializePropertiesFromCss, NamePatcher } from 'igniteui-core/componentUtil';

export const IgxPieChartComponent_PROVIDERS = [];

/**
 * Represents Infragistics IgxPieChartComponent control.
*/
@Component({
	selector: 'igx-pie-chart',
	template: `<ng-container #dynamicContent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: IgxPieChartComponent_PROVIDERS,
    host: { 'class': 'ig-pie-chart igx-pie-chart' },
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class IgxPieChartComponent extends IgxPieChartBaseComponent implements OnDestroy, AfterContentInit {
	container: Element;

	@ViewChild("dynamicContent", {read: ViewContainerRef, static: true }) _dynamicContent: ViewContainerRef;

    private _height: string;
    private _width: string;
    @Input()
    set height(value: string) {
        this._height = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._chart.notifyContainerResized();
    }
    get height(): string {
        return this._height;
    }

    @Input()
    set width(value: string) {
        this._width = value;
        this.renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._chart.notifyContainerResized();
    }
    get width(): string {
        return this._width;
    }

    private _root: Element = null;
	constructor(private renderer: Renderer2, 
		private _elRef: ViewContainerRef,
		 private ngZone: NgZone, 
		 private injector: Injector,
		 private componentFactoryResolver: ComponentFactoryResolver) {
		super();
      
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
		this._zoneRunner = (act: () => void) => ngZone.run(act);
		this.container = renderer.createElement("div");
        renderer.appendChild(_elRef.element.nativeElement, this.container);
		renderer.setStyle(this.container, "display", "block");
		renderer.setStyle(this.container, "width", "100%");
		renderer.setStyle(this.container, "height", "100%");
		var root: any;
		root = this.container;
		if (this.container != null) {
			root = this.container;
        }
        this._root = root;
		var ren: AngularRenderer = new AngularRenderer(
            root, this.renderer, window.document, 
            this.ngZone, true,
			DataChartStylingDefaults);
		this._wrapper = ren;
		var chart = this.i;
		this._chart = <XamPieChart>chart;
        
		chart.provideContainer(ren);
        this.bindData();
        
        chart.notifyContainerResized();
        ren.addSizeWatcher(() => {
            this._chart.notifyContainerResized();
        });
    }

    ngAfterContentInit() {
        

        this._styling(this._root, this);

        this.i.notifyContainerResized();
    }

    ngOnDestroy() {
        this._chart.destroy();
        this._wrapper.destroy();
    }

	private _wrapper: AngularRenderer;

	protected createImplementation() {
		return new XamPieChart();
	}

    public get i(): XamPieChart {
		return this._implementation;
	}

    protected createSeriesComponent(type: string): any {
        if (TypeRegistrar.isRegistered(type)) {
            let s = TypeRegistrar.create(type);
            (<any>s).owner = this;
            (<any>s)._provideRenderer(this.renderer);
            return s;
        } else {
            //we shouldn't get here, hopefully.
            throw Error("series type not loaded: " + type);
        }
    }

    private _chart: XamPieChart;

    private _dataSource: Array<any> = null;
    @Input()
	set dataSource(value: Array<any>) {
		this._dataSource = value;
		this.bindData();
	}
	get dataSource(): Array<any> {
		return this._dataSource;
	}

	bindData() {
        if (this._chart != null && this._chart !== undefined) {
            this._chart.itemsSource = <IEnumerable><any>this._dataSource;
        }
    }

    /**
	 * Gets or sets the legend used for the current chart.
	*/
    get legend(): any {
        if (this.i.legend != null)
            return (<any>this.i.legend).externalObject;
    }
    @Input()
    set legend(v: any) {
        if (v != undefined && v != null)
            this.i.legend = v.i;
    }

	

    

	

    

    //@@ZoneRunner
}
