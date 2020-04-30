/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Number_$type, Delegate_$type, Type, markType } from "./type";
import { ITileGenerator, ITileGenerator_$type } from "./ITileGenerator";
import { Color } from "./Color";
import { HeatTileScaler } from "./HeatTileScaler";
import { Rect } from "./Rect";
import { HeatTileGeneratorWorkerManager } from "./HeatTileGeneratorWorkerManager";
import { Dictionary$2 } from "./Dictionary$2";
import { Tuple$2 } from "./Tuple$2";
import { List$1 } from "./List$1";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { TileImageZoomChangingEventArgs } from "./TileImageZoomChangingEventArgs";
import { Debug } from "./Debug";
import { TileWorkSettings } from "./TileWorkSettings";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";
import { truncate, isNaN_ } from "./number";

/**
 * @hidden 
 */
export class HeatTileGenerator extends Base implements ITileGenerator {
	static $t: Type = markType(HeatTileGenerator, 'HeatTileGenerator', (<any>Base).$type, [ITileGenerator_$type]);
	private _scaler: HeatTileScaler = new HeatTileScaler();
	private static readonly tileSize: number = 256;
	private _tileViewport: Rect = new Rect(0, 0, 0, 256, 256);
	private _manager: HeatTileGeneratorWorkerManager = new HeatTileGeneratorWorkerManager();
	constructor() {
		super();
		this._scaler = new HeatTileScaler();
	}
	private static readonly yValuesPropertyName: string = "YValues";
	private _yValues: number[] = null;
	get yValues(): number[] {
		return this._yValues;
	}
	set yValues(value: number[]) {
		let oldValue = this._yValues;
		this._yValues = value;
		if (this._yValues != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.yValuesPropertyName, oldValue, this._yValues);
		}
	}
	private static readonly xValuesPropertyName: string = "XValues";
	private _xValues: number[] = null;
	get xValues(): number[] {
		return this._xValues;
	}
	set xValues(value: number[]) {
		let oldValue = this._xValues;
		this._xValues = value;
		if (this._xValues != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.xValuesPropertyName, oldValue, this._xValues);
		}
	}
	private static readonly valuesPropertyName: string = "Values";
	private _values: number[] = null;
	get values(): number[] {
		return this._values;
	}
	set values(value: number[]) {
		let oldValue = this._values;
		this._values = value;
		if (this._values != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.valuesPropertyName, oldValue, this._values);
		}
	}
	private static readonly minimumColorPropertyName: string = "MinimumColor";
	private _minimumColor: Color = new Color();
	get minimumColor(): Color {
		return this._minimumColor;
	}
	set minimumColor(value: Color) {
		let oldValue = this._minimumColor;
		this._minimumColor = value;
		if (Color.l_op_Inequality(this._minimumColor, oldValue)) {
			this.onPropertyChanged(HeatTileGenerator.minimumColorPropertyName, oldValue, this._minimumColor);
		}
	}
	private static readonly maximumColorPropertyName: string = "MaximumColor";
	private _maximumColor: Color = new Color();
	get maximumColor(): Color {
		return this._maximumColor;
	}
	set maximumColor(value: Color) {
		let oldValue = this._maximumColor;
		this._maximumColor = value;
		if (Color.l_op_Inequality(this._maximumColor, oldValue)) {
			this.onPropertyChanged(HeatTileGenerator.maximumColorPropertyName, oldValue, this._maximumColor);
		}
	}
	private static readonly scaleColorsPropertyName: string = "ScaleColors";
	private _scaleColors: Color[] = null;
	get scaleColors(): Color[] {
		return this._scaleColors;
	}
	set scaleColors(value: Color[]) {
		let oldValue = this._scaleColors;
		this._scaleColors = value;
		if (this._scaleColors != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.scaleColorsPropertyName, oldValue, this._scaleColors);
		}
	}
	private static readonly scaleColorOffsetsPropertyName: string = "ScaleColorOffsets";
	private _scaleColorOffsets: number[] = null;
	get scaleColorOffsets(): number[] {
		return this._scaleColorOffsets;
	}
	set scaleColorOffsets(value: number[]) {
		let oldValue = this._scaleColorOffsets;
		this._scaleColorOffsets = value;
		if (this._scaleColorOffsets != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.scaleColorOffsetsPropertyName, oldValue, this._scaleColorOffsets);
		}
	}
	private static readonly blurRadiusPropertyName: string = "BlurRadius";
	private _blurRadius: number = 0;
	get blurRadius(): number {
		return this._blurRadius;
	}
	set blurRadius(value: number) {
		let oldValue = this._blurRadius;
		this._blurRadius = value;
		if (this._blurRadius != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.blurRadiusPropertyName, oldValue, this._blurRadius);
		}
	}
	private static readonly maxBlurRadiusPropertyName: string = "MaxBlurRadius";
	private _maxBlurRadius: number = NaN;
	get maxBlurRadius(): number {
		return this._maxBlurRadius;
	}
	set maxBlurRadius(value: number) {
		let oldValue = this._maxBlurRadius;
		this._maxBlurRadius = value;
		if (this._maxBlurRadius != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.maxBlurRadiusPropertyName, oldValue, this._maxBlurRadius);
		}
	}
	private static readonly useBlurRadiusAdjustedForZoomPropertyName: string = "UseBlurRadiusAdjustedForZoom";
	private _useBlurRadiusAdjustedForZoom: boolean = false;
	get useBlurRadiusAdjustedForZoom(): boolean {
		return this._useBlurRadiusAdjustedForZoom;
	}
	set useBlurRadiusAdjustedForZoom(value: boolean) {
		let oldValue = this._useBlurRadiusAdjustedForZoom;
		this._useBlurRadiusAdjustedForZoom = value;
		if (this._useBlurRadiusAdjustedForZoom != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.useBlurRadiusAdjustedForZoomPropertyName, oldValue, this._useBlurRadiusAdjustedForZoom);
		}
	}
	private static readonly useGlobalMinMaxPropertyName: string = "UseGlobalMinMax";
	private _useGlobalMinMax: boolean = false;
	get useGlobalMinMax(): boolean {
		return this._useGlobalMinMax;
	}
	set useGlobalMinMax(value: boolean) {
		let oldValue = this._useGlobalMinMax;
		this._useGlobalMinMax = value;
		if (this._useGlobalMinMax != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.useGlobalMinMaxPropertyName, oldValue, this._useGlobalMinMax);
		}
	}
	private static readonly useGlobalMinMaxAdjustedForZoomPropertyName: string = "UseGlobalMinMaxAdjustedForZoom";
	private _useGlobalMinMaxAdjustedForZoom: boolean = false;
	get useGlobalMinMaxAdjustedForZoom(): boolean {
		return this._useGlobalMinMaxAdjustedForZoom;
	}
	set useGlobalMinMaxAdjustedForZoom(value: boolean) {
		let oldValue = this._useGlobalMinMaxAdjustedForZoom;
		this._useGlobalMinMaxAdjustedForZoom = value;
		if (this._useGlobalMinMaxAdjustedForZoom != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.useGlobalMinMaxAdjustedForZoomPropertyName, oldValue, this._useGlobalMinMaxAdjustedForZoom);
		}
	}
	private static readonly minimumValuePropertyName: string = "MinimumValue";
	private _minimumValue: number = NaN;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		let oldValue = this._minimumValue;
		this._minimumValue = value;
		if (this._minimumValue != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.minimumValuePropertyName, oldValue, this._minimumValue);
		}
	}
	private static readonly maximumValuePropertyName: string = "MaximumValue";
	private _maximumValue: number = NaN;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		let oldValue = this._maximumValue;
		this._maximumValue = value;
		if (this._maximumValue != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.maximumValuePropertyName, oldValue, this._maximumValue);
		}
	}
	private static readonly logarithmBasePropertyName: string = "LogarithmBase";
	private _logarithmBase: number = 10;
	get logarithmBase(): number {
		return this._logarithmBase;
	}
	set logarithmBase(value: number) {
		let oldValue = this._logarithmBase;
		this._logarithmBase = value;
		if (this._logarithmBase != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.logarithmBasePropertyName, oldValue, this._logarithmBase);
		}
	}
	private static readonly useLogarithmicScalePropertyName: string = "UseLogarithmicScale";
	private _useLogarithmicScale: boolean = false;
	get useLogarithmicScale(): boolean {
		return this._useLogarithmicScale;
	}
	set useLogarithmicScale(value: boolean) {
		let oldValue = this._useLogarithmicScale;
		this._useLogarithmicScale = value;
		if (this._useLogarithmicScale != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.useLogarithmicScalePropertyName, oldValue, this._useLogarithmicScale);
		}
	}
	private static readonly useWebWorkersPropertyName: string = "UseWebWorkers";
	private _useWebWorkers: boolean = true;
	get useWebWorkers(): boolean {
		return this._useWebWorkers;
	}
	set useWebWorkers(value: boolean) {
		let oldValue = this._useWebWorkers;
		this._useWebWorkers = value;
		if (this._useWebWorkers != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.useWebWorkersPropertyName, oldValue, this._useWebWorkers);
		}
	}
	private static readonly webWorkerScriptPathPropertyName: string = "WebWorkerScriptPath";
	private _webWorkerScriptPath: string = null;
	get webWorkerScriptPath(): string {
		return this._webWorkerScriptPath;
	}
	set webWorkerScriptPath(value: string) {
		let oldValue = this._webWorkerScriptPath;
		this._webWorkerScriptPath = value;
		if (this._webWorkerScriptPath != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.webWorkerScriptPathPropertyName, oldValue, this._webWorkerScriptPath);
		}
	}
	private static readonly webWorkerInstancePropertyName: string = "WebWorkerInstance";
	private _webWorkerInstance: any = null;
	get webWorkerInstance(): any {
		return this._webWorkerInstance;
	}
	set webWorkerInstance(value: any) {
		let oldValue = this._webWorkerInstance;
		this._webWorkerInstance = value;
		if (this._webWorkerInstance != oldValue) {
			this.onPropertyChanged(HeatTileGenerator.webWorkerInstancePropertyName, oldValue, this._webWorkerInstance);
		}
	}
	destroy(): void {
		this._yValues = null;
		this._xValues = null;
		this._values = null;
		this._manager.destroy();
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyChangedOverride(propertyName, oldValue, newValue);
	}
	protected propertyChangedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case HeatTileGenerator.xValuesPropertyName:

			case HeatTileGenerator.yValuesPropertyName:

			case HeatTileGenerator.valuesPropertyName:
			this.onDataChanged();
			break;

			case HeatTileGenerator.useWebWorkersPropertyName:
			this._manager.shouldUseWorkers = this.useWebWorkers;
			break;

			case HeatTileGenerator.webWorkerScriptPathPropertyName:
			this._manager.webWorkerScriptPath = this.webWorkerScriptPath;
			break;

			case HeatTileGenerator.webWorkerInstancePropertyName:
			this._manager.webWorkerInstance = this.webWorkerInstance;
			break;

		}

	}
	private _globalMax: number = NaN;
	private _globalMin: number = NaN;
	private _globalLock: any = {};
	getTile(z: number, x: number, y: number, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, existingImage: HTMLImageElement): void {
		this.getTile1(z, x, y, onCreated, onCreating, zoomChanging, existingImage, false);
	}
	private _previousZ: number = -1;
	private _zLock: any = {};
	private _individualMinimum: number = 0;
	private _individualMaximum: number = 0;
	private _zBounds: Dictionary$2<string, Tuple$2<number, number>> = new Dictionary$2<string, Tuple$2<number, number>>(String_$type, (<any>Tuple$2).$type.specialize(Number_$type, Number_$type), 0);
	private _zWaiters: Dictionary$2<string, List$1<() => void>> = new Dictionary$2<string, List$1<() => void>>(String_$type, (<any>List$1).$type.specialize(Delegate_$type), 0);
	private _globalMinLat: number = 0;
	private _globalMinLon: number = 0;
	private _globalMaxLat: number = 0;
	private _globalMaxLon: number = 0;
	private _calculatingGlobals: boolean = false;
	private _globalWaiters: List$1<() => void> = new List$1<() => void>(Delegate_$type, 0);
	private getTile1(z: number, x: number, y: number, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, existingImage: HTMLImageElement, testRun: boolean): void {
		Debug.writeLine("getting tile z: " + z + ", x: " + x + ", y: " + y);
		let globalMin: number = NaN;
		let globalMax: number = NaN;
		if (!testRun && this.useGlobalMinMax && (isNaN_(this._globalMin) || isNaN_(this._globalMax))) {
			let calculatingGlobals: boolean = false;
			if ((isNaN_(this._globalMin) || isNaN_(this._globalMax)) && !this._calculatingGlobals) {
				calculatingGlobals = true;
				this._calculatingGlobals = true;
			} else {
				this._globalWaiters.add(() => this.continueTileGeneration(z, x, y, testRun, globalMax, globalMin, onCreated, onCreating, zoomChanging, existingImage));
				return;
			}
			if (calculatingGlobals) {
				let level0Min: number = 1.7976931348623157E+308;
				let level0Max: number = -1.7976931348623157E+308;
				let level0MinX: number = 0;
				let level0MinY: number = 0;
				let level0MaxX: number = 0;
				let level0MaxY: number = 0;
				this.getTile1(0, 0, 0, (o: any, e: TileImageCreatedEventArgs) => {
					let ev = <HeatTileImageCreatedEventArgs>e;
					level0Min = ev.globalMinimumValue;
					level0Max = ev.globalMaximumValue;
					level0MinX = ev.globalMinimumValueLongitude;
					level0MinY = ev.globalMinimumValueLatitude;
					level0MaxX = ev.globalMaximumValueLongitude;
					level0MaxY = ev.globalMaximumValueLatitude;
					let level0Window = new Rect(0, 0, 0, 1, 1);
					let level0Viewport = this._tileViewport;
					globalMin = level0Min;
					globalMax = level0Max;
					let toContinue: List$1<() => void> = new List$1<() => void>(Delegate_$type, 0);
					this._globalMin = globalMin;
					this._globalMax = globalMax;
					this._globalMinLat = level0MinY;
					this._globalMinLon = level0MinX;
					this._globalMaxLat = level0MaxY;
					this._globalMaxLon = level0MaxX;
					for (let i = 0; i < this._globalWaiters.count; i++) {
						toContinue.add(this._globalWaiters._inner[i]);
					}
					this._globalWaiters.clear();
					this.continueTileGeneration(z, x, y, testRun, globalMax, globalMin, onCreated, onCreating, zoomChanging, existingImage);
					for (let i1 = 0; i1 < toContinue.count; i1++) {
						toContinue._inner[i1]();
					}
				}, (o: any, e: TileImageCreatedEventArgs) => {
				}, (o: any, e: TileImageZoomChangingEventArgs) => {
				}, existingImage, true);
				return;
			} else {
				globalMin = this._globalMin;
				globalMax = this._globalMax;
			}
		} else {
			globalMin = this._globalMin;
			globalMax = this._globalMax;
		}
		this.continueTileGeneration(z, x, y, testRun, globalMax, globalMin, onCreated, onCreating, zoomChanging, existingImage);
	}
	cancelTile(z: number, x: number, y: number): void {
		this._manager.cancelTile(z, x, y);
	}
	private _sentNewData: boolean = false;
	private continueTileGeneration(z: number, x: number, y: number, testRun: boolean, globalMax: number, globalMin: number, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, existingImage: HTMLImageElement): void {
		this.continueWhenZLevelReady(z, x, y, testRun, zoomChanging, () => {
			if (this.useGlobalMinMaxAdjustedForZoom && !testRun) {
				if (z > 0 && this._zBounds.containsKey(z.toString())) {
					let zBounds = this._zBounds.item(z.toString());
					globalMax = zBounds.item1;
					globalMin = zBounds.item2;
				}
			}
			let window = this.calculateWindow(z, x, y);
			let settings: TileWorkSettings = new TileWorkSettings();
			settings.window = window;
			settings.z = z;
			settings.x = x;
			settings.y = y;
			settings.globalMinimum = globalMin;
			settings.globalMaximum = globalMax;
			settings.useGlobalMinMax = this.useGlobalMinMax;
			settings.minimumValue = this.minimumValue;
			settings.maximumValue = this.maximumValue;
			settings.useLogarithmicScale = this.useLogarithmicScale;
			settings.logarithmBase = this.logarithmBase;
			if (settings.logarithmBase <= 0) {
				settings.logarithmBase = 10;
			}
			settings.tileViewport = this._tileViewport;
			settings.maximumColor = this.maximumColor;
			settings.minimumColor = this.minimumColor;
			settings.scaler = this._scaler;
			settings.values = this._values;
			settings.blurRadius = this.blurRadius;
			if (settings.blurRadius <= 0) {
				settings.blurRadius = 1;
			}
			settings.useBlurRadiusAdjustedForZoom = this.useBlurRadiusAdjustedForZoom;
			settings.maxBlurRadius = this.maxBlurRadius;
			if (settings.maxBlurRadius <= 0) {
				settings.maxBlurRadius = 1;
			}
			settings.values = this.values;
			settings.scaleColors = this.scaleColors;
			settings.scaleColorOffsets = this.scaleColorOffsets;
			settings.minimumVisibleLatitude = this._scaler.getMinimumVisibleLatitude(window, this._tileViewport);
			settings.maximumVisibleLatitude = this._scaler.getMaximumVisibleLatitude(window, this._tileViewport);
			settings.minimumVisibleLongitude = this._scaler.getMinimumVisibleLongitude(window, this._tileViewport);
			settings.maximumVisibleLongitude = this._scaler.getMaximumVisibleLongitude(window, this._tileViewport);
			settings.yValues = this._yValues;
			settings.xValues = this._xValues;
			if (this._values == null && this._yValues != null) {
				this._values = <number[]>new Array(this._yValues.length);
				for (let i = 0; i < this._yValues.length; i++) {
					this._values[i] = 1;
				}
				settings.values = this._values;
			}
			if (!this._sentNewData) {
				this._sentNewData = true;
				settings.isNewData = true;
			}
			settings.image = existingImage;
			settings.testRun = testRun;
			this._manager.getTile(settings, (o: any, e: TileImageCreatedEventArgs) => {
				e.url = this.getDataUrl(e.imageData);
				e.imageData = this.prepareData(e.imageData);
				onCreated(this, e);
			}, onCreating);
		});
	}
	private continueWhenZLevelReady(z: number, x: number, y: number, testRun: boolean, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, action: () => void): void {
		let needZChange: boolean = false;
		needZChange = this._previousZ != z;
		if (!needZChange || testRun) {
			action();
			return;
		}
		let actImmediately: boolean = false;
		let storingZBounds: boolean = false;
		if (z != this._previousZ) {
			if (this._zBounds.containsKey(z.toString()) && !isNaN_(this._zBounds.item(z.toString()).item1) && !isNaN_(this._zBounds.item(z.toString()).item2)) {
				this._previousZ = z;
				zoomChanging(this, ((() => {
					let $ret = new TileImageZoomChangingEventArgs();
					$ret.z = z;
					$ret.x = x;
					$ret.y = y;
					return $ret;
				})()));
				actImmediately = true;
			} else if (this._zBounds.containsKey(z.toString())) {
				if (z > 0 && this.useGlobalMinMaxAdjustedForZoom) {
					let waiters: List$1<() => void>;
					if (this._zWaiters.containsKey(z.toString())) {
						waiters = this._zWaiters.item(z.toString());
					} else {
						waiters = new List$1<() => void>(Delegate_$type, 0);
						this._zWaiters.addItem(z.toString(), waiters);
					}
					waiters.add(action);
				}
			} else {
				if (z > 0 && this.useGlobalMinMaxAdjustedForZoom) {
					this._zBounds.addItem(z.toString(), new Tuple$2<number, number>(Number_$type, Number_$type, NaN, NaN));
					storingZBounds = true;
				}
			}
		}
		if (storingZBounds) {
			if (z > 0 && this.useGlobalMinMaxAdjustedForZoom) {
				this.storeZBounds(z, action);
			}
		}
		if (actImmediately) {
			action();
		}
	}
	private getDataUrl(imageData: number[]): string {
		if (imageData == null) {
			return null;
		}
		let ele: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
		ele.setAttribute("width", "256");
		ele.setAttribute("height", "256");
		let context = <CanvasRenderingContext2D>ele.getContext("2d");
		let data = context.getImageData(0, 0, 256, 256);
		let imgData = data.data;
		let len = imgData.length / 4;
		for (let i = 0; i < len; i++) {
			let a = imageData[i * 4];
			let r = imageData[i * 4 + 1];
			let g = imageData[i * 4 + 2];
			let b = imageData[i * 4 + 3];
			imgData[i * 4] = r;
			imgData[i * 4 + 1] = g;
			imgData[i * 4 + 2] = b;
			imgData[i * 4 + 3] = a;
		}
		context.putImageData(data, 0, 0);
		let ele_ = ele;
		return <string>(ele_.toDataURL());
	}
	private prepareData(imageData: number[]): number[] {
		if (imageData == null) {
			return null;
		}
		return imageData;
	}
	private storeZBounds(z: number, action: () => void): void {
		let minTileX: number = 0;
		let minTileY: number = 0;
		let maxTileX: number = 0;
		let maxTileY: number = 0;
		let currViewport = new Rect(0, 0, 0, 256 * Math.pow(2, z), 256 * Math.pow(2, z));
		let fullWindow = new Rect(0, 0, 0, 1, 1);
		let pixelMaxX = this._scaler.scaleLongitude(this._globalMaxLon, fullWindow, currViewport);
		let pixelMaxY = this._scaler.scaleLatitude(this._globalMaxLat, fullWindow, currViewport);
		let pixelMinX = this._scaler.scaleLongitude(this._globalMinLon, fullWindow, currViewport);
		let pixelMinY = this._scaler.scaleLatitude(this._globalMinLat, fullWindow, currViewport);
		minTileX = <number>truncate(Math.floor(pixelMinX / 256));
		minTileY = <number>truncate(Math.floor(pixelMinY / 256));
		maxTileX = <number>truncate(Math.floor(pixelMaxX / 256));
		maxTileY = <number>truncate(Math.floor(pixelMaxY / 256));
		let zGlobalMin: number = 0;
		let zGlobalMax: number = 0;
		this.getTile1(z, minTileX, minTileY, (o: any, e: TileImageCreatedEventArgs) => {
			let ev = <HeatTileImageCreatedEventArgs>e;
			zGlobalMin = ev.globalMinimumValue;
			zGlobalMax = ev.globalMaximumValue;
			if (maxTileX != minTileX && maxTileY != minTileY) {
				this.getTile1(z, maxTileX, maxTileY, (o1: any, e1: TileImageCreatedEventArgs) => {
					let e1v = <HeatTileImageCreatedEventArgs>e1;
					zGlobalMax = e1v.globalMaximumValue;
					this.updateZBounds(z, zGlobalMax, zGlobalMin, action);
				}, (o1: any, e1: TileImageCreatedEventArgs) => {
				}, (o1: any, e1: TileImageZoomChangingEventArgs) => {
				}, null, true);
			} else {
				this.updateZBounds(z, zGlobalMax, zGlobalMin, action);
			}
		}, (o: any, e: TileImageCreatedEventArgs) => {
		}, (o: any, e: TileImageZoomChangingEventArgs) => {
		}, null, true);
	}
	private updateZBounds(z: number, zGlobalMax: number, zGlobalMin: number, action: () => void): void {
		if (zGlobalMax < this._individualMaximum) {
			zGlobalMax = this._individualMaximum;
		}
		if (isNaN_(zGlobalMin) || zGlobalMin > this._individualMinimum) {
			zGlobalMin = this._individualMinimum;
		}
		let toContinue: List$1<() => void> = new List$1<() => void>(Delegate_$type, 0);
		this._zBounds.item(z.toString(), new Tuple$2<number, number>(Number_$type, Number_$type, zGlobalMax, zGlobalMin));
		if (this._zWaiters.containsKey(z.toString())) {
			let waiters = this._zWaiters.item(z.toString());
			for (let i = 0; i < waiters.count; i++) {
				toContinue.add(waiters._inner[i]);
			}
		}
		this._zWaiters.removeItem(z.toString());
		this._previousZ = z;
		action();
		for (let i1 = 0; i1 < toContinue.count; i1++) {
			toContinue._inner[i1]();
		}
	}
	private calculateWindow(z: number, x: number, y: number): Rect {
		let breadth: number = <number>truncate(Math.pow(2, z)) * 256;
		let left = (x * 256) / <number>breadth;
		let top = (y * 256) / <number>breadth;
		let width = 256 / <number>breadth;
		let height = 256 / <number>breadth;
		return new Rect(0, left, top, width, height);
	}
	private onDataChanged(): void {
		let max: number = -1.7976931348623157E+308;
		let min: number = 1.7976931348623157E+308;
		if (this._values != null) {
			for (let i = 0; i < this._values.length; i++) {
				let curr: number = this._values[i];
				max = curr > max ? curr : max;
				min = curr < min ? curr : min;
			}
		}
		let filterMinimumValue: number = this._individualMinimum = min * 0.01;
		this._individualMaximum = max;
		this._sentNewData = false;
	}
}


