import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate';
import { StyleShapeEventArgs as StyleShapeEventArgs_internal } from "./StyleShapeEventArgs";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Style } from "igniteui-core/Style";


export class IgxStyleShapeEventArgs {

    protected _implementation: any;
    public get i(): StyleShapeEventArgs_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

    }
    constructor() {
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }
    	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	/**
	 * Gets or sets the fill brush.
	*/
	get shapeFill() : string {
		return this.i.shapeStyle ? (this.i.shapeStyle.fill as string) : null;
	}
	set shapeFill(v: string) {
		this.ensureShapeStyle();
	                                        this.i.shapeStyle.fill = v;
	}
	/**
	 * Gets or sets the stroke brush.
	*/
	get shapeStroke() : string {
		return this.i.shapeStyle ? (this.i.shapeStyle.stroke as string) : null;
	}
	set shapeStroke(v: string) {
		this.ensureShapeStyle();
	                                        this.i.shapeStyle.stroke = v;
	}
	/**
	 * Gets or sets the stroke thickness.
	*/
	get shapeStrokeThickness() : number {
		return this.i.shapeStyle ? (this.i.shapeStyle.strokeThickness as number) : NaN;
	}
	set shapeStrokeThickness(v: number) {
	                                        this.ensureShapeStyle();
		this.i.shapeStyle.strokeThickness = +v;
	}
	/**
	 * Gets or sets the opacity.
	*/
	get shapeOpacity() : number {
		return this.i.shapeStyle ? (this.i.shapeStyle.opacity as number) : NaN;
	}
	set shapeOpacity(v: number) {
	                                        this.ensureShapeStyle();
		this.i.shapeStyle.opacity = +v;
	}
	ensureShapeStyle() {
	if (this.i.shapeStyle) {
	                                            return;
	                                        }
	                                        this.i.shapeStyle = new Style();
	
	                                }

    

    
}