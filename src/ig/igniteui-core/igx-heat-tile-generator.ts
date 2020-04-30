import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { HeatTileGenerator as HeatTileGenerator_internal } from "./HeatTileGenerator";
import { colorToString, stringToColor, ensureBool } from "./componentUtil";
import { Color } from "./Color";
import { TileImageCreatedEventArgs } from './TileImageCreatedEventArgs';
import { TileImageZoomChangingEventArgs } from './TileImageZoomChangingEventArgs';
import { ITileGenerator } from './ITileGenerator';

export class IgxHeatTileGenerator implements ITileGenerator {

    protected createImplementation(): HeatTileGenerator_internal {
        return new HeatTileGenerator_internal();
    }
    protected _implementation: any;
    /**
     * @hidden 
     */
    public get i(): HeatTileGenerator_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

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
    
    get scaleColors(): string[] {
        if (this.i.scaleColors == null) {
            return null;
        }
        let c: string[] = [];
        for (let i = 0; i < this.i.scaleColors.length; i++) {
            c.push(colorToString(this.i.scaleColors[i]));
        }
        return c;
    }
    set scaleColors(v: string[]) {
        if (v == null) {
            this.i.scaleColors = null;
            return;
        }
        let c: Color[] = [];
        for (let i = 0; i < v.length; i++) {
            c.push(stringToColor(v[i]));
        }
        this.i.scaleColors = c;
    }

    	get yValues() : number[] {
		return this.i.yValues as number[];
	}
	set yValues(v: number[]) {
		this.i.yValues = v;
	}
	get xValues() : number[] {
		return this.i.xValues as number[];
	}
	set xValues(v: number[]) {
		this.i.xValues = v;
	}
	get values() : number[] {
		return this.i.values as number[];
	}
	set values(v: number[]) {
		this.i.values = v;
	}
	get minimumColor() : string {
		return colorToString(this.i.minimumColor);
	}
	set minimumColor(v: string) {
		this.i.minimumColor = stringToColor(v);
	}
	get maximumColor() : string {
		return colorToString(this.i.maximumColor);
	}
	set maximumColor(v: string) {
		this.i.maximumColor = stringToColor(v);
	}
	get scaleColorOffsets() : number[] {
		return this.i.scaleColorOffsets as number[];
	}
	set scaleColorOffsets(v: number[]) {
		this.i.scaleColorOffsets = v;
	}
	get blurRadius() : number {
		return (this.i.blurRadius as number);
	}
	set blurRadius(v: number) {
		this.i.blurRadius = +v;
	}
	get maxBlurRadius() : number {
		return (this.i.maxBlurRadius as number);
	}
	set maxBlurRadius(v: number) {
		this.i.maxBlurRadius = +v;
	}
	get useBlurRadiusAdjustedForZoom() : boolean {
		return (this.i.useBlurRadiusAdjustedForZoom as boolean);
	}
	set useBlurRadiusAdjustedForZoom(v: boolean) {
		this.i.useBlurRadiusAdjustedForZoom = ensureBool(v);
	}
	get useGlobalMinMax() : boolean {
		return (this.i.useGlobalMinMax as boolean);
	}
	set useGlobalMinMax(v: boolean) {
		this.i.useGlobalMinMax = ensureBool(v);
	}
	get useGlobalMinMaxAdjustedForZoom() : boolean {
		return (this.i.useGlobalMinMaxAdjustedForZoom as boolean);
	}
	set useGlobalMinMaxAdjustedForZoom(v: boolean) {
		this.i.useGlobalMinMaxAdjustedForZoom = ensureBool(v);
	}
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	get logarithmBase() : number {
		return (this.i.logarithmBase as number);
	}
	set logarithmBase(v: number) {
		this.i.logarithmBase = +v;
	}
	get useLogarithmicScale() : boolean {
		return (this.i.useLogarithmicScale as boolean);
	}
	set useLogarithmicScale(v: boolean) {
		this.i.useLogarithmicScale = ensureBool(v);
	}
	get useWebWorkers() : boolean {
		return (this.i.useWebWorkers as boolean);
	}
	set useWebWorkers(v: boolean) {
		this.i.useWebWorkers = ensureBool(v);
	}
	get webWorkerScriptPath() : string {
		return (this.i.webWorkerScriptPath as string);
	}
	set webWorkerScriptPath(v: string) {
		this.i.webWorkerScriptPath = v;
	}
	get webWorkerInstance() : any {
		return this.i.webWorkerInstance as any;
	}
	set webWorkerInstance(v: any) {
		this.i.webWorkerInstance = v;
	}

    

    	public destroy() {
		this.i.destroy();
	}
	public getTile(z: number, x: number, y: number, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, existingImage: HTMLImageElement) {
		this.i.getTile(z, x, y, onCreated, onCreating, zoomChanging, existingImage);
	}
	public cancelTile(z: number, x: number, y: number) {
		this.i.cancelTile(z, x, y);
	}
}
